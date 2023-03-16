"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AvionController_1 = __importDefault(require("../controller/AvionController"));
class AvionRoute {
    constructor() {
        this.apiRouteProfile = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteProfile.get("/all", AvionController_1.default.queries);
        this.apiRouteProfile.get("/one", AvionController_1.default.queriesOne);
        this.apiRouteProfile.post("/create", AvionController_1.default.create);
        this.apiRouteProfile.delete("/delete/:code", AvionController_1.default.delete);
        this.apiRouteProfile.put("/update/:code", AvionController_1.default.update);
    }
}
const avionRoute = new AvionRoute();
exports.default = avionRoute.apiRouteProfile;
