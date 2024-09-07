import { css, html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { kebab, proEdition } from '../globals.ts'
import { EditorTabGroup, GuideContentSource } from '../types.ts'

@customElement('guide-editor')
export class GuideEditor extends LitElement {
  /**
   * ===========================================================================
   * CSS
   * ===========================================================================
   */
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: var(--grid-template-columns, minmax(1px, 1fr));
      position: relative;

      @container guide-editor (width > 800px) {
        & {
          --grid-template-columns: 400px minmax(1px, 1fr);
          gap: calc(var(--xl) * 2);
        }
      }
    }
    .guide-editor-content-buttons {
      display: grid;
      grid-template-columns: repeat(var(--guide-editor-content-buttons-columns, 1), 1fr);
      margin-block-end: 25px;
      padding-block-end: 20px;
      border-bottom: 1px solid var(--gray-200);

      & > button {
        --guide-tab-icon-svg-fill: var(--gray-550);
        display: flex;
        appearance: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        height: 50px;
        background-color: transparent;
        border: none;
        font-weight: 700;
        color: var(--ui-control-color);
        cursor: pointer;

        &:hover {
          color: var(--black);
          --guide-tab-icon-svg-fill: var(--black);
        }
        &.active {
          color: var(--primary-color);
          --guide-tab-icon-svg-fill: var(--primary-color);
        }
      }

      &:has(:nth-child(4)) {
        --guide-editor-content-buttons-columns: 5;
      }
    }
    .guide-editor-content-editor {
      & > * {
        position: sticky;
        top: calc(var(--header-height) + 0.5rem);
      }
    }
  `

  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Changes functionality based on if guide is new or an existing guide.
   */
  @property({ attribute: 'is-new', type: Boolean })
  isNew = false

  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * The component lists that are available for editing.
   */
  @state()
  private _componentLists = ['settings']

  /**
   * The code editor input for the Content tab.
   */
  @state()
  private _contentEditor: typeof globalThis.monacoEditorInstances.contentEditor | null = null

  /**
   * Indicates that the value of `contentSource` is set to `field`.
   */
  @state()
  private _contentSourceIsField = false

  /**
   * The `contentSource` select field.
   */
  @state()
  private _contentSourceSelect: HTMLSelectElement | null = null

  /**
   * The wrapper of the `contentUrl` field.
   */
  @state()
  private _contentUrlField: HTMLElement | null = null

  /**
   * The wrapper of the `renderMarkdown` field.
   */
  @state()
  private _renderMarkdownField: HTMLElement | null = null

  /**
   * The selected tab group when on the Guide Editor Content tab.
   */
  @state()
  private _selectedTabGroup = EditorTabGroup.Settings

  /**
   * Keeps track of whether the slug field has been edited.
   */
  @state()
  private _slugHasBeenEdited = false

  /**
   * The `slug` input field.
   */
  @state()
  private _slugInput: HTMLInputElement | null = null

  /**
   * The wrapper of the `renderMarkdown` field.
   */
  @state()
  private _templateField: HTMLElement | null = null

  /**
   * The `title` input field.
   */
  @state()
  private _titleInput: HTMLInputElement | null = null

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Changes fields displayed based on the selected `contentSource` value.
   */
  private _onContentSourceChange(selectedValue: GuideContentSource) {
    switch (selectedValue) {
      case GuideContentSource.Field:
        this._contentUrlField?.classList.add('hidden')
        this._renderMarkdownField?.classList.remove('hidden')
        this._templateField?.classList.add('hidden')
        this._contentSourceIsField = true
        break
      case GuideContentSource.Iframe:
        this._contentUrlField?.classList.remove('hidden')
        this._renderMarkdownField?.classList.add('hidden')
        this._templateField?.classList.add('hidden')
        this._contentSourceIsField = false
        break
      case GuideContentSource.Template:
        this._contentUrlField?.classList.add('hidden')
        this._renderMarkdownField?.classList.add('hidden')
        this._templateField?.classList.remove('hidden')
        this._contentSourceIsField = false
        break
    }
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    // Find all field wrappers and input
    this._contentSourceSelect = this.querySelector('guide-editor select[name="contentSource"]')
    this._contentUrlField = this.querySelector('guide-editor #contentUrl-field')
    this._renderMarkdownField = this.querySelector('guide-editor #renderMarkdown-field')
    this._slugInput = this.querySelector('guide-editor input[name="slug"]')
    this._templateField = this.querySelector('guide-editor #template-field')
    this._titleInput = this.querySelector('guide-editor input[name="title"]')

    // Update guide slug for new guides.
    if (this.isNew && this._titleInput) {
      this._titleInput.addEventListener('input', () => {
        if (!this._slugHasBeenEdited && this._slugInput) {
          this._slugInput.value = kebab(this._titleInput?.value ?? '')
        }
      })
    }

    // Make sure slug is formatted correctly and update all GuideCopyTextButton components on the page.
    if (this._slugInput) {
      this._slugInput.addEventListener('blur', () => {
        // Format slug value
        if (this._slugInput) {
          this._slugHasBeenEdited = true
          this._slugInput.value = kebab(this._slugInput.value)

          // Update GuideCopyTextButton values
          const copyTextButtons = document.querySelectorAll('guide-copy-text-button')

          copyTextButtons.forEach((button) => {
            button.copyText = this._slugInput!.value
          })
        }
      })
    }

    // Show or hide fields based on selected `contentSource` value.
    if (this._contentSourceSelect) {
      this._contentSourceSelect.addEventListener('change', () => {
        this._onContentSourceChange(this._contentSourceSelect?.value as GuideContentSource)
      })
      this._onContentSourceChange(this._contentSourceSelect.value as GuideContentSource)
    }

    // Set up code editors and set their starting position to the end of the current content.
    this._contentEditor = globalThis.monacoEditorInstances.contentEditor

    if (this._contentEditor) {
      const lineCount = this._contentEditor.getModel().getLineCount()
      const lastLineLength = this._contentEditor.getModel().getLineMaxColumn(lineCount)

      this._contentEditor.setPosition({ column: lastLineLength, lineNumber: lineCount })
    }

    // Add component lists to `_componentLists`.
    if (this.querySelector('#editor-component-list-components')) {
      this._componentLists.push('components')
    }
    if (this.querySelector('#editor-component-list-guides')) {
      this._componentLists.push('guides')
    }
    if (this.querySelector('#editor-component-list-images')) {
      this._componentLists.push('images')
    }
    if (this.querySelector('#editor-component-list-snippets')) {
      this._componentLists.push('snippets')
    }
  }

  render() {
    const contentButtons = []
    if (this._componentLists.includes(EditorTabGroup.Components)) {
      contentButtons.push(html`
        <button
          class="${this._selectedTabGroup === EditorTabGroup.Components ? 'active' : nothing}"
          type="button"
          title="${this.tMessages.components}"
          @click="${() => (this._selectedTabGroup = EditorTabGroup.Components)}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `)
    }
    if (this._componentLists.includes(EditorTabGroup.Images)) {
      contentButtons.push(html`
        <button
          class="${this._selectedTabGroup === EditorTabGroup.Images ? 'active' : nothing}"
          type="button"
          title="${this.tMessages.images}"
          @click="${() => (this._selectedTabGroup = EditorTabGroup.Images)}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `)
    }
    if (this._componentLists.includes(EditorTabGroup.Guides)) {
      contentButtons.push(html`
        <button
          class="${this._selectedTabGroup === EditorTabGroup.Guides ? 'active' : nothing}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${() => (this._selectedTabGroup = EditorTabGroup.Guides)}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `)
    }
    if (this._componentLists.includes(EditorTabGroup.Snippets)) {
      contentButtons.push(html`
        <button
          class="${this._selectedTabGroup === EditorTabGroup.Snippets ? 'active' : nothing}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${() => (this._selectedTabGroup = EditorTabGroup.Snippets)}"
        >
          <slot name="icon-snippets"></slot><span>${this.tMessages.snippets}</span>
        </button>
      `)
    }

    let content = html`<div></div>`

    if (this._contentSourceIsField) {
      content = html`<slot name="editor"></slot>`
    }

    return html`
      <aside>
        <div
          class="guide-editor-content-buttons"
          style="--guide-editor-content-buttons-columns: ${this._componentLists.length};"
        >
          <button
            class="${this._selectedTabGroup === EditorTabGroup.Settings ? 'active' : nothing}"
            type="button"
            title="${this.tMessages.settings}"
            @click="${() => (this._selectedTabGroup = EditorTabGroup.Settings)}"
          >
            <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
          </button>
          ${proEdition && this._contentSourceIsField ? contentButtons : nothing}
        </div>
        ${this._selectedTabGroup === EditorTabGroup.Settings ? html`<slot name="settings"></slot>` : nothing}
        ${this._selectedTabGroup === EditorTabGroup.Components ? html`<slot name="components"></slot>` : nothing}
        ${this._selectedTabGroup === EditorTabGroup.Images ? html`<slot name="images"></slot>` : nothing}
        ${this._selectedTabGroup === EditorTabGroup.Guides ? html`<slot name="guides"></slot>` : nothing}
        ${this._selectedTabGroup === EditorTabGroup.Snippets ? html`<slot name="snippets"></slot>` : nothing}
      </aside>
      <div class="guide-editor-content-editor"><div>${content}</div></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-editor': GuideEditor
  }
}
