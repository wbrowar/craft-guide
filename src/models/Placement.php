<?php
/**
 * Guide plugin for Craft CMS 5.x
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
     * Currently only 'all' is supported.
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
     * The CSS selector where the guide will be placed in the CP.
     *
     * @var string
     */
    public $selector;

    /**
     * The CP URI of the specific page a placement will appear on.
     *
     * @var string
     */
    public $uri;

    /**
     * When guides are re-ordered in their group they will be displayed in that order by default.
     *
     * @var integer
     */
    public $weight = 1;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        return [
            ['guideId', 'required'],

            [['guideId', 'weight'], 'integer'],
            [['access', 'group', 'groupId', 'selector', 'uri'], 'string'],

            ['access', 'default', 'value' => 'all'],
        ];
    }
}
