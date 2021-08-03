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
          <div class="g-hidden g-mt-1 g-space-x-1 group-focus:g-block group-hover:g-block">
            <button class="btn small" type="button" @click="addPlacementForGuide(guide)">➕ Add</button>
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
          </div>
        </li>
      </ul>

      <div class="g-p-3">
        <a class="btn add icon submit" :href="cpUrl('guide/new')">New Guide</a>
      </div>
    </div>
    <div class="g-min-h-[850px] g-h-[70vh] g-bg-select-dark g-rounded-r-lg g-relative">
      <div class="g-p-6">
        <div class="g-text-select-light">
          <h2>Craft CP</h2>
          <p>Drag guides to different areas around the Craft CP. Click "Edit" for more detailed settings.</p>
        </div>
        <div class="g-grid g-grid-cols-[1fr,150px] g-gap-6 g-mt-6">
          <div class="g-grid g-grid-cols-1 g-gap-5 md:g-grid-cols-2">
            <OrganizerDropZone
              v-for="group in filteredDropZones"
              :key="group.name"
              :description="group.description || null"
              :header="group.header || null"
              :group="group.name"
              :guides="guides"
              :placements="placementsForGroup(group.name)"
              @drop="onDropOnDropZone($event, group.name, group.groupId ? parseInt(group.groupId) : null)"
              @dragover.prevent
              @dragenter.prevent
              @edit-placement-clicked="editPlacement"
              @placement-dropped="updatePlacement"
            />
          </div>
          <div class="g-text-select-light">
            <ul class="g-space-y-2">
              <li v-for="filter in groupFilters" :key="filter.value" class="g-flex g-flex-nowrap g-items-start g-gap-1">
                <input
                  :id="`group-filter-${filter.value}`"
                  class="g-mt-0.5 g-w-4 g-h-4"
                  :checked="selectedGroupFilters.includes(filter.value)"
                  type="checkbox"
                  @change="toggleSelectedGroupFilter(filter.value)"
                />
                <label :for="`group-filter-${filter.value}`">{{ filter.label }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="#guide-action-buttons">
    <a class="btn add icon submit" :href="cpUrl('guide/new')">New Guide</a>
  </Teleport>

  <Modal ref="editModal">
    <template #header>
      <h2 class="g-mb-0">Edit</h2>
      <div class="g-inline-block g-space-x-1">
        <button class="btn submit" type="button" @click="editPlacementClose">Save</button>
        <button class="btn" type="button" @click="editPlacementClose">Cancel</button>
      </div>
    </template>

    <div class="g-p-6">
      <p>Hello! {{ currentEditPlacement.group }}</p>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
import Modal from './Modal.vue';
import OrganizerDropZone from './OrganizerDropZone.vue';
import { Guide, Placement, PlacementGroup, PluginSettings, PluginUserOperations } from '~/types/plugins';

export default defineComponent({
  name: 'Organizer',
  components: {
    Modal,
    OrganizerDropZone,
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
      groups: JSON.parse(props.groupsData),
      placements: [] as Placement[],
      groupFilters: [],
      selectedGroupFilters: [] as PlacementGroup[],
    });

    const selectedGroupFilters: PlacementGroup[] = [];
    state.groups.forEach((group) => {
      const filter = { label: group.label, value: group.name };
      if (!selectedGroupFilters.includes(group.name)) {
        state.groupFilters.push(filter);
        selectedGroupFilters.push(group.name);
      }
    });

    state.selectedGroupFilters = selectedGroupFilters.filter((name) => {
      return !(['assetVolume', 'categoryGroup', 'entryType'] as PlacementGroup).includes(name);
    });

    return { ...toRefs(state) };
  },
  computed: {
    filteredDropZones() {
      return this.groups.filter((group) => {
        return this.selectedGroupFilters.includes(group.name);
      });
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
      this.savePlacement(placement);
      log('Adding placement for guide', guide, group, groupId);
    },
    editPlacement(placement) {
      this.$refs.editModal.open();
      this.currentEditPlacement = { ...placement };
    },
    editPlacementClose() {
      this.$refs.editModal.close();
      this.currentEditPlacement = null;
    },
    async getPlacementList() {
      window.Craft?.postActionRequest('guide/placement/get-all-placements', null, (response, textStatus, request) => {
        log('Getting placements', response, textStatus, request);
        this.placements = response;
      });
    },
    onDropOnDropZone(e, group, groupId) {
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
    placementsForGroup(group: string) {
      return this.placements.filter((placement) => {
        return placement.group === group;
      });
    },
    toggleSelectedGroupFilter(value) {
      const index = this.selectedGroupFilters.indexOf(value);

      if (index === -1) {
        this.selectedGroupFilters.push(value);
      } else {
        this.selectedGroupFilters.splice(index, 1);
      }
    },
    savePlacement(placement) {
      window.Craft?.postActionRequest(
        'guide/placement/save-placement',
        { data: JSON.stringify(placement) },
        (response, textStatus, request) => {
          log('Saving placement', response, textStatus, request);
          this.getPlacementList();
        }
      );
    },
    updatePlacement(placementId, group, groupId = null) {
      log(`Updating placement: ${placementId} group to: ${group}`);
      this.placements.forEach((placement) => {
        if (placement.id === placementId && placement.group !== group) {
          // this.$set(placement, 'group', group);
          // this.$forceUpdate();
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
