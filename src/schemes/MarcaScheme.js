"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MarcaScheme = new mongoose_1.Schema({
    nombreMarca: { type: String, required: true, unique: true },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Marca", MarcaScheme, "Marca");
