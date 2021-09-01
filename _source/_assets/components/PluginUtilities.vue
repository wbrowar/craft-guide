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
    <div v-for="option in exportGuideOptions" :key="option.slug">
      <input
        :id="`export-option-${option.slug}`"
        v-model="option.checked"
        class="checkbox"
        type="checkbox"
        :name="option.slug"
      />
      <label :for="`export-option-${option.slug}`">{{ option.title }}</label>
    </div>
    <p><b>Step 2.</b> Copy Guide data by clicking this button.</p>
    <button class="btn submit" type="button" @click="copyExportData">Copy Guide Data</button>
    <p><b>Step 3.</b> Log into another environment and visit this <b>Utilities → Guide</b> page</p>
    <p><b>Step 4.</b> In that environment, paste the JSON into this field and click "Import"</p>
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
import { Guide } from '~/types/plugins';

export default defineComponent({
  name: 'PluginUtilities',
  components: {
    CraftFieldText,
  },
  props: {
    exportData: String,
  },
  setup: (props) => {
    const state = reactive({
      dataImported: false,
      exportGuides: JSON.parse(props.exportData),
      importData: '',
    });

    return { ...toRefs(state) };
  },
  computed: {
    exportGuideOptions() {
      return this.exportGuides?.guides?.length
        ? this.exportGuides.guides.map((guide) => {
            return {
              checked: false,
              slug: guide.slug,
              title: guide.title,
            };
          })
        : [];
    },
  },
  methods: {
    copyText(text, notification) {
      navigator.clipboard.writeText(text).then(() => {
        window.Craft?.cp?.displayNotice(notification);
      });
    },
    copyExportData() {
      const selectedData: string[] = [];
      this.exportGuideOptions.forEach((option: { checked: boolean; slug: string; title: string }) => {
        if (option.checked) {
          selectedData.push(option.slug);
        }
      });

      const filteredGuides = this.exportGuides?.guides?.length
        ? this.exportGuides.guides.filter((guide: Guide) => {
            return selectedData.includes(guide.slug);
          })
        : [];

      const data = {
        guides: filteredGuides,
      };

      const exportDataString = JSON.stringify(data);

      if (exportDataString) {
        this.copyText(exportDataString, 'Data copied');
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
