const jsFiles = [
  {
    destination: "border.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "border",
      },
    },
  },
  {
    destination: "dimension.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "dimension",
      },
    },
  },
  {
    destination: "font.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "font",
      },
    },
  },
  {
    destination: "color.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "color",
      },
    },
  },
  {
    destination: "shadow.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "shadow",
      },
    },
  },
  {
    destination: "opacity.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "opacity",
      },
    },
  },
  {
    destination: "iClinic/theme.ts",
    format: "customJsObject",
    filter: {
      attributes: {
        category: "iclinic",
      },
    },
  },
];

module.exports = jsFiles;
