import { Router } from "express";
import {
	logIn,
	register,
	removeUser,
	showAllUsers,
	showUserById,
	updateUser,
} from "../controllers/user.controller";
import { authenticateToken } from "../middleware/auth.middleware";
export const router = Router();

router.post("/register", register);
router.post("/login", logIn);
//router.get("/", showAllUsers);
router.get("/", authenticateToken, showUserById);
router.patch("/:id", updateUser);
router.delete("/:id", removeUser);
