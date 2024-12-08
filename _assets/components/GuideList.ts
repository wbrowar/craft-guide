import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { guideIconSvg, guides, proEdition, userOperations } from '../globals.ts'
import { ApiStatus, Placement, PlacementGroup } from '../types.ts'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

@customElement('guide-list')
export class GuideList extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
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
  private async _onCmsGuideDisabled(guideId: number, guideTitle: string) {
    const placement = this._placements.find((placement) => placement.guideId === guideId)
    if (placement) {
      await window.Craft?.postActionRequest(
        'guide/placement/delete-placement',
        {
          data: {
            id: placement.id,
          },
        },
        (_response: object, textStatus: string) => {
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
  private async _onCmsGuideEnabled(guideId: number, guideTitle: string) {
    await window.Craft?.postActionRequest(
      'guide/placement/save-placement',
      {
        data: {
          access: 'all',
          group: 'nav',
          guideId,
        },
      },
      (_response: object, textStatus: string) => {
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
  async connectedCallback() {
    super.connectedCallback()

    await this._getAllPlacements()
  }

  render() {
    const tableHeaders = this.tableHeaders.map((header) => {
      return html`<th>${header.label}</th>`
    })

    const rows = guides.map((guide) => {
      const items = []

      // Title
      items.push(
        proEdition
          ? html`<a href="${guide.viewUrl}" title="${this.tMessages.linkToGuidePage}"
              >${unsafeHTML(guideIconSvg)}${guide.title}</a
            >`
          : html`<h3>${guide.title}</h3>`
      )

      // Summary
      items.push(html`<p>${guide.summary ?? ''}</p>`)

      // Slug
      items.push(
        html`<guide-copy-text-button
          copy-text="${guide.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`
      )

      // CMS Guide
      const checked = this._placements.find((placement) => placement.guideId === guide.id) !== undefined
      items.push(
        html`<input
          type="checkbox"
          switch
          name="cms-guide-${guide.slug}"
          ?checked="${checked}"
          ?disabled="${this._getAllPlacementsStatus === ApiStatus.Loading}"
          @change="${checked
            ? () => this._onCmsGuideDisabled(guide.id, guide.title)
            : () => this._onCmsGuideEnabled(guide.id, guide.title)}"
        />`
      )

      // Action Items
      const actionItems = []
      if (proEdition) {
        actionItems.push(html`
          <guide-slideout-button page-slug="${guide.slug}">
            <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
          </guide-slideout-button>
        `)
      }
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
      ${rows.length
        ? html`
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
        : html`<p>${this.tMessages.listEmpty}</p>`}
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
