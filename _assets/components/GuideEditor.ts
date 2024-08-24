import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('guide-editor')
export class GuideEditor extends LitElement {

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
      <p>Guide Editor</p>
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
    'guide-editor': GuideEditor
  }
}
