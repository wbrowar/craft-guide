import { html, LitElement, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { copyToClipboard } from '../utils/clipboard.ts'

@customElement('guide-copy-text-button')
export class GuideCopyTextButton extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * The CP Trigger config setting used to format CP URLs.
   */
  @property({ attribute: 'copy-text', type: String })
  copyText = ''

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * TODO
   */
  private async _copyTextToClipboard(text: string) {
    await copyToClipboard(text)
    window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${text}`)
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  async connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`${this.copyText && this.tMessages
      ? html`
          <div
            class="code small light copytextbtn"
            title="${this.tMessages.copyToClipboard}"
            role="button"
            @click="${() => this._copyTextToClipboard(this.copyText)}"
          >
            <span class="copytextbtn__value">${this.copyText}</span>
            <span class="visually-hidden">${this.tMessages.copyToClipboard}</span>
            <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
          </div>
        `
      : nothing}`
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
    'guide-copy-text-button': GuideCopyTextButton
  }
}
