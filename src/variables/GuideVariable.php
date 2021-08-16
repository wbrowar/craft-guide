<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\variables;

use craft\helpers\Html;
use craft\helpers\Template;
use wbrowar\guide\Guide;

use Craft;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function component($handle, $options = [])
    {
        return Template::raw(Guide::$plugin->guideComponents->renderComponent($handle, $options));
    }

    /**
     * @return mixed
     */
    public function getAll($params = [], $queryType = 'all')
    {
        return Guide::$plugin->guide->getGuides($params, $queryType);
    }

    /**
     * @return mixed
     */
    public function getOne($params = [])
    {
        return Guide::$plugin->guide->getGuides($params, 'one');
    }

    /**
     * @return string
     */
    public function include($params = []): string
    {
        $guide = Guide::$plugin->guide->getGuides($params, 'one');

        if ($guide && in_array($guide->contentSource, ['field', 'template'])) {
            $oldMode = Guide::$view->getTemplateMode();
            Guide::$view->setTemplateMode(Guide::$view::TEMPLATE_MODE_CP);
            $renderedTemplate = Template::raw(Guide::$view->renderTemplate('guide/_partials/render_content.twig', ['guide' => $guide]));
            Guide::$view->setTemplateMode($oldMode);
            return $renderedTemplate;
        }

        return 'Included guide has been moved or deleted.';
    }

    /**
     * @return string
     */
    public function render($templateString, $slug, $variables = [], $type = 'path'): string
    {
        try {
            if ($type === 'path') {
                $content = Template::raw(Guide::$view->renderTemplate($templateString, $variables));
            } else if ($type === 'string') {
                $content = Template::raw(Guide::$view->renderString($templateString, $variables));
            }
        } catch (\Throwable $e) {
            return $this->_error($e->getMessage() . ' in guide with the slug: ' . $slug, 'error');
        }

        if ($content ?? false) {
            return $content;
        }

        return 'Guide could not be displayed.';
    }

    /**
     * @return string|null
     */
    public function var($variable)
    {
        switch ($variable) {
            case 'clientName':
                $value = !empty(Guide::$settings->clientName) ? Guide::$settings->clientName : Template::raw('<span class="fpo">Client Name</span>');
                break;
            case 'myCompanyName':
                $value = !empty(Guide::$settings->myCompanyName) ? Guide::$settings->myCompanyName : Template::raw('<span class="fpo">My Company Name</span>');
                break;
            case 'projectName':
                $value = !empty(Guide::$settings->projectName) ? Guide::$settings->projectName : Template::raw('<span class="fpo">Project Name</span>');
                break;
        }

        return $value ?? null;
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
