import * as z from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(3, "Last name should contain at least 3 characters"),
  lastName: z.string().min(3, "Last name should contain at least 3 characters"),
  email: z.email("Please enter a valid email address"),
  age: z.string(),
  gender: z.enum(["male", "female", "others"], "Please choose an option"),
  password: z.string().min(8, "Password should contain at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password should contain at least 8 characters"),
});
