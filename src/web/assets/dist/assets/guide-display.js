import{_ as e,c as t,d as n,f as r,h as i,i as a,m as o,o as s,p as c,s as l,u,v as d}from"./console.js";import{a as f,o as p}from"./types.js";var m=class extends o{constructor(...e){super(...e),this.tMessages={},this._guides=[],this._selectedGuide=void 0}_selectGuide(e){this._selectedGuide=this._guides.find(t=>t.slug===e)}connectedCallback(){super.connectedCallback();let e=this.querySelectorAll(`[data-guide]`),t=[];e.forEach(e=>{e.dataset.guideSlug&&t.push(e.dataset.guideSlug)}),t.forEach(e=>{let t=a.find(t=>t.slug===e);t&&this._guides.push(t)}),this._guides.length&&(this._selectedGuide=this._guides[0]),s&&l.enableGuideJavascript&&t.forEach(e=>{try{window.guideCallback[e]?.()}catch{window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace(`[slug]`,e))}})}render(){let t=e`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${this._guides?.map(t=>e`<li class="${this._selectedGuide?.slug===t.slug?`selected`:i}">
              <button type="button" @click="${()=>this._selectGuide(t.slug)}">${t.title}</button>
            </li>`)}
        </ul>
      </nav>
    `,n=[];return e`
      ${this._guides&&this._guides?.length>1||n.length?e`
            <aside>
              ${this._guides&&this._guides?.length>1?t:i}
              ${n.length?n.map(e=>e):i}
            </aside>
          `:i}
    `}willUpdate(e){e.has(`_selectedGuide`)&&this.querySelectorAll(`.guide`).forEach(e=>{e.dataset.guideSlug===this._selectedGuide?.slug?e.setAttribute(`data-guide-displayed`,``):e.removeAttribute(`data-guide-displayed`)})}createRenderRoot(){return this}};u([r({attribute:`t-messages`,type:Object})],m.prototype,`tMessages`,void 0),u([n()],m.prototype,`_guides`,void 0),u([n()],m.prototype,`_selectedGuide`,void 0),m=u([c(`guide-display`)],m);var h=class extends o{constructor(...e){super(...e),this._image=null,this._modal=null}_enlargeImage(){let e=this.querySelector(`.guide-image-modal img`);e?.dataset.src&&(e.src=e.dataset.src,e.removeAttribute(`data-src`)),this._modal?.show()}firstUpdated(e){if(super.firstUpdated(e),this._image=this.querySelector(`img`),this._image){this._image.addEventListener(`click`,()=>this._enlargeImage());let e=this.querySelector(`.guide-image-modal`);this._modal=new window.Garnish.Modal(e,{autoShow:!1})}}createRenderRoot(){return this}};u([n()],h.prototype,`_image`,void 0),u([n()],h.prototype,`_modal`,void 0),h=u([c(`guide-image-modal`)],h);var g=class extends o{constructor(...e){super(...e),this.docs=!1,this.elementId=0,this.groupHandle=``,this.slug=``,this.tMessages={},this._isValid=!1}_onButtonClick(){this._isValid?t({docs:this.docs,elementId:this.elementId,groupHandle:this.groupHandle,slug:this.slug}):window.Craft.cp.displayError(this.tMessages.guideSlideoutSlugError?.replace(`[slug]`,this.slug))}connectedCallback(){super.connectedCallback(),this.docs?this._isValid=!0:(this._isValid=!0,this.slug.split(`|`).forEach(e=>{this._isValid=!!(this._isValid&&a.find(t=>t.slug===e)!==void 0)}));let e=this.querySelector(`button:not([data-guide-slidout-button-button])`);e?.addEventListener(`click`,()=>this._onButtonClick()),e?.setAttribute(`data-guide-slidout-button-button`,``)}disconnectedCallback(){this.querySelector(`button`)?.removeEventListener(`click`,()=>this._onButtonClick()),super.disconnectedCallback()}createRenderRoot(){return this}};u([r({attribute:`docs-page`,type:Boolean})],g.prototype,`docs`,void 0),u([r({attribute:`element-id`,type:Number})],g.prototype,`elementId`,void 0),u([r({attribute:`group-handle`,type:String})],g.prototype,`groupHandle`,void 0),u([r({attribute:`page-slug`,type:String})],g.prototype,`slug`,void 0),u([r({attribute:`t-messages`,type:Object})],g.prototype,`tMessages`,void 0),u([n()],g.prototype,`_isValid`,void 0),g=u([c(`guide-slideout-button`)],g);var _=class extends o{constructor(...e){super(...e),this.groupId=``,this.placementId=-1,this.showDefaultGuide=!1,this.tMessages={},this._guideIdSelect=null,this._guideSelected=!1,this._showSettings=!1}static{this.styles=d`
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
  `}async _onGuideIdSelected(e){if(!this._guideSelected){if(e===`__none__`&&this.placementId)await window.Craft?.postActionRequest(`guide/placement/delete-placement`,{data:{id:this.placementId}},async(e,t)=>{t===`success`&&(window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess),this._guideSelected=!0)});else{let t={access:f.All,group:p.UiElement,groupId:this.groupId,guideId:parseInt(e)};this.placementId&&(t.id=this.placementId),await window.Craft?.postActionRequest(`guide/placement/save-placement`,{data:t},(e,t)=>{t===`success`&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess),this._guideSelected=!0)})}}}_onSettingsButtonClicked(){this._showSettings=!this._showSettings}firstUpdated(e){super.firstUpdated(e)}connectedCallback(){super.connectedCallback(),!this.placementId&&!this.showDefaultGuide&&(this._showSettings=!0),this._guideIdSelect=this.querySelector(`guide-ui-element .field[data-attribute="guideId"] select`),this._guideIdSelect&&this._guideIdSelect.addEventListener(`change`,()=>{this._onGuideIdSelected(this._guideIdSelect?.value)}),this.querySelector(`button.settings`)?.addEventListener(`click`,()=>this._onSettingsButtonClicked())}disconnectedCallback(){this.querySelector(`button.settings`)?.removeEventListener(`click`,()=>this._onSettingsButtonClicked()),super.disconnectedCallback()}render(){return e`
      ${!this._guideSelected&&(this.placementId||this.showDefaultGuide)?e`<button
            class="settings"
            type="button"
            title="${this.tMessages.settings}"
            @click="${this._onSettingsButtonClicked}"
          >
            <slot name="settings-button"></slot>
          </button>`:i}
      ${this._showSettings&&!this._guideSelected?e`<slot name="settings-display"></slot>`:i}
      ${this._showSettings&&this._guideSelected?e`<slot name="guide-selected"></slot>`:i}
      ${!this._showSettings&&(this.placementId||this.showDefaultGuide)?e`<slot name="guide-display"></slot>`:i}
    `}};u([r({attribute:`group-id`,type:String})],_.prototype,`groupId`,void 0),u([r({attribute:`placement-id`,type:Number})],_.prototype,`placementId`,void 0),u([r({attribute:`show-default-guide`,type:Boolean})],_.prototype,`showDefaultGuide`,void 0),u([r({attribute:`t-messages`,type:Object})],_.prototype,`tMessages`,void 0),u([n()],_.prototype,`_guideIdSelect`,void 0),u([n()],_.prototype,`_guideSelected`,void 0),u([n()],_.prototype,`_showSettings`,void 0),_=u([c(`guide-ui-element`)],_);