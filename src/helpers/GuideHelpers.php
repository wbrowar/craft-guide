<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2022 Will Browar
 */

namespace wbrowar\guide\helpers;

use craft\helpers\StringHelper;
use LitEmoji\LitEmoji;

class GuideHelpers
{
    /**
     * Decodes strings that have had their emoji encoded with `encodeEmoji()`.
     *
     * @param $text string Text to encode.
     * @return string String that includes emoji unicode.
     */
    public static function decodeEmoji($text) {
        return LitEmoji::shortcodeToUnicode($text);
    }

    /**
     * Encodes emoji so it is safe to store in database.
     * Emoji that are supported by LitEmoji are converted to shortcodes, like :rocket: or :smiley:
     * If an emoji isn’t supported by LitEmoji, it will be converted to a unicode character.
     *
     * @param $text string Text to encode.
     * @return string String that no longer includes emoji unicode.
     */
    public static function encodeEmoji($text) {
        // If emoji is present, try to encode it to LitEmoji shortcodes
        $text = LitEmoji::unicodeToShortcode($text);

        if (StringHelper::containsMb4($text)) {
            $text = StringHelper::encodeMb4($text);
        }

        return $text;
    }
}