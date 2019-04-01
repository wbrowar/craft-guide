<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * Description
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2017 Will Browar
 */

namespace wbrowar\guide\models;

use wbrowar\guide\Guide;

use Craft;
use craft\base\Model;

/**
 * UserGuide Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Will Browar
 * @package   Guide
 * @since     1.0.0
 */
class Navigation extends Model
{
    // Public Properties
    // =========================================================================

    public $links = '{[]}';

    // Public Methods
    // =========================================================================

    /**
     * @return array
     */
    public function rules()
    {
        return [
            [['links'], 'required'],

            [['links'], 'mixed'],
        ];
    }
}