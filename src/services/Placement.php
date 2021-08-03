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

    /*
     * @return mixed
     */
    public function getPlacements(array $params = [], string $queryType = 'all')
    {
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
