import { LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { guides, showGuideSlideout } from '../globals.ts'

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
   * TODO
   */
  @property({ attribute: 'element-id', type: Number })
  elementId = 0

  /**
   * TODO
   */
  @property({ attribute: 'group-handle', type: String })
  groupHandle = ''

  /**
   * The slug of the guide being opened in the slideout.
   * If `docsButton` is true, a local Twig file will be loaded instead of a guide.
   */
  @property({ attribute: 'page-slug', type: String })
  slug = ''

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
   * Display an error when `slug` doesn’t exist.
   */
  @state()
  private _isValid = false

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Formats a URI into a relative CP URL.
   */
  private _onButtonClick() {
    if (this._isValid) {
      showGuideSlideout({ docs: this.docs, elementId: this.elementId, groupHandle: this.groupHandle, slug: this.slug })
    } else {
      window.Craft.cp.displayError(this.tMessages.guideSlideoutSlugError?.replace('[slug]', this.slug))
    }
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    if (this.docs) {
      this._isValid = true
    } else {
      this._isValid = true
      this.slug.split('|').forEach((slug) => {
        // If it continues to be valid and a guide with the slug can be found then keep the `_isValid` setting to `true`.
        if (this._isValid && guides.find((guide) => guide.slug === slug) !== undefined) {
          this._isValid = true
        } else {
          this._isValid = false
        }
      })
    }

    const guideButton = this.querySelector('button:not([data-guide-slidout-button-button])')
    guideButton?.addEventListener('click', () => this._onButtonClick())
    guideButton?.setAttribute('data-guide-slidout-button-button', '')
  }

  disconnectedCallback() {
    const guideButton = this.querySelector('button')
    guideButton?.removeEventListener('click', () => this._onButtonClick())

    super.disconnectedCallback()
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
