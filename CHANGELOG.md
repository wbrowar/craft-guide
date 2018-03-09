# Guide Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).


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