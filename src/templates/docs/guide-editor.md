# Guide Editor

A guide can be written in the built-in code editor, imported as a template, or embedded as an iframe. All guides are created and configured in the Guide Editor.

To create a new guide, go to the **Guides** menu item in the Guide CP section and click on the `+ New Guide` button.

## Settings

When setting up a guide, you’ll set the following options under the Settings tab:

| Options            | Description |
|--------------------| --- |
| **Title**          | The title of the guide as it appears throughout the CMS. |
| **Slug**           | The slug of the guide used in its URI. This slug is used when including guide content into another. |
| **Summary**        | A short summary of the guide displayed on the guide in the Organizer. |
| **Content Source** | Determine if the guide’s content should come from the code editor, a Twig template in your Guide Templates directory, or an external URL. |

More settings will appear based on your selection of the **Content Source** field.

| Options             | Content Source Value     | Description                                                                                                                  |
|---------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **Render Markdown** | `Code Editor`            | When enabled all of the markup in the **Content** field will get rendered as GitHub-flavored Markdown.                       |
| **Page Template**   | `Twig Template`          | Select a Twig template from within the directory you specified in the **Template Path** field on the **Guide Settings** page. |
| **Page URL**        | `External Page (iframe)` | A URL to an external website that will be loaded in an `<iframe>` as the guide’s content.                                    |

## Components

When using the code editor to create a guide you’ll see a row of tabs in the top-left of the editor. Each tab contains a list of components that can be added to your guide. Some components are simple shorthand for HTML markup where other components provide examples of things you can do within your guides. To see what arguments are available to it, click on the component’s **Variables** button.

Guide Components are based on a Guide variable and they look this:
```twig
{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}
```

The first thing passed into the `component` variable is the handle for the component. In this case, it’s `image`. The second argument is an object of variables. This is an example of an image component that pulls an image file in from an external URL, so the `url` variable is used to set the image source.

The above example is based on the Image component in the **Components** tab, however, when you add an asset component from the **Images** tab into the editor field you'll notice that the same `image` handle is used but different variables are passed in:

```twig
{{ craft.guide.component('image', { asset: craft.assets.filename('my-image.jpg').volume('guide').one() }) }}
```

In this case, we're passing in a full image asset and the URL of the image will get extracted out within the component. Under the hood, the Twig component is transforming the image to optimize its file size at both 1x and 2x resolutions and lazy loading is added so the image doesn’t load until the reader scrolls down to it.

You could use this same `asset` variable when looping through several image assets at a time:

```twig
{% set assets = craft.assets.volume('guide').all() %}

{% for asset in assets %}
  {{ craft.guide.component('image', { asset: asset }) }}
{% endfor %}
```

## Images

When you select a volume for the **Asset Volume** field on the **Guide Settings** page, an **Images** tab will appear in the Guide Editor. All images in the selected asset volume will appear here, making it easy to add them to your guide.

## Guides

The rest of the guides in your Craft CMS project will appear as components in the **Guides** tab. Clicking `+ Add` will include the guide’s raw content into the guide you are editing.

When including one guide within another there are a couple of things to note:

- When the parent guide has **Render Markdown** enabled only the parent guide will be rendered as Markdown. If the parent has **Render Markdown** disabled but the included guide has **Render Markdown** enabled, the included guide will need to be wrapped in a `markdown` Twig filter in order to be converted to HTML.
- Using the `css` and `js` Twig tags within your guide may not work as expected. This depends on where the guide is placed around the Craft CMS CP. In general, it’s best to avoid using those tags within guides.

## Snippets

The components in the Snippets tab are chunks of Twig and HTML code that can provide dynamically updated information to project authors. For example, you could create a widget using the Low-Res Image Check snippet—making it easy for editors to spot images that don't meet the minimum resolution needed for images in a specific asset volume.

