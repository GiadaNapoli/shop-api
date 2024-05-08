import { Router } from "express";
import { addUserHendler } from "../controllers/user.controller";
export const router = Router();

router.post("/", addUserHendler);
