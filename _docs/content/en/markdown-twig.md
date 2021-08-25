---
title: Markdown in Twig and Twig in Markdown
description: 'Overview of Guide for Craft CMS'
category: Tips and Tricks
position: 300
version: 3.0.0
fullscreen: false
---

Craft includes a Twig filter to allow content to be parsed into GitHub flavor markdown (it’s the `md` filter, with `'gfm'` passed into it). To make this easy to remember, Guide includes the Markdown component in the Guide Editor. Any content written within the `{% filter md('gfm') %}{% endfilter %}` blocks are rendered as Markdown.

When using the Markdown component, please note that white space does make a difference and that there should be no tabs or spaces before any markdown content.

For example, you should do this:

```twig
<section>
{% filter md('gfm') %}

## Markdown Content

This is my content in Markdown now

{% endfilter %}
</section>
```

Even if it looks more readable to do this:

```twig
<section>
  {% filter md('gfm') %}
   ## Markdown Content
   
   This is my content in Markdown now
  {% endfilter %}
</section>
```

On great thing about using Markdown filters within Twig is that Twig tags can still get rendered. For example, if you would like to place a "Button" component inside of a block of markdown, this would be valid:

```twig
{% set docsUrl = 'https://docs.craftcms.com/' %}
{% filter md('gfm') %}

The Craft CMS docs can be found here:

{{ craft.guide.component('button', { label: 'Go to the Docs', url: docsUrl }) }}

{% endfilter %}
```

<alert type="info">

The newline rules of Markdown apply in Markdown blocks. In the example above, the rendered button would appear within a `<p>` tag.

</alert>