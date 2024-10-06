# Guide Settings

Guide can be configured with the option on the **Guide Settings** page. You can override settings by creating a plugin-specific config file and by adding any setting you would like to override.

To create a guide config file, create a new file, `/config/guide.php`, and add the following PHP code to it.

```php
<?php

return [
    // An asset volume where Guide will look for images.
    'assetVolume' => '',

    // The location of guides when displayed on element edit pages.
    'editPageLocation' => 'slideout',

    // Enable CSS and JavaScript fields to appear in the Guide Editor.
    'enableGuideCss' => true,
    'enableGuideJavascript' => false,

    // Enable CSS and JavaScript to be displayed on the page.
    // NOTE: These settings will be ignored if their respective field is disabled.
    'registerGuideCss' => true,
    'registerGuideJavascript' => true,

    // Enables non-essential visual enhancements.
    'fun' => true,

    // The label shown on Guide Buttons on edit pages.
    'guideButtonLabel' => '',

    // Path to Guide CP Section templates.
    'renderMarkdownDefault' => true,

    // A path inside the templates directory where Guide will look for templates.
    'templatePath' => '',

    // Twig variables that can be used across all guides.
    'clientName' => '',
    'projectName' => '',
    'myCompanyName' => '',
];
```

## Variables

The **Variables** tab in **Guide Settings** lets you set variables that can be used across several guides, giving you one place to update them if one of the values changes.

For example, if you wanted to create a guide that you plan to use across several projects, you could use the `{{ craft.guide.var("projectName") }}` Twig function to add the **Project Name** variable to your guide. Then you could export the guide from one project and import it into another. If the **Project Name** setting is set in the second project, the Twig variable will get updated when that guide is shown on the page.
