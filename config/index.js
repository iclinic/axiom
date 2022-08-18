const scssFiles = require('./files/scss');
const jsFiles = require('./files/javascript');
const cssFiles = require('./files/css');

const config = {
  "source": ["tokens/output.json"],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "build/scss/",
      "files": scssFiles,
      // "transforms": ["shadow/css"],
    },
    "css": {
      "transformGroup": "css",
      "buildPath": "build/css/",
      "files": cssFiles,
      // "transforms": ["shadow/css"],
    },
    "js": {
      "transformGroup": "js",
      "buildPath": "build/js/",
      "files": jsFiles,
      "transforms": ["shadow/css"],
    }
  }
}

module.exports = config;