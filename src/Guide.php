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

use wbrowar\guide\services\GuideService as GuideServiceService;
use wbrowar\guide\twigextensions\GuideTwigExtension;
use wbrowar\guide\models\Settings;
use wbrowar\guide\widgets\GuideWidget as GuideWidgetWidget;
use wbrowar\guide\assetbundles\guide\GuideAsset;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\UrlManager;
use craft\web\View;
use craft\services\Fields;
use craft\services\Dashboard;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;

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
 * @property  GuideServiceService $guideService
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

        if ($view->getTemplateMode() === View::TEMPLATE_MODE_CP) {
            $view->registerAssetBundle(GuideAsset::class);
            $view->registerCss($this->getSettings()->customCss);

            // Register our site routes
            Event::on(
                UrlManager::class,
                UrlManager::EVENT_REGISTER_SITE_URL_RULES,
                function (RegisterUrlRulesEvent $event) {
                    $event->rules['siteActionTrigger1'] = 'guide/default';
                }
            );

            // Register our CP routes
            Event::on(
                UrlManager::class,
                UrlManager::EVENT_REGISTER_CP_URL_RULES,
                function (RegisterUrlRulesEvent $event) {
                    $settings = $this->getSettings();

                    // Check to see if user's template exists
                    Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
                    if (Craft::$app->view->doesTemplateExist($settings->guideTemplatePath)) {
                        $guideTemplatePath = Craft::$app->view->resolveTemplate($settings->guideTemplatePath);

                        $guideTemplatePathAsString = $this->_getTemplateFileAsString($guideTemplatePath);
                    } else {
                        $guideTemplatePathAsString = null;
                    }

                    // Register CP Section home templates
                    $event->rules['guide/home'] = ['template' => 'guide/home', 'variables' => ['pageContent' => $guideTemplatePathAsString, 'settings' => $settings]];
                    $event->rules['guide/components'] = ['template' => 'guide/home', 'variables' => ['settings' => $settings]];

                    // Register other CP Section templates
                    //Craft::dd($this->getSettings());
                    $guideNav = $settings->guideNav;
                    foreach ($guideNav as $item) {
                        $templatePath = Craft::$app->view->resolveTemplate($item['template']);
                        $templateAsString = $this->_getTemplateFileAsString($templatePath);
                        $event->rules['guide/page/' . $item['id']] = ['template' => 'guide/home', 'variables' => ['pageContent' => $templateAsString, 'settings' => $settings]];
                    }

                    Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);

                    // Register Nav
                    //$event->rules['siteActionTrigger1'] = 'guide/default';
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
                    $event->types[] = GuideWidgetWidget::class;
                }
            );

            // Do something after we're installed
            Event::on(
                Plugins::class,
                Plugins::EVENT_AFTER_INSTALL_PLUGIN,
                function (PluginEvent $event) {
                    if ($event->plugin === $this) {
                        // We were just installed
                    }
                }
            );
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
        // $subnav = [];
        $settings = $this->getSettings();
        // $guideNav = $settings->guideNav;

        // foreach ($guideNav as $item) {
        //     $subnav[$item['id']] = ['label' => $item['title'], 'url' => 'guide/page/' . $item['id']];
        // }

        // Use the default name & icon, but customize the URL
        $navItem = parent::getCpNavItem();
        $navItem['url'] = 'guide/home';
        // $navItem['subnav'] = $subnav;
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
        return Craft::$app->view->renderTemplate(
            'guide/settings',
            [
                'settings' => $this->getSettings()
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
    }
}
