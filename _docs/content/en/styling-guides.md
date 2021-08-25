---
title: Styling Guides
description: 'Overview of Guide for Craft CMS'
position: 204
category: Using Guide
version: 3.0.0
fullscreen: false
---

## Guide Classes

All guides are wrapped in a `.guide` class. This allows you to add custom CSS to your guides without affecting other styles in the Craft CP.

For example, to add a red background to all `<p>` tags within a guide, you can add a `css` Twig tag to your guide:

```twig
{% css %}
.guide p {
  background-color: red;
}
{% endcss %}
```

The thing is, this will affect all of the guides on the page. If you want to change styles for a specific guide, you can use a selector that includes the guide’s `slug`, like this:

```twig
{% css %}
.guide-REPLACE_SLUG p {
  background-color: red;
}
{% endcss %}
```

So a guide with the slug, `publishing-content`, could be styled with the selector, `.guide-publishing-content`.

### Adding Guides via CSS Selector

When using a CSS Selector field in the Organizer to add guides to a page, custom styles may be needed to help a guide fit in. It may take some snooping via your browser’s dev tools, but you can use some of Craft’s CSS classes to style your guides.

For example, if you want to add a guide above a listing of entries you can add the guide to the Control Panel Pages area, enter in the Page URI, and enter `#content-container` into the CSS Selector field.

Say your guide content looks like this:

```twig
<p>Let’s talk about all of these elements.</p>
```

When you first visit the entries listing page you'll see your guide content below the list of entries. It will look like a line of plain text floating in space.

Because the only children in the `#content-container` element should be the `#content` container and your guide, you can use a small flexbox trick to move your content to the top of `#content-container`.

```twig
<p>Let’s talk about all of these elements.</p>

{% css %}
#content-container {
  display: flex;
  flex-direction: column-reverse;
}
{% endcss %}
```

