export interface EditorComponent {
  code: string;
  documentation?: string;
  group: EditorTabGroup;
  title: string;
  props?: Record<string, string>;
}

export type EditorTabGroup = 'components' | 'guides' | 'images' | 'publishing' | 'snippets' | 'utility-classes';

/*
 * Guide data as stored as a GuideModel
 */
export interface Guide {
  access: 'all' | 'admins' | 'permissions';
  content: string;
  contentSource: GuideContentSource;
  contentUrl: string;
  format: 'markdown' | 'twig';
  id: number;
  slug: string;
  summary: string | null;
  template: string;
  title: string;
}

export type GuideContentSource = 'field' | 'iframe' | 'template';

export interface PluginSettings {
  assetVolume: string;
  components: any[];
  clientName: string;
  myCompanyName: string;
  templatePath: string;
  rebrand: any[];
}

export interface PluginUserOperations {
  deleteGuides: boolean;
  editGuides: boolean;
  setAccessPermissions: boolean;
  useOrganizer: boolean;
}
