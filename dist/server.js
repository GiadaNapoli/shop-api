"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const CONNECTION_URL = "mongodb://localhost:27017/db_Paradigma";
const PORT = 3000;
mongoose_1.default
    .connect(CONNECTION_URL)
    .then(() => {
    console.log("you are connected");
    app_1.app.listen(PORT, () => {
        console.log(`you are listening on port: ${PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
