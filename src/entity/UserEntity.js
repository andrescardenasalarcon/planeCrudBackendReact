"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEntity {
    constructor(name, correo, pass, state, date, codP, cam) {
        this.nameUser = name;
        this.emailUser = correo;
        this.passwordUser = pass;
        this.stateUser = state;
        this.dateUser = date;
        this.codProfile = codP;
        this.codAvion = cam;
    }
}
exports.default = UserEntity;
