<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\guide\services;

use Craft;
use craft\base\Component;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Placement as PlacementModel;
use wbrowar\guide\records\Placements;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     3.0.0
 */
class Placement extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Removes placements for guides that have been deleted.
     *
     * @return void
     */
    public function cleanUpOrphanedPlacements()
    {
        $guideIds = Guide::$plugin->guide->getGuides([], 'ids');
        $placements = $this->getPlacements(['not in', 'guideId', $guideIds]);

        foreach ($placements as $placement) {
            $placement->delete();
        }
    }

    /**
     * Format URI to be stored as a Placement URI
     *
     * @return mixed
     */
    public function formatUri($uri)
    {
        $cpTrigger = Craft::$app->getConfig()->getGeneral()->cpTrigger ?? '';

        // Remove leading and trailing slashes
        $uri = trim($uri, '/');

        if (str_starts_with($uri, $cpTrigger)) {
            // Remove cpTrigger
            $uri = substr($uri, strlen($cpTrigger));

            // Remove leading and trailing slashes
            $uri = trim($uri, '/');
        }

        return $uri;
    }


    /**
     * Get all group information for the Organizer
     *
     * @return mixed
     */
    public function getPlacementGroups()
    {
        $colMd = 2;
        $colSm = 1;
        $headerMd = 'large';
        $headerSm = 'small';
        $groups = [];
        
        if (Guide::$pro) {
            // Assets and asset volumes - if any
            $assetVolumes = Craft::$app->getVolumes()->getAllVolumes();

            if (!empty($assetVolumes)) {
                $groups[] = [
                    'columns' => $colSm,
                    'description' => Craft::t('guide', 'Select guides to display on all <strong>Asset</strong> edit pages.'),
                    'header' => Craft::t('guide', 'Assets'),
                    'headerSize' => $headerMd,
                    'name' => 'asset',
                    'groupId' => null,
                ];

                foreach ($assetVolumes as $item) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => Craft::t('guide', 'Select guides to display on <strong>Asset</strong> edit pages in the <strong>{name}</strong> volume.', ['name' => $item->name]),
                        'header' => $item->name,
                        'headerSize' => $headerSm,
                        'name' => 'assetVolume',
                        'groupId' => $item->uid,
                    ];
                }
            }

            // Categories and category groups - if any
            $categoryGroups = Craft::$app->getCategories()->getAllGroups();

            if (!empty($categoryGroups)) {
                $groups[] = [
                    'columns' => $colSm,
                    'description' => Craft::t('guide', 'Select guides to display on all <strong>Category</strong> edit pages.'),
                    'header' => Craft::t('guide', 'Categories'),
                    'headerSize' => $headerMd,
                    'name' => 'category',
                    'groupId' => null,
                ];

                foreach ($categoryGroups as $item) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => Craft::t('guide', 'Select guides to display on <strong>Category</strong> edit pages in the <strong>{name}</strong> group.', ['name' => $item->name]),
                        'header' => $item->name,
                        'headerSize' => $headerSm,
                        'name' => 'categoryGroup',
                        'groupId' => $item->uid,
                    ];
                }
            }

            // Entries and sections - if any
            $sections = Craft::$app->getEntries()->getAllSections();

            if (!empty($sections)) {
                $groups[] = [
                    'columns' => $colSm,
                    'description' => Craft::t('guide', 'Select guides to display on all <strong>Entry</strong> edit pages.'),
                    'header' => Craft::t('guide', 'Entries'),
                    'headerSize' => $headerMd,
                    'name' => 'entry',
                    'groupId' => null,
                ];

                foreach ($sections as $section) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => Craft::t('guide', 'Select guides to display on <strong>Entry</strong> edit pages in the <strong>{name}</strong> section', ['name' => $section->name]),
                        'header' => $section->name,
                        'headerSize' => $headerSm,
                        'name' => 'section',
                        'groupId' => $section->uid,
                    ];
                }
            }

            // Entries and sections - if any
            $globalSets = Craft::$app->getGlobals()->getAllSets();

            if (!empty($globalSets)) {
                $groups[] = [
                    'columns' => $colSm,
                    'description' => Craft::t('guide', 'Select guides to display on all <strong>Global Set</strong> edit pages.'),
                    'header' => Craft::t('guide', 'Globals'),
                    'headerSize' => $headerMd,
                    'name' => 'global',
                    'groupId' => null,
                ];

                foreach ($globalSets as $globalSet) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => Craft::t('guide', 'Select guides to display on <strong>{name} Global Set</strong> edit pages.', ['name' => $globalSet->name]),
                        'header' => $globalSet->name,
                        'headerSize' => $headerSm,
                        'name' => 'globalSet',
                        'groupId' => $globalSet->uid,
                    ];
                }
            }

            // URI
            $groups[] = [
                'columns' => $colSm,
                'description' => Craft::t('guide', 'Display guides on a specific <strong>Control Panel</strong> page <strong>(uri)</strong> next to or inside a specific HTML element <strong>(selector)</strong>.'),
                'header' => Craft::t('guide', 'Control Panel Pages'),
                'headerSize' => $headerMd,
                'name' => 'uri',
                'groupId' => null,
            ];

            // UI Elements
            $groups[] = [
                'columns' => $colMd,
                'description' => Craft::t('guide', 'Enable guides to be selected for display in <strong>UI Elements</strong> on element edit pages.'),
                'header' => Craft::t('guide', 'UI Elements'),
                'headerSize' => $headerMd,
                'name' => 'uiElementEnabled',
                'groupId' => null,
            ];

            // Users
            $groups[] = [
                'columns' => $colSm,
                'description' => Craft::t('guide', 'Select guides to display on all <strong>User</strong> edit pages.'),
                'header' => Craft::t('guide', 'Users'),
                'headerSize' => $headerMd,
                'name' => 'user',
                'groupId' => null,
            ];

            // Widgets
            $groups[] = [
                'columns' => $colMd,
                'description' => Craft::t('guide', 'Enable guides to be selected for display on <strong>Dashboard Widgets</strong>.'),
                'header' => Craft::t('guide', 'Widgets'),
                'headerSize' => $headerMd,
                'name' => 'widget',
                'groupId' => null,
            ];
        }

        return $groups;
    }

    /**
     * Query guide placements for the Organizer
     *
     * @return Placements | null
     */
    public function getPlacements(array $params = [], string $queryType = 'all'): array|Placements|null
    {
        if (!Guide::$pro) {
            $params['group'] = 'nav';
        }

        if (!($params['guideId'] ?? false)) {
            $params['guideId'] = Guide::$plugin->guide->getGuides([], 'ids');
        }

        if ($params['limit'] ?? false) {
            $limit = $params['limit'];
            unset($params['limit']);
        } else {
            $limit = null;
        }

        if ($params['orderBy'] ?? false) {
            $orderBy = $params['orderBy'];
            unset($params['orderBy']);
        } else {
            $orderBy = 'id';
        }

        switch ($queryType) {
            case 'all':
                /**
                 * @var Placements $placements
                 */
                $placements = Placements::find()->where($params)->limit($limit)->orderBy($orderBy)->all();
                break;
            case 'new':
                $placements = new Placements([]);
                break;
            case 'one':
                /**
                 * @var Placements $placements
                 */
                $placements = Placements::find()->where($params)->orderBy($orderBy)->one();
                break;
            case 'count':
                $placements = Placements::find()->where($params)->count();
                break;
            case 'guideId':
                /**
                 * @var Placements $placementData
                 */
                $placementData = Placements::find()->where($params)->select(['guideId'])->all();
                $placements = [];
                foreach ($placementData as $data) {
                    $placements[] = $data->guideId;
                }
                break;
            case 'ids':
                /**
                 * @var Placements $placementData
                 */
                $placementData = Placements::find()->where($params)->select(['id'])->all();
                $placements = [];
                foreach ($placementData as $data) {
                    $placements[] = $data->id;
                }
                break;
            case 'uri':
                /**
                 * @var Placements $placements
                 */
                $placements = Placements::find()->where($params)->andWhere(['not', ['selector' => '']])->andWhere(['not', ['selector' => null]])->andWhere(['not', ['uri' => '']])->andWhere(['not', ['uri' => null]])->limit($limit)->orderBy($orderBy)->all();
                break;
        }

        return $placements ?? null;
    }

    /*
     * @return mixed
     */
    public function savePlacement(PlacementModel $model, int $id = null):int
    {
        if ($id ?? false) {
            $record = Placements::findOne(['id' => $id]);
        } else {
            $record = new Placements();
        }

        $record->access = $model->access;
        $record->group = $model->group;
        $record->groupId = $model->groupId;
        $record->guideId = $model->guideId;
        $record->moveMethod = $model->moveMethod;
        $record->selector = $model->selector;
        $record->uri = $this->formatUri($model->uri);

        $record->save();

        return $record->id;
    }
}
