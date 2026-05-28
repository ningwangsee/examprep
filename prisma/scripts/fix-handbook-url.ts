import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const updated = await prisma.examTopic.updateMany({
    where: { handbookUrl: { contains: "traffic-controls" } },
    data: { handbookUrl: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/introduction-to-driving/" },
  });
  console.log("Updated rows:", updated.count);
}

main().catch(console.error).finally(() => prisma.$disconnect());
