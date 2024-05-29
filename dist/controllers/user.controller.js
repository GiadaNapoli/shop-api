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
exports.removeUser = exports.updateUser = exports.showUserById = exports.showAllUsers = exports.logIn = exports.register = void 0;
const user_validator_1 = require("../validators/user.validator");
const zod_validation_error_1 = require("zod-validation-error");
const user_service_1 = require("../services/user.service");
const mailer_service_1 = require("../services/mailer.service");
const login_validator_1 = require("../validators/login.validator");
const bcrypt_1 = require("../security/bcrypt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.getUsersByEmail)(req.body.email);
    if (user) {
        res.status(409).json("This email address is already registered.");
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
                    message: "User added successfully",
                    newUser,
                });
                (0, mailer_service_1.sendMail)(req.body.email, req.body.name); //Add a check to verify if the email was successfully sent.
            }
            else {
                res.status(400).json("user not added");
            }
        }
    }
});
exports.register = register;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = login_validator_1.ZLoginSchema.safeParse(req.body);
    if (result.success) {
        const user = req.body;
        const userEmail = yield (0, user_service_1.getUsersByEmail)(req.body.email);
        if (userEmail) {
            const validPassword = yield (0, bcrypt_1.comparePassword)(user.password, userEmail.password);
            console.log(validPassword);
            if (!validPassword) {
                res.status(400).json("Invalid password or email");
            }
            else {
                res.status(200).json("You are loggin");
                //devi aggiungere il token
            }
        }
        res.status(400).json("Invalid password or email");
    }
    else {
        res.status(400).json((0, zod_validation_error_1.fromZodError)(result.error).message);
    }
});
exports.logIn = logIn;
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
const showUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userById = yield (0, user_service_1.getUserById)(req.params.id);
    if (userById) {
        res.status(200).json(userById);
        //Add a feature that allows users to retrieve their own data without including their password
        //const userData = await getUserData(userId);
        //delete userData.password;
        //res.json(userData);
    }
    res.status(400).json("user not found");
});
exports.showUserById = showUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, user_service_1.findUserAndUpdate)(req.params.id, req.body);
    if (updatedUser) {
        res.status(200).json({ message: "user updated", updateUser: exports.updateUser });
    }
    else {
        res.status(400).json("user not updated");
    }
});
exports.updateUser = updateUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userDeleted = yield (0, user_service_1.deleteUser)(req.params.id);
    try {
        if (!userDeleted) {
            res.status(400).json("user not found");
        }
        res.status(200).json({ message: "user deleted", userDeleted });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.removeUser = removeUser;
