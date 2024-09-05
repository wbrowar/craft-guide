<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide;

use Craft;
use craft\base\Plugin;
use craft\controllers\ElementsController;
use craft\elements\Asset;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\User;
use craft\events\DefineElementEditorHtmlEvent;
use craft\events\DefineFieldLayoutElementsEvent;
use craft\events\PluginEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\App;
use craft\helpers\FileHelper;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use craft\models\FieldLayout;
use craft\services\Dashboard;
use craft\services\Plugins;
use craft\services\UserPermissions;
use craft\services\Utilities;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;
use craft\web\View;
use wbrowar\guide\fieldlayoutelements\GuideDisplay;
use wbrowar\guide\models\Settings;
use wbrowar\guide\services\Guide as GuideService;
use wbrowar\guide\services\GuideComponents as GuideComponentsService;
use wbrowar\guide\services\ImportExport as ImportExportService;
use wbrowar\guide\services\Placement as PlacementService;
use wbrowar\guide\twigextensions\GuideTwigExtension;
use wbrowar\guide\utilities\ImportExport;
use wbrowar\guide\variables\GuideVariable;
use wbrowar\guide\widgets\Guide as GuideWidget;
use yii\base\Event;

/**
 * Class Guide
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 *
 * @property ImportExportService $importExport
 * @property GuideService $guide
 * @property PlacementService $placement
 * @property GuideComponentsService $guideComponents
 * 
 * @method Settings getSettings()
 */
class Guide extends Plugin
{
    // Constants
    // =========================================================================
    const EDITION_LITE = 'lite';
    const EDITION_PRO = 'pro';

    // Static Properties
    // =========================================================================;

    /**
     * @var bool
     */
    public static $pro;

    /**
     * @var Guide
     */
    public static $plugin;

    /**
     * @var bool
     */
    public static $schemaReady;

    /**
     * @var Settings
     */
    public static $settings;

    /**
     * @var View
     */
    public static $view;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public string $schemaVersion = '3.0.0';

    /**
     * @var string
     */
    public string $minVersionRequired = '3.0.0';

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
        self::$schemaReady = $this->getSchemaReady();
        self::$settings = $this->getSettings();
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

