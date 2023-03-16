"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MarcaController_1 = __importDefault(require("../controller/MarcaController"));
class MarcaRoute {
    constructor() {
        this.apiRouteProfile = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteProfile.get("/all", MarcaController_1.default.queries);
        this.apiRouteProfile.get("/one/:code", MarcaController_1.default.queriesOne);
        this.apiRouteProfile.post("/create", MarcaController_1.default.create);
        this.apiRouteProfile.delete("/delete/:code", MarcaController_1.default.delete);
        this.apiRouteProfile.put("/update/:code", MarcaController_1.default.update);
    }
}
const marcaRoute = new MarcaRoute();
exports.default = marcaRoute.apiRouteProfile;
