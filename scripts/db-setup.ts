import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

config({ path: path.join(rootDir, ".env.local") });
config({ path: path.join(rootDir, ".env") });

const { migrate } = await import("drizzle-orm/postgres-js/migrator");
const { default: postgres } = await import("postgres");
const { drizzle } = await import("drizzle-orm/postgres-js");
const { getDatabaseUrl } = await import("../src/config/env");
const { closeDb } = await import("../src/db");
const { ensureDefaultAdmin } = await import("../src/repositories/auth.repository");

async function main() {
  const client = postgres(getDatabaseUrl(), { max: 1 });
  const db = drizzle(client);

  await migrate(db, { migrationsFolder: path.join(rootDir, "drizzle") });
  await ensureDefaultAdmin();

  console.log("Migration ve seed tamamlandi.");

  await closeDb();
  await client.end({ timeout: 5 });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
