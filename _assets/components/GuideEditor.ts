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
      <aside>
        <slot name="settings"></slot>
        <slot name="components"></slot>
        <slot name="images"></slot>
        <slot name="guides"></slot>
        <slot name="snippets"></slot>
      </aside>
      <slot name="editor"></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-editor': GuideEditor
  }
}
