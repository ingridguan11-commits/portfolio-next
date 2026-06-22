"use client"

import { ArrowRight, Download, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./aceternity/text-generate-effect"
import { SilkBackground } from "./aceternity/silk-background"

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <motion.div
              className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium border border-primary/30 flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              产品策划 · 产品运营 · 视觉创作作品集
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              关颖莹
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance font-semibold"
          >
            产品策划 / 产品运营 / 内容策划 / 视觉创作
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <TextGenerateEffect
              words="深圳大学广告学数字策略方向本科生，拥有产品策划、产品运营、用户增长、内容策划、视觉设计与摄影创作经验，擅长将用户洞察转化为可落地的产品与运营策略。"
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
              duration={0.05}
              filter={true}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              查看作品
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={`${basePath}/guan-yingying-resume.pdf`}
              download="关颖莹简历.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              下载简历
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href={`${basePath}/guan-yingying-portfolio.pdf`}
              download="关颖莹作品集.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              视觉作品集
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "AI", label: "NATIVE", href: "#ai-native" },
              { value: "14W+", label: "校园活动曝光" },
              { value: "11W+", label: "商业合作金额" },
            ].map((stat, idx) => {
              const content = (
                <>
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, delay: idx * 0.2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </>
              )

              return stat.href ? (
                <motion.a
                  key={idx}
                  href={stat.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="跳转到AI NATIVE模块"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors"
                >
                  {content}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
