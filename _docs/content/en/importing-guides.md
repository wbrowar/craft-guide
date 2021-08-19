---
title: Re-Using Guides Across Projects
description: 'Overview of Guide for Craft CMS'
category: Tips and Tricks
position: 300
version: 3.0.0
fullscreen: false
---

Found in Utilities, the Import Guide JSON utility makes it easy to copy guides from one project to another, or to move guides across environments of the same project.

In the project you would like to export guides from, a button, labeled Copy Guide Data, will copy all of your guides to your clipboard. Then you can visit the Guide Utilities page in the receiving project and follow the instructions there to add your guides to that environment.

<alert type="info">

When using Import Guide JSON, Guide will only add new guides into the database. The import process will ignore guides with a `slug` that matches an existing guide’s slug.

</alert>
