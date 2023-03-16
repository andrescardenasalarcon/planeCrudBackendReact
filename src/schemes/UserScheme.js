"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    nameUser: { type: String, required: true, unique: true },
    emailUser: { type: String, required: true, unique: true, lowercase: true },
    passwordUser: { type: String, required: true },
    stateUser: { type: Number, enum: [1, 2, 3], default: 1 },
    dateUser: { type: Date, default: Date.now() },
    codProfile: { type: mongoose_1.Types.ObjectId, ref: "Profile", required: true },
    codAvion: { type: mongoose_1.Types.ObjectId, ref: "Avion" },
    nombreImagenUsuario: { type: String, default: "noAvatar.png" },
    avatarUsuario: { type: String, default: "noDefault" }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("User", UserScheme, "User");
