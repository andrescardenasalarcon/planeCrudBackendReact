"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ColorScheme = new mongoose_1.Schema({
    nombreColor: { type: String, required: true, unique: true },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Color", ColorScheme, "Color");
