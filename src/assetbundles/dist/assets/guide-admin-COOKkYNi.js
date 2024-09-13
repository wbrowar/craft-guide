import{n as f,t as x,h as C,k as r,D as c,i as B,r as p,a as q,p as z,R as H,l as U,g as D,u as F}from"./console-3gNWUiwH.js";import{G as $,E as u,A as m,P as v,a as J,M as A}from"./types-BjkgCq3a.js";async function N(i){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(i);else{const t=document.createElement("textarea");t.value=i,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{t.remove()}}}var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,j=(i,t,s,a)=>{for(var e=a>1?void 0:a?W(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&V(t,s,e),e};let G=class extends C{constructor(){super(...arguments),this.tMessages={},this.copyText=""}async _copyTextToClipboard(i){await N(i),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${i}`)}async connectedCallback(){super.connectedCallback()}render(){return r`${this.copyText&&this.tMessages?r`
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
        `:c}`}createRenderRoot(){return this}};j([f({attribute:"t-messages",type:Object})],G.prototype,"tMessages",2);j([f({attribute:"copy-text",type:String})],G.prototype,"copyText",2);G=j([x("guide-copy-text-button")],G);var Y=Object.defineProperty,K=Object.getOwnPropertyDescriptor,_=(i,t,s,a)=>{for(var e=a>1?void 0:a?K(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&Y(t,s,e),e};let h=class extends C{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this.templatesData={},this._componentLists=["settings"],this._contentEditor=null,this._contentSource=$.Field,this._contentSourceSelect=null,this._contentUrlField=null,this._contentUrl="",this._renderMarkdownField=null,this._selectedTabGroup=u.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._template="__none__",this._titleInput=null}_onContentSourceChange(i){var t,s,a,e,o,n,l,g,b;switch(i){case $.Field:(t=this._contentUrlField)==null||t.classList.add("hidden"),(s=this._renderMarkdownField)==null||s.classList.remove("hidden"),(a=this._templateField)==null||a.classList.add("hidden"),this._contentSource=$.Field;break;case $.Iframe:(e=this._contentUrlField)==null||e.classList.remove("hidden"),(o=this._renderMarkdownField)==null||o.classList.add("hidden"),(n=this._templateField)==null||n.classList.add("hidden"),this._contentSource=$.Iframe;break;case $.Template:(l=this._contentUrlField)==null||l.classList.add("hidden"),(g=this._renderMarkdownField)==null||g.classList.add("hidden"),(b=this._templateField)==null||b.classList.remove("hidden"),this._contentSource=$.Template;break}}connectedCallback(){var s,a,e,o,n;super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{var l;!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=q(((l=this._titleInput)==null?void 0:l.value)??""))}),(s=this._slugInput)==null||s.addEventListener("blur",()=>{var l;if(this._slugInput){this._slugHasBeenEdited=!0,this._slugInput.value=q(this._slugInput.value);const g=document.querySelectorAll("guide-copy-text-button"),b=this._slugInput.value;g.forEach(E=>{E.copyText=b}),(l=document.querySelector("guide-editor"))==null||l.setAttribute("data-guide-slug",b)}}),(a=this._slugInput)!=null&&a.value&&((e=document.querySelector("guide-editor"))==null||e.setAttribute("data-guide-slug",this._slugInput.value)),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{var l;this._onContentSourceChange((l=this._contentSourceSelect)==null?void 0:l.value)}),this._onContentSourceChange(this._contentSourceSelect.value));const i=(o=this._contentUrlField)==null?void 0:o.querySelector("input");i&&(i.addEventListener("blur",()=>{i!=null&&i.value&&(this._contentUrl=i.value)}),this._contentUrl=i.value);const t=(n=this._templateField)==null?void 0:n.querySelector("select");if(t&&(t.addEventListener("change",()=>{t!=null&&t.value&&(this._template=t.value)}),this._template=t.value),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const l=this._contentEditor.getModel().getLineCount(),g=this._contentEditor.getModel().getLineMaxColumn(l);this._contentEditor.setPosition({column:g,lineNumber:l})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const i=[];this._componentLists.includes(u.Components)&&i.push(r`
        <button
          class="${this._selectedTabGroup===u.Components?"active":c}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=u.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(u.Images)&&i.push(r`
        <button
          class="${this._selectedTabGroup===u.Images?"active":c}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=u.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(u.Guides)&&i.push(r`
        <button
          class="${this._selectedTabGroup===u.Guides?"active":c}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=u.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(u.Snippets)&&i.push(r`
        <button
          class="${this._selectedTabGroup===u.Snippets?"active":c}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=u.Snippets}"
        >
          <slot name="icon-snippets"></slot><span>${this.tMessages.snippets}</span>
        </button>
      `);let t=r`<div></div>`;return this._contentSource===$.Field?t=r`<div class="guide-editor-content-editor">
        <div><slot name="editor"></slot></div>
      </div>`:this._contentSource===$.Iframe?t=r`<div class="guide-editor-content-iframe">
        <h3>${this.tMessages.iframeLabel}</h3>
        ${this._contentUrl?r`<iframe src="${this._contentUrl??""}"></iframe>`:r`<p>${this.tMessages.iframeEmpty}</p>`}
      </div>`:this._contentSource===$.Template&&(t=r`<div class="guide-editor-content-template">
        <h3>${this.tMessages.templateLabel}</h3>
        ${this._template!=="__none__"?r`<pre><code>${this.templatesData[this._template]??""}</code><div><!-- Mask --></div></pre>`:r`<p>${this.tMessages.templateEmpty}</p>`}
      </div>`),r`
      <aside>
        <div
          class="guide-editor-content-buttons"
          style="--guide-editor-content-buttons-columns: ${this._contentSource===$.Field?1+i.length:1};"
        >
          <button
            class="${this._selectedTabGroup===u.Settings?"active":c}"
            type="button"
            title="${this.tMessages.settings}"
            @click="${()=>this._selectedTabGroup=u.Settings}"
          >
            <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
          </button>
          ${z&&this._contentSource===$.Field?i:c}
        </div>
        ${this._selectedTabGroup===u.Settings?r`<slot name="settings"></slot>`:c}
        ${this._selectedTabGroup===u.Components?r`<slot name="components"></slot>`:c}
        ${this._selectedTabGroup===u.Images?r`<slot name="images"></slot>`:c}
        ${this._selectedTabGroup===u.Guides?r`<slot name="guides"></slot>`:c}
        ${this._selectedTabGroup===u.Snippets?r`<slot name="snippets"></slot>`:c}
      </aside>
      ${t}
    `}};h.styles=B`
    :host {
      display: grid;
      grid-template-columns: var(--grid-template-columns, minmax(1px, 1fr));
      position: relative;
    }
    @container guide-editor (width > 800px) {
      :host {
        --grid-template-columns: 400px minmax(1px, 1fr);
        gap: calc(var(--xl) * 2);
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
    }
    .guide-editor-content-editor {
      & > * {
        position: sticky;
        top: calc(var(--header-height) + 0.5rem);
      }
    }
    .guide-editor-content-iframe {
      iframe {
        aspect-ratio: 16 / 9;
        width: 100%;
        border: 1px solid var(--hairline-color);
        border-radius: var(--guide-border-radius);
      }
    }
    .guide-editor-content-template {
      pre {
        aspect-ratio: 16 / 9;
        padding: var(--s);
        position: relative;
        width: 100%;
        border: 1px solid var(--hairline-color);
        border-radius: var(--guide-border-radius);
        overflow: hidden;

        & div {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
        }
      }
    }
  `;_([f({attribute:"is-new",type:Boolean})],h.prototype,"isNew",2);_([f({attribute:"t-messages",type:Object})],h.prototype,"tMessages",2);_([f({attribute:"templates-data",type:Object})],h.prototype,"templatesData",2);_([p()],h.prototype,"_componentLists",2);_([p()],h.prototype,"_contentEditor",2);_([p()],h.prototype,"_contentSource",2);_([p()],h.prototype,"_contentSourceSelect",2);_([p()],h.prototype,"_contentUrlField",2);_([p()],h.prototype,"_contentUrl",2);_([p()],h.prototype,"_renderMarkdownField",2);_([p()],h.prototype,"_selectedTabGroup",2);_([p()],h.prototype,"_slugHasBeenEdited",2);_([p()],h.prototype,"_slugInput",2);_([p()],h.prototype,"_templateField",2);_([p()],h.prototype,"_template",2);_([p()],h.prototype,"_titleInput",2);h=_([x("guide-editor")],h);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=i=>(...t)=>({_$litDirective$:i,values:t});class Z{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,a){this.t=t,this._$AM=s,this.i=a}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends Z{constructor(t){if(super(t),this.it=c,t.type!==Q.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===H)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}O.directiveName="unsafeHTML",O.resultType=1;const R=X(O);var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,L=(i,t,s,a)=>{for(var e=a>1?void 0:a?et(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&tt(t,s,e),e};let P=class extends C{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(i,t){var e;let s;t==="content"?s=globalThis.monacoEditorInstances.contentEditor:t==="css"?s=globalThis.monacoEditorInstances.contentCss:t==="javascript"&&(s=globalThis.monacoEditorInstances.contentJavascript);const a=(e=document.querySelector("guide-editor"))==null?void 0:e.dataset.guideSlug;if(a&&(i=i.replace(/REPLACE_GUIDE_SLUG/g,a)),s){const o=s.getModel().getLineCount(),n=s.getModel().getLineMaxColumn(o),l=s.getSelection(),b={identifier:{major:1,minor:1},range:{startLineNumber:(l==null?void 0:l.selectionStartLineNumber)??o,startColumn:(l==null?void 0:l.selectionStartColumn)??n,endLineNumber:(l==null?void 0:l.endLineNumber)??o,endColumn:(l==null?void 0:l.endColumn)??n},text:i,forceMoveMarkers:!0};s.executeEdits("my-source",[b]),s.focus()}}connectedCallback(){super.connectedCallback(),U("data",this.data)}render(){var s,a,e,o;let i,t;return(s=this.data)!=null&&s.thumbnail1x&&((a=this.data)!=null&&a.thumbnail2x)?i=r`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:i=c,(e=this.data)!=null&&e.summary?t=[u.Guides,u.Images].includes((o=this.data)==null?void 0:o.group)?r`<p>${this.data.summary}</p>`:r`${R(this.data.summary)}`:t=c,r`
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
                    ${Object.keys(this.data.props).map(n=>{var l,g;return r`<dt class="guide-select-string">${n}</dt>
                        <dd>${(g=(l=this.data)==null?void 0:l.props)==null?void 0:g[n]}</dd>`})}
                  </dl>`:c}
          `:c}
    `}createRenderRoot(){return this}};L([f({attribute:"component-data",type:Object})],P.prototype,"data",2);L([f({attribute:"t-messages",type:Object})],P.prototype,"tMessages",2);L([p()],P.prototype,"_showProps",2);P=L([x("guide-editor-component-list-item")],P);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,I=(i,t,s,a)=>{for(var e=a>1?void 0:a?it(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&st(t,s,e),e};let w=class extends C{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=m.Initial,this._placements=[]}async _getAllPlacements(){var t;this._getAllPlacementsStatus=m.Loading;const i=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=i.filter(s=>s.group===v.Nav),this._getAllPlacementsStatus=m.Success}async _onCmsGuideDisabled(i,t){var a;const s=this._placements.find(e=>e.guideId===i);s&&await((a=window.Craft)==null?void 0:a.postActionRequest("guide/placement/delete-placement",{data:{id:s.id}},(e,o)=>{var n;o==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((n=this.tMessages.placementDeleteSuccess)==null?void 0:n.replace("[guide]",t)))}))}async _onCmsGuideEnabled(i,t){var s;await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:i}},(a,e)=>{var o;e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementSaveSuccess)==null?void 0:o.replace("[guide]",t)))}))}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const i=this.tableHeaders.map(s=>r`<th>${s.label}</th>`),t=D.map(s=>{const a=[];a.push(r`<a href="${s.viewUrl}">${s.title}</a>`),a.push(r`<p>${s.summary??""}</p>`),a.push(r`<guide-copy-text-button
          copy-text="${s.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);const e=this._placements.find(n=>n.guideId===s.id)!==void 0;a.push(r`<input
          type="checkbox"
          switch
          name="cms-guide-${s.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===m.Loading}"
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
    `}createRenderRoot(){return this}};I([f({attribute:"t-messages",type:Object})],w.prototype,"tMessages",2);I([f({attribute:"table-headers",type:Object})],w.prototype,"tableHeaders",2);I([p()],w.prototype,"_getAllPlacementsStatus",2);I([p()],w.prototype,"_placements",2);w=I([x("guide-list")],w);var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,S=(i,t,s,a)=>{for(var e=a>1?void 0:a?ot(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&at(t,s,e),e};let y=class extends C{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.tMessages={},this.groupsData=[],this._getAllPlacementsStatus=m.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(i,t){var a,e;this._getAllPlacementsStatus=m.Loading;const s=parseInt((a=i==null?void 0:i.target)==null?void 0:a.value);if(s){const o=D.find(n=>n.id===s);if(o){const n={access:J.All,group:t.name,guideId:o.id};t.groupId&&(n.groupId=t.groupId),await((e=window.Craft)==null?void 0:e.postActionRequest("guide/placement/save-placement",{data:n},async(l,g)=>{var b;g==="success"&&(window.Craft.cp.displayNotice((b=this.tMessages.placementSaveSuccess)==null?void 0:b.replace("[guide]",o.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=m.Success,i!=null&&i.target&&(i.target.value="__none__"))}))}}}async _deletePlacement(i,t){var s;this._getAllPlacementsStatus=m.Loading,await((s=window.Craft)==null?void 0:s.postActionRequest("guide/placement/delete-placement",{data:{id:i}},async(a,e)=>{var o;e==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementDeleteSuccess)==null?void 0:o.replace("[guide]",t.title)),this._getAllPlacementsStatus=m.Success)}))}async _getAllPlacements(){var t;this._getAllPlacementsStatus=m.Loading;const i=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=i,this._getAllPlacementsStatus=m.Success}async _saveUriPlacement(i,t,s){var o,n;const a=(o=i==null?void 0:i.target)==null?void 0:o.value;if(t==="moveMethod"&&a===s.moveMethod)return;if(t==="selector"&&a===s.selector)return;if(t==="uri"&&a===s.uri)return;this._getAllPlacementsStatus=m.Loading;const e={access:"all",group:"uri",guideId:s.guideId,id:s.id,moveMethod:t==="moveMethod"?a:s.moveMethod,selector:t==="selector"?a:s.selector,uri:t==="uri"?a:s.uri};await((n=window.Craft)==null?void 0:n.postActionRequest("guide/placement/save-placement",{data:e},async(l,g)=>{g==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=m.Success)}))}connectedCallback(){super.connectedCallback(),U("groupsData",this.groupsData);const i=this.groupsData.find(d=>d.name===v.Widget);i&&this._groupsDataStructured.push(i);const t=this.groupsData.find(d=>d.name===v.UiElementEnabled);t&&this._groupsDataStructured.push(t);const s=this.groupsData.find(d=>d.name===v.Entry);s&&this._groupsDataStructured.push(s);const a=this.groupsData.filter(d=>d.name===v.Section);a!=null&&a.length&&this._groupsDataStructured.push(...a);const e=this.groupsData.find(d=>d.name===v.Asset);e&&this._groupsDataStructured.push(e);const o=this.groupsData.filter(d=>d.name===v.AssetVolume);o!=null&&o.length&&this._groupsDataStructured.push(...o);const n=this.groupsData.find(d=>d.name===v.Category);n&&this._groupsDataStructured.push(n);const l=this.groupsData.filter(d=>d.name===v.CategoryGroup);l!=null&&l.length&&this._groupsDataStructured.push(...l);const g=this.groupsData.find(d=>d.name===v.Global);g&&this._groupsDataStructured.push(g);const b=this.groupsData.filter(d=>d.name===v.GlobalSet);b!=null&&b.length&&this._groupsDataStructured.push(...b);const E=this.groupsData.find(d=>d.name===v.User);E&&this._groupsDataStructured.push(E);const k=this.groupsData.find(d=>d.name===v.Uri);k&&this._groupsDataStructured.push(k),this._getAllPlacements()}render(){return r`
      ${this._groupsDataStructured.map(i=>{const t=this._placements.filter(e=>e.group===i.name&&e.groupId===i.groupId),s={};t.forEach(e=>{const o=D.find(n=>n.id===e.guideId);o&&(s[o.id]=o)});const a=i.name===v.Uri?D:D.filter(e=>!Object.keys(s).includes(e.id.toString()));return r`
          <div class="guide-organizer-header guide-organizer-header-${i.headerSize}">
            <h2>${i.header}</h2>
            <p>${R(i.description)}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${i.name}">
            ${t.length?r`
                  <ul>
                    ${t.map(e=>s[e.guideId]?r`<li>
                            <div class="guide-organizer-title">
                              <span>${s[e.guideId].title}</span>
                            </div>

                            ${i.name===v.Uri?r`
                                  <div class="guide-organizer-section-uri-fields">
                                    <span class="input"
                                      ><label for="guide-uri-${e.id}">displayed on page</label>
                                      <input
                                        id="guide-uri-${e.id}"
                                        class="text"
                                        type="text"
                                        placeholder="uri"
                                        value="${e.uri??""}"
                                        ?disabled="${this._getAllPlacementsStatus===m.Loading}"
                                        @blur="${()=>this._saveUriPlacement(event,"uri",e)}"
                                    /></span>
                                    <div class="select">
                                      <select
                                        class="input"
                                        ?disabled="${this._getAllPlacementsStatus===m.Loading}"
                                        @input="${()=>this._saveUriPlacement(event,"moveMethod",e)}"
                                      >
                                        <option
                                          value="before"
                                          ?selected="${e.moveMethod===A.Before}"
                                        >
                                          before
                                        </option>
                                        <option
                                          value="prepend"
                                          ?selected="${e.moveMethod===A.Prepend}"
                                        >
                                          at the top of
                                        </option>
                                        <option
                                          value="append"
                                          ?selected="${e.moveMethod===A.Append}"
                                        >
                                          at the bottom of
                                        </option>
                                        <option value="after" ?selected="${e.moveMethod===A.After}">
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
                                        ?disabled="${this._getAllPlacementsStatus===m.Loading}"
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
                                `:r`<div><span>${s[e.guideId].summary}</span></div>`}

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
                          </li>`:c)}
                  </ul>
                `:r`<div class="guide-organizer-group-empty">
                  <p>${this.tMessages.emptyGroup}</p>
                </div>`}
            ${a.length?r`
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===m.Loading}"
                      @input="${()=>this._addPlacement(event,i)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault} ${i.header}</option>
                      ${a.map(e=>r`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:c}
          </div>
        `})}
    `}createRenderRoot(){return this}};S([f({attribute:"action-url-get-all-placements"})],y.prototype,"actionUrlGetAllPlacements",2);S([f({attribute:"t-messages",type:Object})],y.prototype,"tMessages",2);S([f({attribute:"groups-data",type:Object})],y.prototype,"groupsData",2);S([p()],y.prototype,"_getAllPlacementsStatus",2);S([p()],y.prototype,"_groupsDataStructured",2);S([p()],y.prototype,"_placements",2);y=S([x("guide-organizer")],y);var nt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,T=(i,t,s,a)=>{for(var e=a>1?void 0:a?rt(t,s):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(e=(a?n(t,s,e):n(e))||e);return a&&e&&nt(t,s,e),e};let M=class extends C{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await N(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const i={guides:[]};i.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(i),U("guides",this.guidesData,i)}async _importImportData(){const i=this.querySelector("#import-data");i!=null&&i.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:i.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(i){if(this._selectedGuides.includes(i)){const t=this._selectedGuides.indexOf(i);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(i);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return r`
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
    `}createRenderRoot(){return this}};T([f({attribute:"guides-data",type:Object})],M.prototype,"guidesData",2);T([f({attribute:"t-messages",type:Object})],M.prototype,"tMessages",2);T([p()],M.prototype,"_exportData",2);T([p()],M.prototype,"_selectedGuides",2);M=T([x("guide-utilities")],M);
