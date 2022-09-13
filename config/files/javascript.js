const jsFiles = [
  {
    destination: "border.js",
    format: "customJsObject",
    filter: "isBorder",
  },
  {
    destination: "spacing.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "spacing",
      },
    },
  },
  {
    destination: "line.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "line",
      },
    },
  },
  {
    destination: "font.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "font",
      },
    },
  },
  {
    destination: "color.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "color",
      },
    },
  },
  {
    destination: "shadow.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "shadow",
      },
    },
  },
  {
    destination: "opacity.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "opacity",
      },
    },
  },
  {
    destination: "iClinic/iClinic-light.js",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "iClinic-light",
      },
    },
  },
];

module.exports = jsFiles;
