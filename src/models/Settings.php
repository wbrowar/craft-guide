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
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    // Path to Guide CP Section templates
    public $assetVolume = '';

    // Path to Guide CP Section templates
    public $defaultParser = 'markdown';

    // Path to Guide CP Section templates
    public $defaultTeleportMethod = 'slideout';

    // Path to Guide CP Section templates
    public $templatePath = '';

    // Twig variables
    public $clientName = '';
    public $projectName = '';
    public $myCompanyName = '';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        return [
            [['defaultTeleportMethod'], 'required'],

            [['assetVolume', 'defaultTeleportMethod', 'templatePath', 'clientName', 'projectName', 'myCompanyName'], 'string'],

            ['defaultParser', 'default', 'value' => 'markdown'],
            ['defaultTeleportMethod', 'default', 'value' => 'slideout'],
        ];
    }
}