```twig
{# Set the asset volume you would like to check for images in. #}
{% set volume = 'REPLACE_VOLUME' %}
{# Set the width to the smallest size that an image should be uploaded. #}
{% set width = 300 %}

{# Find all images within the targeted asset volume that are not wider than the "width" value. #}
{% set assets = craft.assets.volume(volume).width('< ' ~ width).kind('image').all() %}

{# Display a list of invalid images and instruct authors on what size is recommended. #}
{% if assets|length %}
  <h2>Images that are too small (less than {{ width }}px wide)</h2>
  <p>These images should be replaced with a .jpg that is at least {{ width }}px wide.</p>

  <div class="g-space-y-2">
    {% for asset in assets %}
      <div class="g-grid g-grid-cols-[var(--grid-cols)] g-gap-2" style="--grid-cols: 300px 1fr;">
        <img loading="lazy" src="{{ asset.url }}" width="300" />
        <div>
          {{ craft.guide.component('button', { attrs: { class: ['submit'] }, label: 'Edit Image', url: asset.cpEditUrl }) }}
          <p><strong>Title</strong><br>{{ asset.title }}</p>
          <p><strong>File name</strong><br>{{ asset.filename }}</p>
          <p><strong>Width</strong><br>{{ asset.width }}px</p>
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}
```

Snippets can be modified or even used as starters to create more complicated guides. Some snippets include variables set at the top of the snippet to make it easier to customize the code within.

If nothing else, snippets can be used as inspiration to help solve common AX issues!

## Twig Variables

In addition to components, Guide provides a set of Twig variables:

| Variable | Example/Description                                                                                                                                                                                   |
| --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `component` | Example: `{{ craft.guide.component('audio', { url: 'my-song.mp3' }) }}`<br>Renders a Guide component based on the handle set in the first argument and a configuration object in the second argument. |
| `getAll` | Example: `{{ craft.guide.getAll() }}`<br>Performs a search of all guides that fit the criteria passed in. This will return an array of guide objects.                                                 |
| `getOne` | Example: `{{ craft.guide.getOne({ id: 10 }) }}`<br>Returns a single guide object based on the criteria passed in.                                                                                     |
| `include` | Example: `{{ craft.guide.include({ slug: 'assets' }) }}`<br>Finds a matching guide and renders its content in place.                                                                                  |
| `var` | Example: `{{ craft.guide.var('clientName') }}`<br>Returns variables set in **Guide Settings**.                                                                                                        |

## Context-Aware Guides

When using guides on element edit pages and in UI elements, context variables are available that represents the specific piece of content you are editing.

| Variable  | Description                                                                                     |
|-----------|-------------------------------------------------------------------------------------------------|
| `element` | Found on Asset, Category, and Entry edit pages. Represents the current element you are updating. |
| `user`    |Found on User edit pages. Represents the current user you are updating.                          |

Because guides can be moved around the CP, it’s a good idea to check for the variable before it is used in a guide. For example, if you want to show the title of the current entry in your guide, you could write something like this:

```twig
{% if user ?? false %}
  <p>There is a user here and their username is <em>{{ user.username ?? 'NOT SET' }}</em>.</p>
{% elseif element ?? false %}
  <p>There is an element here and its title is <em>{{ element.title ?? 'NOT SET' }}</em>.</p>
{% else %}
  <p>There is no element here.</p>
{% endif %}
```

## Guide Templates

You may use templates to create your CMS guide in a way that's easily portable from one Craft site to another. To add a template to your CMS guide, follow these instructions:

1. Create your guide template and save it using `.twig` as its file extension.
1. Place your file into the directory set as the Template Path setting in the Guide setting page. The default is set to `_guide`, so in that case your file would need to go into `./templates/_guide/`.
1. Go to the **Guides** tab in the Guide CP section and click on the `+ New Guide` button to create a new guide.
1. Set **Content Source** to `Page Template`.
1. Select your new template in the Template field in the Editor tab.
1. Click the `Save` button.
1. Use the **Guide Home** toggle to add your guide to the Guide home page or click on the title to visit the guide’s page within the CP.

## External Documentation

Selecting `External Page` from the Content Source guide option will let you display an external page in an iframe.

<div class="readable guide-component-tip">
  <blockquote class="note">Some websites don’t allow for their pages to appear in iframes. The owner of a website may be able to confgure their server to allow for their content to appear in an iframe, however, this is usually set up this way for security reasons.</blockquote>
</div>
