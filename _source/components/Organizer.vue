<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { devMode, guides, log, proEdition, settings, t, userOperations } from '../globals';
import Modal from './Modal.vue';
import OrganizerDropZone from './OrganizerDropZone.vue';
import PlacementEditor from './PlacementEditor.vue';
import SvgGrid from './SvgGrid.vue';
import SvgList from './SvgList.vue';
import type {
  Guide,
  OrganizerGridView,
  OrganizerGroup,
  OrganizerGroupFilter,
  Placement,
  PlacementGroup,
  PluginSettings,
  PluginUserOperations,
} from '~/types/plugins';

declare global {
  interface Window {
    Craft: any;
  }
}

const props = defineProps({
  actionUrlGetAllPlacements: { type: String, required: true },
  cpTrigger: String,
  groupsData: { type: String, required: true },
  isNew: { type: Boolean, default: false },
});

const currentEditPlacement = ref(null as Placement | null);
const currentPreparingGuideId = ref(null as Placement | null);
const gridView = ref<OrganizerGridView>('grid');
const groups = ref<OrganizerGroup[]>(JSON.parse(props.groupsData));
const groupFilters = ref<OrganizerGroupFilter[]>([]);
const placements = ref<Placement[]>([]);
const selectedGroupFilters = ref<PlacementGroup[]>([]);

// Template refs
const editModal = ref<InstanceType<typeof Modal>>();
const placementEditor = ref<InstanceType<typeof PlacementEditor>>();

const filteredDropZones = computed(() =>
  proEdition
    ? groups.value.filter((group) => {
        return selectedGroupFilters.value.includes(group.name);
      })
    : []
);

function addPlacementForGuide(guide: Guide, group: PlacementGroup | null = null, groupId: string | null = null) {
  const placement: Placement = {
    access: 'all',
    group: group,
    groupId: groupId,
    guideId: guide.id,
    id: null,
    portalMethod: 'append',
    selector: null,
    theme: 'default',
    uri: null,
  };

  if (proEdition) {
    if (group) {
      log('Adding placement for guide', guide, group, groupId);
      savePlacement(placement);
    } else {
      editPlacement(placement);
    }
  } else {
    placement.group = 'nav';
    placement.groupId = null;
    savePlacement(placement);
  }
}
async function deletePlacement(placement: Placement) {
  await window.Craft?.postActionRequest(
    'guide/placement/delete-placement',
    { data: JSON.stringify(placement) },
    (response: any, textStatus: any, request: any) => {
      log('Deleting placement', response, textStatus, request);
      getPlacementList();

      if (response.status === 'success') {
        window.Craft?.cp?.displayNotice('Organizer Saved');
      } else {
        window.Craft?.cp?.displayError(response.data.error);
      }
    }
  );
}
function editPlacement(placement: Placement) {
  if (placementEditor.value) {
    editModal.value.open();
    currentEditPlacement.value = { ...placement };
    placementEditor.value.resetFields();
  }
}
function editPlacementClose(placement = null) {
  if (placement) {
    savePlacement(placement);
  }
  editModal.value.close();
  currentEditPlacement.value = null;
}
async function getPlacementList() {
  await window.Craft?.postActionRequest(
    'guide/placement/get-all-placements',
    null,
    (response: any, textStatus: any, request: any) => {
      log('Getting placements', response, textStatus, request);
      placements.value = response;
    }
  );
}
function onDropOnDropZone(e: any, group: PlacementGroup, groupId = null) {
  log('Dropping onto zone', group, groupId);
  if (e.dataTransfer.getData('placementId') === 'new') {
    const guide = guides.find((item) => {
      return item.id === parseInt(e.dataTransfer.getData('guideId'));
    });

    if (guide) {
      addPlacementForGuide(guide, group, groupId);
    }
  } else {
    updatePlacement(parseInt(e.dataTransfer.getData('placementId')), group, groupId);
  }
}
function onGuideDragStart(e: any, guideId: string) {
  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('placementId', 'new');
  e.dataTransfer.setData('guideId', guideId);
}
function placementsForGroup(group: string, groupId: string | null = null) {
  return placements.value.filter((placement) => {
    return placement.group === group && (groupId ? placement.groupId === groupId : true);
  });
}
async function savePlacement(placement: Placement) {
  if (placement.group !== 'uri') {
    placement.uri = null;
  }

  await window.Craft?.postActionRequest(
    'guide/placement/save-placement',
    { data: JSON.stringify(placement) },
    (response: any, textStatus: any, request: any) => {
      log('Saving placement', response, textStatus, request);
      getPlacementList();

      if (response.status === 'success') {
        window.Craft?.cp?.displayNotice('Organizer Saved');
      } else {
        window.Craft?.cp?.displayError(response.data.error);
      }
    }
  );
}
function setGridView(view: OrganizerGridView) {
  gridView.value = view;
  localStorage.setItem('guide:organizer:gridView', view);
}
function toggleSelectedGroupFilter(value: PlacementGroup) {
  const index = selectedGroupFilters.value.indexOf(value);

  if (index === -1) {
    selectedGroupFilters.value.push(value);
  } else {
    selectedGroupFilters.value.splice(index, 1);
  }

  localStorage.setItem('guide:organizer:selectedGroupFilters', JSON.stringify(selectedGroupFilters.value));
}
function updatePlacement(placementId: number, group: PlacementGroup, groupId = null) {
  log(`Updating placement: ${placementId} group to: ${group}`);
  placements.value.forEach((placement) => {
    log(
      'Updating placement?',
      placement.groupId !== groupId,
      placement.groupId,
      typeof placement.groupId,
      groupId,
      typeof groupId
    );
    if (
      placement.id === placementId &&
      (!groupId ? placement.group !== group : true) &&
      (groupId && placement.groupId ? parseInt(placement.groupId) !== groupId : true)
    ) {
      placement.group = group;
      placement.groupId = groupId || null;
      savePlacement(placement);
    }
  });
}
function cpUrl(uri: string) {
  return props.cpTrigger ? `/${props.cpTrigger}/${uri}` : `/${uri}`;
}