            if (!Craft::$app->getRequest()->isConsoleRequest &&
                !Craft::$app->getRequest()->getIsActionRequest() &&
                self::$schemaReady) {
                // Load our JavaScript
                $assets = self::$plugin->getPathsToAssetFiles('guide-display.ts');
                if ($assets['css'] ?? false) {
                    Craft::$app->getView()->registerCssFile($assets['css']);
                }
                if ($assets['js'] ?? false) {
                    Craft::$app->getView()->registerJsFile($assets['js'], ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module']);
                }

                // Admin-specific JavaScript
                $routeIsGuideAdmin = Craft::$app->getRequest()->getSegment(1) == 'guide' && in_array(Craft::$app->getRequest()->getSegment(2), ['edit', 'list', 'new', 'organizer']);
                $routeIsGuideUtilities = Craft::$app->getRequest()->getSegment(1) == 'utilities' && Craft::$app->getRequest()->getSegment(2) == 'guide-export-import';
                $routeIsGuideWelcome = Craft::$app->getRequest()->getSegment(1) == 'guide' && Craft::$app->getRequest()->getSegment(2) == 'welcome';
                if ($routeIsGuideAdmin || $routeIsGuideUtilities) {
                    $assets = self::$plugin->getPathsToAssetFiles('guide-admin.ts');
                    if ($assets['css'] ?? false) {
                        Craft::$app->getView()->registerCssFile($assets['css']);
                    }
                    if ($assets['js'] ?? false) {
                        Craft::$app->getView()->registerJsFile($assets['js'], ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module']);
                    }
                } else if ($routeIsGuideWelcome) {
                    $assets = self::$plugin->getPathsToAssetFiles('guide-welcome.ts');
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
                    $this->renderAdminGlobals();

                    // Get and display guides for the given page
                    $this->renderGuideDisplaysForPage();
                });
            }

            // Add template routes
            Event::on(
                View::class,
                View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
                function(RegisterTemplateRootsEvent $event) {
                    if (self::$settings->templatePath ?? false) {
                        // Set the path set in the Template Path setting to a template root that can be referenced later
                        $oldMode = self::$view->getTemplateMode();
                        self::$view->setTemplateMode(self::$view::TEMPLATE_MODE_SITE);
                        $templatePath = self::$view->getTemplatesPath() . '/' . self::$settings->templatePath . '/';
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
                    $userOperations = $this->getUserOperations();

                    // Templates
                    $event->rules['guide'] = ['template' => 'guide/index', 'variables' => ['cpNavPlacements' => self::$plugin->placement->getPlacements([ 'group' => 'nav' ], 'guideId'), 'settings' => self::$settings, 'userOperations' => $userOperations]];
                    $event->rules['guide/welcome'] = ['template' => 'guide/welcome', 'variables' => ['settings' => self::$settings]];
                    $event->rules['guide/page/<slug:(.*)>'] = ['template' => 'guide/page', 'variables' => ['proEdition' => self::$pro, 'settings' => self::$settings, 'userOperations' => $userOperations]];
                    $event->rules['guide/settings'] = ['template' => 'guide/settings', 'variables' => ['proEdition' => self::$pro, 'settings' => self::$settings]];
                    
                    if ($userOperations['editGuides']) {
                        $editVariables = [
                            'assetComponents' => self::$plugin->guideComponents->getAssetComponents(),
                            'proEdition' => self::$pro,
                            'settings' => self::$settings,
                            'templates' => $this->getTemplatesFromUserTemplatePath(),
                            'userOperations' => $userOperations
                        ];
                        $event->rules['guide/list'] = ['template' => 'guide/list', 'variables' => $editVariables];
                        $event->rules['guide/new'] = ['template' => 'guide/edit', 'variables' => $editVariables];
                        $event->rules['guide/edit/<guideId:\d{1,}>'] = ['template' => 'guide/edit', 'variables' => $editVariables];
                    }
                    if ($userOperations['deleteGuides']) {
                        $event->rules['guide/delete/<guideId:\d{1,}>'] = ['template' => 'guide/delete', 'variables' => ['userOperations' => $userOperations]];
                    }
                    if ($userOperations['useOrganizer']) {
                        $event->rules['guide/organizer'] = ['template' => 'guide/organizer', 'variables' => ['groupsData' => self::$plugin->placement->getPlacementGroups(), 'userOperations' => $userOperations]];
                    }
                }
            );
        }

        // Add our utilities
        Event::on(
            Utilities::class,
            Utilities::EVENT_REGISTER_UTILITIES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = ImportExport::class;
            }
        );

        // Add custom permissions
        if (Craft::$app->edition->value > 0) {
            Event::on(UserPermissions::class, UserPermissions::EVENT_REGISTER_PERMISSIONS, function(RegisterUserPermissionsEvent $event) {
                $permissions = [
                    'editGuides' => ['label' => Craft::t('guide', 'Edit Guides')],
                ];

                if (self::$pro) {
                    $permissions['deleteGuides'] = ['label' => Craft::t('guide', 'Delete Guides')];
                    $permissions['useOrganizer'] = ['label' => Craft::t('guide', 'Use Organizer and UI Element Selector')];
                }

                $event->permissions[] = [
                    'heading' => Craft::t('guide', 'Guide'),
                    'permissions' => $permissions
                ];
            });
        }

