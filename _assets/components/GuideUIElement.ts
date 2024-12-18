import { css, html, LitElement, nothing, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Placement, PlacementAccess, PlacementGroup } from '../types.ts'
import { log } from '../utils/console.ts'

@customElement('guide-ui-element')
export class GuideUIElement extends LitElement {
  /**
   * ===========================================================================
   * CSS
   * ===========================================================================
   */
  static styles = css`
    :host(:hover) {
      --settings-opacity: 1;
    }
    .settings {
      float: inline-end;
      appearance: none;
      position: relative;
      margin-block-end: var(--m);
      margin-inline-start: var(--m);
      padding: 7px;
      height: 30px;
      width: 30px;
      background-color: transparent;
      border: none;
      opacity: var(--settings-opacity, 0);
      transition: opacity calc(var(--guide-duration) * 2) ease-out;
      cursor: pointer;
      z-index: 1;

      &:focus {
        --settings-opacity: 1;
      }
    }
  `

  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * The `groupId` column for the placement being rendered. This matches up to the UID of the UI Element.
   */
  @property({ attribute: 'group-id', type: String })
  groupId = ''

  /**
   * The ID of the placement being rendered.
   */
  @property({ attribute: 'placement-id', type: Number })
  placementId = -1

  /**
   * If set to `true`, the default guide will be shown if no other guide has been selected.
   * If set to `false` and there are guides enabled for the UI Elements group, the guide select field will appear by default.
   */
  @property({ attribute: 'show-default-guide', type: Boolean })
  showDefaultGuide = false

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
   * The `guideIdSelect` select field.
   */
  @state()
  private _guideIdSelect: HTMLSelectElement | null = null

  /**
   * Tracks whether a guide was selected by the `guideIdSelect` field. If a guide was selected, the UI Element will be hidden until a page refresh.
   */
  @state()
  private _guideSelected = false

  /**
   * If set to `true`, the settings to select a guide will be made available when there are guides enabled in the UI Element group and when the user has the correct permission.
   */
  @state()
  private _showSettings = false

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Handles selecting a guide and updating the placement with the selected `guideId`.
   */
  private async _onGuideIdSelected(guideId: string) {
    log('slelected', guideId)
    if (!this._guideSelected) {
      if (guideId === '__none__' && this.placementId) {
        await window.Craft?.postActionRequest(
          'guide/placement/delete-placement',
          {
            data: {
              id: this.placementId,
            },
          },
          async (_response: object, textStatus: string) => {
            if (textStatus === 'success') {
              window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess)

              this._guideSelected = true
            }
          }
        )
      } else {
        const params: Partial<Placement> = {
          access: PlacementAccess.All,
          group: PlacementGroup.UiElement,
          groupId: this.groupId,
          guideId: parseInt(guideId),
        }

        if (this.placementId) {
          params.id = this.placementId
        }

        await window.Craft?.postActionRequest(
          'guide/placement/save-placement',
          {
            data: params,
          },
          (_response: object, textStatus: string) => {
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
   * Toggle the settings that let you pick a new guide for the UI Element.
   */
  private _onSettingsButtonClicked() {
    this._showSettings = !this._showSettings
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
  }

  connectedCallback() {
    super.connectedCallback()

    if (!this.placementId && !this.showDefaultGuide) {
      this._showSettings = true
    }

    this._guideIdSelect = this.querySelector('guide-ui-element .field[data-attribute="guideId"] select')

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
      ${!this._guideSelected && (this.placementId || this.showDefaultGuide)
        ? html`<button
            class="settings"
            type="button"
            title="${this.tMessages.settings}"
            @click="${this._onSettingsButtonClicked}"
          >
            <slot name="settings-button"></slot>
          </button>`
        : nothing}
      ${this._showSettings && !this._guideSelected ? html`<slot name="settings-display"></slot>` : nothing}
      ${this._showSettings && this._guideSelected ? html`<slot name="guide-selected"></slot>` : nothing}
      ${!this._showSettings && (this.placementId || this.showDefaultGuide)
        ? html`<slot name="guide-display"></slot>`
        : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-ui-element': GuideUIElement
  }
}
