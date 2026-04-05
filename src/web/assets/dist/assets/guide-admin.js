import{_ as e,a as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,o as l,p as u,r as d,t as f,u as p,v as m}from"./console.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./types.js";async function x(e){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{let t=document.createElement(`textarea`);t.value=e,t.classList.add(`sr-only`),document.body.prepend(t),t.select();try{document.execCommand(`copy`)}catch(e){console.error(e)}finally{t.remove()}}}var S=class extends c{constructor(...e){super(...e),this.tMessages={},this.copyText=``}async _copyTextToClipboard(e){await x(e),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}: ${e}`)}async connectedCallback(){super.connectedCallback()}render(){return e`${this.copyText&&this.tMessages?e`
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
        `:a}`}createRenderRoot(){return this}};p([r({attribute:`t-messages`,type:Object})],S.prototype,`tMessages`,void 0),p([r({attribute:`copy-text`,type:String})],S.prototype,`copyText`,void 0),S=p([u(`guide-copy-text-button`)],S);var C=class extends c{constructor(...e){super(...e),this.isNew=!1,this.tMessages={},this.templatesData={},this._componentLists=[`settings`],this._contentEditor=null,this._contentSource=y.Field,this._contentSourceSelect=null,this._contentUrlField=null,this._contentUrl=``,this._renderMarkdownField=null,this._selectedTabGroup=_.Settings,this._slugHasBeenEdited=!1,this._slugInput=null,this._templateField=null,this._template=`__none__`,this._titleInput=null}static{this.styles=m`
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
  `}_onContentSourceChange(e){switch(e){case y.Field:this._contentUrlField?.classList.add(`hidden`),this._renderMarkdownField?.classList.remove(`hidden`),this._templateField?.classList.add(`hidden`),this._contentSource=y.Field;break;case y.Iframe:this._contentUrlField?.classList.remove(`hidden`),this._renderMarkdownField?.classList.add(`hidden`),this._templateField?.classList.add(`hidden`),this._contentSource=y.Iframe;break;case y.Template:this._contentUrlField?.classList.add(`hidden`),this._renderMarkdownField?.classList.add(`hidden`),this._templateField?.classList.remove(`hidden`),this._contentSource=y.Template;break}}connectedCallback(){super.connectedCallback(),this._contentSourceSelect=this.querySelector(`guide-editor select[name="contentSource"]`),this._contentUrlField=this.querySelector(`guide-editor #contentUrl-field`),this._renderMarkdownField=this.querySelector(`guide-editor #renderMarkdown-field`),this._slugInput=this.querySelector(`guide-editor input[name="slug"]`),this._templateField=this.querySelector(`guide-editor #template-field`),this._titleInput=this.querySelector(`guide-editor input[name="title"]`),this.isNew&&this._titleInput&&this._titleInput.addEventListener(`input`,()=>{!this._slugHasBeenEdited&&this._slugInput&&(this._slugInput.value=t(this._titleInput?.value??``),document.querySelector(`guide-editor`)?.setAttribute(`data-guide-slug`,this._slugInput.value))}),this._slugInput?.addEventListener(`blur`,()=>{if(this._slugInput){this._slugHasBeenEdited=!0,this._slugInput.value=t(this._slugInput.value);let e=document.querySelectorAll(`guide-copy-text-button`),n=this._slugInput.value;e.forEach(e=>{e.copyText=n}),document.querySelector(`guide-editor`)?.setAttribute(`data-guide-slug`,n)}}),this._slugInput?.value&&document.querySelector(`guide-editor`)?.setAttribute(`data-guide-slug`,this._slugInput.value),this._contentSourceSelect&&(this._contentSourceSelect.addEventListener(`change`,()=>{this._onContentSourceChange(this._contentSourceSelect?.value)}),this._onContentSourceChange(this._contentSourceSelect.value));let e=this._contentUrlField?.querySelector(`input`);e&&(e.addEventListener(`blur`,()=>{e?.value&&(this._contentUrl=e.value)}),this._contentUrl=e.value);let n=this._templateField?.querySelector(`select`);if(n&&(n.addEventListener(`change`,()=>{n?.value&&(this._template=n.value)}),this._template=n.value),this._contentEditor=globalThis.monacoEditorInstances.contentEditor,this._contentEditor){let e=this._contentEditor.getModel().getLineCount(),t=this._contentEditor.getModel().getLineMaxColumn(e);this._contentEditor.setPosition({column:t,lineNumber:e})}this.querySelector(`#editor-component-list-components`)&&this._componentLists.push(`components`),this.querySelector(`#editor-component-list-guides`)&&this._componentLists.push(`guides`),this.querySelector(`#editor-component-list-images`)&&this._componentLists.push(`images`),this.querySelector(`#editor-component-list-snippets`)&&this._componentLists.push(`snippets`)}render(){let t=[];this._componentLists.includes(_.Settings)&&t.push(e`
        <button
          class="${this._selectedTabGroup===_.Settings?`active`:a}"
          type="button"
          title="${this.tMessages.settings}"
          @click="${()=>this._selectedTabGroup=_.Settings}"
        >
          <slot name="icon-settings"></slot><span>${this.tMessages.settings}</span>
        </button>
      `),this._componentLists.includes(_.Components)&&t.push(e`
        <button
          class="${this._selectedTabGroup===_.Components?`active`:a}"
          type="button"
          title="${this.tMessages.components}"
          @click="${()=>this._selectedTabGroup=_.Components}"
        >
          <slot name="icon-components"></slot><span>${this.tMessages.components}</span>
        </button>
      `),this._componentLists.includes(_.Images)&&t.push(e`
        <button
          class="${this._selectedTabGroup===_.Images?`active`:a}"
          type="button"
          title="${this.tMessages.images}"
          @click="${()=>this._selectedTabGroup=_.Images}"
        >
          <slot name="icon-images"></slot><span>${this.tMessages.images}</span>
        </button>
      `),this._componentLists.includes(_.Guides)&&t.push(e`
        <button
          class="${this._selectedTabGroup===_.Guides?`active`:a}"
          type="button"
          title="${this.tMessages.guides}"
          @click="${()=>this._selectedTabGroup=_.Guides}"
        >
          <slot name="icon-guides"></slot><span>${this.tMessages.guides}</span>
        </button>
      `),this._componentLists.includes(_.Snippets)&&t.push(e`
        <button
          class="${this._selectedTabGroup===_.Snippets?`active`:a}"
          type="button"
          title="${this.tMessages.snippets}"
          @click="${()=>this._selectedTabGroup=_.Snippets}"
        >
          <slot name="icon-snippets"></slot><span>${this.tMessages.snippets}</span>
        </button>
      `);let n=e`<div></div>`;return this._contentSource===y.Field?n=e`<div class="guide-editor-content-editor">
        <div><slot name="editor"></slot></div>
      </div>`:this._contentSource===y.Iframe?n=e`<div class="guide-editor-content-iframe">
        <h3>${this.tMessages.iframeLabel}</h3>
        ${this._contentUrl?e`<iframe src="${this._contentUrl??``}"></iframe>`:e`<p>${this.tMessages.iframeEmpty}</p>`}
      </div>`:this._contentSource===y.Template&&(n=e`<div class="guide-editor-content-template">
        <h3>${this.tMessages.templateLabel}</h3>
        ${this._template===`__none__`?e`<p>${this.tMessages.templateEmpty}</p>`:e`<pre><code>${this.templatesData[this._template]??``}</code><div><!-- Mask --></div></pre>`}
      </div>`),e`
      <aside>
        ${l?e`<div
              class="guide-editor-content-buttons"
              style="--guide-editor-content-buttons-columns: ${t.length};"
            >
              ${t}
            </div>`:a}
        ${this._selectedTabGroup===_.Settings?e`<slot name="settings"></slot>`:a}
        ${this._selectedTabGroup===_.Components?e`<slot name="components"></slot>`:a}
        ${this._selectedTabGroup===_.Images?e`<slot name="images"></slot>`:a}
        ${this._selectedTabGroup===_.Guides?e`<slot name="guides"></slot>`:a}
        ${this._selectedTabGroup===_.Snippets?e`<slot name="snippets"></slot>`:a}
      </aside>
      ${n}
    `}};p([r({attribute:`is-new`,type:Boolean})],C.prototype,`isNew`,void 0),p([r({attribute:`t-messages`,type:Object})],C.prototype,`tMessages`,void 0),p([r({attribute:`templates-data`,type:Object})],C.prototype,`templatesData`,void 0),p([n()],C.prototype,`_componentLists`,void 0),p([n()],C.prototype,`_contentEditor`,void 0),p([n()],C.prototype,`_contentSource`,void 0),p([n()],C.prototype,`_contentSourceSelect`,void 0),p([n()],C.prototype,`_contentUrlField`,void 0),p([n()],C.prototype,`_contentUrl`,void 0),p([n()],C.prototype,`_renderMarkdownField`,void 0),p([n()],C.prototype,`_selectedTabGroup`,void 0),p([n()],C.prototype,`_slugHasBeenEdited`,void 0),p([n()],C.prototype,`_slugInput`,void 0),p([n()],C.prototype,`_templateField`,void 0),p([n()],C.prototype,`_template`,void 0),p([n()],C.prototype,`_titleInput`,void 0),C=p([u(`guide-editor`)],C);var w={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T=e=>(...t)=>({_$litDirective$:e,values:t}),E=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},D=class extends E{constructor(e){if(super(e),this.it=a,e.type!==w.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===a||e==null)return this._t=void 0,this.it=e;if(e===i)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};D.directiveName=`unsafeHTML`,D.resultType=1;var O=T(D),k=class extends c{constructor(...e){super(...e),this.data=void 0,this.tMessages={},this._showProps=!1}_insertTextIntoEditor(e,t){let n;t===`content`?n=globalThis.monacoEditorInstances.contentEditor:t===`css`?n=globalThis.monacoEditorInstances.contentCss:t===`javascript`&&(n=globalThis.monacoEditorInstances.contentJavascript);let r=document.querySelector(`guide-editor`)?.dataset.guideSlug;if(r){let t=new Date;e=e.replace(/REPLACE_DATE/g,t.toISOString().split(`T`)[0]).replace(/REPLACE_GUIDE_SLUG/g,r)}if(n){let t=n.getModel().getLineCount(),r=n.getModel().getLineMaxColumn(t),i=n.getSelection(),a={identifier:{major:1,minor:1},range:{startLineNumber:i?.selectionStartLineNumber??t,startColumn:i?.selectionStartColumn??r,endLineNumber:i?.endLineNumber??t,endColumn:i?.endColumn??r},text:e,forceMoveMarkers:!0};n.executeEdits(`my-source`,[a]),n.focus()}}connectedCallback(){super.connectedCallback()}render(){let t,n;return t=this.data?.thumbnail1x&&this.data?.thumbnail2x?e`<img
        src="${this.data.thumbnail1x}"
        srcset="${this.data.thumbnail2x} 2x, ${this.data.thumbnail1x}"
      />`:a,n=this.data?.summary?[_.Guides,_.Images].includes(this.data?.group)?e`<p>${this.data.summary}</p>`:e`${O(this.data.summary)}`:a,e`
      ${this.data?e`
            <div>
              ${t}
              <div class="readable">
                <h3>${this.data.title}</h3>
                ${n}
              </div>
            </div>
            <div class="buttons">
              <button
                class="btn icon add secondary"
                type="button"
                @click="${()=>this._insertTextIntoEditor(this.data?.contentCode??``,`content`)}"
              >
                ${this.tMessages.addContent}
              </button>
              ${this.data.cssCode?e`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--green-300);"
                    @click="${()=>this._insertTextIntoEditor(this.data?.cssCode??``,`css`)}"
                  >
                    ${this.tMessages.addCss}
                  </button>`:a}
              ${this.data.javascriptCode?e`<button
                    class="btn icon add"
                    type="button"
                    style="--guide-editor-component-list-item-button-background-color: var(--yellow-300);"
                    @click="${()=>this._insertTextIntoEditor(this.data?.javascriptCode??``,`javascript`)}"
                  >
                    ${this.tMessages.addJavascript}
                  </button>`:a}
              ${this.data.props?e`<button
                    class="btn icon"
                    data-icon="${this._showProps?`eye-slash`:`eye`}"
                    type="button"
                    @click="${()=>this._showProps=!this._showProps}"
                  >
                    ${this.tMessages.variables}
                  </button>`:a}
            </div>
            ${this.data.props&&this._showProps?e`<h4>${this.tMessages.variables}</h4>
                  <dl>
                    ${Object.keys(this.data.props).map(t=>e`<dt class="guide-select-string">${t}</dt>
                        <dd>${this.data?.props?.[t]}</dd>`)}
                  </dl>`:a}
          `:a}
    `}createRenderRoot(){return this}};p([r({attribute:`component-data`,type:Object})],k.prototype,`data`,void 0),p([r({attribute:`t-messages`,type:Object})],k.prototype,`tMessages`,void 0),p([n()],k.prototype,`_showProps`,void 0),k=p([u(`guide-editor-component-list-item`)],k);var A=class extends c{constructor(...e){super(...e),this.tMessages={},this.tableHeaders=[],this._getAllPlacementsStatus=b.Initial,this._placements=[]}async _getAllPlacements(){this._getAllPlacementsStatus=b.Loading,this._placements=(await window.Craft?.postActionRequest(`guide/placement/get-all-placements`)).filter(e=>e.group===v.Nav),this._getAllPlacementsStatus=b.Success}async _onCmsGuideDisabled(e,t){let n=this._placements.find(t=>t.guideId===e);n&&await window.Craft?.postActionRequest(`guide/placement/delete-placement`,{data:{id:n.id}},(e,n)=>{n===`success`&&(this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace(`[guide]`,t)))})}async _onCmsGuideEnabled(e,t){await window.Craft?.postActionRequest(`guide/placement/save-placement`,{data:{access:`all`,group:`nav`,guideId:e}},(e,n)=>{n===`success`&&(this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess?.replace(`[guide]`,t)))})}async connectedCallback(){super.connectedCallback(),await this._getAllPlacements()}render(){let t=this.tableHeaders.map(t=>e`<th>${t.label}</th>`),n=o.map(t=>{let n=[];n.push(l?e`<a href="${t.viewUrl}" title="${this.tMessages.linkToGuidePage}"
              >${O(d)}${t.title}</a
            >`:e`<h3>${t.title}</h3>`),n.push(e`<p>${t.summary??``}</p>`),n.push(e`<guide-copy-text-button
          copy-text="${t.slug}"
          t-messages="${JSON.stringify(this.tMessages)}"
        ></guide-copy-text-button>`);let r=this._placements.find(e=>e.guideId===t.id)!==void 0;n.push(e`<input
          type="checkbox"
          switch
          name="cms-guide-${t.slug}"
          ?checked="${r}"
          ?disabled="${this._getAllPlacementsStatus===b.Loading}"
          @change="${r?()=>this._onCmsGuideDisabled(t.id,t.title):()=>this._onCmsGuideEnabled(t.id,t.title)}"
        />`);let i=[];return l&&i.push(e`
          <guide-slideout-button page-slug="${t.slug}">
            <button class="btn small" data-icon="eye" type="button">${this.tMessages.preview}</button>
          </guide-slideout-button>
        `),s.editGuides&&i.push(e`<a class="btn small secondary" data-icon="pencil" href="${t.editUrl}">${this.tMessages.edit}</a>`),s.deleteGuides&&i.push(e`<a class="btn small" data-icon="trash" href="${t.deleteUrl}">${this.tMessages.delete}</a>`),n.push(e`<div class="buttons">${i.map(e=>e)}</div>`),n});return e`
      ${n.length?e`
            <div class="tableview tablepane">
              <table class="data fullwidth">
                <thead>
                  <tr>
                    ${t}
                  </tr>
                </thead>
                <tbody>
                  ${n.map(t=>e`<tr>
                        ${t.map(t=>e`<td>${t}</td>`)}
                      </tr>`)}
                </tbody>
              </table>
            </div>
          `:e`<p>${this.tMessages.listEmpty}</p>`}
    `}createRenderRoot(){return this}};p([r({attribute:`t-messages`,type:Object})],A.prototype,`tMessages`,void 0),p([r({attribute:`table-headers`,type:Object})],A.prototype,`tableHeaders`,void 0),p([n()],A.prototype,`_getAllPlacementsStatus`,void 0),p([n()],A.prototype,`_placements`,void 0),A=p([u(`guide-list`)],A);var j=class extends c{constructor(...e){super(...e),this.actionUrlGetAllPlacements=``,this.fieldsData=[],this.groupsData=[],this.tMessages={},this._getAllPlacementsStatus=b.Initial,this._groupsDataStructured=[],this._placements=[]}async _addPlacement(e,t){this._getAllPlacementsStatus=b.Loading;let n=parseInt(e?.target?.value);if(n){let r=o.find(e=>e.id===n);if(r){let n={access:h.All,group:t.name,guideId:r.id};t.groupId&&(n.groupId=t.groupId),await window.Craft?.postActionRequest(`guide/placement/save-placement`,{data:n},async(n,i)=>{i===`success`&&(window.Craft.cp.displayNotice(this.tMessages.placementSaveSuccess?.replace(`[guide]`,r.title).replace(`[group]`,t.header)),await this._getAllPlacements(),this._getAllPlacementsStatus=b.Success,e?.target&&(e.target.value=`__none__`))})}}}async _deletePlacement(e,t){this._getAllPlacementsStatus=b.Loading,await window.Craft?.postActionRequest(`guide/placement/delete-placement`,{data:{id:e}},async(e,n)=>{n===`success`&&(await this._getAllPlacements(),window.Craft.cp.displayNotice(this.tMessages.placementDeleteSuccess?.replace(`[guide]`,t.title)),this._getAllPlacementsStatus=b.Success)})}async _getAllPlacements(){this._getAllPlacementsStatus=b.Loading,this._placements=await window.Craft?.postActionRequest(`guide/placement/get-all-placements`),this._getAllPlacementsStatus=b.Success}async _saveFieldPlacement(e,t){let n=e?.target?.value;this._getAllPlacementsStatus=b.Loading;let r={access:`all`,group:`field`,groupId:n===`__none__`?null:n,guideId:t.guideId,id:t.id};await window.Craft?.postActionRequest(`guide/placement/save-placement`,{data:r},async(e,t)=>{t===`success`&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=b.Success)})}async _saveUriPlacement(e,t,n){let r=e?.target?.value;if(t===`moveMethod`&&r===n.moveMethod||t===`selector`&&r===n.selector||t===`uri`&&r===n.uri)return;this._getAllPlacementsStatus=b.Loading;let i={access:`all`,group:`uri`,guideId:n.guideId,id:n.id,moveMethod:t===`moveMethod`?r:n.moveMethod,selector:t===`selector`?r:n.selector,uri:t===`uri`?r:n.uri};await window.Craft?.postActionRequest(`guide/placement/save-placement`,{data:i},async(e,t)=>{t===`success`&&(window.Craft.cp.displayNotice(this.tMessages.placementUriSaveSuccess),await this._getAllPlacements(),this._getAllPlacementsStatus=b.Success)})}connectedCallback(){super.connectedCallback();let e=this.groupsData.find(e=>e.name===v.Widget);e&&this._groupsDataStructured.push(e);let t=this.groupsData.find(e=>e.name===v.UiElementEnabled);t&&this._groupsDataStructured.push(t);let n=this.groupsData.find(e=>e.name===v.Field);n&&this._groupsDataStructured.push(n);let r=this.groupsData.find(e=>e.name===v.Entry);r&&this._groupsDataStructured.push(r);let i=this.groupsData.filter(e=>e.name===v.Section);i?.length&&this._groupsDataStructured.push(...i);let a=this.groupsData.find(e=>e.name===v.Asset);a&&this._groupsDataStructured.push(a);let o=this.groupsData.filter(e=>e.name===v.AssetVolume);o?.length&&this._groupsDataStructured.push(...o);let s=this.groupsData.find(e=>e.name===v.Category);s&&this._groupsDataStructured.push(s);let c=this.groupsData.filter(e=>e.name===v.CategoryGroup);c?.length&&this._groupsDataStructured.push(...c);let l=this.groupsData.find(e=>e.name===v.Global);l&&this._groupsDataStructured.push(l);let u=this.groupsData.filter(e=>e.name===v.GlobalSet);u?.length&&this._groupsDataStructured.push(...u);let d=this.groupsData.find(e=>e.name===v.User);d&&this._groupsDataStructured.push(d);let f=this.groupsData.find(e=>e.name===v.Uri);f&&this._groupsDataStructured.push(f),this._getAllPlacements()}render(){return e`
      ${this._groupsDataStructured.map(t=>{let n=this._placements.filter(e=>[v.Field].includes(e.group)?e.group===t.name:e.group===t.name&&e.groupId===t.groupId),r={};n.forEach(e=>{let t=o.find(t=>t.id===e.guideId);t&&(r[t.id]=t)});let i=[v.Field,v.Uri].includes(t.name)?o:o.filter(e=>!Object.keys(r).includes(e.id.toString()));return e`
          <div class="guide-organizer-header guide-organizer-header-${t.headerSize}">
            <h2>${t.header}</h2>
            <p>${O(t.description)}</p>
          </div>
          <div class="guide-organizer-section" data-organizer-group="${t.name}">
            ${n.length?e`
                  <ul>
                    ${n.map(i=>{let o;if(t.name===v.Field){f(this.fieldsData,n);let t=n.map(e=>e.groupId??``);o=e`
                          <div class="guide-organizer-section-flex-fields">
                            <label for="guide-field-${i.id}">is assigned to field</label>
                            <div class="select">
                              <select
                                id="guide-field-${i.id}"
                                class="input"
                                ?disabled="${this._getAllPlacementsStatus===b.Loading}"
                                @input="${()=>this._saveFieldPlacement(event,i)}"
                              >
                                <option value="__none__">${this.tMessages.addFieldToGuide}</option>
                                ${this.fieldsData.map(n=>e`<option
                                    ?disabled="${t.includes(n.uid)}"
                                    ?selected="${i.groupId===n.uid}"
                                    value="${n.uid}"
                                  >
                                    ${n.name}
                                  </option>`)}
                              </select>
                            </div>

                            ${i.groupId?e`<span class="guide-uri-valid" title="${this.tMessages.fieldPlacementIsValid}"
                                  >✓</span
                                >`:e`<span class="guide-uri-invalid" title="${this.tMessages.fieldPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `}else o=t.name===v.Uri?e`
                          <div class="guide-organizer-section-flex-fields">
                            <span class="input"
                              ><label for="guide-uri-${i.id}">displayed on page(s)</label>
                              <input
                                id="guide-uri-${i.id}"
                                class="text"
                                type="text"
                                placeholder="uri pattern"
                                value="${i.uri??``}"
                                ?disabled="${this._getAllPlacementsStatus===b.Loading}"
                                @blur="${()=>this._saveUriPlacement(event,`uri`,i)}"
                            /></span>
                            <div class="select">
                              <select
                                class="input"
                                ?disabled="${this._getAllPlacementsStatus===b.Loading}"
                                @input="${()=>this._saveUriPlacement(event,`moveMethod`,i)}"
                              >
                                <option value="before" ?selected="${i.moveMethod===g.Before}">
                                  before
                                </option>
                                <option value="prepend" ?selected="${i.moveMethod===g.Prepend}">
                                  at the top of
                                </option>
                                <option value="append" ?selected="${i.moveMethod===g.Append}">
                                  at the bottom of
                                </option>
                                <option value="after" ?selected="${i.moveMethod===g.After}">
                                  after
                                </option>
                              </select>
                            </div>

                            <span class="input"
                              ><label for="guide-selector-${i.id}">CSS selector</label>
                              <input
                                id="guide-selector-${i.id}"
                                class="text"
                                type="text"
                                placeholder="selector"
                                value="${i.selector??``}"
                                ?disabled="${this._getAllPlacementsStatus===b.Loading}"
                                @blur="${()=>this._saveUriPlacement(event,`selector`,i)}"
                            /></span>

                            ${i.uri&&i.selector?e`<span class="guide-uri-valid" title="${this.tMessages.uriPlacementIsValid}"
                                  >✓</span
                                >`:e`<span class="guide-uri-invalid" title="${this.tMessages.uriPlacementIsInvalid}"
                                  >ⓧ</span
                                >`}
                          </div>
                        `:e`<div><span>${r[i.guideId].summary}</span></div>`;return r[i.guideId]?e`<li>
                            <div class="guide-organizer-title">
                              ${O(d)}<span>${r[i.guideId].title}</span>
                            </div>

                            ${o}

                            <div class="buttons">
                              <guide-slideout-button page-slug="${r[i.guideId].slug}">
                                <button class="btn small" data-icon="eye" type="button">
                                  ${this.tMessages.preview}
                                </button>
                              </guide-slideout-button>
                              <button
                                class="btn icon delete small"
                                type="button"
                                @click="${()=>this._deletePlacement(i.id,r[i.guideId])}"
                              >
                                ${this.tMessages.remove}
                              </button>
                            </div>
                          </li>`:a})}
                  </ul>
                `:e`<div class="guide-organizer-group-empty">
                  <p>${this.tMessages.emptyGroup}</p>
                </div>`}
            ${i.length?e`
                  <div class="select">
                    <select
                      class="input"
                      ?disabled="${this._getAllPlacementsStatus===b.Loading}"
                      @input="${()=>this._addPlacement(event,t)}"
                    >
                      <option value="__none__">${this.tMessages.addGuideToGroupOptionDefault} ${t.header}</option>
                      ${i.map(t=>e`<option value="${t.id}">${t.title}</option>`)}
                    </select>
                  </div>
                `:a}
          </div>
        `})}
    `}createRenderRoot(){return this}};p([r({attribute:`action-url-get-all-placements`})],j.prototype,`actionUrlGetAllPlacements`,void 0),p([r({attribute:`fields-data`,type:Object})],j.prototype,`fieldsData`,void 0),p([r({attribute:`groups-data`,type:Object})],j.prototype,`groupsData`,void 0),p([r({attribute:`t-messages`,type:Object})],j.prototype,`tMessages`,void 0),p([n()],j.prototype,`_getAllPlacementsStatus`,void 0),p([n()],j.prototype,`_groupsDataStructured`,void 0),p([n()],j.prototype,`_placements`,void 0),j=p([u(`guide-organizer`)],j);var M=class extends c{constructor(...e){super(...e),this.guidesData={guides:{}},this.tMessages={},this._exportData=``,this._selectedGuides=[]}async _copyExportData(){await x(this._exportData),window.Craft.cp.displayNotice(`${this.tMessages.copiedToClipboard}`)}_formatExportData(){let e={guides:[]};e.guides=this._selectedGuides.map(e=>this.guidesData.guides[e])??[],this._exportData=JSON.stringify(e)}async _importImportData(){let e=this.querySelector(`#import-data`);e?.value&&await window.Craft.postActionRequest(`guide/import-export/import-json`,{guideData:e.value},e=>{e.status===`success`?window.Craft.cp.displayNotice(this.tMessages.guidesImported):window.Craft.cp.displayError(e.error)})}_onGuideCheckboxInput(e){if(this._selectedGuides.includes(e)){let t=this._selectedGuides.indexOf(e);this._selectedGuides.splice(t,1)}else this._selectedGuides.push(e);this._formatExportData()}connectedCallback(){super.connectedCallback(),this._formatExportData()}render(){return e`
      <h1>${this.tMessages.title}</h1>

      <p>${this.tMessages.instructions}</p>

      <div class="readable guide-component-tip">
        <blockquote class="note">${this.tMessages.instructionsTip}</blockquote>
      </div>

      <hr />

      <p><b>${this.tMessages.step1Title}</b> ${this.tMessages.step1Text}</p>

      <ul>
        ${Object.keys(this.guidesData.guides).map(t=>{let n=this.guidesData.guides[t];return e`<li>
            <input
              id="guide-for-export-${n.slug}"
              name="guide-for-export-${n.slug}"
              type="checkbox"
              ?checked="${this._selectedGuides.includes(n.slug)}"
              @input="${()=>this._onGuideCheckboxInput(n.slug)}"
            />
            <label for="guide-for-export-${n.slug}">${n.title}</label>
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
    `}createRenderRoot(){return this}};p([r({attribute:`guides-data`,type:Object})],M.prototype,`guidesData`,void 0),p([r({attribute:`t-messages`,type:Object})],M.prototype,`tMessages`,void 0),p([n()],M.prototype,`_exportData`,void 0),p([n()],M.prototype,`_selectedGuides`,void 0),M=p([u(`guide-utilities`)],M);