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
exports.showAllUsers = exports.addUserHendler = void 0;
const user_validator_1 = require("../validators/user.validator");
const zod_validation_error_1 = require("zod-validation-error");
const user_service_1 = require("../services/user.service");
const addUserHendler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.email;
    if (user) {
        res.status(400).json("email already exist");
    }
    else {
        const result = user_validator_1.ZUserSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json((0, zod_validation_error_1.fromZodError)(result.error).message);
        }
        else {
            const newUser = yield (0, user_service_1.createUser)(req.body);
            if (newUser) {
                res.status(200).json({
                    message: "user added succefully",
                    newUser,
                });
            }
            else {
                res.status(400).json("user not added");
            }
        }
    }
});
exports.addUserHendler = addUserHendler;
const showAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getUsers)();
    try {
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.showAllUsers = showAllUsers;
