const cssFiles = [
  {
    destination: "_border.scss",
    format: "scss/variables",
    filter: "isBorder",
  },
  {
    destination: "_spacing.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "spacing",
      },
    },
  },
  {
    destination: "_line.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "line",
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
    destination: "iClinic/iClinic-light.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "iClinic-light",
      },
    },
  },
];

module.exports = cssFiles;
