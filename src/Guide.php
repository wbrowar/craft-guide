<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide;

use craft\elements\Entry;
use craft\events\PluginEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\StringHelper;
use craft\services\UserPermissions;
use wbrowar\guide\services\GuideService as GuideServiceService;
use wbrowar\guide\twigextensions\GuideTwigExtension;
use wbrowar\guide\models\Settings;
use wbrowar\guide\widgets\AdminsLog;
use wbrowar\guide\widgets\GuideWidget as GuideWidgetWidget;
use wbrowar\guide\assetbundles\guide\GuideAsset;
use wbrowar\adminbar\events\AdminBarRenderEvent;
use wbrowar\adminbar\services\Bar;

use Craft;
use craft\base\Plugin;
use craft\web\UrlManager;
use craft\web\View;
use craft\services\Fields;
use craft\services\Dashboard;
use craft\services\Plugins;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;

use wbrowar\guide\widgets\WelcomeWidget;
use yii\base\Event;

/**
 * Craft plugins are very much like little applications in and of themselves. We’ve made
 * it as simple as we can, but the training wheels are off. A little prior knowledge is
 * going to be required to write a plugin.
 *
 * For the purposes of the plugin docs, we’re going to assume that you know PHP and SQL,
 * as well as some semi-advanced concepts like object-oriented programming and PHP namespaces.
 *
 * https://craftcms.com/docs/plugins/introduction
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 *
 * @property  GuideServiceService $guide
 * @property  Settings $settings
 * @method    Settings getSettings()
 */
