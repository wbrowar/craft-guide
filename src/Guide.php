<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide;

use craft\events\RegisterTemplateRootsEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\fields\data\ColorData;
use craft\helpers\FileHelper;
use craft\helpers\UrlHelper;
use craft\services\UserPermissions;
use craft\web\View;
use wbrowar\guide\assetbundles\Guide\GuideAsset;
use wbrowar\guide\services\Guide as GuideService;
use wbrowar\guide\services\GuideComponents as GuideComponentsService;
use wbrowar\guide\services\Organizer as OrganizerService;
use wbrowar\guide\variables\GuideVariable;
use wbrowar\guide\twigextensions\GuideTwigExtension;
use wbrowar\guide\models\Settings;
use wbrowar\guide\utilities\ExportGuideTemplate as ExportGuideTemplateUtility;
use wbrowar\guide\widgets\Guide as GuideWidget;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\UrlManager;
use craft\services\Utilities;
use craft\web\twig\variables\CraftVariable;
use craft\services\Dashboard;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;

use yii\base\Event;

/**
 * Class Guide
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 *
 * @property  GuideService $guide
 * @property  OrganizerService $organizer
 * @property  GuideComponentsService $guideComponents
 */
class Guide extends Plugin
{
    // Constants
    // =========================================================================
    const EDITION_LITE = 'lite';
    const EDITION_PRO = 'pro';

    // Static Properties
    // =========================================================================

    /**
     * @var bool
     */
    public static $pro;

    /**
     * @var Guide
     */
    public static $plugin;

    /**
     * @var Settings
     */
    public static $settings;

    /**
     * @var array
     */
    public static $userOperations;

    /**
     * @var View
     */
    public static $view;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '2.0.0';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;
        self::$pro = self::$plugin->is(Guide::EDITION_PRO);
        self::$settings = $this->getSettings();
        self::$userOperations = $this->_getUserOperations();
        self::$view = Craft::$app->getView();

        // Add our services
        $this->setComponents([
            'guide' => 'wbrowar\guide\services\Guide',
            'guideComponents' => 'wbrowar\guide\services\GuideComponents',
            'organizer' => 'wbrowar\guide\services\Organizer',
        ]);

