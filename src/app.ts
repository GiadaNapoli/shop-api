import express from "express";
import { router as userApi } from "./routes/user.router";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json("server is running");
});

app.use("/user", userApi);
