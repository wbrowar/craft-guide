import{n as _,t as x,h as M,k as r,D as c,i as B,r as u,a as F,p as z,R as H,l as O,g as C,u as N}from"./console-3gNWUiwH.js";import{E as d,G,A as p,P as g,a as J,M as T}from"./types-BjkgCq3a.js";async function q(s){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(s);else{const t=document.createElement("textarea");t.value=s,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,j=(s,t,i,a)=>{for(var e=a>1?void 0:a?W(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&V(t,i,e),e};let E=class extends M{constructor(){super(...arguments),this.tMessages={},this.copyText=""}async _copyTextToClipboard(s){await q(s),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${s}`)}async connectedCallback(){super.connectedCallback()}render(){return r`${this.copyText&&this.tMessages?r`
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
        `:c}`}createRenderRoot(){return this}};j([_({attribute:"t-messages",type:Object})],E.prototype,"tMessages",2);j([_({attribute:"copy-text",type:String})],E.prototype,"copyText",2);E=j([x("guide-copy-text-button")],E);var Y=Object.defineProperty,K=Object.getOwnPropertyDescriptor,b=(s,t,i,a)=>{for(var e=a>1?void 0:a?K(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&Y(t,i,e),e};let h=class extends M{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this._componentLists=["settings"],this._contentEditor=null,this._contentSourceIsField=!1,this._contentSourceSelect=null,this._contentUrlField=null,this._renderMarkdownField=null,this._selectedTabGroup=d.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._titleInput=null}_onContentSourceChange(s){var t,i,a,e,o,n,m,v,f;switch(s){case G.Field:(t=this._contentUrlField)==null||t.classList.add("hidden"),(i=this._renderMarkdownField)==null||i.classList.remove("hidden"),(a=this._templateField)==null||a.classList.add("hidden"),this._contentSourceIsField=!0;break;case G.Iframe:(e=this._contentUrlField)==null||e.classList.remove("hidden"),(o=this._renderMarkdownField)==null||o.classList.add("hidden"),(n=this._templateField)==null||n.classList.add("hidden"),this._contentSourceIsField=!1;break;case G.Template:(m=this._contentUrlField)==null||m.classList.add("hidden"),(v=this._renderMarkdownField)==null||v.classList.add("hidden"),(f=this._templateField)==null||f.classList.remove("hidden"),this._contentSourceIsField=!1;break}}connectedCallback(){if(super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{var s;!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=F(((s=this._titleInput)==null?void 0:s.value)??""))}),this._slugInput&&this._slugInput.addEventListener("blur",()=>{this._slugInput&&(this._slugHasBeenEdited=!0,this._slugInput.value=F(this._slugInput.value),document.querySelectorAll("guide-copy-text-button").forEach(t=>{t.copyText=this._slugInput.value}))}),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{var s;this._onContentSourceChange((s=this._contentSourceSelect)==null?void 0:s.value)}),this._onContentSourceChange(this._contentSourceSelect.value)),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const s=this._contentEditor.getModel().getLineCount(),t=this._contentEditor.getModel().getLineMaxColumn(s);this._contentEditor.setPosition({column:t,lineNumber:s})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const s=[];this._componentLists.includes(d.Components)&&s.push(r`
        <button
          class="${this._selectedTabGroup===d.Components?"active":c}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=d.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(d.Images)&&s.push(r`
        <button
          class="${this._selectedTabGroup===d.Images?"active":c}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=d.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(d.Guides)&&s.push(r`
        <button
          class="${this._selectedTabGroup===d.Guides?"active":c}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=d.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(d.Snippets)&&s.push(r`
        <button
          class="${this._selectedTabGroup===d.Snippets?"active":c}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=d.Snippets}"
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
            class="${this._selectedTabGroup===d.Settings?"active":c}"
            type="button"
            title="${this.tMessages.settings}"
            @click="${()=>this._selectedTabGroup=d.Settings}"
          >
            <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
          </button>
          ${z&&this._contentSourceIsField?s:c}
        </div>
        ${this._selectedTabGroup===d.Settings?r`<slot name="settings"></slot>`:c}
        ${this._selectedTabGroup===d.Components?r`<slot name="components"></slot>`:c}
        ${this._selectedTabGroup===d.Images?r`<slot name="images"></slot>`:c}
        ${this._selectedTabGroup===d.Guides?r`<slot name="guides"></slot>`:c}
        ${this._selectedTabGroup===d.Snippets?r`<slot name="snippets"></slot>`:c}
      </aside>
      <div class="guide-editor-content-editor"><div>${t}</div></div>
    `}};h.styles=B`
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
  `;b([_({attribute:"is-new",type:Boolean})],h.prototype,"isNew",2);b([_({attribute:"t-messages",type:Object})],h.prototype,"tMessages",2);b([u()],h.prototype,"_componentLists",2);b([u()],h.prototype,"_contentEditor",2);b([u()],h.prototype,"_contentSourceIsField",2);b([u()],h.prototype,"_contentSourceSelect",2);b([u()],h.prototype,"_contentUrlField",2);b([u()],h.prototype,"_renderMarkdownField",2);b([u()],h.prototype,"_selectedTabGroup",2);b([u()],h.prototype,"_slugHasBeenEdited",2);b([u()],h.prototype,"_slugInput",2);b([u()],h.prototype,"_templateField",2);b([u()],h.prototype,"_titleInput",2);h=b([x("guide-editor")],h);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=s=>(...t)=>({_$litDirective$:s,values:t});class Z{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this.t=t,this._$AM=i,this.i=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class L extends Z{constructor(t){if(super(t),this.it=c,t.type!==Q.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===H)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}L.directiveName="unsafeHTML",L.resultType=1;const R=X(L);var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,A=(s,t,i,a)=>{for(var e=a>1?void 0:a?et(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&tt(t,i,e),e};let P=class extends M{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(s,t){let i;if(t==="content"?i=globalThis.monacoEditorInstances.contentEditor:t==="css"?i=globalThis.monacoEditorInstances.cssEditor:t==="javascript"&&(i=globalThis.monacoEditorInstances.javascriptEditor),i){const a=i.getModel().getLineCount(),e=i.getModel().getLineMaxColumn(a),o=i.getSelection(),m={identifier:{major:1,minor:1},range:{startLineNumber:(o==null?void 0:o.selectionStartLineNumber)??a,startColumn:(o==null?void 0:o.selectionStartColumn)??e,endLineNumber:(o==null?void 0:o.endLineNumber)??a,endColumn:(o==null?void 0:o.endColumn)??e},text:s,forceMoveMarkers:!0};i.executeEdits("my-source",[m]),i.focus()}}connectedCallback(){super.connectedCallback(),O("data",this.data)}render(){var i,a,e,o;let s,t;return(i=this.data)!=null&&i.thumbnail1x&&((a=this.data)!=null&&a.thumbnail2x)?s=r`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:s=c,(e=this.data)!=null&&e.summary?t=[d.Guides,d.Images].includes((o=this.data)==null?void 0:o.group)?r`<p>${this.data.summary}</p>`:r`${R(this.data.summary)}`:t=c,r`
      ${this.data?r`
            <div>
              ${s}
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
                  </button>`:c}
              ${this.data.javascriptCode?r`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${()=>{var n;return this._insertTextIntoEditor(((n=this.data)==null?void 0:n.javascriptCode)??"","javascript")}}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`:c}
              ${this.data.props?r`<button
                    class="btn icon"
                    data-icon="${this._showProps?"eye-slash":"eye"}"
                    type="button"
                    @click="${()=>this._showProps=!this._showProps}"
                  >
                    ${this.tMessages.variables}
                  </button>`:c}
            </div>
            ${this.data.props&&this._showProps?r`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map(n=>{var m,v;return r`<dt class="guide-select-string">${n}</dt>
                        <dd>${(v=(m=this.data)==null?void 0:m.props)==null?void 0:v[n]}</dd>`})}
                  </dl>`:c}
          `:c}
    `}createRenderRoot(){return this}};A([_({attribute:"component-data",type:Object})],P.prototype,"data",2);A([_({attribute:"t-messages",type:Object})],P.prototype,"tMessages",2);A([u()],P.prototype,"_showProps",2);P=A([x("guide-editor-component-list-item")],P);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,I=(s,t,i,a)=>{for(var e=a>1?void 0:a?it(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&st(t,i,e),e};let S=class extends M{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=p.Initial,this._placements=[]}async _getAllPlacements(){var t;this._getAllPlacementsStatus=p.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s.filter(i=>i.group===g.Nav),this._getAllPlacementsStatus=p.Success}async _onCmsGuideDisabled(s,t){var a;const i=this._placements.find(e=>e.guideId===s);i&&await((a=window.Craft)==null?void 0:a.postActionRequest("guide/placement/delete-placement",{data:{id:i.id}},(e,o)=>{var n;o==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((n=this.tMessages.placementDeleteSuccess)==null?void 0:n.replace("[guide]",t)))}))}async _onCmsGuideEnabled(s,t){var i;await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:s}},(a,e)=>{var o;e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementSaveSuccess)==null?void 0:o.replace("[guide]",t)))}))}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const s=this.tableHeaders.map(i=>r`<th>${i.label}</th>`),t=C.map(i=>{const a=[];a.push(r`<a href="${i.viewUrl}">${i.title}</a>`),a.push(r`<p>${i.summary??""}</p>`),a.push(r`<guide-copy-text-button
          copy-text="${i.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);const e=this._placements.find(n=>n.guideId===i.id)!==void 0;a.push(r`<input
          type="checkbox"
          switch
          name="cms-guide-${i.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===p.Loading}"
          @change="${e?()=>this._onCmsGuideDisabled(i.id,i.title):()=>this._onCmsGuideEnabled(i.id,i.title)}"
        />`);const o=[];return o.push(r`
        <guide-slideout-button page-slug="${i.slug}">
          <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
        </guide-slideout-button>
      `),N.editGuides&&o.push(r`<a class="btn small secondary" data-icon="pencil" href="${i.editUrl}">${this.tMessages.edit}</a>`),N.deleteGuides&&o.push(r`<a class="btn small" data-icon="trash" href="${i.deleteUrl}">${this.tMessages.delete}</a>`),a.push(r`<div class="buttons">${o.map(n=>n)}</div>`),a});return r`
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
    `}createRenderRoot(){return this}};I([_({attribute:"t-messages",type:Object})],S.prototype,"tMessages",2);I([_({attribute:"table-headers",type:Object})],S.prototype,"tableHeaders",2);I([u()],S.prototype,"_getAllPlacementsStatus",2);I([u()],S.prototype,"_placements",2);S=I([x("guide-list")],S);var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,y=(s,t,i,a)=>{for(var e=a>1?void 0:a?ot(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&at(t,i,e),e};let $=class extends M{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.tMessages={},this.groupsData=[],this._getAllPlacementsStatus=p.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(s,t){var a,e;this._getAllPlacementsStatus=p.Loading;const i=parseInt((a=s==null?void 0:s.target)==null?void 0:a.value);if(i){const o=C.find(n=>n.id===i);if(o){const n={access:J.All,group:t.name,guideId:o.id};t.groupId&&(n.groupId=t.groupId),await((e=window.Craft)==null?void 0:e.postActionRequest("guide/placement/save-placement",{data:n},async(m,v)=>{var f;v==="success"&&(window.Craft.cp.displayNotice((f=this.tMessages.placementSaveSuccess)==null?void 0:f.replace("[guide]",o.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success,s!=null&&s.target&&(s.target.value="__none__"))}))}}}async _deletePlacement(s,t){var i;this._getAllPlacementsStatus=p.Loading,await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/delete-placement",{data:{id:s}},async(a,e)=>{var o;e==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementDeleteSuccess)==null?void 0:o.replace("[guide]",t.title)),this._getAllPlacementsStatus=p.Success)}))}async _getAllPlacements(){var t;this._getAllPlacementsStatus=p.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s,this._getAllPlacementsStatus=p.Success}async _saveUriPlacement(s,t,i){var o,n;const a=(o=s==null?void 0:s.target)==null?void 0:o.value;if(t==="moveMethod"&&a===i.moveMethod)return;if(t==="selector"&&a===i.selector)return;if(t==="uri"&&a===i.uri)return;this._getAllPlacementsStatus=p.Loading;const e={access:"all",group:"uri",guideId:i.guideId,id:i.id,moveMethod:t==="moveMethod"?a:i.moveMethod,selector:t==="selector"?a:i.selector,uri:t==="uri"?a:i.uri};await((n=window.Craft)==null?void 0:n.postActionRequest("guide/placement/save-placement",{data:e},async(m,v)=>{v==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success)}))}connectedCallback(){super.connectedCallback(),O("groupsData",this.groupsData);const s=this.groupsData.find(l=>l.name===g.Widget);s&&this._groupsDataStructured.push(s);const t=this.groupsData.find(l=>l.name===g.UiElementEnabled);t&&this._groupsDataStructured.push(t);const i=this.groupsData.find(l=>l.name===g.Entry);i&&this._groupsDataStructured.push(i);const a=this.groupsData.filter(l=>l.name===g.Section);a!=null&&a.length&&this._groupsDataStructured.push(...a);const e=this.groupsData.find(l=>l.name===g.Asset);e&&this._groupsDataStructured.push(e);const o=this.groupsData.filter(l=>l.name===g.AssetVolume);o!=null&&o.length&&this._groupsDataStructured.push(...o);const n=this.groupsData.find(l=>l.name===g.Category);n&&this._groupsDataStructured.push(n);const m=this.groupsData.filter(l=>l.name===g.CategoryGroup);m!=null&&m.length&&this._groupsDataStructured.push(...m);const v=this.groupsData.find(l=>l.name===g.Global);v&&this._groupsDataStructured.push(v);const f=this.groupsData.filter(l=>l.name===g.GlobalSet);f!=null&&f.length&&this._groupsDataStructured.push(...f);const k=this.groupsData.find(l=>l.name===g.User);k&&this._groupsDataStructured.push(k);const U=this.groupsData.find(l=>l.name===g.Uri);U&&this._groupsDataStructured.push(U),this._getAllPlacements()}render(){return r`
      ${this._groupsDataStructured.map(s=>{const t=this._placements.filter(e=>e.group===s.name&&e.groupId===s.groupId),i={};t.forEach(e=>{const o=C.find(n=>n.id===e.guideId);o&&(i[o.id]=o)});const a=s.name===g.Uri?C:C.filter(e=>!Object.keys(i).includes(e.id.toString()));return r`
          <div class="guide-organizer-header guide-organizer-header-${s.headerSize}">
            <h2>${s.header}</h2>
            <p>${R(s.description)}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${s.name}">
            ${t.length?r`
                  <ul>
                    ${t.map(e=>i[e.guideId]?r`<li>
                            <div class="guide-organizer-title">
                              <span>${i[e.guideId].title}</span>
                            </div>

                            ${s.name===g.Uri?r`
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
                                        placeholder="selector"
                                        value="${e.selector??""}"
                                        ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                                        @blur="${()=>this._saveUriPlacement(event,"selector",e)}"
                                    /></span>

                                    ${e.uri&&e.selector?r`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                          >✓</span
                                        >`:r`<span
                                          class="guide-uri-invalid"
                                          title="${this.tMessages.uriPlacementIsInvalid}"
                                          >ⓧ</span
                                        >`}
                                  </div>
                                `:r`<div><span>${i[e.guideId].summary}</span></div>`}

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
                          </li>`:c)}
                  </ul>
                `:r`<div class="guide-organizer-group-empty">
                  <p>${this.tMessages.emptyGroup}</p>
                </div>`}
            ${a.length?r`
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                      @input="${()=>this._addPlacement(event,s)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault} ${s.header}</option>
                      ${a.map(e=>r`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:c}
          </div>
        `})}
    `}createRenderRoot(){return this}};y([_({attribute:"action-url-get-all-placements"})],$.prototype,"actionUrlGetAllPlacements",2);y([_({attribute:"t-messages",type:Object})],$.prototype,"tMessages",2);y([_({attribute:"groups-data",type:Object})],$.prototype,"groupsData",2);y([u()],$.prototype,"_getAllPlacementsStatus",2);y([u()],$.prototype,"_groupsDataStructured",2);y([u()],$.prototype,"_placements",2);$=y([x("guide-organizer")],$);var nt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,D=(s,t,i,a)=>{for(var e=a>1?void 0:a?rt(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&nt(t,i,e),e};let w=class extends M{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await q(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const s={guides:[]};s.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(s),O("guides",this.guidesData,s)}async _importImportData(){const s=this.querySelector("#import-data");s!=null&&s.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:s.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(s){if(this._selectedGuides.includes(s)){const t=this._selectedGuides.indexOf(s);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(s);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return r`
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
    `}createRenderRoot(){return this}};D([_({attribute:"guides-data",type:Object})],w.prototype,"guidesData",2);D([_({attribute:"t-messages",type:Object})],w.prototype,"tMessages",2);D([u()],w.prototype,"_exportData",2);D([u()],w.prototype,"_selectedGuides",2);w=D([x("guide-utilities")],w);
