import {html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {log} from "../utils/console.ts";
import {Placement} from "../plugins";
import {guides, settings} from "../globals.ts";

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
   * The CP Trigger config setting used to format CP URLs
   */
  @property({ attribute: 'cp-trigger' })
  cpTrigger = ''

  /**
   * TODO
   */
  @property({ attribute: 'groups-data', type: Object })
  groupsData = []

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
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
   * Formats a URI into a relative CP URL
   */
  private async _cpUrl(uri: string) {
    return this.cpTrigger ? `/${this.cpTrigger}/${uri}` : `/${uri}`;
  }
  /**
   * TODO
   */
  private async _getPlacementList() {
    await window.Craft?.postActionRequest(
      'guide/placement/get-all-placements',
      null,
      (response, textStatus, request) => {
        if (request.status === 200) {
          log('Getting placements', response, textStatus, request);
          this._placements = response;
          log('Placements', this._placements);
        }
      }
    );
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    log('cpTrigger', this.cpTrigger)
    log('groupsData', this.groupsData)

    this._getPlacementList()

    log('guides', guides)
    log('settings', settings)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    return html`
      <p>Guide Organizer</p>
      <h2>Guides:</h2>
      <ul>
        ${guides.map((guide) => html`<li>
          <p>
            <strong>${guide.title}</strong>
            <br>${guide.id}
            <br><a href="${guide.viewUrl}">view</a>
            <br><a href="${guide.editUrl}">edit</a>
          </p>
        </li>`)}
      </ul>
      <h2>Placements:</h2>
      <ul>
        ${this._placements.map((placement) => html`<li>
          <p>${placement.group} – ${placement.guideId}</p>
        </li>`)}
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
