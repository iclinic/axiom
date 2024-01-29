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
    destination: "dimension.css",
    format: "css/variables",
    filter: {
      attributes: {
        category: "dimension",
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
    destination: "iClinic/theme.css",
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
