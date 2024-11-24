declare global {
  interface Window {
    Craft: any
    Garnish: any
    guideCallback: Function[]
  }
}
declare global {
  var monacoEditorInstances: {
    contentEditor: {
      executeEdits: Function
      focus: Function
      getModel: Function
      getSelection: Function
      setPosition: Function
    }
    contentCss: {
      executeEdits: Function
      focus: Function
      getModel: Function
      getSelection: Function
      setPosition: Function
    }
    contentJavascript: {
      executeEdits: Function
      focus: Function
      getModel: Function
      getSelection: Function
      setPosition: Function
    }
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
  cssCode?: string
  contentCode: string
  documentation?: string
  javascriptCode?: string
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
 * Guide button for header fields.
 */
export interface FieldHeaderButton {
  label: string
  slug: string
  small: boolean
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
  weight: number
}

export interface GuideListGuide {
  deleteUrl: string
  editUrl: string
  id: number
  title: string
  slug: string
  summary: string
  weight: number
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

export enum MoveMethod {
  After = 'after',
  Append = 'append',
  Before = 'before',
  Prepend = 'prepend',
}

export interface Placement {
  access: PlacementAccess
  group: PlacementGroup
  groupId: string | null
  guideId: number
  id: number
  moveMethod: MoveMethod
  selector: string | null
  uri: string | null
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
  Field = 'field',
  Global = 'global',
  GlobalSet = 'globalSet',
  Section = 'section',
  UiElement = 'uiElement',
  UiElementEnabled = 'uiElementEnabled',
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
  fun: boolean
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
