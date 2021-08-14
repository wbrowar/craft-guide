<template>
  <div class="g-relative">
    <div id="scene-container" ref="sceneContainer" class="g-absolute g-inset-0" @click="onContainerClicked"></div>
    <div class="g-absolute g-right-0 g-bottom-0 g-space-x-1" v-if="devMode">
      <button class="btn small" type="button" @mousedown="debugButtonPressed('status')">⏺</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('i0_1')">
        <b v-if="debugIncrement === 0.1">0.1</b><span v-else>0.1</span>
      </button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('i0_5')">
        <b v-if="debugIncrement === 0.5">0.5</b><span v-else>0.5</span>
      </button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('i1')">
        <b v-if="debugIncrement === 1">1</b><span v-else>1</span>
      </button>
      <span>X: {{ debugCameraX }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('xUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('xDown')">⬇️</button>
      <span>Y: {{ debugCameraY }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('yUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('yDown')">⬇️</button>
      <span>Z: {{ debugCameraZ }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('zUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('zDown')">⬇️</button>
      <span>Rotate X: {{ debugCameraRotateX }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('xRotateUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('xRotateDown')">⬇️</button>
      <span>Rotate Y: {{ debugCameraRotateY }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('yRotateUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('yRotateDown')">⬇️</button>
      <span>Rotate Z: {{ debugCameraRotateZ }}</span>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('zRotateUp')">⬆️</button>
      <button class="btn small" type="button" @mousedown="debugButtonPressed('zRotateDown')">⬇️</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { devMode, log } from '../globals';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Camera, ColorRepresentation, DirectionalLight, HemisphereLight, Object3D, Scene, WebGLRenderer } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface SceneSettings {
  animation: {
    rotation: {
      x: number;
      y: number;
      z: number;
      xSineMax: number;
    };
  };
  camera: {
    fov: number;
    near: number;
    far: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  };
  lights: {
    ambient: {
      groundColor: ColorRepresentation;
      intensity: number;
      skyColor: ColorRepresentation;
    };
    directional: {
      color: ColorRepresentation;
      intensity: number;
      position: {
        x: number;
        y: number;
        z: number;
      };
    };
  };
  object: {
    scale: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  };
  scene: {
    bgColor: string;
  };
}

let ambientLight: HemisphereLight;
let container: HTMLElement;
let camera: Camera;
let mainLight: DirectionalLight;
let object: any;
let renderer: WebGLRenderer;
let scene: Scene;

let book: Object3D;
let bookTop: Object3D;
let bookLoose: Object3D;
let bookLoose2: Object3D;
let timeline;

gsap.registerPlugin(MotionPathPlugin);

export default defineComponent({
  name: 'WelcomeAnimation',
  components: {},
  props: {
    aspectRatio: { type: String, default: '16 / 9' },
    sceneBackgroundUrl: String,
    sceneSettings: String,
  },
  setup(props) {
    const state = reactive({
      animationState: 'intro',
      animationXDirection: 1,
      bookLooseTextureUrl: new URL('/guide-thank-you.png', import.meta.url),
      debugIncrement: 0.5,
      debugCameraX: 0,
      debugCameraY: 0,
      debugCameraZ: 0,
      debugCameraRotateX: 0,
      debugCameraRotateY: 0,
      debugCameraRotateZ: 0,
      hasBeenInteractedWith: false,
      devMode,
      objectUrl: new URL('/guide-book.gltf', import.meta.url),
      resizeObserver: null as ResizeObserver | null,
      settings: {
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
          bgColor: 'rgb(35, 31, 32)',
        },
      } as SceneSettings,
    });

    return { ...toRefs(state) };
  },
  computed: {
    aspect(): string {
      const aspect: string[] = this.aspectRatio.split(' ');
      return `${(parseFloat(aspect[2]) / parseFloat(aspect[0])) * 100}%`;
    },
  },
  methods: {
    animateOpenBook() {
      if (bookTop && bookLoose && bookLoose2) {
        this.hasBeenInteractedWith = true;

        this.animationState = 'animating';
        const speed = 3;
        gsap.to(bookTop.rotation, {
          duration: speed,
          z: 1.9,
          ease: 'elastic.out(1, 0.3)',
          onComplete: () => {
            this.animationState = 'opened';
          },
        });
        gsap.to(bookLoose.rotation, {
          duration: speed,
          z: 0.15,
          ease: 'elastic.out(1, 0.3)',
        });
        gsap.to(bookLoose2.rotation, {
          duration: speed,
          z: 0.02,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    },
    animateCloseBook() {
      if (bookTop && bookLoose && bookLoose2) {
        this.hasBeenInteractedWith = true;

        this.animationState = 'animating';
        const speed = 1;
        gsap.to(bookTop.rotation, {
          duration: speed,
          z: 0,
          ease: 'power4.in',
          onComplete: () => {
            this.animationState = 'closed';
          },
        });
        gsap.to(bookLoose.rotation, {
          duration: speed,
          z: -0.05,
          ease: 'power4.in',
        });
        gsap.to(bookLoose2.rotation, {
          duration: speed,
          z: -0.05,
          ease: 'power4.in',
        });
      }
    },
    animateSlideInBook() {
      if (book) {
        this.animationState = 'animating';
        const speed = 1.2;
        gsap.to(book.position, {
          duration: speed,
          x: 0,
          startAt: {
            x: -10,
          },
          ease: 'power2.out',
          onComplete: () => {
            this.animationState = 'closed';
          },
        });
        gsap.to(book.rotation, {
          duration: speed,
          y: Math.random() - 0.5,
          startAt: {
            y: Math.random() - 0.5,
          },
          ease: 'power2.out',
        });

        setTimeout(() => {
          if (!this.hasBeenInteractedWith) {
            this.animateOpenBook();
          }
        }, 2500);

        setTimeout(() => {
          this.playCameraLoop();
        }, 5000);
      }
    },
    debugButtonPressed(action) {
      if (camera) {
        switch (action) {
          case 'xUp':
            camera.position.x += this.debugIncrement;
            break;
          case 'xDown':
            camera.position.x -= this.debugIncrement;
            break;
          case 'yUp':
            camera.position.y += this.debugIncrement;
            break;
          case 'yDown':
            camera.position.y -= this.debugIncrement;
            break;
          case 'zUp':
            camera.position.z += this.debugIncrement;
            break;
          case 'zDown':
            camera.position.z -= this.debugIncrement;
            break;
          case 'xRotateUp':
            camera.rotation.x += this.debugIncrement;
            break;
          case 'xRotateDown':
            camera.rotation.x -= this.debugIncrement;
            break;
          case 'yRotateUp':
            camera.rotation.y += this.debugIncrement;
            break;
          case 'yRotateDown':
            camera.rotation.y -= this.debugIncrement;
            break;
          case 'zRotateUp':
            camera.rotation.z += this.debugIncrement;
            break;
          case 'zRotateDown':
            camera.rotation.z -= this.debugIncrement;
            break;
          case 'i0_1':
            this.debugIncrement = 0.1;
            break;
          case 'i0_5':
            this.debugIncrement = 0.5;
            break;
          case 'i1':
            this.debugIncrement = 1;
            break;
        }
        this.debugCameraX = camera.position.x;
        this.debugCameraY = camera.position.y;
        this.debugCameraZ = camera.position.z;
        this.debugCameraRotateX = camera.rotation.x;
        this.debugCameraRotateY = camera.rotation.y;
        this.debugCameraRotateZ = camera.rotation.z;

        log(
          'Camera',
          `position x: ${camera.position.x}`,
          `position y: ${camera.position.y}`,
          `position z: ${camera.position.z}`,
          `rotation x: ${camera.rotation.x}`,
          `rotation y: ${camera.rotation.y}`,
          `rotation z: ${camera.rotation.z}`
        );
      }
    },
    init() {
      // set container
      container = this.$refs.sceneContainer as HTMLElement;
      // add camera
      const fov = this.settings.camera.fov; // Field of view
      const aspect = container.clientWidth / container.clientHeight;
      const near = this.settings.camera.near; // the near clipping plane
      const far = this.settings.camera.far; // the far clipping plane
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(
        this.settings.camera.position.x,
        this.settings.camera.position.y,
        this.settings.camera.position.z
      );
      camera.rotation.set(
        this.settings.camera.rotation.x,
        this.settings.camera.rotation.y,
        this.settings.camera.rotation.z
      );
      // create scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(this.settings.scene.bgColor);
      if (this.sceneBackgroundUrl) {
        scene.background = new THREE.TextureLoader().load(this.sceneBackgroundUrl);
      }
      // add lights
      ambientLight = new THREE.HemisphereLight(
        this.settings.lights.ambient.skyColor,
        this.settings.lights.ambient.groundColor,
        this.settings.lights.ambient.intensity
      );
      mainLight = new THREE.DirectionalLight(
        this.settings.lights.directional.color,
        this.settings.lights.directional.intensity
      );
      mainLight.position.set(
        this.settings.lights.directional.position.x,
        this.settings.lights.directional.position.y,
        this.settings.lights.directional.position.z
      );
      scene.add(ambientLight, mainLight);
      // add controls
      // const controls = new OrbitControls(camera, container);
      // create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      // renderer.gammaFactor = 2.2;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.physicallyCorrectLights = true;
      container.appendChild(renderer.domElement);
      // set aspect ratio to match the new browser window aspect ratio
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      const loader = new GLTFLoader();
      loader.load(
        this.objectUrl.href,
        (gltf) => {
          object = gltf;
          object.scene.scale.set(
            this.settings.object.scale.x,
            this.settings.object.scale.y,
            this.settings.object.scale.z
          );
          object.scene.rotation.set(
            this.settings.object.rotation.x,
            this.settings.object.rotation.y,
            this.settings.object.rotation.z
          );
          scene.add(object.scene);

          if (this.devMode) {
            const children: any[] = [];

            object.scene.traverse((child: any) => {
              children.push(child);
            });
            log('Scened objects', children);
          }

          book = object.scene.getObjectByName('Scene');
          bookTop = object.scene.getObjectByName('Top');
          bookLoose = object.scene.getObjectByName('Loose');
          bookLoose2 = object.scene.getObjectByName('Loose_2');

          if (bookLoose) {
            bookLoose.texture = new THREE.TextureLoader().load(this.bookLooseTextureUrl.href);
            bookLoose.texture.encoding = THREE.sRGBEncoding;
            bookLoose.texture.flipY = false;
          }

          this.animateSlideInBook();

          log('Objects from scene', bookTop, bookLoose, bookLoose2);
        },
        undefined,
        undefined
      );
      renderer.setAnimationLoop(() => {
        if (object) {
          renderer.render(scene, camera);
        }
      });

      this.resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          let width = container.clientWidth;
          let height = container.clientHeight;

          if (entry.contentBoxSize) {
            // Firefox implements `contentBoxSize` as a single content rect, rather than an array
            const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
            width = contentBoxSize.inlineSize;
            height = contentBoxSize.blockSize;
          } else {
            width = entry.contentRect.width;
            height = entry.contentRect.height;
          }

          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(window.innerWidth, window.innerHeight);
        }

        console.log('Size changed');
      });

      if (this.resizeObserver) {
        this.resizeObserver.observe(this.$refs.sceneContainer as HTMLElement);
      }
    },
    onContainerClicked() {
      if (this.animationState === 'opened') {
        this.animateCloseBook();
      } else if (this.animationState === 'closed') {
        this.animateOpenBook();
      }
    },
    playCameraLoop() {
      if (camera) {
        const animations = [];
        // timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        timeline = gsap.timeline({
          onComplete: function () {
            gsap.set(book.rotation, {
              y: () => {
                return Math.random() - 0.5;
              },
            });
            this.restart();
          },
        });

        animations.push('leftToRight');
        animations.push('zoomFromTop');
        animations.push('rotateAroundBook');

        // Slide from left to right
        if (animations.includes('leftToRight')) {
          const leftToRightDuration = 16;
          timeline
            .add('leftToRight')
            .set(
              camera.position,
              {
                x: -15,
                y: 0.7,
                z: 5,
              },
              'leftToRight'
            )
            .set(
              camera.rotation,
              {
                x: 0,
                y: 0,
                z: 0,
              },
              'leftToRight'
            )
            .to(
              camera.position,
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
              camera.rotation,
              {
                x: 0,
                y: 0,
                z: 0,
                duration: leftToRightDuration,
              },
              'leftToRight'
            );
        }

        if (animations.includes('zoomFromTop')) {
          const zoomFromTopDuration = 10;
          timeline
            .add('zoomFromTop')
            .set(
              camera.position,
              {
                x: 0,
                y: 31,
                z: 0,
              },
              'zoomFromTop'
            )
            .set(
              camera.rotation,
              {
                x: 4.7,
                y: 0,
                z: 0,
              },
              'zoomFromTop'
            )
            .to(
              camera.position,
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
              camera.rotation,
              {
                x: 5.99,
                y: 0,
                z: 0,
                ease: 'power1.in',
                duration: zoomFromTopDuration,
              },
              'zoomFromTop'
            );
        }

        if (animations.includes('rotateAroundBook')) {
          const rotateAroundBookDuration = 10;
          timeline
            .add('rotateAroundBook')
            .set(
              camera.position,
              {
                x: 6.3,
                y: 1,
                z: -13,
              },
              'rotateAroundBook'
            )
            .set(
              camera.rotation,
              {
                x: -6.66,
                y: 1.499,
                z: 0,
              },
              'rotateAroundBook'
            )
            .to(
              camera.position,
              {
                x: 4.3,
                y: 1,
                z: 4.447071,
                ease: 'power1.inOut',
                duration: rotateAroundBookDuration,
              },
              'rotateAroundBook'
            )
            .to(
              camera.rotation,
              {
                x: -6.46,
                y: 1.299,
                z: 0,
                ease: 'power1.inOut',
                duration: rotateAroundBookDuration,
              },
              'rotateAroundBook'
            );
        }

        // 📓 Camera
        //      globals.ts:69 ◉ 📓 position x: 4.3
        //      globals.ts:69 ◉ 📓 position y: 1
        //      globals.ts:69 ◉ 📓 position z: 6.447071
        //      globals.ts:69 ◉ 📓 rotation x: -6.66
        //      globals.ts:69 ◉ 📓 rotation y: 1.004822
        //      globals.ts:69 ◉ 📓 rotation z: 0
      }
    },
  },
  mounted() {
    log(`WelcomeAnimation loaded`, this.settings, JSON.stringify(this.settings));
    this.init();
  },
  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
});
</script>

<style>
#scene-container canvas {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
</style>
