export interface EditorComponent {
  code: string;
  documentation?: string;
  group: EditorTabGroup;
  thumbnail1x?: string;
  thumbnail2x?: string;
  title: string;
  props?: Record<string, string>;
}

export type EditorTabGroup = 'components' | 'guides' | 'images' | 'publishing' | 'snippets' | 'utility-classes';

/*
 * Guide data as stored as a GuideModel
 */
export interface Guide {
  authorId: number;
  content: string;
  contentSource: GuideContentSource;
  contentUrl: string;
  id: number;
  slug: string;
  summary: string | null;
  template: string;
  title: string;
}

export type GuideContentSource = 'field' | 'iframe' | 'template';

export interface Placement {
  access: 'all' | 'admins' | 'author';
  group:
    | 'nav'
    | 'assets'
    | 'assetVolume'
    | 'categories'
    | 'categoryGroup'
    | 'entryType'
    | 'section'
    | 'uiElement'
    | 'uri'
    | 'users'
    | 'widget';
  groupId: number | null;
  guideId: number;
  id: number;
  portalMethod: 'append' | 'prepend';
  selector: string | null;
  uri: string | null;
}

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
