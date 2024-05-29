"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loggin = exports.loginSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.loginSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    loggedIn: {
        type: Boolean,
        required: false,
    },
});
exports.Loggin = mongoose_1.default.model("Loggin", exports.loginSchema);
