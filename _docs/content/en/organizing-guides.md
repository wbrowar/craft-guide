---
title: Organizing Guides
description: 'Overview of Guide for Craft CMS'
position: 202
category: Using Guide
version: 3.0.0
fullscreen: false
---

![Guide Organizer](https://assets.wbrowar.com/guide/img/guide-organizer.png)

When a guide is first created, it will appear in the left-hand side of the Organizer (the Organizer link in the Guide CP section). To the right of that column you’ll see a list of areas around the Guide CP. Use drag and drop to move a guide to one or more of these locations.

When hovering over a guide in the left-hand side of the Organizer, you'll see a set of buttons appear for the guide:

| Action | Description |
| --- | --- |
| Edit | Edit brings you to the guide edit page for that guide. Clicking save will return you back to the Organizer. |
| Delete | Brings you to a delete confirmation page. Clicking the `Delete` button on this page will completely remove the guide from the CMS. |
| View | View the guide on its own page in the CP. All guides have their own page and they can be linked to using `url('guide/page/GUIDE_SLUG')`. |
| Add | Brings up a modal letting you add the guide to a CP area without using drag and drop. |

When hovering over guides that have been placed in CP areas, you’ll see buttons appear that are specific to that guide in that CP area:

| Action | Description |
| --- | --- |
| Edit | Brings up a modal that lets you change the selected CP area. Depending on which CP area the guide is in, other fields may appear in the modal. |
| Delete | Removes this instance of a guide in the CP area. This does not delete the guide itself. |

## Guide Display

When guides are dropped into a CP area they will be listed in alphabetical order. When more than one guide is added to a section, a navigation will appear in the top-right of the guide display—letting the reader choose which guide they want to view.

### Guide CP Section

![Guide CP page](https://assets.wbrowar.com/guide/img/guide-overview.png)

Guides dragged into the Guide area of the Organizer will appear in the Guide CP Section’s Guide link. This page can be considered a traditional CMS user manual and it's available to users of the LITE edition of Guide.

### Content Edit Pages

![Guide modal](https://assets.wbrowar.com/guide/img/guide-modal.png)

Guides can be dragged to the Entries area to appear on all entry edit pages. Guides can also be added to the edit pages of specific entry sections. This works the same way for Asset, Category, Global edit pages. Guides added to the Users area will appear on all user edit pages.

By default, guides that are added to edit pages are embedded above the edit page’s content fields. If preferred, a setting in Guide’s plugin settings can be changed to move guides below edit fields across all edit pages.

### Dashboard Widgets

![Guide widget](https://assets.wbrowar.com/guide/img/guide-dashboard.png)

Dragging a guide to the Widgets area of the Organizer allows that guide to be added to a Guide widget. From there, a user can add a Guide widget to their dashboard and select this guide from the list of all guides in the Widget area.

### Control Panel Pages

Guides can be added to any other page in the CP by providing the page URI and a CSS selector in a guide dragged to the Control Panel Pages area.

<alert type="info">

The page URI should not include the `cpTrigger` segment. In most Craft sites this is set to `admin`, unless it has been changed in the General config. For example, if you want add a guide to the Field Settings page at `/admin/settings/fields`, enter `settings/fields` as the Page URI.

</alert>

For the CSS Selector field, enter valid CSS selector (a class, id, or `data` attribute) of the element where the guide should be added to. The guide content will be appended to the bottom of the element and custom CSS in the guide can help you position it or style it to fit in with its surroundings.

See [Styling Guides](/styling-guides#adding-guides-via-css-selector) for some tips to help your guides fit in when added to the Control Panel Pages area.

## Display Area Helpers

Since guides can be added to multiple places at once a variable, called `guideDisplayArea`, can be used to make changes to your guide based on where it has been placed in the Organizer.

For example, you can add this to your guide to add some custom CSS when you know your guide has been added to a widget:

```twig
<p>My guide content</p>

{% if guideDisplayArea == 'widget' %}
  {% css %}
    .p { font-size: 2rem }
  {% endcss %}
{% endif %}
```

Here is a list of all of the current values that `guideDisplayArea` can be set to.

| Area Handles | Description |
| --- | --- |
| `elementEdit` | An asset, category, entry, or user edit page |
| `guide` | The Guide CP homepage |
| `page` | An individual guide page |
| `widget` | A Dashboard widget |
| `uiElement` | A UI element on an edit page |
| `uri` | A guide added via URI. This value is the default. |




