// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

import 'webvr-polyfill/src/main';

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

const isPolyfilled = false;
let vrDisplay = null;

navigator.getVRDisplays()
  .then((displays) => {
    if (displays.length > 0) {
      vrDisplay = displays[0];

      isPolyfilled = vrDisplay.displayName === 'Cardboard VRDisplay (webvr-polyfill)';
    }
  });

function resizePolyfilled(vr) {
  if (!isPolyfilled || (isPolyfilled && !vrDisplay.isPresenting)) return;

  const { innerWidth: width, innerHeight: height } = window;

  if (parseInt(vr.player.glRenderer.domElement.style.width, 10) !== width) {
    vr.player.glRenderer.domElement.style.width = `${width}px`;
    vr.player.glRenderer.domElement.style.height = `${height}px`;
    vr.player.glRenderer.domElement.style.paddingRight = 0;
    vr.player.glRenderer.domElement.style.paddingBottom = 0;
  }
}

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'ReactVR', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here

    resizePolyfilled(vr);
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
