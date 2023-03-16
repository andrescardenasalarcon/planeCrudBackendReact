"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfileDAO_1 = __importDefault(require("../dao/ProfileDAO"));
class ProfileController extends ProfileDAO_1.default {
    queries(req, res) {
        ProfileController.consultarPerfil(res);
    }
    queriesOne(req, res) {
        ProfileController.consultOneProfile(req.params.code, res);
    }
    create(req, res) {
        ProfileController.createProfile(req.body, res);
    }
    delete(req, res) {
        ProfileController.deleteProfile(req.params.code, res);
    }
    update(req, res) {
        ProfileController.updateProfile(req.params.code, req.body, res);
    }
}
const profileController = new ProfileController();
exports.default = profileController;
