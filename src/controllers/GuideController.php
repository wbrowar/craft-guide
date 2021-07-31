<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\controllers;

use craft\helpers\DateTimeHelper;
use craft\helpers\StringHelper;
use craft\helpers\UrlHelper;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Guide as GuideModel;

use Craft;
use craft\web\Controller;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionIndex()
    {
        return null;
    }

    /**
     * Deletes a single guide based on ID.
     *
     * actions/guide/guide/delete-guide
     *
     * @return mixed
     */
    public function actionDeleteGuide()
    {
        $params = Craft::$app->getRequest()->getBodyParams();

        $guide = Guide::$plugin->guide->getGuides([
            'id' => $params['id'],
        ], 'one');

        if ($guide) {
            $guide->delete();
        }

        return $this->redirect(UrlHelper::url($params['redirect'] ?? 'guide/organizer'));
    }

    /**
     * Duplicates a single guide based on ID.
     *
     * actions/guide/guide/duplicate-guide
     *
     * @return mixed
     */
    public function actionDuplicateGuide()
    {
        // Get guide ID from URL
        $id = Craft::$app->getRequest()->getSegment(3);

        // Get Guide from ID
        $guide = Guide::$plugin->guide->getGuides([
            'id' => $id,
        ], 'one')->toArray();

        // Remove items specific to original Guide
        unset($guide['id']);
        unset($guide['dateCreated']);
        unset($guide['dateUpdated']);
        unset($guide['uid']);
        $guide['parentUid'] = '';
        $guide['parentType'] = '__none__';

        $guideModel = new GuideModel($guide);

        Guide::$plugin->guide->saveGuide($guideModel);

        return $this->redirect(UrlHelper::url($params['redirect'] ?? 'guide/organizer'));
    }

    /**
     * Saves a guide based on parameters passed in.
     *
     * actions/guide/guide/save-guide
     *
     * @return mixed
     */
    public function actionSaveGuide()
    {
        $params = Craft::$app->getRequest()->getBodyParams();

        $title = !empty($params['title']) ? $params['title'] : 'Guide saved on ' . Date('F jS \a\t g:ia');

        $slug = ($params['slug'] ?? false) ? $params['slug'] : $this->_generateSlugFromTitle($title);

        $guide = new GuideModel([
            'authorId' => $params['authorId'],
            'content' => $params['content'],
            'contentSource' => $params['contentSource'] ?? 'field',
            'contentUrl' => $params['contentUrl'],
            'slug' => $slug,
            'summary' => $params['summary'],
            'template' => $params['template'],
            'title' => $title,
        ]);

        if ($guide->validate()) {
            Guide::$plugin->guide->saveGuide($guide, $params['id'] ?? null);

            return $this->redirect(UrlHelper::url($params['redirect'] ?? 'guide/organizer'));
        } else {
            // @TODO handle error correctly
//            Craft::dd('Error');
        }
    }

    /**
     * Sets a new Parent Type and UID for a given guide.
     *
     * actions/guide/guide/update-guide-parent
     *
     * @return mixed
     */
    public function actionUpdateGuideParent()
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $results = [
            'status' => 'error',
            'error' => '',
        ];

        if (($params['id'] ?? false) && ($params['parentType'] ?? false)) {
            $guide = Guide::$plugin->guide->getGuides(['id' => $params['id']], 'one')->toArray();

            if ($guide ?? false) {
                $guide['parentType'] = $params['parentType'];
                $guide['parentUid'] = $params['parentUid'] ?? null;

                $guideModel = $this->_guideModelFromRecordArray($guide);

                $saved = Guide::$plugin->guide->saveGuide($guideModel, $params['id']);

                if ($saved) {
                    $results['status'] = 'success';
                    return $this->asJson($results);
                }
                $results['error'] = 'Couldn’t save Guide.';
            } else {
                $results['error'] = 'Couldn’t find Guide.';
            }
        } else {
            $results['error'] = '`id` or `parentType` not provided.';
        }
        return $this->asJson($results);
    }

    // Private Methods
    // =========================================================================

    /**
     * Creates the slug for a guide from the passed in title.
     *
     * @title string The text that is converted into the slug
     * @return string
     */
    private function _generateSlugFromTitle(string $title):string
    {
        return StringHelper::toKebabCase($title);
    }

    /**
     * Generates a new GuideModel without the record’s default properties
     *
     * @guideArray array A guide in the form of an array
     * @return GuideModel
     */
    private function _guideModelFromRecordArray(array $guideArray):GuideModel
    {
        unset($guideArray['id']);
        unset($guideArray['dateCreated']);
        unset($guideArray['dateUpdated']);
        unset($guideArray['uid']);

        return new GuideModel($guideArray);
    }
}
