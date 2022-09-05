<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { assetPath, devMode, log } from '../globals';
import gsap from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  ColorRepresentation,
  DirectionalLight,
  HemisphereLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import type { SceneSettings } from '~/types/plugins';

const emit = defineEmits(['paused', 'played']);
const props = defineProps({
  aspectRatio: { type: String, default: '16 / 9' },
  sceneBackgroundUrl: String,
  sceneSettings: String,
});

let ambientLight: HemisphereLight;
let container: HTMLElement;
let camera: PerspectiveCamera;
let mainLight: DirectionalLight;
let object: any;
let renderer: WebGLRenderer;
let scene: Scene;

let book: Object3D;
let bookTop: Object3D;
let bookLoose: Object3D;
let bookLoose2: Object3D;
let timeline: GSAPTimeline;

const animationState = ref('intro');
const animationXDirection = ref(1);
const debugIncrement = ref(0.5);
const debugCameraX = ref(0);
const debugCameraY = ref(0);
const debugCameraZ = ref(0);
const debugCameraRotateX = ref(0);
const debugCameraRotateY = ref(0);
const debugCameraRotateZ = ref(0);
const hasBeenInteractedWith = ref(false);
const objectUrl = ref(`${assetPath}/guide-book.gltf`);
const resizeObserver = ref<ResizeObserver | null>(null);
const settings = ref<SceneSettings>({
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
});

// Template refs
const sceneContainer = ref<HTMLElement>();

const aspect = computed(() => {
  const aspect: string[] = props.aspectRatio.split(' ');
  return `${(parseFloat(aspect[2]) / parseFloat(aspect[0])) * 100}%`;
});

const showDebugControls = computed(() => import.meta.env.DEV);


