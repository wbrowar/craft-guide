---
title: TL;DR
description: 'Overview of Guide for Craft CMS'
category: Tips and Tricks
position: 300
version: 3.0.0
fullscreen: false
---

If you find yourself writing a complicated guide that includes lots of detail, you can give readers the choice between reading the entire thing or being presented with a summarized version.

<video src="https://wbrowar.us-east-1.linodeobjects.com/static/guide-docs/guide-tldr.mov?mtime=20210821161901&focal=none" autoplay controls loop></video

## TL;DR Classes

A pair of classes, `.tldr-hide` and `.tldr-show`, can be used to hide or show content. When either classes are included in your guide a "TL;DR" button will appear in the top-right corner when the mouse is over your guide content. Clicking the TL;DR button will toggle TL;DR on and off. Depending on what class you are using, your content will show or hide itself.

For example, to hide content when TL;DR is on, you can use the `.tldr-hide` class:

```html
<p>Show this all of the time.</p>

<div class="tldr-hide">
  <p>Hide this when in TL;DR.</p>
</div>
```

In this case, `.tldr-hide` content is hidden, but the first line remains. To swap out content when TL;DR is on, you can use the `.tldr-show` class:

```html
<div class="tldr-show">
  <p>Only show this in TL;DR.</p>
</div>

<div class="tldr-hide">
  <p>Only show this when <em>not</em> in TL;DR.</p>
</div>
```

Here the first line is initially hidden until TL:DR is turned on. To the reader it should look like the content is being replaced with the `.tldr-show` content.

## TL;DR Variant

If you need to adjust the layout when TL;DR is turned on you can use the `tldr` [variant](/styling-guides#variants) with Guide’s utility classes:

```html
<div class="g-grid g-grid-cols-2 tldr:g-grid-cols-1">
  <div>One column grid</div>
  <div class="tldr-hide">but only in TLDR</div>
</div>
```

In this example, the second column is hidden by `.tldr-hide`, so the `tldr` variant changes from a two-column grid to a one-column grid.

<alert type="info">

TL;DR will stay on for the reader when they return to the guide and across all guides until they turn it off.

</alert>