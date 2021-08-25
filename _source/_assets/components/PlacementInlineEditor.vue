<template>
  <div v-if="placementInlineEditor">
    <div v-if="placementSaved">
      <p v-if="guideValue === '__none__'">Guide removed. Please reload this page and select another guide.</p>
      <p v-else>Guide added. Please reload this page to see the guide displayed here.</p>
    </div>
    <div v-if="userOperations.useOrganizer">
      <div v-if="guides.length">
        <CraftFieldSelect
          ref="guideField"
          instructions="Select a guide to be displayed here."
          label="Guide"
          name="guide"
          :options="guideFieldOptions"
          @value-changed="onGroupChanged"
        />
        <button class="btn submit" type="button" @click="onSaveClicked">Save</button>
      </div>
      <div v-else>
        <p>No guides have been created yet. Create a guide and then return here to select it for this UI element.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { guides, log, userOperations } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import { Placement } from '../types/plugins';

export default defineComponent({
  name: 'PlacementInlineEditor',
  components: {
    CraftFieldSelect,
  },
  props: {
    placementId: String,
    placementInlineEditor: { type: String, required: true },
  },
  setup: (props) => {
    const state = reactive({
      guides,
      guideValue: null,
      placement: null as Placement,
      placementSaved: false,
      userOperations,
    });

    state.placement = {
      access: 'all',
      group: 'uiElement',
      groupId: props.placementInlineEditor,
      guideId: null,
      id: parseFloat(props.placementId) || null,
      portalMethod: 'append',
      selector: null,
      theme: 'default',
      uri: null,
    };

    return { ...toRefs(state) };
  },
  computed: {
    guideFieldOptions() {
      const options = [{ label: 'Select One', value: '__none__' }];

      this.guides.forEach((guide) => {
        options.push({ label: guide.title, value: guide.slug });
      });

      return options;
    },
  },
  methods: {
    async deletePlacement() {
      if (this.placement?.id) {
        await window.Craft?.postActionRequest(
          'guide/placement/delete-placement',
          { data: JSON.stringify(this.placement) },
          (response, textStatus, request) => {
            log('Deleting placement', response, textStatus, request);
            this.placementSaved = true;

            if (response.status === 'success') {
              window.Craft?.cp?.displayNotice('Guide removed');
            } else {
              window.Craft?.cp?.displayError(response.data.error);
            }
          }
        );
      }
    },
    onGroupChanged(newValue) {
      this.guideValue = newValue;
    },
    onSaveClicked() {
      if (this.guideValue === '__none__') {
        this.deletePlacement();
      } else {
        this.savePlacement();
      }
    },
    async savePlacement() {
      const selectedGuide = this.guides.find((guide) => {
        return guide.slug === this.guideValue;
      });

      if (selectedGuide) {
        this.placement.guideId = selectedGuide.id;
      }

      await window.Craft?.postActionRequest(
        'guide/placement/save-placement',
        { data: JSON.stringify(this.placement) },
        (response, textStatus, request) => {
          log('Saving placement', response, textStatus, request);
          this.placementSaved = true;

          if (response.status === 'success') {
            window.Craft?.cp?.displayNotice('Guide UI element updated');
          } else {
            window.Craft?.cp?.displayError(response.data.error);
          }
        }
      );
    },
  },
  mounted() {
    this.$refs.guideField.setFieldValue(this.guideFieldOptions[0].value);

    log('PlacementInlineEditor loaded');
  },
});
</script>
