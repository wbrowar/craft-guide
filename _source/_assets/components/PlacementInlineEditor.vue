<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { guides, log, userOperations } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import type { Placement } from '../types/plugins';

const props = defineProps({
  placementId: String,
  placementInlineEditor: { type: String, required: true },
});

const guideValue = ref();
const placement = ref<Placement>();
const placementSaved = ref(false);

placement.value = {
  access: 'all',
  group: 'uiElement',
  groupId: props.placementInlineEditor,
  guideId: null,
  id: props.placementId ? parseFloat(props.placementId) : null,
  portalMethod: 'append',
  selector: null,
  theme: 'default',
  uri: null,
};

// Template refs
const guideField = ref<InstanceType<typeof CraftFieldSelect>>();

const guideFieldOptions = computed(() => {
  const options = [{ label: 'Select One', value: '__none__' }];

  guides.forEach((guide) => {
    options.push({ label: guide.title, value: guide.slug });
  });

  return options;
});


async function deletePlacement() {
  if (placement.value?.id) {
    await window.Craft?.postActionRequest(
        'guide/placement/delete-placement',
        { data: JSON.stringify(placement.value) },
        (response: any, textStatus: any, request: any) => {
          log('Deleting placement', response, textStatus, request);
          placementSaved.value = true;

          if (response.status === 'success') {
            window.Craft?.cp?.displayNotice('Guide removed');
          } else {
            window.Craft?.cp?.displayError(response.data.error);
          }
        }
    );
  }
};
function onGroupChanged(newValue: string) {
  guideValue.value = newValue;
};
function onSaveClicked() {
  if (guideValue.value === '__none__') {
    deletePlacement();
  } else {
    savePlacement();
  }
};
async function savePlacement() {
  const selectedGuide = guides.find((guide) => {
    return guide.slug === guideValue.value;
  });

  if (placement.value && selectedGuide) {
    placement.value.guideId = selectedGuide.id;
  }

  await window.Craft?.postActionRequest(
      'guide/placement/save-placement',
      { data: JSON.stringify(placement.value) },
      (response: any, textStatus: any, request: any) => {
        log('Saving placement', response, textStatus, request);
        placementSaved.value = true;

        if (response.status === 'success') {
          window.Craft?.cp?.displayNotice('Guide UI element updated');
        } else {
          window.Craft?.cp?.displayError(response.data.error);
        }
      }
  );
};

onMounted(() => {
  guideField.value.setFieldValue(guideFieldOptions.value[0].value);

  log('PlacementInlineEditor loaded');
})
</script>

<template>
  <div v-if="placementInlineEditor">
    <div v-if="placementSaved">
      <p v-if="guideValue === '__none__'">Guide removed. Please reload this page and select another guide.</p>
      <p v-else>Guide added. Please reload this page to see the guide displayed here.</p>
    </div>
    <div v-if="!placementSaved && userOperations.useOrganizer">
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
