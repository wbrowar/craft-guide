import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { guides, userOperations } from '../globals.ts'
import { copyToClipboard } from '../utils/clipboard.ts'
import { ApiStatus, Placement, PlacementGroup } from '../types.ts'

@customElement('guide-list')
export class GuideList extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * The CP Trigger config setting used to format CP URLs.
   */
  @property({ attribute: 'cp-trigger' })
  cpTrigger = ''

  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * The CP Trigger config setting used to format CP URLs.
   */
  @property({ attribute: 'table-headers', type: Object })
  tableHeaders: { handle: string; label: string }[] = []

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * List of guide placements, used to determine which guides are in the `nav` group.
   */
  @state()
  private _getAllPlacementsStatus: ApiStatus = ApiStatus.Initial

  /**
   * List of guide placements, used to determine which guides are in the `nav` group.
   */
  @state()
  private _placements: Placement[] = []

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Formats a URI into a relative CP URL.
   */
  private async _copyText(text: string) {
    await copyToClipboard(text)
    window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${text}`)
  }

  /**
   * Gets the list of placements from the database and filters them down to only ones in the `nav` group.
   */
  private async _getAllPlacements() {
    this._getAllPlacementsStatus = ApiStatus.Loading
    const response = await window.Craft?.postActionRequest('guide/placement/get-all-placements')

    this._placements = response.filter((placement: Placement) => placement.group === PlacementGroup.Nav)
    this._getAllPlacementsStatus = ApiStatus.Success
  }

  /**
   * Creates a new `nav` placement for the guideId.
   */
  private async _onInGuideDisabled(guideId: number, guideTitle: string) {
    const placement = this._placements.find((placement) => placement.guideId === guideId)
    if (placement) {
      await window.Craft?.postActionRequest(
        'guide/placement/delete-placement',
        {
          data: {
            id: placement.id,
          },
        },
        (response: object, textStatus: string) => {
          if (textStatus === 'success') {
            this._getAllPlacements()
            window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace('[guide]', guideTitle))
          }
        }
      )
    }
  }

  /**
   * Creates a new `nav` placement for the guideId.
   */
  private async _onInGuideEnabled(guideId: number, guideTitle: string) {
    await window.Craft?.postActionRequest(
      'guide/placement/save-placement',
      {
        data: {
          access: 'all',
          group: 'nav',
          guideId,
        },
      },
      (response: object, textStatus: string) => {
        if (textStatus === 'success') {
          this._getAllPlacements()
          window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess?.replace('[guide]', guideTitle))
        }
      }
    )
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  async firstUpdated() {
    await this._getAllPlacements()
  }
  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    const tableHeaders = this.tableHeaders.map((header) => {
      return html`<th>${header.label}</th>`
    })

    const rows = guides.map((guide) => {
      const items = []

      // Title
      items.push(html`<a href="${guide.viewUrl}">${guide.title}</a>`)

      // Summary
      items.push(html`<p>${guide.summary ?? ''}</p>`)

      // Slug
      items.push(html`
        <div
          class="code small light copytextbtn"
          title="${this.tMessages.copyToClipboard}"
          role="button"
          @click="${() => this._copyText(guide.slug)}"
        >
          <span class="copytextbtn__value">${guide.slug}</span>
          <span class="visually-hidden">${this.tMessages.copyToClipboard}</span>
          <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
        </div>
      `)

      // In Guide
      const checked = this._placements.find((placement) => placement.guideId === guide.id) !== undefined
      items.push(
        html`<input
          type="checkbox"
          switch
          name="in-guide-${guide.slug}"
          ?checked="${checked}"
          ?disabled="${this._getAllPlacementsStatus === ApiStatus.Loading}"
          @change="${checked
            ? () => this._onInGuideDisabled(guide.id, guide.title)
            : () => this._onInGuideEnabled(guide.id, guide.title)}"
        />`
      )

      // Action Items
      const actionItems = []
      actionItems.push(html`
        <guide-slideout-button page-slug="${guide.slug}">
          <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
        </guide-slideout-button>
      `)
      if (userOperations.editGuides) {
        actionItems.push(
          html`<a class="btn small secondary" data-icon="pencil" href="${guide.editUrl}">${this.tMessages.edit}</a>`
        )
      }
      if (userOperations.deleteGuides) {
        actionItems.push(
          html`<a class="btn small" data-icon="trash" href="${guide.deleteUrl}">${this.tMessages.delete}</a>`
        )
      }
      items.push(html`<div class="buttons">${actionItems.map((item) => item)}</div>`)

      return items
    })

    return html`
      <div class="tableview tablepane">
        <table class="data fullwidth">
          <thead>
            <tr>
              ${tableHeaders}
            </tr>
          </thead>
          <tbody>
            ${rows.map(
              (row) =>
                html`<tr>
                  ${row.map((item) => html`<td>${item}</td>`)}
                </tr>`
            )}
          </tbody>
        </table>
      </div>
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
    'guide-list': GuideList
  }
}
