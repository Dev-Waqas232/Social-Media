import express from "express";

import { authRoutes } from "./src/routes/auth.js";

const app = express();

app.use(authRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
