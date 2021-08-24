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
    public function getAllForUser($params = [], $queryType = 'all')
    {
        return Guide::$plugin->guide->getGuidesForUser($params, $queryType);
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
    public function include($params = [])
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
        }

        return $value ?? null;
    }
}
