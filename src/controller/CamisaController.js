"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AvionDAO_1 = __importDefault(require("../dao/AvionDAO"));
class AvionController extends AvionDAO_1.default {
    queries(req, res) {
        AvionController.consultarAvion(res);
    }
    queriesOne(req, res) {
        AvionController.consultOneAvion(req.params.code, res);
    }
    create(req, res) {
        AvionController.createAvion(req.body, res);
    }
    delete(req, res) {
        AvionController.deleteAvion(req.params.code, res);
    }
    update(req, res) {
        AvionController.updateAvion(req.params.code, req.body, res);
    }
}
const avionController = new AvionController();
exports.default = avionController;
