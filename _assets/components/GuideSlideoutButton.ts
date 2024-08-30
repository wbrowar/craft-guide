import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {showGuideSlideout} from "../globals.ts";
import {log} from "../utils/console.ts";

@customElement('guide-slideout-button')
export class GuideSlideoutButton extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Determines if button should show documentation pages built into Guide.
   */
  @property({ attribute: 'docs-page', type: Boolean })
  docs = false

  /**
   * The slug of the guide being opened in the slideout.
   * If `docsButton` is true, a local Twig file will be loaded instead of a guide.
   */
  @property({ attribute: 'page-slug', type: String })
  slug = ''

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Formats a URI into a relative CP URL.
   */
  private _onButtonClick() {
    log('sdaf', this.docs, this.slug)
    showGuideSlideout({ docs: this.docs, slug: this.slug })
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    const guideButton = this.querySelector('button')
    guideButton?.addEventListener('click', () => this._onButtonClick())
  }

  disconnectedCallback() {
    super.disconnectedCallback()

    const guideButton = this.querySelector('button')
    guideButton?.removeEventListener('click', () => this._onButtonClick())
  }

  render() {
    return html``
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
    'guide-slideout-button': GuideSlideoutButton
  }
}
