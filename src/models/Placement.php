<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\models;

use craft\base\Model;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Placement extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Determine who can view the guide.
     * Options: 'all', 'admins', 'author'
     *
     * @var string
     */
    public $access = 'all';

    /**
     * The placement group that determines display presets.
     * Options: 'nav', 'assets', 'assetVolume', 'categories', 'categoryGroup', 'entryType', 'section', 'uiElement', 'uri', 'users', 'widget'
     *
     * @var string
     */
    public $group;

    /**
     * The ID of the placement group. Used in 'assetVolume', 'categoryGroup', and 'entryType'.
     *
     * @var integer
     */
    public $groupId;

    /**
     * The ID of the guide being placed.
     *
     * @var integer
     */
    public $guideId;

    /**
     * Determine if a guide should be appended or prepended to the selector element.
     * Options: 'append', 'prepend'
     * NOTE: Only 'append' is supported right now.
     *
     * @var string
     */
    public $portalMethod = 'append';

    /**
     * The CSS selector where the guide will be placed in the CP.
     *
     * @var string
     */
    public $selector;

    /**
     * Add CSS to guide display to help it fit in better with its surrounding elements.
     *
     * @var string
     */
    public $theme;

    /**
     * The CP URI of the specific page a placement will appear on.
     *
     * @var string
     */
    public $uri;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        return [
            ['guideId', 'required'],

            [['guideId'], 'integer'],
            [['access', 'group', 'groupId', 'portalMethod', 'selector', 'uri'], 'string'],

            ['access', 'default', 'value' => 'all'],
            ['portalMethod', 'default', 'value' => 'append'],
        ];
    }
}
