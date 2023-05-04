"use strict";
exports.__esModule = true;
exports.axiomTheme = exports.shadowBrand = exports.color = exports.spacing = exports.shadow = exports.opacity = exports.font = exports.border = void 0;
var iClinic_light_1 = require("../dist/ts/iClinic/iClinic-light");
var base_1 = require("../base");
exports.border = base_1.border;
exports.font = base_1.font;
exports.opacity = base_1.opacity;
exports.shadow = base_1.shadow;
exports.spacing = base_1.spacing;
var color = iClinic_light_1.iclinic.color, shadowBrand = iClinic_light_1.iclinic.shadowBrand;
exports.color = color;
exports.shadowBrand = shadowBrand;
exports.axiomTheme = {
    border: base_1.border,
    color: color,
    font: base_1.font,
    opacity: base_1.opacity,
    shadow: base_1.shadow,
    spacing: base_1.spacing,
    shadowBrand: shadowBrand
};
