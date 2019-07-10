<?php
/**
 * Guide plugin for Craft CMS 3.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\records;

use wbrowar\guide\Guide;

use Craft;
use craft\db\ActiveRecord;

/**
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Organizers extends ActiveRecord
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%guide_organizers}}';
    }
}
