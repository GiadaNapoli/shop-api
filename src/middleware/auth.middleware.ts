import { NextFunction, Request, Response, json } from "express";
import { verify } from "jsonwebtoken";
import { verifyToken } from "../security/token";

export const authenticateToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers["authorization"]?.split(" ")[1];
	if (token == null) return res.status(401).json("token not provide");
	try {
		const decodedToken = await verifyToken(token);
		console.log(decodedToken);
		req.params = { _id: decodedToken.name };
		next();
	} catch (error) {
		console.error("Error verifying token:", error);
	}
};
