---
title: UI elements
description: 'Overview of Guide for Craft CMS'
position: 203
category: Using Guide
version: 3.0.0
fullscreen: false
---

![Guide UI element](https://wbrowar.us-east-1.linodeobjects.com/static/guide-docs/guide-ui-display.png?mtime=20210821155119&focal=none)

All guides can be added to Guide UI elements, however, this is not done within the Guide Organizer. To add a guide to a page that allows for UI elements, follow these instructions:

1. Use Craft’s Field Layout Designer to add a Guide UI element to your field layout.
2. A unique ID needs to be saved to your UI element to identify. Click on the Settings icon on the UI element. Here you can make up your own unique ID or use the one generated. Save the UI element to continue.
  <alert type="info">
  This is set up because of how Craft currently works with UI element settings. Hopefully this step 2 can be removed in a future release.
  </alert>
4. Save your field layout. If you are using Project Config, push your config files and apply them to your desired environment.
5. When you visit the page for the field layout, you’ll find a dropdown input with a list of all available guides. Select the guide you would like to appear and click the Save button.
6. In order to avoid changing any content on the page, you will need to finish up any content changes and refresh the page to see the guide appear in the UI element.

![Guide UI element select](https://wbrowar.us-east-1.linodeobjects.com/static/guide-docs/guide-ui-select.png?mtime=20210821155339&focal=none)

If you would like to select a new guide for a Guide UI element hover over the guide content and look for a gear icon to appear in the top-right corner of the guide. Click the icon to return to the guide selection dropdown and select a new guide. If you do not select a guide, the original selection will appear next time you come back to the edit page.