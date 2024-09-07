import{i as j,n as b,r as u,h as C,k,a as r,D as l,p as N,t as D,R as q,l as A,g as M,u as U}from"./console-7TmJNlmx.js";import{E as c,G as L,A as m,P as h,a as R,M as G}from"./types-BZdEkL9Y.js";var B=Object.defineProperty,H=Object.getOwnPropertyDescriptor,_=(s,t,i,a)=>{for(var e=a>1?void 0:a?H(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&B(t,i,e),e};let p=class extends C{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this._componentLists=["settings"],this._contentEditor=null,this._contentSourceIsField=!1,this._contentSourceSelect=null,this._contentUrlField=null,this._renderMarkdownField=null,this._selectedTabGroup=c.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._titleInput=null}_onContentSourceChange(s){var t,i,a,e,o,n,f,g,v;switch(s){case L.Field:(t=this._contentUrlField)==null||t.classList.add("hidden"),(i=this._renderMarkdownField)==null||i.classList.remove("hidden"),(a=this._templateField)==null||a.classList.add("hidden"),this._contentSourceIsField=!0;break;case L.Iframe:(e=this._contentUrlField)==null||e.classList.remove("hidden"),(o=this._renderMarkdownField)==null||o.classList.add("hidden"),(n=this._templateField)==null||n.classList.add("hidden"),this._contentSourceIsField=!1;break;case L.Template:(f=this._contentUrlField)==null||f.classList.add("hidden"),(g=this._renderMarkdownField)==null||g.classList.add("hidden"),(v=this._templateField)==null||v.classList.remove("hidden"),this._contentSourceIsField=!1;break}}connectedCallback(){if(super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{var s;!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=k(((s=this._titleInput)==null?void 0:s.value)??""))}),this._slugInput&&this._slugInput.addEventListener("blur",()=>{this._slugInput&&(this._slugHasBeenEdited=!0,this._slugInput.value=k(this._slugInput.value))}),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{var s;this._onContentSourceChange((s=this._contentSourceSelect)==null?void 0:s.value)}),this._onContentSourceChange(this._contentSourceSelect.value)),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const s=this._contentEditor.getModel().getLineCount(),t=this._contentEditor.getModel().getLineMaxColumn(s);this._contentEditor.setPosition({column:t,lineNumber:s})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const s=[];this._componentLists.includes(c.Components)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Components?"active":l}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=c.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(c.Images)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Images?"active":l}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=c.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(c.Guides)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Guides?"active":l}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=c.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(c.Snippets)&&s.push(r`
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
          ${N&&this._contentSourceIsField?s:l}
        </div>
        ${this._selectedTabGroup===c.Settings?r`<slot name="settings"></slot>`:l}
        ${this._selectedTabGroup===c.Components?r`<slot name="components"></slot>`:l}
        ${this._selectedTabGroup===c.Images?r`<slot name="images"></slot>`:l}
        ${this._selectedTabGroup===c.Guides?r`<slot name="guides"></slot>`:l}
        ${this._selectedTabGroup===c.Snippets?r`<slot name="snippets"></slot>`:l}
      </aside>
      <div class="guide-editor-content-editor"><div>${t}</div></div>
    `}};p.styles=j`
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
  `;_([b({attribute:"is-new",type:Boolean})],p.prototype,"isNew",2);_([b({attribute:"t-messages",type:Object})],p.prototype,"tMessages",2);_([u()],p.prototype,"_componentLists",2);_([u()],p.prototype,"_contentEditor",2);_([u()],p.prototype,"_contentSourceIsField",2);_([u()],p.prototype,"_contentSourceSelect",2);_([u()],p.prototype,"_contentUrlField",2);_([u()],p.prototype,"_renderMarkdownField",2);_([u()],p.prototype,"_selectedTabGroup",2);_([u()],p.prototype,"_slugHasBeenEdited",2);_([u()],p.prototype,"_slugInput",2);_([u()],p.prototype,"_templateField",2);_([u()],p.prototype,"_titleInput",2);p=_([D("guide-editor")],p);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},V=s=>(...t)=>({_$litDirective$:s,values:t});class J{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this.t=t,this._$AM=i,this.i=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E extends J{constructor(t){if(super(t),this.it=l,t.type!==z.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===l||t==null)return this._t=void 0,this.it=t;if(t===q)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}E.directiveName="unsafeHTML",E.resultType=1;const W=V(E);var Y=Object.defineProperty,K=Object.getOwnPropertyDescriptor,T=(s,t,i,a)=>{for(var e=a>1?void 0:a?K(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&Y(t,i,e),e};let x=class extends C{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoContentEditor(){var t;const s=globalThis.monacoEditorInstances.contentEditor;if(s){const i=s.getModel().getLineCount(),a=s.getModel().getLineMaxColumn(i),e=s.getSelection(),n={identifier:{major:1,minor:1},range:{startLineNumber:(e==null?void 0:e.selectionStartLineNumber)??i,startColumn:(e==null?void 0:e.selectionStartColumn)??a,endLineNumber:(e==null?void 0:e.endLineNumber)??i,endColumn:(e==null?void 0:e.endColumn)??a},text:(t=this.data)==null?void 0:t.code,forceMoveMarkers:!0};s.executeEdits("my-source",[n]),s.focus()}}connectedCallback(){super.connectedCallback(),A("data",this.data)}render(){var i,a,e,o;let s,t;return(i=this.data)!=null&&i.thumbnail1x&&((a=this.data)!=null&&a.thumbnail2x)?s=r`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:s=l,(e=this.data)!=null&&e.summary?t=[c.Guides,c.Images].includes((o=this.data)==null?void 0:o.group)?r`<p>${this.data.summary}</p>`:r`${W(this.data.summary)}`:t=l,r`
      ${this.data?r`
            <div>
              ${s}
              <div class="readable">
                <h3>${this.data.title}</h3>
                ${t}
              </div>
            </div>
            <div class="buttons">
              <button class="btn icon add secondary" type="button" @click="${this._insertTextIntoContentEditor}">
                ${this.tMessages.add}
              </button>
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
                    ${Object.keys(this.data.props).map(n=>{var f,g;return r`<dt class="guide-select-string">${n}</dt>
                        <dd>${(g=(f=this.data)==null?void 0:f.props)==null?void 0:g[n]}</dd>`})}
                  </dl>`:l}
          `:l}
    `}createRenderRoot(){return this}};T([b({attribute:"component-data",type:Object})],x.prototype,"data",2);T([b({attribute:"t-messages",type:Object})],x.prototype,"tMessages",2);T([u()],x.prototype,"_showProps",2);x=T([D("guide-editor-component-list-item")],x);async function F(s){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(s);else{const t=document.createElement("textarea");t.value=s,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,P=(s,t,i,a)=>{for(var e=a>1?void 0:a?X(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&Q(t,i,e),e};let S=class extends C{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=m.Initial,this._placements=[]}async _copyText(s){await F(s),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${s}`)}async _getAllPlacements(){var t;this._getAllPlacementsStatus=m.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s.filter(i=>i.group===h.Nav),this._getAllPlacementsStatus=m.Success}async _onCmsGuideDisabled(s,t){var a;const i=this._placements.find(e=>e.guideId===s);i&&await((a=window.Craft)==null?void 0:a.postActionRequest("guide/placement/delete-placement",{data:{id:i.id}},(e,o)=>{var n;o==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((n=this.tMessages.placementDeleteSuccess)==null?void 0:n.replace("[guide]",t)))}))}async _onCmsGuideEnabled(s,t){var i;await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:s}},(a,e)=>{var o;e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementSaveSuccess)==null?void 0:o.replace("[guide]",t)))}))}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const s=this.tableHeaders.map(i=>r`<th>${i.label}</th>`),t=M.map(i=>{const a=[];a.push(r`<a href="${i.viewUrl}">${i.title}</a>`),a.push(r`<p>${i.summary??""}</p>`),a.push(r`
        <div
          class="code small light copytextbtn"
          title="${this.tMessages.copyToClipboard}"
          role="button"
          @click="${()=>this._copyText(i.slug)}"
        >
          <span class="copytextbtn__value">${i.slug}</span>
          <span class="visually-hidden">${this.tMessages.copyToClipboard}</span>
          <span class="copytextbtn__icon" data-icon="clipboard" aria-hidden="true"></span>
        </div>
      `);const e=this._placements.find(n=>n.guideId===i.id)!==void 0;a.push(r`<input
          type="checkbox"
          switch
          name="cms-guide-${i.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===m.Loading}"
          @change="${e?()=>this._onCmsGuideDisabled(i.id,i.title):()=>this._onCmsGuideEnabled(i.id,i.title)}"
        />`);const o=[];return o.push(r`
        <guide-slideout-button page-slug="${i.slug}">
          <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
        </guide-slideout-button>
      `),U.editGuides&&o.push(r`<a class="btn small secondary" data-icon="pencil" href="${i.editUrl}">${this.tMessages.edit}</a>`),U.deleteGuides&&o.push(r`<a class="btn small" data-icon="trash" href="${i.deleteUrl}">${this.tMessages.delete}</a>`),a.push(r`<div class="buttons">${o.map(n=>n)}</div>`),a});return r`
      <div class="tableview tablepane">
        <table class="data fullwidth">
          <thead>
            <tr>
              ${s}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>r`<tr>
                  ${i.map(a=>r`<td>${a}</td>`)}
                </tr>`)}
          </tbody>
        </table>
      </div>
    `}createRenderRoot(){return this}};P([b({attribute:"t-messages",type:Object})],S.prototype,"tMessages",2);P([b({attribute:"table-headers",type:Object})],S.prototype,"tableHeaders",2);P([u()],S.prototype,"_getAllPlacementsStatus",2);P([u()],S.prototype,"_placements",2);S=P([D("guide-list")],S);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,y=(s,t,i,a)=>{for(var e=a>1?void 0:a?tt(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&Z(t,i,e),e};let $=class extends C{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.tMessages={},this.groupsData=[],this._getAllPlacementsStatus=m.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(s,t){var a,e;this._getAllPlacementsStatus=m.Loading;const i=parseInt((a=s==null?void 0:s.target)==null?void 0:a.value);if(i){const o=M.find(n=>n.id===i);if(o){const n={access:R.All,group:t.name,guideId:o.id};t.groupId&&(n.groupId=t.groupId),await((e=window.Craft)==null?void 0:e.postActionRequest("guide/placement/save-placement",{data:n},async(f,g)=>{var v;g==="success"&&(window.Craft.cp.displayNotice((v=this.tMessages.placementSaveSuccess)==null?void 0:v.replace("[guide]",o.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=m.Success,s!=null&&s.target&&(s.target.value="__none__"))}))}}}async _deletePlacement(s,t){var i;this._getAllPlacementsStatus=m.Loading,await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/delete-placement",{data:{id:s}},async(a,e)=>{var o;e==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementDeleteSuccess)==null?void 0:o.replace("[guide]",t.title)),this._getAllPlacementsStatus=m.Success)}))}async _getAllPlacements(){var t;this._getAllPlacementsStatus=m.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s,this._getAllPlacementsStatus=m.Success}async _saveUriPlacement(s,t,i){var o,n;const a=(o=s==null?void 0:s.target)==null?void 0:o.value;if(t==="moveMethod"&&a===i.moveMethod)return;if(t==="selector"&&a===i.selector)return;if(t==="uri"&&a===i.uri)return;this._getAllPlacementsStatus=m.Loading;const e={access:"all",group:"uri",guideId:i.guideId,id:i.id,moveMethod:t==="moveMethod"?a:i.moveMethod,selector:t==="selector"?a:i.selector,uri:t==="uri"?a:i.uri};await((n=window.Craft)==null?void 0:n.postActionRequest("guide/placement/save-placement",{data:e},async(f,g)=>{g==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=m.Success)}))}connectedCallback(){super.connectedCallback(),A("groupsData",this.groupsData);const s=this.groupsData.find(d=>d.name===h.Widget);s&&this._groupsDataStructured.push(s);const t=this.groupsData.find(d=>d.name===h.Entry);t&&this._groupsDataStructured.push(t);const i=this.groupsData.filter(d=>d.name===h.Section);i!=null&&i.length&&this._groupsDataStructured.push(...i);const a=this.groupsData.find(d=>d.name===h.Asset);a&&this._groupsDataStructured.push(a);const e=this.groupsData.filter(d=>d.name===h.AssetVolume);e!=null&&e.length&&this._groupsDataStructured.push(...e);const o=this.groupsData.find(d=>d.name===h.Category);o&&this._groupsDataStructured.push(o);const n=this.groupsData.filter(d=>d.name===h.CategoryGroup);n!=null&&n.length&&this._groupsDataStructured.push(...n);const f=this.groupsData.find(d=>d.name===h.Global);f&&this._groupsDataStructured.push(f);const g=this.groupsData.filter(d=>d.name===h.GlobalSet);g!=null&&g.length&&this._groupsDataStructured.push(...g);const v=this.groupsData.find(d=>d.name===h.User);v&&this._groupsDataStructured.push(v);const O=this.groupsData.find(d=>d.name===h.Uri);O&&this._groupsDataStructured.push(O),A("structured",this._groupsDataStructured),this._getAllPlacements()}render(){return r`
      ${this._groupsDataStructured.map(s=>{const t=this._placements.filter(e=>e.group===s.name),i={};t.forEach(e=>{const o=M.find(n=>n.id===e.guideId);o&&(i[o.id]=o)});const a=s.name===h.Uri?M:M.filter(e=>!Object.keys(i).includes(e.id.toString()));return r`
          <div class="guide-organizer-header guide-organizer-header-${s.headerSize}">
            <h2>${s.header}</h2>
            <p>${s.description}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${s.name}">
            ${t.length?r`
                  <h3>${this.tMessages.guidesDisplayed}</h3>
                  <ul>
                    ${t.map(e=>i[e.guideId]?r`<li>
                            <div>
                              ${s.name===h.Uri?e.uri&&e.selector?r`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                      >✓</span
                                    >`:r`<span class="guide-uri-invalid" title="${this.tMessages.uriPlacementIsInvalid}"
                                      >ⓧ</span
                                    >`:l}
                              <span class="guide-organizer-title">${i[e.guideId].title}</span>
                            </div>

                            ${s.name===h.Uri?r`
                                  <div class="guide-organizer-section-uri-fields">
                                    <span class="input"
                                      ><label for="guide-uri-${e.id}">displayed on page</label>
                                      <input
                                        id="guide-uri-${e.id}"
                                        class="text"
                                        type="text"
                                        placeholder="uri"
                                        value="${e.uri??""}"
                                        @blur="${()=>this._saveUriPlacement(event,"uri",e)}"
                                    /></span>
                                    <div class="select">
                                      <select
                                        class="input"
                                        @input="${()=>this._saveUriPlacement(event,"moveMethod",e)}"
                                      >
                                        <option
                                          value="before"
                                          ?selected="${e.moveMethod===G.Before}"
                                        >
                                          before
                                        </option>
                                        <option
                                          value="prepend"
                                          ?selected="${e.moveMethod===G.Prepend}"
                                        >
                                          at the top of
                                        </option>
                                        <option
                                          value="append"
                                          ?selected="${e.moveMethod===G.Append}"
                                        >
                                          at the bottom of
                                        </option>
                                        <option value="after" ?selected="${e.moveMethod===G.After}">
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
                                        @blur="${()=>this._saveUriPlacement(event,"selector",e)}"
                                    /></span>
                                  </div>
                                `:l}

                            <div class="buttons">
                              <guide-slideout-button page-slug="${i[e.guideId].slug}">
                                <button class="btn small" data-icon="eye" type="button">
                                  ${this.tMessages.preview}
                                </button>
                              </guide-slideout-button>
                              <button
                                class="btn icon delete small"
                                type="button"
                                @click="${()=>this._deletePlacement(e.id,i[e.guideId])}"
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
                      ?disabled="${this._getAllPlacementsStatus===m.Loading}"
                      @input="${()=>this._addPlacement(event,s)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault}</option>
                      ${a.map(e=>r`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:l}
          </div>
        `})}
    `}createRenderRoot(){return this}};y([b({attribute:"action-url-get-all-placements"})],$.prototype,"actionUrlGetAllPlacements",2);y([b({attribute:"t-messages",type:Object})],$.prototype,"tMessages",2);y([b({attribute:"groups-data",type:Object})],$.prototype,"groupsData",2);y([u()],$.prototype,"_getAllPlacementsStatus",2);y([u()],$.prototype,"_groupsDataStructured",2);y([u()],$.prototype,"_placements",2);$=y([D("guide-organizer")],$);var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,I=(s,t,i,a)=>{for(var e=a>1?void 0:a?st(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&et(t,i,e),e};let w=class extends C{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await F(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const s={guides:[]};s.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(s),A("guides",this.guidesData,s)}async _importImportData(){const s=this.querySelector("#import-data");s!=null&&s.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:s.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(s){if(this._selectedGuides.includes(s)){const t=this._selectedGuides.indexOf(s);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(s);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return r`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      ${Object.keys(this.guidesData.guides).map(s=>{const t=this.guidesData.guides[s];return r`<ul>
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
    `}createRenderRoot(){return this}};I([b({attribute:"guides-data",type:Object})],w.prototype,"guidesData",2);I([b({attribute:"t-messages",type:Object})],w.prototype,"tMessages",2);I([u()],w.prototype,"_exportData",2);I([u()],w.prototype,"_selectedGuides",2);w=I([D("guide-utilities")],w);
