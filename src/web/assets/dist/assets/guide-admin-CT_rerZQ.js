import{n as _,t as w,i as M,E as c,x as o,a as H,r as u,k as N,p as L,T as J,g as x,b as z,u as R}from"./globals-tUPxSBuY.js";import{G as v,E as d,A as p,P as h,a as V,M as T}from"./types-B_LyD8Hq.js";import{l as W}from"./console-DyT9hXlL.js";async function B(i){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(i);else{const t=document.createElement("textarea");t.value=i,t.classList.add("sr-only"),document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{t.remove()}}}var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,U=(i,t,s,a)=>{for(var e=a>1?void 0:a?Q(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&K(t,s,e),e};let A=class extends M{constructor(){super(...arguments),this.tMessages={},this.copyText=""}async _copyTextToClipboard(i){await B(i),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${i}`)}async connectedCallback(){super.connectedCallback()}render(){return o`${this.copyText&&this.tMessages?o`
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
        `:c}`}createRenderRoot(){return this}};U([_({attribute:"t-messages",type:Object})],A.prototype,"tMessages",2);U([_({attribute:"copy-text",type:String})],A.prototype,"copyText",2);A=U([w("guide-copy-text-button")],A);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,m=(i,t,s,a)=>{for(var e=a>1?void 0:a?Y(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&X(t,s,e),e};let g=class extends M{constructor(){super(...arguments),this.isNew=!1,this.tMessages={},this.templatesData={},this._componentLists=["settings"],this._contentEditor=null,this._contentSource=v.Field,this._contentSourceSelect=null,this._contentUrlField=null,this._contentUrl="",this._renderMarkdownField=null,this._selectedTabGroup=d.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._template="__none__",this._titleInput=null}_onContentSourceChange(i){switch(i){case v.Field:this._contentUrlField?.classList.add("hidden"),this._renderMarkdownField?.classList.remove("hidden"),this._templateField?.classList.add("hidden"),this._contentSource=v.Field;break;case v.Iframe:this._contentUrlField?.classList.remove("hidden"),this._renderMarkdownField?.classList.add("hidden"),this._templateField?.classList.add("hidden"),this._contentSource=v.Iframe;break;case v.Template:this._contentUrlField?.classList.add("hidden"),this._renderMarkdownField?.classList.add("hidden"),this._templateField?.classList.remove("hidden"),this._contentSource=v.Template;break}}connectedCallback(){super.connectedCallback(),this._contentSourceSelect=this.querySelector('guide-editor select[name="contentSource"]'),this._contentUrlField=this.querySelector("guide-editor #contentUrl-field"),this._renderMarkdownField=this.querySelector("guide-editor #renderMarkdown-field"),this._slugInput=this.querySelector('guide-editor input[name="slug"]'),this._templateField=this.querySelector("guide-editor #template-field"),this._titleInput=this.querySelector('guide-editor input[name="title"]'),this.isNew&&this._titleInput&&this._titleInput.addEventListener("input",()=>{!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=N(this._titleInput?.value??""),document.querySelector("guide-editor")?.setAttribute("data-guide-slug",this._slugInput.value))}),this._slugInput?.addEventListener("blur",()=>{if(this._slugInput){this._slugHasBeenEdited=!0,this._slugInput.value=N(this._slugInput.value);const s=document.querySelectorAll("guide-copy-text-button"),a=this._slugInput.value;s.forEach(e=>{e.copyText=a}),document.querySelector("guide-editor")?.setAttribute("data-guide-slug",a)}}),this._slugInput?.value&&document.querySelector("guide-editor")?.setAttribute("data-guide-slug",this._slugInput.value),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener("change",()=>{this._onContentSourceChange(this._contentSourceSelect?.value)}),this._onContentSourceChange(this._contentSourceSelect.value));const i=this._contentUrlField?.querySelector("input");i&&(i.addEventListener("blur",()=>{i?.value&&(this._contentUrl=i.value)}),this._contentUrl=i.value);const t=this._templateField?.querySelector("select");if(t&&(t.addEventListener("change",()=>{t?.value&&(this._template=t.value)}),this._template=t.value),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){const s=this._contentEditor.getModel().getLineCount(),a=this._contentEditor.getModel().getLineMaxColumn(s);this._contentEditor.setPosition({column:a,lineNumber:s})}this.querySelector("#editor-component-list-components")&&this._componentLists.push("components"),this.querySelector("#editor-component-list-guides")&&this._componentLists.push("guides"),this.querySelector("#editor-component-list-images")&&this._componentLists.push("images"),this.querySelector("#editor-component-list-snippets")&&this._componentLists.push("snippets")}render(){const i=[];this._componentLists.includes(d.Settings)&&i.push(o`
        <button
          class="${this._selectedTabGroup===d.Settings?"active":c}"
          type="button"
          title="${this.tMessages.settings}"
          @click="${()=>this._selectedTabGroup=d.Settings}"
        >
          <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
        </button>
      `),this._componentLists.includes(d.Components)&&i.push(o`
        <button
          class="${this._selectedTabGroup===d.Components?"active":c}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=d.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(d.Images)&&i.push(o`
        <button
          class="${this._selectedTabGroup===d.Images?"active":c}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=d.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(d.Guides)&&i.push(o`
        <button
          class="${this._selectedTabGroup===d.Guides?"active":c}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=d.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(d.Snippets)&&i.push(o`
        <button
          class="${this._selectedTabGroup===d.Snippets?"active":c}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=d.Snippets}"
        >
          <slot name="icon-snippets"></slot><span>${this.tMessages.snippets}</span>
        </button>
      `);let t=o`<div></div>`;return this._contentSource===v.Field?t=o`<div class="guide-editor-content-editor">
        <div><slot name="editor"></slot></div>
      </div>`:this._contentSource===v.Iframe?t=o`<div class="guide-editor-content-iframe">
        <h3>${this.tMessages.iframeLabel}</h3>
        ${this._contentUrl?o`<iframe src="${this._contentUrl??""}"></iframe>`:o`<p>${this.tMessages.iframeEmpty}</p>`}
      </div>`:this._contentSource===v.Template&&(t=o`<div class="guide-editor-content-template">
        <h3>${this.tMessages.templateLabel}</h3>
        ${this._template!=="__none__"?o`<pre><code>${this.templatesData[this._template]??""}</code><div><!-- Mask --></div></pre>`:o`<p>${this.tMessages.templateEmpty}</p>`}
      </div>`),o`
      <aside>
        ${L?o`<div
              class="guide-editor-content-buttons"
              style="--guide-editor-content-buttons-columns: ${i.length};"
            >
              ${i}
            </div>`:c}
        ${this._selectedTabGroup===d.Settings?o`<slot name="settings"></slot>`:c}
        ${this._selectedTabGroup===d.Components?o`<slot name="components"></slot>`:c}
        ${this._selectedTabGroup===d.Images?o`<slot name="images"></slot>`:c}
        ${this._selectedTabGroup===d.Guides?o`<slot name="guides"></slot>`:c}
        ${this._selectedTabGroup===d.Snippets?o`<slot name="snippets"></slot>`:c}
      </aside>
      ${t}
    `}};g.styles=H`
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
  `;m([_({attribute:"is-new",type:Boolean})],g.prototype,"isNew",2);m([_({attribute:"t-messages",type:Object})],g.prototype,"tMessages",2);m([_({attribute:"templates-data",type:Object})],g.prototype,"templatesData",2);m([u()],g.prototype,"_componentLists",2);m([u()],g.prototype,"_contentEditor",2);m([u()],g.prototype,"_contentSource",2);m([u()],g.prototype,"_contentSourceSelect",2);m([u()],g.prototype,"_contentUrlField",2);m([u()],g.prototype,"_contentUrl",2);m([u()],g.prototype,"_renderMarkdownField",2);m([u()],g.prototype,"_selectedTabGroup",2);m([u()],g.prototype,"_slugHasBeenEdited",2);m([u()],g.prototype,"_slugInput",2);m([u()],g.prototype,"_templateField",2);m([u()],g.prototype,"_template",2);m([u()],g.prototype,"_titleInput",2);g=m([w("guide-editor")],g);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={CHILD:2},tt=i=>(...t)=>({_$litDirective$:i,values:t});class et{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,a){this._$Ct=t,this._$AM=s,this._$Ci=a}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O extends et{constructor(t){if(super(t),this.it=c,t.type!==Z.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}O.directiveName="unsafeHTML",O.resultType=1;const G=tt(O);var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,E=(i,t,s,a)=>{for(var e=a>1?void 0:a?it(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&st(t,s,e),e};let C=class extends M{constructor(){super(...arguments),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(i,t){let s;t==="content"?s=globalThis.monacoEditorInstances.contentEditor:t==="css"?s=globalThis.monacoEditorInstances.contentCss:t==="javascript"&&(s=globalThis.monacoEditorInstances.contentJavascript);const a=document.querySelector("guide-editor")?.dataset.guideSlug;if(a){const e=new Date;i=i.replace(/REPLACE_DATE/g,e.toISOString().split("T")[0]).replace(/REPLACE_GUIDE_SLUG/g,a)}if(s){const e=s.getModel().getLineCount(),n=s.getModel().getLineMaxColumn(e),r=s.getSelection(),I={identifier:{major:1,minor:1},range:{startLineNumber:r?.selectionStartLineNumber??e,startColumn:r?.selectionStartColumn??n,endLineNumber:r?.endLineNumber??e,endColumn:r?.endColumn??n},text:i,forceMoveMarkers:!0};s.executeEdits("my-source",[I]),s.focus()}}connectedCallback(){super.connectedCallback()}render(){let i,t;return this.data?.thumbnail1x&&this.data?.thumbnail2x?i=o`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:i=c,this.data?.summary?t=[d.Guides,d.Images].includes(this.data?.group)?o`<p>${this.data.summary}</p>`:o`${G(this.data.summary)}`:t=c,o`
      ${this.data?o`
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
                @click="${()=>this._insertTextIntoEditor(this.data?.contentCode??"","content")}"
              >
                ${this.tMessages.addContent}
              </button>
              ${this.data.cssCode?o`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--green-300);"
                    @click="${()=>this._insertTextIntoEditor(this.data?.cssCode??"","css")}"
                  >
                    ${this.tMessages.addCss}
                  </button>`:c}
              ${this.data.javascriptCode?o`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${()=>this._insertTextIntoEditor(this.data?.javascriptCode??"","javascript")}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`:c}
              ${this.data.props?o`<button
                    class="btn icon"
                    data-icon="${this._showProps?"eye-slash":"eye"}"
                    type="button"
                    @click="${()=>this._showProps=!this._showProps}"
                  >
                    ${this.tMessages.variables}
                  </button>`:c}
            </div>
            ${this.data.props&&this._showProps?o`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map(s=>o`<dt class="guide-select-string">${s}</dt>
                        <dd>${this.data?.props?.[s]}</dd>`)}
                  </dl>`:c}
          `:c}
    `}createRenderRoot(){return this}};E([_({attribute:"component-data",type:Object})],C.prototype,"data",2);E([_({attribute:"t-messages",type:Object})],C.prototype,"tMessages",2);E([u()],C.prototype,"_showProps",2);C=E([w("guide-editor-component-list-item")],C);var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,P=(i,t,s,a)=>{for(var e=a>1?void 0:a?ot(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&at(t,s,e),e};let y=class extends M{constructor(){super(...arguments),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=p.Initial,this._placements=[]}async _getAllPlacements(){this._getAllPlacementsStatus=p.Loading;const i=await window.Craft?.postActionRequest("guide/placement/get-all-placements");this._placements=i.filter(t=>t.group===h.Nav),this._getAllPlacementsStatus=p.Success}async _onCmsGuideDisabled(i,t){const s=this._placements.find(a=>a.guideId===i);s&&await window.Craft?.postActionRequest("guide/placement/delete-placement",{data:{id:s.id}},(a,e)=>{e==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace("[guide]",t)))})}async _onCmsGuideEnabled(i,t){await window.Craft?.postActionRequest("guide/placement/save-placement",{data:{access:"all",group:"nav",guideId:i}},(s,a)=>{a==="success"&&(this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess?.replace("[guide]",t)))})}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){const i=this.tableHeaders.map(s=>o`<th>${s.label}</th>`),t=x.map(s=>{const a=[];a.push(L?o`<a href="${s.viewUrl}" title="${this.tMessages.linkToGuidePage}"
              >${G(z)}${s.title}</a
            >`:o`<h3>${s.title}</h3>`),a.push(o`<p>${s.summary??""}</p>`),a.push(o`<guide-copy-text-button
          copy-text="${s.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);const e=this._placements.find(r=>r.guideId===s.id)!==void 0;a.push(o`<input
          type="checkbox"
          switch
          name="cms-guide-${s.slug}"
          ?checked="${e}"
          ?disabled="${this._getAllPlacementsStatus===p.Loading}"
          @change="${e?()=>this._onCmsGuideDisabled(s.id,s.title):()=>this._onCmsGuideEnabled(s.id,s.title)}"
        />`);const n=[];return L&&n.push(o`
          <guide-slideout-button page-slug="${s.slug}">
            <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
          </guide-slideout-button>
        `),R.editGuides&&n.push(o`<a class="btn small secondary" data-icon="pencil" href="${s.editUrl}">${this.tMessages.edit}</a>`),R.deleteGuides&&n.push(o`<a class="btn small" data-icon="trash" href="${s.deleteUrl}">${this.tMessages.delete}</a>`),a.push(o`<div class="buttons">${n.map(r=>r)}</div>`),a});return o`
      ${t.length?o`
            <div class="tableview tablepane">
              <table class="data fullwidth">
                <thead>
                  <tr>
                    ${i}
                  </tr>
                </thead>
                <tbody>
                  ${t.map(s=>o`<tr>
                        ${s.map(a=>o`<td>${a}</td>`)}
                      </tr>`)}
                </tbody>
              </table>
            </div>
          `:o`<p>${this.tMessages.listEmpty}</p>`}
    `}createRenderRoot(){return this}};P([_({attribute:"t-messages",type:Object})],y.prototype,"tMessages",2);P([_({attribute:"table-headers",type:Object})],y.prototype,"tableHeaders",2);P([u()],y.prototype,"_getAllPlacementsStatus",2);P([u()],y.prototype,"_placements",2);y=P([w("guide-list")],y);var nt=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,$=(i,t,s,a)=>{for(var e=a>1?void 0:a?rt(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&nt(t,s,e),e};let f=class extends M{constructor(){super(...arguments),this.actionUrlGetAllPlacements="",this.fieldsData=[],this.groupsData=[],this.tMessages={},this._getAllPlacementsStatus=p.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(i,t){this._getAllPlacementsStatus=p.Loading;const s=parseInt(i?.target?.value);if(s){const a=x.find(e=>e.id===s);if(a){const e={access:V.All,group:t.name,guideId:a.id};t.groupId&&(e.groupId=t.groupId),await window.Craft?.postActionRequest("guide/placement/save-placement",{data:e},async(n,r)=>{r==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess?.replace("[guide]",a.title).replace("[group]",t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success,i?.target&&(i.target.value="__none__"))})}}}async _deletePlacement(i,t){this._getAllPlacementsStatus=p.Loading,await window.Craft?.postActionRequest("guide/placement/delete-placement",{data:{id:i}},async(s,a)=>{a==="success"&&(await this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace("[guide]",t.title)),this._getAllPlacementsStatus=p.Success)})}async _getAllPlacements(){this._getAllPlacementsStatus=p.Loading;const i=await window.Craft?.postActionRequest("guide/placement/get-all-placements");this._placements=i,this._getAllPlacementsStatus=p.Success}async _saveFieldPlacement(i,t){const s=i?.target?.value;this._getAllPlacementsStatus=p.Loading;const a={access:"all",group:"field",groupId:s==="__none__"?null:s,guideId:t.guideId,id:t.id};await window.Craft?.postActionRequest("guide/placement/save-placement",{data:a},async(e,n)=>{n==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success)})}async _saveUriPlacement(i,t,s){const a=i?.target?.value;if(t==="moveMethod"&&a===s.moveMethod)return;if(t==="selector"&&a===s.selector)return;if(t==="uri"&&a===s.uri)return;this._getAllPlacementsStatus=p.Loading;const e={access:"all",group:"uri",guideId:s.guideId,id:s.id,moveMethod:t==="moveMethod"?a:s.moveMethod,selector:t==="selector"?a:s.selector,uri:t==="uri"?a:s.uri};await window.Craft?.postActionRequest("guide/placement/save-placement",{data:e},async(n,r)=>{r==="success"&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=p.Success)})}connectedCallback(){super.connectedCallback();const i=this.groupsData.find(l=>l.name===h.Widget);i&&this._groupsDataStructured.push(i);const t=this.groupsData.find(l=>l.name===h.UiElementEnabled);t&&this._groupsDataStructured.push(t);const s=this.groupsData.find(l=>l.name===h.Field);s&&this._groupsDataStructured.push(s);const a=this.groupsData.find(l=>l.name===h.Entry);a&&this._groupsDataStructured.push(a);const e=this.groupsData.filter(l=>l.name===h.Section);e?.length&&this._groupsDataStructured.push(...e);const n=this.groupsData.find(l=>l.name===h.Asset);n&&this._groupsDataStructured.push(n);const r=this.groupsData.filter(l=>l.name===h.AssetVolume);r?.length&&this._groupsDataStructured.push(...r);const b=this.groupsData.find(l=>l.name===h.Category);b&&this._groupsDataStructured.push(b);const I=this.groupsData.filter(l=>l.name===h.CategoryGroup);I?.length&&this._groupsDataStructured.push(...I);const j=this.groupsData.find(l=>l.name===h.Global);j&&this._groupsDataStructured.push(j);const k=this.groupsData.filter(l=>l.name===h.GlobalSet);k?.length&&this._groupsDataStructured.push(...k);const F=this.groupsData.find(l=>l.name===h.User);F&&this._groupsDataStructured.push(F);const q=this.groupsData.find(l=>l.name===h.Uri);q&&this._groupsDataStructured.push(q),this._getAllPlacements()}render(){return o`
      ${this._groupsDataStructured.map(i=>{const t=this._placements.filter(e=>[h.Field].includes(e.group)?e.group===i.name:e.group===i.name&&e.groupId===i.groupId),s={};t.forEach(e=>{const n=x.find(r=>r.id===e.guideId);n&&(s[n.id]=n)});const a=[h.Field,h.Uri].includes(i.name)?x:x.filter(e=>!Object.keys(s).includes(e.id.toString()));return o`
          <div class="guide-organizer-header guide-organizer-header-${i.headerSize}">
            <h2>${i.header}</h2>
            <p>${G(i.description)}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${i.name}">
            ${t.length?o`
                  <ul>
                    ${t.map(e=>{let n;if(i.name===h.Field){W(this.fieldsData,t);const r=t.map(b=>b.groupId??"");n=o`
                          <div class="guide-organizer-section-flex-fields">
                            <label for="guide-field-${e.id}">is assigned to field</label>
                            <div class="select">
                              <select
                                id="guide-field-${e.id}"
                                class="input"
                                ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                                @input="${()=>this._saveFieldPlacement(event,e)}"
                              >
                                <option value="__none__">${this.tMessages.addFieldToGuide}</option>
                                ${this.fieldsData.map(b=>o`<option
                                    ?disabled="${r.includes(b.uid)}"
                                    ?selected="${e.groupId===b.uid}"
                                    value="${b.uid}"
                                  >
                                    ${b.name}
                                  </option>`)}
                              </select>
                            </div>

                            ${e.groupId?o`<span class="guide-uri-valid" title="${this.tMessages.fieldPlacementIsValid}"
                                  >✓</span
                                >`:o`<span class="guide-uri-invalid" title="${this.tMessages.fieldPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `}else i.name===h.Uri?n=o`
                          <div class="guide-organizer-section-flex-fields">
                            <span class="input"
                              ><label for="guide-uri-${e.id}">displayed on page(s)</label>
                              <input
                                id="guide-uri-${e.id}"
                                class="text"
                                type="text"
                                placeholder="uri pattern"
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
                                <option value="before" ?selected="${e.moveMethod===T.Before}">
                                  before
                                </option>
                                <option value="prepend" ?selected="${e.moveMethod===T.Prepend}">
                                  at the top of
                                </option>
                                <option value="append" ?selected="${e.moveMethod===T.Append}">
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

                            ${e.uri&&e.selector?o`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                  >✓</span
                                >`:o`<span class="guide-uri-invalid" title="${this.tMessages.uriPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `:n=o`<div><span>${s[e.guideId].summary}</span></div>`;return s[e.guideId]?o`<li>
                            <div class="guide-organizer-title">
                              ${G(z)}<span>${s[e.guideId].title}</span>
                            </div>

                            ${n}

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
                          </li>`:c})}
                  </ul>
                `:o`<div class="guide-organizer-group-empty">
                  <p>${this.tMessages.emptyGroup}</p>
                </div>`}
            ${a.length?o`
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===p.Loading}"
                      @input="${()=>this._addPlacement(event,i)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault} ${i.header}</option>
                      ${a.map(e=>o`<option value="${e.id}">${e.title}</option>`)}
                    </select>
                  </div>
                `:c}
          </div>
        `})}
    `}createRenderRoot(){return this}};$([_({attribute:"action-url-get-all-placements"})],f.prototype,"actionUrlGetAllPlacements",2);$([_({attribute:"fields-data",type:Object})],f.prototype,"fieldsData",2);$([_({attribute:"groups-data",type:Object})],f.prototype,"groupsData",2);$([_({attribute:"t-messages",type:Object})],f.prototype,"tMessages",2);$([u()],f.prototype,"_getAllPlacementsStatus",2);$([u()],f.prototype,"_groupsDataStructured",2);$([u()],f.prototype,"_placements",2);f=$([w("guide-organizer")],f);var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,D=(i,t,s,a)=>{for(var e=a>1?void 0:a?dt(t,s):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(e=(a?r(t,s,e):r(e))||e);return a&&e&&lt(t,s,e),e};let S=class extends M{constructor(){super(...arguments),this.guidesData={guides:{}},this.tMessages={},this._exportData="",this._selectedGuides=[]}async _copyExportData(){await B(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){const i={guides:[]};i.guides=this._selectedGuides.map(t=>this.guidesData.guides[t])??[],this._exportData=JSON.stringify(i)}async _importImportData(){const i=this.querySelector("#import-data");i?.value&&await window.Craft.postActionRequest("guide/import-export/import-json",{guideData:i.value},t=>{t.status==="success"?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(t.error)})}_onGuideCheckboxInput(i){if(this._selectedGuides.includes(i)){const t=this._selectedGuides.indexOf(i);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(i);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return o`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      <ul>
        ${Object.keys(this.guidesData.guides).map(i=>{const t=this.guidesData.guides[i];return o`<li>
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
    `}createRenderRoot(){return this}};D([_({attribute:"guides-data",type:Object})],S.prototype,"guidesData",2);D([_({attribute:"t-messages",type:Object})],S.prototype,"tMessages",2);D([u()],S.prototype,"_exportData",2);D([u()],S.prototype,"_selectedGuides",2);S=D([w("guide-utilities")],S);
