import {html, LitElement, nothing} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {Guide} from "../plugins";
import {log} from "../utils/console.ts";
import {guides} from "../globals.ts";

@customElement('guide-display')
export class GuideDisplay extends LitElement {
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
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * List of guides being displayed, along with their related information.
   */
  @state()
  private _guides: Guide[] = []

  /**
   * List of guides being displayed, along with their related information.
   */
  @state()
  private _selectedGuide?: Guide = undefined;

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  private _selectGuide(slug) {
    this._selectedGuide = this._guides.find(guide => guide.slug === slug)
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    const guideElements = this.querySelectorAll('.guide')
    log('huh', guideElements)

    this._guides = [...guideElements].map((guide:HTMLElement) => {
      log('guide slug', guide.dataset.guideSlug)
      const slug = guide.dataset.guideSlug;
      return guides.find((guide) => guide.slug === slug);
    })

    if (this._guides.length) {
      this._selectedGuide = this._guides[0]
    }

    log('guides found', this._guides)
    log('selected guide', this._selectedGuide)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    const nav = html`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>${
        this._guides.map((guide) => {
          return html`<li class="${ this._selectedGuide?.slug === guide.slug ? 'selected' : nothing }">
            <button type="button" @click="${() => this._selectGuide(guide.slug)}">${guide.title}</button>
          </li>`
        })
      }</ul></nav>
    `

    const options = html`
      <div>
        <input switch type="checkbox" id="tldr" name="tldr">
        <label for="tldr">TL;DR <span class="info">HI</span></label>
      </div>
    `

    return html`
      <aside>
        ${this._guides?.length > 1 ? nav : nothing}
        ${options}
      </aside>
    `
  }

  protected willUpdate(changedProperties: Map<string, any>) {
    if (changedProperties.has('_selectedGuide')) {
      log('gonna change em')

      const guideElements = this.querySelectorAll('.guide')

      guideElements.forEach((guide) => {
        log('guidee', guide.dataset.guideSlug)
        if (guide.dataset.guideSlug === this._selectedGuide?.slug) {
          guide.classList.remove('visually-hidden')
        } else {
          guide.classList.add('visually-hidden')
        }
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
    'guide-display': GuideDisplay
  }
}
