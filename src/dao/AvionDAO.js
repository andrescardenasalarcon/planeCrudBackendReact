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
const AvionScheme_1 = __importDefault(require("../schemes/AvionScheme"));
class AvionDAO {
    static consultOneAvion(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonAvion = { _id: identificador };
            const existeAvion = yield AvionScheme_1.default.findOne(jsonAvion).exec();
            if (existeAvion) {
                res.status(200).json(existeAvion);
            }
            else {
                res.status(400).json({ respuesta: "El Avion NO existe con ese identificador" });
            }
        });
    }
    static consultarAvion(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const myUsers = yield AvionScheme_1.default.find().sort({ _id: -1 });
            res.status(200).json(myUsers);
        });
    }
    static createAvion(parametres, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametres._id;
            const exist = yield AvionScheme_1.default.findOne(parametres).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                res.status(400).json({ respuesta: "Name Avion is yet already" });
            }
            else {
                const myAvion = new AvionScheme_1.default(parametres);
                myAvion.save((error, objectOk) => {
                    if (error) {
                        console.log(error);
                        res.status(400).json({ respuesta: "Don't be save" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Avion saved ", id: objectOk._id });
                    }
                });
            }
        });
    }
    static deleteAvion(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield AvionScheme_1.default.findById(identifier).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                AvionScheme_1.default.findByIdAndDelete(identifier, (error, objectOk) => {
                    if (error) {
                        res.status(400).json({ respuesta: "Don't be delete" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Avion deleted", id: objectOk });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Avion don't exist" });
            }
        });
    }
    static updateAvion(identificador, miJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield AvionScheme_1.default.findById(identificador).exec();
            if (exists) {
                AvionScheme_1.default.findByIdAndUpdate({ _id: identificador }, { $set: miJson }, (tuError, elObjetoBien) => {
                    if (tuError) {
                        console.log(tuError);
                        res.status(400).json({ respuesta: "No se puede actualizar" });
                    }
                    else {
                        res
                            .status(200)
                            .json({ respuesta: "Avion Actualizado", antes: elObjetoBien, nuevo: miJson });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Avion NO existe" });
            }
        });
    }
}
exports.default = AvionDAO;
