"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileScheme = new mongoose_1.Schema({
    nameProfile: { type: String, required: true, unique: true },
    stateProfile: { type: Number, enum: [1, 2, 3], default: 1 },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Profile", ProfileScheme, "Profile");
