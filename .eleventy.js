const fs = require('fs');

// File path on how we know it's a docker instance
const dockerEnvFile = '/.dockerenv';

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy({
    'node_modules/nes.css/css': 'assets/nes.css'
  });


async function evaluatePixelChanges(jsonPatch) {
  if (!doesJsonMatchSchema(jsonPatch.after)) {
    fail(stripIndents`Your pixels.json file does not match the expected schema.

    expected schema: 
    {
      data: [
        // pixels go here
      ]
    }
    `);
    return false;
  }

function convertJsonToPixelSet({ data }) {
  const pixelSet = new Set();
  data.forEach(pixel => pixelSet.add(JSON.stringify(pixel)));

  return pixelSet;
}

async function evaluatePixelChanges(jsonPatch) {
  if (!doesJsonMatchSchema(jsonPatch.after)) {
    fail(stripIndents`Your pixels.json file does not match the expected schema.

    expected schema: 
    {
      data: [
        // pixels go here
      ]
    }
    `);
    return false;
  }

  const isDiffEmpty = jsonPatch.diff.length === 0;
  if (isDiffEmpty) {
    fail('This PR appears to be empty and needs a manual review.');
    return false;
  }
  // This is so we can expose the docker port and host to be accesible
  if (fs.existsSync(dockerEnvFile)) {
    eleventyConfig.setBrowserSyncConfig({
      notify: false,
      host: '0.0.0.0'
    });
  }

  return {
    htmlTemplateEngine: 'njk'
  };
};
