<template>
  <div class="g-grid g-grid-rows-[auto,1fr] g-relative g-h-full g-rounded-lg g-bg-matrix-block" v-if="placement">
    <div class="g-p-3 g-flex g-flex-nowrap g-items-center g-justify-between g-rounded-t-lg g-bg-matrix-titlebar">
      <h2 class="g-mb-0">{{ isNew ? 'Add Guide to Craft CP' : 'Edit' }}</h2>
      <div class="g-inline-block g-space-x-1">
        <button class="btn" type="button" @click="cancelEdit">Cancel</button>
        <button class="btn disabled" :title="formErrors.join(' ')" v-if="formErrors.length > 0">
          {{ isNew ? 'Add' : 'Save' }}
        </button>
        <button class="btn submit" type="button" @click="saveEdit" v-else>{{ isNew ? 'Add' : 'Save' }}</button>
      </div>
    </div>

    <div class="g-p-6">
      <div class="g-overflow-auto">
        <CraftFieldSelect
          ref="groupField"
          required
          instructions="Select the area in the Craft Control Panel to place this guide."
          label="Group"
          name="group"
          :options="groupFieldOptions"
          @value-changed="onGroupChanged"
        />
        <CraftFieldText
          ref="uriField"
          required
          instructions="The URI of the page the guide will be displayed on. For example, the URI of this page is: `guide/organizer`"
          label="Page URI"
          name="uri"
          @value-changed="onUriChanged"
          v-show="groupValue === 'uri'"
        />
        <CraftFieldText
          ref="selectorField"
          :required="groupValue === 'uri'"
          :instructions="selectorFieldInstructions"
          label="CSS Selector"
          name="selector"
          @value-changed="onSelectorChanged"
          v-show="groupValue !== 'nav'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
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
    groups: { type: Array, required: true },
    placement: Object as PropType<Placement>,
  },
  emits: ['canceled', 'saved'],
  setup: () => {
    const state = reactive({
      groupValue: '',
      selectorValue: '',
      uriValue: '',
    });

    return { ...toRefs(state) };
  },
  computed: {
    formErrors() {
      const errors = [];

      if (this.groupValue === '') {
        errors.push(`A group must be selected.`);
      }
      if (this.groupValue === 'uri' && this.selectorValue === '') {
        errors.push(`Selector cannot be empty.`);
      }
      if (this.groupValue === 'uri' && this.uriValue === '') {
        errors.push(`Page URI cannot be empty.`);
      }

      return errors;
    },
    groupFieldOptions() {
      const options = [{ label: 'Guide', value: 'nav' }];

      this.groups.forEach((group) => {
        let header = group.header;

        switch (group.name) {
          case 'assetVolume':
            header = `Asset Volume: ${group.header}`;
            break;
          case 'categoryGroup':
            header = `Category Group: ${group.header}`;
            break;
          case 'globalSet':
            header = `Global Set: ${group.header}`;
            break;
        }

        options.push({ label: header, value: group.name });
      });

      options.push({ label: 'Control Panel Pages', value: 'uri' });

      return options;
    },
    groupIdValue() {
      const selectedGroup = this.groups.find((group) => {
        return group.name === this.groupValue;
      });

      return selectedGroup?.groupId || null;
    },
    isNew() {
      return this.placement?.id === null;
    },
    selectorFieldInstructions() {
      return this.groupValue === 'uri'
        ? 'Enter a CSS selector that can be reached on the page the guide will be displayed on.'
        : 'Move the guide to an element on the page by entering a CSS selector that can be reached on the page the guide will be displayed on. Leave this blank to display the guide in its default location.';
    },
  },
  methods: {
    cancelEdit() {
      this.$emit('canceled');
    },
    onGroupChanged(newValue) {
      this.groupValue = newValue;
    },
    onSelectorChanged(newValue) {
      this.selectorValue = newValue !== '' ? newValue : '';
    },
    onUriChanged(newValue) {
      this.uriValue = newValue !== '' ? newValue : '';
    },
    resetFields() {
      this.$nextTick(() => {
        this.$refs.groupField.setFieldValue(this.placement?.group || 'nav');
        this.$refs.uriField.setFieldValue(this.placement?.uri || '');
        this.$refs.selectorField.setFieldValue(this.placement?.selector || '');
      });
    },
    saveEdit() {
      const saveValue = this.placement;

      if (this.groupValue) {
        saveValue.group = this.groupValue;
      }
      if (this.groupIdValue) {
        saveValue.groupId = this.groupIdValue;
      }
      if (this.selectorValue !== '') {
        saveValue.selector = this.selectorValue;
      }
      if (this.uriValue !== '') {
        saveValue.uri = this.uriValue;
      }

      this.$emit('saved', saveValue);
    },
  },
  mounted() {
    log('PlacementEditor loaded');
  },
});
</script>
