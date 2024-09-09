import{n as b,t as x,h as M,k as r,D as l,i as q,r as u,a as U,p as R,R as B,l as A,g as C,u as F}from"./console-3gNWUiwH.js";import{E as c,G as L,A as p,P as g,a as z,M as T}from"./types-BZdEkL9Y.js";async function N(i){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(i);else{const t=document.createElement("textarea");t.value=i,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{t.remove()}}}var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,j=(i,t,s,a)=>{for(var e=a>1?void 0:a?J(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&H(t,s,e),e};let G=class extends M{constructor(){super(...arguments),this.tMessages={},this.copyText=""}async _copyTextToClipboard(i){await N(i),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${i}`)}async connectedCallback(){super.connectedCallback()}render(){return r`${this.copyText&&this.tMessages?r`
          <div
            class="code small light copytextbtn"
            title="${this.tMessages.copyToClipboard}"
            role="button"
            @click="${()=>this._copyTextToClipboard(this.copyText)}"
          >
            <span class="copytextbtn__value">${this.copyText}</span>
            <span class="visually-hidden">${this.tMessages.copyToClipboard}</span>
            <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
          </div>
        `:l}`}createRenderRoot(){return this}};j([b({attribute:"t-messages",type:Object})],G.prototype,"tMessages",2);j([b({attribute:"copy-text",type:String})],G.prototype,"copyText",2);G=j([x("guide-copy-text-button")],G);var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,_=(i,t,s,a)=>{for(var e=a>1?void 0:a?W(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&V(t,s,e),e};let h=class extends M{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this._componentLists=["settings"],this._contentEditor=null,this._contentSourceIsField=!1,this._contentSourceSelect=null,this._contentUrlField=null,this._renderMarkdownField=null,this._selectedTabGroup=c.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._titleInput=null}_onContentSourceChange(i){var t,s,a,e,o,n,v,m,f;switch(i){case L.Field:(t=this._contentUrlField)==null||t.classList.add("hidden"),(s=this._renderMarkdownField)==null||s.classList.remove("hidden"),(a=this._templateField)==null||a.classList.add("hidden"),this._contentSourceIsField=!0;break;case L.Iframe:(e=this._contentUrlField)==null||e.classList.remove("hidden"),(o=this._renderMarkdownField)==null||o.classList.add("hidden"),(n=this._templateField)==null||n.classList.add("hidden"),this._contentSourceIsField=!1;break;case L.Template:(v=this._contentUrlField)==null||v.classList.add("hidden"),(m=this._renderMarkdownField)==null||m.classList.add("hidden"),(f=this._templateField)==null||f.classList.remove("hidden"),this._contentSourceIsField=!1;break}}connectedCallback(){if(super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{var i;!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=U(((i=this._titleInput)==null?void 0:i.value)??""))}),this._slugInput&&this._slugInput.addEventListener("blur",()=>{this._slugInput&&(this._slugHasBeenEdited=!0,this._slugInput.value=U(this._slugInput.value),document.querySelectorAll("guide-copy-text-button").forEach(t=>{t.copyText=this._slugInput.value}))}),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{var i;this._onContentSourceChange((i=this._contentSourceSelect)==null?void 0:i.value)}),this._onContentSourceChange(this._contentSourceSelect.value)),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const i=this._contentEditor.getModel().getLineCount(),t=this._contentEditor.getModel().getLineMaxColumn(i);this._contentEditor.setPosition({column:t,lineNumber:i})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const i=[];this._componentLists.includes(c.Components)&&i.push(r`
        <button
          class="${this._selectedTabGroup===c.Components?"active":l}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=c.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(c.Images)&&i.push(r`
        <button
          class="${this._selectedTabGroup===c.Images?"active":l}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=c.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(c.Guides)&&i.push(r`
        <button
          class="${this._selectedTabGroup===c.Guides?"active":l}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=c.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(c.Snippets)&&i.push(r`
        <button
          class="${this._selectedTabGroup===c.Snippets?"active":l}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=c.Snippets}"
        >
          <slot name="icon-snippets"></slot><span>${this.tMessages.snippets}</span>
        </button>
      `);let t=r`<div></div>`;return this._contentSourceIsField&&(t=r`<slot name="editor"></slot>`),r`
      <aside>
        <div
          class="guide-editor-content-buttons"
          style="--guide-editor-content-buttons-columns: ${this._componentLists.length};"
        >
          <button
            class="${this._selectedTabGroup===c.Settings?"active":l}"
            type="button"
            title="${this.tMessages.settings}"
            @click="${()=>this._selectedTabGroup=c.Settings}"
          >
            <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
          </button>
          ${R&&this._contentSourceIsField?i:l}
        </div>
        ${this._selectedTabGroup===c.Settings?r`<slot name="settings"></slot>`:l}
        ${this._selectedTabGroup===c.Components?r`<slot name="components"></slot>`:l}
        ${this._selectedTabGroup===c.Images?r`<slot name="images"></slot>`:l}
        ${this._selectedTabGroup===c.Guides?r`<slot name="guides"></slot>`:l}
        ${this._selectedTabGroup===c.Snippets?r`<slot name="snippets"></slot>`:l}
      </aside>
      <div class="guide-editor-content-editor"><div>${t}</div></div>
    `}};h.styles=q`
    :host {
      display: grid;
      grid-template-columns: var(--grid-template-columns, minmax(1px, 1fr));
      position: relative;

      @container guide-editor (width > 800px) {
        & {
          --grid-template-columns: 400px minmax(1px, 1fr);
          gap: calc(var(--xl) * 2);
        }
      }
    }
    .guide-editor-content-buttons {
      display: grid;
      grid-template-columns: repeat(var(--guide-editor-content-buttons-columns, 1), 1fr);
      margin-block-end: 25px;
      padding-block-end: 20px;
      border-bottom: 1px solid var(--gray-200);

      & > button {
        --guide-tab-icon-svg-fill: var(--gray-550);
        display: flex;
        appearance: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        height: 50px;
        background-color: transparent;
        border: none;
        font-weight: 700;
        color: var(--ui-control-color);
        cursor: pointer;

        &:hover {
          color: var(--black);
          --guide-tab-icon-svg-fill: var(--black);
        }
        &.active {
          color: var(--primary-color);
          --guide-tab-icon-svg-fill: var(--primary-color);
        }
      }

      &:has(:nth-child(4)) {
        --guide-editor-content-buttons-columns: 5;
      }
    }
    .guide-editor-content-editor {
      & > * {
        position: sticky;
        top: calc(var(--header-height) + 0.5rem);
      }
    }
  `;_([b({attribute:"is-new",type:Boolean})],h.prototype,"isNew",2);_([b({attribute:"t-messages",type:Object})],h.prototype,"tMessages",2);_([u()],h.prototype,"_componentLists",2);_([u()],h.prototype,"_contentEditor",2);_([u()],h.prototype,"_contentSourceIsField",2);_([u()],h.prototype,"_contentSourceSelect",2);_([u()],h.prototype,"_contentUrlField",2);_([u()],h.prototype,"_renderMarkdownField",2);_([u()],h.prototype,"_selectedTabGroup",2);_([u()],h.prototype,"_slugHasBeenEdited",2);_([u()],h.prototype,"_slugInput",2);_([u()],h.prototype,"_templateField",2);_([u()],h.prototype,"_titleInput",2);h=_([x("guide-editor")],h);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},K=i=>(...t)=>({_$litDirective$:i,values:t});class Q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,a){this.t=t,this._$AM=s,this.i=a}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends Q{constructor(t){if(super(t),this.it=l,t.type!==Y.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===l||t==null)return this._t=void 0,this.it=t;if(t===B)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}O.directiveName="unsafeHTML",O.resultType=1;const X=K(O);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,E=(i,t,s,a)=>{for(var e=a>1?void 0:a?tt(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&Z(t,s,e),e};let P=class extends M{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(i,t){let s;if(t==="content"?s=globalThis.monacoEditorInstances.contentEditor:t==="css"?s=globalThis.monacoEditorInstances.cssEditor:t==="javascript"&&(s=globalThis.monacoEditorInstances.javascriptEditor),s){const a=s.getModel().getLineCount(),e=s.getModel().getLineMaxColumn(a),o=s.getSelection(),v={identifier:{major:1,minor:1},range:{startLineNumber:(o==null?void 0:o.selectionStartLineNumber)??a,startColumn:(o==null?void 0:o.selectionStartColumn)??e,endLineNumber:(o==null?void 0:o.endLineNumber)??a,endColumn:(o==null?void 0:o.endColumn)??e},text:i,forceMoveMarkers:!0};s.executeEdits("my-source",[v]),s.focus()}}connectedCallback(){super.connectedCallback(),A("data",this.data)}render(){var s,a,e,o;let i,t;return(s=this.data)!=null&&s.thumbnail1x&&((a=this.data)!=null&&a.thumbnail2x)?i=r`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:i=l,(e=this.data)!=null&&e.summary?t=[c.Guides,c.Images].includes((o=this.data)==null?void 0:o.group)?r`<p>${this.data.summary}</p>`:r`${X(this.data.summary)}`:t=l,r`
      ${this.data?r`
            <div>
              ${i}
              <div class="readable">
                <h3>${this.data.title}</h3>
                ${t}
              </div>
            </div>
            <div class="buttons">
              <button
                class="btn icon add secondary"
                type="button"
                @click="${()=>{var n;return this._insertTextIntoEditor(((n=this.data)==null?void 0:n.contentCode)??"","content")}}"
              >
                ${this.tMessages.addContent}
              </button>
              ${this.data.cssCode?r`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--green-300);"
                    @click="${()=>{var n;return this._insertTextIntoEditor(((n=this.data)==null?void 0:n.cssCode)??"","css")}}"
                  >
                    ${this.tMessages.addCss}
                  </button>`:l}
              ${this.data.javascriptCode?r`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${()=>{var n;return this._insertTextIntoEditor(((n=this.data)==null?void 0:n.javascriptCode)??"","javascript")}}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`:l}
              ${this.data.props?r`<button
                    class="btn icon"
                    data-icon="${this._showProps?"eye-slash":"eye"}"
                    type="button"
                    @click="${()=>this._showProps=!this._showProps}"
                  >
                    ${this.tMessages.variables}
                  </button>`:l}
            </div>
            ${this.data.props&&this._showProps?r`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map(n=>{var v,m;return r`<dt class="guide-select-string">${n}</dt>
                        <dd>${(m=(v=this.data)==null?void 0:v.props)==null?void 0:m[n]}</dd>`})}
                  </dl>`:l}
          `:l}
    `}createRenderRoot(){return this}};E([b({attribute:"component-data",type:Object})],P.prototype,"data",2);E([b({attribute:"t-messages",type:Object})],P.prototype,"tMessages",2);E([u()],P.prototype,"_showProps",2);P=E([x("guide-editor-component-list-item")],P);var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,D=(i,t,s,a)=>{for(var e=a>1?void 0:a?st(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&et(t,s,e),e};let S=class extends M{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=p.Initial,this._placements=[]}async _getAllPlacements(){var t;this._getAllPlacementsStatus=p.Loading;const i=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=i.filter(s=>s.group===g.Nav),this._getAllPlacementsStatus=p.Success}async _onCmsGuideDisabled(i,t){var a;const s=this._placements.find(e=>e.guideId===i);s&&await((a=window.Craft)==null?void 0:a.postActionRequest("guide/placement/delete-placement",{data:{id:s.id}},(e,o)=>{var n;o==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((n=this.tMessages.placementDeleteSuccess)==null?void 0:n.replace("[guide]",t)))}))}async _onCmsGuideEnabled(i,t){var s;await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:i}},(a,e)=>{var o;e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementSaveSuccess)==null?void 0:o.replace("[guide]",t)))}))}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const i=this.tableHeaders.map(s=>r`<th>${s.label}</th>`),t=C.map(s=>{const a=[];a.push(r`<a href="${s.viewUrl}">${s.title}</a>`),a.push(r`<p>${s.summary??""}</p>`),a.push(r`<guide-copy-text-button
          copy-text="${s.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);const e=this._placements.find(n=>n.guideId===s.id)!==void 0;a.push(r`<input
          type="checkbox"
          switch
          name="cms-guide-${s.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===p.Loading}"
          @change="${e?()=>this._onCmsGuideDisabled(s.id,s.title):()=>this._onCmsGuideEnabled(s.id,s.title)}"
        />`);const o=[];return o.push(r`
        <guide-slideout-button page-slug="${s.slug}">
          <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
        </guide-slideout-button>
      `),F.editGuides&&o.push(r`<a class="btn small secondary" data-icon="pencil" href="${s.editUrl}">${this.tMessages.edit}</a>`),F.deleteGuides&&o.push(r`<a class="btn small" data-icon="trash" href="${s.deleteUrl}">${this.tMessages.delete}</a>`),a.push(r`<div class="buttons">${o.map(n=>n)}</div>`),a});return r`
      <div class="tableview tablepane">
        <table class="data fullwidth">
          <thead>
            <tr>
              ${i}
            </tr>
          </thead>
          <tbody>
            ${t.map(s=>r`<tr>
                  ${s.map(a=>r`<td>${a}</td>`)}
                </tr>`)}
          </tbody>
        </table>
      </div>
    `}createRenderRoot(){return this}};D([b({attribute:"t-messages",type:Object})],S.prototype,"tMessages",2);D([b({attribute:"table-headers",type:Object})],S.prototype,"tableHeaders",2);D([u()],S.prototype,"_getAllPlacementsStatus",2);D([u()],S.prototype,"_placements",2);S=D([x("guide-list")],S);var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,y=(i,t,s,a)=>{for(var e=a>1?void 0:a?at(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&it(t,s,e),e};let $=class extends M{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.tMessages={},this.groupsData=[],this._getAllPlacementsStatus=p.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(i,t){var a,e;this._getAllPlacementsStatus=p.Loading;const s=parseInt((a=i==null?void 0:i.target)==null?void 0:a.value);if(s){const o=C.find(n=>n.id===s);if(o){const n={access:z.All,group:t.name,guideId:o.id};t.groupId&&(n.groupId=t.groupId),await((e=window.Craft)==null?void 0:e.postActionRequest("guide/placement/save-placement",{data:n},async(v,m)=>{var f;m==="success"&&(window.Craft.cp.displayNotice((f=this.tMessages.placementSaveSuccess)==null?void 0:f.replace("[guide]",o.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success,i!=null&&i.target&&(i.target.value="__none__"))}))}}}async _deletePlacement(i,t){var s;this._getAllPlacementsStatus=p.Loading,await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/delete-placement",{data:{id:i}},async(a,e)=>{var o;e==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementDeleteSuccess)==null?void 0:o.replace("[guide]",t.title)),this._getAllPlacementsStatus=p.Success)}))}async _getAllPlacements(){var t;this._getAllPlacementsStatus=p.Loading;const i=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=i,this._getAllPlacementsStatus=p.Success}async _saveUriPlacement(i,t,s){var o,n;const a=(o=i==null?void 0:i.target)==null?void 0:o.value;if(t==="moveMethod"&&a===s.moveMethod)return;if(t==="selector"&&a===s.selector)return;if(t==="uri"&&a===s.uri)return;this._getAllPlacementsStatus=p.Loading;const e={access:"all",group:"uri",guideId:s.guideId,id:s.id,moveMethod:t==="moveMethod"?a:s.moveMethod,selector:t==="selector"?a:s.selector,uri:t==="uri"?a:s.uri};await((n=window.Craft)==null?void 0:n.postActionRequest("guide/placement/save-placement",{data:e},async(v,m)=>{m==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success)}))}connectedCallback(){super.connectedCallback(),A("groupsData",this.groupsData);const i=this.groupsData.find(d=>d.name===g.Widget);i&&this._groupsDataStructured.push(i);const t=this.groupsData.find(d=>d.name===g.Entry);t&&this._groupsDataStructured.push(t);const s=this.groupsData.filter(d=>d.name===g.Section);s!=null&&s.length&&this._groupsDataStructured.push(...s);const a=this.groupsData.find(d=>d.name===g.Asset);a&&this._groupsDataStructured.push(a);const e=this.groupsData.filter(d=>d.name===g.AssetVolume);e!=null&&e.length&&this._groupsDataStructured.push(...e);const o=this.groupsData.find(d=>d.name===g.Category);o&&this._groupsDataStructured.push(o);const n=this.groupsData.filter(d=>d.name===g.CategoryGroup);n!=null&&n.length&&this._groupsDataStructured.push(...n);const v=this.groupsData.find(d=>d.name===g.Global);v&&this._groupsDataStructured.push(v);const m=this.groupsData.filter(d=>d.name===g.GlobalSet);m!=null&&m.length&&this._groupsDataStructured.push(...m);const f=this.groupsData.find(d=>d.name===g.User);f&&this._groupsDataStructured.push(f);const k=this.groupsData.find(d=>d.name===g.Uri);k&&this._groupsDataStructured.push(k),A("structured",this._groupsDataStructured),this._getAllPlacements()}render(){return r`
      ${this._groupsDataStructured.map(i=>{const t=this._placements.filter(e=>e.group===i.name),s={};t.forEach(e=>{const o=C.find(n=>n.id===e.guideId);o&&(s[o.id]=o)});const a=i.name===g.Uri?C:C.filter(e=>!Object.keys(s).includes(e.id.toString()));return r`
          <div class="guide-organizer-header guide-organizer-header-${i.headerSize}">
            <h2>${i.header}</h2>
            <p>${i.description}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${i.name}">
            ${t.length?r`
                  <h3>${this.tMessages.guidesDisplayed}</h3>
                  <ul>
                    ${t.map(e=>s[e.guideId]?r`<li>
                            <div>
                              ${i.name===g.Uri?e.uri&&e.selector?r`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                      >✓</span
                                    >`:r`<span class="guide-uri-invalid" title="${this.tMessages.uriPlacementIsInvalid}"
                                      >ⓧ</span
                                    >`:l}
                              <span class="guide-organizer-title">${s[e.guideId].title}</span>
                            </div>

                            ${i.name===g.Uri?r`
                                  <div class="guide-organizer-section-uri-fields">
                                    <span class="input"
                                      ><label for="guide-uri-${e.id}">displayed on page</label>
                                      <input
                                        id="guide-uri-${e.id}"
                                        class="text"
                                        type="text"
                                        placeholder="uri"
                                        value="${e.uri??""}"
                                        ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                                        @blur="${()=>this._saveUriPlacement(event,"uri",e)}"
                                    /></span>
                                    <div class="select">
                                      <select
                                        class="input"
                                        ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                                        @input="${()=>this._saveUriPlacement(event,"moveMethod",e)}"
                                      >
                                        <option
                                          value="before"
                                          ?selected="${e.moveMethod===T.Before}"
                                        >
                                          before
                                        </option>
                                        <option
                                          value="prepend"
                                          ?selected="${e.moveMethod===T.Prepend}"
                                        >
                                          at the top of
                                        </option>
                                        <option
                                          value="append"
                                          ?selected="${e.moveMethod===T.Append}"
                                        >
                                          at the bottom of
                                        </option>
                                        <option value="after" ?selected="${e.moveMethod===T.After}">
                                          after
                                        </option>
                                      </select>
                                    </div>

                                    <span class="input"
                                      ><label for="guide-selector-${e.id}">CSS selector</label>
                                      <input
                                        id="guide-selector-${e.id}"
                                        class="text"
                                        type="text"
                                        placeholder="#content"
                                        value="${e.selector??""}"
                                        ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                                        @blur="${()=>this._saveUriPlacement(event,"selector",e)}"
                                    /></span>
                                  </div>
                                `:l}

                            <div class="buttons">
                              <guide-slideout-button page-slug="${s[e.guideId].slug}">
                                <button class="btn small" data-icon="eye" type="button">
                                  ${this.tMessages.preview}
                                </button>
                              </guide-slideout-button>
                              <button
                                class="btn icon delete small"
                                type="button"
                                @click="${()=>this._deletePlacement(e.id,s[e.guideId])}"
                              >
                                ${this.tMessages.remove}
                              </button>
                            </div>
                          </li>`:l)}
                  </ul>
                `:l}
            ${a.length?r`
                  <h3>${this.tMessages.addAGuide}</h3>
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                      @input="${()=>this._addPlacement(event,i)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault}</option>
                      ${a.map(e=>r`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:l}
          </div>
        `})}
    `}createRenderRoot(){return this}};y([b({attribute:"action-url-get-all-placements"})],$.prototype,"actionUrlGetAllPlacements",2);y([b({attribute:"t-messages",type:Object})],$.prototype,"tMessages",2);y([b({attribute:"groups-data",type:Object})],$.prototype,"groupsData",2);y([u()],$.prototype,"_getAllPlacementsStatus",2);y([u()],$.prototype,"_groupsDataStructured",2);y([u()],$.prototype,"_placements",2);$=y([x("guide-organizer")],$);var ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,I=(i,t,s,a)=>{for(var e=a>1?void 0:a?nt(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&ot(t,s,e),e};let w=class extends M{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await N(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const i={guides:[]};i.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(i),A("guides",this.guidesData,i)}async _importImportData(){const i=this.querySelector("#import-data");i!=null&&i.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:i.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(i){if(this._selectedGuides.includes(i)){const t=this._selectedGuides.indexOf(i);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(i);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return r`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      ${Object.keys(this.guidesData.guides).map(i=>{const t=this.guidesData.guides[i];return r`<ul>
          <li>
            <input
              id="guide-for-export-${t.slug}"
              name="guide-for-export-${t.slug}"
              type="checkbox"
              ?checked="${this._selectedGuides.includes(t.slug)}"
              @input="${()=>this._onGuideCheckboxInput(t.slug)}"
            />
            <label for="guide-for-export-${t.slug}">${t.title}</label>
          </li>
        </ul>`})}

      <p><b>${this.tMessages.step2Title}</b> ${this.tMessages.step2Text}</p>

      <div class="field">
        <div class="heading">
          <label for="export-data">${this.tMessages.exportData}</label>
        </div>
        <div class="input">
          <textarea
            class="text fullwidth nicetext"
            readonly
            name="export-data"
            id="export-data"
            rows="10"
            .value=${this._exportData}
          ></textarea>
        </div>
      </div>

      <button class="btn icon submit" data-icon="clipboard" type="button" @click="${this._copyExportData}">
        ${this.tMessages.exportButton}
      </button>

      <p><b>${this.tMessages.step3Title}</b> ${this.tMessages.step3Text}</p>

      <p><b>${this.tMessages.step4Title}</b> ${this.tMessages.step4Text}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note tip">${this.tMessages.importSkipSlugTip}</blockquote>
      </div>

      <div class="field">
        <div class="heading">
          <label for="import-data">${this.tMessages.importData}</label>
        </div>
        <div class="input">
          <textarea class="text fullwidth nicetext" name="import-data" id="import-data" rows="10"></textarea>
        </div>
      </div>

      <button class="btn icon submit" data-icon="download" type="button" @click="${this._importImportData}">
        ${this.tMessages.importButton}
      </button>
    `}createRenderRoot(){return this}};I([b({attribute:"guides-data",type:Object})],w.prototype,"guidesData",2);I([b({attribute:"t-messages",type:Object})],w.prototype,"tMessages",2);I([u()],w.prototype,"_exportData",2);I([u()],w.prototype,"_selectedGuides",2);w=I([x("guide-utilities")],w);
