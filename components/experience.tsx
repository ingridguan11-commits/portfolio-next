"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "旅拍圈层运营实习生 / 项目管理实习生",
      company: "vivo 全球总部",
      department: "TO G 营销部",
      overview:
        "旅拍项目业务概述：通过 to B 组织 / to C 关键人的推荐建联目标旅行社，和旅行社在导游培育、路线联名、品牌曝光等层面多维度合作，打造专属团友权益，实现 vivo 手机旅拍场景的宣发和转化。",
      period: "2026.03 – 至今",
      location: "中国",
      highlights: [
        "针对旅拍人群需求与购买场景，定制vivo手机旅拍项目推广方向与重点",
        "开展租机价格测算，推进销售方案落地与销售指标达成",
        "协助设计总部、区域代理、旅行社与导游的分润体系和利益链路",
        "跟进各区域项目开展情况，与中摄协、导游协会和知名旅行社建立合作",
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
        "竞品调研与社区运营优化：从用户视角体验资源型社区（BBS论坛、贴吧）玩法，助推用户社区分区、用户共建机制功能落地，为社区提供资源—博主—私域/公域链路、内容激励机制的运营思路；设计春节社区运营方案，提升社区活跃率0.2%。",
        "用户运营与校园增长策略：根据AARRR模型策划落地3场校园活动，累计曝光1W+人次；搭建并运营7+校园社群，覆盖2000+用户，首期会员拉新率30%；通过互动抽奖、资源分享等形式维持社群10%互动率，用户拉新率提升11%。",
        "产品迭代与用户反馈闭环：跟进用户客诉数据1000余条，推动“边下边播”“密码保险箱”等高频需求进入优化队列，协助安卓端评分从4.0提升至4.1；组织4场高校产品茶话会，提炼小说、漫画爱好者痛点需求，推动韩漫、日漫模式等功能上线。",
        "站点管理与体验优化：监控误封站点数据，解封60日内有访问记录的误封站点，使访问失败率由25%下降至11%；优化站点管理后台，提高头部站点打标效率；优化H5页面布局，解决页面屏效浪费问题，页面作品点击率提升至15%。",
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
