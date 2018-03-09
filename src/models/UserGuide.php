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
class UserGuide extends Model
{
    // Public Properties
    // =========================================================================

    public $authorId = 0;
    public $content = '';
    public $elementType = '';
    public $format = 'markdown';
    public $moreInfo = '';
    public $permissions = ['accessPlugin-guide'];
    public $sectionId = 0;
    public $templatePath = '';
    public $typeId = 0;

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * Validation rules are used by [[validate()]] to check if attribute values are valid.
     * Child classes may override this method to declare different validation rules.
     *
     * More info: http://www.yiiframework.com/doc-2.0/guide-input-validation.html
     *
     * @return array
     */
    public function rules()
    {
        return [
            [['format', 'elementType'], 'required'],

            [['authorId', 'sectionId', 'typeId'], 'integer'],

            ['permissions', 'mixed'],
            ['permissions', 'default', 'value' => ['accessPlugin-guide']],

            [['content', 'elementType', 'format', 'moreInfo', 'templatePath'], 'string'],
            ['content', 'default', 'value' => 'A guide has not been created yet.'],
            ['format', 'default', 'value' => 'markdown'],
        ];
    }
}