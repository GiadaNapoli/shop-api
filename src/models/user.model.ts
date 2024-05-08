import mongoose from "mongoose";
import { ZUserSchema } from "../validators/user.validator";

const userSchema = new mongoose.Schema<ZUserSchema>(
	{
		name: {
			type: String,
			required: true,
		},
		surname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
