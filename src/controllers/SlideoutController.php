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
        return $this->asJson(['data' => Guide::$view->renderTemplate('guide/slideout.twig', [
            'slug' => Craft::$app->getRequest()->getBodyParams()['slug'],
        ])]);
    }
}