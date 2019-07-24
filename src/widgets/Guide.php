<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\widgets;

use wbrowar\guide\Guide as GuidePlugin;
use wbrowar\guide\assetbundles\guidewidget\GuideWidgetAsset;

use Craft;
use craft\base\Widget;

/**
 * Guide Widget
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Guide extends Widget
{

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $guideId = '';

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('guide', 'Guide');
    }

    /**
     * @inheritdoc
     */
    public static function iconPath()
    {
        return Craft::getAlias("@wbrowar/guide/assetbundles/guide/dist/icon/icon-mask.svg");
    }

    /**
     * @inheritdoc
     */
    public static function maxColspan()
    {
        return null;
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules = array_merge(
            $rules,
            [
                ['guideId', 'required'],
            ]
        );
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'guide/widgets/guide_settings',
            [
                'userOperations' => GuidePlugin::$userOperations,
                'selectableGuides' => GuidePlugin::$plugin->guide->getGuidesForUser(['parentType' => 'widget']),
                'widget' => $this,
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function getBodyHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'guide/widgets/guide_body',
            [
                'guide' => GuidePlugin::$plugin->guide->getGuidesForUser(['id' => $this->guideId, 'parentType' => 'widget']),
                'proEdition' => GuidePlugin::$pro,
                'settings' => GuidePlugin::$settings,
            ]
        );
    }
}