onMounted(() => {
  const contentEl = document.getElementById('content');
  if (contentEl) {
    contentEl.style.padding = '0px';
  }

  // Use group data to set filters
  const userSelectedGroupFilters: PlacementGroup[] = [];
  groups.value?.forEach((group) => {
    const filter = { label: group.label, value: group.name };
    if (!userSelectedGroupFilters.includes(group.name)) {
      groupFilters.value.push(filter);
      userSelectedGroupFilters.push(group.name);
    }
  });

  // Set default filters based on user localstorage
  if (localStorage.getItem('guide:organizer:selectedGroupFilters')) {
    selectedGroupFilters.value = JSON.parse(localStorage.getItem('guide:organizer:selectedGroupFilters') as string);
  } else {
    selectedGroupFilters.value = userSelectedGroupFilters.filter((name) => {
      return !['assetVolume', 'categoryGroup', 'globalSet', 'user'].includes(name);
    });
  }

  if (
    localStorage.getItem('guide:organizer:gridView') === 'list' ||
    localStorage.getItem('guide:organizer:gridView') === 'grid'
  ) {
    gridView.value = localStorage.getItem('guide:organizer:gridView') as 'list' | 'grid';
  }

  getPlacementList();

  log('Organizer loaded');
});
</script>

<template>
  <div class="g-grid g-grid-cols-[minmax(150px,300px),minmax(400px,1fr)] g-relative g-overflow-hidden">
    <div class="g-bg-white g-rounded-l-lg g-min-h-[650px] g-h-admin-window g-overflow-x-auto">
      <div class="g-p-6">
        <h2>{{ t['Guides'] }}</h2>
        <p v-html="t['ORGANIZER_GUIDES_INSTRUCTIONS']"></p>
      </div>

      <ul>
        <li
          v-for="guide in guides"
          :key="guide.slug"
          class="g-group g-p-3 g-bg-matrix-block g-border-t g-border-solid g-border-matrix-border g-duration-150 g-cursor-move hover:g-bg-select-light last:g-border-b"
          draggable="true"
          title="Drag guide to an area of the Craft Control Panel"
          @dragstart="onGuideDragStart($event, guide.id)"
        >
          <h3>{{ guide.title }}</h3>
          <p class="g-text-text" v-if="guide.summary">{{ guide.summary }}</p>
          <div
            class="g-mt-1 g-space-x-1 group-focus:g-block group-hover:g-block"
            :class="[currentPreparingGuideId === guide.id ? 'g-block' : 'g-hidden']"
          >
            <a
              class="btn small"
              title="Edit guide"
              type="button"
              :href="cpUrl(`guide/edit/${guide.id}?return=${cpUrl('guide/organizer')}`)"
              v-if="userOperations.editGuides"
              >{{ t['Edit'] }}</a
            >
            <a
              class="btn small"
              title="Delete guide"
              type="button"
              :href="cpUrl(`guide/delete/${guide.id}`)"
              v-if="userOperations.deleteGuides"
              >{{ t['Delete'] }}</a
            >
            <a
              class="btn small"
              title="View guide on a separate page"
              type="button"
              :href="cpUrl(`guide/page/${guide.slug}`)"
              v-if="proEdition"
              >{{ t['View'] }}</a
            >
            <button
              class="btn small icon add"
              title="Add guide to the Craft Control Panel"
              type="button"
              @click="addPlacementForGuide(guide)"
            >
              {{ t['Add'] }}
            </button>
          </div>
          <div class="g-mt-3" v-if="currentPreparingGuideId === guide.id">Edit this!</div>
        </li>
      </ul>

      <div class="g-p-3">
        <a class="btn add icon submit" :href="cpUrl('guide/new')">New Guide</a>
      </div>
    </div>
    <div class="g-min-h-[650px] g-h-admin-window g-relative g-bg-select-dark g-rounded-r-lg g-overflow-x-auto">
      <div class="g-p-6">
        <div class="g-text-select-light">
          <h2>{{ t['Craft CP'] }}</h2>
          <p>{{ t['ORGANIZER_CP_INSTRUCTIONS'] }}</p>
        </div>
        <div class="g-grid g-grid-cols-[1fr,150px] g-gap-4 g-mt-6">
          <div class="g-grid g-gap-5 xl:g-grid-cols-4">
            <OrganizerDropZone
              :class="{
                'xl:g-col-span-3': gridView === 'grid',
                'xl:g-col-start-1 xl:g-col-span-4': gridView === 'list',
              }"
              :header-size="3"
              description="The Guide CP Section"
              header="Guide"
              group="nav"
              :guides="guides"
              :placements="placementsForGroup('nav', null)"
              @drop="onDropOnDropZone($event, 'nav', null)"
              @dragover.prevent
              @dragenter.prevent
              @delete-placement-clicked="deletePlacement"
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
            />
            <OrganizerDropZone
              v-for="group in filteredDropZones"
              :key="group.name"
              :class="{
                'xl:g-col-span-3': group.columns === 3 && gridView === 'grid',
                'xl:g-col-span-2': group.columns === 2 && gridView === 'grid',
                'xl:g-col-start-1 xl:g-col-span-4': gridView === 'list',
              }"
              :header-size="group.headerSize"
              :description="group.description || null"
              :header="group.header || null"
              :group="group.name"
              :guides="guides"
              :placements="placementsForGroup(group.name, group.groupId)"
              @drop="onDropOnDropZone($event, group.name, group.groupId || null)"
              @dragover.prevent
              @dragenter.prevent
              @delete-placement-clicked="deletePlacement"
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
            />
            <OrganizerDropZone
              :class="{
                'xl:g-col-span-4': gridView === 'grid',
                'xl:g-col-start-1 xl:g-col-span-4': gridView === 'list',
              }"
              :header-size="3"
              description="Individual pages in the Control Panel"
              header="Control Panel Pages"
              group="uri"
              :guides="guides"
              :placements="placementsForGroup('uri', null)"
              @drop="onDropOnDropZone($event, 'uri', null)"
              @dragover.prevent
              @dragenter.prevent
              @delete-placement-clicked="deletePlacement"
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
              v-if="proEdition"
            />
          </div>
          <div class="g-relative g-text-select-light" v-if="proEdition">
            <div class="g-space-x-1 g-mb-3 g-hidden g-border-b g-border-b-white/30 xl:g-block">
              <button
                class="g-my-2 g-mr-1 g-text-white"
                :class="[gridView === 'grid' ? 'g-opacity-100' : 'g-opacity-70']"
                title="Display Craft Control Panel areas as a grid"
                type="button"
                @click="setGridView('grid')"
              >
                <SvgGrid class="g-w-6 g-h-6" />
              </button>
              <button
                class="g-my-2 g-mr-1 g-text-white"
                :class="[gridView === 'list' ? 'g-opacity-100' : 'g-opacity-70']"
                title="Display Craft Control Panel areas as a list"
                type="button"
                @click="setGridView('list')"
              >
                <SvgList class="g-w-6 g-h-6" />
              </button>
            </div>
            <ul class="g-space-y-2">
              <li
                v-for="filter in groupFilters"
                :key="filter.value"
                class="g-group g-flex g-flex-nowrap g-items-start g-gap-1"
                :title="
                  selectedGroupFilters.includes(filter.value)
                    ? 'Hide group and guides from Organizer'
                    : 'Show group in Organizer'
                "
              >
                <input
                  :id="`group-filter-${filter.value}`"
                  class="guide-accent-primary g-mt-0.5 g-w-4 g-h-4"
                  :checked="selectedGroupFilters.includes(filter.value)"
                  type="checkbox"
                  @change="toggleSelectedGroupFilter(filter.value)"
                />
                <label class="group-hover:g-text-white" :for="`group-filter-${filter.value}`">{{ filter.label }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Modal ref="editModal">
      <PlacementEditor
        ref="placementEditor"
        :groups="groups"
        :placement="currentEditPlacement"
        @canceled="editPlacementClose"
        @saved="editPlacementClose"
      />
    </Modal>
  </div>

  <Teleport to="#guide-action-buttons">
    <a class="btn add icon submit" :href="cpUrl('guide/new')" v-if="userOperations.editGuides">New Guide</a>
  </Teleport>
</template>
