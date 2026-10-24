import { body } from "express-validator";

const registerValidator = [
  body("firstName").trim(),
  body("lastName").trim(),
  body("age").trim().isNumeric(),
  body("gender").trim(),
  body("email").trim().isEmail(),
  body("password"),
];

export { registerValidator };
