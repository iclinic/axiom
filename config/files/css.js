const scssFiles = [
  {
    "destination": `border.css`,
    "format": "css/variables",
    "filter": "isBorder"
  }, {
    "destination": `spacing.css`,
    "format": "css/variables",
    "filter": {
      "attributes": {
        "category": "spacing"
      }
    }
  }, {
    "destination": `line.css`,
    "format": "css/variables",
    "filter": {
      "attributes": {
        "category": "line"
      }
    }
  }, {
    "destination": `font.css`,
    "format": "css/variables",
    "filter": {
      "attributes": {
        "category": "font"
      }
    }
  }, {
    "destination": `color.css`,
    "format": "css/variables",
    "filter": {
      "attributes": {
        "category": "color"
      }
    }
  }, {
    "destination": "iClinic/iClinic-light.css",
    "format": "css/variables",
    "filter": {
      "attributes": {
        "category": "iClinic-light"
      }
    }
  }
]

module.exports = scssFiles;