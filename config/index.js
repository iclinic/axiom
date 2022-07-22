const scssFiles = require('./files/scss');
const jsFiles = require('./files/javascript');
const cssFiles = require('./files/css');

const config = {
  "source": ["tokens/output.json"],
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "build/scss/",
      "files": scssFiles
    },
    "css": {
      "transformGroup": "css",
      "buildPath": "build/css/",
      "files": cssFiles
    },
    "js": {
      "transformGroup": "js",
      "buildPath": "build/js/",
      "files": jsFiles
    }
  }
}

module.exports = config;