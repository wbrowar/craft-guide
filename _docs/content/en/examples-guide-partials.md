---
title: Guide Partials
description: 'Overview of Guide for Craft CMS'
position: 300
category: Recipes, Tips, and Tricks
version: 3.0.0
fullscreen: false
---

The `craft.guide.include()` variable makes it easy to reuse guide content in several different places. For example, if you wanted to create a guide that talks about how to edit and publish entry content, you may consider this pattern:

1. Create a guide partial with your desired content.
1. In the Guide Organizer, leave this in the "Unused Guides" area. Even in the "Unused Guides" area, each guide is given a slug. In this example, let’s pretend the slug is `publishing-content`.
1. For each of your entry types, create a new guide with the Twig format, paste this into it: `{{ craft.guide.include({ slug: 'publishing-content' }) }}`, then use the Guide Organizer to add the guide to its respective content type.

Now when an author goes to edit an entry, they will have the option to view the content of the `publishing-content` guide from the list of guides in the edit page’s sidebar. What’s even better is that when the content of the `publishing-content` guide gets updated, it will get propagated to all of the places where the guide is included.
