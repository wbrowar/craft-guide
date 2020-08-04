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
        if (($this->guideId ?? false) && strval($this->guideId) != '0') {
            $guide = Guide::$plugin->guide->getGuides(['id' => $this->guideId], 'one');

            if ($guide ?? false) {
                return $guide->title;
            }
        }

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
//    protected function selectorLabelAttributes(): array
//    {
//        $attr = parent::selectorLabelAttributes();
//        if ($this->template) {
//            $attr['class'][] = 'code';
//        }
//        return $attr;
//    }

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
            'guide/fieldlayoutelements/guide_include_settings',
            [
                'displayGuideUi' => $this->displayGuideUi,
                'guideId' => $this->guideId,
                'selectableGuides' => Guide::$plugin->guide->getGuides([]),
                'userOperations' => Guide::$userOperations,
            ]
        );
//        return Craft::$app->getView()->renderTemplateMacro('_includes/forms', 'textField', [
//            [
//                'label' => Craft::t('guide', 'Guide'),
////                'instructions' => Craft::t('guide', 'The path to a template file within your `templates/` folder.'),
//                'tip' => Craft::t('guide', 'An `element` variable will be passed into the selected guide.'),
//                'class' => 'code',
//                'id' => 'guide',
//                'name' => 'guide',
//                'value' => $this->template,
//            ]
//        ]);
    }

    /**
     * @inheritdoc
     */
    public function formHtml(ElementInterface $element = null, bool $static = false)
    {


//        if ($guide ?? false) {
//            $oldMode = Guide::$view->getTemplateMode();
//            Guide::$view->setTemplateMode(Guide::$view::TEMPLATE_MODE_CP);
//            $renderedTemplate = Template::raw(Guide::$view->renderTemplate('guide/field/ui_element.twig', ['element' => $element, 'guide' => $guide, 'settings' => Guide::$plugin->getSettings(), 'ui' => $ui]));
//            Guide::$view->setTemplateMode($oldMode);
//            return $renderedTemplate;
//        }
//
//        return '';




        if (!$this->guideId) {
            return $this->_error(Craft::t('guide', 'No guide has been chosen yet.'), 'warning');
        }

        try {
            $guide = Guide::$plugin->guide->getGuides(['id' => $this->guideId], 'one');

            $content = Template::raw(Guide::$view->renderTemplate('guide/fieldlayoutelements/guide_include_body.twig', [
                'element' => $element,
                'guide' => $guide,
                'settings' => Guide::$plugin->getSettings(),
                'static' => $static,
                'ui' => $this->displayGuideUi ?? false
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
}
