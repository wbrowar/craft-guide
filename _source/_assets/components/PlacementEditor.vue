<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import { Placement, PlacementGroup } from '../types/plugins';

export default defineComponent({
  name: 'PlacementEditor',
  components: {
    CraftFieldSelect,
    CraftFieldText,
  },
  props: {
    group: { type: Object as PropType<PlacementGroup>, required: true },
    placement: { type: Object as PropType<Placement>, required: true },
  },
  emits: ['placement-updated'],
  // setup: () => {
  //   const state = reactive({
  //     placementValue: null,
  //   });
  //
  //   return { ...toRefs(state) };
  // },
  computed: {
    placementValue() {},
  },
  methods: {},
});
</script>
