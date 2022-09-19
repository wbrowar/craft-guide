import { d as Le, l as X, h as Y, k as W, i as re, t as ne, u as G, _ as xe, r as ie, w as ht, s as ve, q as ke, B as ut, z as Ze, C as dt, D as gt, E as ft, G as mt, c as Ce, b as De, H as Ee, j as he, v as Te, F as _e, A as Me, I as tt, J as pt, p as He, T as nt, K as Fe, n as vt, L as bt, M as wt, m as Ue } from "./_plugin-vue_export-helper.54751eae.js";
import { t as J, g as Ie, a as Je, b as Ve, p as $e, l as we, c as xt, k as yt, s as Qe, u as Ge } from "./guide.e341e0e3.js";
import { a as kt, S as $t, C as je, G as Ct } from "./SvgSettings.ca68580a.js";
const St = [
  {
    title: "Audio",
    group: "components",
    code: "{{ craft.guide.component('audio', { src: 'REPLACE_URL' }) }}",
    summary: "<p>Play audio in the browser\u2019s audio player.</p>",
    documentation: "<p>Play audio in the browser\u2019s audio player.</p>",
    props: {
      src: "A absolute URL to your audio file."
    }
  },
  {
    title: "Button",
    group: "components",
    code: "{{ craft.guide.component('button', { label: 'REPLACE_LABEL', url: url('REPLACE_URL') }) }}",
    summary: "<p>A call-to-action link that looks like a button.</p>",
    documentation: "<p>A call-to-action link that looks like a button.</p>",
    props: {
      label: "The label text for the button.",
      href: "The URL that the button goes to when clicked."
    }
  },
  {
    title: "CSS",
    group: "components",
    code: `{% css %}
.guide-{{ guide.slug }} {
  
}
{% endcss %}`,
    summary: "<p>Write custom CSS for this guide.</p>",
    documentation: '<p>Write custom CSS for this guide. A ".guide" class wraps around all guide content. </p>'
  },
  {
    title: "Grid",
    group: "components",
    code: `<div class="g-grid sm:g-grid-cols-2 md:g-grid-cols-3 lg:g-grid-cols-4 g-gap-6">
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
</div>`,
    summary: "<p>A 4-column CSS grid example.</p>",
    documentation: "<p>An example using utility classes to lay out content using CSS grid columns.</p>"
  },
  {
    title: "Grid \u2013 Custom Columns",
    group: "components",
    code: `<div class="g-grid g-grid-cols-[var(--grid-cols)] g-gap-6" style="--grid-cols: repeat(3, 1fr);">
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
  <div>
    <p>REPLACE_CONTENT</p>
  </div>
  <div>
    <p>REPLACE_CONTENT</p>
  </div> 
</div>`,
    summary: "<p>A custom CSS grid example.</p>",
    documentation: "<p>An example using utility classes to lay out content using CSS Custom Properties to define the grid\u2019s columns.</p>"
  },
  {
    title: "Image",
    group: "components",
    code: "{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}",
    summary: "<p>Display an image or a screenshot from a URL.</p>",
    documentation: "<p>Display an image or a screenshot from a URL.</p>",
    props: {
      src: "The URL of the image to be displayed."
    }
  },
  {
    title: "Markdown",
    group: "components",
    code: `<div class="g-prose g-prose-sm">
{% apply markdown('gfm') %}

## Heading

Content

{% endapply %}
</div>`,
    summary: "<p>Render Markdown in your guide.</p>",
    documentation: '<p>Use Craft\u2019s "markdown" Twig filter to render markdown content.</p>'
  },
  {
    title: "Modal",
    group: "components",
    code: `<modal ref="my-modal" click-outside-to-close teleport-to="body">
  <div style="padding: var(--xl)">
    <p>Modal content!</p>
  </div>
</modal>
<button class="btn" type="button" @click="$refs['my-modal'].open()">Open Modal</button>`,
    summary: "<p>Display content in a modal.</p>",
    documentation: "<p>Display content in a modal.</p>",
    props: {
      "aspect-ratio": "Sets a CSS aspect-ratio on the modal content.",
      "click-outside-to-close": "Enables closing the modal when the mask behind the content is clicked.",
      "max-height": "Sets a CSS max-height to the modal content.",
      "max-width": "Sets a CSS max-width to the modal content.",
      ref: "The Vue ref that lets you access the modal\u2019s open and close functions.",
      "teleport-to": "CSS selector where modal is appended to."
    }
  },
  {
    title: "Table",
    group: "components",
    code: `<table class="g-table">
  <thead>
    <tr>
      <th>Table</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content</td>
      <td>Content</td>
    </tr>
  </tbody>
</table>`,
    summary: "<p>A styled HTML table.</p>",
    documentation: "<p>A styled HTML table.</p>"
  },
  {
    title: "Tip",
    group: "components",
    code: "{{ craft.guide.component('tip', { text: 'REPLACE_TEXT' }) }}",
    summary: "<p>Inform content authors in a way that stands out from surrounding text.</p>",
    documentation: "<p>Inform content authors in a way that stands out from surrounding text.</p>",
    props: {
      message: "Text displayed in the tip."
    }
  },
  {
    title: "TL;DR Hide",
    group: "components",
    code: `<div class="tldr-hide g-space-y-6">
  
</div>`,
    summary: "<p>Show a <strong>TL;DR</strong> button on your guide and hide this content when <strong>TL;DR</strong> is active.</p>",
    documentation: "<p>Show a <strong>TL;DR</strong> button on your guide and hide this content when <strong>TL;DR</strong> is active.</p>"
  },
  {
    title: "TL;DR Show",
    group: "components",
    code: `<div class="tldr-show g-space-y-6">
  
</div>`,
    summary: "<p>Show a <strong>TL;DR</strong> button on your guide, hide this content and show it when <strong>TL;DR</strong> is active.</p>",
    documentation: "<p>Show a <strong>TL;DR</strong> button on your guide, hide this content and show it when <strong>TL;DR</strong> is active.</p>"
  },
  {
    title: "Variable Client Name",
    group: "components",
    code: "{{ craft.guide.var('clientName') }}",
    summary: "<p>Display the value of the <strong>Client Name</strong> variable.</p>",
    documentation: "<p>Display the value of the <strong>Client Name</strong> variable.</p>"
  },
  {
    title: "Variable My Company Name",
    group: "components",
    code: "{{ craft.guide.var('myCompanyName') }}",
    summary: "<p>Display the value of the <strong>My Company Name</strong> variable.</p>",
    documentation: "<p>Display the value of the <strong>My Company Name</strong> variable.</p>"
  },
  {
    title: "Variable Project Name",
    group: "components",
    code: "{{ craft.guide.var('projectName') }}",
    summary: "<p>Display the value of the <strong>Project Name</strong> variable.</p>",
    documentation: "<p>Display the value of the <strong>Project Name</strong> variable.</p>"
  },
  {
    title: "Vimeo Video",
    group: "components",
    code: "{{ craft.guide.component('video', { source: 'vimeo', videoId: 'REPLACE_VIDEO_ID' }) }}",
    summary: "<p>Play a Vimeo video in an iframe.</p>",
    documentation: "<p>Play a Vimeo video in an iframe.</p>",
    props: {
      source: "Determine the video hosting service\u2019s embed code.",
      videoId: "The ID of the Vimeo video, found in the URL or embed code provided by Vimeo."
    }
  },
  {
    title: "Warning",
    group: "components",
    code: "{{ craft.guide.component('warning', { text: 'REPLACE_TEXT' }) }}",
    summary: "<p>Warn content authors about potential content issues.</p>",
    documentation: "<p>Warn content authors about potential content issues.</p>",
    props: {
      message: "Text displayed in the warning."
    }
  },
  {
    title: "YouTube Video",
    group: "components",
    code: "{{ craft.guide.component('video', { source: 'youtube', videoId: 'REPLACE_VIDEO_ID' }) }}",
    summary: "<p>Play a YouTube video in an iframe.</p>",
    documentation: "<p>Play a YouTube video in an iframe.</p>",
    props: {
      source: "Determine the video hosting service\u2019s embed code.",
      videoId: "The ID of the Vimeo video, found in the URL or embed code provided by YouTube."
    }
  },
  {
    title: "Changelog",
    group: "snippets",
    code: `{# VERSION START \u2013 For each version, make a copy of this block and place it at the top of this guide. #}
{% set version %}
<div class="version">
  <h2 class="g-mb-6"><span>1.0.0</span> Aug 27, 2021</h2>
<div class="g-prose g-prose-sm">
{% apply markdown('gfm') %}

### &#x1F680; Added

- Features that have been added.

### &#x1F527; Changed

- Things that have changed.

### &#x1F6A7; Fixed

- Bugs that have been fixed.

### &#x1F525; Deleted

- Features that have been removed.

{% endapply %}
</div>
</div>
{% endset %}
{% set versions = versions is defined ? versions|merge([version]) : [version] %}
{# VERSION END #}

{# -------------------------------------------------------------------------- #}

{# Display changelog versions #}
<div>
  {% if guideDisplayArea == 'widget' %}
    {{ versions[0] }}
  {% else %}
    {% for version in versions %}
      {{ version }}
    {% endfor %}
  {% endif %}
</div>

{% if guideDisplayArea == 'widget' %}
  {{ craft.guide.component('button', { label: 'See all changes', url: url('guide/page/' ~ guide.slug) }) }}
{% endif %}

{% css %}
.guide-{{ guide.slug }} .version + .version {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(0,0,0,0.2);
}
.guide-{{ guide.slug }} .version h2 span {
  font-size: 2rem;
}
{% endcss %}`,
    summary: "<p>Display updates to your Craft project.</p>",
    documentation: "<p>Display updates to your Craft project.</p>"
  },
  {
    title: "Content Stats",
    group: "snippets",
    code: `{# Set the type of element to be displayed. Options: assets, categories, entries, users #}
{% set elementType = 'entries' %}

{# If showing content stats for entries, specifcy the section; for assets, the volume, or for categories, the group. #}
{# Leave this as null to get all entries, assets, or category groups. #}
{% set subType = null %}

{# Set a label that sits under the total number. Leave this as blank to default to the element type. #}
{% set label = null %}

{% if elementType == 'assets' %}
  {% set labelDefault = 'Assets' %}
  {% set statuses = ['live'] %}
  {% set live = craft.assets.limit(null).volume(subType ?? null).status('live').count() %}
{% elseif elementType == 'categories' %}
  {% set labelDefault = 'Categories' %}
  {% set statuses = ['live', 'disabled'] %}
  {% set live = craft.categories.limit(null).group(subType ?? null).status('enabled').count() %}
  {% set disabled = craft.categories.limit(null).group(subType ?? null).status('disabled').count() %}
{% elseif elementType == 'entries' %}
  {% set labelDefault = 'Entries' %}
  {% set statuses = ['live', 'disabled', 'pending', 'expired'] %}
  {% set live = craft.entries.limit(null).section(subType ?? null).status('live').count() %}
  {% set disabled = craft.entries.limit(null).section(subType ?? null).status('disabled').count() %}
  {% set pending = craft.entries.limit(null).section(subType ?? null).status('pending').count() %}
  {% set expired = craft.entries.limit(null).section(subType ?? null).status('expired').count() %}
{% elseif elementType == 'users' %}
  {% set labelDefault = 'Users' %}
  {% set statuses = ['live', 'disabled'] %}
  {% set live = craft.users.limit(null).status('enabled').count() %}
  {% set disabled = craft.users.limit(null).status('disabled').count() %}
{% endif %}

<div class="g-text-center g-mt-6">
  <p class="g-mb-0" style="font-size: 3rem"><b>{{ live|default('') }}</b></p>
  <h2>{{ label|default(labelDefault) }}</h2>
</div>

<div class="g-grid g-grid-cols-2 g-w-full">
  {% if 'live' in statuses %}
    <div class="element small hasstatus" title="Live elements"><span class="status live"></span><div class="label"><span class="title">Live</span></div></div>
    <div class="g-text-right" style="font-size: 1.5em"><b>{{ live }}</b></div>
  {% endif %}
  
  {% if 'disabled' in statuses %}
    <div class="element small hasstatus" title="Live elements"><span class="status disabled"></span><div class="label"><span class="title">Disabled</span></div></div>
    <div class="g-text-right" style="font-size: 1.5em"><b>{{ disabled }}</b></div>
  {% endif %}
  
  {% if 'pending' in statuses %}
    <div class="element small hasstatus" title="Live elements"><span class="status pending"></span><div class="label"><span class="title">Pending</span></div></div>
    <div class="g-text-right" style="font-size: 1.5em"><b>{{ pending }}</b></div>
  {% endif %}
  
  {% if 'expired' in statuses %}
    <div class="element small hasstatus" title="Live elements"><span class="status expired"></span><div class="label"><span class="title">Expired</span></div></div>
    <div class="g-text-right" style="font-size: 1.5em"><b>{{ expired }}</b></div>
  {% endif %}
</div>`,
    summary: "<p>Show a total of entries that are currently published.</p>",
    documentation: "<p>Show a total of entries that are currently published.</p>"
  },
  {
    title: "Element Search",
    group: "snippets",
    code: `{# Import _self to use macro below #}
{% import _self as self %}

{# Start Snippet Display #}
<h2>Entry Search</h2>
<div class="g-flex g-flex-nowrap g-gap-3">
  <div class="field">
    <div class="input">
      <input class="text fullwidth" form="guide" type="text" v-model="{{ vueString1 }}" @keyup.enter="$refs.searchButton.click()" />
    </div>
  </div>
  <a class="btn submit" :href="'?search=' + {{ vueString1 }}" ref="searchButton">Search</a>
</div>

{% set query = craft.app.request.getQueryParam('search') %}
{% if query ?? false %}
  <on-load @loaded="{{ vueString1 }} = '{{ query }}'"></on-load>
  <div>
    {% set elements = craft.entries.status(null).search(query).all() %}
      
    {# Table columns. Add more columns to show more entry data (such as the value of the field you are searching for). #}
    {% set data = {
      title: 'Search Results',
      data: elements
    } %}
    
    {# Display table #}
    {% if elements|length %}
      {{ self.table(data) }}
    {% else %}
      <p>There are no results for the search: <strong>{{ query }}</strong></p>
    {% endif %}
  </div>
{% endif %}

{# Use a macro to cut down on repeated code if you wanted to show more than one field at a time. #}
{% macro table(data) %}
  <table class="g-table">
    <thead>
      <tr>
        <td>{{ data.title }}</td>
        <td>Edit Page</td>
      </tr>
    </thead>
    <tbody>
    {% for row in data.data %}
      <tr>
        <td><a href="{{ row.url }}" target="_blank" rel="nofollow noopener" title="View element\u2019s page in a new window."><span class="status {{ row.status }}"></span><span>{{ row.title }}</span></a></td>
        <td><a class="btn icon edit" href="{{ row.cpEditUrl }}" target="_blank" rel="nofollow noopener" title="Go to element edit page.">Edit</a></td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
{% endmacro %}`,
    summary: "<p>Search for entries using Craft\u2019s keyword search.</p>",
    documentation: "<p>Search for entries using Craft\u2019s keyword search.</p>"
  },
  {
    title: "Incorrect File Type",
    group: "snippets",
    code: `{# Set the asset volume you would like to check for images in. #}
{% set volume = null %}

{# Set file types that should assets should be uplaoded as. #}
{% set acceptedExtensions = ['jpg', 'jpeg'] %}

{# Display a list of invalid assets and instruct authors on what extension is required. #}
{% cache %}
  {% set assets = craft.assets.volume(volume ?? null).all() %}

  {% if assets|length %}
<div class="g-prose g-prose-sm">
{% apply markdown('gfm') %}

These assets should be replaced with files using the extension: {{ acceptedExtensions|join(', ') }}

{% endapply %}
</div>
  <table class="g-table">
    <thead>
      <tr>
        <th>Preview</th>
        <th>Title</th>
        <th>File name</th>
      </tr>
    </thead>
    <tbody>
      {% for asset in assets %}
        {% if asset.extension|lower not in acceptedExtensions %}
          <tr>
            <td>
              {% if asset.kind == 'image' %}
                <a href="{{ asset.cpEditUrl }}" style="display: block; max-width: 300px" title="Edit image">{{ craft.guide.component('image', { url: asset.url }) }}</a>
              {% endif %}
            </td>
            <td><a href="{{ asset.cpEditUrl }}">{{ asset.title }}</a></td>
            <td>{{ asset.filename }}</td>
          </tr>
        {% endif %}
      {% endfor %}
    </tbody>
  </table>
  {% endif %}
{% endcache %}`,
    summary: "<p>Find assets that have the wrong file type for a given volume.</p>",
    documentation: "<p>Find assets that have the wrong file type for a given volume.</p>"
  },
  {
    title: "Filled Out Fields",
    group: "snippets",
    code: `{# Set the field\u2019s handle. #}
{% set handle = 'REPLACE_HANDLE' %}

{# Set the field label for this guide. #}
{% set label = 'REPLACE_LABEL' %}

{# Set this to "true" to find elements with the field filled out, or "false" to find elements that are missing this field. #}
{% set filledOut = true %}

{# Import _self to use macro below #}
{% import _self as self %}

{# Start Snippet Display #}
{% cache %}
<div>
  <h2>{{ label }}</h2>
  {% set elements = craft.entries({
    (handle): filledOut ? ':notempty:' : ':empty:',
  }).all() %}

  {% set data = {
    title: 'Entries that ' ~ (filledOut ? 'include' : 'are missing') ~ ' the ' ~ label ~ ' field',
    data: elements
  } %}
  
  {# Display table #}
  {{ self.table(data) }}
</div>
{% endcache %}


{# Use a macro to cut down on repeated code if you wanted to show more than one field at a time. #}
{% macro table(data) %}
  <table class="g-table">
    <thead>
      <tr>
        <td>{{ data.title }}</td>
        <td>Edit Page</td>
      </tr>
    </thead>
    <tbody>
    {% for row in data.data %}
      <tr>
        <td><a href="{{ row.url }}" target="_blank" rel="nofollow noopener" title="View element\u2019s page in a new window.">{{ row.title }}</a></td>
        <td><a class="btn icon edit" href="{{ row.cpEditUrl }}" target="_blank" rel="nofollow noopener" title="Go to element edit page.">Edit</a></td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
{% endmacro %}`,
    summary: "<p>Find elements where a field is either filled out or empty.</p>",
    documentation: "<p>Find elements where a field is either filled out or empty.</p>"
  },
  {
    title: "Low-Res Image Check",
    group: "snippets",
    code: `{# Set the asset volume you would like to check for images in. #}
{% set volume = null %}

{# Set the width to the smallest size that an image should be uploaded. #}
{% set width = 500 %}

{# Display a list of invalid images and instruct authors on what size is recommended. #}
{% cache %}
  {% set assets = craft.assets.volume(volume ?? null).width('< ' ~ width).kind('image').all() %}

  {% if assets|length %}
<div class="g-prose g-prose-sm">
{% apply markdown('gfm') %}

These images should be replaced with a .jpg that is at least {{ width }}px wide.

{% endapply %}
</div>
  <table class="g-table">
    <thead>
      <tr>
        <th>Preview</th>
        <th>Title</th>
        <th>Width</th>
        <th>File name</th>
      </tr>
    </thead>
    <tbody>
      {% for asset in assets %}
        <tr>
          <td>
            {% if asset.kind == 'image' %}
              <a href="{{ asset.cpEditUrl }}" style="display: block; max-width: 300px" title="Edit image">{{ craft.guide.component('image', { url: asset.url }) }}</a>
            {% endif %}
          </td>
          <td><a href="{{ asset.cpEditUrl }}">{{ asset.title }}</a></td>
          <td>{{ asset.width }}px</td>
          <td>{{ asset.filename }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
  {% endif %}
{% endcache %}`,
    summary: "<p>Find images that would get upscaled if transformed.</p>",
    documentation: "<p>Find images that would get upscaled if transformed.</p>"
  },
  {
    title: "Missing Focal Points",
    group: "snippets",
    code: `{# Set the asset volume you would like to check for images in. #}
{% set volume = null %}

{# Display a list of invalid images that are missing focal points. #}
{% cache %}
  {% set assets = craft.assets.volume(volume ?? null).kind('image').all() %}


  {% if assets|length %}
<div class="g-prose g-prose-sm">
{% apply markdown('gfm') %}

These images are missing a focal point and might get cropped incorrectly.

{% endapply %}
</div>
  <table class="g-table">
    <thead>
      <tr>
        <th>Preview</th>
        <th>Title</th>
        <th>File name</th>
      </tr>
    </thead>
    <tbody>
      {% for asset in assets %}
        {% if not asset.hasFocalPoint %}
          <tr>
            <td>
              <a href="{{ asset.cpEditUrl }}" style="display: block; max-width: 300px" title="Edit image">{{ craft.guide.component('image', { url: asset.url }) }}</a>
            </td>
            <td><a href="{{ asset.cpEditUrl }}">{{ asset.title }}</a></td>
            <td>{{ asset.filename }}</td>
          </tr>
        {% endif %}
      {% endfor %}
    </tbody>
  </table>
  {% endif %}
{% endcache %}`,
    summary: "<p>Find images that are missing focal points.</p>",
    documentation: "<p>Find images that are missing focal points.</p>"
  }
], _t = [
  "g-prose",
  "g-prose-sm",
  "g-prose-md",
  "g-prose-lg",
  "g-prose-xl",
  "g-prose-2xl",
  "g-hidden",
  "g-block",
  "g-inline-block",
  "g-flex",
  "g-inline-flex",
  "g-flex-wrap",
  "g-flex-nowrap",
  "g-flex-wrap-reverse",
  "g-flex-grow-0",
  "g-flex-grow",
  "g-flex-shrink-0",
  "g-flex-shrink",
  "g-grid",
  "g-inline-grid",
  "g-items-center",
  "g-items-start",
  "g-items-end",
  "g-items-baseline",
  "g-items-stretch",
  "g-justify-start",
  "g-justify-end",
  "g-justify-center",
  "g-justify-between",
  "g-justify-around",
  "g-justify-evenly",
  "g-grid-cols-2",
  "g-grid-cols-3",
  "g-grid-cols-4",
  "g-grid-cols-5",
  "g-grid-cols-6",
  "g-grid-cols-[var(--grid-cols)]",
  "g-grid-cols-[var(--grid-cols-sm)]",
  "g-grid-cols-[var(--grid-cols-md)]",
  "g-grid-cols-[var(--grid-cols-lg)]",
  "g-mx-0",
  "g-my-0",
  "g-mt-0",
  "g-mr-0",
  "g-mb-0",
  "g-ml-0",
  "g-mx-3",
  "g-my-3",
  "g-mt-3",
  "g-mr-3",
  "g-mb-3",
  "g-ml-3",
  "g-mx-6",
  "g-my-6",
  "g-mt-6",
  "g-mr-6",
  "g-mb-6",
  "g-ml-6",
  "g-px-0",
  "g-py-0",
  "g-pt-0",
  "g-pr-0",
  "g-pb-0",
  "g-pl-0",
  "g-px-3",
  "g-py-3",
  "g-pt-3",
  "g-pr-3",
  "g-pb-3",
  "g-pl-3",
  "g-px-6",
  "g-py-6",
  "g-pt-6",
  "g-pr-6",
  "g-pb-6",
  "g-pl-6",
  "g-absolute",
  "g-relative",
  "g-sticky",
  "g-top-0",
  "g-top-16",
  "g-right-0",
  "g-bottom-0",
  "g-left-0",
  "g-space-y-1",
  "g-space-y-2",
  "g-space-y-3",
  "g-space-y-6",
  "g-space-x-1",
  "g-space-x-2",
  "g-space-x-3",
  "g-space-x-6",
  "g-max-w-prose",
  "g-text-left",
  "g-text-center",
  "g-text-right",
  "g-text-primary",
  "g-text-sm",
  "g-font-bold",
  "g-cursor-pointer",
  "g-shadow-lg",
  "g-duration-150",
  "g-duration-300",
  "g-cursor-grab",
  "g-cursor-grabbing",
  "g-scroll-snap-none",
  "g-scroll-snap-x",
  "g-scroll-snap-y",
  "g-scroll-snap-start",
  "g-scroll-snap-center",
  "g-scroll-snap-end"
], At = [
  "sm:g-prose",
  "md:g-prose",
  "lg:g-prose",
  "tldr:g-prose",
  "sm:g-prose-sm",
  "md:g-prose-sm",
  "lg:g-prose-sm",
  "tldr:g-prose-sm",
  "sm:g-prose-md",
  "md:g-prose-md",
  "lg:g-prose-md",
  "tldr:g-prose-md",
  "sm:g-prose-lg",
  "md:g-prose-lg",
  "lg:g-prose-lg",
  "tldr:g-prose-lg",
  "sm:g-prose-xl",
  "md:g-prose-xl",
  "lg:g-prose-xl",
  "tldr:g-prose-xl",
  "sm:g-prose-2xl",
  "md:g-prose-2xl",
  "lg:g-prose-2xl",
  "tldr:g-prose-2xl",
  "sm:g-hidden",
  "md:g-hidden",
  "lg:g-hidden",
  "tldr:g-hidden",
  "sm:g-block",
  "md:g-block",
  "lg:g-block",
  "tldr:g-block",
  "sm:g-inline-block",
  "md:g-inline-block",
  "lg:g-inline-block",
  "tldr:g-inline-block",
  "sm:g-flex",
  "md:g-flex",
  "lg:g-flex",
  "tldr:g-flex",
  "sm:g-inline-flex",
  "md:g-inline-flex",
  "lg:g-inline-flex",
  "tldr:g-inline-flex",
  "sm:g-flex-wrap",
  "md:g-flex-wrap",
  "lg:g-flex-wrap",
  "tldr:g-flex-wrap",
  "sm:g-flex-nowrap",
  "md:g-flex-nowrap",
  "lg:g-flex-nowrap",
  "tldr:g-flex-nowrap",
  "sm:g-flex-wrap-reverse",
  "md:g-flex-wrap-reverse",
  "lg:g-flex-wrap-reverse",
  "tldr:g-flex-wrap-reverse",
  "sm:g-flex-grow-0",
  "md:g-flex-grow-0",
  "lg:g-flex-grow-0",
  "tldr:g-flex-grow-0",
  "sm:g-flex-grow",
  "md:g-flex-grow",
  "lg:g-flex-grow",
  "tldr:g-flex-grow",
  "sm:g-flex-shrink-0",
  "md:g-flex-shrink-0",
  "lg:g-flex-shrink-0",
  "tldr:g-flex-shrink-0",
  "sm:g-flex-shrink",
  "md:g-flex-shrink",
  "lg:g-flex-shrink",
  "tldr:g-flex-shrink",
  "sm:g-grid",
  "md:g-grid",
  "lg:g-grid",
  "tldr:g-grid",
  "sm:g-inline-grid",
  "md:g-inline-grid",
  "lg:g-inline-grid",
  "tldr:g-inline-grid",
  "sm:g-items-center",
  "md:g-items-center",
  "lg:g-items-center",
  "tldr:g-items-center",
  "sm:g-items-start",
  "md:g-items-start",
  "lg:g-items-start",
  "tldr:g-items-start",
  "sm:g-items-end",
  "md:g-items-end",
  "lg:g-items-end",
  "tldr:g-items-end",
  "sm:g-items-baseline",
  "md:g-items-baseline",
  "lg:g-items-baseline",
  "tldr:g-items-baseline",
  "sm:g-items-stretch",
  "md:g-items-stretch",
  "lg:g-items-stretch",
  "tldr:g-items-stretch",
  "sm:g-justify-start",
  "md:g-justify-start",
  "lg:g-justify-start",
  "tldr:g-justify-start",
  "sm:g-justify-end",
  "md:g-justify-end",
  "lg:g-justify-end",
  "tldr:g-justify-end",
  "sm:g-justify-center",
  "md:g-justify-center",
  "lg:g-justify-center",
  "tldr:g-justify-center",
  "sm:g-justify-between",
  "md:g-justify-between",
  "lg:g-justify-between",
  "tldr:g-justify-between",
  "sm:g-justify-around",
  "md:g-justify-around",
  "lg:g-justify-around",
  "tldr:g-justify-around",
  "sm:g-justify-evenly",
  "md:g-justify-evenly",
  "lg:g-justify-evenly",
  "tldr:g-justify-evenly",
  "sm:g-grid-cols-2",
  "md:g-grid-cols-2",
  "lg:g-grid-cols-2",
  "tldr:g-grid-cols-2",
  "sm:g-grid-cols-3",
  "md:g-grid-cols-3",
  "lg:g-grid-cols-3",
  "tldr:g-grid-cols-3",
  "sm:g-grid-cols-4",
  "md:g-grid-cols-4",
  "lg:g-grid-cols-4",
  "tldr:g-grid-cols-4",
  "sm:g-grid-cols-5",
  "md:g-grid-cols-5",
  "lg:g-grid-cols-5",
  "tldr:g-grid-cols-5",
  "sm:g-grid-cols-6",
  "md:g-grid-cols-6",
  "lg:g-grid-cols-6",
  "tldr:g-grid-cols-6",
  "sm:g-grid-cols-[var(--grid-cols)]",
  "md:g-grid-cols-[var(--grid-cols)]",
  "lg:g-grid-cols-[var(--grid-cols)]",
  "tldr:g-grid-cols-[var(--grid-cols)]",
  "sm:g-grid-cols-[var(--grid-cols-sm)]",
  "md:g-grid-cols-[var(--grid-cols-sm)]",
  "lg:g-grid-cols-[var(--grid-cols-sm)]",
  "tldr:g-grid-cols-[var(--grid-cols-sm)]",
  "sm:g-grid-cols-[var(--grid-cols-md)]",
  "md:g-grid-cols-[var(--grid-cols-md)]",
  "lg:g-grid-cols-[var(--grid-cols-md)]",
  "tldr:g-grid-cols-[var(--grid-cols-md)]",
  "sm:g-grid-cols-[var(--grid-cols-lg)]",
  "md:g-grid-cols-[var(--grid-cols-lg)]",
  "lg:g-grid-cols-[var(--grid-cols-lg)]",
  "tldr:g-grid-cols-[var(--grid-cols-lg)]",
  "sm:g-mx-0",
  "md:g-mx-0",
  "lg:g-mx-0",
  "tldr:g-mx-0",
  "sm:g-my-0",
  "md:g-my-0",
  "lg:g-my-0",
  "tldr:g-my-0",
  "sm:g-mt-0",
  "md:g-mt-0",
  "lg:g-mt-0",
  "tldr:g-mt-0",
  "sm:g-mr-0",
  "md:g-mr-0",
  "lg:g-mr-0",
  "tldr:g-mr-0",
  "sm:g-mb-0",
  "md:g-mb-0",
  "lg:g-mb-0",
  "tldr:g-mb-0",
  "sm:g-ml-0",
  "md:g-ml-0",
  "lg:g-ml-0",
  "tldr:g-ml-0",
  "sm:g-mx-3",
  "md:g-mx-3",
  "lg:g-mx-3",
  "tldr:g-mx-3",
  "sm:g-my-3",
  "md:g-my-3",
  "lg:g-my-3",
  "tldr:g-my-3",
  "sm:g-mt-3",
  "md:g-mt-3",
  "lg:g-mt-3",
  "tldr:g-mt-3",
  "sm:g-mr-3",
  "md:g-mr-3",
  "lg:g-mr-3",
  "tldr:g-mr-3",
  "sm:g-mb-3",
  "md:g-mb-3",
  "lg:g-mb-3",
  "tldr:g-mb-3",
  "sm:g-ml-3",
  "md:g-ml-3",
  "lg:g-ml-3",
  "tldr:g-ml-3",
  "sm:g-mx-6",
  "md:g-mx-6",
  "lg:g-mx-6",
  "tldr:g-mx-6",
  "sm:g-my-6",
  "md:g-my-6",
  "lg:g-my-6",
  "tldr:g-my-6",
  "sm:g-mt-6",
  "md:g-mt-6",
  "lg:g-mt-6",
  "tldr:g-mt-6",
  "sm:g-mr-6",
  "md:g-mr-6",
  "lg:g-mr-6",
  "tldr:g-mr-6",
  "sm:g-mb-6",
  "md:g-mb-6",
  "lg:g-mb-6",
  "tldr:g-mb-6",
  "sm:g-ml-6",
  "md:g-ml-6",
  "lg:g-ml-6",
  "tldr:g-ml-6",
  "sm:g-px-0",
  "md:g-px-0",
  "lg:g-px-0",
  "tldr:g-px-0",
  "sm:g-py-0",
  "md:g-py-0",
  "lg:g-py-0",
  "tldr:g-py-0",
  "sm:g-pt-0",
  "md:g-pt-0",
  "lg:g-pt-0",
  "tldr:g-pt-0",
  "sm:g-pr-0",
  "md:g-pr-0",
  "lg:g-pr-0",
  "tldr:g-pr-0",
  "sm:g-pb-0",
  "md:g-pb-0",
  "lg:g-pb-0",
  "tldr:g-pb-0",
  "sm:g-pl-0",
  "md:g-pl-0",
  "lg:g-pl-0",
  "tldr:g-pl-0",
  "sm:g-px-3",
  "md:g-px-3",
  "lg:g-px-3",
  "tldr:g-px-3",
  "sm:g-py-3",
  "md:g-py-3",
  "lg:g-py-3",
  "tldr:g-py-3",
  "sm:g-pt-3",
  "md:g-pt-3",
  "lg:g-pt-3",
  "tldr:g-pt-3",
  "sm:g-pr-3",
  "md:g-pr-3",
  "lg:g-pr-3",
  "tldr:g-pr-3",
  "sm:g-pb-3",
  "md:g-pb-3",
  "lg:g-pb-3",
  "tldr:g-pb-3",
  "sm:g-pl-3",
  "md:g-pl-3",
  "lg:g-pl-3",
  "tldr:g-pl-3",
  "sm:g-px-6",
  "md:g-px-6",
  "lg:g-px-6",
  "tldr:g-px-6",
  "sm:g-py-6",
  "md:g-py-6",
  "lg:g-py-6",
  "tldr:g-py-6",
  "sm:g-pt-6",
  "md:g-pt-6",
  "lg:g-pt-6",
  "tldr:g-pt-6",
  "sm:g-pr-6",
  "md:g-pr-6",
  "lg:g-pr-6",
  "tldr:g-pr-6",
  "sm:g-pb-6",
  "md:g-pb-6",
  "lg:g-pb-6",
  "tldr:g-pb-6",
  "sm:g-pl-6",
  "md:g-pl-6",
  "lg:g-pl-6",
  "tldr:g-pl-6",
  "sm:g-absolute",
  "md:g-absolute",
  "lg:g-absolute",
  "tldr:g-absolute",
  "sm:g-relative",
  "md:g-relative",
  "lg:g-relative",
  "tldr:g-relative",
  "sm:g-sticky",
  "md:g-sticky",
  "lg:g-sticky",
  "tldr:g-sticky",
  "sm:g-top-0",
  "md:g-top-0",
  "lg:g-top-0",
  "tldr:g-top-0",
  "sm:g-top-16",
  "md:g-top-16",
  "lg:g-top-16",
  "tldr:g-top-16",
  "sm:g-right-0",
  "md:g-right-0",
  "lg:g-right-0",
  "tldr:g-right-0",
  "sm:g-bottom-0",
  "md:g-bottom-0",
  "lg:g-bottom-0",
  "tldr:g-bottom-0",
  "sm:g-left-0",
  "md:g-left-0",
  "lg:g-left-0",
  "tldr:g-left-0",
  "sm:g-space-y-1",
  "md:g-space-y-1",
  "lg:g-space-y-1",
  "tldr:g-space-y-1",
  "sm:g-space-y-2",
  "md:g-space-y-2",
  "lg:g-space-y-2",
  "tldr:g-space-y-2",
  "sm:g-space-y-3",
  "md:g-space-y-3",
  "lg:g-space-y-3",
  "tldr:g-space-y-3",
  "sm:g-space-y-6",
  "md:g-space-y-6",
  "lg:g-space-y-6",
  "tldr:g-space-y-6",
  "sm:g-space-x-1",
  "md:g-space-x-1",
  "lg:g-space-x-1",
  "tldr:g-space-x-1",
  "sm:g-space-x-2",
  "md:g-space-x-2",
  "lg:g-space-x-2",
  "tldr:g-space-x-2",
  "sm:g-space-x-3",
  "md:g-space-x-3",
  "lg:g-space-x-3",
  "tldr:g-space-x-3",
  "sm:g-space-x-6",
  "md:g-space-x-6",
  "lg:g-space-x-6",
  "tldr:g-space-x-6",
  "sm:g-max-w-prose",
  "md:g-max-w-prose",
  "lg:g-max-w-prose",
  "tldr:g-max-w-prose",
  "sm:g-text-left",
  "md:g-text-left",
  "lg:g-text-left",
  "tldr:g-text-left",
  "sm:g-text-center",
  "md:g-text-center",
  "lg:g-text-center",
  "tldr:g-text-center",
  "sm:g-text-right",
  "md:g-text-right",
  "lg:g-text-right",
  "tldr:g-text-right",
  "sm:g-text-primary",
  "md:g-text-primary",
  "lg:g-text-primary",
  "tldr:g-text-primary",
  "sm:g-text-sm",
  "md:g-text-sm",
  "lg:g-text-sm",
  "tldr:g-text-sm",
  "sm:g-font-bold",
  "md:g-font-bold",
  "lg:g-font-bold",
  "tldr:g-font-bold",
  "sm:g-cursor-pointer",
  "md:g-cursor-pointer",
  "lg:g-cursor-pointer",
  "tldr:g-cursor-pointer",
  "sm:g-shadow-lg",
  "md:g-shadow-lg",
  "lg:g-shadow-lg",
  "tldr:g-shadow-lg",
  "sm:g-duration-150",
  "md:g-duration-150",
  "lg:g-duration-150",
  "tldr:g-duration-150",
  "sm:g-duration-300",
  "md:g-duration-300",
  "lg:g-duration-300",
  "tldr:g-duration-300",
  "sm:g-cursor-grab",
  "md:g-cursor-grab",
  "lg:g-cursor-grab",
  "tldr:g-cursor-grab",
  "sm:g-cursor-grabbing",
  "md:g-cursor-grabbing",
  "lg:g-cursor-grabbing",
  "tldr:g-cursor-grabbing",
  "sm:g-scroll-snap-none",
  "md:g-scroll-snap-none",
  "lg:g-scroll-snap-none",
  "tldr:g-scroll-snap-none",
  "sm:g-scroll-snap-x",
  "md:g-scroll-snap-x",
  "lg:g-scroll-snap-x",
  "tldr:g-scroll-snap-x",
  "sm:g-scroll-snap-y",
  "md:g-scroll-snap-y",
  "lg:g-scroll-snap-y",
  "tldr:g-scroll-snap-y",
  "sm:g-scroll-snap-start",
  "md:g-scroll-snap-start",
  "lg:g-scroll-snap-start",
  "tldr:g-scroll-snap-start",
  "sm:g-scroll-snap-center",
  "md:g-scroll-snap-center",
  "lg:g-scroll-snap-center",
  "tldr:g-scroll-snap-center",
  "sm:g-scroll-snap-end",
  "md:g-scroll-snap-end",
  "lg:g-scroll-snap-end",
  "tldr:g-scroll-snap-end"
], Tt = [..._t, ...At], Rt = { class: "g-flex g-flex-nowrap g-bg-matrix-block g-duration-150 hover:g-bg-matrix-titlebar" }, Lt = ["srcset"], Et = { class: "g-p-3 g-flex-grow g-border-t g-border-solid g-border-matrix-border" }, Mt = ["innerHTML"], Ft = { class: "g-space-x-1" }, It = /* @__PURE__ */ Le({
  __name: "ComponentListItem",
  props: {
    code: { type: String, required: !0 },
    docs: Object,
    imageSrcset: String,
    title: { type: String, required: !0 }
  },
  emits: ["documentation-clicked", "insert-clicked"],
  setup(F, { emit: N }) {
    const w = F;
    function $() {
      navigator.clipboard.writeText(w.code);
    }
    function L() {
      var k, f, a;
      N("documentation-clicked", {
        code: w.code,
        description: ((k = w.docs) == null ? void 0 : k.description) || null,
        imageSrcset: w.imageSrcset || null,
        props: ((f = w.docs) == null ? void 0 : f.props) || null,
        summary: ((a = w.docs) == null ? void 0 : a.summary) || null,
        title: w.title
      });
    }
    function S() {
      N("insert-clicked", w.code);
    }
    return (k, f) => {
      var a;
      return X(), Y("div", Rt, [
        F.imageSrcset ? (X(), Y("button", {
          key: 0,
          type: "button",
          onClick: L
        }, [
          W("img", {
            class: "g-block g-w-24 g-h-24 g-object-cover",
            srcset: F.imageSrcset,
            alt: "image preview"
          }, null, 8, Lt)
        ])) : re("", !0),
        W("div", Et, [
          W("h4", null, ne(F.title), 1),
          (a = F.docs) != null && a.summary ? (X(), Y("p", {
            key: 0,
            innerHTML: F.docs.summary
          }, null, 8, Mt)) : re("", !0),
          W("div", Ft, [
            W("button", {
              class: "btn small icon add g-mt-1",
              type: "button",
              onClick: S
            }, ne(G(J).Add), 1),
            W("button", {
              class: "btn small icon copy g-mt-1",
              type: "button",
              onClick: $
            }, ne(G(J).Copy), 1),
            F.docs ? (X(), Y("button", {
              key: 0,
              class: "btn small g-mt-1",
              type: "button",
              onClick: L
            }, ne(G(J).Documentation), 1)) : re("", !0)
          ])
        ])
      ]);
    };
  }
}), Ot = /* @__PURE__ */ xe(It, [["__file", "ComponentListItem.vue"]]), Dt = ["id"], Bt = { class: "heading" }, Ht = ["id", "for"], Nt = ["id"], Pt = ["innerHTML"], Wt = { class: "input ltr" }, zt = ["id", "name", "autofocus", "placeholder", "aria-describedby"], Ut = ["id", "type", "name", "autofocus", "placeholder", "aria-describedby"], Vt = /* @__PURE__ */ Le({
  __name: "CraftFieldText",
  props: {
    autofocus: { type: Boolean, default: !0 },
    fieldAttributes: Object,
    fieldType: { type: String, default: "text" },
    instructions: String,
    label: { type: String, required: !0 },
    name: { type: String, required: !0 },
    placeholder: String,
    required: { type: Boolean, default: !1 },
    startingValue: { type: String, default: "" }
  },
  emits: ["focused", "value-changed"],
  setup(F, { expose: N, emit: w }) {
    const $ = F, L = ie(JSON.parse(JSON.stringify($.startingValue)));
    function S(k) {
      L.value = k;
    }
    return ht(L, (k) => {
      w("value-changed", k);
    }), N({
      setFieldValue: S
    }), (k, f) => (X(), Y("div", {
      id: `${F.name}-field`,
      class: "field"
    }, [
      W("div", Bt, [
        W("label", {
          id: `${F.name}-label`,
          class: ve(F.required ? "required" : null),
          for: F.name
        }, ne(F.label), 11, Ht)
      ]),
      F.instructions ? (X(), Y("div", {
        key: 0,
        id: `${F.name}-instructions`,
        class: "instructions"
      }, [
        W("p", { innerHTML: F.instructions }, null, 8, Pt)
      ], 8, Nt)) : re("", !0),
      W("div", Wt, [
        F.fieldType === "textarea" ? ke((X(), Y("textarea", Ze({
          key: 0,
          id: F.name,
          "onUpdate:modelValue": f[0] || (f[0] = (a) => L.value = a),
          class: "text fullwidth",
          name: F.name,
          autofocus: F.autofocus,
          autocomplete: "off",
          placeholder: F.placeholder ? F.placeholder : null,
          "aria-describedby": F.instructions ? `${F.name}-instructions` : null
        }, F.fieldAttributes, {
          onFocus: f[1] || (f[1] = (a) => k.$emit("focused"))
        }), null, 16, zt)), [
          [ut, L.value]
        ]) : ke((X(), Y("input", Ze({
          key: 1,
          id: F.name,
          "onUpdate:modelValue": f[2] || (f[2] = (a) => L.value = a),
          class: "text fullwidth",
          type: F.fieldType,
          name: F.name,
          autofocus: F.autofocus,
          autocomplete: "off",
          placeholder: F.placeholder ? F.placeholder : null,
          "aria-describedby": F.instructions ? `${F.name}-instructions` : null
        }, F.fieldAttributes, {
          onFocus: f[3] || (f[3] = (a) => k.$emit("focused"))
        }), null, 16, Ut)), [
          [dt, L.value]
        ])
      ])
    ], 8, Dt));
  }
}), Re = /* @__PURE__ */ xe(Vt, [["__file", "CraftFieldText.vue"]]), Gt = {}, Kt = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, jt = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
}, null, -1), Xt = [
  jt
];
function Yt(F, N) {
  return X(), Y("svg", Kt, Xt);
}
const Zt = /* @__PURE__ */ xe(Gt, [["render", Yt], ["__file", "SvgAnnotation.vue"]]), Jt = {}, Qt = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, qt = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
}, null, -1), en = [
  qt
];
function tn(F, N) {
  return X(), Y("svg", Qt, en);
}
const nn = /* @__PURE__ */ xe(Jt, [["render", tn], ["__file", "SvgPuzzle.vue"]]), rn = {}, sn = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, on = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
}, null, -1), an = [
  on
];
function ln(F, N) {
  return X(), Y("svg", sn, an);
}
const cn = /* @__PURE__ */ xe(rn, [["render", ln], ["__file", "SvgPhotograph.vue"]]);
var it = { exports: {} };
(function(F, N) {
  (function() {
    var w = "ace", $ = function() {
      return this;
    }();
    !$ && typeof window < "u" && ($ = window);
    var L = function(t, e, n) {
      if (typeof t != "string") {
        L.original ? L.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
        return;
      }
      arguments.length == 2 && (n = e), L.modules[t] || (L.payloads[t] = n, L.modules[t] = null);
    };
    L.modules = {}, L.payloads = {};
    var S = function(t, e, n) {
      if (typeof e == "string") {
        var r = a(t, e);
        if (r != null)
          return n && n(), r;
      } else if (Object.prototype.toString.call(e) === "[object Array]") {
        for (var i = [], s = 0, c = e.length; s < c; ++s) {
          var g = a(t, e[s]);
          if (g == null && k.original)
            return;
          i.push(g);
        }
        return n && n.apply(null, i) || !0;
      }
    }, k = function(t, e) {
      var n = S("", t, e);
      return n == null && k.original ? k.original.apply(this, arguments) : n;
    }, f = function(t, e) {
      if (e.indexOf("!") !== -1) {
        var n = e.split("!");
        return f(t, n[0]) + "!" + f(t, n[1]);
      }
      if (e.charAt(0) == ".") {
        var r = t.split("/").slice(0, -1).join("/");
        for (e = r + "/" + e; e.indexOf(".") !== -1 && i != e; ) {
          var i = e;
          e = e.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
        }
      }
      return e;
    }, a = function(t, e) {
      e = f(t, e);
      var n = L.modules[e];
      if (!n) {
        if (n = L.payloads[e], typeof n == "function") {
          var r = {}, i = {
            id: e,
            uri: "",
            exports: r,
            packaged: !0
          }, s = function(g, m) {
            return S(e, g, m);
          }, c = n(s, r, i);
          r = c || i.exports, L.modules[e] = r, delete L.payloads[e];
        }
        n = L.modules[e] = r || n;
      }
      return n;
    };
    function l(t) {
      var e = $;
      t && ($[t] || ($[t] = {}), e = $[t]), (!e.define || !e.define.packaged) && (L.original = e.define, e.define = L, e.define.packaged = !0), (!e.require || !e.require.packaged) && (k.original = e.require, e.require = k, e.require.packaged = !0);
    }
    l(w);
  })(), ace.define("ace/lib/es6-shim", ["require", "exports", "module"], function(w, $, L) {
    function S(k, f, a) {
      Object.defineProperty(k, f, {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      });
    }
    String.prototype.startsWith || S(String.prototype, "startsWith", function(k, f) {
      return f = f || 0, this.lastIndexOf(k, f) === f;
    }), String.prototype.endsWith || S(String.prototype, "endsWith", function(k, f) {
      var a = this;
      (f === void 0 || f > a.length) && (f = a.length), f -= k.length;
      var l = a.indexOf(k, f);
      return l !== -1 && l === f;
    }), String.prototype.repeat || S(String.prototype, "repeat", function(k) {
      for (var f = "", a = this; k > 0; )
        k & 1 && (f += a), (k >>= 1) && (a += a);
      return f;
    }), String.prototype.includes || S(String.prototype, "includes", function(k, f) {
      return this.indexOf(k, f) != -1;
    }), Object.assign || (Object.assign = function(k) {
      if (k == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var f = Object(k), a = 1; a < arguments.length; a++) {
        var l = arguments[a];
        l != null && Object.keys(l).forEach(function(t) {
          f[t] = l[t];
        });
      }
      return f;
    }), Object.values || (Object.values = function(k) {
      return Object.keys(k).map(function(f) {
        return k[f];
      });
    }), Array.prototype.find || S(Array.prototype, "find", function(k) {
      for (var f = this.length, a = arguments[1], l = 0; l < f; l++) {
        var t = this[l];
        if (k.call(a, t, l, this))
          return t;
      }
    }), Array.prototype.findIndex || S(Array.prototype, "findIndex", function(k) {
      for (var f = this.length, a = arguments[1], l = 0; l < f; l++) {
        var t = this[l];
        if (k.call(a, t, l, this))
          return l;
      }
    }), Array.prototype.includes || S(Array.prototype, "includes", function(k, f) {
      return this.indexOf(k, f) != -1;
    }), Array.prototype.fill || S(Array.prototype, "fill", function(k) {
      for (var f = this, a = f.length >>> 0, l = arguments[1], t = l >> 0, e = t < 0 ? Math.max(a + t, 0) : Math.min(t, a), n = arguments[2], r = n === void 0 ? a : n >> 0, i = r < 0 ? Math.max(a + r, 0) : Math.min(r, a); e < i; )
        f[e] = k, e++;
      return f;
    }), Array.of || S(Array, "of", function() {
      return Array.prototype.slice.call(arguments);
    });
  }), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], function(w, $, L) {
    w("./es6-shim");
  }), ace.define("ace/lib/lang", ["require", "exports", "module"], function(w, $, L) {
    $.last = function(f) {
      return f[f.length - 1];
    }, $.stringReverse = function(f) {
      return f.split("").reverse().join("");
    }, $.stringRepeat = function(f, a) {
      for (var l = ""; a > 0; )
        a & 1 && (l += f), (a >>= 1) && (f += f);
      return l;
    };
    var S = /^\s\s*/, k = /\s\s*$/;
    $.stringTrimLeft = function(f) {
      return f.replace(S, "");
    }, $.stringTrimRight = function(f) {
      return f.replace(k, "");
    }, $.copyObject = function(f) {
      var a = {};
      for (var l in f)
        a[l] = f[l];
      return a;
    }, $.copyArray = function(f) {
      for (var a = [], l = 0, t = f.length; l < t; l++)
        f[l] && typeof f[l] == "object" ? a[l] = this.copyObject(f[l]) : a[l] = f[l];
      return a;
    }, $.deepCopy = function f(a) {
      if (typeof a != "object" || !a)
        return a;
      var l;
      if (Array.isArray(a)) {
        l = [];
        for (var t = 0; t < a.length; t++)
          l[t] = f(a[t]);
        return l;
      }
      if (Object.prototype.toString.call(a) !== "[object Object]")
        return a;
      l = {};
      for (var t in a)
        l[t] = f(a[t]);
      return l;
    }, $.arrayToMap = function(f) {
      for (var a = {}, l = 0; l < f.length; l++)
        a[f[l]] = 1;
      return a;
    }, $.createMap = function(f) {
      var a = /* @__PURE__ */ Object.create(null);
      for (var l in f)
        a[l] = f[l];
      return a;
    }, $.arrayRemove = function(f, a) {
      for (var l = 0; l <= f.length; l++)
        a === f[l] && f.splice(l, 1);
    }, $.escapeRegExp = function(f) {
      return f.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    }, $.escapeHTML = function(f) {
      return ("" + f).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
    }, $.getMatchOffsets = function(f, a) {
      var l = [];
      return f.replace(a, function(t) {
        l.push({
          offset: arguments[arguments.length - 2],
          length: t.length
        });
      }), l;
    }, $.deferredCall = function(f) {
      var a = null, l = function() {
        a = null, f();
      }, t = function(e) {
        return t.cancel(), a = setTimeout(l, e || 0), t;
      };
      return t.schedule = t, t.call = function() {
        return this.cancel(), f(), t;
      }, t.cancel = function() {
        return clearTimeout(a), a = null, t;
      }, t.isPending = function() {
        return a;
      }, t;
    }, $.delayedCall = function(f, a) {
      var l = null, t = function() {
        l = null, f();
      }, e = function(n) {
        l == null && (l = setTimeout(t, n || a));
      };
      return e.delay = function(n) {
        l && clearTimeout(l), l = setTimeout(t, n || a);
      }, e.schedule = e, e.call = function() {
        this.cancel(), f();
      }, e.cancel = function() {
        l && clearTimeout(l), l = null;
      }, e.isPending = function() {
        return l;
      }, e;
    };
  }), ace.define("ace/lib/oop", ["require", "exports", "module"], function(w, $, L) {
    $.inherits = function(S, k) {
      S.super_ = k, S.prototype = Object.create(k.prototype, {
        constructor: {
          value: S,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    }, $.mixin = function(S, k) {
      for (var f in k)
        S[f] = k[f];
      return S;
    }, $.implement = function(S, k) {
      $.mixin(S, k);
    };
  }), ace.define("ace/lib/useragent", ["require", "exports", "module"], function(w, $, L) {
    $.OS = {
      LINUX: "LINUX",
      MAC: "MAC",
      WINDOWS: "WINDOWS"
    }, $.getOS = function() {
      return $.isMac ? $.OS.MAC : $.isLinux ? $.OS.LINUX : $.OS.WINDOWS;
    };
    var S = typeof navigator == "object" ? navigator : {}, k = (/mac|win|linux/i.exec(S.platform) || ["other"])[0].toLowerCase(), f = S.userAgent || "", a = S.appName || "";
    $.isWin = k == "win", $.isMac = k == "mac", $.isLinux = k == "linux", $.isIE = a == "Microsoft Internet Explorer" || a.indexOf("MSAppHost") >= 0 ? parseFloat((f.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((f.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), $.isOldIE = $.isIE && $.isIE < 9, $.isGecko = $.isMozilla = f.match(/ Gecko\/\d+/), $.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", $.isWebKit = parseFloat(f.split("WebKit/")[1]) || void 0, $.isChrome = parseFloat(f.split(" Chrome/")[1]) || void 0, $.isEdge = parseFloat(f.split(" Edge/")[1]) || void 0, $.isAIR = f.indexOf("AdobeAIR") >= 0, $.isAndroid = f.indexOf("Android") >= 0, $.isChromeOS = f.indexOf(" CrOS ") >= 0, $.isIOS = /iPad|iPhone|iPod/.test(f) && !window.MSStream, $.isIOS && ($.isMac = !0), $.isMobile = $.isIOS || $.isAndroid;
  }), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(w, $, L) {
    var S = w("./useragent"), k = "http://www.w3.org/1999/xhtml";
    $.buildDom = function n(r, i, s) {
      if (typeof r == "string" && r) {
        var c = document.createTextNode(r);
        return i && i.appendChild(c), c;
      }
      if (!Array.isArray(r))
        return r && r.appendChild && i && i.appendChild(r), r;
      if (typeof r[0] != "string" || !r[0]) {
        for (var g = [], m = 0; m < r.length; m++) {
          var y = n(r[m], i, s);
          y && g.push(y);
        }
        return g;
      }
      var x = document.createElement(r[0]), o = r[1], d = 1;
      o && typeof o == "object" && !Array.isArray(o) && (d = 2);
      for (var m = d; m < r.length; m++)
        n(r[m], x, s);
      return d == 2 && Object.keys(o).forEach(function(b) {
        var u = o[b];
        b === "class" ? x.className = Array.isArray(u) ? u.join(" ") : u : typeof u == "function" || b == "value" || b[0] == "$" ? x[b] = u : b === "ref" ? s && (s[u] = x) : b === "style" ? typeof u == "string" && (x.style.cssText = u) : u != null && x.setAttribute(b, u);
      }), i && i.appendChild(x), x;
    }, $.getDocumentHead = function(n) {
      return n || (n = document), n.head || n.getElementsByTagName("head")[0] || n.documentElement;
    }, $.createElement = function(n, r) {
      return document.createElementNS ? document.createElementNS(r || k, n) : document.createElement(n);
    }, $.removeChildren = function(n) {
      n.innerHTML = "";
    }, $.createTextNode = function(n, r) {
      var i = r ? r.ownerDocument : document;
      return i.createTextNode(n);
    }, $.createFragment = function(n) {
      var r = n ? n.ownerDocument : document;
      return r.createDocumentFragment();
    }, $.hasCssClass = function(n, r) {
      var i = (n.className + "").split(/\s+/g);
      return i.indexOf(r) !== -1;
    }, $.addCssClass = function(n, r) {
      $.hasCssClass(n, r) || (n.className += " " + r);
    }, $.removeCssClass = function(n, r) {
      for (var i = n.className.split(/\s+/g); ; ) {
        var s = i.indexOf(r);
        if (s == -1)
          break;
        i.splice(s, 1);
      }
      n.className = i.join(" ");
    }, $.toggleCssClass = function(n, r) {
      for (var i = n.className.split(/\s+/g), s = !0; ; ) {
        var c = i.indexOf(r);
        if (c == -1)
          break;
        s = !1, i.splice(c, 1);
      }
      return s && i.push(r), n.className = i.join(" "), s;
    }, $.setCssClass = function(n, r, i) {
      i ? $.addCssClass(n, r) : $.removeCssClass(n, r);
    }, $.hasCssString = function(n, r) {
      var i = 0, s;
      if (r = r || document, s = r.querySelectorAll("style")) {
        for (; i < s.length; )
          if (s[i++].id === n)
            return !0;
      }
    }, $.removeElementById = function(n, r) {
      r = r || document, r.getElementById(n) && r.getElementById(n).remove();
    };
    var f, a = [];
    $.useStrictCSP = function(n) {
      f = n, n == !1 ? l() : a || (a = []);
    };
    function l() {
      var n = a;
      a = null, n && n.forEach(function(r) {
        t(r[0], r[1]);
      });
    }
    function t(n, r, i) {
      if (!(typeof document > "u")) {
        if (a) {
          if (i)
            l();
          else if (i === !1)
            return a.push([n, r]);
        }
        if (!f) {
          var s = i;
          !i || !i.getRootNode ? s = document : (s = i.getRootNode(), (!s || s == i) && (s = document));
          var c = s.ownerDocument || s;
          if (r && $.hasCssString(r, s))
            return null;
          r && (n += `
/*# sourceURL=ace/css/` + r + " */");
          var g = $.createElement("style");
          g.appendChild(c.createTextNode(n)), r && (g.id = r), s == c && (s = $.getDocumentHead(c)), s.insertBefore(g, s.firstChild);
        }
      }
    }
    if ($.importCssString = t, $.importCssStylsheet = function(n, r) {
      $.buildDom(["link", { rel: "stylesheet", href: n }], $.getDocumentHead(r));
    }, $.scrollbarWidth = function(n) {
      var r = $.createElement("ace_inner");
      r.style.width = "100%", r.style.minWidth = "0px", r.style.height = "200px", r.style.display = "block";
      var i = $.createElement("ace_outer"), s = i.style;
      s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", i.appendChild(r);
      var c = n.documentElement;
      c.appendChild(i);
      var g = r.offsetWidth;
      s.overflow = "scroll";
      var m = r.offsetWidth;
      return g == m && (m = i.clientWidth), c.removeChild(i), g - m;
    }, $.computedStyle = function(n, r) {
      return window.getComputedStyle(n, "") || {};
    }, $.setStyle = function(n, r, i) {
      n[r] !== i && (n[r] = i);
    }, $.HAS_CSS_ANIMATION = !1, $.HAS_CSS_TRANSFORMS = !1, $.HI_DPI = S.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : !0, S.isChromeOS && ($.HI_DPI = !1), typeof document < "u") {
      var e = document.createElement("div");
      $.HI_DPI && e.style.transform !== void 0 && ($.HAS_CSS_TRANSFORMS = !0), !S.isEdge && typeof e.style.animationName < "u" && ($.HAS_CSS_ANIMATION = !0), e = null;
    }
    $.HAS_CSS_TRANSFORMS ? $.translate = function(n, r, i) {
      n.style.transform = "translate(" + Math.round(r) + "px, " + Math.round(i) + "px)";
    } : $.translate = function(n, r, i) {
      n.style.top = Math.round(i) + "px", n.style.left = Math.round(r) + "px";
    };
  }), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(w, $, L) {
    /*
    * based on code from:
    *
    * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
    * Available via the MIT or new BSD license.
    * see: http://github.com/jrburke/requirejs for details
    */
    var S = w("./dom");
    $.get = function(k, f) {
      var a = new XMLHttpRequest();
      a.open("GET", k, !0), a.onreadystatechange = function() {
        a.readyState === 4 && f(a.responseText);
      }, a.send(null);
    }, $.loadScript = function(k, f) {
      var a = S.getDocumentHead(), l = document.createElement("script");
      l.src = k, a.appendChild(l), l.onload = l.onreadystatechange = function(t, e) {
        (e || !l.readyState || l.readyState == "loaded" || l.readyState == "complete") && (l = l.onload = l.onreadystatechange = null, e || f());
      };
    }, $.qualifyURL = function(k) {
      var f = document.createElement("a");
      return f.href = k, f.href;
    };
  }), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(w, $, L) {
    var S = {}, k = function() {
      this.propagationStopped = !0;
    }, f = function() {
      this.defaultPrevented = !0;
    };
    S._emit = S._dispatchEvent = function(a, l) {
      this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
      var t = this._eventRegistry[a] || [], e = this._defaultHandlers[a];
      if (!(!t.length && !e)) {
        (typeof l != "object" || !l) && (l = {}), l.type || (l.type = a), l.stopPropagation || (l.stopPropagation = k), l.preventDefault || (l.preventDefault = f), t = t.slice();
        for (var n = 0; n < t.length && (t[n](l, this), !l.propagationStopped); n++)
          ;
        if (e && !l.defaultPrevented)
          return e(l, this);
      }
    }, S._signal = function(a, l) {
      var t = (this._eventRegistry || {})[a];
      if (!!t) {
        t = t.slice();
        for (var e = 0; e < t.length; e++)
          t[e](l, this);
      }
    }, S.once = function(a, l) {
      var t = this;
      if (this.on(a, function e() {
        t.off(a, e), l.apply(null, arguments);
      }), !l)
        return new Promise(function(e) {
          l = e;
        });
    }, S.setDefaultHandler = function(a, l) {
      var t = this._defaultHandlers;
      if (t || (t = this._defaultHandlers = { _disabled_: {} }), t[a]) {
        var e = t[a], n = t._disabled_[a];
        n || (t._disabled_[a] = n = []), n.push(e);
        var r = n.indexOf(l);
        r != -1 && n.splice(r, 1);
      }
      t[a] = l;
    }, S.removeDefaultHandler = function(a, l) {
      var t = this._defaultHandlers;
      if (!!t) {
        var e = t._disabled_[a];
        if (t[a] == l)
          e && this.setDefaultHandler(a, e.pop());
        else if (e) {
          var n = e.indexOf(l);
          n != -1 && e.splice(n, 1);
        }
      }
    }, S.on = S.addEventListener = function(a, l, t) {
      this._eventRegistry = this._eventRegistry || {};
      var e = this._eventRegistry[a];
      return e || (e = this._eventRegistry[a] = []), e.indexOf(l) == -1 && e[t ? "unshift" : "push"](l), l;
    }, S.off = S.removeListener = S.removeEventListener = function(a, l) {
      this._eventRegistry = this._eventRegistry || {};
      var t = this._eventRegistry[a];
      if (!!t) {
        var e = t.indexOf(l);
        e !== -1 && t.splice(e, 1);
      }
    }, S.removeAllListeners = function(a) {
      a || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[a] = void 0), this._defaultHandlers && (this._defaultHandlers[a] = void 0);
    }, $.EventEmitter = S;
  }), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("./oop"), k = w("./event_emitter").EventEmitter, f = {
      setOptions: function(e) {
        Object.keys(e).forEach(function(n) {
          this.setOption(n, e[n]);
        }, this);
      },
      getOptions: function(e) {
        var n = {};
        if (e)
          Array.isArray(e) || (n = e, e = Object.keys(n));
        else {
          var r = this.$options;
          e = Object.keys(r).filter(function(i) {
            return !r[i].hidden;
          });
        }
        return e.forEach(function(i) {
          n[i] = this.getOption(i);
        }, this), n;
      },
      setOption: function(e, n) {
        if (this["$" + e] !== n) {
          var r = this.$options[e];
          if (!r)
            return a('misspelled option "' + e + '"');
          if (r.forwardTo)
            return this[r.forwardTo] && this[r.forwardTo].setOption(e, n);
          r.handlesSet || (this["$" + e] = n), r && r.set && r.set.call(this, n);
        }
      },
      getOption: function(e) {
        var n = this.$options[e];
        return n ? n.forwardTo ? this[n.forwardTo] && this[n.forwardTo].getOption(e) : n && n.get ? n.get.call(this) : this["$" + e] : a('misspelled option "' + e + '"');
      }
    };
    function a(e) {
      typeof console < "u" && console.warn && console.warn.apply(console, arguments);
    }
    function l(e, n) {
      var r = new Error(e);
      r.data = n, typeof console == "object" && console.error && console.error(r), setTimeout(function() {
        throw r;
      });
    }
    var t = function() {
      this.$defaultOptions = {};
    };
    (function() {
      S.implement(this, k), this.defineOptions = function(e, n, r) {
        return e.$options || (this.$defaultOptions[n] = e.$options = {}), Object.keys(r).forEach(function(i) {
          var s = r[i];
          typeof s == "string" && (s = { forwardTo: s }), s.name || (s.name = i), e.$options[s.name] = s, "initialValue" in s && (e["$" + s.name] = s.initialValue);
        }), S.implement(e, f), this;
      }, this.resetOptions = function(e) {
        Object.keys(e.$options).forEach(function(n) {
          var r = e.$options[n];
          "value" in r && e.setOption(n, r.value);
        });
      }, this.setDefaultValue = function(e, n, r) {
        if (!e) {
          for (e in this.$defaultOptions)
            if (this.$defaultOptions[e][n])
              break;
          if (!this.$defaultOptions[e][n])
            return !1;
        }
        var i = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
        i[n] && (i.forwardTo ? this.setDefaultValue(i.forwardTo, n, r) : i[n].value = r);
      }, this.setDefaultValues = function(e, n) {
        Object.keys(n).forEach(function(r) {
          this.setDefaultValue(e, r, n[r]);
        }, this);
      }, this.warn = a, this.reportError = l;
    }).call(t.prototype), $.AppConfig = t;
  }), ace.define("ace/theme/textmate.css", ["require", "exports", "module"], function(w, $, L) {
    L.exports = `.ace-tm .ace_gutter {
  background: #f0f0f0;
  color: #333;
}

.ace-tm .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tm .ace_fold {
    background-color: #6B72E6;
}

.ace-tm {
  background-color: #FFFFFF;
  color: black;
}

.ace-tm .ace_cursor {
  color: black;
}
        
.ace-tm .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-tm .ace_storage,
.ace-tm .ace_keyword {
  color: blue;
}

.ace-tm .ace_constant {
  color: rgb(197, 6, 11);
}

.ace-tm .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-tm .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-tm .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.ace-tm .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-tm .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_support.ace_type,
.ace-tm .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-tm .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-tm .ace_string {
  color: rgb(3, 106, 7);
}

.ace-tm .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-tm .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-tm .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-tm .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-tm .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-tm .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-tm .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-tm .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-tm .ace_list {
  color:rgb(185, 6, 144);
}

.ace-tm .ace_meta.ace_tag {
  color:rgb(0, 22, 142);
}

.ace-tm .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-tm .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
.ace-tm .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-tm .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-tm .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-tm .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-tm .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-tm .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-tm .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
  }), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate.css", "ace/lib/dom"], function(w, $, L) {
    $.isDark = !1, $.cssClass = "ace-tm", $.cssText = w("./textmate.css"), $.$id = "ace/theme/textmate";
    var S = w("../lib/dom");
    S.importCssString($.cssText, $.cssClass, !1);
  }), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], function(w, $, L) {
    var S = w("./lib/lang");
    w("./lib/oop");
    var k = w("./lib/net"), f = w("./lib/dom"), a = w("./lib/app_config").AppConfig;
    L.exports = $ = new a();
    var l = {
      packaged: !1,
      workerPath: null,
      modePath: null,
      themePath: null,
      basePath: "",
      suffix: ".js",
      $moduleUrls: {},
      loadWorkerFromBlob: !0,
      sharedPopups: !1,
      useStrictCSP: null
    };
    $.get = function(n) {
      if (!l.hasOwnProperty(n))
        throw new Error("Unknown config key: " + n);
      return l[n];
    }, $.set = function(n, r) {
      if (l.hasOwnProperty(n))
        l[n] = r;
      else if (this.setDefaultValue("", n, r) == !1)
        throw new Error("Unknown config key: " + n);
      n == "useStrictCSP" && f.useStrictCSP(r);
    }, $.all = function() {
      return S.copyObject(l);
    }, $.$modes = {}, $.moduleUrl = function(n, r) {
      if (l.$moduleUrls[n])
        return l.$moduleUrls[n];
      var i = n.split("/");
      r = r || i[i.length - 2] || "";
      var s = r == "snippets" ? "/" : "-", c = i[i.length - 1];
      if (r == "worker" && s == "-") {
        var g = new RegExp("^" + r + "[\\-_]|[\\-_]" + r + "$", "g");
        c = c.replace(g, "");
      }
      (!c || c == r) && i.length > 1 && (c = i[i.length - 2]);
      var m = l[r + "Path"];
      return m == null ? m = l.basePath : s == "/" && (r = s = ""), m && m.slice(-1) != "/" && (m += "/"), m + r + s + c + this.get("suffix");
    }, $.setModuleUrl = function(n, r) {
      return l.$moduleUrls[n] = r;
    };
    var t = function(n, r) {
      return n == "ace/theme/textmate" ? r(null, w("./theme/textmate")) : console.error("loader is not configured");
    };
    $.setLoader = function(n) {
      t = n;
    }, $.$loading = {}, $.loadModule = function(n, r) {
      var i, s;
      Array.isArray(n) && (s = n[0], n = n[1]);
      try {
        i = w(n);
      } catch {
      }
      if (i && !$.$loading[n])
        return r && r(i);
      if ($.$loading[n] || ($.$loading[n] = []), $.$loading[n].push(r), !($.$loading[n].length > 1)) {
        var c = function() {
          t(n, function(g, m) {
            $._emit("load.module", { name: n, module: m });
            var y = $.$loading[n];
            $.$loading[n] = null, y.forEach(function(x) {
              x && x(m);
            });
          });
        };
        if (!$.get("packaged"))
          return c();
        k.loadScript($.moduleUrl(n, s), c), e();
      }
    };
    var e = function() {
      !l.basePath && !l.workerPath && !l.modePath && !l.themePath && !Object.keys(l.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), e = function() {
      });
    };
    $.version = "1.10.0";
  }), ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], function(w, $, L) {
    w("./lib/fixoldbrowsers");
    var S = w("./config");
    S.setLoader(function(l, t) {
      w([l], function(e) {
        t(null, e);
      });
    });
    var k = function() {
      return this || typeof window < "u" && window;
    }();
    L.exports = function(l) {
      S.init = f, l.require = w;
    }, f(!0);
    function f(l) {
      if (!(!k || !k.document)) {
        S.set("packaged", l || w.packaged || L.packaged || k.define && (void 0).packaged);
        for (var t = {}, e = "", n = document.currentScript || document._currentScript, r = n && n.ownerDocument || document, i = r.getElementsByTagName("script"), s = 0; s < i.length; s++) {
          var c = i[s], g = c.src || c.getAttribute("src");
          if (!!g) {
            for (var m = c.attributes, y = 0, x = m.length; y < x; y++) {
              var o = m[y];
              o.name.indexOf("data-ace-") === 0 && (t[a(o.name.replace(/^data-ace-/, ""))] = o.value);
            }
            var d = g.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
            d && (e = d[1]);
          }
        }
        e && (t.base = t.base || e, t.packaged = !0), t.basePath = t.base, t.workerPath = t.workerPath || t.base, t.modePath = t.modePath || t.base, t.themePath = t.themePath || t.base, delete t.base;
        for (var b in t)
          typeof t[b] < "u" && S.set(b, t[b]);
      }
    }
    function a(l) {
      return l.replace(/-(.)/g, function(t, e) {
        return e.toUpperCase();
      });
    }
  }), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(w, $, L) {
    /*! @license
    	==========================================================================
    	SproutCore -- JavaScript Application Framework
    	copyright 2006-2009, Sprout Systems Inc., Apple Inc. and contributors.
    
    	Permission is hereby granted, free of charge, to any person obtaining a
    	copy of this software and associated documentation files (the "Software"),
    	to deal in the Software without restriction, including without limitation
    	the rights to use, copy, modify, merge, publish, distribute, sublicense,
    	and/or sell copies of the Software, and to permit persons to whom the
    	Software is furnished to do so, subject to the following conditions:
    
    	The above copyright notice and this permission notice shall be included in
    	all copies or substantial portions of the Software.
    
    	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
    	DEALINGS IN THE SOFTWARE.
    
    	SproutCore and the SproutCore logo are trademarks of Sprout Systems, Inc.
    
    	For more information about SproutCore, visit http://www.sproutcore.com
    
    
    	==========================================================================
    	@license */
    var S = w("./oop"), k = function() {
      var f = {
        MODIFIER_KEYS: {
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          224: "Meta",
          91: "MetaLeft",
          92: "MetaRight",
          93: "ContextMenu"
        },
        KEY_MODS: {
          ctrl: 1,
          alt: 2,
          option: 2,
          shift: 4,
          super: 8,
          meta: 8,
          command: 8,
          cmd: 8,
          control: 1
        },
        FUNCTION_KEYS: {
          8: "Backspace",
          9: "Tab",
          13: "Return",
          19: "Pause",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "Print",
          45: "Insert",
          46: "Delete",
          96: "Numpad0",
          97: "Numpad1",
          98: "Numpad2",
          99: "Numpad3",
          100: "Numpad4",
          101: "Numpad5",
          102: "Numpad6",
          103: "Numpad7",
          104: "Numpad8",
          105: "Numpad9",
          "-13": "NumpadEnter",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "Numlock",
          145: "Scrolllock"
        },
        PRINTABLE_KEYS: {
          32: " ",
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9",
          59: ";",
          61: "=",
          65: "a",
          66: "b",
          67: "c",
          68: "d",
          69: "e",
          70: "f",
          71: "g",
          72: "h",
          73: "i",
          74: "j",
          75: "k",
          76: "l",
          77: "m",
          78: "n",
          79: "o",
          80: "p",
          81: "q",
          82: "r",
          83: "s",
          84: "t",
          85: "u",
          86: "v",
          87: "w",
          88: "x",
          89: "y",
          90: "z",
          107: "+",
          109: "-",
          110: ".",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          111: "/",
          106: "*"
        }
      }, a, l;
      for (l in f.FUNCTION_KEYS)
        a = f.FUNCTION_KEYS[l].toLowerCase(), f[a] = parseInt(l, 10);
      for (l in f.PRINTABLE_KEYS)
        a = f.PRINTABLE_KEYS[l].toLowerCase(), f[a] = parseInt(l, 10);
      return S.mixin(f, f.MODIFIER_KEYS), S.mixin(f, f.PRINTABLE_KEYS), S.mixin(f, f.FUNCTION_KEYS), f.enter = f.return, f.escape = f.esc, f.del = f.delete, f[173] = "-", function() {
        for (var t = ["cmd", "ctrl", "alt", "shift"], e = Math.pow(2, t.length); e--; )
          f.KEY_MODS[e] = t.filter(function(n) {
            return e & f.KEY_MODS[n];
          }).join("-") + "-";
      }(), f.KEY_MODS[0] = "", f.KEY_MODS[-1] = "input-", f;
    }();
    S.mixin($, k), $.keyCodeToString = function(f) {
      var a = k[f];
      return typeof a != "string" && (a = String.fromCharCode(f)), a.toLowerCase();
    };
  }), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(w, $, L) {
    var S = w("./keys"), k = w("./useragent"), f = null, a = 0, l;
    function t() {
      l = !1;
      try {
        document.createComment("").addEventListener("test", function() {
        }, {
          get passive() {
            l = { passive: !1 };
          }
        });
      } catch {
      }
    }
    function e() {
      return l == null && t(), l;
    }
    function n(y, x, o) {
      this.elem = y, this.type = x, this.callback = o;
    }
    n.prototype.destroy = function() {
      i(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
    };
    var r = $.addListener = function(y, x, o, d) {
      y.addEventListener(x, o, e()), d && d.$toDestroy.push(new n(y, x, o));
    }, i = $.removeListener = function(y, x, o) {
      y.removeEventListener(x, o, e());
    };
    $.stopEvent = function(y) {
      return $.stopPropagation(y), $.preventDefault(y), !1;
    }, $.stopPropagation = function(y) {
      y.stopPropagation && y.stopPropagation();
    }, $.preventDefault = function(y) {
      y.preventDefault && y.preventDefault();
    }, $.getButton = function(y) {
      return y.type == "dblclick" ? 0 : y.type == "contextmenu" || k.isMac && y.ctrlKey && !y.altKey && !y.shiftKey ? 2 : y.button;
    }, $.capture = function(y, x, o) {
      var d = y && y.ownerDocument || document;
      function b(u) {
        x && x(u), o && o(u), i(d, "mousemove", x), i(d, "mouseup", b), i(d, "dragstart", b);
      }
      return r(d, "mousemove", x), r(d, "mouseup", b), r(d, "dragstart", b), b;
    }, $.addMouseWheelListener = function(y, x, o) {
      r(y, "wheel", function(d) {
        var b = 0.15, u = d.deltaX || 0, p = d.deltaY || 0;
        switch (d.deltaMode) {
          case d.DOM_DELTA_PIXEL:
            d.wheelX = u * b, d.wheelY = p * b;
            break;
          case d.DOM_DELTA_LINE:
            var h = 15;
            d.wheelX = u * h, d.wheelY = p * h;
            break;
          case d.DOM_DELTA_PAGE:
            var v = 150;
            d.wheelX = u * v, d.wheelY = p * v;
            break;
        }
        x(d);
      }, o);
    }, $.addMultiMouseDownListener = function(y, x, o, d, b) {
      var u = 0, p, h, v, C = {
        2: "dblclick",
        3: "tripleclick",
        4: "quadclick"
      };
      function _(A) {
        if ($.getButton(A) !== 0 ? u = 0 : A.detail > 1 ? (u++, u > 4 && (u = 1)) : u = 1, k.isIE) {
          var R = Math.abs(A.clientX - p) > 5 || Math.abs(A.clientY - h) > 5;
          (!v || R) && (u = 1), v && clearTimeout(v), v = setTimeout(function() {
            v = null;
          }, x[u - 1] || 600), u == 1 && (p = A.clientX, h = A.clientY);
        }
        if (A._clicks = u, o[d]("mousedown", A), u > 4)
          u = 0;
        else if (u > 1)
          return o[d](C[u], A);
      }
      Array.isArray(y) || (y = [y]), y.forEach(function(A) {
        r(A, "mousedown", _, b);
      });
    };
    var s = function(y) {
      return 0 | (y.ctrlKey ? 1 : 0) | (y.altKey ? 2 : 0) | (y.shiftKey ? 4 : 0) | (y.metaKey ? 8 : 0);
    };
    $.getModifierString = function(y) {
      return S.KEY_MODS[s(y)];
    };
    function c(y, x, o) {
      var d = s(x);
      if (!k.isMac && f) {
        if (x.getModifierState && (x.getModifierState("OS") || x.getModifierState("Win")) && (d |= 8), f.altGr)
          if ((3 & d) != 3)
            f.altGr = 0;
          else
            return;
        if (o === 18 || o === 17) {
          var b = "location" in x ? x.location : x.keyLocation;
          if (o === 17 && b === 1)
            f[o] == 1 && (a = x.timeStamp);
          else if (o === 18 && d === 3 && b === 2) {
            var u = x.timeStamp - a;
            u < 50 && (f.altGr = !0);
          }
        }
      }
      if (o in S.MODIFIER_KEYS && (o = -1), !d && o === 13) {
        var b = "location" in x ? x.location : x.keyLocation;
        if (b === 3 && (y(x, d, -o), x.defaultPrevented))
          return;
      }
      if (k.isChromeOS && d & 8) {
        if (y(x, d, o), x.defaultPrevented)
          return;
        d &= -9;
      }
      return !d && !(o in S.FUNCTION_KEYS) && !(o in S.PRINTABLE_KEYS) ? !1 : y(x, d, o);
    }
    $.addCommandKeyListener = function(y, x, o) {
      if (k.isOldGecko || k.isOpera && !("KeyboardEvent" in window)) {
        var d = null;
        r(y, "keydown", function(u) {
          d = u.keyCode;
        }, o), r(y, "keypress", function(u) {
          return c(x, u, d);
        }, o);
      } else {
        var b = null;
        r(y, "keydown", function(u) {
          f[u.keyCode] = (f[u.keyCode] || 0) + 1;
          var p = c(x, u, u.keyCode);
          return b = u.defaultPrevented, p;
        }, o), r(y, "keypress", function(u) {
          b && (u.ctrlKey || u.altKey || u.shiftKey || u.metaKey) && ($.stopEvent(u), b = null);
        }, o), r(y, "keyup", function(u) {
          f[u.keyCode] = null;
        }, o), f || (g(), r(window, "focus", g));
      }
    };
    function g() {
      f = /* @__PURE__ */ Object.create(null);
    }
    if (typeof window == "object" && window.postMessage && !k.isOldIE) {
      var m = 1;
      $.nextTick = function(y, x) {
        x = x || window;
        var o = "zero-timeout-message-" + m++, d = function(b) {
          b.data == o && ($.stopPropagation(b), i(x, "message", d), y());
        };
        r(x, "message", d), x.postMessage(o, "*");
      };
    }
    $.$idleBlocked = !1, $.onIdle = function(y, x) {
      return setTimeout(function o() {
        $.$idleBlocked ? setTimeout(o, 100) : y();
      }, x);
    }, $.$idleBlockId = null, $.blockIdle = function(y) {
      $.$idleBlockId && clearTimeout($.$idleBlockId), $.$idleBlocked = !0, $.$idleBlockId = setTimeout(function() {
        $.$idleBlocked = !1;
      }, y || 100);
    }, $.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), $.nextFrame ? $.nextFrame = $.nextFrame.bind(window) : $.nextFrame = function(y) {
      setTimeout(y, 17);
    };
  }), ace.define("ace/range", ["require", "exports", "module"], function(w, $, L) {
    var S = function(f, a) {
      return f.row - a.row || f.column - a.column;
    }, k = function(f, a, l, t) {
      this.start = {
        row: f,
        column: a
      }, this.end = {
        row: l,
        column: t
      };
    };
    (function() {
      this.isEqual = function(f) {
        return this.start.row === f.start.row && this.end.row === f.end.row && this.start.column === f.start.column && this.end.column === f.end.column;
      }, this.toString = function() {
        return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
      }, this.contains = function(f, a) {
        return this.compare(f, a) == 0;
      }, this.compareRange = function(f) {
        var a, l = f.end, t = f.start;
        return a = this.compare(l.row, l.column), a == 1 ? (a = this.compare(t.row, t.column), a == 1 ? 2 : a == 0 ? 1 : 0) : a == -1 ? -2 : (a = this.compare(t.row, t.column), a == -1 ? -1 : a == 1 ? 42 : 0);
      }, this.comparePoint = function(f) {
        return this.compare(f.row, f.column);
      }, this.containsRange = function(f) {
        return this.comparePoint(f.start) == 0 && this.comparePoint(f.end) == 0;
      }, this.intersects = function(f) {
        var a = this.compareRange(f);
        return a == -1 || a == 0 || a == 1;
      }, this.isEnd = function(f, a) {
        return this.end.row == f && this.end.column == a;
      }, this.isStart = function(f, a) {
        return this.start.row == f && this.start.column == a;
      }, this.setStart = function(f, a) {
        typeof f == "object" ? (this.start.column = f.column, this.start.row = f.row) : (this.start.row = f, this.start.column = a);
      }, this.setEnd = function(f, a) {
        typeof f == "object" ? (this.end.column = f.column, this.end.row = f.row) : (this.end.row = f, this.end.column = a);
      }, this.inside = function(f, a) {
        return this.compare(f, a) == 0 ? !(this.isEnd(f, a) || this.isStart(f, a)) : !1;
      }, this.insideStart = function(f, a) {
        return this.compare(f, a) == 0 ? !this.isEnd(f, a) : !1;
      }, this.insideEnd = function(f, a) {
        return this.compare(f, a) == 0 ? !this.isStart(f, a) : !1;
      }, this.compare = function(f, a) {
        return !this.isMultiLine() && f === this.start.row ? a < this.start.column ? -1 : a > this.end.column ? 1 : 0 : f < this.start.row ? -1 : f > this.end.row ? 1 : this.start.row === f ? a >= this.start.column ? 0 : -1 : this.end.row === f ? a <= this.end.column ? 0 : 1 : 0;
      }, this.compareStart = function(f, a) {
        return this.start.row == f && this.start.column == a ? -1 : this.compare(f, a);
      }, this.compareEnd = function(f, a) {
        return this.end.row == f && this.end.column == a ? 1 : this.compare(f, a);
      }, this.compareInside = function(f, a) {
        return this.end.row == f && this.end.column == a ? 1 : this.start.row == f && this.start.column == a ? -1 : this.compare(f, a);
      }, this.clipRows = function(f, a) {
        if (this.end.row > a)
          var l = { row: a + 1, column: 0 };
        else if (this.end.row < f)
          var l = { row: f, column: 0 };
        if (this.start.row > a)
          var t = { row: a + 1, column: 0 };
        else if (this.start.row < f)
          var t = { row: f, column: 0 };
        return k.fromPoints(t || this.start, l || this.end);
      }, this.extend = function(f, a) {
        var l = this.compare(f, a);
        if (l == 0)
          return this;
        if (l == -1)
          var t = { row: f, column: a };
        else
          var e = { row: f, column: a };
        return k.fromPoints(t || this.start, e || this.end);
      }, this.isEmpty = function() {
        return this.start.row === this.end.row && this.start.column === this.end.column;
      }, this.isMultiLine = function() {
        return this.start.row !== this.end.row;
      }, this.clone = function() {
        return k.fromPoints(this.start, this.end);
      }, this.collapseRows = function() {
        return this.end.column == 0 ? new k(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new k(this.start.row, 0, this.end.row, 0);
      }, this.toScreenRange = function(f) {
        var a = f.documentToScreenPosition(this.start), l = f.documentToScreenPosition(this.end);
        return new k(a.row, a.column, l.row, l.column);
      }, this.moveBy = function(f, a) {
        this.start.row += f, this.start.column += a, this.end.row += f, this.end.column += a;
      };
    }).call(k.prototype), k.fromPoints = function(f, a) {
      return new k(f.row, f.column, a.row, a.column);
    }, k.comparePoints = S, k.comparePoints = function(f, a) {
      return f.row - a.row || f.column - a.column;
    }, $.Range = k;
  }), ace.define("ace/clipboard", ["require", "exports", "module"], function(w, $, L) {
    var S;
    L.exports = {
      lineMode: !1,
      pasteCancelled: function() {
        return S && S > Date.now() - 50 ? !0 : S = !1;
      },
      cancel: function() {
        S = Date.now();
      }
    };
  }), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(w, $, L) {
    var S = w("../lib/event"), k = w("../lib/useragent"), f = w("../lib/dom"), a = w("../lib/lang"), l = w("../clipboard"), t = k.isChrome < 18, e = k.isIE, n = k.isChrome > 63, r = 400, i = w("../lib/keys"), s = i.KEY_MODS, c = k.isIOS, g = c ? /\s/ : /\n/, m = k.isMobile, y = function(x, o) {
      var d = f.createElement("textarea");
      d.className = "ace_text-input", d.setAttribute("wrap", "off"), d.setAttribute("autocorrect", "off"), d.setAttribute("autocapitalize", "off"), d.setAttribute("spellcheck", !1), d.style.opacity = "0", x.insertBefore(d, x.firstChild);
      var b = !1, u = !1, p = !1, h = !1, v = "";
      m || (d.style.fontSize = "1px");
      var C = !1, _ = !1, A = "", R = 0, T = 0, E = 0;
      try {
        var M = document.activeElement === d;
      } catch {
      }
      S.addListener(d, "blur", function(V) {
        _ || (o.onBlur(V), M = !1);
      }, o), S.addListener(d, "focus", function(V) {
        if (!_) {
          if (M = !0, k.isEdge)
            try {
              if (!document.hasFocus())
                return;
            } catch {
            }
          o.onFocus(V), k.isEdge ? setTimeout(O) : O();
        }
      }, o), this.$focusScroll = !1, this.focus = function() {
        if (v || n || this.$focusScroll == "browser")
          return d.focus({ preventScroll: !0 });
        var V = d.style.top;
        d.style.position = "fixed", d.style.top = "0px";
        try {
          var ee = d.getBoundingClientRect().top != 0;
        } catch {
          return;
        }
        var te = [];
        if (ee)
          for (var oe = d.parentElement; oe && oe.nodeType == 1; )
            te.push(oe), oe.setAttribute("ace_nocontext", !0), !oe.parentElement && oe.getRootNode ? oe = oe.getRootNode().host : oe = oe.parentElement;
        d.focus({ preventScroll: !0 }), ee && te.forEach(function(ce) {
          ce.removeAttribute("ace_nocontext");
        }), setTimeout(function() {
          d.style.position = "", d.style.top == "0px" && (d.style.top = V);
        }, 0);
      }, this.blur = function() {
        d.blur();
      }, this.isFocused = function() {
        return M;
      }, o.on("beforeEndOperation", function() {
        var V = o.curOp, ee = V && V.command && V.command.name;
        if (ee != "insertstring") {
          var te = ee && (V.docChanged || V.selectionChanged);
          p && te && (A = d.value = "", me()), O();
        }
      });
      var O = c ? function(V) {
        if (!(!M || b && !V || h)) {
          V || (V = "");
          var ee = `
 ab` + V + `cde fg
`;
          ee != d.value && (d.value = A = ee);
          var te = 4, oe = 4 + (V.length || (o.selection.isEmpty() ? 0 : 1));
          (R != te || T != oe) && d.setSelectionRange(te, oe), R = te, T = oe;
        }
      } : function() {
        if (!(p || h) && !(!M && !I)) {
          p = !0;
          var V = 0, ee = 0, te = "";
          if (o.session) {
            var oe = o.selection, ce = oe.getRange(), ge = oe.cursor.row;
            if (V = ce.start.column, ee = ce.end.column, te = o.session.getLine(ge), ce.start.row != ge) {
              var pe = o.session.getLine(ge - 1);
              V = ce.start.row < ge - 1 ? 0 : V, ee += pe.length + 1, te = pe + `
` + te;
            } else if (ce.end.row != ge) {
              var fe = o.session.getLine(ge + 1);
              ee = ce.end.row > ge + 1 ? fe.length : ee, ee += te.length + 1, te = te + `
` + fe;
            } else
              m && ge > 0 && (te = `
` + te, ee += 1, V += 1);
            te.length > r && (V < r && ee < r ? te = te.slice(0, r) : (te = `
`, V == ee ? V = ee = 0 : (V = 0, ee = 1)));
          }
          var ue = te + `

`;
          if (ue != A && (d.value = A = ue, R = T = ue.length), I && (R = d.selectionStart, T = d.selectionEnd), T != ee || R != V || d.selectionEnd != T)
            try {
              d.setSelectionRange(V, ee), R = V, T = ee;
            } catch {
            }
          p = !1;
        }
      };
      this.resetSelection = O, M && o.onFocus();
      var B = function(V) {
        return V.selectionStart === 0 && V.selectionEnd >= A.length && V.value === A && A && V.selectionEnd !== T;
      }, H = function(V) {
        p || (b ? b = !1 : B(d) ? (o.selectAll(), O()) : m && d.selectionStart != R && O());
      }, z = null;
      this.setInputHandler = function(V) {
        z = V;
      }, this.getInputHandler = function() {
        return z;
      };
      var I = !1, D = function(V, ee) {
        if (I && (I = !1), u)
          return O(), V && o.onPaste(V), u = !1, "";
        for (var te = d.selectionStart, oe = d.selectionEnd, ce = R, ge = A.length - T, pe = V, fe = V.length - te, ue = V.length - oe, le = 0; ce > 0 && A[le] == V[le]; )
          le++, ce--;
        for (pe = pe.slice(le), le = 1; ge > 0 && A.length - le > R - 1 && A[A.length - le] == V[V.length - le]; )
          le++, ge--;
        fe -= le - 1, ue -= le - 1;
        var Se = pe.length - le + 1;
        if (Se < 0 && (ce = -Se, Se = 0), pe = pe.slice(0, Se), !ee && !pe && !fe && !ce && !ge && !ue)
          return "";
        h = !0;
        var Be = !1;
        return k.isAndroid && pe == ". " && (pe = "  ", Be = !0), pe && !ce && !ge && !fe && !ue || C ? o.onTextInput(pe) : o.onTextInput(pe, {
          extendLeft: ce,
          extendRight: ge,
          restoreStart: fe,
          restoreEnd: ue
        }), h = !1, A = V, R = te, T = oe, E = ue, Be ? `
` : pe;
      }, P = function(V) {
        if (p)
          return se();
        if (V && V.inputType) {
          if (V.inputType == "historyUndo")
            return o.execCommand("undo");
          if (V.inputType == "historyRedo")
            return o.execCommand("redo");
        }
        var ee = d.value, te = D(ee, !0);
        (ee.length > r + 100 || g.test(te) || m && R < 1 && R == T) && O();
      }, U = function(V, ee, te) {
        var oe = V.clipboardData || window.clipboardData;
        if (!(!oe || t)) {
          var ce = e || te ? "Text" : "text/plain";
          try {
            return ee ? oe.setData(ce, ee) !== !1 : oe.getData(ce);
          } catch (ge) {
            if (!te)
              return U(ge, ee, !0);
          }
        }
      }, Z = function(V, ee) {
        var te = o.getCopyText();
        if (!te)
          return S.preventDefault(V);
        U(V, te) ? (c && (O(te), b = te, setTimeout(function() {
          b = !1;
        }, 10)), ee ? o.onCut() : o.onCopy(), S.preventDefault(V)) : (b = !0, d.value = te, d.select(), setTimeout(function() {
          b = !1, O(), ee ? o.onCut() : o.onCopy();
        }));
      }, K = function(V) {
        Z(V, !0);
      }, Q = function(V) {
        Z(V, !1);
      }, j = function(V) {
        var ee = U(V);
        l.pasteCancelled() || (typeof ee == "string" ? (ee && o.onPaste(ee, V), k.isIE && setTimeout(O), S.preventDefault(V)) : (d.value = "", u = !0));
      };
      S.addCommandKeyListener(d, o.onCommandKey.bind(o), o), S.addListener(d, "select", H, o), S.addListener(d, "input", P, o), S.addListener(d, "cut", K, o), S.addListener(d, "copy", Q, o), S.addListener(d, "paste", j, o), (!("oncut" in d) || !("oncopy" in d) || !("onpaste" in d)) && S.addListener(x, "keydown", function(V) {
        if (!(k.isMac && !V.metaKey || !V.ctrlKey))
          switch (V.keyCode) {
            case 67:
              Q(V);
              break;
            case 86:
              j(V);
              break;
            case 88:
              K(V);
              break;
          }
      }, o);
      var q = function(V) {
        if (!(p || !o.onCompositionStart || o.$readOnly) && (p = {}, !C)) {
          V.data && (p.useTextareaForIME = !1), setTimeout(se, 0), o._signal("compositionStart"), o.on("mousedown", de);
          var ee = o.getSelectionRange();
          ee.end.row = ee.start.row, ee.end.column = ee.start.column, p.markerRange = ee, p.selectionStart = R, o.onCompositionStart(p), p.useTextareaForIME ? (A = d.value = "", R = 0, T = 0) : (d.msGetInputContext && (p.context = d.msGetInputContext()), d.getInputContext && (p.context = d.getInputContext()));
        }
      }, se = function() {
        if (!(!p || !o.onCompositionUpdate || o.$readOnly)) {
          if (C)
            return de();
          if (p.useTextareaForIME)
            o.onCompositionUpdate(d.value);
          else {
            var V = d.value;
            D(V), p.markerRange && (p.context && (p.markerRange.start.column = p.selectionStart = p.context.compositionStartOffset), p.markerRange.end.column = p.markerRange.start.column + T - p.selectionStart + E);
          }
        }
      }, me = function(V) {
        !o.onCompositionEnd || o.$readOnly || (p = !1, o.onCompositionEnd(), o.off("mousedown", de), V && P());
      };
      function de() {
        _ = !0, d.blur(), d.focus(), _ = !1;
      }
      var ae = a.delayedCall(se, 50).schedule.bind(null, null);
      function be(V) {
        V.keyCode == 27 && d.value.length < d.selectionStart && (p || (A = d.value), R = T = -1, O()), ae();
      }
      S.addListener(d, "compositionstart", q, o), S.addListener(d, "compositionupdate", se, o), S.addListener(d, "keyup", be, o), S.addListener(d, "keydown", ae, o), S.addListener(d, "compositionend", me, o), this.getElement = function() {
        return d;
      }, this.setCommandMode = function(V) {
        C = V, d.readOnly = !1;
      }, this.setReadOnly = function(V) {
        C || (d.readOnly = V);
      }, this.setCopyWithEmptySelection = function(V) {
      }, this.onContextMenu = function(V) {
        I = !0, O(), o._emit("nativecontextmenu", { target: o, domEvent: V }), this.moveToMouse(V, !0);
      }, this.moveToMouse = function(V, ee) {
        v || (v = d.style.cssText), d.style.cssText = (ee ? "z-index:100000;" : "") + (k.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (R + T) * o.renderer.characterWidth * 0.5 + "px;";
        var te = o.container.getBoundingClientRect(), oe = f.computedStyle(o.container), ce = te.top + (parseInt(oe.borderTopWidth) || 0), ge = te.left + (parseInt(te.borderLeftWidth) || 0), pe = te.bottom - ce - d.clientHeight - 2, fe = function(ue) {
          f.translate(d, ue.clientX - ge - 2, Math.min(ue.clientY - ce - 2, pe));
        };
        fe(V), V.type == "mousedown" && (o.renderer.$isMousePressed = !0, clearTimeout(Ae), k.isWin && S.capture(o.container, fe, ye));
      }, this.onContextMenuClose = ye;
      var Ae;
      function ye() {
        clearTimeout(Ae), Ae = setTimeout(function() {
          v && (d.style.cssText = v, v = ""), o.renderer.$isMousePressed = !1, o.renderer.$keepTextAreaAtCursor && o.renderer.$moveTextAreaToCursor();
        }, 0);
      }
      var ze = function(V) {
        o.textInput.onContextMenu(V), ye();
      };
      S.addListener(d, "mouseup", ze, o), S.addListener(d, "mousedown", function(V) {
        V.preventDefault(), ye();
      }, o), S.addListener(o.renderer.scroller, "contextmenu", ze, o), S.addListener(d, "contextmenu", ze, o), c && ct(x, o, d);
      function ct(V, ee, te) {
        var oe = null, ce = !1;
        te.addEventListener("keydown", function(pe) {
          oe && clearTimeout(oe), ce = !0;
        }, !0), te.addEventListener("keyup", function(pe) {
          oe = setTimeout(function() {
            ce = !1;
          }, 100);
        }, !0);
        var ge = function(pe) {
          if (document.activeElement === te && !(ce || p || ee.$mouseHandler.isMousePressed) && !b) {
            var fe = te.selectionStart, ue = te.selectionEnd, le = null, Se = 0;
            if (fe == 0 ? le = i.up : fe == 1 ? le = i.home : ue > T && A[ue] == `
` ? le = i.end : fe < R && A[fe - 1] == " " ? (le = i.left, Se = s.option) : fe < R || fe == R && T != R && fe == ue ? le = i.left : ue > T && A.slice(0, ue).split(`
`).length > 2 ? le = i.down : ue > T && A[ue - 1] == " " ? (le = i.right, Se = s.option) : (ue > T || ue == T && T != R && fe == ue) && (le = i.right), fe !== ue && (Se |= s.shift), le) {
              var Be = ee.onCommandKey({}, Se, le);
              if (!Be && ee.commands) {
                le = i.keyCodeToString(le);
                var Ye = ee.commands.findKeyCommand(Se, le);
                Ye && ee.execCommand(Ye);
              }
              R = fe, T = ue, O("");
            }
          }
        };
        document.addEventListener("selectionchange", ge), ee.on("destroy", function() {
          document.removeEventListener("selectionchange", ge);
        });
      }
      this.destroy = function() {
        d.parentElement && d.parentElement.removeChild(d);
      };
    };
    $.TextInput = y, $.$setUserAgentForTests = function(x, o) {
      m = x, c = o;
    };
  }), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(w, $, L) {
    var S = w("../lib/useragent"), k = 0, f = 550;
    function a(e) {
      e.$clickSelection = null;
      var n = e.editor;
      n.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), n.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), n.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), n.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), n.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
      var r = [
        "select",
        "startSelect",
        "selectEnd",
        "selectAllEnd",
        "selectByWordsEnd",
        "selectByLinesEnd",
        "dragWait",
        "dragWaitEnd",
        "focusWait"
      ];
      r.forEach(function(i) {
        e[i] = this[i];
      }, this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange");
    }
    (function() {
      this.onMouseDown = function(e) {
        var n = e.inSelection(), r = e.getDocumentPosition();
        this.mousedownEvent = e;
        var i = this.editor, s = e.getButton();
        if (s !== 0) {
          var c = i.getSelectionRange(), g = c.isEmpty();
          (g || s == 1) && i.selection.moveToPosition(r), s == 2 && (i.textInput.onContextMenu(e.domEvent), S.isMozilla || e.preventDefault());
          return;
        }
        if (this.mousedownEvent.time = Date.now(), n && !i.isFocused() && (i.focus(), this.$focusTimeout && !this.$clickSelection && !i.inMultiSelectMode)) {
          this.setState("focusWait"), this.captureMouse(e);
          return;
        }
        return this.captureMouse(e), this.startSelect(r, e.domEvent._clicks > 1), e.preventDefault();
      }, this.startSelect = function(e, n) {
        e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
        var r = this.editor;
        !this.mousedownEvent || (this.mousedownEvent.getShiftKey() ? r.selection.selectToPosition(e) : n || r.selection.moveToPosition(e), n || this.select(), r.renderer.scroller.setCapture && r.renderer.scroller.setCapture(), r.setStyle("ace_selecting"), this.setState("select"));
      }, this.select = function() {
        var e, n = this.editor, r = n.renderer.screenToTextCoordinates(this.x, this.y);
        if (this.$clickSelection) {
          var i = this.$clickSelection.comparePoint(r);
          if (i == -1)
            e = this.$clickSelection.end;
          else if (i == 1)
            e = this.$clickSelection.start;
          else {
            var s = t(this.$clickSelection, r);
            r = s.cursor, e = s.anchor;
          }
          n.selection.setSelectionAnchor(e.row, e.column);
        }
        n.selection.selectToPosition(r), n.renderer.scrollCursorIntoView();
      }, this.extendSelectionBy = function(e) {
        var n, r = this.editor, i = r.renderer.screenToTextCoordinates(this.x, this.y), s = r.selection[e](i.row, i.column);
        if (this.$clickSelection) {
          var c = this.$clickSelection.comparePoint(s.start), g = this.$clickSelection.comparePoint(s.end);
          if (c == -1 && g <= 0)
            n = this.$clickSelection.end, (s.end.row != i.row || s.end.column != i.column) && (i = s.start);
          else if (g == 1 && c >= 0)
            n = this.$clickSelection.start, (s.start.row != i.row || s.start.column != i.column) && (i = s.end);
          else if (c == -1 && g == 1)
            i = s.end, n = s.start;
          else {
            var m = t(this.$clickSelection, i);
            i = m.cursor, n = m.anchor;
          }
          r.selection.setSelectionAnchor(n.row, n.column);
        }
        r.selection.selectToPosition(i), r.renderer.scrollCursorIntoView();
      }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
        this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture();
      }, this.focusWait = function() {
        var e = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), n = Date.now();
        (e > k || n - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
      }, this.onDoubleClick = function(e) {
        var n = e.getDocumentPosition(), r = this.editor, i = r.session, s = i.getBracketRange(n);
        s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = r.selection.getWordRange(n.row, n.column), this.setState("selectByWords")), this.$clickSelection = s, this.select();
      }, this.onTripleClick = function(e) {
        var n = e.getDocumentPosition(), r = this.editor;
        this.setState("selectByLines");
        var i = r.getSelectionRange();
        i.isMultiLine() && i.contains(n.row, n.column) ? (this.$clickSelection = r.selection.getLineRange(i.start.row), this.$clickSelection.end = r.selection.getLineRange(i.end.row).end) : this.$clickSelection = r.selection.getLineRange(n.row), this.select();
      }, this.onQuadClick = function(e) {
        var n = this.editor;
        n.selectAll(), this.$clickSelection = n.getSelectionRange(), this.setState("selectAll");
      }, this.onMouseWheel = function(e) {
        if (!e.getAccelKey()) {
          e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
          var n = this.editor;
          this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
          var r = this.$lastScroll, i = e.domEvent.timeStamp, s = i - r.t, c = s ? e.wheelX / s : r.vx, g = s ? e.wheelY / s : r.vy;
          s < f && (c = (c + r.vx) / 2, g = (g + r.vy) / 2);
          var m = Math.abs(c / g), y = !1;
          if (m >= 1 && n.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (y = !0), m <= 1 && n.renderer.isScrollableBy(0, e.wheelY * e.speed) && (y = !0), y)
            r.allowed = i;
          else if (i - r.allowed < f) {
            var x = Math.abs(c) <= 1.5 * Math.abs(r.vx) && Math.abs(g) <= 1.5 * Math.abs(r.vy);
            x ? (y = !0, r.allowed = i) : r.allowed = 0;
          }
          if (r.t = i, r.vx = c, r.vy = g, y)
            return n.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop();
        }
      };
    }).call(a.prototype), $.DefaultHandlers = a;
    function l(e, n, r, i) {
      return Math.sqrt(Math.pow(r - e, 2) + Math.pow(i - n, 2));
    }
    function t(e, n) {
      if (e.start.row == e.end.row)
        var r = 2 * n.column - e.start.column - e.end.column;
      else if (e.start.row == e.end.row - 1 && !e.start.column && !e.end.column)
        var r = n.column - 4;
      else
        var r = 2 * n.row - e.start.row - e.end.row;
      return r < 0 ? { cursor: e.start, anchor: e.end } : { cursor: e.end, anchor: e.start };
    }
  }), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(w, $, L) {
    w("./lib/oop");
    var S = w("./lib/dom"), k = "ace_tooltip";
    function f(a) {
      this.isOpen = !1, this.$element = null, this.$parentNode = a;
    }
    (function() {
      this.$init = function() {
        return this.$element = S.createElement("div"), this.$element.className = k, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
      }, this.getElement = function() {
        return this.$element || this.$init();
      }, this.setText = function(a) {
        this.getElement().textContent = a;
      }, this.setHtml = function(a) {
        this.getElement().innerHTML = a;
      }, this.setPosition = function(a, l) {
        this.getElement().style.left = a + "px", this.getElement().style.top = l + "px";
      }, this.setClassName = function(a) {
        S.addCssClass(this.getElement(), a);
      }, this.show = function(a, l, t) {
        a != null && this.setText(a), l != null && t != null && this.setPosition(l, t), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
      }, this.hide = function() {
        this.isOpen && (this.getElement().style.display = "none", this.getElement().className = k, this.isOpen = !1);
      }, this.getHeight = function() {
        return this.getElement().offsetHeight;
      }, this.getWidth = function() {
        return this.getElement().offsetWidth;
      }, this.destroy = function() {
        this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
      };
    }).call(f.prototype), $.Tooltip = f;
  }), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(w, $, L) {
    var S = w("../lib/dom"), k = w("../lib/oop"), f = w("../lib/event"), a = w("../tooltip").Tooltip;
    function l(e) {
      var n = e.editor, r = n.renderer.$gutterLayer, i = new t(n.container);
      e.editor.setDefaultHandler("guttermousedown", function(o) {
        if (!(!n.isFocused() || o.getButton() != 0)) {
          var d = r.getRegion(o);
          if (d != "foldWidgets") {
            var b = o.getDocumentPosition().row, u = n.session.selection;
            if (o.getShiftKey())
              u.selectTo(b, 0);
            else {
              if (o.domEvent.detail == 2)
                return n.selectAll(), o.preventDefault();
              e.$clickSelection = n.selection.getLineRange(b);
            }
            return e.setState("selectByLines"), e.captureMouse(o), o.preventDefault();
          }
        }
      });
      var s, c, g;
      function m() {
        var o = c.getDocumentPosition().row, d = r.$annotations[o];
        if (!d)
          return y();
        var b = n.session.getLength();
        if (o == b) {
          var u = n.renderer.pixelToScreenCoordinates(0, c.y).row, p = c.$pos;
          if (u > n.session.documentToScreenRow(p.row, p.column))
            return y();
        }
        if (g != d) {
          g = d.text.join("<br/>"), i.setHtml(g);
          var h = d.className;
          if (h && i.setClassName(h.trim()), i.show(), n._signal("showGutterTooltip", i), n.on("mousewheel", y), e.$tooltipFollowsMouse)
            x(c);
          else {
            var v = c.domEvent.target, C = v.getBoundingClientRect(), _ = i.getElement().style;
            _.left = C.right + "px", _.top = C.bottom + "px";
          }
        }
      }
      function y() {
        s && (s = clearTimeout(s)), g && (i.hide(), g = null, n._signal("hideGutterTooltip", i), n.off("mousewheel", y));
      }
      function x(o) {
        i.setPosition(o.x, o.y);
      }
      e.editor.setDefaultHandler("guttermousemove", function(o) {
        var d = o.domEvent.target || o.domEvent.srcElement;
        if (S.hasCssClass(d, "ace_fold-widget"))
          return y();
        g && e.$tooltipFollowsMouse && x(o), c = o, !s && (s = setTimeout(function() {
          s = null, c && !e.isMousePressed ? m() : y();
        }, 50));
      }), f.addListener(n.renderer.$gutter, "mouseout", function(o) {
        c = null, !(!g || s) && (s = setTimeout(function() {
          s = null, y();
        }, 50));
      }, n), n.on("changeSession", y);
    }
    function t(e) {
      a.call(this, e);
    }
    k.inherits(t, a), function() {
      this.setPosition = function(e, n) {
        var r = window.innerWidth || document.documentElement.clientWidth, i = window.innerHeight || document.documentElement.clientHeight, s = this.getWidth(), c = this.getHeight();
        e += 15, n += 15, e + s > r && (e -= e + s - r), n + c > i && (n -= 20 + c), a.prototype.setPosition.call(this, e, n);
      };
    }.call(t.prototype), $.GutterHandler = l;
  }), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(w, $, L) {
    var S = w("../lib/event"), k = w("../lib/useragent"), f = $.MouseEvent = function(a, l) {
      this.domEvent = a, this.editor = l, this.x = this.clientX = a.clientX, this.y = this.clientY = a.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
    };
    (function() {
      this.stopPropagation = function() {
        S.stopPropagation(this.domEvent), this.propagationStopped = !0;
      }, this.preventDefault = function() {
        S.preventDefault(this.domEvent), this.defaultPrevented = !0;
      }, this.stop = function() {
        this.stopPropagation(), this.preventDefault();
      }, this.getDocumentPosition = function() {
        return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
      }, this.inSelection = function() {
        if (this.$inSelection !== null)
          return this.$inSelection;
        var a = this.editor, l = a.getSelectionRange();
        if (l.isEmpty())
          this.$inSelection = !1;
        else {
          var t = this.getDocumentPosition();
          this.$inSelection = l.contains(t.row, t.column);
        }
        return this.$inSelection;
      }, this.getButton = function() {
        return S.getButton(this.domEvent);
      }, this.getShiftKey = function() {
        return this.domEvent.shiftKey;
      }, this.getAccelKey = k.isMac ? function() {
        return this.domEvent.metaKey;
      } : function() {
        return this.domEvent.ctrlKey;
      };
    }).call(f.prototype);
  }), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(w, $, L) {
    var S = w("../lib/dom"), k = w("../lib/event"), f = w("../lib/useragent"), a = 200, l = 200, t = 5;
    function e(r) {
      var i = r.editor, s = S.createElement("div");
      s.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", s.textContent = "\xA0";
      var c = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
      c.forEach(function(I) {
        r[I] = this[I];
      }, this), i.on("mousedown", this.onMouseDown.bind(r));
      var g = i.container, m, y, x, o, d, b, u = 0, p, h, v, C, _;
      this.onDragStart = function(I) {
        if (this.cancelDrag || !g.draggable) {
          var D = this;
          return setTimeout(function() {
            D.startSelect(), D.captureMouse(I);
          }, 0), I.preventDefault();
        }
        d = i.getSelectionRange();
        var P = I.dataTransfer;
        P.effectAllowed = i.getReadOnly() ? "copy" : "copyMove", i.container.appendChild(s), P.setDragImage && P.setDragImage(s, 0, 0), setTimeout(function() {
          i.container.removeChild(s);
        }), P.clearData(), P.setData("Text", i.session.getTextRange()), h = !0, this.setState("drag");
      }, this.onDragEnd = function(I) {
        if (g.draggable = !1, h = !1, this.setState(null), !i.getReadOnly()) {
          var D = I.dataTransfer.dropEffect;
          !p && D == "move" && i.session.remove(i.getSelectionRange()), i.$resetCursorStyle();
        }
        this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
      }, this.onDragEnter = function(I) {
        if (!(i.getReadOnly() || !H(I.dataTransfer)))
          return y = I.clientX, x = I.clientY, m || E(), u++, I.dataTransfer.dropEffect = p = z(I), k.preventDefault(I);
      }, this.onDragOver = function(I) {
        if (!(i.getReadOnly() || !H(I.dataTransfer)))
          return y = I.clientX, x = I.clientY, m || (E(), u++), O !== null && (O = null), I.dataTransfer.dropEffect = p = z(I), k.preventDefault(I);
      }, this.onDragLeave = function(I) {
        if (u--, u <= 0 && m)
          return M(), p = null, k.preventDefault(I);
      }, this.onDrop = function(I) {
        if (!!b) {
          var D = I.dataTransfer;
          if (h)
            switch (p) {
              case "move":
                d.contains(b.row, b.column) ? d = {
                  start: b,
                  end: b
                } : d = i.moveText(d, b);
                break;
              case "copy":
                d = i.moveText(d, b, !0);
                break;
            }
          else {
            var P = D.getData("Text");
            d = {
              start: b,
              end: i.session.insert(b, P)
            }, i.focus(), p = null;
          }
          return M(), k.preventDefault(I);
        }
      }, k.addListener(g, "dragstart", this.onDragStart.bind(r), i), k.addListener(g, "dragend", this.onDragEnd.bind(r), i), k.addListener(g, "dragenter", this.onDragEnter.bind(r), i), k.addListener(g, "dragover", this.onDragOver.bind(r), i), k.addListener(g, "dragleave", this.onDragLeave.bind(r), i), k.addListener(g, "drop", this.onDrop.bind(r), i);
      function A(I, D) {
        var P = Date.now(), U = !D || I.row != D.row, Z = !D || I.column != D.column;
        if (!C || U || Z)
          i.moveCursorToPosition(I), C = P, _ = { x: y, y: x };
        else {
          var K = n(_.x, _.y, y, x);
          K > t ? C = null : P - C >= l && (i.renderer.scrollCursorIntoView(), C = null);
        }
      }
      function R(I, D) {
        var P = Date.now(), U = i.renderer.layerConfig.lineHeight, Z = i.renderer.layerConfig.characterWidth, K = i.renderer.scroller.getBoundingClientRect(), Q = {
          x: {
            left: y - K.left,
            right: K.right - y
          },
          y: {
            top: x - K.top,
            bottom: K.bottom - x
          }
        }, j = Math.min(Q.x.left, Q.x.right), q = Math.min(Q.y.top, Q.y.bottom), se = { row: I.row, column: I.column };
        j / Z <= 2 && (se.column += Q.x.left < Q.x.right ? -3 : 2), q / U <= 1 && (se.row += Q.y.top < Q.y.bottom ? -1 : 1);
        var me = I.row != se.row, de = I.column != se.column, ae = !D || I.row != D.row;
        me || de && !ae ? v ? P - v >= a && i.renderer.scrollCursorIntoView(se) : v = P : v = null;
      }
      function T() {
        var I = b;
        b = i.renderer.screenToTextCoordinates(y, x), A(b, I), R(b, I);
      }
      function E() {
        d = i.selection.toOrientedRange(), m = i.session.addMarker(d, "ace_selection", i.getSelectionStyle()), i.clearSelection(), i.isFocused() && i.renderer.$cursorLayer.setBlinking(!1), clearInterval(o), T(), o = setInterval(T, 20), u = 0, k.addListener(document, "mousemove", B);
      }
      function M() {
        clearInterval(o), i.session.removeMarker(m), m = null, i.selection.fromOrientedRange(d), i.isFocused() && !h && i.$resetCursorStyle(), d = null, b = null, u = 0, v = null, C = null, k.removeListener(document, "mousemove", B);
      }
      var O = null;
      function B() {
        O == null && (O = setTimeout(function() {
          O != null && m && M();
        }, 20));
      }
      function H(I) {
        var D = I.types;
        return !D || Array.prototype.some.call(D, function(P) {
          return P == "text/plain" || P == "Text";
        });
      }
      function z(I) {
        var D = ["copy", "copymove", "all", "uninitialized"], P = ["move", "copymove", "linkmove", "all", "uninitialized"], U = f.isMac ? I.altKey : I.ctrlKey, Z = "uninitialized";
        try {
          Z = I.dataTransfer.effectAllowed.toLowerCase();
        } catch {
        }
        var K = "none";
        return U && D.indexOf(Z) >= 0 ? K = "copy" : P.indexOf(Z) >= 0 ? K = "move" : D.indexOf(Z) >= 0 && (K = "copy"), K;
      }
    }
    (function() {
      this.dragWait = function() {
        var r = Date.now() - this.mousedownEvent.time;
        r > this.editor.getDragDelay() && this.startDrag();
      }, this.dragWaitEnd = function() {
        var r = this.editor.container;
        r.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
      }, this.dragReadyEnd = function(r) {
        this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
      }, this.startDrag = function() {
        this.cancelDrag = !1;
        var r = this.editor, i = r.container;
        i.draggable = !0, r.renderer.$cursorLayer.setBlinking(!1), r.setStyle("ace_dragging");
        var s = f.isWin ? "default" : "move";
        r.renderer.setCursorStyle(s), this.setState("dragReady");
      }, this.onMouseDrag = function(r) {
        var i = this.editor.container;
        if (f.isIE && this.state == "dragReady") {
          var s = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
          s > 3 && i.dragDrop();
        }
        if (this.state === "dragWait") {
          var s = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
          s > 0 && (i.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
        }
      }, this.onMouseDown = function(r) {
        if (!!this.$dragEnabled) {
          this.mousedownEvent = r;
          var i = this.editor, s = r.inSelection(), c = r.getButton(), g = r.domEvent.detail || 1;
          if (g === 1 && c === 0 && s) {
            if (r.editor.inMultiSelectMode && (r.getAccelKey() || r.getShiftKey()))
              return;
            this.mousedownEvent.time = Date.now();
            var m = r.domEvent.target || r.domEvent.srcElement;
            if ("unselectable" in m && (m.unselectable = "on"), i.getDragDelay()) {
              if (f.isWebKit) {
                this.cancelDrag = !0;
                var y = i.container;
                y.draggable = !0;
              }
              this.setState("dragWait");
            } else
              this.startDrag();
            this.captureMouse(r, this.onMouseDrag.bind(this)), r.defaultPrevented = !0;
          }
        }
      };
    }).call(e.prototype);
    function n(r, i, s, c) {
      return Math.sqrt(Math.pow(s - r, 2) + Math.pow(c - i, 2));
    }
    $.DragdropHandler = e;
  }), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(w, $, L) {
    var S = w("./mouse_event").MouseEvent, k = w("../lib/event"), f = w("../lib/dom");
    $.addTouchListeners = function(a, l) {
      var t = "scroll", e, n, r, i, s, c, g = 0, m, y = 0, x = 0, o = 0, d, b;
      function u() {
        var A = window.navigator && window.navigator.clipboard, R = !1, T = function() {
          var M = l.getCopyText(), O = l.session.getUndoManager().hasUndo();
          b.replaceChild(f.buildDom(R ? [
            "span",
            !M && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
            M && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
            M && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
            A && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
            O && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
            ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
            ["span", { class: "ace_mobile-button", action: "openCommandPallete" }, "Palette"]
          ] : ["span"]), b.firstChild);
        }, E = function(M) {
          var O = M.target.getAttribute("action");
          if (O == "more" || !R)
            return R = !R, T();
          O == "paste" ? A.readText().then(function(B) {
            l.execCommand(O, B);
          }) : O && ((O == "cut" || O == "copy") && (A ? A.writeText(l.getCopyText()) : document.execCommand("copy")), l.execCommand(O)), b.firstChild.style.display = "none", R = !1, O != "openCommandPallete" && l.focus();
        };
        b = f.buildDom([
          "div",
          {
            class: "ace_mobile-menu",
            ontouchstart: function(M) {
              t = "menu", M.stopPropagation(), M.preventDefault(), l.textInput.focus();
            },
            ontouchend: function(M) {
              M.stopPropagation(), M.preventDefault(), E(M);
            },
            onclick: E
          },
          ["span"],
          ["span", { class: "ace_mobile-button", action: "more" }, "..."]
        ], l.container);
      }
      function p() {
        b || u();
        var A = l.selection.cursor, R = l.renderer.textToScreenCoordinates(A.row, A.column), T = l.renderer.textToScreenCoordinates(0, 0).pageX, E = l.renderer.scrollLeft, M = l.container.getBoundingClientRect();
        b.style.top = R.pageY - M.top - 3 + "px", R.pageX - M.left < M.width - 70 ? (b.style.left = "", b.style.right = "10px") : (b.style.right = "", b.style.left = T + E - M.left + "px"), b.style.display = "", b.firstChild.style.display = "none", l.on("input", h);
      }
      function h(A) {
        b && (b.style.display = "none"), l.off("input", h);
      }
      function v() {
        s = null, clearTimeout(s);
        var A = l.selection.getRange(), R = A.contains(m.row, m.column);
        (A.isEmpty() || !R) && (l.selection.moveToPosition(m), l.selection.selectWord()), t = "wait", p();
      }
      function C() {
        s = null, clearTimeout(s), l.selection.moveToPosition(m);
        var A = y >= 2 ? l.selection.getLineRange(m.row) : l.session.getBracketRange(m);
        A && !A.isEmpty() ? l.selection.setRange(A) : l.selection.selectWord(), t = "wait";
      }
      k.addListener(a, "contextmenu", function(A) {
        if (!!d) {
          var R = l.textInput.getElement();
          R.focus();
        }
      }, l), k.addListener(a, "touchstart", function(A) {
        var R = A.touches;
        if (s || R.length > 1) {
          clearTimeout(s), s = null, r = -1, t = "zoom";
          return;
        }
        d = l.$mouseHandler.isMousePressed = !0;
        var T = l.renderer.layerConfig.lineHeight, E = l.renderer.layerConfig.lineHeight, M = A.timeStamp;
        i = M;
        var O = R[0], B = O.clientX, H = O.clientY;
        Math.abs(e - B) + Math.abs(n - H) > T && (r = -1), e = A.clientX = B, n = A.clientY = H, x = o = 0;
        var z = new S(A, l);
        if (m = z.getDocumentPosition(), M - r < 500 && R.length == 1 && !g)
          y++, A.preventDefault(), A.button = 0, C();
        else {
          y = 0;
          var I = l.selection.cursor, D = l.selection.isEmpty() ? I : l.selection.anchor, P = l.renderer.$cursorLayer.getPixelPosition(I, !0), U = l.renderer.$cursorLayer.getPixelPosition(D, !0), Z = l.renderer.scroller.getBoundingClientRect(), K = l.renderer.layerConfig.offset, Q = l.renderer.scrollLeft, j = function(me, de) {
            return me = me / E, de = de / T - 0.75, me * me + de * de;
          };
          if (A.clientX < Z.left) {
            t = "zoom";
            return;
          }
          var q = j(A.clientX - Z.left - P.left + Q, A.clientY - Z.top - P.top + K), se = j(A.clientX - Z.left - U.left + Q, A.clientY - Z.top - U.top + K);
          q < 3.5 && se < 3.5 && (t = q > se ? "cursor" : "anchor"), se < 3.5 ? t = "anchor" : q < 3.5 ? t = "cursor" : t = "scroll", s = setTimeout(v, 450);
        }
        r = M;
      }, l), k.addListener(a, "touchend", function(A) {
        d = l.$mouseHandler.isMousePressed = !1, c && clearInterval(c), t == "zoom" ? (t = "", g = 0) : s ? (l.selection.moveToPosition(m), g = 0, p()) : t == "scroll" ? (_(), h()) : p(), clearTimeout(s), s = null;
      }, l), k.addListener(a, "touchmove", function(A) {
        s && (clearTimeout(s), s = null);
        var R = A.touches;
        if (!(R.length > 1 || t == "zoom")) {
          var T = R[0], E = e - T.clientX, M = n - T.clientY;
          if (t == "wait")
            if (E * E + M * M > 4)
              t = "cursor";
            else
              return A.preventDefault();
          e = T.clientX, n = T.clientY, A.clientX = T.clientX, A.clientY = T.clientY;
          var O = A.timeStamp, B = O - i;
          if (i = O, t == "scroll") {
            var H = new S(A, l);
            H.speed = 1, H.wheelX = E, H.wheelY = M, 10 * Math.abs(E) < Math.abs(M) && (E = 0), 10 * Math.abs(M) < Math.abs(E) && (M = 0), B != 0 && (x = E / B, o = M / B), l._emit("mousewheel", H), H.propagationStopped || (x = o = 0);
          } else {
            var z = new S(A, l), I = z.getDocumentPosition();
            t == "cursor" ? l.selection.moveCursorToPosition(I) : t == "anchor" && l.selection.setSelectionAnchor(I.row, I.column), l.renderer.scrollCursorIntoView(I), A.preventDefault();
          }
        }
      }, l);
      function _() {
        g += 60, c = setInterval(function() {
          g-- <= 0 && (clearInterval(c), c = null), Math.abs(x) < 0.01 && (x = 0), Math.abs(o) < 0.01 && (o = 0), g < 20 && (x = 0.9 * x), g < 20 && (o = 0.9 * o);
          var A = l.session.getScrollTop();
          l.renderer.scrollBy(10 * x, 10 * o), A == l.session.getScrollTop() && (g = 0);
        }, 10);
      }
    };
  }), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(w, $, L) {
    var S = w("../lib/event"), k = w("../lib/useragent"), f = w("./default_handlers").DefaultHandlers, a = w("./default_gutter_handler").GutterHandler, l = w("./mouse_event").MouseEvent, t = w("./dragdrop_handler").DragdropHandler, e = w("./touch_handler").addTouchListeners, n = w("../config"), r = function(i) {
      var s = this;
      this.editor = i, new f(this), new a(this), new t(this);
      var c = function(y) {
        var x = !document.hasFocus || !document.hasFocus() || !i.isFocused() && document.activeElement == (i.textInput && i.textInput.getElement());
        x && window.focus(), i.focus(), setTimeout(function() {
          i.isFocused() || i.focus();
        });
      }, g = i.renderer.getMouseEventTarget();
      S.addListener(g, "click", this.onMouseEvent.bind(this, "click"), i), S.addListener(g, "mousemove", this.onMouseMove.bind(this, "mousemove"), i), S.addMultiMouseDownListener([
        g,
        i.renderer.scrollBarV && i.renderer.scrollBarV.inner,
        i.renderer.scrollBarH && i.renderer.scrollBarH.inner,
        i.textInput && i.textInput.getElement()
      ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", i), S.addMouseWheelListener(i.container, this.onMouseWheel.bind(this, "mousewheel"), i), e(i.container, i);
      var m = i.renderer.$gutter;
      S.addListener(m, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), i), S.addListener(m, "click", this.onMouseEvent.bind(this, "gutterclick"), i), S.addListener(m, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), i), S.addListener(m, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), i), S.addListener(g, "mousedown", c, i), S.addListener(m, "mousedown", c, i), k.isIE && i.renderer.scrollBarV && (S.addListener(i.renderer.scrollBarV.element, "mousedown", c, i), S.addListener(i.renderer.scrollBarH.element, "mousedown", c, i)), i.on("mousemove", function(y) {
        if (!(s.state || s.$dragDelay || !s.$dragEnabled)) {
          var x = i.renderer.screenToTextCoordinates(y.x, y.y), o = i.session.selection.getRange(), d = i.renderer;
          !o.isEmpty() && o.insideStart(x.row, x.column) ? d.setCursorStyle("default") : d.setCursorStyle("");
        }
      }, i);
    };
    (function() {
      this.onMouseEvent = function(i, s) {
        !this.editor.session || this.editor._emit(i, new l(s, this.editor));
      }, this.onMouseMove = function(i, s) {
        var c = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
        !c || !c.length || this.editor._emit(i, new l(s, this.editor));
      }, this.onMouseWheel = function(i, s) {
        var c = new l(s, this.editor);
        c.speed = this.$scrollSpeed * 2, c.wheelX = s.wheelX, c.wheelY = s.wheelY, this.editor._emit(i, c);
      }, this.setState = function(i) {
        this.state = i;
      }, this.captureMouse = function(i, s) {
        this.x = i.x, this.y = i.y, this.isMousePressed = !0;
        var c = this.editor, g = this.editor.renderer;
        g.$isMousePressed = !0;
        var m = this, y = function(u) {
          if (!!u) {
            if (k.isWebKit && !u.which && m.releaseMouse)
              return m.releaseMouse();
            m.x = u.clientX, m.y = u.clientY, s && s(u), m.mouseEvent = new l(u, m.editor), m.$mouseMoved = !0;
          }
        }, x = function(u) {
          c.off("beforeEndOperation", d), clearInterval(b), c.session && o(), m[m.state + "End"] && m[m.state + "End"](u), m.state = "", m.isMousePressed = g.$isMousePressed = !1, g.$keepTextAreaAtCursor && g.$moveTextAreaToCursor(), m.$onCaptureMouseMove = m.releaseMouse = null, u && m.onMouseEvent("mouseup", u), c.endOperation();
        }, o = function() {
          m[m.state] && m[m.state](), m.$mouseMoved = !1;
        };
        if (k.isOldIE && i.domEvent.type == "dblclick")
          return setTimeout(function() {
            x(i);
          });
        var d = function(u) {
          !m.releaseMouse || c.curOp.command.name && c.curOp.selectionChanged && (m[m.state + "End"] && m[m.state + "End"](), m.state = "", m.releaseMouse());
        };
        c.on("beforeEndOperation", d), c.startOperation({ command: { name: "mouse" } }), m.$onCaptureMouseMove = y, m.releaseMouse = S.capture(this.editor.container, y, x);
        var b = setInterval(o, 20);
      }, this.releaseMouse = null, this.cancelContextMenu = function() {
        var i = function(s) {
          s && s.domEvent && s.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", i), s && s.domEvent && S.stopEvent(s.domEvent));
        }.bind(this);
        setTimeout(i, 10), this.editor.on("nativecontextmenu", i);
      }, this.destroy = function() {
        this.releaseMouse && this.releaseMouse();
      };
    }).call(r.prototype), n.defineOptions(r.prototype, "mouseHandler", {
      scrollSpeed: { initialValue: 2 },
      dragDelay: { initialValue: k.isMac ? 150 : 0 },
      dragEnabled: { initialValue: !0 },
      focusTimeout: { initialValue: 0 },
      tooltipFollowsMouse: { initialValue: !0 }
    }), $.MouseHandler = r;
  }), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(w, $, L) {
    var S = w("../lib/dom");
    function k(f) {
      f.on("click", function(a) {
        var l = a.getDocumentPosition(), t = f.session, e = t.getFoldAt(l.row, l.column, 1);
        e && (a.getAccelKey() ? t.removeFold(e) : t.expandFold(e), a.stop());
        var n = a.domEvent && a.domEvent.target;
        n && S.hasCssClass(n, "ace_inline_button") && S.hasCssClass(n, "ace_toggle_wrap") && (t.setOption("wrap", !t.getUseWrapMode()), f.renderer.scrollCursorIntoView());
      }), f.on("gutterclick", function(a) {
        var l = f.renderer.$gutterLayer.getRegion(a);
        if (l == "foldWidgets") {
          var t = a.getDocumentPosition().row, e = f.session;
          e.foldWidgets && e.foldWidgets[t] && f.session.onFoldWidgetClick(t, a), f.isFocused() || f.focus(), a.stop();
        }
      }), f.on("gutterdblclick", function(a) {
        var l = f.renderer.$gutterLayer.getRegion(a);
        if (l == "foldWidgets") {
          var t = a.getDocumentPosition().row, e = f.session, n = e.getParentFoldRangeData(t, !0), r = n.range || n.firstRange;
          if (r) {
            t = r.start.row;
            var i = e.getFoldAt(t, e.getLine(t).length, 1);
            i ? e.removeFold(i) : (e.addFold("...", r), f.renderer.scrollCursorIntoView({ row: r.start.row, column: 0 }));
          }
          a.stop();
        }
      });
    }
    $.FoldHandler = k;
  }), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(w, $, L) {
    var S = w("../lib/keys"), k = w("../lib/event"), f = function(a) {
      this.$editor = a, this.$data = { editor: a }, this.$handlers = [], this.setDefaultHandler(a.commands);
    };
    (function() {
      this.setDefaultHandler = function(a) {
        this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = a, this.addKeyboardHandler(a, 0);
      }, this.setKeyboardHandler = function(a) {
        var l = this.$handlers;
        if (l[l.length - 1] != a) {
          for (; l[l.length - 1] && l[l.length - 1] != this.$defaultHandler; )
            this.removeKeyboardHandler(l[l.length - 1]);
          this.addKeyboardHandler(a, 1);
        }
      }, this.addKeyboardHandler = function(a, l) {
        if (!!a) {
          typeof a == "function" && !a.handleKeyboard && (a.handleKeyboard = a);
          var t = this.$handlers.indexOf(a);
          t != -1 && this.$handlers.splice(t, 1), l == null ? this.$handlers.push(a) : this.$handlers.splice(l, 0, a), t == -1 && a.attach && a.attach(this.$editor);
        }
      }, this.removeKeyboardHandler = function(a) {
        var l = this.$handlers.indexOf(a);
        return l == -1 ? !1 : (this.$handlers.splice(l, 1), a.detach && a.detach(this.$editor), !0);
      }, this.getKeyboardHandler = function() {
        return this.$handlers[this.$handlers.length - 1];
      }, this.getStatusText = function() {
        var a = this.$data, l = a.editor;
        return this.$handlers.map(function(t) {
          return t.getStatusText && t.getStatusText(l, a) || "";
        }).filter(Boolean).join(" ");
      }, this.$callKeyboardHandlers = function(a, l, t, e) {
        for (var n, r = !1, i = this.$editor.commands, s = this.$handlers.length; s-- && (n = this.$handlers[s].handleKeyboard(this.$data, a, l, t, e), !(!(!n || !n.command) && (n.command == "null" ? r = !0 : r = i.exec(n.command, this.$editor, n.args, e), r && e && a != -1 && n.passEvent != !0 && n.command.passEvent != !0 && k.stopEvent(e), r))); )
          ;
        return !r && a == -1 && (n = { command: "insertstring" }, r = i.exec("insertstring", this.$editor, l)), r && this.$editor._signal && this.$editor._signal("keyboardActivity", n), r;
      }, this.onCommandKey = function(a, l, t) {
        var e = S.keyCodeToString(t);
        return this.$callKeyboardHandlers(l, e, t, a);
      }, this.onTextInput = function(a) {
        return this.$callKeyboardHandlers(-1, a);
      };
    }).call(f.prototype), $.KeyBinding = f;
  }), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(w, $, L) {
    var S = 0, k = 0, f = !1, a = !1, l = !1, t = [
      [0, 3, 0, 1, 0, 0, 0],
      [0, 3, 0, 1, 2, 2, 0],
      [0, 3, 0, 17, 2, 0, 1],
      [0, 3, 5, 5, 4, 1, 0],
      [0, 3, 21, 21, 4, 0, 1],
      [0, 3, 5, 5, 4, 2, 0]
    ], e = [
      [2, 0, 1, 1, 0, 1, 0],
      [2, 0, 1, 1, 0, 2, 0],
      [2, 0, 2, 1, 3, 2, 0],
      [2, 0, 2, 33, 3, 1, 1]
    ], n = 0, r = 1, i = 0, s = 1, c = 2, g = 3, m = 4, y = 5, x = 6, o = 7, d = 8, b = 9, u = 10, p = 11, h = 12, v = 13, C = 14, _ = 15, A = 16, R = 17, T = 18, E = [
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      x,
      y,
      x,
      d,
      y,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      y,
      y,
      y,
      x,
      d,
      m,
      m,
      p,
      p,
      p,
      m,
      m,
      m,
      m,
      m,
      u,
      b,
      u,
      b,
      b,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      c,
      b,
      m,
      m,
      m,
      m,
      m,
      m,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      m,
      m,
      m,
      m,
      m,
      m,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      i,
      m,
      m,
      m,
      m,
      T,
      T,
      T,
      T,
      T,
      T,
      y,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      T,
      b,
      m,
      p,
      p,
      p,
      p,
      m,
      m,
      m,
      m,
      i,
      m,
      m,
      T,
      m,
      m,
      p,
      p,
      c,
      c,
      m,
      i,
      m,
      m,
      m,
      c,
      i,
      m,
      m,
      m,
      m,
      m
    ], M = [
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      d,
      T,
      T,
      T,
      i,
      s,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      d,
      y,
      v,
      C,
      _,
      A,
      R,
      b,
      p,
      p,
      p,
      p,
      p,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      b,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      m,
      d
    ];
    function O(I, D, P, U) {
      var Z = S ? e : t, K = null, Q = null, j = null, q = 0, se = null, me = null, de = -1, ae = null, be = null, Ae = [];
      if (!U)
        for (ae = 0, U = []; ae < P; ae++)
          U[ae] = z(I[ae]);
      for (k = S, f = !1, a = !1, l = !1, be = 0; be < P; be++) {
        if (K = q, Ae[be] = Q = H(I, U, Ae, be), q = Z[K][Q], se = q & 240, q &= 15, D[be] = j = Z[q][5], se > 0)
          if (se == 16) {
            for (ae = de; ae < be; ae++)
              D[ae] = 1;
            de = -1;
          } else
            de = -1;
        if (me = Z[q][6], me)
          de == -1 && (de = be);
        else if (de > -1) {
          for (ae = de; ae < be; ae++)
            D[ae] = j;
          de = -1;
        }
        U[be] == y && (D[be] = 0), k |= j;
      }
      if (l) {
        for (ae = 0; ae < P; ae++)
          if (U[ae] == x) {
            D[ae] = S;
            for (var ye = ae - 1; ye >= 0 && U[ye] == d; ye--)
              D[ye] = S;
          }
      }
    }
    function B(I, D, P) {
      if (!(k < I)) {
        if (I == 1 && S == r && !a) {
          P.reverse();
          return;
        }
        for (var U = P.length, Z = 0, K, Q, j, q; Z < U; ) {
          if (D[Z] >= I) {
            for (K = Z + 1; K < U && D[K] >= I; )
              K++;
            for (Q = Z, j = K - 1; Q < j; Q++, j--)
              q = P[Q], P[Q] = P[j], P[j] = q;
            Z = K;
          }
          Z++;
        }
      }
    }
    function H(I, D, P, U) {
      var Z = D[U], K, Q, j, q;
      switch (Z) {
        case i:
        case s:
          f = !1;
        case m:
        case g:
          return Z;
        case c:
          return f ? g : c;
        case o:
          return f = !0, s;
        case d:
          return m;
        case b:
          return U < 1 || U + 1 >= D.length || (K = P[U - 1]) != c && K != g || (Q = D[U + 1]) != c && Q != g ? m : (f && (Q = g), Q == K ? Q : m);
        case u:
          return K = U > 0 ? P[U - 1] : y, K == c && U + 1 < D.length && D[U + 1] == c ? c : m;
        case p:
          if (U > 0 && P[U - 1] == c)
            return c;
          if (f)
            return m;
          for (q = U + 1, j = D.length; q < j && D[q] == p; )
            q++;
          return q < j && D[q] == c ? c : m;
        case h:
          for (j = D.length, q = U + 1; q < j && D[q] == h; )
            q++;
          if (q < j) {
            var se = I[U], me = se >= 1425 && se <= 2303 || se == 64286;
            if (K = D[q], me && (K == s || K == o))
              return s;
          }
          return U < 1 || (K = D[U - 1]) == y ? m : P[U - 1];
        case y:
          return f = !1, a = !0, S;
        case x:
          return l = !0, m;
        case v:
        case C:
        case A:
        case R:
        case _:
          f = !1;
        case T:
          return m;
      }
    }
    function z(I) {
      var D = I.charCodeAt(0), P = D >> 8;
      return P == 0 ? D > 191 ? i : E[D] : P == 5 ? /[\u0591-\u05f4]/.test(I) ? s : i : P == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(I) ? h : /[\u0660-\u0669\u066b-\u066c]/.test(I) ? g : D == 1642 ? p : /[\u06f0-\u06f9]/.test(I) ? c : o : P == 32 && D <= 8287 ? M[D & 255] : P == 254 && D >= 65136 ? o : m;
    }
    $.L = i, $.R = s, $.EN = c, $.ON_R = 3, $.AN = 4, $.R_H = 5, $.B = 6, $.RLE = 7, $.DOT = "\xB7", $.doBidiReorder = function(I, D, P) {
      if (I.length < 2)
        return {};
      var U = I.split(""), Z = new Array(U.length), K = new Array(U.length), Q = [];
      S = P ? r : n, O(U, Q, U.length, D);
      for (var j = 0; j < Z.length; Z[j] = j, j++)
        ;
      B(2, Q, Z), B(1, Q, Z);
      for (var j = 0; j < Z.length - 1; j++)
        D[j] === g ? Q[j] = $.AN : Q[j] === s && (D[j] > o && D[j] < v || D[j] === m || D[j] === T) ? Q[j] = $.ON_R : j > 0 && U[j - 1] === "\u0644" && /\u0622|\u0623|\u0625|\u0627/.test(U[j]) && (Q[j - 1] = Q[j] = $.R_H, j++);
      U[U.length - 1] === $.DOT && (Q[U.length - 1] = $.B), U[0] === "\u202B" && (Q[0] = $.RLE);
      for (var j = 0; j < Z.length; j++)
        K[j] = Q[Z[j]];
      return { logicalFromVisual: Z, bidiLevels: K };
    }, $.hasBidiCharacters = function(I, D) {
      for (var P = !1, U = 0; U < I.length; U++)
        D[U] = z(I.charAt(U)), !P && (D[U] == s || D[U] == o || D[U] == g) && (P = !0);
      return P;
    }, $.getVisualFromLogicalIdx = function(I, D) {
      for (var P = 0; P < D.logicalFromVisual.length; P++)
        if (D.logicalFromVisual[P] == I)
          return P;
      return 0;
    };
  }), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(w, $, L) {
    var S = w("./lib/bidiutil"), k = w("./lib/lang"), f = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, a = function(l) {
      this.session = l, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = S, this.charWidths = [], this.EOL = "\xAC", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "\xB6", this.RLE = "\u202B", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = f.test(l.getValue());
    };
    (function() {
      this.isBidiRow = function(l, t, e) {
        return this.seenBidi ? (l !== this.currentRow && (this.currentRow = l, this.updateRowLine(t, e), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
      }, this.onChange = function(l) {
        this.seenBidi ? this.currentRow = null : l.action == "insert" && f.test(l.lines.join(`
`)) && (this.seenBidi = !0, this.currentRow = null);
      }, this.getDocumentRow = function() {
        var l = 0, t = this.session.$screenRowCache;
        if (t.length) {
          var e = this.session.$getRowCacheIndex(t, this.currentRow);
          e >= 0 && (l = this.session.$docRowCache[e]);
        }
        return l;
      }, this.getSplitIndex = function() {
        var l = 0, t = this.session.$screenRowCache;
        if (t.length)
          for (var e, n = this.session.$getRowCacheIndex(t, this.currentRow); this.currentRow - l > 0 && (e = this.session.$getRowCacheIndex(t, this.currentRow - l - 1), e === n); )
            n = e, l++;
        else
          l = this.currentRow;
        return l;
      }, this.updateRowLine = function(l, t) {
        l === void 0 && (l = this.getDocumentRow());
        var e = l === this.session.getLength() - 1, n = e ? this.EOF : this.EOL;
        if (this.wrapIndent = 0, this.line = this.session.getLine(l), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
          var r = this.session.$wrapData[l];
          r && (t === void 0 && (t = this.getSplitIndex()), t > 0 && r.length ? (this.wrapIndent = r.indent, this.wrapOffset = this.wrapIndent * this.charWidths[S.L], this.line = t < r.length ? this.line.substring(r[t - 1], r[t]) : this.line.substring(r[r.length - 1])) : this.line = this.line.substring(0, r[t]), t == r.length && (this.line += this.showInvisibles ? n : S.DOT));
        } else
          this.line += this.showInvisibles ? n : S.DOT;
        var i = this.session, s = 0, c;
        this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(g, m) {
          return g === "	" || i.isFullWidth(g.charCodeAt(0)) ? (c = g === "	" ? i.getScreenTabSize(m + s) : 2, s += c - 1, k.stringRepeat(S.DOT, c)) : g;
        }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == S.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
      }, this.updateBidiMap = function() {
        var l = [];
        S.hasBidiCharacters(this.line, l) || this.isRtlDir ? this.bidiMap = S.doBidiReorder(this.line, l, this.isRtlDir) : this.bidiMap = {};
      }, this.markAsDirty = function() {
        this.currentRow = null;
      }, this.updateCharacterWidths = function(l) {
        if (this.characterWidth !== l.$characterSize.width) {
          this.fontMetrics = l;
          var t = this.characterWidth = l.$characterSize.width, e = l.$measureCharWidth("\u05D4");
          this.charWidths[S.L] = this.charWidths[S.EN] = this.charWidths[S.ON_R] = t, this.charWidths[S.R] = this.charWidths[S.AN] = e, this.charWidths[S.R_H] = e * 0.45, this.charWidths[S.B] = this.charWidths[S.RLE] = 0, this.currentRow = null;
        }
      }, this.setShowInvisibles = function(l) {
        this.showInvisibles = l, this.currentRow = null;
      }, this.setEolChar = function(l) {
        this.EOL = l;
      }, this.setContentWidth = function(l) {
        this.contentWidth = l;
      }, this.isRtlLine = function(l) {
        return this.$isRtl ? !0 : l != null ? this.session.getLine(l).charAt(0) == this.RLE : this.isRtlDir;
      }, this.setRtlDirection = function(l, t) {
        for (var e = l.getCursorPosition(), n = l.selection.getSelectionAnchor().row; n <= e.row; n++)
          !t && l.session.getLine(n).charAt(0) === l.session.$bidiHandler.RLE ? l.session.doc.removeInLine(n, 0, 1) : t && l.session.getLine(n).charAt(0) !== l.session.$bidiHandler.RLE && l.session.doc.insert({ column: 0, row: n }, l.session.$bidiHandler.RLE);
      }, this.getPosLeft = function(l) {
        l -= this.wrapIndent;
        var t = this.line.charAt(0) === this.RLE ? 1 : 0, e = l > t ? this.session.getOverwrite() ? l : l - 1 : t, n = S.getVisualFromLogicalIdx(e, this.bidiMap), r = this.bidiMap.bidiLevels, i = 0;
        !this.session.getOverwrite() && l <= t && r[n] % 2 !== 0 && n++;
        for (var s = 0; s < n; s++)
          i += this.charWidths[r[s]];
        return !this.session.getOverwrite() && l > t && r[n] % 2 === 0 && (i += this.charWidths[r[n]]), this.wrapIndent && (i += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (i += this.rtlLineOffset), i;
      }, this.getSelections = function(l, t) {
        var e = this.bidiMap, n = e.bidiLevels, r, i = [], s = 0, c = Math.min(l, t) - this.wrapIndent, g = Math.max(l, t) - this.wrapIndent, m = !1, y = !1, x = 0;
        this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
        for (var o, d = 0; d < n.length; d++)
          o = e.logicalFromVisual[d], r = n[d], m = o >= c && o < g, m && !y ? x = s : !m && y && i.push({ left: x, width: s - x }), s += this.charWidths[r], y = m;
        if (m && d === n.length && i.push({ left: x, width: s - x }), this.isRtlDir)
          for (var b = 0; b < i.length; b++)
            i[b].left += this.rtlLineOffset;
        return i;
      }, this.offsetToCol = function(e) {
        this.isRtlDir && (e -= this.rtlLineOffset);
        var t = 0, e = Math.max(e, 0), n = 0, r = 0, i = this.bidiMap.bidiLevels, s = this.charWidths[i[r]];
        for (this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); e > n + s / 2; ) {
          if (n += s, r === i.length - 1) {
            s = 0;
            break;
          }
          s = this.charWidths[i[++r]];
        }
        return r > 0 && i[r - 1] % 2 !== 0 && i[r] % 2 === 0 ? (e < n && r--, t = this.bidiMap.logicalFromVisual[r]) : r > 0 && i[r - 1] % 2 === 0 && i[r] % 2 !== 0 ? t = 1 + (e > n ? this.bidiMap.logicalFromVisual[r] : this.bidiMap.logicalFromVisual[r - 1]) : this.isRtlDir && r === i.length - 1 && s === 0 && i[r - 1] % 2 === 0 || !this.isRtlDir && r === 0 && i[r] % 2 !== 0 ? t = 1 + this.bidiMap.logicalFromVisual[r] : (r > 0 && i[r - 1] % 2 !== 0 && s !== 0 && r--, t = this.bidiMap.logicalFromVisual[r]), t === 0 && this.isRtlDir && t++, t + this.wrapIndent;
      };
    }).call(a.prototype), $.BidiHandler = a;
  }), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/lang"), f = w("./lib/event_emitter").EventEmitter, a = w("./range").Range, l = function(t) {
      this.session = t, this.doc = t.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
      var e = this;
      this.cursor.on("change", function(n) {
        e.$cursorChanged = !0, e.$silent || e._emit("changeCursor"), !e.$isEmpty && !e.$silent && e._emit("changeSelection"), !e.$keepDesiredColumnOnChange && n.old.column != n.value.column && (e.$desiredColumn = null);
      }), this.anchor.on("change", function() {
        e.$anchorChanged = !0, !e.$isEmpty && !e.$silent && e._emit("changeSelection");
      });
    };
    (function() {
      S.implement(this, f), this.isEmpty = function() {
        return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
      }, this.isMultiLine = function() {
        return !this.$isEmpty && this.anchor.row != this.cursor.row;
      }, this.getCursor = function() {
        return this.lead.getPosition();
      }, this.setSelectionAnchor = function(t, e) {
        this.$isEmpty = !1, this.anchor.setPosition(t, e);
      }, this.getAnchor = this.getSelectionAnchor = function() {
        return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
      }, this.getSelectionLead = function() {
        return this.lead.getPosition();
      }, this.isBackwards = function() {
        var t = this.anchor, e = this.lead;
        return t.row > e.row || t.row == e.row && t.column > e.column;
      }, this.getRange = function() {
        var t = this.anchor, e = this.lead;
        return this.$isEmpty ? a.fromPoints(e, e) : this.isBackwards() ? a.fromPoints(e, t) : a.fromPoints(t, e);
      }, this.clearSelection = function() {
        this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
      }, this.selectAll = function() {
        this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
      }, this.setRange = this.setSelectionRange = function(t, e) {
        var n = e ? t.end : t.start, r = e ? t.start : t.end;
        this.$setSelection(n.row, n.column, r.row, r.column);
      }, this.$setSelection = function(t, e, n, r) {
        if (!this.$silent) {
          var i = this.$isEmpty, s = this.inMultiSelectMode;
          this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(t, e), this.cursor.setPosition(n, r), this.$isEmpty = !a.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || i != this.$isEmpty || s) && this._emit("changeSelection");
        }
      }, this.$moveSelection = function(t) {
        var e = this.lead;
        this.$isEmpty && this.setSelectionAnchor(e.row, e.column), t.call(this);
      }, this.selectTo = function(t, e) {
        this.$moveSelection(function() {
          this.moveCursorTo(t, e);
        });
      }, this.selectToPosition = function(t) {
        this.$moveSelection(function() {
          this.moveCursorToPosition(t);
        });
      }, this.moveTo = function(t, e) {
        this.clearSelection(), this.moveCursorTo(t, e);
      }, this.moveToPosition = function(t) {
        this.clearSelection(), this.moveCursorToPosition(t);
      }, this.selectUp = function() {
        this.$moveSelection(this.moveCursorUp);
      }, this.selectDown = function() {
        this.$moveSelection(this.moveCursorDown);
      }, this.selectRight = function() {
        this.$moveSelection(this.moveCursorRight);
      }, this.selectLeft = function() {
        this.$moveSelection(this.moveCursorLeft);
      }, this.selectLineStart = function() {
        this.$moveSelection(this.moveCursorLineStart);
      }, this.selectLineEnd = function() {
        this.$moveSelection(this.moveCursorLineEnd);
      }, this.selectFileEnd = function() {
        this.$moveSelection(this.moveCursorFileEnd);
      }, this.selectFileStart = function() {
        this.$moveSelection(this.moveCursorFileStart);
      }, this.selectWordRight = function() {
        this.$moveSelection(this.moveCursorWordRight);
      }, this.selectWordLeft = function() {
        this.$moveSelection(this.moveCursorWordLeft);
      }, this.getWordRange = function(t, e) {
        if (typeof e > "u") {
          var n = t || this.lead;
          t = n.row, e = n.column;
        }
        return this.session.getWordRange(t, e);
      }, this.selectWord = function() {
        this.setSelectionRange(this.getWordRange());
      }, this.selectAWord = function() {
        var t = this.getCursor(), e = this.session.getAWordRange(t.row, t.column);
        this.setSelectionRange(e);
      }, this.getLineRange = function(t, e) {
        var n = typeof t == "number" ? t : this.lead.row, r, i = this.session.getFoldLine(n);
        return i ? (n = i.start.row, r = i.end.row) : r = n, e === !0 ? new a(n, 0, r, this.session.getLine(r).length) : new a(n, 0, r + 1, 0);
      }, this.selectLine = function() {
        this.setSelectionRange(this.getLineRange());
      }, this.moveCursorUp = function() {
        this.moveCursorBy(-1, 0);
      }, this.moveCursorDown = function() {
        this.moveCursorBy(1, 0);
      }, this.wouldMoveIntoSoftTab = function(t, e, n) {
        var r = t.column, i = t.column + e;
        return n < 0 && (r = t.column - e, i = t.column), this.session.isTabStop(t) && this.doc.getLine(t.row).slice(r, i).split(" ").length - 1 == e;
      }, this.moveCursorLeft = function() {
        var t = this.lead.getPosition(), e;
        if (e = this.session.getFoldAt(t.row, t.column, -1))
          this.moveCursorTo(e.start.row, e.start.column);
        else if (t.column === 0)
          t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
        else {
          var n = this.session.getTabSize();
          this.wouldMoveIntoSoftTab(t, n, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -n) : this.moveCursorBy(0, -1);
        }
      }, this.moveCursorRight = function() {
        var t = this.lead.getPosition(), e;
        if (e = this.session.getFoldAt(t.row, t.column, 1))
          this.moveCursorTo(e.end.row, e.end.column);
        else if (this.lead.column == this.doc.getLine(this.lead.row).length)
          this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
        else {
          var n = this.session.getTabSize(), t = this.lead;
          this.wouldMoveIntoSoftTab(t, n, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, n) : this.moveCursorBy(0, 1);
        }
      }, this.moveCursorLineStart = function() {
        var t = this.lead.row, e = this.lead.column, n = this.session.documentToScreenRow(t, e), r = this.session.screenToDocumentPosition(n, 0), i = this.session.getDisplayLine(t, null, r.row, r.column), s = i.match(/^\s*/);
        s[0].length != e && !this.session.$useEmacsStyleLineStart && (r.column += s[0].length), this.moveCursorToPosition(r);
      }, this.moveCursorLineEnd = function() {
        var t = this.lead, e = this.session.getDocumentLastRowColumnPosition(t.row, t.column);
        if (this.lead.column == e.column) {
          var n = this.session.getLine(e.row);
          if (e.column == n.length) {
            var r = n.search(/\s+$/);
            r > 0 && (e.column = r);
          }
        }
        this.moveCursorTo(e.row, e.column);
      }, this.moveCursorFileEnd = function() {
        var t = this.doc.getLength() - 1, e = this.doc.getLine(t).length;
        this.moveCursorTo(t, e);
      }, this.moveCursorFileStart = function() {
        this.moveCursorTo(0, 0);
      }, this.moveCursorLongWordRight = function() {
        var t = this.lead.row, e = this.lead.column, n = this.doc.getLine(t), r = n.substring(e);
        this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
        var i = this.session.getFoldAt(t, e, 1);
        if (i) {
          this.moveCursorTo(i.end.row, i.end.column);
          return;
        }
        if (this.session.nonTokenRe.exec(r) && (e += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, r = n.substring(e)), e >= n.length) {
          this.moveCursorTo(t, n.length), this.moveCursorRight(), t < this.doc.getLength() - 1 && this.moveCursorWordRight();
          return;
        }
        this.session.tokenRe.exec(r) && (e += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, e);
      }, this.moveCursorLongWordLeft = function() {
        var t = this.lead.row, e = this.lead.column, n;
        if (n = this.session.getFoldAt(t, e, -1)) {
          this.moveCursorTo(n.start.row, n.start.column);
          return;
        }
        var r = this.session.getFoldStringAt(t, e, -1);
        r == null && (r = this.doc.getLine(t).substring(0, e));
        var i = k.stringReverse(r);
        if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(i) && (e -= this.session.nonTokenRe.lastIndex, i = i.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), e <= 0) {
          this.moveCursorTo(t, 0), this.moveCursorLeft(), t > 0 && this.moveCursorWordLeft();
          return;
        }
        this.session.tokenRe.exec(i) && (e -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, e);
      }, this.$shortWordEndIndex = function(t) {
        var e = 0, n, r = /\s/, i = this.session.tokenRe;
        if (i.lastIndex = 0, this.session.tokenRe.exec(t))
          e = this.session.tokenRe.lastIndex;
        else {
          for (; (n = t[e]) && r.test(n); )
            e++;
          if (e < 1) {
            for (i.lastIndex = 0; (n = t[e]) && !i.test(n); )
              if (i.lastIndex = 0, e++, r.test(n))
                if (e > 2) {
                  e--;
                  break;
                } else {
                  for (; (n = t[e]) && r.test(n); )
                    e++;
                  if (e > 2)
                    break;
                }
          }
        }
        return i.lastIndex = 0, e;
      }, this.moveCursorShortWordRight = function() {
        var t = this.lead.row, e = this.lead.column, n = this.doc.getLine(t), r = n.substring(e), i = this.session.getFoldAt(t, e, 1);
        if (i)
          return this.moveCursorTo(i.end.row, i.end.column);
        if (e == n.length) {
          var s = this.doc.getLength();
          do
            t++, r = this.doc.getLine(t);
          while (t < s && /^\s*$/.test(r));
          /^\s+/.test(r) || (r = ""), e = 0;
        }
        var c = this.$shortWordEndIndex(r);
        this.moveCursorTo(t, e + c);
      }, this.moveCursorShortWordLeft = function() {
        var t = this.lead.row, e = this.lead.column, n;
        if (n = this.session.getFoldAt(t, e, -1))
          return this.moveCursorTo(n.start.row, n.start.column);
        var r = this.session.getLine(t).substring(0, e);
        if (e === 0) {
          do
            t--, r = this.doc.getLine(t);
          while (t > 0 && /^\s*$/.test(r));
          e = r.length, /\s+$/.test(r) || (r = "");
        }
        var i = k.stringReverse(r), s = this.$shortWordEndIndex(i);
        return this.moveCursorTo(t, e - s);
      }, this.moveCursorWordRight = function() {
        this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
      }, this.moveCursorWordLeft = function() {
        this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
      }, this.moveCursorBy = function(t, e) {
        var n = this.session.documentToScreenPosition(this.lead.row, this.lead.column), r;
        if (e === 0 && (t !== 0 && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (r = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(r / this.session.$bidiHandler.charWidths[0])) : r = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column), t != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
          var i = this.session.lineWidgets[this.lead.row];
          t < 0 ? t -= i.rowsAbove || 0 : t > 0 && (t += i.rowCount - (i.rowsAbove || 0));
        }
        var s = this.session.screenToDocumentPosition(n.row + t, n.column, r);
        t !== 0 && e === 0 && s.row === this.lead.row && (s.column, this.lead.column), this.moveCursorTo(s.row, s.column + e, e === 0);
      }, this.moveCursorToPosition = function(t) {
        this.moveCursorTo(t.row, t.column);
      }, this.moveCursorTo = function(t, e, n) {
        var r = this.session.getFoldAt(t, e, 1);
        r && (t = r.start.row, e = r.start.column), this.$keepDesiredColumnOnChange = !0;
        var i = this.session.getLine(t);
        /[\uDC00-\uDFFF]/.test(i.charAt(e)) && i.charAt(e - 1) && (this.lead.row == t && this.lead.column == e + 1 ? e = e - 1 : e = e + 1), this.lead.setPosition(t, e), this.$keepDesiredColumnOnChange = !1, n || (this.$desiredColumn = null);
      }, this.moveCursorToScreen = function(t, e, n) {
        var r = this.session.screenToDocumentPosition(t, e);
        this.moveCursorTo(r.row, r.column, n);
      }, this.detach = function() {
        this.lead.detach(), this.anchor.detach();
      }, this.fromOrientedRange = function(t) {
        this.setSelectionRange(t, t.cursor == t.start), this.$desiredColumn = t.desiredColumn || this.$desiredColumn;
      }, this.toOrientedRange = function(t) {
        var e = this.getRange();
        return t ? (t.start.column = e.start.column, t.start.row = e.start.row, t.end.column = e.end.column, t.end.row = e.end.row) : t = e, t.cursor = this.isBackwards() ? t.start : t.end, t.desiredColumn = this.$desiredColumn, t;
      }, this.getRangeOfMovements = function(t) {
        var e = this.getCursor();
        try {
          t(this);
          var n = this.getCursor();
          return a.fromPoints(e, n);
        } catch {
          return a.fromPoints(e, e);
        } finally {
          this.moveCursorToPosition(e);
        }
      }, this.toJSON = function() {
        if (this.rangeCount)
          var t = this.ranges.map(function(e) {
            var n = e.clone();
            return n.isBackwards = e.cursor == e.start, n;
          });
        else {
          var t = this.getRange();
          t.isBackwards = this.isBackwards();
        }
        return t;
      }, this.fromJSON = function(t) {
        if (t.start == null)
          if (this.rangeList && t.length > 1) {
            this.toSingleRange(t[0]);
            for (var e = t.length; e--; ) {
              var n = a.fromPoints(t[e].start, t[e].end);
              t[e].isBackwards && (n.cursor = n.start), this.addRange(n, !0);
            }
            return;
          } else
            t = t[0];
        this.rangeList && this.toSingleRange(t), this.setSelectionRange(t, t.isBackwards);
      }, this.isEqual = function(t) {
        if ((t.length || this.rangeCount) && t.length != this.rangeCount)
          return !1;
        if (!t.length || !this.ranges)
          return this.getRange().isEqual(t);
        for (var e = this.ranges.length; e--; )
          if (!this.ranges[e].isEqual(t[e]))
            return !1;
        return !0;
      };
    }).call(l.prototype), $.Selection = l;
  }), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(w, $, L) {
    var S = w("./config"), k = 2e3, f = function(a) {
      this.states = a, this.regExps = {}, this.matchMappings = {};
      for (var l in this.states) {
        for (var t = this.states[l], e = [], n = 0, r = this.matchMappings[l] = { defaultToken: "text" }, i = "g", s = [], c = 0; c < t.length; c++) {
          var g = t[c];
          if (g.defaultToken && (r.defaultToken = g.defaultToken), g.caseInsensitive && i.indexOf("i") === -1 && (i += "i"), g.unicode && i.indexOf("u") === -1 && (i += "u"), g.regex != null) {
            g.regex instanceof RegExp && (g.regex = g.regex.toString().slice(1, -1));
            var m = g.regex, y = new RegExp("(?:(" + m + ")|(.))").exec("a").length - 2;
            Array.isArray(g.token) ? g.token.length == 1 || y == 1 ? g.token = g.token[0] : y - 1 != g.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
              rule: g,
              groupCount: y - 1
            }), g.token = g.token[0]) : (g.tokenArray = g.token, g.token = null, g.onMatch = this.$arrayTokens) : typeof g.token == "function" && !g.onMatch && (y > 1 ? g.onMatch = this.$applyToken : g.onMatch = g.token), y > 1 && (/\\\d/.test(g.regex) ? m = g.regex.replace(/\\([0-9]+)/g, function(x, o) {
              return "\\" + (parseInt(o, 10) + n + 1);
            }) : (y = 1, m = this.removeCapturingGroups(g.regex)), !g.splitRegex && typeof g.token != "string" && s.push(g)), r[n] = c, n += y, e.push(m), g.onMatch || (g.onMatch = null);
          }
        }
        e.length || (r[0] = 0, e.push("$")), s.forEach(function(x) {
          x.splitRegex = this.createSplitterRegexp(x.regex, i);
        }, this), this.regExps[l] = new RegExp("(" + e.join(")|(") + ")|($)", i);
      }
    };
    (function() {
      this.$setMaxTokenCount = function(a) {
        k = a | 0;
      }, this.$applyToken = function(a) {
        var l = this.splitRegex.exec(a).slice(1), t = this.token.apply(this, l);
        if (typeof t == "string")
          return [{ type: t, value: a }];
        for (var e = [], n = 0, r = t.length; n < r; n++)
          l[n] && (e[e.length] = {
            type: t[n],
            value: l[n]
          });
        return e;
      }, this.$arrayTokens = function(a) {
        if (!a)
          return [];
        var l = this.splitRegex.exec(a);
        if (!l)
          return "text";
        for (var t = [], e = this.tokenArray, n = 0, r = e.length; n < r; n++)
          l[n + 1] && (t[t.length] = {
            type: e[n],
            value: l[n + 1]
          });
        return t;
      }, this.removeCapturingGroups = function(a) {
        var l = a.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, function(t, e) {
          return e ? "(?:" : t;
        });
        return l;
      }, this.createSplitterRegexp = function(a, l) {
        if (a.indexOf("(?=") != -1) {
          var t = 0, e = !1, n = {};
          a.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(r, i, s, c, g, m) {
            return e ? e = g != "]" : g ? e = !0 : c ? (t == n.stack && (n.end = m + 1, n.stack = -1), t--) : s && (t++, s.length != 1 && (n.stack = t, n.start = m)), r;
          }), n.end != null && /^\)*$/.test(a.substr(n.end)) && (a = a.substring(0, n.start) + a.substr(n.end));
        }
        return a.charAt(0) != "^" && (a = "^" + a), a.charAt(a.length - 1) != "$" && (a += "$"), new RegExp(a, (l || "").replace("g", ""));
      }, this.getLineTokens = function(a, l) {
        if (l && typeof l != "string") {
          var t = l.slice(0);
          l = t[0], l === "#tmp" && (t.shift(), l = t.shift());
        } else
          var t = [];
        var e = l || "start", n = this.states[e];
        n || (e = "start", n = this.states[e]);
        var r = this.matchMappings[e], i = this.regExps[e];
        i.lastIndex = 0;
        for (var s, c = [], g = 0, m = 0, y = { type: null, value: "" }; s = i.exec(a); ) {
          var x = r.defaultToken, o = null, d = s[0], b = i.lastIndex;
          if (b - d.length > g) {
            var u = a.substring(g, b - d.length);
            y.type == x ? y.value += u : (y.type && c.push(y), y = { type: x, value: u });
          }
          for (var p = 0; p < s.length - 2; p++)
            if (s[p + 1] !== void 0) {
              o = n[r[p]], o.onMatch ? x = o.onMatch(d, e, t, a) : x = o.token, o.next && (typeof o.next == "string" ? e = o.next : e = o.next(e, t), n = this.states[e], n || (this.reportError("state doesn't exist", e), e = "start", n = this.states[e]), r = this.matchMappings[e], g = b, i = this.regExps[e], i.lastIndex = b), o.consumeLineEnd && (g = b);
              break;
            }
          if (d) {
            if (typeof x == "string")
              (!o || o.merge !== !1) && y.type === x ? y.value += d : (y.type && c.push(y), y = { type: x, value: d });
            else if (x) {
              y.type && c.push(y), y = { type: null, value: "" };
              for (var p = 0; p < x.length; p++)
                c.push(x[p]);
            }
          }
          if (g == a.length)
            break;
          if (g = b, m++ > k) {
            for (m > 2 * a.length && this.reportError("infinite loop with in ace tokenizer", {
              startState: l,
              line: a
            }); g < a.length; )
              y.type && c.push(y), y = {
                value: a.substring(g, g += 500),
                type: "overflow"
              };
            e = "start", t = [];
            break;
          }
        }
        return y.type && c.push(y), t.length > 1 && t[0] !== e && t.unshift("#tmp", e), {
          tokens: c,
          state: t.length ? t : e
        };
      }, this.reportError = S.reportError;
    }).call(f.prototype), $.Tokenizer = f;
  }), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(w, $, L) {
    var S = w("../lib/lang"), k = function() {
      this.$rules = {
        start: [{
          token: "empty_line",
          regex: "^$"
        }, {
          defaultToken: "text"
        }]
      };
    };
    (function() {
      this.addRules = function(l, t) {
        if (!t) {
          for (var e in l)
            this.$rules[e] = l[e];
          return;
        }
        for (var e in l) {
          for (var n = l[e], r = 0; r < n.length; r++) {
            var i = n[r];
            (i.next || i.onMatch) && (typeof i.next == "string" && i.next.indexOf(t) !== 0 && (i.next = t + i.next), i.nextState && i.nextState.indexOf(t) !== 0 && (i.nextState = t + i.nextState));
          }
          this.$rules[t + e] = n;
        }
      }, this.getRules = function() {
        return this.$rules;
      }, this.embedRules = function(l, t, e, n, r) {
        var i = typeof l == "function" ? new l().getRules() : l;
        if (n)
          for (var s = 0; s < n.length; s++)
            n[s] = t + n[s];
        else {
          n = [];
          for (var c in i)
            n.push(t + c);
        }
        if (this.addRules(i, t), e)
          for (var g = Array.prototype[r ? "push" : "unshift"], s = 0; s < n.length; s++)
            g.apply(this.$rules[n[s]], S.deepCopy(e));
        this.$embeds || (this.$embeds = []), this.$embeds.push(t);
      }, this.getEmbeds = function() {
        return this.$embeds;
      };
      var f = function(l, t) {
        return (l != "start" || t.length) && t.unshift(this.nextState, l), this.nextState;
      }, a = function(l, t) {
        return t.shift(), t.shift() || "start";
      };
      this.normalizeRules = function() {
        var l = 0, t = this.$rules;
        function e(n) {
          var r = t[n];
          r.processed = !0;
          for (var i = 0; i < r.length; i++) {
            var s = r[i], c = null;
            Array.isArray(s) && (c = s, s = {}), !s.regex && s.start && (s.regex = s.start, s.next || (s.next = []), s.next.push({
              defaultToken: s.token
            }, {
              token: s.token + ".end",
              regex: s.end || s.start,
              next: "pop"
            }), s.token = s.token + ".start", s.push = !0);
            var g = s.next || s.push;
            if (g && Array.isArray(g)) {
              var m = s.stateName;
              m || (m = s.token, typeof m != "string" && (m = m[0] || ""), t[m] && (m += l++)), t[m] = g, s.next = m, e(m);
            } else
              g == "pop" && (s.next = a);
            if (s.push && (s.nextState = s.next || s.push, s.next = f, delete s.push), s.rules)
              for (var y in s.rules)
                t[y] ? t[y].push && t[y].push.apply(t[y], s.rules[y]) : t[y] = s.rules[y];
            var x = typeof s == "string" ? s : s.include;
            if (x && (Array.isArray(x) ? c = x.map(function(d) {
              return t[d];
            }) : c = t[x]), c) {
              var o = [i, 1].concat(c);
              s.noEscape && (o = o.filter(function(d) {
                return !d.next;
              })), r.splice.apply(r, o), i--;
            }
            s.keywordMap && (s.token = this.createKeywordMapper(s.keywordMap, s.defaultToken || "text", s.caseInsensitive), delete s.defaultToken);
          }
        }
        Object.keys(t).forEach(e, this);
      }, this.createKeywordMapper = function(l, t, e, n) {
        var r = /* @__PURE__ */ Object.create(null);
        return this.$keywordList = [], Object.keys(l).forEach(function(i) {
          for (var s = l[i], c = s.split(n || "|"), g = c.length; g--; ) {
            var m = c[g];
            this.$keywordList.push(m), e && (m = m.toLowerCase()), r[m] = i;
          }
        }, this), l = null, e ? function(i) {
          return r[i.toLowerCase()] || t;
        } : function(i) {
          return r[i] || t;
        };
      }, this.getKeywords = function() {
        return this.$keywords;
      };
    }).call(k.prototype), $.TextHighlightRules = k;
  }), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(w, $, L) {
    var S = function() {
      this.$behaviours = {};
    };
    (function() {
      this.add = function(k, f, a) {
        switch (void 0) {
          case this.$behaviours:
            this.$behaviours = {};
          case this.$behaviours[k]:
            this.$behaviours[k] = {};
        }
        this.$behaviours[k][f] = a;
      }, this.addBehaviours = function(k) {
        for (var f in k)
          for (var a in k[f])
            this.add(f, a, k[f][a]);
      }, this.remove = function(k) {
        this.$behaviours && this.$behaviours[k] && delete this.$behaviours[k];
      }, this.inherit = function(k, f) {
        if (typeof k == "function")
          var a = new k().getBehaviours(f);
        else
          var a = k.getBehaviours(f);
        this.addBehaviours(a);
      }, this.getBehaviours = function(k) {
        if (k) {
          for (var f = {}, a = 0; a < k.length; a++)
            this.$behaviours[k[a]] && (f[k[a]] = this.$behaviours[k[a]]);
          return f;
        } else
          return this.$behaviours;
      };
    }).call(S.prototype), $.Behaviour = S;
  }), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("./range").Range, k = function(f, a, l) {
      this.$session = f, this.$row = a, this.$rowTokens = f.getTokens(a);
      var t = f.getTokenAt(a, l);
      this.$tokenIndex = t ? t.index : -1;
    };
    (function() {
      this.stepBackward = function() {
        for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
          if (this.$row -= 1, this.$row < 0)
            return this.$row = 0, null;
          this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
        }
        return this.$rowTokens[this.$tokenIndex];
      }, this.stepForward = function() {
        this.$tokenIndex += 1;
        for (var f; this.$tokenIndex >= this.$rowTokens.length; ) {
          if (this.$row += 1, f || (f = this.$session.getLength()), this.$row >= f)
            return this.$row = f - 1, null;
          this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
        }
        return this.$rowTokens[this.$tokenIndex];
      }, this.getCurrentToken = function() {
        return this.$rowTokens[this.$tokenIndex];
      }, this.getCurrentTokenRow = function() {
        return this.$row;
      }, this.getCurrentTokenColumn = function() {
        var f = this.$rowTokens, a = this.$tokenIndex, l = f[a].start;
        if (l !== void 0)
          return l;
        for (l = 0; a > 0; )
          a -= 1, l += f[a].value.length;
        return l;
      }, this.getCurrentTokenPosition = function() {
        return { row: this.$row, column: this.getCurrentTokenColumn() };
      }, this.getCurrentTokenRange = function() {
        var f = this.$rowTokens[this.$tokenIndex], a = this.getCurrentTokenColumn();
        return new S(this.$row, a, this.$row, a + f.value.length);
      };
    }).call(k.prototype), $.TokenIterator = k;
  }), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("../behaviour").Behaviour, f = w("../../token_iterator").TokenIterator, a = w("../../lib/lang"), l = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"], t = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], e, n = {}, r = { '"': '"', "'": "'" }, i = function(g) {
      var m = -1;
      if (g.multiSelect && (m = g.selection.index, n.rangeCount != g.multiSelect.rangeCount && (n = { rangeCount: g.multiSelect.rangeCount })), n[m])
        return e = n[m];
      e = n[m] = {
        autoInsertedBrackets: 0,
        autoInsertedRow: -1,
        autoInsertedLineEnd: "",
        maybeInsertedBrackets: 0,
        maybeInsertedRow: -1,
        maybeInsertedLineStart: "",
        maybeInsertedLineEnd: ""
      };
    }, s = function(g, m, y, x) {
      var o = g.end.row - g.start.row;
      return {
        text: y + m + x,
        selection: [
          0,
          g.start.column + 1,
          o,
          g.end.column + (o ? 0 : 1)
        ]
      };
    }, c = function(g) {
      this.add("braces", "insertion", function(m, y, x, o, d) {
        var b = x.getCursorPosition(), u = o.doc.getLine(b.row);
        if (d == "{") {
          i(x);
          var p = x.getSelectionRange(), h = o.doc.getTextRange(p);
          if (h !== "" && h !== "{" && x.getWrapBehavioursEnabled())
            return s(p, h, "{", "}");
          if (c.isSaneInsertion(x, o))
            return /[\]\}\)]/.test(u[b.column]) || x.inMultiSelectMode || g && g.braces ? (c.recordAutoInsert(x, o, "}"), {
              text: "{}",
              selection: [1, 1]
            }) : (c.recordMaybeInsert(x, o, "{"), {
              text: "{",
              selection: [1, 1]
            });
        } else if (d == "}") {
          i(x);
          var v = u.substring(b.column, b.column + 1);
          if (v == "}") {
            var C = o.$findOpeningBracket("}", { column: b.column + 1, row: b.row });
            if (C !== null && c.isAutoInsertedClosing(b, u, d))
              return c.popAutoInsertedClosing(), {
                text: "",
                selection: [1, 1]
              };
          }
        } else if (d == `
` || d == `\r
`) {
          i(x);
          var _ = "";
          c.isMaybeInsertedClosing(b, u) && (_ = a.stringRepeat("}", e.maybeInsertedBrackets), c.clearMaybeInsertedClosing());
          var v = u.substring(b.column, b.column + 1);
          if (v === "}") {
            var A = o.findMatchingBracket({ row: b.row, column: b.column + 1 }, "}");
            if (!A)
              return null;
            var R = this.$getIndent(o.getLine(A.row));
          } else if (_)
            var R = this.$getIndent(u);
          else {
            c.clearMaybeInsertedClosing();
            return;
          }
          var T = R + o.getTabString();
          return {
            text: `
` + T + `
` + R + _,
            selection: [1, T.length, 1, T.length]
          };
        } else
          c.clearMaybeInsertedClosing();
      }), this.add("braces", "deletion", function(m, y, x, o, d) {
        var b = o.doc.getTextRange(d);
        if (!d.isMultiLine() && b == "{") {
          i(x);
          var u = o.doc.getLine(d.start.row), p = u.substring(d.end.column, d.end.column + 1);
          if (p == "}")
            return d.end.column++, d;
          e.maybeInsertedBrackets--;
        }
      }), this.add("parens", "insertion", function(m, y, x, o, d) {
        if (d == "(") {
          i(x);
          var b = x.getSelectionRange(), u = o.doc.getTextRange(b);
          if (u !== "" && x.getWrapBehavioursEnabled())
            return s(b, u, "(", ")");
          if (c.isSaneInsertion(x, o))
            return c.recordAutoInsert(x, o, ")"), {
              text: "()",
              selection: [1, 1]
            };
        } else if (d == ")") {
          i(x);
          var p = x.getCursorPosition(), h = o.doc.getLine(p.row), v = h.substring(p.column, p.column + 1);
          if (v == ")") {
            var C = o.$findOpeningBracket(")", { column: p.column + 1, row: p.row });
            if (C !== null && c.isAutoInsertedClosing(p, h, d))
              return c.popAutoInsertedClosing(), {
                text: "",
                selection: [1, 1]
              };
          }
        }
      }), this.add("parens", "deletion", function(m, y, x, o, d) {
        var b = o.doc.getTextRange(d);
        if (!d.isMultiLine() && b == "(") {
          i(x);
          var u = o.doc.getLine(d.start.row), p = u.substring(d.start.column + 1, d.start.column + 2);
          if (p == ")")
            return d.end.column++, d;
        }
      }), this.add("brackets", "insertion", function(m, y, x, o, d) {
        if (d == "[") {
          i(x);
          var b = x.getSelectionRange(), u = o.doc.getTextRange(b);
          if (u !== "" && x.getWrapBehavioursEnabled())
            return s(b, u, "[", "]");
          if (c.isSaneInsertion(x, o))
            return c.recordAutoInsert(x, o, "]"), {
              text: "[]",
              selection: [1, 1]
            };
        } else if (d == "]") {
          i(x);
          var p = x.getCursorPosition(), h = o.doc.getLine(p.row), v = h.substring(p.column, p.column + 1);
          if (v == "]") {
            var C = o.$findOpeningBracket("]", { column: p.column + 1, row: p.row });
            if (C !== null && c.isAutoInsertedClosing(p, h, d))
              return c.popAutoInsertedClosing(), {
                text: "",
                selection: [1, 1]
              };
          }
        }
      }), this.add("brackets", "deletion", function(m, y, x, o, d) {
        var b = o.doc.getTextRange(d);
        if (!d.isMultiLine() && b == "[") {
          i(x);
          var u = o.doc.getLine(d.start.row), p = u.substring(d.start.column + 1, d.start.column + 2);
          if (p == "]")
            return d.end.column++, d;
        }
      }), this.add("string_dquotes", "insertion", function(m, y, x, o, d) {
        var b = o.$mode.$quotes || r;
        if (d.length == 1 && b[d]) {
          if (this.lineCommentStart && this.lineCommentStart.indexOf(d) != -1)
            return;
          i(x);
          var u = d, p = x.getSelectionRange(), h = o.doc.getTextRange(p);
          if (h !== "" && (h.length != 1 || !b[h]) && x.getWrapBehavioursEnabled())
            return s(p, h, u, u);
          if (!h) {
            var v = x.getCursorPosition(), C = o.doc.getLine(v.row), _ = C.substring(v.column - 1, v.column), A = C.substring(v.column, v.column + 1), R = o.getTokenAt(v.row, v.column), T = o.getTokenAt(v.row, v.column + 1);
            if (_ == "\\" && R && /escape/.test(R.type))
              return null;
            var E = R && /string|escape/.test(R.type), M = !T || /string|escape/.test(T.type), O;
            if (A == u)
              O = E !== M, O && /string\.end/.test(T.type) && (O = !1);
            else {
              if (E && !M || E && M)
                return null;
              var B = o.$mode.tokenRe;
              B.lastIndex = 0;
              var H = B.test(_);
              B.lastIndex = 0;
              var z = B.test(_);
              if (H || z || A && !/[\s;,.})\]\\]/.test(A))
                return null;
              var I = C[v.column - 2];
              if (_ == u && (I == u || B.test(I)))
                return null;
              O = !0;
            }
            return {
              text: O ? u + u : "",
              selection: [1, 1]
            };
          }
        }
      }), this.add("string_dquotes", "deletion", function(m, y, x, o, d) {
        var b = o.$mode.$quotes || r, u = o.doc.getTextRange(d);
        if (!d.isMultiLine() && b.hasOwnProperty(u)) {
          i(x);
          var p = o.doc.getLine(d.start.row), h = p.substring(d.start.column + 1, d.start.column + 2);
          if (h == u)
            return d.end.column++, d;
        }
      });
    };
    c.isSaneInsertion = function(g, m) {
      var y = g.getCursorPosition(), x = new f(m, y.row, y.column);
      if (!this.$matchTokenType(x.getCurrentToken() || "text", l)) {
        if (/[)}\]]/.test(g.session.getLine(y.row)[y.column]))
          return !0;
        var o = new f(m, y.row, y.column + 1);
        if (!this.$matchTokenType(o.getCurrentToken() || "text", l))
          return !1;
      }
      return x.stepForward(), x.getCurrentTokenRow() !== y.row || this.$matchTokenType(x.getCurrentToken() || "text", t);
    }, c.$matchTokenType = function(g, m) {
      return m.indexOf(g.type || g) > -1;
    }, c.recordAutoInsert = function(g, m, y) {
      var x = g.getCursorPosition(), o = m.doc.getLine(x.row);
      this.isAutoInsertedClosing(x, o, e.autoInsertedLineEnd[0]) || (e.autoInsertedBrackets = 0), e.autoInsertedRow = x.row, e.autoInsertedLineEnd = y + o.substr(x.column), e.autoInsertedBrackets++;
    }, c.recordMaybeInsert = function(g, m, y) {
      var x = g.getCursorPosition(), o = m.doc.getLine(x.row);
      this.isMaybeInsertedClosing(x, o) || (e.maybeInsertedBrackets = 0), e.maybeInsertedRow = x.row, e.maybeInsertedLineStart = o.substr(0, x.column) + y, e.maybeInsertedLineEnd = o.substr(x.column), e.maybeInsertedBrackets++;
    }, c.isAutoInsertedClosing = function(g, m, y) {
      return e.autoInsertedBrackets > 0 && g.row === e.autoInsertedRow && y === e.autoInsertedLineEnd[0] && m.substr(g.column) === e.autoInsertedLineEnd;
    }, c.isMaybeInsertedClosing = function(g, m) {
      return e.maybeInsertedBrackets > 0 && g.row === e.maybeInsertedRow && m.substr(g.column) === e.maybeInsertedLineEnd && m.substr(0, g.column) == e.maybeInsertedLineStart;
    }, c.popAutoInsertedClosing = function() {
      e.autoInsertedLineEnd = e.autoInsertedLineEnd.substr(1), e.autoInsertedBrackets--;
    }, c.clearMaybeInsertedClosing = function() {
      e && (e.maybeInsertedBrackets = 0, e.maybeInsertedRow = -1);
    }, S.inherits(c, k), $.CstyleBehaviour = c;
  }), ace.define("ace/unicode", ["require", "exports", "module"], function(w, $, L) {
    for (var S = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], k = 0, f = [], a = 0; a < S.length; a += 2)
      f.push(k += S[a]), S[a + 1] && f.push(45, k += S[a + 1]);
    $.wordChars = String.fromCharCode.apply(null, f);
  }), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(w, $, L) {
    var S = w("../config"), k = w("../tokenizer").Tokenizer, f = w("./text_highlight_rules").TextHighlightRules, a = w("./behaviour/cstyle").CstyleBehaviour, l = w("../unicode"), t = w("../lib/lang"), e = w("../token_iterator").TokenIterator, n = w("../range").Range, r = function() {
      this.HighlightRules = f;
    };
    (function() {
      this.$defaultBehaviour = new a(), this.tokenRe = new RegExp("^[" + l.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + l.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
        return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new k(this.$highlightRules.getRules())), this.$tokenizer;
      }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(i, s, c, g) {
        var m = s.doc, y = !0, x = !0, o = 1 / 0, d = s.getTabSize(), b = !1;
        if (this.lineCommentStart) {
          if (Array.isArray(this.lineCommentStart))
            var h = this.lineCommentStart.map(t.escapeRegExp).join("|"), u = this.lineCommentStart[0];
          else
            var h = t.escapeRegExp(this.lineCommentStart), u = this.lineCommentStart;
          h = new RegExp("^(\\s*)(?:" + h + ") ?"), b = s.getUseSoftTabs();
          var _ = function(z, I) {
            var D = z.match(h);
            if (!!D) {
              var P = D[1].length, U = D[0].length;
              !T(z, P, U) && D[0][U - 1] == " " && U--, m.removeInLine(I, P, U);
            }
          }, R = u + " ", C = function(z, I) {
            (!y || /\S/.test(z)) && (T(z, o, o) ? m.insertInLine({ row: I, column: o }, R) : m.insertInLine({ row: I, column: o }, u));
          }, A = function(z, I) {
            return h.test(z);
          }, T = function(z, I, D) {
            for (var P = 0; I-- && z.charAt(I) == " "; )
              P++;
            if (P % d != 0)
              return !1;
            for (var P = 0; z.charAt(D++) == " "; )
              P++;
            return d > 2 ? P % d != d - 1 : P % d == 0;
          };
        } else {
          if (!this.blockComment)
            return !1;
          var u = this.blockComment.start, p = this.blockComment.end, h = new RegExp("^(\\s*)(?:" + t.escapeRegExp(u) + ")"), v = new RegExp("(?:" + t.escapeRegExp(p) + ")\\s*$"), C = function(O, B) {
            A(O, B) || (!y || /\S/.test(O)) && (m.insertInLine({ row: B, column: O.length }, p), m.insertInLine({ row: B, column: o }, u));
          }, _ = function(O, B) {
            var H;
            (H = O.match(v)) && m.removeInLine(B, O.length - H[0].length, O.length), (H = O.match(h)) && m.removeInLine(B, H[1].length, H[0].length);
          }, A = function(O, B) {
            if (h.test(O))
              return !0;
            for (var H = s.getTokens(B), z = 0; z < H.length; z++)
              if (H[z].type === "comment")
                return !0;
          };
        }
        function E(O) {
          for (var B = c; B <= g; B++)
            O(m.getLine(B), B);
        }
        var M = 1 / 0;
        E(function(O, B) {
          var H = O.search(/\S/);
          H !== -1 ? (H < o && (o = H), x && !A(O, B) && (x = !1)) : M > O.length && (M = O.length);
        }), o == 1 / 0 && (o = M, y = !1, x = !1), b && o % d != 0 && (o = Math.floor(o / d) * d), E(x ? _ : C);
      }, this.toggleBlockComment = function(i, s, c, g) {
        var m = this.blockComment;
        if (!!m) {
          !m.start && m[0] && (m = m[0]);
          var y = new e(s, g.row, g.column), x = y.getCurrentToken();
          s.selection;
          var o = s.selection.toOrientedRange(), d, b;
          if (x && /comment/.test(x.type)) {
            for (var u, p; x && /comment/.test(x.type); ) {
              var h = x.value.indexOf(m.start);
              if (h != -1) {
                var v = y.getCurrentTokenRow(), C = y.getCurrentTokenColumn() + h;
                u = new n(v, C, v, C + m.start.length);
                break;
              }
              x = y.stepBackward();
            }
            for (var y = new e(s, g.row, g.column), x = y.getCurrentToken(); x && /comment/.test(x.type); ) {
              var h = x.value.indexOf(m.end);
              if (h != -1) {
                var v = y.getCurrentTokenRow(), C = y.getCurrentTokenColumn() + h;
                p = new n(v, C, v, C + m.end.length);
                break;
              }
              x = y.stepForward();
            }
            p && s.remove(p), u && (s.remove(u), d = u.start.row, b = -m.start.length);
          } else
            b = m.start.length, d = c.start.row, s.insert(c.end, m.end), s.insert(c.start, m.start);
          o.start.row == d && (o.start.column += b), o.end.row == d && (o.end.column += b), s.selection.fromOrientedRange(o);
        }
      }, this.getNextLineIndent = function(i, s, c) {
        return this.$getIndent(s);
      }, this.checkOutdent = function(i, s, c) {
        return !1;
      }, this.autoOutdent = function(i, s, c) {
      }, this.$getIndent = function(i) {
        return i.match(/^\s*/)[0];
      }, this.createWorker = function(i) {
        return null;
      }, this.createModeDelegates = function(i) {
        this.$embeds = [], this.$modes = {};
        for (var s in i)
          if (i[s]) {
            var c = i[s], g = c.prototype.$id, m = S.$modes[g];
            m || (S.$modes[g] = m = new c()), S.$modes[s] || (S.$modes[s] = m), this.$embeds.push(s), this.$modes[s] = m;
          }
        for (var y = [
          "toggleBlockComment",
          "toggleCommentLines",
          "getNextLineIndent",
          "checkOutdent",
          "autoOutdent",
          "transformAction",
          "getCompletions"
        ], s = 0; s < y.length; s++)
          (function(o) {
            var d = y[s], b = o[d];
            o[y[s]] = function() {
              return this.$delegator(d, arguments, b);
            };
          })(this);
      }, this.$delegator = function(i, s, c) {
        var g = s[0] || "start";
        if (typeof g != "string") {
          if (Array.isArray(g[2])) {
            var m = g[2][g[2].length - 1], y = this.$modes[m];
            if (y)
              return y[i].apply(y, [g[1]].concat([].slice.call(s, 1)));
          }
          g = g[0] || "start";
        }
        for (var x = 0; x < this.$embeds.length; x++)
          if (!!this.$modes[this.$embeds[x]]) {
            var o = g.split(this.$embeds[x]);
            if (!o[0] && o[1]) {
              s[0] = o[1];
              var y = this.$modes[this.$embeds[x]];
              return y[i].apply(y, s);
            }
          }
        var d = c.apply(this, s);
        return c ? d : void 0;
      }, this.transformAction = function(i, s, c, g, m) {
        if (this.$behaviour) {
          var y = this.$behaviour.getBehaviours();
          for (var x in y)
            if (y[x][s]) {
              var o = y[x][s].apply(this, arguments);
              if (o)
                return o;
            }
        }
      }, this.getKeywords = function(i) {
        if (!this.completionKeywords) {
          var s = this.$tokenizer.rules, c = [];
          for (var g in s)
            for (var m = s[g], y = 0, x = m.length; y < x; y++)
              if (typeof m[y].token == "string")
                /keyword|support|storage/.test(m[y].token) && c.push(m[y].regex);
              else if (typeof m[y].token == "object") {
                for (var o = 0, d = m[y].token.length; o < d; o++)
                  if (/keyword|support|storage/.test(m[y].token[o])) {
                    var g = m[y].regex.match(/\(.+?\)/g)[o];
                    c.push(g.substr(1, g.length - 2));
                  }
              }
          this.completionKeywords = c;
        }
        return i ? c.concat(this.$keywordList || []) : this.$keywordList;
      }, this.$createKeywordList = function() {
        return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
      }, this.getCompletions = function(i, s, c, g) {
        var m = this.$keywordList || this.$createKeywordList();
        return m.map(function(y) {
          return {
            name: y,
            value: y,
            score: 0,
            meta: "keyword"
          };
        });
      }, this.$id = "ace/mode/text";
    }).call(r.prototype), $.Mode = r;
  }), ace.define("ace/apply_delta", ["require", "exports", "module"], function(w, $, L) {
    $.applyDelta = function(S, k, f) {
      var a = k.start.row, l = k.start.column, t = S[a] || "";
      switch (k.action) {
        case "insert":
          var e = k.lines;
          if (e.length === 1)
            S[a] = t.substring(0, l) + k.lines[0] + t.substring(l);
          else {
            var n = [a, 1].concat(k.lines);
            S.splice.apply(S, n), S[a] = t.substring(0, l) + S[a], S[a + k.lines.length - 1] += t.substring(l);
          }
          break;
        case "remove":
          var r = k.end.column, i = k.end.row;
          a === i ? S[a] = t.substring(0, l) + t.substring(r) : S.splice(a, i - a + 1, t.substring(0, l) + S[i].substring(r));
          break;
      }
    };
  }), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/event_emitter").EventEmitter, f = $.Anchor = function(a, l, t) {
      this.$onChange = this.onChange.bind(this), this.attach(a), typeof t > "u" ? this.setPosition(l.row, l.column) : this.setPosition(l, t);
    };
    (function() {
      S.implement(this, k), this.getPosition = function() {
        return this.$clipPositionToDocument(this.row, this.column);
      }, this.getDocument = function() {
        return this.document;
      }, this.$insertRight = !1, this.onChange = function(t) {
        if (!(t.start.row == t.end.row && t.start.row != this.row) && !(t.start.row > this.row)) {
          var e = l(t, { row: this.row, column: this.column }, this.$insertRight);
          this.setPosition(e.row, e.column, !0);
        }
      };
      function a(t, e, n) {
        var r = n ? t.column <= e.column : t.column < e.column;
        return t.row < e.row || t.row == e.row && r;
      }
      function l(t, e, n) {
        var r = t.action == "insert", i = (r ? 1 : -1) * (t.end.row - t.start.row), s = (r ? 1 : -1) * (t.end.column - t.start.column), c = t.start, g = r ? c : t.end;
        return a(e, c, n) ? {
          row: e.row,
          column: e.column
        } : a(g, e, !n) ? {
          row: e.row + i,
          column: e.column + (e.row == g.row ? s : 0)
        } : {
          row: c.row,
          column: c.column
        };
      }
      this.setPosition = function(t, e, n) {
        var r;
        if (n ? r = {
          row: t,
          column: e
        } : r = this.$clipPositionToDocument(t, e), !(this.row == r.row && this.column == r.column)) {
          var i = {
            row: this.row,
            column: this.column
          };
          this.row = r.row, this.column = r.column, this._signal("change", {
            old: i,
            value: r
          });
        }
      }, this.detach = function() {
        this.document.off("change", this.$onChange);
      }, this.attach = function(t) {
        this.document = t || this.document, this.document.on("change", this.$onChange);
      }, this.$clipPositionToDocument = function(t, e) {
        var n = {};
        return t >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : t < 0 ? (n.row = 0, n.column = 0) : (n.row = t, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, e))), e < 0 && (n.column = 0), n;
      };
    }).call(f.prototype);
  }), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./apply_delta").applyDelta, f = w("./lib/event_emitter").EventEmitter, a = w("./range").Range, l = w("./anchor").Anchor, t = function(e) {
      this.$lines = [""], e.length === 0 ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({ row: 0, column: 0 }, e) : this.insert({ row: 0, column: 0 }, e);
    };
    (function() {
      S.implement(this, f), this.setValue = function(e) {
        var n = this.getLength() - 1;
        this.remove(new a(0, 0, n, this.getLine(n).length)), this.insert({ row: 0, column: 0 }, e);
      }, this.getValue = function() {
        return this.getAllLines().join(this.getNewLineCharacter());
      }, this.createAnchor = function(e, n) {
        return new l(this, e, n);
      }, "aaa".split(/a/).length === 0 ? this.$split = function(e) {
        return e.replace(/\r\n|\r/g, `
`).split(`
`);
      } : this.$split = function(e) {
        return e.split(/\r\n|\r|\n/);
      }, this.$detectNewLine = function(e) {
        var n = e.match(/^.*?(\r\n|\r|\n)/m);
        this.$autoNewLine = n ? n[1] : `
`, this._signal("changeNewLineMode");
      }, this.getNewLineCharacter = function() {
        switch (this.$newLineMode) {
          case "windows":
            return `\r
`;
          case "unix":
            return `
`;
          default:
            return this.$autoNewLine || `
`;
        }
      }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(e) {
        this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"));
      }, this.getNewLineMode = function() {
        return this.$newLineMode;
      }, this.isNewLine = function(e) {
        return e == `\r
` || e == "\r" || e == `
`;
      }, this.getLine = function(e) {
        return this.$lines[e] || "";
      }, this.getLines = function(e, n) {
        return this.$lines.slice(e, n + 1);
      }, this.getAllLines = function() {
        return this.getLines(0, this.getLength());
      }, this.getLength = function() {
        return this.$lines.length;
      }, this.getTextRange = function(e) {
        return this.getLinesForRange(e).join(this.getNewLineCharacter());
      }, this.getLinesForRange = function(e) {
        var n;
        if (e.start.row === e.end.row)
          n = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];
        else {
          n = this.getLines(e.start.row, e.end.row), n[0] = (n[0] || "").substring(e.start.column);
          var r = n.length - 1;
          e.end.row - e.start.row == r && (n[r] = n[r].substring(0, e.end.column));
        }
        return n;
      }, this.insertLines = function(e, n) {
        return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, n);
      }, this.removeLines = function(e, n) {
        return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, n);
      }, this.insertNewLine = function(e) {
        return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""]);
      }, this.insert = function(e, n) {
        return this.getLength() <= 1 && this.$detectNewLine(n), this.insertMergedLines(e, this.$split(n));
      }, this.insertInLine = function(e, n) {
        var r = this.clippedPos(e.row, e.column), i = this.pos(e.row, e.column + n.length);
        return this.applyDelta({
          start: r,
          end: i,
          action: "insert",
          lines: [n]
        }, !0), this.clonePos(i);
      }, this.clippedPos = function(e, n) {
        var r = this.getLength();
        e === void 0 ? e = r : e < 0 ? e = 0 : e >= r && (e = r - 1, n = void 0);
        var i = this.getLine(e);
        return n == null && (n = i.length), n = Math.min(Math.max(n, 0), i.length), { row: e, column: n };
      }, this.clonePos = function(e) {
        return { row: e.row, column: e.column };
      }, this.pos = function(e, n) {
        return { row: e, column: n };
      }, this.$clipPosition = function(e) {
        var n = this.getLength();
        return e.row >= n ? (e.row = Math.max(0, n - 1), e.column = this.getLine(n - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e;
      }, this.insertFullLines = function(e, n) {
        e = Math.min(Math.max(e, 0), this.getLength());
        var r = 0;
        e < this.getLength() ? (n = n.concat([""]), r = 0) : (n = [""].concat(n), e--, r = this.$lines[e].length), this.insertMergedLines({ row: e, column: r }, n);
      }, this.insertMergedLines = function(e, n) {
        var r = this.clippedPos(e.row, e.column), i = {
          row: r.row + n.length - 1,
          column: (n.length == 1 ? r.column : 0) + n[n.length - 1].length
        };
        return this.applyDelta({
          start: r,
          end: i,
          action: "insert",
          lines: n
        }), this.clonePos(i);
      }, this.remove = function(e) {
        var n = this.clippedPos(e.start.row, e.start.column), r = this.clippedPos(e.end.row, e.end.column);
        return this.applyDelta({
          start: n,
          end: r,
          action: "remove",
          lines: this.getLinesForRange({ start: n, end: r })
        }), this.clonePos(n);
      }, this.removeInLine = function(e, n, r) {
        var i = this.clippedPos(e, n), s = this.clippedPos(e, r);
        return this.applyDelta({
          start: i,
          end: s,
          action: "remove",
          lines: this.getLinesForRange({ start: i, end: s })
        }, !0), this.clonePos(i);
      }, this.removeFullLines = function(e, n) {
        e = Math.min(Math.max(0, e), this.getLength() - 1), n = Math.min(Math.max(0, n), this.getLength() - 1);
        var r = n == this.getLength() - 1 && e > 0, i = n < this.getLength() - 1, s = r ? e - 1 : e, c = r ? this.getLine(s).length : 0, g = i ? n + 1 : n, m = i ? 0 : this.getLine(g).length, y = new a(s, c, g, m), x = this.$lines.slice(e, n + 1);
        return this.applyDelta({
          start: y.start,
          end: y.end,
          action: "remove",
          lines: this.getLinesForRange(y)
        }), x;
      }, this.removeNewLine = function(e) {
        e < this.getLength() - 1 && e >= 0 && this.applyDelta({
          start: this.pos(e, this.getLine(e).length),
          end: this.pos(e + 1, 0),
          action: "remove",
          lines: ["", ""]
        });
      }, this.replace = function(e, n) {
        if (e instanceof a || (e = a.fromPoints(e.start, e.end)), n.length === 0 && e.isEmpty())
          return e.start;
        if (n == this.getTextRange(e))
          return e.end;
        this.remove(e);
        var r;
        return n ? r = this.insert(e.start, n) : r = e.start, r;
      }, this.applyDeltas = function(e) {
        for (var n = 0; n < e.length; n++)
          this.applyDelta(e[n]);
      }, this.revertDeltas = function(e) {
        for (var n = e.length - 1; n >= 0; n--)
          this.revertDelta(e[n]);
      }, this.applyDelta = function(e, n) {
        var r = e.action == "insert";
        (r ? e.lines.length <= 1 && !e.lines[0] : !a.comparePoints(e.start, e.end)) || (r && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (k(this.$lines, e, n), this._signal("change", e)));
      }, this.$safeApplyDelta = function(e) {
        var n = this.$lines.length;
        (e.action == "remove" && e.start.row < n && e.end.row < n || e.action == "insert" && e.start.row <= n) && this.applyDelta(e);
      }, this.$splitAndapplyLargeDelta = function(e, n) {
        for (var r = e.lines, i = r.length - n + 1, s = e.start.row, c = e.start.column, g = 0, m = 0; g < i; g = m) {
          m += n - 1;
          var y = r.slice(g, m);
          y.push(""), this.applyDelta({
            start: this.pos(s + g, c),
            end: this.pos(s + m, c = 0),
            action: e.action,
            lines: y
          }, !0);
        }
        e.lines = r.slice(g), e.start.row = s + g, e.start.column = c, this.applyDelta(e, !0);
      }, this.revertDelta = function(e) {
        this.$safeApplyDelta({
          start: this.clonePos(e.start),
          end: this.clonePos(e.end),
          action: e.action == "insert" ? "remove" : "insert",
          lines: e.lines.slice()
        });
      }, this.indexToPosition = function(e, n) {
        for (var r = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = n || 0, c = r.length; s < c; s++)
          if (e -= r[s].length + i, e < 0)
            return { row: s, column: e + r[s].length + i };
        return { row: c - 1, column: e + r[c - 1].length + i };
      }, this.positionToIndex = function(e, n) {
        for (var r = this.$lines || this.getAllLines(), i = this.getNewLineCharacter().length, s = 0, c = Math.min(e.row, r.length), g = n || 0; g < c; ++g)
          s += r[g].length + i;
        return s + e.column;
      };
    }).call(t.prototype), $.Document = t;
  }), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/event_emitter").EventEmitter, f = function(a, l) {
      this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = a;
      var t = this;
      this.$worker = function() {
        if (!!t.running) {
          for (var e = new Date(), n = t.currentLine, r = -1, i = t.doc, s = n; t.lines[n]; )
            n++;
          var c = i.getLength(), g = 0;
          for (t.running = !1; n < c; ) {
            t.$tokenizeRow(n), r = n;
            do
              n++;
            while (t.lines[n]);
            if (g++, g % 5 === 0 && new Date() - e > 20) {
              t.running = setTimeout(t.$worker, 20);
              break;
            }
          }
          t.currentLine = n, r == -1 && (r = n), s <= r && t.fireUpdateEvent(s, r);
        }
      };
    };
    (function() {
      S.implement(this, k), this.setTokenizer = function(a) {
        this.tokenizer = a, this.lines = [], this.states = [], this.start(0);
      }, this.setDocument = function(a) {
        this.doc = a, this.lines = [], this.states = [], this.stop();
      }, this.fireUpdateEvent = function(a, l) {
        var t = {
          first: a,
          last: l
        };
        this._signal("update", { data: t });
      }, this.start = function(a) {
        this.currentLine = Math.min(a || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
      }, this.scheduleStart = function() {
        this.running || (this.running = setTimeout(this.$worker, 700));
      }, this.$updateOnChange = function(a) {
        var l = a.start.row, t = a.end.row - l;
        if (t === 0)
          this.lines[l] = null;
        else if (a.action == "remove")
          this.lines.splice(l, t + 1, null), this.states.splice(l, t + 1, null);
        else {
          var e = Array(t + 1);
          e.unshift(l, 1), this.lines.splice.apply(this.lines, e), this.states.splice.apply(this.states, e);
        }
        this.currentLine = Math.min(l, this.currentLine, this.doc.getLength()), this.stop();
      }, this.stop = function() {
        this.running && clearTimeout(this.running), this.running = !1;
      }, this.getTokens = function(a) {
        return this.lines[a] || this.$tokenizeRow(a);
      }, this.getState = function(a) {
        return this.currentLine == a && this.$tokenizeRow(a), this.states[a] || "start";
      }, this.$tokenizeRow = function(a) {
        var l = this.doc.getLine(a), t = this.states[a - 1], e = this.tokenizer.getLineTokens(l, t, a);
        return this.states[a] + "" != e.state + "" ? (this.states[a] = e.state, this.lines[a + 1] = null, this.currentLine > a + 1 && (this.currentLine = a + 1)) : this.currentLine == a && (this.currentLine = a + 1), this.lines[a] = e.tokens;
      }, this.cleanup = function() {
        this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners();
      };
    }).call(f.prototype), $.BackgroundTokenizer = f;
  }), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(w, $, L) {
    var S = w("./lib/lang");
    w("./lib/oop");
    var k = w("./range").Range, f = function(a, l, t) {
      this.setRegexp(a), this.clazz = l, this.type = t || "text";
    };
    (function() {
      this.MAX_RANGES = 500, this.setRegexp = function(a) {
        this.regExp + "" != a + "" && (this.regExp = a, this.cache = []);
      }, this.update = function(a, l, t, e) {
        if (!!this.regExp)
          for (var n = e.firstRow, r = e.lastRow, i = {}, s = n; s <= r; s++) {
            var c = this.cache[s];
            c == null && (c = S.getMatchOffsets(t.getLine(s), this.regExp), c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map(function(x) {
              return new k(s, x.offset, s, x.offset + x.length);
            }), this.cache[s] = c.length ? c : "");
            for (var g = c.length; g--; ) {
              var m = c[g].toScreenRange(t), y = m.toString();
              i[y] || (i[y] = !0, l.drawSingleLineMarker(a, m, this.clazz, e));
            }
          }
      };
    }).call(f.prototype), $.SearchHighlight = f;
  }), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("../range").Range;
    function k(f, a) {
      this.foldData = f, Array.isArray(a) ? this.folds = a : a = this.folds = [a];
      var l = a[a.length - 1];
      this.range = new S(a[0].start.row, a[0].start.column, l.end.row, l.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(t) {
        t.setFoldLine(this);
      }, this);
    }
    (function() {
      this.shiftRow = function(f) {
        this.start.row += f, this.end.row += f, this.folds.forEach(function(a) {
          a.start.row += f, a.end.row += f;
        });
      }, this.addFold = function(f) {
        if (f.sameRow) {
          if (f.start.row < this.startRow || f.endRow > this.endRow)
            throw new Error("Can't add a fold to this FoldLine as it has no connection");
          this.folds.push(f), this.folds.sort(function(a, l) {
            return -a.range.compareEnd(l.start.row, l.start.column);
          }), this.range.compareEnd(f.start.row, f.start.column) > 0 ? (this.end.row = f.end.row, this.end.column = f.end.column) : this.range.compareStart(f.end.row, f.end.column) < 0 && (this.start.row = f.start.row, this.start.column = f.start.column);
        } else if (f.start.row == this.end.row)
          this.folds.push(f), this.end.row = f.end.row, this.end.column = f.end.column;
        else if (f.end.row == this.start.row)
          this.folds.unshift(f), this.start.row = f.start.row, this.start.column = f.start.column;
        else
          throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
        f.foldLine = this;
      }, this.containsRow = function(f) {
        return f >= this.start.row && f <= this.end.row;
      }, this.walk = function(f, a, l) {
        var t = 0, e = this.folds, n, r, i, s = !0;
        a == null && (a = this.end.row, l = this.end.column);
        for (var c = 0; c < e.length; c++) {
          if (n = e[c], r = n.range.compareStart(a, l), r == -1) {
            f(null, a, l, t, s);
            return;
          }
          if (i = f(null, n.start.row, n.start.column, t, s), i = !i && f(n.placeholder, n.start.row, n.start.column, t), i || r === 0)
            return;
          s = !n.sameRow, t = n.end.column;
        }
        f(null, a, l, t, s);
      }, this.getNextFoldTo = function(f, a) {
        for (var l, t, e = 0; e < this.folds.length; e++) {
          if (l = this.folds[e], t = l.range.compareEnd(f, a), t == -1)
            return {
              fold: l,
              kind: "after"
            };
          if (t === 0)
            return {
              fold: l,
              kind: "inside"
            };
        }
        return null;
      }, this.addRemoveChars = function(f, a, l) {
        var t = this.getNextFoldTo(f, a), e, n;
        if (t) {
          if (e = t.fold, t.kind == "inside" && e.start.column != a && e.start.row != f)
            window.console && window.console.log(f, a, e);
          else if (e.start.row == f) {
            n = this.folds;
            var r = n.indexOf(e);
            for (r === 0 && (this.start.column += l), r; r < n.length; r++) {
              if (e = n[r], e.start.column += l, !e.sameRow)
                return;
              e.end.column += l;
            }
            this.end.column += l;
          }
        }
      }, this.split = function(f, a) {
        var l = this.getNextFoldTo(f, a);
        if (!l || l.kind == "inside")
          return null;
        var t = l.fold, e = this.folds, n = this.foldData, r = e.indexOf(t), i = e[r - 1];
        this.end.row = i.end.row, this.end.column = i.end.column, e = e.splice(r, e.length - r);
        var s = new k(n, e);
        return n.splice(n.indexOf(this) + 1, 0, s), s;
      }, this.merge = function(f) {
        for (var a = f.folds, l = 0; l < a.length; l++)
          this.addFold(a[l]);
        var t = this.foldData;
        t.splice(t.indexOf(f), 1);
      }, this.toString = function() {
        var f = [this.range.toString() + ": ["];
        return this.folds.forEach(function(a) {
          f.push("  " + a.toString());
        }), f.push("]"), f.join(`
`);
      }, this.idxToPosition = function(f) {
        for (var a = 0, l = 0; l < this.folds.length; l++) {
          var t = this.folds[l];
          if (f -= t.start.column - a, f < 0)
            return {
              row: t.start.row,
              column: t.start.column + f
            };
          if (f -= t.placeholder.length, f < 0)
            return t.start;
          a = t.end.column;
        }
        return {
          row: this.end.row,
          column: this.end.column + f
        };
      };
    }).call(k.prototype), $.FoldLine = k;
  }), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("./range").Range, k = S.comparePoints, f = function() {
      this.ranges = [], this.$bias = 1;
    };
    (function() {
      this.comparePoints = k, this.pointIndex = function(a, l, t) {
        for (var e = this.ranges, n = t || 0; n < e.length; n++) {
          var r = e[n], i = k(a, r.end);
          if (!(i > 0)) {
            var s = k(a, r.start);
            return i === 0 ? l && s !== 0 ? -n - 2 : n : s > 0 || s === 0 && !l ? n : -n - 1;
          }
        }
        return -n - 1;
      }, this.add = function(a) {
        var l = !a.isEmpty(), t = this.pointIndex(a.start, l);
        t < 0 && (t = -t - 1);
        var e = this.pointIndex(a.end, l, t);
        return e < 0 ? e = -e - 1 : e++, this.ranges.splice(t, e - t, a);
      }, this.addList = function(a) {
        for (var l = [], t = a.length; t--; )
          l.push.apply(l, this.add(a[t]));
        return l;
      }, this.substractPoint = function(a) {
        var l = this.pointIndex(a);
        if (l >= 0)
          return this.ranges.splice(l, 1);
      }, this.merge = function() {
        var a = [], l = this.ranges;
        l = l.sort(function(i, s) {
          return k(i.start, s.start);
        });
        for (var t = l[0], e, n = 1; n < l.length; n++) {
          e = t, t = l[n];
          var r = k(e.end, t.start);
          r < 0 || r == 0 && !e.isEmpty() && !t.isEmpty() || (k(e.end, t.end) < 0 && (e.end.row = t.end.row, e.end.column = t.end.column), l.splice(n, 1), a.push(t), t = e, n--);
        }
        return this.ranges = l, a;
      }, this.contains = function(a, l) {
        return this.pointIndex({ row: a, column: l }) >= 0;
      }, this.containsPoint = function(a) {
        return this.pointIndex(a) >= 0;
      }, this.rangeAtPoint = function(a) {
        var l = this.pointIndex(a);
        if (l >= 0)
          return this.ranges[l];
      }, this.clipRows = function(a, l) {
        var t = this.ranges;
        if (t[0].start.row > l || t[t.length - 1].start.row < a)
          return [];
        var e = this.pointIndex({ row: a, column: 0 });
        e < 0 && (e = -e - 1);
        var n = this.pointIndex({ row: l, column: 0 }, e);
        n < 0 && (n = -n - 1);
        for (var r = [], i = e; i < n; i++)
          r.push(t[i]);
        return r;
      }, this.removeAll = function() {
        return this.ranges.splice(0, this.ranges.length);
      }, this.attach = function(a) {
        this.session && this.detach(), this.session = a, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
      }, this.detach = function() {
        !this.session || (this.session.removeListener("change", this.onChange), this.session = null);
      }, this.$onChange = function(a) {
        for (var l = a.start, t = a.end, e = l.row, n = t.row, r = this.ranges, i = 0, s = r.length; i < s; i++) {
          var c = r[i];
          if (c.end.row >= e)
            break;
        }
        if (a.action == "insert")
          for (var g = n - e, m = -l.column + t.column; i < s; i++) {
            var c = r[i];
            if (c.start.row > e)
              break;
            if (c.start.row == e && c.start.column >= l.column && (c.start.column == l.column && this.$bias <= 0 || (c.start.column += m, c.start.row += g)), c.end.row == e && c.end.column >= l.column) {
              if (c.end.column == l.column && this.$bias < 0)
                continue;
              c.end.column == l.column && m > 0 && i < s - 1 && c.end.column > c.start.column && c.end.column == r[i + 1].start.column && (c.end.column -= m), c.end.column += m, c.end.row += g;
            }
          }
        else
          for (var g = e - n, m = l.column - t.column; i < s; i++) {
            var c = r[i];
            if (c.start.row > n)
              break;
            c.end.row < n && (e < c.end.row || e == c.end.row && l.column < c.end.column) ? (c.end.row = e, c.end.column = l.column) : c.end.row == n ? c.end.column <= t.column ? (g || c.end.column > l.column) && (c.end.column = l.column, c.end.row = l.row) : (c.end.column += m, c.end.row += g) : c.end.row > n && (c.end.row += g), c.start.row < n && (e < c.start.row || e == c.start.row && l.column < c.start.column) ? (c.start.row = e, c.start.column = l.column) : c.start.row == n ? c.start.column <= t.column ? (g || c.start.column > l.column) && (c.start.column = l.column, c.start.row = l.row) : (c.start.column += m, c.start.row += g) : c.start.row > n && (c.start.row += g);
          }
        if (g != 0 && i < s)
          for (; i < s; i++) {
            var c = r[i];
            c.start.row += g, c.end.row += g;
          }
      };
    }).call(f.prototype), $.RangeList = f;
  }), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], function(w, $, L) {
    var S = w("../range_list").RangeList, k = w("../lib/oop"), f = $.Fold = function(n, r) {
      this.foldLine = null, this.placeholder = r, this.range = n, this.start = n.start, this.end = n.end, this.sameRow = n.start.row == n.end.row, this.subFolds = this.ranges = [];
    };
    k.inherits(f, S), function() {
      this.toString = function() {
        return '"' + this.placeholder + '" ' + this.range.toString();
      }, this.setFoldLine = function(n) {
        this.foldLine = n, this.subFolds.forEach(function(r) {
          r.setFoldLine(n);
        });
      }, this.clone = function() {
        var n = this.range.clone(), r = new f(n, this.placeholder);
        return this.subFolds.forEach(function(i) {
          r.subFolds.push(i.clone());
        }), r.collapseChildren = this.collapseChildren, r;
      }, this.addSubFold = function(n) {
        if (!this.range.isEqual(n)) {
          l(n, this.start);
          for (var g = n.start.row, m = n.start.column, r = 0, i = -1; r < this.subFolds.length && (i = this.subFolds[r].range.compare(g, m), i == 1); r++)
            ;
          var s = this.subFolds[r], c = 0;
          if (i == 0) {
            if (s.range.containsRange(n))
              return s.addSubFold(n);
            c = 1;
          }
          for (var g = n.range.end.row, m = n.range.end.column, y = r, i = -1; y < this.subFolds.length && (i = this.subFolds[y].range.compare(g, m), i == 1); y++)
            ;
          i == 0 && y++;
          for (var x = this.subFolds.splice(r, y - r, n), o = i == 0 ? x.length - 1 : x.length, d = c; d < o; d++)
            n.addSubFold(x[d]);
          return n.setFoldLine(this.foldLine), n;
        }
      }, this.restoreRange = function(n) {
        return e(n, this.start);
      };
    }.call(f.prototype);
    function a(n, r) {
      n.row -= r.row, n.row == 0 && (n.column -= r.column);
    }
    function l(n, r) {
      a(n.start, r), a(n.end, r);
    }
    function t(n, r) {
      n.row == 0 && (n.column += r.column), n.row += r.row;
    }
    function e(n, r) {
      t(n.start, r), t(n.end, r);
    }
  }), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(w, $, L) {
    var S = w("../range").Range, k = w("./fold_line").FoldLine, f = w("./fold").Fold, a = w("../token_iterator").TokenIterator;
    function l() {
      this.getFoldAt = function(t, e, n) {
        var r = this.getFoldLine(t);
        if (!r)
          return null;
        for (var i = r.folds, s = 0; s < i.length; s++) {
          var c = i[s].range;
          if (c.contains(t, e)) {
            if (n == 1 && c.isEnd(t, e) && !c.isEmpty())
              continue;
            if (n == -1 && c.isStart(t, e) && !c.isEmpty())
              continue;
            return i[s];
          }
        }
      }, this.getFoldsInRange = function(t) {
        var e = t.start, n = t.end, r = this.$foldData, i = [];
        e.column += 1, n.column -= 1;
        for (var s = 0; s < r.length; s++) {
          var c = r[s].range.compareRange(t);
          if (c != 2) {
            if (c == -2)
              break;
            for (var g = r[s].folds, m = 0; m < g.length; m++) {
              var y = g[m];
              if (c = y.range.compareRange(t), c == -2)
                break;
              if (c == 2)
                continue;
              if (c == 42)
                break;
              i.push(y);
            }
          }
        }
        return e.column -= 1, n.column += 1, i;
      }, this.getFoldsInRangeList = function(t) {
        if (Array.isArray(t)) {
          var e = [];
          t.forEach(function(n) {
            e = e.concat(this.getFoldsInRange(n));
          }, this);
        } else
          var e = this.getFoldsInRange(t);
        return e;
      }, this.getAllFolds = function() {
        for (var t = [], e = this.$foldData, n = 0; n < e.length; n++)
          for (var r = 0; r < e[n].folds.length; r++)
            t.push(e[n].folds[r]);
        return t;
      }, this.getFoldStringAt = function(t, e, n, r) {
        if (r = r || this.getFoldLine(t), !r)
          return null;
        for (var i = {
          end: { column: 0 }
        }, s, c, g = 0; g < r.folds.length; g++) {
          c = r.folds[g];
          var m = c.range.compareEnd(t, e);
          if (m == -1) {
            s = this.getLine(c.start.row).substring(i.end.column, c.start.column);
            break;
          } else if (m === 0)
            return null;
          i = c;
        }
        return s || (s = this.getLine(c.start.row).substring(i.end.column)), n == -1 ? s.substring(0, e - i.end.column) : n == 1 ? s.substring(e - i.end.column) : s;
      }, this.getFoldLine = function(t, e) {
        var n = this.$foldData, r = 0;
        for (e && (r = n.indexOf(e)), r == -1 && (r = 0), r; r < n.length; r++) {
          var i = n[r];
          if (i.start.row <= t && i.end.row >= t)
            return i;
          if (i.end.row > t)
            return null;
        }
        return null;
      }, this.getNextFoldLine = function(t, e) {
        var n = this.$foldData, r = 0;
        for (e && (r = n.indexOf(e)), r == -1 && (r = 0), r; r < n.length; r++) {
          var i = n[r];
          if (i.end.row >= t)
            return i;
        }
        return null;
      }, this.getFoldedRowCount = function(t, e) {
        for (var n = this.$foldData, r = e - t + 1, i = 0; i < n.length; i++) {
          var s = n[i], c = s.end.row, g = s.start.row;
          if (c >= e) {
            g < e && (g >= t ? r -= e - g : r = 0);
            break;
          } else
            c >= t && (g >= t ? r -= c - g : r -= c - t + 1);
        }
        return r;
      }, this.$addFoldLine = function(t) {
        return this.$foldData.push(t), this.$foldData.sort(function(e, n) {
          return e.start.row - n.start.row;
        }), t;
      }, this.addFold = function(t, e) {
        var n = this.$foldData, r = !1, i;
        t instanceof f ? i = t : (i = new f(e, t), i.collapseChildren = e.collapseChildren), this.$clipRangeToDocument(i.range);
        var s = i.start.row, c = i.start.column, g = i.end.row, m = i.end.column, y = this.getFoldAt(s, c, 1), x = this.getFoldAt(g, m, -1);
        if (y && x == y)
          return y.addSubFold(i);
        y && !y.range.isStart(s, c) && this.removeFold(y), x && !x.range.isEnd(g, m) && this.removeFold(x);
        var o = this.getFoldsInRange(i.range);
        o.length > 0 && (this.removeFolds(o), i.collapseChildren || o.forEach(function(p) {
          i.addSubFold(p);
        }));
        for (var d = 0; d < n.length; d++) {
          var b = n[d];
          if (g == b.start.row) {
            b.addFold(i), r = !0;
            break;
          } else if (s == b.end.row) {
            if (b.addFold(i), r = !0, !i.sameRow) {
              var u = n[d + 1];
              if (u && u.start.row == g) {
                b.merge(u);
                break;
              }
            }
            break;
          } else if (g <= b.start.row)
            break;
        }
        return r || (b = this.$addFoldLine(new k(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(b.start.row, b.start.row) : this.$updateRowLengthCache(b.start.row, b.start.row), this.$modified = !0, this._signal("changeFold", { data: i, action: "add" }), i;
      }, this.addFolds = function(t) {
        t.forEach(function(e) {
          this.addFold(e);
        }, this);
      }, this.removeFold = function(t) {
        var e = t.foldLine, n = e.start.row, r = e.end.row, i = this.$foldData, s = e.folds;
        if (s.length == 1)
          i.splice(i.indexOf(e), 1);
        else if (e.range.isEnd(t.end.row, t.end.column))
          s.pop(), e.end.row = s[s.length - 1].end.row, e.end.column = s[s.length - 1].end.column;
        else if (e.range.isStart(t.start.row, t.start.column))
          s.shift(), e.start.row = s[0].start.row, e.start.column = s[0].start.column;
        else if (t.sameRow)
          s.splice(s.indexOf(t), 1);
        else {
          var c = e.split(t.start.row, t.start.column);
          s = c.folds, s.shift(), c.start.row = s[0].start.row, c.start.column = s[0].start.column;
        }
        this.$updating || (this.$useWrapMode ? this.$updateWrapData(n, r) : this.$updateRowLengthCache(n, r)), this.$modified = !0, this._signal("changeFold", { data: t, action: "remove" });
      }, this.removeFolds = function(t) {
        for (var e = [], n = 0; n < t.length; n++)
          e.push(t[n]);
        e.forEach(function(r) {
          this.removeFold(r);
        }, this), this.$modified = !0;
      }, this.expandFold = function(t) {
        this.removeFold(t), t.subFolds.forEach(function(e) {
          t.restoreRange(e), this.addFold(e);
        }, this), t.collapseChildren > 0 && this.foldAll(t.start.row + 1, t.end.row, t.collapseChildren - 1), t.subFolds = [];
      }, this.expandFolds = function(t) {
        t.forEach(function(e) {
          this.expandFold(e);
        }, this);
      }, this.unfold = function(t, e) {
        var n, r;
        if (t == null)
          n = new S(0, 0, this.getLength(), 0), e == null && (e = !0);
        else if (typeof t == "number")
          n = new S(t, 0, t, this.getLine(t).length);
        else if ("row" in t)
          n = S.fromPoints(t, t);
        else {
          if (Array.isArray(t))
            return r = [], t.forEach(function(s) {
              r = r.concat(this.unfold(s));
            }, this), r;
          n = t;
        }
        r = this.getFoldsInRangeList(n);
        for (var i = r; r.length == 1 && S.comparePoints(r[0].start, n.start) < 0 && S.comparePoints(r[0].end, n.end) > 0; )
          this.expandFolds(r), r = this.getFoldsInRangeList(n);
        if (e != !1 ? this.removeFolds(r) : this.expandFolds(r), i.length)
          return i;
      }, this.isRowFolded = function(t, e) {
        return !!this.getFoldLine(t, e);
      }, this.getRowFoldEnd = function(t, e) {
        var n = this.getFoldLine(t, e);
        return n ? n.end.row : t;
      }, this.getRowFoldStart = function(t, e) {
        var n = this.getFoldLine(t, e);
        return n ? n.start.row : t;
      }, this.getFoldDisplayLine = function(t, e, n, r, i) {
        r == null && (r = t.start.row), i == null && (i = 0), e == null && (e = t.end.row), n == null && (n = this.getLine(e).length);
        var s = this.doc, c = "";
        return t.walk(function(g, m, y, x) {
          if (!(m < r)) {
            if (m == r) {
              if (y < i)
                return;
              x = Math.max(i, x);
            }
            g != null ? c += g : c += s.getLine(m).substring(x, y);
          }
        }, e, n), c;
      }, this.getDisplayLine = function(t, e, n, r) {
        var i = this.getFoldLine(t);
        if (i)
          return this.getFoldDisplayLine(i, t, e, n, r);
        var s;
        return s = this.doc.getLine(t), s.substring(r || 0, e || s.length);
      }, this.$cloneFoldData = function() {
        var t = [];
        return t = this.$foldData.map(function(e) {
          var n = e.folds.map(function(r) {
            return r.clone();
          });
          return new k(t, n);
        }), t;
      }, this.toggleFold = function(t) {
        var e = this.selection, n = e.getRange(), r, i;
        if (n.isEmpty()) {
          var s = n.start;
          if (r = this.getFoldAt(s.row, s.column), r) {
            this.expandFold(r);
            return;
          } else
            (i = this.findMatchingBracket(s)) ? n.comparePoint(i) == 1 ? n.end = i : (n.start = i, n.start.column++, n.end.column--) : (i = this.findMatchingBracket({ row: s.row, column: s.column + 1 })) ? (n.comparePoint(i) == 1 ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(s.row, s.column) || n;
        } else {
          var c = this.getFoldsInRange(n);
          if (t && c.length) {
            this.expandFolds(c);
            return;
          } else
            c.length == 1 && (r = c[0]);
        }
        if (r || (r = this.getFoldAt(n.start.row, n.start.column)), r && r.range.toString() == n.toString()) {
          this.expandFold(r);
          return;
        }
        var g = "...";
        if (!n.isMultiLine()) {
          if (g = this.getTextRange(n), g.length < 4)
            return;
          g = g.trim().substring(0, 2) + "..";
        }
        this.addFold(g, n);
      }, this.getCommentFoldRange = function(t, e, n) {
        var r = new a(this, t, e), i = r.getCurrentToken(), s = i && i.type;
        if (i && /^comment|string/.test(s)) {
          s = s.match(/comment|string/)[0], s == "comment" && (s += "|doc-start");
          var c = new RegExp(s), g = new S();
          if (n != 1) {
            do
              i = r.stepBackward();
            while (i && c.test(i.type));
            r.stepForward();
          }
          if (g.start.row = r.getCurrentTokenRow(), g.start.column = r.getCurrentTokenColumn() + 2, r = new a(this, t, e), n != -1) {
            var m = -1;
            do
              if (i = r.stepForward(), m == -1) {
                var y = this.getState(r.$row);
                c.test(y) || (m = r.$row);
              } else if (r.$row > m)
                break;
            while (i && c.test(i.type));
            i = r.stepBackward();
          } else
            i = r.getCurrentToken();
          return g.end.row = r.getCurrentTokenRow(), g.end.column = r.getCurrentTokenColumn() + i.value.length - 2, g;
        }
      }, this.foldAll = function(t, e, n, r) {
        n == null && (n = 1e5);
        var i = this.foldWidgets;
        if (!!i) {
          e = e || this.getLength(), t = t || 0;
          for (var s = t; s < e; s++)
            if (i[s] == null && (i[s] = this.getFoldWidget(s)), i[s] == "start" && !(r && !r(s))) {
              var c = this.getFoldWidgetRange(s);
              c && c.isMultiLine() && c.end.row <= e && c.start.row >= t && (s = c.end.row, c.collapseChildren = n, this.addFold("...", c));
            }
        }
      }, this.foldToLevel = function(t) {
        for (this.foldAll(); t-- > 0; )
          this.unfold(null, !1);
      }, this.foldAllComments = function() {
        var t = this;
        this.foldAll(null, null, null, function(e) {
          for (var n = t.getTokens(e), r = 0; r < n.length; r++) {
            var i = n[r];
            if (!(i.type == "text" && /^\s+$/.test(i.value)))
              return !!/comment/.test(i.type);
          }
        });
      }, this.$foldStyles = {
        manual: 1,
        markbegin: 1,
        markbeginend: 1
      }, this.$foldStyle = "markbegin", this.setFoldStyle = function(t) {
        if (!this.$foldStyles[t])
          throw new Error("invalid fold style: " + t + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
        if (this.$foldStyle != t) {
          this.$foldStyle = t, t == "manual" && this.unfold();
          var e = this.$foldMode;
          this.$setFolding(null), this.$setFolding(e);
        }
      }, this.$setFolding = function(t) {
        if (this.$foldMode != t) {
          if (this.$foldMode = t, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !t || this.$foldStyle == "manual") {
            this.foldWidgets = null;
            return;
          }
          this.foldWidgets = [], this.getFoldWidget = t.getFoldWidget.bind(t, this, this.$foldStyle), this.getFoldWidgetRange = t.getFoldWidgetRange.bind(t, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
        }
      }, this.getParentFoldRangeData = function(t, e) {
        var n = this.foldWidgets;
        if (!n || e && n[t])
          return {};
        for (var r = t - 1, i; r >= 0; ) {
          var s = n[r];
          if (s == null && (s = n[r] = this.getFoldWidget(r)), s == "start") {
            var c = this.getFoldWidgetRange(r);
            if (i || (i = c), c && c.end.row >= t)
              break;
          }
          r--;
        }
        return {
          range: r !== -1 && c,
          firstRange: i
        };
      }, this.onFoldWidgetClick = function(t, e) {
        e = e.domEvent;
        var n = {
          children: e.shiftKey,
          all: e.ctrlKey || e.metaKey,
          siblings: e.altKey
        }, r = this.$toggleFoldWidget(t, n);
        if (!r) {
          var i = e.target || e.srcElement;
          i && /ace_fold-widget/.test(i.className) && (i.className += " ace_invalid");
        }
      }, this.$toggleFoldWidget = function(t, e) {
        if (!!this.getFoldWidget) {
          var n = this.getFoldWidget(t), r = this.getLine(t), i = n === "end" ? -1 : 1, s = this.getFoldAt(t, i === -1 ? 0 : r.length, i);
          if (s)
            return e.children || e.all ? this.removeFold(s) : this.expandFold(s), s;
          var c = this.getFoldWidgetRange(t, !0);
          if (c && !c.isMultiLine() && (s = this.getFoldAt(c.start.row, c.start.column, 1), s && c.isEqual(s.range)))
            return this.removeFold(s), s;
          if (e.siblings) {
            var g = this.getParentFoldRangeData(t);
            if (g.range)
              var m = g.range.start.row + 1, y = g.range.end.row;
            this.foldAll(m, y, e.all ? 1e4 : 0);
          } else
            e.children ? (y = c ? c.end.row : this.getLength(), this.foldAll(t + 1, y, e.all ? 1e4 : 0)) : c && (e.all && (c.collapseChildren = 1e4), this.addFold("...", c));
          return c;
        }
      }, this.toggleFoldWidget = function(t) {
        var e = this.selection.getCursor().row;
        e = this.getRowFoldStart(e);
        var n = this.$toggleFoldWidget(e, {});
        if (!n) {
          var r = this.getParentFoldRangeData(e, !0);
          if (n = r.range || r.firstRange, n) {
            e = n.start.row;
            var i = this.getFoldAt(e, this.getLine(e).length, 1);
            i ? this.removeFold(i) : this.addFold("...", n);
          }
        }
      }, this.updateFoldWidgets = function(t) {
        var e = t.start.row, n = t.end.row - e;
        if (n === 0)
          this.foldWidgets[e] = null;
        else if (t.action == "remove")
          this.foldWidgets.splice(e, n + 1, null);
        else {
          var r = Array(n + 1);
          r.unshift(e, 1), this.foldWidgets.splice.apply(this.foldWidgets, r);
        }
      }, this.tokenizerUpdateFoldWidgets = function(t) {
        var e = t.data;
        e.first != e.last && this.foldWidgets.length > e.first && this.foldWidgets.splice(e.first, this.foldWidgets.length);
      };
    }
    $.Folding = l;
  }), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(w, $, L) {
    var S = w("../token_iterator").TokenIterator, k = w("../range").Range;
    function f() {
      this.findMatchingBracket = function(a, l) {
        if (a.column == 0)
          return null;
        var t = l || this.getLine(a.row).charAt(a.column - 1);
        if (t == "")
          return null;
        var e = t.match(/([\(\[\{])|([\)\]\}])/);
        return e ? e[1] ? this.$findClosingBracket(e[1], a) : this.$findOpeningBracket(e[2], a) : null;
      }, this.getBracketRange = function(a) {
        var l = this.getLine(a.row), t = !0, e, n = l.charAt(a.column - 1), r = n && n.match(/([\(\[\{])|([\)\]\}])/);
        if (r || (n = l.charAt(a.column), a = { row: a.row, column: a.column + 1 }, r = n && n.match(/([\(\[\{])|([\)\]\}])/), t = !1), !r)
          return null;
        if (r[1]) {
          var i = this.$findClosingBracket(r[1], a);
          if (!i)
            return null;
          e = k.fromPoints(a, i), t || (e.end.column++, e.start.column--), e.cursor = e.end;
        } else {
          var i = this.$findOpeningBracket(r[2], a);
          if (!i)
            return null;
          e = k.fromPoints(i, a), t || (e.start.column++, e.end.column--), e.cursor = e.start;
        }
        return e;
      }, this.getMatchingBracketRanges = function(a) {
        var l = this.getLine(a.row), t = l.charAt(a.column - 1), e = t && t.match(/([\(\[\{])|([\)\]\}])/);
        if (e || (t = l.charAt(a.column), a = { row: a.row, column: a.column + 1 }, e = t && t.match(/([\(\[\{])|([\)\]\}])/)), !e)
          return null;
        var n = new k(a.row, a.column - 1, a.row, a.column), r = e[1] ? this.$findClosingBracket(e[1], a) : this.$findOpeningBracket(e[2], a);
        if (!r)
          return [n];
        var i = new k(r.row, r.column, r.row, r.column + 1);
        return [n, i];
      }, this.$brackets = {
        ")": "(",
        "(": ")",
        "]": "[",
        "[": "]",
        "{": "}",
        "}": "{",
        "<": ">",
        ">": "<"
      }, this.$findOpeningBracket = function(a, l, t) {
        var e = this.$brackets[a], n = 1, r = new S(this, l.row, l.column), i = r.getCurrentToken();
        if (i || (i = r.stepForward()), !!i) {
          t || (t = new RegExp("(\\.?" + i.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
          for (var s = l.column - r.getCurrentTokenColumn() - 2, c = i.value; ; ) {
            for (; s >= 0; ) {
              var g = c.charAt(s);
              if (g == e) {
                if (n -= 1, n == 0)
                  return {
                    row: r.getCurrentTokenRow(),
                    column: s + r.getCurrentTokenColumn()
                  };
              } else
                g == a && (n += 1);
              s -= 1;
            }
            do
              i = r.stepBackward();
            while (i && !t.test(i.type));
            if (i == null)
              break;
            c = i.value, s = c.length - 1;
          }
          return null;
        }
      }, this.$findClosingBracket = function(a, l, t) {
        var e = this.$brackets[a], n = 1, r = new S(this, l.row, l.column), i = r.getCurrentToken();
        if (i || (i = r.stepForward()), !!i) {
          t || (t = new RegExp("(\\.?" + i.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
          for (var s = l.column - r.getCurrentTokenColumn(); ; ) {
            for (var c = i.value, g = c.length; s < g; ) {
              var m = c.charAt(s);
              if (m == e) {
                if (n -= 1, n == 0)
                  return {
                    row: r.getCurrentTokenRow(),
                    column: s + r.getCurrentTokenColumn()
                  };
              } else
                m == a && (n += 1);
              s += 1;
            }
            do
              i = r.stepForward();
            while (i && !t.test(i.type));
            if (i == null)
              break;
            s = 0;
          }
          return null;
        }
      };
    }
    $.BracketMatch = f;
  }), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/lang"), f = w("./bidihandler").BidiHandler, a = w("./config"), l = w("./lib/event_emitter").EventEmitter, t = w("./selection").Selection, e = w("./mode/text").Mode, n = w("./range").Range, r = w("./document").Document, i = w("./background_tokenizer").BackgroundTokenizer, s = w("./search_highlight").SearchHighlight, c = function(g, m) {
      this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++c.$uid, this.$foldData.toString = function() {
        return this.join(`
`);
      }, this.bgTokenizer = new i(new e().getTokenizer(), this);
      var y = this;
      this.bgTokenizer.on("update", function(x) {
        y._signal("tokenizerUpdate", x);
      }), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof g != "object" || !g.getLine) && (g = new r(g)), this.setDocument(g), this.selection = new t(this), this.$bidiHandler = new f(this), a.resetOptions(this), this.setMode(m), a._signal("session", this), this.destroyed = !1;
    };
    c.$uid = 0, function() {
      S.implement(this, l), this.setDocument = function(h) {
        this.doc && this.doc.off("change", this.$onChange), this.doc = h, h.on("change", this.$onChange, !0), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
      }, this.getDocument = function() {
        return this.doc;
      }, this.$resetRowCache = function(h) {
        if (!h) {
          this.$docRowCache = [], this.$screenRowCache = [];
          return;
        }
        var v = this.$docRowCache.length, C = this.$getRowCacheIndex(this.$docRowCache, h) + 1;
        v > C && (this.$docRowCache.splice(C, v), this.$screenRowCache.splice(C, v));
      }, this.$getRowCacheIndex = function(h, v) {
        for (var C = 0, _ = h.length - 1; C <= _; ) {
          var A = C + _ >> 1, R = h[A];
          if (v > R)
            C = A + 1;
          else if (v < R)
            _ = A - 1;
          else
            return A;
        }
        return C - 1;
      }, this.resetCaches = function() {
        this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0);
      }, this.onChangeFold = function(h) {
        var v = h.data;
        this.$resetRowCache(v.start.row);
      }, this.onChange = function(h) {
        this.$modified = !0, this.$bidiHandler.onChange(h), this.$resetRowCache(h.start.row);
        var v = this.$updateInternalDataOnChange(h);
        !this.$fromUndo && this.$undoManager && (v && v.length && (this.$undoManager.add({
          action: "removeFolds",
          folds: v
        }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(h, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(h), this._signal("change", h);
      }, this.setValue = function(h) {
        this.doc.setValue(h), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
      }, this.getValue = this.toString = function() {
        return this.doc.getValue();
      }, this.getSelection = function() {
        return this.selection;
      }, this.getState = function(h) {
        return this.bgTokenizer.getState(h);
      }, this.getTokens = function(h) {
        return this.bgTokenizer.getTokens(h);
      }, this.getTokenAt = function(h, v) {
        var C = this.bgTokenizer.getTokens(h), _, A = 0;
        if (v == null) {
          var R = C.length - 1;
          A = this.getLine(h).length;
        } else
          for (var R = 0; R < C.length && (A += C[R].value.length, !(A >= v)); R++)
            ;
        return _ = C[R], _ ? (_.index = R, _.start = A - _.value.length, _) : null;
      }, this.setUndoManager = function(h) {
        if (this.$undoManager = h, this.$informUndoManager && this.$informUndoManager.cancel(), h) {
          var v = this;
          h.addSession(this), this.$syncInformUndoManager = function() {
            v.$informUndoManager.cancel(), v.mergeUndoDeltas = !1;
          }, this.$informUndoManager = k.delayedCall(this.$syncInformUndoManager);
        } else
          this.$syncInformUndoManager = function() {
          };
      }, this.markUndoGroup = function() {
        this.$syncInformUndoManager && this.$syncInformUndoManager();
      }, this.$defaultUndoManager = {
        undo: function() {
        },
        redo: function() {
        },
        hasUndo: function() {
        },
        hasRedo: function() {
        },
        reset: function() {
        },
        add: function() {
        },
        addSelection: function() {
        },
        startNewGroup: function() {
        },
        addSession: function() {
        }
      }, this.getUndoManager = function() {
        return this.$undoManager || this.$defaultUndoManager;
      }, this.getTabString = function() {
        return this.getUseSoftTabs() ? k.stringRepeat(" ", this.getTabSize()) : "	";
      }, this.setUseSoftTabs = function(h) {
        this.setOption("useSoftTabs", h);
      }, this.getUseSoftTabs = function() {
        return this.$useSoftTabs && !this.$mode.$indentWithTabs;
      }, this.setTabSize = function(h) {
        this.setOption("tabSize", h);
      }, this.getTabSize = function() {
        return this.$tabSize;
      }, this.isTabStop = function(h) {
        return this.$useSoftTabs && h.column % this.$tabSize === 0;
      }, this.setNavigateWithinSoftTabs = function(h) {
        this.setOption("navigateWithinSoftTabs", h);
      }, this.getNavigateWithinSoftTabs = function() {
        return this.$navigateWithinSoftTabs;
      }, this.$overwrite = !1, this.setOverwrite = function(h) {
        this.setOption("overwrite", h);
      }, this.getOverwrite = function() {
        return this.$overwrite;
      }, this.toggleOverwrite = function() {
        this.setOverwrite(!this.$overwrite);
      }, this.addGutterDecoration = function(h, v) {
        this.$decorations[h] || (this.$decorations[h] = ""), this.$decorations[h] += " " + v, this._signal("changeBreakpoint", {});
      }, this.removeGutterDecoration = function(h, v) {
        this.$decorations[h] = (this.$decorations[h] || "").replace(" " + v, ""), this._signal("changeBreakpoint", {});
      }, this.getBreakpoints = function() {
        return this.$breakpoints;
      }, this.setBreakpoints = function(h) {
        this.$breakpoints = [];
        for (var v = 0; v < h.length; v++)
          this.$breakpoints[h[v]] = "ace_breakpoint";
        this._signal("changeBreakpoint", {});
      }, this.clearBreakpoints = function() {
        this.$breakpoints = [], this._signal("changeBreakpoint", {});
      }, this.setBreakpoint = function(h, v) {
        v === void 0 && (v = "ace_breakpoint"), v ? this.$breakpoints[h] = v : delete this.$breakpoints[h], this._signal("changeBreakpoint", {});
      }, this.clearBreakpoint = function(h) {
        delete this.$breakpoints[h], this._signal("changeBreakpoint", {});
      }, this.addMarker = function(h, v, C, _) {
        var A = this.$markerId++, R = {
          range: h,
          type: C || "line",
          renderer: typeof C == "function" ? C : null,
          clazz: v,
          inFront: !!_,
          id: A
        };
        return _ ? (this.$frontMarkers[A] = R, this._signal("changeFrontMarker")) : (this.$backMarkers[A] = R, this._signal("changeBackMarker")), A;
      }, this.addDynamicMarker = function(h, v) {
        if (!!h.update) {
          var C = this.$markerId++;
          return h.id = C, h.inFront = !!v, v ? (this.$frontMarkers[C] = h, this._signal("changeFrontMarker")) : (this.$backMarkers[C] = h, this._signal("changeBackMarker")), h;
        }
      }, this.removeMarker = function(h) {
        var v = this.$frontMarkers[h] || this.$backMarkers[h];
        if (!!v) {
          var C = v.inFront ? this.$frontMarkers : this.$backMarkers;
          delete C[h], this._signal(v.inFront ? "changeFrontMarker" : "changeBackMarker");
        }
      }, this.getMarkers = function(h) {
        return h ? this.$frontMarkers : this.$backMarkers;
      }, this.highlight = function(h) {
        if (!this.$searchHighlight) {
          var v = new s(null, "ace_selected-word", "text");
          this.$searchHighlight = this.addDynamicMarker(v);
        }
        this.$searchHighlight.setRegexp(h);
      }, this.highlightLines = function(h, v, C, _) {
        typeof v != "number" && (C = v, v = h), C || (C = "ace_step");
        var A = new n(h, 0, v, 1 / 0);
        return A.id = this.addMarker(A, C, "fullLine", _), A;
      }, this.setAnnotations = function(h) {
        this.$annotations = h, this._signal("changeAnnotation", {});
      }, this.getAnnotations = function() {
        return this.$annotations || [];
      }, this.clearAnnotations = function() {
        this.setAnnotations([]);
      }, this.$detectNewLine = function(h) {
        var v = h.match(/^.*?(\r?\n)/m);
        v ? this.$autoNewLine = v[1] : this.$autoNewLine = `
`;
      }, this.getWordRange = function(h, v) {
        var C = this.getLine(h), _ = !1;
        if (v > 0 && (_ = !!C.charAt(v - 1).match(this.tokenRe)), _ || (_ = !!C.charAt(v).match(this.tokenRe)), _)
          var A = this.tokenRe;
        else if (/^\s+$/.test(C.slice(v - 1, v + 1)))
          var A = /\s/;
        else
          var A = this.nonTokenRe;
        var R = v;
        if (R > 0) {
          do
            R--;
          while (R >= 0 && C.charAt(R).match(A));
          R++;
        }
        for (var T = v; T < C.length && C.charAt(T).match(A); )
          T++;
        return new n(h, R, h, T);
      }, this.getAWordRange = function(h, v) {
        for (var C = this.getWordRange(h, v), _ = this.getLine(C.end.row); _.charAt(C.end.column).match(/[ \t]/); )
          C.end.column += 1;
        return C;
      }, this.setNewLineMode = function(h) {
        this.doc.setNewLineMode(h);
      }, this.getNewLineMode = function() {
        return this.doc.getNewLineMode();
      }, this.setUseWorker = function(h) {
        this.setOption("useWorker", h);
      }, this.getUseWorker = function() {
        return this.$useWorker;
      }, this.onReloadTokenizer = function(h) {
        var v = h.data;
        this.bgTokenizer.start(v.first), this._signal("tokenizerUpdate", h);
      }, this.$modes = a.$modes, this.$mode = null, this.$modeId = null, this.setMode = function(h, v) {
        if (h && typeof h == "object") {
          if (h.getTokenizer)
            return this.$onChangeMode(h);
          var C = h, _ = C.path;
        } else
          _ = h || "ace/mode/text";
        if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new e()), this.$modes[_] && !C) {
          this.$onChangeMode(this.$modes[_]), v && v();
          return;
        }
        this.$modeId = _, a.loadModule(["mode", _], function(A) {
          if (this.$modeId !== _)
            return v && v();
          this.$modes[_] && !C ? this.$onChangeMode(this.$modes[_]) : A && A.Mode && (A = new A.Mode(C), C || (this.$modes[_] = A, A.$id = _), this.$onChangeMode(A)), v && v();
        }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
      }, this.$onChangeMode = function(h, v) {
        if (v || (this.$modeId = h.$id), this.$mode !== h) {
          var C = this.$mode;
          this.$mode = h, this.$stopWorker(), this.$useWorker && this.$startWorker();
          var _ = h.getTokenizer();
          if (_.on !== void 0) {
            var A = this.onReloadTokenizer.bind(this);
            _.on("update", A);
          }
          this.bgTokenizer.setTokenizer(_), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = h.tokenRe, this.nonTokenRe = h.nonTokenRe, v || (h.attachToSession && h.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(h.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", { oldMode: C, mode: h }));
        }
      }, this.$stopWorker = function() {
        this.$worker && (this.$worker.terminate(), this.$worker = null);
      }, this.$startWorker = function() {
        try {
          this.$worker = this.$mode.createWorker(this);
        } catch (h) {
          a.warn("Could not load worker", h), this.$worker = null;
        }
      }, this.getMode = function() {
        return this.$mode;
      }, this.$scrollTop = 0, this.setScrollTop = function(h) {
        this.$scrollTop === h || isNaN(h) || (this.$scrollTop = h, this._signal("changeScrollTop", h));
      }, this.getScrollTop = function() {
        return this.$scrollTop;
      }, this.$scrollLeft = 0, this.setScrollLeft = function(h) {
        this.$scrollLeft === h || isNaN(h) || (this.$scrollLeft = h, this._signal("changeScrollLeft", h));
      }, this.getScrollLeft = function() {
        return this.$scrollLeft;
      }, this.getScreenWidth = function() {
        return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
      }, this.getLineWidgetMaxWidth = function() {
        if (this.lineWidgetsWidth != null)
          return this.lineWidgetsWidth;
        var h = 0;
        return this.lineWidgets.forEach(function(v) {
          v && v.screenWidth > h && (h = v.screenWidth);
        }), this.lineWidgetWidth = h;
      }, this.$computeWidth = function(h) {
        if (this.$modified || h) {
          if (this.$modified = !1, this.$useWrapMode)
            return this.screenWidth = this.$wrapLimit;
          for (var v = this.doc.getAllLines(), C = this.$rowLengthCache, _ = 0, A = 0, R = this.$foldData[A], T = R ? R.start.row : 1 / 0, E = v.length, M = 0; M < E; M++) {
            if (M > T) {
              if (M = R.end.row + 1, M >= E)
                break;
              R = this.$foldData[A++], T = R ? R.start.row : 1 / 0;
            }
            C[M] == null && (C[M] = this.$getStringScreenWidth(v[M])[0]), C[M] > _ && (_ = C[M]);
          }
          this.screenWidth = _;
        }
      }, this.getLine = function(h) {
        return this.doc.getLine(h);
      }, this.getLines = function(h, v) {
        return this.doc.getLines(h, v);
      }, this.getLength = function() {
        return this.doc.getLength();
      }, this.getTextRange = function(h) {
        return this.doc.getTextRange(h || this.selection.getRange());
      }, this.insert = function(h, v) {
        return this.doc.insert(h, v);
      }, this.remove = function(h) {
        return this.doc.remove(h);
      }, this.removeFullLines = function(h, v) {
        return this.doc.removeFullLines(h, v);
      }, this.undoChanges = function(h, v) {
        if (!!h.length) {
          this.$fromUndo = !0;
          for (var C = h.length - 1; C != -1; C--) {
            var _ = h[C];
            _.action == "insert" || _.action == "remove" ? this.doc.revertDelta(_) : _.folds && this.addFolds(_.folds);
          }
          !v && this.$undoSelect && (h.selectionBefore ? this.selection.fromJSON(h.selectionBefore) : this.selection.setRange(this.$getUndoSelection(h, !0))), this.$fromUndo = !1;
        }
      }, this.redoChanges = function(h, v) {
        if (!!h.length) {
          this.$fromUndo = !0;
          for (var C = 0; C < h.length; C++) {
            var _ = h[C];
            (_.action == "insert" || _.action == "remove") && this.doc.$safeApplyDelta(_);
          }
          !v && this.$undoSelect && (h.selectionAfter ? this.selection.fromJSON(h.selectionAfter) : this.selection.setRange(this.$getUndoSelection(h, !1))), this.$fromUndo = !1;
        }
      }, this.setUndoSelect = function(h) {
        this.$undoSelect = h;
      }, this.$getUndoSelection = function(h, v) {
        function C(E) {
          return v ? E.action !== "insert" : E.action === "insert";
        }
        for (var _, A, R = 0; R < h.length; R++) {
          var T = h[R];
          if (!!T.start) {
            if (!_) {
              C(T) ? _ = n.fromPoints(T.start, T.end) : _ = n.fromPoints(T.start, T.start);
              continue;
            }
            C(T) ? (A = T.start, _.compare(A.row, A.column) == -1 && _.setStart(A), A = T.end, _.compare(A.row, A.column) == 1 && _.setEnd(A)) : (A = T.start, _.compare(A.row, A.column) == -1 && (_ = n.fromPoints(T.start, T.start)));
          }
        }
        return _;
      }, this.replace = function(h, v) {
        return this.doc.replace(h, v);
      }, this.moveText = function(h, v, C) {
        var _ = this.getTextRange(h), A = this.getFoldsInRange(h), R = n.fromPoints(v, v);
        if (!C) {
          this.remove(h);
          var T = h.start.row - h.end.row, E = T ? -h.end.column : h.start.column - h.end.column;
          E && (R.start.row == h.end.row && R.start.column > h.end.column && (R.start.column += E), R.end.row == h.end.row && R.end.column > h.end.column && (R.end.column += E)), T && R.start.row >= h.end.row && (R.start.row += T, R.end.row += T);
        }
        if (R.end = this.insert(R.start, _), A.length) {
          var M = h.start, O = R.start, T = O.row - M.row, E = O.column - M.column;
          this.addFolds(A.map(function(z) {
            return z = z.clone(), z.start.row == M.row && (z.start.column += E), z.end.row == M.row && (z.end.column += E), z.start.row += T, z.end.row += T, z;
          }));
        }
        return R;
      }, this.indentRows = function(h, v, C) {
        C = C.replace(/\t/g, this.getTabString());
        for (var _ = h; _ <= v; _++)
          this.doc.insertInLine({ row: _, column: 0 }, C);
      }, this.outdentRows = function(h) {
        for (var v = h.collapseRows(), C = new n(0, 0, 0, 0), _ = this.getTabSize(), A = v.start.row; A <= v.end.row; ++A) {
          var R = this.getLine(A);
          C.start.row = A, C.end.row = A;
          for (var T = 0; T < _ && R.charAt(T) == " "; ++T)
            ;
          T < _ && R.charAt(T) == "	" ? (C.start.column = T, C.end.column = T + 1) : (C.start.column = 0, C.end.column = T), this.remove(C);
        }
      }, this.$moveLines = function(h, v, C) {
        if (h = this.getRowFoldStart(h), v = this.getRowFoldEnd(v), C < 0) {
          var _ = this.getRowFoldStart(h + C);
          if (_ < 0)
            return 0;
          var A = _ - h;
        } else if (C > 0) {
          var _ = this.getRowFoldEnd(v + C);
          if (_ > this.doc.getLength() - 1)
            return 0;
          var A = _ - v;
        } else {
          h = this.$clipRowToDocument(h), v = this.$clipRowToDocument(v);
          var A = v - h + 1;
        }
        var R = new n(h, 0, v, Number.MAX_VALUE), T = this.getFoldsInRange(R).map(function(M) {
          return M = M.clone(), M.start.row += A, M.end.row += A, M;
        }), E = C == 0 ? this.doc.getLines(h, v) : this.doc.removeFullLines(h, v);
        return this.doc.insertFullLines(h + A, E), T.length && this.addFolds(T), A;
      }, this.moveLinesUp = function(h, v) {
        return this.$moveLines(h, v, -1);
      }, this.moveLinesDown = function(h, v) {
        return this.$moveLines(h, v, 1);
      }, this.duplicateLines = function(h, v) {
        return this.$moveLines(h, v, 0);
      }, this.$clipRowToDocument = function(h) {
        return Math.max(0, Math.min(h, this.doc.getLength() - 1));
      }, this.$clipColumnToRow = function(h, v) {
        return v < 0 ? 0 : Math.min(this.doc.getLine(h).length, v);
      }, this.$clipPositionToDocument = function(h, v) {
        if (v = Math.max(0, v), h < 0)
          h = 0, v = 0;
        else {
          var C = this.doc.getLength();
          h >= C ? (h = C - 1, v = this.doc.getLine(C - 1).length) : v = Math.min(this.doc.getLine(h).length, v);
        }
        return {
          row: h,
          column: v
        };
      }, this.$clipRangeToDocument = function(h) {
        h.start.row < 0 ? (h.start.row = 0, h.start.column = 0) : h.start.column = this.$clipColumnToRow(h.start.row, h.start.column);
        var v = this.doc.getLength() - 1;
        return h.end.row > v ? (h.end.row = v, h.end.column = this.doc.getLine(v).length) : h.end.column = this.$clipColumnToRow(h.end.row, h.end.column), h;
      }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
        min: null,
        max: null
      }, this.setUseWrapMode = function(h) {
        if (h != this.$useWrapMode) {
          if (this.$useWrapMode = h, this.$modified = !0, this.$resetRowCache(0), h) {
            var v = this.getLength();
            this.$wrapData = Array(v), this.$updateWrapData(0, v - 1);
          }
          this._signal("changeWrapMode");
        }
      }, this.getUseWrapMode = function() {
        return this.$useWrapMode;
      }, this.setWrapLimitRange = function(h, v) {
        (this.$wrapLimitRange.min !== h || this.$wrapLimitRange.max !== v) && (this.$wrapLimitRange = { min: h, max: v }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
      }, this.adjustWrapLimit = function(h, v) {
        var C = this.$wrapLimitRange;
        C.max < 0 && (C = { min: v, max: v });
        var _ = this.$constrainWrapLimit(h, C.min, C.max);
        return _ != this.$wrapLimit && _ > 1 ? (this.$wrapLimit = _, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
      }, this.$constrainWrapLimit = function(h, v, C) {
        return v && (h = Math.max(v, h)), C && (h = Math.min(C, h)), h;
      }, this.getWrapLimit = function() {
        return this.$wrapLimit;
      }, this.setWrapLimit = function(h) {
        this.setWrapLimitRange(h, h);
      }, this.getWrapLimitRange = function() {
        return {
          min: this.$wrapLimitRange.min,
          max: this.$wrapLimitRange.max
        };
      }, this.$updateInternalDataOnChange = function(h) {
        var v = this.$useWrapMode, C = h.action, _ = h.start, A = h.end, R = _.row, T = A.row, E = T - R, M = null;
        if (this.$updating = !0, E != 0)
          if (C === "remove") {
            this[v ? "$wrapData" : "$rowLengthCache"].splice(R, E);
            var O = this.$foldData;
            M = this.getFoldsInRange(h), this.removeFolds(M);
            var B = this.getFoldLine(A.row), H = 0;
            if (B) {
              B.addRemoveChars(A.row, A.column, _.column - A.column), B.shiftRow(-E);
              var z = this.getFoldLine(R);
              z && z !== B && (z.merge(B), B = z), H = O.indexOf(B) + 1;
            }
            for (H; H < O.length; H++) {
              var B = O[H];
              B.start.row >= A.row && B.shiftRow(-E);
            }
            T = R;
          } else {
            var I = Array(E);
            I.unshift(R, 0);
            var D = v ? this.$wrapData : this.$rowLengthCache;
            D.splice.apply(D, I);
            var O = this.$foldData, B = this.getFoldLine(R), H = 0;
            if (B) {
              var P = B.range.compareInside(_.row, _.column);
              P == 0 ? (B = B.split(_.row, _.column), B && (B.shiftRow(E), B.addRemoveChars(T, 0, A.column - _.column))) : P == -1 && (B.addRemoveChars(R, 0, A.column - _.column), B.shiftRow(E)), H = O.indexOf(B) + 1;
            }
            for (H; H < O.length; H++) {
              var B = O[H];
              B.start.row >= R && B.shiftRow(E);
            }
          }
        else {
          E = Math.abs(h.start.column - h.end.column), C === "remove" && (M = this.getFoldsInRange(h), this.removeFolds(M), E = -E);
          var B = this.getFoldLine(R);
          B && B.addRemoveChars(R, _.column, E);
        }
        return v && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, v ? this.$updateWrapData(R, T) : this.$updateRowLengthCache(R, T), M;
      }, this.$updateRowLengthCache = function(h, v, C) {
        this.$rowLengthCache[h] = null, this.$rowLengthCache[v] = null;
      }, this.$updateWrapData = function(h, v) {
        var C = this.doc.getAllLines(), _ = this.getTabSize(), A = this.$wrapData, R = this.$wrapLimit, T, E, M = h;
        for (v = Math.min(v, C.length - 1); M <= v; )
          E = this.getFoldLine(M, E), E ? (T = [], E.walk(function(O, B, H, z) {
            var I;
            if (O != null) {
              I = this.$getDisplayTokens(O, T.length), I[0] = y;
              for (var D = 1; D < I.length; D++)
                I[D] = x;
            } else
              I = this.$getDisplayTokens(C[B].substring(z, H), T.length);
            T = T.concat(I);
          }.bind(this), E.end.row, C[E.end.row].length + 1), A[E.start.row] = this.$computeWrapSplits(T, R, _), M = E.end.row + 1) : (T = this.$getDisplayTokens(C[M]), A[M] = this.$computeWrapSplits(T, R, _), M++);
      };
      var g = 1, m = 2, y = 3, x = 4, o = 9, d = 10, b = 11, u = 12;
      this.$computeWrapSplits = function(h, v, C) {
        if (h.length == 0)
          return [];
        var _ = [], A = h.length, R = 0, T = 0, E = this.$wrapAsCode, M = this.$indentedSoftWrap, O = v <= Math.max(2 * C, 8) || M === !1 ? 0 : Math.floor(v / 2);
        function B() {
          var P = 0;
          if (O === 0)
            return P;
          if (M)
            for (var U = 0; U < h.length; U++) {
              var Z = h[U];
              if (Z == d)
                P += 1;
              else if (Z == b)
                P += C;
              else {
                if (Z == u)
                  continue;
                break;
              }
            }
          return E && M !== !1 && (P += C), Math.min(P, O);
        }
        function H(P) {
          for (var U = P - R, Z = R; Z < P; Z++) {
            var K = h[Z];
            (K === 12 || K === 2) && (U -= 1);
          }
          _.length || (z = B(), _.indent = z), T += U, _.push(T), R = P;
        }
        for (var z = 0; A - R > v - z; ) {
          var I = R + v - z;
          if (h[I - 1] >= d && h[I] >= d) {
            H(I);
            continue;
          }
          if (h[I] == y || h[I] == x) {
            for (I; I != R - 1 && h[I] != y; I--)
              ;
            if (I > R) {
              H(I);
              continue;
            }
            for (I = R + v, I; I < h.length && h[I] == x; I++)
              ;
            if (I == h.length)
              break;
            H(I);
            continue;
          }
          for (var D = Math.max(I - (v - (v >> 2)), R - 1); I > D && h[I] < y; )
            I--;
          if (E) {
            for (; I > D && h[I] < y; )
              I--;
            for (; I > D && h[I] == o; )
              I--;
          } else
            for (; I > D && h[I] < d; )
              I--;
          if (I > D) {
            H(++I);
            continue;
          }
          I = R + v, h[I] == m && I--, H(I - z);
        }
        return _;
      }, this.$getDisplayTokens = function(h, v) {
        var C = [], _;
        v = v || 0;
        for (var A = 0; A < h.length; A++) {
          var R = h.charCodeAt(A);
          if (R == 9) {
            _ = this.getScreenTabSize(C.length + v), C.push(b);
            for (var T = 1; T < _; T++)
              C.push(u);
          } else
            R == 32 ? C.push(d) : R > 39 && R < 48 || R > 57 && R < 64 ? C.push(o) : R >= 4352 && p(R) ? C.push(g, m) : C.push(g);
        }
        return C;
      }, this.$getStringScreenWidth = function(h, v, C) {
        if (v == 0)
          return [0, 0];
        v == null && (v = 1 / 0), C = C || 0;
        var _, A;
        for (A = 0; A < h.length && (_ = h.charCodeAt(A), _ == 9 ? C += this.getScreenTabSize(C) : _ >= 4352 && p(_) ? C += 2 : C += 1, !(C > v)); A++)
          ;
        return [C, A];
      }, this.lineWidgets = null, this.getRowLength = function(h) {
        var v = 1;
        return this.lineWidgets && (v += this.lineWidgets[h] && this.lineWidgets[h].rowCount || 0), !this.$useWrapMode || !this.$wrapData[h] ? v : this.$wrapData[h].length + v;
      }, this.getRowLineCount = function(h) {
        return !this.$useWrapMode || !this.$wrapData[h] ? 1 : this.$wrapData[h].length + 1;
      }, this.getRowWrapIndent = function(h) {
        if (this.$useWrapMode) {
          var v = this.screenToDocumentPosition(h, Number.MAX_VALUE), C = this.$wrapData[v.row];
          return C.length && C[0] < v.column ? C.indent : 0;
        } else
          return 0;
      }, this.getScreenLastRowColumn = function(h) {
        var v = this.screenToDocumentPosition(h, Number.MAX_VALUE);
        return this.documentToScreenColumn(v.row, v.column);
      }, this.getDocumentLastRowColumn = function(h, v) {
        var C = this.documentToScreenRow(h, v);
        return this.getScreenLastRowColumn(C);
      }, this.getDocumentLastRowColumnPosition = function(h, v) {
        var C = this.documentToScreenRow(h, v);
        return this.screenToDocumentPosition(C, Number.MAX_VALUE / 10);
      }, this.getRowSplitData = function(h) {
        if (this.$useWrapMode)
          return this.$wrapData[h];
      }, this.getScreenTabSize = function(h) {
        return this.$tabSize - (h % this.$tabSize | 0);
      }, this.screenToDocumentRow = function(h, v) {
        return this.screenToDocumentPosition(h, v).row;
      }, this.screenToDocumentColumn = function(h, v) {
        return this.screenToDocumentPosition(h, v).column;
      }, this.screenToDocumentPosition = function(h, v, C) {
        if (h < 0)
          return { row: 0, column: 0 };
        var _, A = 0, R = 0, T, E = 0, M = 0, O = this.$screenRowCache, B = this.$getRowCacheIndex(O, h), H = O.length;
        if (H && B >= 0)
          var E = O[B], A = this.$docRowCache[B], z = h > O[H - 1];
        else
          var z = !H;
        for (var I = this.getLength() - 1, D = this.getNextFoldLine(A), P = D ? D.start.row : 1 / 0; E <= h && (M = this.getRowLength(A), !(E + M > h || A >= I)); )
          E += M, A++, A > P && (A = D.end.row + 1, D = this.getNextFoldLine(A, D), P = D ? D.start.row : 1 / 0), z && (this.$docRowCache.push(A), this.$screenRowCache.push(E));
        if (D && D.start.row <= A)
          _ = this.getFoldDisplayLine(D), A = D.start.row;
        else {
          if (E + M <= h || A > I)
            return {
              row: I,
              column: this.getLine(I).length
            };
          _ = this.getLine(A), D = null;
        }
        var U = 0, Z = Math.floor(h - E);
        if (this.$useWrapMode) {
          var K = this.$wrapData[A];
          K && (T = K[Z], Z > 0 && K.length && (U = K.indent, R = K[Z - 1] || K[K.length - 1], _ = _.substring(R)));
        }
        return C !== void 0 && this.$bidiHandler.isBidiRow(E + Z, A, Z) && (v = this.$bidiHandler.offsetToCol(C)), R += this.$getStringScreenWidth(_, v - U)[1], this.$useWrapMode && R >= T && (R = T - 1), D ? D.idxToPosition(R) : { row: A, column: R };
      }, this.documentToScreenPosition = function(h, v) {
        if (typeof v > "u")
          var C = this.$clipPositionToDocument(h.row, h.column);
        else
          C = this.$clipPositionToDocument(h, v);
        h = C.row, v = C.column;
        var _ = 0, A = null, R = null;
        R = this.getFoldAt(h, v, 1), R && (h = R.start.row, v = R.start.column);
        var T, E = 0, M = this.$docRowCache, O = this.$getRowCacheIndex(M, h), B = M.length;
        if (B && O >= 0)
          var E = M[O], _ = this.$screenRowCache[O], H = h > M[B - 1];
        else
          var H = !B;
        for (var z = this.getNextFoldLine(E), I = z ? z.start.row : 1 / 0; E < h; ) {
          if (E >= I) {
            if (T = z.end.row + 1, T > h)
              break;
            z = this.getNextFoldLine(T, z), I = z ? z.start.row : 1 / 0;
          } else
            T = E + 1;
          _ += this.getRowLength(E), E = T, H && (this.$docRowCache.push(E), this.$screenRowCache.push(_));
        }
        var D = "";
        z && E >= I ? (D = this.getFoldDisplayLine(z, h, v), A = z.start.row) : (D = this.getLine(h).substring(0, v), A = h);
        var P = 0;
        if (this.$useWrapMode) {
          var U = this.$wrapData[A];
          if (U) {
            for (var Z = 0; D.length >= U[Z]; )
              _++, Z++;
            D = D.substring(U[Z - 1] || 0, D.length), P = Z > 0 ? U.indent : 0;
          }
        }
        return this.lineWidgets && this.lineWidgets[E] && this.lineWidgets[E].rowsAbove && (_ += this.lineWidgets[E].rowsAbove), {
          row: _,
          column: P + this.$getStringScreenWidth(D)[0]
        };
      }, this.documentToScreenColumn = function(h, v) {
        return this.documentToScreenPosition(h, v).column;
      }, this.documentToScreenRow = function(h, v) {
        return this.documentToScreenPosition(h, v).row;
      }, this.getScreenLength = function() {
        var h = 0, v = null;
        if (this.$useWrapMode)
          for (var A = this.$wrapData.length, R = 0, _ = 0, v = this.$foldData[_++], T = v ? v.start.row : 1 / 0; R < A; ) {
            var E = this.$wrapData[R];
            h += E ? E.length + 1 : 1, R++, R > T && (R = v.end.row + 1, v = this.$foldData[_++], T = v ? v.start.row : 1 / 0);
          }
        else {
          h = this.getLength();
          for (var C = this.$foldData, _ = 0; _ < C.length; _++)
            v = C[_], h -= v.end.row - v.start.row;
        }
        return this.lineWidgets && (h += this.$getWidgetScreenLength()), h;
      }, this.$setFontMetrics = function(h) {
        !this.$enableVarChar || (this.$getStringScreenWidth = function(v, C, _) {
          if (C === 0)
            return [0, 0];
          C || (C = 1 / 0), _ = _ || 0;
          var A, R;
          for (R = 0; R < v.length && (A = v.charAt(R), A === "	" ? _ += this.getScreenTabSize(_) : _ += h.getCharacterWidth(A), !(_ > C)); R++)
            ;
          return [_, R];
        });
      }, this.destroy = function() {
        this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = !0), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection.detach();
      }, this.isFullWidth = p;
      function p(h) {
        return h < 4352 ? !1 : h >= 4352 && h <= 4447 || h >= 4515 && h <= 4519 || h >= 4602 && h <= 4607 || h >= 9001 && h <= 9002 || h >= 11904 && h <= 11929 || h >= 11931 && h <= 12019 || h >= 12032 && h <= 12245 || h >= 12272 && h <= 12283 || h >= 12288 && h <= 12350 || h >= 12353 && h <= 12438 || h >= 12441 && h <= 12543 || h >= 12549 && h <= 12589 || h >= 12593 && h <= 12686 || h >= 12688 && h <= 12730 || h >= 12736 && h <= 12771 || h >= 12784 && h <= 12830 || h >= 12832 && h <= 12871 || h >= 12880 && h <= 13054 || h >= 13056 && h <= 19903 || h >= 19968 && h <= 42124 || h >= 42128 && h <= 42182 || h >= 43360 && h <= 43388 || h >= 44032 && h <= 55203 || h >= 55216 && h <= 55238 || h >= 55243 && h <= 55291 || h >= 63744 && h <= 64255 || h >= 65040 && h <= 65049 || h >= 65072 && h <= 65106 || h >= 65108 && h <= 65126 || h >= 65128 && h <= 65131 || h >= 65281 && h <= 65376 || h >= 65504 && h <= 65510;
      }
    }.call(c.prototype), w("./edit_session/folding").Folding.call(c.prototype), w("./edit_session/bracket_match").BracketMatch.call(c.prototype), a.defineOptions(c.prototype, "session", {
      wrap: {
        set: function(g) {
          if (!g || g == "off" ? g = !1 : g == "free" ? g = !0 : g == "printMargin" ? g = -1 : typeof g == "string" && (g = parseInt(g, 10) || !1), this.$wrap != g)
            if (this.$wrap = g, !g)
              this.setUseWrapMode(!1);
            else {
              var m = typeof g == "number" ? g : null;
              this.setWrapLimitRange(m, m), this.setUseWrapMode(!0);
            }
        },
        get: function() {
          return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
        },
        handlesSet: !0
      },
      wrapMethod: {
        set: function(g) {
          g = g == "auto" ? this.$mode.type != "text" : g != "text", g != this.$wrapAsCode && (this.$wrapAsCode = g, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
        },
        initialValue: "auto"
      },
      indentedSoftWrap: {
        set: function() {
          this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0));
        },
        initialValue: !0
      },
      firstLineNumber: {
        set: function() {
          this._signal("changeBreakpoint");
        },
        initialValue: 1
      },
      useWorker: {
        set: function(g) {
          this.$useWorker = g, this.$stopWorker(), g && this.$startWorker();
        },
        initialValue: !0
      },
      useSoftTabs: { initialValue: !0 },
      tabSize: {
        set: function(g) {
          g = parseInt(g), g > 0 && this.$tabSize !== g && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = g, this._signal("changeTabSize"));
        },
        initialValue: 4,
        handlesSet: !0
      },
      navigateWithinSoftTabs: { initialValue: !1 },
      foldStyle: {
        set: function(g) {
          this.setFoldStyle(g);
        },
        handlesSet: !0
      },
      overwrite: {
        set: function(g) {
          this._signal("changeOverwrite");
        },
        initialValue: !1
      },
      newLineMode: {
        set: function(g) {
          this.doc.setNewLineMode(g);
        },
        get: function() {
          return this.doc.getNewLineMode();
        },
        handlesSet: !0
      },
      mode: {
        set: function(g) {
          this.setMode(g);
        },
        get: function() {
          return this.$modeId;
        },
        handlesSet: !0
      }
    }), $.EditSession = c;
  }), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(w, $, L) {
    var S = w("./lib/lang"), k = w("./lib/oop"), f = w("./range").Range, a = function() {
      this.$options = {};
    };
    (function() {
      this.set = function(t) {
        return k.mixin(this.$options, t), this;
      }, this.getOptions = function() {
        return S.copyObject(this.$options);
      }, this.setOptions = function(t) {
        this.$options = t;
      }, this.find = function(t) {
        var e = this.$options, n = this.$matchIterator(t, e);
        if (!n)
          return !1;
        var r = null;
        return n.forEach(function(i, s, c, g) {
          return r = new f(i, s, c, g), s == g && e.start && e.start.start && e.skipCurrent != !1 && r.isEqual(e.start) ? (r = null, !1) : !0;
        }), r;
      }, this.findAll = function(t) {
        var e = this.$options;
        if (!e.needle)
          return [];
        this.$assembleRegExp(e);
        var n = e.range, r = n ? t.getLines(n.start.row, n.end.row) : t.doc.getAllLines(), i = [], s = e.re;
        if (e.$isMultiLine) {
          var c = s.length, g = r.length - c, m;
          e:
            for (var y = s.offset || 0; y <= g; y++) {
              for (var x = 0; x < c; x++)
                if (r[y + x].search(s[x]) == -1)
                  continue e;
              var o = r[y], d = r[y + c - 1], b = o.length - o.match(s[0])[0].length, u = d.match(s[c - 1])[0].length;
              m && m.end.row === y && m.end.column > b || (i.push(m = new f(y, b, y + c - 1, u)), c > 2 && (y = y + c - 2));
            }
        } else
          for (var p = 0; p < r.length; p++)
            for (var h = S.getMatchOffsets(r[p], s), x = 0; x < h.length; x++) {
              var v = h[x];
              i.push(new f(p, v.offset, p, v.offset + v.length));
            }
        if (n) {
          for (var C = n.start.column, _ = n.start.column, p = 0, x = i.length - 1; p < x && i[p].start.column < C && i[p].start.row == n.start.row; )
            p++;
          for (; p < x && i[x].end.column > _ && i[x].end.row == n.end.row; )
            x--;
          for (i = i.slice(p, x + 1), p = 0, x = i.length; p < x; p++)
            i[p].start.row += n.start.row, i[p].end.row += n.start.row;
        }
        return i;
      }, this.replace = function(t, e) {
        var n = this.$options, r = this.$assembleRegExp(n);
        if (n.$isMultiLine)
          return e;
        if (!!r) {
          var i = r.exec(t);
          if (!i || i[0].length != t.length)
            return null;
          if (e = t.replace(r, e), n.preserveCase) {
            e = e.split("");
            for (var s = Math.min(t.length, t.length); s--; ) {
              var c = t[s];
              c && c.toLowerCase() != c ? e[s] = e[s].toUpperCase() : e[s] = e[s].toLowerCase();
            }
            e = e.join("");
          }
          return e;
        }
      }, this.$assembleRegExp = function(t, e) {
        if (t.needle instanceof RegExp)
          return t.re = t.needle;
        var n = t.needle;
        if (!t.needle)
          return t.re = !1;
        t.regExp || (n = S.escapeRegExp(n)), t.wholeWord && (n = l(n, t));
        var r = t.caseSensitive ? "gm" : "gmi";
        if (t.$isMultiLine = !e && /[\n\r]/.test(n), t.$isMultiLine)
          return t.re = this.$assembleMultilineRegExp(n, r);
        try {
          var i = new RegExp(n, r);
        } catch {
          i = !1;
        }
        return t.re = i;
      }, this.$assembleMultilineRegExp = function(t, e) {
        for (var n = t.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), r = [], i = 0; i < n.length; i++)
          try {
            r.push(new RegExp(n[i], e));
          } catch {
            return !1;
          }
        return r;
      }, this.$matchIterator = function(t, e) {
        var n = this.$assembleRegExp(e);
        if (!n)
          return !1;
        var r = e.backwards == !0, i = e.skipCurrent != !1, s = e.range, c = e.start;
        c || (c = s ? s[r ? "end" : "start"] : t.selection.getRange()), c.start && (c = c[i != r ? "end" : "start"]);
        var g = s ? s.start.row : 0, m = s ? s.end.row : t.getLength() - 1;
        if (r)
          var y = function(d) {
            var b = c.row;
            if (!o(b, c.column, d)) {
              for (b--; b >= g; b--)
                if (o(b, Number.MAX_VALUE, d))
                  return;
              if (e.wrap != !1) {
                for (b = m, g = c.row; b >= g; b--)
                  if (o(b, Number.MAX_VALUE, d))
                    return;
              }
            }
          };
        else
          var y = function(b) {
            var u = c.row;
            if (!o(u, c.column, b)) {
              for (u = u + 1; u <= m; u++)
                if (o(u, 0, b))
                  return;
              if (e.wrap != !1) {
                for (u = g, m = c.row; u <= m; u++)
                  if (o(u, 0, b))
                    return;
              }
            }
          };
        if (e.$isMultiLine)
          var x = n.length, o = function(d, b, u) {
            var p = r ? d - x + 1 : d;
            if (!(p < 0 || p + x > t.getLength())) {
              var h = t.getLine(p), v = h.search(n[0]);
              if (!(!r && v < b || v === -1)) {
                for (var C = 1; C < x; C++)
                  if (h = t.getLine(p + C), h.search(n[C]) == -1)
                    return;
                var _ = h.match(n[x - 1])[0].length;
                if (!(r && _ > b) && u(p, v, p + x - 1, _))
                  return !0;
              }
            }
          };
        else if (r)
          var o = function(b, u, p) {
            var h = t.getLine(b), v = [], C, _ = 0;
            for (n.lastIndex = 0; C = n.exec(h); ) {
              var A = C[0].length;
              if (_ = C.index, !A) {
                if (_ >= h.length)
                  break;
                n.lastIndex = _ += 1;
              }
              if (C.index + A > u)
                break;
              v.push(C.index, A);
            }
            for (var R = v.length - 1; R >= 0; R -= 2) {
              var T = v[R - 1], A = v[R];
              if (p(b, T, b, T + A))
                return !0;
            }
          };
        else
          var o = function(b, u, p) {
            var h = t.getLine(b), v, C;
            for (n.lastIndex = u; C = n.exec(h); ) {
              var _ = C[0].length;
              if (v = C.index, p(b, v, b, v + _))
                return !0;
              if (!_ && (n.lastIndex = v += 1, v >= h.length))
                return !1;
            }
          };
        return { forEach: y };
      };
    }).call(a.prototype);
    function l(t, e) {
      function n(r) {
        return /\w/.test(r) || e.regExp ? "\\b" : "";
      }
      return n(t[0]) + t + n(t[t.length - 1]);
    }
    $.Search = a;
  }), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(w, $, L) {
    var S = w("../lib/keys"), k = w("../lib/useragent"), f = S.KEY_MODS;
    function a(t, e) {
      this.platform = e || (k.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(t), this.$singleCommand = !0;
    }
    function l(t, e) {
      a.call(this, t, e), this.$singleCommand = !1;
    }
    l.prototype = a.prototype, function() {
      this.addCommand = function(e) {
        this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e);
      }, this.removeCommand = function(e, n) {
        var r = e && (typeof e == "string" ? e : e.name);
        e = this.commands[r], n || delete this.commands[r];
        var i = this.commandKeyBinding;
        for (var s in i) {
          var c = i[s];
          if (c == e)
            delete i[s];
          else if (Array.isArray(c)) {
            var g = c.indexOf(e);
            g != -1 && (c.splice(g, 1), c.length == 1 && (i[s] = c[0]));
          }
        }
      }, this.bindKey = function(e, n, r) {
        if (typeof e == "object" && e && (r == null && (r = e.position), e = e[this.platform]), !!e) {
          if (typeof n == "function")
            return this.addCommand({ exec: n, bindKey: e, name: n.name || e });
          e.split("|").forEach(function(i) {
            var s = "";
            if (i.indexOf(" ") != -1) {
              var c = i.split(/\s+/);
              i = c.pop(), c.forEach(function(y) {
                var x = this.parseKeys(y), o = f[x.hashId] + x.key;
                s += (s ? " " : "") + o, this._addCommandToBinding(s, "chainKeys");
              }, this), s += " ";
            }
            var g = this.parseKeys(i), m = f[g.hashId] + g.key;
            this._addCommandToBinding(s + m, n, r);
          }, this);
        }
      };
      function t(e) {
        return typeof e == "object" && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0);
      }
      this._addCommandToBinding = function(e, n, r) {
        var i = this.commandKeyBinding, s;
        if (!n)
          delete i[e];
        else if (!i[e] || this.$singleCommand)
          i[e] = n;
        else {
          Array.isArray(i[e]) ? (s = i[e].indexOf(n)) != -1 && i[e].splice(s, 1) : i[e] = [i[e]], typeof r != "number" && (r = t(n));
          var c = i[e];
          for (s = 0; s < c.length; s++) {
            var g = c[s], m = t(g);
            if (m > r)
              break;
          }
          c.splice(s, 0, n);
        }
      }, this.addCommands = function(e) {
        e && Object.keys(e).forEach(function(n) {
          var r = e[n];
          if (!!r) {
            if (typeof r == "string")
              return this.bindKey(r, n);
            typeof r == "function" && (r = { exec: r }), typeof r == "object" && (r.name || (r.name = n), this.addCommand(r));
          }
        }, this);
      }, this.removeCommands = function(e) {
        Object.keys(e).forEach(function(n) {
          this.removeCommand(e[n]);
        }, this);
      }, this.bindKeys = function(e) {
        Object.keys(e).forEach(function(n) {
          this.bindKey(n, e[n]);
        }, this);
      }, this._buildKeyHash = function(e) {
        this.bindKey(e.bindKey, e);
      }, this.parseKeys = function(e) {
        var n = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(m) {
          return m;
        }), r = n.pop(), i = S[r];
        if (S.FUNCTION_KEYS[i])
          r = S.FUNCTION_KEYS[i].toLowerCase();
        else if (n.length) {
          if (n.length == 1 && n[0] == "shift")
            return { key: r.toUpperCase(), hashId: -1 };
        } else
          return { key: r, hashId: -1 };
        for (var s = 0, c = n.length; c--; ) {
          var g = S.KEY_MODS[n[c]];
          if (g == null)
            return typeof console < "u" && console.error("invalid modifier " + n[c] + " in " + e), !1;
          s |= g;
        }
        return { key: r, hashId: s };
      }, this.findKeyCommand = function(n, r) {
        var i = f[n] + r;
        return this.commandKeyBinding[i];
      }, this.handleKeyboard = function(e, n, r, i) {
        if (!(i < 0)) {
          var s = f[n] + r, c = this.commandKeyBinding[s];
          return e.$keyChain && (e.$keyChain += " " + s, c = this.commandKeyBinding[e.$keyChain] || c), c && (c == "chainKeys" || c[c.length - 1] == "chainKeys") ? (e.$keyChain = e.$keyChain || s, { command: "null" }) : (e.$keyChain && ((!n || n == 4) && r.length == 1 ? e.$keyChain = e.$keyChain.slice(0, -s.length - 1) : (n == -1 || i > 0) && (e.$keyChain = "")), { command: c });
        }
      }, this.getStatusText = function(e, n) {
        return n.$keyChain || "";
      };
    }.call(a.prototype), $.HashHandler = a, $.MultiHashHandler = l;
  }), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../keyboard/hash_handler").MultiHashHandler, f = w("../lib/event_emitter").EventEmitter, a = function(l, t) {
      k.call(this, t, l), this.byName = this.commands, this.setDefaultHandler("exec", function(e) {
        return e.args ? e.command.exec(e.editor, e.args, e.event, !1) : e.command.exec(e.editor, {}, e.event, !0);
      });
    };
    S.inherits(a, k), function() {
      S.implement(this, f), this.exec = function(l, t, e) {
        if (Array.isArray(l)) {
          for (var n = l.length; n--; )
            if (this.exec(l[n], t, e))
              return !0;
          return !1;
        }
        if (typeof l == "string" && (l = this.commands[l]), !l || t && t.$readOnly && !l.readOnly || this.$checkCommandState != !1 && l.isAvailable && !l.isAvailable(t))
          return !1;
        var r = { editor: t, command: l, args: e };
        return r.returnValue = this._emit("exec", r), this._signal("afterExec", r), r.returnValue !== !1;
      }, this.toggleRecording = function(l) {
        if (!this.$inReplay)
          return l && l._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(t) {
            this.macro.push([t.command, t.args]);
          }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
      }, this.replay = function(l) {
        if (!(this.$inReplay || !this.macro)) {
          if (this.recording)
            return this.toggleRecording(l);
          try {
            this.$inReplay = !0, this.macro.forEach(function(t) {
              typeof t == "string" ? this.exec(t, l) : this.exec(t[0], l, t[1]);
            }, this);
          } finally {
            this.$inReplay = !1;
          }
        }
      }, this.trimMacro = function(l) {
        return l.map(function(t) {
          return typeof t[0] != "string" && (t[0] = t[0].name), t[1] || (t = t[0]), t;
        });
      };
    }.call(a.prototype), $.CommandManager = a;
  }), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(w, $, L) {
    var S = w("../lib/lang"), k = w("../config"), f = w("../range").Range;
    function a(t, e) {
      return { win: t, mac: e };
    }
    $.commands = [
      {
        name: "showSettingsMenu",
        description: "Show settings menu",
        bindKey: a("Ctrl-,", "Command-,"),
        exec: function(t) {
          k.loadModule("ace/ext/settings_menu", function(e) {
            e.init(t), t.showSettingsMenu();
          });
        },
        readOnly: !0
      },
      {
        name: "goToNextError",
        description: "Go to next error",
        bindKey: a("Alt-E", "F4"),
        exec: function(t) {
          k.loadModule("./ext/error_marker", function(e) {
            e.showErrorMarker(t, 1);
          });
        },
        scrollIntoView: "animate",
        readOnly: !0
      },
      {
        name: "goToPreviousError",
        description: "Go to previous error",
        bindKey: a("Alt-Shift-E", "Shift-F4"),
        exec: function(t) {
          k.loadModule("./ext/error_marker", function(e) {
            e.showErrorMarker(t, -1);
          });
        },
        scrollIntoView: "animate",
        readOnly: !0
      },
      {
        name: "selectall",
        description: "Select all",
        bindKey: a("Ctrl-A", "Command-A"),
        exec: function(t) {
          t.selectAll();
        },
        readOnly: !0
      },
      {
        name: "centerselection",
        description: "Center selection",
        bindKey: a(null, "Ctrl-L"),
        exec: function(t) {
          t.centerSelection();
        },
        readOnly: !0
      },
      {
        name: "gotoline",
        description: "Go to line...",
        bindKey: a("Ctrl-L", "Command-L"),
        exec: function(t, e) {
          typeof e == "number" && !isNaN(e) && t.gotoLine(e), t.prompt({ $type: "gotoLine" });
        },
        readOnly: !0
      },
      {
        name: "fold",
        bindKey: a("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
        exec: function(t) {
          t.session.toggleFold(!1);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "unfold",
        bindKey: a("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
        exec: function(t) {
          t.session.toggleFold(!0);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "toggleFoldWidget",
        description: "Toggle fold widget",
        bindKey: a("F2", "F2"),
        exec: function(t) {
          t.session.toggleFoldWidget();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "toggleParentFoldWidget",
        description: "Toggle parent fold widget",
        bindKey: a("Alt-F2", "Alt-F2"),
        exec: function(t) {
          t.session.toggleFoldWidget(!0);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "foldall",
        description: "Fold all",
        bindKey: a(null, "Ctrl-Command-Option-0"),
        exec: function(t) {
          t.session.foldAll();
        },
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "foldAllComments",
        description: "Fold all comments",
        bindKey: a(null, "Ctrl-Command-Option-0"),
        exec: function(t) {
          t.session.foldAllComments();
        },
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "foldOther",
        description: "Fold other",
        bindKey: a("Alt-0", "Command-Option-0"),
        exec: function(t) {
          t.session.foldAll(), t.session.unfold(t.selection.getAllRanges());
        },
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "unfoldall",
        description: "Unfold all",
        bindKey: a("Alt-Shift-0", "Command-Option-Shift-0"),
        exec: function(t) {
          t.session.unfold();
        },
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "findnext",
        description: "Find next",
        bindKey: a("Ctrl-K", "Command-G"),
        exec: function(t) {
          t.findNext();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "findprevious",
        description: "Find previous",
        bindKey: a("Ctrl-Shift-K", "Command-Shift-G"),
        exec: function(t) {
          t.findPrevious();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
      },
      {
        name: "selectOrFindNext",
        description: "Select or find next",
        bindKey: a("Alt-K", "Ctrl-G"),
        exec: function(t) {
          t.selection.isEmpty() ? t.selection.selectWord() : t.findNext();
        },
        readOnly: !0
      },
      {
        name: "selectOrFindPrevious",
        description: "Select or find previous",
        bindKey: a("Alt-Shift-K", "Ctrl-Shift-G"),
        exec: function(t) {
          t.selection.isEmpty() ? t.selection.selectWord() : t.findPrevious();
        },
        readOnly: !0
      },
      {
        name: "find",
        description: "Find",
        bindKey: a("Ctrl-F", "Command-F"),
        exec: function(t) {
          k.loadModule("ace/ext/searchbox", function(e) {
            e.Search(t);
          });
        },
        readOnly: !0
      },
      {
        name: "overwrite",
        description: "Overwrite",
        bindKey: "Insert",
        exec: function(t) {
          t.toggleOverwrite();
        },
        readOnly: !0
      },
      {
        name: "selecttostart",
        description: "Select to start",
        bindKey: a("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
        exec: function(t) {
          t.getSelection().selectFileStart();
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
      },
      {
        name: "gotostart",
        description: "Go to start",
        bindKey: a("Ctrl-Home", "Command-Home|Command-Up"),
        exec: function(t) {
          t.navigateFileStart();
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
      },
      {
        name: "selectup",
        description: "Select up",
        bindKey: a("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
        exec: function(t) {
          t.getSelection().selectUp();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "golineup",
        description: "Go line up",
        bindKey: a("Up", "Up|Ctrl-P"),
        exec: function(t, e) {
          t.navigateUp(e.times);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selecttoend",
        description: "Select to end",
        bindKey: a("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
        exec: function(t) {
          t.getSelection().selectFileEnd();
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
      },
      {
        name: "gotoend",
        description: "Go to end",
        bindKey: a("Ctrl-End", "Command-End|Command-Down"),
        exec: function(t) {
          t.navigateFileEnd();
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
      },
      {
        name: "selectdown",
        description: "Select down",
        bindKey: a("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
        exec: function(t) {
          t.getSelection().selectDown();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "golinedown",
        description: "Go line down",
        bindKey: a("Down", "Down|Ctrl-N"),
        exec: function(t, e) {
          t.navigateDown(e.times);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectwordleft",
        description: "Select word left",
        bindKey: a("Ctrl-Shift-Left", "Option-Shift-Left"),
        exec: function(t) {
          t.getSelection().selectWordLeft();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotowordleft",
        description: "Go to word left",
        bindKey: a("Ctrl-Left", "Option-Left"),
        exec: function(t) {
          t.navigateWordLeft();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selecttolinestart",
        description: "Select to line start",
        bindKey: a("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
        exec: function(t) {
          t.getSelection().selectLineStart();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotolinestart",
        description: "Go to line start",
        bindKey: a("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
        exec: function(t) {
          t.navigateLineStart();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectleft",
        description: "Select left",
        bindKey: a("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
        exec: function(t) {
          t.getSelection().selectLeft();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotoleft",
        description: "Go to left",
        bindKey: a("Left", "Left|Ctrl-B"),
        exec: function(t, e) {
          t.navigateLeft(e.times);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectwordright",
        description: "Select word right",
        bindKey: a("Ctrl-Shift-Right", "Option-Shift-Right"),
        exec: function(t) {
          t.getSelection().selectWordRight();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotowordright",
        description: "Go to word right",
        bindKey: a("Ctrl-Right", "Option-Right"),
        exec: function(t) {
          t.navigateWordRight();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selecttolineend",
        description: "Select to line end",
        bindKey: a("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
        exec: function(t) {
          t.getSelection().selectLineEnd();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotolineend",
        description: "Go to line end",
        bindKey: a("Alt-Right|End", "Command-Right|End|Ctrl-E"),
        exec: function(t) {
          t.navigateLineEnd();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectright",
        description: "Select right",
        bindKey: a("Shift-Right", "Shift-Right"),
        exec: function(t) {
          t.getSelection().selectRight();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "gotoright",
        description: "Go to right",
        bindKey: a("Right", "Right|Ctrl-F"),
        exec: function(t, e) {
          t.navigateRight(e.times);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectpagedown",
        description: "Select page down",
        bindKey: "Shift-PageDown",
        exec: function(t) {
          t.selectPageDown();
        },
        readOnly: !0
      },
      {
        name: "pagedown",
        description: "Page down",
        bindKey: a(null, "Option-PageDown"),
        exec: function(t) {
          t.scrollPageDown();
        },
        readOnly: !0
      },
      {
        name: "gotopagedown",
        description: "Go to page down",
        bindKey: a("PageDown", "PageDown|Ctrl-V"),
        exec: function(t) {
          t.gotoPageDown();
        },
        readOnly: !0
      },
      {
        name: "selectpageup",
        description: "Select page up",
        bindKey: "Shift-PageUp",
        exec: function(t) {
          t.selectPageUp();
        },
        readOnly: !0
      },
      {
        name: "pageup",
        description: "Page up",
        bindKey: a(null, "Option-PageUp"),
        exec: function(t) {
          t.scrollPageUp();
        },
        readOnly: !0
      },
      {
        name: "gotopageup",
        description: "Go to page up",
        bindKey: "PageUp",
        exec: function(t) {
          t.gotoPageUp();
        },
        readOnly: !0
      },
      {
        name: "scrollup",
        description: "Scroll up",
        bindKey: a("Ctrl-Up", null),
        exec: function(t) {
          t.renderer.scrollBy(0, -2 * t.renderer.layerConfig.lineHeight);
        },
        readOnly: !0
      },
      {
        name: "scrolldown",
        description: "Scroll down",
        bindKey: a("Ctrl-Down", null),
        exec: function(t) {
          t.renderer.scrollBy(0, 2 * t.renderer.layerConfig.lineHeight);
        },
        readOnly: !0
      },
      {
        name: "selectlinestart",
        description: "Select line start",
        bindKey: "Shift-Home",
        exec: function(t) {
          t.getSelection().selectLineStart();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "selectlineend",
        description: "Select line end",
        bindKey: "Shift-End",
        exec: function(t) {
          t.getSelection().selectLineEnd();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "togglerecording",
        description: "Toggle recording",
        bindKey: a("Ctrl-Alt-E", "Command-Option-E"),
        exec: function(t) {
          t.commands.toggleRecording(t);
        },
        readOnly: !0
      },
      {
        name: "replaymacro",
        description: "Replay macro",
        bindKey: a("Ctrl-Shift-E", "Command-Shift-E"),
        exec: function(t) {
          t.commands.replay(t);
        },
        readOnly: !0
      },
      {
        name: "jumptomatching",
        description: "Jump to matching",
        bindKey: a("Ctrl-\\|Ctrl-P", "Command-\\"),
        exec: function(t) {
          t.jumpToMatching();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
      },
      {
        name: "selecttomatching",
        description: "Select to matching",
        bindKey: a("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
        exec: function(t) {
          t.jumpToMatching(!0);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
      },
      {
        name: "expandToMatching",
        description: "Expand to matching",
        bindKey: a("Ctrl-Shift-M", "Ctrl-Shift-M"),
        exec: function(t) {
          t.jumpToMatching(!0, !0);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
      },
      {
        name: "passKeysToBrowser",
        description: "Pass keys to browser",
        bindKey: a(null, null),
        exec: function() {
        },
        passEvent: !0,
        readOnly: !0
      },
      {
        name: "copy",
        description: "Copy",
        exec: function(t) {
        },
        readOnly: !0
      },
      {
        name: "cut",
        description: "Cut",
        exec: function(t) {
          var e = t.$copyWithEmptySelection && t.selection.isEmpty(), n = e ? t.selection.getLineRange() : t.selection.getRange();
          t._emit("cut", n), n.isEmpty() || t.session.remove(n), t.clearSelection();
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
      },
      {
        name: "paste",
        description: "Paste",
        exec: function(t, e) {
          t.$handlePaste(e);
        },
        scrollIntoView: "cursor"
      },
      {
        name: "removeline",
        description: "Remove line",
        bindKey: a("Ctrl-D", "Command-D"),
        exec: function(t) {
          t.removeLines();
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEachLine"
      },
      {
        name: "duplicateSelection",
        description: "Duplicate selection",
        bindKey: a("Ctrl-Shift-D", "Command-Shift-D"),
        exec: function(t) {
          t.duplicateSelection();
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
      },
      {
        name: "sortlines",
        description: "Sort lines",
        bindKey: a("Ctrl-Alt-S", "Command-Alt-S"),
        exec: function(t) {
          t.sortLines();
        },
        scrollIntoView: "selection",
        multiSelectAction: "forEachLine"
      },
      {
        name: "togglecomment",
        description: "Toggle comment",
        bindKey: a("Ctrl-/", "Command-/"),
        exec: function(t) {
          t.toggleCommentLines();
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
      },
      {
        name: "toggleBlockComment",
        description: "Toggle block comment",
        bindKey: a("Ctrl-Shift-/", "Command-Shift-/"),
        exec: function(t) {
          t.toggleBlockComment();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
      },
      {
        name: "modifyNumberUp",
        description: "Modify number up",
        bindKey: a("Ctrl-Shift-Up", "Alt-Shift-Up"),
        exec: function(t) {
          t.modifyNumber(1);
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
      },
      {
        name: "modifyNumberDown",
        description: "Modify number down",
        bindKey: a("Ctrl-Shift-Down", "Alt-Shift-Down"),
        exec: function(t) {
          t.modifyNumber(-1);
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
      },
      {
        name: "replace",
        description: "Replace",
        bindKey: a("Ctrl-H", "Command-Option-F"),
        exec: function(t) {
          k.loadModule("ace/ext/searchbox", function(e) {
            e.Search(t, !0);
          });
        }
      },
      {
        name: "undo",
        description: "Undo",
        bindKey: a("Ctrl-Z", "Command-Z"),
        exec: function(t) {
          t.undo();
        }
      },
      {
        name: "redo",
        description: "Redo",
        bindKey: a("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
        exec: function(t) {
          t.redo();
        }
      },
      {
        name: "copylinesup",
        description: "Copy lines up",
        bindKey: a("Alt-Shift-Up", "Command-Option-Up"),
        exec: function(t) {
          t.copyLinesUp();
        },
        scrollIntoView: "cursor"
      },
      {
        name: "movelinesup",
        description: "Move lines up",
        bindKey: a("Alt-Up", "Option-Up"),
        exec: function(t) {
          t.moveLinesUp();
        },
        scrollIntoView: "cursor"
      },
      {
        name: "copylinesdown",
        description: "Copy lines down",
        bindKey: a("Alt-Shift-Down", "Command-Option-Down"),
        exec: function(t) {
          t.copyLinesDown();
        },
        scrollIntoView: "cursor"
      },
      {
        name: "movelinesdown",
        description: "Move lines down",
        bindKey: a("Alt-Down", "Option-Down"),
        exec: function(t) {
          t.moveLinesDown();
        },
        scrollIntoView: "cursor"
      },
      {
        name: "del",
        description: "Delete",
        bindKey: a("Delete", "Delete|Ctrl-D|Shift-Delete"),
        exec: function(t) {
          t.remove("right");
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "backspace",
        description: "Backspace",
        bindKey: a("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
        exec: function(t) {
          t.remove("left");
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "cut_or_delete",
        description: "Cut or delete",
        bindKey: a("Shift-Delete", null),
        exec: function(t) {
          if (t.selection.isEmpty())
            t.remove("left");
          else
            return !1;
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removetolinestart",
        description: "Remove to line start",
        bindKey: a("Alt-Backspace", "Command-Backspace"),
        exec: function(t) {
          t.removeToLineStart();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removetolineend",
        description: "Remove to line end",
        bindKey: a("Alt-Delete", "Ctrl-K|Command-Delete"),
        exec: function(t) {
          t.removeToLineEnd();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removetolinestarthard",
        description: "Remove to line start hard",
        bindKey: a("Ctrl-Shift-Backspace", null),
        exec: function(t) {
          var e = t.selection.getRange();
          e.start.column = 0, t.session.remove(e);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removetolineendhard",
        description: "Remove to line end hard",
        bindKey: a("Ctrl-Shift-Delete", null),
        exec: function(t) {
          var e = t.selection.getRange();
          e.end.column = Number.MAX_VALUE, t.session.remove(e);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removewordleft",
        description: "Remove word left",
        bindKey: a("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
        exec: function(t) {
          t.removeWordLeft();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "removewordright",
        description: "Remove word right",
        bindKey: a("Ctrl-Delete", "Alt-Delete"),
        exec: function(t) {
          t.removeWordRight();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "outdent",
        description: "Outdent",
        bindKey: a("Shift-Tab", "Shift-Tab"),
        exec: function(t) {
          t.blockOutdent();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
      },
      {
        name: "indent",
        description: "Indent",
        bindKey: a("Tab", "Tab"),
        exec: function(t) {
          t.indent();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
      },
      {
        name: "blockoutdent",
        description: "Block outdent",
        bindKey: a("Ctrl-[", "Ctrl-["),
        exec: function(t) {
          t.blockOutdent();
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
      },
      {
        name: "blockindent",
        description: "Block indent",
        bindKey: a("Ctrl-]", "Ctrl-]"),
        exec: function(t) {
          t.blockIndent();
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
      },
      {
        name: "insertstring",
        description: "Insert string",
        exec: function(t, e) {
          t.insert(e);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "inserttext",
        description: "Insert text",
        exec: function(t, e) {
          t.insert(S.stringRepeat(e.text || "", e.times || 1));
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "splitline",
        description: "Split line",
        bindKey: a(null, "Ctrl-O"),
        exec: function(t) {
          t.splitLine();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "transposeletters",
        description: "Transpose letters",
        bindKey: a("Alt-Shift-X", "Ctrl-T"),
        exec: function(t) {
          t.transposeLetters();
        },
        multiSelectAction: function(t) {
          t.transposeSelections(1);
        },
        scrollIntoView: "cursor"
      },
      {
        name: "touppercase",
        description: "To uppercase",
        bindKey: a("Ctrl-U", "Ctrl-U"),
        exec: function(t) {
          t.toUpperCase();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "tolowercase",
        description: "To lowercase",
        bindKey: a("Ctrl-Shift-U", "Ctrl-Shift-U"),
        exec: function(t) {
          t.toLowerCase();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "autoindent",
        description: "Auto Indent",
        bindKey: a(null, null),
        exec: function(t) {
          t.autoIndent();
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "animate"
      },
      {
        name: "expandtoline",
        description: "Expand to line",
        bindKey: a("Ctrl-Shift-L", "Command-Shift-L"),
        exec: function(t) {
          var e = t.selection.getRange();
          e.start.column = e.end.column = 0, e.end.row++, t.selection.setRange(e, !1);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
      },
      {
        name: "joinlines",
        description: "Join lines",
        bindKey: a(null, null),
        exec: function(t) {
          for (var e = t.selection.isBackwards(), n = e ? t.selection.getSelectionLead() : t.selection.getSelectionAnchor(), r = e ? t.selection.getSelectionAnchor() : t.selection.getSelectionLead(), i = t.session.doc.getLine(n.row).length, s = t.session.doc.getTextRange(t.selection.getRange()), c = s.replace(/\n\s*/, " ").length, g = t.session.doc.getLine(n.row), m = n.row + 1; m <= r.row + 1; m++) {
            var y = S.stringTrimLeft(S.stringTrimRight(t.session.doc.getLine(m)));
            y.length !== 0 && (y = " " + y), g += y;
          }
          r.row + 1 < t.session.doc.getLength() - 1 && (g += t.session.doc.getNewLineCharacter()), t.clearSelection(), t.session.doc.replace(new f(n.row, 0, r.row + 2, 0), g), c > 0 ? (t.selection.moveCursorTo(n.row, n.column), t.selection.selectTo(n.row, n.column + c)) : (i = t.session.doc.getLine(n.row).length > i ? i + 1 : i, t.selection.moveCursorTo(n.row, i));
        },
        multiSelectAction: "forEach",
        readOnly: !0
      },
      {
        name: "invertSelection",
        description: "Invert selection",
        bindKey: a(null, null),
        exec: function(t) {
          var e = t.session.doc.getLength() - 1, n = t.session.doc.getLine(e).length, r = t.selection.rangeList.ranges, i = [];
          r.length < 1 && (r = [t.selection.getRange()]);
          for (var s = 0; s < r.length; s++)
            s == r.length - 1 && (r[s].end.row === e && r[s].end.column === n || i.push(new f(r[s].end.row, r[s].end.column, e, n))), s === 0 ? r[s].start.row === 0 && r[s].start.column === 0 || i.push(new f(0, 0, r[s].start.row, r[s].start.column)) : i.push(new f(r[s - 1].end.row, r[s - 1].end.column, r[s].start.row, r[s].start.column));
          t.exitMultiSelectMode(), t.clearSelection();
          for (var s = 0; s < i.length; s++)
            t.selection.addRange(i[s], !1);
        },
        readOnly: !0,
        scrollIntoView: "none"
      },
      {
        name: "addLineAfter",
        description: "Add new line after the current line",
        exec: function(t) {
          t.selection.clearSelection(), t.navigateLineEnd(), t.insert(`
`);
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "addLineBefore",
        description: "Add new line before the current line",
        exec: function(t) {
          t.selection.clearSelection();
          var e = t.getCursorPosition();
          t.selection.moveTo(e.row - 1, Number.MAX_VALUE), t.insert(`
`), e.row === 0 && t.navigateUp();
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
      },
      {
        name: "openCommandPallete",
        description: "Open command palette",
        bindKey: a("F1", "F1"),
        exec: function(t) {
          t.prompt({ $type: "commands" });
        },
        readOnly: !0
      },
      {
        name: "modeSelect",
        description: "Change language mode...",
        bindKey: a(null, null),
        exec: function(t) {
          t.prompt({ $type: "modes" });
        },
        readOnly: !0
      }
    ];
    for (var l = 1; l < 9; l++)
      $.commands.push({
        name: "foldToLevel" + l,
        description: "Fold To Level " + l,
        level: l,
        exec: function(t) {
          t.session.foldToLevel(this.level);
        },
        scrollIntoView: "center",
        readOnly: !0
      });
  }), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/dom"), f = w("./lib/lang"), a = w("./lib/useragent"), l = w("./keyboard/textinput").TextInput, t = w("./mouse/mouse_handler").MouseHandler, e = w("./mouse/fold_handler").FoldHandler, n = w("./keyboard/keybinding").KeyBinding, r = w("./edit_session").EditSession, i = w("./search").Search, s = w("./range").Range, c = w("./lib/event_emitter").EventEmitter, g = w("./commands/command_manager").CommandManager, m = w("./commands/default_commands").commands, y = w("./config"), x = w("./token_iterator").TokenIterator, o = w("./clipboard"), d = function(u, p, h) {
      this.$toDestroy = [];
      var v = u.getContainerElement();
      this.container = v, this.renderer = u, this.id = "editor" + ++d.$uid, this.commands = new g(a.isMac ? "mac" : "win", m), typeof document == "object" && (this.textInput = new l(u.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new t(this), new e(this)), this.keyBinding = new n(this), this.$search = new i().set({
        wrap: !0
      }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = f.delayedCall(function() {
        this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart();
      }.bind(this)), this.on("change", function(C, _) {
        _._$emitInputEvent.schedule(31);
      }), this.setSession(p || h && h.session || new r("")), y.resetOptions(this), h && this.setOptions(h), y._signal("editor", this);
    };
    d.$uid = 0, function() {
      S.implement(this, c), this.$initOperationListeners = function() {
        this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = f.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function() {
          this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0;
        }.bind(this), !0), this.on("changeSelection", function() {
          this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0;
        }.bind(this), !0);
      }, this.curOp = null, this.prevOp = {}, this.startOperation = function(u) {
        if (this.curOp) {
          if (!u || this.curOp.command)
            return;
          this.prevOp = this.curOp;
        }
        u || (this.previousCommand = null, u = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
          command: u.command || {},
          args: u.args,
          scrollTop: this.renderer.scrollTop
        }, this.curOp.selectionBefore = this.selection.toJSON();
      }, this.endOperation = function(u) {
        if (this.curOp && this.session) {
          if (u && u.returnValue === !1 || !this.session)
            return this.curOp = null;
          if (u == !0 && this.curOp.command && this.curOp.command.name == "mouse" || (this._signal("beforeEndOperation"), !this.curOp))
            return;
          var p = this.curOp.command, h = p && p.scrollIntoView;
          if (h) {
            switch (h) {
              case "center-animate":
                h = "animate";
              case "center":
                this.renderer.scrollCursorIntoView(null, 0.5);
                break;
              case "animate":
              case "cursor":
                this.renderer.scrollCursorIntoView();
                break;
              case "selectionPart":
                var v = this.selection.getRange(), C = this.renderer.layerConfig;
                (v.start.row >= C.lastRow || v.end.row <= C.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                break;
            }
            h == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
          }
          var _ = this.selection.toJSON();
          this.curOp.selectionAfter = _, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(_), this.prevOp = this.curOp, this.curOp = null;
        }
      }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function(u) {
        if (!!this.$mergeUndoDeltas) {
          var p = this.prevOp, h = this.$mergeableCommands, v = p.command && u.command.name == p.command.name;
          if (u.command.name == "insertstring") {
            var C = u.args;
            this.mergeNextCommand === void 0 && (this.mergeNextCommand = !0), v = v && this.mergeNextCommand && (!/\s/.test(C) || /\s/.test(p.args)), this.mergeNextCommand = !0;
          } else
            v = v && h.indexOf(u.command.name) !== -1;
          this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (v = !1), v ? this.session.mergeUndoDeltas = !0 : h.indexOf(u.command.name) !== -1 && (this.sequenceStartTime = Date.now());
        }
      }, this.setKeyboardHandler = function(u, p) {
        if (u && typeof u == "string" && u != "ace") {
          this.$keybindingId = u;
          var h = this;
          y.loadModule(["keybinding", u], function(v) {
            h.$keybindingId == u && h.keyBinding.setKeyboardHandler(v && v.handler), p && p();
          });
        } else
          this.$keybindingId = null, this.keyBinding.setKeyboardHandler(u), p && p();
      }, this.getKeyboardHandler = function() {
        return this.keyBinding.getKeyboardHandler();
      }, this.setSession = function(u) {
        if (this.session != u) {
          this.curOp && this.endOperation(), this.curOp = {};
          var p = this.session;
          if (p) {
            this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
            var h = this.session.getSelection();
            h.off("changeCursor", this.$onCursorChange), h.off("changeSelection", this.$onSelectionChange);
          }
          this.session = u, u ? (this.$onDocumentChange = this.onDocumentChange.bind(this), u.on("change", this.$onDocumentChange), this.renderer.setSession(u), this.$onChangeMode = this.onChangeMode.bind(this), u.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), u.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), u.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), u.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), u.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), u.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = u.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(u)), this._signal("changeSession", {
            session: u,
            oldSession: p
          }), this.curOp = null, p && p._signal("changeEditor", { oldEditor: this }), u && u._signal("changeEditor", { editor: this }), u && !u.destroyed && u.bgTokenizer.scheduleStart();
        }
      }, this.getSession = function() {
        return this.session;
      }, this.setValue = function(u, p) {
        return this.session.doc.setValue(u), p ? p == 1 ? this.navigateFileEnd() : p == -1 && this.navigateFileStart() : this.selectAll(), u;
      }, this.getValue = function() {
        return this.session.getValue();
      }, this.getSelection = function() {
        return this.selection;
      }, this.resize = function(u) {
        this.renderer.onResize(u);
      }, this.setTheme = function(u, p) {
        this.renderer.setTheme(u, p);
      }, this.getTheme = function() {
        return this.renderer.getTheme();
      }, this.setStyle = function(u) {
        this.renderer.setStyle(u);
      }, this.unsetStyle = function(u) {
        this.renderer.unsetStyle(u);
      }, this.getFontSize = function() {
        return this.getOption("fontSize") || k.computedStyle(this.container).fontSize;
      }, this.setFontSize = function(u) {
        this.setOption("fontSize", u);
      }, this.$highlightBrackets = function() {
        if (!this.$highlightPending) {
          var u = this;
          this.$highlightPending = !0, setTimeout(function() {
            u.$highlightPending = !1;
            var p = u.session;
            if (!(!p || p.destroyed)) {
              p.$bracketHighlight && (p.$bracketHighlight.markerIds.forEach(function(C) {
                p.removeMarker(C);
              }), p.$bracketHighlight = null);
              var h = p.getMatchingBracketRanges(u.getCursorPosition());
              if (!h && p.$mode.getMatching && (h = p.$mode.getMatching(u.session)), !h) {
                u.getHighlightIndentGuides() && u.renderer.$textLayer.$highlightIndentGuide();
                return;
              }
              var v = "ace_bracket";
              Array.isArray(h) ? h.length == 1 && (v = "ace_error_bracket") : h = [h], h.length == 2 && (s.comparePoints(h[0].end, h[1].start) == 0 ? h = [s.fromPoints(h[0].start, h[1].end)] : s.comparePoints(h[0].start, h[1].end) == 0 && (h = [s.fromPoints(h[1].start, h[0].end)])), p.$bracketHighlight = {
                ranges: h,
                markerIds: h.map(function(C) {
                  return p.addMarker(C, v, "text");
                })
              }, u.getHighlightIndentGuides() && u.renderer.$textLayer.$highlightIndentGuide();
            }
          }, 50);
        }
      }, this.$highlightTags = function() {
        if (!this.$highlightTagPending) {
          var u = this;
          this.$highlightTagPending = !0, setTimeout(function() {
            u.$highlightTagPending = !1;
            var p = u.session;
            if (!(!p || p.destroyed)) {
              var h = u.getCursorPosition(), v = new x(u.session, h.row, h.column), C = v.getCurrentToken();
              if (!C || !/\b(?:tag-open|tag-name)/.test(C.type)) {
                p.removeMarker(p.$tagHighlight), p.$tagHighlight = null;
                return;
              }
              if (!(C.type.indexOf("tag-open") !== -1 && (C = v.stepForward(), !C))) {
                var _ = C.value, A = C.value, R = 0, T = v.stepBackward();
                if (T.value === "<")
                  do
                    T = C, C = v.stepForward(), C && (C.type.indexOf("tag-name") !== -1 ? (A = C.value, _ === A && (T.value === "<" ? R++ : T.value === "</" && R--)) : _ === A && C.value === "/>" && R--);
                  while (C && R >= 0);
                else {
                  do
                    if (C = T, T = v.stepBackward(), C) {
                      if (C.type.indexOf("tag-name") !== -1)
                        _ === C.value && (T.value === "<" ? R++ : T.value === "</" && R--);
                      else if (C.value === "/>") {
                        for (var E = 0, M = T; M; ) {
                          if (M.type.indexOf("tag-name") !== -1 && M.value === _) {
                            R--;
                            break;
                          } else if (M.value === "<")
                            break;
                          M = v.stepBackward(), E++;
                        }
                        for (var O = 0; O < E; O++)
                          v.stepForward();
                      }
                    }
                  while (T && R <= 0);
                  v.stepForward();
                }
                if (!C) {
                  p.removeMarker(p.$tagHighlight), p.$tagHighlight = null;
                  return;
                }
                var B = v.getCurrentTokenRow(), H = v.getCurrentTokenColumn(), z = new s(B, H, B, H + C.value.length), I = p.$backMarkers[p.$tagHighlight];
                p.$tagHighlight && I != null && z.compareRange(I.range) !== 0 && (p.removeMarker(p.$tagHighlight), p.$tagHighlight = null), p.$tagHighlight || (p.$tagHighlight = p.addMarker(z, "ace_bracket", "text"));
              }
            }
          }, 50);
        }
      }, this.focus = function() {
        this.textInput.focus();
      }, this.isFocused = function() {
        return this.textInput.isFocused();
      }, this.blur = function() {
        this.textInput.blur();
      }, this.onFocus = function(u) {
        this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", u));
      }, this.onBlur = function(u) {
        !this.$isFocused || (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", u));
      }, this.$cursorChange = function() {
        this.renderer.updateCursor(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine();
      }, this.onDocumentChange = function(u) {
        var p = this.session.$useWrapMode, h = u.start.row == u.end.row ? u.end.row : 1 / 0;
        this.renderer.updateLines(u.start.row, h, p), this._signal("change", u), this.$cursorChange();
      }, this.onTokenizerUpdate = function(u) {
        var p = u.data;
        this.renderer.updateLines(p.first, p.last);
      }, this.onScrollTopChange = function() {
        this.renderer.scrollToY(this.session.getScrollTop());
      }, this.onScrollLeftChange = function() {
        this.renderer.scrollToX(this.session.getScrollLeft());
      }, this.onCursorChange = function() {
        this.$cursorChange(), this._signal("changeSelection");
      }, this.$updateHighlightActiveLine = function() {
        var u = this.getSession(), p;
        if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (p = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (p = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (p = !1)), u.$highlightLineMarker && !p)
          u.removeMarker(u.$highlightLineMarker.id), u.$highlightLineMarker = null;
        else if (!u.$highlightLineMarker && p) {
          var h = new s(p.row, p.column, p.row, 1 / 0);
          h.id = u.addMarker(h, "ace_active-line", "screenLine"), u.$highlightLineMarker = h;
        } else
          p && (u.$highlightLineMarker.start.row = p.row, u.$highlightLineMarker.end.row = p.row, u.$highlightLineMarker.start.column = p.column, u._signal("changeBackMarker"));
      }, this.onSelectionChange = function(u) {
        var p = this.session;
        if (p.$selectionMarker && p.removeMarker(p.$selectionMarker), p.$selectionMarker = null, this.selection.isEmpty())
          this.$updateHighlightActiveLine();
        else {
          var h = this.selection.getRange(), v = this.getSelectionStyle();
          p.$selectionMarker = p.addMarker(h, "ace_selection", v);
        }
        var C = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
        this.session.highlight(C), this._signal("changeSelection");
      }, this.$getSelectionHighLightRegexp = function() {
        var u = this.session, p = this.getSelectionRange();
        if (!(p.isEmpty() || p.isMultiLine())) {
          var h = p.start.column, v = p.end.column, C = u.getLine(p.start.row), _ = C.substring(h, v);
          if (!(_.length > 5e3 || !/[\w\d]/.test(_))) {
            var A = this.$search.$assembleRegExp({
              wholeWord: !0,
              caseSensitive: !0,
              needle: _
            }), R = C.substring(h - 1, v + 1);
            if (!!A.test(R))
              return A;
          }
        }
      }, this.onChangeFrontMarker = function() {
        this.renderer.updateFrontMarkers();
      }, this.onChangeBackMarker = function() {
        this.renderer.updateBackMarkers();
      }, this.onChangeBreakpoint = function() {
        this.renderer.updateBreakpoints();
      }, this.onChangeAnnotation = function() {
        this.renderer.setAnnotations(this.session.getAnnotations());
      }, this.onChangeMode = function(u) {
        this.renderer.updateText(), this._emit("changeMode", u);
      }, this.onChangeWrapLimit = function() {
        this.renderer.updateFull();
      }, this.onChangeWrapMode = function() {
        this.renderer.onResize(!0);
      }, this.onChangeFold = function() {
        this.$updateHighlightActiveLine(), this.renderer.updateFull();
      }, this.getSelectedText = function() {
        return this.session.getTextRange(this.getSelectionRange());
      }, this.getCopyText = function() {
        var u = this.getSelectedText(), p = this.session.doc.getNewLineCharacter(), h = !1;
        if (!u && this.$copyWithEmptySelection) {
          h = !0;
          for (var v = this.selection.getAllRanges(), C = 0; C < v.length; C++) {
            var _ = v[C];
            C && v[C - 1].start.row == _.start.row || (u += this.session.getLine(_.start.row) + p);
          }
        }
        var A = { text: u };
        return this._signal("copy", A), o.lineMode = h ? A.text : !1, A.text;
      }, this.onCopy = function() {
        this.commands.exec("copy", this);
      }, this.onCut = function() {
        this.commands.exec("cut", this);
      }, this.onPaste = function(u, p) {
        var h = { text: u, event: p };
        this.commands.exec("paste", this, h);
      }, this.$handlePaste = function(u) {
        typeof u == "string" && (u = { text: u }), this._signal("paste", u);
        var p = u.text, h = p === o.lineMode, v = this.session;
        if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
          h ? v.insert({ row: this.selection.lead.row, column: 0 }, p) : this.insert(p);
        else if (h)
          this.selection.rangeList.ranges.forEach(function(E) {
            v.insert({ row: E.start.row, column: 0 }, p);
          });
        else {
          var C = p.split(/\r\n|\r|\n/), _ = this.selection.rangeList.ranges, A = C.length == 2 && (!C[0] || !C[1]);
          if (C.length != _.length || A)
            return this.commands.exec("insertstring", this, p);
          for (var R = _.length; R--; ) {
            var T = _[R];
            T.isEmpty() || v.remove(T), v.insert(T.start, C[R]);
          }
        }
      }, this.execCommand = function(u, p) {
        return this.commands.exec(u, this, p);
      }, this.insert = function(u, p) {
        var h = this.session, v = h.getMode(), C = this.getCursorPosition();
        if (this.getBehavioursEnabled() && !p) {
          var _ = v.transformAction(h.getState(C.row), "insertion", this, h, u);
          _ && (u !== _.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), u = _.text);
        }
        if (u == "	" && (u = this.session.getTabString()), this.selection.isEmpty()) {
          if (this.session.getOverwrite() && u.indexOf(`
`) == -1) {
            var A = new s.fromPoints(C, C);
            A.end.column += u.length, this.session.remove(A);
          }
        } else {
          var A = this.getSelectionRange();
          C = this.session.remove(A), this.clearSelection();
        }
        if (u == `
` || u == `\r
`) {
          var M = h.getLine(C.row);
          if (C.column > M.search(/\S|$/)) {
            var R = M.substr(C.column).search(/\S|$/);
            h.doc.removeInLine(C.row, C.column, C.column + R);
          }
        }
        this.clearSelection();
        var T = C.column, E = h.getState(C.row), M = h.getLine(C.row), O = v.checkOutdent(E, M, u);
        if (h.insert(C, u), _ && _.selection && (_.selection.length == 2 ? this.selection.setSelectionRange(new s(C.row, T + _.selection[0], C.row, T + _.selection[1])) : this.selection.setSelectionRange(new s(C.row + _.selection[0], _.selection[1], C.row + _.selection[2], _.selection[3]))), this.$enableAutoIndent) {
          if (h.getDocument().isNewLine(u)) {
            var B = v.getNextLineIndent(E, M.slice(0, C.column), h.getTabString());
            h.insert({ row: C.row + 1, column: 0 }, B);
          }
          O && v.autoOutdent(E, h, C.row);
        }
      }, this.autoIndent = function() {
        var u = this.session, p = u.getMode(), h, v;
        if (this.selection.isEmpty())
          h = 0, v = u.doc.getLength() - 1;
        else {
          var C = this.getSelectionRange();
          h = C.start.row, v = C.end.row;
        }
        for (var _ = "", A = "", R = "", T, E, M, O = u.getTabString(), B = h; B <= v; B++)
          B > 0 && (_ = u.getState(B - 1), A = u.getLine(B - 1), R = p.getNextLineIndent(_, A, O)), T = u.getLine(B), E = p.$getIndent(T), R !== E && (E.length > 0 && (M = new s(B, 0, B, E.length), u.remove(M)), R.length > 0 && u.insert({ row: B, column: 0 }, R)), p.autoOutdent(_, u, B);
      }, this.onTextInput = function(u, p) {
        if (!p)
          return this.keyBinding.onTextInput(u);
        this.startOperation({ command: { name: "insertstring" } });
        var h = this.applyComposition.bind(this, u, p);
        this.selection.rangeCount ? this.forEachSelection(h) : h(), this.endOperation();
      }, this.applyComposition = function(u, p) {
        if (p.extendLeft || p.extendRight) {
          var h = this.selection.getRange();
          h.start.column -= p.extendLeft, h.end.column += p.extendRight, h.start.column < 0 && (h.start.row--, h.start.column += this.session.getLine(h.start.row).length + 1), this.selection.setRange(h), !u && !h.isEmpty() && this.remove();
        }
        if ((u || !this.selection.isEmpty()) && this.insert(u, !0), p.restoreStart || p.restoreEnd) {
          var h = this.selection.getRange();
          h.start.column -= p.restoreStart, h.end.column -= p.restoreEnd, this.selection.setRange(h);
        }
      }, this.onCommandKey = function(u, p, h) {
        return this.keyBinding.onCommandKey(u, p, h);
      }, this.setOverwrite = function(u) {
        this.session.setOverwrite(u);
      }, this.getOverwrite = function() {
        return this.session.getOverwrite();
      }, this.toggleOverwrite = function() {
        this.session.toggleOverwrite();
      }, this.setScrollSpeed = function(u) {
        this.setOption("scrollSpeed", u);
      }, this.getScrollSpeed = function() {
        return this.getOption("scrollSpeed");
      }, this.setDragDelay = function(u) {
        this.setOption("dragDelay", u);
      }, this.getDragDelay = function() {
        return this.getOption("dragDelay");
      }, this.setSelectionStyle = function(u) {
        this.setOption("selectionStyle", u);
      }, this.getSelectionStyle = function() {
        return this.getOption("selectionStyle");
      }, this.setHighlightActiveLine = function(u) {
        this.setOption("highlightActiveLine", u);
      }, this.getHighlightActiveLine = function() {
        return this.getOption("highlightActiveLine");
      }, this.setHighlightGutterLine = function(u) {
        this.setOption("highlightGutterLine", u);
      }, this.getHighlightGutterLine = function() {
        return this.getOption("highlightGutterLine");
      }, this.setHighlightSelectedWord = function(u) {
        this.setOption("highlightSelectedWord", u);
      }, this.getHighlightSelectedWord = function() {
        return this.$highlightSelectedWord;
      }, this.setAnimatedScroll = function(u) {
        this.renderer.setAnimatedScroll(u);
      }, this.getAnimatedScroll = function() {
        return this.renderer.getAnimatedScroll();
      }, this.setShowInvisibles = function(u) {
        this.renderer.setShowInvisibles(u);
      }, this.getShowInvisibles = function() {
        return this.renderer.getShowInvisibles();
      }, this.setDisplayIndentGuides = function(u) {
        this.renderer.setDisplayIndentGuides(u);
      }, this.getDisplayIndentGuides = function() {
        return this.renderer.getDisplayIndentGuides();
      }, this.setHighlightIndentGuides = function(u) {
        this.renderer.setHighlightIndentGuides(u);
      }, this.getHighlightIndentGuides = function() {
        return this.renderer.getHighlightIndentGuides();
      }, this.setShowPrintMargin = function(u) {
        this.renderer.setShowPrintMargin(u);
      }, this.getShowPrintMargin = function() {
        return this.renderer.getShowPrintMargin();
      }, this.setPrintMarginColumn = function(u) {
        this.renderer.setPrintMarginColumn(u);
      }, this.getPrintMarginColumn = function() {
        return this.renderer.getPrintMarginColumn();
      }, this.setReadOnly = function(u) {
        this.setOption("readOnly", u);
      }, this.getReadOnly = function() {
        return this.getOption("readOnly");
      }, this.setBehavioursEnabled = function(u) {
        this.setOption("behavioursEnabled", u);
      }, this.getBehavioursEnabled = function() {
        return this.getOption("behavioursEnabled");
      }, this.setWrapBehavioursEnabled = function(u) {
        this.setOption("wrapBehavioursEnabled", u);
      }, this.getWrapBehavioursEnabled = function() {
        return this.getOption("wrapBehavioursEnabled");
      }, this.setShowFoldWidgets = function(u) {
        this.setOption("showFoldWidgets", u);
      }, this.getShowFoldWidgets = function() {
        return this.getOption("showFoldWidgets");
      }, this.setFadeFoldWidgets = function(u) {
        this.setOption("fadeFoldWidgets", u);
      }, this.getFadeFoldWidgets = function() {
        return this.getOption("fadeFoldWidgets");
      }, this.remove = function(u) {
        this.selection.isEmpty() && (u == "left" ? this.selection.selectLeft() : this.selection.selectRight());
        var p = this.getSelectionRange();
        if (this.getBehavioursEnabled()) {
          var h = this.session, v = h.getState(p.start.row), C = h.getMode().transformAction(v, "deletion", this, h, p);
          if (p.end.column === 0) {
            var _ = h.getTextRange(p);
            if (_[_.length - 1] == `
`) {
              var A = h.getLine(p.end.row);
              /^\s+$/.test(A) && (p.end.column = A.length);
            }
          }
          C && (p = C);
        }
        this.session.remove(p), this.clearSelection();
      }, this.removeWordRight = function() {
        this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
      }, this.removeWordLeft = function() {
        this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
      }, this.removeToLineStart = function() {
        this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
      }, this.removeToLineEnd = function() {
        this.selection.isEmpty() && this.selection.selectLineEnd();
        var u = this.getSelectionRange();
        u.start.column == u.end.column && u.start.row == u.end.row && (u.end.column = 0, u.end.row++), this.session.remove(u), this.clearSelection();
      }, this.splitLine = function() {
        this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
        var u = this.getCursorPosition();
        this.insert(`
`), this.moveCursorToPosition(u);
      }, this.transposeLetters = function() {
        if (!!this.selection.isEmpty()) {
          var u = this.getCursorPosition(), p = u.column;
          if (p !== 0) {
            var h = this.session.getLine(u.row), v, C;
            p < h.length ? (v = h.charAt(p) + h.charAt(p - 1), C = new s(u.row, p - 1, u.row, p + 1)) : (v = h.charAt(p - 1) + h.charAt(p - 2), C = new s(u.row, p - 2, u.row, p)), this.session.replace(C, v), this.session.selection.moveToPosition(C.end);
          }
        }
      }, this.toLowerCase = function() {
        var u = this.getSelectionRange();
        this.selection.isEmpty() && this.selection.selectWord();
        var p = this.getSelectionRange(), h = this.session.getTextRange(p);
        this.session.replace(p, h.toLowerCase()), this.selection.setSelectionRange(u);
      }, this.toUpperCase = function() {
        var u = this.getSelectionRange();
        this.selection.isEmpty() && this.selection.selectWord();
        var p = this.getSelectionRange(), h = this.session.getTextRange(p);
        this.session.replace(p, h.toUpperCase()), this.selection.setSelectionRange(u);
      }, this.indent = function() {
        var u = this.session, p = this.getSelectionRange();
        if (p.start.row < p.end.row) {
          var h = this.$getSelectedRows();
          u.indentRows(h.first, h.last, "	");
          return;
        } else if (p.start.column < p.end.column) {
          var v = u.getTextRange(p);
          if (!/^\s+$/.test(v)) {
            var h = this.$getSelectedRows();
            u.indentRows(h.first, h.last, "	");
            return;
          }
        }
        var C = u.getLine(p.start.row), _ = p.start, A = u.getTabSize(), R = u.documentToScreenColumn(_.row, _.column);
        if (this.session.getUseSoftTabs())
          var T = A - R % A, E = f.stringRepeat(" ", T);
        else {
          for (var T = R % A; C[p.start.column - 1] == " " && T; )
            p.start.column--, T--;
          this.selection.setSelectionRange(p), E = "	";
        }
        return this.insert(E);
      }, this.blockIndent = function() {
        var u = this.$getSelectedRows();
        this.session.indentRows(u.first, u.last, "	");
      }, this.blockOutdent = function() {
        var u = this.session.getSelection();
        this.session.outdentRows(u.getRange());
      }, this.sortLines = function() {
        for (var u = this.$getSelectedRows(), p = this.session, h = [], v = u.first; v <= u.last; v++)
          h.push(p.getLine(v));
        h.sort(function(A, R) {
          return A.toLowerCase() < R.toLowerCase() ? -1 : A.toLowerCase() > R.toLowerCase() ? 1 : 0;
        });
        for (var C = new s(0, 0, 0, 0), v = u.first; v <= u.last; v++) {
          var _ = p.getLine(v);
          C.start.row = v, C.end.row = v, C.end.column = _.length, p.replace(C, h[v - u.first]);
        }
      }, this.toggleCommentLines = function() {
        var u = this.session.getState(this.getCursorPosition().row), p = this.$getSelectedRows();
        this.session.getMode().toggleCommentLines(u, this.session, p.first, p.last);
      }, this.toggleBlockComment = function() {
        var u = this.getCursorPosition(), p = this.session.getState(u.row), h = this.getSelectionRange();
        this.session.getMode().toggleBlockComment(p, this.session, h, u);
      }, this.getNumberAt = function(u, p) {
        var h = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
        h.lastIndex = 0;
        for (var v = this.session.getLine(u); h.lastIndex < p; ) {
          var C = h.exec(v);
          if (C.index <= p && C.index + C[0].length >= p) {
            var _ = {
              value: C[0],
              start: C.index,
              end: C.index + C[0].length
            };
            return _;
          }
        }
        return null;
      }, this.modifyNumber = function(u) {
        var p = this.selection.getCursor().row, h = this.selection.getCursor().column, v = new s(p, h - 1, p, h), C = this.session.getTextRange(v);
        if (!isNaN(parseFloat(C)) && isFinite(C)) {
          var _ = this.getNumberAt(p, h);
          if (_) {
            var A = _.value.indexOf(".") >= 0 ? _.start + _.value.indexOf(".") + 1 : _.end, R = _.start + _.value.length - A, T = parseFloat(_.value);
            T *= Math.pow(10, R), A !== _.end && h < A ? u *= Math.pow(10, _.end - h - 1) : u *= Math.pow(10, _.end - h), T += u, T /= Math.pow(10, R);
            var E = T.toFixed(R), M = new s(p, _.start, p, _.end);
            this.session.replace(M, E), this.moveCursorTo(p, Math.max(_.start + 1, h + E.length - _.value.length));
          }
        } else
          this.toggleWord();
      }, this.$toggleWordPairs = [
        ["first", "last"],
        ["true", "false"],
        ["yes", "no"],
        ["width", "height"],
        ["top", "bottom"],
        ["right", "left"],
        ["on", "off"],
        ["x", "y"],
        ["get", "set"],
        ["max", "min"],
        ["horizontal", "vertical"],
        ["show", "hide"],
        ["add", "remove"],
        ["up", "down"],
        ["before", "after"],
        ["even", "odd"],
        ["in", "out"],
        ["inside", "outside"],
        ["next", "previous"],
        ["increase", "decrease"],
        ["attach", "detach"],
        ["&&", "||"],
        ["==", "!="]
      ], this.toggleWord = function() {
        var u = this.selection.getCursor().row, p = this.selection.getCursor().column;
        this.selection.selectWord();
        var h = this.getSelectedText(), v = this.selection.getWordRange().start.column, C = h.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), _ = p - v - 1;
        _ < 0 && (_ = 0);
        var A = 0, R = 0, T = this;
        h.match(/[A-Za-z0-9_]+/) && C.forEach(function(P, U) {
          R = A + P.length, _ >= A && _ <= R && (h = P, T.selection.clearSelection(), T.moveCursorTo(u, A + v), T.selection.selectTo(u, R + v)), A = R;
        });
        for (var E = this.$toggleWordPairs, M, O = 0; O < E.length; O++)
          for (var B = E[O], H = 0; H <= 1; H++) {
            var z = +!H, I = h.match(new RegExp("^\\s?_?(" + f.escapeRegExp(B[H]) + ")\\s?$", "i"));
            if (I) {
              var D = h.match(new RegExp("([_]|^|\\s)(" + f.escapeRegExp(I[1]) + ")($|\\s)", "g"));
              D && (M = h.replace(new RegExp(f.escapeRegExp(B[H]), "i"), function(P) {
                var U = B[z];
                return P.toUpperCase() == P ? U = U.toUpperCase() : P.charAt(0).toUpperCase() == P.charAt(0) && (U = U.substr(0, 0) + B[z].charAt(0).toUpperCase() + U.substr(1)), U;
              }), this.insert(M), M = "");
            }
          }
      }, this.removeLines = function() {
        var u = this.$getSelectedRows();
        this.session.removeFullLines(u.first, u.last), this.clearSelection();
      }, this.duplicateSelection = function() {
        var u = this.selection, p = this.session, h = u.getRange(), v = u.isBackwards();
        if (h.isEmpty()) {
          var C = h.start.row;
          p.duplicateLines(C, C);
        } else {
          var _ = v ? h.start : h.end, A = p.insert(_, p.getTextRange(h), !1);
          h.start = _, h.end = A, u.setSelectionRange(h, v);
        }
      }, this.moveLinesDown = function() {
        this.$moveLines(1, !1);
      }, this.moveLinesUp = function() {
        this.$moveLines(-1, !1);
      }, this.moveText = function(u, p, h) {
        return this.session.moveText(u, p, h);
      }, this.copyLinesUp = function() {
        this.$moveLines(-1, !0);
      }, this.copyLinesDown = function() {
        this.$moveLines(1, !0);
      }, this.$moveLines = function(u, p) {
        var h, v, C = this.selection;
        if (!C.inMultiSelectMode || this.inVirtualSelectionMode) {
          var _ = C.toOrientedRange();
          h = this.$getSelectedRows(_), v = this.session.$moveLines(h.first, h.last, p ? 0 : u), p && u == -1 && (v = 0), _.moveBy(v, 0), C.fromOrientedRange(_);
        } else {
          var A = C.rangeList.ranges;
          C.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
          for (var R = 0, T = 0, E = A.length, M = 0; M < E; M++) {
            var O = M;
            A[M].moveBy(R, 0), h = this.$getSelectedRows(A[M]);
            for (var B = h.first, H = h.last; ++M < E; ) {
              T && A[M].moveBy(T, 0);
              var z = this.$getSelectedRows(A[M]);
              if (p && z.first != H)
                break;
              if (!p && z.first > H + 1)
                break;
              H = z.last;
            }
            for (M--, R = this.session.$moveLines(B, H, p ? 0 : u), p && u == -1 && (O = M + 1); O <= M; )
              A[O].moveBy(R, 0), O++;
            p || (R = 0), T += R;
          }
          C.fromOrientedRange(C.ranges[0]), C.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
        }
      }, this.$getSelectedRows = function(u) {
        return u = (u || this.getSelectionRange()).collapseRows(), {
          first: this.session.getRowFoldStart(u.start.row),
          last: this.session.getRowFoldEnd(u.end.row)
        };
      }, this.onCompositionStart = function(u) {
        this.renderer.showComposition(u);
      }, this.onCompositionUpdate = function(u) {
        this.renderer.setCompositionText(u);
      }, this.onCompositionEnd = function() {
        this.renderer.hideComposition();
      }, this.getFirstVisibleRow = function() {
        return this.renderer.getFirstVisibleRow();
      }, this.getLastVisibleRow = function() {
        return this.renderer.getLastVisibleRow();
      }, this.isRowVisible = function(u) {
        return u >= this.getFirstVisibleRow() && u <= this.getLastVisibleRow();
      }, this.isRowFullyVisible = function(u) {
        return u >= this.renderer.getFirstFullyVisibleRow() && u <= this.renderer.getLastFullyVisibleRow();
      }, this.$getVisibleRowCount = function() {
        return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
      }, this.$moveByPage = function(u, p) {
        var h = this.renderer, v = this.renderer.layerConfig, C = u * Math.floor(v.height / v.lineHeight);
        p === !0 ? this.selection.$moveSelection(function() {
          this.moveCursorBy(C, 0);
        }) : p === !1 && (this.selection.moveCursorBy(C, 0), this.selection.clearSelection());
        var _ = h.scrollTop;
        h.scrollBy(0, C * v.lineHeight), p != null && h.scrollCursorIntoView(null, 0.5), h.animateScrolling(_);
      }, this.selectPageDown = function() {
        this.$moveByPage(1, !0);
      }, this.selectPageUp = function() {
        this.$moveByPage(-1, !0);
      }, this.gotoPageDown = function() {
        this.$moveByPage(1, !1);
      }, this.gotoPageUp = function() {
        this.$moveByPage(-1, !1);
      }, this.scrollPageDown = function() {
        this.$moveByPage(1);
      }, this.scrollPageUp = function() {
        this.$moveByPage(-1);
      }, this.scrollToRow = function(u) {
        this.renderer.scrollToRow(u);
      }, this.scrollToLine = function(u, p, h, v) {
        this.renderer.scrollToLine(u, p, h, v);
      }, this.centerSelection = function() {
        var u = this.getSelectionRange(), p = {
          row: Math.floor(u.start.row + (u.end.row - u.start.row) / 2),
          column: Math.floor(u.start.column + (u.end.column - u.start.column) / 2)
        };
        this.renderer.alignCursor(p, 0.5);
      }, this.getCursorPosition = function() {
        return this.selection.getCursor();
      }, this.getCursorPositionScreen = function() {
        return this.session.documentToScreenPosition(this.getCursorPosition());
      }, this.getSelectionRange = function() {
        return this.selection.getRange();
      }, this.selectAll = function() {
        this.selection.selectAll();
      }, this.clearSelection = function() {
        this.selection.clearSelection();
      }, this.moveCursorTo = function(u, p) {
        this.selection.moveCursorTo(u, p);
      }, this.moveCursorToPosition = function(u) {
        this.selection.moveCursorToPosition(u);
      }, this.jumpToMatching = function(u, p) {
        var h = this.getCursorPosition(), v = new x(this.session, h.row, h.column), C = v.getCurrentToken(), _ = C || v.stepForward();
        if (!!_) {
          var A, R = !1, T = {}, E = h.column - _.start, M, O = {
            ")": "(",
            "(": "(",
            "]": "[",
            "[": "[",
            "{": "{",
            "}": "{"
          };
          do {
            if (_.value.match(/[{}()\[\]]/g)) {
              for (; E < _.value.length && !R; E++)
                if (!!O[_.value[E]])
                  switch (M = O[_.value[E]] + "." + _.type.replace("rparen", "lparen"), isNaN(T[M]) && (T[M] = 0), _.value[E]) {
                    case "(":
                    case "[":
                    case "{":
                      T[M]++;
                      break;
                    case ")":
                    case "]":
                    case "}":
                      T[M]--, T[M] === -1 && (A = "bracket", R = !0);
                      break;
                  }
            } else
              _.type.indexOf("tag-name") !== -1 && (isNaN(T[_.value]) && (T[_.value] = 0), C.value === "<" ? T[_.value]++ : C.value === "</" && T[_.value]--, T[_.value] === -1 && (A = "tag", R = !0));
            R || (C = _, _ = v.stepForward(), E = 0);
          } while (_ && !R);
          if (!!A) {
            var B, H;
            if (A === "bracket")
              B = this.session.getBracketRange(h), B || (B = new s(v.getCurrentTokenRow(), v.getCurrentTokenColumn() + E - 1, v.getCurrentTokenRow(), v.getCurrentTokenColumn() + E - 1), H = B.start, (p || H.row === h.row && Math.abs(H.column - h.column) < 2) && (B = this.session.getBracketRange(H)));
            else if (A === "tag") {
              if (_ && _.type.indexOf("tag-name") !== -1)
                var z = _.value;
              else
                return;
              if (B = new s(v.getCurrentTokenRow(), v.getCurrentTokenColumn() - 2, v.getCurrentTokenRow(), v.getCurrentTokenColumn() - 2), B.compare(h.row, h.column) === 0) {
                R = !1;
                do
                  _ = C, C = v.stepBackward(), C && (C.type.indexOf("tag-close") !== -1 && B.setEnd(v.getCurrentTokenRow(), v.getCurrentTokenColumn() + 1), _.value === z && _.type.indexOf("tag-name") !== -1 && (C.value === "<" ? T[z]++ : C.value === "</" && T[z]--, T[z] === 0 && (R = !0)));
                while (C && !R);
              }
              _ && _.type.indexOf("tag-name") && (H = B.start, H.row == h.row && Math.abs(H.column - h.column) < 2 && (H = B.end));
            }
            H = B && B.cursor || H, H && (u ? B && p ? this.selection.setRange(B) : B && B.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(H.row, H.column) : this.selection.moveTo(H.row, H.column));
          }
        }
      }, this.gotoLine = function(u, p, h) {
        this.selection.clearSelection(), this.session.unfold({ row: u - 1, column: p || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(u - 1, p || 0), this.isRowFullyVisible(u - 1) || this.scrollToLine(u - 1, !0, h);
      }, this.navigateTo = function(u, p) {
        this.selection.moveTo(u, p);
      }, this.navigateUp = function(u) {
        if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
          var p = this.selection.anchor.getPosition();
          return this.moveCursorToPosition(p);
        }
        this.selection.clearSelection(), this.selection.moveCursorBy(-u || -1, 0);
      }, this.navigateDown = function(u) {
        if (this.selection.isMultiLine() && this.selection.isBackwards()) {
          var p = this.selection.anchor.getPosition();
          return this.moveCursorToPosition(p);
        }
        this.selection.clearSelection(), this.selection.moveCursorBy(u || 1, 0);
      }, this.navigateLeft = function(u) {
        if (this.selection.isEmpty())
          for (u = u || 1; u--; )
            this.selection.moveCursorLeft();
        else {
          var p = this.getSelectionRange().start;
          this.moveCursorToPosition(p);
        }
        this.clearSelection();
      }, this.navigateRight = function(u) {
        if (this.selection.isEmpty())
          for (u = u || 1; u--; )
            this.selection.moveCursorRight();
        else {
          var p = this.getSelectionRange().end;
          this.moveCursorToPosition(p);
        }
        this.clearSelection();
      }, this.navigateLineStart = function() {
        this.selection.moveCursorLineStart(), this.clearSelection();
      }, this.navigateLineEnd = function() {
        this.selection.moveCursorLineEnd(), this.clearSelection();
      }, this.navigateFileEnd = function() {
        this.selection.moveCursorFileEnd(), this.clearSelection();
      }, this.navigateFileStart = function() {
        this.selection.moveCursorFileStart(), this.clearSelection();
      }, this.navigateWordRight = function() {
        this.selection.moveCursorWordRight(), this.clearSelection();
      }, this.navigateWordLeft = function() {
        this.selection.moveCursorWordLeft(), this.clearSelection();
      }, this.replace = function(u, p) {
        p && this.$search.set(p);
        var h = this.$search.find(this.session), v = 0;
        return h && (this.$tryReplace(h, u) && (v = 1), this.selection.setSelectionRange(h), this.renderer.scrollSelectionIntoView(h.start, h.end)), v;
      }, this.replaceAll = function(u, p) {
        p && this.$search.set(p);
        var h = this.$search.findAll(this.session), v = 0;
        if (!h.length)
          return v;
        var C = this.getSelectionRange();
        this.selection.moveTo(0, 0);
        for (var _ = h.length - 1; _ >= 0; --_)
          this.$tryReplace(h[_], u) && v++;
        return this.selection.setSelectionRange(C), v;
      }, this.$tryReplace = function(u, p) {
        var h = this.session.getTextRange(u);
        return p = this.$search.replace(h, p), p !== null ? (u.end = this.session.replace(u, p), u) : null;
      }, this.getLastSearchOptions = function() {
        return this.$search.getOptions();
      }, this.find = function(u, p, h) {
        p || (p = {}), typeof u == "string" || u instanceof RegExp ? p.needle = u : typeof u == "object" && S.mixin(p, u);
        var v = this.selection.getRange();
        p.needle == null && (u = this.session.getTextRange(v) || this.$search.$options.needle, u || (v = this.session.getWordRange(v.start.row, v.start.column), u = this.session.getTextRange(v)), this.$search.set({ needle: u })), this.$search.set(p), p.start || this.$search.set({ start: v });
        var C = this.$search.find(this.session);
        if (p.preventScroll)
          return C;
        if (C)
          return this.revealRange(C, h), C;
        p.backwards ? v.start = v.end : v.end = v.start, this.selection.setRange(v);
      }, this.findNext = function(u, p) {
        this.find({ skipCurrent: !0, backwards: !1 }, u, p);
      }, this.findPrevious = function(u, p) {
        this.find(u, { skipCurrent: !0, backwards: !0 }, p);
      }, this.revealRange = function(u, p) {
        this.session.unfold(u), this.selection.setSelectionRange(u);
        var h = this.renderer.scrollTop;
        this.renderer.scrollSelectionIntoView(u.start, u.end, 0.5), p !== !1 && this.renderer.animateScrolling(h);
      }, this.undo = function() {
        this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
      }, this.redo = function() {
        this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
      }, this.destroy = function() {
        this.$toDestroy && (this.$toDestroy.forEach(function(u) {
          u.destroy();
        }), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
      }, this.setAutoScrollEditorIntoView = function(u) {
        if (!!u) {
          var p, h = this, v = !1;
          this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
          var C = this.$scrollAnchor;
          C.style.cssText = "position:absolute", this.container.insertBefore(C, this.container.firstChild);
          var _ = this.on("changeSelection", function() {
            v = !0;
          }), A = this.renderer.on("beforeRender", function() {
            v && (p = h.renderer.container.getBoundingClientRect());
          }), R = this.renderer.on("afterRender", function() {
            if (v && p && (h.isFocused() || h.searchBox && h.searchBox.isFocused())) {
              var T = h.renderer, E = T.$cursorLayer.$pixelPos, M = T.layerConfig, O = E.top - M.offset;
              E.top >= 0 && O + p.top < 0 ? v = !0 : E.top < M.height && E.top + p.top + M.lineHeight > window.innerHeight ? v = !1 : v = null, v != null && (C.style.top = O + "px", C.style.left = E.left + "px", C.style.height = M.lineHeight + "px", C.scrollIntoView(v)), v = p = null;
            }
          });
          this.setAutoScrollEditorIntoView = function(T) {
            T || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", _), this.renderer.off("afterRender", R), this.renderer.off("beforeRender", A));
          };
        }
      }, this.$resetCursorStyle = function() {
        var u = this.$cursorStyle || "ace", p = this.renderer.$cursorLayer;
        !p || (p.setSmoothBlinking(/smooth/.test(u)), p.isBlinking = !this.$readOnly && u != "wide", k.setCssClass(p.element, "ace_slim-cursors", /slim/.test(u)));
      }, this.prompt = function(u, p, h) {
        var v = this;
        y.loadModule("./ext/prompt", function(C) {
          C.prompt(v, u, p, h);
        });
      };
    }.call(d.prototype), y.defineOptions(d.prototype, "editor", {
      selectionStyle: {
        set: function(u) {
          this.onSelectionChange(), this._signal("changeSelectionStyle", { data: u });
        },
        initialValue: "line"
      },
      highlightActiveLine: {
        set: function() {
          this.$updateHighlightActiveLine();
        },
        initialValue: !0
      },
      highlightSelectedWord: {
        set: function(u) {
          this.$onSelectionChange();
        },
        initialValue: !0
      },
      readOnly: {
        set: function(u) {
          this.textInput.setReadOnly(u), this.$resetCursorStyle();
        },
        initialValue: !1
      },
      copyWithEmptySelection: {
        set: function(u) {
          this.textInput.setCopyWithEmptySelection(u);
        },
        initialValue: !1
      },
      cursorStyle: {
        set: function(u) {
          this.$resetCursorStyle();
        },
        values: ["ace", "slim", "smooth", "wide"],
        initialValue: "ace"
      },
      mergeUndoDeltas: {
        values: [!1, !0, "always"],
        initialValue: !0
      },
      behavioursEnabled: { initialValue: !0 },
      wrapBehavioursEnabled: { initialValue: !0 },
      enableAutoIndent: { initialValue: !0 },
      autoScrollEditorIntoView: {
        set: function(u) {
          this.setAutoScrollEditorIntoView(u);
        }
      },
      keyboardHandler: {
        set: function(u) {
          this.setKeyboardHandler(u);
        },
        get: function() {
          return this.$keybindingId;
        },
        handlesSet: !0
      },
      value: {
        set: function(u) {
          this.session.setValue(u);
        },
        get: function() {
          return this.getValue();
        },
        handlesSet: !0,
        hidden: !0
      },
      session: {
        set: function(u) {
          this.setSession(u);
        },
        get: function() {
          return this.session;
        },
        handlesSet: !0,
        hidden: !0
      },
      showLineNumbers: {
        set: function(u) {
          this.renderer.$gutterLayer.setShowLineNumbers(u), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), u && this.$relativeLineNumbers ? b.attach(this) : b.detach(this);
        },
        initialValue: !0
      },
      relativeLineNumbers: {
        set: function(u) {
          this.$showLineNumbers && u ? b.attach(this) : b.detach(this);
        }
      },
      placeholder: {
        set: function(u) {
          this.$updatePlaceholder || (this.$updatePlaceholder = function() {
            var p = this.session && (this.renderer.$composition || this.getValue());
            if (p && this.renderer.placeholderNode)
              this.renderer.off("afterRender", this.$updatePlaceholder), k.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
            else if (!p && !this.renderer.placeholderNode) {
              this.renderer.on("afterRender", this.$updatePlaceholder), k.addCssClass(this.container, "ace_hasPlaceholder");
              var h = k.createElement("div");
              h.className = "ace_placeholder", h.textContent = this.$placeholder || "", this.renderer.placeholderNode = h, this.renderer.content.appendChild(this.renderer.placeholderNode);
            } else
              !p && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
          }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
        }
      },
      hScrollBarAlwaysVisible: "renderer",
      vScrollBarAlwaysVisible: "renderer",
      highlightGutterLine: "renderer",
      animatedScroll: "renderer",
      showInvisibles: "renderer",
      showPrintMargin: "renderer",
      printMarginColumn: "renderer",
      printMargin: "renderer",
      fadeFoldWidgets: "renderer",
      showFoldWidgets: "renderer",
      displayIndentGuides: "renderer",
      highlightIndentGuides: "renderer",
      showGutter: "renderer",
      fontSize: "renderer",
      fontFamily: "renderer",
      maxLines: "renderer",
      minLines: "renderer",
      scrollPastEnd: "renderer",
      fixedWidthGutter: "renderer",
      theme: "renderer",
      hasCssTransforms: "renderer",
      maxPixelHeight: "renderer",
      useTextareaForIME: "renderer",
      scrollSpeed: "$mouseHandler",
      dragDelay: "$mouseHandler",
      dragEnabled: "$mouseHandler",
      focusTimeout: "$mouseHandler",
      tooltipFollowsMouse: "$mouseHandler",
      firstLineNumber: "session",
      overwrite: "session",
      newLineMode: "session",
      useWorker: "session",
      useSoftTabs: "session",
      navigateWithinSoftTabs: "session",
      tabSize: "session",
      wrap: "session",
      indentedSoftWrap: "session",
      foldStyle: "session",
      mode: "session"
    });
    var b = {
      getText: function(u, p) {
        return (Math.abs(u.selection.lead.row - p) || p + 1 + (p < 9 ? "\xB7" : "")) + "";
      },
      getWidth: function(u, p, h) {
        return Math.max(p.toString().length, (h.lastRow + 1).toString().length, 2) * h.characterWidth;
      },
      update: function(u, p) {
        p.renderer.$loop.schedule(p.renderer.CHANGE_GUTTER);
      },
      attach: function(u) {
        u.renderer.$gutterLayer.$renderer = this, u.on("changeSelection", this.update), this.update(null, u);
      },
      detach: function(u) {
        u.renderer.$gutterLayer.$renderer == this && (u.renderer.$gutterLayer.$renderer = null), u.off("changeSelection", this.update), this.update(null, u);
      }
    };
    $.Editor = d;
  }), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = function() {
      this.$maxRev = 0, this.$fromUndo = !1, this.$undoDepth = 1 / 0, this.reset();
    };
    (function() {
      this.addSession = function(o) {
        this.$session = o;
      }, this.add = function(o, d, b) {
        if (!this.$fromUndo && o != this.$lastDelta) {
          if (this.$keepRedoStack || (this.$redoStack.length = 0), d === !1 || !this.lastDeltas) {
            this.lastDeltas = [];
            var u = this.$undoStack.length;
            u > this.$undoDepth - 1 && this.$undoStack.splice(0, u - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), o.id = this.$rev = ++this.$maxRev;
          }
          (o.action == "remove" || o.action == "insert") && (this.$lastDelta = o), this.lastDeltas.push(o);
        }
      }, this.addSelection = function(o, d) {
        this.selections.push({
          value: o,
          rev: d || this.$rev
        });
      }, this.startNewGroup = function() {
        return this.lastDeltas = null, this.$rev;
      }, this.markIgnored = function(o, d) {
        d == null && (d = this.$rev + 1);
        for (var b = this.$undoStack, u = b.length; u--; ) {
          var p = b[u][0];
          if (p.id <= o)
            break;
          p.id < d && (p.ignore = !0);
        }
        this.lastDeltas = null;
      }, this.getSelection = function(o, d) {
        for (var b = this.selections, u = b.length; u--; ) {
          var p = b[u];
          if (p.rev < o)
            return d && (p = b[u + 1]), p;
        }
      }, this.getRevision = function() {
        return this.$rev;
      }, this.getDeltas = function(o, d) {
        d == null && (d = this.$rev + 1);
        for (var b = this.$undoStack, u = null, p = 0, h = b.length; h--; ) {
          var v = b[h][0];
          if (v.id < d && !u && (u = h + 1), v.id <= o) {
            p = h + 1;
            break;
          }
        }
        return b.slice(p, u);
      }, this.getChangedRanges = function(o, d) {
        d == null && (d = this.$rev + 1);
      }, this.getChangedLines = function(o, d) {
        d == null && (d = this.$rev + 1);
      }, this.undo = function(o, d) {
        this.lastDeltas = null;
        var b = this.$undoStack;
        if (!!k(b, b.length)) {
          o || (o = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
          var u = b.pop(), p = null;
          return u && (p = o.undoChanges(u, d), this.$redoStack.push(u), this.$syncRev()), this.$fromUndo = !1, p;
        }
      }, this.redo = function(o, d) {
        if (this.lastDeltas = null, o || (o = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
          var b = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
          x(this.$redoStack, b), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(h) {
            h[0].id = ++this.$maxRev;
          }, this);
        }
        var u = this.$redoStack.pop(), p = null;
        return u && (p = o.redoChanges(u, d), this.$undoStack.push(u), this.$syncRev()), this.$fromUndo = !1, p;
      }, this.$syncRev = function() {
        var o = this.$undoStack, d = o[o.length - 1], b = d && d[0].id || 0;
        this.$redoStackBaseRev = b, this.$rev = b;
      }, this.reset = function() {
        this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
      }, this.canUndo = function() {
        return this.$undoStack.length > 0;
      }, this.canRedo = function() {
        return this.$redoStack.length > 0;
      }, this.bookmark = function(o) {
        o == null && (o = this.$rev), this.mark = o;
      }, this.isAtBookmark = function() {
        return this.$rev === this.mark;
      }, this.toJSON = function() {
      }, this.fromJSON = function() {
      }, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function(o) {
        return o ? e(o) : e(this.$undoStack) + `
---
` + e(this.$redoStack);
      };
    }).call(S.prototype);
    function k(o, d) {
      for (var b = d; b--; ) {
        var u = o[b];
        if (u && !u[0].ignore) {
          for (; b < d - 1; ) {
            var p = i(o[b], o[b + 1]);
            o[b] = p[0], o[b + 1] = p[1], b++;
          }
          return !0;
        }
      }
    }
    var f = w("./range").Range, a = f.comparePoints;
    f.comparePoints;
    function l(o) {
      return { row: o.row, column: o.column };
    }
    function t(o) {
      return {
        start: l(o.start),
        end: l(o.end),
        action: o.action,
        lines: o.lines.slice()
      };
    }
    function e(o) {
      if (o = o || this, Array.isArray(o))
        return o.map(e).join(`
`);
      var d = "";
      return o.action ? (d = o.action == "insert" ? "+" : "-", d += "[" + o.lines + "]") : o.value && (Array.isArray(o.value) ? d = o.value.map(n).join(`
`) : d = n(o.value)), o.start && (d += n(o)), (o.id || o.rev) && (d += "	(" + (o.id || o.rev) + ")"), d;
    }
    function n(o) {
      return o.start.row + ":" + o.start.column + "=>" + o.end.row + ":" + o.end.column;
    }
    function r(o, d) {
      var b = o.action == "insert", u = d.action == "insert";
      if (b && u)
        if (a(d.start, o.end) >= 0)
          c(d, o, -1);
        else if (a(d.start, o.start) <= 0)
          c(o, d, 1);
        else
          return null;
      else if (b && !u)
        if (a(d.start, o.end) >= 0)
          c(d, o, -1);
        else if (a(d.end, o.start) <= 0)
          c(o, d, -1);
        else
          return null;
      else if (!b && u)
        if (a(d.start, o.start) >= 0)
          c(d, o, 1);
        else if (a(d.start, o.start) <= 0)
          c(o, d, 1);
        else
          return null;
      else if (!b && !u)
        if (a(d.start, o.start) >= 0)
          c(d, o, 1);
        else if (a(d.end, o.start) <= 0)
          c(o, d, -1);
        else
          return null;
      return [d, o];
    }
    function i(o, d) {
      for (var b = o.length; b--; )
        for (var u = 0; u < d.length; u++)
          if (!r(o[b], d[u])) {
            for (; b < o.length; ) {
              for (; u--; )
                r(d[u], o[b]);
              u = d.length, b++;
            }
            return [o, d];
          }
      return o.selectionBefore = d.selectionBefore = o.selectionAfter = d.selectionAfter = null, [d, o];
    }
    function s(o, d) {
      var b = o.action == "insert", u = d.action == "insert";
      if (b && u)
        a(o.start, d.start) < 0 ? c(d, o, 1) : c(o, d, 1);
      else if (b && !u)
        a(o.start, d.end) >= 0 ? c(o, d, -1) : (a(o.start, d.start) <= 0 || c(o, f.fromPoints(d.start, o.start), -1), c(d, o, 1));
      else if (!b && u)
        a(d.start, o.end) >= 0 ? c(d, o, -1) : (a(d.start, o.start) <= 0 || c(d, f.fromPoints(o.start, d.start), -1), c(o, d, 1));
      else if (!b && !u)
        if (a(d.start, o.end) >= 0)
          c(d, o, -1);
        else if (a(d.end, o.start) <= 0)
          c(o, d, -1);
        else {
          var p, h;
          return a(o.start, d.start) < 0 && (p = o, o = m(o, d.start)), a(o.end, d.end) > 0 && (h = m(o, d.end)), g(d.end, o.start, o.end, -1), h && !p && (o.lines = h.lines, o.start = h.start, o.end = h.end, h = o), [d, p, h].filter(Boolean);
        }
      return [d, o];
    }
    function c(o, d, b) {
      g(o.start, d.start, d.end, b), g(o.end, d.start, d.end, b);
    }
    function g(o, d, b, u) {
      o.row == (u == 1 ? d : b).row && (o.column += u * (b.column - d.column)), o.row += u * (b.row - d.row);
    }
    function m(o, d) {
      var b = o.lines, u = o.end;
      o.end = l(d);
      var p = o.end.row - o.start.row, h = b.splice(p, b.length), v = p ? d.column : d.column - o.start.column;
      b.push(h[0].substring(0, v)), h[0] = h[0].substr(v);
      var C = {
        start: l(d),
        end: u,
        lines: h,
        action: o.action
      };
      return C;
    }
    function y(o, d) {
      d = t(d);
      for (var b = o.length; b--; ) {
        for (var u = o[b], p = 0; p < u.length; p++) {
          var h = u[p], v = s(h, d);
          d = v[0], v.length != 2 && (v[2] ? (u.splice(p + 1, 1, v[1], v[2]), p++) : v[1] || (u.splice(p, 1), p--));
        }
        u.length || o.splice(b, 1);
      }
      return o;
    }
    function x(o, d) {
      for (var b = 0; b < d.length; b++)
        for (var u = d[b], p = 0; p < u.length; p++)
          y(o, u[p]);
    }
    $.UndoManager = S;
  }), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(w, $, L) {
    var S = w("../lib/dom"), k = function(f, a) {
      this.element = f, this.canvasHeight = a || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
    };
    (function() {
      this.moveContainer = function(f) {
        S.translate(this.element, 0, -(f.firstRowScreen * f.lineHeight % this.canvasHeight) - f.offset * this.$offsetCoefficient);
      }, this.pageChanged = function(f, a) {
        return Math.floor(f.firstRowScreen * f.lineHeight / this.canvasHeight) !== Math.floor(a.firstRowScreen * a.lineHeight / this.canvasHeight);
      }, this.computeLineTop = function(f, a, l) {
        var t = a.firstRowScreen * a.lineHeight, e = Math.floor(t / this.canvasHeight), n = l.documentToScreenRow(f, 0) * a.lineHeight;
        return n - e * this.canvasHeight;
      }, this.computeLineHeight = function(f, a, l) {
        return a.lineHeight * l.getRowLineCount(f);
      }, this.getLength = function() {
        return this.cells.length;
      }, this.get = function(f) {
        return this.cells[f];
      }, this.shift = function() {
        this.$cacheCell(this.cells.shift());
      }, this.pop = function() {
        this.$cacheCell(this.cells.pop());
      }, this.push = function(f) {
        if (Array.isArray(f)) {
          this.cells.push.apply(this.cells, f);
          for (var a = S.createFragment(this.element), l = 0; l < f.length; l++)
            a.appendChild(f[l].element);
          this.element.appendChild(a);
        } else
          this.cells.push(f), this.element.appendChild(f.element);
      }, this.unshift = function(f) {
        if (Array.isArray(f)) {
          this.cells.unshift.apply(this.cells, f);
          for (var a = S.createFragment(this.element), l = 0; l < f.length; l++)
            a.appendChild(f[l].element);
          this.element.firstChild ? this.element.insertBefore(a, this.element.firstChild) : this.element.appendChild(a);
        } else
          this.cells.unshift(f), this.element.insertAdjacentElement("afterbegin", f.element);
      }, this.last = function() {
        return this.cells.length ? this.cells[this.cells.length - 1] : null;
      }, this.$cacheCell = function(f) {
        !f || (f.element.remove(), this.cellCache.push(f));
      }, this.createCell = function(f, a, l, t) {
        var e = this.cellCache.pop();
        if (!e) {
          var n = S.createElement("div");
          t && t(n), this.element.appendChild(n), e = {
            element: n,
            text: "",
            row: f
          };
        }
        return e.row = f, e;
      };
    }).call(k.prototype), $.Lines = k;
  }), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], function(w, $, L) {
    var S = w("../lib/dom"), k = w("../lib/oop"), f = w("../lib/lang"), a = w("../lib/event_emitter").EventEmitter, l = w("./lines").Lines, t = function(n) {
      this.element = S.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", n.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new l(this.element), this.$lines.$offsetCoefficient = 1;
    };
    (function() {
      k.implement(this, a), this.setSession = function(n) {
        this.session && this.session.off("change", this.$updateAnnotations), this.session = n, n && n.on("change", this.$updateAnnotations);
      }, this.addGutterDecoration = function(n, r) {
        window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(n, r);
      }, this.removeGutterDecoration = function(n, r) {
        window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(n, r);
      }, this.setAnnotations = function(n) {
        this.$annotations = [];
        for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.row, c = this.$annotations[s];
          c || (c = this.$annotations[s] = { text: [] });
          var g = i.text;
          g = g ? f.escapeHTML(g) : i.html || "", c.text.indexOf(g) === -1 && c.text.push(g);
          var m = i.type, y = i.className;
          y ? c.className = y : m == "error" ? c.className = " ace_error" : m == "warning" && c.className != " ace_error" ? c.className = " ace_warning" : m == "info" && !c.className && (c.className = " ace_info");
        }
      }, this.$updateAnnotations = function(n) {
        if (!!this.$annotations.length) {
          var r = n.start.row, i = n.end.row - r;
          if (i !== 0)
            if (n.action == "remove")
              this.$annotations.splice(r, i + 1, null);
            else {
              var s = new Array(i + 1);
              s.unshift(r, 1), this.$annotations.splice.apply(this.$annotations, s);
            }
        }
      }, this.update = function(n) {
        this.config = n;
        var r = this.session, i = n.firstRow, s = Math.min(
          n.lastRow + n.gutterOffset,
          r.getLength() - 1
        );
        this.oldLastRow = s, this.config = n, this.$lines.moveContainer(n), this.$updateCursorRow();
        for (var c = r.getNextFoldLine(i), g = c ? c.start.row : 1 / 0, m = null, y = -1, x = i; ; ) {
          if (x > g && (x = c.end.row + 1, c = r.getNextFoldLine(x, c), g = c ? c.start.row : 1 / 0), x > s) {
            for (; this.$lines.getLength() > y + 1; )
              this.$lines.pop();
            break;
          }
          m = this.$lines.get(++y), m ? m.row = x : (m = this.$lines.createCell(x, n, this.session, e), this.$lines.push(m)), this.$renderCell(m, n, c, x), x++;
        }
        this._signal("afterRender"), this.$updateGutterWidth(n);
      }, this.$updateGutterWidth = function(n) {
        var r = this.session, i = r.gutterRenderer || this.$renderer, s = r.$firstLineNumber, c = this.$lines.last() ? this.$lines.last().text : "";
        (this.$fixedWidth || r.$useWrapMode) && (c = r.getLength() + s - 1);
        var g = i ? i.getWidth(r, c, n) : c.toString().length * n.characterWidth, m = this.$padding || this.$computePadding();
        g += m.left + m.right, g !== this.gutterWidth && !isNaN(g) && (this.gutterWidth = g, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", g));
      }, this.$updateCursorRow = function() {
        if (!!this.$highlightGutterLine) {
          var n = this.session.selection.getCursor();
          this.$cursorRow !== n.row && (this.$cursorRow = n.row);
        }
      }, this.updateLineHighlight = function() {
        if (!!this.$highlightGutterLine) {
          var n = this.session.selection.cursor.row;
          if (this.$cursorRow = n, !(this.$cursorCell && this.$cursorCell.row == n)) {
            this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
            var r = this.$lines.cells;
            this.$cursorCell = null;
            for (var i = 0; i < r.length; i++) {
              var s = r[i];
              if (s.row >= this.$cursorRow) {
                if (s.row > this.$cursorRow) {
                  var c = this.session.getFoldLine(this.$cursorRow);
                  if (i > 0 && c && c.start.row == r[i - 1].row)
                    s = r[i - 1];
                  else
                    break;
                }
                s.element.className = "ace_gutter-active-line " + s.element.className, this.$cursorCell = s;
                break;
              }
            }
          }
        }
      }, this.scrollLines = function(n) {
        var r = this.config;
        if (this.config = n, this.$updateCursorRow(), this.$lines.pageChanged(r, n))
          return this.update(n);
        this.$lines.moveContainer(n);
        var i = Math.min(
          n.lastRow + n.gutterOffset,
          this.session.getLength() - 1
        ), s = this.oldLastRow;
        if (this.oldLastRow = i, !r || s < n.firstRow)
          return this.update(n);
        if (i < r.firstRow)
          return this.update(n);
        if (r.firstRow < n.firstRow)
          for (var c = this.session.getFoldedRowCount(r.firstRow, n.firstRow - 1); c > 0; c--)
            this.$lines.shift();
        if (s > i)
          for (var c = this.session.getFoldedRowCount(i + 1, s); c > 0; c--)
            this.$lines.pop();
        n.firstRow < r.firstRow && this.$lines.unshift(this.$renderLines(n, n.firstRow, r.firstRow - 1)), i > s && this.$lines.push(this.$renderLines(n, s + 1, i)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(n);
      }, this.$renderLines = function(n, r, i) {
        for (var s = [], c = r, g = this.session.getNextFoldLine(c), m = g ? g.start.row : 1 / 0; c > m && (c = g.end.row + 1, g = this.session.getNextFoldLine(c, g), m = g ? g.start.row : 1 / 0), !(c > i); ) {
          var y = this.$lines.createCell(c, n, this.session, e);
          this.$renderCell(y, n, g, c), s.push(y), c++;
        }
        return s;
      }, this.$renderCell = function(n, r, i, s) {
        var c = n.element, g = this.session, m = c.childNodes[0], y = c.childNodes[1], x = g.$firstLineNumber, o = g.$breakpoints, d = g.$decorations, b = g.gutterRenderer || this.$renderer, u = this.$showFoldWidgets && g.foldWidgets, p = i ? i.start.row : Number.MAX_VALUE, h = "ace_gutter-cell ";
        if (this.$highlightGutterLine && (s == this.$cursorRow || i && s < this.$cursorRow && s >= p && this.$cursorRow <= i.end.row) && (h += "ace_gutter-active-line ", this.$cursorCell != n && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = n)), o[s] && (h += o[s]), d[s] && (h += d[s]), this.$annotations[s] && (h += this.$annotations[s].className), c.className != h && (c.className = h), u) {
          var v = u[s];
          v == null && (v = u[s] = g.getFoldWidget(s));
        }
        if (v) {
          var h = "ace_fold-widget ace_" + v;
          v == "start" && s == p && s < i.end.row ? h += " ace_closed" : h += " ace_open", y.className != h && (y.className = h);
          var C = r.lineHeight + "px";
          S.setStyle(y.style, "height", C), S.setStyle(y.style, "display", "inline-block");
        } else
          y && S.setStyle(y.style, "display", "none");
        var _ = (b ? b.getText(g, s) : s + x).toString();
        return _ !== m.data && (m.data = _), S.setStyle(n.element.style, "height", this.$lines.computeLineHeight(s, r, g) + "px"), S.setStyle(n.element.style, "top", this.$lines.computeLineTop(s, r, g) + "px"), n.text = _, n;
      }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function(n) {
        this.$highlightGutterLine = n;
      }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function(n) {
        this.$renderer = !n && {
          getWidth: function() {
            return 0;
          },
          getText: function() {
            return "";
          }
        };
      }, this.getShowLineNumbers = function() {
        return this.$showLineNumbers;
      }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(n) {
        n ? S.addCssClass(this.element, "ace_folding-enabled") : S.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = n, this.$padding = null;
      }, this.getShowFoldWidgets = function() {
        return this.$showFoldWidgets;
      }, this.$computePadding = function() {
        if (!this.element.firstChild)
          return { left: 0, right: 0 };
        var n = S.computedStyle(this.element.firstChild);
        return this.$padding = {}, this.$padding.left = (parseInt(n.borderLeftWidth) || 0) + (parseInt(n.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(n.borderRightWidth) || 0) + (parseInt(n.paddingRight) || 0), this.$padding;
      }, this.getRegion = function(n) {
        var r = this.$padding || this.$computePadding(), i = this.element.getBoundingClientRect();
        if (n.x < r.left + i.left)
          return "markers";
        if (this.$showFoldWidgets && n.x > i.right - r.right)
          return "foldWidgets";
      };
    }).call(t.prototype);
    function e(n) {
      var r = document.createTextNode("");
      n.appendChild(r);
      var i = S.createElement("span");
      return n.appendChild(i), n;
    }
    $.Gutter = t;
  }), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(w, $, L) {
    var S = w("../range").Range, k = w("../lib/dom"), f = function(a) {
      this.element = k.createElement("div"), this.element.className = "ace_layer ace_marker-layer", a.appendChild(this.element);
    };
    (function() {
      this.$padding = 0, this.setPadding = function(l) {
        this.$padding = l;
      }, this.setSession = function(l) {
        this.session = l;
      }, this.setMarkers = function(l) {
        this.markers = l;
      }, this.elt = function(l, t) {
        var e = this.i != -1 && this.element.childNodes[this.i];
        e ? this.i++ : (e = document.createElement("div"), this.element.appendChild(e), this.i = -1), e.style.cssText = t, e.className = l;
      }, this.update = function(l) {
        if (!!l) {
          this.config = l, this.i = 0;
          var t;
          for (var e in this.markers) {
            var n = this.markers[e];
            if (!n.range) {
              n.update(t, this, this.session, l);
              continue;
            }
            var r = n.range.clipRows(l.firstRow, l.lastRow);
            if (!r.isEmpty())
              if (r = r.toScreenRange(this.session), n.renderer) {
                var i = this.$getTop(r.start.row, l), s = this.$padding + r.start.column * l.characterWidth;
                n.renderer(t, r, s, i, l);
              } else
                n.type == "fullLine" ? this.drawFullLineMarker(t, r, n.clazz, l) : n.type == "screenLine" ? this.drawScreenLineMarker(t, r, n.clazz, l) : r.isMultiLine() ? n.type == "text" ? this.drawTextMarker(t, r, n.clazz, l) : this.drawMultiLineMarker(t, r, n.clazz, l) : this.drawSingleLineMarker(t, r, n.clazz + " ace_start ace_br15", l);
          }
          if (this.i != -1)
            for (; this.i < this.element.childElementCount; )
              this.element.removeChild(this.element.lastChild);
        }
      }, this.$getTop = function(l, t) {
        return (l - t.firstRowScreen) * t.lineHeight;
      };
      function a(l, t, e, n) {
        return (l ? 1 : 0) | (t ? 2 : 0) | (e ? 4 : 0) | (n ? 8 : 0);
      }
      this.drawTextMarker = function(l, t, e, n, r) {
        for (var i = this.session, s = t.start.row, c = t.end.row, g = s, m = 0, y = 0, x = i.getScreenLastRowColumn(g), o = new S(g, t.start.column, g, y); g <= c; g++)
          o.start.row = o.end.row = g, o.start.column = g == s ? t.start.column : i.getRowWrapIndent(g), o.end.column = x, m = y, y = x, x = g + 1 < c ? i.getScreenLastRowColumn(g + 1) : g == c ? 0 : t.end.column, this.drawSingleLineMarker(l, o, e + (g == s ? " ace_start" : "") + " ace_br" + a(g == s || g == s + 1 && t.start.column, m < y, y > x, g == c), n, g == c ? 0 : 1, r);
      }, this.drawMultiLineMarker = function(l, t, e, n, r) {
        var i = this.$padding, s = n.lineHeight, c = this.$getTop(t.start.row, n), g = i + t.start.column * n.characterWidth;
        if (r = r || "", this.session.$bidiHandler.isBidiRow(t.start.row)) {
          var m = t.clone();
          m.end.row = m.start.row, m.end.column = this.session.getLine(m.start.row).length, this.drawBidiSingleLineMarker(l, m, e + " ace_br1 ace_start", n, null, r);
        } else
          this.elt(e + " ace_br1 ace_start", "height:" + s + "px;right:0;top:" + c + "px;left:" + g + "px;" + (r || ""));
        if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
          var m = t.clone();
          m.start.row = m.end.row, m.start.column = 0, this.drawBidiSingleLineMarker(l, m, e + " ace_br12", n, null, r);
        } else {
          c = this.$getTop(t.end.row, n);
          var y = t.end.column * n.characterWidth;
          this.elt(e + " ace_br12", "height:" + s + "px;width:" + y + "px;top:" + c + "px;left:" + i + "px;" + (r || ""));
        }
        if (s = (t.end.row - t.start.row - 1) * n.lineHeight, !(s <= 0)) {
          c = this.$getTop(t.start.row + 1, n);
          var x = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
          this.elt(e + (x ? " ace_br" + x : ""), "height:" + s + "px;right:0;top:" + c + "px;left:" + i + "px;" + (r || ""));
        }
      }, this.drawSingleLineMarker = function(l, t, e, n, r, i) {
        if (this.session.$bidiHandler.isBidiRow(t.start.row))
          return this.drawBidiSingleLineMarker(l, t, e, n, r, i);
        var s = n.lineHeight, c = (t.end.column + (r || 0) - t.start.column) * n.characterWidth, g = this.$getTop(t.start.row, n), m = this.$padding + t.start.column * n.characterWidth;
        this.elt(e, "height:" + s + "px;width:" + c + "px;top:" + g + "px;left:" + m + "px;" + (i || ""));
      }, this.drawBidiSingleLineMarker = function(l, t, e, n, r, i) {
        var s = n.lineHeight, c = this.$getTop(t.start.row, n), g = this.$padding, m = this.session.$bidiHandler.getSelections(t.start.column, t.end.column);
        m.forEach(function(y) {
          this.elt(e, "height:" + s + "px;width:" + y.width + (r || 0) + "px;top:" + c + "px;left:" + (g + y.left) + "px;" + (i || ""));
        }, this);
      }, this.drawFullLineMarker = function(l, t, e, n, r) {
        var i = this.$getTop(t.start.row, n), s = n.lineHeight;
        t.start.row != t.end.row && (s += this.$getTop(t.end.row, n) - i), this.elt(e, "height:" + s + "px;top:" + i + "px;left:0;right:0;" + (r || ""));
      }, this.drawScreenLineMarker = function(l, t, e, n, r) {
        var i = this.$getTop(t.start.row, n), s = n.lineHeight;
        this.elt(e, "height:" + s + "px;top:" + i + "px;left:0;right:0;" + (r || ""));
      };
    }).call(f.prototype), $.Marker = f;
  }), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/dom"), f = w("../lib/lang"), a = w("./lines").Lines, l = w("../lib/event_emitter").EventEmitter, t = function(e) {
      this.dom = k, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new a(this.element);
    };
    (function() {
      S.implement(this, l), this.EOF_CHAR = "\xB6", this.EOL_CHAR_LF = "\xAC", this.EOL_CHAR_CRLF = "\xA4", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "\u2014", this.SPACE_CHAR = "\xB7", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function() {
        var e = this.session.doc, n = e.getNewLineCharacter() == `
` && e.getNewLineMode() != "windows", r = n ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
        if (this.EOL_CHAR != r)
          return this.EOL_CHAR = r, !0;
      }, this.setPadding = function(e) {
        this.$padding = e, this.element.style.margin = "0 " + e + "px";
      }, this.getLineHeight = function() {
        return this.$fontMetrics.$characterSize.height || 0;
      }, this.getCharacterWidth = function() {
        return this.$fontMetrics.$characterSize.width || 0;
      }, this.$setFontMetrics = function(e) {
        this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function(n) {
          this._signal("changeCharacterSize", n);
        }.bind(this)), this.$pollSizeChanges();
      }, this.checkForSizeChanges = function() {
        this.$fontMetrics.checkForSizeChanges();
      }, this.$pollSizeChanges = function() {
        return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
      }, this.setSession = function(e) {
        this.session = e, e && this.$computeTabString();
      }, this.showInvisibles = !1, this.showSpaces = !1, this.showTabs = !1, this.showEOL = !1, this.setShowInvisibles = function(e) {
        return this.showInvisibles == e ? !1 : (this.showInvisibles = e, typeof e == "string" ? (this.showSpaces = /tab/i.test(e), this.showTabs = /space/i.test(e), this.showEOL = /eol/i.test(e)) : this.showSpaces = this.showTabs = this.showEOL = e, this.$computeTabString(), !0);
      }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(e) {
        return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0);
      }, this.$highlightIndentGuides = !0, this.setHighlightIndentGuides = function(e) {
        return this.$highlightIndentGuides === e ? !1 : (this.$highlightIndentGuides = e, e);
      }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
        var e = this.session.getTabSize();
        this.tabSize = e;
        for (var n = this.$tabStrings = [0], r = 1; r < e + 1; r++)
          if (this.showTabs) {
            var i = this.dom.createElement("span");
            i.className = "ace_invisible ace_invisible_tab", i.textContent = f.stringRepeat(this.TAB_CHAR, r), n.push(i);
          } else
            n.push(this.dom.createTextNode(f.stringRepeat(" ", r), this.element));
        if (this.displayIndentGuides) {
          this.$indentGuideRe = /\s\S| \t|\t |\s$/;
          var s = "ace_indent-guide", c = this.showSpaces ? " ace_invisible ace_invisible_space" : "", g = this.showSpaces ? f.stringRepeat(this.SPACE_CHAR, this.tabSize) : f.stringRepeat(" ", this.tabSize), m = this.showTabs ? " ace_invisible ace_invisible_tab" : "", y = this.showTabs ? f.stringRepeat(this.TAB_CHAR, this.tabSize) : g, i = this.dom.createElement("span");
          i.className = s + c, i.textContent = g, this.$tabStrings[" "] = i;
          var i = this.dom.createElement("span");
          i.className = s + m, i.textContent = y, this.$tabStrings["	"] = i;
        }
      }, this.updateLines = function(e, n, r) {
        if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow)
          return this.update(e);
        this.config = e;
        for (var i = Math.max(n, e.firstRow), s = Math.min(r, e.lastRow), c = this.element.childNodes, g = 0, y = e.firstRow; y < i; y++) {
          var x = this.session.getFoldLine(y);
          if (x)
            if (x.containsRow(i)) {
              i = x.start.row;
              break;
            } else
              y = x.end.row;
          g++;
        }
        for (var m = !1, y = i, x = this.session.getNextFoldLine(y), o = x ? x.start.row : 1 / 0; y > o && (y = x.end.row + 1, x = this.session.getNextFoldLine(y, x), o = x ? x.start.row : 1 / 0), !(y > s); ) {
          var d = c[g++];
          if (d) {
            this.dom.removeChildren(d), this.$renderLine(d, y, y == o ? x : !1), m && (d.style.top = this.$lines.computeLineTop(y, e, this.session) + "px");
            var b = e.lineHeight * this.session.getRowLength(y) + "px";
            d.style.height != b && (m = !0, d.style.height = b);
          }
          y++;
        }
        if (m)
          for (; g < this.$lines.cells.length; ) {
            var u = this.$lines.cells[g++];
            u.element.style.top = this.$lines.computeLineTop(u.row, e, this.session) + "px";
          }
      }, this.scrollLines = function(e) {
        var n = this.config;
        if (this.config = e, this.$lines.pageChanged(n, e))
          return this.update(e);
        this.$lines.moveContainer(e);
        var r = e.lastRow, i = n ? n.lastRow : -1;
        if (!n || i < e.firstRow)
          return this.update(e);
        if (r < n.firstRow)
          return this.update(e);
        if (!n || n.lastRow < e.firstRow)
          return this.update(e);
        if (e.lastRow < n.firstRow)
          return this.update(e);
        if (n.firstRow < e.firstRow)
          for (var s = this.session.getFoldedRowCount(n.firstRow, e.firstRow - 1); s > 0; s--)
            this.$lines.shift();
        if (n.lastRow > e.lastRow)
          for (var s = this.session.getFoldedRowCount(e.lastRow + 1, n.lastRow); s > 0; s--)
            this.$lines.pop();
        e.firstRow < n.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, n.firstRow - 1)), e.lastRow > n.lastRow && this.$lines.push(this.$renderLinesFragment(e, n.lastRow + 1, e.lastRow)), this.$highlightIndentGuide();
      }, this.$renderLinesFragment = function(e, n, r) {
        for (var i = [], s = n, c = this.session.getNextFoldLine(s), g = c ? c.start.row : 1 / 0; s > g && (s = c.end.row + 1, c = this.session.getNextFoldLine(s, c), g = c ? c.start.row : 1 / 0), !(s > r); ) {
          var m = this.$lines.createCell(s, e, this.session), y = m.element;
          this.dom.removeChildren(y), k.setStyle(y.style, "height", this.$lines.computeLineHeight(s, e, this.session) + "px"), k.setStyle(y.style, "top", this.$lines.computeLineTop(s, e, this.session) + "px"), this.$renderLine(y, s, s == g ? c : !1), this.$useLineGroups() ? y.className = "ace_line_group" : y.className = "ace_line", i.push(m), s++;
        }
        return i;
      }, this.update = function(e) {
        this.$lines.moveContainer(e), this.config = e;
        for (var n = e.firstRow, r = e.lastRow, i = this.$lines; i.getLength(); )
          i.pop();
        i.push(this.$renderLinesFragment(e, n, r));
      }, this.$textToken = {
        text: !0,
        rparen: !0,
        lparen: !0
      }, this.$renderToken = function(e, n, r, i) {
        for (var s = this, c = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, g = this.dom.createFragment(this.element), m, y = 0; m = c.exec(i); ) {
          var x = m[1], o = m[2], d = m[3], b = m[4], u = m[5];
          if (!(!s.showSpaces && o)) {
            var p = y != m.index ? i.slice(y, m.index) : "";
            if (y = m.index + m[0].length, p && g.appendChild(this.dom.createTextNode(p, this.element)), x) {
              var h = s.session.getScreenTabSize(n + m.index);
              g.appendChild(s.$tabStrings[h].cloneNode(!0)), n += h - 1;
            } else if (o)
              if (s.showSpaces) {
                var v = this.dom.createElement("span");
                v.className = "ace_invisible ace_invisible_space", v.textContent = f.stringRepeat(s.SPACE_CHAR, o.length), g.appendChild(v);
              } else
                g.appendChild(this.com.createTextNode(o, this.element));
            else if (d) {
              var v = this.dom.createElement("span");
              v.className = "ace_invisible ace_invisible_space ace_invalid", v.textContent = f.stringRepeat(s.SPACE_CHAR, d.length), g.appendChild(v);
            } else if (b) {
              n += 1;
              var v = this.dom.createElement("span");
              v.style.width = s.config.characterWidth * 2 + "px", v.className = s.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", v.textContent = s.showSpaces ? s.SPACE_CHAR : b, g.appendChild(v);
            } else if (u) {
              n += 1;
              var v = this.dom.createElement("span");
              v.style.width = s.config.characterWidth * 2 + "px", v.className = "ace_cjk", v.textContent = u, g.appendChild(v);
            }
          }
        }
        if (g.appendChild(this.dom.createTextNode(y ? i.slice(y) : i, this.element)), this.$textToken[r.type])
          e.appendChild(g);
        else {
          var C = "ace_" + r.type.replace(/\./g, " ace_"), v = this.dom.createElement("span");
          r.type == "fold" && (v.style.width = r.value.length * this.config.characterWidth + "px"), v.className = C, v.appendChild(g), e.appendChild(v);
        }
        return n + i.length;
      }, this.renderIndentGuide = function(e, n, r) {
        var i = n.search(this.$indentGuideRe);
        if (i <= 0 || i >= r)
          return n;
        if (n[0] == " ") {
          i -= i % this.tabSize;
          for (var s = i / this.tabSize, c = 0; c < s; c++)
            e.appendChild(this.$tabStrings[" "].cloneNode(!0));
          return this.$highlightIndentGuide(), n.substr(i);
        } else if (n[0] == "	") {
          for (var c = 0; c < i; c++)
            e.appendChild(this.$tabStrings["	"].cloneNode(!0));
          return this.$highlightIndentGuide(), n.substr(i);
        }
        return this.$highlightIndentGuide(), n;
      }, this.$highlightIndentGuide = function() {
        if (!(!this.$highlightIndentGuides || !this.displayIndentGuides)) {
          this.$highlightIndentGuideMarker = {
            indentLevel: void 0,
            start: void 0,
            end: void 0,
            dir: void 0
          };
          var e = this.session.doc.$lines, n = this.session.selection.getCursor(), r = /^\s*/.exec(this.session.doc.getLine(n.row))[0].length, i = Math.floor(r / this.tabSize);
          this.$highlightIndentGuideMarker = {
            indentLevel: i,
            start: n.row
          };
          var s = this.session.$bracketHighlight;
          if (s) {
            for (var c = this.session.$bracketHighlight.ranges, g = 0; g < c.length; g++)
              if (n.row !== c[g].start.row) {
                this.$highlightIndentGuideMarker.end = c[g].start.row, n.row > c[g].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                break;
              }
          }
          if (!this.$highlightIndentGuideMarker.end && e[n.row] !== "" && n.column === e[n.row].length) {
            this.$highlightIndentGuideMarker.dir = 1;
            for (var g = n.row + 1; g < e.length; g++) {
              var m = e[g], y = /^\s*/.exec(m)[0].length;
              if (m !== "" && (this.$highlightIndentGuideMarker.end = g, y <= r))
                break;
            }
          }
          this.$renderHighlightIndentGuide();
        }
      }, this.$clearActiveIndentGuide = function() {
        for (var e = this.$lines.cells, n = 0; n < e.length; n++) {
          var r = e[n], i = r.element.childNodes;
          if (i.length > 0) {
            for (var s = 0; s < i.length; s++)
              if (i[s].classList && i[s].classList.contains("ace_indent-guide-active")) {
                i[s].classList.remove("ace_indent-guide-active");
                break;
              }
          }
        }
      }, this.$setIndentGuideActive = function(e, n) {
        var r = this.session.doc.getLine(e.row);
        if (r !== "") {
          var i = e.element.childNodes;
          i && i[n - 1] && i[n - 1].classList && i[n - 1].classList.add("ace_indent-guide-active");
        }
      }, this.$renderHighlightIndentGuide = function() {
        if (!!this.$lines) {
          var e = this.$lines.cells;
          this.$clearActiveIndentGuide();
          var n = this.$highlightIndentGuideMarker.indentLevel;
          if (n !== 0)
            if (this.$highlightIndentGuideMarker.dir === 1)
              for (var r = 0; r < e.length; r++) {
                var i = e[r];
                if (this.$highlightIndentGuideMarker.end && i.row >= this.$highlightIndentGuideMarker.start + 1) {
                  if (i.row >= this.$highlightIndentGuideMarker.end)
                    break;
                  this.$setIndentGuideActive(i, n);
                }
              }
            else
              for (var r = e.length - 1; r >= 0; r--) {
                var i = e[r];
                if (this.$highlightIndentGuideMarker.end && i.row < this.$highlightIndentGuideMarker.start) {
                  if (i.row <= this.$highlightIndentGuideMarker.end)
                    break;
                  this.$setIndentGuideActive(i, n);
                }
              }
        }
      }, this.$createLineElement = function(e) {
        var n = this.dom.createElement("div");
        return n.className = "ace_line", n.style.height = this.config.lineHeight + "px", n;
      }, this.$renderWrappedLine = function(e, n, r) {
        var i = 0, s = 0, c = r[0], g = 0, m = this.$createLineElement();
        e.appendChild(m);
        for (var y = 0; y < n.length; y++) {
          var x = n[y], o = x.value;
          if (y == 0 && this.displayIndentGuides) {
            if (i = o.length, o = this.renderIndentGuide(m, o, c), !o)
              continue;
            i -= o.length;
          }
          if (i + o.length < c)
            g = this.$renderToken(m, g, x, o), i += o.length;
          else {
            for (; i + o.length >= c; )
              g = this.$renderToken(m, g, x, o.substring(0, c - i)), o = o.substring(c - i), i = c, m = this.$createLineElement(), e.appendChild(m), m.appendChild(this.dom.createTextNode(f.stringRepeat("\xA0", r.indent), this.element)), s++, g = 0, c = r[s] || Number.MAX_VALUE;
            o.length != 0 && (i += o.length, g = this.$renderToken(m, g, x, o));
          }
        }
        r[r.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(m, g, null, "", !0);
      }, this.$renderSimpleLine = function(e, n) {
        for (var r = 0, i = 0; i < n.length; i++) {
          var s = n[i], c = s.value;
          if (!(i == 0 && this.displayIndentGuides && (c = this.renderIndentGuide(e, c), !c))) {
            if (r + c.length > this.MAX_LINE_LENGTH)
              return this.$renderOverflowMessage(e, r, s, c);
            r = this.$renderToken(e, r, s, c);
          }
        }
      }, this.$renderOverflowMessage = function(e, n, r, i, s) {
        r && this.$renderToken(e, n, r, i.slice(0, this.MAX_LINE_LENGTH - n));
        var c = this.dom.createElement("span");
        c.className = "ace_inline_button ace_keyword ace_toggle_wrap", c.textContent = s ? "<hide>" : "<click to see more...>", e.appendChild(c);
      }, this.$renderLine = function(e, n, r) {
        if (!r && r != !1 && (r = this.session.getFoldLine(n)), r)
          var i = this.$getFoldLineTokens(n, r);
        else
          var i = this.session.getTokens(n);
        var s = e;
        if (i.length) {
          var c = this.session.getRowSplitData(n);
          if (c && c.length) {
            this.$renderWrappedLine(e, i, c);
            var s = e.lastChild;
          } else {
            var s = e;
            this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s)), this.$renderSimpleLine(s, i);
          }
        } else
          this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s));
        if (this.showEOL && s) {
          r && (n = r.end.row);
          var g = this.dom.createElement("span");
          g.className = "ace_invisible ace_invisible_eol", g.textContent = n == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, s.appendChild(g);
        }
      }, this.$getFoldLineTokens = function(e, n) {
        var r = this.session, i = [];
        function s(g, m, y) {
          for (var x = 0, o = 0; o + g[x].value.length < m; )
            if (o += g[x].value.length, x++, x == g.length)
              return;
          if (o != m) {
            var d = g[x].value.substring(m - o);
            d.length > y - m && (d = d.substring(0, y - m)), i.push({
              type: g[x].type,
              value: d
            }), o = m + d.length, x += 1;
          }
          for (; o < y && x < g.length; ) {
            var d = g[x].value;
            d.length + o > y ? i.push({
              type: g[x].type,
              value: d.substring(0, y - o)
            }) : i.push(g[x]), o += d.length, x += 1;
          }
        }
        var c = r.getTokens(e);
        return n.walk(function(g, m, y, x, o) {
          g != null ? i.push({
            type: "fold",
            value: g
          }) : (o && (c = r.getTokens(m)), c.length && s(c, x, y));
        }, n.end.row, this.session.getLine(n.end.row).length), i;
      }, this.$useLineGroups = function() {
        return this.session.getUseWrapMode();
      }, this.destroy = function() {
      };
    }).call(t.prototype), $.Text = t;
  }), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(w, $, L) {
    var S = w("../lib/dom"), k = function(f) {
      this.element = S.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", f.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), S.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
    };
    (function() {
      this.$updateOpacity = function(f) {
        for (var a = this.cursors, l = a.length; l--; )
          S.setStyle(a[l].style, "opacity", f ? "" : "0");
      }, this.$startCssAnimation = function() {
        for (var f = this.cursors, a = f.length; a--; )
          f[a].style.animationDuration = this.blinkInterval + "ms";
        this.$isAnimating = !0, setTimeout(function() {
          this.$isAnimating && S.addCssClass(this.element, "ace_animate-blinking");
        }.bind(this));
      }, this.$stopCssAnimation = function() {
        this.$isAnimating = !1, S.removeCssClass(this.element, "ace_animate-blinking");
      }, this.$padding = 0, this.setPadding = function(f) {
        this.$padding = f;
      }, this.setSession = function(f) {
        this.session = f;
      }, this.setBlinking = function(f) {
        f != this.isBlinking && (this.isBlinking = f, this.restartTimer());
      }, this.setBlinkInterval = function(f) {
        f != this.blinkInterval && (this.blinkInterval = f, this.restartTimer());
      }, this.setSmoothBlinking = function(f) {
        f != this.smoothBlinking && (this.smoothBlinking = f, S.setCssClass(this.element, "ace_smooth-blinking", f), this.$updateCursors(!0), this.restartTimer());
      }, this.addCursor = function() {
        var f = S.createElement("div");
        return f.className = "ace_cursor", this.element.appendChild(f), this.cursors.push(f), f;
      }, this.removeCursor = function() {
        if (this.cursors.length > 1) {
          var f = this.cursors.pop();
          return f.parentNode.removeChild(f), f;
        }
      }, this.hideCursor = function() {
        this.isVisible = !1, S.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
      }, this.showCursor = function() {
        this.isVisible = !0, S.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
      }, this.restartTimer = function() {
        var f = this.$updateCursors;
        if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = !1, S.removeCssClass(this.element, "ace_smooth-blinking")), f(!0), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
          this.$stopCssAnimation();
          return;
        }
        if (this.smoothBlinking && (this.$isSmoothBlinking = !0, setTimeout(function() {
          this.$isSmoothBlinking && S.addCssClass(this.element, "ace_smooth-blinking");
        }.bind(this))), S.HAS_CSS_ANIMATION)
          this.$startCssAnimation();
        else {
          var a = function() {
            this.timeoutId = setTimeout(function() {
              f(!1);
            }, 0.6 * this.blinkInterval);
          }.bind(this);
          this.intervalId = setInterval(function() {
            f(!0), a();
          }, this.blinkInterval), a();
        }
      }, this.getPixelPosition = function(f, a) {
        if (!this.config || !this.session)
          return { left: 0, top: 0 };
        f || (f = this.session.selection.getCursor());
        var l = this.session.documentToScreenPosition(f), t = this.$padding + (this.session.$bidiHandler.isBidiRow(l.row, f.row) ? this.session.$bidiHandler.getPosLeft(l.column) : l.column * this.config.characterWidth), e = (l.row - (a ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
        return { left: t, top: e };
      }, this.isCursorInView = function(f, a) {
        return f.top >= 0 && f.top < a.maxHeight;
      }, this.update = function(f) {
        this.config = f;
        var a = this.session.$selectionMarkers, l = 0, t = 0;
        (a === void 0 || a.length === 0) && (a = [{ cursor: null }]);
        for (var l = 0, e = a.length; l < e; l++) {
          var n = this.getPixelPosition(a[l].cursor, !0);
          if (!((n.top > f.height + f.offset || n.top < 0) && l > 1)) {
            var r = this.cursors[t++] || this.addCursor(), i = r.style;
            this.drawCursor ? this.drawCursor(r, n, f, a[l], this.session) : this.isCursorInView(n, f) ? (S.setStyle(i, "display", "block"), S.translate(r, n.left, n.top), S.setStyle(i, "width", Math.round(f.characterWidth) + "px"), S.setStyle(i, "height", f.lineHeight + "px")) : S.setStyle(i, "display", "none");
          }
        }
        for (; this.cursors.length > t; )
          this.removeCursor();
        var s = this.session.getOverwrite();
        this.$setOverwrite(s), this.$pixelPos = n, this.restartTimer();
      }, this.drawCursor = null, this.$setOverwrite = function(f) {
        f != this.overwrite && (this.overwrite = f, f ? S.addCssClass(this.element, "ace_overwrite-cursors") : S.removeCssClass(this.element, "ace_overwrite-cursors"));
      }, this.destroy = function() {
        clearInterval(this.intervalId), clearTimeout(this.timeoutId);
      };
    }).call(k.prototype), $.Cursor = k;
  }), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/dom"), f = w("./lib/event"), a = w("./lib/event_emitter").EventEmitter, l = 32768, t = function(r) {
      this.element = k.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = k.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = "\xA0", this.element.appendChild(this.inner), r.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, f.addListener(this.element, "scroll", this.onScroll.bind(this)), f.addListener(this.element, "mousedown", f.preventDefault);
    };
    (function() {
      S.implement(this, a), this.setVisible = function(r) {
        this.element.style.display = r ? "" : "none", this.isVisible = r, this.coeff = 1;
      };
    }).call(t.prototype);
    var e = function(r, i) {
      t.call(this, r), this.scrollTop = 0, this.scrollHeight = 0, i.$scrollbarWidth = this.width = k.scrollbarWidth(r.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0;
    };
    S.inherits(e, t), function() {
      this.classSuffix = "-v", this.onScroll = function() {
        if (!this.skipEvent) {
          if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
            var r = this.element.clientHeight / this.scrollHeight;
            this.scrollTop = this.scrollTop * (1 - r) / (this.coeff - r);
          }
          this._emit("scroll", { data: this.scrollTop });
        }
        this.skipEvent = !1;
      }, this.getWidth = function() {
        return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
      }, this.setHeight = function(r) {
        this.element.style.height = r + "px";
      }, this.setInnerHeight = this.setScrollHeight = function(r) {
        this.scrollHeight = r, r > l ? (this.coeff = l / r, r = l) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = r + "px";
      }, this.setScrollTop = function(r) {
        this.scrollTop != r && (this.skipEvent = !0, this.scrollTop = r, this.element.scrollTop = r * this.coeff);
      };
    }.call(e.prototype);
    var n = function(r, i) {
      t.call(this, r), this.scrollLeft = 0, this.height = i.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px";
    };
    S.inherits(n, t), function() {
      this.classSuffix = "-h", this.onScroll = function() {
        this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
      }, this.getHeight = function() {
        return this.isVisible ? this.height : 0;
      }, this.setWidth = function(r) {
        this.element.style.width = r + "px";
      }, this.setInnerWidth = function(r) {
        this.inner.style.width = r + "px";
      }, this.setScrollWidth = function(r) {
        this.inner.style.width = r + "px";
      }, this.setScrollLeft = function(r) {
        this.scrollLeft != r && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = r);
      };
    }.call(n.prototype), $.ScrollBar = e, $.ScrollBarV = e, $.ScrollBarH = n, $.VScrollBar = e, $.HScrollBar = n;
  }), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(w, $, L) {
    var S = w("./lib/event"), k = function(f, a) {
      this.onRender = f, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = a || window;
      var l = this;
      this._flush = function(t) {
        l.pending = !1;
        var e = l.changes;
        if (e && (S.blockIdle(100), l.changes = 0, l.onRender(e)), l.changes) {
          if (l.$recursionLimit-- < 0)
            return;
          l.schedule();
        } else
          l.$recursionLimit = 2;
      };
    };
    (function() {
      this.schedule = function(f) {
        this.changes = this.changes | f, this.changes && !this.pending && (S.nextFrame(this._flush), this.pending = !0);
      }, this.clear = function(f) {
        var a = this.changes;
        return this.changes = 0, a;
      };
    }).call(k.prototype), $.RenderLoop = k;
  }), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/dom"), f = w("../lib/lang"), a = w("../lib/event"), l = w("../lib/useragent"), t = w("../lib/event_emitter").EventEmitter, e = 256, n = typeof ResizeObserver == "function", r = 200, i = $.FontMetrics = function(s) {
      this.el = k.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = k.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = k.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), s.appendChild(this.el), this.$measureNode.textContent = f.stringRepeat("X", e), this.$characterSize = { width: 0, height: 0 }, n ? this.$addObserver() : this.checkForSizeChanges();
    };
    (function() {
      S.implement(this, t), this.$characterSize = { width: 0, height: 0 }, this.$setMeasureNodeStyles = function(s, c) {
        s.width = s.height = "auto", s.left = s.top = "0px", s.visibility = "hidden", s.position = "absolute", s.whiteSpace = "pre", l.isIE < 8 ? s["font-family"] = "inherit" : s.font = "inherit", s.overflow = c ? "hidden" : "visible";
      }, this.checkForSizeChanges = function(s) {
        if (s === void 0 && (s = this.$measureSizes()), s && (this.$characterSize.width !== s.width || this.$characterSize.height !== s.height)) {
          this.$measureNode.style.fontWeight = "bold";
          var c = this.$measureSizes();
          this.$measureNode.style.fontWeight = "", this.$characterSize = s, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = c && c.width === s.width && c.height === s.height, this._emit("changeCharacterSize", { data: s });
        }
      }, this.$addObserver = function() {
        var s = this;
        this.$observer = new window.ResizeObserver(function(c) {
          s.checkForSizeChanges();
        }), this.$observer.observe(this.$measureNode);
      }, this.$pollSizeChanges = function() {
        if (this.$pollSizeChangesTimer || this.$observer)
          return this.$pollSizeChangesTimer;
        var s = this;
        return this.$pollSizeChangesTimer = a.onIdle(function c() {
          s.checkForSizeChanges(), a.onIdle(c, 500);
        }, 500);
      }, this.setPolling = function(s) {
        s ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
      }, this.$measureSizes = function(s) {
        var c = {
          height: (s || this.$measureNode).clientHeight,
          width: (s || this.$measureNode).clientWidth / e
        };
        return c.width === 0 || c.height === 0 ? null : c;
      }, this.$measureCharWidth = function(s) {
        this.$main.textContent = f.stringRepeat(s, e);
        var c = this.$main.getBoundingClientRect();
        return c.width / e;
      }, this.getCharacterWidth = function(s) {
        var c = this.charSizes[s];
        return c === void 0 && (c = this.charSizes[s] = this.$measureCharWidth(s) / this.$characterSize.width), c;
      }, this.destroy = function() {
        clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
      }, this.$getZoom = function s(c) {
        return !c || !c.parentElement ? 1 : (window.getComputedStyle(c).zoom || 1) * s(c.parentElement);
      }, this.$initTransformMeasureNodes = function() {
        var s = function(c, g) {
          return ["div", {
            style: "position: absolute;top:" + c + "px;left:" + g + "px;"
          }];
        };
        this.els = k.buildDom([s(0, 0), s(r, 0), s(0, r), s(r, r)], this.el);
      }, this.transformCoordinates = function(s, c) {
        if (s) {
          var g = this.$getZoom(this.el);
          s = o(1 / g, s);
        }
        function m(O, B, H) {
          var z = O[1] * B[0] - O[0] * B[1];
          return [
            (-B[1] * H[0] + B[0] * H[1]) / z,
            (+O[1] * H[0] - O[0] * H[1]) / z
          ];
        }
        function y(O, B) {
          return [O[0] - B[0], O[1] - B[1]];
        }
        function x(O, B) {
          return [O[0] + B[0], O[1] + B[1]];
        }
        function o(O, B) {
          return [O * B[0], O * B[1]];
        }
        this.els || this.$initTransformMeasureNodes();
        function d(O) {
          var B = O.getBoundingClientRect();
          return [B.left, B.top];
        }
        var b = d(this.els[0]), u = d(this.els[1]), p = d(this.els[2]), h = d(this.els[3]), v = m(y(h, u), y(h, p), y(x(u, p), x(h, b))), C = o(1 + v[0], y(u, b)), _ = o(1 + v[1], y(p, b));
        if (c) {
          var A = c, R = v[0] * A[0] / r + v[1] * A[1] / r + 1, T = x(o(A[0], C), o(A[1], _));
          return x(o(1 / R / r, T), b);
        }
        var E = y(s, b), M = m(y(C, o(v[0], E)), y(_, o(v[1], E)), E);
        return o(r, M);
      };
    }).call(i.prototype);
  }), ace.define("ace/css/editor.css", ["require", "exports", "module"], function(w, $, L) {
    L.exports = `/*
styles = []
for (var i = 1; i < 16; i++) {
    styles.push(".ace_br" + i + "{" + (
        ["top-left", "top-right", "bottom-right", "bottom-left"]
    ).map(function(x, j) {
        return i & (1<<j) ? "border-" + x + "-radius: 3px;" : "" 
    }).filter(Boolean).join(" ") + "}")
}
styles.join("\\n")
*/
.ace_br1 {border-top-left-radius    : 3px;}
.ace_br2 {border-top-right-radius   : 3px;}
.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}
.ace_br4 {border-bottom-right-radius: 3px;}
.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}
.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}
.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}
.ace_br8 {border-bottom-left-radius : 3px;}
.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}
.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}
.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}
.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}


.ace_editor {
    position: relative;
    overflow: hidden;
    padding: 0;
    font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
    direction: ltr;
    text-align: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.ace_scroller {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    background-color: inherit;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: text;
}

.ace_content {
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
    contain: style size layout;
    font-variant-ligatures: no-common-ligatures;
}

.ace_dragging .ace_scroller:before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(250, 250, 250, 0.01);
    z-index: 1000;
}
.ace_dragging.ace_dark .ace_scroller:before{
    background: rgba(0, 0, 0, 0.01);
}

.ace_gutter {
    position: absolute;
    overflow : hidden;
    width: auto;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: default;
    z-index: 4;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    contain: style size layout;
}

.ace_gutter-active-line {
    position: absolute;
    left: 0;
    right: 0;
}

.ace_scroller.ace_scroll-left {
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
}

.ace_gutter-cell {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 19px;
    padding-right: 6px;
    background-repeat: no-repeat;
}

.ace_gutter-cell.ace_error {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_warning {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
    background-position: 2px center;
}

.ace_gutter-cell.ace_info {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
    background-position: 2px center;
}
.ace_dark .ace_gutter-cell.ace_info {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
}

.ace_scrollbar {
    contain: strict;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 6;
}

.ace_scrollbar-inner {
    position: absolute;
    cursor: text;
    left: 0;
    top: 0;
}

.ace_scrollbar-v{
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0;
}

.ace_scrollbar-h {
    overflow-x: scroll;
    overflow-y: hidden;
    left: 0;
}

.ace_print-margin {
    position: absolute;
    height: 100%;
}

.ace_text-input {
    position: absolute;
    z-index: 0;
    width: 0.5em;
    height: 1em;
    opacity: 0;
    background: transparent;
    -moz-appearance: none;
    appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    font: inherit;
    padding: 0 1px;
    margin: 0 -1px;
    contain: strict;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    user-select: text;
    /*with \`pre-line\` chrome inserts &nbsp; instead of space*/
    white-space: pre!important;
}
.ace_text-input.ace_composition {
    background: transparent;
    color: inherit;
    z-index: 1000;
    opacity: 1;
}
.ace_composition_placeholder { color: transparent }
.ace_composition_marker { 
    border-bottom: 1px solid;
    position: absolute;
    border-radius: 0;
    margin-top: 1px;
}

[ace_nocontext=true] {
    transform: none!important;
    filter: none!important;
    clip-path: none!important;
    mask : none!important;
    contain: none!important;
    perspective: none!important;
    mix-blend-mode: initial!important;
    z-index: auto;
}

.ace_layer {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/
    word-wrap: normal;
    white-space: pre;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* setting pointer-events: auto; on node under the mouse, which changes
        during scroll, will break mouse wheel scrolling in Safari */
    pointer-events: none;
}

.ace_gutter-layer {
    position: relative;
    width: auto;
    text-align: right;
    pointer-events: auto;
    height: 1000000px;
    contain: style size layout;
}

.ace_text-layer {
    font: inherit !important;
    position: absolute;
    height: 1000000px;
    width: 1000000px;
    contain: style size layout;
}

.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {
    contain: style size layout;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.ace_hidpi .ace_text-layer,
.ace_hidpi .ace_gutter-layer,
.ace_hidpi .ace_content,
.ace_hidpi .ace_gutter {
    contain: strict;
    will-change: transform;
}
.ace_hidpi .ace_text-layer > .ace_line, 
.ace_hidpi .ace_text-layer > .ace_line_group {
    contain: strict;
}

.ace_cjk {
    display: inline-block;
    text-align: center;
}

.ace_cursor-layer {
    z-index: 4;
}

.ace_cursor {
    z-index: 4;
    position: absolute;
    box-sizing: border-box;
    border-left: 2px solid;
    /* workaround for smooth cursor repaintng whole screen in chrome */
    transform: translatez(0);
}

.ace_multiselect .ace_cursor {
    border-left-width: 1px;
}

.ace_slim-cursors .ace_cursor {
    border-left-width: 1px;
}

.ace_overwrite-cursors .ace_cursor {
    border-left-width: 0;
    border-bottom: 1px solid;
}

.ace_hidden-cursors .ace_cursor {
    opacity: 0.2;
}

.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {
    opacity: 0;
}

.ace_smooth-blinking .ace_cursor {
    transition: opacity 0.18s;
}

.ace_animate-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: step-end;
    animation-name: blink-ace-animate;
    animation-iteration-count: infinite;
}

.ace_animate-blinking.ace_smooth-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-name: blink-ace-animate-smooth;
}
    
@keyframes blink-ace-animate {
    from, to { opacity: 1; }
    60% { opacity: 0; }
}

@keyframes blink-ace-animate-smooth {
    from, to { opacity: 1; }
    45% { opacity: 1; }
    60% { opacity: 0; }
    85% { opacity: 0; }
}

.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {
    position: absolute;
    z-index: 3;
}

.ace_marker-layer .ace_selection {
    position: absolute;
    z-index: 5;
}

.ace_marker-layer .ace_bracket {
    position: absolute;
    z-index: 6;
}

.ace_marker-layer .ace_error_bracket {
    position: absolute;
    border-bottom: 1px solid #DE5555;
    border-radius: 0;
}

.ace_marker-layer .ace_active-line {
    position: absolute;
    z-index: 2;
}

.ace_marker-layer .ace_selected-word {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
}

.ace_line .ace_fold {
    box-sizing: border-box;

    display: inline-block;
    height: 11px;
    margin-top: -2px;
    vertical-align: middle;

    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
    color: transparent;

    border: 1px solid black;
    border-radius: 2px;

    cursor: pointer;
    pointer-events: auto;
}

.ace_dark .ace_fold {
}

.ace_fold:hover{
    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
}

.ace_tooltip {
    background-color: #FFF;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
    border: 1px solid gray;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    color: black;
    max-width: 100%;
    padding: 3px 4px;
    position: fixed;
    z-index: 999999;
    box-sizing: border-box;
    cursor: default;
    white-space: pre;
    word-wrap: break-word;
    line-height: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    pointer-events: none;
}

.ace_folding-enabled > .ace_gutter-cell {
    padding-right: 13px;
}

.ace_fold-widget {
    box-sizing: border-box;

    margin: 0 -12px 0 1px;
    display: none;
    width: 11px;
    vertical-align: top;

    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 3px;
    
    border: 1px solid transparent;
    cursor: pointer;
}

.ace_folding-enabled .ace_fold-widget {
    display: inline-block;   
}

.ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
}

.ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
}

.ace_fold-widget:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}

.ace_fold-widget:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}
/**
 * Dark version for fold widgets
 */
.ace_dark .ace_fold-widget {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}
.ace_dark .ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
}
.ace_dark .ace_fold-widget:active {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}

.ace_inline_button {
    border: 1px solid lightgray;
    display: inline-block;
    margin: -1px 8px;
    padding: 0 5px;
    pointer-events: auto;
    cursor: pointer;
}
.ace_inline_button:hover {
    border-color: gray;
    background: rgba(200,200,200,0.2);
    display: inline-block;
    pointer-events: auto;
}

.ace_fold-widget.ace_invalid {
    background-color: #FFB4B4;
    border-color: #DE5555;
}

.ace_fade-fold-widgets .ace_fold-widget {
    transition: opacity 0.4s ease 0.05s;
    opacity: 0;
}

.ace_fade-fold-widgets:hover .ace_fold-widget {
    transition: opacity 0.05s ease 0.05s;
    opacity:1;
}

.ace_underline {
    text-decoration: underline;
}

.ace_bold {
    font-weight: bold;
}

.ace_nobold .ace_bold {
    font-weight: normal;
}

.ace_italic {
    font-style: italic;
}


.ace_error-marker {
    background-color: rgba(255, 0, 0,0.2);
    position: absolute;
    z-index: 9;
}

.ace_highlight-marker {
    background-color: rgba(255, 255, 0,0.2);
    position: absolute;
    z-index: 8;
}

.ace_mobile-menu {
    position: absolute;
    line-height: 1.5;
    border-radius: 4px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background: white;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #dcdcdc;
    color: black;
}
.ace_dark > .ace_mobile-menu {
    background: #333;
    color: #ccc;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #444;

}
.ace_mobile-button {
    padding: 2px;
    cursor: pointer;
    overflow: hidden;
}
.ace_mobile-button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_mobile-button:active {
    background-color: #ddd;
}

.ace_placeholder {
    font-family: arial;
    transform: scale(0.9);
    transform-origin: left;
    white-space: pre;
    opacity: 0.7;
    margin: 0 10px;
}`;
  }), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/css/editor.css", "ace/lib/useragent"], function(w, $, L) {
    var S = w("./lib/oop"), k = w("./lib/dom"), f = w("./config"), a = w("./layer/gutter").Gutter, l = w("./layer/marker").Marker, t = w("./layer/text").Text, e = w("./layer/cursor").Cursor, n = w("./scrollbar").HScrollBar, r = w("./scrollbar").VScrollBar, i = w("./renderloop").RenderLoop, s = w("./layer/font_metrics").FontMetrics, c = w("./lib/event_emitter").EventEmitter, g = w("./css/editor.css"), m = w("./lib/useragent"), y = m.isIE;
    k.importCssString(g, "ace_editor.css", !1);
    var x = function(o, d) {
      var b = this;
      this.container = o || k.createElement("div"), k.addCssClass(this.container, "ace_editor"), k.HI_DPI && k.addCssClass(this.container, "ace_hidpi"), this.setTheme(d), f.get("useStrictCSP") == null && f.set("useStrictCSP", !1), this.$gutter = k.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = k.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = k.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new a(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new l(this.content);
      var u = this.$textLayer = new t(this.content);
      this.canvas = u.element, this.$markerFront = new l(this.content), this.$cursorLayer = new e(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new r(this.container, this), this.scrollBarH = new n(this.container, this), this.scrollBarV.on("scroll", function(p) {
        b.$scrollAnimation || b.session.setScrollTop(p.data - b.scrollMargin.top);
      }), this.scrollBarH.on("scroll", function(p) {
        b.$scrollAnimation || b.session.setScrollLeft(p.data - b.scrollMargin.left);
      }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
        row: 0,
        column: 0
      }, this.$fontMetrics = new s(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(p) {
        b.updateCharacterSize(), b.onResize(!0, b.gutterWidth, b.$size.width, b.$size.height), b._signal("changeCharacterSize", p);
      }), this.$size = {
        width: 0,
        height: 0,
        scrollerHeight: 0,
        scrollerWidth: 0,
        $dirty: !0
      }, this.layerConfig = {
        width: 1,
        padding: 0,
        firstRow: 0,
        firstRowScreen: 0,
        lastRow: 0,
        lineHeight: 0,
        characterWidth: 0,
        minHeight: 1,
        maxHeight: 1,
        offset: 0,
        height: 1,
        gutterOffset: 1
      }, this.scrollMargin = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        v: 0,
        h: 0
      }, this.margin = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        v: 0,
        h: 0
      }, this.$keepTextAreaAtCursor = !m.isIOS, this.$loop = new i(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), f.resetOptions(this), f._signal("renderer", this);
    };
    (function() {
      this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, S.implement(this, c), this.updateCharacterSize = function() {
        this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), k.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
      }, this.setSession = function(o) {
        this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = o, o && this.scrollMargin.top && o.getScrollTop() <= 0 && o.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(o), this.$markerBack.setSession(o), this.$markerFront.setSession(o), this.$gutterLayer.setSession(o), this.$textLayer.setSession(o), o && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
      }, this.updateLines = function(o, d, b) {
        if (d === void 0 && (d = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > o && (this.$changedLines.firstRow = o), this.$changedLines.lastRow < d && (this.$changedLines.lastRow = d)) : this.$changedLines = {
          firstRow: o,
          lastRow: d
        }, this.$changedLines.lastRow < this.layerConfig.firstRow)
          if (b)
            this.$changedLines.lastRow = this.layerConfig.lastRow;
          else
            return;
        this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES);
      }, this.onChangeNewLineMode = function() {
        this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
      }, this.onChangeTabSize = function() {
        this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
      }, this.updateText = function() {
        this.$loop.schedule(this.CHANGE_TEXT);
      }, this.updateFull = function(o) {
        o ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
      }, this.updateFontSize = function() {
        this.$textLayer.checkForSizeChanges();
      }, this.$changes = 0, this.$updateSizeAsync = function() {
        this.$loop.pending ? this.$size.$dirty = !0 : this.onResize();
      }, this.onResize = function(o, d, b, u) {
        if (!(this.resizing > 2)) {
          this.resizing > 0 ? this.resizing++ : this.resizing = o ? 1 : 0;
          var p = this.container;
          u || (u = p.clientHeight || p.scrollHeight), b || (b = p.clientWidth || p.scrollWidth);
          var h = this.$updateCachedSize(o, d, b, u);
          if (!this.$size.scrollerHeight || !b && !u)
            return this.resizing = 0;
          o && (this.$gutterLayer.$padding = null), o ? this.$renderChanges(h | this.$changes, !0) : this.$loop.schedule(h | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null;
        }
      }, this.$updateCachedSize = function(o, d, b, u) {
        u -= this.$extraHeight || 0;
        var p = 0, h = this.$size, v = {
          width: h.width,
          height: h.height,
          scrollerHeight: h.scrollerHeight,
          scrollerWidth: h.scrollerWidth
        };
        if (u && (o || h.height != u) && (h.height = u, p |= this.CHANGE_SIZE, h.scrollerHeight = h.height, this.$horizScroll && (h.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", p = p | this.CHANGE_SCROLL), b && (o || h.width != b)) {
          p |= this.CHANGE_SIZE, h.width = b, d == null && (d = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = d, k.setStyle(this.scrollBarH.element.style, "left", d + "px"), k.setStyle(this.scroller.style, "left", d + this.margin.left + "px"), h.scrollerWidth = Math.max(0, b - d - this.scrollBarV.getWidth() - this.margin.h), k.setStyle(this.$gutter.style, "left", this.margin.left + "px");
          var C = this.scrollBarV.getWidth() + "px";
          k.setStyle(this.scrollBarH.element.style, "right", C), k.setStyle(this.scroller.style, "right", C), k.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || o) && (p |= this.CHANGE_FULL);
        }
        return h.$dirty = !b || !u, p && this._signal("resize", v), p;
      }, this.onGutterResize = function(o) {
        var d = this.$showGutter ? o : 0;
        d != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, d, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
      }, this.adjustWrapLimit = function() {
        var o = this.$size.scrollerWidth - this.$padding * 2, d = Math.floor(o / this.characterWidth);
        return this.session.adjustWrapLimit(d, this.$showPrintMargin && this.$printMarginColumn);
      }, this.setAnimatedScroll = function(o) {
        this.setOption("animatedScroll", o);
      }, this.getAnimatedScroll = function() {
        return this.$animatedScroll;
      }, this.setShowInvisibles = function(o) {
        this.setOption("showInvisibles", o), this.session.$bidiHandler.setShowInvisibles(o);
      }, this.getShowInvisibles = function() {
        return this.getOption("showInvisibles");
      }, this.getDisplayIndentGuides = function() {
        return this.getOption("displayIndentGuides");
      }, this.setDisplayIndentGuides = function(o) {
        this.setOption("displayIndentGuides", o);
      }, this.getHighlightIndentGuides = function() {
        return this.getOption("highlightIndentGuides");
      }, this.setHighlightIndentGuides = function(o) {
        this.setOption("highlightIndentGuides", o);
      }, this.setShowPrintMargin = function(o) {
        this.setOption("showPrintMargin", o);
      }, this.getShowPrintMargin = function() {
        return this.getOption("showPrintMargin");
      }, this.setPrintMarginColumn = function(o) {
        this.setOption("printMarginColumn", o);
      }, this.getPrintMarginColumn = function() {
        return this.getOption("printMarginColumn");
      }, this.getShowGutter = function() {
        return this.getOption("showGutter");
      }, this.setShowGutter = function(o) {
        return this.setOption("showGutter", o);
      }, this.getFadeFoldWidgets = function() {
        return this.getOption("fadeFoldWidgets");
      }, this.setFadeFoldWidgets = function(o) {
        this.setOption("fadeFoldWidgets", o);
      }, this.setHighlightGutterLine = function(o) {
        this.setOption("highlightGutterLine", o);
      }, this.getHighlightGutterLine = function() {
        return this.getOption("highlightGutterLine");
      }, this.$updatePrintMargin = function() {
        if (!(!this.$showPrintMargin && !this.$printMarginEl)) {
          if (!this.$printMarginEl) {
            var o = k.createElement("div");
            o.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = k.createElement("div"), this.$printMarginEl.className = "ace_print-margin", o.appendChild(this.$printMarginEl), this.content.insertBefore(o, this.content.firstChild);
          }
          var d = this.$printMarginEl.style;
          d.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", d.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
        }
      }, this.getContainerElement = function() {
        return this.container;
      }, this.getMouseEventTarget = function() {
        return this.scroller;
      }, this.getTextAreaContainer = function() {
        return this.container;
      }, this.$moveTextAreaToCursor = function() {
        if (!this.$isMousePressed) {
          var o = this.textarea.style, d = this.$composition;
          if (!this.$keepTextAreaAtCursor && !d) {
            k.translate(this.textarea, -100, 0);
            return;
          }
          var b = this.$cursorLayer.$pixelPos;
          if (!!b) {
            d && d.markerRange && (b = this.$cursorLayer.getPixelPosition(d.markerRange.start, !0));
            var u = this.layerConfig, p = b.top, h = b.left;
            p -= u.offset;
            var v = d && d.useTextareaForIME ? this.lineHeight : y ? 0 : 1;
            if (p < 0 || p > u.height - v) {
              k.translate(this.textarea, 0, 0);
              return;
            }
            var C = 1, _ = this.$size.height - v;
            if (!d)
              p += this.lineHeight;
            else if (d.useTextareaForIME) {
              var A = this.textarea.value;
              C = this.characterWidth * this.session.$getStringScreenWidth(A)[0];
            } else
              p += this.lineHeight + 2;
            h -= this.scrollLeft, h > this.$size.scrollerWidth - C && (h = this.$size.scrollerWidth - C), h += this.gutterWidth + this.margin.left, k.setStyle(o, "height", v + "px"), k.setStyle(o, "width", C + "px"), k.translate(this.textarea, Math.min(h, this.$size.scrollerWidth - C), Math.min(p, _));
          }
        }
      }, this.getFirstVisibleRow = function() {
        return this.layerConfig.firstRow;
      }, this.getFirstFullyVisibleRow = function() {
        return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
      }, this.getLastFullyVisibleRow = function() {
        var o = this.layerConfig, d = o.lastRow, b = this.session.documentToScreenRow(d, 0) * o.lineHeight;
        return b - this.session.getScrollTop() > o.height - o.lineHeight ? d - 1 : d;
      }, this.getLastVisibleRow = function() {
        return this.layerConfig.lastRow;
      }, this.$padding = null, this.setPadding = function(o) {
        this.$padding = o, this.$textLayer.setPadding(o), this.$cursorLayer.setPadding(o), this.$markerFront.setPadding(o), this.$markerBack.setPadding(o), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
      }, this.setScrollMargin = function(o, d, b, u) {
        var p = this.scrollMargin;
        p.top = o | 0, p.bottom = d | 0, p.right = u | 0, p.left = b | 0, p.v = p.top + p.bottom, p.h = p.left + p.right, p.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-p.top), this.updateFull();
      }, this.setMargin = function(o, d, b, u) {
        var p = this.margin;
        p.top = o | 0, p.bottom = d | 0, p.right = u | 0, p.left = b | 0, p.v = p.top + p.bottom, p.h = p.left + p.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
      }, this.getHScrollBarAlwaysVisible = function() {
        return this.$hScrollBarAlwaysVisible;
      }, this.setHScrollBarAlwaysVisible = function(o) {
        this.setOption("hScrollBarAlwaysVisible", o);
      }, this.getVScrollBarAlwaysVisible = function() {
        return this.$vScrollBarAlwaysVisible;
      }, this.setVScrollBarAlwaysVisible = function(o) {
        this.setOption("vScrollBarAlwaysVisible", o);
      }, this.$updateScrollBarV = function() {
        var o = this.layerConfig.maxHeight, d = this.$size.scrollerHeight;
        !this.$maxLines && this.$scrollPastEnd && (o -= (d - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > o - d && (o = this.scrollTop + d, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(o + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
      }, this.$updateScrollBarH = function() {
        this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
      }, this.$frozen = !1, this.freeze = function() {
        this.$frozen = !0;
      }, this.unfreeze = function() {
        this.$frozen = !1;
      }, this.$renderChanges = function(o, d) {
        if (this.$changes && (o |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !o && !d) {
          this.$changes |= o;
          return;
        }
        if (this.$size.$dirty)
          return this.$changes |= o, this.onResize(!0);
        this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", o), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
        var b = this.layerConfig;
        if (o & this.CHANGE_FULL || o & this.CHANGE_SIZE || o & this.CHANGE_TEXT || o & this.CHANGE_LINES || o & this.CHANGE_SCROLL || o & this.CHANGE_H_SCROLL) {
          if (o |= this.$computeLayerConfig() | this.$loop.clear(), b.firstRow != this.layerConfig.firstRow && b.firstRowScreen == this.layerConfig.firstRowScreen) {
            var u = this.scrollTop + (b.firstRow - this.layerConfig.firstRow) * this.lineHeight;
            u > 0 && (this.scrollTop = u, o = o | this.CHANGE_SCROLL, o |= this.$computeLayerConfig() | this.$loop.clear());
          }
          b = this.layerConfig, this.$updateScrollBarV(), o & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), k.translate(this.content, -this.scrollLeft, -b.offset);
          var p = b.width + 2 * this.$padding + "px", h = b.minHeight + "px";
          k.setStyle(this.content.style, "width", p), k.setStyle(this.content.style, "height", h);
        }
        if (o & this.CHANGE_H_SCROLL && (k.translate(this.content, -this.scrollLeft, -b.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), o & this.CHANGE_FULL) {
          this.$changedLines = null, this.$textLayer.update(b), this.$showGutter && this.$gutterLayer.update(b), this.$markerBack.update(b), this.$markerFront.update(b), this.$cursorLayer.update(b), this.$moveTextAreaToCursor(), this._signal("afterRender", o);
          return;
        }
        if (o & this.CHANGE_SCROLL) {
          this.$changedLines = null, o & this.CHANGE_TEXT || o & this.CHANGE_LINES ? this.$textLayer.update(b) : this.$textLayer.scrollLines(b), this.$showGutter && (o & this.CHANGE_GUTTER || o & this.CHANGE_LINES ? this.$gutterLayer.update(b) : this.$gutterLayer.scrollLines(b)), this.$markerBack.update(b), this.$markerFront.update(b), this.$cursorLayer.update(b), this.$moveTextAreaToCursor(), this._signal("afterRender", o);
          return;
        }
        o & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(b), this.$showGutter && this.$gutterLayer.update(b)) : o & this.CHANGE_LINES ? (this.$updateLines() || o & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(b) : o & this.CHANGE_TEXT || o & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update(b) : o & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(b), o & this.CHANGE_CURSOR && (this.$cursorLayer.update(b), this.$moveTextAreaToCursor()), o & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(b), o & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(b), this._signal("afterRender", o);
      }, this.$autosize = function() {
        var o = this.session.getScreenLength() * this.lineHeight, d = this.$maxLines * this.lineHeight, b = Math.min(d, Math.max((this.$minLines || 1) * this.lineHeight, o)) + this.scrollMargin.v + (this.$extraHeight || 0);
        this.$horizScroll && (b += this.scrollBarH.getHeight()), this.$maxPixelHeight && b > this.$maxPixelHeight && (b = this.$maxPixelHeight);
        var u = b <= 2 * this.lineHeight, p = !u && o > d;
        if (b != this.desiredHeight || this.$size.height != this.desiredHeight || p != this.$vScroll) {
          p != this.$vScroll && (this.$vScroll = p, this.scrollBarV.setVisible(p));
          var h = this.container.clientWidth;
          this.container.style.height = b + "px", this.$updateCachedSize(!0, this.$gutterWidth, h, b), this.desiredHeight = b, this._signal("autosize");
        }
      }, this.$computeLayerConfig = function() {
        var o = this.session, d = this.$size, b = d.height <= 2 * this.lineHeight, u = this.session.getScreenLength(), p = u * this.lineHeight, h = this.$getLongestLine(), v = !b && (this.$hScrollBarAlwaysVisible || d.scrollerWidth - h - 2 * this.$padding < 0), C = this.$horizScroll !== v;
        C && (this.$horizScroll = v, this.scrollBarH.setVisible(v));
        var _ = this.$vScroll;
        this.$maxLines && this.lineHeight > 1 && this.$autosize();
        var A = d.scrollerHeight + this.lineHeight, R = !this.$maxLines && this.$scrollPastEnd ? (d.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
        p += R;
        var T = this.scrollMargin;
        this.session.setScrollTop(Math.max(-T.top, Math.min(this.scrollTop, p - d.scrollerHeight + T.bottom))), this.session.setScrollLeft(Math.max(-T.left, Math.min(this.scrollLeft, h + 2 * this.$padding - d.scrollerWidth + T.right)));
        var E = !b && (this.$vScrollBarAlwaysVisible || d.scrollerHeight - p + R < 0 || this.scrollTop > T.top), M = _ !== E;
        M && (this.$vScroll = E, this.scrollBarV.setVisible(E));
        var O = this.scrollTop % this.lineHeight, B = Math.ceil(A / this.lineHeight) - 1, H = Math.max(0, Math.round((this.scrollTop - O) / this.lineHeight)), z = H + B, I, D, P = this.lineHeight;
        H = o.screenToDocumentRow(H, 0);
        var U = o.getFoldLine(H);
        U && (H = U.start.row), I = o.documentToScreenRow(H, 0), D = o.getRowLength(H) * P, z = Math.min(o.screenToDocumentRow(z, 0), o.getLength() - 1), A = d.scrollerHeight + o.getRowLength(z) * P + D, O = this.scrollTop - I * P;
        var Z = 0;
        return (this.layerConfig.width != h || C) && (Z = this.CHANGE_H_SCROLL), (C || M) && (Z |= this.$updateCachedSize(!0, this.gutterWidth, d.width, d.height), this._signal("scrollbarVisibilityChanged"), M && (h = this.$getLongestLine())), this.layerConfig = {
          width: h,
          padding: this.$padding,
          firstRow: H,
          firstRowScreen: I,
          lastRow: z,
          lineHeight: P,
          characterWidth: this.characterWidth,
          minHeight: A,
          maxHeight: p,
          offset: O,
          gutterOffset: P ? Math.max(0, Math.ceil((O + d.height - d.scrollerHeight) / P)) : 0,
          height: this.$size.scrollerHeight
        }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(h - this.$padding), Z;
      }, this.$updateLines = function() {
        if (!!this.$changedLines) {
          var o = this.$changedLines.firstRow, d = this.$changedLines.lastRow;
          this.$changedLines = null;
          var b = this.layerConfig;
          if (!(o > b.lastRow + 1) && !(d < b.firstRow)) {
            if (d === 1 / 0) {
              this.$showGutter && this.$gutterLayer.update(b), this.$textLayer.update(b);
              return;
            }
            return this.$textLayer.updateLines(b, o, d), !0;
          }
        }
      }, this.$getLongestLine = function() {
        var o = this.session.getScreenWidth();
        return this.showInvisibles && !this.session.$useWrapMode && (o += 1), this.$textLayer && o > this.$textLayer.MAX_LINE_LENGTH && (o = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(o * this.characterWidth));
      }, this.updateFrontMarkers = function() {
        this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
      }, this.updateBackMarkers = function() {
        this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
      }, this.addGutterDecoration = function(o, d) {
        this.$gutterLayer.addGutterDecoration(o, d);
      }, this.removeGutterDecoration = function(o, d) {
        this.$gutterLayer.removeGutterDecoration(o, d);
      }, this.updateBreakpoints = function(o) {
        this.$loop.schedule(this.CHANGE_GUTTER);
      }, this.setAnnotations = function(o) {
        this.$gutterLayer.setAnnotations(o), this.$loop.schedule(this.CHANGE_GUTTER);
      }, this.updateCursor = function() {
        this.$loop.schedule(this.CHANGE_CURSOR);
      }, this.hideCursor = function() {
        this.$cursorLayer.hideCursor();
      }, this.showCursor = function() {
        this.$cursorLayer.showCursor();
      }, this.scrollSelectionIntoView = function(o, d, b) {
        this.scrollCursorIntoView(o, b), this.scrollCursorIntoView(d, b);
      }, this.scrollCursorIntoView = function(o, d, b) {
        if (this.$size.scrollerHeight !== 0) {
          var u = this.$cursorLayer.getPixelPosition(o), p = u.left, h = u.top, v = b && b.top || 0, C = b && b.bottom || 0, _ = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
          _ + v > h ? (d && _ + v > h + this.lineHeight && (h -= d * this.$size.scrollerHeight), h === 0 && (h = -this.scrollMargin.top), this.session.setScrollTop(h)) : _ + this.$size.scrollerHeight - C < h + this.lineHeight && (d && _ + this.$size.scrollerHeight - C < h - this.lineHeight && (h += d * this.$size.scrollerHeight), this.session.setScrollTop(h + this.lineHeight + C - this.$size.scrollerHeight));
          var A = this.scrollLeft;
          A > p ? (p < this.$padding + 2 * this.layerConfig.characterWidth && (p = -this.scrollMargin.left), this.session.setScrollLeft(p)) : A + this.$size.scrollerWidth < p + this.characterWidth ? this.session.setScrollLeft(Math.round(p + this.characterWidth - this.$size.scrollerWidth)) : A <= this.$padding && p - A < this.characterWidth && this.session.setScrollLeft(0);
        }
      }, this.getScrollTop = function() {
        return this.session.getScrollTop();
      }, this.getScrollLeft = function() {
        return this.session.getScrollLeft();
      }, this.getScrollTopRow = function() {
        return this.scrollTop / this.lineHeight;
      }, this.getScrollBottomRow = function() {
        return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
      }, this.scrollToRow = function(o) {
        this.session.setScrollTop(o * this.lineHeight);
      }, this.alignCursor = function(o, d) {
        typeof o == "number" && (o = { row: o, column: 0 });
        var b = this.$cursorLayer.getPixelPosition(o), u = this.$size.scrollerHeight - this.lineHeight, p = b.top - u * (d || 0);
        return this.session.setScrollTop(p), p;
      }, this.STEPS = 8, this.$calcSteps = function(o, d) {
        var b = 0, u = this.STEPS, p = [], h = function(v, C, _) {
          return _ * (Math.pow(v - 1, 3) + 1) + C;
        };
        for (b = 0; b < u; ++b)
          p.push(h(b / this.STEPS, o, d - o));
        return p;
      }, this.scrollToLine = function(o, d, b, u) {
        var p = this.$cursorLayer.getPixelPosition({ row: o, column: 0 }), h = p.top;
        d && (h -= this.$size.scrollerHeight / 2);
        var v = this.scrollTop;
        this.session.setScrollTop(h), b !== !1 && this.animateScrolling(v, u);
      }, this.animateScrolling = function(o, d) {
        var b = this.scrollTop;
        if (!!this.$animatedScroll) {
          var u = this;
          if (o != b) {
            if (this.$scrollAnimation) {
              var p = this.$scrollAnimation.steps;
              if (p.length && (o = p[0], o == b))
                return;
            }
            var h = u.$calcSteps(o, b);
            this.$scrollAnimation = { from: o, to: b, steps: h }, clearInterval(this.$timer), u.session.setScrollTop(h.shift()), u.session.$scrollTop = b, this.$timer = setInterval(function() {
              if (!u.session)
                return clearInterval(u.$timer);
              h.length ? (u.session.setScrollTop(h.shift()), u.session.$scrollTop = b) : b != null ? (u.session.$scrollTop = -1, u.session.setScrollTop(b), b = null) : (u.$timer = clearInterval(u.$timer), u.$scrollAnimation = null, d && d());
            }, 10);
          }
        }
      }, this.scrollToY = function(o) {
        this.scrollTop !== o && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = o);
      }, this.scrollToX = function(o) {
        this.scrollLeft !== o && (this.scrollLeft = o), this.$loop.schedule(this.CHANGE_H_SCROLL);
      }, this.scrollTo = function(o, d) {
        this.session.setScrollTop(d), this.session.setScrollLeft(o);
      }, this.scrollBy = function(o, d) {
        d && this.session.setScrollTop(this.session.getScrollTop() + d), o && this.session.setScrollLeft(this.session.getScrollLeft() + o);
      }, this.isScrollableBy = function(o, d) {
        if (d < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || d > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || o < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || o > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
          return !0;
      }, this.pixelToScreenCoordinates = function(o, d) {
        var b;
        if (this.$hasCssTransforms) {
          b = { top: 0, left: 0 };
          var u = this.$fontMetrics.transformCoordinates([o, d]);
          o = u[1] - this.gutterWidth - this.margin.left, d = u[0];
        } else
          b = this.scroller.getBoundingClientRect();
        var p = o + this.scrollLeft - b.left - this.$padding, h = p / this.characterWidth, v = Math.floor((d + this.scrollTop - b.top) / this.lineHeight), C = this.$blockCursor ? Math.floor(h) : Math.round(h);
        return { row: v, column: C, side: h - C > 0 ? 1 : -1, offsetX: p };
      }, this.screenToTextCoordinates = function(o, d) {
        var b;
        if (this.$hasCssTransforms) {
          b = { top: 0, left: 0 };
          var u = this.$fontMetrics.transformCoordinates([o, d]);
          o = u[1] - this.gutterWidth - this.margin.left, d = u[0];
        } else
          b = this.scroller.getBoundingClientRect();
        var p = o + this.scrollLeft - b.left - this.$padding, h = p / this.characterWidth, v = this.$blockCursor ? Math.floor(h) : Math.round(h), C = Math.floor((d + this.scrollTop - b.top) / this.lineHeight);
        return this.session.screenToDocumentPosition(C, Math.max(v, 0), p);
      }, this.textToScreenCoordinates = function(o, d) {
        var b = this.scroller.getBoundingClientRect(), u = this.session.documentToScreenPosition(o, d), p = this.$padding + (this.session.$bidiHandler.isBidiRow(u.row, o) ? this.session.$bidiHandler.getPosLeft(u.column) : Math.round(u.column * this.characterWidth)), h = u.row * this.lineHeight;
        return {
          pageX: b.left + p - this.scrollLeft,
          pageY: b.top + h - this.scrollTop
        };
      }, this.visualizeFocus = function() {
        k.addCssClass(this.container, "ace_focus");
      }, this.visualizeBlur = function() {
        k.removeCssClass(this.container, "ace_focus");
      }, this.showComposition = function(o) {
        this.$composition = o, o.cssText || (o.cssText = this.textarea.style.cssText), o.useTextareaForIME == null && (o.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (k.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : o.markerId = this.session.addMarker(o.markerRange, "ace_composition_marker", "text");
      }, this.setCompositionText = function(o) {
        var d = this.session.selection.cursor;
        this.addToken(o, "composition_placeholder", d.row, d.column), this.$moveTextAreaToCursor();
      }, this.hideComposition = function() {
        if (!!this.$composition) {
          this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), k.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
          var o = this.session.selection.cursor;
          this.removeExtraToken(o.row, o.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
        }
      }, this.addToken = function(o, d, b, u) {
        var p = this.session;
        p.bgTokenizer.lines[b] = null;
        var h = { type: d, value: o }, v = p.getTokens(b);
        if (u == null)
          v.push(h);
        else
          for (var C = 0, _ = 0; _ < v.length; _++) {
            var A = v[_];
            if (C += A.value.length, u <= C) {
              var R = A.value.length - (C - u), T = A.value.slice(0, R), E = A.value.slice(R);
              v.splice(_, 1, { type: A.type, value: T }, h, { type: A.type, value: E });
              break;
            }
          }
        this.updateLines(b, b);
      }, this.removeExtraToken = function(o, d) {
        this.updateLines(o, o);
      }, this.setTheme = function(o, d) {
        var b = this;
        if (this.$themeId = o, b._dispatchEvent("themeChange", { theme: o }), !o || typeof o == "string") {
          var u = o || this.$options.theme.initialValue;
          f.loadModule(["theme", u], p);
        } else
          p(o);
        function p(h) {
          if (b.$themeId != o)
            return d && d();
          if (!h || !h.cssClass)
            throw new Error("couldn't load module " + o + " or it didn't call define");
          h.$id && (b.$themeId = h.$id), k.importCssString(h.cssText, h.cssClass, b.container), b.theme && k.removeCssClass(b.container, b.theme.cssClass);
          var v = "padding" in h ? h.padding : "padding" in (b.theme || {}) ? 4 : b.$padding;
          b.$padding && v != b.$padding && b.setPadding(v), b.$theme = h.cssClass, b.theme = h, k.addCssClass(b.container, h.cssClass), k.setCssClass(b.container, "ace_dark", h.isDark), b.$size && (b.$size.width = 0, b.$updateSizeAsync()), b._dispatchEvent("themeLoaded", { theme: h }), d && d();
        }
      }, this.getTheme = function() {
        return this.$themeId;
      }, this.setStyle = function(o, d) {
        k.setCssClass(this.container, o, d !== !1);
      }, this.unsetStyle = function(o) {
        k.removeCssClass(this.container, o);
      }, this.setCursorStyle = function(o) {
        k.setStyle(this.scroller.style, "cursor", o);
      }, this.setMouseCursor = function(o) {
        k.setStyle(this.scroller.style, "cursor", o);
      }, this.attachToShadowRoot = function() {
        k.importCssString(g, "ace_editor.css", this.container);
      }, this.destroy = function() {
        this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "";
      };
    }).call(x.prototype), f.defineOptions(x.prototype, "renderer", {
      animatedScroll: { initialValue: !1 },
      showInvisibles: {
        set: function(o) {
          this.$textLayer.setShowInvisibles(o) && this.$loop.schedule(this.CHANGE_TEXT);
        },
        initialValue: !1
      },
      showPrintMargin: {
        set: function() {
          this.$updatePrintMargin();
        },
        initialValue: !0
      },
      printMarginColumn: {
        set: function() {
          this.$updatePrintMargin();
        },
        initialValue: 80
      },
      printMargin: {
        set: function(o) {
          typeof o == "number" && (this.$printMarginColumn = o), this.$showPrintMargin = !!o, this.$updatePrintMargin();
        },
        get: function() {
          return this.$showPrintMargin && this.$printMarginColumn;
        }
      },
      showGutter: {
        set: function(o) {
          this.$gutter.style.display = o ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
        },
        initialValue: !0
      },
      fadeFoldWidgets: {
        set: function(o) {
          k.setCssClass(this.$gutter, "ace_fade-fold-widgets", o);
        },
        initialValue: !1
      },
      showFoldWidgets: {
        set: function(o) {
          this.$gutterLayer.setShowFoldWidgets(o), this.$loop.schedule(this.CHANGE_GUTTER);
        },
        initialValue: !0
      },
      displayIndentGuides: {
        set: function(o) {
          this.$textLayer.setDisplayIndentGuides(o) && this.$loop.schedule(this.CHANGE_TEXT);
        },
        initialValue: !0
      },
      highlightIndentGuides: {
        set: function(o) {
          this.$textLayer.setHighlightIndentGuides(o) == !0 ? this.$textLayer.$highlightIndentGuide() : this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells);
        },
        initialValue: !0
      },
      highlightGutterLine: {
        set: function(o) {
          this.$gutterLayer.setHighlightGutterLine(o), this.$loop.schedule(this.CHANGE_GUTTER);
        },
        initialValue: !0
      },
      hScrollBarAlwaysVisible: {
        set: function(o) {
          (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
        },
        initialValue: !1
      },
      vScrollBarAlwaysVisible: {
        set: function(o) {
          (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
        },
        initialValue: !1
      },
      fontSize: {
        set: function(o) {
          typeof o == "number" && (o = o + "px"), this.container.style.fontSize = o, this.updateFontSize();
        },
        initialValue: 12
      },
      fontFamily: {
        set: function(o) {
          this.container.style.fontFamily = o, this.updateFontSize();
        }
      },
      maxLines: {
        set: function(o) {
          this.updateFull();
        }
      },
      minLines: {
        set: function(o) {
          this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
        }
      },
      maxPixelHeight: {
        set: function(o) {
          this.updateFull();
        },
        initialValue: 0
      },
      scrollPastEnd: {
        set: function(o) {
          o = +o || 0, this.$scrollPastEnd != o && (this.$scrollPastEnd = o, this.$loop.schedule(this.CHANGE_SCROLL));
        },
        initialValue: 0,
        handlesSet: !0
      },
      fixedWidthGutter: {
        set: function(o) {
          this.$gutterLayer.$fixedWidth = !!o, this.$loop.schedule(this.CHANGE_GUTTER);
        }
      },
      theme: {
        set: function(o) {
          this.setTheme(o);
        },
        get: function() {
          return this.$themeId || this.theme;
        },
        initialValue: "./theme/textmate",
        handlesSet: !0
      },
      hasCssTransforms: {},
      useTextareaForIME: {
        initialValue: !m.isMobile && !m.isIE
      }
    }), $.VirtualRenderer = x;
  }), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/net"), f = w("../lib/event_emitter").EventEmitter, a = w("../config");
    function l(r) {
      var i = "importScripts('" + k.qualifyURL(r) + "');";
      try {
        return new Blob([i], { type: "application/javascript" });
      } catch {
        var s = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, c = new s();
        return c.append(i), c.getBlob("application/javascript");
      }
    }
    function t(r) {
      if (typeof Worker > "u")
        return { postMessage: function() {
        }, terminate: function() {
        } };
      if (a.get("loadWorkerFromBlob")) {
        var i = l(r), s = window.URL || window.webkitURL, c = s.createObjectURL(i);
        return new Worker(c);
      }
      return new Worker(r);
    }
    var e = function(r) {
      r.postMessage || (r = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = r, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
    };
    (function() {
      S.implement(this, f), this.$createWorkerFromOldConfig = function(r, i, s, c, g) {
        if (w.nameToUrl && !w.toUrl && (w.toUrl = w.nameToUrl), a.get("packaged") || !w.toUrl)
          c = c || a.moduleUrl(i, "worker");
        else {
          var m = this.$normalizePath;
          c = c || m(w.toUrl("ace/worker/worker.js", null, "_"));
          var y = {};
          r.forEach(function(x) {
            y[x] = m(w.toUrl(x, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
          });
        }
        return this.$worker = t(c), g && this.send("importScripts", g), this.$worker.postMessage({
          init: !0,
          tlns: y,
          module: i,
          classname: s
        }), this.$worker;
      }, this.onMessage = function(r) {
        var i = r.data;
        switch (i.type) {
          case "event":
            this._signal(i.name, { data: i.data });
            break;
          case "call":
            var s = this.callbacks[i.id];
            s && (s(i.data), delete this.callbacks[i.id]);
            break;
          case "error":
            this.reportError(i.data);
            break;
          case "log":
            window.console && console.log && console.log.apply(console, i.data);
            break;
        }
      }, this.reportError = function(r) {
        window.console && console.error && console.error(r);
      }, this.$normalizePath = function(r) {
        return k.qualifyURL(r);
      }, this.terminate = function() {
        this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
      }, this.send = function(r, i) {
        this.$worker.postMessage({ command: r, args: i });
      }, this.call = function(r, i, s) {
        if (s) {
          var c = this.callbackId++;
          this.callbacks[c] = s, i.push(c);
        }
        this.send(r, i);
      }, this.emit = function(r, i) {
        try {
          i.data && i.data.err && (i.data.err = { message: i.data.err.message, stack: i.data.err.stack, code: i.data.err.code }), this.$worker && this.$worker.postMessage({ event: r, data: { data: i.data } });
        } catch (s) {
          console.error(s.stack);
        }
      }, this.attachToDocument = function(r) {
        this.$doc && this.terminate(), this.$doc = r, this.call("setValue", [r.getValue()]), r.on("change", this.changeListener, !0);
      }, this.changeListener = function(r) {
        this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), r.action == "insert" ? this.deltaQueue.push(r.start, r.lines) : this.deltaQueue.push(r.start, r.end);
      }, this.$sendDeltaQueue = function() {
        var r = this.deltaQueue;
        !r || (this.deltaQueue = null, r.length > 50 && r.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: r }));
      };
    }).call(e.prototype);
    var n = function(r, i, s) {
      var c = null, g = !1, m = Object.create(f), y = [], x = new e({
        messageBuffer: y,
        terminate: function() {
        },
        postMessage: function(d) {
          y.push(d), c && (g ? setTimeout(o) : o());
        }
      });
      x.setEmitSync = function(d) {
        g = d;
      };
      var o = function() {
        var d = y.shift();
        d.command ? c[d.command].apply(c, d.args) : d.event && m._signal(d.event, d.data);
      };
      return m.postMessage = function(d) {
        x.onMessage({ data: d });
      }, m.callback = function(d, b) {
        this.postMessage({ type: "call", id: b, data: d });
      }, m.emit = function(d, b) {
        this.postMessage({ type: "event", name: d, data: b });
      }, a.loadModule(["worker", i], function(d) {
        for (c = new d[s](m); y.length; )
          o();
      }), x;
    };
    $.UIWorkerClient = n, $.WorkerClient = e, $.createWorker = t;
  }), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(w, $, L) {
    var S = w("./range").Range, k = w("./lib/event_emitter").EventEmitter, f = w("./lib/oop"), a = function(l, t, e, n, r, i) {
      var s = this;
      this.length = t, this.session = l, this.doc = l.getDocument(), this.mainClass = r, this.othersClass = i, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, !0), this.$others = n, this.$onCursorChange = function() {
        setTimeout(function() {
          s.onCursorChange();
        });
      }, this.$pos = e;
      var c = l.getUndoManager().$undoStack || l.getUndoManager().$undostack || { length: -1 };
      this.$undoStackDepth = c.length, this.setup(), l.selection.on("changeCursor", this.$onCursorChange);
    };
    (function() {
      f.implement(this, k), this.setup = function() {
        var l = this, t = this.doc, e = this.session;
        this.selectionBefore = e.selection.toJSON(), e.selection.inMultiSelectMode && e.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
        var n = this.pos;
        n.$insertRight = !0, n.detach(), n.markerId = e.addMarker(new S(n.row, n.column, n.row, n.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(r) {
          var i = t.createAnchor(r.row, r.column);
          i.$insertRight = !0, i.detach(), l.others.push(i);
        }), e.setUndoSelect(!1);
      }, this.showOtherMarkers = function() {
        if (!this.othersActive) {
          var l = this.session, t = this;
          this.othersActive = !0, this.others.forEach(function(e) {
            e.markerId = l.addMarker(new S(e.row, e.column, e.row, e.column + t.length), t.othersClass, null, !1);
          });
        }
      }, this.hideOtherMarkers = function() {
        if (!!this.othersActive) {
          this.othersActive = !1;
          for (var l = 0; l < this.others.length; l++)
            this.session.removeMarker(this.others[l].markerId);
        }
      }, this.onUpdate = function(l) {
        if (this.$updating)
          return this.updateAnchors(l);
        var t = l;
        if (t.start.row === t.end.row && t.start.row === this.pos.row) {
          this.$updating = !0;
          var e = l.action === "insert" ? t.end.column - t.start.column : t.start.column - t.end.column, n = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1, r = t.start.column - this.pos.column;
          if (this.updateAnchors(l), n && (this.length += e), n && !this.session.$fromUndo) {
            if (l.action === "insert")
              for (var i = this.others.length - 1; i >= 0; i--) {
                var s = this.others[i], c = { row: s.row, column: s.column + r };
                this.doc.insertMergedLines(c, l.lines);
              }
            else if (l.action === "remove")
              for (var i = this.others.length - 1; i >= 0; i--) {
                var s = this.others[i], c = { row: s.row, column: s.column + r };
                this.doc.remove(new S(c.row, c.column, c.row, c.column - e));
              }
          }
          this.$updating = !1, this.updateMarkers();
        }
      }, this.updateAnchors = function(l) {
        this.pos.onChange(l);
        for (var t = this.others.length; t--; )
          this.others[t].onChange(l);
        this.updateMarkers();
      }, this.updateMarkers = function() {
        if (!this.$updating) {
          var l = this, t = this.session, e = function(r, i) {
            t.removeMarker(r.markerId), r.markerId = t.addMarker(new S(r.row, r.column, r.row, r.column + l.length), i, null, !1);
          };
          e(this.pos, this.mainClass);
          for (var n = this.others.length; n--; )
            e(this.others[n], this.othersClass);
        }
      }, this.onCursorChange = function(l) {
        if (!(this.$updating || !this.session)) {
          var t = this.session.selection.getCursor();
          t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", l)) : (this.hideOtherMarkers(), this._emit("cursorLeave", l));
        }
      }, this.detach = function() {
        this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
      }, this.cancel = function() {
        if (this.$undoStackDepth !== -1) {
          for (var l = this.session.getUndoManager(), t = (l.$undoStack || l.$undostack).length - this.$undoStackDepth, e = 0; e < t; e++)
            l.undo(this.session, !0);
          this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
        }
      };
    }).call(a.prototype), $.PlaceHolder = a;
  }), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(w, $, L) {
    var S = w("../lib/event"), k = w("../lib/useragent");
    function f(l, t) {
      return l.row == t.row && l.column == t.column;
    }
    function a(l) {
      var t = l.domEvent, e = t.altKey, n = t.shiftKey, r = t.ctrlKey, i = l.getAccelKey(), s = l.getButton();
      if (r && k.isMac && (s = t.button), l.editor.inMultiSelectMode && s == 2) {
        l.editor.textInput.onContextMenu(l.domEvent);
        return;
      }
      if (!r && !e && !i) {
        s === 0 && l.editor.inMultiSelectMode && l.editor.exitMultiSelectMode();
        return;
      }
      if (s === 0) {
        var c = l.editor, g = c.selection, m = c.inMultiSelectMode, y = l.getDocumentPosition(), x = g.getCursor(), o = l.inSelection() || g.isEmpty() && f(y, x), d = l.x, b = l.y, u = function(H) {
          d = H.clientX, b = H.clientY;
        }, p = c.session, h = c.renderer.pixelToScreenCoordinates(d, b), v = h, C;
        if (c.$mouseHandler.$enableJumpToDef)
          r && e || i && e ? C = n ? "block" : "add" : e && c.$blockSelectEnabled && (C = "block");
        else if (i && !e) {
          if (C = "add", !m && n)
            return;
        } else
          e && c.$blockSelectEnabled && (C = "block");
        if (C && k.isMac && t.ctrlKey && c.$mouseHandler.cancelContextMenu(), C == "add") {
          if (!m && o)
            return;
          if (!m) {
            var _ = g.toOrientedRange();
            c.addSelectionMarker(_);
          }
          var A = g.rangeList.rangeAtPoint(y);
          c.inVirtualSelectionMode = !0, n && (A = null, _ = g.ranges[0] || _, c.removeSelectionMarker(_)), c.once("mouseup", function() {
            var H = g.toOrientedRange();
            A && H.isEmpty() && f(A.cursor, H.cursor) ? g.substractPoint(H.cursor) : (n ? g.substractPoint(_.cursor) : _ && (c.removeSelectionMarker(_), g.addRange(_)), g.addRange(H)), c.inVirtualSelectionMode = !1;
          });
        } else if (C == "block") {
          l.stop(), c.inVirtualSelectionMode = !0;
          var R, T = [], E = function() {
            var H = c.renderer.pixelToScreenCoordinates(d, b), z = p.screenToDocumentPosition(H.row, H.column, H.offsetX);
            f(v, H) && f(z, g.lead) || (v = H, c.selection.moveToPosition(z), c.renderer.scrollCursorIntoView(), c.removeSelectionMarkers(T), T = g.rectangularRangeBlock(v, h), c.$mouseHandler.$clickSelection && T.length == 1 && T[0].isEmpty() && (T[0] = c.$mouseHandler.$clickSelection.clone()), T.forEach(c.addSelectionMarker, c), c.updateSelectionMarkers());
          };
          m && !i ? g.toSingleRange() : !m && i && (R = g.toOrientedRange(), c.addSelectionMarker(R)), n ? h = p.documentToScreenPosition(g.lead) : g.moveToPosition(y), v = { row: -1, column: -1 };
          var M = function(H) {
            E(), clearInterval(B), c.removeSelectionMarkers(T), T.length || (T = [g.toOrientedRange()]), R && (c.removeSelectionMarker(R), g.toSingleRange(R));
            for (var z = 0; z < T.length; z++)
              g.addRange(T[z]);
            c.inVirtualSelectionMode = !1, c.$mouseHandler.$clickSelection = null;
          }, O = E;
          S.capture(c.container, u, M);
          var B = setInterval(function() {
            O();
          }, 20);
          return l.preventDefault();
        }
      }
    }
    $.onMouseDown = a;
  }), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(w, $, L) {
    $.defaultCommands = [{
      name: "addCursorAbove",
      description: "Add cursor above",
      exec: function(k) {
        k.selectMoreLines(-1);
      },
      bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "addCursorBelow",
      description: "Add cursor below",
      exec: function(k) {
        k.selectMoreLines(1);
      },
      bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "addCursorAboveSkipCurrent",
      description: "Add cursor above (skip current)",
      exec: function(k) {
        k.selectMoreLines(-1, !0);
      },
      bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "addCursorBelowSkipCurrent",
      description: "Add cursor below (skip current)",
      exec: function(k) {
        k.selectMoreLines(1, !0);
      },
      bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "selectMoreBefore",
      description: "Select more before",
      exec: function(k) {
        k.selectMore(-1);
      },
      bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "selectMoreAfter",
      description: "Select more after",
      exec: function(k) {
        k.selectMore(1);
      },
      bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "selectNextBefore",
      description: "Select next before",
      exec: function(k) {
        k.selectMore(-1, !0);
      },
      bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "selectNextAfter",
      description: "Select next after",
      exec: function(k) {
        k.selectMore(1, !0);
      },
      bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
      scrollIntoView: "cursor",
      readOnly: !0
    }, {
      name: "toggleSplitSelectionIntoLines",
      description: "Split into lines",
      exec: function(k) {
        k.multiSelect.rangeCount > 1 ? k.multiSelect.joinSelections() : k.multiSelect.splitIntoLines();
      },
      bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
      readOnly: !0
    }, {
      name: "splitSelectionIntoLines",
      description: "Split into lines",
      exec: function(k) {
        k.multiSelect.splitIntoLines();
      },
      readOnly: !0
    }, {
      name: "alignCursors",
      description: "Align cursors",
      exec: function(k) {
        k.alignCursors();
      },
      bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
      scrollIntoView: "cursor"
    }, {
      name: "findAll",
      description: "Find all",
      exec: function(k) {
        k.findAll();
      },
      bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
      scrollIntoView: "cursor",
      readOnly: !0
    }], $.multiSelectCommands = [{
      name: "singleSelection",
      description: "Single selection",
      bindKey: "esc",
      exec: function(k) {
        k.exitMultiSelectMode();
      },
      scrollIntoView: "cursor",
      readOnly: !0,
      isAvailable: function(k) {
        return k && k.inMultiSelectMode;
      }
    }];
    var S = w("../keyboard/hash_handler").HashHandler;
    $.keyboardHandler = new S($.multiSelectCommands);
  }), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(w, $, L) {
    var S = w("./range_list").RangeList, k = w("./range").Range, f = w("./selection").Selection, a = w("./mouse/multi_select_handler").onMouseDown, l = w("./lib/event"), t = w("./lib/lang"), e = w("./commands/multi_select_commands");
    $.commands = e.defaultCommands.concat(e.multiSelectCommands);
    var n = w("./search").Search, r = new n();
    function i(x, o, d) {
      return r.$options.wrap = !0, r.$options.needle = o, r.$options.backwards = d == -1, r.find(x);
    }
    var s = w("./edit_session").EditSession;
    (function() {
      this.getSelectionMarkers = function() {
        return this.$selectionMarkers;
      };
    }).call(s.prototype), function() {
      this.ranges = null, this.rangeList = null, this.addRange = function(x, o) {
        if (!!x) {
          if (!this.inMultiSelectMode && this.rangeCount === 0) {
            var d = this.toOrientedRange();
            if (this.rangeList.add(d), this.rangeList.add(x), this.rangeList.ranges.length != 2)
              return this.rangeList.removeAll(), o || this.fromOrientedRange(x);
            this.rangeList.removeAll(), this.rangeList.add(d), this.$onAddRange(d);
          }
          x.cursor || (x.cursor = x.end);
          var b = this.rangeList.add(x);
          return this.$onAddRange(x), b.length && this.$onRemoveRange(b), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), o || this.fromOrientedRange(x);
        }
      }, this.toSingleRange = function(x) {
        x = x || this.ranges[0];
        var o = this.rangeList.removeAll();
        o.length && this.$onRemoveRange(o), x && this.fromOrientedRange(x);
      }, this.substractPoint = function(x) {
        var o = this.rangeList.substractPoint(x);
        if (o)
          return this.$onRemoveRange(o), o[0];
      }, this.mergeOverlappingRanges = function() {
        var x = this.rangeList.merge();
        x.length && this.$onRemoveRange(x);
      }, this.$onAddRange = function(x) {
        this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(x), this._signal("addRange", { range: x });
      }, this.$onRemoveRange = function(x) {
        if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
          var o = this.rangeList.ranges.pop();
          x.push(o), this.rangeCount = 0;
        }
        for (var d = x.length; d--; ) {
          var b = this.ranges.indexOf(x[d]);
          this.ranges.splice(b, 1);
        }
        this._signal("removeRange", { ranges: x }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), o = o || this.ranges[0], o && !o.isEqual(this.getRange()) && this.fromOrientedRange(o);
      }, this.$initRangeList = function() {
        this.rangeList || (this.rangeList = new S(), this.ranges = [], this.rangeCount = 0);
      }, this.getAllRanges = function() {
        return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
      }, this.splitIntoLines = function() {
        for (var x = this.ranges.length ? this.ranges : [this.getRange()], o = [], d = 0; d < x.length; d++) {
          var b = x[d], u = b.start.row, p = b.end.row;
          if (u === p)
            o.push(b.clone());
          else {
            for (o.push(new k(u, b.start.column, u, this.session.getLine(u).length)); ++u < p; )
              o.push(this.getLineRange(u, !0));
            o.push(new k(p, 0, p, b.end.column));
          }
          d == 0 && !this.isBackwards() && (o = o.reverse());
        }
        this.toSingleRange();
        for (var d = o.length; d--; )
          this.addRange(o[d]);
      }, this.joinSelections = function() {
        var x = this.rangeList.ranges, o = x[x.length - 1], d = k.fromPoints(x[0].start, o.end);
        this.toSingleRange(), this.setSelectionRange(d, o.cursor == o.start);
      }, this.toggleBlockSelection = function() {
        if (this.rangeCount > 1) {
          var x = this.rangeList.ranges, o = x[x.length - 1], d = k.fromPoints(x[0].start, o.end);
          this.toSingleRange(), this.setSelectionRange(d, o.cursor == o.start);
        } else {
          var b = this.session.documentToScreenPosition(this.cursor), u = this.session.documentToScreenPosition(this.anchor), p = this.rectangularRangeBlock(b, u);
          p.forEach(this.addRange, this);
        }
      }, this.rectangularRangeBlock = function(x, o, d) {
        var b = [], u = x.column < o.column;
        if (u)
          var p = x.column, h = o.column, v = x.offsetX, C = o.offsetX;
        else
          var p = o.column, h = x.column, v = o.offsetX, C = x.offsetX;
        var _ = x.row < o.row;
        if (_)
          var A = x.row, R = o.row;
        else
          var A = o.row, R = x.row;
        p < 0 && (p = 0), A < 0 && (A = 0), A == R && (d = !0);
        for (var T, E = A; E <= R; E++) {
          var M = k.fromPoints(this.session.screenToDocumentPosition(E, p, v), this.session.screenToDocumentPosition(E, h, C));
          if (M.isEmpty()) {
            if (T && g(M.end, T))
              break;
            T = M.end;
          }
          M.cursor = u ? M.start : M.end, b.push(M);
        }
        if (_ && b.reverse(), !d) {
          for (var O = b.length - 1; b[O].isEmpty() && O > 0; )
            O--;
          if (O > 0)
            for (var B = 0; b[B].isEmpty(); )
              B++;
          for (var H = O; H >= B; H--)
            b[H].isEmpty() && b.splice(H, 1);
        }
        return b;
      };
    }.call(f.prototype);
    var c = w("./editor").Editor;
    (function() {
      this.updateSelectionMarkers = function() {
        this.renderer.updateCursor(), this.renderer.updateBackMarkers();
      }, this.addSelectionMarker = function(x) {
        x.cursor || (x.cursor = x.end);
        var o = this.getSelectionStyle();
        return x.marker = this.session.addMarker(x, "ace_selection", o), this.session.$selectionMarkers.push(x), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, x;
      }, this.removeSelectionMarker = function(x) {
        if (!!x.marker) {
          this.session.removeMarker(x.marker);
          var o = this.session.$selectionMarkers.indexOf(x);
          o != -1 && this.session.$selectionMarkers.splice(o, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
        }
      }, this.removeSelectionMarkers = function(x) {
        for (var o = this.session.$selectionMarkers, d = x.length; d--; ) {
          var b = x[d];
          if (!!b.marker) {
            this.session.removeMarker(b.marker);
            var u = o.indexOf(b);
            u != -1 && o.splice(u, 1);
          }
        }
        this.session.selectionMarkerCount = o.length;
      }, this.$onAddRange = function(x) {
        this.addSelectionMarker(x.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
      }, this.$onRemoveRange = function(x) {
        this.removeSelectionMarkers(x.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
      }, this.$onMultiSelect = function(x) {
        this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(e.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
      }, this.$onSingleSelect = function(x) {
        this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(e.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
      }, this.$onMultiSelectExec = function(x) {
        var o = x.command, d = x.editor;
        if (!!d.multiSelect) {
          if (o.multiSelectAction)
            o.multiSelectAction == "forEach" ? b = d.forEachSelection(o, x.args) : o.multiSelectAction == "forEachLine" ? b = d.forEachSelection(o, x.args, !0) : o.multiSelectAction == "single" ? (d.exitMultiSelectMode(), b = o.exec(d, x.args || {})) : b = o.multiSelectAction(d, x.args || {});
          else {
            var b = o.exec(d, x.args || {});
            d.multiSelect.addRange(d.multiSelect.toOrientedRange()), d.multiSelect.mergeOverlappingRanges();
          }
          return b;
        }
      }, this.forEachSelection = function(x, o, d) {
        if (!this.inVirtualSelectionMode) {
          var b = d && d.keepOrder, u = d == !0 || d && d.$byLines, p = this.session, h = this.selection, v = h.rangeList, C = (b ? h : v).ranges, _;
          if (!C.length)
            return x.exec ? x.exec(this, o || {}) : x(this, o || {});
          var A = h._eventRegistry;
          h._eventRegistry = {};
          var R = new f(p);
          this.inVirtualSelectionMode = !0;
          for (var T = C.length; T--; ) {
            if (u)
              for (; T > 0 && C[T].start.row == C[T - 1].end.row; )
                T--;
            R.fromOrientedRange(C[T]), R.index = T, this.selection = p.selection = R;
            var E = x.exec ? x.exec(this, o || {}) : x(this, o || {});
            !_ && E !== void 0 && (_ = E), R.toOrientedRange(C[T]);
          }
          R.detach(), this.selection = p.selection = h, this.inVirtualSelectionMode = !1, h._eventRegistry = A, h.mergeOverlappingRanges(), h.ranges[0] && h.fromOrientedRange(h.ranges[0]);
          var M = this.renderer.$scrollAnimation;
          return this.onCursorChange(), this.onSelectionChange(), M && M.from == M.to && this.renderer.animateScrolling(M.from), _;
        }
      }, this.exitMultiSelectMode = function() {
        !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
      }, this.getSelectedText = function() {
        var x = "";
        if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
          for (var o = this.multiSelect.rangeList.ranges, d = [], b = 0; b < o.length; b++)
            d.push(this.session.getTextRange(o[b]));
          var u = this.session.getDocument().getNewLineCharacter();
          x = d.join(u), x.length == (d.length - 1) * u.length && (x = "");
        } else
          this.selection.isEmpty() || (x = this.session.getTextRange(this.getSelectionRange()));
        return x;
      }, this.$checkMultiselectChange = function(x, o) {
        if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
          var d = this.multiSelect.ranges[0];
          if (this.multiSelect.isEmpty() && o == this.multiSelect.anchor)
            return;
          var b = o == this.multiSelect.anchor ? d.cursor == d.start ? d.end : d.start : d.cursor;
          b.row != o.row || this.session.$clipPositionToDocument(b.row, b.column).column != o.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
        }
      }, this.findAll = function(x, o, d) {
        if (o = o || {}, o.needle = x || o.needle, o.needle == null) {
          var b = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
          o.needle = this.session.getTextRange(b);
        }
        this.$search.set(o);
        var u = this.$search.findAll(this.session);
        if (!u.length)
          return 0;
        var p = this.multiSelect;
        d || p.toSingleRange(u[0]);
        for (var h = u.length; h--; )
          p.addRange(u[h], !0);
        return b && p.rangeList.rangeAtPoint(b.start) && p.addRange(b, !0), u.length;
      }, this.selectMoreLines = function(x, o) {
        var d = this.selection.toOrientedRange(), b = d.cursor == d.end, u = this.session.documentToScreenPosition(d.cursor);
        this.selection.$desiredColumn && (u.column = this.selection.$desiredColumn);
        var p = this.session.screenToDocumentPosition(u.row + x, u.column);
        if (d.isEmpty())
          var v = p;
        else
          var h = this.session.documentToScreenPosition(b ? d.end : d.start), v = this.session.screenToDocumentPosition(h.row + x, h.column);
        if (b) {
          var C = k.fromPoints(p, v);
          C.cursor = C.start;
        } else {
          var C = k.fromPoints(v, p);
          C.cursor = C.end;
        }
        if (C.desiredColumn = u.column, !this.selection.inMultiSelectMode)
          this.selection.addRange(d);
        else if (o)
          var _ = d.cursor;
        this.selection.addRange(C), _ && this.selection.substractPoint(_);
      }, this.transposeSelections = function(x) {
        for (var o = this.session, d = o.multiSelect, b = d.ranges, u = b.length; u--; ) {
          var p = b[u];
          if (p.isEmpty()) {
            var h = o.getWordRange(p.start.row, p.start.column);
            p.start.row = h.start.row, p.start.column = h.start.column, p.end.row = h.end.row, p.end.column = h.end.column;
          }
        }
        d.mergeOverlappingRanges();
        for (var v = [], u = b.length; u--; ) {
          var p = b[u];
          v.unshift(o.getTextRange(p));
        }
        x < 0 ? v.unshift(v.pop()) : v.push(v.shift());
        for (var u = b.length; u--; ) {
          var p = b[u], h = p.clone();
          o.replace(p, v[u]), p.start.row = h.start.row, p.start.column = h.start.column;
        }
        d.fromOrientedRange(d.ranges[0]);
      }, this.selectMore = function(x, o, d) {
        var b = this.session, u = b.multiSelect, p = u.toOrientedRange();
        if (!(p.isEmpty() && (p = b.getWordRange(p.start.row, p.start.column), p.cursor = x == -1 ? p.start : p.end, this.multiSelect.addRange(p), d))) {
          var h = b.getTextRange(p), v = i(b, h, x);
          v && (v.cursor = x == -1 ? v.start : v.end, this.session.unfold(v), this.multiSelect.addRange(v), this.renderer.scrollCursorIntoView(null, 0.5)), o && this.multiSelect.substractPoint(p.cursor);
        }
      }, this.alignCursors = function() {
        var x = this.session, o = x.multiSelect, d = o.ranges, b = -1, u = d.filter(function(O) {
          if (O.cursor.row == b)
            return !0;
          b = O.cursor.row;
        });
        if (!d.length || u.length == d.length - 1) {
          var p = this.selection.getRange(), h = p.start.row, v = p.end.row, C = h == v;
          if (C) {
            var _ = this.session.getLength(), A;
            do
              A = this.session.getLine(v);
            while (/[=:]/.test(A) && ++v < _);
            do
              A = this.session.getLine(h);
            while (/[=:]/.test(A) && --h > 0);
            h < 0 && (h = 0), v >= _ && (v = _ - 1);
          }
          var R = this.session.removeFullLines(h, v);
          R = this.$reAlignText(R, C), this.session.insert({ row: h, column: 0 }, R.join(`
`) + `
`), C || (p.start.column = 0, p.end.column = R[R.length - 1].length), this.selection.setRange(p);
        } else {
          u.forEach(function(O) {
            o.substractPoint(O.cursor);
          });
          var T = 0, E = 1 / 0, M = d.map(function(O) {
            var B = O.cursor, H = x.getLine(B.row), z = H.substr(B.column).search(/\S/g);
            return z == -1 && (z = 0), B.column > T && (T = B.column), z < E && (E = z), z;
          });
          d.forEach(function(O, B) {
            var H = O.cursor, z = T - H.column, I = M[B] - E;
            z > I ? x.insert(H, t.stringRepeat(" ", z - I)) : x.remove(new k(H.row, H.column, H.row, H.column - z + I)), O.start.column = O.end.column = T, O.start.row = O.end.row = H.row, O.cursor = O.end;
          }), o.fromOrientedRange(d[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }
      }, this.$reAlignText = function(x, o) {
        var d = !0, b = !0, u, p, h;
        return x.map(function(R) {
          var T = R.match(/(\s*)(.*?)(\s*)([=:].*)/);
          return T ? u == null ? (u = T[1].length, p = T[2].length, h = T[3].length, T) : (u + p + h != T[1].length + T[2].length + T[3].length && (b = !1), u != T[1].length && (d = !1), u > T[1].length && (u = T[1].length), p < T[2].length && (p = T[2].length), h > T[3].length && (h = T[3].length), T) : [R];
        }).map(o ? C : d ? b ? _ : C : A);
        function v(R) {
          return t.stringRepeat(" ", R);
        }
        function C(R) {
          return R[2] ? v(u) + R[2] + v(p - R[2].length + h) + R[4].replace(/^([=:])\s+/, "$1 ") : R[0];
        }
        function _(R) {
          return R[2] ? v(u + p - R[2].length) + R[2] + v(h) + R[4].replace(/^([=:])\s+/, "$1 ") : R[0];
        }
        function A(R) {
          return R[2] ? v(u) + R[2] + v(h) + R[4].replace(/^([=:])\s+/, "$1 ") : R[0];
        }
      };
    }).call(c.prototype);
    function g(x, o) {
      return x.row == o.row && x.column == o.column;
    }
    $.onSessionChange = function(x) {
      var o = x.session;
      o && !o.multiSelect && (o.$selectionMarkers = [], o.selection.$initRangeList(), o.multiSelect = o.selection), this.multiSelect = o && o.multiSelect;
      var d = x.oldSession;
      d && (d.multiSelect.off("addRange", this.$onAddRange), d.multiSelect.off("removeRange", this.$onRemoveRange), d.multiSelect.off("multiSelect", this.$onMultiSelect), d.multiSelect.off("singleSelect", this.$onSingleSelect), d.multiSelect.lead.off("change", this.$checkMultiselectChange), d.multiSelect.anchor.off("change", this.$checkMultiselectChange)), o && (o.multiSelect.on("addRange", this.$onAddRange), o.multiSelect.on("removeRange", this.$onRemoveRange), o.multiSelect.on("multiSelect", this.$onMultiSelect), o.multiSelect.on("singleSelect", this.$onSingleSelect), o.multiSelect.lead.on("change", this.$checkMultiselectChange), o.multiSelect.anchor.on("change", this.$checkMultiselectChange)), o && this.inMultiSelectMode != o.selection.inMultiSelectMode && (o.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
    };
    function m(x) {
      x.$multiselectOnSessionChange || (x.$onAddRange = x.$onAddRange.bind(x), x.$onRemoveRange = x.$onRemoveRange.bind(x), x.$onMultiSelect = x.$onMultiSelect.bind(x), x.$onSingleSelect = x.$onSingleSelect.bind(x), x.$multiselectOnSessionChange = $.onSessionChange.bind(x), x.$checkMultiselectChange = x.$checkMultiselectChange.bind(x), x.$multiselectOnSessionChange(x), x.on("changeSession", x.$multiselectOnSessionChange), x.on("mousedown", a), x.commands.addCommands(e.defaultCommands), y(x));
    }
    function y(x) {
      if (!x.textInput)
        return;
      var o = x.textInput.getElement(), d = !1;
      l.addListener(o, "keydown", function(u) {
        var p = u.keyCode == 18 && !(u.ctrlKey || u.shiftKey || u.metaKey);
        x.$blockSelectEnabled && p ? d || (x.renderer.setMouseCursor("crosshair"), d = !0) : d && b();
      }, x), l.addListener(o, "keyup", b, x), l.addListener(o, "blur", b, x);
      function b(u) {
        d && (x.renderer.setMouseCursor(""), d = !1);
      }
    }
    $.MultiSelect = m, w("./config").defineOptions(c.prototype, "editor", {
      enableMultiselect: {
        set: function(x) {
          m(this), x ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", a)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", a));
        },
        value: !0
      },
      enableBlockSelect: {
        set: function(x) {
          this.$blockSelectEnabled = x;
        },
        value: !0
      }
    });
  }), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("../../range").Range, k = $.FoldMode = function() {
    };
    (function() {
      this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(f, a, l) {
        var t = f.getLine(l);
        return this.foldingStartMarker.test(t) ? "start" : a == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(t) ? "end" : "";
      }, this.getFoldWidgetRange = function(f, a, l) {
        return null;
      }, this.indentationBlock = function(f, a, l) {
        var t = /\S/, e = f.getLine(a), n = e.search(t);
        if (n != -1) {
          for (var r = l || e.length, i = f.getLength(), s = a, c = a; ++a < i; ) {
            var g = f.getLine(a).search(t);
            if (g != -1) {
              if (g <= n) {
                var m = f.getTokenAt(a, 0);
                if (!m || m.type !== "string")
                  break;
              }
              c = a;
            }
          }
          if (c > s) {
            var y = f.getLine(c).length;
            return new S(s, r, c, y);
          }
        }
      }, this.openingBracketBlock = function(f, a, l, t, e) {
        var n = { row: l, column: t + 1 }, r = f.$findClosingBracket(a, n, e);
        if (!!r) {
          var i = f.foldWidgets[r.row];
          return i == null && (i = f.getFoldWidget(r.row)), i == "start" && r.row > n.row && (r.row--, r.column = f.getLine(r.row).length), S.fromPoints(n, r);
        }
      }, this.closingBracketBlock = function(f, a, l, t, e) {
        var n = { row: l, column: t }, r = f.$findOpeningBracket(a, n);
        if (!!r)
          return r.column++, n.column--, S.fromPoints(r, n);
      };
    }).call(k.prototype);
  }), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(w, $, L) {
    var S = w("./lib/dom");
    function k(f) {
      this.session = f, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
    }
    (function() {
      this.getRowLength = function(f) {
        var a;
        return this.lineWidgets ? a = this.lineWidgets[f] && this.lineWidgets[f].rowCount || 0 : a = 0, !this.$useWrapMode || !this.$wrapData[f] ? 1 + a : this.$wrapData[f].length + 1 + a;
      }, this.$getWidgetScreenLength = function() {
        var f = 0;
        return this.lineWidgets.forEach(function(a) {
          a && a.rowCount && !a.hidden && (f += a.rowCount);
        }), f;
      }, this.$onChangeEditor = function(f) {
        this.attach(f.editor);
      }, this.attach = function(f) {
        f && f.widgetManager && f.widgetManager != this && f.widgetManager.detach(), this.editor != f && (this.detach(), this.editor = f, f && (f.widgetManager = this, f.renderer.on("beforeRender", this.measureWidgets), f.renderer.on("afterRender", this.renderWidgets)));
      }, this.detach = function(f) {
        var a = this.editor;
        if (!!a) {
          this.editor = null, a.widgetManager = null, a.renderer.off("beforeRender", this.measureWidgets), a.renderer.off("afterRender", this.renderWidgets);
          var l = this.session.lineWidgets;
          l && l.forEach(function(t) {
            t && t.el && t.el.parentNode && (t._inDocument = !1, t.el.parentNode.removeChild(t.el));
          });
        }
      }, this.updateOnFold = function(f, a) {
        var l = a.lineWidgets;
        if (!(!l || !f.action)) {
          for (var t = f.data, e = t.start.row, n = t.end.row, r = f.action == "add", i = e + 1; i < n; i++)
            l[i] && (l[i].hidden = r);
          l[n] && (r ? l[e] ? l[n].hidden = r : l[e] = l[n] : (l[e] == l[n] && (l[e] = void 0), l[n].hidden = r));
        }
      }, this.updateOnChange = function(f) {
        var a = this.session.lineWidgets;
        if (!!a) {
          var l = f.start.row, t = f.end.row - l;
          if (t !== 0)
            if (f.action == "remove") {
              var e = a.splice(l + 1, t);
              !a[l] && e[e.length - 1] && (a[l] = e.pop()), e.forEach(function(r) {
                r && this.removeLineWidget(r);
              }, this), this.$updateRows();
            } else {
              var n = new Array(t);
              a[l] && a[l].column != null && f.start.column > a[l].column && l++, n.unshift(l, 0), a.splice.apply(a, n), this.$updateRows();
            }
        }
      }, this.$updateRows = function() {
        var f = this.session.lineWidgets;
        if (!!f) {
          var a = !0;
          f.forEach(function(l, t) {
            if (l)
              for (a = !1, l.row = t; l.$oldWidget; )
                l.$oldWidget.row = t, l = l.$oldWidget;
          }), a && (this.session.lineWidgets = null);
        }
      }, this.$registerLineWidget = function(f) {
        this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
        var a = this.session.lineWidgets[f.row];
        return a && (f.$oldWidget = a, a.el && a.el.parentNode && (a.el.parentNode.removeChild(a.el), a._inDocument = !1)), this.session.lineWidgets[f.row] = f, f;
      }, this.addLineWidget = function(f) {
        if (this.$registerLineWidget(f), f.session = this.session, !this.editor)
          return f;
        var a = this.editor.renderer;
        f.html && !f.el && (f.el = S.createElement("div"), f.el.innerHTML = f.html), f.el && (S.addCssClass(f.el, "ace_lineWidgetContainer"), f.el.style.position = "absolute", f.el.style.zIndex = 5, a.container.appendChild(f.el), f._inDocument = !0, f.coverGutter || (f.el.style.zIndex = 3), f.pixelHeight == null && (f.pixelHeight = f.el.offsetHeight)), f.rowCount == null && (f.rowCount = f.pixelHeight / a.layerConfig.lineHeight);
        var l = this.session.getFoldAt(f.row, 0);
        if (f.$fold = l, l) {
          var t = this.session.lineWidgets;
          f.row == l.end.row && !t[l.start.row] ? t[l.start.row] = f : f.hidden = !0;
        }
        return this.session._emit("changeFold", { data: { start: { row: f.row } } }), this.$updateRows(), this.renderWidgets(null, a), this.onWidgetChanged(f), f;
      }, this.removeLineWidget = function(f) {
        if (f._inDocument = !1, f.session = null, f.el && f.el.parentNode && f.el.parentNode.removeChild(f.el), f.editor && f.editor.destroy)
          try {
            f.editor.destroy();
          } catch {
          }
        if (this.session.lineWidgets) {
          var a = this.session.lineWidgets[f.row];
          if (a == f)
            this.session.lineWidgets[f.row] = f.$oldWidget, f.$oldWidget && this.onWidgetChanged(f.$oldWidget);
          else
            for (; a; ) {
              if (a.$oldWidget == f) {
                a.$oldWidget = f.$oldWidget;
                break;
              }
              a = a.$oldWidget;
            }
        }
        this.session._emit("changeFold", { data: { start: { row: f.row } } }), this.$updateRows();
      }, this.getWidgetsAtRow = function(f) {
        for (var a = this.session.lineWidgets, l = a && a[f], t = []; l; )
          t.push(l), l = l.$oldWidget;
        return t;
      }, this.onWidgetChanged = function(f) {
        this.session._changedWidgets.push(f), this.editor && this.editor.renderer.updateFull();
      }, this.measureWidgets = function(f, a) {
        var l = this.session._changedWidgets, t = a.layerConfig;
        if (!(!l || !l.length)) {
          for (var e = 1 / 0, n = 0; n < l.length; n++) {
            var r = l[n];
            if (!(!r || !r.el) && r.session == this.session) {
              if (!r._inDocument) {
                if (this.session.lineWidgets[r.row] != r)
                  continue;
                r._inDocument = !0, a.container.appendChild(r.el);
              }
              r.h = r.el.offsetHeight, r.fixedWidth || (r.w = r.el.offsetWidth, r.screenWidth = Math.ceil(r.w / t.characterWidth));
              var i = r.h / t.lineHeight;
              r.coverLine && (i -= this.session.getRowLineCount(r.row), i < 0 && (i = 0)), r.rowCount != i && (r.rowCount = i, r.row < e && (e = r.row));
            }
          }
          e != 1 / 0 && (this.session._emit("changeFold", { data: { start: { row: e } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
        }
      }, this.renderWidgets = function(f, a) {
        var l = a.layerConfig, t = this.session.lineWidgets;
        if (!!t) {
          for (var e = Math.min(this.firstRow, l.firstRow), n = Math.max(this.lastRow, l.lastRow, t.length); e > 0 && !t[e]; )
            e--;
          this.firstRow = l.firstRow, this.lastRow = l.lastRow, a.$cursorLayer.config = l;
          for (var r = e; r <= n; r++) {
            var i = t[r];
            if (!(!i || !i.el)) {
              if (i.hidden) {
                i.el.style.top = -100 - (i.pixelHeight || 0) + "px";
                continue;
              }
              i._inDocument || (i._inDocument = !0, a.container.appendChild(i.el));
              var s = a.$cursorLayer.getPixelPosition({ row: r, column: 0 }, !0).top;
              i.coverLine || (s += l.lineHeight * this.session.getRowLineCount(i.row)), i.el.style.top = s - l.offset + "px";
              var c = i.coverGutter ? 0 : a.gutterWidth;
              i.fixedWidth || (c -= a.scrollLeft), i.el.style.left = c + "px", i.fullWidth && i.screenWidth && (i.el.style.minWidth = l.width + 2 * l.padding + "px"), i.fixedWidth ? i.el.style.right = a.scrollBar.getWidth() + "px" : i.el.style.right = "";
            }
          }
        }
      };
    }).call(k.prototype), $.LineWidgets = k;
  }), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(w, $, L) {
    var S = w("../line_widgets").LineWidgets, k = w("../lib/dom"), f = w("../range").Range;
    function a(t, e, n) {
      for (var r = 0, i = t.length - 1; r <= i; ) {
        var s = r + i >> 1, c = n(e, t[s]);
        if (c > 0)
          r = s + 1;
        else if (c < 0)
          i = s - 1;
        else
          return s;
      }
      return -(r + 1);
    }
    function l(t, e, n) {
      var r = t.getAnnotations().sort(f.comparePoints);
      if (!!r.length) {
        var i = a(r, { row: e, column: -1 }, f.comparePoints);
        i < 0 && (i = -i - 1), i >= r.length ? i = n > 0 ? 0 : r.length - 1 : i === 0 && n < 0 && (i = r.length - 1);
        var s = r[i];
        if (!(!s || !n)) {
          if (s.row === e) {
            do
              s = r[i += n];
            while (s && s.row === e);
            if (!s)
              return r.slice();
          }
          var c = [];
          e = s.row;
          do
            c[n < 0 ? "unshift" : "push"](s), s = r[i += n];
          while (s && s.row == e);
          return c.length && c;
        }
      }
    }
    $.showErrorMarker = function(t, e) {
      var n = t.session;
      n.widgetManager || (n.widgetManager = new S(n), n.widgetManager.attach(t));
      var r = t.getCursorPosition(), i = r.row, s = n.widgetManager.getWidgetsAtRow(i).filter(function(u) {
        return u.type == "errorMarker";
      })[0];
      s ? s.destroy() : i -= e;
      var c = l(n, i, e), g;
      if (c) {
        var m = c[0];
        r.column = (m.pos && typeof m.column != "number" ? m.pos.sc : m.column) || 0, r.row = m.row, g = t.renderer.$gutterLayer.$annotations[r.row];
      } else {
        if (s)
          return;
        g = {
          text: ["Looks good!"],
          className: "ace_ok"
        };
      }
      t.session.unfold(r.row), t.selection.moveToPosition(r);
      var y = {
        row: r.row,
        fixedWidth: !0,
        coverGutter: !0,
        el: k.createElement("div"),
        type: "errorMarker"
      }, x = y.el.appendChild(k.createElement("div")), o = y.el.appendChild(k.createElement("div"));
      o.className = "error_widget_arrow " + g.className;
      var d = t.renderer.$cursorLayer.getPixelPosition(r).left;
      o.style.left = d + t.renderer.gutterWidth - 5 + "px", y.el.className = "error_widget_wrapper", x.className = "error_widget " + g.className, x.innerHTML = g.text.join("<br>"), x.appendChild(k.createElement("div"));
      var b = function(u, p, h) {
        if (p === 0 && (h === "esc" || h === "return"))
          return y.destroy(), { command: "null" };
      };
      y.destroy = function() {
        t.$mouseHandler.isMousePressed || (t.keyBinding.removeKeyboardHandler(b), n.widgetManager.removeLineWidget(y), t.off("changeSelection", y.destroy), t.off("changeSession", y.destroy), t.off("mouseup", y.destroy), t.off("change", y.destroy));
      }, t.keyBinding.addKeyboardHandler(b), t.on("changeSelection", y.destroy), t.on("changeSession", y.destroy), t.on("mouseup", y.destroy), t.on("change", y.destroy), t.session.widgetManager.addLineWidget(y), y.el.onmousedown = t.focus.bind(t), t.renderer.scrollCursorIntoView(null, 0.5, { bottom: y.el.offsetHeight });
    }, k.importCssString(`
    .error_widget_wrapper {
        background: inherit;
        color: inherit;
        border:none
    }
    .error_widget {
        border-top: solid 2px;
        border-bottom: solid 2px;
        margin: 5px 0;
        padding: 10px 40px;
        white-space: pre-wrap;
    }
    .error_widget.ace_error, .error_widget_arrow.ace_error{
        border-color: #ff5a5a
    }
    .error_widget.ace_warning, .error_widget_arrow.ace_warning{
        border-color: #F1D817
    }
    .error_widget.ace_info, .error_widget_arrow.ace_info{
        border-color: #5a5a5a
    }
    .error_widget.ace_ok, .error_widget_arrow.ace_ok{
        border-color: #5aaa5a
    }
    .error_widget_arrow {
        position: absolute;
        border: solid 5px;
        border-top-color: transparent!important;
        border-right-color: transparent!important;
        border-left-color: transparent!important;
        top: -5px;
    }
`, "error_marker.css", !1);
  }), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], function(w, $, L) {
    w("./loader_build")($);
    var S = w("./lib/dom"), k = w("./lib/event"), f = w("./range").Range, a = w("./editor").Editor, l = w("./edit_session").EditSession, t = w("./undomanager").UndoManager, e = w("./virtual_renderer").VirtualRenderer;
    w("./worker/worker_client"), w("./keyboard/hash_handler"), w("./placeholder"), w("./multi_select"), w("./mode/folding/fold_mode"), w("./theme/textmate"), w("./ext/error_marker"), $.config = w("./config"), $.edit = function(n, r) {
      if (typeof n == "string") {
        var i = n;
        if (n = document.getElementById(i), !n)
          throw new Error("ace.edit can't find div #" + i);
      }
      if (n && n.env && n.env.editor instanceof a)
        return n.env.editor;
      var s = "";
      if (n && /input|textarea/i.test(n.tagName)) {
        var c = n;
        s = c.value, n = S.createElement("pre"), c.parentNode.replaceChild(n, c);
      } else
        n && (s = n.textContent, n.innerHTML = "");
      var g = $.createEditSession(s), m = new a(new e(n), g, r), y = {
        document: g,
        editor: m,
        onResize: m.resize.bind(m, null)
      };
      return c && (y.textarea = c), k.addListener(window, "resize", y.onResize), m.on("destroy", function() {
        k.removeListener(window, "resize", y.onResize), y.editor.container.env = null;
      }), m.container.env = m.env = y, m;
    }, $.createEditSession = function(n, r) {
      var i = new l(n, r);
      return i.setUndoManager(new t()), i;
    }, $.Range = f, $.Editor = a, $.EditSession = l, $.UndoManager = t, $.VirtualRenderer = e, $.version = $.config.version;
  }), function() {
    ace.require(["ace/ace"], function(w) {
      w && (w.config.init(!0), w.define = ace.define), window.ace || (window.ace = w);
      for (var $ in w)
        w.hasOwnProperty($) && (window.ace[$] = w[$]);
      window.ace.default = window.ace, F && (F.exports = window.ace);
    });
  }();
})(it);
const hn = it.exports;
var rt = function() {
  if (typeof Map < "u")
    return Map;
  function F(N, w) {
    var $ = -1;
    return N.some(function(L, S) {
      return L[0] === w ? ($ = S, !0) : !1;
    }), $;
  }
  return function() {
    function N() {
      this.__entries__ = [];
    }
    return Object.defineProperty(N.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: !0,
      configurable: !0
    }), N.prototype.get = function(w) {
      var $ = F(this.__entries__, w), L = this.__entries__[$];
      return L && L[1];
    }, N.prototype.set = function(w, $) {
      var L = F(this.__entries__, w);
      ~L ? this.__entries__[L][1] = $ : this.__entries__.push([w, $]);
    }, N.prototype.delete = function(w) {
      var $ = this.__entries__, L = F($, w);
      ~L && $.splice(L, 1);
    }, N.prototype.has = function(w) {
      return !!~F(this.__entries__, w);
    }, N.prototype.clear = function() {
      this.__entries__.splice(0);
    }, N.prototype.forEach = function(w, $) {
      $ === void 0 && ($ = null);
      for (var L = 0, S = this.__entries__; L < S.length; L++) {
        var k = S[L];
        w.call($, k[1], k[0]);
      }
    }, N;
  }();
}(), Xe = typeof window < "u" && typeof document < "u" && window.document === document, Ne = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), un = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ne) : function(F) {
    return setTimeout(function() {
      return F(Date.now());
    }, 1e3 / 60);
  };
}(), dn = 2;
function gn(F, N) {
  var w = !1, $ = !1, L = 0;
  function S() {
    w && (w = !1, F()), $ && f();
  }
  function k() {
    un(S);
  }
  function f() {
    var a = Date.now();
    if (w) {
      if (a - L < dn)
        return;
      $ = !0;
    } else
      w = !0, $ = !1, setTimeout(k, N);
    L = a;
  }
  return f;
}
var fn = 20, mn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], pn = typeof MutationObserver < "u", vn = function() {
  function F() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gn(this.refresh.bind(this), fn);
  }
  return F.prototype.addObserver = function(N) {
    ~this.observers_.indexOf(N) || this.observers_.push(N), this.connected_ || this.connect_();
  }, F.prototype.removeObserver = function(N) {
    var w = this.observers_, $ = w.indexOf(N);
    ~$ && w.splice($, 1), !w.length && this.connected_ && this.disconnect_();
  }, F.prototype.refresh = function() {
    var N = this.updateObservers_();
    N && this.refresh();
  }, F.prototype.updateObservers_ = function() {
    var N = this.observers_.filter(function(w) {
      return w.gatherActive(), w.hasActive();
    });
    return N.forEach(function(w) {
      return w.broadcastActive();
    }), N.length > 0;
  }, F.prototype.connect_ = function() {
    !Xe || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), pn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, F.prototype.disconnect_ = function() {
    !Xe || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, F.prototype.onTransitionEnd_ = function(N) {
    var w = N.propertyName, $ = w === void 0 ? "" : w, L = mn.some(function(S) {
      return !!~$.indexOf(S);
    });
    L && this.refresh();
  }, F.getInstance = function() {
    return this.instance_ || (this.instance_ = new F()), this.instance_;
  }, F.instance_ = null, F;
}(), st = function(F, N) {
  for (var w = 0, $ = Object.keys(N); w < $.length; w++) {
    var L = $[w];
    Object.defineProperty(F, L, {
      value: N[L],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return F;
}, Oe = function(F) {
  var N = F && F.ownerDocument && F.ownerDocument.defaultView;
  return N || Ne;
}, ot = We(0, 0, 0, 0);
function Pe(F) {
  return parseFloat(F) || 0;
}
function qe(F) {
  for (var N = [], w = 1; w < arguments.length; w++)
    N[w - 1] = arguments[w];
  return N.reduce(function($, L) {
    var S = F["border-" + L + "-width"];
    return $ + Pe(S);
  }, 0);
}
function bn(F) {
  for (var N = ["top", "right", "bottom", "left"], w = {}, $ = 0, L = N; $ < L.length; $++) {
    var S = L[$], k = F["padding-" + S];
    w[S] = Pe(k);
  }
  return w;
}
function wn(F) {
  var N = F.getBBox();
  return We(0, 0, N.width, N.height);
}
function xn(F) {
  var N = F.clientWidth, w = F.clientHeight;
  if (!N && !w)
    return ot;
  var $ = Oe(F).getComputedStyle(F), L = bn($), S = L.left + L.right, k = L.top + L.bottom, f = Pe($.width), a = Pe($.height);
  if ($.boxSizing === "border-box" && (Math.round(f + S) !== N && (f -= qe($, "left", "right") + S), Math.round(a + k) !== w && (a -= qe($, "top", "bottom") + k)), !kn(F)) {
    var l = Math.round(f + S) - N, t = Math.round(a + k) - w;
    Math.abs(l) !== 1 && (f -= l), Math.abs(t) !== 1 && (a -= t);
  }
  return We(L.left, L.top, f, a);
}
var yn = function() {
  return typeof SVGGraphicsElement < "u" ? function(F) {
    return F instanceof Oe(F).SVGGraphicsElement;
  } : function(F) {
    return F instanceof Oe(F).SVGElement && typeof F.getBBox == "function";
  };
}();
function kn(F) {
  return F === Oe(F).document.documentElement;
}
function $n(F) {
  return Xe ? yn(F) ? wn(F) : xn(F) : ot;
}
function Cn(F) {
  var N = F.x, w = F.y, $ = F.width, L = F.height, S = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, k = Object.create(S.prototype);
  return st(k, {
    x: N,
    y: w,
    width: $,
    height: L,
    top: w,
    right: N + $,
    bottom: L + w,
    left: N
  }), k;
}
function We(F, N, w, $) {
  return { x: F, y: N, width: w, height: $ };
}
var Sn = function() {
  function F(N) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = We(0, 0, 0, 0), this.target = N;
  }
  return F.prototype.isActive = function() {
    var N = $n(this.target);
    return this.contentRect_ = N, N.width !== this.broadcastWidth || N.height !== this.broadcastHeight;
  }, F.prototype.broadcastRect = function() {
    var N = this.contentRect_;
    return this.broadcastWidth = N.width, this.broadcastHeight = N.height, N;
  }, F;
}(), _n = function() {
  function F(N, w) {
    var $ = Cn(w);
    st(this, { target: N, contentRect: $ });
  }
  return F;
}(), An = function() {
  function F(N, w, $) {
    if (this.activeObservations_ = [], this.observations_ = new rt(), typeof N != "function")
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = N, this.controller_ = w, this.callbackCtx_ = $;
  }
  return F.prototype.observe = function(N) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(N instanceof Oe(N).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var w = this.observations_;
      w.has(N) || (w.set(N, new Sn(N)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, F.prototype.unobserve = function(N) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(N instanceof Oe(N).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var w = this.observations_;
      !w.has(N) || (w.delete(N), w.size || this.controller_.removeObserver(this));
    }
  }, F.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, F.prototype.gatherActive = function() {
    var N = this;
    this.clearActive(), this.observations_.forEach(function(w) {
      w.isActive() && N.activeObservations_.push(w);
    });
  }, F.prototype.broadcastActive = function() {
    if (!!this.hasActive()) {
      var N = this.callbackCtx_, w = this.activeObservations_.map(function($) {
        return new _n($.target, $.broadcastRect());
      });
      this.callback_.call(N, w, N), this.clearActive();
    }
  }, F.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, F.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, F;
}(), at = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new rt(), lt = function() {
  function F(N) {
    if (!(this instanceof F))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var w = vn.getInstance(), $ = new An(N, w, this);
    at.set(this, $);
  }
  return F;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(F) {
  lt.prototype[F] = function() {
    var N;
    return (N = at.get(this))[F].apply(N, arguments);
  };
});
var Tn = function() {
  return typeof Ne.ResizeObserver < "u" ? Ne.ResizeObserver : lt;
}();
const et = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], Rn = Le({
  props: {
    value: {
      type: String,
      required: !0
    },
    lang: {
      type: String,
      default: "text"
    },
    theme: {
      type: String,
      default: "chrome"
    },
    options: Object,
    placeholder: String,
    readonly: Boolean,
    wrap: Boolean,
    printMargin: {
      type: [Boolean, Number],
      default: !0
    },
    minLines: Number,
    maxLines: Number
  },
  emits: ["update:value", "init", ...et],
  render() {
    return gt("div");
  },
  mounted() {
    const F = this._editor = ft(hn.edit(this.$el, {
      placeholder: this.placeholder,
      readOnly: this.readonly,
      value: this.value,
      mode: "ace/mode/" + this.lang,
      theme: "ace/theme/" + this.theme,
      wrap: this.wrap,
      printMargin: this.printMargin,
      useWorker: !1,
      minLines: this.minLines,
      maxLines: this.maxLines,
      ...this.options
    }));
    this._contentBackup = this.value, this._isSettingContent = !1, F.on("change", () => {
      if (this._isSettingContent)
        return;
      const N = F.getValue();
      this._contentBackup = N, this.$emit("update:value", N);
    }), et.forEach((N) => {
      const w = "on" + mt(N);
      typeof this.$.vnode.props[w] == "function" && F.on(N, this.$emit.bind(this, N));
    }), this._ro = new Tn(() => F.resize()), this._ro.observe(this.$el), this.$emit("init", F);
  },
  beforeUnmount() {
    var F, N;
    (F = this._ro) === null || F === void 0 || F.disconnect(), (N = this._editor) === null || N === void 0 || N.destroy();
  },
  methods: {
    focus() {
      this._editor.focus();
    },
    blur() {
      this._editor.blur();
    },
    selectAll() {
      this._editor.selectAll();
    }
  },
  watch: {
    value(F) {
      if (this._contentBackup !== F) {
        try {
          this._isSettingContent = !0, this._editor.setValue(F, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = F;
      }
    },
    theme(F) {
      this._editor.setTheme("ace/theme/" + F);
    },
    options(F) {
      this._editor.setOptions(F);
    },
    readonly(F) {
      this._editor.setReadOnly(F);
    },
    placeholder(F) {
      this._editor.setOption("placeholder", F);
    },
    wrap(F) {
      this._editor.setWrapBehavioursEnabled(F);
    },
    printMargin(F) {
      this._editor.setOption("printMargin", F);
    },
    lang(F) {
      this._editor.setOption("mode", "ace/mode/" + F);
    },
    minLines(F) {
      this._editor.setOption("minLines", F);
    },
    maxLines(F) {
      this._editor.setOption("maxLines", F);
    }
  }
});
var Ln = { exports: {} };
(function(F, N) {
  ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/range_list", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/clipboard", "ace/editor"], function(w, $, L) {
    var S = w("./lib/dom"), k = w("./lib/oop"), f = w("./lib/event_emitter").EventEmitter, a = w("./lib/lang"), l = w("./range").Range, t = w("./range_list").RangeList, e = w("./keyboard/hash_handler").HashHandler, n = w("./tokenizer").Tokenizer, r = w("./clipboard"), i = {
      CURRENT_WORD: function(o) {
        return o.session.getTextRange(o.session.getWordRange());
      },
      SELECTION: function(o, d, b) {
        var u = o.session.getTextRange();
        return b ? u.replace(/\n\r?([ \t]*\S)/g, `
` + b + "$1") : u;
      },
      CURRENT_LINE: function(o) {
        return o.session.getLine(o.getCursorPosition().row);
      },
      PREV_LINE: function(o) {
        return o.session.getLine(o.getCursorPosition().row - 1);
      },
      LINE_INDEX: function(o) {
        return o.getCursorPosition().row;
      },
      LINE_NUMBER: function(o) {
        return o.getCursorPosition().row + 1;
      },
      SOFT_TABS: function(o) {
        return o.session.getUseSoftTabs() ? "YES" : "NO";
      },
      TAB_SIZE: function(o) {
        return o.session.getTabSize();
      },
      CLIPBOARD: function(o) {
        return r.getText && r.getText();
      },
      FILENAME: function(o) {
        return /[^/\\]*$/.exec(this.FILEPATH(o))[0];
      },
      FILENAME_BASE: function(o) {
        return /[^/\\]*$/.exec(this.FILEPATH(o))[0].replace(/\.[^.]*$/, "");
      },
      DIRECTORY: function(o) {
        return this.FILEPATH(o).replace(/[^/\\]*$/, "");
      },
      FILEPATH: function(o) {
        return "/not implemented.txt";
      },
      WORKSPACE_NAME: function() {
        return "Unknown";
      },
      FULLNAME: function() {
        return "Unknown";
      },
      BLOCK_COMMENT_START: function(o) {
        var d = o.session.$mode || {};
        return d.blockComment && d.blockComment.start || "";
      },
      BLOCK_COMMENT_END: function(o) {
        var d = o.session.$mode || {};
        return d.blockComment && d.blockComment.end || "";
      },
      LINE_COMMENT: function(o) {
        var d = o.session.$mode || {};
        return d.lineCommentStart || "";
      },
      CURRENT_YEAR: s.bind(null, { year: "numeric" }),
      CURRENT_YEAR_SHORT: s.bind(null, { year: "2-digit" }),
      CURRENT_MONTH: s.bind(null, { month: "numeric" }),
      CURRENT_MONTH_NAME: s.bind(null, { month: "long" }),
      CURRENT_MONTH_NAME_SHORT: s.bind(null, { month: "short" }),
      CURRENT_DATE: s.bind(null, { day: "2-digit" }),
      CURRENT_DAY_NAME: s.bind(null, { weekday: "long" }),
      CURRENT_DAY_NAME_SHORT: s.bind(null, { weekday: "short" }),
      CURRENT_HOUR: s.bind(null, { hour: "2-digit", hour12: !1 }),
      CURRENT_MINUTE: s.bind(null, { minute: "2-digit" }),
      CURRENT_SECOND: s.bind(null, { second: "2-digit" })
    };
    i.SELECTED_TEXT = i.SELECTION;
    function s(o) {
      var d = new Date().toLocaleString("en-us", o);
      return d.length == 1 ? "0" + d : d;
    }
    var c = function() {
      this.snippetMap = {}, this.snippetNameMap = {};
    };
    (function() {
      k.implement(this, f), this.getTokenizer = function() {
        return c.$tokenizer || this.createTokenizer();
      }, this.createTokenizer = function() {
        function o(u) {
          return u = u.substr(1), /^\d+$/.test(u) ? [{ tabstopId: parseInt(u, 10) }] : [{ text: u }];
        }
        function d(u) {
          return "(?:[^\\\\" + u + "]|\\\\.)";
        }
        var b = {
          regex: "/(" + d("/") + "+)/",
          onMatch: function(u, p, h) {
            var v = h[0];
            return v.fmtString = !0, v.guard = u.slice(1, -1), v.flag = "", "";
          },
          next: "formatString"
        };
        return c.$tokenizer = new n({
          start: [
            { regex: /\\./, onMatch: function(u, p, h) {
              var v = u[1];
              return (v == "}" && h.length || "`$\\".indexOf(v) != -1) && (u = v), [u];
            } },
            { regex: /}/, onMatch: function(u, p, h) {
              return [h.length ? h.shift() : u];
            } },
            { regex: /\$(?:\d+|\w+)/, onMatch: o },
            { regex: /\$\{[\dA-Z_a-z]+/, onMatch: function(u, p, h) {
              var v = o(u.substr(1));
              return h.unshift(v[0]), v;
            }, next: "snippetVar" },
            { regex: /\n/, token: "newline", merge: !1 }
          ],
          snippetVar: [
            { regex: "\\|" + d("\\|") + "*\\|", onMatch: function(u, p, h) {
              var v = u.slice(1, -1).replace(/\\[,|\\]|,/g, function(C) {
                return C.length == 2 ? C[1] : "\0";
              }).split("\0").map(function(C) {
                return { value: C };
              });
              return h[0].choices = v, [v[0]];
            }, next: "start" },
            b,
            { regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "start" }
          ],
          formatString: [
            { regex: /:/, onMatch: function(u, p, h) {
              return h.length && h[0].expectElse ? (h[0].expectElse = !1, h[0].ifEnd = { elseEnd: h[0] }, [h[0].ifEnd]) : ":";
            } },
            { regex: /\\./, onMatch: function(u, p, h) {
              var v = u[1];
              return v == "}" && h.length || "`$\\".indexOf(v) != -1 ? u = v : v == "n" ? u = `
` : v == "t" ? u = "	" : "ulULE".indexOf(v) != -1 && (u = { changeCase: v, local: v > "a" }), [u];
            } },
            { regex: "/\\w*}", onMatch: function(u, p, h) {
              var v = h.shift();
              return v && (v.flag = u.slice(1, -1)), this.next = v && v.tabstopId ? "start" : "", [v || u];
            }, next: "start" },
            { regex: /\$(?:\d+|\w+)/, onMatch: function(u, p, h) {
              return [{ text: u.slice(1) }];
            } },
            { regex: /\${\w+/, onMatch: function(u, p, h) {
              var v = { text: u.slice(2) };
              return h.unshift(v), [v];
            }, next: "formatStringVar" },
            { regex: /\n/, token: "newline", merge: !1 },
            { regex: /}/, onMatch: function(u, p, h) {
              var v = h.shift();
              return this.next = v && v.tabstopId ? "start" : "", [v || u];
            }, next: "start" }
          ],
          formatStringVar: [
            { regex: /:\/\w+}/, onMatch: function(u, p, h) {
              var v = h[0];
              return v.formatFunction = u.slice(2, -1), [h.shift()];
            }, next: "formatString" },
            b,
            { regex: /:[\?\-+]?/, onMatch: function(u, p, h) {
              u[1] == "+" && (h[0].ifEnd = h[0]), u[1] == "?" && (h[0].expectElse = !0);
            }, next: "formatString" },
            { regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "formatString" }
          ]
        }), c.$tokenizer;
      }, this.tokenizeTmSnippet = function(o, d) {
        return this.getTokenizer().getLineTokens(o, d).tokens.map(function(b) {
          return b.value || b;
        });
      }, this.getVariableValue = function(o, d, b) {
        if (/^\d+$/.test(d))
          return (this.variables.__ || {})[d] || "";
        if (/^[A-Z]\d+$/.test(d))
          return (this.variables[d[0] + "__"] || {})[d.substr(1)] || "";
        if (d = d.replace(/^TM_/, ""), !this.variables.hasOwnProperty(d))
          return "";
        var u = this.variables[d];
        return typeof u == "function" && (u = this.variables[d](o, d, b)), u == null ? "" : u;
      }, this.variables = i, this.tmStrFormat = function(o, d, b) {
        if (!d.fmt)
          return o;
        var u = d.flag || "", p = d.guard;
        p = new RegExp(p, u.replace(/[^gim]/g, ""));
        var h = typeof d.fmt == "string" ? this.tokenizeTmSnippet(d.fmt, "formatString") : d.fmt, v = this, C = o.replace(p, function() {
          var _ = v.variables.__;
          v.variables.__ = [].slice.call(arguments);
          for (var A = v.resolveVariables(h, b), R = "E", T = 0; T < A.length; T++) {
            var E = A[T];
            if (typeof E == "object")
              if (A[T] = "", E.changeCase && E.local) {
                var M = A[T + 1];
                M && typeof M == "string" && (E.changeCase == "u" ? A[T] = M[0].toUpperCase() : A[T] = M[0].toLowerCase(), A[T + 1] = M.substr(1));
              } else
                E.changeCase && (R = E.changeCase);
            else
              R == "U" ? A[T] = E.toUpperCase() : R == "L" && (A[T] = E.toLowerCase());
          }
          return v.variables.__ = _, A.join("");
        });
        return C;
      }, this.tmFormatFunction = function(o, d, b) {
        return d.formatFunction == "upcase" ? o.toUpperCase() : d.formatFunction == "downcase" ? o.toLowerCase() : o;
      }, this.resolveVariables = function(o, d) {
        for (var b = [], u = "", p = !0, h = 0; h < o.length; h++) {
          var v = o[h];
          if (typeof v == "string") {
            b.push(v), v == `
` ? (p = !0, u = "") : p && (u = /^\t*/.exec(v)[0], p = /\S/.test(v));
            continue;
          }
          if (!!v) {
            if (p = !1, v.fmtString) {
              var C = o.indexOf(v, h + 1);
              C == -1 && (C = o.length), v.fmt = o.slice(h + 1, C), h = C;
            }
            if (v.text) {
              var _ = this.getVariableValue(d, v.text, u) + "";
              v.fmtString && (_ = this.tmStrFormat(_, v, d)), v.formatFunction && (_ = this.tmFormatFunction(_, v, d)), _ && !v.ifEnd ? (b.push(_), A(v)) : !_ && v.ifEnd && A(v.ifEnd);
            } else
              v.elseEnd ? A(v.elseEnd) : (v.tabstopId != null || v.changeCase != null) && b.push(v);
          }
        }
        function A(R) {
          var T = o.indexOf(R, h + 1);
          T != -1 && (h = T);
        }
        return b;
      }, this.insertSnippetForSelection = function(o, d) {
        var b = o.getCursorPosition(), u = o.session.getLine(b.row), p = o.session.getTabString(), h = u.match(/^\s*/)[0];
        b.column < h.length && (h = h.slice(0, b.column)), d = d.replace(/\r/g, "");
        var v = this.tokenizeTmSnippet(d);
        v = this.resolveVariables(v, o), v = v.map(function(K) {
          return K == `
` ? K + h : typeof K == "string" ? K.replace(/\t/g, p) : K;
        });
        var C = [];
        v.forEach(function(K, Q) {
          if (typeof K == "object") {
            var j = K.tabstopId, q = C[j];
            if (q || (q = C[j] = [], q.index = j, q.value = "", q.parents = {}), q.indexOf(K) === -1) {
              K.choices && !q.choices && (q.choices = K.choices), q.push(K);
              var se = v.indexOf(K, Q + 1);
              if (se !== -1) {
                var me = v.slice(Q + 1, se), de = me.some(function(ae) {
                  return typeof ae == "object";
                });
                de && !q.value ? q.value = me : me.length && (!q.value || typeof q.value != "string") && (q.value = me.join(""));
              }
            }
          }
        }), C.forEach(function(K) {
          K.length = 0;
        });
        var _ = {};
        function A(K) {
          for (var Q = [], j = 0; j < K.length; j++) {
            var q = K[j];
            if (typeof q == "object") {
              if (_[q.tabstopId])
                continue;
              var se = K.lastIndexOf(q, j - 1);
              q = Q[se] || { tabstopId: q.tabstopId };
            }
            Q[j] = q;
          }
          return Q;
        }
        for (var R = 0; R < v.length; R++) {
          var T = v[R];
          if (typeof T == "object") {
            var E = T.tabstopId, M = C[E], O = v.indexOf(T, R + 1);
            if (_[E]) {
              _[E] === T && (delete _[E], Object.keys(_).forEach(function(K) {
                M.parents[K] = !0;
              }));
              continue;
            }
            _[E] = T;
            var B = M.value;
            typeof B != "string" ? B = A(B) : T.fmt && (B = this.tmStrFormat(B, T, o)), v.splice.apply(v, [R + 1, Math.max(0, O - R)].concat(B, T)), M.indexOf(T) === -1 && M.push(T);
          }
        }
        var H = 0, z = 0, I = "";
        v.forEach(function(K) {
          if (typeof K == "string") {
            var Q = K.split(`
`);
            Q.length > 1 ? (z = Q[Q.length - 1].length, H += Q.length - 1) : z += K.length, I += K;
          } else
            K && (K.start ? K.end = { row: H, column: z } : K.start = { row: H, column: z });
        });
        var D = o.getSelectionRange(), P = o.session.replace(D, I), U = new g(o), Z = o.inVirtualSelectionMode && o.selection.index;
        U.addTabstops(C, D.start, P, Z);
      }, this.insertSnippet = function(o, d) {
        var b = this;
        if (o.inVirtualSelectionMode)
          return b.insertSnippetForSelection(o, d);
        o.forEachSelection(function() {
          b.insertSnippetForSelection(o, d);
        }, null, { keepOrder: !0 }), o.tabstopManager && o.tabstopManager.tabNext();
      }, this.$getScope = function(o) {
        var d = o.session.$mode.$id || "";
        if (d = d.split("/").pop(), d === "html" || d === "php") {
          d === "php" && !o.session.$mode.inlinePhp && (d = "html");
          var b = o.getCursorPosition(), u = o.session.getState(b.row);
          typeof u == "object" && (u = u[0]), u.substring && (u.substring(0, 3) == "js-" ? d = "javascript" : u.substring(0, 4) == "css-" ? d = "css" : u.substring(0, 4) == "php-" && (d = "php"));
        }
        return d;
      }, this.getActiveScopes = function(o) {
        var d = this.$getScope(o), b = [d], u = this.snippetMap;
        return u[d] && u[d].includeScopes && b.push.apply(b, u[d].includeScopes), b.push("_"), b;
      }, this.expandWithTab = function(o, d) {
        var b = this, u = o.forEachSelection(function() {
          return b.expandSnippetForSelection(o, d);
        }, null, { keepOrder: !0 });
        return u && o.tabstopManager && o.tabstopManager.tabNext(), u;
      }, this.expandSnippetForSelection = function(o, d) {
        var b = o.getCursorPosition(), u = o.session.getLine(b.row), p = u.substring(0, b.column), h = u.substr(b.column), v = this.snippetMap, C;
        return this.getActiveScopes(o).some(function(_) {
          var A = v[_];
          return A && (C = this.findMatchingSnippet(A, p, h)), !!C;
        }, this), C ? (d && d.dryRun || (o.session.doc.removeInLine(b.row, b.column - C.replaceBefore.length, b.column + C.replaceAfter.length), this.variables.M__ = C.matchBefore, this.variables.T__ = C.matchAfter, this.insertSnippetForSelection(o, C.content), this.variables.M__ = this.variables.T__ = null), !0) : !1;
      }, this.findMatchingSnippet = function(o, d, b) {
        for (var u = o.length; u--; ) {
          var p = o[u];
          if (!(p.startRe && !p.startRe.test(d)) && !(p.endRe && !p.endRe.test(b)) && !(!p.startRe && !p.endRe))
            return p.matchBefore = p.startRe ? p.startRe.exec(d) : [""], p.matchAfter = p.endRe ? p.endRe.exec(b) : [""], p.replaceBefore = p.triggerRe ? p.triggerRe.exec(d)[0] : "", p.replaceAfter = p.endTriggerRe ? p.endTriggerRe.exec(b)[0] : "", p;
        }
      }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function(o, d) {
        var b = this.snippetMap, u = this.snippetNameMap, p = this;
        o || (o = []);
        function h(_) {
          return _ && !/^\^?\(.*\)\$?$|^\\b$/.test(_) && (_ = "(?:" + _ + ")"), _ || "";
        }
        function v(_, A, R) {
          return _ = h(_), A = h(A), R ? (_ = A + _, _ && _[_.length - 1] != "$" && (_ = _ + "$")) : (_ = _ + A, _ && _[0] != "^" && (_ = "^" + _)), new RegExp(_);
        }
        function C(_) {
          _.scope || (_.scope = d || "_"), d = _.scope, b[d] || (b[d] = [], u[d] = {});
          var A = u[d];
          if (_.name) {
            var R = A[_.name];
            R && p.unregister(R), A[_.name] = _;
          }
          b[d].push(_), _.prefix && (_.tabTrigger = _.prefix), !_.content && _.body && (_.content = Array.isArray(_.body) ? _.body.join(`
`) : _.body), _.tabTrigger && !_.trigger && (!_.guard && /^\w/.test(_.tabTrigger) && (_.guard = "\\b"), _.trigger = a.escapeRegExp(_.tabTrigger)), !(!_.trigger && !_.guard && !_.endTrigger && !_.endGuard) && (_.startRe = v(_.trigger, _.guard, !0), _.triggerRe = new RegExp(_.trigger), _.endRe = v(_.endTrigger, _.endGuard, !0), _.endTriggerRe = new RegExp(_.endTrigger));
        }
        Array.isArray(o) ? o.forEach(C) : Object.keys(o).forEach(function(_) {
          C(o[_]);
        }), this._signal("registerSnippets", { scope: d });
      }, this.unregister = function(o, d) {
        var b = this.snippetMap, u = this.snippetNameMap;
        function p(h) {
          var v = u[h.scope || d];
          if (v && v[h.name]) {
            delete v[h.name];
            var C = b[h.scope || d], _ = C && C.indexOf(h);
            _ >= 0 && C.splice(_, 1);
          }
        }
        o.content ? p(o) : Array.isArray(o) && o.forEach(p);
      }, this.parseSnippetFile = function(o) {
        o = o.replace(/\r/g, "");
        for (var d = [], b = {}, u = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm, p; p = u.exec(o); ) {
          if (p[1])
            try {
              b = JSON.parse(p[1]), d.push(b);
            } catch {
            }
          if (p[4])
            b.content = p[4].replace(/^\t/gm, ""), d.push(b), b = {};
          else {
            var h = p[2], v = p[3];
            if (h == "regex") {
              var C = /\/((?:[^\/\\]|\\.)*)|$/g;
              b.guard = C.exec(v)[1], b.trigger = C.exec(v)[1], b.endTrigger = C.exec(v)[1], b.endGuard = C.exec(v)[1];
            } else
              h == "snippet" ? (b.tabTrigger = v.match(/^\S*/)[0], b.name || (b.name = v)) : h && (b[h] = v);
          }
        }
        return d;
      }, this.getSnippetByName = function(o, d) {
        var b = this.snippetNameMap, u;
        return this.getActiveScopes(d).some(function(p) {
          var h = b[p];
          return h && (u = h[o]), !!u;
        }, this), u;
      };
    }).call(c.prototype);
    var g = function(o) {
      if (o.tabstopManager)
        return o.tabstopManager;
      o.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = a.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this.attach(o);
    };
    (function() {
      this.attach = function(o) {
        this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = o, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
      }, this.detach = function() {
        this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null;
      }, this.onChange = function(o) {
        for (var d = o.action[0] == "r", b = this.selectedTabstop || {}, u = b.parents || {}, p = (this.tabstops || []).slice(), h = 0; h < p.length; h++) {
          var v = p[h], C = v == b || u[v.index];
          if (v.rangeList.$bias = C ? 0 : 1, o.action == "remove" && v !== b) {
            var _ = v.parents && v.parents[b.index], A = v.rangeList.pointIndex(o.start, _);
            A = A < 0 ? -A - 1 : A + 1;
            var R = v.rangeList.pointIndex(o.end, _);
            R = R < 0 ? -R - 1 : R - 1;
            for (var T = v.rangeList.ranges.slice(A, R), E = 0; E < T.length; E++)
              this.removeRange(T[E]);
          }
          v.rangeList.$onChange(o);
        }
        var M = this.editor.session;
        !this.$inChange && d && M.getLength() == 1 && !M.getValue() && this.detach();
      }, this.updateLinkedFields = function() {
        var o = this.selectedTabstop;
        if (!(!o || !o.hasLinkedRanges || !o.firstNonLinked)) {
          this.$inChange = !0;
          for (var d = this.editor.session, b = d.getTextRange(o.firstNonLinked), u = 0; u < o.length; u++) {
            var p = o[u];
            if (!!p.linked) {
              var h = p.original, v = $.snippetManager.tmStrFormat(b, h, this.editor);
              d.replace(p, v);
            }
          }
          this.$inChange = !1;
        }
      }, this.onAfterExec = function(o) {
        o.command && !o.command.readOnly && this.updateLinkedFields();
      }, this.onChangeSelection = function() {
        if (!!this.editor) {
          for (var o = this.editor.selection.lead, d = this.editor.selection.anchor, b = this.editor.selection.isEmpty(), u = 0; u < this.ranges.length; u++)
            if (!this.ranges[u].linked) {
              var p = this.ranges[u].contains(o.row, o.column), h = b || this.ranges[u].contains(d.row, d.column);
              if (p && h)
                return;
            }
          this.detach();
        }
      }, this.onChangeSession = function() {
        this.detach();
      }, this.tabNext = function(o) {
        var d = this.tabstops.length, b = this.index + (o || 1);
        b = Math.min(Math.max(b, 1), d), b == d && (b = 0), this.selectTabstop(b), b === 0 && this.detach();
      }, this.selectTabstop = function(o) {
        this.$openTabstops = null;
        var d = this.tabstops[this.index];
        if (d && this.addTabstopMarkers(d), this.index = o, d = this.tabstops[this.index], !(!d || !d.length)) {
          this.selectedTabstop = d;
          var b = d.firstNonLinked || d;
          if (d.choices && (b.cursor = b.start), this.editor.inVirtualSelectionMode)
            this.editor.selection.fromOrientedRange(b);
          else {
            var u = this.editor.multiSelect;
            u.toSingleRange(b);
            for (var p = 0; p < d.length; p++)
              d.hasLinkedRanges && d[p].linked || u.addRange(d[p].clone(), !0);
          }
          this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler), this.selectedTabstop && this.selectedTabstop.choices && this.editor.execCommand("startAutocomplete", { matches: this.selectedTabstop.choices });
        }
      }, this.addTabstops = function(o, d, b) {
        var u = this.useLink || !this.editor.getOption("enableMultiselect");
        if (this.$openTabstops || (this.$openTabstops = []), !o[0]) {
          var p = l.fromPoints(b, b);
          y(p.start, d), y(p.end, d), o[0] = [p], o[0].index = 0;
        }
        var h = this.index, v = [h + 1, 0], C = this.ranges;
        o.forEach(function(_, A) {
          for (var R = this.$openTabstops[A] || _, T = 0; T < _.length; T++) {
            var E = _[T], M = l.fromPoints(E.start, E.end || E.start);
            m(M.start, d), m(M.end, d), M.original = E, M.tabstop = R, C.push(M), R != _ ? R.unshift(M) : R[T] = M, E.fmtString || R.firstNonLinked && u ? (M.linked = !0, R.hasLinkedRanges = !0) : R.firstNonLinked || (R.firstNonLinked = M);
          }
          R.firstNonLinked || (R.hasLinkedRanges = !1), R === _ && (v.push(R), this.$openTabstops[A] = R), this.addTabstopMarkers(R), R.rangeList = R.rangeList || new t(), R.rangeList.$bias = 0, R.rangeList.addList(R);
        }, this), v.length > 2 && (this.tabstops.length && v.push(v.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, v));
      }, this.addTabstopMarkers = function(o) {
        var d = this.editor.session;
        o.forEach(function(b) {
          b.markerId || (b.markerId = d.addMarker(b, "ace_snippet-marker", "text"));
        });
      }, this.removeTabstopMarkers = function(o) {
        var d = this.editor.session;
        o.forEach(function(b) {
          d.removeMarker(b.markerId), b.markerId = null;
        });
      }, this.removeRange = function(o) {
        var d = o.tabstop.indexOf(o);
        d != -1 && o.tabstop.splice(d, 1), d = this.ranges.indexOf(o), d != -1 && this.ranges.splice(d, 1), d = o.tabstop.rangeList.ranges.indexOf(o), d != -1 && o.tabstop.splice(d, 1), this.editor.session.removeMarker(o.markerId), o.tabstop.length || (d = this.tabstops.indexOf(o.tabstop), d != -1 && this.tabstops.splice(d, 1), this.tabstops.length || this.detach());
      }, this.keyboardHandler = new e(), this.keyboardHandler.bindKeys({
        Tab: function(o) {
          $.snippetManager && $.snippetManager.expandWithTab(o) || (o.tabstopManager.tabNext(1), o.renderer.scrollCursorIntoView());
        },
        "Shift-Tab": function(o) {
          o.tabstopManager.tabNext(-1), o.renderer.scrollCursorIntoView();
        },
        Esc: function(o) {
          o.tabstopManager.detach();
        }
      });
    }).call(g.prototype);
    var m = function(o, d) {
      o.row == 0 && (o.column += d.column), o.row += d.row;
    }, y = function(o, d) {
      o.row == d.row && (o.column -= d.column), o.row -= d.row;
    };
    S.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`, "snippets.css", !1), $.snippetManager = new c();
    var x = w("./editor").Editor;
    (function() {
      this.insertSnippet = function(o, d) {
        return $.snippetManager.insertSnippet(this, o, d);
      }, this.expandSnippet = function(o) {
        return $.snippetManager.expandWithTab(this, o);
      };
    }).call(x.prototype);
  }), ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], function(w, $, L) {
    var S = w("../virtual_renderer").VirtualRenderer, k = w("../editor").Editor, f = w("../range").Range, a = w("../lib/event"), l = w("../lib/lang"), t = w("../lib/dom"), e = function(r) {
      var i = new S(r);
      i.$maxLines = 4;
      var s = new k(i);
      return s.setHighlightActiveLine(!1), s.setShowPrintMargin(!1), s.renderer.setShowGutter(!1), s.renderer.setHighlightGutterLine(!1), s.$mouseHandler.$focusTimeout = 0, s.$highlightTagPending = !0, s;
    }, n = function(r) {
      var i = t.createElement("div"), s = new e(i);
      r && r.appendChild(i), i.style.display = "none", s.renderer.content.style.cursor = "default", s.renderer.setStyle("ace_autocomplete"), s.setOption("displayIndentGuides", !1), s.setOption("dragDelay", 150);
      var c = function() {
      };
      s.focus = c, s.$isFocused = !0, s.renderer.$cursorLayer.restartTimer = c, s.renderer.$cursorLayer.element.style.opacity = 0, s.renderer.$maxLines = 8, s.renderer.$keepTextAreaAtCursor = !1, s.setHighlightActiveLine(!1), s.session.highlight(""), s.session.$searchHighlight.clazz = "ace_highlight-marker", s.on("mousedown", function(b) {
        var u = b.getDocumentPosition();
        s.selection.moveToPosition(u), y.start.row = y.end.row = u.row, b.stop();
      });
      var g, m = new f(-1, 0, -1, 1 / 0), y = new f(-1, 0, -1, 1 / 0);
      y.id = s.session.addMarker(y, "ace_active-line", "fullLine"), s.setSelectOnHover = function(b) {
        b ? m.id && (s.session.removeMarker(m.id), m.id = null) : m.id = s.session.addMarker(m, "ace_line-hover", "fullLine");
      }, s.setSelectOnHover(!1), s.on("mousemove", function(b) {
        if (!g) {
          g = b;
          return;
        }
        if (!(g.x == b.x && g.y == b.y)) {
          g = b, g.scrollTop = s.renderer.scrollTop;
          var u = g.getDocumentPosition().row;
          m.start.row != u && (m.id || s.setRow(u), o(u));
        }
      }), s.renderer.on("beforeRender", function() {
        if (g && m.start.row != -1) {
          g.$pos = null;
          var b = g.getDocumentPosition().row;
          m.id || s.setRow(b), o(b, !0);
        }
      }), s.renderer.on("afterRender", function() {
        var b = s.getRow(), u = s.renderer.$textLayer, p = u.element.childNodes[b - u.config.firstRow];
        p !== u.selectedNode && u.selectedNode && t.removeCssClass(u.selectedNode, "ace_selected"), u.selectedNode = p, p && t.addCssClass(p, "ace_selected");
      });
      var x = function() {
        o(-1);
      }, o = function(b, u) {
        b !== m.start.row && (m.start.row = m.end.row = b, u || s.session._emit("changeBackMarker"), s._emit("changeHoverMarker"));
      };
      s.getHoveredRow = function() {
        return m.start.row;
      }, a.addListener(s.container, "mouseout", x), s.on("hide", x), s.on("changeSelection", x), s.session.doc.getLength = function() {
        return s.data.length;
      }, s.session.doc.getLine = function(b) {
        var u = s.data[b];
        return typeof u == "string" ? u : u && u.value || "";
      };
      var d = s.session.bgTokenizer;
      return d.$tokenizeRow = function(b) {
        var u = s.data[b], p = [];
        if (!u)
          return p;
        typeof u == "string" && (u = { value: u });
        var h = u.caption || u.value || u.name;
        function v(O, B) {
          O && p.push({
            type: (u.className || "") + (B || ""),
            value: O
          });
        }
        for (var C = h.toLowerCase(), _ = (s.filterText || "").toLowerCase(), A = 0, R = 0, T = 0; T <= _.length; T++)
          if (T != R && (u.matchMask & 1 << T || T == _.length)) {
            var E = _.slice(R, T);
            R = T;
            var M = C.indexOf(E, A);
            if (M == -1)
              continue;
            v(h.slice(A, M), ""), A = M + E.length, v(h.slice(M, A), "completion-highlight");
          }
        return v(h.slice(A, h.length), ""), u.meta && p.push({ type: "completion-meta", value: u.meta }), u.message && p.push({ type: "completion-message", value: u.message }), p;
      }, d.$updateOnChange = c, d.start = c, s.session.$computeWidth = function() {
        return this.screenWidth = 0;
      }, s.isOpen = !1, s.isTopdown = !1, s.autoSelect = !0, s.filterText = "", s.data = [], s.setData = function(b, u) {
        s.filterText = u || "", s.setValue(l.stringRepeat(`
`, b.length), -1), s.data = b || [], s.setRow(0);
      }, s.getData = function(b) {
        return s.data[b];
      }, s.getRow = function() {
        return y.start.row;
      }, s.setRow = function(b) {
        b = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length, b)), y.start.row != b && (s.selection.clearSelection(), y.start.row = y.end.row = b || 0, s.session._emit("changeBackMarker"), s.moveCursorTo(b || 0, 0), s.isOpen && s._signal("select"));
      }, s.on("changeSelection", function() {
        s.isOpen && s.setRow(s.selection.lead.row), s.renderer.scrollCursorIntoView();
      }), s.hide = function() {
        this.container.style.display = "none", this._signal("hide"), s.isOpen = !1;
      }, s.show = function(b, u, p) {
        var h = this.container, v = window.innerHeight, C = window.innerWidth, _ = this.renderer, A = _.$maxLines * u * 1.4, R = b.top + this.$borderSize, T = R > v / 2 && !p;
        T && R + u + A > v ? (_.$maxPixelHeight = R - 2 * this.$borderSize, h.style.top = "", h.style.bottom = v - R + "px", s.isTopdown = !1) : (R += u, _.$maxPixelHeight = v - R - 0.2 * u, h.style.top = R + "px", h.style.bottom = "", s.isTopdown = !0), h.style.display = "";
        var E = b.left;
        E + h.offsetWidth > C && (E = C - h.offsetWidth), h.style.left = E + "px", this._signal("show"), g = null, s.isOpen = !0;
      }, s.goTo = function(b) {
        var u = this.getRow(), p = this.session.getLength() - 1;
        switch (b) {
          case "up":
            u = u <= 0 ? p : u - 1;
            break;
          case "down":
            u = u >= p ? -1 : u + 1;
            break;
          case "start":
            u = 0;
            break;
          case "end":
            u = p;
            break;
        }
        this.setRow(u);
      }, s.getTextLeftOffset = function() {
        return this.$borderSize + this.renderer.$padding + this.$imageSize;
      }, s.$imageSize = 0, s.$borderSize = 1, s;
    };
    t.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin: 0.9em;
}
.ace_completion-message {
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}`, "autocompletion.css", !1), $.AcePopup = n, $.$singleLineEditor = e;
  }), ace.define("ace/autocomplete/util", ["require", "exports", "module"], function(w, $, L) {
    $.parForEach = function(k, f, a) {
      var l = 0, t = k.length;
      t === 0 && a();
      for (var e = 0; e < t; e++)
        f(k[e], function(n, r) {
          l++, l === t && a(n, r);
        });
    };
    var S = /[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;
    $.retrievePrecedingIdentifier = function(k, f, a) {
      a = a || S;
      for (var l = [], t = f - 1; t >= 0 && a.test(k[t]); t--)
        l.push(k[t]);
      return l.reverse().join("");
    }, $.retrieveFollowingIdentifier = function(k, f, a) {
      a = a || S;
      for (var l = [], t = f; t < k.length && a.test(k[t]); t++)
        l.push(k[t]);
      return l;
    }, $.getCompletionPrefix = function(k) {
      var f = k.getCursorPosition(), a = k.session.getLine(f.row), l;
      return k.completers.forEach(function(t) {
        t.identifierRegexps && t.identifierRegexps.forEach(function(e) {
          !l && e && (l = this.retrievePrecedingIdentifier(a, f.column, e));
        }.bind(this));
      }.bind(this)), l || this.retrievePrecedingIdentifier(a, f.column);
    };
  }), ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/lang", "ace/lib/dom", "ace/snippets", "ace/config"], function(w, $, L) {
    var S = w("./keyboard/hash_handler").HashHandler, k = w("./autocomplete/popup").AcePopup, f = w("./autocomplete/util"), a = w("./lib/lang"), l = w("./lib/dom"), t = w("./snippets").snippetManager, e = w("./config"), n = function() {
      this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new S(), this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = a.delayedCall(function() {
        this.updateCompletions(!0);
      }.bind(this)), this.tooltipTimer = a.delayedCall(this.updateDocTooltip.bind(this), 50);
    };
    (function() {
      this.$init = function() {
        return this.popup = new k(document.body || document.documentElement), this.popup.on("click", function(i) {
          this.insertMatch(), i.stop();
        }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup;
      }, this.getPopup = function() {
        return this.popup || this.$init();
      }, this.openPopup = function(i, s, c) {
        this.popup || this.$init(), this.popup.autoSelect = this.autoSelect, this.popup.setData(this.completions.filtered, this.completions.filterText), i.keyBinding.addKeyboardHandler(this.keyboardHandler);
        var g = i.renderer;
        if (this.popup.setRow(this.autoSelect ? 0 : -1), c)
          c && !s && this.detach();
        else {
          this.popup.setTheme(i.getTheme()), this.popup.setFontSize(i.getFontSize());
          var m = g.layerConfig.lineHeight, y = g.$cursorLayer.getPixelPosition(this.base, !0);
          y.left -= this.popup.getTextLeftOffset();
          var x = i.container.getBoundingClientRect();
          y.top += x.top - g.layerConfig.offset, y.left += x.left - i.renderer.scrollLeft, y.left += g.gutterWidth, this.popup.show(y, m);
        }
        this.changeTimer.cancel();
      }, this.detach = function() {
        this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null;
      }, this.changeListener = function(i) {
        var s = this.editor.selection.lead;
        (s.row != this.base.row || s.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach();
      }, this.blurListener = function(i) {
        var s = document.activeElement, c = this.editor.textInput.getElement(), g = i.relatedTarget && this.tooltipNode && this.tooltipNode.contains(i.relatedTarget), m = this.popup && this.popup.container;
        s != c && s.parentNode != m && !g && s != this.tooltipNode && i.relatedTarget != c && this.detach();
      }, this.mousedownListener = function(i) {
        this.detach();
      }, this.mousewheelListener = function(i) {
        this.detach();
      }, this.goTo = function(i) {
        this.popup.goTo(i);
      }, this.insertMatch = function(i, s) {
        if (i || (i = this.popup.getData(this.popup.getRow())), !i)
          return !1;
        var c = this.completions;
        if (this.editor.startOperation({ command: { name: "insertMatch" } }), i.completer && i.completer.insertMatch)
          i.completer.insertMatch(this.editor, i);
        else {
          if (!c)
            return !1;
          if (c.filterText)
            for (var g = this.editor.selection.getAllRanges(), m = 0, y; y = g[m]; m++)
              y.start.column -= c.filterText.length, this.editor.session.remove(y);
          i.snippet ? t.insertSnippet(this.editor, i.snippet) : this.editor.execCommand("insertstring", i.value || i);
        }
        this.completions == c && this.detach(), this.editor.endOperation();
      }, this.commands = {
        Up: function(i) {
          i.completer.goTo("up");
        },
        Down: function(i) {
          i.completer.goTo("down");
        },
        "Ctrl-Up|Ctrl-Home": function(i) {
          i.completer.goTo("start");
        },
        "Ctrl-Down|Ctrl-End": function(i) {
          i.completer.goTo("end");
        },
        Esc: function(i) {
          i.completer.detach();
        },
        Return: function(i) {
          return i.completer.insertMatch();
        },
        "Shift-Return": function(i) {
          i.completer.insertMatch(null, { deleteSuffix: !0 });
        },
        Tab: function(i) {
          var s = i.completer.insertMatch();
          if (!s && !i.tabstopManager)
            i.completer.goTo("down");
          else
            return s;
        },
        PageUp: function(i) {
          i.completer.popup.gotoPageUp();
        },
        PageDown: function(i) {
          i.completer.popup.gotoPageDown();
        }
      }, this.gatherCompletions = function(i, s) {
        var c = i.getSession(), g = i.getCursorPosition(), m = f.getCompletionPrefix(i);
        this.base = c.doc.createAnchor(g.row, g.column - m.length), this.base.$insertRight = !0;
        var y = [], x = i.completers.length;
        return i.completers.forEach(function(o, d) {
          o.getCompletions(i, c, g, m, function(b, u) {
            !b && u && (y = y.concat(u)), s(null, {
              prefix: f.getCompletionPrefix(i),
              matches: y,
              finished: --x === 0
            });
          });
        }), !0;
      }, this.showPopup = function(i, s) {
        this.editor && this.detach(), this.activated = !0, this.editor = i, i.completer != this && (i.completer && i.completer.detach(), i.completer = this), i.on("changeSelection", this.changeListener), i.on("blur", this.blurListener), i.on("mousedown", this.mousedownListener), i.on("mousewheel", this.mousewheelListener), this.updateCompletions(!1, s);
      }, this.updateCompletions = function(i, s) {
        if (i && this.base && this.completions) {
          var c = this.editor.getCursorPosition(), g = this.editor.session.getTextRange({ start: this.base, end: c });
          if (g == this.completions.filterText)
            return;
          if (this.completions.setFilter(g), !this.completions.filtered.length)
            return this.detach();
          if (this.completions.filtered.length == 1 && this.completions.filtered[0].value == g && !this.completions.filtered[0].snippet)
            return this.detach();
          this.openPopup(this.editor, g, i);
          return;
        }
        if (s && s.matches) {
          var c = this.editor.getSelectionRange().start;
          return this.base = this.editor.session.doc.createAnchor(c.row, c.column), this.base.$insertRight = !0, this.completions = new r(s.matches), this.openPopup(this.editor, "", i);
        }
        var m = this.gatherCompletionsId, y = function(u) {
          if (!!u.finished)
            return this.detach();
        }.bind(this), x = function(u) {
          var p = u.prefix, h = u.matches;
          this.completions = new r(h), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(p);
          var v = this.completions.filtered;
          if (!v.length || v.length == 1 && v[0].value == p && !v[0].snippet)
            return y(u);
          if (this.autoInsert && v.length == 1 && u.finished)
            return this.insertMatch(v[0]);
          this.openPopup(this.editor, p, i);
        }.bind(this), o = !0, d = null;
        if (this.gatherCompletions(this.editor, function(u, p) {
          var h = p.prefix, v = p && p.matches;
          if (!v || !v.length)
            return y(p);
          if (!(h.indexOf(p.prefix) !== 0 || m != this.gatherCompletionsId)) {
            if (o) {
              d = p;
              return;
            }
            x(p);
          }
        }.bind(this)), o = !1, d) {
          var b = d;
          d = null, x(b);
        }
      }, this.cancelContextMenu = function() {
        this.editor.$mouseHandler.cancelContextMenu();
      }, this.updateDocTooltip = function() {
        var i = this.popup, s = i.data, c = s && (s[i.getHoveredRow()] || s[i.getRow()]), g = null;
        if (!c || !this.editor || !this.popup.isOpen)
          return this.hideDocTooltip();
        if (this.editor.completers.some(function(m) {
          return m.getDocTooltip && (g = m.getDocTooltip(c)), g;
        }), !g && typeof c != "string" && (g = c), typeof g == "string" && (g = { docText: g }), !g || !(g.docHTML || g.docText))
          return this.hideDocTooltip();
        this.showDocTooltip(g);
      }, this.showDocTooltip = function(i) {
        this.tooltipNode || (this.tooltipNode = l.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this), this.tooltipNode.onclick = this.onTooltipClick.bind(this));
        var s = this.tooltipNode;
        i.docHTML ? s.innerHTML = i.docHTML : i.docText && (s.textContent = i.docText), s.parentNode || document.body.appendChild(s);
        var c = this.popup, g = c.container.getBoundingClientRect();
        s.style.top = c.container.style.top, s.style.bottom = c.container.style.bottom, s.style.display = "block", window.innerWidth - g.right < 320 ? g.left < 320 ? c.isTopdown ? (s.style.top = g.bottom + "px", s.style.left = g.left + "px", s.style.right = "", s.style.bottom = "") : (s.style.top = c.container.offsetTop - s.offsetHeight + "px", s.style.left = g.left + "px", s.style.right = "", s.style.bottom = "") : (s.style.right = window.innerWidth - g.left + "px", s.style.left = "") : (s.style.left = g.right + 1 + "px", s.style.right = "");
      }, this.hideDocTooltip = function() {
        if (this.tooltipTimer.cancel(), !!this.tooltipNode) {
          var i = this.tooltipNode;
          !this.editor.isFocused() && document.activeElement == i && this.editor.focus(), this.tooltipNode = null, i.parentNode && i.parentNode.removeChild(i);
        }
      }, this.onTooltipClick = function(i) {
        for (var s = i.target; s && s != this.tooltipNode; ) {
          if (s.nodeName == "A" && s.href) {
            s.rel = "noreferrer", s.target = "_blank";
            break;
          }
          s = s.parentNode;
        }
      }, this.destroy = function() {
        if (this.detach(), this.popup) {
          this.popup.destroy();
          var i = this.popup.container;
          i && i.parentNode && i.parentNode.removeChild(i);
        }
        this.editor && this.editor.completer == this && this.editor.completer == null, this.popup = null;
      };
    }).call(n.prototype), n.for = function(i) {
      return i.completer || (e.get("sharedPopups") ? (n.$shared || (n.$sharedInstance = new n()), i.completer = n.$sharedInstance) : (i.completer = new n(), i.once("destroy", function(s, c) {
        c.completer.destroy();
      }))), i.completer;
    }, n.startCommand = {
      name: "startAutocomplete",
      exec: function(i, s) {
        var c = n.for(i);
        c.autoInsert = !1, c.autoSelect = !0, c.showPopup(i, s), c.cancelContextMenu();
      },
      bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
    };
    var r = function(i, s) {
      this.all = i, this.filtered = i, this.filterText = s || "", this.exactMatch = !1;
    };
    (function() {
      this.setFilter = function(i) {
        if (i.length > this.filterText && i.lastIndexOf(this.filterText, 0) === 0)
          var s = this.filtered;
        else
          var s = this.all;
        this.filterText = i, s = this.filterCompletions(s, this.filterText), s = s.sort(function(g, m) {
          return m.exactMatch - g.exactMatch || m.$score - g.$score || (g.caption || g.value).localeCompare(m.caption || m.value);
        });
        var c = null;
        s = s.filter(function(g) {
          var m = g.snippet || g.caption || g.value;
          return m === c ? !1 : (c = m, !0);
        }), this.filtered = s;
      }, this.filterCompletions = function(i, s) {
        var c = [], g = s.toUpperCase(), m = s.toLowerCase();
        e:
          for (var y = 0, x; x = i[y]; y++) {
            var o = x.caption || x.value || x.snippet;
            if (!!o) {
              var d = -1, b = 0, u = 0, p, h;
              if (this.exactMatch) {
                if (s !== o.substr(0, s.length))
                  continue e;
              } else {
                var v = o.toLowerCase().indexOf(m);
                if (v > -1)
                  u = v;
                else
                  for (var C = 0; C < s.length; C++) {
                    var _ = o.indexOf(m[C], d + 1), A = o.indexOf(g[C], d + 1);
                    if (p = _ >= 0 && (A < 0 || _ < A) ? _ : A, p < 0)
                      continue e;
                    h = p - d - 1, h > 0 && (d === -1 && (u += 10), u += h, b = b | 1 << C), d = p;
                  }
              }
              x.matchMask = b, x.exactMatch = u ? 0 : 1, x.$score = (x.score || 0) - u, c.push(x);
            }
          }
        return c;
      };
    }).call(r.prototype), $.Autocomplete = n, $.FilteredList = r;
  }), ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("../range").Range, k = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
    function f(l, t) {
      var e = l.getTextRange(S.fromPoints({ row: 0, column: 0 }, t));
      return e.split(k).length - 1;
    }
    function a(l, t) {
      var e = f(l, t), n = l.getValue().split(k), r = /* @__PURE__ */ Object.create(null), i = n[e];
      return n.forEach(function(s, c) {
        if (!(!s || s === i)) {
          var g = Math.abs(e - c), m = n.length - g;
          r[s] ? r[s] = Math.max(m, r[s]) : r[s] = m;
        }
      }), r;
    }
    $.getCompletions = function(l, t, e, n, r) {
      var i = a(t, e), s = Object.keys(i);
      r(null, s.map(function(c) {
        return {
          caption: c,
          value: c,
          score: i[c],
          meta: "local"
        };
      }));
    };
  }), ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], function(w, $, L) {
    var S = w("../snippets").snippetManager, k = w("../autocomplete").Autocomplete, f = w("../config"), a = w("../lib/lang"), l = w("../autocomplete/util"), t = w("../autocomplete/text_completer"), e = {
      getCompletions: function(o, d, b, u, p) {
        if (d.$mode.completer)
          return d.$mode.completer.getCompletions(o, d, b, u, p);
        var h = o.session.getState(b.row), v = d.$mode.getCompletions(h, d, b, u);
        p(null, v);
      }
    }, n = function(o) {
      var d = {};
      return o.replace(/\${(\d+)(:(.*?))?}/g, function(b, u, p, h) {
        return d[u] = h || "";
      }).replace(/\$(\d+?)/g, function(b, u) {
        return d[u];
      });
    }, r = {
      getCompletions: function(o, d, b, u, p) {
        var h = [], v = d.getTokenAt(b.row, b.column);
        v && v.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/) ? h.push("html-tag") : h = S.getActiveScopes(o);
        var C = S.snippetMap, _ = [];
        h.forEach(function(A) {
          for (var R = C[A] || [], T = R.length; T--; ) {
            var E = R[T], M = E.name || E.tabTrigger;
            !M || _.push({
              caption: M,
              snippet: E.content,
              meta: E.tabTrigger && !E.name ? E.tabTrigger + "\u21E5 " : "snippet",
              type: "snippet"
            });
          }
        }, this), p(null, _);
      },
      getDocTooltip: function(o) {
        o.type == "snippet" && !o.docHTML && (o.docHTML = [
          "<b>",
          a.escapeHTML(o.caption),
          "</b>",
          "<hr></hr>",
          a.escapeHTML(n(o.snippet))
        ].join(""));
      }
    }, i = [r, t, e];
    $.setCompleters = function(o) {
      i.length = 0, o && i.push.apply(i, o);
    }, $.addCompleter = function(o) {
      i.push(o);
    }, $.textCompleter = t, $.keyWordCompleter = e, $.snippetCompleter = r;
    var s = {
      name: "expandSnippet",
      exec: function(o) {
        return S.expandWithTab(o);
      },
      bindKey: "Tab"
    }, c = function(o, d) {
      g(d.session.$mode);
    }, g = function(o) {
      typeof o == "string" && (o = f.$modes[o]), o && (S.files || (S.files = {}), m(o.$id, o.snippetFileId), o.modes && o.modes.forEach(g));
    }, m = function(o, d) {
      !d || !o || S.files[o] || (S.files[o] = {}, f.loadModule(d, function(b) {
        !b || (S.files[o] = b, !b.snippets && b.snippetText && (b.snippets = S.parseSnippetFile(b.snippetText)), S.register(b.snippets || [], b.scope), b.includeScopes && (S.snippetMap[b.scope].includeScopes = b.includeScopes, b.includeScopes.forEach(function(u) {
          g("ace/mode/" + u);
        })));
      }));
    }, y = function(o) {
      var d = o.editor, b = d.completer && d.completer.activated;
      if (o.command.name === "backspace")
        b && !l.getCompletionPrefix(d) && d.completer.detach();
      else if (o.command.name === "insertstring") {
        var u = l.getCompletionPrefix(d);
        if (u && !b) {
          var p = k.for(d);
          p.autoInsert = !1, p.showPopup(d);
        }
      }
    }, x = w("../editor").Editor;
    w("../config").defineOptions(x.prototype, "editor", {
      enableBasicAutocompletion: {
        set: function(o) {
          o ? (this.completers || (this.completers = Array.isArray(o) ? o : i), this.commands.addCommand(k.startCommand)) : this.commands.removeCommand(k.startCommand);
        },
        value: !1
      },
      enableLiveAutocompletion: {
        set: function(o) {
          o ? (this.completers || (this.completers = Array.isArray(o) ? o : i), this.commands.on("afterExec", y)) : this.commands.removeListener("afterExec", y);
        },
        value: !1
      },
      enableSnippets: {
        set: function(o) {
          o ? (this.commands.addCommand(s), this.on("changeMode", c), c(null, this)) : (this.commands.removeCommand(s), this.off("changeMode", c));
        },
        value: !1
      }
    });
  }), function() {
    ace.require(["ace/ext/language_tools"], function(w) {
      F && (F.exports = w);
    });
  }();
})(Ln);
var En = { exports: {} };
(function(F, N) {
  ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text_highlight_rules").TextHighlightRules, f = function() {
      this.$rules = {
        start: [
          {
            token: "comment.doc.tag",
            regex: "@[\\w\\d_]+"
          },
          f.getTagRule(),
          {
            defaultToken: "comment.doc",
            caseInsensitive: !0
          }
        ]
      };
    };
    S.inherits(f, k), f.getTagRule = function(a) {
      return {
        token: "comment.doc.tag.storage.type",
        regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
      };
    }, f.getStartRule = function(a) {
      return {
        token: "comment.doc",
        regex: "\\/\\*(?=\\*)",
        next: a
      };
    }, f.getEndRule = function(a) {
      return {
        token: "comment.doc",
        regex: "\\*\\/",
        next: a
      };
    }, $.DocCommentHighlightRules = f;
  }), ace.define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./doc_comment_highlight_rules").DocCommentHighlightRules, f = w("./text_highlight_rules").TextHighlightRules, a = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*", l = function(n) {
      var r = this.createKeywordMapper({
        "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
        keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type": "const|let|var|function",
        "constant.language": "null|Infinity|NaN|undefined",
        "support.function": "alert",
        "constant.language.boolean": "true|false"
      }, "identifier"), i = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", s = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
      this.$rules = {
        no_regex: [
          k.getStartRule("doc-start"),
          e("no_regex"),
          {
            token: "string",
            regex: "'(?=.)",
            next: "qstring"
          },
          {
            token: "string",
            regex: '"(?=.)',
            next: "qqstring"
          },
          {
            token: "constant.numeric",
            regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
          },
          {
            token: "constant.numeric",
            regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "support.function",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator"
            ],
            regex: "(" + a + ")(\\.)(prototype)(\\.)(" + a + ")(\\s*)(=)",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(function)(\\s+)(" + a + ")(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "entity.name.function",
              "text",
              "punctuation.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "text",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(:)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: "keyword",
            regex: `from(?=\\s*('|"))`
          },
          {
            token: "keyword",
            regex: "(?:" + i + ")\\b",
            next: "start"
          },
          {
            token: ["support.constant"],
            regex: /that\b/
          },
          {
            token: ["storage.type", "punctuation.operator", "support.function.firebug"],
            regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
          },
          {
            token: r,
            regex: a
          },
          {
            token: "punctuation.operator",
            regex: /[.](?![.])/,
            next: "property"
          },
          {
            token: "storage.type",
            regex: /=>/,
            next: "start"
          },
          {
            token: "keyword.operator",
            regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
            next: "start"
          },
          {
            token: "punctuation.operator",
            regex: /[?:,;.]/,
            next: "start"
          },
          {
            token: "paren.lparen",
            regex: /[\[({]/,
            next: "start"
          },
          {
            token: "paren.rparen",
            regex: /[\])}]/
          },
          {
            token: "comment",
            regex: /^#!.*$/
          }
        ],
        property: [
          {
            token: "text",
            regex: "\\s+"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: "punctuation.operator",
            regex: /[.](?![.])/
          },
          {
            token: "support.function",
            regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
          },
          {
            token: "support.function.dom",
            regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
          },
          {
            token: "support.constant",
            regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
          },
          {
            token: "identifier",
            regex: a
          },
          {
            regex: "",
            token: "empty",
            next: "no_regex"
          }
        ],
        start: [
          k.getStartRule("doc-start"),
          e("start"),
          {
            token: "string.regexp",
            regex: "\\/",
            next: "regex"
          },
          {
            token: "text",
            regex: "\\s+|^$",
            next: "start"
          },
          {
            token: "empty",
            regex: "",
            next: "no_regex"
          }
        ],
        regex: [
          {
            token: "regexp.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            token: "string.regexp",
            regex: "/[sxngimy]*",
            next: "no_regex"
          },
          {
            token: "invalid",
            regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
          },
          {
            token: "constant.language.escape",
            regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
          },
          {
            token: "constant.language.delimiter",
            regex: /\|/
          },
          {
            token: "constant.language.escape",
            regex: /\[\^?/,
            next: "regex_character_class"
          },
          {
            token: "empty",
            regex: "$",
            next: "no_regex"
          },
          {
            defaultToken: "string.regexp"
          }
        ],
        regex_character_class: [
          {
            token: "regexp.charclass.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            token: "constant.language.escape",
            regex: "]",
            next: "regex"
          },
          {
            token: "constant.language.escape",
            regex: "-"
          },
          {
            token: "empty",
            regex: "$",
            next: "no_regex"
          },
          {
            defaultToken: "string.regexp.charachterclass"
          }
        ],
        function_arguments: [
          {
            token: "variable.parameter",
            regex: a
          },
          {
            token: "punctuation.operator",
            regex: "[, ]+"
          },
          {
            token: "punctuation.operator",
            regex: "$"
          },
          {
            token: "empty",
            regex: "",
            next: "no_regex"
          }
        ],
        qqstring: [
          {
            token: "constant.language.escape",
            regex: s
          },
          {
            token: "string",
            regex: "\\\\$",
            consumeLineEnd: !0
          },
          {
            token: "string",
            regex: '"|$',
            next: "no_regex"
          },
          {
            defaultToken: "string"
          }
        ],
        qstring: [
          {
            token: "constant.language.escape",
            regex: s
          },
          {
            token: "string",
            regex: "\\\\$",
            consumeLineEnd: !0
          },
          {
            token: "string",
            regex: "'|$",
            next: "no_regex"
          },
          {
            defaultToken: "string"
          }
        ]
      }, (!n || !n.noES6) && (this.$rules.no_regex.unshift({
        regex: "[{}]",
        onMatch: function(c, g, m) {
          if (this.next = c == "{" ? this.nextState : "", c == "{" && m.length)
            m.unshift("start", g);
          else if (c == "}" && m.length && (m.shift(), this.next = m.shift(), this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1))
            return "paren.quasi.end";
          return c == "{" ? "paren.lparen" : "paren.rparen";
        },
        nextState: "start"
      }, {
        token: "string.quasi.start",
        regex: /`/,
        push: [{
          token: "constant.language.escape",
          regex: s
        }, {
          token: "paren.quasi.start",
          regex: /\${/,
          push: "start"
        }, {
          token: "string.quasi.end",
          regex: /`/,
          next: "pop"
        }, {
          defaultToken: "string.quasi"
        }]
      }), (!n || n.jsx != !1) && t.call(this)), this.embedRules(k, "doc-", [k.getEndRule("no_regex")]), this.normalizeRules();
    };
    S.inherits(l, f);
    function t() {
      var n = a.replace("\\d", "\\d\\-"), r = {
        onMatch: function(s, c, g) {
          var m = s.charAt(1) == "/" ? 2 : 1;
          return m == 1 ? (c != this.nextState ? g.unshift(this.next, this.nextState, 0) : g.unshift(this.next), g[2]++) : m == 2 && c == this.nextState && (g[1]--, (!g[1] || g[1] < 0) && (g.shift(), g.shift())), [{
            type: "meta.tag.punctuation." + (m == 1 ? "" : "end-") + "tag-open.xml",
            value: s.slice(0, m)
          }, {
            type: "meta.tag.tag-name.xml",
            value: s.substr(m)
          }];
        },
        regex: "</?" + n,
        next: "jsxAttributes",
        nextState: "jsx"
      };
      this.$rules.start.unshift(r);
      var i = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
      };
      this.$rules.jsx = [
        i,
        r,
        { include: "reference" },
        { defaultToken: "string" }
      ], this.$rules.jsxAttributes = [
        {
          token: "meta.tag.punctuation.tag-close.xml",
          regex: "/?>",
          onMatch: function(s, c, g) {
            return c == g[0] && g.shift(), s.length == 2 && (g[0] == this.nextState && g[1]--, (!g[1] || g[1] < 0) && g.splice(0, 2)), this.next = g[0] || "start", [{ type: this.token, value: s }];
          },
          nextState: "jsx"
        },
        i,
        e("jsxAttributes"),
        {
          token: "entity.other.attribute-name.xml",
          regex: n
        },
        {
          token: "keyword.operator.attribute-equals.xml",
          regex: "="
        },
        {
          token: "text.tag-whitespace.xml",
          regex: "\\s+"
        },
        {
          token: "string.attribute-value.xml",
          regex: "'",
          stateName: "jsx_attr_q",
          push: [
            { token: "string.attribute-value.xml", regex: "'", next: "pop" },
            { include: "reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        },
        {
          token: "string.attribute-value.xml",
          regex: '"',
          stateName: "jsx_attr_qq",
          push: [
            { token: "string.attribute-value.xml", regex: '"', next: "pop" },
            { include: "reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        },
        r
      ], this.$rules.reference = [{
        token: "constant.language.escape.reference.xml",
        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
      }];
    }
    function e(n) {
      return [
        {
          token: "comment",
          regex: /\/\*/,
          next: [
            k.getTagRule(),
            { token: "comment", regex: "\\*\\/", next: n || "pop" },
            { defaultToken: "comment", caseInsensitive: !0 }
          ]
        },
        {
          token: "comment",
          regex: "\\/\\/",
          next: [
            k.getTagRule(),
            { token: "comment", regex: "$|^", next: n || "pop" },
            { defaultToken: "comment", caseInsensitive: !0 }
          ]
        }
      ];
    }
    $.JavaScriptHighlightRules = l;
  }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("../range").Range, k = function() {
    };
    (function() {
      this.checkOutdent = function(f, a) {
        return /^\s+$/.test(f) ? /^\s*\}/.test(a) : !1;
      }, this.autoOutdent = function(f, a) {
        var l = f.getLine(a), t = l.match(/^(\s*\})/);
        if (!t)
          return 0;
        var e = t[1].length, n = f.findMatchingBracket({ row: a, column: e });
        if (!n || n.row == a)
          return 0;
        var r = this.$getIndent(f.getLine(n.row));
        f.replace(new S(a, 0, a, e - 1), r);
      }, this.$getIndent = function(f) {
        return f.match(/^\s*/)[0];
      };
    }).call(k.prototype), $.MatchingBraceOutdent = k;
  }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("../../range").Range, f = w("./fold_mode").FoldMode, a = $.FoldMode = function(l) {
      l && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + l.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + l.end)));
    };
    S.inherits(a, f), function() {
      this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(l, t, e) {
        var n = l.getLine(e);
        if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n))
          return "";
        var r = this._getFoldWidgetBase(l, t, e);
        return !r && this.startRegionRe.test(n) ? "start" : r;
      }, this.getFoldWidgetRange = function(l, t, e, n) {
        var r = l.getLine(e);
        if (this.startRegionRe.test(r))
          return this.getCommentRegionBlock(l, r, e);
        var c = r.match(this.foldingStartMarker);
        if (c) {
          var i = c.index;
          if (c[1])
            return this.openingBracketBlock(l, c[1], e, i);
          var s = l.getCommentFoldRange(e, i + c[0].length, 1);
          return s && !s.isMultiLine() && (n ? s = this.getSectionRange(l, e) : t != "all" && (s = null)), s;
        }
        if (t !== "markbegin") {
          var c = r.match(this.foldingStopMarker);
          if (c) {
            var i = c.index + c[0].length;
            return c[1] ? this.closingBracketBlock(l, c[1], e, i) : l.getCommentFoldRange(e, i, -1);
          }
        }
      }, this.getSectionRange = function(l, t) {
        var e = l.getLine(t), n = e.search(/\S/), r = t, i = e.length;
        t = t + 1;
        for (var s = t, c = l.getLength(); ++t < c; ) {
          e = l.getLine(t);
          var g = e.search(/\S/);
          if (g !== -1) {
            if (n > g)
              break;
            var m = this.getFoldWidgetRange(l, "all", t);
            if (m) {
              if (m.start.row <= r)
                break;
              if (m.isMultiLine())
                t = m.end.row;
              else if (n == g)
                break;
            }
            s = t;
          }
        }
        return new k(r, i, s, l.getLine(s).length);
      }, this.getCommentRegionBlock = function(l, t, e) {
        for (var n = t.search(/\s*$/), r = l.getLength(), i = e, s = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, c = 1; ++e < r; ) {
          t = l.getLine(e);
          var g = s.exec(t);
          if (!!g && (g[1] ? c-- : c++, !c))
            break;
        }
        var m = e;
        if (m > i)
          return new k(i, n, m, t.length);
      };
    }.call(a.prototype);
  }), ace.define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode, f = w("./javascript_highlight_rules").JavaScriptHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, l = w("../worker/worker_client").WorkerClient, t = w("./behaviour/cstyle").CstyleBehaviour, e = w("./folding/cstyle").FoldMode, n = function() {
      this.HighlightRules = f, this.$outdent = new a(), this.$behaviour = new t(), this.foldingRules = new e();
    };
    S.inherits(n, k), function() {
      this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.$quotes = { '"': '"', "'": "'", "`": "`" }, this.getNextLineIndent = function(r, i, s) {
        var c = this.$getIndent(i), g = this.getTokenizer().getLineTokens(i, r), m = g.tokens, y = g.state;
        if (m.length && m[m.length - 1].type == "comment")
          return c;
        if (r == "start" || r == "no_regex") {
          var x = i.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
          x && (c += s);
        } else if (r == "doc-start") {
          if (y == "start" || y == "no_regex")
            return "";
          var x = i.match(/^\s*(\/?)\*/);
          x && (x[1] && (c += " "), c += "* ");
        }
        return c;
      }, this.checkOutdent = function(r, i, s) {
        return this.$outdent.checkOutdent(i, s);
      }, this.autoOutdent = function(r, i, s) {
        this.$outdent.autoOutdent(i, s);
      }, this.createWorker = function(r) {
        var i = new l(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        return i.attachToDocument(r.getDocument()), i.on("annotate", function(s) {
          r.setAnnotations(s.data);
        }), i.on("terminate", function() {
          r.clearAnnotations();
        }), i;
      }, this.$id = "ace/mode/javascript", this.snippetFileId = "ace/snippets/javascript";
    }.call(n.prototype), $.Mode = n;
  }), ace.define("ace/mode/xml_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text_highlight_rules").TextHighlightRules, f = function(a) {
      var l = "[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";
      this.$rules = {
        start: [
          { token: "string.cdata.xml", regex: "<\\!\\[CDATA\\[", next: "cdata" },
          {
            token: ["punctuation.instruction.xml", "keyword.instruction.xml"],
            regex: "(<\\?)(" + l + ")",
            next: "processing_instruction"
          },
          { token: "comment.start.xml", regex: "<\\!--", next: "comment" },
          {
            token: ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
            regex: "(<\\!)(DOCTYPE)(?=[\\s])",
            next: "doctype",
            caseInsensitive: !0
          },
          { include: "tag" },
          { token: "text.end-tag-open.xml", regex: "</" },
          { token: "text.tag-open.xml", regex: "<" },
          { include: "reference" },
          { defaultToken: "text.xml" }
        ],
        processing_instruction: [{
          token: "entity.other.attribute-name.decl-attribute-name.xml",
          regex: l
        }, {
          token: "keyword.operator.decl-attribute-equals.xml",
          regex: "="
        }, {
          include: "whitespace"
        }, {
          include: "string"
        }, {
          token: "punctuation.xml-decl.xml",
          regex: "\\?>",
          next: "start"
        }],
        doctype: [
          { include: "whitespace" },
          { include: "string" },
          { token: "xml-pe.doctype.xml", regex: ">", next: "start" },
          { token: "xml-pe.xml", regex: "[-_a-zA-Z0-9:]+" },
          { token: "punctuation.int-subset", regex: "\\[", push: "int_subset" }
        ],
        int_subset: [{
          token: "text.xml",
          regex: "\\s+"
        }, {
          token: "punctuation.int-subset.xml",
          regex: "]",
          next: "pop"
        }, {
          token: ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
          regex: "(<\\!)(" + l + ")",
          push: [
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation.markup-decl.xml",
              regex: ">",
              next: "pop"
            },
            { include: "string" }
          ]
        }],
        cdata: [
          { token: "string.cdata.xml", regex: "\\]\\]>", next: "start" },
          { token: "text.xml", regex: "\\s+" },
          { token: "text.xml", regex: "(?:[^\\]]|\\](?!\\]>))+" }
        ],
        comment: [
          { token: "comment.end.xml", regex: "-->", next: "start" },
          { defaultToken: "comment.xml" }
        ],
        reference: [{
          token: "constant.language.escape.reference.xml",
          regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],
        attr_reference: [{
          token: "constant.language.escape.reference.attribute-value.xml",
          regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],
        tag: [{
          token: ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
          regex: "(?:(<)|(</))((?:" + l + ":)?" + l + ")",
          next: [
            { include: "attributes" },
            { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "start" }
          ]
        }],
        tag_whitespace: [
          { token: "text.tag-whitespace.xml", regex: "\\s+" }
        ],
        whitespace: [
          { token: "text.whitespace.xml", regex: "\\s+" }
        ],
        string: [{
          token: "string.xml",
          regex: "'",
          push: [
            { token: "string.xml", regex: "'", next: "pop" },
            { defaultToken: "string.xml" }
          ]
        }, {
          token: "string.xml",
          regex: '"',
          push: [
            { token: "string.xml", regex: '"', next: "pop" },
            { defaultToken: "string.xml" }
          ]
        }],
        attributes: [{
          token: "entity.other.attribute-name.xml",
          regex: l
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "="
        }, {
          include: "tag_whitespace"
        }, {
          include: "attribute_value"
        }],
        attribute_value: [{
          token: "string.attribute-value.xml",
          regex: "'",
          push: [
            { token: "string.attribute-value.xml", regex: "'", next: "pop" },
            { include: "attr_reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        }, {
          token: "string.attribute-value.xml",
          regex: '"',
          push: [
            { token: "string.attribute-value.xml", regex: '"', next: "pop" },
            { include: "attr_reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        }]
      }, this.constructor === f && this.normalizeRules();
    };
    (function() {
      this.embedTagRules = function(a, l, t) {
        this.$rules.tag.unshift({
          token: ["meta.tag.punctuation.tag-open.xml", "meta.tag." + t + ".tag-name.xml"],
          regex: "(<)(" + t + "(?=\\s|>|$))",
          next: [
            { include: "attributes" },
            { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: l + "start" }
          ]
        }), this.$rules[t + "-end"] = [
          { include: "attributes" },
          {
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            next: "start",
            onMatch: function(e, n, r) {
              return r.splice(0), this.token;
            }
          }
        ], this.embedRules(a, l, [{
          token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + t + ".tag-name.xml"],
          regex: "(</)(" + t + "(?=\\s|>|$))",
          next: t + "-end"
        }, {
          token: "string.cdata.xml",
          regex: "<\\!\\[CDATA\\["
        }, {
          token: "string.cdata.xml",
          regex: "\\]\\]>"
        }]);
      };
    }).call(k.prototype), S.inherits(f, k), $.XmlHighlightRules = f;
  }), ace.define("ace/mode/behaviour/xml", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("../behaviour").Behaviour, f = w("../../token_iterator").TokenIterator;
    w("../../lib/lang");
    function a(t, e) {
      return t && t.type.lastIndexOf(e + ".xml") > -1;
    }
    var l = function() {
      this.add("string_dquotes", "insertion", function(t, e, n, r, i) {
        if (i == '"' || i == "'") {
          var s = i, c = r.doc.getTextRange(n.getSelectionRange());
          if (c !== "" && c !== "'" && c != '"' && n.getWrapBehavioursEnabled())
            return {
              text: s + c + s,
              selection: !1
            };
          var g = n.getCursorPosition(), m = r.doc.getLine(g.row), y = m.substring(g.column, g.column + 1), x = new f(r, g.row, g.column), o = x.getCurrentToken();
          if (y == s && (a(o, "attribute-value") || a(o, "string")))
            return {
              text: "",
              selection: [1, 1]
            };
          if (o || (o = x.stepBackward()), !o)
            return;
          for (; a(o, "tag-whitespace") || a(o, "whitespace"); )
            o = x.stepBackward();
          var d = !y || y.match(/\s/);
          if (a(o, "attribute-equals") && (d || y == ">") || a(o, "decl-attribute-equals") && (d || y == "?"))
            return {
              text: s + s,
              selection: [1, 1]
            };
        }
      }), this.add("string_dquotes", "deletion", function(t, e, n, r, i) {
        var s = r.doc.getTextRange(i);
        if (!i.isMultiLine() && (s == '"' || s == "'")) {
          var c = r.doc.getLine(i.start.row), g = c.substring(i.start.column + 1, i.start.column + 2);
          if (g == s)
            return i.end.column++, i;
        }
      }), this.add("autoclosing", "insertion", function(t, e, n, r, i) {
        if (i == ">") {
          var s = n.getSelectionRange().start, c = new f(r, s.row, s.column), g = c.getCurrentToken() || c.stepBackward();
          if (!g || !(a(g, "tag-name") || a(g, "tag-whitespace") || a(g, "attribute-name") || a(g, "attribute-equals") || a(g, "attribute-value")) || a(g, "reference.attribute-value"))
            return;
          if (a(g, "attribute-value")) {
            var m = c.getCurrentTokenColumn() + g.value.length;
            if (s.column < m)
              return;
            if (s.column == m) {
              var y = c.stepForward();
              if (y && a(y, "attribute-value"))
                return;
              c.stepBackward();
            }
          }
          if (/^\s*>/.test(r.getLine(s.row).slice(s.column)))
            return;
          for (; !a(g, "tag-name"); )
            if (g = c.stepBackward(), g.value == "<") {
              g = c.stepForward();
              break;
            }
          var x = c.getCurrentTokenRow(), o = c.getCurrentTokenColumn();
          if (a(c.stepBackward(), "end-tag-open"))
            return;
          var d = g.value;
          return x == s.row && (d = d.substring(0, s.column - o)), this.voidElements.hasOwnProperty(d.toLowerCase()) ? void 0 : {
            text: "></" + d + ">",
            selection: [1, 1]
          };
        }
      }), this.add("autoindent", "insertion", function(t, e, n, r, i) {
        if (i == `
`) {
          var s = n.getCursorPosition(), c = r.getLine(s.row), g = new f(r, s.row, s.column), m = g.getCurrentToken();
          if (m && m.type.indexOf("tag-close") !== -1) {
            if (m.value == "/>")
              return;
            for (; m && m.type.indexOf("tag-name") === -1; )
              m = g.stepBackward();
            if (!m)
              return;
            var y = m.value, x = g.getCurrentTokenRow();
            if (m = g.stepBackward(), !m || m.type.indexOf("end-tag") !== -1)
              return;
            if (this.voidElements && !this.voidElements[y]) {
              var o = r.getTokenAt(s.row, s.column + 1), c = r.getLine(x), d = this.$getIndent(c), b = d + r.getTabString();
              return o && o.value === "</" ? {
                text: `
` + b + `
` + d,
                selection: [1, b.length, 1, b.length]
              } : {
                text: `
` + b
              };
            }
          }
        }
      });
    };
    S.inherits(l, k), $.XmlBehaviour = l;
  }), ace.define("ace/mode/folding/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/range", "ace/mode/folding/fold_mode", "ace/token_iterator"], function(w, $, L) {
    var S = w("../../lib/oop");
    w("../../lib/lang");
    var k = w("../../range").Range, f = w("./fold_mode").FoldMode, a = w("../../token_iterator").TokenIterator, l = $.FoldMode = function(n, r) {
      f.call(this), this.voidElements = n || {}, this.optionalEndTags = S.mixin({}, this.voidElements), r && S.mixin(this.optionalEndTags, r);
    };
    S.inherits(l, f);
    var t = function() {
      this.tagName = "", this.closing = !1, this.selfClosing = !1, this.start = { row: 0, column: 0 }, this.end = { row: 0, column: 0 };
    };
    function e(n, r) {
      return n.type.lastIndexOf(r + ".xml") > -1;
    }
    (function() {
      this.getFoldWidget = function(n, r, i) {
        var s = this._getFirstTagInLine(n, i);
        return s ? s.closing || !s.tagName && s.selfClosing ? r == "markbeginend" ? "end" : "" : !s.tagName || s.selfClosing || this.voidElements.hasOwnProperty(s.tagName.toLowerCase()) || this._findEndTagInLine(n, i, s.tagName, s.end.column) ? "" : "start" : this.getCommentFoldWidget(n, i);
      }, this.getCommentFoldWidget = function(n, r) {
        return /comment/.test(n.getState(r)) && /<!-/.test(n.getLine(r)) ? "start" : "";
      }, this._getFirstTagInLine = function(n, r) {
        for (var i = n.getTokens(r), s = new t(), c = 0; c < i.length; c++) {
          var g = i[c];
          if (e(g, "tag-open")) {
            if (s.end.column = s.start.column + g.value.length, s.closing = e(g, "end-tag-open"), g = i[++c], !g)
              return null;
            for (s.tagName = g.value, s.end.column += g.value.length, c++; c < i.length; c++)
              if (g = i[c], s.end.column += g.value.length, e(g, "tag-close")) {
                s.selfClosing = g.value == "/>";
                break;
              }
            return s;
          } else if (e(g, "tag-close"))
            return s.selfClosing = g.value == "/>", s;
          s.start.column += g.value.length;
        }
        return null;
      }, this._findEndTagInLine = function(n, r, i, s) {
        for (var c = n.getTokens(r), g = 0, m = 0; m < c.length; m++) {
          var y = c[m];
          if (g += y.value.length, !(g < s) && e(y, "end-tag-open") && (y = c[m + 1], y && y.value == i))
            return !0;
        }
        return !1;
      }, this._readTagForward = function(n) {
        var r = n.getCurrentToken();
        if (!r)
          return null;
        var i = new t();
        do
          if (e(r, "tag-open"))
            i.closing = e(r, "end-tag-open"), i.start.row = n.getCurrentTokenRow(), i.start.column = n.getCurrentTokenColumn();
          else if (e(r, "tag-name"))
            i.tagName = r.value;
          else if (e(r, "tag-close"))
            return i.selfClosing = r.value == "/>", i.end.row = n.getCurrentTokenRow(), i.end.column = n.getCurrentTokenColumn() + r.value.length, n.stepForward(), i;
        while (r = n.stepForward());
        return null;
      }, this._readTagBackward = function(n) {
        var r = n.getCurrentToken();
        if (!r)
          return null;
        var i = new t();
        do {
          if (e(r, "tag-open"))
            return i.closing = e(r, "end-tag-open"), i.start.row = n.getCurrentTokenRow(), i.start.column = n.getCurrentTokenColumn(), n.stepBackward(), i;
          e(r, "tag-name") ? i.tagName = r.value : e(r, "tag-close") && (i.selfClosing = r.value == "/>", i.end.row = n.getCurrentTokenRow(), i.end.column = n.getCurrentTokenColumn() + r.value.length);
        } while (r = n.stepBackward());
        return null;
      }, this._pop = function(n, r) {
        for (; n.length; ) {
          var i = n[n.length - 1];
          if (!r || i.tagName == r.tagName)
            return n.pop();
          if (this.optionalEndTags.hasOwnProperty(i.tagName)) {
            n.pop();
            continue;
          } else
            return null;
        }
      }, this.getFoldWidgetRange = function(n, r, i) {
        var s = this._getFirstTagInLine(n, i);
        if (!s)
          return this.getCommentFoldWidget(n, i) && n.getCommentFoldRange(i, n.getLine(i).length);
        var c = s.closing || s.selfClosing, g = [], m;
        if (c)
          for (var y = new a(n, i, s.end.column), o = {
            row: i,
            column: s.start.column
          }; m = this._readTagBackward(y); ) {
            if (m.selfClosing) {
              if (g.length)
                continue;
              return m.start.column += m.tagName.length + 2, m.end.column -= 2, k.fromPoints(m.start, m.end);
            }
            if (m.closing)
              g.push(m);
            else if (this._pop(g, m), g.length == 0)
              return m.start.column += m.tagName.length + 2, m.start.row == m.end.row && m.start.column < m.end.column && (m.start.column = m.end.column), k.fromPoints(m.start, o);
          }
        else {
          var y = new a(n, i, s.start.column), x = {
            row: i,
            column: s.start.column + s.tagName.length + 2
          };
          for (s.start.row == s.end.row && (x.column = s.end.column); m = this._readTagForward(y); ) {
            if (m.selfClosing) {
              if (g.length)
                continue;
              return m.start.column += m.tagName.length + 2, m.end.column -= 2, k.fromPoints(m.start, m.end);
            }
            if (m.closing) {
              if (this._pop(g, m), g.length == 0)
                return k.fromPoints(x, m.start);
            } else
              g.push(m);
          }
        }
      };
    }).call(l.prototype);
  }), ace.define("ace/mode/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/xml_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/xml", "ace/worker/worker_client"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/lang"), f = w("./text").Mode, a = w("./xml_highlight_rules").XmlHighlightRules, l = w("./behaviour/xml").XmlBehaviour, t = w("./folding/xml").FoldMode, e = w("../worker/worker_client").WorkerClient, n = function() {
      this.HighlightRules = a, this.$behaviour = new l(), this.foldingRules = new t();
    };
    S.inherits(n, f), function() {
      this.voidElements = k.arrayToMap([]), this.blockComment = { start: "<!--", end: "-->" }, this.createWorker = function(r) {
        var i = new e(["ace"], "ace/mode/xml_worker", "Worker");
        return i.attachToDocument(r.getDocument()), i.on("error", function(s) {
          r.setAnnotations(s.data);
        }), i.on("terminate", function() {
          r.clearAnnotations();
        }), i;
      }, this.$id = "ace/mode/xml";
    }.call(n.prototype), $.Mode = n;
  }), ace.define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop");
    w("../lib/lang");
    var k = w("./text_highlight_rules").TextHighlightRules, f = $.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", a = $.supportFunction = "rgb|rgba|url|attr|counter|counters", l = $.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom", t = $.supportConstantColor = "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen", e = $.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", n = $.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))", r = $.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", i = $.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b", s = function() {
      var c = this.createKeywordMapper({
        "support.function": a,
        "support.constant": l,
        "support.type": f,
        "support.constant.color": t,
        "support.constant.fonts": e
      }, "text", !0);
      this.$rules = {
        start: [{
          include: ["strings", "url", "comments"]
        }, {
          token: "paren.lparen",
          regex: "\\{",
          next: "ruleset"
        }, {
          token: "paren.rparen",
          regex: "\\}"
        }, {
          token: "string",
          regex: "@(?!viewport)",
          next: "media"
        }, {
          token: "keyword",
          regex: "#[a-z0-9-_]+"
        }, {
          token: "keyword",
          regex: "%"
        }, {
          token: "variable",
          regex: "\\.[a-z0-9-_]+"
        }, {
          token: "string",
          regex: ":[a-z0-9-_]+"
        }, {
          token: "constant.numeric",
          regex: n
        }, {
          token: "constant",
          regex: "[a-z0-9-_]+"
        }, {
          caseInsensitive: !0
        }],
        media: [{
          include: ["strings", "url", "comments"]
        }, {
          token: "paren.lparen",
          regex: "\\{",
          next: "start"
        }, {
          token: "paren.rparen",
          regex: "\\}",
          next: "start"
        }, {
          token: "string",
          regex: ";",
          next: "start"
        }, {
          token: "keyword",
          regex: "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"
        }],
        comments: [{
          token: "comment",
          regex: "\\/\\*",
          push: [{
            token: "comment",
            regex: "\\*\\/",
            next: "pop"
          }, {
            defaultToken: "comment"
          }]
        }],
        ruleset: [{
          regex: "-(webkit|ms|moz|o)-",
          token: "text"
        }, {
          token: "punctuation.operator",
          regex: "[:;]"
        }, {
          token: "paren.rparen",
          regex: "\\}",
          next: "start"
        }, {
          include: ["strings", "url", "comments"]
        }, {
          token: ["constant.numeric", "keyword"],
          regex: "(" + n + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
        }, {
          token: "constant.numeric",
          regex: n
        }, {
          token: "constant.numeric",
          regex: "#[a-f0-9]{6}"
        }, {
          token: "constant.numeric",
          regex: "#[a-f0-9]{3}"
        }, {
          token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
          regex: r
        }, {
          token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
          regex: i
        }, {
          include: "url"
        }, {
          token: c,
          regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }, {
          caseInsensitive: !0
        }],
        url: [{
          token: "support.function",
          regex: "(?:url(:?-prefix)?|domain|regexp)\\(",
          push: [{
            token: "support.function",
            regex: "\\)",
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }],
        strings: [{
          token: "string.start",
          regex: "'",
          push: [{
            token: "string.end",
            regex: "'|$",
            next: "pop"
          }, {
            include: "escapes"
          }, {
            token: "constant.language.escape",
            regex: /\\$/,
            consumeLineEnd: !0
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string.start",
          regex: '"',
          push: [{
            token: "string.end",
            regex: '"|$',
            next: "pop"
          }, {
            include: "escapes"
          }, {
            token: "constant.language.escape",
            regex: /\\$/,
            consumeLineEnd: !0
          }, {
            defaultToken: "string"
          }]
        }],
        escapes: [{
          token: "constant.language.escape",
          regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
        }]
      }, this.normalizeRules();
    };
    S.inherits(s, k), $.CssHighlightRules = s;
  }), ace.define("ace/mode/css_completions", ["require", "exports", "module"], function(w, $, L) {
    var S = {
      background: { "#$0": 1 },
      "background-color": { "#$0": 1, transparent: 1, fixed: 1 },
      "background-image": { "url('/$0')": 1 },
      "background-repeat": { repeat: 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, inherit: 1 },
      "background-position": { bottom: 2, center: 2, left: 2, right: 2, top: 2, inherit: 2 },
      "background-attachment": { scroll: 1, fixed: 1 },
      "background-size": { cover: 1, contain: 1 },
      "background-clip": { "border-box": 1, "padding-box": 1, "content-box": 1 },
      "background-origin": { "border-box": 1, "padding-box": 1, "content-box": 1 },
      border: { "solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1 },
      "border-color": { "#$0": 1 },
      "border-style": { solid: 2, dashed: 2, dotted: 2, double: 2, groove: 2, hidden: 2, inherit: 2, inset: 2, none: 2, outset: 2, ridged: 2 },
      "border-collapse": { collapse: 1, separate: 1 },
      bottom: { px: 1, em: 1, "%": 1 },
      clear: { left: 1, right: 1, both: 1, none: 1 },
      color: { "#$0": 1, "rgb(#$00,0,0)": 1 },
      cursor: { default: 1, pointer: 1, move: 1, text: 1, wait: 1, help: 1, progress: 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1 },
      display: { none: 1, block: 1, inline: 1, "inline-block": 1, "table-cell": 1 },
      "empty-cells": { show: 1, hide: 1 },
      float: { left: 1, right: 1, none: 1 },
      "font-family": { Arial: 2, "Comic Sans MS": 2, Consolas: 2, "Courier New": 2, Courier: 2, Georgia: 2, Monospace: 2, "Sans-Serif": 2, "Segoe UI": 2, Tahoma: 2, "Times New Roman": 2, "Trebuchet MS": 2, Verdana: 1 },
      "font-size": { px: 1, em: 1, "%": 1 },
      "font-weight": { bold: 1, normal: 1 },
      "font-style": { italic: 1, normal: 1 },
      "font-variant": { normal: 1, "small-caps": 1 },
      height: { px: 1, em: 1, "%": 1 },
      left: { px: 1, em: 1, "%": 1 },
      "letter-spacing": { normal: 1 },
      "line-height": { normal: 1 },
      "list-style-type": { none: 1, disc: 1, circle: 1, square: 1, decimal: 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, georgian: 1, "lower-alpha": 1, "upper-alpha": 1 },
      margin: { px: 1, em: 1, "%": 1 },
      "margin-right": { px: 1, em: 1, "%": 1 },
      "margin-left": { px: 1, em: 1, "%": 1 },
      "margin-top": { px: 1, em: 1, "%": 1 },
      "margin-bottom": { px: 1, em: 1, "%": 1 },
      "max-height": { px: 1, em: 1, "%": 1 },
      "max-width": { px: 1, em: 1, "%": 1 },
      "min-height": { px: 1, em: 1, "%": 1 },
      "min-width": { px: 1, em: 1, "%": 1 },
      overflow: { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      "overflow-x": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      "overflow-y": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      padding: { px: 1, em: 1, "%": 1 },
      "padding-top": { px: 1, em: 1, "%": 1 },
      "padding-right": { px: 1, em: 1, "%": 1 },
      "padding-bottom": { px: 1, em: 1, "%": 1 },
      "padding-left": { px: 1, em: 1, "%": 1 },
      "page-break-after": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 },
      "page-break-before": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 },
      position: { absolute: 1, relative: 1, fixed: 1, static: 1 },
      right: { px: 1, em: 1, "%": 1 },
      "table-layout": { fixed: 1, auto: 1 },
      "text-decoration": { none: 1, underline: 1, "line-through": 1, blink: 1 },
      "text-align": { left: 1, right: 1, center: 1, justify: 1 },
      "text-transform": { capitalize: 1, uppercase: 1, lowercase: 1, none: 1 },
      top: { px: 1, em: 1, "%": 1 },
      "vertical-align": { top: 1, bottom: 1 },
      visibility: { hidden: 1, visible: 1 },
      "white-space": { nowrap: 1, normal: 1, pre: 1, "pre-line": 1, "pre-wrap": 1 },
      width: { px: 1, em: 1, "%": 1 },
      "word-spacing": { normal: 1 },
      filter: { "alpha(opacity=$0100)": 1 },
      "text-shadow": { "$02px 2px 2px #777": 1 },
      "text-overflow": { "ellipsis-word": 1, clip: 1, ellipsis: 1 },
      "-moz-border-radius": 1,
      "-moz-border-radius-topright": 1,
      "-moz-border-radius-bottomright": 1,
      "-moz-border-radius-topleft": 1,
      "-moz-border-radius-bottomleft": 1,
      "-webkit-border-radius": 1,
      "-webkit-border-top-right-radius": 1,
      "-webkit-border-top-left-radius": 1,
      "-webkit-border-bottom-right-radius": 1,
      "-webkit-border-bottom-left-radius": 1,
      "-moz-box-shadow": 1,
      "-webkit-box-shadow": 1,
      transform: { "rotate($00deg)": 1, "skew($00deg)": 1 },
      "-moz-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 },
      "-webkit-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 }
    }, k = function() {
    };
    (function() {
      this.completionsDefined = !1, this.defineCompletions = function() {
        if (document) {
          var f = document.createElement("c").style;
          for (var a in f)
            if (typeof f[a] == "string") {
              var l = a.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase();
              });
              S.hasOwnProperty(l) || (S[l] = 1);
            }
        }
        this.completionsDefined = !0;
      }, this.getCompletions = function(f, a, l, t) {
        if (this.completionsDefined || this.defineCompletions(), f === "ruleset" || a.$mode.$id == "ace/mode/scss") {
          var e = a.getLine(l.row).substr(0, l.column), n = /\([^)]*$/.test(e);
          return n && (e = e.substr(e.lastIndexOf("(") + 1)), /:[^;]+$/.test(e) ? (/([\w\-]+):[^:]*$/.test(e), this.getPropertyValueCompletions(f, a, l, t)) : this.getPropertyCompletions(f, a, l, t, n);
        }
        return [];
      }, this.getPropertyCompletions = function(f, a, l, t, e) {
        e = e || !1;
        var n = Object.keys(S);
        return n.map(function(r) {
          return {
            caption: r,
            snippet: r + ": $0" + (e ? "" : ";"),
            meta: "property",
            score: 1e6
          };
        });
      }, this.getPropertyValueCompletions = function(f, a, l, t) {
        var e = a.getLine(l.row).substr(0, l.column), n = (/([\w\-]+):[^:]*$/.exec(e) || {})[1];
        if (!n)
          return [];
        var r = [];
        return n in S && typeof S[n] == "object" && (r = Object.keys(S[n])), r.map(function(i) {
          return {
            caption: i,
            snippet: i,
            meta: "property value",
            score: 1e6
          };
        });
      };
    }).call(k.prototype), $.CssCompletions = k;
  }), ace.define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function(w, $, L) {
    var S = w("../../lib/oop");
    w("../behaviour").Behaviour;
    var k = w("./cstyle").CstyleBehaviour, f = w("../../token_iterator").TokenIterator, a = function() {
      this.inherit(k), this.add("colon", "insertion", function(l, t, e, n, r) {
        if (r === ":" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = new f(n, i.row, i.column), c = s.getCurrentToken();
          if (c && c.value.match(/\s+/) && (c = s.stepBackward()), c && c.type === "support.type") {
            var g = n.doc.getLine(i.row), m = g.substring(i.column, i.column + 1);
            if (m === ":")
              return {
                text: "",
                selection: [1, 1]
              };
            if (/^(\s+[^;]|\s*$)/.test(g.substring(i.column)))
              return {
                text: ":;",
                selection: [1, 1]
              };
          }
        }
      }), this.add("colon", "deletion", function(l, t, e, n, r) {
        var i = n.doc.getTextRange(r);
        if (!r.isMultiLine() && i === ":") {
          var s = e.getCursorPosition(), c = new f(n, s.row, s.column), g = c.getCurrentToken();
          if (g && g.value.match(/\s+/) && (g = c.stepBackward()), g && g.type === "support.type") {
            var m = n.doc.getLine(r.start.row), y = m.substring(r.end.column, r.end.column + 1);
            if (y === ";")
              return r.end.column++, r;
          }
        }
      }), this.add("semicolon", "insertion", function(l, t, e, n, r) {
        if (r === ";" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = n.doc.getLine(i.row), c = s.substring(i.column, i.column + 1);
          if (c === ";")
            return {
              text: "",
              selection: [1, 1]
            };
        }
      }), this.add("!important", "insertion", function(l, t, e, n, r) {
        if (r === "!" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = n.doc.getLine(i.row);
          if (/^\s*(;|}|$)/.test(s.substring(i.column)))
            return {
              text: "!important",
              selection: [10, 10]
            };
        }
      });
    };
    S.inherits(a, k), $.CssBehaviour = a;
  }), ace.define("ace/mode/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/css_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/css_completions", "ace/mode/behaviour/css", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode, f = w("./css_highlight_rules").CssHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, l = w("../worker/worker_client").WorkerClient, t = w("./css_completions").CssCompletions, e = w("./behaviour/css").CssBehaviour, n = w("./folding/cstyle").FoldMode, r = function() {
      this.HighlightRules = f, this.$outdent = new a(), this.$behaviour = new e(), this.$completer = new t(), this.foldingRules = new n();
    };
    S.inherits(r, k), function() {
      this.foldingRules = "cStyle", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(i, s, c) {
        var g = this.$getIndent(s), m = this.getTokenizer().getLineTokens(s, i).tokens;
        if (m.length && m[m.length - 1].type == "comment")
          return g;
        var y = s.match(/^.*\{\s*$/);
        return y && (g += c), g;
      }, this.checkOutdent = function(i, s, c) {
        return this.$outdent.checkOutdent(s, c);
      }, this.autoOutdent = function(i, s, c) {
        this.$outdent.autoOutdent(s, c);
      }, this.getCompletions = function(i, s, c, g) {
        return this.$completer.getCompletions(i, s, c, g);
      }, this.createWorker = function(i) {
        var s = new l(["ace"], "ace/mode/css_worker", "Worker");
        return s.attachToDocument(i.getDocument()), s.on("annotate", function(c) {
          i.setAnnotations(c.data);
        }), s.on("terminate", function() {
          i.clearAnnotations();
        }), s;
      }, this.$id = "ace/mode/css", this.snippetFileId = "ace/snippets/css";
    }.call(r.prototype), $.Mode = r;
  }), ace.define("ace/mode/html_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/lang"), f = w("./css_highlight_rules").CssHighlightRules, a = w("./javascript_highlight_rules").JavaScriptHighlightRules, l = w("./xml_highlight_rules").XmlHighlightRules, t = k.createMap({
      a: "anchor",
      button: "form",
      form: "form",
      img: "image",
      input: "form",
      label: "form",
      option: "form",
      script: "script",
      select: "form",
      textarea: "form",
      style: "style",
      table: "table",
      tbody: "table",
      td: "table",
      tfoot: "table",
      th: "table",
      tr: "table"
    }), e = function() {
      l.call(this), this.addRules({
        attributes: [{
          include: "tag_whitespace"
        }, {
          token: "entity.other.attribute-name.xml",
          regex: "[-_a-zA-Z0-9:.]+"
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "=",
          push: [{
            include: "tag_whitespace"
          }, {
            token: "string.unquoted.attribute-value.html",
            regex: "[^<>='\"`\\s]+",
            next: "pop"
          }, {
            token: "empty",
            regex: "",
            next: "pop"
          }]
        }, {
          include: "attribute_value"
        }],
        tag: [{
          token: function(n, r) {
            var i = t[r];
            return [
              "meta.tag.punctuation." + (n == "<" ? "" : "end-") + "tag-open.xml",
              "meta.tag" + (i ? "." + i : "") + ".tag-name.xml"
            ];
          },
          regex: "(</?)([-_a-zA-Z0-9:.]+)",
          next: "tag_stuff"
        }],
        tag_stuff: [
          { include: "attributes" },
          { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "start" }
        ]
      }), this.embedTagRules(f, "css-", "style"), this.embedTagRules(new a({ jsx: !1 }).getRules(), "js-", "script"), this.constructor === e && this.normalizeRules();
    };
    S.inherits(e, l), $.HtmlHighlightRules = e;
  }), ace.define("ace/mode/folding/mixed", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("./fold_mode").FoldMode, f = $.FoldMode = function(a, l) {
      this.defaultMode = a, this.subModes = l;
    };
    S.inherits(f, k), function() {
      this.$getMode = function(a) {
        typeof a != "string" && (a = a[0]);
        for (var l in this.subModes)
          if (a.indexOf(l) === 0)
            return this.subModes[l];
        return null;
      }, this.$tryMode = function(a, l, t, e) {
        var n = this.$getMode(a);
        return n ? n.getFoldWidget(l, t, e) : "";
      }, this.getFoldWidget = function(a, l, t) {
        return this.$tryMode(a.getState(t - 1), a, l, t) || this.$tryMode(a.getState(t), a, l, t) || this.defaultMode.getFoldWidget(a, l, t);
      }, this.getFoldWidgetRange = function(a, l, t) {
        var e = this.$getMode(a.getState(t - 1));
        return (!e || !e.getFoldWidget(a, l, t)) && (e = this.$getMode(a.getState(t))), (!e || !e.getFoldWidget(a, l, t)) && (e = this.defaultMode), e.getFoldWidgetRange(a, l, t);
      };
    }.call(f.prototype);
  }), ace.define("ace/mode/folding/html", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/mixed", "ace/mode/folding/xml", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("./mixed").FoldMode, f = w("./xml").FoldMode, a = w("./cstyle").FoldMode, l = $.FoldMode = function(t, e) {
      k.call(this, new f(t, e), {
        "js-": new a(),
        "css-": new a()
      });
    };
    S.inherits(l, k);
  }), ace.define("ace/mode/html_completions", ["require", "exports", "module", "ace/token_iterator"], function(w, $, L) {
    var S = w("../token_iterator").TokenIterator, k = [
      "accesskey",
      "class",
      "contenteditable",
      "contextmenu",
      "dir",
      "draggable",
      "dropzone",
      "hidden",
      "id",
      "inert",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate"
    ], f = [
      "onabort",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextmenu",
      "oncuechange",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmousedown",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onreset",
      "onscroll",
      "onseeked",
      "onseeking",
      "onselect",
      "onshow",
      "onstalled",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "onvolumechange",
      "onwaiting"
    ], a = k.concat(f), l = {
      a: { href: 1, target: { _blank: 1, top: 1 }, ping: 1, rel: { nofollow: 1, alternate: 1, author: 1, bookmark: 1, help: 1, license: 1, next: 1, noreferrer: 1, prefetch: 1, prev: 1, search: 1, tag: 1 }, media: 1, hreflang: 1, type: 1 },
      abbr: {},
      address: {},
      area: { shape: 1, coords: 1, href: 1, hreflang: 1, alt: 1, target: 1, media: 1, rel: 1, ping: 1, type: 1 },
      article: { pubdate: 1 },
      aside: {},
      audio: { src: 1, autobuffer: 1, autoplay: { autoplay: 1 }, loop: { loop: 1 }, controls: { controls: 1 }, muted: { muted: 1 }, preload: { auto: 1, metadata: 1, none: 1 } },
      b: {},
      base: { href: 1, target: 1 },
      bdi: {},
      bdo: {},
      blockquote: { cite: 1 },
      body: { onafterprint: 1, onbeforeprint: 1, onbeforeunload: 1, onhashchange: 1, onmessage: 1, onoffline: 1, onpopstate: 1, onredo: 1, onresize: 1, onstorage: 1, onundo: 1, onunload: 1 },
      br: {},
      button: { autofocus: 1, disabled: { disabled: 1 }, form: 1, formaction: 1, formenctype: 1, formmethod: 1, formnovalidate: 1, formtarget: 1, name: 1, value: 1, type: { button: 1, submit: 1 } },
      canvas: { width: 1, height: 1 },
      caption: {},
      cite: {},
      code: {},
      col: { span: 1 },
      colgroup: { span: 1 },
      command: { type: 1, label: 1, icon: 1, disabled: 1, checked: 1, radiogroup: 1, command: 1 },
      data: {},
      datalist: {},
      dd: {},
      del: { cite: 1, datetime: 1 },
      details: { open: 1 },
      dfn: {},
      dialog: { open: 1 },
      div: {},
      dl: {},
      dt: {},
      em: {},
      embed: { src: 1, height: 1, width: 1, type: 1 },
      fieldset: { disabled: 1, form: 1, name: 1 },
      figcaption: {},
      figure: {},
      footer: {},
      form: { "accept-charset": 1, action: 1, autocomplete: 1, enctype: { "multipart/form-data": 1, "application/x-www-form-urlencoded": 1 }, method: { get: 1, post: 1 }, name: 1, novalidate: 1, target: { _blank: 1, top: 1 } },
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      head: {},
      header: {},
      hr: {},
      html: { manifest: 1 },
      i: {},
      iframe: { name: 1, src: 1, height: 1, width: 1, sandbox: { "allow-same-origin": 1, "allow-top-navigation": 1, "allow-forms": 1, "allow-scripts": 1 }, seamless: { seamless: 1 } },
      img: { alt: 1, src: 1, height: 1, width: 1, usemap: 1, ismap: 1 },
      input: {
        type: { text: 1, password: 1, hidden: 1, checkbox: 1, submit: 1, radio: 1, file: 1, button: 1, reset: 1, image: 31, color: 1, date: 1, datetime: 1, "datetime-local": 1, email: 1, month: 1, number: 1, range: 1, search: 1, tel: 1, time: 1, url: 1, week: 1 },
        accept: 1,
        alt: 1,
        autocomplete: { on: 1, off: 1 },
        autofocus: { autofocus: 1 },
        checked: { checked: 1 },
        disabled: { disabled: 1 },
        form: 1,
        formaction: 1,
        formenctype: { "application/x-www-form-urlencoded": 1, "multipart/form-data": 1, "text/plain": 1 },
        formmethod: { get: 1, post: 1 },
        formnovalidate: { formnovalidate: 1 },
        formtarget: { _blank: 1, _self: 1, _parent: 1, _top: 1 },
        height: 1,
        list: 1,
        max: 1,
        maxlength: 1,
        min: 1,
        multiple: { multiple: 1 },
        name: 1,
        pattern: 1,
        placeholder: 1,
        readonly: { readonly: 1 },
        required: { required: 1 },
        size: 1,
        src: 1,
        step: 1,
        width: 1,
        files: 1,
        value: 1
      },
      ins: { cite: 1, datetime: 1 },
      kbd: {},
      keygen: { autofocus: 1, challenge: { challenge: 1 }, disabled: { disabled: 1 }, form: 1, keytype: { rsa: 1, dsa: 1, ec: 1 }, name: 1 },
      label: { form: 1, for: 1 },
      legend: {},
      li: { value: 1 },
      link: { href: 1, hreflang: 1, rel: { stylesheet: 1, icon: 1 }, media: { all: 1, screen: 1, print: 1 }, type: { "text/css": 1, "image/png": 1, "image/jpeg": 1, "image/gif": 1 }, sizes: 1 },
      main: {},
      map: { name: 1 },
      mark: {},
      math: {},
      menu: { type: 1, label: 1 },
      meta: { "http-equiv": { "content-type": 1 }, name: { description: 1, keywords: 1 }, content: { "text/html; charset=UTF-8": 1 }, charset: 1 },
      meter: { value: 1, min: 1, max: 1, low: 1, high: 1, optimum: 1 },
      nav: {},
      noscript: { href: 1 },
      object: { param: 1, data: 1, type: 1, height: 1, width: 1, usemap: 1, name: 1, form: 1, classid: 1 },
      ol: { start: 1, reversed: 1 },
      optgroup: { disabled: 1, label: 1 },
      option: { disabled: 1, selected: 1, label: 1, value: 1 },
      output: { for: 1, form: 1, name: 1 },
      p: {},
      param: { name: 1, value: 1 },
      pre: {},
      progress: { value: 1, max: 1 },
      q: { cite: 1 },
      rp: {},
      rt: {},
      ruby: {},
      s: {},
      samp: {},
      script: { charset: 1, type: { "text/javascript": 1 }, src: 1, defer: 1, async: 1 },
      select: { autofocus: 1, disabled: 1, form: 1, multiple: { multiple: 1 }, name: 1, size: 1, readonly: { readonly: 1 } },
      small: {},
      source: { src: 1, type: 1, media: 1 },
      span: {},
      strong: {},
      style: { type: 1, media: { all: 1, screen: 1, print: 1 }, scoped: 1 },
      sub: {},
      sup: {},
      svg: {},
      table: { summary: 1 },
      tbody: {},
      td: { headers: 1, rowspan: 1, colspan: 1 },
      textarea: { autofocus: { autofocus: 1 }, disabled: { disabled: 1 }, form: 1, maxlength: 1, name: 1, placeholder: 1, readonly: { readonly: 1 }, required: { required: 1 }, rows: 1, cols: 1, wrap: { on: 1, off: 1, hard: 1, soft: 1 } },
      tfoot: {},
      th: { headers: 1, rowspan: 1, colspan: 1, scope: 1 },
      thead: {},
      time: { datetime: 1 },
      title: {},
      tr: {},
      track: { kind: 1, src: 1, srclang: 1, label: 1, default: 1 },
      section: {},
      summary: {},
      u: {},
      ul: {},
      var: {},
      video: { src: 1, autobuffer: 1, autoplay: { autoplay: 1 }, loop: { loop: 1 }, controls: { controls: 1 }, width: 1, height: 1, poster: 1, muted: { muted: 1 }, preload: { auto: 1, metadata: 1, none: 1 } },
      wbr: {}
    }, t = Object.keys(l);
    function e(s, c) {
      return s.type.lastIndexOf(c + ".xml") > -1;
    }
    function n(s, c) {
      for (var g = new S(s, c.row, c.column), m = g.getCurrentToken(); m && !e(m, "tag-name"); )
        m = g.stepBackward();
      if (m)
        return m.value;
    }
    function r(s, c) {
      for (var g = new S(s, c.row, c.column), m = g.getCurrentToken(); m && !e(m, "attribute-name"); )
        m = g.stepBackward();
      if (m)
        return m.value;
    }
    var i = function() {
    };
    (function() {
      this.getCompletions = function(s, c, g, m) {
        var y = c.getTokenAt(g.row, g.column);
        if (!y)
          return [];
        if (e(y, "tag-name") || e(y, "tag-open") || e(y, "end-tag-open"))
          return this.getTagCompletions(s, c, g, m);
        if (e(y, "tag-whitespace") || e(y, "attribute-name"))
          return this.getAttributeCompletions(s, c, g, m);
        if (e(y, "attribute-value"))
          return this.getAttributeValueCompletions(s, c, g, m);
        var x = c.getLine(g.row).substr(0, g.column);
        return /&[a-z]*$/i.test(x) ? this.getHTMLEntityCompletions(s, c, g, m) : [];
      }, this.getTagCompletions = function(s, c, g, m) {
        return t.map(function(y) {
          return {
            value: y,
            meta: "tag",
            score: 1e6
          };
        });
      }, this.getAttributeCompletions = function(s, c, g, m) {
        var y = n(c, g);
        if (!y)
          return [];
        var x = a;
        return y in l && (x = x.concat(Object.keys(l[y]))), x.map(function(o) {
          return {
            caption: o,
            snippet: o + '="$0"',
            meta: "attribute",
            score: 1e6
          };
        });
      }, this.getAttributeValueCompletions = function(s, c, g, m) {
        var y = n(c, g), x = r(c, g);
        if (!y)
          return [];
        var o = [];
        return y in l && x in l[y] && typeof l[y][x] == "object" && (o = Object.keys(l[y][x])), o.map(function(d) {
          return {
            caption: d,
            snippet: d,
            meta: "attribute value",
            score: 1e6
          };
        });
      }, this.getHTMLEntityCompletions = function(s, c, g, m) {
        var y = ["Aacute;", "aacute;", "Acirc;", "acirc;", "acute;", "AElig;", "aelig;", "Agrave;", "agrave;", "alefsym;", "Alpha;", "alpha;", "amp;", "and;", "ang;", "Aring;", "aring;", "asymp;", "Atilde;", "atilde;", "Auml;", "auml;", "bdquo;", "Beta;", "beta;", "brvbar;", "bull;", "cap;", "Ccedil;", "ccedil;", "cedil;", "cent;", "Chi;", "chi;", "circ;", "clubs;", "cong;", "copy;", "crarr;", "cup;", "curren;", "Dagger;", "dagger;", "dArr;", "darr;", "deg;", "Delta;", "delta;", "diams;", "divide;", "Eacute;", "eacute;", "Ecirc;", "ecirc;", "Egrave;", "egrave;", "empty;", "emsp;", "ensp;", "Epsilon;", "epsilon;", "equiv;", "Eta;", "eta;", "ETH;", "eth;", "Euml;", "euml;", "euro;", "exist;", "fnof;", "forall;", "frac12;", "frac14;", "frac34;", "frasl;", "Gamma;", "gamma;", "ge;", "gt;", "hArr;", "harr;", "hearts;", "hellip;", "Iacute;", "iacute;", "Icirc;", "icirc;", "iexcl;", "Igrave;", "igrave;", "image;", "infin;", "int;", "Iota;", "iota;", "iquest;", "isin;", "Iuml;", "iuml;", "Kappa;", "kappa;", "Lambda;", "lambda;", "lang;", "laquo;", "lArr;", "larr;", "lceil;", "ldquo;", "le;", "lfloor;", "lowast;", "loz;", "lrm;", "lsaquo;", "lsquo;", "lt;", "macr;", "mdash;", "micro;", "middot;", "minus;", "Mu;", "mu;", "nabla;", "nbsp;", "ndash;", "ne;", "ni;", "not;", "notin;", "nsub;", "Ntilde;", "ntilde;", "Nu;", "nu;", "Oacute;", "oacute;", "Ocirc;", "ocirc;", "OElig;", "oelig;", "Ograve;", "ograve;", "oline;", "Omega;", "omega;", "Omicron;", "omicron;", "oplus;", "or;", "ordf;", "ordm;", "Oslash;", "oslash;", "Otilde;", "otilde;", "otimes;", "Ouml;", "ouml;", "para;", "part;", "permil;", "perp;", "Phi;", "phi;", "Pi;", "pi;", "piv;", "plusmn;", "pound;", "Prime;", "prime;", "prod;", "prop;", "Psi;", "psi;", "quot;", "radic;", "rang;", "raquo;", "rArr;", "rarr;", "rceil;", "rdquo;", "real;", "reg;", "rfloor;", "Rho;", "rho;", "rlm;", "rsaquo;", "rsquo;", "sbquo;", "Scaron;", "scaron;", "sdot;", "sect;", "shy;", "Sigma;", "sigma;", "sigmaf;", "sim;", "spades;", "sub;", "sube;", "sum;", "sup;", "sup1;", "sup2;", "sup3;", "supe;", "szlig;", "Tau;", "tau;", "there4;", "Theta;", "theta;", "thetasym;", "thinsp;", "THORN;", "thorn;", "tilde;", "times;", "trade;", "Uacute;", "uacute;", "uArr;", "uarr;", "Ucirc;", "ucirc;", "Ugrave;", "ugrave;", "uml;", "upsih;", "Upsilon;", "upsilon;", "Uuml;", "uuml;", "weierp;", "Xi;", "xi;", "Yacute;", "yacute;", "yen;", "Yuml;", "yuml;", "Zeta;", "zeta;", "zwj;", "zwnj;"];
        return y.map(function(x) {
          return {
            caption: x,
            snippet: x,
            meta: "html entity",
            score: 1e6
          };
        });
      };
    }).call(i.prototype), $.HtmlCompletions = i;
  }), ace.define("ace/mode/html", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/javascript", "ace/mode/css", "ace/mode/html_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/html", "ace/mode/html_completions", "ace/worker/worker_client"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/lang"), f = w("./text").Mode, a = w("./javascript").Mode, l = w("./css").Mode, t = w("./html_highlight_rules").HtmlHighlightRules, e = w("./behaviour/xml").XmlBehaviour, n = w("./folding/html").FoldMode, r = w("./html_completions").HtmlCompletions, i = w("../worker/worker_client").WorkerClient, s = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"], c = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"], g = function(m) {
      this.fragmentContext = m && m.fragmentContext, this.HighlightRules = t, this.$behaviour = new e(), this.$completer = new r(), this.createModeDelegates({
        "js-": a,
        "css-": l
      }), this.foldingRules = new n(this.voidElements, k.arrayToMap(c));
    };
    S.inherits(g, f), function() {
      this.blockComment = { start: "<!--", end: "-->" }, this.voidElements = k.arrayToMap(s), this.getNextLineIndent = function(m, y, x) {
        return this.$getIndent(y);
      }, this.checkOutdent = function(m, y, x) {
        return !1;
      }, this.getCompletions = function(m, y, x, o) {
        return this.$completer.getCompletions(m, y, x, o);
      }, this.createWorker = function(m) {
        if (this.constructor == g) {
          var y = new i(["ace"], "ace/mode/html_worker", "Worker");
          return y.attachToDocument(m.getDocument()), this.fragmentContext && y.call("setOptions", [{ context: this.fragmentContext }]), y.on("error", function(x) {
            m.setAnnotations(x.data);
          }), y.on("terminate", function() {
            m.clearAnnotations();
          }), y;
        }
      }, this.$id = "ace/mode/html", this.snippetFileId = "ace/snippets/html";
    }.call(g.prototype), $.Mode = g;
  }), ace.define("ace/mode/markdown_highlight_rules", ["require", "exports", "module", "ace/config", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules", "ace/mode/html_highlight_rules"], function(w, $, L) {
    var S = w("../config").$modes, k = w("../lib/oop"), f = w("../lib/lang"), a = w("./text_highlight_rules").TextHighlightRules, l = w("./html_highlight_rules").HtmlHighlightRules, t = function(n) {
      return "(?:[^" + f.escapeRegExp(n) + "\\\\]|\\\\.)*";
    }, e = function() {
      l.call(this);
      var n = {
        token: "support.function",
        regex: /^\s*(```+[^`]*|~~~+[^~]*)$/,
        onMatch: function(i, s, c, g) {
          var m = i.match(/^(\s*)([`~]+)(.*)/), y = /[\w-]+|$/.exec(m[3])[0];
          return S[y] || (y = ""), c.unshift("githubblock", [], [m[1], m[2], y], s), this.token;
        },
        next: "githubblock"
      }, r = [{
        token: "support.function",
        regex: ".*",
        onMatch: function(i, s, c, g) {
          var m = c[1], y = c[2][0], x = c[2][1], o = c[2][2], d = /^(\s*)(`+|~+)\s*$/.exec(i);
          if (d && d[1].length < y.length + 3 && d[2].length >= x.length && d[2][0] == x[0])
            return c.splice(0, 3), this.next = c.shift(), this.token;
          if (this.next = "", o && S[o]) {
            var b = S[o].getTokenizer().getLineTokens(i, m.slice(0));
            return c[1] = b.state, b.tokens;
          }
          return this.token;
        }
      }];
      this.$rules.start.unshift({
        token: "empty_line",
        regex: "^$",
        next: "allowBlock"
      }, {
        token: "markup.heading.1",
        regex: "^=+(?=\\s*$)"
      }, {
        token: "markup.heading.2",
        regex: "^\\-+(?=\\s*$)"
      }, {
        token: function(i) {
          return "markup.heading." + i.length;
        },
        regex: /^#{1,6}(?=\s|$)/,
        next: "header"
      }, n, {
        token: "string.blockquote",
        regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
        next: "blockquote"
      }, {
        token: "constant",
        regex: "^ {0,3}(?:(?:\\* ?){3,}|(?:\\- ?){3,}|(?:\\_ ?){3,})\\s*$",
        next: "allowBlock"
      }, {
        token: "markup.list",
        regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
        next: "listblock-start"
      }, {
        include: "basic"
      }), this.addRules({
        basic: [{
          token: "constant.language.escape",
          regex: /\\[\\`*_{}\[\]()#+\-.!]/
        }, {
          token: "support.function",
          regex: "(`+)(.*?[^`])(\\1)"
        }, {
          token: ["text", "constant", "text", "url", "string", "text"],
          regex: '^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:["][^"]+["])?(\\s*))$'
        }, {
          token: ["text", "string", "text", "constant", "text"],
          regex: "(\\[)(" + t("]") + ")(\\]\\s*\\[)(" + t("]") + ")(\\])"
        }, {
          token: ["text", "string", "text", "markup.underline", "string", "text"],
          regex: "(\\!?\\[)(" + t("]") + ')(\\]\\()((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)(\\s*"' + t('"') + '"\\s*)?(\\))'
        }, {
          token: "string.strong",
          regex: "([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"
        }, {
          token: "string.emphasis",
          regex: "([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"
        }, {
          token: ["text", "url", "text"],
          regex: `(<)((?:https?|ftp|dict):[^'">\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(>)`
        }],
        allowBlock: [
          { token: "support.function", regex: "^ {4}.+", next: "allowBlock" },
          { token: "empty_line", regex: "^$", next: "allowBlock" },
          { token: "empty", regex: "", next: "start" }
        ],
        header: [{
          regex: "$",
          next: "start"
        }, {
          include: "basic"
        }, {
          defaultToken: "heading"
        }],
        "listblock-start": [{
          token: "support.variable",
          regex: /(?:\[[ x]\])?/,
          next: "listblock"
        }],
        listblock: [
          {
            token: "empty_line",
            regex: "^$",
            next: "start"
          },
          {
            token: "markup.list",
            regex: "^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",
            next: "listblock-start"
          },
          {
            include: "basic",
            noEscape: !0
          },
          n,
          {
            defaultToken: "list"
          }
        ],
        blockquote: [{
          token: "empty_line",
          regex: "^\\s*$",
          next: "start"
        }, {
          token: "string.blockquote",
          regex: "^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",
          next: "blockquote"
        }, {
          include: "basic",
          noEscape: !0
        }, {
          defaultToken: "string.blockquote"
        }],
        githubblock: r
      }), this.normalizeRules();
    };
    k.inherits(e, a), $.MarkdownHighlightRules = e;
  }), ace.define("ace/mode/folding/markdown", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode", "ace/range"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("./fold_mode").FoldMode, f = w("../../range").Range, a = $.FoldMode = function() {
    };
    S.inherits(a, k), function() {
      this.foldingStartMarker = /^(?:[=-]+\s*$|#{1,6} |`{3})/, this.getFoldWidget = function(l, t, e) {
        var n = l.getLine(e);
        return this.foldingStartMarker.test(n) ? n[0] == "`" && l.bgTokenizer.getState(e) == "start" ? "end" : "start" : "";
      }, this.getFoldWidgetRange = function(l, t, e) {
        var n = l.getLine(e), r = n.length, i = l.getLength(), s = e, c = e;
        if (!n.match(this.foldingStartMarker))
          return;
        if (n[0] == "`")
          if (l.bgTokenizer.getState(e) !== "start") {
            for (; ++e < i && (n = l.getLine(e), !(n[0] == "`" & n.substring(0, 3) == "```")); )
              ;
            return new f(s, r, e, 0);
          } else {
            for (; e-- > 0 && (n = l.getLine(e), !(n[0] == "`" & n.substring(0, 3) == "```")); )
              ;
            return new f(e, n.length, s, 0);
          }
        var g;
        function m(u) {
          return g = l.getTokens(u)[0], g && g.type.lastIndexOf(y, 0) === 0;
        }
        var y = "markup.heading";
        function x() {
          var u = g.value[0];
          return u == "=" ? 6 : u == "-" ? 5 : 7 - g.value.search(/[^#]|$/);
        }
        if (m(e)) {
          for (var o = x(); ++e < i; )
            if (!!m(e)) {
              var d = x();
              if (d >= o)
                break;
            }
          if (c = e - (!g || ["=", "-"].indexOf(g.value[0]) == -1 ? 1 : 2), c > s)
            for (; c > s && /^\s*$/.test(l.getLine(c)); )
              c--;
          if (c > s) {
            var b = l.getLine(c).length;
            return new f(s, r, c, b);
          }
        }
      };
    }.call(a.prototype);
  }), ace.define("ace/mode/sh_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text_highlight_rules").TextHighlightRules, f = $.reservedKeywords = "!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly", a = $.languageConstructs = "[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait", l = function() {
      var t = this.createKeywordMapper({
        keyword: f,
        "support.function.builtin": a,
        "invalid.deprecated": "debugger"
      }, "identifier"), e = "(?:(?:[1-9]\\d*)|(?:0))", n = "(?:\\.\\d+)", r = "(?:\\d+)", i = "(?:(?:" + r + "?" + n + ")|(?:" + r + "\\.))", s = "(?:(?:" + i + "|" + r + "))", c = "(?:" + s + "|" + i + ")", g = "(?:&" + r + ")", m = "[a-zA-Z_][a-zA-Z0-9_]*", y = "(?:" + m + "(?==))", x = "(?:\\$(?:SHLVL|\\$|\\!|\\?))", o = "(?:" + m + "\\s*\\(\\))";
      this.$rules = {
        start: [{
          token: "constant",
          regex: /\\./
        }, {
          token: ["text", "comment"],
          regex: /(^|\s)(#.*)$/
        }, {
          token: "string.start",
          regex: '"',
          push: [{
            token: "constant.language.escape",
            regex: /\\(?:[$`"\\]|$)/
          }, {
            include: "variables"
          }, {
            token: "keyword.operator",
            regex: /`/
          }, {
            token: "string.end",
            regex: '"',
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string",
          regex: "\\$'",
          push: [{
            token: "constant.language.escape",
            regex: /\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/
          }, {
            token: "string",
            regex: "'",
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }, {
          regex: "<<<",
          token: "keyword.operator"
        }, {
          stateName: "heredoc",
          regex: "(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",
          onMatch: function(d, b, u) {
            var p = d[2] == "-" ? "indentedHeredoc" : "heredoc", h = d.split(this.splitRegex);
            return u.push(p, h[4]), [
              { type: "constant", value: h[1] },
              { type: "text", value: h[2] },
              { type: "string", value: h[3] },
              { type: "support.class", value: h[4] },
              { type: "string", value: h[5] }
            ];
          },
          rules: {
            heredoc: [{
              onMatch: function(d, b, u) {
                return d === u[1] ? (u.shift(), u.shift(), this.next = u[0] || "start", "support.class") : (this.next = "", "string");
              },
              regex: ".*$",
              next: "start"
            }],
            indentedHeredoc: [{
              token: "string",
              regex: "^	+"
            }, {
              onMatch: function(d, b, u) {
                return d === u[1] ? (u.shift(), u.shift(), this.next = u[0] || "start", "support.class") : (this.next = "", "string");
              },
              regex: ".*$",
              next: "start"
            }]
          }
        }, {
          regex: "$",
          token: "empty",
          next: function(d, b) {
            return b[0] === "heredoc" || b[0] === "indentedHeredoc" ? b[0] : d;
          }
        }, {
          token: ["keyword", "text", "text", "text", "variable"],
          regex: /(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/
        }, {
          token: "variable.language",
          regex: x
        }, {
          token: "variable",
          regex: y
        }, {
          include: "variables"
        }, {
          token: "support.function",
          regex: o
        }, {
          token: "support.function",
          regex: g
        }, {
          token: "string",
          start: "'",
          end: "'"
        }, {
          token: "constant.numeric",
          regex: c
        }, {
          token: "constant.numeric",
          regex: e + "\\b"
        }, {
          token: t,
          regex: "[a-zA-Z_][a-zA-Z0-9_]*\\b"
        }, {
          token: "keyword.operator",
          regex: "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"
        }, {
          token: "punctuation.operator",
          regex: ";"
        }, {
          token: "paren.lparen",
          regex: "[\\[\\(\\{]"
        }, {
          token: "paren.rparen",
          regex: "[\\]]"
        }, {
          token: "paren.rparen",
          regex: "[\\)\\}]",
          next: "pop"
        }],
        variables: [{
          token: "variable",
          regex: /(\$)(\w+)/
        }, {
          token: ["variable", "paren.lparen"],
          regex: /(\$)(\()/,
          push: "start"
        }, {
          token: ["variable", "paren.lparen", "keyword.operator", "variable", "keyword.operator"],
          regex: /(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,
          push: "start"
        }, {
          token: "variable",
          regex: /\$[*@#?\-$!0_]/
        }, {
          token: ["variable", "paren.lparen"],
          regex: /(\$)(\{)/,
          push: "start"
        }]
      }, this.normalizeRules();
    };
    S.inherits(l, k), $.ShHighlightRules = l;
  }), ace.define("ace/mode/sh", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/sh_highlight_rules", "ace/range", "ace/mode/folding/cstyle", "ace/mode/behaviour/cstyle"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode, f = w("./sh_highlight_rules").ShHighlightRules, a = w("../range").Range, l = w("./folding/cstyle").FoldMode, t = w("./behaviour/cstyle").CstyleBehaviour, e = function() {
      this.HighlightRules = f, this.foldingRules = new l(), this.$behaviour = new t();
    };
    S.inherits(e, k), function() {
      this.lineCommentStart = "#", this.getNextLineIndent = function(r, i, s) {
        var c = this.$getIndent(i), g = this.getTokenizer().getLineTokens(i, r), m = g.tokens;
        if (m.length && m[m.length - 1].type == "comment")
          return c;
        if (r == "start") {
          var y = i.match(/^.*[\{\(\[:]\s*$/);
          y && (c += s);
        }
        return c;
      };
      var n = {
        pass: 1,
        return: 1,
        raise: 1,
        break: 1,
        continue: 1
      };
      this.checkOutdent = function(r, i, s) {
        if (s !== `\r
` && s !== "\r" && s !== `
`)
          return !1;
        var c = this.getTokenizer().getLineTokens(i.trim(), r).tokens;
        if (!c)
          return !1;
        do
          var g = c.pop();
        while (g && (g.type == "comment" || g.type == "text" && g.value.match(/^\s+$/)));
        return g ? g.type == "keyword" && n[g.value] : !1;
      }, this.autoOutdent = function(r, i, s) {
        s += 1;
        var c = this.$getIndent(i.getLine(s)), g = i.getTabString();
        c.slice(-g.length) == g && i.remove(new a(s, c.length - g.length, s, c.length));
      }, this.$id = "ace/mode/sh", this.snippetFileId = "ace/snippets/sh";
    }.call(e.prototype), $.Mode = e;
  }), ace.define("ace/mode/markdown", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript", "ace/mode/xml", "ace/mode/html", "ace/mode/markdown_highlight_rules", "ace/mode/folding/markdown", "ace/mode/javascript", "ace/mode/html", "ace/mode/sh", "ace/mode/sh", "ace/mode/xml", "ace/mode/css"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode;
    w("./javascript").Mode, w("./xml").Mode, w("./html").Mode;
    var f = w("./markdown_highlight_rules").MarkdownHighlightRules, a = w("./folding/markdown").FoldMode, l = function() {
      this.HighlightRules = f, this.createModeDelegates({
        javascript: w("./javascript").Mode,
        html: w("./html").Mode,
        bash: w("./sh").Mode,
        sh: w("./sh").Mode,
        xml: w("./xml").Mode,
        css: w("./css").Mode
      }), this.foldingRules = new a(), this.$behaviour = this.$defaultBehaviour;
    };
    S.inherits(l, k), function() {
      this.type = "text", this.blockComment = { start: "<!--", end: "-->" }, this.$quotes = { '"': '"', "`": "`" }, this.getNextLineIndent = function(t, e, n) {
        if (t == "listblock") {
          var r = /^(\s*)(?:([-+*])|(\d+)\.)(\s+)/.exec(e);
          if (!r)
            return "";
          var i = r[2];
          return i || (i = parseInt(r[3], 10) + 1 + "."), r[1] + i + r[4];
        } else
          return this.$getIndent(e);
      }, this.$id = "ace/mode/markdown", this.snippetFileId = "ace/snippets/markdown";
    }.call(l.prototype), $.Mode = l;
  }), function() {
    ace.require(["ace/mode/markdown"], function(w) {
      F && (F.exports = w);
    });
  }();
})(En);
var Mn = { exports: {} };
(function(F, N) {
  ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text_highlight_rules").TextHighlightRules, f = function() {
      this.$rules = {
        start: [
          {
            token: "comment.doc.tag",
            regex: "@[\\w\\d_]+"
          },
          f.getTagRule(),
          {
            defaultToken: "comment.doc",
            caseInsensitive: !0
          }
        ]
      };
    };
    S.inherits(f, k), f.getTagRule = function(a) {
      return {
        token: "comment.doc.tag.storage.type",
        regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
      };
    }, f.getStartRule = function(a) {
      return {
        token: "comment.doc",
        regex: "\\/\\*(?=\\*)",
        next: a
      };
    }, f.getEndRule = function(a) {
      return {
        token: "comment.doc",
        regex: "\\*\\/",
        next: a
      };
    }, $.DocCommentHighlightRules = f;
  }), ace.define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./doc_comment_highlight_rules").DocCommentHighlightRules, f = w("./text_highlight_rules").TextHighlightRules, a = "[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*", l = function(n) {
      var r = this.createKeywordMapper({
        "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
        keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type": "const|let|var|function",
        "constant.language": "null|Infinity|NaN|undefined",
        "support.function": "alert",
        "constant.language.boolean": "true|false"
      }, "identifier"), i = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void", s = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
      this.$rules = {
        no_regex: [
          k.getStartRule("doc-start"),
          e("no_regex"),
          {
            token: "string",
            regex: "'(?=.)",
            next: "qstring"
          },
          {
            token: "string",
            regex: '"(?=.)',
            next: "qqstring"
          },
          {
            token: "constant.numeric",
            regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
          },
          {
            token: "constant.numeric",
            regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "support.function",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator"
            ],
            regex: "(" + a + ")(\\.)(prototype)(\\.)(" + a + ")(\\s*)(=)",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(function)(\\s+)(" + a + ")(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "entity.name.function",
              "text",
              "punctuation.operator",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: [
              "text",
              "text",
              "storage.type",
              "text",
              "paren.lparen"
            ],
            regex: "(:)(\\s*)(function)(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: "keyword",
            regex: `from(?=\\s*('|"))`
          },
          {
            token: "keyword",
            regex: "(?:" + i + ")\\b",
            next: "start"
          },
          {
            token: ["support.constant"],
            regex: /that\b/
          },
          {
            token: ["storage.type", "punctuation.operator", "support.function.firebug"],
            regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
          },
          {
            token: r,
            regex: a
          },
          {
            token: "punctuation.operator",
            regex: /[.](?![.])/,
            next: "property"
          },
          {
            token: "storage.type",
            regex: /=>/,
            next: "start"
          },
          {
            token: "keyword.operator",
            regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
            next: "start"
          },
          {
            token: "punctuation.operator",
            regex: /[?:,;.]/,
            next: "start"
          },
          {
            token: "paren.lparen",
            regex: /[\[({]/,
            next: "start"
          },
          {
            token: "paren.rparen",
            regex: /[\])}]/
          },
          {
            token: "comment",
            regex: /^#!.*$/
          }
        ],
        property: [
          {
            token: "text",
            regex: "\\s+"
          },
          {
            token: [
              "storage.type",
              "punctuation.operator",
              "entity.name.function",
              "text",
              "keyword.operator",
              "text",
              "storage.type",
              "text",
              "entity.name.function",
              "text",
              "paren.lparen"
            ],
            regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
            next: "function_arguments"
          },
          {
            token: "punctuation.operator",
            regex: /[.](?![.])/
          },
          {
            token: "support.function",
            regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
          },
          {
            token: "support.function.dom",
            regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
          },
          {
            token: "support.constant",
            regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
          },
          {
            token: "identifier",
            regex: a
          },
          {
            regex: "",
            token: "empty",
            next: "no_regex"
          }
        ],
        start: [
          k.getStartRule("doc-start"),
          e("start"),
          {
            token: "string.regexp",
            regex: "\\/",
            next: "regex"
          },
          {
            token: "text",
            regex: "\\s+|^$",
            next: "start"
          },
          {
            token: "empty",
            regex: "",
            next: "no_regex"
          }
        ],
        regex: [
          {
            token: "regexp.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            token: "string.regexp",
            regex: "/[sxngimy]*",
            next: "no_regex"
          },
          {
            token: "invalid",
            regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
          },
          {
            token: "constant.language.escape",
            regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
          },
          {
            token: "constant.language.delimiter",
            regex: /\|/
          },
          {
            token: "constant.language.escape",
            regex: /\[\^?/,
            next: "regex_character_class"
          },
          {
            token: "empty",
            regex: "$",
            next: "no_regex"
          },
          {
            defaultToken: "string.regexp"
          }
        ],
        regex_character_class: [
          {
            token: "regexp.charclass.keyword.operator",
            regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
          },
          {
            token: "constant.language.escape",
            regex: "]",
            next: "regex"
          },
          {
            token: "constant.language.escape",
            regex: "-"
          },
          {
            token: "empty",
            regex: "$",
            next: "no_regex"
          },
          {
            defaultToken: "string.regexp.charachterclass"
          }
        ],
        function_arguments: [
          {
            token: "variable.parameter",
            regex: a
          },
          {
            token: "punctuation.operator",
            regex: "[, ]+"
          },
          {
            token: "punctuation.operator",
            regex: "$"
          },
          {
            token: "empty",
            regex: "",
            next: "no_regex"
          }
        ],
        qqstring: [
          {
            token: "constant.language.escape",
            regex: s
          },
          {
            token: "string",
            regex: "\\\\$",
            consumeLineEnd: !0
          },
          {
            token: "string",
            regex: '"|$',
            next: "no_regex"
          },
          {
            defaultToken: "string"
          }
        ],
        qstring: [
          {
            token: "constant.language.escape",
            regex: s
          },
          {
            token: "string",
            regex: "\\\\$",
            consumeLineEnd: !0
          },
          {
            token: "string",
            regex: "'|$",
            next: "no_regex"
          },
          {
            defaultToken: "string"
          }
        ]
      }, (!n || !n.noES6) && (this.$rules.no_regex.unshift({
        regex: "[{}]",
        onMatch: function(c, g, m) {
          if (this.next = c == "{" ? this.nextState : "", c == "{" && m.length)
            m.unshift("start", g);
          else if (c == "}" && m.length && (m.shift(), this.next = m.shift(), this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1))
            return "paren.quasi.end";
          return c == "{" ? "paren.lparen" : "paren.rparen";
        },
        nextState: "start"
      }, {
        token: "string.quasi.start",
        regex: /`/,
        push: [{
          token: "constant.language.escape",
          regex: s
        }, {
          token: "paren.quasi.start",
          regex: /\${/,
          push: "start"
        }, {
          token: "string.quasi.end",
          regex: /`/,
          next: "pop"
        }, {
          defaultToken: "string.quasi"
        }]
      }), (!n || n.jsx != !1) && t.call(this)), this.embedRules(k, "doc-", [k.getEndRule("no_regex")]), this.normalizeRules();
    };
    S.inherits(l, f);
    function t() {
      var n = a.replace("\\d", "\\d\\-"), r = {
        onMatch: function(s, c, g) {
          var m = s.charAt(1) == "/" ? 2 : 1;
          return m == 1 ? (c != this.nextState ? g.unshift(this.next, this.nextState, 0) : g.unshift(this.next), g[2]++) : m == 2 && c == this.nextState && (g[1]--, (!g[1] || g[1] < 0) && (g.shift(), g.shift())), [{
            type: "meta.tag.punctuation." + (m == 1 ? "" : "end-") + "tag-open.xml",
            value: s.slice(0, m)
          }, {
            type: "meta.tag.tag-name.xml",
            value: s.substr(m)
          }];
        },
        regex: "</?" + n,
        next: "jsxAttributes",
        nextState: "jsx"
      };
      this.$rules.start.unshift(r);
      var i = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
      };
      this.$rules.jsx = [
        i,
        r,
        { include: "reference" },
        { defaultToken: "string" }
      ], this.$rules.jsxAttributes = [
        {
          token: "meta.tag.punctuation.tag-close.xml",
          regex: "/?>",
          onMatch: function(s, c, g) {
            return c == g[0] && g.shift(), s.length == 2 && (g[0] == this.nextState && g[1]--, (!g[1] || g[1] < 0) && g.splice(0, 2)), this.next = g[0] || "start", [{ type: this.token, value: s }];
          },
          nextState: "jsx"
        },
        i,
        e("jsxAttributes"),
        {
          token: "entity.other.attribute-name.xml",
          regex: n
        },
        {
          token: "keyword.operator.attribute-equals.xml",
          regex: "="
        },
        {
          token: "text.tag-whitespace.xml",
          regex: "\\s+"
        },
        {
          token: "string.attribute-value.xml",
          regex: "'",
          stateName: "jsx_attr_q",
          push: [
            { token: "string.attribute-value.xml", regex: "'", next: "pop" },
            { include: "reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        },
        {
          token: "string.attribute-value.xml",
          regex: '"',
          stateName: "jsx_attr_qq",
          push: [
            { token: "string.attribute-value.xml", regex: '"', next: "pop" },
            { include: "reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        },
        r
      ], this.$rules.reference = [{
        token: "constant.language.escape.reference.xml",
        regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
      }];
    }
    function e(n) {
      return [
        {
          token: "comment",
          regex: /\/\*/,
          next: [
            k.getTagRule(),
            { token: "comment", regex: "\\*\\/", next: n || "pop" },
            { defaultToken: "comment", caseInsensitive: !0 }
          ]
        },
        {
          token: "comment",
          regex: "\\/\\/",
          next: [
            k.getTagRule(),
            { token: "comment", regex: "$|^", next: n || "pop" },
            { defaultToken: "comment", caseInsensitive: !0 }
          ]
        }
      ];
    }
    $.JavaScriptHighlightRules = l;
  }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(w, $, L) {
    var S = w("../range").Range, k = function() {
    };
    (function() {
      this.checkOutdent = function(f, a) {
        return /^\s+$/.test(f) ? /^\s*\}/.test(a) : !1;
      }, this.autoOutdent = function(f, a) {
        var l = f.getLine(a), t = l.match(/^(\s*\})/);
        if (!t)
          return 0;
        var e = t[1].length, n = f.findMatchingBracket({ row: a, column: e });
        if (!n || n.row == a)
          return 0;
        var r = this.$getIndent(f.getLine(n.row));
        f.replace(new S(a, 0, a, e - 1), r);
      }, this.$getIndent = function(f) {
        return f.match(/^\s*/)[0];
      };
    }).call(k.prototype), $.MatchingBraceOutdent = k;
  }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("../../range").Range, f = w("./fold_mode").FoldMode, a = $.FoldMode = function(l) {
      l && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + l.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + l.end)));
    };
    S.inherits(a, f), function() {
      this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(l, t, e) {
        var n = l.getLine(e);
        if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n))
          return "";
        var r = this._getFoldWidgetBase(l, t, e);
        return !r && this.startRegionRe.test(n) ? "start" : r;
      }, this.getFoldWidgetRange = function(l, t, e, n) {
        var r = l.getLine(e);
        if (this.startRegionRe.test(r))
          return this.getCommentRegionBlock(l, r, e);
        var c = r.match(this.foldingStartMarker);
        if (c) {
          var i = c.index;
          if (c[1])
            return this.openingBracketBlock(l, c[1], e, i);
          var s = l.getCommentFoldRange(e, i + c[0].length, 1);
          return s && !s.isMultiLine() && (n ? s = this.getSectionRange(l, e) : t != "all" && (s = null)), s;
        }
        if (t !== "markbegin") {
          var c = r.match(this.foldingStopMarker);
          if (c) {
            var i = c.index + c[0].length;
            return c[1] ? this.closingBracketBlock(l, c[1], e, i) : l.getCommentFoldRange(e, i, -1);
          }
        }
      }, this.getSectionRange = function(l, t) {
        var e = l.getLine(t), n = e.search(/\S/), r = t, i = e.length;
        t = t + 1;
        for (var s = t, c = l.getLength(); ++t < c; ) {
          e = l.getLine(t);
          var g = e.search(/\S/);
          if (g !== -1) {
            if (n > g)
              break;
            var m = this.getFoldWidgetRange(l, "all", t);
            if (m) {
              if (m.start.row <= r)
                break;
              if (m.isMultiLine())
                t = m.end.row;
              else if (n == g)
                break;
            }
            s = t;
          }
        }
        return new k(r, i, s, l.getLine(s).length);
      }, this.getCommentRegionBlock = function(l, t, e) {
        for (var n = t.search(/\s*$/), r = l.getLength(), i = e, s = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, c = 1; ++e < r; ) {
          t = l.getLine(e);
          var g = s.exec(t);
          if (!!g && (g[1] ? c-- : c++, !c))
            break;
        }
        var m = e;
        if (m > i)
          return new k(i, n, m, t.length);
      };
    }.call(a.prototype);
  }), ace.define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode, f = w("./javascript_highlight_rules").JavaScriptHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, l = w("../worker/worker_client").WorkerClient, t = w("./behaviour/cstyle").CstyleBehaviour, e = w("./folding/cstyle").FoldMode, n = function() {
      this.HighlightRules = f, this.$outdent = new a(), this.$behaviour = new t(), this.foldingRules = new e();
    };
    S.inherits(n, k), function() {
      this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.$quotes = { '"': '"', "'": "'", "`": "`" }, this.getNextLineIndent = function(r, i, s) {
        var c = this.$getIndent(i), g = this.getTokenizer().getLineTokens(i, r), m = g.tokens, y = g.state;
        if (m.length && m[m.length - 1].type == "comment")
          return c;
        if (r == "start" || r == "no_regex") {
          var x = i.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
          x && (c += s);
        } else if (r == "doc-start") {
          if (y == "start" || y == "no_regex")
            return "";
          var x = i.match(/^\s*(\/?)\*/);
          x && (x[1] && (c += " "), c += "* ");
        }
        return c;
      }, this.checkOutdent = function(r, i, s) {
        return this.$outdent.checkOutdent(i, s);
      }, this.autoOutdent = function(r, i, s) {
        this.$outdent.autoOutdent(i, s);
      }, this.createWorker = function(r) {
        var i = new l(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        return i.attachToDocument(r.getDocument()), i.on("annotate", function(s) {
          r.setAnnotations(s.data);
        }), i.on("terminate", function() {
          r.clearAnnotations();
        }), i;
      }, this.$id = "ace/mode/javascript", this.snippetFileId = "ace/snippets/javascript";
    }.call(n.prototype), $.Mode = n;
  }), ace.define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop");
    w("../lib/lang");
    var k = w("./text_highlight_rules").TextHighlightRules, f = $.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index", a = $.supportFunction = "rgb|rgba|url|attr|counter|counters", l = $.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom", t = $.supportConstantColor = "aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen", e = $.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace", n = $.numRe = "\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))", r = $.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b", i = $.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b", s = function() {
      var c = this.createKeywordMapper({
        "support.function": a,
        "support.constant": l,
        "support.type": f,
        "support.constant.color": t,
        "support.constant.fonts": e
      }, "text", !0);
      this.$rules = {
        start: [{
          include: ["strings", "url", "comments"]
        }, {
          token: "paren.lparen",
          regex: "\\{",
          next: "ruleset"
        }, {
          token: "paren.rparen",
          regex: "\\}"
        }, {
          token: "string",
          regex: "@(?!viewport)",
          next: "media"
        }, {
          token: "keyword",
          regex: "#[a-z0-9-_]+"
        }, {
          token: "keyword",
          regex: "%"
        }, {
          token: "variable",
          regex: "\\.[a-z0-9-_]+"
        }, {
          token: "string",
          regex: ":[a-z0-9-_]+"
        }, {
          token: "constant.numeric",
          regex: n
        }, {
          token: "constant",
          regex: "[a-z0-9-_]+"
        }, {
          caseInsensitive: !0
        }],
        media: [{
          include: ["strings", "url", "comments"]
        }, {
          token: "paren.lparen",
          regex: "\\{",
          next: "start"
        }, {
          token: "paren.rparen",
          regex: "\\}",
          next: "start"
        }, {
          token: "string",
          regex: ";",
          next: "start"
        }, {
          token: "keyword",
          regex: "(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"
        }],
        comments: [{
          token: "comment",
          regex: "\\/\\*",
          push: [{
            token: "comment",
            regex: "\\*\\/",
            next: "pop"
          }, {
            defaultToken: "comment"
          }]
        }],
        ruleset: [{
          regex: "-(webkit|ms|moz|o)-",
          token: "text"
        }, {
          token: "punctuation.operator",
          regex: "[:;]"
        }, {
          token: "paren.rparen",
          regex: "\\}",
          next: "start"
        }, {
          include: ["strings", "url", "comments"]
        }, {
          token: ["constant.numeric", "keyword"],
          regex: "(" + n + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"
        }, {
          token: "constant.numeric",
          regex: n
        }, {
          token: "constant.numeric",
          regex: "#[a-f0-9]{6}"
        }, {
          token: "constant.numeric",
          regex: "#[a-f0-9]{3}"
        }, {
          token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
          regex: r
        }, {
          token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
          regex: i
        }, {
          include: "url"
        }, {
          token: c,
          regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }, {
          caseInsensitive: !0
        }],
        url: [{
          token: "support.function",
          regex: "(?:url(:?-prefix)?|domain|regexp)\\(",
          push: [{
            token: "support.function",
            regex: "\\)",
            next: "pop"
          }, {
            defaultToken: "string"
          }]
        }],
        strings: [{
          token: "string.start",
          regex: "'",
          push: [{
            token: "string.end",
            regex: "'|$",
            next: "pop"
          }, {
            include: "escapes"
          }, {
            token: "constant.language.escape",
            regex: /\\$/,
            consumeLineEnd: !0
          }, {
            defaultToken: "string"
          }]
        }, {
          token: "string.start",
          regex: '"',
          push: [{
            token: "string.end",
            regex: '"|$',
            next: "pop"
          }, {
            include: "escapes"
          }, {
            token: "constant.language.escape",
            regex: /\\$/,
            consumeLineEnd: !0
          }, {
            defaultToken: "string"
          }]
        }],
        escapes: [{
          token: "constant.language.escape",
          regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/
        }]
      }, this.normalizeRules();
    };
    S.inherits(s, k), $.CssHighlightRules = s;
  }), ace.define("ace/mode/css_completions", ["require", "exports", "module"], function(w, $, L) {
    var S = {
      background: { "#$0": 1 },
      "background-color": { "#$0": 1, transparent: 1, fixed: 1 },
      "background-image": { "url('/$0')": 1 },
      "background-repeat": { repeat: 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, inherit: 1 },
      "background-position": { bottom: 2, center: 2, left: 2, right: 2, top: 2, inherit: 2 },
      "background-attachment": { scroll: 1, fixed: 1 },
      "background-size": { cover: 1, contain: 1 },
      "background-clip": { "border-box": 1, "padding-box": 1, "content-box": 1 },
      "background-origin": { "border-box": 1, "padding-box": 1, "content-box": 1 },
      border: { "solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1 },
      "border-color": { "#$0": 1 },
      "border-style": { solid: 2, dashed: 2, dotted: 2, double: 2, groove: 2, hidden: 2, inherit: 2, inset: 2, none: 2, outset: 2, ridged: 2 },
      "border-collapse": { collapse: 1, separate: 1 },
      bottom: { px: 1, em: 1, "%": 1 },
      clear: { left: 1, right: 1, both: 1, none: 1 },
      color: { "#$0": 1, "rgb(#$00,0,0)": 1 },
      cursor: { default: 1, pointer: 1, move: 1, text: 1, wait: 1, help: 1, progress: 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1 },
      display: { none: 1, block: 1, inline: 1, "inline-block": 1, "table-cell": 1 },
      "empty-cells": { show: 1, hide: 1 },
      float: { left: 1, right: 1, none: 1 },
      "font-family": { Arial: 2, "Comic Sans MS": 2, Consolas: 2, "Courier New": 2, Courier: 2, Georgia: 2, Monospace: 2, "Sans-Serif": 2, "Segoe UI": 2, Tahoma: 2, "Times New Roman": 2, "Trebuchet MS": 2, Verdana: 1 },
      "font-size": { px: 1, em: 1, "%": 1 },
      "font-weight": { bold: 1, normal: 1 },
      "font-style": { italic: 1, normal: 1 },
      "font-variant": { normal: 1, "small-caps": 1 },
      height: { px: 1, em: 1, "%": 1 },
      left: { px: 1, em: 1, "%": 1 },
      "letter-spacing": { normal: 1 },
      "line-height": { normal: 1 },
      "list-style-type": { none: 1, disc: 1, circle: 1, square: 1, decimal: 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, georgian: 1, "lower-alpha": 1, "upper-alpha": 1 },
      margin: { px: 1, em: 1, "%": 1 },
      "margin-right": { px: 1, em: 1, "%": 1 },
      "margin-left": { px: 1, em: 1, "%": 1 },
      "margin-top": { px: 1, em: 1, "%": 1 },
      "margin-bottom": { px: 1, em: 1, "%": 1 },
      "max-height": { px: 1, em: 1, "%": 1 },
      "max-width": { px: 1, em: 1, "%": 1 },
      "min-height": { px: 1, em: 1, "%": 1 },
      "min-width": { px: 1, em: 1, "%": 1 },
      overflow: { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      "overflow-x": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      "overflow-y": { hidden: 1, visible: 1, auto: 1, scroll: 1 },
      padding: { px: 1, em: 1, "%": 1 },
      "padding-top": { px: 1, em: 1, "%": 1 },
      "padding-right": { px: 1, em: 1, "%": 1 },
      "padding-bottom": { px: 1, em: 1, "%": 1 },
      "padding-left": { px: 1, em: 1, "%": 1 },
      "page-break-after": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 },
      "page-break-before": { auto: 1, always: 1, avoid: 1, left: 1, right: 1 },
      position: { absolute: 1, relative: 1, fixed: 1, static: 1 },
      right: { px: 1, em: 1, "%": 1 },
      "table-layout": { fixed: 1, auto: 1 },
      "text-decoration": { none: 1, underline: 1, "line-through": 1, blink: 1 },
      "text-align": { left: 1, right: 1, center: 1, justify: 1 },
      "text-transform": { capitalize: 1, uppercase: 1, lowercase: 1, none: 1 },
      top: { px: 1, em: 1, "%": 1 },
      "vertical-align": { top: 1, bottom: 1 },
      visibility: { hidden: 1, visible: 1 },
      "white-space": { nowrap: 1, normal: 1, pre: 1, "pre-line": 1, "pre-wrap": 1 },
      width: { px: 1, em: 1, "%": 1 },
      "word-spacing": { normal: 1 },
      filter: { "alpha(opacity=$0100)": 1 },
      "text-shadow": { "$02px 2px 2px #777": 1 },
      "text-overflow": { "ellipsis-word": 1, clip: 1, ellipsis: 1 },
      "-moz-border-radius": 1,
      "-moz-border-radius-topright": 1,
      "-moz-border-radius-bottomright": 1,
      "-moz-border-radius-topleft": 1,
      "-moz-border-radius-bottomleft": 1,
      "-webkit-border-radius": 1,
      "-webkit-border-top-right-radius": 1,
      "-webkit-border-top-left-radius": 1,
      "-webkit-border-bottom-right-radius": 1,
      "-webkit-border-bottom-left-radius": 1,
      "-moz-box-shadow": 1,
      "-webkit-box-shadow": 1,
      transform: { "rotate($00deg)": 1, "skew($00deg)": 1 },
      "-moz-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 },
      "-webkit-transform": { "rotate($00deg)": 1, "skew($00deg)": 1 }
    }, k = function() {
    };
    (function() {
      this.completionsDefined = !1, this.defineCompletions = function() {
        if (document) {
          var f = document.createElement("c").style;
          for (var a in f)
            if (typeof f[a] == "string") {
              var l = a.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase();
              });
              S.hasOwnProperty(l) || (S[l] = 1);
            }
        }
        this.completionsDefined = !0;
      }, this.getCompletions = function(f, a, l, t) {
        if (this.completionsDefined || this.defineCompletions(), f === "ruleset" || a.$mode.$id == "ace/mode/scss") {
          var e = a.getLine(l.row).substr(0, l.column), n = /\([^)]*$/.test(e);
          return n && (e = e.substr(e.lastIndexOf("(") + 1)), /:[^;]+$/.test(e) ? (/([\w\-]+):[^:]*$/.test(e), this.getPropertyValueCompletions(f, a, l, t)) : this.getPropertyCompletions(f, a, l, t, n);
        }
        return [];
      }, this.getPropertyCompletions = function(f, a, l, t, e) {
        e = e || !1;
        var n = Object.keys(S);
        return n.map(function(r) {
          return {
            caption: r,
            snippet: r + ": $0" + (e ? "" : ";"),
            meta: "property",
            score: 1e6
          };
        });
      }, this.getPropertyValueCompletions = function(f, a, l, t) {
        var e = a.getLine(l.row).substr(0, l.column), n = (/([\w\-]+):[^:]*$/.exec(e) || {})[1];
        if (!n)
          return [];
        var r = [];
        return n in S && typeof S[n] == "object" && (r = Object.keys(S[n])), r.map(function(i) {
          return {
            caption: i,
            snippet: i,
            meta: "property value",
            score: 1e6
          };
        });
      };
    }).call(k.prototype), $.CssCompletions = k;
  }), ace.define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function(w, $, L) {
    var S = w("../../lib/oop");
    w("../behaviour").Behaviour;
    var k = w("./cstyle").CstyleBehaviour, f = w("../../token_iterator").TokenIterator, a = function() {
      this.inherit(k), this.add("colon", "insertion", function(l, t, e, n, r) {
        if (r === ":" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = new f(n, i.row, i.column), c = s.getCurrentToken();
          if (c && c.value.match(/\s+/) && (c = s.stepBackward()), c && c.type === "support.type") {
            var g = n.doc.getLine(i.row), m = g.substring(i.column, i.column + 1);
            if (m === ":")
              return {
                text: "",
                selection: [1, 1]
              };
            if (/^(\s+[^;]|\s*$)/.test(g.substring(i.column)))
              return {
                text: ":;",
                selection: [1, 1]
              };
          }
        }
      }), this.add("colon", "deletion", function(l, t, e, n, r) {
        var i = n.doc.getTextRange(r);
        if (!r.isMultiLine() && i === ":") {
          var s = e.getCursorPosition(), c = new f(n, s.row, s.column), g = c.getCurrentToken();
          if (g && g.value.match(/\s+/) && (g = c.stepBackward()), g && g.type === "support.type") {
            var m = n.doc.getLine(r.start.row), y = m.substring(r.end.column, r.end.column + 1);
            if (y === ";")
              return r.end.column++, r;
          }
        }
      }), this.add("semicolon", "insertion", function(l, t, e, n, r) {
        if (r === ";" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = n.doc.getLine(i.row), c = s.substring(i.column, i.column + 1);
          if (c === ";")
            return {
              text: "",
              selection: [1, 1]
            };
        }
      }), this.add("!important", "insertion", function(l, t, e, n, r) {
        if (r === "!" && e.selection.isEmpty()) {
          var i = e.getCursorPosition(), s = n.doc.getLine(i.row);
          if (/^\s*(;|}|$)/.test(s.substring(i.column)))
            return {
              text: "!important",
              selection: [10, 10]
            };
        }
      });
    };
    S.inherits(a, k), $.CssBehaviour = a;
  }), ace.define("ace/mode/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/css_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/css_completions", "ace/mode/behaviour/css", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text").Mode, f = w("./css_highlight_rules").CssHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, l = w("../worker/worker_client").WorkerClient, t = w("./css_completions").CssCompletions, e = w("./behaviour/css").CssBehaviour, n = w("./folding/cstyle").FoldMode, r = function() {
      this.HighlightRules = f, this.$outdent = new a(), this.$behaviour = new e(), this.$completer = new t(), this.foldingRules = new n();
    };
    S.inherits(r, k), function() {
      this.foldingRules = "cStyle", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(i, s, c) {
        var g = this.$getIndent(s), m = this.getTokenizer().getLineTokens(s, i).tokens;
        if (m.length && m[m.length - 1].type == "comment")
          return g;
        var y = s.match(/^.*\{\s*$/);
        return y && (g += c), g;
      }, this.checkOutdent = function(i, s, c) {
        return this.$outdent.checkOutdent(s, c);
      }, this.autoOutdent = function(i, s, c) {
        this.$outdent.autoOutdent(s, c);
      }, this.getCompletions = function(i, s, c, g) {
        return this.$completer.getCompletions(i, s, c, g);
      }, this.createWorker = function(i) {
        var s = new l(["ace"], "ace/mode/css_worker", "Worker");
        return s.attachToDocument(i.getDocument()), s.on("annotate", function(c) {
          i.setAnnotations(c.data);
        }), s.on("terminate", function() {
          i.clearAnnotations();
        }), s;
      }, this.$id = "ace/mode/css", this.snippetFileId = "ace/snippets/css";
    }.call(r.prototype), $.Mode = r;
  }), ace.define("ace/mode/xml_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./text_highlight_rules").TextHighlightRules, f = function(a) {
      var l = "[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";
      this.$rules = {
        start: [
          { token: "string.cdata.xml", regex: "<\\!\\[CDATA\\[", next: "cdata" },
          {
            token: ["punctuation.instruction.xml", "keyword.instruction.xml"],
            regex: "(<\\?)(" + l + ")",
            next: "processing_instruction"
          },
          { token: "comment.start.xml", regex: "<\\!--", next: "comment" },
          {
            token: ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
            regex: "(<\\!)(DOCTYPE)(?=[\\s])",
            next: "doctype",
            caseInsensitive: !0
          },
          { include: "tag" },
          { token: "text.end-tag-open.xml", regex: "</" },
          { token: "text.tag-open.xml", regex: "<" },
          { include: "reference" },
          { defaultToken: "text.xml" }
        ],
        processing_instruction: [{
          token: "entity.other.attribute-name.decl-attribute-name.xml",
          regex: l
        }, {
          token: "keyword.operator.decl-attribute-equals.xml",
          regex: "="
        }, {
          include: "whitespace"
        }, {
          include: "string"
        }, {
          token: "punctuation.xml-decl.xml",
          regex: "\\?>",
          next: "start"
        }],
        doctype: [
          { include: "whitespace" },
          { include: "string" },
          { token: "xml-pe.doctype.xml", regex: ">", next: "start" },
          { token: "xml-pe.xml", regex: "[-_a-zA-Z0-9:]+" },
          { token: "punctuation.int-subset", regex: "\\[", push: "int_subset" }
        ],
        int_subset: [{
          token: "text.xml",
          regex: "\\s+"
        }, {
          token: "punctuation.int-subset.xml",
          regex: "]",
          next: "pop"
        }, {
          token: ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
          regex: "(<\\!)(" + l + ")",
          push: [
            {
              token: "text",
              regex: "\\s+"
            },
            {
              token: "punctuation.markup-decl.xml",
              regex: ">",
              next: "pop"
            },
            { include: "string" }
          ]
        }],
        cdata: [
          { token: "string.cdata.xml", regex: "\\]\\]>", next: "start" },
          { token: "text.xml", regex: "\\s+" },
          { token: "text.xml", regex: "(?:[^\\]]|\\](?!\\]>))+" }
        ],
        comment: [
          { token: "comment.end.xml", regex: "-->", next: "start" },
          { defaultToken: "comment.xml" }
        ],
        reference: [{
          token: "constant.language.escape.reference.xml",
          regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],
        attr_reference: [{
          token: "constant.language.escape.reference.attribute-value.xml",
          regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],
        tag: [{
          token: ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
          regex: "(?:(<)|(</))((?:" + l + ":)?" + l + ")",
          next: [
            { include: "attributes" },
            { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "start" }
          ]
        }],
        tag_whitespace: [
          { token: "text.tag-whitespace.xml", regex: "\\s+" }
        ],
        whitespace: [
          { token: "text.whitespace.xml", regex: "\\s+" }
        ],
        string: [{
          token: "string.xml",
          regex: "'",
          push: [
            { token: "string.xml", regex: "'", next: "pop" },
            { defaultToken: "string.xml" }
          ]
        }, {
          token: "string.xml",
          regex: '"',
          push: [
            { token: "string.xml", regex: '"', next: "pop" },
            { defaultToken: "string.xml" }
          ]
        }],
        attributes: [{
          token: "entity.other.attribute-name.xml",
          regex: l
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "="
        }, {
          include: "tag_whitespace"
        }, {
          include: "attribute_value"
        }],
        attribute_value: [{
          token: "string.attribute-value.xml",
          regex: "'",
          push: [
            { token: "string.attribute-value.xml", regex: "'", next: "pop" },
            { include: "attr_reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        }, {
          token: "string.attribute-value.xml",
          regex: '"',
          push: [
            { token: "string.attribute-value.xml", regex: '"', next: "pop" },
            { include: "attr_reference" },
            { defaultToken: "string.attribute-value.xml" }
          ]
        }]
      }, this.constructor === f && this.normalizeRules();
    };
    (function() {
      this.embedTagRules = function(a, l, t) {
        this.$rules.tag.unshift({
          token: ["meta.tag.punctuation.tag-open.xml", "meta.tag." + t + ".tag-name.xml"],
          regex: "(<)(" + t + "(?=\\s|>|$))",
          next: [
            { include: "attributes" },
            { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: l + "start" }
          ]
        }), this.$rules[t + "-end"] = [
          { include: "attributes" },
          {
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            next: "start",
            onMatch: function(e, n, r) {
              return r.splice(0), this.token;
            }
          }
        ], this.embedRules(a, l, [{
          token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + t + ".tag-name.xml"],
          regex: "(</)(" + t + "(?=\\s|>|$))",
          next: t + "-end"
        }, {
          token: "string.cdata.xml",
          regex: "<\\!\\[CDATA\\["
        }, {
          token: "string.cdata.xml",
          regex: "\\]\\]>"
        }]);
      };
    }).call(k.prototype), S.inherits(f, k), $.XmlHighlightRules = f;
  }), ace.define("ace/mode/html_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/lang"), f = w("./css_highlight_rules").CssHighlightRules, a = w("./javascript_highlight_rules").JavaScriptHighlightRules, l = w("./xml_highlight_rules").XmlHighlightRules, t = k.createMap({
      a: "anchor",
      button: "form",
      form: "form",
      img: "image",
      input: "form",
      label: "form",
      option: "form",
      script: "script",
      select: "form",
      textarea: "form",
      style: "style",
      table: "table",
      tbody: "table",
      td: "table",
      tfoot: "table",
      th: "table",
      tr: "table"
    }), e = function() {
      l.call(this), this.addRules({
        attributes: [{
          include: "tag_whitespace"
        }, {
          token: "entity.other.attribute-name.xml",
          regex: "[-_a-zA-Z0-9:.]+"
        }, {
          token: "keyword.operator.attribute-equals.xml",
          regex: "=",
          push: [{
            include: "tag_whitespace"
          }, {
            token: "string.unquoted.attribute-value.html",
            regex: "[^<>='\"`\\s]+",
            next: "pop"
          }, {
            token: "empty",
            regex: "",
            next: "pop"
          }]
        }, {
          include: "attribute_value"
        }],
        tag: [{
          token: function(n, r) {
            var i = t[r];
            return [
              "meta.tag.punctuation." + (n == "<" ? "" : "end-") + "tag-open.xml",
              "meta.tag" + (i ? "." + i : "") + ".tag-name.xml"
            ];
          },
          regex: "(</?)([-_a-zA-Z0-9:.]+)",
          next: "tag_stuff"
        }],
        tag_stuff: [
          { include: "attributes" },
          { token: "meta.tag.punctuation.tag-close.xml", regex: "/?>", next: "start" }
        ]
      }), this.embedTagRules(f, "css-", "style"), this.embedTagRules(new a({ jsx: !1 }).getRules(), "js-", "script"), this.constructor === e && this.normalizeRules();
    };
    S.inherits(e, l), $.HtmlHighlightRules = e;
  }), ace.define("ace/mode/behaviour/xml", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("../behaviour").Behaviour, f = w("../../token_iterator").TokenIterator;
    w("../../lib/lang");
    function a(t, e) {
      return t && t.type.lastIndexOf(e + ".xml") > -1;
    }
    var l = function() {
      this.add("string_dquotes", "insertion", function(t, e, n, r, i) {
        if (i == '"' || i == "'") {
          var s = i, c = r.doc.getTextRange(n.getSelectionRange());
          if (c !== "" && c !== "'" && c != '"' && n.getWrapBehavioursEnabled())
            return {
              text: s + c + s,
              selection: !1
            };
          var g = n.getCursorPosition(), m = r.doc.getLine(g.row), y = m.substring(g.column, g.column + 1), x = new f(r, g.row, g.column), o = x.getCurrentToken();
          if (y == s && (a(o, "attribute-value") || a(o, "string")))
            return {
              text: "",
              selection: [1, 1]
            };
          if (o || (o = x.stepBackward()), !o)
            return;
          for (; a(o, "tag-whitespace") || a(o, "whitespace"); )
            o = x.stepBackward();
          var d = !y || y.match(/\s/);
          if (a(o, "attribute-equals") && (d || y == ">") || a(o, "decl-attribute-equals") && (d || y == "?"))
            return {
              text: s + s,
              selection: [1, 1]
            };
        }
      }), this.add("string_dquotes", "deletion", function(t, e, n, r, i) {
        var s = r.doc.getTextRange(i);
        if (!i.isMultiLine() && (s == '"' || s == "'")) {
          var c = r.doc.getLine(i.start.row), g = c.substring(i.start.column + 1, i.start.column + 2);
          if (g == s)
            return i.end.column++, i;
        }
      }), this.add("autoclosing", "insertion", function(t, e, n, r, i) {
        if (i == ">") {
          var s = n.getSelectionRange().start, c = new f(r, s.row, s.column), g = c.getCurrentToken() || c.stepBackward();
          if (!g || !(a(g, "tag-name") || a(g, "tag-whitespace") || a(g, "attribute-name") || a(g, "attribute-equals") || a(g, "attribute-value")) || a(g, "reference.attribute-value"))
            return;
          if (a(g, "attribute-value")) {
            var m = c.getCurrentTokenColumn() + g.value.length;
            if (s.column < m)
              return;
            if (s.column == m) {
              var y = c.stepForward();
              if (y && a(y, "attribute-value"))
                return;
              c.stepBackward();
            }
          }
          if (/^\s*>/.test(r.getLine(s.row).slice(s.column)))
            return;
          for (; !a(g, "tag-name"); )
            if (g = c.stepBackward(), g.value == "<") {
              g = c.stepForward();
              break;
            }
          var x = c.getCurrentTokenRow(), o = c.getCurrentTokenColumn();
          if (a(c.stepBackward(), "end-tag-open"))
            return;
          var d = g.value;
          return x == s.row && (d = d.substring(0, s.column - o)), this.voidElements.hasOwnProperty(d.toLowerCase()) ? void 0 : {
            text: "></" + d + ">",
            selection: [1, 1]
          };
        }
      }), this.add("autoindent", "insertion", function(t, e, n, r, i) {
        if (i == `
`) {
          var s = n.getCursorPosition(), c = r.getLine(s.row), g = new f(r, s.row, s.column), m = g.getCurrentToken();
          if (m && m.type.indexOf("tag-close") !== -1) {
            if (m.value == "/>")
              return;
            for (; m && m.type.indexOf("tag-name") === -1; )
              m = g.stepBackward();
            if (!m)
              return;
            var y = m.value, x = g.getCurrentTokenRow();
            if (m = g.stepBackward(), !m || m.type.indexOf("end-tag") !== -1)
              return;
            if (this.voidElements && !this.voidElements[y]) {
              var o = r.getTokenAt(s.row, s.column + 1), c = r.getLine(x), d = this.$getIndent(c), b = d + r.getTabString();
              return o && o.value === "</" ? {
                text: `
` + b + `
` + d,
                selection: [1, b.length, 1, b.length]
              } : {
                text: `
` + b
              };
            }
          }
        }
      });
    };
    S.inherits(l, k), $.XmlBehaviour = l;
  }), ace.define("ace/mode/folding/mixed", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("./fold_mode").FoldMode, f = $.FoldMode = function(a, l) {
      this.defaultMode = a, this.subModes = l;
    };
    S.inherits(f, k), function() {
      this.$getMode = function(a) {
        typeof a != "string" && (a = a[0]);
        for (var l in this.subModes)
          if (a.indexOf(l) === 0)
            return this.subModes[l];
        return null;
      }, this.$tryMode = function(a, l, t, e) {
        var n = this.$getMode(a);
        return n ? n.getFoldWidget(l, t, e) : "";
      }, this.getFoldWidget = function(a, l, t) {
        return this.$tryMode(a.getState(t - 1), a, l, t) || this.$tryMode(a.getState(t), a, l, t) || this.defaultMode.getFoldWidget(a, l, t);
      }, this.getFoldWidgetRange = function(a, l, t) {
        var e = this.$getMode(a.getState(t - 1));
        return (!e || !e.getFoldWidget(a, l, t)) && (e = this.$getMode(a.getState(t))), (!e || !e.getFoldWidget(a, l, t)) && (e = this.defaultMode), e.getFoldWidgetRange(a, l, t);
      };
    }.call(f.prototype);
  }), ace.define("ace/mode/folding/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/range", "ace/mode/folding/fold_mode", "ace/token_iterator"], function(w, $, L) {
    var S = w("../../lib/oop");
    w("../../lib/lang");
    var k = w("../../range").Range, f = w("./fold_mode").FoldMode, a = w("../../token_iterator").TokenIterator, l = $.FoldMode = function(n, r) {
      f.call(this), this.voidElements = n || {}, this.optionalEndTags = S.mixin({}, this.voidElements), r && S.mixin(this.optionalEndTags, r);
    };
    S.inherits(l, f);
    var t = function() {
      this.tagName = "", this.closing = !1, this.selfClosing = !1, this.start = { row: 0, column: 0 }, this.end = { row: 0, column: 0 };
    };
    function e(n, r) {
      return n.type.lastIndexOf(r + ".xml") > -1;
    }
    (function() {
      this.getFoldWidget = function(n, r, i) {
        var s = this._getFirstTagInLine(n, i);
        return s ? s.closing || !s.tagName && s.selfClosing ? r == "markbeginend" ? "end" : "" : !s.tagName || s.selfClosing || this.voidElements.hasOwnProperty(s.tagName.toLowerCase()) || this._findEndTagInLine(n, i, s.tagName, s.end.column) ? "" : "start" : this.getCommentFoldWidget(n, i);
      }, this.getCommentFoldWidget = function(n, r) {
        return /comment/.test(n.getState(r)) && /<!-/.test(n.getLine(r)) ? "start" : "";
      }, this._getFirstTagInLine = function(n, r) {
        for (var i = n.getTokens(r), s = new t(), c = 0; c < i.length; c++) {
          var g = i[c];
          if (e(g, "tag-open")) {
            if (s.end.column = s.start.column + g.value.length, s.closing = e(g, "end-tag-open"), g = i[++c], !g)
              return null;
            for (s.tagName = g.value, s.end.column += g.value.length, c++; c < i.length; c++)
              if (g = i[c], s.end.column += g.value.length, e(g, "tag-close")) {
                s.selfClosing = g.value == "/>";
                break;
              }
            return s;
          } else if (e(g, "tag-close"))
            return s.selfClosing = g.value == "/>", s;
          s.start.column += g.value.length;
        }
        return null;
      }, this._findEndTagInLine = function(n, r, i, s) {
        for (var c = n.getTokens(r), g = 0, m = 0; m < c.length; m++) {
          var y = c[m];
          if (g += y.value.length, !(g < s) && e(y, "end-tag-open") && (y = c[m + 1], y && y.value == i))
            return !0;
        }
        return !1;
      }, this._readTagForward = function(n) {
        var r = n.getCurrentToken();
        if (!r)
          return null;
        var i = new t();
        do
          if (e(r, "tag-open"))
            i.closing = e(r, "end-tag-open"), i.start.row = n.getCurrentTokenRow(), i.start.column = n.getCurrentTokenColumn();
          else if (e(r, "tag-name"))
            i.tagName = r.value;
          else if (e(r, "tag-close"))
            return i.selfClosing = r.value == "/>", i.end.row = n.getCurrentTokenRow(), i.end.column = n.getCurrentTokenColumn() + r.value.length, n.stepForward(), i;
        while (r = n.stepForward());
        return null;
      }, this._readTagBackward = function(n) {
        var r = n.getCurrentToken();
        if (!r)
          return null;
        var i = new t();
        do {
          if (e(r, "tag-open"))
            return i.closing = e(r, "end-tag-open"), i.start.row = n.getCurrentTokenRow(), i.start.column = n.getCurrentTokenColumn(), n.stepBackward(), i;
          e(r, "tag-name") ? i.tagName = r.value : e(r, "tag-close") && (i.selfClosing = r.value == "/>", i.end.row = n.getCurrentTokenRow(), i.end.column = n.getCurrentTokenColumn() + r.value.length);
        } while (r = n.stepBackward());
        return null;
      }, this._pop = function(n, r) {
        for (; n.length; ) {
          var i = n[n.length - 1];
          if (!r || i.tagName == r.tagName)
            return n.pop();
          if (this.optionalEndTags.hasOwnProperty(i.tagName)) {
            n.pop();
            continue;
          } else
            return null;
        }
      }, this.getFoldWidgetRange = function(n, r, i) {
        var s = this._getFirstTagInLine(n, i);
        if (!s)
          return this.getCommentFoldWidget(n, i) && n.getCommentFoldRange(i, n.getLine(i).length);
        var c = s.closing || s.selfClosing, g = [], m;
        if (c)
          for (var y = new a(n, i, s.end.column), o = {
            row: i,
            column: s.start.column
          }; m = this._readTagBackward(y); ) {
            if (m.selfClosing) {
              if (g.length)
                continue;
              return m.start.column += m.tagName.length + 2, m.end.column -= 2, k.fromPoints(m.start, m.end);
            }
            if (m.closing)
              g.push(m);
            else if (this._pop(g, m), g.length == 0)
              return m.start.column += m.tagName.length + 2, m.start.row == m.end.row && m.start.column < m.end.column && (m.start.column = m.end.column), k.fromPoints(m.start, o);
          }
        else {
          var y = new a(n, i, s.start.column), x = {
            row: i,
            column: s.start.column + s.tagName.length + 2
          };
          for (s.start.row == s.end.row && (x.column = s.end.column); m = this._readTagForward(y); ) {
            if (m.selfClosing) {
              if (g.length)
                continue;
              return m.start.column += m.tagName.length + 2, m.end.column -= 2, k.fromPoints(m.start, m.end);
            }
            if (m.closing) {
              if (this._pop(g, m), g.length == 0)
                return k.fromPoints(x, m.start);
            } else
              g.push(m);
          }
        }
      };
    }).call(l.prototype);
  }), ace.define("ace/mode/folding/html", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/mixed", "ace/mode/folding/xml", "ace/mode/folding/cstyle"], function(w, $, L) {
    var S = w("../../lib/oop"), k = w("./mixed").FoldMode, f = w("./xml").FoldMode, a = w("./cstyle").FoldMode, l = $.FoldMode = function(t, e) {
      k.call(this, new f(t, e), {
        "js-": new a(),
        "css-": new a()
      });
    };
    S.inherits(l, k);
  }), ace.define("ace/mode/html_completions", ["require", "exports", "module", "ace/token_iterator"], function(w, $, L) {
    var S = w("../token_iterator").TokenIterator, k = [
      "accesskey",
      "class",
      "contenteditable",
      "contextmenu",
      "dir",
      "draggable",
      "dropzone",
      "hidden",
      "id",
      "inert",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate"
    ], f = [
      "onabort",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextmenu",
      "oncuechange",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmousedown",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onreset",
      "onscroll",
      "onseeked",
      "onseeking",
      "onselect",
      "onshow",
      "onstalled",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "onvolumechange",
      "onwaiting"
    ], a = k.concat(f), l = {
      a: { href: 1, target: { _blank: 1, top: 1 }, ping: 1, rel: { nofollow: 1, alternate: 1, author: 1, bookmark: 1, help: 1, license: 1, next: 1, noreferrer: 1, prefetch: 1, prev: 1, search: 1, tag: 1 }, media: 1, hreflang: 1, type: 1 },
      abbr: {},
      address: {},
      area: { shape: 1, coords: 1, href: 1, hreflang: 1, alt: 1, target: 1, media: 1, rel: 1, ping: 1, type: 1 },
      article: { pubdate: 1 },
      aside: {},
      audio: { src: 1, autobuffer: 1, autoplay: { autoplay: 1 }, loop: { loop: 1 }, controls: { controls: 1 }, muted: { muted: 1 }, preload: { auto: 1, metadata: 1, none: 1 } },
      b: {},
      base: { href: 1, target: 1 },
      bdi: {},
      bdo: {},
      blockquote: { cite: 1 },
      body: { onafterprint: 1, onbeforeprint: 1, onbeforeunload: 1, onhashchange: 1, onmessage: 1, onoffline: 1, onpopstate: 1, onredo: 1, onresize: 1, onstorage: 1, onundo: 1, onunload: 1 },
      br: {},
      button: { autofocus: 1, disabled: { disabled: 1 }, form: 1, formaction: 1, formenctype: 1, formmethod: 1, formnovalidate: 1, formtarget: 1, name: 1, value: 1, type: { button: 1, submit: 1 } },
      canvas: { width: 1, height: 1 },
      caption: {},
      cite: {},
      code: {},
      col: { span: 1 },
      colgroup: { span: 1 },
      command: { type: 1, label: 1, icon: 1, disabled: 1, checked: 1, radiogroup: 1, command: 1 },
      data: {},
      datalist: {},
      dd: {},
      del: { cite: 1, datetime: 1 },
      details: { open: 1 },
      dfn: {},
      dialog: { open: 1 },
      div: {},
      dl: {},
      dt: {},
      em: {},
      embed: { src: 1, height: 1, width: 1, type: 1 },
      fieldset: { disabled: 1, form: 1, name: 1 },
      figcaption: {},
      figure: {},
      footer: {},
      form: { "accept-charset": 1, action: 1, autocomplete: 1, enctype: { "multipart/form-data": 1, "application/x-www-form-urlencoded": 1 }, method: { get: 1, post: 1 }, name: 1, novalidate: 1, target: { _blank: 1, top: 1 } },
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      head: {},
      header: {},
      hr: {},
      html: { manifest: 1 },
      i: {},
      iframe: { name: 1, src: 1, height: 1, width: 1, sandbox: { "allow-same-origin": 1, "allow-top-navigation": 1, "allow-forms": 1, "allow-scripts": 1 }, seamless: { seamless: 1 } },
      img: { alt: 1, src: 1, height: 1, width: 1, usemap: 1, ismap: 1 },
      input: {
        type: { text: 1, password: 1, hidden: 1, checkbox: 1, submit: 1, radio: 1, file: 1, button: 1, reset: 1, image: 31, color: 1, date: 1, datetime: 1, "datetime-local": 1, email: 1, month: 1, number: 1, range: 1, search: 1, tel: 1, time: 1, url: 1, week: 1 },
        accept: 1,
        alt: 1,
        autocomplete: { on: 1, off: 1 },
        autofocus: { autofocus: 1 },
        checked: { checked: 1 },
        disabled: { disabled: 1 },
        form: 1,
        formaction: 1,
        formenctype: { "application/x-www-form-urlencoded": 1, "multipart/form-data": 1, "text/plain": 1 },
        formmethod: { get: 1, post: 1 },
        formnovalidate: { formnovalidate: 1 },
        formtarget: { _blank: 1, _self: 1, _parent: 1, _top: 1 },
        height: 1,
        list: 1,
        max: 1,
        maxlength: 1,
        min: 1,
        multiple: { multiple: 1 },
        name: 1,
        pattern: 1,
        placeholder: 1,
        readonly: { readonly: 1 },
        required: { required: 1 },
        size: 1,
        src: 1,
        step: 1,
        width: 1,
        files: 1,
        value: 1
      },
      ins: { cite: 1, datetime: 1 },
      kbd: {},
      keygen: { autofocus: 1, challenge: { challenge: 1 }, disabled: { disabled: 1 }, form: 1, keytype: { rsa: 1, dsa: 1, ec: 1 }, name: 1 },
      label: { form: 1, for: 1 },
      legend: {},
      li: { value: 1 },
      link: { href: 1, hreflang: 1, rel: { stylesheet: 1, icon: 1 }, media: { all: 1, screen: 1, print: 1 }, type: { "text/css": 1, "image/png": 1, "image/jpeg": 1, "image/gif": 1 }, sizes: 1 },
      main: {},
      map: { name: 1 },
      mark: {},
      math: {},
      menu: { type: 1, label: 1 },
      meta: { "http-equiv": { "content-type": 1 }, name: { description: 1, keywords: 1 }, content: { "text/html; charset=UTF-8": 1 }, charset: 1 },
      meter: { value: 1, min: 1, max: 1, low: 1, high: 1, optimum: 1 },
      nav: {},
      noscript: { href: 1 },
      object: { param: 1, data: 1, type: 1, height: 1, width: 1, usemap: 1, name: 1, form: 1, classid: 1 },
      ol: { start: 1, reversed: 1 },
      optgroup: { disabled: 1, label: 1 },
      option: { disabled: 1, selected: 1, label: 1, value: 1 },
      output: { for: 1, form: 1, name: 1 },
      p: {},
      param: { name: 1, value: 1 },
      pre: {},
      progress: { value: 1, max: 1 },
      q: { cite: 1 },
      rp: {},
      rt: {},
      ruby: {},
      s: {},
      samp: {},
      script: { charset: 1, type: { "text/javascript": 1 }, src: 1, defer: 1, async: 1 },
      select: { autofocus: 1, disabled: 1, form: 1, multiple: { multiple: 1 }, name: 1, size: 1, readonly: { readonly: 1 } },
      small: {},
      source: { src: 1, type: 1, media: 1 },
      span: {},
      strong: {},
      style: { type: 1, media: { all: 1, screen: 1, print: 1 }, scoped: 1 },
      sub: {},
      sup: {},
      svg: {},
      table: { summary: 1 },
      tbody: {},
      td: { headers: 1, rowspan: 1, colspan: 1 },
      textarea: { autofocus: { autofocus: 1 }, disabled: { disabled: 1 }, form: 1, maxlength: 1, name: 1, placeholder: 1, readonly: { readonly: 1 }, required: { required: 1 }, rows: 1, cols: 1, wrap: { on: 1, off: 1, hard: 1, soft: 1 } },
      tfoot: {},
      th: { headers: 1, rowspan: 1, colspan: 1, scope: 1 },
      thead: {},
      time: { datetime: 1 },
      title: {},
      tr: {},
      track: { kind: 1, src: 1, srclang: 1, label: 1, default: 1 },
      section: {},
      summary: {},
      u: {},
      ul: {},
      var: {},
      video: { src: 1, autobuffer: 1, autoplay: { autoplay: 1 }, loop: { loop: 1 }, controls: { controls: 1 }, width: 1, height: 1, poster: 1, muted: { muted: 1 }, preload: { auto: 1, metadata: 1, none: 1 } },
      wbr: {}
    }, t = Object.keys(l);
    function e(s, c) {
      return s.type.lastIndexOf(c + ".xml") > -1;
    }
    function n(s, c) {
      for (var g = new S(s, c.row, c.column), m = g.getCurrentToken(); m && !e(m, "tag-name"); )
        m = g.stepBackward();
      if (m)
        return m.value;
    }
    function r(s, c) {
      for (var g = new S(s, c.row, c.column), m = g.getCurrentToken(); m && !e(m, "attribute-name"); )
        m = g.stepBackward();
      if (m)
        return m.value;
    }
    var i = function() {
    };
    (function() {
      this.getCompletions = function(s, c, g, m) {
        var y = c.getTokenAt(g.row, g.column);
        if (!y)
          return [];
        if (e(y, "tag-name") || e(y, "tag-open") || e(y, "end-tag-open"))
          return this.getTagCompletions(s, c, g, m);
        if (e(y, "tag-whitespace") || e(y, "attribute-name"))
          return this.getAttributeCompletions(s, c, g, m);
        if (e(y, "attribute-value"))
          return this.getAttributeValueCompletions(s, c, g, m);
        var x = c.getLine(g.row).substr(0, g.column);
        return /&[a-z]*$/i.test(x) ? this.getHTMLEntityCompletions(s, c, g, m) : [];
      }, this.getTagCompletions = function(s, c, g, m) {
        return t.map(function(y) {
          return {
            value: y,
            meta: "tag",
            score: 1e6
          };
        });
      }, this.getAttributeCompletions = function(s, c, g, m) {
        var y = n(c, g);
        if (!y)
          return [];
        var x = a;
        return y in l && (x = x.concat(Object.keys(l[y]))), x.map(function(o) {
          return {
            caption: o,
            snippet: o + '="$0"',
            meta: "attribute",
            score: 1e6
          };
        });
      }, this.getAttributeValueCompletions = function(s, c, g, m) {
        var y = n(c, g), x = r(c, g);
        if (!y)
          return [];
        var o = [];
        return y in l && x in l[y] && typeof l[y][x] == "object" && (o = Object.keys(l[y][x])), o.map(function(d) {
          return {
            caption: d,
            snippet: d,
            meta: "attribute value",
            score: 1e6
          };
        });
      }, this.getHTMLEntityCompletions = function(s, c, g, m) {
        var y = ["Aacute;", "aacute;", "Acirc;", "acirc;", "acute;", "AElig;", "aelig;", "Agrave;", "agrave;", "alefsym;", "Alpha;", "alpha;", "amp;", "and;", "ang;", "Aring;", "aring;", "asymp;", "Atilde;", "atilde;", "Auml;", "auml;", "bdquo;", "Beta;", "beta;", "brvbar;", "bull;", "cap;", "Ccedil;", "ccedil;", "cedil;", "cent;", "Chi;", "chi;", "circ;", "clubs;", "cong;", "copy;", "crarr;", "cup;", "curren;", "Dagger;", "dagger;", "dArr;", "darr;", "deg;", "Delta;", "delta;", "diams;", "divide;", "Eacute;", "eacute;", "Ecirc;", "ecirc;", "Egrave;", "egrave;", "empty;", "emsp;", "ensp;", "Epsilon;", "epsilon;", "equiv;", "Eta;", "eta;", "ETH;", "eth;", "Euml;", "euml;", "euro;", "exist;", "fnof;", "forall;", "frac12;", "frac14;", "frac34;", "frasl;", "Gamma;", "gamma;", "ge;", "gt;", "hArr;", "harr;", "hearts;", "hellip;", "Iacute;", "iacute;", "Icirc;", "icirc;", "iexcl;", "Igrave;", "igrave;", "image;", "infin;", "int;", "Iota;", "iota;", "iquest;", "isin;", "Iuml;", "iuml;", "Kappa;", "kappa;", "Lambda;", "lambda;", "lang;", "laquo;", "lArr;", "larr;", "lceil;", "ldquo;", "le;", "lfloor;", "lowast;", "loz;", "lrm;", "lsaquo;", "lsquo;", "lt;", "macr;", "mdash;", "micro;", "middot;", "minus;", "Mu;", "mu;", "nabla;", "nbsp;", "ndash;", "ne;", "ni;", "not;", "notin;", "nsub;", "Ntilde;", "ntilde;", "Nu;", "nu;", "Oacute;", "oacute;", "Ocirc;", "ocirc;", "OElig;", "oelig;", "Ograve;", "ograve;", "oline;", "Omega;", "omega;", "Omicron;", "omicron;", "oplus;", "or;", "ordf;", "ordm;", "Oslash;", "oslash;", "Otilde;", "otilde;", "otimes;", "Ouml;", "ouml;", "para;", "part;", "permil;", "perp;", "Phi;", "phi;", "Pi;", "pi;", "piv;", "plusmn;", "pound;", "Prime;", "prime;", "prod;", "prop;", "Psi;", "psi;", "quot;", "radic;", "rang;", "raquo;", "rArr;", "rarr;", "rceil;", "rdquo;", "real;", "reg;", "rfloor;", "Rho;", "rho;", "rlm;", "rsaquo;", "rsquo;", "sbquo;", "Scaron;", "scaron;", "sdot;", "sect;", "shy;", "Sigma;", "sigma;", "sigmaf;", "sim;", "spades;", "sub;", "sube;", "sum;", "sup;", "sup1;", "sup2;", "sup3;", "supe;", "szlig;", "Tau;", "tau;", "there4;", "Theta;", "theta;", "thetasym;", "thinsp;", "THORN;", "thorn;", "tilde;", "times;", "trade;", "Uacute;", "uacute;", "uArr;", "uarr;", "Ucirc;", "ucirc;", "Ugrave;", "ugrave;", "uml;", "upsih;", "Upsilon;", "upsilon;", "Uuml;", "uuml;", "weierp;", "Xi;", "xi;", "Yacute;", "yacute;", "yen;", "Yuml;", "yuml;", "Zeta;", "zeta;", "zwj;", "zwnj;"];
        return y.map(function(x) {
          return {
            caption: x,
            snippet: x,
            meta: "html entity",
            score: 1e6
          };
        });
      };
    }).call(i.prototype), $.HtmlCompletions = i;
  }), ace.define("ace/mode/html", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/javascript", "ace/mode/css", "ace/mode/html_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/html", "ace/mode/html_completions", "ace/worker/worker_client"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("../lib/lang"), f = w("./text").Mode, a = w("./javascript").Mode, l = w("./css").Mode, t = w("./html_highlight_rules").HtmlHighlightRules, e = w("./behaviour/xml").XmlBehaviour, n = w("./folding/html").FoldMode, r = w("./html_completions").HtmlCompletions, i = w("../worker/worker_client").WorkerClient, s = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"], c = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"], g = function(m) {
      this.fragmentContext = m && m.fragmentContext, this.HighlightRules = t, this.$behaviour = new e(), this.$completer = new r(), this.createModeDelegates({
        "js-": a,
        "css-": l
      }), this.foldingRules = new n(this.voidElements, k.arrayToMap(c));
    };
    S.inherits(g, f), function() {
      this.blockComment = { start: "<!--", end: "-->" }, this.voidElements = k.arrayToMap(s), this.getNextLineIndent = function(m, y, x) {
        return this.$getIndent(y);
      }, this.checkOutdent = function(m, y, x) {
        return !1;
      }, this.getCompletions = function(m, y, x, o) {
        return this.$completer.getCompletions(m, y, x, o);
      }, this.createWorker = function(m) {
        if (this.constructor == g) {
          var y = new i(["ace"], "ace/mode/html_worker", "Worker");
          return y.attachToDocument(m.getDocument()), this.fragmentContext && y.call("setOptions", [{ context: this.fragmentContext }]), y.on("error", function(x) {
            m.setAnnotations(x.data);
          }), y.on("terminate", function() {
            m.clearAnnotations();
          }), y;
        }
      }, this.$id = "ace/mode/html", this.snippetFileId = "ace/snippets/html";
    }.call(g.prototype), $.Mode = g;
  }), ace.define("ace/mode/twig_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/html_highlight_rules", "ace/mode/text_highlight_rules"], function(w, $, L) {
    var S = w("../lib/oop");
    w("../lib/lang");
    var k = w("./html_highlight_rules").HtmlHighlightRules, f = w("./text_highlight_rules").TextHighlightRules, a = function() {
      k.call(this);
      var l = "autoescape|block|do|embed|extends|filter|flush|for|from|if|import|include|macro|sandbox|set|spaceless|use|verbatim";
      l = l + "|end" + l.replace(/\|/g, "|end");
      var t = "abs|batch|capitalize|convert_encoding|date|date_modify|default|e|escape|first|format|join|json_encode|keys|last|length|lower|merge|nl2br|number_format|raw|replace|reverse|slice|sort|split|striptags|title|trim|upper|url_encode", e = "attribute|constant|cycle|date|dump|parent|random|range|template_from_string", n = "constant|divisibleby|sameas|defined|empty|even|iterable|odd", r = "null|none|true|false", i = "b-and|b-xor|b-or|in|is|and|or|not", s = this.createKeywordMapper({
        "keyword.control.twig": l,
        "support.function.twig": [t, e, n].join("|"),
        "keyword.operator.twig": i,
        "constant.language.twig": r
      }, "identifier");
      for (var c in this.$rules)
        this.$rules[c].unshift({
          token: "variable.other.readwrite.local.twig",
          regex: "\\{\\{-?",
          push: "twig-start"
        }, {
          token: "meta.tag.twig",
          regex: "\\{%-?",
          push: "twig-start"
        }, {
          token: "comment.block.twig",
          regex: "\\{#-?",
          push: "twig-comment"
        });
      this.$rules["twig-comment"] = [{
        token: "comment.block.twig",
        regex: ".*-?#\\}",
        next: "pop"
      }], this.$rules["twig-start"] = [{
        token: "variable.other.readwrite.local.twig",
        regex: "-?\\}\\}",
        next: "pop"
      }, {
        token: "meta.tag.twig",
        regex: "-?%\\}",
        next: "pop"
      }, {
        token: "string",
        regex: "'",
        next: "twig-qstring"
      }, {
        token: "string",
        regex: '"',
        next: "twig-qqstring"
      }, {
        token: "constant.numeric",
        regex: "0[xX][0-9a-fA-F]+\\b"
      }, {
        token: "constant.numeric",
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: "constant.language.boolean",
        regex: "(?:true|false)\\b"
      }, {
        token: s,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator.assignment",
        regex: "=|~"
      }, {
        token: "keyword.operator.comparison",
        regex: "==|!=|<|>|>=|<=|==="
      }, {
        token: "keyword.operator.arithmetic",
        regex: "\\+|-|/|%|//|\\*|\\*\\*"
      }, {
        token: "keyword.operator.other",
        regex: "\\.\\.|\\|"
      }, {
        token: "punctuation.operator",
        regex: /\?|:|,|;|\./
      }, {
        token: "paren.lparen",
        regex: /[\[\({]/
      }, {
        token: "paren.rparen",
        regex: /[\])}]/
      }, {
        token: "text",
        regex: "\\s+"
      }], this.$rules["twig-qqstring"] = [
        {
          token: "constant.language.escape",
          regex: /\\[\\"$#ntr]|#{[^"}]*}/
        },
        {
          token: "string",
          regex: '"',
          next: "twig-start"
        },
        {
          defaultToken: "string"
        }
      ], this.$rules["twig-qstring"] = [
        {
          token: "constant.language.escape",
          regex: /\\[\\'ntr]}/
        },
        {
          token: "string",
          regex: "'",
          next: "twig-start"
        },
        {
          defaultToken: "string"
        }
      ], this.normalizeRules();
    };
    S.inherits(a, f), $.TwigHighlightRules = a;
  }), ace.define("ace/mode/twig", ["require", "exports", "module", "ace/lib/oop", "ace/mode/html", "ace/mode/twig_highlight_rules", "ace/mode/matching_brace_outdent"], function(w, $, L) {
    var S = w("../lib/oop"), k = w("./html").Mode, f = w("./twig_highlight_rules").TwigHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, l = function() {
      k.call(this), this.HighlightRules = f, this.$outdent = new a();
    };
    S.inherits(l, k), function() {
      this.blockComment = { start: "{#", end: "#}" }, this.getNextLineIndent = function(t, e, n) {
        var r = this.$getIndent(e), i = this.getTokenizer().getLineTokens(e, t), s = i.tokens;
        if (i.state, s.length && s[s.length - 1].type == "comment")
          return r;
        if (t == "start") {
          var c = e.match(/^.*[\{\(\[]\s*$/);
          c && (r += n);
        }
        return r;
      }, this.checkOutdent = function(t, e, n) {
        return this.$outdent.checkOutdent(e, n);
      }, this.autoOutdent = function(t, e, n) {
        this.$outdent.autoOutdent(e, n);
      }, this.$id = "ace/mode/twig";
    }.call(l.prototype), $.Mode = l;
  }), function() {
    ace.require(["ace/mode/twig"], function(w) {
      F && (F.exports = w);
    });
  }();
})(Mn);
var Fn = { exports: {} };
(function(F, N) {
  ace.define("ace/theme/tomorrow_night_bright.css", ["require", "exports", "module"], function(w, $, L) {
    L.exports = `.ace-tomorrow-night-bright .ace_gutter {
  background: #1a1a1a;
  color: #DEDEDE
}

.ace-tomorrow-night-bright .ace_print-margin {
  width: 1px;
  background: #1a1a1a
}

.ace-tomorrow-night-bright {
  background-color: #000000;
  color: #DEDEDE
}

.ace-tomorrow-night-bright .ace_cursor {
  color: #9F9F9F
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_selection {
  background: #424242
}

.ace-tomorrow-night-bright.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #000000;
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #888888
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_highlight {
  border: 1px solid rgb(110, 119, 0);
  border-bottom: 0;
  box-shadow: inset 0 -1px rgb(110, 119, 0);
  margin: -1px 0 0 -1px;
  background: rgba(255, 235, 0, 0.1)
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_active-line {
  background: #2A2A2A
}

.ace-tomorrow-night-bright .ace_gutter-active-line {
  background-color: #2A2A2A
}

.ace-tomorrow-night-bright .ace_stack {
  background-color: rgb(66, 90, 44)
}

.ace-tomorrow-night-bright .ace_marker-layer .ace_selected-word {
  border: 1px solid #888888
}

.ace-tomorrow-night-bright .ace_invisible {
  color: #343434
}

.ace-tomorrow-night-bright .ace_keyword,
.ace-tomorrow-night-bright .ace_meta,
.ace-tomorrow-night-bright .ace_storage,
.ace-tomorrow-night-bright .ace_storage.ace_type,
.ace-tomorrow-night-bright .ace_support.ace_type {
  color: #C397D8
}

.ace-tomorrow-night-bright .ace_keyword.ace_operator {
  color: #70C0B1
}

.ace-tomorrow-night-bright .ace_constant.ace_character,
.ace-tomorrow-night-bright .ace_constant.ace_language,
.ace-tomorrow-night-bright .ace_constant.ace_numeric,
.ace-tomorrow-night-bright .ace_keyword.ace_other.ace_unit,
.ace-tomorrow-night-bright .ace_support.ace_constant,
.ace-tomorrow-night-bright .ace_variable.ace_parameter {
  color: #E78C45
}

.ace-tomorrow-night-bright .ace_constant.ace_other {
  color: #EEEEEE
}

.ace-tomorrow-night-bright .ace_invalid {
  color: #CED2CF;
  background-color: #DF5F5F
}

.ace-tomorrow-night-bright .ace_invalid.ace_deprecated {
  color: #CED2CF;
  background-color: #B798BF
}

.ace-tomorrow-night-bright .ace_fold {
  background-color: #7AA6DA;
  border-color: #DEDEDE
}

.ace-tomorrow-night-bright .ace_entity.ace_name.ace_function,
.ace-tomorrow-night-bright .ace_support.ace_function,
.ace-tomorrow-night-bright .ace_variable {
  color: #7AA6DA
}

.ace-tomorrow-night-bright .ace_support.ace_class,
.ace-tomorrow-night-bright .ace_support.ace_type {
  color: #E7C547
}

.ace-tomorrow-night-bright .ace_heading,
.ace-tomorrow-night-bright .ace_markup.ace_heading,
.ace-tomorrow-night-bright .ace_string {
  color: #B9CA4A
}

.ace-tomorrow-night-bright .ace_entity.ace_name.ace_tag,
.ace-tomorrow-night-bright .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow-night-bright .ace_meta.ace_tag,
.ace-tomorrow-night-bright .ace_string.ace_regexp,
.ace-tomorrow-night-bright .ace_variable {
  color: #D54E53
}

.ace-tomorrow-night-bright .ace_comment {
  color: #969896
}

.ace-tomorrow-night-bright .ace_c9searchresults.ace_keyword {
  color: #C2C280
}

.ace-tomorrow-night-bright .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y
}

.ace-tomorrow-night-bright .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
  }), ace.define("ace/theme/tomorrow_night_bright", ["require", "exports", "module", "ace/theme/tomorrow_night_bright.css", "ace/lib/dom"], function(w, $, L) {
    $.isDark = !0, $.cssClass = "ace-tomorrow-night-bright", $.cssText = w("./tomorrow_night_bright.css");
    var S = w("../lib/dom");
    S.importCssString($.cssText, $.cssClass, !1);
  }), function() {
    ace.require(["ace/theme/tomorrow_night_bright"], function(w) {
      F && (F.exports = w);
    });
  }();
})(Fn);
const In = ["value"], On = ["value"], Dn = ["value"], Bn = ["value"], Hn = ["value"], Nn = ["name", "value"], Pn = { class: "g-grid g-grid-rows-[60px,1fr] g-relative g-bg-white g-rounded-l-lg g-min-h-[650px] g-h-admin-window g-overflow-x-auto" }, Wn = { class: "g-sticky g-top-0 g-bg-white g-z-50" }, zn = { class: "g-flex g-flex-nowrap" }, Un = ["title"], Vn = ["title"], Gn = ["title"], Kn = ["title"], jn = ["title"], Xn = { class: "g-p-6" }, Yn = {
  key: 0,
  class: "g-p-6"
}, Zn = { class: "g-text-text" }, Jn = {
  key: 1,
  class: "g-p-6"
}, Qn = { class: "g-text-text" }, qn = {
  key: 2,
  class: "g-p-6"
}, ei = { class: "g-text-text" }, ti = {
  key: 3,
  class: "g-p-6"
}, ni = { class: "g-text-text" }, ii = { class: "g-min-h-[650px] g-h-admin-window g-bg-matrix-block g-rounded-r-lg g-relative g-overflow-hidden" }, ri = {
  key: 0,
  class: "g-w-full g-h-full g-relative g-overflow-hidden"
}, si = ["src"], oi = { class: "g-flex g-items-center g-justify-center g-box-border g-p-6 g-absolute g-inset-0 g-bg-gradient-to-b g-from-matrix-block/0 g-via-matrix-block g-to-matrix-block" }, ai = ["innerHTML"], li = ["innerHTML"], ci = {
  key: 1,
  class: "g-flex g-items-center g-justify-center g-box-border g-p-6 g-h-full g-relative g-overflow-hidden"
}, hi = { class: "g-w-full g-h-full" }, ui = ["textContent"], di = { class: "g-flex g-items-center g-justify-center g-box-border g-p-6 g-absolute g-inset-0 g-bg-gradient-to-b g-from-matrix-block/0 g-via-matrix-block g-to-matrix-block" }, gi = {
  key: 0,
  class: "g-text-center"
}, fi = ["innerHTML"], mi = { key: 0 }, pi = ["innerHTML"], vi = {
  key: 0,
  class: "g-absolute g-inset-y-0 g-right-0 g-w-64 g-p-2 g-z-10 lg:g-w-96"
}, bi = { class: "g-box-border g-p-5 g-pt-14 g-w-full g-h-full g-bg-matrix-block g-rounded-sm g-shadow-lg g-overflow-auto" }, wi = ["innerHTML"], xi = ["innerHTML"], yi = ["srcset"], ki = {
  key: 3,
  class: "g-mt-6"
}, $i = { class: "g-bg-matrix-titlebar g-rounded g-border-matrix-border g-overflow-x-scroll" }, Ci = { class: "g-p-3 g-select-all" }, Si = { class: "g-space-x-1" }, _i = {
  key: 4,
  class: "g-mt-6"
}, Ai = { class: "g-select-all" }, Ti = ["title"], Ri = /* @__PURE__ */ Le({
  __name: "GuideEditor",
  props: {
    formData: { type: String, required: !0 },
    guideData: { type: String, required: !0 },
    isNew: { type: Boolean, default: !1 }
  },
  setup(F) {
    const N = F, w = ie(0), $ = ie("field"), L = ie(""), S = ie(null), k = ie("publishing"), f = ie(St), a = ie(""), l = ie(JSON.parse(N.guideData)), t = ie(0), e = ie("__none__"), n = ie(JSON.parse(N.formData)), r = ie(!1), i = ie(""), s = ie([]), c = ie(""), g = ie(), m = ie(), y = ie(), x = ie(), o = ie(), d = ie(), b = ie(), u = ie(), p = Ie.map((D) => ({
      title: D.title,
      group: "guides",
      code: `{{ craft.guide.include({ slug: '${D.slug}' }) }}`,
      documentation: D.summary || null,
      props: {
        slug: "The slug of the guide, as set in the Guide Editor."
      }
    }));
    f.value.push(...Je), f.value.push(...p), w.value = Je.length, t.value = p.length, s.value = Object.keys(Ve.filenames).map((D) => ({ label: Ve.filenames[D], value: D }));
    const h = Ce(() => {
      const D = [];
      return c.value === "" && D.push("Title cannot be empty."), i.value === "" && D.push("Slug cannot be empty."), ($.value === "iframe" && L.value === "" || $.value === "template" && e.value === "__none__") && D.push("A template must be selected."), D;
    }), v = Ce(() => Ve.contents[e.value]), C = Ce(
      () => f.value.filter((D) => D.group === k.value)
    );
    function _(D) {
      navigator.clipboard.writeText(D);
    }
    function A() {
      g.value && v.value && y.value && (g.value._editor.setValue(v.value), y.value.setFieldValue("field"));
    }
    function R(D) {
      g.value && (g.value._editor.insert(D), g.value.focus());
    }
    function T(D) {
      $.value = $e ? D : "template";
    }
    function E(D) {
      L.value = D;
    }
    function M(D) {
      e.value = D;
    }
    function O(D) {
      i.value = D;
    }
    function B(D) {
      c.value = D, N.isNew && !r.value && o.value && o.value.setFieldValue(yt(D));
    }
    function H(D) {
      k.value = D, localStorage.setItem("guide:edit:tab", D);
    }
    function z(D) {
      var P;
      S.value = ((P = S.value) == null ? void 0 : P.code) === D.code ? null : D;
    }
    function I() {
      h.value.length || m.value.submit();
    }
    return De(() => {
      var U, Z, K, Q, j, q, se;
      const D = document.getElementById("content");
      D && (D.style.padding = "0px"), (U = l.value) != null && U.content && (a.value = l.value.content), (Z = l.value) != null && Z.contentSource && y.value && ($e ? y.value.setFieldValue(l.value.contentSource) : y.value.setFieldValue("template")), ((K = l.value) == null ? void 0 : K.contentUrl) && x.value && x.value.setFieldValue(l.value.contentUrl), ((Q = l.value) == null ? void 0 : Q.template) && b.value && b.value.setFieldValue(l.value.template), ((j = l.value) == null ? void 0 : j.slug) && o.value && o.value.setFieldValue(l.value.slug), ((q = l.value) == null ? void 0 : q.title) && u.value && u.value.setFieldValue(l.value.title), ((se = l.value) == null ? void 0 : se.summary) && d.value && d.value.setFieldValue(l.value.summary), g.value && g.value._editor.commands.addCommand({
        name: "saveGuide",
        bindKey: { win: "Ctrl-S", mac: "Command-S" },
        exec: () => {
          I();
        }
      });
      const P = {
        getCompletions: function(me, de, ae, be, Ae) {
          Ae(
            null,
            Tt.map(function(ye) {
              return {
                caption: ye,
                value: ye,
                meta: "Guide utility class"
              };
            })
          );
        }
      };
      g.value && (g.value._editor.completers = [...g.value._editor.completers, P]), N.isNew && $e && localStorage.getItem("guide:edit:tab") && $.value === "field" && (k.value = localStorage.getItem("guide:edit:tab")), we("Guide Editor loaded for guide"), xt(l.value);
    }), (D, P) => {
      var U, Z, K, Q;
      return X(), Y(_e, null, [
        n.value && l.value ? (X(), Y("form", {
          key: 0,
          ref_key: "form",
          ref: m,
          class: "g-grid g-grid-cols-[minmax(200px,400px),minmax(250px,1fr)] g-relative g-overflow-hidden",
          action: "",
          method: "post",
          onSubmit: P[10] || (P[10] = Ee(() => {
          }, ["prevent"]))
        }, [
          W("input", {
            type: "hidden",
            name: "action",
            value: n.value.action
          }, null, 8, In),
          W("input", {
            type: "hidden",
            name: "authorId",
            value: n.value.authorId
          }, null, 8, On),
          W("input", {
            type: "hidden",
            name: "content",
            value: a.value
          }, null, 8, Dn),
          l.value.id > 0 ? (X(), Y("input", {
            key: 0,
            type: "hidden",
            name: "id",
            value: l.value.id
          }, null, 8, Bn)) : re("", !0),
          n.value.redirect ? (X(), Y("input", {
            key: 1,
            type: "hidden",
            name: "redirect",
            value: n.value.redirect
          }, null, 8, Hn)) : re("", !0),
          W("input", {
            type: "hidden",
            name: (Z = (U = n.value.csrf) == null ? void 0 : U.split("|")) == null ? void 0 : Z[0],
            value: (Q = (K = n.value.csrf) == null ? void 0 : K.split("|")) == null ? void 0 : Q[1]
          }, null, 8, Nn),
          W("div", Pn, [
            W("div", Wn, [
              W("ul", zn, [
                W("li", {
                  class: ve(["g-flex-grow", k.value === "publishing" ? "g-bg-select-dark" : "g-bg-select-light"])
                }, [
                  W("button", {
                    class: "g-w-full g-h-[60px] g-cursor-pointer",
                    title: G(J).Settings,
                    type: "button",
                    onClick: P[0] || (P[0] = (j) => H("publishing"))
                  }, [
                    he(kt, {
                      class: ve(["g-mx-auto g-w-6 g-h-6", [k.value === "publishing" ? "g-text-select-light" : null]])
                    }, null, 8, ["class"])
                  ], 8, Un)
                ], 2),
                $.value === "field" ? (X(), Y("li", {
                  key: 0,
                  class: ve(["g-flex-grow", k.value === "components" ? "g-bg-select-dark" : "g-bg-select-light"])
                }, [
                  W("button", {
                    class: "g-w-full g-h-[60px] g-cursor-pointer",
                    title: G(J).Components,
                    type: "button",
                    onClick: P[1] || (P[1] = (j) => H("components"))
                  }, [
                    he(nn, {
                      class: ve(["g-mx-auto g-w-6 g-h-6", [k.value === "components" ? "g-text-select-light" : null]])
                    }, null, 8, ["class"])
                  ], 8, Vn)
                ], 2)) : re("", !0),
                $.value === "field" && w.value ? (X(), Y("li", {
                  key: 1,
                  class: ve(["g-flex-grow", k.value === "images" ? "g-bg-select-dark" : "g-bg-select-light"])
                }, [
                  W("button", {
                    class: "g-w-full g-h-[60px] g-cursor-pointer",
                    title: G(J).Images,
                    type: "button",
                    onClick: P[2] || (P[2] = (j) => H("images"))
                  }, [
                    he(cn, {
                      class: ve(["g-mx-auto g-w-6 g-h-6", [k.value === "images" ? "g-text-select-light" : null]])
                    }, null, 8, ["class"])
                  ], 8, Gn)
                ], 2)) : re("", !0),
                $.value === "field" && t.value ? (X(), Y("li", {
                  key: 2,
                  class: ve(["g-flex-grow", k.value === "guides" ? "g-bg-select-dark" : "g-bg-select-light"])
                }, [
                  W("button", {
                    class: "g-w-full g-h-[60px] g-cursor-pointer",
                    title: G(J).Guides,
                    type: "button",
                    onClick: P[3] || (P[3] = (j) => H("guides"))
                  }, [
                    he($t, {
                      class: ve(["g-mx-auto g-w-6 g-h-6", [k.value === "guides" ? "g-text-select-light" : null]])
                    }, null, 8, ["class"])
                  ], 8, Kn)
                ], 2)) : re("", !0),
                $.value === "field" ? (X(), Y("li", {
                  key: 3,
                  class: ve(["g-flex-grow", k.value === "snippets" ? "g-bg-select-dark" : "g-bg-select-light"])
                }, [
                  W("button", {
                    class: "g-w-full g-h-[60px] g-cursor-pointer",
                    title: G(J).Snippets,
                    type: "button",
                    onClick: P[4] || (P[4] = (j) => H("snippets"))
                  }, [
                    he(Zt, {
                      class: ve(["g-mx-auto g-w-6 g-h-6", [k.value === "snippets" ? "g-text-select-light" : null]])
                    }, null, 8, ["class"])
                  ], 8, jn)
                ], 2)) : re("", !0)
              ])
            ]),
            W("div", null, [
              ke(W("div", Xn, [
                W("h2", null, ne(G(J).Settings), 1),
                he(Re, {
                  ref_key: "titleField",
                  ref: u,
                  required: "",
                  label: G(J).Title,
                  name: "title",
                  placeholder: "Guide Title",
                  onValueChanged: B
                }, null, 8, ["label"]),
                he(Re, {
                  ref_key: "slugField",
                  ref: o,
                  required: "",
                  label: G(J).Slug,
                  name: "slug",
                  placeholder: "guide-title",
                  onFocused: P[5] || (P[5] = (j) => r.value = !0),
                  onValueChanged: O
                }, null, 8, ["label"]),
                ke(he(je, {
                  ref_key: "contentSourceField",
                  ref: y,
                  label: G(J)["Content Source"],
                  name: "contentSource",
                  options: [
                    { label: G(J).EDITOR_FIELD_CONTENT_SOURCE_OPTION_FIELD, value: "field" },
                    { label: G(J).EDITOR_FIELD_CONTENT_SOURCE_OPTION_TEMPLATE, value: "template" },
                    { label: G(J).EDITOR_FIELD_CONTENT_SOURCE_OPTION_IFRAME, value: "iframe" }
                  ],
                  onValueChanged: T
                }, null, 8, ["label", "options"]), [
                  [Te, G($e)]
                ]),
                ke(he(je, {
                  ref_key: "templateField",
                  ref: b,
                  required: "",
                  instructions: `${G(J).EDITOR_FIELD_INSTRUCTIONS_SETTINGS_TEMPLATE_FIELD_PREFIX}<strong>${G(Qe).templatePath}</strong>${G(J).EDITOR_FIELD_INSTRUCTIONS_SETTINGS_TEMPLATE_FIELD_SUFFIX}`,
                  label: G(J).Template,
                  name: "template",
                  options: s.value,
                  onValueChanged: M
                }, null, 8, ["instructions", "label", "options"]), [
                  [Te, $.value === "template"]
                ]),
                ke(he(Re, {
                  ref_key: "contentUrlField",
                  ref: x,
                  required: "",
                  instructions: G(J).EDITOR_FIELD_INSTRUCTIONS_SETTINGS_CONTENT_URL,
                  label: G(J)["Page URL"],
                  name: "contentUrl",
                  "field-attributes": {
                    maxlength: 255
                  },
                  onValueChanged: E
                }, null, 8, ["instructions", "label"]), [
                  [Te, $.value === "iframe"]
                ]),
                he(Re, {
                  ref_key: "summaryField",
                  ref: d,
                  instructions: G(J).EDITOR_FIELD_INSTRUCTIONS_SETTINGS_SUMMARY,
                  label: G(J).Summary,
                  name: "summary"
                }, null, 8, ["instructions", "label"])
              ], 512), [
                [Te, k.value === "publishing"]
              ]),
              ke(W("ul", null, [
                k.value === "components" ? (X(), Y("div", Yn, [
                  W("h2", null, ne(G(J).Components), 1),
                  W("p", Zn, ne(G(J).EDITOR_TAB_INSTRUCTIONS_COMPONENTS), 1)
                ])) : re("", !0),
                k.value === "images" ? (X(), Y("div", Jn, [
                  W("h2", null, ne(G(J).Images), 1),
                  W("p", Qn, ne(G(J).EDITOR_TAB_INSTRUCTIONS_IMAGES), 1)
                ])) : re("", !0),
                k.value === "guides" ? (X(), Y("div", qn, [
                  W("h2", null, ne(G(J).Guides), 1),
                  W("p", ei, ne(G(J).EDITOR_TAB_INSTRUCTIONS_GUIDES), 1)
                ])) : re("", !0),
                k.value === "snippets" ? (X(), Y("div", ti, [
                  W("h2", null, ne(G(J).Snippets), 1),
                  W("p", ni, ne(G(J).EDITOR_TAB_INSTRUCTIONS_SNIPPETS), 1)
                ])) : re("", !0),
                (X(!0), Y(_e, null, Me(G(C), (j, q) => (X(), Y("li", { key: q }, [
                  he(Ot, {
                    code: j.code,
                    docs: {
                      description: j.documentation,
                      props: j.props,
                      summary: j.summary
                    },
                    "image-srcset": j.thumbnail1x && j.thumbnail2x ? `${j.thumbnail1x} 1x, ${j.thumbnail2x} 2x` : null,
                    title: j.title,
                    onDocumentationClicked: z,
                    onInsertClicked: R
                  }, null, 8, ["code", "docs", "image-srcset", "title"])
                ]))), 128))
              ], 512), [
                [Te, ["components", "guides", "images", "snippets"].includes(k.value)]
              ])
            ])
          ]),
          W("div", ii, [
            ke(he(G(Rn), {
              ref_key: "editor",
              ref: g,
              value: a.value,
              "onUpdate:value": P[6] || (P[6] = (j) => a.value = j),
              class: "g-min-h-[650px] g-h-admin-window g-rounded-r-lg",
              wrap: "",
              lang: "twig",
              options: {
                displayIndentGuides: !0,
                enableBasicAutocompletion: !0,
                enableLiveAutocompletion: !0,
                showInvisibles: !1,
                tabSize: 2
              },
              theme: "tomorrow_night_bright"
            }, null, 8, ["value"]), [
              [Te, $.value === "field"]
            ]),
            $.value === "iframe" ? (X(), Y("div", ri, [
              W("iframe", {
                class: "g-w-full g-h-full g-rounded-r-lg",
                src: L.value
              }, null, 8, si),
              W("div", oi, [
                L.value !== "" ? (X(), Y("p", {
                  key: 0,
                  class: "g-text-center",
                  innerHTML: `${G(J).EDITOR_URL_LOADED_IN_IFRAME_PREFIX}<strong>${L.value}</strong>${G(J).EDITOR_URL_LOADED_IN_IFRAME_SUFFIX}`
                }, null, 8, ai)) : (X(), Y("p", {
                  key: 1,
                  innerHTML: G(J).EDITOR_ADD_PAGE_URL
                }, null, 8, li))
              ])
            ])) : $.value === "template" ? (X(), Y("div", ci, [
              W("pre", hi, [
                e.value !== "__none__" ? (X(), Y("code", {
                  key: 0,
                  class: "g-w-full g-h-full",
                  textContent: ne(G(v))
                }, null, 8, ui)) : re("", !0)
              ]),
              W("div", di, [
                e.value !== "__none__" ? (X(), Y("div", gi, [
                  W("p", {
                    innerHTML: `${G(J).EDITOR_TEMPLATE_LOAD_FROM_PREFIX}<strong>${e.value}</strong>${G(J).EDITOR_TEMPLATE_LOAD_FROM_MID}<strong>${G(Qe).templatePath}</strong>${G(J).EDITOR_TEMPLATE_LOAD_FROM_SUFFIX}`
                  }, null, 8, fi),
                  G($e) ? (X(), Y("div", mi, [
                    W("p", null, ne(G(J).EDITOR_TEMPLATE_COPY_INSTRUCTIONS), 1),
                    W("button", {
                      class: "btn submit",
                      type: "button",
                      onClick: A
                    }, ne(G(J).EDITOR_TEMPLATE_COPY_BUTTON_LABEL), 1)
                  ])) : re("", !0)
                ])) : (X(), Y("p", {
                  key: 1,
                  innerHTML: G(J).EDITOR_TEMPLATE_SELECT_FILE
                }, null, 8, pi))
              ])
            ])) : re("", !0)
          ]),
          he(pt, { name: "slide-docs" }, {
            default: tt(() => [
              S.value ? (X(), Y("div", vi, [
                W("div", bi, [
                  S.value.title ? (X(), Y("h1", {
                    key: 0,
                    innerHTML: S.value.title
                  }, null, 8, wi)) : re("", !0),
                  S.value.description ? (X(), Y("div", {
                    key: 1,
                    innerHTML: S.value.description
                  }, null, 8, xi)) : re("", !0),
                  S.value.imageSrcset ? (X(), Y("img", {
                    key: 2,
                    class: "g-mt-6",
                    srcset: S.value.imageSrcset,
                    alt: "image preview"
                  }, null, 8, yi)) : re("", !0),
                  S.value.code ? (X(), Y("div", ki, [
                    W("h2", null, ne(G(J).Code), 1),
                    W("div", $i, [
                      W("pre", Ci, [
                        W("code", null, ne(S.value.code), 1)
                      ])
                    ]),
                    W("div", Si, [
                      W("button", {
                        class: "btn small icon add g-mt-1",
                        type: "button",
                        onClick: P[7] || (P[7] = (j) => R(S.value.code))
                      }, ne(G(J).Add), 1),
                      W("button", {
                        class: "btn small g-mt-1",
                        type: "button",
                        onClick: P[8] || (P[8] = (j) => _(S.value.code))
                      }, ne(G(J).Copy), 1)
                    ])
                  ])) : re("", !0),
                  S.value.props ? (X(), Y("div", _i, [
                    W("h2", null, ne(G(J).Arguments), 1),
                    W("table", null, [
                      W("tbody", null, [
                        (X(!0), Y(_e, null, Me(S.value.props, (j, q) => (X(), Y("tr", { key: q }, [
                          W("td", Ai, [
                            W("strong", null, ne(q), 1)
                          ]),
                          W("td", null, ne(j), 1)
                        ]))), 128))
                      ])
                    ])
                  ])) : re("", !0)
                ]),
                W("button", {
                  class: "btn g-absolute g-top-4 g-right-4",
                  type: "button",
                  onClick: P[9] || (P[9] = (j) => S.value = null)
                }, ne(G(J).Close), 1)
              ])) : re("", !0)
            ]),
            _: 1
          })
        ], 544)) : re("", !0),
        (X(), He(nt, { to: "#guide-action-buttons" }, [
          G(h).length > 0 ? (X(), Y("button", {
            key: 0,
            class: "btn disabled",
            title: G(h).join(" ")
          }, ne(G(J).Save), 9, Ti)) : (X(), Y("button", {
            key: 1,
            class: "btn submit",
            type: "button",
            onClick: I
          }, ne(G(J).Save), 1))
        ]))
      ], 64);
    };
  }
});
const Li = /* @__PURE__ */ xe(Ri, [["__file", "GuideEditor.vue"]]), Ei = {}, Mi = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Fi = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ii = [
  Fi
];
function Oi(F, N) {
  return X(), Y("svg", Mi, Ii);
}
const Di = /* @__PURE__ */ xe(Ei, [["render", Oi], ["__file", "SvgClose.vue"]]), Bi = {}, Hi = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Ni = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
}, null, -1), Pi = [
  Ni
];
function Wi(F, N) {
  return X(), Y("svg", Hi, Pi);
}
const zi = /* @__PURE__ */ xe(Bi, [["render", Wi], ["__file", "SvgEdit.vue"]]), Ui = { class: "g-rounded-lg g-border g-border-solid g-border-matrix-border g-bg-matrix-block" }, Vi = {
  key: 1,
  class: "info g-m-0 g-leading-none"
}, Gi = ["onDragstart"], Ki = { class: "g-mb-0" }, ji = {
  key: 0,
  class: "g-ml-2 g-font-normal g-opacity-60"
}, Xi = {
  key: 1,
  class: "g-ml-2 g-font-normal g-opacity-40"
}, Yi = { class: "g-inline-flex g-flex-nowrap g-gap-1 g-opacity-0 group-hover:g-opacity-100" }, Zi = ["onClick"], Ji = /* @__PURE__ */ W("span", { class: "g-sr-only" }, "Edit", -1), Qi = /* @__PURE__ */ W("span", { class: "g-sr-only" }, "Remove", -1), qi = ["onClick"], er = /* @__PURE__ */ Le({
  __name: "OrganizerDropZone",
  props: {
    description: String,
    header: String,
    headerSize: { type: Number, default: 2 },
    group: { type: String, required: !0 },
    guides: { type: Array, required: !0 },
    placements: { type: Array, required: !0 }
  },
  emits: ["edit-placement-clicked", "delete-placement-clicked"],
  setup(F, { emit: N }) {
    const w = F, $ = ie(!1);
    function L(a) {
      return w.guides.find((l) => l.id === a);
    }
    function S(a, l, t) {
      a.dataTransfer.dropEffect = "move", a.dataTransfer.effectAllowed = "move", a.dataTransfer.setData("placementId", l), a.dataTransfer.setData("guideId", t);
    }
    function k(a) {
      N("delete-placement-clicked", a);
    }
    function f(a) {
      N("edit-placement-clicked", a);
    }
    return De(() => {
      we("OrganizerDropZone loaded");
    }), (a, l) => (X(), Y("div", Ui, [
      W("div", {
        class: ve(["g-flex g-items-center g-justify-between g-gap-6 g-p-3 g-rounded-t-lg", {
          "g-bg-select-light/80": F.headerSize === 3,
          "g-bg-select-light/50": F.headerSize === 2,
          "g-bg-select-light/20": F.headerSize === 1
        }])
      }, [
        F.header ? (X(), Y("h3", {
          key: 0,
          class: ve(["g-m-0 g-leading-none", {
            "g-text-lg": F.headerSize === 3,
            "g-text-base": F.headerSize === 2,
            "g-text-sm": F.headerSize === 1
          }])
        }, ne(F.header), 3)) : re("", !0),
        F.description ? (X(), Y("p", Vi, ne(F.description), 1)) : re("", !0)
      ], 2),
      W("ul", null, [
        (X(!0), Y(_e, null, Me(F.placements, (t) => (X(), Y("li", {
          key: t.id,
          title: "Drag guide to a different area of the Craft Control Panel"
        }, [
          W("div", {
            class: "g-group g-flex g-flex-nowrap g-items-center g-justify-between g-gap-3 g-p-3 g-duration-150 g-cursor-move hover:g-bg-select-light",
            draggable: "true",
            onDragstart: (e) => S(e, t.id, t.guideId),
            onMouseleave: l[2] || (l[2] = (e) => $.value = !1)
          }, [
            W("h4", Ki, [
              Fe(ne(L(t.guideId).title), 1),
              t.uri ? (X(), Y("span", ji, ne(t.uri), 1)) : re("", !0),
              t.selector ? (X(), Y("span", Xi, ne(t.selector), 1)) : re("", !0)
            ]),
            W("div", Yi, [
              !$.value && G($e) ? (X(), Y("button", {
                key: 0,
                class: "btn small",
                title: "Edit",
                type: "button",
                onClick: (e) => f(t)
              }, [
                he(zi, { class: "g-w-3 g-h-3" }),
                Ji
              ], 8, Zi)) : re("", !0),
              $.value ? re("", !0) : (X(), Y("button", {
                key: 1,
                class: "btn small",
                title: "Delete",
                type: "button",
                onClick: l[0] || (l[0] = (e) => $.value = !0)
              }, [
                he(Di, { class: "g-w-3 g-h-3" }),
                Qi
              ])),
              $.value ? (X(), Y("button", {
                key: 2,
                class: "btn submit small",
                type: "button",
                onClick: (e) => k(t)
              }, " Remove", 8, qi)) : re("", !0),
              $.value ? (X(), Y("button", {
                key: 3,
                class: "btn small",
                type: "button",
                onClick: l[1] || (l[1] = (e) => $.value = !1)
              }, "Cancel")) : re("", !0)
            ])
          ], 40, Gi)
        ]))), 128))
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ xe(er, [["__file", "OrganizerDropZone.vue"]]), tr = {
  key: 0,
  class: "g-grid g-grid-rows-[auto,1fr] g-relative g-h-full g-rounded-lg g-bg-matrix-block"
}, nr = { class: "g-p-3 g-flex g-flex-nowrap g-items-center g-justify-between g-rounded-t-lg g-bg-matrix-titlebar" }, ir = { class: "g-mb-0" }, rr = { class: "g-inline-block g-space-x-1" }, sr = ["title"], or = { class: "g-p-6" }, ar = { class: "g-overflow-auto" }, lr = /* @__PURE__ */ Le({
  __name: "PlacementEditor",
  props: {
    groups: Array,
    placement: Object
  },
  emits: ["canceled", "saved"],
  setup(F, { expose: N, emit: w }) {
    const $ = F, L = ie(""), S = ie(""), k = ie(""), f = ie(), a = ie(), l = ie(), t = Ce(() => {
      const x = [];
      return L.value === "" && x.push("A group must be selected."), L.value === "uri" && S.value === "" && x.push("Selector cannot be empty."), L.value === "uri" && k.value === "" && x.push("Page URI cannot be empty."), x;
    }), e = Ce(() => {
      var o;
      const x = [{ label: "Guide", value: "nav" }];
      return (o = $.groups) == null || o.forEach((d) => {
        let b = d.header, u = d.name;
        switch (d.name) {
          case "assetVolume":
            b = `Asset Volume: ${d.header}`;
            break;
          case "categoryGroup":
            b = `Category Group: ${d.header}`;
            break;
          case "globalSet":
            b = `Global Set: ${d.header}`;
            break;
        }
        d.groupId && (u += `|${d.groupId}`), x.push({ label: b, value: u });
      }), x.push({ label: "Control Panel Pages", value: "uri" }), x;
    }), n = Ce(() => {
      var x;
      return ((x = $.placement) == null ? void 0 : x.id) === null;
    }), r = Ce(
      () => L.value === "uri" ? J.PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_SELECTOR_URI : J.PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_SELECTOR_NON_URI
    );
    function i() {
      w("canceled");
    }
    function s(x) {
      L.value = x;
    }
    function c(x) {
      S.value = x !== "" ? x : "";
    }
    function g(x) {
      k.value = x !== "" ? x : "";
    }
    function m() {
      vt(() => {
        var x, o, d, b;
        f.value && a.value && l.value && (f.value.setFieldValue(
          ((x = $.placement) == null ? void 0 : x.group) + ((o = $.placement) != null && o.groupId ? `|${$.placement.groupId}` : "") || "nav"
        ), a.value.setFieldValue(((d = $.placement) == null ? void 0 : d.uri) || ""), l.value.setFieldValue(((b = $.placement) == null ? void 0 : b.selector) || ""));
      });
    }
    function y() {
      if ($.placement) {
        const x = $.placement;
        if (L.value) {
          const o = L.value.split("|");
          o[0] && (x.group = o[0]), o[1] && (x.groupId = o[1]);
        }
        S.value !== "" && (x.selector = S.value), k.value !== "" && (x.uri = k.value), w("saved", x);
      }
    }
    return De(() => {
      we("PlacementEditor loaded");
    }), N({
      resetFields: m
    }), (x, o) => F.placement ? (X(), Y("div", tr, [
      W("div", nr, [
        W("h2", ir, ne(G(n) ? "Add Guide to Craft CP" : "Edit"), 1),
        W("div", rr, [
          W("button", {
            class: "btn",
            type: "button",
            onClick: i
          }, "Cancel"),
          G(t).length > 0 ? (X(), Y("button", {
            key: 0,
            class: "btn disabled",
            title: G(t).join(" ")
          }, ne(G(n) ? "Add" : "Save"), 9, sr)) : (X(), Y("button", {
            key: 1,
            class: "btn submit",
            type: "button",
            onClick: y
          }, ne(G(n) ? "Add" : "Save"), 1))
        ])
      ]),
      W("div", or, [
        W("div", ar, [
          he(je, {
            ref_key: "groupField",
            ref: f,
            required: "",
            instructions: G(J).PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_GROUP,
            label: G(J).Group,
            name: "group",
            options: G(e),
            onValueChanged: s
          }, null, 8, ["instructions", "label", "options"]),
          ke(he(Re, {
            ref_key: "uriField",
            ref: a,
            required: "",
            instructions: G(J).PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_URI,
            label: G(J)["Page URI"],
            name: "uri",
            onValueChanged: g
          }, null, 8, ["instructions", "label"]), [
            [Te, L.value === "uri"]
          ]),
          ke(he(Re, {
            ref_key: "selectorField",
            ref: l,
            required: L.value === "uri",
            instructions: G(r),
            label: G(J)["CSS Selector"],
            name: "selector",
            onValueChanged: c
          }, null, 8, ["required", "instructions", "label"]), [
            [Te, L.value !== "nav"]
          ])
        ])
      ])
    ])) : re("", !0);
  }
}), cr = /* @__PURE__ */ xe(lr, [["__file", "PlacementEditor.vue"]]), hr = {}, ur = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, dr = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
}, null, -1), gr = [
  dr
];
function fr(F, N) {
  return X(), Y("svg", ur, gr);
}
const mr = /* @__PURE__ */ xe(hr, [["render", fr], ["__file", "SvgGrid.vue"]]), pr = {}, vr = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, br = /* @__PURE__ */ W("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
}, null, -1), wr = [
  br
];
function xr(F, N) {
  return X(), Y("svg", vr, wr);
}
const yr = /* @__PURE__ */ xe(pr, [["render", xr], ["__file", "SvgList.vue"]]), kr = { class: "g-grid g-grid-cols-[minmax(150px,300px),minmax(400px,1fr)] g-relative g-overflow-hidden" }, $r = { class: "g-bg-white g-rounded-l-lg g-min-h-[650px] g-h-admin-window g-overflow-x-auto" }, Cr = { class: "g-p-6" }, Sr = ["innerHTML"], _r = ["onDragstart"], Ar = {
  key: 0,
  class: "g-text-text"
}, Tr = ["href"], Rr = ["href"], Lr = ["href"], Er = ["onClick"], Mr = {
  key: 1,
  class: "g-mt-3"
}, Fr = { class: "g-p-3" }, Ir = ["href"], Or = { class: "g-min-h-[650px] g-h-admin-window g-relative g-bg-select-dark g-rounded-r-lg g-overflow-x-auto" }, Dr = { class: "g-p-6" }, Br = { class: "g-text-select-light" }, Hr = { class: "g-grid g-grid-cols-[1fr,150px] g-gap-4 g-mt-6" }, Nr = { class: "g-grid g-gap-5 xl:g-grid-cols-4" }, Pr = {
  key: 0,
  class: "g-relative g-text-select-light"
}, Wr = { class: "g-space-x-1 g-mb-3 g-hidden g-border-b g-border-b-white/30 xl:g-block" }, zr = { class: "g-space-y-2" }, Ur = ["title"], Vr = ["id", "checked", "onChange"], Gr = ["for"], Kr = ["href"], jr = /* @__PURE__ */ Le({
  __name: "Organizer",
  props: {
    actionUrlGetAllPlacements: { type: String, required: !0 },
    cpTrigger: String,
    groupsData: { type: String, required: !0 },
    isNew: { type: Boolean, default: !1 }
  },
  setup(F) {
    const N = F, w = ie(null), $ = ie(null), L = ie("grid"), S = ie(JSON.parse(N.groupsData)), k = ie([]), f = ie([]), a = ie([]), l = ie(), t = ie(), e = Ce(
      () => $e ? S.value.filter((p) => a.value.includes(p.name)) : []
    );
    function n(p, h = null, v = null) {
      const C = {
        access: "all",
        group: h,
        groupId: v,
        guideId: p.id,
        id: null,
        portalMethod: "append",
        selector: null,
        theme: "default",
        uri: null
      };
      $e ? h ? (we("Adding placement for guide", p, h, v), x(C)) : i(C) : (C.group = "nav", C.groupId = null, x(C));
    }
    async function r(p) {
      var h;
      await ((h = window.Craft) == null ? void 0 : h.postActionRequest(
        "guide/placement/delete-placement",
        { data: JSON.stringify(p) },
        (v, C, _) => {
          var A, R, T, E;
          we("Deleting placement", v, C, _), c(), v.status === "success" ? (R = (A = window.Craft) == null ? void 0 : A.cp) == null || R.displayNotice("Organizer Saved") : (E = (T = window.Craft) == null ? void 0 : T.cp) == null || E.displayError(v.data.error);
        }
      ));
    }
    function i(p) {
      l.value && t.value && (l.value.open(), w.value = { ...p }, t.value.resetFields());
    }
    function s(p = null) {
      p && x(p), l.value && l.value.close(), w.value = null;
    }
    async function c() {
      var p;
      await ((p = window.Craft) == null ? void 0 : p.postActionRequest(
        "guide/placement/get-all-placements",
        null,
        (h, v, C) => {
          we("Getting placements", h, v, C), f.value = h;
        }
      ));
    }
    function g(p, h, v = null) {
      if (we("Dropping onto zone", h, v), p.dataTransfer.getData("placementId") === "new") {
        const C = Ie.find((_) => _.id === parseInt(p.dataTransfer.getData("guideId")));
        C && n(C, h, v);
      } else
        b(parseInt(p.dataTransfer.getData("placementId")), h, v);
    }
    function m(p, h) {
      p.dataTransfer.dropEffect = "move", p.dataTransfer.effectAllowed = "move", p.dataTransfer.setData("placementId", "new"), p.dataTransfer.setData("guideId", h);
    }
    function y(p, h = null) {
      return f.value.filter((v) => v.group === p && (h ? v.groupId === h : !0));
    }
    async function x(p) {
      var h;
      p.group !== "uri" && (p.uri = null), await ((h = window.Craft) == null ? void 0 : h.postActionRequest(
        "guide/placement/save-placement",
        { data: JSON.stringify(p) },
        (v, C, _) => {
          var A, R, T, E;
          we("Saving placement", v, C, _), c(), v.status === "success" ? (R = (A = window.Craft) == null ? void 0 : A.cp) == null || R.displayNotice("Organizer Saved") : (E = (T = window.Craft) == null ? void 0 : T.cp) == null || E.displayError(v.data.error);
        }
      ));
    }
    function o(p) {
      L.value = p, localStorage.setItem("guide:organizer:gridView", p);
    }
    function d(p) {
      const h = a.value.indexOf(p);
      h === -1 ? a.value.push(p) : a.value.splice(h, 1), localStorage.setItem("guide:organizer:selectedGroupFilters", JSON.stringify(a.value));
    }
    function b(p, h, v = null) {
      we(`Updating placement: ${p} group to: ${h}`), f.value.forEach((C) => {
        we(
          "Updating placement?",
          C.groupId !== v,
          C.groupId,
          typeof C.groupId,
          v,
          typeof v
        ), C.id === p && (v ? !0 : C.group !== h) && (v && C.groupId ? parseInt(C.groupId) !== v : !0) && (C.group = h, C.groupId = v || null, x(C));
      });
    }
    function u(p) {
      return N.cpTrigger ? `/${N.cpTrigger}/${p}` : `/${p}`;
    }
    return De(() => {
      var v;
      const p = document.getElementById("content");
      p && (p.style.padding = "0px");
      const h = [];
      (v = S.value) == null || v.forEach((C) => {
        const _ = { label: C.label, value: C.name };
        h.includes(C.name) || (k.value.push(_), h.push(C.name));
      }), localStorage.getItem("guide:organizer:selectedGroupFilters") ? a.value = JSON.parse(localStorage.getItem("guide:organizer:selectedGroupFilters")) : a.value = h.filter((C) => !["assetVolume", "categoryGroup", "globalSet", "user"].includes(C)), (localStorage.getItem("guide:organizer:gridView") === "list" || localStorage.getItem("guide:organizer:gridView") === "grid") && (L.value = localStorage.getItem("guide:organizer:gridView")), c(), we("Organizer loaded");
    }), (p, h) => (X(), Y(_e, null, [
      W("div", kr, [
        W("div", $r, [
          W("div", Cr, [
            W("h2", null, ne(G(J).Guides), 1),
            W("p", {
              innerHTML: G(J).ORGANIZER_GUIDES_INSTRUCTIONS
            }, null, 8, Sr)
          ]),
          W("ul", null, [
            (X(!0), Y(_e, null, Me(G(Ie), (v) => (X(), Y("li", {
              key: v.slug,
              class: "g-group g-p-3 g-bg-matrix-block g-border-t g-border-solid g-border-matrix-border g-duration-150 g-cursor-move hover:g-bg-select-light last:g-border-b",
              draggable: "true",
              title: "Drag guide to an area of the Craft Control Panel",
              onDragstart: (C) => m(C, v.id)
            }, [
              W("h3", null, ne(v.title), 1),
              v.summary ? (X(), Y("p", Ar, ne(v.summary), 1)) : re("", !0),
              W("div", {
                class: ve(["g-mt-1 g-space-x-1 group-focus:g-block group-hover:g-block", [$.value === v.id ? "g-block" : "g-hidden"]])
              }, [
                G(Ge).editGuides ? (X(), Y("a", {
                  key: 0,
                  class: "btn small",
                  title: "Edit guide",
                  type: "button",
                  href: u(`guide/edit/${v.id}?return=${u("guide/organizer")}`)
                }, ne(G(J).Edit), 9, Tr)) : re("", !0),
                G(Ge).deleteGuides ? (X(), Y("a", {
                  key: 1,
                  class: "btn small",
                  title: "Delete guide",
                  type: "button",
                  href: u(`guide/delete/${v.id}`)
                }, ne(G(J).Delete), 9, Rr)) : re("", !0),
                G($e) ? (X(), Y("a", {
                  key: 2,
                  class: "btn small",
                  title: "View guide on a separate page",
                  type: "button",
                  href: u(`guide/page/${v.slug}`)
                }, ne(G(J).View), 9, Lr)) : re("", !0),
                W("button", {
                  class: "btn small icon add",
                  title: "Add guide to the Craft Control Panel",
                  type: "button",
                  onClick: (C) => n(v)
                }, ne(G(J).Add), 9, Er)
              ], 2),
              $.value === v.id ? (X(), Y("div", Mr, "Edit this!")) : re("", !0)
            ], 40, _r))), 128))
          ]),
          W("div", Fr, [
            W("a", {
              class: "btn add icon submit",
              href: u("guide/new")
            }, "New Guide", 8, Ir)
          ])
        ]),
        W("div", Or, [
          W("div", Dr, [
            W("div", Br, [
              W("h2", null, ne(G(J)["Craft CP"]), 1),
              W("p", null, ne(G(J).ORGANIZER_CP_INSTRUCTIONS), 1)
            ]),
            W("div", Hr, [
              W("div", Nr, [
                he(Ke, {
                  class: ve({
                    "xl:g-col-span-3": L.value === "grid",
                    "xl:g-col-start-1 xl:g-col-span-4": L.value === "list"
                  }),
                  "header-size": 3,
                  description: "The Guide CP Section",
                  header: "Guide",
                  group: "nav",
                  guides: G(Ie),
                  placements: y("nav", null),
                  onDrop: h[0] || (h[0] = (v) => g(v, "nav", null)),
                  onDragover: h[1] || (h[1] = Ee(() => {
                  }, ["prevent"])),
                  onDragenter: h[2] || (h[2] = Ee(() => {
                  }, ["prevent"])),
                  onDeletePlacementClicked: r,
                  onEditPlacementClicked: i,
                  onPlacementDropped: b
                }, null, 8, ["class", "guides", "placements"]),
                (X(!0), Y(_e, null, Me(G(e), (v) => (X(), He(Ke, {
                  key: v.name,
                  class: ve({
                    "xl:g-col-span-3": v.columns === 3 && L.value === "grid",
                    "xl:g-col-span-2": v.columns === 2 && L.value === "grid",
                    "xl:g-col-start-1 xl:g-col-span-4": L.value === "list"
                  }),
                  "header-size": v.headerSize,
                  description: v.description || null,
                  header: v.header || null,
                  group: v.name,
                  guides: G(Ie),
                  placements: y(v.name, v.groupId),
                  onDrop: (C) => g(C, v.name, v.groupId || null),
                  onDragover: h[3] || (h[3] = Ee(() => {
                  }, ["prevent"])),
                  onDragenter: h[4] || (h[4] = Ee(() => {
                  }, ["prevent"])),
                  onDeletePlacementClicked: r,
                  onEditPlacementClicked: i,
                  onPlacementDropped: b
                }, null, 8, ["class", "header-size", "description", "header", "group", "guides", "placements", "onDrop"]))), 128)),
                G($e) ? (X(), He(Ke, {
                  key: 0,
                  class: ve({
                    "xl:g-col-span-4": L.value === "grid",
                    "xl:g-col-start-1 xl:g-col-span-4": L.value === "list"
                  }),
                  "header-size": 3,
                  description: "Individual pages in the Control Panel",
                  header: "Control Panel Pages",
                  group: "uri",
                  guides: G(Ie),
                  placements: y("uri", null),
                  onDrop: h[5] || (h[5] = (v) => g(v, "uri", null)),
                  onDragover: h[6] || (h[6] = Ee(() => {
                  }, ["prevent"])),
                  onDragenter: h[7] || (h[7] = Ee(() => {
                  }, ["prevent"])),
                  onDeletePlacementClicked: r,
                  onEditPlacementClicked: i,
                  onPlacementDropped: b
                }, null, 8, ["class", "guides", "placements"])) : re("", !0)
              ]),
              G($e) ? (X(), Y("div", Pr, [
                W("div", Wr, [
                  W("button", {
                    class: ve(["g-my-2 g-mr-1 g-text-white", [L.value === "grid" ? "g-opacity-100" : "g-opacity-70"]]),
                    title: "Display Craft Control Panel areas as a grid",
                    type: "button",
                    onClick: h[8] || (h[8] = (v) => o("grid"))
                  }, [
                    he(mr, { class: "g-w-6 g-h-6" })
                  ], 2),
                  W("button", {
                    class: ve(["g-my-2 g-mr-1 g-text-white", [L.value === "list" ? "g-opacity-100" : "g-opacity-70"]]),
                    title: "Display Craft Control Panel areas as a list",
                    type: "button",
                    onClick: h[9] || (h[9] = (v) => o("list"))
                  }, [
                    he(yr, { class: "g-w-6 g-h-6" })
                  ], 2)
                ]),
                W("ul", zr, [
                  (X(!0), Y(_e, null, Me(k.value, (v) => (X(), Y("li", {
                    key: v.value,
                    class: "g-group g-flex g-flex-nowrap g-items-start g-gap-1",
                    title: a.value.includes(v.value) ? "Hide group and guides from Organizer" : "Show group in Organizer"
                  }, [
                    W("input", {
                      id: `group-filter-${v.value}`,
                      class: "guide-accent-primary g-mt-0.5 g-w-4 g-h-4",
                      checked: a.value.includes(v.value),
                      type: "checkbox",
                      onChange: (C) => d(v.value)
                    }, null, 40, Vr),
                    W("label", {
                      class: "group-hover:g-text-white",
                      for: `group-filter-${v.value}`
                    }, ne(v.label), 9, Gr)
                  ], 8, Ur))), 128))
                ])
              ])) : re("", !0)
            ])
          ])
        ]),
        he(Ct, {
          ref_key: "editModal",
          ref: l
        }, {
          default: tt(() => [
            he(cr, {
              ref_key: "placementEditor",
              ref: t,
              groups: S.value,
              placement: w.value,
              onCanceled: s,
              onSaved: s
            }, null, 8, ["groups", "placement"])
          ]),
          _: 1
        }, 512)
      ]),
      (X(), He(nt, { to: "#guide-action-buttons" }, [
        G(Ge).editGuides ? (X(), Y("a", {
          key: 0,
          class: "btn add icon submit",
          href: u("guide/new")
        }, "New Guide", 8, Kr)) : re("", !0)
      ]))
    ], 64));
  }
}), Xr = /* @__PURE__ */ xe(jr, [["__file", "Organizer.vue"]]), Yr = /* @__PURE__ */ W("h1", null, "Export/Import Guides", -1), Zr = /* @__PURE__ */ W("p", null, [
  /* @__PURE__ */ Fe(" Guides and their content can be moved from one environment to another to make it easier to re-use guides across multiple projects."),
  /* @__PURE__ */ W("br"),
  /* @__PURE__ */ W("em", null, "NOTE: Twig templates and assets will need to be migrated manually.")
], -1), Jr = /* @__PURE__ */ W("hr", null, null, -1), Qr = /* @__PURE__ */ W("p", null, [
  /* @__PURE__ */ W("b", null, "Step 1."),
  /* @__PURE__ */ Fe(" Select Guides to export.")
], -1), qr = { key: 0 }, es = ["id", "name", "value"], ts = ["for"], ns = { key: 1 }, is = /* @__PURE__ */ W("p", null, "No guides have been created yet!", -1), rs = [
  is
], ss = /* @__PURE__ */ W("p", null, [
  /* @__PURE__ */ W("b", null, "Step 2."),
  /* @__PURE__ */ Fe(" Copy Guide export data.")
], -1), os = /* @__PURE__ */ W("p", null, [
  /* @__PURE__ */ W("b", null, "Step 3."),
  /* @__PURE__ */ Fe(" Log into another environment and visit this "),
  /* @__PURE__ */ W("b", null, "Utilities \u2192 Guide"),
  /* @__PURE__ */ Fe(" page")
], -1), as = /* @__PURE__ */ W("p", null, [
  /* @__PURE__ */ W("b", null, "Step 4."),
  /* @__PURE__ */ Fe(' In that environment, paste the JSON into this field and click "Import Data into Guide"')
], -1), ls = /* @__PURE__ */ Le({
  __name: "PluginUtilities",
  props: {
    exportData: String
  },
  setup(F) {
    const N = F, w = ie([]), $ = ie(!1), L = ie(N.exportData ? JSON.parse(N.exportData) : {}), S = ie(""), k = ie(), f = Ce(() => navigator.clipboard && window.isSecureContext), a = Ce(() => {
      var m, y;
      const i = [];
      l.value.forEach((x) => {
        w.value.includes(x.slug) && i.push(x.slug);
      });
      const c = {
        guides: (y = (m = L.value) == null ? void 0 : m.guides) != null && y.length ? L.value.guides.filter((x) => i.includes(x.slug)) : []
      }, g = JSON.stringify(c);
      return g || "";
    }), l = Ce(() => {
      var i, s;
      return (s = (i = L.value) == null ? void 0 : i.guides) != null && s.length ? L.value.guides.map((c) => ({
        checked: !1,
        slug: c.slug,
        title: c.title
      })) : [];
    });
    function t(i, s) {
      navigator.clipboard.writeText(i).then(() => {
        var c, g;
        (g = (c = window.Craft) == null ? void 0 : c.cp) == null || g.displayNotice(s);
      });
    }
    function e() {
      f.value && a.value && t(a.value, "Data copied");
    }
    function n(i) {
      S.value = i;
    }
    async function r() {
      var i;
      await ((i = window.Craft) == null ? void 0 : i.postActionRequest(
        "guide/import-export/import-json",
        { guideData: S.value },
        (s, c, g) => {
          var m, y, x, o;
          we("Saving placement", s, c, g), $.value = !0, s.status === "success" ? (y = (m = window.Craft) == null ? void 0 : m.cp) == null || y.displayNotice("Guide Data Imported") : (o = (x = window.Craft) == null ? void 0 : x.cp) == null || o.displayError(s.data.error);
        }
      ));
    }
    return De(() => {
      we("PluginUtilities loaded");
    }), bt(() => {
      k.value && k.value.setFieldValue(a.value);
    }), (i, s) => (X(), Y("div", null, [
      Yr,
      Zr,
      Jr,
      Qr,
      G(l).length ? (X(), Y("div", qr, [
        (X(!0), Y(_e, null, Me(G(l), (c) => (X(), Y("div", {
          key: c.slug
        }, [
          ke(W("input", {
            id: `export-option-${c.slug}`,
            "onUpdate:modelValue": s[0] || (s[0] = (g) => w.value = g),
            class: "checkbox",
            type: "checkbox",
            name: c.slug,
            value: c.slug
          }, null, 8, es), [
            [wt, w.value]
          ]),
          W("label", {
            for: `export-option-${c.slug}`
          }, ne(c.title), 9, ts)
        ]))), 128))
      ])) : (X(), Y("div", ns, rs)),
      ss,
      he(Re, {
        ref_key: "exportField",
        ref: k,
        autofocus: !1,
        "field-attributes": { readonly: !0, rows: 4 },
        "field-type": "textarea",
        label: "Export Data",
        name: "export"
      }, null, 512),
      G(f) ? (X(), Y("button", {
        key: 2,
        class: "btn submit",
        type: "button",
        onClick: e
      }, " Copy Guide Export Data to Clipboard ")) : re("", !0),
      os,
      as,
      he(Re, {
        autofocus: !1,
        "field-attributes": { placeholder: "Paste Guide data here.", rows: 4 },
        "field-type": "textarea",
        label: "Import Data",
        name: "import",
        onValueChanged: n
      }, null, 8, ["field-attributes"]),
      W("button", {
        class: "btn submit",
        type: "button",
        onClick: r
      }, "Import Data into Guide")
    ]));
  }
}), cs = /* @__PURE__ */ xe(ls, [["__file", "PluginUtilities.vue"]]);
async function gs() {
  const F = document.getElementById("guide-editor");
  F && Ue(Li, {
    ...F.dataset
  }).mount(F);
  const N = document.getElementById("guide-utilities");
  N && Ue(cs, {
    ...N.dataset
  }).mount(N);
  const w = document.getElementById("guide-organizer");
  w && Ue(Xr, {
    ...w.dataset
  }).mount(w), we("Admin loaded");
}
export {
  gs as default
};
