declare global {
  namespace NodeJS {
    interface Global {
      monacoEditorInstances: {
        contentEditor?: any
      }
    }
  }
  interface Window {
    guideCallback: Function[]
    Craft: any
  }
}

if (typeof window !== 'undefined') {
  window.global = window
}

export enum ApiStatus {
  Initial = 'initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export interface EditorComponent {
  code: string
  documentation?: string
  group: EditorTabGroup
  summary?: string
  thumbnail1x?: string
  thumbnail2x?: string
  title: string
  props?: Record<string, string>
}

export enum EditorTabGroup {
  Components = 'components',
  Guides = 'guides',
  Images = 'images',
  Settings = 'settings',
  Snippets = 'snippets',
}

export enum EditPageLocation {
  Append = 'append',
  Prepend = 'prepend',
  Slideout = 'slideout',
}

/*
 * Guide data as stored as a GuideModel
 */
export interface Guide {
  authorId: number
  content: string
  contentSource: GuideContentSource
  contentUrl: string
  id: number
  renderMarkdown: boolean
  slug: string
  summary: string | null
  template: string
  title: string
}

export interface GuideListGuide {
  deleteUrl: string
  editUrl: string
  id: number
  title: string
  slug: string
  summary: string
  viewUrl: string
}

export interface GuideNavItem {
  title: string
  slug: string
}

export enum GuideContentSource {
  Field = 'field',
  Iframe = 'iframe',
  Template = 'template',
}

export interface OrganizerGroup {
  columns: number
  description: string
  groupId: string
  header: string
  headerSize: 'large' | 'small'
  label: string
  name: PlacementGroup
}

export interface Placement {
  access: PlacementAccess
  group: PlacementGroup
  groupId: string | null
  guideId: number
  id: number
  selector: string | null
  uri: string | null
  weight: number
}

export enum PlacementAccess {
  All = 'all',
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
  assetVolume: string
  components: any[]
  clientName: string
  editPageLocation: EditPageLocation
  enableGuideCss: boolean
  enableGuideJavascript: boolean
  renderMarkdownDefault: boolean
  myCompanyName: string
  projectName: string
  templatePath: string
}

export interface PluginUserOperations {
  deleteGuides: boolean
  editGuides: boolean
  setAccessPermissions: boolean
  useOrganizer: boolean
}

export interface ShowGuideSlideoutOptions {
  docs?: boolean
  elementId?: number
  groupHandle?: string
  slug: string
}
