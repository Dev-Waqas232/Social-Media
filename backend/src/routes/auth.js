import { Router } from "express";

import { registerValidator } from "../validators/auth.js";
import { AuthController } from "../controllers/auth.js";

const router = Router();

router.post("/register", registerValidator, AuthController.register);

export { router as authRouter };
