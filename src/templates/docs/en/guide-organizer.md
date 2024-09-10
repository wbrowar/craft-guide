# Guide Organizer

## Guide Display

When guides are dropped into a CP area they will be listed in alphabetical order. When more than one guide is added to a section, a navigation will appear in the top-right of the guide display—letting the reader choose which guide they want to view.

### Dashboard Widgets

Dragging a guide to the Widgets area of the Organizer allows that guide to be added to a Guide widget. From there, a user can add a Guide widget to their dashboard and select this guide from the list of all guides in the Widget area.

### Content Edit Pages

Guides can be dragged to the Entries area to appear on all entry edit pages. Guides can also be added to the edit pages of specific entry sections. This works the same way for Asset, Category, Global edit pages. Guides added to the Users area will appear on all user edit pages.

By default, guides that are added to edit pages are embedded above the edit page’s content fields. If preferred, a setting in Guide’s plugin settings can be changed to move guides below edit fields across all edit pages.

### Control Panel Pages

Guides can be added to any other page in the CP by providing the page URI and a CSS selector in a guide dragged to the Control Panel Pages area.

<div class="readable guide-component-tip">
  <blockquote class="note tip">The page URI should not include the <code>cpTrigger</code> segment. In most Craft sites this is set to <code>admin</code>, unless it has been changed in the General config. For example, if you want add a guide to the Field Settings page at <code>/admin/settings/fields</code>, enter <code>settings/fields</code> as the Page URI.</blockquote>
</div>

For the CSS Selector field, enter valid CSS selector (a class, id, or `data` attribute) of the element where the guide should be added to. The guide content will be appended to the bottom of the element and custom CSS in the guide can help you position it or style it to fit in with its surroundings.

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

| Area Handles  | Description                                                               |
|---------------|---------------------------------------------------------------------------|
| `elementEdit` | An asset, category, entry, or user edit page (above or below edit fields) |
| `guide`       | The Guide CP homepage                                                     |
| `page`        | An individual guide page                                                  |
| `slideout`    | Craft CMS slideout                                                        |
| `widget`      | A Dashboard widget                                                        |
| `uiElement`   | A UI element on an edit page                                              |
| `uri`         | A guide added via URI. This value is the default.                         |

