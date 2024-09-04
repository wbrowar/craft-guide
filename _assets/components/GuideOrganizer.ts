import { html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { log } from '../utils/console.ts'
import { guides, settings } from '../globals.ts'
import { ApiStatus, GuideListGuide, OrganizerGroup, Placement, PlacementGroup } from '../types.ts'

@customElement('guide-organizer')
export class GuideOrganizer extends LitElement {
  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * The Controller Action URL that is used to get all guide placements.
   */
  @property({ attribute: 'action-url-get-all-placements' })
  actionUrlGetAllPlacements = ''

  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * TODO
   */
  @property({ attribute: 'groups-data', type: Object })
  groupsData: OrganizerGroup[] = []

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
   * TODO
   */
  @state()
  private _groupsDataStructured: OrganizerGroup[] = []

  /**
   * TODO
   */
  @state()
  private _placements: Placement[] = []

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * TODO
   */
  private async _addPlacement(event: Event | undefined, group: OrganizerGroup) {
    this._getAllPlacementsStatus = ApiStatus.Loading
    const guideId = parseInt((event?.target as HTMLSelectElement)?.value)
    if (guideId) {
      const guideSelected = guides.find((guide) => guide.id === guideId)

      if (guideSelected) {
        const params = {
          access: 'all',
          group: group.name,
          guideId: guideSelected.id,
        }

        if (group.groupId) {
          params['groupId'] = group.groupId
        }

        await window.Craft?.postActionRequest(
          'guide/placement/save-placement',
          {
            data: params,
          },
          (response: object, textStatus: string) => {
            if (textStatus === 'success') {
              window.Craft.cp.displayNotice(
                this.tMessages.placementSaveSuccess
                  ?.replace('[guide]', guideSelected.title)
                  .replace('[group]', group.name)
              )
              this._getAllPlacements()
              this._getAllPlacementsStatus = ApiStatus.Success
              if (event?.target) {
                event.target.value = '__none__'
              }
            }
          }
        )
      }
    }
  }

  /**
   * TODO
   */
  private async _deletePlacement(placementId: number, guide: GuideListGuide) {
    this._getAllPlacementsStatus = ApiStatus.Loading
    await window.Craft?.postActionRequest(
      'guide/placement/delete-placement',
      {
        data: {
          id: placementId,
        },
      },
      (response: object, textStatus: string) => {
        if (textStatus === 'success') {
          this._getAllPlacements()
          window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace('[guide]', guide.title))
          this._getAllPlacementsStatus = ApiStatus.Success
        }
      }
    )
  }

  /**
   * Gets the list of placements from the database.
   */
  private async _getAllPlacements() {
    this._getAllPlacementsStatus = ApiStatus.Loading
    const response = await window.Craft?.postActionRequest('guide/placement/get-all-placements')

    this._placements = response
    this._getAllPlacementsStatus = ApiStatus.Success
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    log('groupsData', this.groupsData)
    const widget = this.groupsData.find((group) => group.name === PlacementGroup.Widget)
    if (widget) {
      this._groupsDataStructured.push(widget)
    }
    const entries = this.groupsData.find((group) => group.name === PlacementGroup.Entry)
    if (entries) {
      this._groupsDataStructured.push(entries)
    }
    const sections = this.groupsData.filter((group) => group.name === PlacementGroup.Section)
    if (sections?.length) {
      this._groupsDataStructured.push(...sections)
    }
    const asset = this.groupsData.find((group) => group.name === PlacementGroup.Asset)
    if (asset) {
      this._groupsDataStructured.push(asset)
    }
    const assetVolume = this.groupsData.filter((group) => group.name === PlacementGroup.AssetVolume)
    if (assetVolume?.length) {
      this._groupsDataStructured.push(...assetVolume)
    }
    const category = this.groupsData.find((group) => group.name === PlacementGroup.Category)
    if (category) {
      this._groupsDataStructured.push(category)
    }
    const categoryGroup = this.groupsData.filter((group) => group.name === PlacementGroup.CategoryGroup)
    if (categoryGroup?.length) {
      this._groupsDataStructured.push(...categoryGroup)
    }
    const global = this.groupsData.find((group) => group.name === PlacementGroup.Global)
    if (global) {
      this._groupsDataStructured.push(global)
    }
    const globalSet = this.groupsData.filter((group) => group.name === PlacementGroup.GlobalSet)
    if (globalSet?.length) {
      this._groupsDataStructured.push(...globalSet)
    }
    const user = this.groupsData.find((group) => group.name === PlacementGroup.User)
    if (user) {
      this._groupsDataStructured.push(user)
    }

    log('structured', this._groupsDataStructured)

    this._getAllPlacements()

    log('guides', guides)
    log('settings', settings)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    return html`
      ${this._groupsDataStructured.map((group) => {
        const placementsInGroup = this._placements.filter((placement) => placement.group === group.name)
        const guidesInGroup: Record<number, GuideListGuide> = {}
        placementsInGroup.forEach((placement) => {
          const guide = guides.find((guide) => guide.id === placement.guideId)
          if (guide) {
            guidesInGroup[guide.id] = guide
          }
        })
        const guideOptions = guides.filter((guide) => !Object.keys(guidesInGroup).includes(guide.id.toString()))

        return html`
          <div class="guide-organizer-header guide-organizer-header-${group.headerSize}">
            <h2>${group.header}</h2>
            <p>${group.description}</p>
          </div>
          <div class="guide-organizer-section">
            ${placementsInGroup.length
              ? html`
                  <h3>${this.tMessages.guidesDisplayed}</h3>
                  <ul>
                    ${placementsInGroup.map((placement) => {
                      return guidesInGroup[placement.guideId]
                        ? html`<li>
                            <span>${guidesInGroup[placement.guideId].title}</span>
                            <div class="buttons">
                              <guide-slideout-button page-slug="${guidesInGroup[placement.guideId].slug}">
                                <button class="btn small" data-icon="eye" type="button">
                                  ${this.tMessages.preview}
                                </button>
                              </guide-slideout-button>
                              <button
                                class="btn icon delete small"
                                type="button"
                                @click="${() => this._deletePlacement(placement.id, guidesInGroup[placement.guideId])}"
                              >
                                ${this.tMessages.remove}
                              </button>
                            </div>
                          </li>`
                        : nothing
                    })}
                  </ul>
                `
              : nothing}
            ${guideOptions.length
              ? html`
                  <h3>${this.tMessages.addAGuide}</h3>
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus === ApiStatus.Loading}"
                      @input="${() => this._addPlacement(event, group)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault}</option>
                      ${guideOptions.map((guide) => {
                        return html`<option value="${guide.id}">${guide.title}</option>`
                      })}
                    </select>
                  </div>
                `
              : nothing}
          </div>
        `
      })}

      <hr />
      <h2>Placements:</h2>
      <ul>
        ${this._placements.map(
          (placement) =>
            html`<li>
              <p>${placement.group} – ${placement.guideId}</p>
            </li>`
        )}
      </ul>
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
    'guide-organizer': GuideOrganizer
  }
}
