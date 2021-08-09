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

use craft\helpers\Assets;
use craft\helpers\FileHelper;
use craft\helpers\Json;
use craft\web\View;
use wbrowar\guide\Guide;
use wbrowar\guide\models\Guide as GuideModel;

use Craft;
use craft\web\Controller;
use wbrowar\guide\models\Placement as PlacementModel;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class ImportExportController extends Controller
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
     * Installs a downloaded template by importing its templates and navigation info into Guide.
     *
     * actions/guide/import-export/import-json
     *
     * @return mixed
     */
    public function actionImportJson()
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $results = [
            'status' => 'error',
            'error' => '',
        ];

        if ($params['guideData'] ?? false) {
            $guideData = Json::decodeIfJson($params['guideData']);

            // Import guides
            if ($guideData['guides'] ?? false) {
                foreach ($guideData['guides'] as $item) {
                    Guide::$plugin->importExport->importGuideData($item);
                }

                $results['status'] = 'success';
            }
        }

        return $this->asJson($results);
    }
}
