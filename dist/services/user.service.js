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
exports.deleteUser = exports.findUserAndUpdate = exports.getUserById = exports.getUsersByEmail = exports.getUsers = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.create(user);
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.find();
});
exports.getUsers = getUsers;
const getUsersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findOne({ email });
});
exports.getUsersByEmail = getUsersByEmail;
const getUserById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_id);
    return yield user_model_1.User.findById(_id);
});
exports.getUserById = getUserById;
const findUserAndUpdate = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndUpdate(id, user, { new: true });
});
exports.findUserAndUpdate = findUserAndUpdate;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndDelete(id);
});
exports.deleteUser = deleteUser;
