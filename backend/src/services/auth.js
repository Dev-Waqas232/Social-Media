import { eq, Table } from "drizzle-orm";
import * as bcrypt from "bcrypt";

import { db } from "../db/index.js";
import { usersTable } from "../db/schema.js";

export class AuthService {
  static async register(body, res) {
    const { firstName, lastName, age, gender, email, password } = body;

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (user) return res.status(409).json({ message: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await db.insert(usersTable).values({
      firstName,
      lastName,
      age,
      gender,
      email,
      password: passwordHash,
    });

    return res.status(201).json({ message: "User created" });
  }
}
