const scssFiles = [
  {
    destination: "_border.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "border",
      },
    },
  },
  {
    destination: "_dimension.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "dimension",
      },
    },
  },
  {
    destination: "_font.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "font",
      },
    },
  },
  {
    destination: "_color.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "color",
      },
    },
  },
  {
    destination: "_shadow.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "shadow",
      },
    },
  },
  {
    destination: "_opacity.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "opacity",
      },
    },
  },
  {
    destination: "iClinic/theme.scss",
    format: "customCoreTokens",
    filter: {
      attributes: {
        category: "iclinic",
      },
    },
  },
];

module.exports = scssFiles;
