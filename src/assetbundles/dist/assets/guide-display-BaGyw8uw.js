import{r as p,n as r,t as f,h as b,g as v,p as w,s as I,k as o,D as u,c as C,i as $}from"./globals-Bxb8cv8b.js";import{a as E,P as G}from"./types-BjkgCq3a.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(e,s,i,a)=>{for(var t=a>1?void 0:a?P(s,i):s,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(a?n(s,i,t):n(t))||t);return a&&t&&O(s,i,t),t};let _=class extends b{constructor(){super(...arguments),this.tMessages={},this._guides=[],this._selectedGuide=void 0}_selectGuide(e){this._selectedGuide=this._guides.find(s=>s.slug===e)}connectedCallback(){super.connectedCallback();const e=this.querySelectorAll("[data-guide]"),s=[];e.forEach(i=>{i.dataset.guideSlug&&s.push(i.dataset.guideSlug)}),s.forEach(i=>{const a=v.find(t=>t.slug===i);a&&this._guides.push(a)}),this._guides.length&&(this._selectedGuide=this._guides[0]),w&&I.enableGuideJavascript&&s.forEach(i=>{var a,t;try{(t=(a=window.guideCallback)[i])==null||t.call(a)}catch{window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace("[slug]",i))}})}render(){var i,a,t;const e=o`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${(i=this._guides)==null?void 0:i.map(l=>{var n;return o`<li class="${((n=this._selectedGuide)==null?void 0:n.slug)===l.slug?"selected":u}">
              <button type="button" @click="${()=>this._selectGuide(l.slug)}">${l.title}</button>
            </li>`})}
        </ul>
      </nav>
    `,s=[];return o`
      ${this._guides&&((a=this._guides)==null?void 0:a.length)>1||s.length?o`
            <aside>
              ${this._guides&&((t=this._guides)==null?void 0:t.length)>1?e:u}
              ${s.length?s.map(l=>l):u}
            </aside>
          `:u}
    `}willUpdate(e){e.has("_selectedGuide")&&this.querySelectorAll(".guide").forEach(i=>{var a;i.dataset.guideSlug===((a=this._selectedGuide)==null?void 0:a.slug)?i.setAttribute("data-guide-displayed",""):i.removeAttribute("data-guide-displayed")})}createRenderRoot(){return this}};y([r({attribute:"t-messages",type:Object})],_.prototype,"tMessages",2);y([p()],_.prototype,"_guides",2);y([p()],_.prototype,"_selectedGuide",2);_=y([f("guide-display")],_);var M=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=(e,s,i,a)=>{for(var t=a>1?void 0:a?j(s,i):s,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(a?n(s,i,t):n(t))||t);return a&&t&&M(s,i,t),t};let m=class extends b{constructor(){super(...arguments),this._image=null,this._modal=null}_enlargeImage(){var e;(e=this._modal)==null||e.show()}firstUpdated(e){if(super.firstUpdated(e),this._image=this.querySelector("img"),this._image){this._image.addEventListener("click",()=>this._enlargeImage());const s=this.querySelector(".guide-image-modal");this._modal=new window.Garnish.Modal(s,{autoShow:!1})}}createRenderRoot(){return this}};S([p()],m.prototype,"_image",2);S([p()],m.prototype,"_modal",2);m=S([f("guide-image-modal")],m);var q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,g=(e,s,i,a)=>{for(var t=a>1?void 0:a?D(s,i):s,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(a?n(s,i,t):n(t))||t);return a&&t&&q(s,i,t),t};let c=class extends b{constructor(){super(...arguments),this.docs=!1,this.elementId=0,this.groupHandle="",this.slug="",this.tMessages={},this._isValid=!1}_onButtonClick(){var e;this._isValid?C({docs:this.docs,elementId:this.elementId,groupHandle:this.groupHandle,slug:this.slug}):window.Craft.cp.displayError((e=this.tMessages.guideSlideoutSlugError)==null?void 0:e.replace("[slug]",this.slug))}connectedCallback(){super.connectedCallback(),this.docs?this._isValid=!0:(this._isValid=!0,this.slug.split("|").forEach(s=>{this._isValid&&v.find(i=>i.slug===s)!==void 0?this._isValid=!0:this._isValid=!1}));const e=this.querySelector("button:not([data-guide-slidout-button-button])");e==null||e.addEventListener("click",()=>this._onButtonClick()),e==null||e.setAttribute("data-guide-slidout-button-button","")}disconnectedCallback(){const e=this.querySelector("button");e==null||e.removeEventListener("click",()=>this._onButtonClick()),super.disconnectedCallback()}createRenderRoot(){return this}};g([r({attribute:"docs-page",type:Boolean})],c.prototype,"docs",2);g([r({attribute:"element-id",type:Number})],c.prototype,"elementId",2);g([r({attribute:"group-handle",type:String})],c.prototype,"groupHandle",2);g([r({attribute:"page-slug",type:String})],c.prototype,"slug",2);g([r({attribute:"t-messages",type:Object})],c.prototype,"tMessages",2);g([p()],c.prototype,"_isValid",2);c=g([f("guide-slideout-button")],c);var k=Object.defineProperty,A=Object.getOwnPropertyDescriptor,h=(e,s,i,a)=>{for(var t=a>1?void 0:a?A(s,i):s,l=e.length-1,n;l>=0;l--)(n=e[l])&&(t=(a?n(s,i,t):n(t))||t);return a&&t&&k(s,i,t),t};let d=class extends b{constructor(){super(...arguments),this.groupId="",this.placementId=-1,this.tMessages={},this._guideIdSelect=null,this._guideSelected=!1,this._showSettings=!1}async _onGuideIdSelected(e){var s,i;if(!this._guideSelected)if(e==="__none__"&&this.placementId)await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/delete-placement",{data:{id:this.placementId}},async(a,t)=>{t==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess),this._guideSelected=!0)}));else{const a={access:E.All,group:G.UiElement,groupId:this.groupId,guideId:parseInt(e)};this.placementId&&(a.id=this.placementId),await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/save-placement",{data:a},(t,l)=>{l==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess),this._guideSelected=!0)}))}}_onSettingsButtonClicked(){this._showSettings=!this._showSettings}firstUpdated(e){super.firstUpdated(e)}connectedCallback(){var e;super.connectedCallback(),this.placementId||(this._showSettings=!0),this._guideIdSelect=this.querySelector('guide-ui-element .field[data-attribute="guideId"] select'),this._guideIdSelect&&this._guideIdSelect.addEventListener("change",()=>{var s;this._onGuideIdSelected((s=this._guideIdSelect)==null?void 0:s.value)}),(e=this.querySelector("button.settings"))==null||e.addEventListener("click",()=>this._onSettingsButtonClicked())}disconnectedCallback(){var e;(e=this.querySelector("button.settings"))==null||e.removeEventListener("click",()=>this._onSettingsButtonClicked()),super.disconnectedCallback()}render(){return o`
      ${!this._guideSelected&&this.placementId?o`<button
            class="settings"
            type="button"
            title="${this.tMessages.settings}"
            @click="${this._onSettingsButtonClicked}"
          >
            <slot name="settings-button"></slot>
          </button>`:u}
      ${this._showSettings&&!this._guideSelected?o`<slot name="settings-display"></slot>`:u}
      ${this._showSettings&&this._guideSelected?o`<slot name="guide-selected"></slot>`:u}
      ${!this._showSettings&&this.placementId?o`<slot name="guide-display"></slot>`:u}
    `}};d.styles=$`
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
  `;h([r({attribute:"group-id",type:String})],d.prototype,"groupId",2);h([r({attribute:"placement-id",type:Number})],d.prototype,"placementId",2);h([r({attribute:"t-messages",type:Object})],d.prototype,"tMessages",2);h([p()],d.prototype,"_guideIdSelect",2);h([p()],d.prototype,"_guideSelected",2);h([p()],d.prototype,"_showSettings",2);d=h([f("guide-ui-element")],d);
