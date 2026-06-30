import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { getDatabaseUrl, isInfrastructureEnabled } from "@/src/config/env";
import * as schema from "@/src/db/schema";

let client: ReturnType<typeof postgres> | null = null;
let db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!isInfrastructureEnabled()) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!client) {
    client = postgres(getDatabaseUrl(), { max: 10 });
    db = drizzle(client, { schema });
  }

  return db!;
}

export async function closeDb() {
  if (client) {
    await client.end();
    client = null;
    db = null;
  }
}

export { schema };
