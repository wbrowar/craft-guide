<template>
  <div class="g-grid g-grid-cols-[minmax(200px,400px),1fr]" v-if="guide">
    <div class="g-bg-white g-rounded-l-lg">
      <div>
        <ul class="g-flex g-flex-nowrap">
          <li class="g-flex-grow">
            <button class="g-w-full g-h-16" type="button" @click="currentTab = 'publishing'">publishing</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-16" type="button" @click="currentTab = 'components'">components</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-16" type="button" @click="currentTab = 'images'">images</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-16" type="button" @click="currentTab = 'guides'">guides</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-16" type="button" @click="currentTab = 'utility-classes'">
              utility-classes
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div class="g-p-6" v-show="currentTab === 'publishing'">
          <h2>Settings</h2>
          <CraftFieldText label="Title" name="title" placeholder="Guide Title" :starting-value="guide.title" />
          <CraftFieldText label="Slug" name="slug" placeholder="guide-title" :starting-value="guide.slug" />
          <CraftFieldSelect
            ref="contentSourceField"
            label="Content Source"
            name="contentSource"
            :options="[
              { label: 'Code Editor', value: 'field' },
              { label: 'Page Template', value: 'template' },
              { label: 'External Page (iframe)', value: 'iframe' },
            ]"
            :starting-value="guide.contentSource"
            @value-changed="onContentSourceChanged"
          />
          <CraftFieldSelect
            :instructions="`Load a template found in your <strong>${settings.templatePath}</strong> directory.`"
            label="Template"
            name="template"
            :options="templatesFieldOptions"
            :starting-value="guide.template"
            @value-changed="onGuideTemplateChanged"
            v-show="contentSource === 'template'"
          />
          <CraftFieldText
            instructions="A URL that is loaded in an iframe."
            label="Page URL"
            name="contentUrl"
            :field-attributes="{
              maxlength: 255,
            }"
            :starting-value="guide.contentUrl"
            @value-changed="onContentUrlChanged"
            v-show="contentSource === 'iframe'"
          />
          <CraftFieldText
            instructions="Describes the guide in the Organizer."
            label="Summary"
            name="summary"
            :starting-value="guide.summary"
          />
        </div>
        <div class="g-p-3" v-show="currentTab === 'utility-classes'">
          <p>Utility class search</p>
        </div>
        <ul v-show="tabComponents.length">
          <li v-for="(component, index) in tabComponents" :key="index">
            <ComponentListItem
              class="g-p-3"
              :code="component.code"
              :title="component.title"
              @insert-clicked="insertTextIntoEditor"
            />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="g-bg-matrix-block g-rounded-r-lg"
      @drop="onDrop($event, 'landing')"
      @dragenter.prevent
      @dragover.prevent
    >
      <VAceEditor
        ref="editor"
        v-model:value="editorContent"
        class="g-min-h-[800px] g-h-[70vh] g-rounded-r-lg"
        wrap
        :lang="guide.format"
        :options="{
          displayIndentGuides: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          showInvisibles: false,
          tabSize: 2,
        }"
        placeholder="ahhh"
        theme="tomorrow_night_bright"
        style="height: 300px"
        v-show="contentSource === 'field'"
      />
      <div class="g-w-full g-h-full g-relative g-overflow-hidden" v-if="contentSource === 'iframe'">
        <iframe class="g-w-full g-h-full g-rounded-r-lg" :src="contentUrl"></iframe>
        <div
          class="
            g-flex
            g-items-center
            g-justify-center
            g-box-border
            g-p-6
            g-absolute
            g-inset-0
            g-bg-gradient-to-b
            g-from-matrix-block/0
            g-via-matrix-block
            g-to-matrix-block
          "
        >
          <p
            class="g-text-center"
            v-html="`The url, <strong>${contentUrl}</strong>, will get loaded in an iframe.`"
            v-if="contentUrl !== ''"
          ></p>
          <p v-html="`Enter a URL into the <strong>Page URL</strong> field.`" v-else></p>
        </div>
      </div>
      <div
        class="g-flex g-items-center g-justify-center g-box-border g-p-6 g-h-full g-relative g-overflow-hidden"
        v-else-if="contentSource === 'template'"
      >
        <pre
          class="g-w-full g-h-full"
        ><code class="g-w-full g-h-full" v-text='guideTemplateContent' v-if="guideTemplate !== '__none__'"></code></pre>
        <div
          class="
            g-flex
            g-items-center
            g-justify-center
            g-box-border
            g-p-6
            g-absolute
            g-inset-0
            g-bg-gradient-to-b
            g-from-matrix-block/0
            g-via-matrix-block
            g-to-matrix-block
          "
        >
          <div class="g-text-center" v-if="guideTemplate !== '__none__'">
            <p
              v-html="
                `The <strong>${guideTemplate}</strong> template will be loaded from the <strong>${settings.templatePath}</strong> directiory.`
              "
            ></p>
            <p>
              You can copy the contents of this file into the Code Editor (this will replace the current Code Editor
              code).
            </p>
            <button class="btn submit" type="button" @click="insertGuideTemplateIntoEditor">
              Copy Template to Code Editor
            </button>
          </div>
          <p v-html="`Select a file from the <strong>Template</strong> field.`" v-else></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { editorData } from '../editorData';
