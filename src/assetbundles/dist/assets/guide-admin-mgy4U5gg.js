import{n as v,t as C,h as P,D as u,k as r,i as H,r as h,a as N,p as U,R as J,g as D,b as z,u as R}from"./globals-DdpOBsmD.js";import{G as $,E as c,A as g,P as m,a as V,M as G}from"./types-DZ_LYyIe.js";import{l as W}from"./console-DyT9hXlL.js";async function B(s){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(s);else{const t=document.createElement("textarea");t.value=s,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(i){console.error(i)}finally{t.remove()}}}var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,k=(s,t,i,a)=>{for(var e=a>1?void 0:a?Q(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&K(t,i,e),e};let L=class extends P{constructor(){super(...arguments),this.tMessages={},this.copyText=""}async _copyTextToClipboard(s){await B(s),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${s}`)}async connectedCallback(){super.connectedCallback()}render(){return r`${this.copyText&&this.tMessages?r`
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
        `:u}`}createRenderRoot(){return this}};k([v({attribute:"t-messages",type:Object})],L.prototype,"tMessages",2);k([v({attribute:"copy-text",type:String})],L.prototype,"copyText",2);L=k([C("guide-copy-text-button")],L);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,b=(s,t,i,a)=>{for(var e=a>1?void 0:a?Y(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&X(t,i,e),e};let _=class extends P{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this.templatesData={},this._componentLists=["settings"],this._contentEditor=null,this._contentSource=$.Field,this._contentSourceSelect=null,this._contentUrlField=null,this._contentUrl="",this._renderMarkdownField=null,this._selectedTabGroup=c.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._template="__none__",this._titleInput=null}_onContentSourceChange(s){var t,i,a,e,o,n,l,p,f;switch(s){case $.Field:(t=this._contentUrlField)==null||t.classList.add("hidden"),(i=this._renderMarkdownField)==null||i.classList.remove("hidden"),(a=this._templateField)==null||a.classList.add("hidden"),this._contentSource=$.Field;break;case $.Iframe:(e=this._contentUrlField)==null||e.classList.remove("hidden"),(o=this._renderMarkdownField)==null||o.classList.add("hidden"),(n=this._templateField)==null||n.classList.add("hidden"),this._contentSource=$.Iframe;break;case $.Template:(l=this._contentUrlField)==null||l.classList.add("hidden"),(p=this._renderMarkdownField)==null||p.classList.add("hidden"),(f=this._templateField)==null||f.classList.remove("hidden"),this._contentSource=$.Template;break}}connectedCallback(){var i,a,e,o,n;super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{var l,p;!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=N(((l=this._titleInput)==null?void 0:l.value)??""),(p=document.querySelector("guide-editor"))==null||p.setAttribute("data-guide-slug",this._slugInput.value))}),(i=this._slugInput)==null||i.addEventListener("blur",()=>{var l;if(this._slugInput){this._slugHasBeenEdited=!0,this._slugInput.value=N(this._slugInput.value);const p=document.querySelectorAll("guide-copy-text-button"),f=this._slugInput.value;p.forEach(w=>{w.copyText=f}),(l=document.querySelector("guide-editor"))==null||l.setAttribute("data-guide-slug",f)}}),(a=this._slugInput)!=null&&a.value&&((e=document.querySelector("guide-editor"))==null||e.setAttribute("data-guide-slug",this._slugInput.value)),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{var l;this._onContentSourceChange((l=this._contentSourceSelect)==null?void 0:l.value)}),this._onContentSourceChange(this._contentSourceSelect.value));const s=(o=this._contentUrlField)==null?void 0:o.querySelector("input");s&&(s.addEventListener("blur",()=>{s!=null&&s.value&&(this._contentUrl=s.value)}),this._contentUrl=s.value);const t=(n=this._templateField)==null?void 0:n.querySelector("select");if(t&&(t.addEventListener("change",()=>{t!=null&&t.value&&(this._template=t.value)}),this._template=t.value),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const l=this._contentEditor.getModel().getLineCount(),p=this._contentEditor.getModel().getLineMaxColumn(l);this._contentEditor.setPosition({column:p,lineNumber:l})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const s=[];this._componentLists.includes(c.Settings)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Settings?"active":u}"
          type="button"
          title="${this.tMessages.settings}"
          @click="${()=>this._selectedTabGroup=c.Settings}"
        >
          <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
        </button>
      `),this._componentLists.includes(c.Components)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Components?"active":u}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=c.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(c.Images)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Images?"active":u}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=c.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(c.Guides)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Guides?"active":u}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=c.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(c.Snippets)&&s.push(r`
        <button
          class="${this._selectedTabGroup===c.Snippets?"active":u}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=c.Snippets}"
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
        ${U?r`<div
              class="guide-editor-content-buttons"
              style="--guide-editor-content-buttons-columns: ${s.length};"
            >
              ${s}
            </div>`:u}
        ${this._selectedTabGroup===c.Settings?r`<slot name="settings"></slot>`:u}
        ${this._selectedTabGroup===c.Components?r`<slot name="components"></slot>`:u}
        ${this._selectedTabGroup===c.Images?r`<slot name="images"></slot>`:u}
        ${this._selectedTabGroup===c.Guides?r`<slot name="guides"></slot>`:u}
        ${this._selectedTabGroup===c.Snippets?r`<slot name="snippets"></slot>`:u}
      </aside>
      ${t}
    `}};_.styles=H`
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
        top: calc(var(--guide-top) + 0.5rem);
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
  `;b([v({attribute:"is-new",type:Boolean})],_.prototype,"isNew",2);b([v({attribute:"t-messages",type:Object})],_.prototype,"tMessages",2);b([v({attribute:"templates-data",type:Object})],_.prototype,"templatesData",2);b([h()],_.prototype,"_componentLists",2);b([h()],_.prototype,"_contentEditor",2);b([h()],_.prototype,"_contentSource",2);b([h()],_.prototype,"_contentSourceSelect",2);b([h()],_.prototype,"_contentUrlField",2);b([h()],_.prototype,"_contentUrl",2);b([h()],_.prototype,"_renderMarkdownField",2);b([h()],_.prototype,"_selectedTabGroup",2);b([h()],_.prototype,"_slugHasBeenEdited",2);b([h()],_.prototype,"_slugInput",2);b([h()],_.prototype,"_templateField",2);b([h()],_.prototype,"_template",2);b([h()],_.prototype,"_titleInput",2);_=b([C("guide-editor")],_);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={CHILD:2},tt=s=>(...t)=>({_$litDirective$:s,values:t});class et{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,a){this.t=t,this._$AM=i,this.i=a}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j extends et{constructor(t){if(super(t),this.it=u,t.type!==Z.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this._t=void 0,this.it=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}j.directiveName="unsafeHTML",j.resultType=1;const E=tt(j);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,O=(s,t,i,a)=>{for(var e=a>1?void 0:a?it(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&st(t,i,e),e};let I=class extends P{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(s,t){var e;let i;t==="content"?i=globalThis.monacoEditorInstances.contentEditor:t==="css"?i=globalThis.monacoEditorInstances.contentCss:t==="javascript"&&(i=globalThis.monacoEditorInstances.contentJavascript);const a=(e=document.querySelector("guide-editor"))==null?void 0:e.dataset.guideSlug;if(a){const o=new Date;s=s.replace(/REPLACE_DATE/g,o.toISOString().split("T")[0]).replace(/REPLACE_GUIDE_SLUG/g,a)}if(i){const o=i.getModel().getLineCount(),n=i.getModel().getLineMaxColumn(o),l=i.getSelection(),f={identifier:{major:1,minor:1},range:{startLineNumber:(l==null?void 0:l.selectionStartLineNumber)??o,startColumn:(l==null?void 0:l.selectionStartColumn)??n,endLineNumber:(l==null?void 0:l.endLineNumber)??o,endColumn:(l==null?void 0:l.endColumn)??n},text:s,forceMoveMarkers:!0};i.executeEdits("my-source",[f]),i.focus()}}connectedCallback(){super.connectedCallback()}render(){var i,a,e,o;let s,t;return(i=this.data)!=null&&i.thumbnail1x&&((a=this.data)!=null&&a.thumbnail2x)?s=r`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:s=u,(e=this.data)!=null&&e.summary?t=[c.Guides,c.Images].includes((o=this.data)==null?void 0:o.group)?r`<p>${this.data.summary}</p>`:r`${E(this.data.summary)}`:t=u,r`
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
                  </button>`:u}
              ${this.data.javascriptCode?r`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${()=>{var n;return this._insertTextIntoEditor(((n=this.data)==null?void 0:n.javascriptCode)??"","javascript")}}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`:u}
              ${this.data.props?r`<button
                    class="btn icon"
                    data-icon="${this._showProps?"eye-slash":"eye"}"
                    type="button"
                    @click="${()=>this._showProps=!this._showProps}"
                  >
                    ${this.tMessages.variables}
                  </button>`:u}
            </div>
            ${this.data.props&&this._showProps?r`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map(n=>{var l,p;return r`<dt class="guide-select-string">${n}</dt>
                        <dd>${(p=(l=this.data)==null?void 0:l.props)==null?void 0:p[n]}</dd>`})}
                  </dl>`:u}
          `:u}
    `}createRenderRoot(){return this}};O([v({attribute:"component-data",type:Object})],I.prototype,"data",2);O([v({attribute:"t-messages",type:Object})],I.prototype,"tMessages",2);O([h()],I.prototype,"_showProps",2);I=O([C("guide-editor-component-list-item")],I);var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,A=(s,t,i,a)=>{for(var e=a>1?void 0:a?ot(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&at(t,i,e),e};let M=class extends P{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=g.Initial,this._placements=[]}async _getAllPlacements(){var t;this._getAllPlacementsStatus=g.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s.filter(i=>i.group===m.Nav),this._getAllPlacementsStatus=g.Success}async _onCmsGuideDisabled(s,t){var a;const i=this._placements.find(e=>e.guideId===s);i&&await((a=window.Craft)==null?void 0:a.postActionRequest("guide/placement/delete-placement",{data:{id:i.id}},(e,o)=>{var n;o==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((n=this.tMessages.placementDeleteSuccess)==null?void 0:n.replace("[guide]",t)))}))}async _onCmsGuideEnabled(s,t){var i;await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:s}},(a,e)=>{var o;e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementSaveSuccess)==null?void 0:o.replace("[guide]",t)))}))}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const s=this.tableHeaders.map(i=>r`<th>${i.label}</th>`),t=D.map(i=>{const a=[];a.push(U?r`<a href="${i.viewUrl}" title="${this.tMessages.linkToGuidePage}"
              >${E(z)}${i.title}</a
            >`:r`<h3>${i.title}</h3>`),a.push(r`<p>${i.summary??""}</p>`),a.push(r`<guide-copy-text-button
          copy-text="${i.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);const e=this._placements.find(n=>n.guideId===i.id)!==void 0;a.push(r`<input
          type="checkbox"
          switch
          name="cms-guide-${i.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===g.Loading}"
          @change="${e?()=>this._onCmsGuideDisabled(i.id,i.title):()=>this._onCmsGuideEnabled(i.id,i.title)}"
        />`);const o=[];return U&&o.push(r`
          <guide-slideout-button page-slug="${i.slug}">
            <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
          </guide-slideout-button>
        `),R.editGuides&&o.push(r`<a class="btn small secondary" data-icon="pencil" href="${i.editUrl}">${this.tMessages.edit}</a>`),R.deleteGuides&&o.push(r`<a class="btn small" data-icon="trash" href="${i.deleteUrl}">${this.tMessages.delete}</a>`),a.push(r`<div class="buttons">${o.map(n=>n)}</div>`),a});return r`
      ${t.length?r`
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
          `:r`<p>${this.tMessages.listEmpty}</p>`}
    `}createRenderRoot(){return this}};A([v({attribute:"t-messages",type:Object})],M.prototype,"tMessages",2);A([v({attribute:"table-headers",type:Object})],M.prototype,"tableHeaders",2);A([h()],M.prototype,"_getAllPlacementsStatus",2);A([h()],M.prototype,"_placements",2);M=A([C("guide-list")],M);var nt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,S=(s,t,i,a)=>{for(var e=a>1?void 0:a?rt(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&nt(t,i,e),e};let y=class extends P{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.fieldsData=[],this.groupsData=[],this.tMessages={},this._getAllPlacementsStatus=g.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(s,t){var a,e;this._getAllPlacementsStatus=g.Loading;const i=parseInt((a=s==null?void 0:s.target)==null?void 0:a.value);if(i){const o=D.find(n=>n.id===i);if(o){const n={access:V.All,group:t.name,guideId:o.id};t.groupId&&(n.groupId=t.groupId),await((e=window.Craft)==null?void 0:e.postActionRequest("guide/placement/save-placement",{data:n},async(l,p)=>{var f;p==="success"&&(window.Craft.cp.displayNotice((f=this.tMessages.placementSaveSuccess)==null?void 0:f.replace("[guide]",o.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=g.Success,s!=null&&s.target&&(s.target.value="__none__"))}))}}}async _deletePlacement(s,t){var i;this._getAllPlacementsStatus=g.Loading,await((i=window.Craft)==null?void 0:i.postActionRequest("guide/placement/delete-placement",{data:{id:s}},async(a,e)=>{var o;e==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice((o=this.tMessages.placementDeleteSuccess)==null?void 0:o.replace("[guide]",t.title)),this._getAllPlacementsStatus=g.Success)}))}async _getAllPlacements(){var t;this._getAllPlacementsStatus=g.Loading;const s=await((t=window.Craft)==null?void 0:t.postActionRequest("guide/placement/get-all-placements"));this._placements=s,this._getAllPlacementsStatus=g.Success}async _saveFieldPlacement(s,t){var e,o;const i=(e=s==null?void 0:s.target)==null?void 0:e.value;this._getAllPlacementsStatus=g.Loading;const a={access:"all",group:"field",groupId:i==="__none__"?null:i,guideId:t.guideId,id:t.id};await((o=window.Craft)==null?void 0:o.postActionRequest("guide/placement/save-placement",{data:a},async(n,l)=>{l==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=g.Success)}))}async _saveUriPlacement(s,t,i){var o,n;const a=(o=s==null?void 0:s.target)==null?void 0:o.value;if(t==="moveMethod"&&a===i.moveMethod)return;if(t==="selector"&&a===i.selector)return;if(t==="uri"&&a===i.uri)return;this._getAllPlacementsStatus=g.Loading;const e={access:"all",group:"uri",guideId:i.guideId,id:i.id,moveMethod:t==="moveMethod"?a:i.moveMethod,selector:t==="selector"?a:i.selector,uri:t==="uri"?a:i.uri};await((n=window.Craft)==null?void 0:n.postActionRequest("guide/placement/save-placement",{data:e},async(l,p)=>{p==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=g.Success)}))}connectedCallback(){super.connectedCallback();const s=this.groupsData.find(d=>d.name===m.Widget);s&&this._groupsDataStructured.push(s);const t=this.groupsData.find(d=>d.name===m.UiElementEnabled);t&&this._groupsDataStructured.push(t);const i=this.groupsData.find(d=>d.name===m.Field);i&&this._groupsDataStructured.push(i);const a=this.groupsData.find(d=>d.name===m.Entry);a&&this._groupsDataStructured.push(a);const e=this.groupsData.filter(d=>d.name===m.Section);e!=null&&e.length&&this._groupsDataStructured.push(...e);const o=this.groupsData.find(d=>d.name===m.Asset);o&&this._groupsDataStructured.push(o);const n=this.groupsData.filter(d=>d.name===m.AssetVolume);n!=null&&n.length&&this._groupsDataStructured.push(...n);const l=this.groupsData.find(d=>d.name===m.Category);l&&this._groupsDataStructured.push(l);const p=this.groupsData.filter(d=>d.name===m.CategoryGroup);p!=null&&p.length&&this._groupsDataStructured.push(...p);const f=this.groupsData.find(d=>d.name===m.Global);f&&this._groupsDataStructured.push(f);const w=this.groupsData.filter(d=>d.name===m.GlobalSet);w!=null&&w.length&&this._groupsDataStructured.push(...w);const F=this.groupsData.find(d=>d.name===m.User);F&&this._groupsDataStructured.push(F);const q=this.groupsData.find(d=>d.name===m.Uri);q&&this._groupsDataStructured.push(q),this._getAllPlacements()}render(){return r`
      ${this._groupsDataStructured.map(s=>{const t=this._placements.filter(e=>[m.Field].includes(e.group)?e.group===s.name:e.group===s.name&&e.groupId===s.groupId),i={};t.forEach(e=>{const o=D.find(n=>n.id===e.guideId);o&&(i[o.id]=o)});const a=[m.Field,m.Uri].includes(s.name)?D:D.filter(e=>!Object.keys(i).includes(e.id.toString()));return r`
          <div class="guide-organizer-header guide-organizer-header-${s.headerSize}">
            <h2>${s.header}</h2>
            <p>${E(s.description)}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${s.name}">
            ${t.length?r`
                  <ul>
                    ${t.map(e=>{let o;if(s.name===m.Field){W(this.fieldsData,t);const n=t.map(l=>l.groupId??"");o=r`
                          <div class="guide-organizer-section-flex-fields">
                            <label for="guide-field-${e.id}">is assigned to field</label>
                            <div class="select">
                              <select
                                id="guide-field-${e.id}"
                                class="input"
                                ?disabled="${this._getAllPlacementsStatus===g.Loading}"
                                @input="${()=>this._saveFieldPlacement(event,e)}"
                              >
                                <option value="__none__">${this.tMessages.addFieldToGuide}</option>
                                ${this.fieldsData.map(l=>r`<option
                                    ?disabled="${n.includes(l.uid)}"
                                    ?selected="${e.groupId===l.uid}"
                                    value="${l.uid}"
                                  >
                                    ${l.name}
                                  </option>`)}
                              </select>
                            </div>

                            ${e.groupId?r`<span class="guide-uri-valid" title="${this.tMessages.fieldPlacementIsValid}"
                                  >✓</span
                                >`:r`<span class="guide-uri-invalid" title="${this.tMessages.fieldPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `}else s.name===m.Uri?o=r`
                          <div class="guide-organizer-section-flex-fields">
                            <span class="input"
                              ><label for="guide-uri-${e.id}">displayed on page(s)</label>
                              <input
                                id="guide-uri-${e.id}"
                                class="text"
                                type="text"
                                placeholder="uri pattern"
                                value="${e.uri??""}"
                                ?disabled="${this._getAllPlacementsStatus===g.Loading}"
                                @blur="${()=>this._saveUriPlacement(event,"uri",e)}"
                            /></span>
                            <div class="select">
                              <select
                                class="input"
                                ?disabled="${this._getAllPlacementsStatus===g.Loading}"
                                @input="${()=>this._saveUriPlacement(event,"moveMethod",e)}"
                              >
                                <option value="before" ?selected="${e.moveMethod===G.Before}">
                                  before
                                </option>
                                <option value="prepend" ?selected="${e.moveMethod===G.Prepend}">
                                  at the top of
                                </option>
                                <option value="append" ?selected="${e.moveMethod===G.Append}">
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
                                placeholder="selector"
                                value="${e.selector??""}"
                                ?disabled="${this._getAllPlacementsStatus===g.Loading}"
                                @blur="${()=>this._saveUriPlacement(event,"selector",e)}"
                            /></span>

                            ${e.uri&&e.selector?r`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                  >✓</span
                                >`:r`<span class="guide-uri-invalid" title="${this.tMessages.uriPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `:o=r`<div><span>${i[e.guideId].summary}</span></div>`;return i[e.guideId]?r`<li>
                            <div class="guide-organizer-title">
                              ${E(z)}<span>${i[e.guideId].title}</span>
                            </div>

                            ${o}

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
                          </li>`:u})}
                  </ul>
                `:r`<div class="guide-organizer-group-empty">
                  <p>${this.tMessages.emptyGroup}</p>
                </div>`}
            ${a.length?r`
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===g.Loading}"
                      @input="${()=>this._addPlacement(event,s)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault} ${s.header}</option>
                      ${a.map(e=>r`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:u}
          </div>
        `})}
    `}createRenderRoot(){return this}};S([v({attribute:"action-url-get-all-placements"})],y.prototype,"actionUrlGetAllPlacements",2);S([v({attribute:"fields-data",type:Object})],y.prototype,"fieldsData",2);S([v({attribute:"groups-data",type:Object})],y.prototype,"groupsData",2);S([v({attribute:"t-messages",type:Object})],y.prototype,"tMessages",2);S([h()],y.prototype,"_getAllPlacementsStatus",2);S([h()],y.prototype,"_groupsDataStructured",2);S([h()],y.prototype,"_placements",2);y=S([C("guide-organizer")],y);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,T=(s,t,i,a)=>{for(var e=a>1?void 0:a?dt(t,i):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(t,i,e):n(e))||e);return a&&e&&lt(t,i,e),e};let x=class extends P{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await B(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const s={guides:[]};s.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(s)}async _importImportData(){const s=this.querySelector("#import-data");s!=null&&s.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:s.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(s){if(this._selectedGuides.includes(s)){const t=this._selectedGuides.indexOf(s);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(s);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return r`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      <ul>
        ${Object.keys(this.guidesData.guides).map(s=>{const t=this.guidesData.guides[s];return r`<li>
            <input
              id="guide-for-export-${t.slug}"
              name="guide-for-export-${t.slug}"
              type="checkbox"
              ?checked="${this._selectedGuides.includes(t.slug)}"
              @input="${()=>this._onGuideCheckboxInput(t.slug)}"
            />
            <label for="guide-for-export-${t.slug}">${t.title}</label>
          </li>`})}
      </ul>

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
    `}createRenderRoot(){return this}};T([v({attribute:"guides-data",type:Object})],x.prototype,"guidesData",2);T([v({attribute:"t-messages",type:Object})],x.prototype,"tMessages",2);T([h()],x.prototype,"_exportData",2);T([h()],x.prototype,"_selectedGuides",2);x=T([C("guide-utilities")],x);
