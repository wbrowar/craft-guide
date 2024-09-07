import{r as p,n,t as m,h as y,g as S,p as w,s as b,a as r,D as u,l as v,c as C,i as I}from"./console-7TmJNlmx.js";import{a as G,P as E}from"./types-BZdEkL9Y.js";var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,f=(e,t,l,i)=>{for(var s=i>1?void 0:i?O(t,l):t,d=e.length-1,o;d>=0;d--)(o=e[d])&&(s=(i?o(t,l,s):o(s))||s);return i&&s&&$(t,l,s),s};let h=class extends y{constructor(){super(...arguments),this.cmsGuide=!1,this.tMessages={},this._guides=[],this._selectedGuide=void 0,this._showTldr=!1}_selectGuide(e){this._selectedGuide=this._guides.find(t=>t.slug===e)}connectedCallback(){super.connectedCallback();const e=this.querySelectorAll(".guide"),t=[];[...e].forEach(i=>{i.dataset.guideSlug&&t.push(i.dataset.guideSlug)}),t.forEach(i=>{const s=S.find(d=>d.slug===i);s&&this._guides.push(s)}),this._guides.length&&(this._selectedGuide=this._guides[0]);const l=this.querySelectorAll(".tldr-hide, .tldr-show");this._showTldr=l.length>0,w&&b.enableGuideJavascript&&t.forEach(i=>{var s,d;try{(d=(s=window.guideCallback)[i])==null||d.call(s)}catch{window.Craft.cp.displayError(this.tMessages.guideJsCallbackError.replace("[slug]",i))}})}render(){var l,i,s;const e=r`
      <nav>
        <h2>${this.tMessages.guides}</h2>
        <ul>
          ${(l=this._guides)==null?void 0:l.map(d=>{var o;return r`<li class="${((o=this._selectedGuide)==null?void 0:o.slug)===d.slug?"selected":u}">
              <button type="button" @click="${()=>this._selectGuide(d.slug)}">${d.title}</button>
            </li>`})}
        </ul>
      </nav>
    `,t=[];return this._showTldr&&t.push(r`
        <div>
          <input switch type="checkbox" id="tldr" name="tldr" />
          <label for="tldr">TL;DR <span class="info">HI</span></label>
        </div>
      `),v("cmsGuide",this.cmsGuide),r`
      ${this._guides&&((i=this._guides)==null?void 0:i.length)>1||t.length?r`
            <aside>
              ${this.cmsGuide&&b.fun?r`<guide-book></guide-book>`:u}
              ${this._guides&&((s=this._guides)==null?void 0:s.length)>1?e:u}
              ${t.length?t.map(d=>d):u}
            </aside>
          `:u}
    `}willUpdate(e){e.has("_selectedGuide")&&this.querySelectorAll(".guide").forEach(l=>{var i;l.dataset.guideSlug===((i=this._selectedGuide)==null?void 0:i.slug)?l.classList.remove("visually-hidden"):l.classList.add("visually-hidden")})}createRenderRoot(){return this}};f([n({attribute:"cms-guide",type:Boolean})],h.prototype,"cmsGuide",2);f([n({attribute:"t-messages",type:Object})],h.prototype,"tMessages",2);f([p()],h.prototype,"_guides",2);f([p()],h.prototype,"_selectedGuide",2);f([p()],h.prototype,"_showTldr",2);h=f([m("guide-display")],h);var P=Object.defineProperty,k=Object.getOwnPropertyDescriptor,g=(e,t,l,i)=>{for(var s=i>1?void 0:i?k(t,l):t,d=e.length-1,o;d>=0;d--)(o=e[d])&&(s=(i?o(t,l,s):o(s))||s);return i&&s&&P(t,l,s),s};let c=class extends y{constructor(){super(...arguments),this.docs=!1,this.elementId=0,this.groupHandle="",this.slug="",this.tMessages={},this._isValid=!1}_onButtonClick(){var e;this._isValid?(v("welllllll",this.elementId,this.groupHandle),C({docs:this.docs,elementId:this.elementId,groupHandle:this.groupHandle,slug:this.slug})):window.Craft.cp.displayError((e=this.tMessages.guideSlideoutSlugError)==null?void 0:e.replace("[slug]",this.slug))}connectedCallback(){super.connectedCallback(),this.docs?this._isValid=!0:(this._isValid=!0,this.slug.split("|").forEach(t=>{this._isValid&&S.find(l=>l.slug===t)!==void 0?this._isValid=!0:this._isValid=!1}));const e=this.querySelector("button");e==null||e.addEventListener("click",()=>this._onButtonClick())}disconnectedCallback(){const e=this.querySelector("button");e==null||e.removeEventListener("click",()=>this._onButtonClick()),super.disconnectedCallback()}createRenderRoot(){return this}};g([n({attribute:"docs-page",type:Boolean})],c.prototype,"docs",2);g([n({attribute:"element-id",type:Number})],c.prototype,"elementId",2);g([n({attribute:"group-handle",type:String})],c.prototype,"groupHandle",2);g([n({attribute:"page-slug",type:String})],c.prototype,"slug",2);g([n({attribute:"t-messages",type:Object})],c.prototype,"tMessages",2);g([p()],c.prototype,"_isValid",2);c=g([m("guide-slideout-button")],c);var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,_=(e,t,l,i)=>{for(var s=i>1?void 0:i?M(t,l):t,d=e.length-1,o;d>=0;d--)(o=e[d])&&(s=(i?o(t,l,s):o(s))||s);return i&&s&&j(t,l,s),s};let a=class extends y{constructor(){super(...arguments),this.groupId="",this.placementId=-1,this.tMessages={},this._guideIdSelect=null,this._guideSelected=!1,this._showSettings=!1}async _onGuideIdSelected(e){var t;if(!this._guideSelected&&e!=="__none__"){const l={access:G.All,group:E.UiElement,groupId:this.groupId,guideId:parseInt(e)};this.placementId&&(l.id=this.placementId),await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/save-placement",{data:l},(i,s)=>{s==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess),this._guideSelected=!0)}))}}_onSettingsButtonClicked(){this._showSettings=!this._showSettings}connectedCallback(){var e;super.connectedCallback(),this._guideIdSelect=this.querySelector('guide-ui-element select[name="guideId"]'),this._guideIdSelect&&this._guideIdSelect.addEventListener("change",()=>{var t;this._onGuideIdSelected((t=this._guideIdSelect)==null?void 0:t.value)}),(e=this.querySelector("button.settings"))==null||e.addEventListener("click",()=>this._onSettingsButtonClicked())}disconnectedCallback(){var e;(e=this.querySelector("button.settings"))==null||e.removeEventListener("click",()=>this._onSettingsButtonClicked()),super.disconnectedCallback()}render(){return r`
      ${this._guideSelected?u:r`<div class="settings"><slot name="settings-button"></slot></div>`}
      ${this._showSettings&&!this._guideSelected?r`<slot name="settings-display"></slot>`:u}
      ${this._showSettings&&this._guideSelected?r`<slot name="guide-selected"></slot>`:u}
      ${this._showSettings?u:r`<slot name="guide-display"></slot>`}
    `}};a.styles=I`
    .settings {
      display: flex;
      justify-content: end;
      margin-block-end: var(--m);
    }
  `;_([n({attribute:"group-id",type:String})],a.prototype,"groupId",2);_([n({attribute:"placement-id",type:Number})],a.prototype,"placementId",2);_([n({attribute:"t-messages",type:Object})],a.prototype,"tMessages",2);_([p()],a.prototype,"_guideIdSelect",2);_([p()],a.prototype,"_guideSelected",2);_([p()],a.prototype,"_showSettings",2);a=_([m("guide-ui-element")],a);
