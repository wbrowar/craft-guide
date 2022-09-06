<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
import { log, proEdition } from '../globals';
import SvgClose from './SvgClose.vue';
import SvgEdit from './SvgEdit.vue';
import type { Guide, Placement } from '../types/plugins';

const emit = defineEmits(['edit-placement-clicked', 'delete-placement-clicked']);
const props = defineProps({
  description: String,
  header: String,
  headerSize: { type: Number, default: 2 },
  group: { type: String, required: true },
  guides: { type: Array as PropType<Guide[]>, required: true },
  placements: { type: Array as PropType<Placement[]>, required: true },
});

const confirmDelete = ref(false);

function guideForPlacement(guideId: number): Guide | undefined {
  return props.guides.find((item) => {
    return item.id === guideId;
  });
}
function onPlacementDragStart(e: any, placementId: string, guideId: string) {
  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('placementId', placementId);
  e.dataTransfer.setData('guideId', guideId);
}
function onDeletePlacementClicked(placement: Placement) {
  emit('delete-placement-clicked', placement);
}
function onEditPlacementClicked(placement: Placement) {
  emit('edit-placement-clicked', placement);
}

onMounted(() => {
  log('OrganizerDropZone loaded');
});
</script>

<template>
  <div class="g-rounded-lg g-border g-border-solid g-border-matrix-border g-bg-matrix-block">
    <div
      class="g-flex g-items-center g-justify-between g-gap-6 g-p-3 g-rounded-t-lg"
      :class="{
        'g-bg-select-light/80': headerSize === 3,
        'g-bg-select-light/50': headerSize === 2,
        'g-bg-select-light/20': headerSize === 1,
      }"
    >
      <h3
        class="g-m-0 g-leading-none"
        :class="{
          'g-text-lg': headerSize === 3,
          'g-text-base': headerSize === 2,
          'g-text-sm': headerSize === 1,
        }"
        v-if="header"
      >
        {{ header }}
      </h3>
      <p class="info g-m-0 g-leading-none" v-if="description">{{ description }}</p>
    </div>
    <ul>
      <li
        v-for="placement in placements"
        :key="placement.id"
        title="Drag guide to a different area of the Craft Control Panel"
      >
        <div
          class="g-group g-flex g-flex-nowrap g-items-center g-justify-between g-gap-3 g-p-3 g-duration-150 g-cursor-move hover:g-bg-select-light"
          draggable="true"
          @dragstart="onPlacementDragStart($event, placement.id, placement.guideId)"
          @mouseleave="confirmDelete = false"
        >
          <h4 class="g-mb-0">
            {{ guideForPlacement(placement.guideId).title
            }}<span class="g-ml-2 g-font-normal g-opacity-60" v-if="placement.uri">{{ placement.uri }}</span
            ><span class="g-ml-2 g-font-normal g-opacity-40" v-if="placement.selector">{{ placement.selector }}</span>
          </h4>
          <div class="g-inline-flex g-flex-nowrap g-gap-1 g-opacity-0 group-hover:g-opacity-100">
            <button
              class="btn small"
              title="Edit"
              type="button"
              @click="onEditPlacementClicked(placement)"
              v-if="!confirmDelete && proEdition"
            >
              <SvgEdit class="g-w-3 g-h-3" /><span class="g-sr-only">Edit</span>
            </button>
            <button class="btn small" title="Delete" type="button" @click="confirmDelete = true" v-if="!confirmDelete">
              <SvgClose class="g-w-3 g-h-3" /><span class="g-sr-only">Remove</span>
            </button>
            <button
              class="btn submit small"
              type="button"
              @click="onDeletePlacementClicked(placement)"
              v-if="confirmDelete"
            >
              Remove</button
            ><button class="btn small" type="button" @click="confirmDelete = false" v-if="confirmDelete">Cancel</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
