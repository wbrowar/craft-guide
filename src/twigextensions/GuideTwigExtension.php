<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\twigextensions;

use craft\elements\Asset;
use craft\helpers\Db;
use wbrowar\guide\Guide;

use Craft;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class GuideTwigExtension extends \Twig_Extension
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName()
    {
        return 'Guide';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters()
    {
        return [
            //new \Twig_SimpleFilter('someFilter', [$this, 'someInternalFunction']),
        ];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
    * @return array
     */
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('guideAsset', [$this, 'guideAsset'], ['is_safe' => array('html')]),
            new \Twig_SimpleFunction('guideQuery', [$this, 'guideQuery']),
            new \Twig_SimpleFunction('guideVar', [$this, 'guideVar'], ['is_safe' => array('html')]),
            new \Twig_SimpleFunction('renderUserGuideBody', [$this, 'renderUserGuideBody']),
            new \Twig_SimpleFunction('pluginEnabled', [$this, 'pluginEnabled']),
            new \Twig_SimpleFunction('updateGuideCpNav', [$this, 'updateGuideCpNav']),
        ];
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function guideAsset($fileName, $type = 'image'):string
    {
        $output = '';

        switch ($type) {
            case 'image':
                $file = Asset::find()
                            ->filename(Db::escapeParam($fileName))
                            ->one();

                if ($file) {
                    $output = '<img src="' . $file->getUrl() . '" alt="' . $file->title . '">';
                }
                break;
        }

        return $output;
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function guideQuery($params = [], $queryType = 'all')
    {
        return Guide::$plugin->guide->getUserGuides($params, $queryType);
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function guideVar($name)
    {
        return Guide::$plugin->guide->getGuideVariableValue($name);
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function pluginEnabled($pluginHandle)
    {
        return Craft::$app->plugins->isPluginInstalled($pluginHandle) && Craft::$app->plugins->isPluginEnabled($pluginHandle);
    }

    /**
     * Our function called via Twig; it can do anything you want
     *
     * @param null $text
     *
     * @return string
     */
    public function renderUserGuideBody($params = [])
    {
        return Guide::$plugin->guide->renderUserGuideBody($params);
    }

    /**
     * Creates the Guide CP subnav
     *
     * @param null $array
     *
     * @return string
     */
    public function updateGuideCpNav($array = [])
    {
        Guide::$plugin->guide->updateGuideCpNav($array);

        return '';
    }
}
