<script lang="ts" setup>
import { computed, nextTick, onMounted, PropType, ref } from 'vue';
import { log, t } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import type { Placement, PlacementEditorGroup, PlacementGroup } from '../types/plugins';

const emit = defineEmits(['canceled', 'saved']);
const props = defineProps({
  groups: Array as PropType<PlacementEditorGroup[]>,
  placement: Object as PropType<Placement>,
});

const groupValue = ref('');
const selectorValue = ref('');
const uriValue = ref('');

// Template refs
const groupField = ref<InstanceType<typeof CraftFieldSelect>>();
const uriField = ref<InstanceType<typeof CraftFieldText>>();
const selectorField = ref<InstanceType<typeof CraftFieldText>>();

const formErrors = computed(() => {
  const errors = [];

  if (groupValue.value === '') {
    errors.push(`A group must be selected.`);
  }
  if (groupValue.value === 'uri' && selectorValue.value === '') {
    errors.push(`Selector cannot be empty.`);
  }
  if (groupValue.value === 'uri' && uriValue.value === '') {
    errors.push(`Page URI cannot be empty.`);
  }

  return errors;
});
const groupFieldOptions = computed(() => {
  const options = [{ label: 'Guide', value: 'nav' }];

  props.groups?.forEach((group) => {
    let header = group.header;
    let name = group.name;

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

    if (group.groupId) {
      name += `|${group.groupId}`;
    }

    options.push({ label: header, value: name });
  });

  options.push({ label: 'Control Panel Pages', value: 'uri' });

  return options;
});
const isNew = computed(() => props.placement?.id === null);
const selectorFieldInstructions = computed(() =>
  groupValue.value === 'uri'
    ? t['PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_SELECTOR_URI']
    : t['PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_SELECTOR_NON_URI']
);

function cancelEdit() {
  emit('canceled');
}
function onGroupChanged(newValue: string) {
  groupValue.value = newValue;
}
function onSelectorChanged(newValue: string) {
  selectorValue.value = newValue !== '' ? newValue : '';
}
function onUriChanged(newValue: string) {
  uriValue.value = newValue !== '' ? newValue : '';
}
function resetFields() {
  nextTick(() => {
    groupField.value.setFieldValue(
      props.placement?.group + (props.placement?.groupId ? `|${props.placement.groupId}` : '') || 'nav'
    );
    uriField.value.setFieldValue(props.placement?.uri || '');
    selectorField.value.setFieldValue(props.placement?.selector || '');
  });
}
function saveEdit() {
  if (props.placement) {
    const saveValue = props.placement;

    if (groupValue.value) {
      const groupSplit: string[] = groupValue.value.split('|');

      if (groupSplit[0]) {
        saveValue.group = groupSplit[0] as PlacementGroup;
      }
      if (groupSplit[1]) {
        saveValue.groupId = groupSplit[1];
      }
    }
    if (selectorValue.value !== '') {
      saveValue.selector = selectorValue.value;
    }
    if (uriValue.value !== '') {
      saveValue.uri = uriValue.value;
    }

    emit('saved', saveValue);
  }
}

onMounted(() => {
  log('PlacementEditor loaded');
});

defineExpose({
  resetFields,
});
</script>

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
          :instructions="t['PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_GROUP']"
          :label="t['Group']"
          name="group"
          :options="groupFieldOptions"
          @value-changed="onGroupChanged"
        />
        <CraftFieldText
          ref="uriField"
          required
          :instructions="t['PLACEMENT_EDITOR_FIELD_INSTRUCTIONS_URI']"
          :label="t['Page URI']"
          name="uri"
          @value-changed="onUriChanged"
          v-show="groupValue === 'uri'"
        />
        <CraftFieldText
          ref="selectorField"
          :required="groupValue === 'uri'"
          :instructions="selectorFieldInstructions"
          :label="t['CSS Selector']"
          name="selector"
          @value-changed="onSelectorChanged"
          v-show="groupValue !== 'nav'"
        />
      </div>
    </div>
  </div>
</template>
