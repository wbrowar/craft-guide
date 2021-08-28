import { log } from './globals';
import { EditorComponent } from './types/plugins';

export const editorData: EditorComponent[] = [
  // Components
  {
    title: 'Audio',
    group: 'components',
    code: `{{ craft.guide.component('audio', { src: 'REPLACE_URL' }) }}`,
    summary: `<p>Play audio in the browser’s audio player.</p>`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      src: `A absolute URL to your audio file.`,
    },
  },
  {
    title: 'Button',
    group: 'components',
    code: `{{ craft.guide.component('button', { label: 'REPLACE_LABEL', url: url('REPLACE_URL') }) }}`,
    summary: `<p>A call-to-action link that looks like a button.</p>`,
    documentation: `<p>A call-to-action link that looks like a button.</p>`,
    props: {
      label: `The label text for the button.`,
      href: `The URL that the button goes to when clicked.`,
    },
  },
  {
    title: 'CSS',
    group: 'components',
    code: `{% css %}
.guide-{{ guide.slug }} {
  
}
{% endcss %}`,
    summary: `<p>Write custom CSS for this guide.</p>`,
    documentation: `<p>Write custom CSS for this guide. A ".guide" class wraps around all guide content. </p>`,
  },
  {
    title: 'Grid',
    group: 'components',
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
    summary: `<p>A 4-column CSS grid example.</p>`,
    documentation: `<p>An example using utility classes to lay out content using CSS grid columns.</p>`,
  },
  {
    title: 'Grid – Custom Columns',
    group: 'components',
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
    summary: `<p>A custom CSS grid example.</p>`,
    documentation: `<p>An example using utility classes to lay out content using CSS Custom Properties to define the grid’s columns.</p>`,
  },
  // {
  //   title: 'Heading',
  //   group: 'components',
  //   code: `{{ craft.guide.component('heading', { level: 2, text: 'REPLACE_TEXT' }) }}`,
  //   summary: `<p>A section heading wrapped in an anchor link.</p>`,
  //   documentation: `<p>A section heading wrapped in an anchor link.</p>`,
  //   props: {
  //     level: `A number that defines the wrapper tag. For example, the value of <strong>2</strong> would set the wrapper tag to <strong>h2</strong>.`,
  //     text: `The text displayed in the header.`,
  //   },
  // },
  {
    title: 'Image',
    group: 'components',
    code: `{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}`,
    summary: `<p>Display an image or a screenshot from a URL.</p>`,
    documentation: `<p>Display an image or a screenshot from a URL.</p>`,
    props: {
      src: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Markdown',
    group: 'components',
    code: `<div class="g-prose g-prose-sm">
{% filter markdown('gfm') %}

## Heading

Content

{% endfilter %}
</div>`,
    summary: `<p>Render Markdown in your guide.</p>`,
    documentation: `<p>Use Craft’s "markdown" Twig filter to render markdown content.</p>`,
  },
  {
    title: 'Table',
    group: 'components',
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
    summary: `<p>A styled HTML table.</p>`,
    documentation: `<p>A styled HTML table.</p>`,
  },
  {
    title: 'Tip',
    group: 'components',
    code: `{{ craft.guide.component('tip', { text: 'REPLACE_TEXT' }) }}`,
    summary: `<p>Inform content authors in a way that stands out from surrounding text.</p>`,
    documentation: `<p>Inform content authors in a way that stands out from surrounding text.</p>`,
    props: {
      message: `Text displayed in the tip.`,
    },
  },
  {
    title: 'TL;DR Hide',
    group: 'components',
    code: `<div class="tldr-hide g-space-y-6">
  
</div>`,
    summary: `<p>Show a <strong>TL;DR</strong> button on your guide and hide this content when <strong>TL;DR</strong> is active.</p>`,
    documentation: `<p>Show a <strong>TL;DR</strong> button on your guide and hide this content when <strong>TL;DR</strong> is active.</p>`,
  },
  {
    title: 'TL;DR Show',
    group: 'components',
    code: `<div class="tldr-show g-space-y-6">
  
</div>`,
    summary: `<p>Show a <strong>TL;DR</strong> button on your guide, hide this content and show it when <strong>TL;DR</strong> is active.</p>`,
    documentation: `<p>Show a <strong>TL;DR</strong> button on your guide, hide this content and show it when <strong>TL;DR</strong> is active.</p>`,
  },
  {
    title: 'Variable Client Name',
    group: 'components',
    code: `{{ craft.guide.var('clientName') }}`,
    summary: `<p>Display the value of the <strong>Client Name</strong> variable.</p>`,
    documentation: `<p>Display the value of the <strong>Client Name</strong> variable.</p>`,
  },
  {
    title: 'Variable My Company Name',
    group: 'components',
    code: `{{ craft.guide.var('myCompanyName') }}`,
    summary: `<p>Display the value of the <strong>My Company Name</strong> variable.</p>`,
    documentation: `<p>Display the value of the <strong>My Company Name</strong> variable.</p>`,
  },
  {
    title: 'Variable Project Name',
    group: 'components',
    code: `{{ craft.guide.var('projectName') }}`,
    summary: `<p>Display the value of the <strong>Project Name</strong> variable.</p>`,
    documentation: `<p>Display the value of the <strong>Project Name</strong> variable.</p>`,
  },
  {
    title: 'Vimeo Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'vimeo', videoId: 'REPLACE_VIDEO_ID' }) }}`,
    summary: `<p>Play a Vimeo video in an iframe.</p>`,
    documentation: `<p>Play a Vimeo video in an iframe.</p>`,
    props: {
      source: `Determine the video hosting service’s embed code.`,
      videoId: `The ID of the Vimeo video, found in the URL or embed code provided by Vimeo.`,
    },
  },
  {
    title: 'Warning',
    group: 'components',
    code: `{{ craft.guide.component('warning', { text: 'REPLACE_TEXT' }) }}`,
    summary: `<p>Warn content authors about potential content issues.</p>`,
    documentation: `<p>Warn content authors about potential content issues.</p>`,
    props: {
      message: `Text displayed in the warning.`,
    },
  },
  {
    title: 'YouTube Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'youtube', videoId: 'REPLACE_VIDEO_ID' }) }}`,
    summary: `<p>Play a YouTube video in an iframe.</p>`,
    documentation: `<p>Play a YouTube video in an iframe.</p>`,
    props: {
      source: `Determine the video hosting service’s embed code.`,
      videoId: `The ID of the Vimeo video, found in the URL or embed code provided by YouTube.`,
    },
  },
  // Snippets
  // todo add snippet: GraphQL Helper - Checklist to make sure sections are in graphql schema.
  // todo add snippet: User Role Helper - Table of sections and their user roles (flagging any that don't have a user role).
  // todo add snippet: Logged in users – List of currently logged in users.
  {
    title: 'Changelog',
    group: 'snippets',
    code: `{# VERSION START – For each version, make a copy of this block and place it at the top of this guide. #}
{% set version %}
<div class="version">
  <h2 class="g-mb-6"><span>1.0.0</span> Aug 27, 2021</h2>
<div class="g-prose g-prose-sm">
{% filter markdown('gfm') %}

### &#x1F680; Added

- Features that have been added.

### &#x1F527; Changed

- Things that have changed.

### &#x1F6A7; Fixed

- Bugs that have been fixed.

### &#x1F525; Deleted

- Features that have been removed.

{% endfilter %}
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
    summary: `<p>Display updates to your Craft project.</p>`,
    documentation: `<p>Display updates to your Craft project.</p>`,
  },
  {
    title: 'Content Stats',
    group: 'snippets',
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
    summary: `<p>Show a total of entries that are currently published.</p>`,
    documentation: `<p>Show a total of entries that are currently published.</p>`,
  },
  {
    title: 'Element Search',
    group: 'snippets',
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
        <td><a href="{{ row.url }}" target="_blank" rel="nofollow noopener" title="View element’s page in a new window."><span class="status {{ row.status }}"></span><span>{{ row.title }}</span></a></td>
        <td><a class="btn icon edit" href="{{ row.cpEditUrl }}" target="_blank" rel="nofollow noopener" title="Go to element edit page.">Edit</a></td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
{% endmacro %}`,
    summary: `<p>Search for entries using Craft’s keyword search.</p>`,
    documentation: `<p>Search for entries using Craft’s keyword search.</p>`,
  },
  {
    title: 'Filled Out Fields',
    group: 'snippets',
    code: `{# Set the field’s handle. #}
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
        <td><a href="{{ row.url }}" target="_blank" rel="nofollow noopener" title="View element’s page in a new window.">{{ row.title }}</a></td>
        <td><a class="btn icon edit" href="{{ row.cpEditUrl }}" target="_blank" rel="nofollow noopener" title="Go to element edit page.">Edit</a></td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
{% endmacro %}`,
    summary: `<p>Find elements where a field is either filled out or empty.</p>`,
    documentation: `<p>Find elements where a field is either filled out or empty.</p>`,
  },
  {
    title: 'Low-Res Image Check',
    group: 'snippets',
    code: `{# Set the asset volume you would like to check for images in. #}
{% set volume = null %}

{# Set the width to the smallest size that an image should be uploaded. #}
{% set width = 500 %}

{# Display a list of invalid images and instruct authors on what size is recommended. #}
{% cache %}
  {# Find all images within the targeted asset volume that are not wider than the "width" value. #}
  {% set assets = craft.assets.volume(volume ?? null).width('< ' ~ width).kind('image').all() %}

  {% if assets|length %}
<div class="g-prose g-prose-sm">
{% filter markdown('gfm') %}

## Images that are too small (less than {{ width }}px wide)

These images should be replaced with a .jpg that is at least {{ width }}px wide.

{% endfilter %}
</div>
    
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
{% endcache %}`,
    summary: `<p>Find images that would get upscaled if transformed.</p>`,
    documentation: `<p>Find images that would get upscaled if transformed.</p>`,
  },
  {
    title: 'Missing Focal Points',
    group: 'snippets',
    code: `{# Find images within a specific asset volume. #}
{% set volume = null %}

<div class="g-prose g-prose-sm">
{% filter markdown('gfm') %}

## Images that need a focal point

These images are missing a focal point and might get cropped incorrectly.

{% endfilter %}
</div>

{# Display images that are missing focal points. #}
{% cache %}
{% set assets = craft.assets.volume(volume ?? null).kind('image').all() %}

{% for asset in assets %}
  {% if not asset.hasFocalPoint %}
    {% set relatedEntries = craft.entries.relatedTo(asset).all() %}
    <div style="display: grid; grid-template-columns: 300px 1fr; gap: 10px; margin-top: 10px;">
      <img loading="lazy" src="{{ asset.url }}" width="300" />
      <div>
        <a class="btn submit" href="{{ asset.cpEditUrl }}">Edit</a>
        <p><strong>Title:</strong> {{ asset.title }}</p>
        <p><strong>File name:</strong> {{ asset.filename }}</p>
        <p><strong>Width:</strong> {{ asset.width }}px</p>
        {% if relatedEntries|length %}
          <p><strong>Appears in:</strong></p>
          <ul>
            {% for relatedEntry in relatedEntries %}
                <li><a href="{{ relatedEntry.url }}">{{ relatedEntry.title }}</a></li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    </div>
  {% endif %}
{% endfor %}
{% endcache %}`,
    summary: `<p>Find images that are missing focal points.</p>`,
    documentation: `<p>Find images that are missing focal points.</p>`,
  },
];

