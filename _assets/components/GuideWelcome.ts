import { css, html, LitElement, nothing, PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import * as THREE from 'three'
import {
  ColorRepresentation,
  DirectionalLight,
  HemisphereLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import gsap from 'gsap'
import { assetPath } from '../globals.ts'
import { log } from '../utils/console.ts'
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface SceneSettings {
  animation: {
    rotation: {
      x: number
      y: number
      z: number
      xSineMax: number
    }
  }
  camera: {
    fov: number
    near: number
    far: number
    position: {
      x: number
      y: number
      z: number
    }
    rotation: {
      x: number
      y: number
      z: number
    }
  }
  lights: {
    ambient: {
      groundColor: ColorRepresentation
      intensity: number
      skyColor: ColorRepresentation
    }
    directional: {
      color: ColorRepresentation
      intensity: number
      position: {
        x: number
        y: number
        z: number
      }
    }
  }
  object: {
    scale: {
      x: number
      y: number
      z: number
    }
    rotation: {
      x: number
      y: number
      z: number
    }
  }
  scene: {
    bgColor: string
  }
}

@customElement('guide-welcome')
export class GuideWelcome extends LitElement {
  private _ambientLight!: HemisphereLight
  private _container: HTMLElement | null = null
  private _camera!: PerspectiveCamera
  private _mainLight!: DirectionalLight
  private _object: any
  private _renderer!: WebGLRenderer
  private _scene!: Scene

  private _book!: Object3D
  private _bookTop!: Object3D
  private _bookLoose!: Object3D
  private _bookLoose2!: Object3D
  private _timeline!: GSAPTimeline

  /**
   * ===========================================================================
   * CSS
   * ===========================================================================
   */
  static styles = css`
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
  `

  /**
   * ===========================================================================
   * PROPS
   * ===========================================================================
   */
  /**
   * Messages translated via Craft’s `t` filter.
   */
  @property({ attribute: 't-messages', type: Object })
  tMessages: Record<string, string> = {}

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * Keeps track of whether or not the book is opened or closed.
   */
  @state()
  private _animationState = 'intro'

  /**
   * The amount that a value will change when hitting one of the debug buttons.
   */
  @state()
  private _debugIncrement = 0.5

  /**
   * The location of the camera across the X plane.
   */
  @state()
  private _debugCameraX = 0

  /**
   * The location of the camera across the Y plane.
   */
  @state()
  private _debugCameraY = 0

  /**
   * The location of the camera across the Z plane.
   */
  @state()
  private _debugCameraZ = 0

  /**
   * The rotation of the camera across the X plane.
   */
  @state()
  private _debugCameraRotateX = 0

  /**
   * The rotation of the camera across the Y plane.
   */
  @state()
  private _debugCameraRotateY = 0

  /**
   * The rotation of the camera across the Z plane.
   */
  @state()
  private _debugCameraRotateZ = 0

  /**
   * The path to the guide book 3D asset as it can be loaded in the browser.
   */
  @state()
  private _objectUrl = `${assetPath}/guide-book.gltf`

  /**
   * Keeps track of whether or not the looping camera animation is paused or playing.
   */
  @state()
  private _playing = true

  /**
   * Watches for changes in the width and updates the aspect ratio of the 3D scene.
   */
  @state()
  private _resizeObserver: ResizeObserver | null = null

  /**
   * Settings passed into the Three.js scene that initialize the camera, lights, and the scene background.
   */
  @state()
  private _settings: SceneSettings = {
    animation: {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
        xSineMax: 0,
      },
    },
    camera: {
      fov: 60,
      near: 0.1,
      far: 30,
      position: {
        x: 0,
        y: 10,
        z: 0,
      },
      rotation: {
        x: 4.7,
        y: 0,
        z: 0,
      },
    },
    lights: {
      ambient: {
        groundColor: 0x222222,
        intensity: 1,
        skyColor: 0xffffff,
      },
      directional: {
        color: 0xffffff,
        intensity: 4.0,
        position: {
          x: 10,
          y: 10,
          z: 10,
        },
      },
    },
    object: {
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    scene: {
      bgColor: 'rgb(66, 97, 130)',
    },
  }

  /**
   * Determines if debug controls should be displayed and used.
   */
  @state()
  private _showDebugControls = import.meta.env.DEV

  /**
   * Determins if the play/pause button should be shown to the user.
   */
  @state()
  private _showPlayToggle = false

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Opens the book cover and the first and second pages.
   */
  private _animateOpenBook() {
    if (this._bookTop && this._bookLoose && this._bookLoose2) {
      this._hasBeenInteractedWith = true

      this._animationState = 'animating'
      const speed = 3
      gsap.to(this._bookTop.rotation, {
        duration: speed,
        z: 1.9,
        ease: 'elastic.out(1, 0.3)',
        onComplete: () => {
          this._animationState = 'opened'
        },
      })
      gsap.to(this._bookLoose.rotation, {
        duration: speed,
        z: 0.15,
        ease: 'elastic.out(1, 0.3)',
      })
      gsap.to(this._bookLoose2.rotation, {
        duration: speed,
        z: 0.02,
        ease: 'elastic.out(1, 0.3)',
      })
    }
  }

  /**
   * Closes the book and its pages.
   */
  private _animateCloseBook() {
    if (this._bookTop && this._bookLoose && this._bookLoose2) {
      this._hasBeenInteractedWith = true

      this._animationState = 'animating'
      const speed = 1
      gsap.to(this._bookTop.rotation, {
        duration: speed,
        z: 0,
        ease: 'power4.in',
        onComplete: () => {
          this._animationState = 'closed'
        },
      })
      gsap.to(this._bookLoose.rotation, {
        duration: speed,
        z: -0.05,
        ease: 'power4.in',
      })
      gsap.to(this._bookLoose2.rotation, {
        duration: speed,
        z: -0.05,
        ease: 'power4.in',
      })
    }
  }

  /**
   * Plays the initial animation of the camera sliding the book into view.
   */
  private _animateSlideInBook() {
    if (this._book) {
      this._animationState = 'animating'
      const speed = 1.2
      gsap.to(this._book.position, {
        duration: speed,
        x: 0,
        startAt: {
          x: -10,
        },
        ease: 'power2.out',
        onComplete: () => {
          this._animationState = 'closed'
        },
      })
      gsap.to(this._book.rotation, {
        duration: speed,
        y: Math.random() - 0.5,
        startAt: {
          y: Math.random() - 0.5,
        },
        ease: 'power2.out',
      })

      setTimeout(() => {
        if (!this._hasBeenInteractedWith) {
          this._animateOpenBook()
        }
      }, 2500)

      setTimeout(() => {
        this._playCameraLoop()
        this._showPlayToggle = true
      }, 5000)
    }
  }

  /**
   * Handles a debug button press. If the `close` button is pressed, the debug buttons will all be removed.
   * Refreshing the page will bring the debug buttons back.
   */
  private _debugButtonPressed(action: string) {
    if (this._camera) {
      switch (action) {
        case 'xUp':
          this._camera.position.x += this._debugIncrement
          break
        case 'xDown':
          this._camera.position.x -= this._debugIncrement
          break
        case 'yUp':
          this._camera.position.y += this._debugIncrement
          break
        case 'yDown':
          this._camera.position.y -= this._debugIncrement
          break
        case 'zUp':
          this._camera.position.z += this._debugIncrement
          break
        case 'zDown':
          this._camera.position.z -= this._debugIncrement
          break
        case 'xRotateUp':
          this._camera.rotation.x += this._debugIncrement
          break
        case 'xRotateDown':
          this._camera.rotation.x -= this._debugIncrement
          break
        case 'yRotateUp':
          this._camera.rotation.y += this._debugIncrement
          break
        case 'yRotateDown':
          this._camera.rotation.y -= this._debugIncrement
          break
        case 'zRotateUp':
          this._camera.rotation.z += this._debugIncrement
          break
        case 'zRotateDown':
          this._camera.rotation.z -= this._debugIncrement
          break
        case 'i0_1':
          this._debugIncrement = 0.1
          break
        case 'i0_5':
          this._debugIncrement = 0.5
          break
        case 'i1':
          this._debugIncrement = 1
          break
      }
      this._debugCameraX = this._camera.position.x
      this._debugCameraY = this._camera.position.y
      this._debugCameraZ = this._camera.position.z
      this._debugCameraRotateX = this._camera.rotation.x
      this._debugCameraRotateY = this._camera.rotation.y
      this._debugCameraRotateZ = this._camera.rotation.z

      log(
        'Camera',
        `position x: ${this._camera.position.x}`,
        `position y: ${this._camera.position.y}`,
        `position z: ${this._camera.position.z}`,
        `rotation x: ${this._camera.rotation.x}`,
        `rotation y: ${this._camera.rotation.y}`,
        `rotation z: ${this._camera.rotation.z}`
      )
    }

    if (action === 'close') {
      this._showDebugControls = false
    }
  }

  /**
   * Sets up the Three.js scene, loads the object, begins the animation, and sets up observers.
   */
  private _init() {
    // set container
    this._container = this.renderRoot?.querySelector('#guide-welcome-scene-container') ?? null

    if (this._container) {
      // add camera
      const fov = this._settings.camera.fov // Field of view
      const aspect = this._container.clientWidth / this._container.clientHeight
      const near = this._settings.camera.near // the near clipping plane
      const far = this._settings.camera.far // the far clipping plane
      this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
      this._camera.position.set(
        this._settings.camera.position.x,
        this._settings.camera.position.y,
        this._settings.camera.position.z
      )
      this._camera.rotation.set(
        this._settings.camera.rotation.x,
        this._settings.camera.rotation.y,
        this._settings.camera.rotation.z
      )
      // create scene
      this._scene = new THREE.Scene()
      this._scene.background = new THREE.Color(this._settings.scene.bgColor)
      // if (this.sceneBackgroundUrl) {
      //   scene.background = new THREE.TextureLoader().load(this.sceneBackgroundUrl)
      // }
      // add lights
      this._ambientLight = new THREE.HemisphereLight(
        this._settings.lights.ambient.skyColor,
        this._settings.lights.ambient.groundColor,
        this._settings.lights.ambient.intensity
      )
      this._mainLight = new THREE.DirectionalLight(
        this._settings.lights.directional.color,
        this._settings.lights.directional.intensity
      )
      this._mainLight.position.set(
        this._settings.lights.directional.position.x,
        this._settings.lights.directional.position.y,
        this._settings.lights.directional.position.z
      )
      this._scene.add(this._ambientLight, this._mainLight)
      // create renderer
      this._renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
      this._renderer.setSize(this._container.clientWidth, this._container.clientHeight)
      this._renderer.setPixelRatio(window.devicePixelRatio)
      // this._renderer.outputEncoding = THREE.sRGBEncoding
      // this._renderer.physicallyCorrectLights = true
      this._container.appendChild(this._renderer.domElement)
      // set aspect ratio to match the new browser window aspect ratio
      this._camera.aspect = this._container.clientWidth / this._container.clientHeight
      this._camera.updateProjectionMatrix()
      this._renderer.setSize(this._container.clientWidth, this._container.clientHeight)
      const loader = new GLTFLoader()
      loader.load(
        this._objectUrl,
        (gltf: any) => {
          this._object = gltf
          this._object.scene.scale.set(
            this._settings.object.scale.x,
            this._settings.object.scale.y,
            this._settings.object.scale.z
          )
          this._object.scene.rotation.set(
            this._settings.object.rotation.x,
            this._settings.object.rotation.y,
            this._settings.object.rotation.z
          )
          this._scene.add(this._object.scene)

          if (this._showDebugControls) {
            const children: any[] = []

            this._object.scene.traverse((child: any) => {
              children.push(child)
            })
          }

          this._book = this._object.scene.getObjectByName('Scene')
          this._bookTop = this._object.scene.getObjectByName('Top')
          this._bookLoose = this._object.scene.getObjectByName('Loose')
          this._bookLoose2 = this._object.scene.getObjectByName('Loose_2')

          this._animateSlideInBook()
        },
        undefined,
        undefined
      )
      this._renderer.setAnimationLoop(() => {
        if (this._object) {
          this._renderer.render(this._scene, this._camera)
        }
      })

      this._resizeObserver = new ResizeObserver((entries) => {
        if (this._container) {
          for (let entry of entries) {
            if (entry.contentBoxSize) {
              this._camera.aspect = this._container.clientWidth / this._container.clientHeight
              this._camera.updateProjectionMatrix()

              this._renderer.setSize(this._container.clientWidth, this._container.clientHeight)
            }
          }
        }
      })

      if (this._resizeObserver) {
        this._resizeObserver.observe(this._container)
      }
    }
  }

  /**
   * Handles clicking anywhere on the 3D scene element.
   */
  private _onContainerClicked() {
    if (this._animationState === 'opened') {
      this._animateCloseBook()
    } else if (this._animationState === 'closed') {
      this._animateOpenBook()
    }
  }

  /**
   * Pauses the looping camera animation timeline.
   */
  private _pause() {
    if (this._timeline) {
      this._timeline.pause()
      this._playing = false
    }
  }

  /**
   * Plays the looping camera animation timeline.
   */
  private _play() {
    if (this._timeline) {
      this._timeline.play()
      this._playing = true
    }
  }

  /**
   * Defines and enables each step in the looping camera animation.
   */
  private _playCameraLoop() {
    if (this._camera) {
      const animations: string[] = []
      // timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      this._timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(this._book.rotation, {
            y: () => {
              return Math.random() - 0.5
            },
          })
          this._timeline.restart()
        },
      })

      animations.push('leftToRight')
      animations.push('zoomFromTop')
      animations.push('downRightSide')
      animations.push('acrossFront')
      animations.push('cornerUp')

      // Slide from left to right
      if (animations.includes('leftToRight')) {
        const leftToRightDuration = 15
        this._timeline
          .add('leftToRight')
          .set(
            this._camera.position,
            {
              x: -13,
              y: 0.7,
              z: 5,
            },
            'leftToRight'
          )
          .set(
            this._camera.rotation,
            {
              x: 0,
              y: 0,
              z: 0,
            },
            'leftToRight'
          )
          .to(
            this._camera.position,
            {
              x: 15,
              y: 0.7,
              z: 5,
              ease: 'power1.inOut',
              duration: leftToRightDuration,
            },
            'leftToRight'
          )
          .to(
            this._camera.rotation,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: leftToRightDuration,
            },
            'leftToRight'
          )
      }

      if (animations.includes('zoomFromTop')) {
        const zoomFromTopDuration = 15
        this._timeline
          .add('zoomFromTop')
          .set(
            this._camera.position,
            {
              x: 0,
              y: 31,
              z: 0,
            },
            'zoomFromTop'
          )
          .set(
            this._camera.rotation,
            {
              x: 4.7,
              y: 0,
              z: 0,
            },
            'zoomFromTop'
          )
          .to(
            this._camera.position,
            {
              x: 0,
              y: 1,
              z: 1.5,
              ease: 'power4.out',
              duration: zoomFromTopDuration,
            },
            'zoomFromTop'
          )
          .to(
            this._camera.rotation,
            {
              x: 5.99,
              y: 0,
              z: 0,
              ease: 'power1.in',
              duration: zoomFromTopDuration,
            },
            'zoomFromTop'
          )
      }

      if (animations.includes('downRightSide')) {
        const downRightSideDuration = 10
        this._timeline
          .add('downRightSide')
          .set(
            this._camera.position,
            {
              x: 6.3,
              y: 1,
              z: -13,
            },
            'downRightSide'
          )
          .set(
            this._camera.rotation,
            {
              x: -6.66,
              y: 1.499,
              z: 0,
            },
            'downRightSide'
          )
          .to(
            this._camera.position,
            {
              x: 4.3,
              y: 1,
              z: 4.447071,
              ease: 'power1.inOut',
              duration: downRightSideDuration,
            },
            'downRightSide'
          )
          .to(
            this._camera.rotation,
            {
              x: -6.46,
              y: 1.299,
              z: 0,
              ease: 'power1.inOut',
              duration: downRightSideDuration,
            },
            'downRightSide'
          )
      }

      if (animations.includes('acrossFront')) {
        const acrossFrontDuration = 15
        this._timeline
          .add('acrossFront')
          .set(
            this._camera.position,
            {
              x: 0,
              y: 2,
              z: -5.5,
            },
            'acrossFront'
          )
          .set(
            this._camera.rotation,
            {
              x: 4.7,
              y: 0,
              z: 0,
            },
            'acrossFront'
          )
          .to(
            this._camera.position,
            {
              x: 0,
              y: 2,
              z: 5.5,
              ease: 'power1.inOut',
              duration: acrossFrontDuration,
            },
            'acrossFront'
          )
          .to(
            this._camera.rotation,
            {
              x: 4.7,
              y: 0,
              z: 0,
              ease: 'power1.inOut',
              duration: acrossFrontDuration,
            },
            'acrossFront'
          )
      }

      if (animations.includes('cornerUp')) {
        const cornerUpDuration = 15
        this._timeline
          .add('cornerUp')
          .set(
            this._camera.position,
            {
              x: 3.499,
              y: 0,
              z: 3.1,
            },
            'cornerUp'
          )
          .set(
            this._camera.rotation,
            {
              x: 6.7,
              y: 0.8,
              z: -0.3,
            },
            'cornerUp'
          )
          .to(
            this._camera.position,
            {
              x: 2.99,
              y: 1.8,
              z: 2.7,
              ease: 'power1.inOut',
              duration: cornerUpDuration,
            },
            'cornerUp'
          )
          .to(
            this._camera.rotation,
            {
              x: 5.5,
              y: 0.8,
              z: 0.7,
              ease: 'power1.inOut',
              duration: cornerUpDuration,
            },
            'cornerUp'
          )
      }
    }
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)

    this._init()
  }

  render() {
    return html`
      <div class="guide-welcome-scene-wrapper">
        <div id="guide-welcome-scene-container" @click="${this._onContainerClicked}"></div>
        ${this._playing
          ? html`<button
              type="button"
              style="${!this._showPlayToggle ? 'cursor: default; opacity: 0;' : nothing}"
              @click="${this._pause}"
              title="${this.tMessages.pause}"
            >
              <slot name="pause-icon"></slot>
            </button>`
          : html`<button
              type="button"
              style="${!this._showPlayToggle ? 'cursor: default; opacity: 0;' : nothing}"
              @click="${this._play}"
              title="${this.tMessages.pause}"
            >
              <slot name="play-icon"></slot>
            </button>`}
      </div>
      ${this._showDebugControls
        ? html`
            <div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('close')}">X</button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('status')}">⏺</button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('i0_1')}">
                <b v-if="debugIncrement === 0.1">0.1</b><span v-else>0.1</span>
              </button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('i0_5')}">
                <b v-if="debugIncrement === 0.5">0.5</b><span v-else>0.5</span>
              </button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('i1')}">
                <b v-if="debugIncrement === 1">1</b><span v-else>1</span>
              </button>
              <div>X: ${this._debugCameraX}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('xUp')}">⬆️</button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('xDown')}">⬇️</button>
              <div>Y: ${this._debugCameraY}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('yUp')}">⬆️</button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('yDown')}">⬇️</button>
              <div>Z: ${this._debugCameraZ}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('zUp')}">⬆️</button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('zDown')}">⬇️</button>
              <div>Rotate X: ${this._debugCameraRotateX}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('xRotateUp')}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('xRotateDown')}">
                ⬇️
              </button>
              <div>Rotate Y: ${this._debugCameraRotateY}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('yRotateUp')}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('yRotateDown')}">
                ⬇️
              </button>
              <div>Rotate Z: ${this._debugCameraRotateZ}</div>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('zRotateUp')}">
                ⬆️
              </button>
              <button class="btn small" type="button" @click="${() => this._debugButtonPressed('zRotateDown')}">
                ⬇️
              </button>
            </div>
          `
        : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'guide-welcome': GuideWelcome
  }
}