class Guide extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this plugin class so that it can be accessed via
     * Guide::$plugin
     *
     * @var Guide
     */
    public static $plugin;

    public $schemaVersion = '1.1.4';

    public $adminBarWidgets = [[
        'description' => 'Display the Content Guide for the current entry.',
        'handle' => 'guide-for-entry',
        'iconPath' => 'icon-mask.svg',
        'layout' => 'center',
        'name' => 'Content Guide',
        'template' => 'guide/adminbar_guide_for_entry',
    ]];

    // Public Methods
    // =========================================================================

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * Guide::$plugin
     *
     * Called after the plugin class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        // Add in our Twig extensions
        Craft::$app->view->registerTwigExtension(new GuideTwigExtension());

        // Add our CSS
        $view = Craft::$app->getView();

        // Add custom permissions
        if (Craft::$app->getEdition() > 0) {
            Event::on(UserPermissions::class, UserPermissions::EVENT_REGISTER_PERMISSIONS, function(RegisterUserPermissionsEvent $event) {
                $event->permissions[\Craft::t('guide', 'Guides')] = [
                    'editGuides' => ['label' => \Craft::t('guide', 'Edit Guides')],
                    'deleteGuides' => ['label' => \Craft::t('guide', 'Delete Guides')],
                ];
            });
        }

        Event::on( Plugins::class, Plugins::EVENT_BEFORE_SAVE_PLUGIN_SETTINGS, function(PluginEvent $event) {
            if ($event->plugin->getHandle() === 'guide') {
                //$settings = $event->plugin->getSettings();
                $params = Craft::$app->request->getBodyParams();
                $settingsFromPost = $params['settings'] ?? null;
                $newSettings = [];

                // Validate each variable
                $vars = $settingsFromPost['customVars'] ?? null;
                $customVars = [];
                if ($vars ?? false) {
                    for ($i=0; $i<count($vars); $i++) {
                        if (($vars[$i]['varKey'] ?? false) && ($vars[$i]['varValue'] ?? false)) {
                            if ($vars[$i]['varType'] === 'password') {
                                // if the variable is a password, encrypt it
                                $vars[$i]['varValue'] = StringHelper::encenc($vars[$i]['varValue']);
                            }

                            // add variable to new customVars array
                            $customVars[] = $vars[$i];
                        }
                    }
                    $newSettings['customVars'] = $customVars;
                }

                // Validate nav items
                $nav = $settingsFromPost['guideNav'] ?? null;
                $navCount = 0;

                if ($nav ?? false) {
                    for ($i=0; $i<count($nav); $i++) {
                        if (!empty($nav[$i]['id'])) {
                            $navCount++;
                        }
                    }
                    $guideNav = $navCount > 0 ? $settingsFromPost['guideNav'] : [];
                    $newSettings['guideNav'] = $guideNav;
                }

                // add all custom variables back in to plugin settings
                if (!empty($newSettings)) {
                    Guide::$plugin->setSettings($newSettings);
                }
            }
        });

        if (class_exists(Bar::class)) {
            Event::on(Bar::class, Bar::EVENT_ADMIN_BAR_BEFORE_RENDER, function(AdminBarRenderEvent $event) {
                // Get the entry from the $event var
                $entry = $event->entry;

                if ($entry) {
                    // Check for a Content Guide for this entry
                    $total = Guide::$plugin->guide->getUserGuides([
                        'sectionId' => $entry->sectionId,
                        'typeId' => $entry->sectionId,
                    ], 'count');

                    // If no guide exists, disable the widget
                    if ($total < 1) {
                        $this->adminBarWidgets[0]['enabled'] = false;
                    }
                }
            });
        }

        if ($view->getTemplateMode() === View::TEMPLATE_MODE_CP) {
            Event::on(View::class, View::EVENT_BEFORE_RENDER_TEMPLATE, function() {
                $view = Craft::$app->getView();
                $view->registerAssetBundle(GuideAsset::class);
                $view->registerCss($this->getSettings()->customCss);
            });

            // Register our CP routes
            Event::on(
                UrlManager::class,
                UrlManager::EVENT_REGISTER_CP_URL_RULES,
                function (RegisterUrlRulesEvent $event) {
                    $settings = $this->getSettings();

                    $userCanDelete = Guide::$plugin->guide->userCanDeleteUserGuides();
                    $userCanEdit = Guide::$plugin->guide->userCanEditUserGuides();

                    // Check to see if user's template exists
                    $oldMode = Craft::$app->view->getTemplateMode();
                    Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
                    if (Craft::$app->view->doesTemplateExist($settings->guideTemplatePath)) {
                        $guideTemplatePath = Craft::$app->view->resolveTemplate($settings->guideTemplatePath);

                        $guideTemplatePathAsString = $this->_getTemplateFileAsString($guideTemplatePath);
                    } else {
                        $guideTemplatePathAsString = null;
                    }

                    // Register CP Section templates
                    $guideNav = $settings->guideNav;
                    foreach ($guideNav as $key => $item) {
                        $navItemVars = ['pageContent' => '', 'settings' => $settings, 'templatePath' => $item['template'] ?? null, 'title' => $item['title'], 'userCanEdit' => $userCanEdit, 'userCanDelete' => $userCanDelete];

                        if ($item['userGuideId'] ?? false) {
                            $navItemVars['userGuideId'] = $item['userGuideId'];
                        } else if ($item['template'] ?? false) {
                            $templatePath = Craft::$app->view->resolveTemplate($item['template']);
                            $navItemVars['pageContent'] = $this->_getTemplateFileAsString($templatePath);
                            $navItemPageContent = $navItemVars['pageContent'];
                        }

                        $event->rules['guide/page/' . $item['id']] = ['template' => 'guide/home', 'variables' => $navItemVars];
                        $guideNav[$key]['pageContent'] = $navItemPageContent ?? null;
                    }

                    // Register CP Section home templates
                    $event->rules['guide/home'] = ['template' => 'guide/home', 'variables' => ['pageContent' => $guideTemplatePathAsString, 'settings' => $settings, 'templatePath' => $settings->guideTemplatePath, 'title' => 'Guide', 'guideNav' => $guideNav, 'userCanEdit' => $userCanEdit]];
                    $event->rules['guide/components'] = ['template' => 'guide/home', 'variables' => ['settings' => $settings, 'title' => 'Guide Components', 'guideNav' => $guideNav]];
                    $event->rules['guide/new'] = ['template' => 'guide/edit', 'variables' => ['settings' => $settings, 'title' => 'New User Guide', 'guideNav' => $guideNav, 'userCanEdit' => $userCanEdit, 'userCanDelete' => $userCanDelete]];
                    $event->rules['guide/new/<templatePath:(.*)>'] = ['template' => 'guide/edit', 'variables' => ['settings' => $settings, 'title' => 'New User Guide', 'guideNav' => $guideNav, 'userCanEdit' => $userCanEdit, 'userCanDelete' => $userCanDelete]];
                    $event->rules['guide/edit/<guideId:\d{1,}>'] = ['template' => 'guide/edit', 'variables' => ['settings' => $settings, 'title' => 'Edit User Guide', 'guideNav' => $guideNav, 'userCanEdit' => $userCanEdit, 'userCanDelete' => $userCanDelete]];
                    $event->rules['guide/delete/<guideId:\d{1,}>'] = ['template' => 'guide/delete', 'variables' => ['userCanEdit' => $userCanEdit, 'userCanDelete' => $userCanDelete]];
                    $event->rules['guide/admins-log'] = ['template' => 'guide/admins_log_settings', 'variables' => ['settings' => $settings, 'title' => 'Admin’s Log']];
                    $event->rules['guide/welcome-widget'] = ['template' => 'guide/welcome_widget_settings', 'variables' => ['settings' => $settings, 'title' => 'Welcome Widget']];

                    Craft::$app->view->setTemplateMode($oldMode);
                }
            );

            // Register our fields
            Event::on(
                Fields::class,
                Fields::EVENT_REGISTER_FIELD_TYPES,
                function (RegisterComponentTypesEvent $event) {
                }
            );

            // Register our widgets
            Event::on(
                Dashboard::class,
                Dashboard::EVENT_REGISTER_WIDGET_TYPES,
                function (RegisterComponentTypesEvent $event) {
                    $event->types[] = AdminsLog::class;
                    $event->types[] = GuideWidgetWidget::class;
                    $event->types[] = WelcomeWidget::class;
                }
            );

            // Add CP Buttons
            Craft::$app->view->hook('cp.entries.edit.details', function(&$context) {
                if ($context['entry'] ?? false) {
                    // return sidebar template
                    return Guide::$plugin->guide->renderUserGuideTemplate('guide/_user_guide/user_guide_sidebar', $context['entry']);
                }

                return false;
            });

            // add modal template to footer
            Event::on(View::class, View::EVENT_END_BODY, function(Event $event) {
                $id = Craft::$app->controller->actionParams['entryId'] ?? null;

                if ($id) {
                    $entry = Entry::find()
                        ->id($id)
                        ->status(null)
                        ->one();

                    echo Guide::$plugin->guide->renderUserGuideTemplate('guide/_user_guide/user_guide_modal', $entry);
                }
            });
        }



        /**
         * Logging in Craft involves using one of the following methods:
         *
         * Craft::trace(): record a message to trace how a piece of code runs. This is mainly for development use.
         * Craft::info(): record a message that conveys some useful information.
         * Craft::warning(): record a warning message that indicates something unexpected has happened.
         * Craft::error(): record a fatal error that should be investigated as soon as possible.
         *
         * Unless `devMode` is on, only Craft::warning() & Craft::error() will log to `craft/storage/logs/web.log`
         *
         * It's recommended that you pass in the magic constant `__METHOD__` as the second parameter, which sets
         * the category to the method (prefixed with the fully qualified class name) where the constant appears.
         *
         * To enable the Yii debug toolbar, go to your user account in the AdminCP and check the
         * [] Show the debug toolbar on the front end & [] Show the debug toolbar on the Control Panel
         *
         * http://www.yiiframework.com/doc-2.0/guide-runtime-logging.html
         */
        Craft::info(
            Craft::t(
                'guide',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    public function getCpNavItem()
    {
        // Use the default name & icon, but customize the URL
        $navItem = parent::getCpNavItem();
        $navItem['url'] = 'guide/home';

        $navItem['subnav'] = [
            'home' => ['label' => 'Guide', 'url' => 'guide/home'],
        ];

        if (Craft::$app->getUser()->getIsAdmin() || Craft::$app->getUser()->checkPermission('editGuides')) {
            $navItem['subnav']['components'] = ['label' => 'Guide Components', 'url' => 'guide/components'];
        }
        if (Craft::$app->getUser()->getIsAdmin()) {
            $navItem['subnav']['adminsLogSettings'] = ['label' => 'Admin’s Log', 'url' => 'guide/admins-log'];
            $navItem['subnav']['welcomeWidgetSettings'] = ['label' => 'Welcome Widget', 'url' => 'guide/welcome-widget'];
        }

        return $navItem;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Creates and returns the model used to store the plugin’s settings.
     *
     * @return \craft\base\Model|null
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * Returns the rendered settings HTML, which will be inserted into the content
     * block on the settings page.
     *
     * @return string The rendered settings HTML
     */
    protected function settingsHtml(): string
    {
        $settings = $this->getSettings();

        $newSettings = Guide::$plugin->guide->prepareCustomVarsForSave($settings);
        $settings['customVars'] = $newSettings['customVars'];
        $settings['guideNav'] = $newSettings['guideNav'];

        return Craft::$app->view->renderTemplate(
            'guide/settings',
            [
                'settings' => $this->getSettings(),
            ]
        );
    }

    public function _getTemplateFileAsString($file)
    {
        if (is_readable($file))
        {
            $source = file_get_contents($file);

            return $source;
        }

        return false;
    }
}