        // Register Pro features
        if (self::$pro && self::$schemaReady) {
            // Add Guides to CP Groups
            Event::on(
                ElementsController::class,
                ElementsController::EVENT_DEFINE_EDITOR_CONTENT,
                function (DefineElementEditorHtmlEvent $event) {
                    if (!Craft::$app->getRequest()->isPreview) {
                        switch (get_class($event->element)) {
                            case Asset::class:
                                $queries = [[
                                    'group' => 'asset',
                                    'groupId' => null,
                                ]];

                                if ($event->element->volumeId ?? false) {
                                    $volume = Craft::$app->getVolumes()->getVolumeById($event->element->volumeId);

                                    if ($volume) {
                                        $queries[] = [
                                            'group' => 'assetVolume',
                                            'groupId' => $volume->uid,
                                        ];
                                    }
                                }
                                $event->html .= $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element, 'asset');
                                break;
                            case Category::class:
                                $queries = [[
                                    'group' => 'category',
                                    'groupId' => null,
                                ]];

                                if ($event->element->groupId ?? false) {
                                    $group = Craft::$app->getCategories()->getGroupById($event->element['groupId']);

                                    if ($group->uid) {
                                        $queries[] = [
                                            'group' => 'categoryGroup',
                                            'groupId' => $group->uid,
                                        ];
                                    }
                                }
                                $event->html .= $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element, 'category');
                                break;
                            case Entry::class:
                                $queries = [[
                                    'group' => 'entry',
                                    'groupId' => null,
                                ]];

                                if ($event->element['sectionId'] ?? false) {
                                    $section = Craft::$app->getEntries()->getSectionById($event->element['sectionId']);

                                    if ($section->uid ?? false) {
                                        $queries[] = [
                                            'group' => 'section',
                                            'groupId' => $section->uid,
                                        ];
                                    }
                                }
                                $event->html .= $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element, 'entry');
                                break;
//                            case GlobalSet::class:
//                                $queries = [[
//                                    'group' => 'global',
//                                    'groupId' => null,
//                                ]];
//
//                                if ($context['globalSet']->id ?? false) {
//                                    $queries[] = [
//                                        'group' => 'globalSet',
//                                        'groupId' => $context['globalSet']->uid,
//                                    ];
//                                }
//                                $event->html .= $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element ?? null);
//                                break;
                            case User::class:
                                $queries = [[
                                    'group' => 'user',
                                    'groupId' => null,
                                ]];

                                $event->html .= $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element ?? null, 'user');
                                break;
                        }
                    }
                });

            // TODO: when `ElementsController::EVENT_DEFINE_EDITOR_CONTENT` includes support for GlobalSet or User elements, move these into switch above.
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

                return $this->renderGuidesForTemplateHook('guide/elements/edit-page.twig', $queries, $event->element ?? null, 'global');
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
    public function getCpNavItem(): ?array
    {
        $navItem = parent::getCpNavItem();
        $user = Craft::$app->getUser()->getIdentity();
        $userOperations = $this->getUserOperations();

        $navItem['subnav'] = [];

        if ($userOperations['editGuides']) {
            $navItem['subnav']['list'] = ['label' => 'Guides', 'url' => 'guide/list'];
        }

        if ($userOperations['useOrganizer']) {
            $navItem['subnav']['organizer'] = ['label' => 'Organizer', 'url' => 'guide/organizer'];
        }

        if ($user->admin && Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $navItem['subnav']['settings'] = ['label' => 'Settings', 'url' => 'guide/settings'];
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
    protected function createSettingsModel(): ?\craft\base\Model
    {
        return new Settings();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsResponse(): \craft\web\Response|\yii\console\Response
    {
        // Just redirect to the plugin settings page
        return Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('guide/settings'));
    }

    /**
     * @return array
     */
    public function getUserOperations():array
    {
        $operations = [
            'deleteGuides' => false,
            'editGuides' => false,
            'useOrganizer' => false,
        ];

        $user = Craft::$app->getUser();

        $operations['deleteGuides'] = $user->getIsAdmin() || $user->checkPermission('deleteGuides');
        $operations['editGuides'] = $user->getIsAdmin() || $user->checkPermission('editGuides');
        $operations['useOrganizer'] = $user->getIsAdmin() || $user->checkPermission('useOrganizer');

        return $operations;
    }

    // Private Methods
    // =========================================================================

    /**
     * Get paths of all JS and CSS files generated by Vite
     *
     * @param string $filename the name of the Vite entry file, usually 'main.ts'
     * @return array
     */
    public function getPathsToAssetFiles(string $filename): array
    {
        $assetPaths = [
            'css' => '',
            'js' => '',
        ];

        if (App::parseEnv('$VITE_GUIDE_HMR') == 'true') {
            return [
                'js' => 'http://localhost:3100/' . $filename,
            ];
        }

        $manifestPath = self::$plugin->getBasePath() . '/assetbundles/dist/.vite/manifest.json';

        if (file_exists($manifestPath)) {
            $manifestJson = file_get_contents($manifestPath);

            if (!empty($manifestJson)) {
                $manifest = Json::decodeIfJson($manifestJson);

                if (!empty($manifest) && $manifest[$filename]) {
                    $path = Craft::$app->getAssetManager()->getPublishedUrl('@wbrowar/guide/assetbundles/dist/', true);

                    if (!empty($path)) {
                        if ($manifest[$filename]['css'] ?? false) {
                            $assetPaths['css'] = $path . '/' . $manifest[$filename]['css'][0];
                        }
                        if ($manifest[$filename]['file'] ?? false) {
                            $assetPaths['js'] = $path . '/' . $manifest[$filename]['file'];
                        }
                    }
                }
            }
        }

        return $assetPaths;
    }

    /**
     * Get paths of all JS and CSS files generated by Vite
     *
     * @return bool
     */
    public function getSchemaReady(): bool
    {
        return Craft::$app->db->schema->getTableSchema('{{%guide_guides}}') !== null && Craft::$app->db->schema->getTableSchema('{{%guide_placements}}') !== null;
    }

    /**
     * Render admin globals used by Guide and Organizer editors
     */
    public function renderAdminGlobals()
    {
        $guidesForJs = [];
        $guides = self::$plugin->guide->getGuides([
            'orderBy' => 'title asc',
        ]);
        foreach ($guides as $guide) {
            $guidesForJs[] = [
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
            'guides' => $guides,
            'guidesForJs' => $guidesForJs,
            'proEdition' => self::$pro,
            'settings' => self::$settings,
            'userOperations' => $this->getUserOperations(),
        ];
        echo self::$view->renderTemplate('guide/_partials/admin_globals', $adminGlobalsVariables);
    }

    /**
     * Render admin globals used by Guide and Organizer editors
     */
    public function renderGuideDisplaysForPage(): void
    {
        $uri = self::$plugin->placement->formatUri(Craft::$app->getRequest()->getFullUri());

        $placements = self::$plugin->placement->getPlacements(['uri' => $uri]);

        if ($placements ?? false) {
            $guideIds = [];
            $moveMap = [];

            foreach ($placements as $placement) {
                if ($placement['selector'] ?? false) {
                    $guideIds[] = $placement['guideId'];
                    $moveMap[$placement['id'] . '-' . $placement['guideId']] = [
                        'moveMethod' => $placement['moveMethod'] ?? 'append',
                        'selector' => $placement['selector'] ?? '#content',
                    ];
                }
            }

            if (!empty($guideIds)) {
                $guides = self::$plugin->guide->getGuides(['id' => $guideIds]);

                if (!empty($guides)) {
                    echo self::$view->renderTemplate('guide/_partials/move_guides.twig', [
                        'guides' => $guides,
                        'moveMap' => $moveMap,
                    ]);
                }
            }
        }
    }

    /**
     * Render guides
     *
     * @param string $template The template to be rendered
     * @param mixed  $queries  An array of Placement query parameters
     *
     * @return string
     */
    private function renderGuidesForTemplateHook(string $template, $queries, $element = null, string $group = null): string
    {
        $guideIds = [];
        $teleportMap = [];

        foreach ($queries as $query) {
            $placements = self::$plugin->placement->getPlacements($query);

            foreach ($placements as $placement) {
                $guideIds[] = $placement->guideId;

                if ($placement->selector) {
                    // TODO update this
                    $teleportMap['id-' . $placement->guideId] = $placement->selector;
                }
            }
        }

        if (!empty($guideIds)) {
            $guides = self::$plugin->guide->getGuides(['id' => $guideIds]);
            
            // Render sidebar template
            return self::$view->renderTemplate($template, [
                'element' => $element,
                'group' => $group,
                'guides' => $guides,
                'settings' => self::$settings,
            ]);
        }

        return '';
    }

    /**
     * @return array
     */
    private function getTemplatesFromUserTemplatePath():array
    {
        $templates = [
            'filenames' => ['__none__' => 'Select a Template'],
            'contents' => ['__none__' => ''],
        ];

        $oldMode = Craft::$app->getView()->getTemplateMode();
        Craft::$app->getView()->setTemplateMode(View::TEMPLATE_MODE_SITE);
        $userTemplatePath = Craft::$app->getView()->getTemplatesPath() . DIRECTORY_SEPARATOR . self::$settings->templatePath;

        if (is_dir($userTemplatePath)) {
            $filesInDirectory = FileHelper::findFiles(Craft::$app->getView()->getTemplatesPath() . DIRECTORY_SEPARATOR . self::$settings->templatePath, ['only' => ['*.html', '*.twig']]);

            foreach ($filesInDirectory as $item) {
                $template = str_replace($userTemplatePath . DIRECTORY_SEPARATOR, '', $item);
                $templates['filenames'][$template] = $template;
                $templates['contents'][$template] = file_get_contents($item);
            }
        }

        Craft::$app->getView()->setTemplateMode($oldMode);

        return $templates;
    }
}
