"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

type ToolBadge = {
  label: string
  shortLabel?: string
  image?: string
  className: string
}

type Connector = "none" | "plus" | "arrow"

function ToolStack({ connector, tools }: { connector: Connector; tools: ToolBadge[] }) {
  const renderConnector = () => {
    if (connector === "plus") {
      return (
        <span className="px-0.5 text-xl font-semibold leading-none text-muted-foreground/70" aria-hidden="true">
          ＋
        </span>
      )
    }

    if (connector === "arrow") {
      return (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )
    }

    return null
  }

  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      {tools.map((tool, index) => (
        <div key={`${tool.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && renderConnector()}
          <span
            className={`inline-flex h-12 min-w-12 items-center justify-center overflow-hidden rounded-2xl px-3 text-xs font-black tracking-tight shadow-lg ${tool.className}`}
            title={tool.label}
            aria-label={tool.label}
          >
            {tool.image ? (
              <Image
                src={tool.image}
                alt={tool.label}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            ) : (
              tool.shortLabel
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function AINative() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  const cards = [
    {
      title: "产品策划与 AI 开发",
      description: "具备需求分析、功能规划和商业模式设计能力，能够运用Codex、Claude Code等AI工具进行Vibe Coding。",
      connector: "none" as const,
      tools: [
        {
          label: "Codex",
          image: `${basePath}/portfolio/icons/codex-color.png`,
          className: "bg-white text-slate-900 ring-1 ring-border",
        },
        {
          label: "Claude Code",
          image: `${basePath}/portfolio/icons/claude-color.png`,
          className: "bg-[#f8efe6] ring-1 ring-orange-200",
        },
      ],
    },
    {
      title: "AI 辅助视觉创作",
      description: "使用ChatGPT、Midjourney、ComfyUI完成AI摄影、AI后期与产品创意表达。",
      connector: "none" as const,
      tools: [
        {
          label: "Midjourney",
          image: `${basePath}/portfolio/icons/midjourney.png`,
          className: "bg-[#edf3f5] ring-1 ring-slate-200",
        },
      ],
      href: `${basePath}/portfolio/photography-portfolio.pdf#page=4`,
      linkLabel: "跳转摄影作品集第4页",
    },
    {
      title: "Obsidian + Claude Code 知识库",
      description: "用Obsidian沉淀项目资料、洞察笔记与复盘框架，再借助Claude Code梳理结构、提炼方法论并提升检索效率。",
      connector: "plus" as const,
      tools: [
        {
          label: "Obsidian",
          image: `${basePath}/portfolio/icons/obsidian-color.png`,
          className: "bg-[#f3efff] ring-1 ring-violet-200",
        },
        {
          label: "Claude Code",
          image: `${basePath}/portfolio/icons/claude-color.png`,
          className: "bg-[#f8efe6] ring-1 ring-orange-200",
        },
      ],
    },
    {
      title: "Codex 数据看板项目管理",
      description: "使用Codex搭建数据看板，辅助vivo旅拍项目进行进度追踪、合作信息管理、关键节点复盘与执行协同。",
      connector: "arrow" as const,
      tools: [
        {
          label: "Codex",
          image: `${basePath}/portfolio/icons/codex-color.png`,
          className: "bg-white text-slate-900 ring-1 ring-border",
        },
        { label: "数据看板", shortLabel: "BI", className: "bg-gradient-to-br from-green-500 to-emerald-700 text-white" },
      ],
      href: "https://vivo-to-g-dashboard-3qiw.vercel.app/",
      linkLabel: "查看数据看板",
    },
    {
      title: "ChatGPT 自媒体脚本创作",
      description: "用ChatGPT辅助完成选题拆解、爆款结构分析、标题优化和短视频脚本初稿，提高内容策划与迭代效率。",
      connector: "arrow" as const,
      tools: [
        {
          label: "ChatGPT",
          image: `${basePath}/portfolio/icons/openai.png`,
          className: "bg-white text-slate-900 ring-1 ring-border",
        },
        { label: "自媒体脚本", shortLabel: "Script", className: "bg-pink-100 text-pink-600 ring-1 ring-pink-200" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="ai-native" className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI NATIVE
            </span>
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
            把AI工具真正嵌入产品策划、视觉创作和项目管理等工作流中，让想法更快变成可验证、可复盘、可交付的结果。
          </p>
          <div className="mt-5 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => {
            const CardTag = card.href ? motion.a : motion.div

            return (
              <motion.div key={card.title} variants={itemVariants}>
                <CardTag
                  href={card.href}
                  target={card.href ? "_blank" : undefined}
                  rel={card.href ? "noreferrer" : undefined}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-2 hover:border-primary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  aria-label={card.href ? `查看${card.title}相关作品` : undefined}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <ToolStack connector={card.connector} tools={card.tools} />
                    <h3 className="mb-3 text-lg font-bold text-foreground">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                    {card.href && (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {card.linkLabel}
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </CardTag>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
