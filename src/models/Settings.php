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
 * Guide Settings Model
 *
 * This is a model used to define the plugin's settings.
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
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    // Custom CSS used to style Guide components
    public $customCss = '';

    // Additional variables available for the "guideVars()" Twig tag
    public $customVars = [];

    // A list of emails and available for use in the Email Supports widget
    public $emailSupportContacts = [];

    // Enables display and functionality of the Email Support widget
    public $enableAllUserGuides = true;

    // Enables display and functionality of the Email Support widget
    public $enableAllEmailSupport = true;

    // Enables display and functionality of the Welcome widget and CP page
    public $enableAllWelcomeWidget = true;

    // Enables display and functionality of the Website Updates widget and CP page
    public $enableAllWebsiteUpdates = true;

    // Enables display and functionality of the form in the Email Support widget
    public $enableEmailSupportForm = true;

    // Array of navigation items used in Guide CP Section
    public $guideNav = [];

    // Path to Guide CP Section templates
    public $guideTemplatePath = '_guide/index';

    // Array of navigation items used in Guide CP Section
    public $guideTwoWarnings = true;

    // Who can edit User Guides
    // all, admin, permission
    public $userGuidesEditableBy = 'admin';

    // Twig variable setting
    public $clientName = '';
    public $myCompanyName = '';

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
            [['clientName', 'customCss', 'guideTemplatePath'], 'string'],
            ['guideTemplatePath', 'default', 'value' => '_guide/index'],
        ];
    }
}