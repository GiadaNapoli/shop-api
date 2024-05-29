"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZUserSchema = void 0;
const zod_1 = require("zod");
exports.ZUserSchema = zod_1.z.object({
    _id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(2),
    surname: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
});
