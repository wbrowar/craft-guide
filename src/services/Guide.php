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
use wbrowar\guide\Guide as GuidePlugin;
use wbrowar\guide\helpers\GuideHelpers;
use wbrowar\guide\models\Guide as GuideModel;

use Craft;
use craft\base\Component;
use LitEmoji\LitEmoji;
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
        if (!GuidePlugin::$pro) {
            $params['contentSource'] = 'template';
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
            $orderBy = 'title';
        }

        switch ($queryType) {
            case 'all':
                $guides = Guides::find()->where($params)->limit($limit)->orderBy($orderBy)->all();

                foreach ($guides as $guide) {
                    if (!is_int($guide) && $guide->content) {
                        $guide->content = GuideHelpers::decodeEmoji($guide->content);
                    }
                }

                break;
            case 'new':
                $guides = new Guides([]);
                break;
            case 'one':
                $guides = Guides::find()->where($params)->orderBy($orderBy)->one();

                $guides->content = GuideHelpers::decodeEmoji($guides->content);

                break;
            case 'count':
                $guides = Guides::find()->where($params)->count();
                break;
            case 'ids':
                $guideData = Guides::find()->where($params)->select(['id'])->all();
                $guides = [];
                foreach ($guideData as $data) {
                    $guides[] = $data->id;
                }
                break;
        }

        return $guides ?? null;
    }

    /**
     * Finds Guides based on the supplied parameters that the current user has permission to view.
     *
     *     Guide::$plugin->guide->getGuidesForUserFromPlacements()
     *
     * @param $placements Placement
     * @param $user User The user to check access against
     *                   
     * @return Guides | array | null
     */
    public function getGuidesForUserFromPlacements(array $placements, User $user = null)
    {
        $user = $user ?? Craft::$app->getUser()->getIdentity();

        $guidesIds = [];
        $authorOnlyIds = [];
        foreach ($placements as $placement) {
            if (
                $placement->access == 'all'
                || $placement->access == 'admins' && $user->admin
                || $placement->access == 'author'
            ) {
                $guidesIds[] = $placement->guideId;
            }
        }
        
        $guides = $this->getGuides(['id' => $guidesIds]);
        $guidesForUser = [];
        foreach ($guides as $guide) {
            if (in_array($guide->id, $authorOnlyIds)) {
                if ($guide->authorId == $user->id) {
                    $guidesForUser[] = $guide;
                }
            } else {
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
        $record->content = GuideHelpers::encodeEmoji($model->content);
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
