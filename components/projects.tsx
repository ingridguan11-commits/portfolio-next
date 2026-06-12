"use client"

import Image from "next/image"
import { Award, Camera, ExternalLink, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  const projects = [
    {
      title: "AI口语助手",
      category: "产品项目",
      description: "主导商业分析与市场调研，定位跨国企业、国际游客等KA客群，设计企业年费/个人订阅的分层盈利模式。",
      technologies: ["商业分析", "市场调研", "用户触达5000+", "国赛三等奖"],
      image: `${basePath}/portfolio/native-speaker-cover.png`,
      href: `${basePath}/portfolio/native-speaker.pdf`,
      imageClassName: "object-contain",
      imageBackground: "bg-[#f2f2f2]",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "XPPEN品牌策划案",
      category: "营销策划",
      description: "围绕品牌沟通、活动玩法和视觉主张完成PPT/营销策划案制作，兼顾策略表达与主视觉呈现。",
      technologies: ["品牌策划", "PPT制作", "主视觉设计", "营销方案"],
      image: `${basePath}/portfolio/xppen-cover.png`,
      href: `${basePath}/portfolio/xppen-campaign.pdf`,
      imageClassName: "object-contain",
      imageBackground: "bg-black",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "舞台与人像摄影",
      category: "摄影作品",
      description: "野生站姐兼拍修一体机，熟练运用Lightroom、Photoshop、醒图进行舞台和人像后期。",
      technologies: ["舞台摄影", "Lightroom", "Photoshop", "小红书17W播放"],
      image: `${basePath}/portfolio/stage-photography.jpeg`,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "《不良》人像摄影",
      category: "摄影作品",
      description: "以“作为乌鸦，不好吗？”为灵感，完成前期拍摄与LR、PS、像素蛋糕后期处理。",
      technologies: ["Canon R50", "50mm定焦", "LR+PS", "人像摄影"],
      image: `${basePath}/portfolio/portrait-buliang.jpeg`,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "AI摄影与AI后期",
      category: "AI视觉",
      description: "使用ChatGPT生成提示词，结合Midjourney、libulibu完成新闻纪实感摄影与产品摄影后期重构。",
      technologies: ["ChatGPT", "Midjourney", "AI后期", "产品摄影"],
      image: `${basePath}/portfolio/ai-documentary.jpeg`,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "VR与机器人交互作品",
      category: "交互设计",
      description: "包含“穿越之我在养颜馆当掌柜”VR交互作品，以及全国大学生机器人大赛交互赛道一等奖作品。",
      technologies: ["VR交互", "机器人交互", "省赛二等奖", "全国一等奖"],
      image: `${basePath}/portfolio/vr-interaction.jpeg`,
      gradient: "from-teal-500 to-cyan-500",
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-balance"
        >
          精选{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            作品
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <AnimatedCard key={project.title} className="h-full">
              <a
                href={project.href}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noreferrer" : undefined}
                className={`group relative block h-full overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-xl ${
                  project.href ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" : ""
                }`}
                aria-label={project.href ? `查看${project.title}完整项目` : undefined}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className={`relative h-52 w-full overflow-hidden ${project.imageBackground ?? "bg-secondary/20"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`${project.imageClassName ?? "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category === "摄影作品" ? (
                        <Camera className="h-3.5 w-3.5" />
                      ) : project.category === "AI视觉" ? (
                        <Sparkles className="h-3.5 w-3.5" />
                      ) : (
                        <Award className="h-3.5 w-3.5" />
                      )}
                      {project.category}
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    {project.href && (
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        查看完整项目
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
