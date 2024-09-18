<?php
/**
 * Guide plugin for Craft CMS 5.x
 *
 * A CMS Guide for Craft CMS.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2019 Will Browar
 */

namespace wbrowar\guide\records;

use craft\db\ActiveRecord;

/**
 * Class Guide record.
 *
 * @property integer $id
 * @property integer $authorId
 * @property string $content
 * @property string $contentCss
 * @property string $contentJavascript
 * @property string $contentSource
 * @property string $contentUrl
 * @property boolean $renderMarkdown
 * @property string $slug
 * @property string $summary
 * @property string $template
 * @property string $title
 * @property integer $weight
 * 
 * @author    Will Browar
 * @package   Guide
 * @since     2.0.0
 */
class Guides extends ActiveRecord
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%guide_guides}}';
    }
}
