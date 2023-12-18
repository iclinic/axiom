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
    destination: "_spacing.scss",
    format: "scss/variables",
    filter: {
      attributes: {
        category: "spacing",
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
    format: "customCoreTokens",
    filter: {
      attributes: {
        category: "iclinic",
      },
    },
  },
  {
    destination: "iClinic/afyaIclinic.scss",
    format: "customCoreTokens",
    filter: {
      attributes: {
        category: "afyaIclinic",
      },
    },
  },
];

module.exports = scssFiles;
