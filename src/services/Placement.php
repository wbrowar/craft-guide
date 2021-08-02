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

use craft\helpers\Json;
use craft\helpers\UrlHelper;
use wbrowar\guide\Guide;

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
    // todo getGuidesForPlacement - after getting placement data, query guides
    // todo getPlacementsForGroup - get all placements for a group, like nav, section, etc ...
    // todo getPlacementsForUri - get all placements for a specific URI
    // todo savePlacement

    /*
     * @return mixed
     */
    public function getOrganizer()
    {
        $organizer = Placements::find()
            ->one();

        // If an organizer exists, use that
        if ($organizer) {
            return $organizer;
        }

        // If no organizer exists, create a new one and return that
        $newOrganizer = new PlacementModel();
        $this->saveOrganizer($newOrganizer);
        $organizer = Placements::find()
            ->one();

        return $organizer;
    }

    /*
     * @return mixed
     */
    public function getOrganizerConfig()
    {
        $organizer = $this->getOrganizer();

        if (!$organizer) {
            $organizer = new Placements();
        }

        $config = [
            'categories' => [],
            'guides' => [],
            'organizer' => [
                'cpNav' => ($organizer->cpNav ?? false) ? Json::decodeIfJson($organizer->cpNav) : [],
                'id' => $organizer->id ?? null,
            ],
            'sections' => [],
            'showDashboard' => Guide::$pro,
            'showEditPages' => Guide::$pro,
            'showUsers' => Craft::$app->getEdition() == Craft::Pro,
            'volumes' => [],
        ];

        $guides = Guide::$plugin->guide->getGuides([]);
        foreach ($guides as $guide) {
            $config['guides'][] = [
                'deleteUrl' => UrlHelper::url('guide/delete/' . $guide->id),
                'duplicateUrl' => UrlHelper::url('guide/duplicate/' . $guide->id),
                'editUrl' => UrlHelper::url('guide/edit/' . $guide->id),
                'id' => $guide->id,
                'title' => $guide->title,
                'parentType' => $guide->parentType,
                'parentUid' => $guide->parentUid,
                'showSettings' => false,
                'summary' => $guide->summary,
                'viewUrl' => UrlHelper::url('guide/page/' . $guide->slug),
            ];
        }

        $categories = Craft::$app->getCategories()->getAllGroups();
        foreach ($categories as $category) {
            $config['categories'][] = [
                'name' => $category->name,
                'uid' => $category->uid,
            ];
        }

        $sections = Craft::$app->getSections()->getAllSections();
        foreach ($sections as $section) {
            $config['sections'][] = [
                 'name' => $section->name,
                 'uid' => $section->uid,
            ];
        }

        $volumes = Craft::$app->getVolumes()->getAllVolumes();
        foreach ($volumes as $volume) {
            $config['volumes'][] = [
                'name' => $volume->name,
                'uid' => $volume->uid,
            ];
        }

        return $config;
    }

    /*
     * @return mixed
     */
    public function saveOrganizer(PlacementModel $model, int $id = null):int
    {
        if ($id ?? false) {
            $record = Placements::findOne(['id' => $id]);
        } else {
            $record = new Placements();
        }

        $record->cpNav = $model->cpNav;

        $record->save();

        return $record->id;
    }
}
