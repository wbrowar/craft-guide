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

        if ($this->showTitle) {
            if ($guide ?? false) {
                return $guide->title;
            } else {
                return Craft::t('guide', 'Guide');
            }
        }
        return '';
    }

    /**
     * @inheritdoc
     */
    public static function icon(): ?string
    {
        return Craft::getAlias('@wbrowar/guide/assetbundles/static/icon-mask.svg');
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
            $placements = GuidePlugin::$plugin->placement->getPlacements(['group' => 'widget']);

            return Craft::$app->getView()->renderTemplate(
                'guide/widgets/guide_settings',
                [
                    'selectableGuides' => GuidePlugin::$plugin->guide->getGuidesForUserFromPlacements($placements),
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
                'widgetId' => $this->id,
            ]
        );
    }


    /**
     * @inheritdoc
     */
    public function getGuideFromGuideId()
    {
        return GuidePlugin::$plugin->guide->getGuides(['id' => $this->guideId], 'one');
    }
}
