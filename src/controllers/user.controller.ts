import { Request, Response } from "express";
import { ZUserSchema } from "../validators/user.validator";
import bcrypt from "bcrypt";
import { fromZodError } from "zod-validation-error";
import {
	createUser,
	getUsers,
	getUsersByEmail,
} from "../services/user.service";

export const register = async (req: Request, res: Response) => {
	const user = await getUsersByEmail(req.body.email);
	if (user) {
		res.status(409).json("This email address is already registered.");
	} else {
		const result = ZUserSchema.safeParse(req.body);
		if (!result.success) {
			return res.status(400).json(fromZodError(result.error).message);
		} else {
			const newUser = await createUser(req.body);
			if (newUser) {
				res.status(200).json({
					message: "user added succefully",
					newUser,
				});
			} else {
				res.status(400).json("user not added");
			}
		}
	}
};

export const logIn = async (req: Request, res: Response) => {
	const result = ZUserSchema.safeParse(req.body);
	if (result.success) {
		const user = req.body;
		const userEmail = await getUsersByEmail(req.body.email);
		if (userEmail) {
			const validPassword = await bcrypt.compare(
				user.password,
				userEmail.password
			);
			console.log(validPassword);
			if (!validPassword) {
				res.status(400).json("Invalid password or email");
			} else {
				res.status(200).json("You are loggin");
			}
		}
		res.status(400).json("invalid password or email");
	} else {
		res.status(400).json(fromZodError(result.error).message);
	}
};

export const showAllUsers = async (req: Request, res: Response) => {
	const users = await getUsers();
	try {
		res.status(200).json(users);
	} catch (error) {
		res.status(400).json(error);
	}
};
