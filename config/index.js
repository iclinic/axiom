const scssFiles = require('./files/scss');
const jsFiles = require('./files/javascript');
const cssFiles = require('./files/css');

const config = {
  source: ['tokens/output.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-scss',
      buildPath: 'build/scss/',
      files: scssFiles,
    },
    css: {
      transformGroup: 'tokens-css',
      buildPath: 'build/css/',
      files: cssFiles,
    },
    js: {
      transformGroup: 'tokens-js',
      buildPath: 'build/js/',
      files: jsFiles,
    },
  },
};

module.exports = config;
