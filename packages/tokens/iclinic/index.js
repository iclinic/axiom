"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.shadowBrand = exports.color = exports.spacing = exports.shadow = exports.opacity = exports.font = exports.border = void 0;
var iClinic_light_1 = require("../dist/ts/iClinic/iClinic-light");
var base_1 = require("../base");
__createBinding(exports, base_1, "border");
__createBinding(exports, base_1, "font");
__createBinding(exports, base_1, "opacity");
__createBinding(exports, base_1, "shadow");
__createBinding(exports, base_1, "spacing");
exports.color = iClinic_light_1.iclinic.color, exports.shadowBrand = iClinic_light_1.iclinic.shadowBrand;
