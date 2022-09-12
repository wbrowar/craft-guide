<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\twigextensions;

use craft\helpers\Template;

use Craft;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use wbrowar\guide\Guide;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class GuideTwigExtension extends AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getName()
    {
        return Craft::t('guide', 'Guide');
    }

    /**
     * @inheritdoc
     */
    public function getFilters()
    {
        return [
            new TwigFilter('guidehtmlattr', [$this, 'renderHtmlAttributes']),
            new TwigFilter('guideshortcodes', [$this, 'replaceShortcodes']),
        ];
    }

    /**
     * @inheritdoc
     */
    public function getFunctions()
    {
        return [
        ];
    }

    /**
     * Formats HTML attributes and makes it easy to override and add classes and other attributes
     *
     * @param array $attrs
     *
     * @return string
     */
    public function renderHtmlAttributes(array $attrs)
    {
        // @TODO replace this with Craft 3.2 attr() twig function

        // Re-order attributes so ones with colons (used for vue shorthand) are last
        ksort($attrs);

        // Ported from https://github.com/timkelty/htmlattributes-craft
        $str = trim(implode(' ', array_map(function($attrName) use ($attrs) {
            $attrVal = $attrs[$attrName];
            $quote = '"';

            if (is_null($attrVal) || $attrVal === true) {
                return $attrName;
            } elseif($attrVal === false) {
                return '';
            } elseif(is_array($attrVal)) {
                switch ($attrName) {
                    case 'class':
                        $attrVal = implode(' ', array_filter($attrVal));
                        break;

                    case 'style':
                        array_walk($attrVal, function(&$val, $key) {
                            $val = $key . ': ' . $val;
                        });
                        $attrVal = implode('; ', $attrVal) . ';';
                        break;

                    // Default to json, for data-* attributes
                    default:
                        $quote = '\'';
                        $attrVal = json_encode($attrVal);
                        break;
                }
            } else {
                return $attrName . '="' . $attrVal . '"';
            }

            return $attrName . '=' . $quote . $attrVal . $quote;
        }, array_keys($attrs))));

        return Template::raw($str);
    }

    /**
     * Processes and replaces Guide-specific shortcodes
     *
     * @param string $string
     *
     * @return string
     */
    public function replaceShortcodes(string $string)
    {
        $newString = $string;

        $guideVolumeUid = Guide::$settings->assetVolume;

        if ($guideVolumeUid) {
            $guideVolume = Craft::$app->getVolumes()->getVolumeByUid($guideVolumeUid);

            $guideVolumePath = Craft::getAlias($guideVolume->url);
        }

        $shortcodes = [
            ['[CLIENT_NAME]', !empty(Guide::$settings->clientName) ? Guide::$settings->clientName : '<span class="fpo">Client Name</span>'],
            ['[MY_COMPANY_NAME]', !empty(Guide::$settings->myCompanyName) ? Guide::$settings->myCompanyName : '<span class="fpo">My Company Name</span>'],
            ['[GUIDE_VOLUME_PATH]', $guideVolumePath ?? ''],
        ];

        $find = [];
        $replace = [];
        foreach ($shortcodes as $shortcode) {
            $find[] = $shortcode[0];
            $replace[] = $shortcode[1];
        }

        if (count($find) > 0 && count($replace) > 0) {
            $newString = str_replace($find, $replace, $string);
        }

        return $newString;
    }
}
