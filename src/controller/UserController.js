"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDAO_1 = __importDefault(require("../dao/UserDAO"));
class UserController extends UserDAO_1.default {
    logIn(req, res) {
        UserController.verifySession(req.body, res);
    }
    queries(req, res) {
        UserController.consultUser(res);
    }
    create(req, res) {
        const email = { emailUser: req.body.emailUser }; //lo traemos del cuerpo del UserEntity
        UserController.createUser(email, req.body, res);
    }
}
const userController = new UserController();
exports.default = userController;
