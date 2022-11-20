<script lang="ts" setup>
import type { Guide } from '@/types/plugins';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { log } from '../globals';
import CraftFieldText from './CraftFieldText.vue';

// Props
const props = defineProps({
  exportData: String,
});

// Variables
const checkedGuides = ref<string[]>([]);
const dataImported = ref(false);
const exportGuides = ref(props.exportData ? JSON.parse(props.exportData) : {});
const importData = ref('');

// Template Refs
const exportField = ref<InstanceType<typeof CraftFieldText>>();

/**
 * Checks to see if navigator.clipboard is available for use.
 */
const clipboardEnabled = computed(() => {
  return navigator.clipboard && window.isSecureContext;
});

/**
 * The formatted string of exported guide data. Matched to the guide import expected format.
 */
const exportDataString = computed(() => {
  const selectedData: string[] = [];
  exportGuideOptions.value.forEach((option: { checked: boolean; slug: string; title: string }) => {
    if (checkedGuides.value.includes(option.slug)) {
      selectedData.push(option.slug);
    }
  });

  const filteredGuides = exportGuides.value?.guides?.length
    ? exportGuides.value.guides.filter((guide: Guide) => {
        return selectedData.includes(guide.slug);
      })
    : [];

  const data = {
    guides: filteredGuides,
  };

  const exportDataString = JSON.stringify(data);

  if (exportDataString) {
    return exportDataString;
  }

  return '';
});

/**
 * Data and state of guides that can be selected for export.
 */
const exportGuideOptions = computed(() => {
  return exportGuides.value?.guides?.length
    ? exportGuides.value.guides.map((guide: Record<string, any>) => {
        return {
          checked: false,
          slug: guide.slug,
          title: guide.title,
        };
      })
    : [];
});

function copyText(text: string, notification: string) {
  navigator.clipboard.writeText(text).then(() => {
    window.Craft?.cp?.displayNotice(notification);
  });
}
function copyExportData() {
  if (clipboardEnabled.value && exportDataString.value) {
    copyText(exportDataString.value, 'Data copied');
  }
}
function onImportDataChanged(newValue: string) {
  importData.value = newValue;
}
async function importPluginData() {
  await window.Craft?.postActionRequest(
    'guide/import-export/import-json',
    { guideData: importData.value },
    (response: any, textStatus: any, request: any) => {
      log('Saving placement', response, textStatus, request);
      dataImported.value = true;

      if (response.status === 'success') {
        window.Craft?.cp?.displayNotice('Guide Data Imported');
      } else {
        window.Craft?.cp?.displayError(response.data.error);
      }
    }
  );
}

onMounted(() => {
  log('PluginUtilities loaded');
});

watchEffect(() => {
  if (exportField.value) {
    exportField.value.setFieldValue(exportDataString.value);
  }
});
</script>

<template>
  <div>
    <h1>Export/Import Guides</h1>
    <p>
      Guides and their content can be moved from one environment to another to make it easier to re-use guides across
      multiple projects.<br />
      <em>NOTE: Twig templates and assets will need to be migrated manually.</em>
    </p>
    <hr />
    <p><b>Step 1.</b> Select Guides to export.</p>
    <div v-if="exportGuideOptions.length">
      <div v-for="option in exportGuideOptions" :key="option.slug">
        <input
          :id="`export-option-${option.slug}`"
          v-model="checkedGuides"
          class="checkbox"
          type="checkbox"
          :name="option.slug"
          :value="option.slug"
        />
        <label :for="`export-option-${option.slug}`">{{ option.title }}</label>
      </div>
    </div>
    <div v-else>
      <p>No guides have been created yet!</p>
    </div>
    <p><b>Step 2.</b> Copy Guide export data.</p>
    <CraftFieldText
      ref="exportField"
      :autofocus="false"
      :field-attributes="{ readonly: true, rows: 4 }"
      field-type="textarea"
      label="Export Data"
      name="export"
    />
    <button class="btn submit" type="button" @click="copyExportData" v-if="clipboardEnabled">
      Copy Guide Export Data to Clipboard
    </button>
    <p><b>Step 3.</b> Log into another environment and visit this <b>Utilities → Guide</b> page</p>
    <p><b>Step 4.</b> In that environment, paste the JSON into this field and click "Import Data into Guide"</p>
    <CraftFieldText
      :autofocus="false"
      :field-attributes="{ placeholder: `Paste Guide data here.`, rows: 4 }"
      field-type="textarea"
      label="Import Data"
      name="import"
      @value-changed="onImportDataChanged"
    />
    <button class="btn submit" type="button" @click="importPluginData">Import Data into Guide</button>
  </div>
</template>
