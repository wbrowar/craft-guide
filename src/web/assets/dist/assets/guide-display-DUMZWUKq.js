import{r as g,n,t as f,i as b,g as v,p as w,s as I,E as u,x as r,d as C,a as G}from"./globals-tUPxSBuY.js";import{P as $,a as E}from"./types-B_LyD8Hq.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,y=(s,e,t,a)=>{for(var i=a>1?void 0:a?P(e,t):e,l=s.length-1,o;l>=0;l--)(o=s[l])&&(i=(a?o(e,t,i):o(i))||i);return a&&i&&O(e,t,i),i};let _=class extends b{constructor(){super(...arguments),this.tMessages={},this._guides=[],this._selectedGuide=void 0}_selectGuide(s){this._selectedGuide=this._guides.find(e=>e.slug===s)}connectedCallback(){super.connectedCallback();const s=this.querySelectorAll("[data-guide]"),e=[];s.forEach(t=>{t.dataset.guideSlug&&e.push(t.dataset.guideSlug)}),e.forEach(t=>{const a=v.find(i=>i.slug===t);a&&this._guides.push(a)}),this._guides.length&&(this._selectedGuide=this._guides[0]),w&&I.enableGuideJavascript&&e.forEach(t=>{try{window.guideCallback[t]?.()}catch{window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace("[slug]",t))}})}render(){const s=r`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${this._guides?.map(t=>r`<li class="${this._selectedGuide?.slug===t.slug?"selected":u}">
              <button type="button" @click="${()=>this._selectGuide(t.slug)}">${t.title}</button>
            </li>`)}
        </ul>
      </nav>
    `,e=[];return r`
      ${this._guides&&this._guides?.length>1||e.length?r`
            <aside>
              ${this._guides&&this._guides?.length>1?s:u}
              ${e.length?e.map(t=>t):u}
            </aside>
          `:u}
    `}willUpdate(s){s.has("_selectedGuide")&&this.querySelectorAll(".guide").forEach(t=>{t.dataset.guideSlug===this._selectedGuide?.slug?t.setAttribute("data-guide-displayed",""):t.removeAttribute("data-guide-displayed")})}createRenderRoot(){return this}};y([n({attribute:"t-messages",type:Object})],_.prototype,"tMessages",2);y([g()],_.prototype,"_guides",2);y([g()],_.prototype,"_selectedGuide",2);_=y([f("guide-display")],_);var D=Object.defineProperty,M=Object.getOwnPropertyDescriptor,S=(s,e,t,a)=>{for(var i=a>1?void 0:a?M(e,t):e,l=s.length-1,o;l>=0;l--)(o=s[l])&&(i=(a?o(e,t,i):o(i))||i);return a&&i&&D(e,t,i),i};let m=class extends b{constructor(){super(...arguments),this._image=null,this._modal=null}_enlargeImage(){const s=this.querySelector(".guide-image-modal img");s?.dataset.src&&(s.src=s.dataset.src,s.removeAttribute("data-src")),this._modal?.show()}firstUpdated(s){if(super.firstUpdated(s),this._image=this.querySelector("img"),this._image){this._image.addEventListener("click",()=>this._enlargeImage());const e=this.querySelector(".guide-image-modal");this._modal=new window.Garnish.Modal(e,{autoShow:!1})}}createRenderRoot(){return this}};S([g()],m.prototype,"_image",2);S([g()],m.prototype,"_modal",2);m=S([f("guide-image-modal")],m);var B=Object.defineProperty,q=Object.getOwnPropertyDescriptor,h=(s,e,t,a)=>{for(var i=a>1?void 0:a?q(e,t):e,l=s.length-1,o;l>=0;l--)(o=s[l])&&(i=(a?o(e,t,i):o(i))||i);return a&&i&&B(e,t,i),i};let c=class extends b{constructor(){super(...arguments),this.docs=!1,this.elementId=0,this.groupHandle="",this.slug="",this.tMessages={},this._isValid=!1}_onButtonClick(){this._isValid?C({docs:this.docs,elementId:this.elementId,groupHandle:this.groupHandle,slug:this.slug}):window.Craft.cp.displayError(this.tMessages.guideSlideoutSlugError?.replace("[slug]",this.slug))}connectedCallback(){super.connectedCallback(),this.docs?this._isValid=!0:(this._isValid=!0,this.slug.split("|").forEach(e=>{this._isValid&&v.find(t=>t.slug===e)!==void 0?this._isValid=!0:this._isValid=!1}));const s=this.querySelector("button:not([data-guide-slidout-button-button])");s?.addEventListener("click",()=>this._onButtonClick()),s?.setAttribute("data-guide-slidout-button-button","")}disconnectedCallback(){this.querySelector("button")?.removeEventListener("click",()=>this._onButtonClick()),super.disconnectedCallback()}createRenderRoot(){return this}};h([n({attribute:"docs-page",type:Boolean})],c.prototype,"docs",2);h([n({attribute:"element-id",type:Number})],c.prototype,"elementId",2);h([n({attribute:"group-handle",type:String})],c.prototype,"groupHandle",2);h([n({attribute:"page-slug",type:String})],c.prototype,"slug",2);h([n({attribute:"t-messages",type:Object})],c.prototype,"tMessages",2);h([g()],c.prototype,"_isValid",2);c=h([f("guide-slideout-button")],c);var j=Object.defineProperty,A=Object.getOwnPropertyDescriptor,p=(s,e,t,a)=>{for(var i=a>1?void 0:a?A(e,t):e,l=s.length-1,o;l>=0;l--)(o=s[l])&&(i=(a?o(e,t,i):o(i))||i);return a&&i&&j(e,t,i),i};let d=class extends b{constructor(){super(...arguments),this.groupId="",this.placementId=-1,this.showDefaultGuide=!1,this.tMessages={},this._guideIdSelect=null,this._guideSelected=!1,this._showSettings=!1}async _onGuideIdSelected(s){if(!this._guideSelected)if(s==="__none__"&&this.placementId)await window.Craft?.postActionRequest("guide/placement/delete-placement",{data:{id:this.placementId}},async(e,t)=>{t==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess),this._guideSelected=!0)});else{const e={access:E.All,group:$.UiElement,groupId:this.groupId,guideId:parseInt(s)};this.placementId&&(e.id=this.placementId),await window.Craft?.postActionRequest("guide/placement/save-placement",{data:e},(t,a)=>{a==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess),this._guideSelected=!0)})}}_onSettingsButtonClicked(){this._showSettings=!this._showSettings}firstUpdated(s){super.firstUpdated(s)}connectedCallback(){super.connectedCallback(),!this.placementId&&!this.showDefaultGuide&&(this._showSettings=!0),this._guideIdSelect=this.querySelector('guide-ui-element .field[data-attribute="guideId"] select'),this._guideIdSelect&&this._guideIdSelect.addEventListener("change",()=>{this._onGuideIdSelected(this._guideIdSelect?.value)}),this.querySelector("button.settings")?.addEventListener("click",()=>this._onSettingsButtonClicked())}disconnectedCallback(){this.querySelector("button.settings")?.removeEventListener("click",()=>this._onSettingsButtonClicked()),super.disconnectedCallback()}render(){return r`
      ${!this._guideSelected&&(this.placementId||this.showDefaultGuide)?r`<button
            class="settings"
            type="button"
            title="${this.tMessages.settings}"
            @click="${this._onSettingsButtonClicked}"
          >
            <slot name="settings-button"></slot>
          </button>`:u}
      ${this._showSettings&&!this._guideSelected?r`<slot name="settings-display"></slot>`:u}
      ${this._showSettings&&this._guideSelected?r`<slot name="guide-selected"></slot>`:u}
      ${!this._showSettings&&(this.placementId||this.showDefaultGuide)?r`<slot name="guide-display"></slot>`:u}
    `}};d.styles=G`
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
  `;p([n({attribute:"group-id",type:String})],d.prototype,"groupId",2);p([n({attribute:"placement-id",type:Number})],d.prototype,"placementId",2);p([n({attribute:"show-default-guide",type:Boolean})],d.prototype,"showDefaultGuide",2);p([n({attribute:"t-messages",type:Object})],d.prototype,"tMessages",2);p([g()],d.prototype,"_guideIdSelect",2);p([g()],d.prototype,"_guideSelected",2);p([g()],d.prototype,"_showSettings",2);d=p([f("guide-ui-element")],d);
