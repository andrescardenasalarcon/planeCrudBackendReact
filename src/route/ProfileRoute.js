"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfileController_1 = __importDefault(require("../controller/ProfileController"));
class ProfileRoute {
    constructor() {
        this.apiRouteProfile = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.apiRouteProfile.get("/all", ProfileController_1.default.queries);
        this.apiRouteProfile.get("/one/:code", ProfileController_1.default.queriesOne);
        this.apiRouteProfile.post("/create", ProfileController_1.default.create);
        this.apiRouteProfile.delete("/delete/:code", ProfileController_1.default.delete);
        this.apiRouteProfile.put("/update/:code", ProfileController_1.default.update);
    }
}
const profileRoute = new ProfileRoute();
exports.default = profileRoute.apiRouteProfile;
