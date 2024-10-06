<!-- ![Guide 3](resources/img/guide-3-header.png) -->

**Guide is an author’s notebook and a developer’s best friend.**

Content authors can create and manage their own CMS Guide, create pages in Craft CMS’s Control Panel, and manage their own content shown in widgets and slideout panels on entry edit pages.

Developers can use Guide instead of writing custom modules and site-specific plugins that provide reports, content-editing warnings, and tools that customize the author-experience around Craft CMS’s Control Panel.

Guide makes it easy to share helpful information all around the Craft CMS Control panel, so content authors don‘t need to go far to get the answers they need.

---

Guide content, AKA guides, can be written in Markdown or Twig using the built-in text editor. When using Twig you can use anything available in Craft CMS’s Twig tags, methods, and filters—and you can even use Twig code provided by other plugins.

The Guide Organizer shows you all of the guides in your CMS and makes it easy to add them around the Craft CMS Control Panel. Guides can appear on their own standalone pages, in slideouts, as widgets, and amongst editing fields in UI Elements. With a little CSS know-how you can even use Guide to add HTML elements to the Control Panel UI.

## Guide 5 for Craft CMS 5+

## Requirements

- This plugin requires Craft CMS 5.3 or later.

## Editions

The **PRO** edition of Guide includes the Guide Organizer and a code editor with Twig components that make it easy to create guides and distribute them throughout the Craft CMS Control Panel (edit page slideouts, standalone CP pages, widgets, UI elements, and any CP URL you specify).

The **LITE** edition is offered for developers who prefer to write their own guide Twig templates in their favorite code editor and to display them on the CMS Guide page.

> [!TIP]
> Guide’s edition can be upgraded to **PRO** at any time.

**Guide PRO** can be purchased in the [Craft Plugin Store](https://plugins.craftcms.com/guide).

This documentation includes the features available in the **LITE** edition, but it is written based on all of the features found in the **PRO** edition.

## Installation

To install the plugin, you can find it in the [Craft Plugin Store](https://plugins.craftcms.com/guide), or follow these instructions.

1. Open your terminal and go to your Craft project:

    ```
    cd /path/to/project
    ```

2. Then tell Composer to load the plugin:

    ```
    composer require wbrowar/guide
    ```

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Guide.


## Setup

1. Visit the **Guide Settings** page to configure a couple of setup options. The **Template Path** setting is required for guides to be displayed from Twig files in your project’s `/templates` directory. The `Asset Volume` setting is recommended when screenshots and other images are used in your guide content.
2. Create your guides using the built-in editor or by selecting templates added to your **Template Path** directory.
3. Use the **Guide Organizer** to place your guides around the Craft CMS Control Panel.

---

## Documentation

The documentation for Guide features can be found in your Craft CMS project (look for blue buttons on Guide CP pages) or in the following Markdown files:

- [Guide Settings](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-settings.md)
- [Guides](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-list.md)
- [Guide Editor](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-editor.md)
- [Guide Editor CSS](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-editor-css.md)
- [Guide Editor JavaScript](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-editor-javascript.md)
- [Guide Organizer](https://github.com/wbrowar/craft-guide/blob/main/src/templates/docs/en/guide-organizer.md)

## Releases

Release notes can be found at [CHANGELOG.md](https://github.com/wbrowar/craft-guide/blob/main/CHANGELOG.md)

## Supported Versions

Here is a general goal for adding and supporting features for Guide going forward:

- New features for the plugin will be added to the current major plugin version that targets the current released version of Craft CMS.
- The latest major plugin version that targets the previous released major version of Craft CMS will be supported with bug fixes introduced in updates to that version of Craft CMS.
- Previous major plugin versions will only get security-related updates—when necessary.

---

Brought to you by [Will Browar](https://wbrowar.com)
