import express from "express";

import * as dotenv from "dotenv";

dotenv.config();

const app = express();

const port: number = +process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${process.env.port} at ` + Date());
});
