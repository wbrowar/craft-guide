<template>
  <div class="g-grid g-grid-cols-[minmax(200px,300px),minmax(250px,1fr)] g-relative g-overflow-hidden">
    <div class="g-bg-white g-rounded-l-lg g-min-h-[850px] g-h-[70vh] g-overflow-x-auto">
      <div class="g-p-6">
        <h2>Guides</h2>
        <p>
          All guides have their own page. Click "➕&nbsp;Add" to make a guide visible around the Craft Control Panel.
        </p>
      </div>

      <ul>
        <li
          v-for="guide in guides"
          :key="guide.slug"
          class="
            g-group
            g-p-3
            g-bg-matrix-block
            g-border-t
            g-border-solid
            g-border-matrix-border
            g-duration-150
            g-cursor-move
            hover:g-bg-select-light
            last:g-border-b
          "
          draggable="true"
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
              type="button"
              :href="cpUrl(`guide/edit/${guide.id}?return=${cpUrl('guide/organizer')}`)"
              v-if="userOperations.editGuides"
              >Edit</a
            >
            <a
              class="btn small"
              type="button"
              :href="cpUrl(`guide/delete/${guide.id}`)"
              v-if="userOperations.deleteGuides"
              >Delete</a
            >
            <a class="btn small" type="button" :href="cpUrl(`guide/page/${guide.slug}`)">View</a>
            <button class="btn small" type="button" @click="addPlacementForGuide(guide)">➕ Add</button>
          </div>
          <div class="g-mt-3" v-if="currentPreparingGuideId === guide.id">Edit this!</div>
        </li>
      </ul>

      <div class="g-p-3">
        <a class="btn add icon submit" :href="cpUrl('guide/new')">New Guide</a>
      </div>
    </div>
    <div class="g-min-h-[850px] g-bg-select-dark g-rounded-r-lg g-relative">
      <div class="g-p-6">
        <div class="g-text-select-light">
          <h2>Craft CP</h2>
          <p>Drag guides to different areas around the Craft CP or add a guide to a specific Control Panel page.</p>
        </div>
        <div class="g-grid g-grid-cols-[1fr,150px] g-gap-4 g-mt-6">
          <div class="g-grid g-grid-cols-2 g-gap-5 md:g-grid-cols-4">
            <OrganizerDropZone
              :class="{
                'g-col-span-3': gridView === 'grid',
                'g-col-start-1 g-col-span-3': gridView === 'list',
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
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
            />
            <OrganizerDropZone
              v-for="group in filteredDropZones"
              :key="group.name"
              :class="{
                'g-col-span-3': group.columns === 3 && gridView === 'grid',
                'g-col-span-2': group.columns === 2 && gridView === 'grid',
                'g-col-start-1 g-col-span-3': gridView === 'list',
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
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
            />
            <OrganizerDropZone
              :class="{
                'g-col-span-3': gridView === 'grid',
                'g-col-start-1 g-col-span-3': gridView === 'list',
              }"
              :header-size="3"
              description="Individual pages in the CP"
              header="Control Panel Pages"
              group="uri"
              :guides="guides"
              :placements="placementsForGroup('uri', null)"
              @drop="onDropOnDropZone($event, 'uri', null)"
              @dragover.prevent
              @dragenter.prevent
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
              v-if="proEdition"
            />
          </div>
          <div class="g-relative g-text-select-light" v-if="proEdition">
            <div class="g-space-x-1">
              <button class="g-text-white" type="button" @click="setGridView('list')">List</button>
              <button class="g-text-white" type="button" @click="setGridView('grid')">Grid</button>
            </div>
            <ul class="g-space-y-2">
              <li
                v-for="filter in groupFilters"
                :key="filter.value"
                class="g-group g-flex g-flex-nowrap g-items-start g-gap-1"
              >
                <input
                  :id="`group-filter-${filter.value}`"
                  class="g-mt-0.5 g-w-4 g-h-4"
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

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
import Modal from './Modal.vue';
import OrganizerDropZone from './OrganizerDropZone.vue';
import PlacementEditor from './PlacementEditor.vue';
import { Guide, Placement, PlacementGroup, PluginSettings, PluginUserOperations } from '~/types/plugins';

