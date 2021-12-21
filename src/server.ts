import express from "express";

import * as dotenv from "dotenv";

import { router } from "./routes";
import { db } from "./database/db";

dotenv.config();

const app = express();

const port: number = +process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(port, async () => {
  await db.sync(); // criar um mysql no docker e conectar aqui
  console.log(`listening on port ${process.env.port} at ` + Date());
});
