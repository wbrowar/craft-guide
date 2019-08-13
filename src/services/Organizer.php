<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\services;

use craft\helpers\Json;
use craft\helpers\UrlHelper;
use wbrowar\guide\Guide;

use Craft;
use craft\base\Component;
use wbrowar\guide\models\Organizer as OrganizerModel;
use wbrowar\guide\records\Organizers;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Organizer extends Component
{
    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */
    public function getOrganizer()
    {
        $organizer = Organizers::find()
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
            $organizer = new Organizers();
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

        return $config;
    }

    /*
     * @return mixed
     */
    public function saveOrganizer(OrganizerModel $model, int $id = null):int
    {
        if ($id ?? false) {
            $record = Organizers::findOne(['id' => $id]);
        } else {
            $record = new Organizers();
        }

        $record->cpNav = $model->cpNav;

        $record->save();

        return $record->id;
    }
}
