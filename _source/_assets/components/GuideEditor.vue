<template>
  <form
    ref="form"
    class="g-grid g-grid-cols-[minmax(200px,400px),minmax(250px,1fr)] g-relative g-overflow-hidden"
    action=""
    method="post"
    @submit.prevent
    v-if="pageForm && guide"
  >
    <input type="hidden" name="action" :value="pageForm.action" />
    <input type="hidden" name="authorId" :value="pageForm.authorId" />
    <input type="hidden" name="content" :value="editorContent" />
    <input type="hidden" name="id" :value="guide.id" v-if="guide.id > 0" />
    <input type="hidden" name="redirect" :value="pageForm.redirect" v-if="pageForm.redirect" />
    <input type="hidden" :name="pageForm.csrf?.split('|')?.[0]" :value="pageForm.csrf?.split('|')?.[1]" />
    <div
      class="
        g-grid g-grid-rows-[60px,1fr] g-relative g-bg-white g-rounded-l-lg g-min-h-[850px] g-h-[70vh] g-overflow-x-auto
      "
    >
      <div class="g-sticky g-top-0 g-bg-white">
        <ul class="g-flex g-flex-nowrap">
          <li class="g-flex-grow" :class="currentTab === 'publishing' ? 'g-bg-select-dark' : 'g-bg-select-light'">
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'publishing'">publishing</button>
          </li>
          <li
            class="g-flex-grow"
            :class="currentTab === 'components' ? 'g-bg-select-dark' : 'g-bg-select-light'"
            v-if="contentSource === 'field'"
          >
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'components'">components</button>
          </li>
          <li
            class="g-flex-grow"
            :class="currentTab === 'images' ? 'g-bg-select-dark' : 'g-bg-select-light'"
            v-if="contentSource === 'field'"
          >
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'images'">images</button>
          </li>
          <li
            class="g-flex-grow"
            :class="currentTab === 'guides' ? 'g-bg-select-dark' : 'g-bg-select-light'"
            v-if="contentSource === 'field'"
          >
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'guides'">guides</button>
          </li>
          <li
            class="g-flex-grow"
            :class="currentTab === 'snippets' ? 'g-bg-select-dark' : 'g-bg-select-light'"
            v-if="contentSource === 'field'"
          >
            <button class="g-w-full g-h-[60px]" type="button" @click="currentTab = 'snippets'">snippets</button>
          </li>
          <li
            class="g-flex-grow"
            :class="currentTab === 'utility-classes' ? 'g-bg-select-dark' : 'g-bg-select-light'"
            v-if="contentSource === 'field'"
          >
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
            ref="titleField"
            required
            label="Title"
            name="title"
            placeholder="Guide Title"
            @value-changed="onTitleChanged"
          />
          <CraftFieldText
            ref="slugField"
            required
            label="Slug"
            name="slug"
            placeholder="guide-title"
            @focused="slugFocused = true"
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
            @value-changed="onContentSourceChanged"
          />
          <CraftFieldSelect
            ref="templateField"
            required
            :instructions="`Load a template found in your <strong>${settings.templatePath}</strong> directory.`"
            label="Template"
            name="template"
            :options="templatesFieldOptions"
            @value-changed="onGuideTemplateChanged"
            v-show="contentSource === 'template'"
          />
          <CraftFieldText
            ref="contentUrlField"
            required
            instructions="A URL that is loaded in an iframe."
            label="Page URL"
            name="contentUrl"
            :field-attributes="{
              maxlength: 255,
            }"
            @value-changed="onContentUrlChanged"
            v-show="contentSource === 'iframe'"
          />
          <CraftFieldText
            ref="summaryField"
            instructions="Describes the guide in the Organizer."
            label="Summary"
            name="summary"
          />
        </div>
        <div class="g-p-6" v-show="currentTab === 'utility-classes'">
          <h2>Utility Classes</h2>
          <p class="g-text-text">You may use the classes below to style and lay out your guide content.</p>
          <UtilityClassesSearch />
        </div>
        <ul v-show="tabComponents.length">
          <div class="g-p-6" v-if="currentTab === 'components'">
            <h2>Components</h2>
            <p class="g-text-text">Add basic building blocks to your guide using Twig and Vue components.</p>
          </div>
          <div class="g-p-6" v-if="currentTab === 'guides'">
            <h2>Guides</h2>
            <p class="g-text-text">Include content from other guides into your guide.</p>
          </div>
          <div class="g-p-6" v-if="currentTab === 'images'">
            <h2>Images</h2>
            <p class="g-text-text">Display screenshots and other images located in your Guide Asset Volume.</p>
          </div>
          <div class="g-p-6" v-if="currentTab === 'snippets'">
            <h2>Snippets</h2>
            <p class="g-text-text">
              Add these snippets to inform your authors of missing content and provide contextual tips. Edit them to fit
              your project.
            </p>
          </div>
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
    <div class="g-min-h-[850px] g-h-[70vh] g-bg-matrix-block g-rounded-r-lg g-relative g-overflow-hidden">
      <VAceEditor
        ref="editor"
        v-model:value="editorContent"
        class="g-min-h-[850px] g-h-[70vh] g-rounded-r-lg"
        wrap
        lang="twig"
        :options="{
          displayIndentGuides: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          showInvisibles: false,
          tabSize: 2,
        }"
        theme="tomorrow_night_bright"
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
  </form>

  <Teleport to="#guide-action-buttons">
    <button class="btn disabled" :title="formErrors.join(' ')" v-if="formErrors.length > 0">Save</button>
    <button class="btn submit" type="button" @click="submitForm" v-else>Save</button>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { kebab, log, table } from '../globals';
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
    formData: { type: String, required: true },
    guideData: { type: String, required: true },
    guideComponents: { type: Array as PropType<EditorComponent[]>, required: true },
    isNew: { type: Boolean, default: false },
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
      pageForm: JSON.parse(props.formData),
      slugFocused: false,
      slugValue: '',
      templatesFieldOptions: [] as Record<string, string>[],
      titleValue: '',
    });

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
      if (this.contentSource === 'iframe' && this.contentUrl === '') {
        errors.push(`A template must be selected.`);
      } else if (this.contentSource === 'template' && this.guideTemplate === '__none__') {
        errors.push(`A template must be selected.`);
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
    onGuideTemplateChanged(newValue) {
      this.guideTemplate = newValue;
    },
    onSlugChanged(newValue) {
      this.slugValue = newValue;
    },
    onTitleChanged(newValue) {
      this.titleValue = newValue;

      if (this.isNew && !this.slugFocused) {
        this.$refs.slugField.setFieldValue(kebab(newValue));
      }
    },
    showDocumentation(payload) {
      this.currentDocs = this.currentDocs?.code === payload.code ? null : payload;
    },
    submitForm() {
      if (!this.formErrors.length) {
        this.$refs.form.submit();
      }
    },
  },
  mounted() {
    const contentEl = document.getElementById('content');
    if (contentEl) {
      contentEl.style.padding = '0px';
    }

    if (this.guide?.contentSource) {
      this.$refs.contentSourceField.setFieldValue(this.guide.contentSource);
    }
    if (this.guide?.content) {
      this.editorContent = this.guide.content;
    }
    if (this.guide?.contentUrl) {
      this.$refs.contentUrlField.setFieldValue(this.guide.contentUrl);
    }
    if (this.guide?.template) {
      this.$refs.templateField.setFieldValue(this.guide.template);
    }
    if (this.guide?.slug) {
      this.$refs.slugField.setFieldValue(this.guide.slug);
    }
    if (this.guide?.title) {
      this.$refs.titleField.setFieldValue(this.guide.title);
    }
    if (this.guide?.summary) {
      this.$refs.summaryField.setFieldValue(this.guide.summary);
    }

    this.$refs.editor._editor.commands.addCommand({
      name: 'saveGuide',
      bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
      exec: () => {
        this.submitForm();
      },
    });

    log('Guide Editor loaded for guide');
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
