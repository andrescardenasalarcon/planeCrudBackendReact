"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const AvionScheme = new mongoose_1.Schema({
    palca: { type: String, unique: true },
    codColor: { type: mongoose_1.Types.ObjectId, ref: "Color" },
    codMarca: { type: mongoose_1.Types.ObjectId, ref: "Marca" },
}, { versionKey: false });
exports.default = (0, mongoose_2.model)("Avion", AvionScheme, "Avion");
