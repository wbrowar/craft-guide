<?php
/**
 * Guide plugin for Craft CMS 5.x
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
    protected function selectorIcon(): ?string
    {
        return Craft::getAlias('@wbrowar/guide/assetbundles/static/icon-mask.svg');
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
    public function settingsHtml(): null|string
    {
        return Craft::$app->getView()->renderTemplate('guide/fieldlayoutelements/guide_display_settings.twig');
    }

    /**
     * @inheritdoc
     */
    public function formHtml(ElementInterface $element = null, bool $static = false): ?string
    {
        try {
            $allowedGuideIds = Guide::$plugin->placement->getPlacements(['group' => 'uiElementEnabled'], 'guideId');
            $allowedGuides = Guide::$plugin->guide->getGuides(['id' => $allowedGuideIds]);

            $placement = Guide::$plugin->placement->getPlacements(['group' => 'uiElement', 'groupId' => 'uiElement-' . $this->uid], 'one');
            
            if ($placement && in_array($placement->guideId, $allowedGuideIds)) {
                $guide = Guide::$plugin->guide->getGuides(['id' => $placement->guideId], 'one');
            }

            $content = Template::raw(Guide::$view->renderTemplate('guide/fieldlayoutelements/guide_display_body.twig', [
                'allowedGuides' => $allowedGuides,
                'element' => $element,
                'guide' => $guide ?? null,
                'placementId' => $placement->id ?? null,
                'proEdition' => Guide::$pro,
                'uid' => $this->uid,
                'userOperations' => Guide::$plugin->getUserOperations(),
            ]));
        } catch (\Throwable $e) {
            return $this->error($e->getMessage(), 'error');
        }

        if ($content == '') {
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
    private function error(string $error, string $errorClass): string
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

    private function generateRandomString($length = 10):string
    {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', intval(ceil($length/strlen($x))) )),1,$length);
    }
}
