<template>
  <div class="g-rounded-lg g-border g-border-solid g-border-matrix-border g-bg-matrix-block">
    <div class="g-flex g-justify-between g-gap-6 g-p-3 g-rounded-t-lg g-bg-matrix-titlebar">
      <h3 class="g-m-0 g-leading-none" :class="headerClass || null" v-if="header">{{ header }}</h3>
      <p class="g-m-0 g-leading-none g-text-right g-text-text g-text-xs" v-if="description">{{ description }}</p>
    </div>
    <ul>
      <li v-for="placement in placements" :key="placement.id">
        <div
          class="
            g-group g-flex g-flex-nowrap g-items-center g-justify-between g-p-3 g-duration-150 g-cursor-move
            hover:g-bg-select-light
          "
          draggable="true"
          @dragstart="onPlacementDragStart($event, placement.id, placement.guideId)"
        >
          <h4 class="g-mb-0">{{ guideForPlacement(placement.guideId).title }}</h4>
          <button
            class="btn small g-opacity-0 group-hover:g-opacity-100"
            type="button"
            @click="onEditPlacementClicked(placement)"
          >
            Edit
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { log } from '../globals';
import { Guide, Placement } from '../types/plugins';

export default defineComponent({
  name: 'OrganizerDropZone',
  components: {},
  props: {
    description: String,
    header: String,
    headerClass: String,
    group: { type: String, required: true },
    guides: { type: Array as PropType<Guide[]>, required: true },
    placements: { type: Array as PropType<Placement[]>, required: true },
  },
  emits: ['edit-placement-clicked'],
  methods: {
    guideForPlacement(guideId): Guide {
      return this.guides.find((item) => {
        return item.id === guideId;
      });
    },
    onPlacementDragStart(e, placementId, guideId) {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('placementId', placementId);
      e.dataTransfer.setData('guideId', guideId);
    },
    onEditPlacementClicked(placement) {
      this.$emit('edit-placement-clicked', placement);
    },
  },
  // mounted() {},
});
</script>
