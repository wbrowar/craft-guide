<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { guides, log, t, userOperations } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import { PlacementEdit } from '../types/plugins';

const props = defineProps({
  placementId: String,
  placementInlineEditor: { type: String, required: true },
});

const guideValue = ref();
const placement = ref<PlacementEdit>();
const placementSaved = ref(false);

// Template refs
const guideField = ref<InstanceType<typeof CraftFieldSelect>>();

const guideFieldOptions = computed(() => {
  const options = [{ label: t('Select One'), value: '__none__' }];

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
}
function onGroupChanged(newValue: string) {
  guideValue.value = newValue;
}
function onSaveClicked() {
  if (guideValue.value === '__none__') {
    deletePlacement();
  } else {
    savePlacement();
  }
}
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
}

onBeforeMount(() => {
  placement.value = {
    access: 'all',
    group: 'uiElement',
    groupId: props.placementInlineEditor,
    guideId: undefined,
    id: props.placementId ? parseFloat(props.placementId) : undefined,
    portalMethod: 'append',
    selector: undefined,
    theme: 'default',
    uri: undefined,
  };
});
onMounted(() => {
  if (guideField.value) {
    guideField.value.setFieldValue(guideFieldOptions.value[0].value);
  }

  log('PlacementInlineEditor loaded');
});
</script>

<template>
  <div v-if="placementInlineEditor">
    <div v-if="placementSaved">
      <p v-if="guideValue === '__none__'">{{ t('PLACEMENT_INLINE_EDITOR_CONFIRM_REMOVED') }}</p>
      <p v-else>{{ t('PLACEMENT_INLINE_EDITOR_CONFIRM_ADDED') }}</p>
    </div>
    <div v-if="!placementSaved && userOperations.useOrganizer">
      <div v-if="guides.length">
        <CraftFieldSelect
          ref="guideField"
          :instructions="t('PLACEMENT_INLINE_EDITOR_FIELD_INSTRUCTIONS_GUIDE')"
          :label="t('Guide')"
          name="guide"
          :options="guideFieldOptions"
          @value-changed="onGroupChanged"
        />
        <button class="btn submit" type="button" @click="onSaveClicked">{{ t('Save') }}</button>
      </div>
      <div v-else>
        <p>{{ t('PLACEMENT_INLINE_EDITOR_NO_GUIDES') }}</p>
      </div>
    </div>
  </div>
</template>
