import { User } from "../models/user.model";
import { ZUserSchema } from "../validators/user.validator";

export const createUser = async (user: ZUserSchema): Promise<ZUserSchema> => {
	return User.create(user);
};

export const getUsers = async (): Promise<ZUserSchema[]> => {
	return await User.find();
};

export const getUsersByEmail = async (
	email: string
): Promise<ZUserSchema | null> => {
	return await User.findOne({ email });
};
