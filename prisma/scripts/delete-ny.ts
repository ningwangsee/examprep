import 'dotenv/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../../app/generated/prisma/client';
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });
async function main() {
  const cat = await prisma.examCategory.findFirst({ where: { nameEn: "New York Driver's License" } });
  if (cat) { await prisma.examCategory.delete({ where: { id: cat.id } }); console.log('✅ NY deleted.'); }
  else { console.log('NY not found'); }
}
main().finally(() => prisma.$disconnect());
