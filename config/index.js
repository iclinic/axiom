const scssFiles = require('./files/scss');
const jsFiles = require('./files/javascript');
const cssFiles = require('./files/css');

const config = {
  source: ['tokens/output.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-scss',
      buildPath: 'dist/scss/',
      files: scssFiles,
    },
    css: {
      transformGroup: 'tokens-css',
      buildPath: 'dist/css/',
      files: cssFiles,
    },
    js: {
      transformGroup: 'tokens-js',
      buildPath: 'dist/js/',
      files: jsFiles,
    },
  },
};

module.exports = config;
