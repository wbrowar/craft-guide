# Guide Editor CSS

Craft CMS has a Twig tag that is used to register CSS on any page, called `{% css %}`. However, this tag won’t work in all of the places where a guide can be embedded.

The **CSS** field in the **Guide Editor** lets you add CSS that is added to every page in the Craft CMS CP (Control Panel). Adding your CSS to this field will be more reliable, and you’ll be writing in a code editor field that is configured for the CSS syntax.

## Adding CSS to Guides

All guides are wrapped in a `.guide` class. This allows you to add custom CSS to your guides without affecting other styles in the Craft CP.

For example, to add a red background to all `<p>` tags within a guide you can write your selector like this:

```css
.guide p {
  background-color: red;
}
```

The thing is, this will affect all of the guides in your project. If you want to change styles for a specific guide, you can use a selector that includes the guide’s `slug`:

```css
.guide-REPLACE_WITH_SLUG p {
  background-color: red;
}
```

So a guide with the slug, `publishing-content`, could be styled with the selector, `.guide-publishing-content`.

Native CSS nesting can be a great way to avoid having to rewrite the wrapping selector for multiple CSS rules:

```css
.guide-publishing-content {
  & p {
    background-color: red;
  }
  & a {
    color: white;
  }
}
```

## Adding Guides via CSS Selector

When using the CSS selector field in the **Guide Organizer** to add guides to the **Control Panel Pages** group, custom styles may be needed to help a guide fit in. It may take some snooping via your browser’s DevTools, but you can use some of Craft’s CSS classes and CSS Custom Properties to style your guides.

<div class="readable guide-component-tip">
  <blockquote class="note tip">While it’s infrequent, Craft CMS’s styles, classes, and ids may change from time to time. Doing a quick check around the CP and being on the lookout for broken guides whenever you update Craft is recommended.</blockquote>
</div>
