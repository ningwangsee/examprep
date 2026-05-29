import "dotenv/config";
import { defineConfig } from "prisma/config";

// When TURSO_DATABASE_URL is set, use Turso (production / seeding).
// Otherwise fall back to local SQLite for development.
const dbUrl = process.env.TURSO_DATABASE_URL
  ? `${process.env.TURSO_DATABASE_URL}?authToken=${process.env.TURSO_AUTH_TOKEN}`
  : (process.env.DATABASE_URL ?? "file:./prisma/dev.db");

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: dbUrl,
  },
});
