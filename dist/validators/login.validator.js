"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZLoginSchema = void 0;
const zod_1 = require("zod");
exports.ZLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
    loggedIn: zod_1.z.boolean().optional(),
});
