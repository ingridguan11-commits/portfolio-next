"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { BarChart3, Camera, Code2, ExternalLink, Megaphone, PenTool, Sparkles, Users } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "产品策划与AI开发",
      description: "具备需求分析、功能规划和商业模式设计能力，能够运用Codex、Claude Code等AI工具进行Vibe Coding。",
      icon: <PenTool size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "内容策划与账号运营",
      description:
        "小红书个人IP运营，打造过超40W播放、4W点赞以及17W播放、4.4K点赞的视频爆款。参与小红书奢侈品垂类账号从0到1搭建，完成内容策划、养号策略与私域转化SOP。",
      icon: <Megaphone size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "数据分析与复盘",
      description: "使用Excel、SPSS与SQL处理和分析用户反馈、广告效果及业务数据，把数据洞察转化为运营优化建议。",
      icon: <BarChart3 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "摄影与视觉设计",
      description: "擅长舞台、人像、风景与商业摄影，熟练使用LR、PS、醒图、剪映与可画。",
      icon: <Camera size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "AI辅助创作",
      description: "使用ChatGPT、Midjourney、ComfyUI完成AI摄影、AI后期与产品创意表达。",
      icon: <Sparkles size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "用户运营与增长",
      description:
        "基于AARRR模型设计校园增长活动，搭建并运营7+校园社群，覆盖2000+用户。",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "交互设计与项目落地",
      description: "完成品牌策划、VR交互和机器人交互项目，获得多项设计与交互类竞赛奖项。",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              关于{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                我
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              我是关颖莹，深圳大学传播学院广告学数字策略方向本科生。我的经历横跨{" "}
              <span className="font-semibold text-foreground">产品运营、内容增长、视觉设计与摄影创作</span>，
              关注如何把用户洞察、内容表达和商业目标连接起来。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              在迅雷浏览器业务实习中，我参与社区机制、校园增长、用户反馈闭环与H5体验优化；在小红书运营实习中，
              参与奢侈品垂类账号矩阵搭建、内容策划与私域转化。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              作品集里，我也保留了更鲜活的一面：{" "}
              <span className="font-semibold text-foreground">拍修一体机、野生站姐、不知名美食博主、小红书深度用户</span>。
              这些身份共同组成了我的内容敏感度和视觉表达能力。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["立即到岗", "所在地深圳", "全国可飞", "可长期实习6个月及以上"].map((status) => (
                <span
                  key={status}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  {status}
                </span>
              ))}
            </div>
            <a
              href="https://xhslink.com/m/1kmgsKXD5cr"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 flex flex-col gap-6 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-red-50 via-card to-rose-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:from-red-950/30 dark:via-card dark:to-rose-950/30 sm:flex-row sm:items-center sm:justify-between"
              aria-label="在新标签页打开关颖莹的小红书主页"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#ff2442] text-xl font-black text-white shadow-lg shadow-red-500/20">
                  RED
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold tracking-widest text-primary">小红书 · REDNOTE</p>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">查看更多摄影、内容与生活灵感</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    记录舞台摄影、人像创作、探店内容与日常观察。
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform group-hover:translate-x-1 sm:self-auto">
                访问小红书
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">核心能力</h3>
            <HoverEffect items={highlights} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
