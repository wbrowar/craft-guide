export interface EditorComponent {
  code: string;
  documentation?: string;
  group: EditorTabGroup;
  summary?: string;
  thumbnail1x?: string;
  thumbnail2x?: string;
  title: string;
  props?: Record<string, string>;
}

export enum EditorTabGroup {
  Components = 'components',
  Guides = 'guides',
  Images = 'images',
  Publishing = 'publishing',
  Snippets = 'snippets',
  UtilityClasses = 'utility-classes',
}

export enum EditPageLocation {
  Append = 'append' ,
  Prepend = 'prepend',
  Slideout = 'slideout',
}

/*
 * Guide data as stored as a GuideModel
 */
export interface Guide {
  authorId: number;
  content: string;
  contentSource: GuideContentSource;
  contentUrl: string;
  id: number;
  parser: GuideParser;
  slug: string;
  summary: string | null;
  template: string;
  title: string;
}

export interface GuideNavItem {
  title: string;
  slug: string;
}

export type GuideContentSource = 'field' | 'iframe' | 'template';

export interface Placement {
  access: PlacementAccess;
  group: PlacementGroup;
  groupId: string | null;
  guideId: number;
  id: number;
  portalMethod: EditPageLocation;
  selector: string | null;
  theme: 'default' | 'frame';
  uri: string | null;
}

export enum PlacementAccess {
  All = 'all' ,
  Admins = 'admins',
  Author = 'author',
}

export enum PlacementGroup {
  Nav = 'nav',
  Asset = 'asset',
  AssetVolume = 'assetVolume',
  Category = 'category',
  CategoryGroup = 'categoryGroup',
  Entry = 'entry',
  Global = 'global',
  GlobalSet = 'globalSet',
  Section = 'section',
  UiElement = 'uiElement',
  Uri = 'uri',
  User = 'user',
  Widget = 'widget',
}

export interface PluginSettings {
  assetVolume: string;
  components: any[];
  clientName: string;
  editPageLocation: EditPageLocation;
  enableGuideCss: boolean;
  enableGuideJavascript: boolean;
  renderMarkdownDefault: boolean;
  myCompanyName: string;
  projectName: string;
  templatePath: string;
}

export interface PluginUserOperations {
  deleteGuides: boolean;
  editGuides: boolean;
  setAccessPermissions: boolean;
  useOrganizer: boolean;
}
