<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\guide\controllers;

use Craft;
use craft\helpers\Json;
use craft\web\Controller;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Placement as PlacementModel;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     3.0.0
 */
class PlacementController extends Controller
{
    // Public Methods
    // =========================================================================

    // todo Add functions:
    // todo actionDeletePlacement

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
     * actions/guide/placement/delete-placement
     *
     * @return mixed
     */
    public function actionDeletePlacement()
    {
        $params = Json::decodeIfJson(Craft::$app->getRequest()->getBodyParams()['data']);
        $results = [
            'status' => 'error',
            'error' => '',
        ];

        $placement = Guide::$plugin->placement->getPlacements([
            'id' => $params['id'],
        ], 'one');

        if ($placement) {
            $delete = $placement->delete();

            if ($delete) {
                $results['status'] = 'success';
            }
        }

        return $this->asJson($results);
    }

    /**
     * Get all placements for the Organizer
     *
     * actions/guide/placement/get-all-placements
     *
     * @return mixed
     */
    public function actionGetAllPlacements()
    {
        $placements = Guide::$plugin->placement->getPlacements();

        $placementsCleaned = [];
        if ($placements ?? false) {
            foreach ($placements as $placement) {
                if ($placement['dateCreated'] ?? false) {
                    unset($placement['dateCreated']);
                }
                if ($placement['dateUpdated'] ?? false) {
                    unset($placement['dateUpdated']);
                }
                if ($placement['uid'] ?? false) {
                    unset($placement['uid']);
                }
                $placementsCleaned[] = $placement;
            }
        }

        return $this->asJson($placementsCleaned);
    }

    /**
     * Save Placement
     *
     * actions/guide/placement/save-placement
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
            'selector' => $params['selector'],
            'uri' => $params['uri'],
            'weight' => $params['weight'],
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
