<template>
  <div class="g-relative">
    <div id="scene-container" ref="sceneContainer" class="g-absolute g-inset-0" @click="onContainerClicked"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { devMode, log } from '../globals';
import gsap from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ColorRepresentation, Object3D } from 'three';

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
      animationXDirection: 1,
      book: null,
      bookLoose: null,
      bookLooseTextureUrl: new URL('/guide-thank-you.png', import.meta.url),
      bookLoose2: null,
      bookTop: null,
      animationState: 'intro',
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
            x: 0,
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
      if (this.bookTop && this.bookLoose && this.bookLoose2) {
        this.hasBeenInteractedWith = true;

        this.animationState = 'animating';
        const speed = 3;
        gsap.to(this.bookTop.rotation, {
          duration: speed,
          z: 1.9,
          ease: 'elastic.out(1, 0.3)',
          onComplete: () => {
            this.animationState = 'opened';
          },
        });
        gsap.to(this.bookLoose.rotation, {
          duration: speed,
          z: 0.15,
          ease: 'elastic.out(1, 0.3)',
        });
        gsap.to(this.bookLoose2.rotation, {
          duration: speed,
          z: 0.02,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    },
    animateCloseBook() {
      if (this.bookTop && this.bookLoose && this.bookLoose2) {
        this.hasBeenInteractedWith = true;

        this.animationState = 'animating';
        const speed = 1;
        gsap.to(this.bookTop.rotation, {
          duration: speed,
          z: 0,
          ease: 'power4.in',
          onComplete: () => {
            this.animationState = 'closed';
          },
        });
        gsap.to(this.bookLoose.rotation, {
          duration: speed,
          z: -0.05,
          ease: 'power4.in',
        });
        gsap.to(this.bookLoose2.rotation, {
          duration: speed,
          z: -0.05,
          ease: 'power4.in',
        });
      }
    },
    animateSlideInBook() {
      if (this.book) {
        this.animationState = 'animating';
        const speed = 0.7;
        gsap.to(this.book.position, {
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
        gsap.to(this.book.rotation, {
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
        }, 3000);
      }
    },
    init() {
      let object: any;

      // set container
      const container = this.$refs.sceneContainer as HTMLElement;
      // add camera
      const fov = this.settings.camera.fov; // Field of view
      const aspect = container.clientWidth / container.clientHeight;
      const near = this.settings.camera.near; // the near clipping plane
      const far = this.settings.camera.far; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
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
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(this.settings.scene.bgColor);
      if (this.sceneBackgroundUrl) {
        scene.background = new THREE.TextureLoader().load(this.sceneBackgroundUrl);
      }
      // add lights
      const ambientLight = new THREE.HemisphereLight(
        this.settings.lights.ambient.skyColor,
        this.settings.lights.ambient.groundColor,
        this.settings.lights.ambient.intensity
      );
      const mainLight = new THREE.DirectionalLight(
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
      const controls = new OrbitControls(camera, container);
      // create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
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

          this.book = object.scene.getObjectByName('Scene');
          this.bookTop = object.scene.getObjectByName('Top');
          this.bookLoose = object.scene.getObjectByName('Loose');
          this.bookLoose2 = object.scene.getObjectByName('Loose_2');

          if (this.bookLoose) {
            this.bookLoose.texture = new THREE.TextureLoader().load(this.bookLooseTextureUrl.href);
            this.bookLoose.texture.encoding = THREE.sRGBEncoding;
            this.bookLoose.texture.flipY = false;
          }

          this.animateSlideInBook();

          log('Objects from scene', this.bookTop, this.bookLoose, this.bookLoose2);
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
