# Guide Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.1.3.2 - 2020-01-16
- Fixed style bug on Guide Dashboard widgets

## 2.1.3.1 - 2020-01-15
### Fixed
- Fixed issue preventing plugin Javascript from loading

## 2.1.3 - 2020-01-15
### Added
- Added drop targets to make it easier to drag-and-drop guides in the Organizer [#25](https://github.com/wbrowar/craft-guide/issues/25).

### Changed
- Bumped minimum Craft version to `^3.4.0-RC1`.
- Updated styles for Craft 3.4.
  - _NOTE: This involved making some changes to Guide’s default styles and custom styles may need to be adjusted._
- Changed the label of "Unused Guides" to "Available Guides" in the Organizer [#23](https://github.com/wbrowar/craft-guide/issues/23).
- Images loaded through the Twig component are now lazy loaded via the native lazy attribute.

### Fixed
- Fixed a bug that didn't display guides when creating a new category.
- Fixed path to Widget icon.


## 2.1.2 - 2019-08-25
### Fixed
- Fixed a bug that occurred when templates were removed from the Templates Path directory.


## 2.1.1 - 2019-08-16
### Fixed
- Fixed a bug where the Guide utility wasn’t available in the FREE edition.


## 2.1.0 - 2019-08-13
### Added
- File contents in guide templates can be moved to the Content Field in one click—making it easier to go from importing templates to editing their content in the Guide Editor.
- A Guide utility has been added to the Utilities CP section.
  - Guides can be imported from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates)
  - Guide data stored in the database can be exported from one environment (dev, staging, etc...) then imported into another environment.
  - The layout of guides in the Organizer are exported and imported, too.
- Guides can now be duplicated from the Guide Organizer via a new action button found on each guide (click on the gear to see guide actions).

### Changed
- Importing guides from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates) has been moved from Settings to the Guide Utility.
  - This makes it possible to import guides on a server where `allowAdminChanges` is set to false.
- When saving a guide, `-1` will be appended to the slug if the slug is not unique.


## 2.0.1 - 2019-07-27
### Added
- A new variable, `craft.guide.include()`, lets you include the content of one guide into another guide.
  - Using this variable renders the guide content in a Twig-based guide regardless of whether the format of the imported guide is Twig or Markdown.
- An "Include Guide" component has been added for Twig-based guides
  - If you do not see the "Include Guide" component, try visiting the Components settings page in Guide Settings, make sure "Include Guide" is enabled, then re-save the Component settings page.
