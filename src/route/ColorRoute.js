"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ColorController_1 = __importDefault(require("../controller/ColorController"));
class ColorRoute {
    constructor() {
        this.apiRouteProfile = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteProfile.get("/all", ColorController_1.default.queries);
        this.apiRouteProfile.get("/one/:code", ColorController_1.default.queriesOne);
        this.apiRouteProfile.post("/create", ColorController_1.default.create);
        this.apiRouteProfile.delete("/delete/:code", ColorController_1.default.delete);
        this.apiRouteProfile.put("/update/:code", ColorController_1.default.update);
    }
}
const colorRoute = new ColorRoute();
exports.default = colorRoute.apiRouteProfile;
