const jsFiles = [
  {
    "destination": `border.js`,
    "format": "javascript/es6",
    "filter": "isBorder"
  }, {
    "destination": `spacing.js`,
    "format": "javascript/es6",
    "filter": {
      "attributes": {
        "category": "spacing"
      }
    }
  }, {
    "destination": `line.js`,
    "format": "javascript/es6",
    "filter": {
      "attributes": {
        "category": "line"
      }
    }
  }, {
    "destination": `font.js`,
    "format": "javascript/es6",
    "filter": {
      "attributes": {
        "category": "font"
      }
    }
  }, {
    "destination": `color.js`,
    "format": "javascript/es6",
    "filter": {
      "attributes": {
        "category": "color"
      }
    }
  }, {
    "destination": "iClinic/iClinic-light.js",
    "format": "javascript/es6",
    "filter": {
      "attributes": {
        "category": "iClinic-light"
      }
    }
  }
]

module.exports = jsFiles;