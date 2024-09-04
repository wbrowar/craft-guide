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
     * Format URI to be stored as a Placement URI
     *
     * @return mixed
     */
    public function formatUri($uri)
    {
        $cpTrigger = Craft::$app->getConfig()->getGeneral()->cpTrigger ?? '';

        // Remove leading slash
        if (substr($uri, 0, 1) == '/') {
            $uri = substr($uri, 1);
        }

        // Remove CP trigger
        if (substr($uri, 0, strlen($cpTrigger)) == $cpTrigger) {
            $uri = substr($uri, strlen($cpTrigger));
        }

        // Remove leading slash (if cpTrigger was included)
        if (substr($uri, 0, 1) == '/') {
            $uri = substr($uri, 1);
        }

        // Remove trailing slash
        if (substr($uri, strlen($uri) - 1, 1) == '/') {
            $uri = substr($uri, 1);
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
                    'description' => 'All asset edit pages',
                    'header' => 'Assets',
                    'headerSize' => $headerMd,
                    'label' => 'Assets',
                    'name' => 'asset',
                    'groupId' => null,
                ];

                foreach ($assetVolumes as $item) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => 'Assets in the ' . $item->name . ' volume',
                        'header' => $item->name,
                        'label' => 'Asset Volumes',
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
                    'description' => 'All category edit pages',
                    'header' => 'Categories',
                    'headerSize' => $headerMd,
                    'label' => 'Categories',
                    'name' => 'category',
                    'groupId' => null,
                ];

                foreach ($categoryGroups as $item) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => 'Categories in the ' . $item->name . ' group',
                        'header' => $item->name,
                        'headerSize' => $headerSm,
                        'label' => 'Category Groups',
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
                    'description' => 'All entry edit pages',
                    'header' => 'Entries',
                    'headerSize' => $headerMd,
                    'label' => 'Entries',
                    'name' => 'entry',
                    'groupId' => null,
                ];

                foreach ($sections as $section) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => 'Entries in the ' . $section->name . ' section',
                        'header' => $section->name,
                        'headerSize' => $headerSm,
                        'label' => 'Sections',
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
                    'description' => 'All globals edit pages',
                    'header' => 'Globals',
                    'headerSize' => $headerMd,
                    'label' => 'Globals',
                    'name' => 'global',
                    'groupId' => null,
                ];

                foreach ($globalSets as $globalSet) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => $globalSet->name . ' global edit pages',
                        'header' => $globalSet->name,
                        'headerSize' => $headerSm,
                        'label' => 'Global Sets',
                        'name' => 'globalSet',
                        'groupId' => $globalSet->uid,
                    ];
                }
            }

            // Users
            $groups[] = [
                'columns' => $colSm,
                'description' => 'All user edit pages',
                'header' => 'Users',
                'headerSize' => $headerMd,
                'label' => 'Users',
                'name' => 'user',
                'groupId' => null,
            ];

            // Widgets
            $groups[] = [
                'columns' => $colMd,
                'description' => 'User created widgets',
                'header' => 'Widgets',
                'headerSize' => $headerMd,
                'label' => 'Widgets',
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
            $orderBy = 'weight';
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
        $record->selector = $model->selector;
        $record->weight = $model->weight ?? 1;
        $record->uri = $this->formatUri($model->uri);

        $record->save();

        return $record->id;
    }
}
