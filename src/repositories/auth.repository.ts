import { randomBytes } from "node:crypto";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { env } from "@/src/config/env";
import { getDb, schema } from "@/src/db";
import { cacheDel, cacheKeys, getRedis } from "@/src/lib/redis";

export async function findAdminByEmail(email: string) {
  const db = getDb();
  const [user] = await db
    .select()
    .from(schema.adminUsers)
    .where(eq(schema.adminUsers.email, email))
    .limit(1);

  return user ?? null;
}

export async function createAdminUser(email: string, password: string) {
  const db = getDb();
  const passwordHash = await bcrypt.hash(password, 12);

  const [user] = await db
    .insert(schema.adminUsers)
    .values({ email, passwordHash })
    .onConflictDoNothing({ target: schema.adminUsers.email })
    .returning();

  return user ?? (await findAdminByEmail(email));
}

export async function verifyAdminCredentials(email: string, password: string) {
  const user = await findAdminByEmail(email);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.passwordHash);
  return isValid ? user : null;
}

export async function createSession(userId: string): Promise<string> {
  const token = randomBytes(32).toString("hex");
  await getRedis().set(cacheKeys.session(token), userId, "EX", env.sessionTtlSeconds);
  return token;
}

export async function getSessionUserId(token: string): Promise<string | null> {
  return getRedis().get(cacheKeys.session(token));
}

export async function deleteSession(token: string): Promise<void> {
  await cacheDel(cacheKeys.session(token));
}

export async function ensureDefaultAdmin() {
  await createAdminUser(env.admin.email, env.admin.password);
}
