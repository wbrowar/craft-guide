# Guide Organizer

The **Guide Organizer** lets you choose where guides will appear around the Craft CMS CP (Control Panel). On this page you’ll see the groups where a guide can be added, any guides that have been selected for that group, and a dropdown field with a list of guides in your project.

To add a guide to a group, open the dropdown and select a guide. The page will update and the group will be saved.

To remove a guide, click on the **Remove** button to the right of the guide in the list.

### Dashboard Widgets

Adding a guide to the **Widgets** group allows that guide to be added to Guide **Dashboard** widgets. A user can add a Guide widget to their **Dashboard** and select a guide from the list of all guides in the **Widget** group.

### UI Elements

Adding a guide to the **UI Elements** group allows that guide to be added to a **UI Element** on element edit pages.

A developer or admin can add a Guide **UI Element** in the field layout designer for an element type. This will work as a placeholder until admin changes have been pushed into a production environment.

In production, any user with the permission, `Use Organizer and UI Element Selector`, enabled can use a **Settings** button to choose a guide to display in that UI Element.

### Element Edit Pages

Guides can be added to the **Entries** group to appear on all entry edit pages. Guides can also be added to the edit pages of specific entry sections. When an entry edit page is loaded Guide will combine the added guides together into one place.

This works the same way for **Asset**, **Category**, and **Global Set** edit pages. Guides added to the Users area will appear on all user edit pages.

By default, guides that are added to element edit pages will make a button appear in next to the Live Preview button on the page. By clicking that button the guides selected for that group will appear in a slideout panel.

If preferred, a setting in **Guide Settings** can be changed to move guides above or below edit fields across all element edit pages.

### Fields

A guide can be assigned to a field, giving you more in-depth instructions and tips on how to use the field. When that field is shown on an edit page, a guide button will be added next to the field header and that button will open up that guide in a slideout panel. 

In the **Fields** group, add a guide and use the select field to assign it to one of the fields in your Craft CMS project. Only one guide can be added to a field, however, a guide may be added to multiple fields.

<div class="readable guide-component-tip">
  <blockquote class="note warning">The guide button is matched up to the field based on the field handle. For sites upgraded from Craft 4 to Craft 5, the fields should be merged or the handle renamed before the guide button will appear on an assigned field.</blockquote>
</div>

### Control Panel Pages

Guides can be added to any other page in the CP by providing a URI pattern and a CSS selector in a guide added to the **Control Panel Pages** group.

The **uri pattern** field determines which pages the guide appears on, based on RegEx patterns that are matched using [PHP’s `preg_match()` method](https://www.php.net/manual/en/function.preg-match.php). See **Matching URI Patterns** below for some tips on working with RegEx patterns to target certain pages in the CP.

<div class="readable guide-component-tip">
  <blockquote class="note tip">The page URI should not include the <code>cpTrigger</code> segment. In most Craft sites this is set to <code>admin</code>, unless it has been changed in the Craft CMS General config. For example, if you want add a guide to the Commerce Orders page at <code>/admin/commerce/orders</code>, enter <code>commerce/orders</code> into the <strong>uri pattern</strong> field.</blockquote>
</div>

For the **selector** field, enter a valid CSS selector (a class, id, or `data` attribute) of the element where the guide should be added to. By default the guide will appear at the bottom of the selected element, however, you can use the dropdown to move it on top, above, or below the HTML element.

#### Matching URI Patterns

To help you determine if a URI pattern will match against a page in the CP, you can use some online RegEx tools to test your pattern. For example you could do this:

1. Copy the URI you want to match against, for example `/admin/entries`.
2. Remove the `cpTrigger` from the front of the URI: `/entries`
2. Remove any leading and trailing slashes: `entries`
2. Visit https://regex101.com and paste your pattern, `entries`, in the **TEST STRING** field.
2. Make sure the language is set to PHP and then past `entries` into the **REGULAR EXPRESSION** field.
3. You’ll see that there’s a match and this means that any page with `entries` in the URI will display your guide.
4. Once you are done editing your RegEx, copy it and paste it into the Guide Organizer **uri pattern** field.

In the example above, we are matching with all of the pages that include the text, `entries`, but if we want to be more specific here are a few things we can do.

| RegEx                       | Notes                                                                                                                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `^entries`                  | Matches any URI that starts with `entries` (because `^` indicates this is the beginning of the URI). This means all entry lists pages and entry edit pages will display the guide. |
| `^entries$`                 | Matches the **All entries** list page and stops there (because `$` indicates this is the end of the URI).                                                                          |
| `^entries\/([^\/]+)$`       | Matches all entry list pages except the **All entries** list page. It does not include any of the entry edit pages.                                                                |
| `^entries?(\/)?([^\/]+)$`   | Matches all entry list pages and it includes the **All entries** list page.                                                                                                        |
| `^entries\/(.*)\/([^\/]+)$` | Matches _only_ entry edit pages and skips over entry list pages.                                                                                                                   |
| `^entries\/blogPost`        | Matches entry edit pages in a specific section.                                                                                                                                    |

## Guide Display

When guides are dropped into a CP area they will be listed in alphabetical order. When more than one guide is added to a section, a navigation will appear in the top-right of the guide display—letting the reader choose which guide they want to view.

## Display Area Helpers

Since guides can be added to multiple places at once a Twig variable, called `guideDisplayArea`, can be used to make changes to your guide based on where it has been placed in the Guide Organizer.

For example, you can add this to your guide to add a link when you know your guide has been added to a widget:

```twig
<p>My guide content</p>

{% if guideDisplayArea == 'widget' %}
  <a href="http://my-website.com/>My neat website!</a>
{% endif %}
```

Here is a list of the values that `guideDisplayArea` will be set to.

| Area Handles  | Description                                                                                |
|---------------|--------------------------------------------------------------------------------------------|
| `elementEdit` | An asset, category, entry, or user edit page (in a slideout, above, or below edit fields). |
| `guide`       | The CMS Guide page.                                                                        |
| `page`        | An individual guide page.                                                                  |
| `slideout`    | Craft CMS slideout (except when opened on an element edit page).                           |
| `widget`      | A Dashboard widget.                                                                        |
| `uiElement`   | A UI Element on an edit page.                                                              |
| `uri`         | A guide added to the Control Panel Pages group in the Guide Organizer.                     |

