"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ColorDAO_1 = __importDefault(require("../dao/ColorDAO"));
class ColorController extends ColorDAO_1.default {
    queries(req, res) {
        ColorController.consultarColor(res);
    }
    queriesOne(req, res) {
        ColorController.consultOneColor(req.params.code, res);
    }
    create(req, res) {
        ColorController.createColor(req.body, res);
    }
    delete(req, res) {
        ColorController.deleteColor(req.params.code, res);
    }
    update(req, res) {
        ColorController.updateColor(req.params.code, req.body, res);
    }
}
const colorController = new ColorController();
exports.default = colorController;
