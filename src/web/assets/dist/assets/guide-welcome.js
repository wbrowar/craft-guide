import{_ as e,d as t,f as n,h as r,m as i,n as a,p as o,u as s,v as c}from"./console.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./GLTFLoader.js";var _=class extends i{constructor(...e){super(...e),this._container=null,this.tMessages={},this._animationState=`intro`,this._debugIncrement=.5,this._debugCameraX=0,this._debugCameraY=0,this._debugCameraZ=0,this._debugCameraRotateX=0,this._debugCameraRotateY=0,this._debugCameraRotateZ=0,this._objectUrl=`${a}/guide-book.gltf`,this._playing=!0,this._resizeObserver=null,this._settings={animation:{rotation:{x:0,y:0,z:0,xSineMax:0}},camera:{fov:60,near:.1,far:30,position:{x:0,y:10,z:0},rotation:{x:4.7,y:0,z:0}},lights:{ambient:{groundColor:2236962,intensity:1,skyColor:16777215},directional:{color:16777215,intensity:4,position:{x:10,y:10,z:10}}},object:{scale:{x:1,y:1,z:1},rotation:{x:0,y:0,z:0}},scene:{bgColor:`rgb(66, 97, 130)`}},this._showDebugControls=!1,this._showPlayToggle=!1}static{this.styles=c`
    .guide-welcome-scene-wrapper {
      display: block;
      aspect-ratio: 16 / 9;
      max-width: 100%;
      position: relative;

      & > button {
        appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        position: absolute;
        bottom: var(--l);
        right: var(--l);
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid var(--hairline-color);
        border-radius: 50%;
        transition: opacity calc(var(--guide-duration) * 5) ease-out;
        cursor: pointer;

        &:hover {
          background-color: color-mix(in srgb, rgba(255, 255, 255, 0.9), rgb(1, 16, 99) 10%);
        }
      }
    }
    #guide-welcome-scene-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      & canvas {
        border-radius: var(--guide-border-radius);
      }
    }
  `}_animateOpenBook(){this._bookTop&&this._bookLoose&&this._bookLoose2&&(this._animationState=`animating`,f.to(this._bookTop.rotation,{duration:3,z:1.9,ease:`elastic.out(1, 0.3)`,onComplete:()=>{this._animationState=`opened`}}),f.to(this._bookLoose.rotation,{duration:3,z:.15,ease:`elastic.out(1, 0.3)`}),f.to(this._bookLoose2.rotation,{duration:3,z:.02,ease:`elastic.out(1, 0.3)`}))}_animateCloseBook(){this._bookTop&&this._bookLoose&&this._bookLoose2&&(this._animationState=`animating`,f.to(this._bookTop.rotation,{duration:1,z:0,ease:`power4.in`,onComplete:()=>{this._animationState=`closed`}}),f.to(this._bookLoose.rotation,{duration:1,z:-.05,ease:`power4.in`}),f.to(this._bookLoose2.rotation,{duration:1,z:-.05,ease:`power4.in`}))}_animateSlideInBook(){if(this._book){this._animationState=`animating`;let e=1.2;f.to(this._book.position,{duration:e,x:0,startAt:{x:-10},ease:`power2.out`,onComplete:()=>{this._animationState=`closed`}}),f.to(this._book.rotation,{duration:e,y:Math.random()-.5,startAt:{y:Math.random()-.5},ease:`power2.out`}),setTimeout(()=>{this._animateOpenBook()},2500),setTimeout(()=>{this._playCameraLoop(),this._showPlayToggle=!0},5e3)}}_debugButtonPressed(e){if(this._camera){switch(e){case`xUp`:this._camera.position.x+=this._debugIncrement;break;case`xDown`:this._camera.position.x-=this._debugIncrement;break;case`yUp`:this._camera.position.y+=this._debugIncrement;break;case`yDown`:this._camera.position.y-=this._debugIncrement;break;case`zUp`:this._camera.position.z+=this._debugIncrement;break;case`zDown`:this._camera.position.z-=this._debugIncrement;break;case`xRotateUp`:this._camera.rotation.x+=this._debugIncrement;break;case`xRotateDown`:this._camera.rotation.x-=this._debugIncrement;break;case`yRotateUp`:this._camera.rotation.y+=this._debugIncrement;break;case`yRotateDown`:this._camera.rotation.y-=this._debugIncrement;break;case`zRotateUp`:this._camera.rotation.z+=this._debugIncrement;break;case`zRotateDown`:this._camera.rotation.z-=this._debugIncrement;break;case`i0_1`:this._debugIncrement=.1;break;case`i0_5`:this._debugIncrement=.5;break;case`i1`:this._debugIncrement=1}this._debugCameraX=this._camera.position.x,this._debugCameraY=this._camera.position.y,this._debugCameraZ=this._camera.position.z,this._debugCameraRotateX=this._camera.rotation.x,this._debugCameraRotateY=this._camera.rotation.y,this._debugCameraRotateZ=this._camera.rotation.z,`${this._camera.position.x}`,`${this._camera.position.y}`,`${this._camera.position.z}`,`${this._camera.rotation.x}`,`${this._camera.rotation.y}`,`${this._camera.rotation.z}`}e===`close`&&(this._showDebugControls=!1)}_init(){if(this._container=this.renderRoot?.querySelector(`#guide-welcome-scene-container`)??null,this._container){let e=this._settings.camera.fov,t=this._container.clientWidth/this._container.clientHeight,n=this._settings.camera.near,r=this._settings.camera.far;this._camera=new h(e,t,n,r),this._camera.position.set(this._settings.camera.position.x,this._settings.camera.position.y,this._settings.camera.position.z),this._camera.rotation.set(this._settings.camera.rotation.x,this._settings.camera.rotation.y,this._settings.camera.rotation.z),this._scene=new u,this._scene.background=new d(this._settings.scene.bgColor),this._ambientLight=new p(this._settings.lights.ambient.skyColor,this._settings.lights.ambient.groundColor,this._settings.lights.ambient.intensity),this._mainLight=new l(this._settings.lights.directional.color,this._settings.lights.directional.intensity),this._mainLight.position.set(this._settings.lights.directional.position.x,this._settings.lights.directional.position.y,this._settings.lights.directional.position.z),this._scene.add(this._ambientLight,this._mainLight),this._renderer=new m({antialias:!0,powerPreference:`high-performance`}),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),this._renderer.setPixelRatio(window.devicePixelRatio),this._container.appendChild(this._renderer.domElement),this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight),new g().load(this._objectUrl,e=>{if(this._object=e,this._object.scene.scale.set(this._settings.object.scale.x,this._settings.object.scale.y,this._settings.object.scale.z),this._object.scene.rotation.set(this._settings.object.rotation.x,this._settings.object.rotation.y,this._settings.object.rotation.z),this._scene.add(this._object.scene),this._showDebugControls){let e=[];this._object.scene.traverse(t=>{e.push(t)})}this._book=this._object.scene.getObjectByName(`Scene`),this._bookTop=this._object.scene.getObjectByName(`Top`),this._bookLoose=this._object.scene.getObjectByName(`Loose`),this._bookLoose2=this._object.scene.getObjectByName(`Loose_2`),this._animateSlideInBook()},void 0,void 0),this._renderer.setAnimationLoop(()=>{this._object&&this._renderer.render(this._scene,this._camera)}),this._resizeObserver=new ResizeObserver(e=>{if(this._container)for(let t of e)t.contentBoxSize&&(this._camera.aspect=this._container.clientWidth/this._container.clientHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(this._container.clientWidth,this._container.clientHeight))}),this._resizeObserver&&this._resizeObserver.observe(this._container)}}_onContainerClicked(){this._animationState===`opened`?this._animateCloseBook():this._animationState===`closed`&&this._animateOpenBook()}_pause(){this._timeline&&(this._timeline.pause(),this._playing=!1)}_play(){this._timeline&&(this._timeline.play(),this._playing=!0)}_playCameraLoop(){if(this._camera){let e=[];this._timeline=f.timeline({onComplete:()=>{f.set(this._book.rotation,{y:()=>Math.random()-.5}),this._timeline.restart()}}),e.push(`leftToRight`),e.push(`zoomFromTop`),e.push(`downRightSide`),e.push(`acrossFront`),e.push(`cornerUp`),e.includes(`leftToRight`)&&this._timeline.add(`leftToRight`).set(this._camera.position,{x:-13,y:.7,z:5},`leftToRight`).set(this._camera.rotation,{x:0,y:0,z:0},`leftToRight`).to(this._camera.position,{x:15,y:.7,z:5,ease:`power1.inOut`,duration:15},`leftToRight`).to(this._camera.rotation,{x:0,y:0,z:0,duration:15},`leftToRight`),e.includes(`zoomFromTop`)&&this._timeline.add(`zoomFromTop`).set(this._camera.position,{x:0,y:31,z:0},`zoomFromTop`).set(this._camera.rotation,{x:4.7,y:0,z:0},`zoomFromTop`).to(this._camera.position,{x:0,y:1,z:1.5,ease:`power4.out`,duration:15},`zoomFromTop`).to(this._camera.rotation,{x:5.99,y:0,z:0,ease:`power1.in`,duration:15},`zoomFromTop`),e.includes(`downRightSide`)&&this._timeline.add(`downRightSide`).set(this._camera.position,{x:6.3,y:1,z:-13},`downRightSide`).set(this._camera.rotation,{x:-6.66,y:1.499,z:0},`downRightSide`).to(this._camera.position,{x:4.3,y:1,z:4.447071,ease:`power1.inOut`,duration:10},`downRightSide`).to(this._camera.rotation,{x:-6.46,y:1.299,z:0,ease:`power1.inOut`,duration:10},`downRightSide`),e.includes(`acrossFront`)&&this._timeline.add(`acrossFront`).set(this._camera.position,{x:0,y:2,z:-5.5},`acrossFront`).set(this._camera.rotation,{x:4.7,y:0,z:0},`acrossFront`).to(this._camera.position,{x:0,y:2,z:5.5,ease:`power1.inOut`,duration:15},`acrossFront`).to(this._camera.rotation,{x:4.7,y:0,z:0,ease:`power1.inOut`,duration:15},`acrossFront`),e.includes(`cornerUp`)&&this._timeline.add(`cornerUp`).set(this._camera.position,{x:3.499,y:0,z:3.1},`cornerUp`).set(this._camera.rotation,{x:6.7,y:.8,z:-.3},`cornerUp`).to(this._camera.position,{x:2.99,y:1.8,z:2.7,ease:`power1.inOut`,duration:15},`cornerUp`).to(this._camera.rotation,{x:5.5,y:.8,z:.7,ease:`power1.inOut`,duration:15},`cornerUp`)}}firstUpdated(e){super.firstUpdated(e),this._init()}render(){return e`
      <div class="guide-welcome-scene-wrapper">
        <div id="guide-welcome-scene-container" @click="${this._onContainerClicked}"></div>
        ${this._playing?e`<button
              type="button"
              style="${this._showPlayToggle?r:`cursor: default; opacity: 0;`}"
              @click="${this._pause}"
              title="${this.tMessages.pause}"
            >
              <slot name="pause-icon"></slot>
            </button>`:e`<button
              type="button"
              style="${this._showPlayToggle?r:`cursor: default; opacity: 0;`}"
              @click="${this._play}"
              title="${this.tMessages.pause}"
            >
              <slot name="play-icon"></slot>
            </button>`}
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
    `}};s([n({attribute:`t-messages`,type:Object})],_.prototype,`tMessages`,void 0),s([t()],_.prototype,`_animationState`,void 0),s([t()],_.prototype,`_debugIncrement`,void 0),s([t()],_.prototype,`_debugCameraX`,void 0),s([t()],_.prototype,`_debugCameraY`,void 0),s([t()],_.prototype,`_debugCameraZ`,void 0),s([t()],_.prototype,`_debugCameraRotateX`,void 0),s([t()],_.prototype,`_debugCameraRotateY`,void 0),s([t()],_.prototype,`_debugCameraRotateZ`,void 0),s([t()],_.prototype,`_objectUrl`,void 0),s([t()],_.prototype,`_playing`,void 0),s([t()],_.prototype,`_resizeObserver`,void 0),s([t()],_.prototype,`_settings`,void 0),s([t()],_.prototype,`_showDebugControls`,void 0),s([t()],_.prototype,`_showPlayToggle`,void 0),_=s([o(`guide-welcome`)],_);