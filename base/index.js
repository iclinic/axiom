const borderSource = require("../dist/js/border");
const colorSource = require("../dist/js/color");
const fontSource = require("../dist/js/font");
const opacitySource = require("../dist/js/opacity");
const shadowSource = require("../dist/js/shadow");
const spacingSource = require("../dist/js/spacing");

const base = {
  border: borderSource.border,
  color: colorSource.color,
  font: fontSource.font,
  opacity: opacitySource.opacity,
  shadow: shadowSource.shadow,
  spacing: spacingSource.spacing,
};

module.exports = base;
