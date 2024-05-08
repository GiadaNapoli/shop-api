import mongoose from "mongoose";
import { app } from "./app";

const CONNECTION_URL: string = "mongodb://localhost:27017/db_Paradigma";
const PORT = 3000;

mongoose
	.connect(CONNECTION_URL)
	.then(() => {
		console.log("you are connected");
		app.listen(PORT, () => {
			console.log(`you are listening on port: ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
