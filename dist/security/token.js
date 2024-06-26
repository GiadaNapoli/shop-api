"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const createToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = { name: id };
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET
    //{expiresIn: "15s",}
    );
});
exports.createToken = createToken;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
});
exports.verifyToken = verifyToken;
