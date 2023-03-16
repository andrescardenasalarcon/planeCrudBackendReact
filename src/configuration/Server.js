"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const ConnectionBD_1 = __importDefault(require("./ConnectionBD"));
const ProfileRoute_1 = __importDefault(require("../route/ProfileRoute"));
const UserRoute_1 = __importDefault(require("../route/UserRoute"));
const Security_1 = __importDefault(require("../middleware/Security"));
const AvionRoute_1 = __importDefault(require("../route/AvionRoute"));
const ColorRoute_1 = __importDefault(require("../route/ColorRoute"));
const MarcaRoute_1 = __importDefault(require("../route/MarcaRoute"));
const UsuarioPrivadoRuta_1 = __importDefault(require("../route/UsuarioPrivadoRuta"));
class Server {
    constructor() {
        dotenv_1.default.config({ path: "variables.env" });
        (0, ConnectionBD_1.default)();
        this.app = (0, express_1.default)();
        this.loadConfigurations();
        this.loarRoutes();
    }
    loadConfigurations() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "20mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    loarRoutes() {
        this.app.use("/api/public/users", UserRoute_1.default);
        this.app.use("/api/private/profiles", Security_1.default.verificarToken, ProfileRoute_1.default);
        this.app.use("/api/private/user", UsuarioPrivadoRuta_1.default);
        this.app.use("/api/private/aviones", Security_1.default.verificarToken, AvionRoute_1.default);
        this.app.use("/api/private/colores", Security_1.default.verificarToken, ColorRoute_1.default);
        this.app.use("/api/private/marcas", Security_1.default.verificarToken, MarcaRoute_1.default);
    }
    startBackend() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Server to up!!! ", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
