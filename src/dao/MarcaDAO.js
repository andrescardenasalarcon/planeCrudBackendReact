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
const MarcaScheme_1 = __importDefault(require("../schemes/MarcaScheme"));
class MarcaDAO {
    static consultOneMarca(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonMarca = { _id: identificador };
            const existeMarca = yield MarcaScheme_1.default.findOne(jsonMarca).exec();
            if (existeMarca) {
                res.status(200).json(existeMarca);
            }
            else {
                res.status(400).json({ respuesta: "El Marca NO existe con ese identificador" });
            }
        });
    }
    static consultarMarca(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const myUsers = yield MarcaScheme_1.default.find().sort({ _id: -1 });
            res.status(200).json(myUsers);
        });
    }
    static createMarca(parametres, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametres._id;
            const exist = yield MarcaScheme_1.default.findOne(parametres).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                res.status(400).json({ respuesta: "Name Marca is yet already" });
            }
            else {
                const myMarca = new MarcaScheme_1.default(parametres);
                myMarca.save((error, objectOk) => {
                    if (error) {
                        console.log(error);
                        res.status(400).json({ respuesta: "Don't be save" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Marca saved ", id: objectOk._id });
                    }
                });
            }
        });
    }
    static deleteMarca(identifier, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield MarcaScheme_1.default.findById(identifier).exec(); //"exec()" Perimte hacer funciones flecha, por dentro, para personalizar resultados
            if (exist) {
                MarcaScheme_1.default.findByIdAndDelete(identifier, (error, objectOk) => {
                    if (error) {
                        res.status(400).json({ respuesta: "Don't be delete" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Marca deleted", id: objectOk });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Marca don't exist" });
            }
        });
    }
    static updateMarca(identificador, miJson, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield MarcaScheme_1.default.findById(identificador).exec();
            if (exists) {
                MarcaScheme_1.default.findByIdAndUpdate({ _id: identificador }, { $set: miJson }, (tuError, elObjetoBien) => {
                    if (tuError) {
                        console.log(tuError);
                        res.status(400).json({ respuesta: "No se puede actualizar" });
                    }
                    else {
                        res
                            .status(200)
                            .json({ respuesta: "Marca Actualizado", antes: elObjetoBien, nuevo: miJson });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Marca NO existe" });
            }
        });
    }
}
exports.default = MarcaDAO;
