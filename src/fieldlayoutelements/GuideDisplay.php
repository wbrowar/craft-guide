<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
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
 * @since     3.0.0
 */
class GuideDisplay extends BaseUiElement
{
    /**
     * @var string A unique ID to help place guides into this UI Element
     */
    public $uiId;

    /**
     * @inheritdoc
     */
    protected function selectorLabel(): string
    {
        return Craft::t('guide', 'Guide');
    }

    /**
     * @inheritdoc
     */
    protected function selectorIcon()
    {
        return '@wbrowar/guide/assetbundles/guide/dist/icon/icon-mask.svg';
    }

    /**
     * @inheritdoc
     */
    public function hasCustomWidth(): bool
    {
        return true;
    }

    /**
     * @inheritdoc
     */
    public function settingsHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'guide/fieldlayoutelements/guide_display_settings',
            [
                'randomString' => $this->_generateRandomString(15),
                'uiId' => $this->uiId,
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function formHtml(ElementInterface $element = null, bool $static = false)
    {
        try {
            $placement = Guide::$plugin->placement->getPlacements(['group' => 'uiElement', 'groupId' => 'uiElement-' . $this->uiId], 'one');

            if ($placement) {
                $guide = Guide::$plugin->guide->getGuides(['id' => $placement->guideId], 'one');
            }

            $content = Template::raw(Guide::$view->renderTemplate('guide/fieldlayoutelements/guide_display_body.twig', [
                'element' => $element,
                'guide' => $guide ?? null,
                'placementId' => $placement->id ?? null,
                'static' => $static,
                'uiId' => $this->uiId,
            ]));
        } catch (\Throwable $e) {
            return $this->_error($e->getMessage(), 'error');
        }

        if ($content === '') {
            return null;
        }

        return Html::tag('div', $content, $this->containerAttributes($element, $static));
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

    private function _generateRandomString($length = 10) {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    }
}
