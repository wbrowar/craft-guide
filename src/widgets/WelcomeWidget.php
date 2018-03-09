<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2018 Will Browar
 */

namespace wbrowar\guide\widgets;

use wbrowar\guide\Guide;
use wbrowar\guide\assetbundles\welcomewidgetwidget\WelcomeWidgetWidgetAsset;

use Craft;
use craft\base\Widget;

/**
 * Guide Widget
 *
 * Dashboard widgets allow you to display information in the Admin CP Dashboard.
 * Adding new types of widgets to the dashboard couldn’t be easier in Craft
 *
 * https://craftcms.com/docs/plugins/widgets
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class WelcomeWidget extends Widget
{
    // Static Methods
    // =========================================================================

    /**
     * Returns the display name of this class.
     *
     * @return string The display name of this class.
     */
    public static function displayName(): string
    {
        return Craft::t('guide', 'Welcome');
    }

    /**
     * Returns the path to the widget’s SVG icon.
     *
     * @return string|null The path to the widget’s SVG icon
     */
    public static function iconPath()
    {
        return Craft::getAlias("@wbrowar/guide/assetbundles/guidewidgetwidget/dist/img/GuideWidget-icon.svg");
    }

    /**
     * Returns the widget’s maximum colspan.
     *
     * @return int|null The widget’s maximum colspan, if it has one
     */
    public static function maxColspan()
    {
        return null;
    }

    /**
     * @return null|string
     */
    public function getSettingsHtml()
    {
        return null;
    }

    /**
     * Returns the widget's body HTML.
     *
     * @return string|false The widget’s body HTML, or `false` if the widget
     *                      should not be visible. (If you don’t want the widget
     *                      to be selectable in the first place, use {@link isSelectable()}.)
     */
    public function getBodyHtml()
    {
        Craft::$app->getView()->registerAssetBundle(WelcomeWidgetWidgetAsset::class);

        return Craft::$app->getView()->renderTemplate('guide/_components/widgets/WelcomeWidget_body');
    }
}
