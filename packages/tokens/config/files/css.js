const cssFiles = [
  {
    destination: "border.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "border",
      },
    },
  },
  {
    destination: "spacing.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "spacing",
      },
    },
  },
  {
    destination: "font.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "font",
      },
    },
  },
  {
    destination: "color.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "color",
      },
    },
  },
  {
    destination: "shadow.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "shadow",
      },
    },
  },
  {
    destination: "opacity.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "opacity",
      },
    },
  },
  {
    destination: "iClinic/iClinic-light.css",
    format: "customCoreTokens",
    filter: {
      attributes: {
        category: "iclinic",
      },
    },
    options: {
      format: 'css',
    },
  },
];

module.exports = cssFiles;
