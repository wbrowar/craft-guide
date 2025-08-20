import{a as u,n as d,r as s,i as l,c as m,E as g,x as _,t as p}from"./globals.js";import{g as h,P as y,S as k,C,H as v,D as z,W as f,G as w}from"./GLTFLoader.js";import{l as x}from"./console.js";var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,i=(t,a,b,r)=>{for(var o=r>1?void 0:r?P(a,b):a,n=t.length-1,c;n>=0;n--)(c=t[n])&&(o=(r?c(a,b,o):c(o))||o);return r&&o&&$(a,b,o),o};let e=class extends l{constructor(){super(...arguments),this._container=null,this.tMessages={},this._animationState="intro",this._debugIncrement=.5,this._debugCameraX=0,this._debugCameraY=0,this._debugCameraZ=0,this._debugCameraRotateX=0,this._debugCameraRotateY=0,this._debugCameraRotateZ=0,this._objectUrl=`${m}/guide-book.gltf`,this._resizeObserver=null,this._settings={animation:{rotation:{x:0,y:0,z:0,xSineMax:0}},camera:{fov:60,near:.1,far:30,position:{x:0,y:10.69,z:-.17},rotation:{x:4.7,y:0,z:0}},lights:{ambient:{groundColor:2236962,intensity:1,skyColor:16777215},directional:{color:16777215,intensity:4,position:{x:10,y:10,z:10}}},object:{scale:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0}}},this._showDebugControls=!1}_animateOpenBook(){if(this._bookTop&&this._bookLoose&&this._bookLoose2){this._animationState="animating";const t=3;h.to(this._bookTop.rotation,{duration:t,z:1,ease:"elastic.out(1, 0.3)",onComplete:()=>{this._animationState="opened"}}),h.to(this._bookLoose.rotation,{duration:t,z:.75,ease:"elastic.out(1, 0.3)"}),h.to(this._bookLoose2.rotation,{duration:t,z:.5,ease:"elastic.out(1, 0.3)"})}}_animateCloseBook(){if(this._bookTop&&this._bookLoose&&this._bookLoose2){this._animationState="animating";const t=1;h.to(this._bookTop.rotation,{duration:t,z:0,ease:"power4.in",onComplete:()=>{this._animationState="closed"}}),h.to(this._bookLoose.rotation,{duration:t,z:-.05,ease:"power4.in"}),h.to(this._bookLoose2.rotation,{duration:t,z:-.05,ease:"power4.in"})}}_debugButtonPressed(t){if(this._camera){switch(t){case"xUp":this._camera.position.x+=this._debugIncrement;break;case"xDown":this._camera.position.x-=this._debugIncrement;break;case"yUp":this._camera.position.y+=this._debugIncrement;break;case"yDown":this._camera.position.y-=this._debugIncrement;break;case"zUp":this._camera.position.z+=this._debugIncrement;break;case"zDown":this._camera.position.z-=this._debugIncrement;break;case"xRotateUp":this._camera.rotation.x+=this._debugIncrement;break;case"xRotateDown":this._camera.rotation.x-=this._debugIncrement;break;case"yRotateUp":this._camera.rotation.y+=this._debugIncrement;break;case"yRotateDown":this._camera.rotation.y-=this._debugIncrement;break;case"zRotateUp":this._camera.rotation.z+=this._debugIncrement;break;case"zRotateDown":this._camera.rotation.z-=this._debugIncrement;break;case"i0_1":this._debugIncrement=.1;break;case"i0_5":this._debugIncrement=.5;break;case"i1":this._debugIncrement=1;break}this._debugCameraX=this._camera.position.x,this._debugCameraY=this._camera.position.y,this._debugCameraZ=this._camera.position.z,this._debugCameraRotateX=this._camera.rotation.x,this._debugCameraRotateY=this._camera.rotation.y,this._debugCameraRotateZ=this._camera.rotation.z,x("Camera",`position x: ${this._camera.position.x}`,`position y: ${this._camera.position.y}`,`position z: ${this._camera.position.z}`,`rotation x: ${this._camera.rotation.x}`,`rotation y: ${this._camera.rotation.y}`,`rotation z: ${this._camera.rotation.z}`)}t==="close"&&(this._showDebugControls=!1,this._scene.background=null)}_init(){if(this._container=this.renderRoot?.querySelector("#guide-book-scene-container")??null,this._container){const t=this._settings.camera.fov,a=this._container.clientWidth/this._container.clientHeight,b=this._settings.camera.near,r=this._settings.camera.far;this._camera=new y(t,a,b,r),this._camera.position.set(this._settings.camera.position.x,this._settings.camera.position.y,this._settings.camera.position.z),this._camera.rotation.set(this._settings.camera.rotation.x,this._settings.camera.rotation.y,this._settings.camera.rotation.z),this._scene=new k,this._showDebugControls&&(this._scene.background=new C("fuchsia")),this._ambientLight=new v(this._settings.lights.ambient.skyColor,this._settings.lights.ambient.groundColor,this._settings.lights.ambient.intensity),this._mainLight=new z(this._settings.lights.directional.color,this._settings.lights.directional.intensity),this._mainLight.position.set(this._settings.lights.directional.position.x,this._settings.lights.directional.position.y,this._settings.lights.directional.position.z),this._scene.add(this._ambientLight,this._mainLight),this._renderer=new f({alpha:!0,antialias:!0,powerPreference:"high-performance"}),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement),this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),new w().load(this._objectUrl,n=>{this._object=n,this._object.scene.scale.set(this._settings.object.scale.x,this._settings.object.scale.y,this._settings.object.scale.z),this._object.scene.rotation.set(this._settings.object.rotation.x,this._settings.object.rotation.y,this._settings.object.rotation.z),this._scene.add(this._object.scene),this._showDebugControls&&this._object.scene.traverse(c=>{}),this._bookTop=this._object.scene.getObjectByName("Top"),this._bookLoose=this._object.scene.getObjectByName("Loose"),this._bookLoose2=this._object.scene.getObjectByName("Loose_2"),this._pen=this._object.scene.getObjectByName("Pen"),this._pen.removeFromParent(),this._object.scene.getObjectByName("Top")},void 0,void 0),this._renderer.setAnimationLoop(()=>{this._object&&this._renderer.render(this._scene,this._camera)}),this._resizeObserver=new ResizeObserver(n=>{if(this._container)for(let c of n)c.contentBoxSize&&(this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight))}),this._resizeObserver&&this._resizeObserver.observe(this._container),this._animationState="closed"}}_onContainerClicked(){this._animationState==="opened"?this._animateCloseBook():this._animationState==="closed"&&this._animateOpenBook()}firstUpdated(t){super.firstUpdated(t),this._init()}render(){return _`
      <div class="guide-book-scene-wrapper">
        <div id="guide-book-scene-container" @click="${this._onContainerClicked}"></div>
      </div>
      ${this._showDebugControls?_`
            <div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("close")}">X</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("status")}">⏺</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("i0_1")}">
                <b v-if="debugIncrement === 0.1">0.1</b><span v-else>0.1</span>
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("i0_5")}">
                <b v-if="debugIncrement === 0.5">0.5</b><span v-else>0.5</span>
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("i1")}">
                <b v-if="debugIncrement === 1">1</b><span v-else>1</span>
              </button>
              <div>X: ${this._debugCameraX}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("xUp")}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("xDown")}">⬇️</button>
              <div>Y: ${this._debugCameraY}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("yUp")}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("yDown")}">⬇️</button>
              <div>Z: ${this._debugCameraZ}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("zUp")}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("zDown")}">⬇️</button>
              <div>Rotate X: ${this._debugCameraRotateX}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("xRotateUp")}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("xRotateDown")}">
                ⬇️
              </button>
              <div>Rotate Y: ${this._debugCameraRotateY}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("yRotateUp")}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("yRotateDown")}">
                ⬇️
              </button>
              <div>Rotate Z: ${this._debugCameraRotateZ}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("zRotateUp")}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed("zRotateDown")}">
                ⬇️
              </button>
            </div>
          `:g}
    `}};e.styles=u`
    .guide-book-scene-wrapper {
      display: block;
      aspect-ratio: 5 / 7;
      max-width: 100%;
      position: relative;
    }
    #guide-book-scene-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;i([d({attribute:"t-messages",type:Object})],e.prototype,"tMessages",2);i([s()],e.prototype,"_animationState",2);i([s()],e.prototype,"_debugIncrement",2);i([s()],e.prototype,"_debugCameraX",2);i([s()],e.prototype,"_debugCameraY",2);i([s()],e.prototype,"_debugCameraZ",2);i([s()],e.prototype,"_debugCameraRotateX",2);i([s()],e.prototype,"_debugCameraRotateY",2);i([s()],e.prototype,"_debugCameraRotateZ",2);i([s()],e.prototype,"_objectUrl",2);i([s()],e.prototype,"_resizeObserver",2);i([s()],e.prototype,"_settings",2);i([s()],e.prototype,"_showDebugControls",2);e=i([p("guide-book")],e);
