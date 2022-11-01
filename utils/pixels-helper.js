const stringify = require('json-stringify-pretty-compact');

function pixelSortFunction(a, b) {
  const xDiff = a.x - b.x;
  const yDiff = a.y - b.y;
header {
  margin-top: 20px; /*px(or pixel) is the standard sizing unit. You can learn more here: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units */
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}


  padding-bottom: 0;
}
function pixelSortFunction(a, b) {
  const xDiff = a.x - b.x;
  const yDiff = a.y - b.y;
header {
  margin-top: 20px; /*px(or pixel) is the standard sizing unit. You can learn more here: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units */
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
.nav-item {
  display: inline-block;
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

main > section {
  width: 100%;
}

#canvas {
  max-width: 800px;
  max-height: 800px;
  margin: 20px;
  display: flex;
  justify-content: center;
}

#canvas svg {
  width: 100%;
  height: 100%;
}

.nes-btn {
  margin-bottom: 10px;
}

.nes-container {
  margin: 20px;
  max-width: 800px;
}

.nes-container.is-dark {
  margin-bottom: 20px;
}

footer {
  margin-bottom: 60px;
}

footer p {
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8em;
  padding-left: 20px;
  padding-right: 20px;
}

h1,
h2,
h3 {
  font-family: 'Press Start 2P', cursive;
}

p {
  font-family: 'Open Sans', sans-serif;
}

p code {
  font-family: monospace;
}

.text-center {
  text-align: center;
}

.twilio-link {
  color: #f22f46;
}

.screenreader-only {
  opacity: 0.01;
  width: 1px;
  height: 1px;
  z-index: -1;
}

.screenreader-only:hover,
.screenreader-only:link,
.screenreader-only:visited {
  cursor: arrow;
}

.twilio-pixel {
  width: 32px;
  height: 32px;
}

.footer-icons {
  display: flex;
  justify-content: center;
}

.footer-icons > a {
  display: block;
  margin-left: 10px;
  margin-right: 10px;
}

#contributor-name {
  color: red;
  font-weight: bold;
  padding: 0 5px;
  border: 1px solid black;
}

.tooltip-name {
  padding: 4px 10px;
  background: white;
  color: black;
  transform: translateX(-100%) translateY(-100%);
  position: absolute;
  font-size: 10px;
  border: 1px solid black;
}

  if (yDiff > 0) {
    // pixel is further down a row
    return 1;
  }

  if (yDiff < 0) {
    // pixel a closer to the beginning of a row
    return -1;
  }

  // yDiff must be 0 to make it here

  if (xDiff > 0) {
    // pixel a is in a lower row
    return 1;
  }

  if (xDiff < 0) {
    // pixel a is in a higher row
    return -1;
  }

  return 0;
}

function sortPixels(pixelJson) {
  const data = [...pixelJson.data].sort(pixelSortFunction);

  return {
    data
  };
}

function pixelsToString(pixelJson) {
  return stringify(pixelJson, { indent: 2, maxLength: 100 });
}

module.exports = {
  sortPixels,
  pixelSortFunction,
  pixelsToString
};
