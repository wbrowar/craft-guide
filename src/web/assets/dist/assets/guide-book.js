import{_ as e,d as t,f as n,h as r,m as i,n as a,p as o,t as s,u as c,v as l}from"./console.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./GLTFLoader.js";var v=class extends i{constructor(...e){super(...e),this._container=null,this.tMessages={},this._animationState=`intro`,this._debugIncrement=.5,this._debugCameraX=0,this._debugCameraY=0,this._debugCameraZ=0,this._debugCameraRotateX=0,this._debugCameraRotateY=0,this._debugCameraRotateZ=0,this._objectUrl=`${a}/guide-book.gltf`,this._resizeObserver=null,this._settings={animation:{rotation:{x:0,y:0,z:0,xSineMax:0}},camera:{fov:60,near:.1,far:30,position:{x:0,y:10.69,z:-.17},rotation:{x:4.7,y:0,z:0}},lights:{ambient:{groundColor:2236962,intensity:1,skyColor:16777215},directional:{color:16777215,intensity:4,position:{x:10,y:10,z:10}}},object:{scale:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0}}},this._showDebugControls=!1}static{this.styles=l`
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
  `}_animateOpenBook(){this._bookTop&&this._bookLoose&&this._bookLoose2&&(this._animationState=`animating`,p.to(this._bookTop.rotation,{duration:3,z:1,ease:`elastic.out(1, 0.3)`,onComplete:()=>{this._animationState=`opened`}}),p.to(this._bookLoose.rotation,{duration:3,z:.75,ease:`elastic.out(1, 0.3)`}),p.to(this._bookLoose2.rotation,{duration:3,z:.5,ease:`elastic.out(1, 0.3)`}))}_animateCloseBook(){this._bookTop&&this._bookLoose&&this._bookLoose2&&(this._animationState=`animating`,p.to(this._bookTop.rotation,{duration:1,z:0,ease:`power4.in`,onComplete:()=>{this._animationState=`closed`}}),p.to(this._bookLoose.rotation,{duration:1,z:-.05,ease:`power4.in`}),p.to(this._bookLoose2.rotation,{duration:1,z:-.05,ease:`power4.in`}))}_debugButtonPressed(e){if(this._camera){switch(e){case`xUp`:this._camera.position.x+=this._debugIncrement;break;case`xDown`:this._camera.position.x-=this._debugIncrement;break;case`yUp`:this._camera.position.y+=this._debugIncrement;break;case`yDown`:this._camera.position.y-=this._debugIncrement;break;case`zUp`:this._camera.position.z+=this._debugIncrement;break;case`zDown`:this._camera.position.z-=this._debugIncrement;break;case`xRotateUp`:this._camera.rotation.x+=this._debugIncrement;break;case`xRotateDown`:this._camera.rotation.x-=this._debugIncrement;break;case`yRotateUp`:this._camera.rotation.y+=this._debugIncrement;break;case`yRotateDown`:this._camera.rotation.y-=this._debugIncrement;break;case`zRotateUp`:this._camera.rotation.z+=this._debugIncrement;break;case`zRotateDown`:this._camera.rotation.z-=this._debugIncrement;break;case`i0_1`:this._debugIncrement=.1;break;case`i0_5`:this._debugIncrement=.5;break;case`i1`:this._debugIncrement=1;break}this._debugCameraX=this._camera.position.x,this._debugCameraY=this._camera.position.y,this._debugCameraZ=this._camera.position.z,this._debugCameraRotateX=this._camera.rotation.x,this._debugCameraRotateY=this._camera.rotation.y,this._debugCameraRotateZ=this._camera.rotation.z,s(`Camera`,`position x: ${this._camera.position.x}`,`position y: ${this._camera.position.y}`,`position z: ${this._camera.position.z}`,`rotation x: ${this._camera.rotation.x}`,`rotation y: ${this._camera.rotation.y}`,`rotation z: ${this._camera.rotation.z}`)}e===`close`&&(this._showDebugControls=!1,this._scene.background=null)}_init(){if(this._container=this.renderRoot?.querySelector(`#guide-book-scene-container`)??null,this._container){let e=this._settings.camera.fov,t=this._container.clientWidth/this._container.clientHeight,n=this._settings.camera.near,r=this._settings.camera.far;this._camera=new g(e,t,n,r),this._camera.position.set(this._settings.camera.position.x,this._settings.camera.position.y,this._settings.camera.position.z),this._camera.rotation.set(this._settings.camera.rotation.x,this._settings.camera.rotation.y,this._settings.camera.rotation.z),this._scene=new d,this._showDebugControls&&(this._scene.background=new f(`fuchsia`)),this._ambientLight=new m(this._settings.lights.ambient.skyColor,this._settings.lights.ambient.groundColor,this._settings.lights.ambient.intensity),this._mainLight=new u(this._settings.lights.directional.color,this._settings.lights.directional.intensity),this._mainLight.position.set(this._settings.lights.directional.position.x,this._settings.lights.directional.position.y,this._settings.lights.directional.position.z),this._scene.add(this._ambientLight,this._mainLight),this._renderer=new h({alpha:!0,antialias:!0,powerPreference:`high-performance`}),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement),this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),new _().load(this._objectUrl,e=>{if(this._object=e,this._object.scene.scale.set(this._settings.object.scale.x,this._settings.object.scale.y,this._settings.object.scale.z),this._object.scene.rotation.set(this._settings.object.rotation.x,this._settings.object.rotation.y,this._settings.object.rotation.z),this._scene.add(this._object.scene),this._showDebugControls){let e=[];this._object.scene.traverse(t=>{e.push(t)})}this._bookTop=this._object.scene.getObjectByName(`Top`),this._bookLoose=this._object.scene.getObjectByName(`Loose`),this._bookLoose2=this._object.scene.getObjectByName(`Loose_2`),this._pen=this._object.scene.getObjectByName(`Pen`),this._pen.removeFromParent(),this._object.scene.getObjectByName(`Top`)},void 0,void 0),this._renderer.setAnimationLoop(()=>{this._object&&this._renderer.render(this._scene,this._camera)}),this._resizeObserver=new ResizeObserver(e=>{if(this._container)for(let t of e)t.contentBoxSize&&(this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight))}),this._resizeObserver&&this._resizeObserver.observe(this._container),this._animationState=`closed`}}_onContainerClicked(){this._animationState===`opened`?this._animateCloseBook():this._animationState===`closed`&&this._animateOpenBook()}firstUpdated(e){super.firstUpdated(e),this._init()}render(){return e`
      <div class="guide-book-scene-wrapper">
        <div id="guide-book-scene-container" @click="${this._onContainerClicked}"></div>
      </div>
      ${this._showDebugControls?e`
            <div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`close`)}">X</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`status`)}">⏺</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`i0_1`)}">
                <b v-if="debugIncrement === 0.1">0.1</b><span v-else>0.1</span>
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`i0_5`)}">
                <b v-if="debugIncrement === 0.5">0.5</b><span v-else>0.5</span>
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`i1`)}">
                <b v-if="debugIncrement === 1">1</b><span v-else>1</span>
              </button>
              <div>X: ${this._debugCameraX}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`xUp`)}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`xDown`)}">⬇️</button>
              <div>Y: ${this._debugCameraY}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`yUp`)}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`yDown`)}">⬇️</button>
              <div>Z: ${this._debugCameraZ}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`zUp`)}">⬆️</button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`zDown`)}">⬇️</button>
              <div>Rotate X: ${this._debugCameraRotateX}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`xRotateUp`)}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`xRotateDown`)}">
                ⬇️
              </button>
              <div>Rotate Y: ${this._debugCameraRotateY}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`yRotateUp`)}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`yRotateDown`)}">
                ⬇️
              </button>
              <div>Rotate Z: ${this._debugCameraRotateZ}</div>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`zRotateUp`)}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${()=>this._debugButtonPressed(`zRotateDown`)}">
                ⬇️
              </button>
            </div>
          `:r}
    `}};c([n({attribute:`t-messages`,type:Object})],v.prototype,`tMessages`,void 0),c([t()],v.prototype,`_animationState`,void 0),c([t()],v.prototype,`_debugIncrement`,void 0),c([t()],v.prototype,`_debugCameraX`,void 0),c([t()],v.prototype,`_debugCameraY`,void 0),c([t()],v.prototype,`_debugCameraZ`,void 0),c([t()],v.prototype,`_debugCameraRotateX`,void 0),c([t()],v.prototype,`_debugCameraRotateY`,void 0),c([t()],v.prototype,`_debugCameraRotateZ`,void 0),c([t()],v.prototype,`_objectUrl`,void 0),c([t()],v.prototype,`_resizeObserver`,void 0),c([t()],v.prototype,`_settings`,void 0),c([t()],v.prototype,`_showDebugControls`,void 0),v=c([o(`guide-book`)],v);