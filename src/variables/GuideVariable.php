<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * dd
 *
 * @link      http://dd.com
 * @copyright Copyright (c) 2018 dd
 */

namespace wbrowar\guide\variables;

use craft\elements\Asset;
use craft\helpers\Db;
use wbrowar\guide\Guide;

use Craft;

/**
 * Guide Variable
 *
 * Craft allows plugins to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.guide }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author    dd
 * @package   Guide
 * @since     1.0.0
 */
class GuideVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Whatever you want to output to a Twig template can go into a Variable method.
     * You can have as many variable functions as you want.  From any Twig template,
     * call it like this:
     *
     *     {{ craft.guide.exampleVariable }}
     *
     * Or, if your variable requires parameters from Twig:
     *
     *     {{ craft.guide.exampleVariable(twigValue) }}
     *
     * @param null $optional
     * @return string
     */
    public function asset($fileName, $type = 'image')
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

//        Craft::dd(htmlspecialchars($output));

        return $output;
    }

    public function query($params = [], $queryType = 'all')
    {
        return Guide::$plugin->guide->getUserGuides($params, $queryType);
    }

    public function var($name)
    {
        return Guide::$plugin->guide->getGuideVariableValue($name);
    }
}