export default defineComponent({
  name: 'Organizer',
  components: {
    Modal,
    OrganizerDropZone,
    PlacementEditor,
  },
  props: {
    actionUrlGetAllPlacements: { type: String, required: true },
    cpTrigger: String,
    devMode: { type: Boolean, default: false },
    groupsData: { type: String, required: true },
    guides: { type: Array as PropType<Guide[]>, required: true },
    isNew: { type: Boolean, default: false },
    proEdition: { type: Boolean, default: false },
    settings: { type: Object as PropType<PluginSettings>, required: true },
    userOperations: { type: Object as PropType<PluginUserOperations>, required: true },
  },
  setup: (props) => {
    const state = reactive({
      currentEditPlacement: null as Placement | null,
      currentPreparingGuideId: null as Placement | null,
      gridView: 'grid' as 'list' | 'grid',
      groups: JSON.parse(props.groupsData),
      placements: [] as Placement[],
      groupFilters: [],
      selectedGroupFilters: [] as PlacementGroup[],
    });

    // Use group data to set filters
    const selectedGroupFilters: PlacementGroup[] = [];
    state.groups.forEach((group) => {
      const filter = { label: group.label, value: group.name };
      if (!selectedGroupFilters.includes(group.name)) {
        state.groupFilters.push(filter);
        selectedGroupFilters.push(group.name);
      }
    });

    // Set default filters based on user localstorage
    if (localStorage.getItem('guide:organizer:selectedGroupFilters')) {
      state.selectedGroupFilters = JSON.parse(localStorage.getItem('guide:organizer:selectedGroupFilters'));
    } else {
      state.selectedGroupFilters = selectedGroupFilters.filter((name) => {
        return !(['assetVolume', 'categoryGroup', 'globalSet', 'user'] as PlacementGroup).includes(name);
      });
    }

    if (
      localStorage.getItem('guide:organizer:gridView') === 'list' ||
      localStorage.getItem('guide:organizer:gridView') === 'grid'
    ) {
      state.gridView = localStorage.getItem('guide:organizer:gridView') as 'list' | 'grid';
    }

    return { ...toRefs(state) };
  },
  computed: {
    filteredDropZones() {
      return this.proEdition
        ? this.groups.filter((group) => {
            return this.selectedGroupFilters.includes(group.name);
          })
        : [];
    },
  },
  methods: {
    addPlacementForGuide(guide, group: PlacementGroup = null, groupId: number = null) {
      const placement: Placement = {
        access: 'all',
        group: group,
        groupId: groupId,
        guideId: guide.id,
        id: null,
        portalMethod: 'append',
        selector: null,
        uri: null,
      };

      if (this.proEdition) {
        if (group) {
          log('Adding placement for guide', guide, group, groupId);
          this.savePlacement(placement);
        } else {
          this.editPlacement(placement);
        }
      } else {
        placement.group = 'nav';
        placement.groupId = null;
        this.savePlacement(placement);
      }
    },
    editPlacement(placement) {
      this.$refs.editModal.open();
      this.currentEditPlacement = { ...placement };
      this.$refs.placementEditor.resetFields();
    },
    editPlacementClose(placement = null) {
      if (placement) {
        this.savePlacement(placement);
      }
      this.$refs.editModal.close();
      this.currentEditPlacement = null;
    },
    async getPlacementList() {
      await window.Craft?.postActionRequest(
        'guide/placement/get-all-placements',
        null,
        (response, textStatus, request) => {
          log('Getting placements', response, textStatus, request);
          this.placements = response;
        }
      );
    },
    onDropOnDropZone(e, group, groupId = null) {
      log('Dropping onto zone', group, groupId);
      if (e.dataTransfer.getData('placementId') === 'new') {
        const guide = this.guides.find((item) => {
          return item.id === parseInt(e.dataTransfer.getData('guideId'));
        });

        this.addPlacementForGuide(guide, group, groupId);
      } else {
        this.updatePlacement(parseInt(e.dataTransfer.getData('placementId')), group, groupId);
      }
    },
    onGuideDragStart(e, guideId) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('placementId', 'new');
      e.dataTransfer.setData('guideId', guideId);
    },
    placementsForGroup(group: string, groupId: number | null = null) {
      return this.placements.filter((placement) => {
        return placement.group === group && (groupId ? placement.groupId === groupId : true);
      });
    },
    async savePlacement(placement) {
      await window.Craft?.postActionRequest(
        'guide/placement/save-placement',
        { data: JSON.stringify(placement) },
        (response, textStatus, request) => {
          log('Saving placement', response, textStatus, request);
          this.getPlacementList();
        }
      );
    },
    setGridView(view) {
      this.gridView = view;
      localStorage.setItem('guide:organizer:gridView', view);
    },
    toggleSelectedGroupFilter(value) {
      const index = this.selectedGroupFilters.indexOf(value);

      if (index === -1) {
        this.selectedGroupFilters.push(value);
      } else {
        this.selectedGroupFilters.splice(index, 1);
      }

      localStorage.setItem('guide:organizer:selectedGroupFilters', JSON.stringify(this.selectedGroupFilters));
    },
    updatePlacement(placementId, group, groupId = null) {
      log(`Updating placement: ${placementId} group to: ${group}`);
      this.placements.forEach((placement) => {
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
          (groupId ? parseInt(placement.groupId) !== groupId : true)
        ) {
          placement.group = group;
          placement.groupId = groupId || null;
          this.savePlacement(placement);
        }
      });
    },
    cpUrl(uri) {
      return this.cpTrigger ? `/${this.cpTrigger}/${uri}` : `/${uri}`;
    },
  },
  mounted() {
    const contentEl = document.getElementById('content');
    if (contentEl) {
      contentEl.style.padding = '0px';
    }

    this.getPlacementList();

    log('Organizer loaded');
  },
});
</script>
