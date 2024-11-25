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

@customElement('guide-book')
export class GuideBook extends LitElement {
  private _ambientLight!: HemisphereLight
  private _container: HTMLElement | null = null
  private _camera!: PerspectiveCamera
  private _mainLight!: DirectionalLight
  private _object: any
  private _renderer!: WebGLRenderer
  private _scene!: Scene

  // private _book!: Object3D
  private _bookTop!: Object3D
  private _bookLoose!: Object3D
  private _bookLoose2!: Object3D
  // private _timeline!: GSAPTimeline

  /**
   * ===========================================================================
   * CSS
   * ===========================================================================
   */
  static styles = css`
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
      // position: {
      //   x: 2.4889,
      //   y: 9.19,
      //   z: 1.25,
      // },
      // rotation: {
      //   x: 4.89,
      //   y: 0.249,
      //   z: 0,
      // },
      position: {
        x: 3.5889,
        y: 9.19,
        z: -0.35,
      },
      rotation: {
        x: 4.69,
        y: 0.349,
        z: 0.2,
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
      bgColor: import.meta.env.DEV ? 'fuchsia' : 'white',
    },
  }

  /**
   * Determines if debug controls should be displayed and used.
   */
  @state()
  private _showDebugControls = import.meta.env.DEV

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
      this._animationState = 'animating'
      const speed = 3
      gsap.to(this._bookTop.rotation, {
        duration: speed,
        // z: 0.6,
        z: 0.6,
        ease: 'elastic.out(1, 0.3)',
        onComplete: () => {
          this._animationState = 'opened'
        },
      })
      gsap.to(this._bookLoose.rotation, {
        duration: speed,
        // z: 0.15,
        z: 0.3,
        ease: 'elastic.out(1, 0.3)',
      })
      gsap.to(this._bookLoose2.rotation, {
        duration: speed,
        // z: 0.02,
        z: 0.1,
        ease: 'elastic.out(1, 0.3)',
      })
    }
  }

  /**
   * Closes the book and its pages.
   */
  private _animateCloseBook() {
    if (this._bookTop && this._bookLoose && this._bookLoose2) {
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
      this._scene.background = new THREE.Color('white')
    }
  }

  /**
   * Sets up the Three.js scene, loads the object, begins the animation, and sets up observers.
   */
  private _init() {
    // set container
    this._container = this.renderRoot?.querySelector('#guide-book-scene-container') ?? null

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

          // this._book = this._object.scene.getObjectByName('Scene')
          this._bookTop = this._object.scene.getObjectByName('Top')
          this._bookLoose = this._object.scene.getObjectByName('Loose')
          this._bookLoose2 = this._object.scene.getObjectByName('Loose_2')
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

      this._animationState = 'closed'
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
      <div class="guide-book-scene-wrapper">
        <div id="guide-book-scene-container" @click="${this._onContainerClicked}"></div>
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
    'guide-book': GuideBook
  }
}
