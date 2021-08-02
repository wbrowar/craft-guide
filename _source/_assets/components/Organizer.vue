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
            hover:g-bg-matrix-titlebar
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
          <p>Drag guides to different areas around the Craft CP.</p>
        </div>
        <div class="g-grid g-grid-cols-1 g-gap-5 g-mt-6 md:g-grid-cols-2">
          <OrganizerDropZone
            v-for="group in groups"
            :key="group.name"
            :description="group.description || null"
            :header="group.header || null"
            :group="group.name"
            :guides="guides"
            :placements="placementsForGroup(group.name)"
            @drop="onDropOnDropZone($event, group.name, group.groupId ? parseInt(group.groupId) : null)"
            @dragover.prevent
            @dragenter.prevent
            @placement-dropped="updatePlacement"
          />
        </div>
      </div>
    </div>
  </div>

  <Teleport to="#guide-action-buttons">
    <a class="btn add icon submit" :href="cpUrl('guide/new')">New Guide</a>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log, table } from '../globals';
import OrganizerDropZone from './OrganizerDropZone.vue';
import { Guide, Placement, PluginSettings, PluginUserOperations } from '~/types/plugins';

export default defineComponent({
  name: 'Organizer',
  components: {
    OrganizerDropZone,
  },
  props: {
    cpTrigger: String,
    devMode: { type: Boolean, default: false },
    groupsData: { type: String, required: true },
    guides: { type: Array as PropType<Guide[]>, required: true },
    isNew: { type: Boolean, default: false },
    placementsData: { type: String, required: true },
    proEdition: { type: Boolean, default: false },
    settings: { type: Object as PropType<PluginSettings>, required: true },
    userOperations: { type: Object as PropType<PluginUserOperations>, required: true },
  },
  setup: (props) => {
    const state = reactive({
      groups: JSON.parse(props.groupsData),
      placements: JSON.parse(props.placementsData) as Placement[],
    });

    // const placementsData = JSON.parse(props.placementsData) as Placement[];
    // placementsData.forEach((placement) => {
    //   state.placements.push(placement);
    // });

    return { ...toRefs(state) };
  },
  computed: {},
  methods: {
    addPlacementForGuide(guide, group = null, guideId = null) {
      log('Adding placement for guide', guide, group, guideId);
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
    updatePlacement(placementId, group, groupId = null) {
      log(`Updating placement: ${placementId} group to: ${group}`);
      this.placements.forEach((placement) => {
        if (placement.id === placementId && placement.group !== group) {
          // this.$set(placement, 'group', group);
          // this.$forceUpdate();
          placement.group = group;

          if (groupId) {
            placement.groupId = groupId;
          }
          log('Placement updated');
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

    log('Organizer loaded');
  },
});
</script>

<style></style>
