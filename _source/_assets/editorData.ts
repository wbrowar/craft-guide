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