const utilityClassesBase: string[] = [
  'g-prose',
  'g-prose-sm',
  'g-prose-md',
  'g-prose-lg',
  'g-prose-xl',
  'g-prose-2xl',
  'g-hidden',
  'g-block',
  'g-inline-block',
  'g-flex',
  'g-inline-flex',
  'g-flex-wrap',
  'g-flex-nowrap',
  'g-flex-wrap-reverse',
  'g-flex-grow-0',
  'g-flex-grow',
  'g-flex-shrink-0',
  'g-flex-shrink',
  'g-grid',
  'g-inline-grid',
  'g-items-center',
  'g-items-start',
  'g-items-end',
  'g-items-baseline',
  'g-items-stretch',
  'g-justify-start',
  'g-justify-end',
  'g-justify-center',
  'g-justify-between',
  'g-justify-around',
  'g-justify-evenly',
  'g-grid-cols-2',
  'g-grid-cols-3',
  'g-grid-cols-4',
  'g-grid-cols-5',
  'g-grid-cols-6',
  'g-grid-cols-[var(--grid-cols)]',
  'g-grid-cols-[var(--grid-cols-sm)]',
  'g-grid-cols-[var(--grid-cols-md)]',
  'g-grid-cols-[var(--grid-cols-lg)]',
  'g-mx-0',
  'g-my-0',
  'g-mt-0',
  'g-mr-0',
  'g-mb-0',
  'g-ml-0',
  'g-mx-3',
  'g-my-3',
  'g-mt-3',
  'g-mr-3',
  'g-mb-3',
  'g-ml-3',
  'g-mx-6',
  'g-my-6',
  'g-mt-6',
  'g-mr-6',
  'g-mb-6',
  'g-ml-6',
  'g-px-0',
  'g-py-0',
  'g-pt-0',
  'g-pr-0',
  'g-pb-0',
  'g-pl-0',
  'g-px-3',
  'g-py-3',
  'g-pt-3',
  'g-pr-3',
  'g-pb-3',
  'g-pl-3',
  'g-px-6',
  'g-py-6',
  'g-pt-6',
  'g-pr-6',
  'g-pb-6',
  'g-pl-6',
  'g-absolute',
  'g-relative',
  'g-sticky',
  'g-top-0',
  'g-top-16',
  'g-right-0',
  'g-bottom-0',
  'g-left-0',
  'g-space-y-1',
  'g-space-y-2',
  'g-space-y-3',
  'g-space-y-6',
  'g-space-x-1',
  'g-space-x-2',
  'g-space-x-3',
  'g-space-x-6',
  'g-max-w-prose',
  'g-text-left',
  'g-text-center',
  'g-text-right',
  'g-text-primary',
  'g-text-sm',
  'g-font-bold',
  'g-cursor-pointer',
  'g-shadow-lg',
  'g-duration-150',
  'g-duration-300',
  'g-cursor-grab',
  'g-cursor-grabbing',
  'g-scroll-snap-none',
  'g-scroll-snap-x',
  'g-scroll-snap-y',
  'g-scroll-snap-start',
  'g-scroll-snap-center',
  'g-scroll-snap-end',
];

