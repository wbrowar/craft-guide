import { log } from './globals';
import { EditorComponent } from './types/plugins';

export const editorData: EditorComponent[] = [
  // Components
  {
    title: 'Audio',
    group: 'components',
    code: `{{ craft.guide.component('audio', { url: 'REPLACE_URL' }) }}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      url: `A absolute URL to your audio file.`,
    },
  },
  {
    title: 'Button',
    group: 'components',
    code: `{{ craft.guide.component('button', { label: 'REPLACE_LABEL', url: url('REPLACE_URL') }) }}`,
    documentation: `<p>A call-to-action link that looks like a button.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL that the button goes to when clicked.`,
    },
  },
  {
    title: 'CSS',
    group: 'components',
    code: `{% css %}
.guide REPLACE_SELECTOR {
  
}
{% endcss %}`,
    documentation: `<p>Write custom CSS for this guide. A ".guide" class wraps around all guide content for specificity.</p>`,
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
    documentation: `<p>An example using utility classes to lay out content using CSS Custom Properties to define the grid’s columns.</p>`,
  },
  {
    title: 'Heading',
    group: 'components',
    code: `{{ craft.guide.component('heading', { level: 1, text: 'REPLACE_TEXT' }) }}`,
    documentation: `<p>A section heading wrapped in an anchor link.</p>`,
    props: {
      level: `A number that defines the wrapper tag. For example, the value of <strong>2</strong> would set the wrapper tag to <strong>h2</strong>.`,
      text: `The text displayed in the header.`,
    },
  },
  {
    title: 'Image',
    group: 'components',
    code: `{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}`,
    documentation: `<p>Display an image or a screenshot from a URL.</p>`,
    props: {
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Markdown',
    group: 'components',
    code: `{% filter markdown('gfm') %}

## Heading

Content

{% endfilter %}`,
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
    documentation: `<p>A styled HTML table.</p>`,
  },
  {
    title: 'Tip',
    group: 'components',
    code: `{{ craft.guide.component('tip', { text: 'REPLACE_TEXT' }) }}`,
    documentation: `<p>Inform content authors in a way that stands out from surrounding text.</p>`,
    props: {
      message: `Text displayed in the tip.`,
    },
  },
  {
    title: 'Variable Client Name',
    group: 'components',
    code: `{{ craft.guide.var('clientName') }}`,
    documentation: `<p>Display the value of the <strong>Client Name</strong> variable.</p>`,
  },
  {
    title: 'Variable My Company Name',
    group: 'components',
    code: `{{ craft.guide.var('myCompanyName') }}`,
    documentation: `<p>Display the value of the <strong>My Company Name</strong> variable.</p>`,
  },
  {
    title: 'Variable Project Name',
    group: 'components',
    code: `{{ craft.guide.var('projectName') }}`,
    documentation: `<p>Display the value of the <strong>Project Name</strong> variable.</p>`,
  },
  {
    title: 'Vimeo Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'vimeo', videoId: 'REPLACE_VIDEO_ID' }) }}`,
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
    documentation: `<p>Warn content authors about potential content issues.</p>`,
    props: {
      message: `Text displayed in the warning.`,
    },
  },
  {
    title: 'YouTube Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'youtube', videoId: 'REPLACE_VIDEO_ID' }) }}`,
    documentation: `<p>Play a YouTube video in an iframe.</p>`,
    props: {
      source: `Determine the video hosting service’s embed code.`,
      videoId: `The ID of the Vimeo video, found in the URL or embed code provided by YouTube.`,
    },
  },
  // Snippets
  // todo add snippet: GraphQL Helper - Checklist to make sure sections are in graphql schema.
  // todo add snippet: User Role Helper - Table of sections and their user roles (flagging any that don't have a user role).
  // todo add snippet: Entry Search – Basic search of all of your entries.
  // todo add snippet: Logged in users – List of currently logged in users.
  // todo add snippet: Content Stats
  // todo add snippet: Changelog
  {
    title: 'Content Stats',
    group: 'snippets',
    code: `{# Set the type of element to be displayed. #}
{% set type = 'entries' %}
{# Set the statuses to be displayed #}
{% set statuses = ['live', 'disabled', 'pending', 'expired'] %}

{% if type == 'entries' %}
  {% set live = craft.entries.limit(null).status('live').count() %}
  {% set disabled = craft.entries.limit(null).status('disabled').count() %}
  {% set pending = craft.entries.limit(null).status('pending').count() %}
  {% set expired = craft.entries.limit(null).status('expired').count() %}
{% endif %}

{% if 'live' in statuses %}
<div class="element small hasstatus" title="Live elements"><span class="status live"></span><div class="label"><span class="title">Live: {{ live }}</span></div></div>
{% endif %}

{% if 'disabled' in statuses %}
<div class="element small hasstatus" title="Disabled elements"><span class="status disabled"></span><div class="label"><span class="title">Disabled: {{ disabled }}</span></div></div>
{% endif %}

{% if 'pending' in statuses %}
<div class="element small hasstatus" title="Disabled elements"><span class="status pending"></span><div class="label"><span class="title">Pending: {{ pending }}</span></div></div>
{% endif %}

{% if 'expired' in statuses %}
<div class="element small hasstatus" title="Expired elements"><span class="status expired"></span><div class="label"><span class="title">Expired: {{ expired }}</span></div></div>
{% endif %}`,
    documentation: `<p>Show a total of entries that are currently published.</p>`,
  },
  {
    title: 'Low-Res Image Check',
    group: 'snippets',
    code: `{# Set the asset volume you would like to check for images in. #}
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
{% endif %}`,
    documentation: `<p>Find images that would get upscaled if transformed.</p>`,
  },
];

const utilityClassesBase: string[] = [
  'g-hidden',
  'g-block',
  'g-inline-block',
  'g-flex',
  'g-inline-flex',
  'g-grid',
  'g-items-center',
  'g-justify-center',
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
  'sm:g-grid',
  'md:g-grid',
  'lg:g-grid',
  'tldr:g-grid',
  'sm:g-items-center',
  'md:g-items-center',
  'lg:g-items-center',
  'tldr:g-items-center',
  'sm:g-justify-center',
  'md:g-justify-center',
  'lg:g-justify-center',
  'tldr:g-justify-center',
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
];

export const utilityClasses: string[] = [...utilityClassesBase, ...utilityClassesWithVariants];
