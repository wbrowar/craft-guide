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
    public function getTitle(): string
    {
        // Remove title
        return '';
    }

    /**
     * @inheritdoc
     */
    public static function icon()
    {
        return Craft::getAlias('@wbrowar/guide/assetbundles/static/icon-mask.svg');
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
        if (GuidePlugin::$pro) {
            $placements = GuidePlugin::$plugin->placement->getPlacements(['group' => 'widget']);

            return Craft::$app->getView()->renderTemplate(
                'guide/widgets/guide_settings',
                [
                    'selectableGuides' => GuidePlugin::$plugin->guide->getGuidesForUserFromPlacements($placements),
                    'userOperations' => GuidePlugin::$userOperations,
                    'widget' => $this,
                ]
            );
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    public function getBodyHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'guide/widgets/guide_body',
            [
                'guide' => $this->_getGuideFromGuideId(),
                'proEdition' => GuidePlugin::$pro,
                'widgetId' => $this->id,
            ]
        );
    }


    /**
     * @inheritdoc
     */
    public function _getGuideFromGuideId()
    {
        return GuidePlugin::$plugin->guide->getGuides(['id' => $this->guideId], 'one');
    }
}
