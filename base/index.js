"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var border_1 = __importDefault(require("../build/js/border"));
var color_1 = __importDefault(require("../build/js/color"));
var font_1 = __importDefault(require("../build/js/font"));
var opacity_1 = __importDefault(require("../build/js/opacity"));
var shadow_1 = __importDefault(require("../build/js/shadow"));
var spacing_1 = __importDefault(require("../build/js/spacing"));
var base = {
    border: border_1["default"].border,
    color: color_1["default"].color,
    font: font_1["default"].font,
    opacity: opacity_1["default"].opacity,
    shadow: shadow_1["default"].shadow,
    spacing: spacing_1["default"].spacing
};
exports["default"] = base;
