/**
 * Fix inaccurate content in existing questions:
 * 1. Remove "Since 2008" from CA headlights explanation (correct year is 2005, but we just remove the year)
 * 2. Fix CA school bus explanation to clarify "20 feet" is from CA Vehicle Code §22454, not the handbook
 * 3. Fix CA school bus zh/es translations accordingly
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  let fixed = 0;

  // ── Fix 1: Headlights "Since 2008" ──────────────────────────────────────────
  const headlightsQ = await prisma.question.findFirst({
    where: { content: { contains: "windshield wipers due to:" } },
  });
  if (headlightsQ) {
    const old = "Since 2008, California law requires";
    const updated = "California law requires";
    if (headlightsQ.explanation.includes(old)) {
      await prisma.question.update({
        where: { id: headlightsQ.id },
        data: { explanation: headlightsQ.explanation.replace(old, updated) },
      });
      console.log(`✅ Fixed headlights EN explanation (removed "Since 2008")`);
      fixed++;
    }
    // Fix zh translation
    const zhTr = await prisma.questionTranslation.findFirst({
      where: { questionId: headlightsQ.id, language: "zh" },
    });
    if (zhTr && zhTr.explanation?.includes("自 2008 年起，")) {
      await prisma.questionTranslation.update({
        where: { id: zhTr.id },
        data: { explanation: zhTr.explanation.replace("自 2008 年起，加州法律规定，", "加州法律规定，") },
      });
      console.log(`✅ Fixed headlights ZH explanation`);
      fixed++;
    }
    // Fix es translation
    const esTr = await prisma.questionTranslation.findFirst({
      where: { questionId: headlightsQ.id, language: "es" },
    });
    if (esTr && esTr.explanation?.includes("Desde 2008,")) {
      await prisma.questionTranslation.update({
        where: { id: esTr.id },
        data: { explanation: esTr.explanation.replace("Desde 2008, la ley de California obliga", "La ley de California obliga") },
      });
      console.log(`✅ Fixed headlights ES explanation`);
      fixed++;
    }
  } else {
    console.log("⚠️  Headlights question not found");
  }

  // ── Fix 2: School bus 20 feet — clarify source is CA Vehicle Code §22454 ───
  const schoolBusQ = await prisma.question.findFirst({
    where: { content: { contains: "How far must you stop from a school bus" } },
  });
  if (schoolBusQ) {
    const newExplanation = "Under California Vehicle Code §22454, you must stop at least 20 feet from a school bus with flashing red lights. This distance gives children a safe space to cross in front of or behind the bus without being in your blind spot.";
    await prisma.question.update({
      where: { id: schoolBusQ.id },
      data: { explanation: newExplanation },
    });
    console.log(`✅ Fixed school bus EN explanation (added VC §22454 citation)`);
    fixed++;

    // Fix zh
    const zhTr = await prisma.questionTranslation.findFirst({
      where: { questionId: schoolBusQ.id, language: "zh" },
    });
    if (zhTr) {
      await prisma.questionTranslation.update({
        where: { id: zhTr.id },
        data: { explanation: "根据加州车辆法典第 22454 条，当校车亮起红色闪光灯时，您必须停在距校车至少 20 英尺处。这段距离为儿童在校车前方或后方穿越道路提供了安全空间，避免其进入驾驶人的盲区。" },
      });
      console.log(`✅ Fixed school bus ZH explanation`);
      fixed++;
    }
    // Fix es
    const esTr = await prisma.questionTranslation.findFirst({
      where: { questionId: schoolBusQ.id, language: "es" },
    });
    if (esTr) {
      await prisma.questionTranslation.update({
        where: { id: esTr.id },
        data: { explanation: "Según el Código de Vehículos de California §22454, debe detenerse a no menos de 20 pies del autobús escolar cuando tenga las luces rojas intermitentes encendidas. Esta distancia le da a los niños un espacio seguro para cruzar por delante o por detrás del autobús sin quedar en su punto ciego." },
      });
      console.log(`✅ Fixed school bus ES explanation`);
      fixed++;
    }
  } else {
    console.log("⚠️  School bus distance question not found");
  }

  console.log(`\n🎉 Done! Fixed ${fixed} records.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
