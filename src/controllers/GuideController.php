<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\controllers;

use Craft;
use craft\helpers\StringHelper;
use craft\helpers\UrlHelper;
use craft\web\Controller;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Guide as GuideModel;

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

        return $this->redirect(UrlHelper::url($params['redirect'] ?? 'guide/list'));
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

        $slug = ($params['slug'] ?? false) ? $params['slug'] : $this->generateSlugFromTitle($title);
        $title = !empty($params['title']) ? $params['title'] : 'Untitled Guide saved on ' . Date('F jS \a\t g:ia');
        $totalGuides = Guide::$plugin->guide->getGuides([], 'count') ?? 0;
        $weight = $params['weight'] ?? ($totalGuides + 1);

        $guide = new GuideModel([
            'authorId' => $params['authorId'],
            'content' => $params['contentEditor'],
            'contentCss' => $params['contentCss'],
            'contentJavascript' => $params['contentJavascript'],
            'contentSource' => !empty($params['contentSource']) && Guide::$pro ? $params['contentSource'] : 'template',
            'contentUrl' => $params['contentUrl'],
            'renderMarkdown' => $params['renderMarkdown'],
            'slug' => $slug,
            'summary' => $params['summary'],
            'template' => $params['template'],
            'title' => $title,
            'weight' => $weight,
        ]);

        if ($guide->validate()) {
            Guide::$plugin->guide->saveGuide($guide, $params['id'] ?? null);

            return $this->redirect(UrlHelper::url($params['redirect'] ?? 'guide/list'));
        } else {
        }
    }

    // Private Methods
    // =========================================================================

    /**
     * Creates the slug for a guide from the passed in title.
     *
     * @title string The text that is converted into the slug
     * @return string
     */
    private function generateSlugFromTitle(string $title):string
    {
        return StringHelper::toKebabCase($title);
    }
}
