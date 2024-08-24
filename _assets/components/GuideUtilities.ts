import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('guide-utilities')
export class GuideUtilities extends LitElement {

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    return html`
      <p>Guide Utilities</p>
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