- Added a [Recipes, Tips, and Tricks](https://github.com/wbrowar/craft-guide/blob/master/README.md#recipes-tips-and-tricks) section to the README.

### Changed
- The "Markdown" component now defaults to GitHub Flavored Markdown to match Guide’s default Markdown flavor.

### Fixed
- Fixed a bug that did’t allow the editor to work when `devMode` was set to `false`.
- Made the CSS selector of Guide iframe content more specific to avoid affecting Live Preview iframes.
- Gave import options unique IDs to avoid multiple selects when clicking on a checkbox label.


## 2.0.0 - 2019-07-24

> {warning} Please upgrade to Guide 1.4.0 before upgrading to 2.0.0. [Tips for upgrading from Guide 1 can be found here.](https://github.com/wbrowar/craft-guide/blob/master/README.md#upgrading-from-guide-1)

### Added
- Guides can be imported from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates) within Guide’s settings page
- Added Organizer
  - Drag and drop interface for creating and managing guides
- Added Ace to the guide editor for syntax highlighting in Markdown and Twig
- Added component snippets
  - Drag a component into the editor to place it's code
  - Automatically generated image components are created based on image assets in your Guide Assets Volume
  - Less-used components can be hidden from the guide editor using the Guide settings page
- External documentation can be used for the content of a guide as an iframe
  - Works great with VuePress-style docs where everything is self contained
- Guides can be added to the sidebar on categories edit pages and user edit pages
- Guides can now use Twig's `include` functions to pull in external templates
- Styling guide content can now be done through color fields in the CMS
- A custom logo can be uploaded to replace the Guide icon in guide headers
- A print style sheet is added to Guide pages to remove Craft’s UI and to extend the content to fill a piece of paper

### Changed
- Guide widgets now pull their content from guides created in the Organizer
- Permissions for who may edit guides have been moved out of plugin settings and into individual guides
- Minimum requirement for Craft has been changed to `3.2`

### Removed
- Removed table-based Navigation
  - CP Navigation is now managed in the Organizer
- Removed Email Support, Welcome Widget, and Website Updates widgets
  - The functionality of these widgets can be found in a new plugin, [Communicator](https://plugins.craftcms.com/communicator)
- Custom Variables settings have been removed
  - Use Craft’s `alias()` and `getenv()` functions to get
- Removed the `updateGuideCpNav()` Twig function


## 1.4.0 - 2018-03-31
### Added
- Added a new `Edit Guide Navigation` permission
- Added Guide 2.0 deprecation warnings for widget features
  - Guide 2.0 is in the works! The Email Support, Website Updates, and Welcome Widget will all be removed from Guide in 2.0, but a new plugin, called Communicator, is available for free and includes all of these widgets. You can download it in the Craft Plugin Store: https://plugins.craftcms.com/communicator 

### Changed
- Bumped the minimum required version of Craft to `3.1.20.1`
- CP navigation management has been moved from the Guide plugin settings page to its own CP tab

### Fixed
- Fixed user permissions set in the navigation not getting validated correctly


## 1.3.2 - 2018-09-18
### Fixed
- Fixed an issue that occurred when converting template guides to User Guides on some servers ([#10](https://github.com/wbrowar/craft-guide/issues/10))


## 1.3.1 - 2018-08-21
### Fixed
- Fixed an issue that caused subnav to disappear when in Guide CP section pages ([#2](https://github.com/wbrowar/craft-guide/issues/2))
- Fixed a bug that occurred when all Guide Nav items are removed ([#9](https://github.com/wbrowar/craft-guide/issues/9))


## 1.3.0 - 2018-07-09
### Added
- Added a new widget, Email Support, that lets clients send a custom message and basic browser and site details to a support contact
  - Support contacts can be added in Guide plugin settings
- Added options to turn off entire features from the Guide plugin settings page
  - These settings can also be multi-environment aware by adding them to config/guide.php
  - NOTE: Craft cannot globally disable widgets, so disabling a widget requires that instances of that widget are manually removed

### Changed
- Updated the plugin icon
- Changed the name of "Admin‘s Log" to "Website Updates" throughout
- Cleaned up unused classes

### Fixed
- Fixed a bug where the Guide CP section navigation wasn‘t scrolling upon click


## 1.2.1 - 2018-04-29
### Fixed
- Fixed an issue where the icon wasn’t appearing in PHP 7.2

## 1.2.1 - 2018-03-25
### Changed
- In places where the template mode is being set, the template mode is returned back to what it previously was

### Fixed
- Fixed a bug that occurred when `{{ guideVar() }}` was called and no Custom Variables were set
- Fixed a bug that prevented User Guides from being deleted on Entry Edit pages
- Hid the "Delete" button on new User Guides


## 1.2.0 - 2018-03-09
### Added
- Added the ability to add, edit, and delete User Guides in the Guide CP Section
  - Existing template-based guides can continue to be edited via Twig templates, or can be "converted" over to a User Guide—stored in the database
  - Guides in the CP section can be created using Twig or Markdown
- Added a new Welcome Widget
  - Unlike the Guide Widgets that are created for individual users, this widget can be set in one place and updated across all users who have this widget installed
  - To edit Welcome Widget's content, use the "Guide > Welcome Widget" tab in the global sidebar
- Added an Admin's Log widget
  - Create a changelog for your clients and collaborators
  - Manage the log in the "Guide > Admin's Log" tab in the global sidebar
  - Logs are shown with the newest first and users can choose how many log entries they would like to see on their dashboard

### Changed
- `updateGuideCpNav` now only sets the Guide CP Section subnav when no navigation has been created
  - Going forward, use `updateGuideCpNav` in your Guide CP templates to set the initial subnav links, then edit the subnav in Guide plugin settings
  - This was changed to help facilitate the ability to manage the subnav in plugin settings, as well as to help reduce unneeded re-setting of the subnav on every page load

### Fixed
- Fixed a bug when looking for a Content Guide on an entry edit page when an entry wasn't enabled


## 1.1.5 - 2018-02-17
### Changed
- Added `margin` above and below `hr` tags

### Fixed
- Fixed a bug that duplicated encrypted custom `guideVars()`


## 1.1.4 - 2018-02-16
### Added
- You can now store custom `guideVar()` variables by setting their keys and values in Guide Plugin Settings
  - You can store plain strings, as well as encrypted strings for displaying passwords and sensitive information in your CMS guide 

### Changed
- Modified the style of the Sections dropdown to show hierarchy based on element types (`h1, h2, h3, and h4`)

### Fixed
- Fixed some wonky migration bugs
- Fixed a bug that occurred when Admin Bar wasn't installed
- Fixed guide CP section not displaying the currently selected page in the sidebar nav


## 1.1.3 - 2018-02-10
### Added
- Added a `guide_fpo` class that outlines an element in a bright pink color so you don't forget to change it
  - Added this class around the output of `guideVar()` variables that haven't been set in Settings
- Admin Bar Widget is now validated via PHP
- Added the ability to change `guideQuery()` from `all` to either `one` or `count` by passing in a second parameter
- Added more examples to Components page

### Fixed
- Removed header styles that bled out of Admin Bar widget


## 1.1.2 - 2018-02-05
### Fixed
- Fixed Admin Bar widget not getting removed


## 1.1.1 - 2018-02-04
### Added
- Added Custom CSS preview in Guide plugin settings to make re-branding easier
- Add an [Admin Bar Widget](https://github.com/wbrowar/craft-3-adminbar)
  - If a user is on an entry that has a Content Guide it will appear in Admin Bar
- Added `guideAsset()` twig tag to get image assets based on their filename
- Added `guideQuery()` twig tag to query existing Content Guides
- Added `pluginEnabled()` twig tag to check to see if a plugin is installed
- Added a `config.php` file to override plugin settings (copy this to `config/guide.php` to get it to work)


## 1.1.0 - 2018-01-27
### Added
- Added collaborative guides to Entry edit pages
  - For each Entry Type you can set instructions that appear when clicking on a button in the sidebar
  - Users with the right permissions can edit these guides using either Markdown, Twig, or by pointing to a frontend template in the site's `templates` directory
- Added Twig extensions that make it easier to personalize guides that are copied from one client to another. See Settings for more information
- Added a "More info" button to the bottom of guides that appear in edit pages
  - This button can link to the Guide CP section, or anywhere else that could be useful for content editors (like Craft documentation pages)
- Added "Create Guides" and "Delete Guides" permissions
- Added CSS Custom Properties defaults above the Settings > Custom CSS field to make it easier to rebrand style containers
- Added a `max-width` to guides in the Guide CP Section. This can be adjusted in Setting > Custom CSS

### Changed
- Changed "Sections" button in Guide CP Section over to a button that should be clicked/tapped to show section links. Clicking or tapping the button will hide the sections links
- For consistency, changed `guide__code_block` to `guide_code_block` and `guide__code_inline` to `guide_code_inline`
- Updated Schema version
  - [looks at camera and breaks the fourth wall] This is my first time creating a migration, so if it doesn't work, please let me know.

### Fixed
- Fixed an issue that prevented Guide from being installed via the console
- Fixed a Javascript bug that prevented the ability to jump to sections on the Guide CP Section


## 1.0.2 - 2017-12-12
### Added
- Added a drop down subnavigation to jump down to a sections on a page
- Added a way to flag header elements as `data-guide-section`, which adds the element to the drop down subnav
- Added styles for table elements
- Added a new grid style for featuring screenshot images or other media

### Changed
- Made some tweaks and added some default CSS Custom Properties to guide.css.


## 1.0.1 - 2017-12-11
### Added
- Added new page to preview style components.

### Changed
- Made some tweaks and added some defaults to guide.css.

### Fixed
- Restrict loading guide.js to CP only.
- Fixed paths to all GitHub files


## 1.0.0 - 2017-12-05
### Added
- Initial release