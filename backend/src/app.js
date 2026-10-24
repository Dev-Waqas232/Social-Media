import express from "express";
import "dotenv/config";
import cors from "cors";

import { authRouter } from "./routes/auth.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, function () {
  console.log(`Server is running at PORT ${PORT}`);
});