The text should appear above the list of entries, but it will still look like plain text. You can use Craft’s `.content-pane` class to give your text some padding and a white background. You can also use a [utility class](#utility-classes), such as `g-mb-3`, to add some space between your guide and the entries listing.

The final code should look something like this:

```twig
<div class="content-pane g-mb-3">
  <p>Let’s talk about all of these elements.</p>
</div>

{% css %}
#content-container {
  display: flex;
  flex-direction: column-reverse;
}
{% endcss %}
```

<alert type="warning">

While it’s infrequent, Craft CMS’s styles, classes, and ids may change from time to time. Doing a quick check around the CP and being on the lookout for broken guides whenever you update Craft is recommended.

</alert>

## Utility Classes

Guide uses a small subset of prefixed [Tailwind CSS classes](https://tailwindcss.com/docs/utility-first) to make it easier to lay out and style guide content. Utility classes are prefixed with `g-`, so, for example, to use Tailwind’s `flex` class, write `g-flex`.

The current list of supported utility classes can be found [below](#list-of-utility-classes). When using the code editor to edit a guide utility classes will autocomplete when you begin typing `g-`.

<alert type="info">

The [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin, written as `g-prose`, has been included to help add some additional styling to content blocks when necessary. The `g-prose g-prose-sm` combination is closer to Craft’s default font size, but the other sizes are included if a larger base font size is needed.

</alert>

### Variants

[Tailwind’s utility variants](https://tailwindcss.com/docs/responsive-design) can be used to change your layout based on screen size or other state changes. Guide currently only uses a few responsive variants:

| Variant | Description |
| --- | --- |
| `sm` | A mobile-first media query for landscape mobile devices or small tablets. |
| `md` | A mobile-first media query for tablets and small laptop screens. |
| `lg` | A mobile-first media query for laptops and larger monitors. |

It may seem confusing at first, but variants come before the Tailwind prefix. So if you wanted to hide content at the `md` break point, you could write this: `md:g-hidden`

More variants may be added in the future, but variants greatly increase Guide’s CSS file size, so adding variants will be thoughtfully considered first.

### Custom CSS Grids

To make it easier to lay out content in a custom CSS grid, a combination of utility classes and CSS custom properties can be used.

A `g-grid-cols-[var(--grid-cols)]` class can be added to an element and it will get set to any [valid CSS template column value](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) set in a `--grid-cols` variable.

For example, a two-column grid could look like this:

```twig
<div class="g-grid g-grid-cols-[var(--grid-cols)]" style="--grid-cols: 10rem 1fr">
  <p>Column 1 content</p>
  <p>Column 2 content</p>
</div>
```

Because it might be better to set content to different grid columns at different breakpoints, additional classes, based on responsive variant names have been added: `g-grid-cols-[var(--grid-cols-sm)]`, `g-grid-cols-[var(--grid-cols-md)]`, and `g-grid-cols-[var(--grid-cols-lg)]`.

For example, if you wanted to set content to a custom three-column grid at the `md` breakpoint, you could write something like this:

```twig
<div class="g-grid g-grid-cols-[var(--grid-cols)] md:g-grid-cols-[var(--grid-cols-md)]" style="--grid-cols: 10rem 1fr; --grid-cols-md: auto 1fr 100px">
  <p>Column 1 content</p>
  <p>Column 2 content</p>
  <p>Column 3 content</p>
</div>
```

### List of Utility Classes

Here is the current list of supported utility classes in Guide:

```
g-prose
g-prose-sm
g-prose-md
g-prose-lg
g-prose-xl
g-prose-2xl
g-hidden
g-block
g-inline-block
g-flex
g-inline-flex
g-flex-wrap
g-flex-nowrap
g-flex-wrap-reverse
g-flex-grow-0
g-flex-grow
g-flex-shrink-0
g-flex-shrink
g-grid
g-inline-grid
g-items-center
g-items-start
g-items-end
g-items-baseline
g-items-stretch
g-justify-start
g-justify-end
g-justify-center
g-justify-between
g-justify-around
g-justify-evenly
g-grid-cols-2
g-grid-cols-3
g-grid-cols-4
g-grid-cols-5
g-grid-cols-6
g-grid-cols-[var(--grid-cols)]
g-grid-cols-[var(--grid-cols-sm)]
g-grid-cols-[var(--grid-cols-md)]
g-grid-cols-[var(--grid-cols-lg)]
g-mx-0
g-my-0
g-mt-0
g-mr-0
g-mb-0
g-ml-0
g-mx-3
g-my-3
g-mt-3
g-mr-3
g-mb-3
g-ml-3
g-mx-6
g-my-6
g-mt-6
g-mr-6
g-mb-6
g-ml-6
g-px-0
g-py-0
g-pt-0
g-pr-0
g-pb-0
g-pl-0
g-px-3
g-py-3
g-pt-3
g-pr-3
g-pb-3
g-pl-3
g-px-6
g-py-6
g-pt-6
g-pr-6
g-pb-6
g-pl-6
g-absolute
g-relative
g-sticky
g-top-0
g-top-16
g-right-0
g-bottom-0
g-left-0
g-space-y-1
g-space-y-2
g-space-y-3
g-space-y-6
g-space-x-1
g-space-x-2
g-space-x-3
g-space-x-6
g-max-w-prose
g-text-left
g-text-center
g-text-right
g-text-primary
g-text-sm
g-font-bold
g-cursor-pointer
g-shadow-lg
g-duration-150
g-duration-300
g-cursor-grab
g-cursor-grabbing
g-scroll-snap-none
g-scroll-snap-x
g-scroll-snap-y
g-scroll-snap-start
g-scroll-snap-center
g-scroll-snap-end
```

If you would like to see a utility class added to this list, add a [Pull Request](https://github.com/wbrowar/craft-guide/pulls) or [talk about it in a Discussion](https://github.com/wbrowar/craft-guide/discussions) in the Guide GitHub repo.