import { html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { EditorComponent, EditorTabGroup } from '../types.ts'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

@customElement('guide-editor-component-list-item')
export class GuideEditorComponentListItem extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Changes functionality based on if guide is new or an existing guide.
   */
  @property({ attribute: 'component-data', type: Object })
  data: EditorComponent | undefined = undefined

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
   * The code editor input for the Content tab.
   */
  @state()
  private _showProps = false

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Inserts component code into content editor.
   */
  private _insertTextIntoEditor(textToInsert: string, editorHandle: 'content' | 'css' | 'javascript') {
    let editor

    if (editorHandle === 'content') {
      editor = globalThis.monacoEditorInstances.contentEditor
    } else if (editorHandle === 'css') {
      editor = globalThis.monacoEditorInstances.contentCss
    } else if (editorHandle === 'javascript') {
      editor = globalThis.monacoEditorInstances.contentJavascript
    }

    const guideSlug = document.querySelector('guide-editor')?.dataset.guideSlug
    if (guideSlug) {
      const now = new Date()
      textToInsert = textToInsert
        .replace(/REPLACE_DATE/g, now.toISOString().split('T')[0])
        .replace(/REPLACE_GUIDE_SLUG/g, guideSlug)
    }

    if (editor) {
      const lineCount = editor.getModel().getLineCount()
      const lastLineLength = editor.getModel().getLineMaxColumn(lineCount)
      const selection = editor.getSelection()
      const id = { major: 1, minor: 1 }
      const op = {
        identifier: id,
        range: {
          startLineNumber: selection?.selectionStartLineNumber ?? lineCount,
          startColumn: selection?.selectionStartColumn ?? lastLineLength,
          endLineNumber: selection?.endLineNumber ?? lineCount,
          endColumn: selection?.endColumn ?? lastLineLength,
        },
        text: textToInsert,
        forceMoveMarkers: true,
      }
      editor.executeEdits('my-source', [op])
      editor.focus()
    }
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    let image
    let summary

    if (this.data?.thumbnail1x && this.data?.thumbnail2x) {
      image = html`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`
    } else {
      image = nothing
    }

    if (this.data?.summary) {
      summary = [EditorTabGroup.Guides, EditorTabGroup.Images].includes(this.data?.group as EditorTabGroup)
        ? html`<p>${this.data.summary}</p>`
        : html`${unsafeHTML(this.data.summary)}`
    } else {
      summary = nothing
    }

    return html`
      ${this.data
        ? html`
            <div>
              ${image}
              <div class="readable">
                <h3>${this.data.title}</h3>
                ${summary}
              </div>
            </div>
            <div class="buttons">
              <button
                class="btn icon add secondary"
                type="button"
                @click="${() => this._insertTextIntoEditor(this.data?.contentCode ?? '', 'content')}"
              >
                ${this.tMessages.addContent}
              </button>
              ${this.data.cssCode
                ? html`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--green-300);"
                    @click="${() => this._insertTextIntoEditor(this.data?.cssCode ?? '', 'css')}"
                  >
                    ${this.tMessages.addCss}
                  </button>`
                : nothing}
              ${this.data.javascriptCode
                ? html`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${() => this._insertTextIntoEditor(this.data?.javascriptCode ?? '', 'javascript')}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`
                : nothing}
              ${this.data.props
                ? html`<button
                    class="btn icon"
                    data-icon="${this._showProps ? 'eye-slash' : 'eye'}"
                    type="button"
                    @click="${() => (this._showProps = !this._showProps)}"
                  >
                    ${this.tMessages.variables}
                  </button>`
                : nothing}
            </div>
            ${this.data.props && this._showProps
              ? html`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map((key) => {
                      return html`<dt class="guide-select-string">${key}</dt>
                        <dd>${this.data?.props?.[key]}</dd>`
                    })}
                  </dl>`
              : nothing}
          `
        : nothing}
    `
  }

  /**
   * Changes the render mode for this component from shadow DOM to light DOM.
   */
  protected createRenderRoot() {
    return this
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-editor-component-list-item': GuideEditorComponentListItem
  }
}
