import { Router } from "express";
import { addUserHandler, showAllUsers } from "../controllers/user.controller";
export const router = Router();

router.post("/", addUserHandler);
router.get("/", showAllUsers);
