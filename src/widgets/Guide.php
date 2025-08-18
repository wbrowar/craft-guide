<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\widgets;

use Craft;
use craft\base\Widget;
use wbrowar\guide\Guide as GuidePlugin;

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

    /**
     * @var bool
     */
    public $showTitle = false;

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
    public function getTitle(): ?string
    {
        $guide = $this->getGuideFromGuideId();

        if ($guide ?? false) {
            return $guide->title;
        } else {
            return Craft::t('guide', 'Guide');
        }
    }

    /**
     * @inheritdoc
     */
    public static function icon(): ?string
    {
        return Craft::getAlias('@wbrowar/guide/icon-mask.svg');
    }

    /**
     * @inheritdoc
     */
    public static function maxColspan(): ?int
    {
        return null;
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
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
    public function getSettingsHtml(): ?string
    {
        if (GuidePlugin::$pro) {
            return Craft::$app->getView()->renderTemplate(
                'guide/widgets/guide_settings',
                [
                    'selectableGuides' => $this->getSelectableGuides(),
                    'userOperations' => GuidePlugin::$plugin->getUserOperations(),
                    'widget' => $this,
                ]
            );
        }

        return null;
    }

    /**
     * @inheritdoc
     */
    public function getBodyHtml(): ?string
    {
        return Craft::$app->getView()->renderTemplate(
            'guide/widgets/guide_body',
            [
                'guide' => $this->getGuideFromGuideId(),
                'proEdition' => GuidePlugin::$pro,
                'showTitle' => $this->showTitle,
                'widgetId' => $this->id,
            ]
        );
    }


    /**
     * @inheritdoc
     */
    public function getSelectableGuides()
    {
        $placements = GuidePlugin::$plugin->placement->getPlacements(['group' => 'widget']);
        return GuidePlugin::$plugin->guide->getGuidesForUserFromPlacements($placements);
    }

    /**
     * @inheritdoc
     */
    public function getGuideFromGuideId()
    {
        foreach ($this->getSelectableGuides() as $getSelectableGuide) {
            if ($getSelectableGuide['id'] == $this->guideId) {
                return $getSelectableGuide;
            }
        }
        return null;
    }
}
