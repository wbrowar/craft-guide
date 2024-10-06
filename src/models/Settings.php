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
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    // Path to Guide CP Section templates.
    public $assetVolume = '';

    // The location of guides when displayed on element edit pages.
    public $editPageLocation = 'slideout';

    // Enable CSS and JavaScript fields to appear in the Guide Editor.
    public $enableGuideCss = true;
    public $enableGuideJavascript = false;

    // Enable CSS and JavaScript to be displayed on the page.
    // NOTE: These will be ignored if their respective field is disabled.
    public $registerGuideCss = true;
    public $registerGuideJavascript = true;

    // Enables non-essential visual enhancements.
    public $fun = true;

    // The label shown on Guide Buttons on edit pages.
    public $guideButtonLabel = '';

    // Path to Guide CP Section templates.
    public $renderMarkdownDefault = true;

    // Path to Guide CP Section templates.
    public $templatePath = '_guide';

    // Twig variables.
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
            [['enableGuideCss', 'enableGuideJavascript', 'fun', 'registerGuideCss', 'registerGuideJavascript', 'renderMarkdownDefault'], 'boolean'],
            [['assetVolume', 'editPageLocation', 'guideButtonLabel', 'templatePath', 'clientName', 'projectName', 'myCompanyName'], 'string'],

            ['editPageLocation', 'default', 'value' => 'slideout'],
            ['templatePath', 'default', 'value' => '_guide'],
        ];
    }
}
