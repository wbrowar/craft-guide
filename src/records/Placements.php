<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\guide\records;

use craft\db\ActiveRecord;

/**
 * Class Placement record.
 * 
 * @property integer $id
 * @property string $access
 * @property string $group
 * @property string $groupId
 * @property integer $guideId
 * @property string $moveMethod
 * @property string $selector
 * @property string $uri
 * 
 * @author    Will Browar
 * @package   Guide
 * @since     3.0.0
 */
class Placements extends ActiveRecord
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%guide_placements}}';
    }
}
