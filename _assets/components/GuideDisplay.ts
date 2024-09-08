import { html, LitElement, nothing, TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { GuideListGuide } from '../types.ts'
import { guides, proEdition, settings } from '../globals.ts'

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
  private _guides: GuideListGuide[] = []

  /**
   * List of guides being displayed, along with their related information.
   */
  @state()
  private _selectedGuide?: GuideListGuide = undefined

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  private _selectGuide(slug: string) {
    this._selectedGuide = this._guides.find((guide) => guide.slug === slug)
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    // Collect slugs from all rendered guides.
    const guideElements: NodeListOf<HTMLElement> = this.querySelectorAll('.guide')
    const guideSlugs: string[] = []
    ;[...guideElements].forEach((guideElement) => {
      if (guideElement.dataset.guideSlug) {
        guideSlugs.push(guideElement.dataset.guideSlug)
      }
    })

    // Map rendered guides with guides in JavaScript object.
    guideSlugs.forEach((slug) => {
      const guide = guides.find((guide) => guide.slug === slug)
      if (guide) {
        this._guides.push(guide)
      }
    })

    // Select the first guide to update navigation.
    if (this._guides.length) {
      this._selectedGuide = this._guides[0]
    }

    // Fire callback for guide.
    if (proEdition && settings.enableGuideJavascript) {
      guideSlugs.forEach((slug) => {
        try {
          // @ts-ignore
          window.guideCallback[slug]?.()
        } catch (error) {
          window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace('[slug]', slug))
        }
      })
    }
  }

  render() {
    const nav = html`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${this._guides?.map((guide) => {
            return html`<li class="${this._selectedGuide?.slug === guide.slug ? 'selected' : nothing}">
              <button type="button" @click="${() => this._selectGuide(guide.slug)}">${guide.title}</button>
            </li>`
          })}
        </ul>
      </nav>
    `

    // TODO add options or remove
    const options: TemplateResult[] = []

    return html`
      ${(this._guides && this._guides?.length > 1) || options.length
        ? html`
            <aside>
              ${this._guides && this._guides?.length > 1 ? nav : nothing}
              ${options.length
                ? options.map((option) => {
                    return option
                  })
                : nothing}
            </aside>
          `
        : nothing}
    `
  }

  protected willUpdate(changedProperties: Map<string, any>) {
    if (changedProperties.has('_selectedGuide')) {
      const guideElements: NodeListOf<HTMLElement> = this.querySelectorAll('.guide')

      guideElements.forEach((guide) => {
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
