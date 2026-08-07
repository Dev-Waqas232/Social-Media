import {
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  uuid,
} from "drizzle-orm/pg-core";

export const genderEnum = pgEnum("user_gender", ["male", "female"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  gender: genderEnum("gender").notNull(),
  age: numeric("age").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});
