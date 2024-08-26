import {html, LitElement, TemplateResult} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {log} from "../utils/console.ts";
import {guides, settings, userOperations} from "../globals.ts";
import {copyToClipboard} from "../utils/clipboard.ts";

@customElement('guide-list')
export class GuideList extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * The CP Trigger config setting used to format CP URLs.
   */
  @property({ attribute: 'cp-trigger' })
  cpTrigger = ''

  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * The CP Trigger config setting used to format CP URLs.
   */
  @property({ attribute: 'table-headers', type: Object })
  tableHeaders: { handle: string; label: string; }[] = []

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * Rows of table data for each guide. Each cell is formatted as an `html` template.
   */
  @state()
  private _rows: TemplateResult[][] = []

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Formats a URI into a relative CP URL.
   */
  private async _copyText(text: string) {
    await copyToClipboard(text)
    window.Craft.cp.displayNotice(this.tMessages.copiedToClipboard)
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    log('cpTrigger', this.cpTrigger)
    log('guides', guides)
    log('settings', settings)

    log('tableHeaders', this.tableHeaders)
    log('labelMessages', this.tMessages)

    this._rows = guides.map((guide) => {
      const items = []

      // Title
      items.push(html`<a href="${guide.viewUrl}">${guide.title}</a>`)

      // Summary
      items.push(html`<p>${guide.summary ?? ''}</p>`)

      // Slug
      items.push(html`
        <div class="code small light copytextbtn" title="${this.tMessages.copyToClipboard}" role="button" @click="${() => this._copyText(`{{ craft.guide.include({ slug: '${guide.slug}' }) }}`)}">
          <span class="copytextbtn__value">${guide.slug}</span>
          <span class="visually-hidden">${this.tMessages.copyToClipboard}</span>
          <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
        </div>
      `)

      // In Guide
      items.push(html`<input type="checkbox" switch name="in-guide-${guide.slug}" />`)

      // Action Items
      const actionItems = []
      if (userOperations.editGuides) {
        actionItems.push(html`<a class="btn small secondary" href="${guide.editUrl}">${this.tMessages.edit}</a>`)
      }
      if (userOperations.deleteGuides) {
        actionItems.push(html`<a class="btn small" href="${guide.deleteUrl}">${this.tMessages.delete}</a>`)
      }
      actionItems.push(html`<a class="btn small" href="${guide.viewUrl}">${this.tMessages.view}</a>`)
      items.push(html`<div class="buttons">${actionItems.map(item => item)}</div>`)

      return items
    })

    log('rows', this._rows)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    const tableHeaders = this.tableHeaders.map((header) => {
      if (header.handle === 'inGuide') {
        return html`<th><span>${ header.label }</span> <span class="info">${this.tMessages.tooltipInGuide}</span></th>`
      } else if (header.handle === 'slug') {
        return html`<th><span>${ header.label }</span> <span class="info">${this.tMessages.tooltipSlug}</span></th>`
      }

      return html`<th>${ header.label }</th>`
    })

    return html`
      <div class="tableview tablepane">
        <table class="data fullwidth">
          <thead>${ tableHeaders }</thead>
          <tbody>
            ${ this._rows.map((row) => html`<tr>
              ${ row.map((item) => html`<td>${item}</td>`) }
            </tr>`) }
          </tbody>
        </table>
      </div>
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
    'guide-list': GuideList
  }
}
