import "./components/GuideDisplay.ts";
import "./components/GuideSlideoutButton.ts"
import './global.css';

// Add guides to the page
// const guideDisplays: NodeListOf<HTMLElement> = document.querySelectorAll('[data-guide-display]');
// if (guideDisplays) {
//   guideDisplays.forEach((display) => {
//     if (display.dataset?.guideDisplay) {
//       if (display.dataset?.teleportSelector) {
//         const teleportElement = document.querySelector(display.dataset.teleportSelector);
//
//         if (teleportElement) {
//           const teleportTarget = document.createElement('div');
//           teleportTarget.id = `teleport-${display.dataset.guideDisplay}`;
//
//           if (display.dataset?.teleportContainerClass) {
//             teleportTarget.setAttribute('class', display.dataset.teleportContainerClass);
//           }
//
//           if (display.dataset?.teleportMethod === 'append') {
//             teleportElement.appendChild(teleportTarget);
//           } else {
//             teleportElement.insertBefore(teleportTarget, teleportElement.firstChild);
//           }
//         }
//       }
//
//       GuideDisplayVue.template = `#${display.dataset.guideDisplay}`;
//       createApp({ ...GuideDisplayVue }, display.dataset).mount(display);
//     }
//   });
// }
