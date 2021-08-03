<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\guide\controllers;

use craft\helpers\Json;
use wbrowar\guide\Guide;

use Craft;
use craft\web\Controller;
use wbrowar\guide\models\Placement as PlacementModel;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     3.0.0
 */
class PlacementController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
//    protected $allowAnonymous = ['get-all-placements'];

    // Public Methods
    // =========================================================================

    // todo Add functions:
    // todo actionDeletePlacement
    // todo actionSavePlacement

    /**
     * @return mixed
     */
    public function actionIndex()
    {
        return null;
    }

    /**
     * Saves Guide CP navigation for site.
     *
     * actions/guide/placement/get-all-placements
     *
     * @return mixed
     */
    public function actionGetAllPlacements()
    {
        $placements = Guide::$plugin->placement->getPlacements();

        return $this->asJson($placements);
    }

    /**
     * Saves Guide CP navigation for site.
     *
     * @return mixed
     */
    public function actionSavePlacement()
    {
        $params = Json::decodeIfJson(Craft::$app->getRequest()->getBodyParams()['data']);
        $results = [
            'status' => 'error',
            'error' => '',
        ];

        $placement = new PlacementModel([
            'access' => $params['access'],
            'group' => $params['group'],
            'groupId' => $params['groupId'],
            'guideId' => $params['guideId'],
            'portalMethod' => $params['portalMethod'],
            'selector' => $params['selector'],
            'uri' => $params['uri'],
        ]);

        if ($placement->validate()) {
            $saved = Guide::$plugin->placement->savePlacement($placement, $params['id'] ?? null);

            if ($saved) {
                $results['status'] = 'success';
            } else {
                $results['error'] = 'Couldn’t save Placement.';
            }
        } else {
            $results['error'] = 'Couldn’t save Placement. Invalid data.';
        }

        return $this->asJson($results);
    }
}
