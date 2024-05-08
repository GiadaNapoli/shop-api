import { User } from "../models/user.model";
import { ZUserSchema } from "../validators/user.validator";

export const createUser = async (user: ZUserSchema): Promise<ZUserSchema> => {
	return User.create(user);
};
