import mongoose from "mongoose";
import { ZUserSchema } from "../validators/user.validator";
import { hashPassword } from "../security/bcrypt";

export const userSchema = new mongoose.Schema<ZUserSchema>(
	{
		// _id: {
		// 	type: String,
		// 	required: false,
		// },
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

userSchema.pre("save", async function (next) {
	const user = this;
	try {
		user.password = await hashPassword(user.password);
		next();
	} catch (error) {
		next();
	}
});
export const User = mongoose.model("User", userSchema);
