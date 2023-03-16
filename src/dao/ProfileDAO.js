"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileScheme_1 = __importDefault(require("../schemes/ProfileScheme"));
class ProfileDAO {
    static consultOneProfile(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPerfil = { _id: identificador };
            const existePerfil = yield ProfileScheme_1.default.findOne(jsonPerfil).exec();
            if (existePerfil) {
                res.status(200).json(existePerfil);
            }
            else {
                res.status(400).json({ respuesta: "El perfil NO existe con ese identificador" });
            }
        });
    }
    static consultarPerfil(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield ProfileScheme_1.default.aggregate([
                { $lookup: { from: "User", localField: "_id", foreignField: "codProfile", as: "amountUsers" } },
                { $addFields: { amountUsers: { $size: "$amountUsers" } } }
            ]).sort({ _id: 1 });
            res.status(200).json(datos);
        });
    }
    static createProfile(parametres, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametres.datosUsuario;
            delete parametres._id;
            const exist = yield ProfileScheme_1.default.findOne(parametres).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                res.status(400).json({ respuesta: "Name profile is yet already" });
            }
            else {
                const myProfile = new ProfileScheme_1.default(parametres);
                myProfile.save((error, objectOk) => {
                    if (error) {
                        console.log(error);
                        res.status(400).json({ respuesta: "Don't be save" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Profile saved ", id: objectOk._id });
                    }
                });
            }
        });
    }
    static deleteProfile(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield ProfileScheme_1.default.findById(identifier).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                ProfileScheme_1.default.findByIdAndDelete(identifier, (error, objectOk) => {
                    if (error) {
                        res.status(400).json({ respuesta: "Don't be delete" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Profile deleted", id: objectOk });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Profile don't exist" });
            }
        });
    }
    static updateProfile(identificador, miJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield ProfileScheme_1.default.findById(identificador).exec();
            if (exists) {
                ProfileScheme_1.default.findByIdAndUpdate({ _id: identificador }, { $set: miJson }, (tuError, elObjetoBien) => {
                    if (tuError) {
                        console.log(tuError);
                        res.status(400).json({ respuesta: "No se puede actualizar" });
                    }
                    else {
                        res
                            .status(200)
                            .json({ respuesta: "Perfil Actualizado", antes: elObjetoBien, nuevo: miJson });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Perfil NO existe" });
            }
        });
    }
}
exports.default = ProfileDAO;
