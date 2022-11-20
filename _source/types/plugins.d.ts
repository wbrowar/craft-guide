import { ColorRepresentation } from 'three';

declare global {
  interface Window {
    Craft: any;
  }
}

export interface CraftFieldSelectOptions {
  label: string;
  value: string;
}

export interface Documentation {
  code: string;
  description?: string;
  imageSrcset?: string;
  props?: string;
  summary?: string;
  title: string;
}

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

export interface GuideNavItem {
  title: string;
  slug: string;
}

export type GuideContentSource = 'field' | 'iframe' | 'template';

export type OrganizerGridView = 'list' | 'grid';

export interface OrganizerGroup {
  label: string;
  name: PlacementGroup;
}

export interface OrganizerGroupFilter {
  label: string;
  value: PlacementGroup;
}

export interface Placement {
  access: PlacementAccess;
  group?: PlacementGroup;
  groupId?: string;
  guideId: number;
  id: number;
  portalMethod: 'append' | 'prepend';
  selector?: string;
  theme?: 'default' | 'frame';
  uri?: string;
}

export interface PlacementEdit extends Omit<Partial<Placement>, 'id'> {
  id?: number;
}

export interface PlacementEditorGroup {
  columns: number;
  description: string;
  header: string;
  label: string;
  headerSize: number;
  name: PlacementGroup;
  groupId?: string;
}

export type PlacementAccess = 'all' | 'admins' | 'author';

export type PlacementGroup =
  | 'nav'
  | 'asset'
  | 'assetVolume'
  | 'category'
  | 'categoryGroup'
  | 'entry'
  | 'global'
  | 'globalSet'
  | 'section'
  | 'uiElement'
  | 'uri'
  | 'user'
  | 'widget';

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

export interface SceneSettings {
  animation: {
    rotation: {
      x: number;
      y: number;
      z: number;
      xSineMax: number;
    };
  };
  camera: {
    fov: number;
    near: number;
    far: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  };
  lights: {
    ambient: {
      groundColor: ColorRepresentation;
      intensity: number;
      skyColor: ColorRepresentation;
    };
    directional: {
      color: ColorRepresentation;
      intensity: number;
      position: {
        x: number;
        y: number;
        z: number;
      };
    };
  };
  object: {
    scale: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  };
  scene: {
    bgColor: string;
  };
}