import { VAceEditor } from 'vue3-ace-editor';
import ComponentListItem from './ComponentListItem.vue';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import { EditorComponent, EditorTabGroup, Guide, GuideContentSource, PluginSettings } from '~/types/plugins';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-twig';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';

export default defineComponent({
  name: 'GuideEditor',
  components: {
    ComponentListItem,
    CraftFieldSelect,
    CraftFieldText,
    VAceEditor,
  },
  props: {
    guideData: { type: String, required: true },
    isNew: { type: String, default: 'false' },
    settingsData: { type: String, required: true },
    templatesData: { type: Object, required: true },
  },
  setup: (props) => {
    const state = reactive<{
      contentSource: GuideContentSource;
      contentUrl: string;
      currentTab: EditorTabGroup;
      editorComponents: EditorComponent[];
      editorContent: string;
      guide: Guide;
      settings: PluginSettings;
      guideTemplate: string | '__none__';
      templates: {
        filenames: Record<string, string>;
        contents: Record<string, string>;
      };
      templatesFieldOptions: Record<string, string>[];
    }>({
      contentSource: 'field',
      contentUrl: '',
      currentTab: 'publishing',
      editorComponents: editorData,
      editorContent: '',
      guide: JSON.parse(props.guideData),
      settings: JSON.parse(props.settingsData),
      guideTemplate: '__none__',
      templates: JSON.parse(props.templatesData),
      templatesFieldOptions: [],
    });

    state.contentSource = state.guide.contentSource;
    state.editorContent = state.guide.content;
    state.guideTemplate = state.guide.template;

    state.templatesFieldOptions = Object.keys(state.templates.filenames).map((key) => {
      return { label: state.templates.filenames[key], value: key };
    });

    return { ...toRefs(state) };
  },
  computed: {
    guideTemplateContent() {
      return this.templates.contents[this.guideTemplate];
    },
    tabComponents() {
      return this.editorComponents.filter((component) => {
        return component.group === this.currentTab;
      });
    },
  },
  methods: {
    insertGuideTemplateIntoEditor() {
      if (this.guideTemplateContent) {
        this.$refs.editor._editor.setValue(this.guideTemplateContent);
        this.$refs.contentSourceField.setFieldValue('field');
      }
    },
    insertTextIntoEditor(text: string) {
      this.$refs.editor._editor.insert(text);
      this.$refs.editor.focus();
    },
    onContentSourceChanged(newValue) {
      this.contentSource = newValue;
    },
    onContentUrlChanged(newValue) {
      this.contentUrl = newValue;
    },
    onDrop(e: DragEvent, thing) {
      console.log('drag', e, thing);
    },
    onGuideTemplateChanged(newValue) {
      this.guideTemplate = newValue;
    },
    startDrag: (e: DragEvent, thing) => {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemID', thing);
    },
  },
  mounted() {
    const contentEl = document.getElementById('content');
    if (contentEl) {
      contentEl.style.padding = '0px';
    }

    if (import.meta.env.DEV) {
      console.log('Guide Editor: guide');
      console.table(this.guide);
    }
  },
});
</script>

<style scoped></style>
