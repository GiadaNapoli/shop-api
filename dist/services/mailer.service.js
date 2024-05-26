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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendMail(newemail, name) {
    return __awaiter(this, void 0, void 0, function* () {
        var transport = nodemailer_1.default.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "1e3c2cca73c4f3",
                pass: "8fe0e80090dae3",
            },
        });
        //Add a check to verify if the email was successfully sent.
        const info = yield transport.sendMail({
            from: "info@mailtrap.io", // sender address
            to: newemail, // list of receivers
            subject: `Welcome ${name}`, // Subject line
            text: `welocome ${name}We are excited to have you as a member of our community.`, // plain text body
            html: `<b>Welcome aboard, ${name}!</b> We are thrilled to have you join us.`, // Update HTML content
        });
        console.log("Message sent: %s", info.messageId);
    });
}
exports.sendMail = sendMail;
