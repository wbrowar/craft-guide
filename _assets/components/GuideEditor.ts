import {css, html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('guide-editor')
export class GuideEditor extends LitElement {
  /**
   * =========================================================================
   * CSS
   * =========================================================================
   */
  static styles = css`
    @layer guide.page {
      :host {
        background-color: red;
      }
      guide-editor {
        background-color: red;
      }
    }
  `

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
      <slot name="settings"></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-editor': GuideEditor
  }
}