        if (self::$view->getTemplateMode() === View::TEMPLATE_MODE_CP) {
            // Add in our asset bundle
            if (!Craft::$app->getRequest()->isConsoleRequest) {
                self::$view->registerAssetBundle(GuideAsset::class);
            }

            // Add in our Twig extensions
            self::$view->registerTwigExtension(new GuideTwigExtension());

            // Add our variables
            Event::on(
                CraftVariable::class,
                CraftVariable::EVENT_INIT,
                function (Event $event) {
                    /** @var CraftVariable $variable */
                    $variable = $event->sender;
                    $variable->set('guide', GuideVariable::class);
                }
            );

            // Insert JS into CP
            Event::on(View::class, View::EVENT_BEFORE_RENDER_TEMPLATE, function() {
                $assetDist = self::$view->getAssetManager()->getPublishedUrl('@wbrowar/guide/assetbundles/guide/dist');
                $js = 'window.WBGuideAssets = "' . $assetDist . '";';
                $js .= 'window.WBJsDevMode = window.WBJsDevMode || ' . (Craft::$app->getConfig()->getGeneral()->devMode ? 'true' : 'false') . ';';
                self::$view->registerJs($js, 1);

                if (self::$pro && (self::$settings['rebrand'] ?? false)) {
                    self::$view->registerCss($this->_generateCustomCssFromRebrand(self::$settings['rebrand']));
                }
            });

            // Add template routes
            Event::on(
                View::class,
                View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
                function(RegisterTemplateRootsEvent $event) {
                    if ($this->getSettings()->templatePath ?? false) {
                        $oldMode = self::$view->getTemplateMode();
                        self::$view->setTemplateMode(self::$view::TEMPLATE_MODE_SITE);
                        $templatePath = self::$view->getTemplatesPath() . '/' . $this->getSettings()->templatePath . '/';
                        self::$view->setTemplateMode($oldMode);
                        $event->roots['guide_template_path'] = $templatePath;
                    }
                }
            );

            // Add CP URLs
            Event::on(
                UrlManager::class,
                UrlManager::EVENT_REGISTER_CP_URL_RULES,
                function (RegisterUrlRulesEvent $event) {
                    $event->rules['guide'] = ['template' => 'guide/index', 'variables' => ['organizer' => self::$plugin->organizer->getOrganizer(), 'settings' => self::$settings, 'userOperations' => self::$userOperations]];
                    $event->rules['guide/welcome'] = ['template' => 'guide/welcome', 'variables' => ['settings' => self::$settings]];
                    $event->rules['guide/page/<slug:(.*)>'] = ['template' => 'guide/page', 'variables' => ['organizer' => self::$plugin->organizer->getOrganizer(), 'settings' => self::$settings, 'userOperations' => self::$userOperations]];
                    $event->rules['guide/settings/general'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'selectedTab' => 'general', 'settings' => self::$settings]];
                    $event->rules['guide/settings/variables'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'selectedTab' => 'variables', 'settings' => self::$settings]];

                    if (self::$userOperations['editGuides']) {
                        $editVariables = [
                            'assetComponents' => self::$plugin->guideComponents->getAssetComponents(),
                            'components' => self::$plugin->guideComponents->getComponentsList('settings'),
                            'proEdition' => self::$pro,
                            'settings' => self::$settings,
                            'templates' => $this->_getTemplatesFromUserTemplatePath(),
                            'userOperations' => self::$userOperations,
                        ];

                        $editVariables['title'] = 'New Guide';
                        $event->rules['guide/new'] = ['template' => 'guide/edit', 'variables' => $editVariables];

                        $editVariables['title'] = 'Edit Guide';
                        $event->rules['guide/edit/<guideId:\d{1,}>'] = ['template' => 'guide/edit', 'variables' => $editVariables];
                    }
                    if (self::$userOperations['deleteGuides']) {
                        $event->rules['guide/delete/<guideId:\d{1,}>'] = ['template' => 'guide/delete', 'variables' => ['userOperations' => self::$userOperations]];
                    }
                    if (self::$userOperations['useOrganizer']) {
                        $event->rules['guide/organizer'] = ['template' => 'guide/organizer', 'variables' => ['organizerConfig' => self::$plugin->organizer->getOrganizerConfig(), 'settings' => self::$settings, 'userOperations' => self::$userOperations]];
                    }

                    if (self::$pro) {
                        $event->rules['guide/settings/components'] = ['template' => 'guide/settings', 'variables' => ['components' => self::$plugin->guideComponents->getComponentsList(), 'proEdition' => self::$pro, 'selectedTab' => 'components', 'settings' => self::$settings]];
                        $event->rules['guide/settings/rebrand'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'selectedTab' => 'rebrand', 'settings' => self::$settings]];
                    }
                }
            );
        }

        // Default events

        // Pro events
        if (self::$pro) {
            // Add custom permissions
            if (Craft::$app->getEdition() > 0) {
                Event::on(UserPermissions::class, UserPermissions::EVENT_REGISTER_PERMISSIONS, function(RegisterUserPermissionsEvent $event) {
                    $event->permissions[Craft::t('guide', 'Guide')] = [
                        'editGuides' => ['label' => Craft::t('guide', 'Edit Guides')],
                        'setAccessPermissions' => ['label' => Craft::t('guide', 'Set Guide Access Permissions')],
                        'deleteGuides' => ['label' => Craft::t('guide', 'Delete Guides')],
                        'useOrganizer' => ['label' => Craft::t('guide', 'Use Organizer')],
                    ];
                });
            }

            // Add CP Buttons
            Craft::$app->view->hook('cp.categories.edit.details', function(&$context) {
                if ($context['category'] ?? false) {
                    // Render sidebar template
                    return self::$view->renderTemplate('guide/sidebar/sidebar', [
                        'guides' => self::$plugin->guide->getGuidesForUser(['parentUid' => $context['category']->group->uid, 'parentType' => 'sidebar']),
                        'settings' => self::$settings,
                        'userOperations' => self::$userOperations,
                    ]);
                }

                return false;
            });
            Craft::$app->view->hook('cp.entries.edit.details', function(&$context) {
                if ($context['entry'] ?? false) {
                    // Render sidebar template
                    return self::$view->renderTemplate('guide/sidebar/sidebar', [
                        'guides' => self::$plugin->guide->getGuidesForUser(['parentUid' => $context['entry']->section->uid, 'parentType' => 'sidebar']),
                        'settings' => self::$settings,
                        'userOperations' => self::$userOperations,
                    ]);
                }

                return false;
            });
            Craft::$app->view->hook('cp.users.edit.details', function(&$context) {
                if ($context['user'] ?? false) {
                    // Render sidebar template
                    return self::$view->renderTemplate('guide/sidebar/sidebar', [
                        'guides' => self::$plugin->guide->getGuidesForUser(['parentType' => 'user']),
                        'settings' => self::$settings,
                        'userOperations' => self::$userOperations,
                    ]);
                }

                return false;
            });

            // add modal template to footer
            Event::on(View::class, View::EVENT_END_BODY, function(Event $event) {
//                Craft::dd(Craft::$app->controller->actionParams);
                if (Craft::$app->controller->actionParams['entryId'] ?? false) {
                    $element = Craft::$app->getSections()->getSectionByHandle(Craft::$app->controller->actionParams['section']);

                    if ($element ?? false) {
                        $guides = self::$plugin->guide->getGuides([
                            'parentType' => 'sidebar',
                            'parentUid' => $element->uid,
                        ]);
                    }
                } else if (Craft::$app->controller->actionParams['categoryId'] ?? false) {
                    $element = Craft::$app->getCategories()->getGroupByHandle(Craft::$app->controller->actionParams['groupHandle']);
                    
                    if ($element ?? false) {
                        $guides = self::$plugin->guide->getGuides([
                            'parentType' => 'sidebar',
                            'parentUid' => $element->uid,
                        ]);
                    }
                } else if (Craft::$app->controller->actionParams['userId'] ?? false) {
                    $guides = self::$plugin->guide->getGuides([
                        'parentType' => 'user',
                    ]);
                }

                if ($guides ?? false) {
                    echo self::$view->renderTemplate('guide/_partials/render_guide_modals', ['guides' => $guides]);
                }
            });

            // Add our utilities
            Event::on(
                Utilities::class,
                Utilities::EVENT_REGISTER_UTILITY_TYPES,
                function (RegisterComponentTypesEvent $event) {
                    $event->types[] = ExportGuideTemplateUtility::class;
                }
            );

            // Add our widgets
            Event::on(
                Dashboard::class,
                Dashboard::EVENT_REGISTER_WIDGET_TYPES,
                function (RegisterComponentTypesEvent $event) {
                    $event->types[] = GuideWidget::class;
                }
            );
        }

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                    // Send them to our welcome screen
                    $request = Craft::$app->getRequest();
                    if ($request->isCpRequest) {
                        Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('guide/welcome'))->send();
                    }
                }
            }
        );

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
        $navItem = parent::getCpNavItem();
        $user = Craft::$app->getUser()->getIdentity();

        if ((self::$settings->templatePath ?? false) && (self::$settings->assetVolume ?? false)) {
            $navItem['subnav'] = [
                'home' => ['label' => 'Guide', 'url' => 'guide'],
            ];
        }

        if (self::$userOperations['useOrganizer']) {
            $navItem['subnav']['organizer'] = ['label' => 'Organizer', 'url' => 'guide/organizer'];
        }

        if ($user->admin && Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $navItem['subnav']['settings'] = ['label' => 'Settings', 'url' => 'guide/settings/general'];
        }

        return $navItem;
    }

    /**
     * Set plugin editions
     */

    public static function editions(): array
    {
        return [
            self::EDITION_LITE,
            self::EDITION_PRO,
        ];
    }

    // Protected Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsResponse()
    {
        // Just redirect to the plugin settings page
        Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('guide/settings/general'));
    }

    // Private Methods
    // =========================================================================

    /**
     * @return string
     */
    private function _generateCustomCssFromRebrand($rebrand):string
    {
        $css = '';

        $properties = [
            'gridGap' => 'grid-gap',
            'headerIconWidth' => 'header-icon-width',
            'headerIconHeight' => 'header-icon-height',
            'maxWidthText' => 'max-width-text',
        ];

        foreach ($properties as $key => $property) {
            if ($rebrand[$key] ?? false) {
                $css .= '--' . $property . ':' . $rebrand[$key] . ';';
            }
        }

        $colors = [
            'anchor' => 'anchor',
            'anchorHover' => 'anchor_hover',
            'border' => 'border',
            'buttonBg' => 'button_bg',
            'buttonText' => 'button_text',
            'codeBg' => 'code_bg',
            'codeText' => 'code_text',
            'contentBg' => 'content_bg',
            'contentHeader' => 'content_header',
            'contentText' => 'content_text',
            'headerBg' => 'header_bg',
            'headerText' => 'header_text',
            'pageSidebarBg' => 'page_sidebar_bg',
            'pageSidebarButtonBg' => 'page_sidebar_button_bg',
            'pageSidebarButtonText' => 'page_sidebar_button_text',
            'pageSidebarButtonTextHover' => 'page_sidebar_button_text_hover',
            'tableHeadBg' => 'table_head_bg',
            'tableHeadText' => 'table_head_text',
            'tip' => 'tip',
        ];

        foreach ($colors as $key => $color) {
            if ($rebrand[$key] ?? false) {
                $colorData = new ColorData($rebrand[$key]);
                $css .= '--color-' . $color . '-rgb:' . $colorData->getRed() . ',' . $colorData->getGreen() . ',' . $colorData->getBlue() . ';';
            }
        }

        $css = '.guide_styles{' . $css . '}';

        if ($rebrand['customCss']) {
            $css .= $rebrand['customCss'];
        }

        return $css;
    }

    /**
     * @return array
     */
    private function _getTemplatesFromUserTemplatePath():array
    {
        $templates = ['__none__' => 'Select a Template'];

        $oldMode = Craft::$app->getView()->getTemplateMode();
        Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_SITE);
        $userTemplatePath = Craft::$app->getView()->getTemplatesPath() . '/' . self::$settings->templatePath;

        if (is_dir($userTemplatePath) ?? false) {
            $filesInDirectory = FileHelper::findFiles(Craft::$app->getView()->getTemplatesPath() . '/' . self::$settings->templatePath, ['only' => ['*.html', '*.md', '*.twig']]);

            foreach ($filesInDirectory as $item) {
                $template = str_replace($userTemplatePath . '/', '', $item);
                $templates[$template] = $template;
            }
        }

        Craft::$app->getView()->setTemplateMode($oldMode);

        return $templates;
    }

    /**
     * @return array
     */
    private function _getUserOperations():array
    {
        $operations = [];

        if (Craft::$app->getUser()->getIdentity()) {
            $user = Craft::$app->getUser()->getIdentity();

            $operations['editGuides'] = $user->admin || $user->can('editGuides');
            $operations['setAccessPermissions'] = $user->admin || $user->can('setAccessPermissions');
            $operations['deleteGuides'] = $user->admin || $user->can('deleteGuides');
            $operations['useOrganizer'] = $user->admin || $user->can('useOrganizer');
        } else {
            $operations['editGuides'] = false;
            $operations['setAccessPermissions'] = false;
            $operations['deleteGuides'] = false;
            $operations['useOrganizer'] = false;
        }

        return $operations;
    }
}
