<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\services;

use craft\helpers\StringHelper;
use wbrowar\guide\Guide;

use Craft;
use craft\base\Component;
use craft\web\View;

/**
 * GuideService Service
 *
 * All of your plugin’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class GuideService extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin file, call it like this:
     *
     *     Guide::$plugin->guideService->exampleService()
     *
     * @return mixed
     */
    public function updateGuideCpNav($array = [])
    {
        $newNav = [];
        $settings = Guide::$plugin->getSettings();

        // Process array values
        foreach ($array as $key => $item) {
            $itemKey = StringHelper::toKebabCase($key);
            $itemTitle = $key;

            // Get template path from item
            if (is_array($item)) {
                $itemTemplateString = $item['template'] ?? null;
                $itemAdmin = $item['admin'] ?? false;
                $itemPermissions = $item['permissions'] ?? [];
            } else if (is_string($item)) {
                $itemTemplateString = $item;
            }

            // Verify that template path file exists
            if (isset($itemTemplateString)) {
                Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_SITE);
                if (Craft::$app->view->doesTemplateExist($itemTemplateString)) {
                    $itemTemplate = $itemTemplateString;
                }
                Craft::$app->view->setTemplateMode(View::TEMPLATE_MODE_CP);
            }

            // Add navigation item
            if (($itemKey ?? false) && ($itemTitle ?? false) && ($itemTemplate ?? false)) {
                $newNav[$itemKey] = [
                    'id' => $itemKey,
                    'title' => $itemTitle,
                    'template' => $itemTemplate,
                ];

                if ($itemAdmin ?? false) {
                    $newNav[$itemKey]['admin'] = $itemAdmin;
                }

                if ($itemPermissions ?? false) {
                    $newNav[$itemKey]['permissions'] = $itemPermissions;
                }
            }
        }

        // Save Guide settings with Updated Nav
        $settings['guideNav'] = $newNav;
        Craft::$app->plugins->savePluginSettings(Guide::$plugin, $settings->toArray());

        return true;
    }
}
