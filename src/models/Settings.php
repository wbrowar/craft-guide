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
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    // Path to Guide CP Section templates
    public $templatePath = '_guide';

    // Path to Guide CP Section templates
    public $assetVolume = '';

    // Twig variables
    public $clientName = '';
    public $myCompanyName = '';

    // Components settings
    public $components = [];

    // Rebrand settings
    public $rebrand = [];

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['assetVolume', 'templatePath'], 'required'],

            [['assetVolume', 'templatePath'], 'string'],

            ['components', 'default', 'value' => []],
            ['rebrand', 'default', 'value' => []],
            ['templatePath', 'default', 'value' => '_guide'],
        ];
    }
}
