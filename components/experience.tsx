"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "旅拍项目管理实习生",
      company: "vivo 全球总部",
      department: "TO G 营销部",
      overview:
        "旅拍项目业务概述：通过 to B 组织 / to C 关键人的推荐建联目标旅行社，和旅行社在导游培育、路线联名、品牌曝光等层面多维度合作，打造专属团友权益，实现 vivo 手机旅拍场景的宣发和转化。",
      period: "2026.03 – 至今",
      location: "中国",
      highlights: [
        "商业合作与 KA 推进：参与 vivo 旅拍商业化项目推进，协同总部、区域代理、旅行社、导游协会等多方合作伙伴，完成合作建联、方案沟通与执行落地，推动项目在区域市场的商业化落地；针对旅行社与导游群体梳理合作收益模型，提升合作方参与积极性。",
        "商业化运营：参与搭建旅拍项目的商业化分润机制，设计了导游传播奖励机制，以导游为核心商业化节点提升 C 端转化效率；协助不同区域的旅拍项目内容传播与团友权益打造，为商业化运营的策略优化提供了一定的数据支持，推动租机/购机转化率环比提升 25%；收集合作方 20+ 条反馈，推动旅拍项目运营机制优化和落地迭代。",
        "内容传播与销售支持：跟进导游社媒传播及团友旅拍内容传播链路，协助设计内容传播激励机制，提升导游内容生产积极性，推动导游成为移动销售触点，推动提升品牌在旅游人群中的触达与转化，实现线上曝光 20W+ 及线下租机/购机转化金额 20W+。",
        "数据看板搭建与增长监控：协助搭建旅拍项目数据看板，围绕各区域的导游招募、社媒点赞量、租机/购机转化等核心指标进行整理与监控，以此支持月度运营复盘和区域运营策略的优化；基于多区域运营数据进行了五维度的对比分析，推动了优秀区域的复制和运营策略的迭代，当月优秀区域提升 100%。",
      ],
    },
    {
      title: "产品运营实习生",
      company: "迅雷网络科技公司",
      department: "迅雷云事业群",
      overview:
        "迅雷浏览器业务概述：迅雷浏览器是一款极简风格的极速浏览器，用户可以通过流畅播、漫画模式、极简模式等功能享受极致视听体验。该产品目前处于 0-1 阶段，用户规模逐步扩张，我负责其中的社区板块。",
      period: "2025.12 – 2026.03",
      location: "中国",
      highlights: [
        "用户增长与社群运营：协助设计校园用户增长路径，通过 3 场校园活动实现 1W+ 用户触达与转化，搭建并运营 7+ 校园社群（2000+ 用户）构建了稳定的校园获客以及种子用户池，实现首期会员拉新率 30%；同时设计社群的裂变机制，整体拉新效率提升 11%。",
        "用户洞察与产品需求分析：持续整理 1000+ 条用户反馈以及社区客诉数据，结合视频播放、小说阅读等高频使用场景归纳用户内容的消费痛点和需求优先级，输出 8 类需求的分析文档，推动了“边下边播”“书架 zip 文件导入”等需求进入产品优化排期；组织 4 场高校产品体验交流活动，围绕小说阅读、漫画浏览等典型场景开展用户访谈，从 8 个维度系统分析 Z 世代内容消费行为与产品使用路径，为漫画模式、小说模式及视频播放体验优化提供结构化用户洞察支持。",
        "社区内容生态运营：深度体验 BBS 论坛、贴吧等资源型 UGC 社区，拆解内容分区、创作者激励及资源传播机制，结合迅雷浏览器社区 0-1 阶段，输出 2000+ 字内容生态优化建议，协助推动社区分区规划、用户共建机制及春节社区活动方案落地，围绕资源分享、互动话题、内容激励等玩法设计了全流程的运营方案，促进了用户的内容生产和社区互动，社区活跃度提升了 4%。",
        "数据运营和体验优化：持续性监控站点的误封数据，筛选了近 60 日有效访问站点完成恢复，将访问的失败率由 25% 下降至 11%，优化用户的访问体验；同时协助优化站点管理的后台筛选逻辑，提高重点站点的运营效率。",
      ],
    },
    {
      title: "小红书运营实习生",
      company: "东弘传媒",
      period: "2025.05 – 2025.07",
      location: "中国",
      highlights: [
        "负责小红书奢侈品垂类账号矩阵从0到1搭建、养号策略制定与内容策划",
        "设计并执行小红书导流私域SOP，参与潜在KOC用户识别、触达和关系维护",
        "结合高净值用户兴趣点进行高端调性内容创作，单篇笔记曝光量达6W+",
      ],
    },
    {
      title: "外联部总干事",
      company: "深圳大学学生会",
      period: "2024.06 – 2025.06",
      location: "深圳",
      highlights: [
        "独立策划并统筹深广高校书信交流、深圳北站迎新接车等大型校园活动",
        "联动10+所高校，累计覆盖参与者2W+，全网曝光超14W",
        "统筹80+垂直领域达人建联，推进内容审核SOP制定与发布节奏管控",
        "主导华为、小米、华硕、极氪、麦当劳等企业赞助洽谈，促成合作金额11W+",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            实习{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              经历
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: "32px" }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-primary font-medium">
                      <span>{exp.company}</span>
                      {exp.department && (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {exp.department}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                {exp.overview && (
                  <p className="mb-5 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.overview}
                  </p>
                )}

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
