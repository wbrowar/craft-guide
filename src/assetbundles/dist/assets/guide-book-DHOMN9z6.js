import{i as l,n as m,r as s,h as g,b as p,k as d,D as y,t as k}from"./globals-Bxb8cv8b.js";import{g as c,l as C,C as u,P as v,S as z,H as w,D as f,W as x,G as R}from"./GLTFLoader-MnDJ9iMv.js";var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,i=(t,a,h,r)=>{for(var o=r>1?void 0:r?P(a,h):a,b=t.length-1,n;b>=0;b--)(n=t[b])&&(o=(r?n(a,h,o):n(o))||o);return r&&o&&$(a,h,o),o};let e=class extends g{constructor(){super(...arguments),this._container=null,this.tMessages={},this._animationState="intro",this._debugIncrement=.5,this._debugCameraX=0,this._debugCameraY=0,this._debugCameraZ=0,this._debugCameraRotateX=0,this._debugCameraRotateY=0,this._debugCameraRotateZ=0,this._objectUrl=`${p}/guide-book.gltf`,this._resizeObserver=null,this._settings={animation:{rotation:{x:0,y:0,z:0,xSineMax:0}},camera:{fov:60,near:.1,far:30,position:{x:2.4889,y:9.19,z:1.25},rotation:{x:4.89,y:.249,z:0}},lights:{ambient:{groundColor:2236962,intensity:1,skyColor:16777215},directional:{color:16777215,intensity:4,position:{x:10,y:10,z:10}}},object:{scale:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0}},scene:{bgColor:"white"}},this._showDebugControls=!1}_animateOpenBook(){if(this._bookTop&&this._bookLoose&&this._bookLoose2){this._animationState="animating";const t=3;c.to(this._bookTop.rotation,{duration:t,z:.6,ease:"elastic.out(1, 0.3)",onComplete:()=>{this._animationState="opened"}}),c.to(this._bookLoose.rotation,{duration:t,z:.15,ease:"elastic.out(1, 0.3)"}),c.to(this._bookLoose2.rotation,{duration:t,z:.02,ease:"elastic.out(1, 0.3)"})}}_animateCloseBook(){if(this._bookTop&&this._bookLoose&&this._bookLoose2){this._animationState="animating";const t=1;c.to(this._bookTop.rotation,{duration:t,z:0,ease:"power4.in",onComplete:()=>{this._animationState="closed"}}),c.to(this._bookLoose.rotation,{duration:t,z:-.05,ease:"power4.in"}),c.to(this._bookLoose2.rotation,{duration:t,z:-.05,ease:"power4.in"})}}_debugButtonPressed(t){if(this._camera){switch(t){case"xUp":this._camera.position.x+=this._debugIncrement;break;case"xDown":this._camera.position.x-=this._debugIncrement;break;case"yUp":this._camera.position.y+=this._debugIncrement;break;case"yDown":this._camera.position.y-=this._debugIncrement;break;case"zUp":this._camera.position.z+=this._debugIncrement;break;case"zDown":this._camera.position.z-=this._debugIncrement;break;case"xRotateUp":this._camera.rotation.x+=this._debugIncrement;break;case"xRotateDown":this._camera.rotation.x-=this._debugIncrement;break;case"yRotateUp":this._camera.rotation.y+=this._debugIncrement;break;case"yRotateDown":this._camera.rotation.y-=this._debugIncrement;break;case"zRotateUp":this._camera.rotation.z+=this._debugIncrement;break;case"zRotateDown":this._camera.rotation.z-=this._debugIncrement;break;case"i0_1":this._debugIncrement=.1;break;case"i0_5":this._debugIncrement=.5;break;case"i1":this._debugIncrement=1;break}this._debugCameraX=this._camera.position.x,this._debugCameraY=this._camera.position.y,this._debugCameraZ=this._camera.position.z,this._debugCameraRotateX=this._camera.rotation.x,this._debugCameraRotateY=this._camera.rotation.y,this._debugCameraRotateZ=this._camera.rotation.z,C("Camera",`position x: ${this._camera.position.x}`,`position y: ${this._camera.position.y}`,`position z: ${this._camera.position.z}`,`rotation x: ${this._camera.rotation.x}`,`rotation y: ${this._camera.rotation.y}`,`rotation z: ${this._camera.rotation.z}`)}t==="close"&&(this._showDebugControls=!1,this._scene.background=new u("white"))}_init(){var t;if(this._container=((t=this.renderRoot)==null?void 0:t.querySelector("#guide-book-scene-container"))??null,this._container){const a=this._settings.camera.fov,h=this._container.clientWidth/this._container.clientHeight,r=this._settings.camera.near,o=this._settings.camera.far;this._camera=new v(a,h,r,o),this._camera.position.set(this._settings.camera.position.x,this._settings.camera.position.y,this._settings.camera.position.z),this._camera.rotation.set(this._settings.camera.rotation.x,this._settings.camera.rotation.y,this._settings.camera.rotation.z),this._scene=new z,this._scene.background=new u(this._settings.scene.bgColor),this._ambientLight=new w(this._settings.lights.ambient.skyColor,this._settings.lights.ambient.groundColor,this._settings.lights.ambient.intensity),this._mainLight=new f(this._settings.lights.directional.color,this._settings.lights.directional.intensity),this._mainLight.position.set(this._settings.lights.directional.position.x,this._settings.lights.directional.position.y,this._settings.lights.directional.position.z),this._scene.add(this._ambientLight,this._mainLight),this._renderer=new x({antialias:!0,powerPreference:"high-performance"}),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement),this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),new R().load(this._objectUrl,n=>{this._object=n,this._object.scene.scale.set(this._settings.object.scale.x,this._settings.object.scale.y,this._settings.object.scale.z),this._object.scene.rotation.set(this._settings.object.rotation.x,this._settings.object.rotation.y,this._settings.object.rotation.z),this._scene.add(this._object.scene),this._showDebugControls&&this._object.scene.traverse(_=>{}),this._bookTop=this._object.scene.getObjectByName("Top"),this._bookLoose=this._object.scene.getObjectByName("Loose"),this._bookLoose2=this._object.scene.getObjectByName("Loose_2")},void 0,void 0),this._renderer.setAnimationLoop(()=>{this._object&&this._renderer.render(this._scene,this._camera)}),this._resizeObserver=new ResizeObserver(n=>{if(this._container)for(let _ of n)_.contentBoxSize&&(this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight))}),this._resizeObserver&&this._resizeObserver.observe(this._container),this._animationState="closed"}}_onContainerClicked(){this._animationState==="opened"?this._animateCloseBook():this._animationState==="closed"&&this._animateOpenBook()}firstUpdated(t){super.firstUpdated(t),this._init()}render(){return d`
      <div class="guide-book-scene-wrapper">
        <div id="guide-book-scene-container" @click="${this._onContainerClicked}"></div>
      </div>
      ${this._showDebugControls?d`
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
          `:y}
    `}};e.styles=l`
    .guide-book-scene-wrapper {
      display: block;
      aspect-ratio: 5 / 6;
      max-width: 100%;
      position: relative;
    }
    #guide-book-scene-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      & canvas {
        border-radius: var(--guide-border-radius);
      }
    }
  `;i([m({attribute:"t-messages",type:Object})],e.prototype,"tMessages",2);i([s()],e.prototype,"_animationState",2);i([s()],e.prototype,"_debugIncrement",2);i([s()],e.prototype,"_debugCameraX",2);i([s()],e.prototype,"_debugCameraY",2);i([s()],e.prototype,"_debugCameraZ",2);i([s()],e.prototype,"_debugCameraRotateX",2);i([s()],e.prototype,"_debugCameraRotateY",2);i([s()],e.prototype,"_debugCameraRotateZ",2);i([s()],e.prototype,"_objectUrl",2);i([s()],e.prototype,"_resizeObserver",2);i([s()],e.prototype,"_settings",2);i([s()],e.prototype,"_showDebugControls",2);e=i([k("guide-book")],e);
