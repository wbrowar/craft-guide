import{r as p,n as o,t as f,h as y,g as v,p as w,s as I,k as r,D as u,c as C,i as $}from"./globals-Bxb8cv8b.js";import{a as E,P as G}from"./types-BjkgCq3a.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,b=(e,s,i,l)=>{for(var t=l>1?void 0:l?P(s,i):s,a=e.length-1,d;a>=0;a--)(d=e[a])&&(t=(l?d(s,i,t):d(t))||t);return l&&t&&O(s,i,t),t};let _=class extends y{constructor(){super(...arguments),this.tMessages={},this._guides=[],this._selectedGuide=void 0}_selectGuide(e){this._selectedGuide=this._guides.find(s=>s.slug===e)}connectedCallback(){super.connectedCallback();const e=this.querySelectorAll("[data-guide]"),s=[];e.forEach(i=>{i.dataset.guideSlug&&s.push(i.dataset.guideSlug)}),s.forEach(i=>{const l=v.find(t=>t.slug===i);l&&this._guides.push(l)}),this._guides.length&&(this._selectedGuide=this._guides[0]),w&&I.enableGuideJavascript&&s.forEach(i=>{var l,t;try{(t=(l=window.guideCallback)[i])==null||t.call(l)}catch{window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace("[slug]",i))}})}render(){var i,l,t;const e=r`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${(i=this._guides)==null?void 0:i.map(a=>{var d;return r`<li class="${((d=this._selectedGuide)==null?void 0:d.slug)===a.slug?"selected":u}">
              <button type="button" @click="${()=>this._selectGuide(a.slug)}">${a.title}</button>
            </li>`})}
        </ul>
      </nav>
    `,s=[];return r`
      ${this._guides&&((l=this._guides)==null?void 0:l.length)>1||s.length?r`
            <aside>
              ${this._guides&&((t=this._guides)==null?void 0:t.length)>1?e:u}
              ${s.length?s.map(a=>a):u}
            </aside>
          `:u}
    `}willUpdate(e){e.has("_selectedGuide")&&this.querySelectorAll(".guide").forEach(i=>{var l;i.dataset.guideSlug===((l=this._selectedGuide)==null?void 0:l.slug)?i.setAttribute("data-guide-displayed",""):i.removeAttribute("data-guide-displayed")})}createRenderRoot(){return this}};b([o({attribute:"t-messages",type:Object})],_.prototype,"tMessages",2);b([p()],_.prototype,"_guides",2);b([p()],_.prototype,"_selectedGuide",2);_=b([f("guide-display")],_);var M=Object.defineProperty,j=Object.getOwnPropertyDescriptor,S=(e,s,i,l)=>{for(var t=l>1?void 0:l?j(s,i):s,a=e.length-1,d;a>=0;a--)(d=e[a])&&(t=(l?d(s,i,t):d(t))||t);return l&&t&&M(s,i,t),t};let m=class extends y{constructor(){super(...arguments),this.modalId="",this._image=null,this._modal=null}_enlargeImage(){var e;(e=this._modal)==null||e.show()}firstUpdated(e){if(super.firstUpdated(e),this._image=this.querySelector("img"),this._image){this._image.addEventListener("click",()=>this._enlargeImage());const s=this.querySelector(`#${this.modalId}`);this._modal=new window.Garnish.Modal(s,{autoShow:!1})}}createRenderRoot(){return this}};S([o({attribute:"modal-id",type:String})],m.prototype,"modalId",2);S([p()],m.prototype,"_image",2);S([p()],m.prototype,"_modal",2);m=S([f("guide-image-modal")],m);var q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,g=(e,s,i,l)=>{for(var t=l>1?void 0:l?D(s,i):s,a=e.length-1,d;a>=0;a--)(d=e[a])&&(t=(l?d(s,i,t):d(t))||t);return l&&t&&q(s,i,t),t};let c=class extends y{constructor(){super(...arguments),this.docs=!1,this.elementId=0,this.groupHandle="",this.slug="",this.tMessages={},this._isValid=!1}_onButtonClick(){var e;this._isValid?C({docs:this.docs,elementId:this.elementId,groupHandle:this.groupHandle,slug:this.slug}):window.Craft.cp.displayError((e=this.tMessages.guideSlideoutSlugError)==null?void 0:e.replace("[slug]",this.slug))}connectedCallback(){super.connectedCallback(),this.docs?this._isValid=!0:(this._isValid=!0,this.slug.split("|").forEach(s=>{this._isValid&&v.find(i=>i.slug===s)!==void 0?this._isValid=!0:this._isValid=!1}));const e=this.querySelector("button:not([data-guide-slidout-button-button])");e==null||e.addEventListener("click",()=>this._onButtonClick()),e==null||e.setAttribute("data-guide-slidout-button-button","")}disconnectedCallback(){const e=this.querySelector("button");e==null||e.removeEventListener("click",()=>this._onButtonClick()),super.disconnectedCallback()}createRenderRoot(){return this}};g([o({attribute:"docs-page",type:Boolean})],c.prototype,"docs",2);g([o({attribute:"element-id",type:Number})],c.prototype,"elementId",2);g([o({attribute:"group-handle",type:String})],c.prototype,"groupHandle",2);g([o({attribute:"page-slug",type:String})],c.prototype,"slug",2);g([o({attribute:"t-messages",type:Object})],c.prototype,"tMessages",2);g([p()],c.prototype,"_isValid",2);c=g([f("guide-slideout-button")],c);var A=Object.defineProperty,R=Object.getOwnPropertyDescriptor,h=(e,s,i,l)=>{for(var t=l>1?void 0:l?R(s,i):s,a=e.length-1,d;a>=0;a--)(d=e[a])&&(t=(l?d(s,i,t):d(t))||t);return l&&t&&A(s,i,t),t};let n=class extends y{constructor(){super(...arguments),this.groupId="",this.placementId=-1,this.tMessages={},this._guideIdSelect=null,this._guideSelected=!1,this._showSettings=!1}async _onGuideIdSelected(e){var s,i;if(!this._guideSelected)if(e==="__none__"&&this.placementId)await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/delete-placement",{data:{id:this.placementId}},async(l,t)=>{t==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess),this._guideSelected=!0)}));else{const l={access:E.All,group:G.UiElement,groupId:this.groupId,guideId:parseInt(e)};this.placementId&&(l.id=this.placementId),await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/save-placement",{data:l},(t,a)=>{a==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess),this._guideSelected=!0)}))}}_onSettingsButtonClicked(){this._showSettings=!this._showSettings}firstUpdated(e){super.firstUpdated(e)}connectedCallback(){var e;super.connectedCallback(),this.placementId||(this._showSettings=!0),this._guideIdSelect=this.querySelector('guide-ui-element .field[data-attribute="guideId"] select'),this._guideIdSelect&&this._guideIdSelect.addEventListener("change",()=>{var s;this._onGuideIdSelected((s=this._guideIdSelect)==null?void 0:s.value)}),(e=this.querySelector("button.settings"))==null||e.addEventListener("click",()=>this._onSettingsButtonClicked())}disconnectedCallback(){var e;(e=this.querySelector("button.settings"))==null||e.removeEventListener("click",()=>this._onSettingsButtonClicked()),super.disconnectedCallback()}render(){return r`
      ${!this._guideSelected&&this.placementId?r`<div class="settings"><slot name="settings-button"></slot></div>`:u}
      ${this._showSettings&&!this._guideSelected?r`<slot name="settings-display"></slot>`:u}
      ${this._showSettings&&this._guideSelected?r`<slot name="guide-selected"></slot>`:u}
      ${!this._showSettings&&this.placementId?r`<slot name="guide-display"></slot>`:u}
    `}};n.styles=$`
    :host(:hover) {
      --settings-opacity: 1;
    }
    .settings {
      float: inline-end;
      position: relative;
      margin-block-end: var(--m);
      margin-inline-start: var(--m);
      opacity: var(--settings-opacity, 0.3);
      transition: opacity calc(var(--guide-duration) * 2) ease-out;
      z-index: 1;

      &:focus-within {
        --settings-opacity: 1;
      }
    }
  `;h([o({attribute:"group-id",type:String})],n.prototype,"groupId",2);h([o({attribute:"placement-id",type:Number})],n.prototype,"placementId",2);h([o({attribute:"t-messages",type:Object})],n.prototype,"tMessages",2);h([p()],n.prototype,"_guideIdSelect",2);h([p()],n.prototype,"_guideSelected",2);h([p()],n.prototype,"_showSettings",2);n=h([f("guide-ui-element")],n);
