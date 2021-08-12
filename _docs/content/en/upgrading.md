---
title: Upgrading from Guide 2
description: 'Installing Guide'
position: 103
category: Getting started
version: 3.0.0
fullscreen: false
---

Templates built for Guide 2 will mostly be compatible, however, Guide 3 introduces some breaking changes. Here are some things that need to be updated to convert a Guide 2 template for Guide 3:

- All guides in Guide 3 are based in the Twig format. Markdown guides from Guide 2 should be wrapped in a `{% filter markdown('gfm') %}` twig tag, like this:
    ```twig
    {% filter markdown('gfm') %}
    
    ## Heading
    
    Content
    
    {% endfilter %}
    ```
- There is currently no migration for Organizer data from Guide 2 to Guide 3. All guides will be available in the Organizer and can be dragged back to the desired Craft CP area.
- Existing Guide UI Elements, managed through the Craft Field Layout Designer, have been replaced with a new UI Element class. Craft doesn’t automatically remove old UI Elements, so existing Guide UI Elements need to be replaced.
  - The new Guide UI Elements no longer require you to select a guide in an environment that allows for admin changes 🎉
- Rebrand styles have been removed in Guide 3 and guide components have minimal styling so they fit in better with Craft’s default stylesheet. A subset of Tailwind-based utility classes have been added and are discoverable through the Guide Editor so you can lay out your guide content.
- Per-guide permissions have been removed. Use [Craft’s user permission check](https://craftcms.com/docs/3.x/user-management.html#checking-permissions) to determine who should view sensitive guide information.