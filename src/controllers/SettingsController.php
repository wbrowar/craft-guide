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

use Craft;
use craft\helpers\UrlHelper;
use craft\web\Controller;
use wbrowar\guide\Guide;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class SettingsController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * actions/guide/settings
     * 
     * @return mixed
     */
    public function actionIndex():mixed
    {
        $params = Craft::$app->getRequest()->getBodyParams();
        $settings = Guide::$plugin->getSettings();

        $settings['templatePath'] = $this->removeSlashFromEnd($params['templatePath']);
        $settings['assetVolume'] = $params['assetVolume'];
        $settings['renderMarkdownDefault'] = $params['renderMarkdownDefault'];
        $settings['enableGuideCss'] = $params['enableGuideCss'];
        $settings['enableGuideJavascript'] = $params['enableGuideJavascript'];
        $settings['editPageLocation'] = $params['editPageLocation'];
        $settings['clientName'] = $params['clientName'];
        $settings['myCompanyName'] = $params['myCompanyName'];
        $settings['projectName'] = $params['projectName'];
        
        Craft::$app->getPlugins()->savePluginSettings(Guide::$plugin, $settings->toArray());

        return $this->redirect(UrlHelper::cpUrl('guide/settings'));
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
