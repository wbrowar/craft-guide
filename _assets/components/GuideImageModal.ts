import { LitElement, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('guide-image-modal')
export class GuideImageModal extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * TODO
   */
  @property({ attribute: 'modal-id', type: String })
  modalId = ''

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * TODO
   */
  @state()
  private _image: HTMLImageElement | null = null

  /**
   * TODO
   */
  @state()
  private _modal: any = null

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Inserts component code into content editor.
   */
  private _enlargeImage() {
    this._modal?.show()
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
    this._image = this.querySelector('img')

    if (this._image) {
      this._image.addEventListener('click', () => this._enlargeImage())

      const container = this.querySelector(`#${this.modalId}`)

      this._modal = new Garnish.Modal(container, {
        autoShow: false,
      })
    }
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
    'guide-image-modal': GuideImageModal
  }
}