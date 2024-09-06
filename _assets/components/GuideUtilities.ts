import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { log } from '../utils/console.ts'
import { Guide } from '../types.ts'
import { copyToClipboard } from '../utils/clipboard.ts'

@customElement('guide-utilities')
export class GuideUtilities extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 'guides-data', type: Object })
  guidesData: { guides: Record<string, Guide> } = { guides: {} }

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
   * TODO
   */
  @state()
  private _exportData = ''

  /**
   * TODO
   */
  @state()
  private _selectedGuides: string[] = []

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * TODO
   */
  private async _copyExportData() {
    await copyToClipboard(this._exportData)
    window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)
  }

  /**
   * TODO
   */
  private _formatExportData() {
    const exportData: { guides: Guide[] } = { guides: [] }
    exportData.guides =
      this._selectedGuides.map((guideSlug) => {
        return this.guidesData.guides[guideSlug]
      }) ?? []

    this._exportData = JSON.stringify(exportData)

    log('guides', this.guidesData, exportData)
  }

  /**
   * TODO
   */
  private async _importImportData() {
    const importTextarea: HTMLTextAreaElement | null = this.querySelector('#import-data')

    if (importTextarea?.value) {
      await window.Craft.postActionRequest(
        'guide/import-export/import-json',
        { guideData: importTextarea.value },
        (response: { error: string; status: string }) => {
          log('Saving placement', response)
          if (response.status === 'success') {
            window.Craft.cp.displayNotice(this.tMessages.guidesImported)
          } else {
            window.Craft.cp.displayError(response.error)
          }
        }
      )
    }
  }

  /**
   * TODO
   */
  private _onGuideCheckboxInput(guideSlug: string) {
    if (this._selectedGuides.includes(guideSlug)) {
      const guideSlugIndex = this._selectedGuides.indexOf(guideSlug)
      this._selectedGuides.splice(guideSlugIndex, 1)
    } else {
      this._selectedGuides.push(guideSlug)
    }
    this._formatExportData()
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    this._formatExportData()
  }

  render() {
    return html`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      ${Object.keys(this.guidesData.guides).map((key) => {
        const guide = this.guidesData.guides[key]

        return html`<ul>
          <li>
            <input
              id="guide-for-export-${guide.slug}"
              name="guide-for-export-${guide.slug}"
              type="checkbox"
              ?checked="${this._selectedGuides.includes(guide.slug)}"
              @input="${() => this._onGuideCheckboxInput(guide.slug)}"
            />
            <label for="guide-for-export-${guide.slug}">${guide.title}</label>
          </li>
        </ul>`
      })}

      <p><b>${this.tMessages.step2Title}</b> ${this.tMessages.step2Text}</p>

      <div class="field">
        <div class="heading">
          <label for="export-data">${this.tMessages.exportData}</label>
        </div>
        <div class="input">
          <textarea
            class="text fullwidth nicetext"
            readonly
            name="export-data"
            id="export-data"
            rows="10"
            .value=${this._exportData}
          ></textarea>
        </div>
      </div>

      <button class="btn icon submit" data-icon="clipboard" type="button" @click="${this._copyExportData}">
        ${this.tMessages.exportButton}
      </button>

      <p><b>${this.tMessages.step3Title}</b> ${this.tMessages.step3Text}</p>

      <p><b>${this.tMessages.step4Title}</b> ${this.tMessages.step4Text}</p>

      <div class="field">
        <div class="heading">
          <label for="import-data">${this.tMessages.importData}</label>
        </div>
        <div class="input">
          <textarea class="text fullwidth nicetext" name="import-data" id="import-data" rows="10"></textarea>
        </div>
      </div>

      <button class="btn icon submit" data-icon="download" type="button" @click="${this._importImportData}">
        ${this.tMessages.importButton}
      </button>
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
    'guide-utilities': GuideUtilities
  }
}
