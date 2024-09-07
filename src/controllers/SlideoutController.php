<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2024 Will Browar
 */

namespace wbrowar\guide\controllers;

use Craft;
use craft\web\Controller;
use wbrowar\guide\Guide;
use yii\web\Response;

class SlideoutController extends Controller
{
    public function actionIndex(): Response
    {
        $elementId = Craft::$app->getRequest()->getBodyParams()['elementId'] ?? null;
        $groupHandle = Craft::$app->getRequest()->getBodyParams()['groupHandle'] ?? null;

        if ($elementId && $groupHandle) {
            switch ($groupHandle) {
                case 'asset':
                    $element = Craft::$app->getAssets()->getAssetById($elementId);
                    break;
                case 'category':
                    $element = Craft::$app->getCategories()->getCategoryById($elementId);
                    break;
                case 'entry':
                    $element = Craft::$app->getEntries()->getEntryById($elementId);
                    break;
                case 'global':
                    $element = Craft::$app->getGlobals()->getSetById($elementId);
                    break;
                case 'user':
                    $element = Craft::$app->getUsers()->getUserById($elementId);
                    break;
            }
        }

        return $this->asJson(['data' => Guide::$view->renderTemplate('guide/slideout/slideout_display.twig', [
            'docs' => Craft::$app->getRequest()->getBodyParams()['docs'] === 'true',
            ($groupHandle == 'user' ? 'user' : 'element') => $element ?? null,
            'slug' => Craft::$app->getRequest()->getBodyParams()['slug'],
        ])]);
    }
}