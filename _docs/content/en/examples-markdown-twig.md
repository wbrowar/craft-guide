---
title: Markdown in Twig and Twig in Markdown
description: 'Overview of Guide for Craft CMS'
position: 300
category: Recipes, Tips, and Tricks
version: 3.0.0
fullscreen: false
---

Craft includes a Twig filter to allow content to be parsed into GitHub flavor markdown (it’s the `md` filter, with `'gfm'` passed into it). To make this easy to remember, Guide includes the "Markdown" component for Twig-based guides. Any content written within the `{% filter md('gfm') %}{% endfilter %}` blocks are rendered as Markdown.

This could be useful if you prefer to switch from verbose HTML to Markdown’s simplified format. It can also be handy if you started a Guide using Markdown, but you find yourself needing to change its format to Twig to include some dynamic content. To do this, follow these instructions:

1. On the guide’s edit page, change the format from Markdown to Twig.
1. Select all of the content in the guide and copy or cut it.
1. Drag the "Markdown" component into the editor. You should see something like this:

   ```twig
    {% filter md('gfm') %}
    
    Content
    
    {% endfilter %}
   ```

1. Delete the word, 'Content', and paste your old content in its place.
1. You may now add Twig markup above or below the {% filter %} block.

When using the "Markdown" component, please note that white space does make a difference and that there should be no tabs or spaces before any markdown content.

For example, you should do this:

```twig
{% if showMarkdownContent %}
{% filter md('gfm') %}

## Markdown Content

This is my content in Markdown now

{% endfilter %}
{% endif %}
```

Even if it looks more readable to do this:

```twig
{% if showMarkdownContent %}
  {% filter md('gfm') %}
    ## Markdown Content
    
    This is my content in Markdown now
  {% endfilter %}
{% endif %}
```

On great thing about using Markdown filters within Twig is that Twig tags can still get rendered. For example, if you would like to place a "Button" component inside of a block of markdown, this would be valid:

```twig
{% set docsUrl = 'https://docs.craftcms.com/' %}
{% filter md('gfm') %}

The Craft CMS docs can be found here:

{{ craft.guide.component('button', { label: 'Go to the Docs', url: docsUrl }) }}

{% endfilter %}
```

<alert>

The newline rules of Markdown apply in Markdown blocks. In the example above, the rendered button would appear within a `<p>` tag.

</alert>