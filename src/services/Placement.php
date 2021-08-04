<?php
/**
 * Guide plugin for Craft CMS 3.x
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

    // todo Add functions:
    // todo deletePlacement
    // todo getAllPlacements - for organizer
    // todo getPlacementGroups - for organizer
    // todo getGuidesForPlacement - after getting placement data, query guides
    // todo getPlacementsForGroup - get all placements for a group, like nav, section, etc ...
    // todo getPlacementsForUri - get all placements for a specific URI
    // todo savePlacement

    /**
     * Get all group information for the Organizer
     *
     * @return mixed
     */
    public function getPlacementGroups(): mixed
    {
        $colLg = 3;
        $colMd = 2;
        $colSm = 1;

        $groups = [[
            'columns' => $colLg,
            'description' => 'The Guide CP Section',
            'header' => 'Guide',
            'label' => 'Guide',
            'name' => 'nav',
            'groupId' => null,
        ]];
        
        if (Guide::$pro) {
            // Assets and asset volumes - if any
            $assetVolumes = Craft::$app->getVolumes()->getAllVolumes();

            if ($assetVolumes ?? false) {
                $groups[] = [
                    'columns' => $colMd,
                    'description' => 'All asset edit pages',
                    'header' => 'Assets',
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
                        'name' => 'assetVolume',
                        'groupId' => intval($item->id),
                    ];
                }
            }

            // Categories and category groups - if any
            $categoryGroups = Craft::$app->getCategories()->getAllGroups();

            if ($categoryGroups ?? false) {
                $groups[] = [
                    'columns' => $colMd,
                    'description' => 'All category edit pages',
                    'header' => 'Categories',
                    'label' => 'Categories',
                    'name' => 'category',
                    'groupId' => null,
                ];

                foreach ($categoryGroups as $item) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => 'Categories in the ' . $item->name . ' group',
                        'header' => $item->name,
                        'label' => 'Category Groups',
                        'name' => 'categoryGroup',
                        'groupId' => intval($item->id),
                    ];
                }
            }


            // Entries and sections - if any
            $sections = Craft::$app->getSections()->getAllSections();

            if ($sections ?? false) {
                $groups[] = [
                    'columns' => $colMd,
                    'description' => 'All entry edit pages',
                    'header' => 'Entries',
                    'label' => 'Entries',
                    'name' => 'entry',
                    'groupId' => null,
                ];

                foreach ($sections as $section) {
                    $groups[] = [
                        'columns' => $colSm,
                        'description' => 'Entries in the ' . $section->name . ' section',
                        'header' => $section->name,
                        'label' => 'Sections',
                        'name' => 'section',
                        'groupId' => intval($section->id),
                    ];

                    if ($section->type != $section::TYPE_SINGLE) {
                        $entryTypesForSection = $section->getEntryTypes();

                        foreach ($entryTypesForSection as $entryType) {
                            $groups[] = [
                                'columns' => $colSm,
                                'description' => 'Entries in the ' . $entryType->name . ' type',
                                'header' => $entryType->name,
                                'label' => 'Entry Type',
                                'name' => 'entryType',
                                'groupId' => intval($entryType->id),
                            ];
                        }
                    }
                }
            }

            // Users
            $groups[] = [
                'columns' => $colMd,
                'description' => 'All user edit pages',
                'header' => 'Users',
                'label' => 'Users',
                'name' => 'user',
                'groupId' => null,
            ];

            $userGroups = Craft::$app->getUserGroups()->getAllGroups();

            foreach ($userGroups as $userGroup) {
                $groups[] = [
                    'columns' => $colSm,
                    'description' => 'Entries in the ' . $userGroup->name . ' type',
                    'header' => $userGroup->name,
                    'label' => 'User Groups',
                    'name' => 'userGroup',
                    'groupId' => intval($userGroup->id),
                ];
            }

            // Widgets
            $groups[] = [
                'columns' => $colMd,
                'description' => 'User created widgets',
                'header' => 'Widgets',
                'label' => 'Widgets',
                'name' => 'widget',
                'groupId' => null,
            ];

            // UI Elements
            $groups[] = [
                'columns' => $colMd,
                'description' => 'Guides added to UI Elements',
                'header' => 'UI Elements',
                'label' => 'UI Elements',
                'name' => 'uiElement',
                'groupId' => null,
            ];

            // URIs
            $groups[] = [
                'columns' => $colLg,
                'description' => 'Individual pages in the CP',
                'header' => 'Control Panel URIs',
                'label' => 'Control Panel URIs',
                'name' => 'uri',
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
    public function getPlacements(array $params = [], string $queryType = 'all')
    {
        if (Guide::$pro) {
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
                    $placements = Placements::find()->where($params)->limit($limit)->orderBy($orderBy)->all();
                    break;
                case 'new':
                    $placements = new Placements([]);
                    break;
                case 'one':
                    $placements = Placements::find()->where($params)->orderBy($orderBy)->one();
                    break;
                case 'count':
                    $placements = Placements::find()->where($params)->count();
                    break;
            }
        }

        return $placements ?? null;
    }

    /*
     * @return mixed
     */
    public function getOrganizerConfig()
    {
//        $organizer = $this->getOrganizer();
//
//        if (!$organizer) {
//            $organizer = new Placements();
//        }
//
//        $config = [
//            'categories' => [],
//            'guides' => [],
//            'organizer' => [
//                'cpNav' => ($organizer->cpNav ?? false) ? Json::decodeIfJson($organizer->cpNav) : [],
//                'id' => $organizer->id ?? null,
//            ],
//            'sections' => [],
//            'showDashboard' => Guide::$pro,
//            'showEditPages' => Guide::$pro,
//            'showUsers' => Craft::$app->getEdition() == Craft::Pro,
//            'volumes' => [],
//        ];
//
//        $guides = Guide::$plugin->guide->getGuides([]);
//        foreach ($guides as $guide) {
//            $config['guides'][] = [
//                'deleteUrl' => UrlHelper::url('guide/delete/' . $guide->id),
//                'duplicateUrl' => UrlHelper::url('guide/duplicate/' . $guide->id),
//                'editUrl' => UrlHelper::url('guide/edit/' . $guide->id),
//                'id' => $guide->id,
//                'title' => $guide->title,
//                'parentType' => $guide->parentType,
//                'parentUid' => $guide->parentUid,
//                'showSettings' => false,
//                'summary' => $guide->summary,
//                'viewUrl' => UrlHelper::url('guide/page/' . $guide->slug),
//            ];
//        }
//
//        $categories = Craft::$app->getCategories()->getAllGroups();
//        foreach ($categories as $category) {
//            $config['categories'][] = [
//                'name' => $category->name,
//                'uid' => $category->uid,
//            ];
//        }
//
//        $sections = Craft::$app->getSections()->getAllSections();
//        foreach ($sections as $section) {
//            $config['sections'][] = [
//                 'name' => $section->name,
//                 'uid' => $section->uid,
//            ];
//        }
//
//        $volumes = Craft::$app->getVolumes()->getAllVolumes();
//        foreach ($volumes as $volume) {
//            $config['volumes'][] = [
//                'name' => $volume->name,
//                'uid' => $volume->uid,
//            ];
//        }
//
//        return $config;
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
        $record->portalMethod = $model->portalMethod;
        $record->selector = $model->selector;
        $record->uri = $model->uri;

        $record->save();

        return $record->id;
    }
}
