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
   * The CP Trigger config setting used to format CP URLs
   */
  @property({ attribute: 'cp-trigger' })
  cpTrigger = ''

  /**
   * The CP Trigger config setting used to format CP URLs
   */
  @property({ attribute: 'label-messages', type: Object })
  labelMessages: Record<string, string> = {}

  /**
   * The CP Trigger config setting used to format CP URLs
   */
  @property({ attribute: 'table-headers', type: Object })
  tableHeaders: { handle: string; label: string; }[] = []

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * TODO
   */
  @state()
  private _headers: (TemplateResult | string)[] = []
  /**
   * TODO
   */
  @state()
  private _rows: TemplateResult[][] = []

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Formats a URI into a relative CP URL
   */
  private async _copyText(text: string) {
    log('copy text', text)

    await copyToClipboard(text)
    window.Craft.cp.displayNotice(this.labelMessages.copiedToClipboard)
  }
  /**
   * Formats a URI into a relative CP URL
   */
  private async _cpUrl(uri: string) {
    return this.cpTrigger ? `/${this.cpTrigger}/${uri}` : `/${uri}`;
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    log('cpTrigger', this.cpTrigger)
    log('cpUrl', this._cpUrl('guide/new'))
    log('guides', guides)
    log('settings', settings)

    log('tableHeaders', this.tableHeaders)
    log('labelMessages', this.labelMessages)

    this._headers = this.tableHeaders.map(header => header.handle)

    this._rows = guides.map((guide) => {
      const items = []

      // Title
      items.push(html`<a href="${guide.viewUrl}">${guide.title}</a>`)

      // Summary
      items.push(html`<p>${guide.summary ?? ''}</p>`)

      // Slug
      // items.push(html`<span class="guide-select-string">${guide.slug}</span>`)

      items.push(html`
        <div class="code small light copytextbtn" title="${this.labelMessages.copyToClipboard}" role="button" @click="${() => this._copyText(`{{ craft.guide.include({ slug: '${guide.slug}' }) }}`)}">
          <span class="copytextbtn__value">${guide.slug}</span>
          <span class="visually-hidden">${this.labelMessages.copyToClipboard}</span>
          <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
        </div>
      `)

      // In Guide
      items.push(html`<input type="checkbox" switch name="in-guide-${guide.slug}" />`)

      // Action Items
      const actionItems = []
      if (userOperations.editGuides) {
        actionItems.push(html`<a class="btn small secondary" href="${guide.editUrl}">${this.labelMessages.edit}</a>`)
      }
      if (userOperations.deleteGuides) {
        actionItems.push(html`<a class="btn small" href="${guide.deleteUrl}">${this.labelMessages.delete}</a>`)
      }
      actionItems.push(html`<a class="btn small" href="${guide.viewUrl}">${this.labelMessages.view}</a>`)
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
      if (header.handle === 'slug') {
        return html`<th><span>${ header.label }</span> <span class="info">${this.labelMessages.tooltipSlug}</span></th>`
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
