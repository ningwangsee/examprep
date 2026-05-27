import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // 清空旧数据
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.examTopic.deleteMany();
  await prisma.examCategory.deleteMany();

  // 分类 1：美国证券考试
  const securities = await prisma.examCategory.create({
    data: {
      name: "美国证券考试",
      nameEn: "US Securities",
      description: "FINRA Series 7、63、65 等美国证券从业资格考试",
      icon: "📈",
      color: "#3B82F6",
      topics: {
        create: [
          {
            name: "证券基础知识",
            nameEn: "Securities Fundamentals",
            description: "股票、债券、基金等基础概念",
            questions: {
              create: [
                {
                  content: "以下哪种证券代表对公司的所有权？",
                  explanation:
                    "普通股（Common Stock）代表对公司的所有权份额。持有普通股的投资者是公司的股东，享有投票权和分红权。债券是债务工具，期权是衍生品，存单是存款凭证。",
                  difficulty: 1,
                  options: {
                    create: [
                      { content: "普通股 (Common Stock)", isCorrect: true },
                      { content: "公司债券 (Corporate Bond)", isCorrect: false },
                      { content: "看涨期权 (Call Option)", isCorrect: false },
                      { content: "大额存单 (CD)", isCorrect: false },
                    ],
                  },
                },
                {
                  content: "债券的票面利率（Coupon Rate）是指什么？",
                  explanation:
                    "票面利率是债券每年支付给持有人的利息，以债券面值的百分比表示。例如，面值 $1000、票面利率 5% 的债券每年支付 $50 利息。",
                  difficulty: 1,
                  options: {
                    create: [
                      { content: "债券的当前市场收益率", isCorrect: false },
                      {
                        content: "债券到期时支付的总利息",
                        isCorrect: false,
                      },
                      {
                        content: "基于面值的固定年利率",
                        isCorrect: true,
                      },
                      { content: "债券的当前市场价格", isCorrect: false },
                    ],
                  },
                },
                {
                  content:
                    "在美国，哪个机构负责监管证券经纪商和交易商？",
                  explanation:
                    "FINRA（金融业监管局）是负责监管美国证券经纪商和交易商的自律组织。SEC（证券交易委员会）是联邦监管机构，负责更广泛的证券市场监管。",
                  difficulty: 2,
                  options: {
                    create: [
                      { content: "美联储 (Federal Reserve)", isCorrect: false },
                      { content: "FINRA", isCorrect: true },
                      { content: "财政部 (Treasury)", isCorrect: false },
                      { content: "FDIC", isCorrect: false },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "投资组合管理",
            nameEn: "Portfolio Management",
            description: "资产配置、风险管理与投资策略",
            questions: {
              create: [
                {
                  content: "分散投资（Diversification）的主要目的是什么？",
                  explanation:
                    "分散投资通过将资金分配到不同资产类别来降低非系统性风险（特定公司或行业风险）。它无法消除系统性风险（市场整体风险），但可以显著降低投资组合的整体波动性。",
                  difficulty: 1,
                  options: {
                    create: [
                      { content: "最大化投资回报", isCorrect: false },
                      { content: "消除所有投资风险", isCorrect: false },
                      {
                        content: "降低非系统性风险",
                        isCorrect: true,
                      },
                      { content: "保证最低收益", isCorrect: false },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  // 分类 2：AWS 云计算认证
  const aws = await prisma.examCategory.create({
    data: {
      name: "AWS 云计算认证",
      nameEn: "AWS Certification",
      description: "AWS Cloud Practitioner、Solutions Architect 等认证考试",
      icon: "☁️",
      color: "#F59E0B",
      topics: {
        create: [
          {
            name: "云计算基础",
            nameEn: "Cloud Fundamentals",
            description: "云计算核心概念、AWS 全球基础设施",
            questions: {
              create: [
                {
                  content:
                    "以下哪个选项是 AWS 共享责任模型中\"云的安全\"（Security OF the Cloud）的例子？",
                  explanation:
                    "AWS 负责保护运行所有 AWS 服务的基础设施，即\"云的安全\"。这包括硬件、软件、网络和设施。客户负责\"云中的安全\"，包括他们的数据、操作系统配置和应用程序。",
                  difficulty: 2,
                  options: {
                    create: [
                      { content: "EC2 实例上的操作系统补丁", isCorrect: false },
                      { content: "S3 存储桶访问策略配置", isCorrect: false },
                      {
                        content: "AWS 数据中心的物理安全",
                        isCorrect: true,
                      },
                      { content: "IAM 用户权限管理", isCorrect: false },
                    ],
                  },
                },
                {
                  content: "AWS S3 的存储类型中，哪种最适合频繁访问的数据？",
                  explanation:
                    "S3 Standard（标准存储）专为频繁访问的数据设计，提供高持久性、可用性和性能。S3 Glacier 适合归档数据，S3 Intelligent-Tiering 适合访问模式不固定的数据，S3 One Zone-IA 适合非关键性数据。",
                  difficulty: 1,
                  options: {
                    create: [
                      { content: "S3 Glacier", isCorrect: false },
                      { content: "S3 Standard", isCorrect: true },
                      { content: "S3 One Zone-IA", isCorrect: false },
                      { content: "S3 Intelligent-Tiering", isCorrect: false },
                    ],
                  },
                },
                {
                  content: "AWS 区域（Region）和可用区（Availability Zone）的关系是？",
                  explanation:
                    "每个 AWS 区域（Region）由多个独立的可用区（AZ）组成。AZ 是一个或多个独立数据中心，具有独立的电源、冷却和网络。一个区域通常包含 2-6 个 AZ，它们之间通过低延迟网络相连。",
                  difficulty: 2,
                  options: {
                    create: [
                      {
                        content: "一个可用区包含多个区域",
                        isCorrect: false,
                      },
                      {
                        content: "一个区域包含多个可用区",
                        isCorrect: true,
                      },
                      { content: "区域和可用区是同一个概念", isCorrect: false },
                      {
                        content: "每个区域只有一个可用区",
                        isCorrect: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  // 分类 3：中国注册会计师
  const cpa = await prisma.examCategory.create({
    data: {
      name: "中国注册会计师",
      nameEn: "China CPA",
      description: "中国注册会计师（CPA）资格考试",
      icon: "📊",
      color: "#10B981",
      topics: {
        create: [
          {
            name: "会计基础",
            nameEn: "Accounting Basics",
            description: "会计核算基础、财务报表",
            questions: {
              create: [
                {
                  content: "根据会计准则，以下哪项属于资产的定义？",
                  explanation:
                    "资产是指企业过去的交易或事项形成的、由企业拥有或控制的、预期会给企业带来经济利益的资源。关键特征：1）过去形成；2）企业控制；3）未来经济利益流入。预付费用符合这三个条件。",
                  difficulty: 2,
                  options: {
                    create: [
                      { content: "企业拖欠员工的工资", isCorrect: false },
                      {
                        content: "企业预付的一年期租金",
                        isCorrect: true,
                      },
                      { content: "企业的注册资本", isCorrect: false },
                      { content: "企业向银行借入的贷款", isCorrect: false },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("✅ 种子数据创建成功！");
  console.log(`  - 考试分类：${[securities, aws, cpa].map((c) => c.name).join("、")}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
