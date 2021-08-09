<template>
  <div>
    <h1>Export/Import Guides</h1>
    <p>
      Guides and their content can be moved from one environment to another to make it easier to re-use guides across
      multiple projects.<br />
      <em>NOTE: Twig templates and assets will need to be migrated manually.</em>
    </p>
    <hr />
    <p><b>Step 1.</b> Copy Guide data by clicking this button.</p>
    <button class="btn submit" type="button" @click="copyExportData">Copy Guide Data</button>
    <p><b>Step 2.</b> Log into another environment and visit this <b>Utilities → Guide</b> page</p>
    <p><b>Step 3.</b> In that environment, paste the JSON into this field and click "Import"</p>
    <CraftFieldText
      ref="importField"
      :field-attributes="{ rows: 4 }"
      field-type="textarea"
      label="Import Data"
      name="import"
      @value-changed="onImportDataChanged"
    />
    <button class="btn submit" type="button" @click="importPluginData">Import</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { log } from '../globals';
import CraftFieldText from './CraftFieldText.vue';

export default defineComponent({
  name: 'PluginUtilities',
  components: {
    CraftFieldText,
  },
  props: {
    exportData: String,
  },
  setup: () => {
    const state = reactive({
      dataImported: false,
      importData: '',
    });

    return { ...toRefs(state) };
  },
  computed: {},
  methods: {
    copyText(text, notification) {
      navigator.clipboard.writeText(text).then(() => {
        window.Craft?.cp?.displayNotice(notification);
      });
    },
    copyExportData() {
      if (this.exportData) {
        this.copyText(this.exportData, 'Data copied');
      }
    },
    onImportDataChanged(newValue) {
      this.importData = newValue;
    },
    async importPluginData() {
      await window.Craft?.postActionRequest(
        'guide/import-export/import-json',
        { guideData: this.importData },
        (response, textStatus, request) => {
          log('Saving placement', response, textStatus, request);
          this.dataImported = true;

          if (response.status === 'success') {
            window.Craft?.cp?.displayNotice('Guide Data Imported');
          } else {
            window.Craft?.cp?.displayError(response.data.error);
          }
        }
      );
    },
  },
  mounted() {
    log('PluginUtilities loaded');
  },
});
</script>
