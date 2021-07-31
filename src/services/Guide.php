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

use craft\elements\User;
use craft\helpers\Json;
use wbrowar\guide\models\Guide as GuideModel;

use Craft;
use craft\base\Component;
use wbrowar\guide\records\Guides;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Guide extends Component
{
    // Public Methods
    // =========================================================================
    
    /**
     * Finds Guides based on the supplied parameters.
     *
     *     Guide::$plugin->guide->getGuides()
     *
     * @param $params array Parameters passed into query builder to filter down records
     * @param $queryType string Change the expected query results
     * @return Guides|array|null
     */
    public function getGuides(array $params = [], string $queryType = 'all')
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
            $orderBy = 'dateCreated';
        }

        switch ($queryType) {
            case 'all':
                $userGuides = Guides::find()->where($params)->limit($limit)->orderBy($orderBy)->all();
                break;
            case 'new':
                $userGuides = new Guides([]);
                break;
            case 'one':
                $userGuides = Guides::find()->where($params)->orderBy($orderBy)->one();
                break;
            case 'count':
                $userGuides = Guides::find()->where($params)->count();
                break;
        }

        return $userGuides ?? null;
    }

    /**
     * Finds Guides based on the supplied parameters that the current user has permission to view.
     *
     *     Guide::$plugin->guide->getGuidesForUser()
     *
     * @param $params array Parameters passed into query builder to filter down records
     * @param $queryType string Change the expected query results
     * @param $user User The user to check access against
     * @return Guides|array|null
     */
    public function getGuidesForUser(array $params = [], string $queryType = 'all', User $user = null)
    {
        $guides = $this->getGuides($params, $queryType);
        $user = $user ?? Craft::$app->getUser()->getIdentity();

        $guidesForUser = [];
        foreach ($guides as $guide) {
            $addGuide = false;

            if ($guide->access == 'all') {
                $addGuide = true;
            } else if ($guide->access == 'admins' && $user->admin) {
                $addGuide = true;
            } else if ($guide->access == 'permissions' && $guide->permissions ?? false) {
                $permissions = Json::decodeIfJson($guide->permissions);
                foreach ($permissions as $permission) {
                    if ($user->can($permission)) {
                        $addGuide = true;
                    }
                }
            }

            if ($addGuide) {
                $guidesForUser[] = $guide;
            }
        }

        return $guidesForUser;
    }

    /**
     * Saves a User Guide based on the supplied parameters.
     *
     *     Guide::$plugin->guide->saveGuide()
     *
     * @param $model GuideModel The guide data to be saved
     * @param $id int The ID of the Guides record that will be updated
     * @return int
     */
    public function saveGuide(GuideModel $model, int $id = null):int
    {
        if ($id ?? false) {
            $record = Guides::findOne(['id' => $id]);
        } else {
            $record = new Guides();
        }

        $record->authorId = $model->authorId;
        $record->content = $model->content;
        $record->contentSource = $model->contentSource;
        $record->contentUrl = $model->contentUrl;
        $record->summary = $model->summary;
        $record->slug = $this->_getUniqueSlug($model->slug, $id ?? 0);
        $record->template = $model->template;
        $record->title = $model->title;

        $record->save();

        return $record->id;
    }

    // Private Methods
    // =========================================================================

    /**
     * Update a slug if it is not unique.
     *
     * @param $slug string The original slug
     * @param $id int The ID of a guide that is being saved
     * @return string
     */
    private function _getUniqueSlug(string $slug, int $id):string
    {
        // Get all current slugs
        $allGuideSlugs = Guides::find()->select(['slug', 'id'])->all();
        $slugs = [];
        foreach ($allGuideSlugs as $item) {
            if ($item->id != $id) {
                $slugs[] = $item->slug;
            }
        }

        while (in_array($slug, $slugs)) {
            $slug .= '-1';
        }

        return $slug;
    }
}
