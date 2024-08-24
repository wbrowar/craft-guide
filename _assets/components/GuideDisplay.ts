import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('guide-display')
export class GuideDisplay extends LitElement {

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
      <p>Guide Display</p>
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
    'guide-display': GuideDisplay
  }
}
