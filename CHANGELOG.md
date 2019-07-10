# Guide Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.0.0 - 2019-07-01
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