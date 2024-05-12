import { Router } from "express";
import { addUserHendler, showAllUsers } from "../controllers/user.controller";
export const router = Router();

router.post("/", addUserHendler);
router.get("/", showAllUsers);
