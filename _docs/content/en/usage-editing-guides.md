---
title: Editing Guides
description: 'Overview of Guide for Craft CMS'
position: 201
category: Using Guide
version: 3.0.0
fullscreen: false
---

A guide can be written by hand, imported as a template, or embedded as an iframe. All guides are created and configured in the Guide Editor.

![Guide Editor](https://assets.wbrowar.com/guide/img/guide-editor.png)

To create a new guide, go to the Organizer tab in the Guide CP section and click on the `+ New Guide` button.

When setting up a guide, you’ll set the following options under the Settings tab:

| Options | Description |
| --- | --- |
| Title | The title of the guide as it appears throughout the CMS. |
| Slug | The slug of the guide used in its URI. This slug is used when including guide content into another. |
| Content Source | Determine if the guide’s content should come from the code editor, a Twig template in your Guide Templates directory, or an external URL. |
| Summary | A short summary of the guide displayed on the guide in the Organizer. |

### Components

![Guide Component](https://assets.wbrowar.com/guide/img/guide-component.png)

When using the Editor field to create a guide, you’ll see a column of components to the left. Each component can be dragged from the list onto the editor field and the component will be added at the place where the cursor is set.

Components are made up of either plain HTML, Markdown, Twig, or Vue components. HTML and Markdown-based components are meant to be simpler components where only content needs to be changed. Styles may change over time, but the markup will remain the same.

Twig and Vue components are meant to make it easy to create more complicated components that can be optimized and added to in the future.

### Twig Components

For example, the Markdown image component needs a URL and alt attribute to be set, and the markup for this component is a simple HTML `img` tag. You may manually change it as needed.

The Twig image component is based on a Guide variable and it looks like this:
 ```twig
{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}
```

The first thing passed into the `component` variable is the handle for the component. In this case, it’s `image`. The second argument is an object of configuration options. This is an example of an image component that pulls an image file in from an external URL, so the `url` attribute is used to set the image source.

Under the hood, the Twig component is transforming the image to optimize its filesize at both 1x and 2x resolutions and lazy loading is added so the image doesn’t load until the reader scrolls down to it.

The above example is based on the "Image" Twig component, however, when you drag an asset component into the editor field you'll notice that the same `image` handle is used but different attributes are passed in:

```twig
{{ craft.guide.component('image', { asset: craft.assets.filename('assets-image-optimize.png').one() }) }}
```

A full list of available arguments will be added to this README in a future update.

### Twig Variables

When a guide is written in Twig format, Guide provides a set of Twig variables:

| Variable Example | Description |
| --- | --- |
| `craft.guide.component('audio', { url: 'my-song.mp3' })` | (Available in Guide PRO) Renders a Guide Component based on the handle set in the first argument and a configuration object in the second argument. |
| `craft.guide.getAll({ format: 'twig' })` | Performs a search of all guides that fit the criteria passed in. This will return an array of guide objects. |
| `craft.guide.getAllForUser({ format: 'twig' })` | Performs the same search as `craft.guide.getAll`, but returns only guides that the currently logged in user has permission to view. |
| `craft.guide.getOne({ id: 10 })` | Returns a single guide object based on the criteria passed in. |
| `craft.guide.include({ slug: 'assets' })` | Finds a matching guide and renders its content in place. |
| `craft.guide.var('clientName')` | Returns variables set in Guide Settings. |

### Guide Templates

You may use templates to create your CMS guide in a way that's easily portable from one Craft site to another. To add a template to your CMS guide, follow these instructions:

1. Create your guide template and save it using `.md`, `.twig`, or `.html` as its file extension.
1. Place your file into the directory set as the Template Path setting in the Guide setting page. The default is set to `_guide`, so in that case your file would need to go into `./templates/_guide/`.
1. Go to the Organizer tab in the Guide CP section and click on the `+ New Guide` button to create a new guide.
1. Set Content Source to `Page Template`.
1. Select your new template in the Template field in the Editor tab.
1. Click the `Save` button.
1. Use the Organizer to drag your new guide to the desired location.

Guides in your Template Path can be included and imported by using the path `guide_template_path` in your Twig tags.

For example, a Twig file at the location `./templates/_guide/header.twig` would be can be included using: `{% include 'guide_template_path/header.twig' %}`.

This will allow you to move the Template Path to a different location without breaking your includes and imports.

#### Markdown Templates

Templates saved as `.md` files will be parsed as [Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/). 

### External Documentation

Selecting `External Page` from the Content Source guide option will let you display an external page in an iframe.

![The Craft Docs in an iframe](https://assets.wbrowar.com/guide/img/guide-iframe.png)

The iframe replaces the guide content and all styling is ignored.
