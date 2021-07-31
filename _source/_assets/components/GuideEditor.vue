<template>
  <div class="g-grid g-grid-cols-[minmax(200px,400px),minmax(250px,1fr)] g-relative g-overflow-hidden" v-if="guide">
    <div
      class="
        g-grid g-grid-rows-[60px,1fr] g-relative g-bg-white g-rounded-l-lg g-min-h-[800px] g-h-[70vh] g-overflow-x-auto
      "
    >
      <div class="g-sticky g-top-0 g-bg-white">
        <ul class="g-flex g-flex-nowrap">
          <li class="g-flex-grow">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'publishing'">publishing</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'components'">components</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'images'">images</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'guides'">guides</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'snippets'">snippets</button>
          </li>
          <li class="g-flex-grow" v-if="contentSource === 'field'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'utility-classes'">
              utility-classes
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div class="g-p-6" v-show="currentTab === 'publishing'">
          <h2>Settings</h2>
          <CraftFieldText
            required
            label="Title"
            name="title"
            placeholder="Guide Title"
            :starting-value="guide.title"
            @value-changed="onTitleChanged"
          />
          <CraftFieldText
            required
            label="Slug"
            name="slug"
            placeholder="guide-title"
            :starting-value="guide.slug"
            @value-changed="onSlugChanged"
          />
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
        <div class="g-p-6" v-show="currentTab === 'utility-classes'">
          <h2>Utility Classes</h2>
          <p>You may use the classes below to style an lay out your guide content.</p>
          <UtilityClassesSearch />
        </div>
        <ul v-show="tabComponents.length">
          <h2>Components</h2>
          <li v-for="(component, index) in tabComponents" :key="index">
            <ComponentListItem
              :code="component.code"
              :docs="{
                description: component.documentation,
                props: component.props,
              }"
              :image-srcset="
                component.thumbnail1x && component.thumbnail2x
                  ? `${component.thumbnail1x} 1x, ${component.thumbnail2x} 2x`
                  : null
              "
              :title="component.title"
              @documentation-clicked="showDocumentation"
              @insert-clicked="insertTextIntoEditor"
            />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="g-min-h-[800px] g-h-[70vh] g-bg-matrix-block g-rounded-r-lg g-relative g-overflow-hidden"
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
    <transition name="slide-docs">
      <div class="g-absolute g-inset-y-0 g-right-0 g-w-64 g-p-2 g-z-10 lg:g-w-96" v-if="currentDocs">
        <div
          class="
            g-box-border g-p-5 g-pt-10 g-w-full g-h-full g-bg-matrix-block g-rounded-sm g-shadow-lg g-overflow-auto
          "
        >
          <h1 v-html="currentDocs.title" v-if="currentDocs.title"></h1>
          <div v-html="currentDocs.description" v-if="currentDocs.description"></div>
          <img class="g-mt-6" :srcset="currentDocs.imageSrcset" alt="image preview" v-if="currentDocs.imageSrcset" />
          <div class="g-mt-6" v-if="currentDocs.code">
            <h2>Code</h2>
            <div class="g-bg-matrix-titlebar g-rounded g-border-matrix-border g-overflow-x-scroll">
              <pre class="g-p-3 g-select-all"><code>{{ currentDocs.code }}</code></pre>
            </div>
            <div class="g-space-x-1">
              <button class="btn small g-mt-1" type="button" @click="insertTextIntoEditor(currentDocs.code)">
                ➕ Add
              </button>
              <button class="btn small g-mt-1" type="button" @click="copyText(currentDocs.code)">🗂 Copy</button>
            </div>
          </div>
          <div class="g-mt-6" v-if="currentDocs.props">
            <h2>Arguments</h2>
            <table>
              <tbody>
                <tr v-for="(prop, index) in currentDocs.props" :key="index">
                  <td class="g-select-all">
                    <strong>{{ index }}</strong>
                  </td>
                  <td>{{ prop }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button class="g-absolute g-top-4 g-right-4" type="button" @click="currentDocs = null">Close</button>
      </div>
    </transition>
  </div>
  <Teleport to="#guide-action-buttons">
    <button class="btn disabled" :title="formErrors.join(' ')" v-if="formErrors.length > 0">Save</button>
    <input class="btn submit" type="button" value="Save" v-else />
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log, table } from '../globals';
import { editorData } from '../editorData';
import ComponentListItem from './ComponentListItem.vue';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import UtilityClassesSearch from './UtilityClassesSearch.vue';
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-twig';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import {
  EditorComponent,
  EditorTabGroup,
  Guide,
  GuideContentSource,
  PluginSettings,
  PluginUserOperations,
} from '~/types/plugins';

export default defineComponent({
  name: 'GuideEditor',
  components: {
    ComponentListItem,
    CraftFieldSelect,
    CraftFieldText,
    UtilityClassesSearch,
    VAceEditor,
  },
  props: {
    assetComponents: { type: Array as PropType<EditorComponent[]>, required: true },
    devMode: { type: Boolean, default: false },
    guideData: { type: String, required: true },
    guideComponents: { type: Array as PropType<EditorComponent[]>, required: true },
    isNew: { type: String, default: 'false' },
    proEdition: { type: Boolean, default: false },
    settings: { type: Object as PropType<PluginSettings>, required: true },
    templates: {
      type: Object as PropType<{
        filenames: Record<string, string>;
        contents: Record<string, string>;
      }>,
      required: true,
    },
    userOperations: { type: Object as PropType<PluginUserOperations>, required: true },
  },
  setup: (props) => {
    const state = reactive({
      contentSource: 'field' as GuideContentSource,
      contentUrl: '',
      currentDocs: null,
      currentTab: 'publishing' as EditorTabGroup,
      editorComponents: editorData as EditorComponent[],
      editorContent: '',
      guide: JSON.parse(props.guideData) as Guide,
      guideTemplate: '__none__',
      slugValue: '',
      templatesFieldOptions: [] as Record<string, string>[],
      titleValue: '',
    });

    state.contentSource = state.guide.contentSource;
    state.editorContent = state.guide.content;
    state.guideTemplate = state.guide.template;
    state.slugValue = state.guide.slug;
    state.titleValue = state.guide.title;

    state.editorComponents.push(...props.assetComponents);
    state.editorComponents.push(...props.guideComponents);

    state.templatesFieldOptions = Object.keys(props.templates.filenames).map((key) => {
      return { label: props.templates.filenames[key], value: key };
    });

    return { ...toRefs(state) };
  },
  computed: {
    formErrors() {
      const errors = [];

      if (this.titleValue === '') {
        errors.push(`Title cannot be empty.`);
      }
      if (this.slugValue === '') {
        errors.push(`Slug cannot be empty.`);
      }

      return errors;
    },
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
    copyText(text) {
      navigator.clipboard.writeText(text);
    },
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
      log('drag', e, thing);
    },
    onGuideTemplateChanged(newValue) {
      this.guideTemplate = newValue;
    },
    onSlugChanged(newValue) {
      this.slugValue = newValue;
    },
    onTitleChanged(newValue) {
      this.titleValue = newValue;
    },
    showDocumentation(payload) {
      this.currentDocs = this.currentDocs?.code === payload.code ? null : payload;
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

    log('Guide Editor: guide');
    table(this.guide);
  },
});
</script>

<style>
.slide-docs-enter-active,
.slide-docs-leave-active {
  transition: transform 0.4s cubic-bezier(0, 0.23, 0.55, 1.07);
}

.slide-docs-enter-from,
.slide-docs-leave-to {
  transform: translateX(100%);
}
</style>
