"use client"

import { motion } from "framer-motion"

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
              我是关颖莹，深圳大学传播学院广告学数字策略方向本科生，关注内容、用户与商业之间的连接方式。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              我的经历横跨{" "}
              <span className="font-semibold text-foreground">产品运营、内容增长、视觉设计与摄影创作</span>。
              我习惯从用户洞察出发，理解产品、账号或品牌为什么被需要，再通过内容表达、体验优化和传播策略，把想法转化为可感知、可传播、可增长的结果。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              在迅雷浏览器业务实习中，我参与社区机制、校园增长、用户反馈闭环与 H5 体验优化；在 vivo 全球总部 TO G 营销部实习中，我参与旅拍项目推进，从旅行社合作、导游运营到团友旅拍体验，理解品牌如何进入真实场景，并通过内容、服务与利益机制完成用户触达和转化。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              视觉作品集里，我也保留了更鲜活的一面：{" "}
              <span className="font-semibold text-foreground">拍修一体机、野生站姐、不知名美食博主、小红书深度用户</span>。
              它们共同组成了我的内容敏感度、审美判断力和视觉表达能力。
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
