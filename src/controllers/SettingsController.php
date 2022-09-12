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

use craft\fields\data\ColorData;
use craft\helpers\UrlHelper;
use craft\models\VolumeFolder;
use craft\records\Volume;
use wbrowar\guide\Guide;

use Craft;
use craft\web\Controller;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class SettingsController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
//    protected $allowAnonymous = ['index'];

    // Public Methods
    // =========================================================================

    /**
     * actions/guide/settings
     * 
     * @return mixed
     */
    public function actionIndex()
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $settings = Guide::$plugin->getSettings();

        switch ($params['page']) {
            case 'general':
                $settings['assetVolume'] = $params['assetVolume'];
                $settings['editPageTeleportTarget'] = $params['editPageTeleportTarget'];
                $settings['templatePath'] = $this->removeSlashFromEnd($params['templatePath']);
                break;
            case 'variables':
                $settings['clientName'] = $params['clientName'];
                $settings['myCompanyName'] = $params['myCompanyName'];
                $settings['projectName'] = $params['projectName'];
                break;
        }
        
        Craft::$app->getPlugins()->savePluginSettings(Guide::$plugin, $settings->toArray());

        return $this->redirect(UrlHelper::cpUrl('guide/settings/' . $params['page']));
    }

    // Private Methods
    // =========================================================================

    /**
     * @return string
     */
    private function removeSlashFromEnd($path):string
    {
        return preg_replace('{/$}', '', $path);
    }
}
