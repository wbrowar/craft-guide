<template>
  <div>
    <p>huh</p>
    <!--    <CraftFieldSelect-->
    <!--      ref="groupField"-->
    <!--      required-->
    <!--      instructions="Select a guide to be displayed here."-->
    <!--      label="Guide"-->
    <!--      name="guide"-->
    <!--      :options="groupFieldOptions"-->
    <!--      @value-changed="onGroupChanged"-->
    <!--    />-->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import { Guide, Placement, PlacementGroup, PluginSettings, PluginUserOperations } from '../types/plugins';

export default defineComponent({
  name: 'PlacementInlineEditor',
  components: {
    CraftFieldSelect,
    CraftFieldText,
  },
  props: {
    placementInlineEditor: { type: String, required: true },
  },
  setup: () => {
    const state = reactive({
      guideValue: null,
      placement: null as Placement,
    });

    return { ...toRefs(state) };
  },
  computed: {
    // groupFieldOptions() {
    //   const options = [];
    //
    //   this.guides.forEach((guide) => {
    //     options.push({ label: guide.title, value: guide.id });
    //   });
    //
    //   return options;
    // },
  },
  methods: {
    onGroupChanged(newValue) {
      this.guideValue = newValue;
    },
  },
  mounted() {
    log('PlacementInlineEditor loaded');
  },
});
</script>
