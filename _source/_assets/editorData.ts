import { EditorComponent } from './types/plugins';

export const editorData: EditorComponent[] = [
  {
    title: 'Button',
    group: 'components',
    code: `<button>
  This is my button!
</button>`,
    documentation: `<p>A standard button.</p>`,
  },
  {
    title: 'H2 Subheader',
    group: 'components',
    code: `<h2>REPLACE_ME</h2>`,
    documentation: `<p>A secondary header.</p>`,
  },
  {
    title: 'H3 Subheader',
    group: 'components',
    code: `<h3>REPLACE_ME</h3>`,
  },
  {
    title: 'Guide 1',
    group: 'guides',
    code: `includeGuide(){}`,
  },
];
