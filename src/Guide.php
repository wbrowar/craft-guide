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

use craft\events\DefineFieldLayoutElementsEvent;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\FileHelper;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use craft\models\FieldLayout;
use craft\services\UserPermissions;
use craft\web\View;
use wbrowar\guide\fieldlayoutelements\GuideDisplay;
use wbrowar\guide\models\Settings;
use wbrowar\guide\services\Guide as GuideService;
use wbrowar\guide\services\Placement as PlacementService;
use wbrowar\guide\services\GuideComponents as GuideComponentsService;
use wbrowar\guide\twigextensions\GuideTwigExtension;
use wbrowar\guide\utilities\ImportExport;
use wbrowar\guide\variables\GuideVariable;
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
 * @property  PlacementService $placement
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
    public $schemaVersion = '3.0.0';

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
            'importExport' => 'wbrowar\guide\services\ImportExport',
            'guideComponents' => 'wbrowar\guide\services\GuideComponents',
            'placement' => 'wbrowar\guide\services\Placement',
        ]);

        if (self::$view->getTemplateMode() === View::TEMPLATE_MODE_CP) {
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

            if (!Craft::$app->getRequest()->isConsoleRequest) {
                // Load our JavaScript
                $assets = self::$plugin->_getPathsToAssetFiles('guide-display.ts');
                if ($assets['css'] ?? false) {
                    Craft::$app->getView()->registerCssFile($assets['css']);
                }
                if ($assets['js'] ?? false) {
                    Craft::$app->getView()->registerJsFile($assets['js'], ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module']);
                }

                // Admin-specific JavaScript
                if (Craft::$app->getRequest()->getSegment(1) == 'guide' && ((Craft::$app->getRequest()->getSegment(2) ?? false) && Craft::$app->getRequest()->getSegment(2) != 'page')) {
                    $assets = self::$plugin->_getPathsToAssetFiles('guide-admin.ts');
                    if ($assets['css'] ?? false) {
                        Craft::$app->getView()->registerCssFile($assets['css']);
                    }
                    if ($assets['js'] ?? false) {
                        Craft::$app->getView()->registerJsFile($assets['js'], ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module']);
                    }
                }

                // Add guides to the bottom of the page
                Event::on(View::class, View::EVENT_END_BODY, function(Event $event) {
                    // Add global settings to end body
                    $this->_renderAdminGlobals();

                    // Get and display guides for the given page
                    $this->_renderGuideDisplaysForPage();
                });
            }

            // Add template routes
            Event::on(
                View::class,
                View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
                function(RegisterTemplateRootsEvent $event) {
                    if ($this->getSettings()->templatePath ?? false) {
                        // Set the path set in the Template Path setting to a template root that can be referenced later
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
                    // Actions
                    $event->rules['guide/duplicate/<guideId:\d{1,}>'] = 'guide/guide/duplicate-guide';

                    // Templates
                    $event->rules['guide'] = ['template' => 'guide/index', 'variables' => ['cpNavPlacements' => self::$plugin->placement->getPlacements([ 'group' => 'nav' ], 'guideId'), 'settings' => self::$settings, 'userOperations' => self::$userOperations]];
                    $event->rules['guide/welcome'] = ['template' => 'guide/welcome', 'variables' => ['settings' => self::$settings]];
                    $event->rules['guide/page/<slug:(.*)>'] = ['template' => 'guide/page', 'variables' => ['settings' => self::$settings, 'userOperations' => self::$userOperations]];
                    $event->rules['guide/settings/general'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'selectedTab' => 'general', 'settings' => self::$settings]];
                    $event->rules['guide/settings/variables'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'selectedTab' => 'variables', 'settings' => self::$settings]];

                    if (self::$userOperations['editGuides']) {
                        $editVariables = [];

                        $editVariables['title'] = 'New Guide';
                        $event->rules['guide/new'] = ['template' => 'guide/edit', 'variables' => $editVariables];

                        $editVariables['title'] = 'Edit Guide';
                        $event->rules['guide/edit/<guideId:\d{1,}>'] = ['template' => 'guide/edit', 'variables' => $editVariables];
                    }
                    if (self::$userOperations['deleteGuides']) {
                        $event->rules['guide/delete/<guideId:\d{1,}>'] = ['template' => 'guide/delete', 'variables' => ['userOperations' => self::$userOperations]];
                    }
                    if (self::$userOperations['useOrganizer']) {
                        $event->rules['guide/organizer'] = ['template' => 'guide/organizer', 'variables' => ['groupsData' => self::$plugin->placement->getPlacementGroups()]];
                    }
                }
            );
        }

        // Add our utilities
        Event::on(
            Utilities::class,
            Utilities::EVENT_REGISTER_UTILITY_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = ImportExport::class;
            }
        );

        // Register Pro features
        if (self::$pro) {
            // Add custom permissions
            if (Craft::$app->getEdition() > 0) {
                Event::on(UserPermissions::class, UserPermissions::EVENT_REGISTER_PERMISSIONS, function(RegisterUserPermissionsEvent $event) {
                    $event->permissions[Craft::t('guide', 'Guide')] = [
                        'editGuides' => ['label' => Craft::t('guide', 'Edit Guides')],
                        'setAccessPermissions' => ['label' => Craft::t('guide', 'Set Guide Access Permissions')],
                        'deleteGuides' => ['label' => Craft::t('guide', 'Delete Guides')],
                        'useOrganizer' => ['label' => Craft::t('guide', 'Use Placement')],
                    ];
                });
            }

            // Add Guides to CP Groups
            Craft::$app->view->hook('cp.assets.edit.content', function(&$context) {
                $queries = [[
                    'group' => 'asset',
                    'groupId' => null,
                ]];

                if ($context['element']->volumeId ?? false) {
                    $volume = Craft::$app->getVolumes()->getVolumeById($context['element']->volumeId);
                    
                    if ($volume) {
                        $queries[] = [
                            'group' => 'assetVolume',
                            'groupId' => $volume->uid,
                        ];
                    }
                }
                return $this->_renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $context['element'] ?? null);
            });
            Craft::$app->view->hook('cp.categories.edit.content', function(&$context) {
                $queries = [[
                    'group' => 'category',
                    'groupId' => null,
                ]];

                if ($context['group']->id ?? false) {
                    $queries[] = [
                        'group' => 'categoryGroup',
                        'groupId' => $context['group']->uid,
                    ];
                }
                return $this->_renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $context['element'] ?? null);
            });
            Craft::$app->view->hook('cp.entries.edit.content', function(&$context) {
                $queries = [[
                    'group' => 'entry',
                    'groupId' => null,
                ]];

                if ($context['entry']->section->id ?? false) {
                    $queries[] = [
                        'group' => 'section',
                        'groupId' => $context['entry']->section->uid,
                    ];
                }
                return $this->_renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $context['element'] ?? null);
            });
            Craft::$app->view->hook('cp.globals.edit.content', function(&$context) {
                $queries = [[
                    'group' => 'global',
                    'groupId' => null,
                ]];

                if ($context['globalSet']->id ?? false) {
                    $queries[] = [
                        'group' => 'globalSet',
                        'groupId' => $context['globalSet']->uid,
                    ];
                }

                return $this->_renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries);
            });
            Craft::$app->view->hook('cp.users.edit.content', function(&$context) {
                $queries = [[
                    'group' => 'user',
                    'groupId' => null,
                ]];

                return $this->_renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $context['user'] ?? null);
            });

            // Add custom field UI elements
            Event::on(
                FieldLayout::class,
                FieldLayout::EVENT_DEFINE_UI_ELEMENTS,
                function(DefineFieldLayoutElementsEvent $event) {
                    $event->elements[] = GuideDisplay::class;
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

        // Display welcome message on install
        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                    // Send users to our welcome screen
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

    /**
     * @inheritdoc
     */
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
     * @inheritdoc
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
     * Get paths of all JS and CSS files generated by Vite
     *
     * @param string $filename the name of the Vite entry file, usually 'main.ts'
     * @return array
     */
    public function _getPathsToAssetFiles(string $filename): array
    {
        $assetPaths = [
            'css' => '',
            'js' => '',
        ];

        if (Craft::parseEnv('$PLUGIN_HMR') == 'true') {
            return [
//                'css' => 'https://craft-guide.test:3000/_source/_css/app.css',
                'js' => 'https://craft-guide.test:3000/' . $filename,
            ];
        }

        $manifestPath = self::$plugin->getBasePath() . '/assetbundles/dist/manifest.json';

        if ($manifestPath ?? false) {
            $manifestJson = file_get_contents($manifestPath);

            if ($manifestJson ?? false) {
                $manifest = Json::decodeIfJson($manifestJson);

                if ($manifest && $manifest[$filename]) {
                    $path = Craft::$app->getAssetManager()->getPublishedUrl('@wbrowar/guide/assetbundles/dist/', true);
                }
            }
        }

        if ($path ?? false) {
            if ($manifest[$filename]['css'] ?? false) {
                $assetPaths['css'] = $path . '/' . $manifest[$filename]['css'][0];
            }
            if ($manifest[$filename]['file'] ?? false) {
                $assetPaths['js'] = $path . '/' . $manifest[$filename]['file'];
            }
        }

        return $assetPaths;
    }

    /**
     * Render admin globals used by Guide and Organizer editors
     */
    public function _renderAdminGlobals()
    {
        $guidesData = [];
        $guides = self::$plugin->guide->getGuides([
            'orderBy' => 'title asc',
        ]);
        foreach ($guides as $guide) {
            $guidesData[] = [
                'deleteUrl' => UrlHelper::url('guide/delete/' . $guide->id),
                'editUrl' => UrlHelper::url('guide/edit/' . $guide->id),
                'id' => $guide->id,
                'title' => $guide->title,
                'slug' => $guide->slug,
                'summary' => $guide->summary,
                'viewUrl' => UrlHelper::url('guide/page/' . $guide->slug),
            ];
        }

        $adminGlobalsVariables = [
            'assetComponents' => self::$plugin->guideComponents->getAssetComponents(),
            'guides' => $guidesData,
            'proEdition' => self::$pro,
            'settings' => self::$settings,
            'templates' => $this->_getTemplatesFromUserTemplatePath(),
            'userOperations' => self::$userOperations,
        ];
        echo self::$view->renderTemplate('guide/_partials/admin_globals', $adminGlobalsVariables);
    }

    /**
     * Render admin globals used by Guide and Organizer editors
     */
    public function _renderGuideDisplaysForPage()
    {
        $uri = self::$plugin->placement->formatUri(Craft::$app->getRequest()->getFullUri());

        $placements = self::$plugin->placement->getPlacements(['uri' => $uri]);

        if ($placements ?? false) {
            $guideIds = [];
            $teleportMap = [];

            foreach ($placements as $placement) {
                if ($placement['selector'] ?? false) {
                    $teleportMap['id-' . $placement['guideId']] = $placement['selector'];
                    $guideIds[] = $placement['guideId'];
                }
            }

            if ($guideIds ?? false) {
                $guides = self::$plugin->guide->getGuides(['id' => $guideIds]);

                if ($guides ?? false) {
                    echo self::$view->renderTemplate('guide/_partials/guide_display', [
                        'displayId' => 'uri',
                        'guides' => $guides,
                        'teleportMap' => $teleportMap,
                    ]);
                }
            }
        }
    }

    /**
     * Render guides
     *
     * @param string $template The template to be rendered
     * @param mixed $queries An array of Placement query parameters
     * @return string
     */
    private function _renderGuidesForTemplateHook($template, $queries, $element = null) {
        $guideIds = [];
        $teleportMap = [];

        foreach ($queries as $query) {
            $placements = self::$plugin->placement->getPlacements($query);

            foreach ($placements as $placement) {
                $guideIds[] = $placement->guideId;

                if ($placement->selector) {
                    $teleportMap['id-' . $placement->guideId] = $placement->selector;
                }
            }
        }

        if (!empty($guideIds)) {
            $guides = self::$plugin->guide->getGuides(['id' => $guideIds]);
            
            // Render sidebar template
            return self::$view->renderTemplate($template, [
                'element' => $element,
                'guides' => $guides,
                'teleportMap' => $teleportMap,
            ]);
        }

        return '';
    }

    /**
     * @return array
     */
    private function _getTemplatesFromUserTemplatePath():array
    {
        $templates = [
            'filenames' => ['__none__' => 'Select a Template'],
            'contents' => ['__none__' => ''],
        ];

        $oldMode = Craft::$app->getView()->getTemplateMode();
        Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_SITE);
        $userTemplatePath = Craft::$app->getView()->getTemplatesPath() . DIRECTORY_SEPARATOR . self::$settings->templatePath;

        if (is_dir($userTemplatePath) ?? false) {
            $filesInDirectory = FileHelper::findFiles(Craft::$app->getView()->getTemplatesPath() . DIRECTORY_SEPARATOR . self::$settings->templatePath, ['only' => ['*.html', '*.md', '*.twig']]);

            foreach ($filesInDirectory as $item) {
                $template = str_replace($userTemplatePath . DIRECTORY_SEPARATOR, '', $item);
                $templates['filenames'][$template] = $template;
                $templates['contents'][$template] = file_get_contents($item);
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

            $operations['deleteGuides'] = $user->admin || $user->can('deleteGuides');
            $operations['editGuides'] = $user->admin || $user->can('editGuides');
            $operations['setAccessPermissions'] = $user->admin || $user->can('setAccessPermissions');
            $operations['useOrganizer'] = $user->admin || $user->can('useOrganizer');
        } else {
            $operations['deleteGuides'] = false;
            $operations['editGuides'] = false;
            $operations['setAccessPermissions'] = false;
            $operations['useOrganizer'] = false;
        }

        return $operations;
    }
}
