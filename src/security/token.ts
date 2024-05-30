const jwt = require("jsonwebtoken");
require("dotenv").config();

export const createToken = async (id: string) => {
	const user = { name: id };
	return jwt.sign(
		user,
		process.env.ACCESS_TOKEN_SECRET
		//{expiresIn: "15s",}
	);
};

export const verifyToken = async (token: string) => {
	return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};
