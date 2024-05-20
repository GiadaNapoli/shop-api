"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
exports.router = (0, express_1.Router)();
exports.router.post("/register", user_controller_1.register);
exports.router.post("/login", user_controller_1.logIn);
exports.router.get("/", user_controller_1.showAllUsers);
