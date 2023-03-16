"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConnectionBD = () => {
    const URL = String(process.env.URL_MONGO);
    (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log("¡Connected to MONGO!!!", URL);
    })
        .catch((e) => {
        console.log(e);
    });
};
exports.default = ConnectionBD;
