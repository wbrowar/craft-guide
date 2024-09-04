import { css, html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('guide-ui-element')
export class GuideUIElement extends LitElement {
  /**
   * ===========================================================================
   * CSS
   * ===========================================================================
   */
  static styles = css`
    :host {
    }
    .settings {
      display: flex;
      justify-content: end;
      margin-block-end: var(--m);
    }
  `

  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * TODO
   */
  @property({ attribute: 'group-id', type: String })
  groupId = ''

  /**
   * TODO
   */
  @property({ attribute: 'placement-id', type: Number })
  placementId = -1

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
   * The `contentSource` select field.
   */
  @state()
  private _guideIdSelect: HTMLSelectElement | null = null

  /**
   * TODO
   */
  @state()
  private _guideSelected = false

  /**
   * TODO
   */
  @state()
  private _showSettings = false

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * TODO
   */
  private async _onGuideIdSelected(guideId: string) {
    if (!this._guideSelected) {
      if (guideId === '__none__') {
      } else {
        const params = {
          access: 'all',
          group: 'uiElement',
          groupId: this.groupId,
          guideId,
        }

        if (this.placementId) {
          params.id = this.placementId
        }

        await window.Craft?.postActionRequest(
          'guide/placement/save-placement',
          {
            data: params,
          },
          (response: object, textStatus: string) => {
            if (textStatus === 'success') {
              window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess)

              this._guideSelected = true
            }
          }
        )
      }
    }
  }

  /**
   * TODO
   */
  private _onSettingsButtonClicked() {
    this._showSettings = !this._showSettings
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    this._guideIdSelect = this.querySelector('guide-ui-element select[name="guideId"]')

    // Show or hide fields based on selected `contentSource` value.
    if (this._guideIdSelect) {
      this._guideIdSelect.addEventListener('change', () => {
        this._onGuideIdSelected(this._guideIdSelect?.value as string)
      })
    }

    this.querySelector('button.settings')?.addEventListener('click', () => this._onSettingsButtonClicked())
  }

  disconnectedCallback() {
    this.querySelector('button.settings')?.removeEventListener('click', () => this._onSettingsButtonClicked())

    super.disconnectedCallback()
  }

  render() {
    return html`
      ${!this._guideSelected ? html`<div class="settings"><slot name="settings-button"></slot></div>` : nothing}
      ${this._showSettings && !this._guideSelected ? html`<slot name="settings-display"></slot>` : nothing}
      ${this._showSettings && this._guideSelected ? html`<slot name="guide-selected"></slot>` : nothing}
      ${!this._showSettings ? html`<slot name="guide-display"></slot>` : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-ui-element': GuideUIElement
  }
}
