"use client"

import Image from "next/image"
import { Award, Camera, ExternalLink, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  const projects = [
    {
      title: "熵减",
      category: "产品项目",
      description: "熵减是个人秩序系统。目标不是变成完美机器，而是在混乱扩张前，先夺回一点控制权。",
      technologies: ["PWA", "自我管理", "个人秩序系统", "AI产品"],
      href: "https://entropy-reduction-pwa.vercel.app/",
      coverIcon: `${basePath}/portfolio/little-devil.png`,
      imageBackground: "bg-gradient-to-br from-stone-100 via-rose-100 to-slate-200",
      gradient: "from-rose-500 to-red-500",
    },
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
      description:
        "整合舞台、人像与AI后期摄影作品，熟练运用Lightroom、Photoshop、醒图等工具完成拍摄、修图与视觉表达，多场舞台摄影获18W曝光量与超5K喜爱。",
      technologies: ["舞台摄影", "人像摄影", "AI后期", "Lightroom"],
      image: `${basePath}/portfolio/stage-photography.jpeg`,
      href: `${basePath}/portfolio/photography-portfolio.pdf`,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "沉浸式品牌广告 VR 交互",
      category: "交互设计",
      description: "以“穿越之我在养颜馆当掌柜”为主题，围绕品牌场景、剧情任务与互动体验完成VR广告交互作品。",
      technologies: ["品牌广告", "VR交互", "剧情体验", "省赛二等奖"],
      image: `${basePath}/portfolio/vr-cover.jpg`,
      href: "https://preview.inibiru.com/creator/custom/index.html?id=56736",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "机器人大赛交互作品",
      category: "交互设计",
      description: "全国大学生机器人大赛交互赛道一等奖作品，围绕火星宿局叙事完成剧情介绍与交互体验设计。",
      technologies: ["机器人交互", "剧情交互", "全国一等奖", "ROBOTAC"],
      image: `${basePath}/portfolio/robot-interaction-cover.png`,
      href: "https://vqy6ro.ma3you.top/a/O7Kggn0/",
      imageClassName: "object-cover",
      imageBackground: "bg-[#7a3d20]",
      gradient: "from-orange-500 to-red-500",
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
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={`${project.imageClassName ?? "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                      />
                    ) : (
                      <div className="relative flex h-full items-center justify-center overflow-hidden">
                        <div className="absolute left-8 top-6 h-20 w-20 rounded-full bg-white/45 blur-xl" />
                        <div className="absolute bottom-7 right-8 h-24 w-24 rounded-full bg-rose-200/45 blur-2xl" />
                        <div className="absolute inset-x-10 bottom-8 h-px bg-white/60" />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white/55 p-5 shadow-[0_18px_60px_rgba(120,91,91,0.18)] ring-1 ring-white/70 backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
                          {project.coverIcon && (
                            <Image
                              src={project.coverIcon}
                              alt="小恶魔封面图"
                              width={88}
                              height={88}
                              className="h-full w-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    )}
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
