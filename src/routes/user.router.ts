import { Router } from "express";
import { logIn, register, showAllUsers } from "../controllers/user.controller";
export const router = Router();

router.post("/register", register);
router.post("/login", logIn);
router.get("/", showAllUsers);
