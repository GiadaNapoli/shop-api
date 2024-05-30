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

export const getUserById = async (_id: string): Promise<ZUserSchema | null> => {
	console.log(_id);
	return await User.findById(_id);
};

export const findUserAndUpdate = async (
	id: string,
	user: ZUserSchema
): Promise<ZUserSchema | null> => {
	return await User.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUser = async (id: string): Promise<ZUserSchema | null> => {
	return await User.findByIdAndDelete(id);
};
