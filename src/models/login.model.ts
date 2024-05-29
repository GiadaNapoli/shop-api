import mongoose from "mongoose";
import { ZLoginSchema } from "../validators/login.validator";

export const loginSchema = new mongoose.Schema<ZLoginSchema>({
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

export const Loggin = mongoose.model("Loggin", loginSchema);
