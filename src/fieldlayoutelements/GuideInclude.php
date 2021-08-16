<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2020 Will Browar
 */

namespace wbrowar\guide\fieldlayoutelements;

use Craft;
use craft\base\ElementInterface;
use craft\fieldlayoutelements\BaseUiElement;
use craft\helpers\Html;
use craft\helpers\Template;
use wbrowar\guide\Guide;

/**
 * GuideInclude represents a Guide UI element that can be included in field layouts.
 *
 * @author    Will Browar
 * @package   Guide
 * @since     2.2.0
 */
class GuideInclude extends BaseUiElement
{
    /**
     * @var boolean Displays a guide header and outline to distinguish guide from other fields
     */
    public $displayGuideUi;

    /**
     * @var string The guide selected to be included
     */
    public $guideId;

    /**
     * @inheritdoc
     */
    protected function selectorLabel(): string
    {
        return Craft::t('guide', 'Guide 2 – REMOVE');
    }

    /**
     * @inheritdoc
     */
    protected function selectorIcon()
    {
        return Craft::getAlias('@wbrowar/guide/assetbundles/dist/icon-mask.svg');
    }

    /**
     * @inheritdoc
     */
    public function formHtml(ElementInterface $element = null, bool $static = false)
    {
        Craft::$app->getDeprecator()->log('wbrowar\guide\fieldlayoutelements\GuideInclude' . Craft::$app->getRequest()->getFullUri(), '`Guide 2` UI Element was found on `' . Craft::$app->getRequest()->getAbsoluteUrl() . '` is deprecated and should be replaced with a `Guide 3` UI Element.');

        return $this->_error(Craft::t('guide', 'Guide 2 Element UIs have been removed and cannot be removed automatically in Craft. Please replace this with a new Guide UI Element.'), 'warning');
    }

    /**
     * Renders an error message.
     *
     * @param string $error
     * @param string $errorClass
     * @return string
     */
    private function _error(string $error, string $errorClass): string
    {
        $icon = Html::tag('span', '', [
            'data' => [
                'icon' => 'alert',
            ]
        ]);
        $content = Html::tag('p', $icon . ' ' . Html::encode($error), [
            'class' => $errorClass,
        ]);

        return Html::tag('div', $content, [
            'class' => 'pane',
        ]);
    }
}
