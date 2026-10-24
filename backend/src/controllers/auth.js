import { validationResult } from "express-validator";

import { AuthService } from "../services/auth.js";

export class AuthController {
  static register(req, res) {
    try {
      const results = validationResult(req);

      if (!results.isEmpty()) {
        return res.status(400).json({ message: "Bad Request" });
      }

      return AuthService.register(req.body, res);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