if (import.meta.env.DEV) {
  const classes: string[] = [];
  const variants = ['sm', 'md', 'lg', 'tldr'];
  utilityClassesBase.forEach((classString) => {
    variants.forEach((variant) => {
      classes.push(`${variant}:${classString}`);
    });
  });
  log('Utility classes with variants', classes);
}

const utilityClassesWithVariants: string[] = [
  'sm:g-prose',
  'md:g-prose',
  'lg:g-prose',
  'tldr:g-prose',
  'sm:g-prose-sm',
  'md:g-prose-sm',
  'lg:g-prose-sm',
  'tldr:g-prose-sm',
  'sm:g-prose-md',
  'md:g-prose-md',
  'lg:g-prose-md',
  'tldr:g-prose-md',
  'sm:g-prose-lg',
  'md:g-prose-lg',
  'lg:g-prose-lg',
  'tldr:g-prose-lg',
  'sm:g-prose-xl',
  'md:g-prose-xl',
  'lg:g-prose-xl',
  'tldr:g-prose-xl',
  'sm:g-prose-2xl',
  'md:g-prose-2xl',
  'lg:g-prose-2xl',
  'tldr:g-prose-2xl',
  'sm:g-hidden',
  'md:g-hidden',
  'lg:g-hidden',
  'tldr:g-hidden',
  'sm:g-block',
  'md:g-block',
  'lg:g-block',
  'tldr:g-block',
  'sm:g-inline-block',
  'md:g-inline-block',
  'lg:g-inline-block',
  'tldr:g-inline-block',
  'sm:g-flex',
  'md:g-flex',
  'lg:g-flex',
  'tldr:g-flex',
  'sm:g-inline-flex',
  'md:g-inline-flex',
  'lg:g-inline-flex',
  'tldr:g-inline-flex',
  'sm:g-flex-wrap',
  'md:g-flex-wrap',
  'lg:g-flex-wrap',
  'tldr:g-flex-wrap',
  'sm:g-flex-nowrap',
  'md:g-flex-nowrap',
  'lg:g-flex-nowrap',
  'tldr:g-flex-nowrap',
  'sm:g-flex-wrap-reverse',
  'md:g-flex-wrap-reverse',
  'lg:g-flex-wrap-reverse',
  'tldr:g-flex-wrap-reverse',
  'sm:g-flex-grow-0',
  'md:g-flex-grow-0',
  'lg:g-flex-grow-0',
  'tldr:g-flex-grow-0',
  'sm:g-flex-grow',
  'md:g-flex-grow',
  'lg:g-flex-grow',
  'tldr:g-flex-grow',
  'sm:g-flex-shrink-0',
  'md:g-flex-shrink-0',
  'lg:g-flex-shrink-0',
  'tldr:g-flex-shrink-0',
  'sm:g-flex-shrink',
  'md:g-flex-shrink',
  'lg:g-flex-shrink',
  'tldr:g-flex-shrink',
  'sm:g-grid',
  'md:g-grid',
  'lg:g-grid',
  'tldr:g-grid',
  'sm:g-inline-grid',
  'md:g-inline-grid',
  'lg:g-inline-grid',
  'tldr:g-inline-grid',
  'sm:g-items-center',
  'md:g-items-center',
  'lg:g-items-center',
  'tldr:g-items-center',
  'sm:g-items-start',
  'md:g-items-start',
  'lg:g-items-start',
  'tldr:g-items-start',
  'sm:g-items-end',
  'md:g-items-end',
  'lg:g-items-end',
  'tldr:g-items-end',
  'sm:g-items-baseline',
  'md:g-items-baseline',
  'lg:g-items-baseline',
  'tldr:g-items-baseline',
  'sm:g-items-stretch',
  'md:g-items-stretch',
  'lg:g-items-stretch',
  'tldr:g-items-stretch',
  'sm:g-justify-start',
  'md:g-justify-start',
  'lg:g-justify-start',
  'tldr:g-justify-start',
  'sm:g-justify-end',
  'md:g-justify-end',
  'lg:g-justify-end',
  'tldr:g-justify-end',
  'sm:g-justify-center',
  'md:g-justify-center',
  'lg:g-justify-center',
  'tldr:g-justify-center',
  'sm:g-justify-between',
  'md:g-justify-between',
  'lg:g-justify-between',
  'tldr:g-justify-between',
  'sm:g-justify-around',
  'md:g-justify-around',
  'lg:g-justify-around',
  'tldr:g-justify-around',
  'sm:g-justify-evenly',
  'md:g-justify-evenly',
  'lg:g-justify-evenly',
  'tldr:g-justify-evenly',
  'sm:g-grid-cols-2',
  'md:g-grid-cols-2',
  'lg:g-grid-cols-2',
  'tldr:g-grid-cols-2',
  'sm:g-grid-cols-3',
  'md:g-grid-cols-3',
  'lg:g-grid-cols-3',
  'tldr:g-grid-cols-3',
  'sm:g-grid-cols-4',
  'md:g-grid-cols-4',
  'lg:g-grid-cols-4',
  'tldr:g-grid-cols-4',
  'sm:g-grid-cols-5',
  'md:g-grid-cols-5',
  'lg:g-grid-cols-5',
  'tldr:g-grid-cols-5',
  'sm:g-grid-cols-6',
  'md:g-grid-cols-6',
  'lg:g-grid-cols-6',
  'tldr:g-grid-cols-6',
  'sm:g-grid-cols-[var(--grid-cols)]',
  'md:g-grid-cols-[var(--grid-cols)]',
  'lg:g-grid-cols-[var(--grid-cols)]',
  'tldr:g-grid-cols-[var(--grid-cols)]',
  'sm:g-grid-cols-[var(--grid-cols-sm)]',
  'md:g-grid-cols-[var(--grid-cols-sm)]',
  'lg:g-grid-cols-[var(--grid-cols-sm)]',
  'tldr:g-grid-cols-[var(--grid-cols-sm)]',
  'sm:g-grid-cols-[var(--grid-cols-md)]',
  'md:g-grid-cols-[var(--grid-cols-md)]',
  'lg:g-grid-cols-[var(--grid-cols-md)]',
  'tldr:g-grid-cols-[var(--grid-cols-md)]',
  'sm:g-grid-cols-[var(--grid-cols-lg)]',
  'md:g-grid-cols-[var(--grid-cols-lg)]',
  'lg:g-grid-cols-[var(--grid-cols-lg)]',
  'tldr:g-grid-cols-[var(--grid-cols-lg)]',
  'sm:g-mx-0',
  'md:g-mx-0',
  'lg:g-mx-0',
  'tldr:g-mx-0',
  'sm:g-my-0',
  'md:g-my-0',
  'lg:g-my-0',
  'tldr:g-my-0',
  'sm:g-mt-0',
  'md:g-mt-0',
  'lg:g-mt-0',
  'tldr:g-mt-0',
  'sm:g-mr-0',
  'md:g-mr-0',
  'lg:g-mr-0',
  'tldr:g-mr-0',
  'sm:g-mb-0',
  'md:g-mb-0',
  'lg:g-mb-0',
  'tldr:g-mb-0',
  'sm:g-ml-0',
  'md:g-ml-0',
  'lg:g-ml-0',
  'tldr:g-ml-0',
  'sm:g-mx-3',
  'md:g-mx-3',
  'lg:g-mx-3',
  'tldr:g-mx-3',
  'sm:g-my-3',
  'md:g-my-3',
  'lg:g-my-3',
  'tldr:g-my-3',
  'sm:g-mt-3',
  'md:g-mt-3',
  'lg:g-mt-3',
  'tldr:g-mt-3',
  'sm:g-mr-3',
  'md:g-mr-3',
  'lg:g-mr-3',
  'tldr:g-mr-3',
  'sm:g-mb-3',
  'md:g-mb-3',
  'lg:g-mb-3',
  'tldr:g-mb-3',
  'sm:g-ml-3',
  'md:g-ml-3',
  'lg:g-ml-3',
  'tldr:g-ml-3',
  'sm:g-mx-6',
  'md:g-mx-6',
  'lg:g-mx-6',
  'tldr:g-mx-6',
  'sm:g-my-6',
  'md:g-my-6',
  'lg:g-my-6',
  'tldr:g-my-6',
  'sm:g-mt-6',
  'md:g-mt-6',
  'lg:g-mt-6',
  'tldr:g-mt-6',
  'sm:g-mr-6',
  'md:g-mr-6',
  'lg:g-mr-6',
  'tldr:g-mr-6',
  'sm:g-mb-6',
  'md:g-mb-6',
  'lg:g-mb-6',
  'tldr:g-mb-6',
  'sm:g-ml-6',
  'md:g-ml-6',
  'lg:g-ml-6',
  'tldr:g-ml-6',
  'sm:g-px-0',
  'md:g-px-0',
  'lg:g-px-0',
  'tldr:g-px-0',
  'sm:g-py-0',
  'md:g-py-0',
  'lg:g-py-0',
  'tldr:g-py-0',
  'sm:g-pt-0',
  'md:g-pt-0',
  'lg:g-pt-0',
  'tldr:g-pt-0',
  'sm:g-pr-0',
  'md:g-pr-0',
  'lg:g-pr-0',
  'tldr:g-pr-0',
  'sm:g-pb-0',
  'md:g-pb-0',
  'lg:g-pb-0',
  'tldr:g-pb-0',
  'sm:g-pl-0',
  'md:g-pl-0',
  'lg:g-pl-0',
  'tldr:g-pl-0',
  'sm:g-px-3',
  'md:g-px-3',
  'lg:g-px-3',
  'tldr:g-px-3',
  'sm:g-py-3',
  'md:g-py-3',
  'lg:g-py-3',
  'tldr:g-py-3',
  'sm:g-pt-3',
  'md:g-pt-3',
  'lg:g-pt-3',
  'tldr:g-pt-3',
  'sm:g-pr-3',
  'md:g-pr-3',
  'lg:g-pr-3',
  'tldr:g-pr-3',
  'sm:g-pb-3',
  'md:g-pb-3',
  'lg:g-pb-3',
  'tldr:g-pb-3',
  'sm:g-pl-3',
  'md:g-pl-3',
  'lg:g-pl-3',
  'tldr:g-pl-3',
  'sm:g-px-6',
  'md:g-px-6',
  'lg:g-px-6',
  'tldr:g-px-6',
  'sm:g-py-6',
  'md:g-py-6',
  'lg:g-py-6',
  'tldr:g-py-6',
  'sm:g-pt-6',
  'md:g-pt-6',
  'lg:g-pt-6',
  'tldr:g-pt-6',
  'sm:g-pr-6',
  'md:g-pr-6',
  'lg:g-pr-6',
  'tldr:g-pr-6',
  'sm:g-pb-6',
  'md:g-pb-6',
  'lg:g-pb-6',
  'tldr:g-pb-6',
  'sm:g-pl-6',
  'md:g-pl-6',
  'lg:g-pl-6',
  'tldr:g-pl-6',
  'sm:g-absolute',
  'md:g-absolute',
  'lg:g-absolute',
  'tldr:g-absolute',
  'sm:g-relative',
  'md:g-relative',
  'lg:g-relative',
  'tldr:g-relative',
  'sm:g-sticky',
  'md:g-sticky',
  'lg:g-sticky',
  'tldr:g-sticky',
  'sm:g-top-0',
  'md:g-top-0',
  'lg:g-top-0',
  'tldr:g-top-0',
  'sm:g-top-16',
  'md:g-top-16',
  'lg:g-top-16',
  'tldr:g-top-16',
  'sm:g-right-0',
  'md:g-right-0',
  'lg:g-right-0',
  'tldr:g-right-0',
  'sm:g-bottom-0',
  'md:g-bottom-0',
  'lg:g-bottom-0',
  'tldr:g-bottom-0',
  'sm:g-left-0',
  'md:g-left-0',
  'lg:g-left-0',
  'tldr:g-left-0',
  'sm:g-space-y-1',
  'md:g-space-y-1',
  'lg:g-space-y-1',
  'tldr:g-space-y-1',
  'sm:g-space-y-2',
  'md:g-space-y-2',
  'lg:g-space-y-2',
  'tldr:g-space-y-2',
  'sm:g-space-y-3',
  'md:g-space-y-3',
  'lg:g-space-y-3',
  'tldr:g-space-y-3',
  'sm:g-space-y-6',
  'md:g-space-y-6',
  'lg:g-space-y-6',
  'tldr:g-space-y-6',
  'sm:g-space-x-1',
  'md:g-space-x-1',
  'lg:g-space-x-1',
  'tldr:g-space-x-1',
  'sm:g-space-x-2',
  'md:g-space-x-2',
  'lg:g-space-x-2',
  'tldr:g-space-x-2',
  'sm:g-space-x-3',
  'md:g-space-x-3',
  'lg:g-space-x-3',
  'tldr:g-space-x-3',
  'sm:g-space-x-6',
  'md:g-space-x-6',
  'lg:g-space-x-6',
  'tldr:g-space-x-6',
  'sm:g-max-w-prose',
  'md:g-max-w-prose',
  'lg:g-max-w-prose',
  'tldr:g-max-w-prose',
  'sm:g-text-left',
  'md:g-text-left',
  'lg:g-text-left',
  'tldr:g-text-left',
  'sm:g-text-center',
  'md:g-text-center',
  'lg:g-text-center',
  'tldr:g-text-center',
  'sm:g-text-right',
  'md:g-text-right',
  'lg:g-text-right',
  'tldr:g-text-right',
  'sm:g-text-primary',
  'md:g-text-primary',
  'lg:g-text-primary',
  'tldr:g-text-primary',
  'sm:g-text-sm',
  'md:g-text-sm',
  'lg:g-text-sm',
  'tldr:g-text-sm',
  'sm:g-font-bold',
  'md:g-font-bold',
  'lg:g-font-bold',
  'tldr:g-font-bold',
  'sm:g-cursor-pointer',
  'md:g-cursor-pointer',
  'lg:g-cursor-pointer',
  'tldr:g-cursor-pointer',
  'sm:g-shadow-lg',
  'md:g-shadow-lg',
  'lg:g-shadow-lg',
  'tldr:g-shadow-lg',
  'sm:g-duration-150',
  'md:g-duration-150',
  'lg:g-duration-150',
  'tldr:g-duration-150',
  'sm:g-duration-300',
  'md:g-duration-300',
  'lg:g-duration-300',
  'tldr:g-duration-300',
  'sm:g-cursor-grab',
  'md:g-cursor-grab',
  'lg:g-cursor-grab',
  'tldr:g-cursor-grab',
  'sm:g-cursor-grabbing',
  'md:g-cursor-grabbing',
  'lg:g-cursor-grabbing',
  'tldr:g-cursor-grabbing',
  'sm:g-scroll-snap-none',
  'md:g-scroll-snap-none',
  'lg:g-scroll-snap-none',
  'tldr:g-scroll-snap-none',
  'sm:g-scroll-snap-x',
  'md:g-scroll-snap-x',
  'lg:g-scroll-snap-x',
  'tldr:g-scroll-snap-x',
  'sm:g-scroll-snap-y',
  'md:g-scroll-snap-y',
  'lg:g-scroll-snap-y',
  'tldr:g-scroll-snap-y',
  'sm:g-scroll-snap-start',
  'md:g-scroll-snap-start',
  'lg:g-scroll-snap-start',
  'tldr:g-scroll-snap-start',
  'sm:g-scroll-snap-center',
  'md:g-scroll-snap-center',
  'lg:g-scroll-snap-center',
  'tldr:g-scroll-snap-center',
  'sm:g-scroll-snap-end',
  'md:g-scroll-snap-end',
  'lg:g-scroll-snap-end',
  'tldr:g-scroll-snap-end',
];

export const utilityClasses: string[] = [...utilityClassesBase, ...utilityClassesWithVariants];
