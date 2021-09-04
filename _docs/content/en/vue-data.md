---
title: Vue Data in Guides
description: 'Overview of Guide for Craft CMS'
category: Tips and Tricks
position: 300
version: 3.0.0
fullscreen: false
---

Guides are all rendered in the following order:
1. Twig renders the guide into HTML.
2. Custom CSS is added to page when `{% css %}` tags are used.
3. [Vue.js 3](https://vuejs.org) is rendered on top of the resulting HTML and CSS.

Because Vue is already in use, Guide includes a set of variables that can be used for some limited interactivity.

<alert type="warning">

This feature is on the advanced side and having some knowledge of how Twig and Vue work together is recommended.

</alert>

## Using Vue in Guide Templates

Each guide is set up with 5 string variables, 5 number variables, and 5 boolean variables that can be set and retrieved within your guide’s HTML.

Each variable is bundled together by guide slug, so to retrieve variable, `string1`, you can add this to your guide:

```twig
{# Where `string1` = `String 1’s value` #}
<p>${ data['{{ guide.slug }}.string1'] }</p>

{# Outputs the value of `string1` #}
<p>String 1’s value</p>
```

However, since that can lead to some pretty verbose code, Twig shortcuts have been added for each Vue variable.

```twig
{# Where `string1` = `String 1’s value` #}
<p>${ {{ vueString1 }} }</p>

{# Outputs the value of `string1` #}
<p>String 1’s value</p>
```

<alert type="info">

Notice we're using `{{` inside of `${`? This is because the Twig variable will get rendered to HTML, then Vue will see this: `${ data['guide-slug'].string1 }`.

</alert>

All of Vue’s directives can be used with your variables, but since we’re writing in Twig first, to do a `v-if` you could write something like this:

```twig
<div v-if="{{ vueBoolean1 }}">Show only if `boolean1` is true<div>
```

Vue’s component events—such as `v-on:click`, which can also be written as `@click`—can also be used. For example, clicking this button will increase the value of `vueNumber1`:

```twig
<button class="btn" type="button" @click="{{ vueNumber1 }} += 1">Click</button>
<p>${ {{ vueNumber1 }} }</p>
```

<alert type="info">

Again we're using `{{` inside of the click event because Twig will have already rendered this out to the format Vue needs it in.

</alert>

## Setting Variable Values on Load

Guide’s Vue features are limited to what you can do in Vue templates. Vue doesn’t come with a way to set variable values in a template upon page load, so an `on-load` component is available to help with this. For example, if you wanted the `number1` variable to start at a value of `4` you could write this:

```twig
<on-load @loaded="{{ vueNumber1 }} = 4"></on-load>
```

When setting a string, be sure to add quotes around the value:

```twig
<on-load @loaded="{{ vueString1 }} = 'This is my string!'"></on-load>
<input form="guide" type="text" v-model="{{ vueString1 }}" />
```

<alert type="info">

When adding `input` elements into a guide, setting a `form` attribute to something arbitrary, like "guide" in this example, will make it safe to use this input on edit pages.

</alert>

## List of Variables

For reference, here are the variables that are build into each guide:

| Variable Name | Default Value | Twig Version | Raw Vue Code (only use if you need to) |
| --- | --- | --- | --- |
| `boolean1` | `false` | `{{ vueBoolean1 }}` | `data['{{ guide.slug }}'].boolean1` |
| `boolean2` | `false` | `{{ vueBoolean2 }}` | `data['{{ guide.slug }}'].boolean2` |
| `boolean3` | `false` | `{{ vueBoolean3 }}` | `data['{{ guide.slug }}'].boolean3` |
| `boolean4` | `false` | `{{ vueBoolean4 }}` | `data['{{ guide.slug }}'].boolean4` |
| `boolean5` | `false` | `{{ vueBoolean5 }}` | `data['{{ guide.slug }}'].boolean5` |
| `hash` | `''` |  | `hash` |
| `number1` | `0` | `{{ vueNumber1 }}` | `data['{{ guide.slug }}'].number1` |
| `number2` | `0` | `{{ vueNumber2 }}` | `data['{{ guide.slug }}'].number2` |
| `number3` | `0` | `{{ vueNumber3 }}` | `data['{{ guide.slug }}'].number3` |
| `number4` | `0` | `{{ vueNumber4 }}` | `data['{{ guide.slug }}'].number4` |
| `number5` | `0` | `{{ vueNumber5 }}` | `data['{{ guide.slug }}'].number5` |
| `string1` | `''` | `{{ vueString1 }}` | `data['{{ guide.slug }}'].string1` |
| `string2` | `''` | `{{ vueString2 }}` | `data['{{ guide.slug }}'].string2` |
| `string3` | `''` | `{{ vueString3 }}` | `data['{{ guide.slug }}'].string3` |
| `string4` | `''` | `{{ vueString4 }}` | `data['{{ guide.slug }}'].string4` |
| `string5` | `''` | `{{ vueString5 }}` | `data['{{ guide.slug }}'].string5` |