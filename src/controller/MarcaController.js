"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MarcaDAO_1 = __importDefault(require("../dao/MarcaDAO"));
class MarcaController extends MarcaDAO_1.default {
    queries(req, res) {
        MarcaController.consultarMarca(res);
    }
    queriesOne(req, res) {
        MarcaController.consultOneMarca(req.params.code, res);
    }
    create(req, res) {
        MarcaController.createMarca(req.body, res);
    }
    delete(req, res) {
        MarcaController.deleteMarca(req.params.code, res);
    }
    update(req, res) {
        MarcaController.updateMarca(req.params.code, req.body, res);
    }
}
const marcaController = new MarcaController();
exports.default = marcaController;
