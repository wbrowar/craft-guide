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
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
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
    code: `<grid :columns="2">
  <div>
    <p>1st column content</p>
  </div>
  <div>
    <p>2nd column content</p>
  </div>
</grid>`,
    documentation: `<p>FPO.</p>`,
    props: {
      columns: `FPO`,
    },
  },
  {
    title: 'Heading',
    group: 'components',
    code: `{{ craft.guide.component('heading', { text: 'REPLACE_TEXT' }) }}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Image',
    group: 'components',
    code: `{{ craft.guide.component('image', { url: 'REPLACE_URL' }) }}`,
    documentation: `<p>Display an image.</p>`,
    props: {
      asset: `An image asset.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Guide Include',
    group: 'components',
    code: `{{ craft.guide.include({ slug: 'REPLACE_SLUG' }) }}`,
    documentation: `<p>Embed the contents of another guide.</p>`,
    props: {
      slug: `The slug of the guide, as set in the Guide Editor.`,
    },
  },
  {
    title: 'Markdown',
    group: 'components',
    code: `{% filter md('gfm') %}

Content

{% endfilter %}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'My Company Name',
    group: 'components',
    code: `{{ craft.guide.var('myCompanyName') }}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Table',
    group: 'components',
    code: `<table>
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
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Tip',
    group: 'components',
    code: `craft.guide.component('tip', { message: 'REPLACE_TEXT' })`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Vimeo Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'vimeo', videoId: 'REPLACE_VIDEO_ID' }) }}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'Warning',
    group: 'components',
    code: `craft.guide.component('tip', { message: 'REPLACE_TEXT' })`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  {
    title: 'YouTube Video',
    group: 'components',
    code: `{{ craft.guide.component('video', { source: 'youtube', videoId: 'REPLACE_VIDEO_ID' }) }}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
    props: {
      label: `The label text for the button.`,
      url: `The URL of the image to be displayed.`,
    },
  },
  // Snippets
  // todo add snippet: GraphQL Helper - Checklist to make sure sections are in graphql schema.
  // todo add snippet: User Role Helper - Table of sections and their user roles (flagging any that don't have a user role).
  // todo add snippet: Entry Search – Basic search of all of your entries.
  // todo add snippet: Logged in users – List of currently logged in users.
  // todo add snippet: Content Stats
  // todo add snippet: Changelog
  // todo add snippet:
  {
    title: 'Low-Res Image Check',
    group: 'snippets',
    code: `{# Set the width to the smallest size that an image should be uploaded. #}
{% set width = 300 %}

{# Find all images within the targeted asset volume that are not wider than the \`width\` value. #}
{% set assets = craft.assets.volume('REPLACE_VOLUME').width('< ' ~ width).kind('image').all() %}

{# Display a list of offending images and instruct authors on what size is recommended. #}
{% if assets|length %}
  <h2>Images that are too small (less than {{ width }}px wide)</h2>
  <p>These images should be replaced with a .jpg that is at least REPLACE_WIDTH wide.</p>
  
  <div class="g-space-y-2">
    {% for asset in assets %}
      <div class="g-grid g-grid-cols-[var(--grid-cols)] g-gap-2" style="--grid-cols: 300px 1fr;">
        <img loading="lazy" src="{{ asset.url }}" width="300" />
        <div>
          <a class="btn submit" href="{{ asset.cpEditUrl }}">Edit</a>
          <p><strong>Title</strong><br>{{ asset.title }}</p>
          <p><strong>File name</strong><br>{{ asset.filename }}</p>
          <p><strong>Width</strong><br>{{ asset.width }}px</p>
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}`,
    documentation: `<p>Play audio in the browser’s audio player.</p>`,
  },
];

const utilityClassesBase: string[] = [
  'g-flex',
  'g-items-center',
  'g-justify-center',
  'g-grid-cols-[var(--grid-cols)]',
  'g-my-3',
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
  'g-text-left',
  'g-text-center',
  'g-text-right',
  'g-text-primary',
  'g-text-sm',
  'g-font-bold',
  'g-cursor-pointer',
  'g-shadow-lg',
  'g-duration-150',
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
  'sm:g-flex',
  'md:g-flex',
  'lg:g-flex',
  'tldr:g-flex',
  'sm:g-items-center',
  'md:g-items-center',
  'lg:g-items-center',
  'tldr:g-items-center',
  'sm:g-justify-center',
  'md:g-justify-center',
  'lg:g-justify-center',
  'tldr:g-justify-center',
  'sm:g-grid-cols-[var(--grid-cols)]',
  'md:g-grid-cols-[var(--grid-cols)]',
  'lg:g-grid-cols-[var(--grid-cols)]',
  'tldr:g-grid-cols-[var(--grid-cols)]',
  'sm:g-mb-3',
  'md:g-mb-3',
  'lg:g-mb-3',
  'tldr:g-mb-3',
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
];

export const utilityClasses: string[] = [...utilityClassesBase, ...utilityClassesWithVariants];