function animateOpenBook() {
  if (bookTop && bookLoose && bookLoose2) {
    hasBeenInteractedWith.value = true;

    animationState.value = 'animating';
    const speed = 3;
    gsap.to(bookTop.rotation, {
      duration: speed,
      z: 1.9,
      ease: 'elastic.out(1, 0.3)',
      onComplete: () => {
        animationState.value = 'opened';
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
};
function animateCloseBook() {
  if (bookTop && bookLoose && bookLoose2) {
    hasBeenInteractedWith.value = true;

    animationState.value = 'animating';
    const speed = 1;
    gsap.to(bookTop.rotation, {
      duration: speed,
      z: 0,
      ease: 'power4.in',
      onComplete: () => {
        animationState.value = 'closed';
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
};
function animateSlideInBook() {
  if (book) {
    animationState.value = 'animating';
    const speed = 1.2;
    gsap.to(book.position, {
      duration: speed,
      x: 0,
      startAt: {
        x: -10,
      },
      ease: 'power2.out',
      onComplete: () => {
        animationState.value = 'closed';
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
      if (!hasBeenInteractedWith.value) {
        animateOpenBook();
      }
    }, 2500);

    setTimeout(() => {
      playCameraLoop();
    }, 5000);
  }
};
function debugButtonPressed(action: string) {
  if (camera) {
    switch (action) {
      case 'xUp':
        camera.position.x += debugIncrement.value;
        break;
      case 'xDown':
        camera.position.x -= debugIncrement.value;
        break;
      case 'yUp':
        camera.position.y += debugIncrement.value;
        break;
      case 'yDown':
        camera.position.y -= debugIncrement.value;
        break;
      case 'zUp':
        camera.position.z += debugIncrement.value;
        break;
      case 'zDown':
        camera.position.z -= debugIncrement.value;
        break;
      case 'xRotateUp':
        camera.rotation.x += debugIncrement.value;
        break;
      case 'xRotateDown':
        camera.rotation.x -= debugIncrement.value;
        break;
      case 'yRotateUp':
        camera.rotation.y += debugIncrement.value;
        break;
      case 'yRotateDown':
        camera.rotation.y -= debugIncrement.value;
        break;
      case 'zRotateUp':
        camera.rotation.z += debugIncrement.value;
        break;
      case 'zRotateDown':
        camera.rotation.z -= debugIncrement.value;
        break;
      case 'i0_1':
        debugIncrement.value = 0.1;
        break;
      case 'i0_5':
        debugIncrement.value = 0.5;
        break;
      case 'i1':
        debugIncrement.value = 1;
        break;
    }
    debugCameraX.value = camera.position.x;
    debugCameraY.value = camera.position.y;
    debugCameraZ.value = camera.position.z;
    debugCameraRotateX.value = camera.rotation.x;
    debugCameraRotateY.value = camera.rotation.y;
    debugCameraRotateZ.value = camera.rotation.z;

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
};
function init() {
  // set container
  container = sceneContainer.value as HTMLElement;
  // add camera
  const fov = settings.value.camera.fov; // Field of view
  const aspect = container.clientWidth / container.clientHeight;
  const near = settings.value.camera.near; // the near clipping plane
  const far = settings.value.camera.far; // the far clipping plane
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(
      settings.value.camera.position.x,
      settings.value.camera.position.y,
      settings.value.camera.position.z
  );
  camera.rotation.set(
      settings.value.camera.rotation.x,
      settings.value.camera.rotation.y,
      settings.value.camera.rotation.z
  );
  // create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(settings.value.scene.bgColor);
  if (props.sceneBackgroundUrl) {
    scene.background = new THREE.TextureLoader().load(props.sceneBackgroundUrl);
  }
  // add lights
  ambientLight = new THREE.HemisphereLight(
      settings.value.lights.ambient.skyColor,
      settings.value.lights.ambient.groundColor,
      settings.value.lights.ambient.intensity
  );
  mainLight = new THREE.DirectionalLight(
      settings.value.lights.directional.color,
      settings.value.lights.directional.intensity
  );
  mainLight.position.set(
      settings.value.lights.directional.position.x,
      settings.value.lights.directional.position.y,
      settings.value.lights.directional.position.z
  );
  scene.add(ambientLight, mainLight);
  // create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.physicallyCorrectLights = true;
  container.appendChild(renderer.domElement);
  // set aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  const loader = new GLTFLoader();
  loader.load(
      objectUrl.value,
      (gltf) => {
        object = gltf;
        object.scene.scale.set(
            settings.value.object.scale.x,
            settings.value.object.scale.y,
            settings.value.object.scale.z
        );
        object.scene.rotation.set(
            settings.value.object.rotation.x,
            settings.value.object.rotation.y,
            settings.value.object.rotation.z
        );
        scene.add(object.scene);

        if (devMode) {
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

        animateSlideInBook();

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

  resizeObserver.value = new ResizeObserver((entries) => {
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

  if (resizeObserver.value && sceneContainer.value) {
    resizeObserver.value.observe(sceneContainer.value);
  }
};
function onContainerClicked() {
  if (animationState.value === 'opened') {
    animateCloseBook();
  } else if (animationState.value === 'closed') {
    animateOpenBook();
  }
};
function pause() {
  if (timeline) {
    timeline.pause();
    emit('paused');
  }
};
function play() {
  if (timeline) {
    timeline.play();
    emit('played');
  }
};
function playCameraLoop() {
  if (camera) {
    const animations: string[] = [];
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
    animations.push('downRightSide');
    animations.push('acrossFront');
    animations.push('cornerUp');

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
      const zoomFromTopDuration = 15;
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

    if (animations.includes('downRightSide')) {
      const downRightSideDuration = 10;
      timeline
          .add('downRightSide')
          .set(
              camera.position,
              {
                x: 6.3,
                y: 1,
                z: -13,
              },
              'downRightSide'
          )
          .set(
              camera.rotation,
              {
                x: -6.66,
                y: 1.499,
                z: 0,
              },
              'downRightSide'
          )
          .to(
              camera.position,
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
              camera.rotation,
              {
                x: -6.46,
                y: 1.299,
                z: 0,
                ease: 'power1.inOut',
                duration: downRightSideDuration,
              },
              'downRightSide'
          );
    }

    if (animations.includes('acrossFront')) {
      const acrossFrontDuration = 15;
      timeline
          .add('acrossFront')
          .set(
              camera.position,
              {
                x: 0,
                y: 2,
                z: -5.5,
              },
              'acrossFront'
          )
          .set(
              camera.rotation,
              {
                x: 4.7,
                y: 0,
                z: 0,
              },
              'acrossFront'
          )
          .to(
              camera.position,
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
              camera.rotation,
              {
                x: 4.7,
                y: 0,
                z: 0,
                ease: 'power1.inOut',
                duration: acrossFrontDuration,
              },
              'acrossFront'
          );
    }

    if (animations.includes('cornerUp')) {
      const cornerUpDuration = 15;
      timeline
          .add('cornerUp')
          .set(
              camera.position,
              {
                x: 3.499,
                y: 0,
                z: 3.1,
              },
              'cornerUp'
          )
          .set(
              camera.rotation,
              {
                x: 6.7,
                y: 0.8,
                z: -0.3,
              },
              'cornerUp'
          )
          .to(
              camera.position,
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
              camera.rotation,
              {
                x: 5.5,
                y: 0.8,
                z: 0.7,
                ease: 'power1.inOut',
                duration: cornerUpDuration,
              },
              'cornerUp'
          );
    }
  }
};

onMounted(() => {
  log(`WelcomeAnimation loaded`);
  init();
})

onBeforeUnmount(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
  }
})
</script>

<template>
  <div class="g-relative">
    <div id="scene-container" ref="sceneContainer" class="g-absolute g-inset-0" @click="onContainerClicked"></div>
    <div class="g-absolute g-right-0 g-bottom-0 g-space-x-1" v-if="showDebugControls">
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

<style>
#scene-container canvas {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
</style>
