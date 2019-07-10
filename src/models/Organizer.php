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

use wbrowar\guide\Guide;

use Craft;
use craft\base\Model;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Organizer extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * The navigation of the Guide CP section for a given site.
     *
     * @var mixed
     */
    public $cpNav = [];

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
//            ['cpNav', 'mixed'],
            ['cpNav', 'default', 'value' => []],
        ];
    }
}
