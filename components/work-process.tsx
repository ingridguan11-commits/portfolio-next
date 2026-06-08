"use client"

import { motion } from "framer-motion"
import { BarChart3, CheckCircle2, Lightbulb, Megaphone, PenTool, Users } from "lucide-react"

export default function WorkProcess() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "洞察用户与场景",
      description: "从用户访谈、竞品体验、社区反馈和真实使用场景中提炼需求。",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "拆解增长路径",
      description: "结合AARRR模型、社群数据和内容表现，找到可执行的运营抓手。",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: PenTool,
      title: "策划内容与视觉",
      description: "把策略转化为活动方案、内容脚本、视觉物料、摄影作品或交互原型。",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle2,
      title: "复盘迭代闭环",
      description: "根据曝光、转化、互动、反馈和体验指标复盘，持续优化策略。",
      color: "from-orange-500 to-red-500",
    },
  ]

  const expertise = [
    {
      icon: Users,
      title: "跨方协作",
      description: "在校园活动、商业合作和旅拍项目中协调高校、品牌、达人与渠道资源。",
    },
    {
      icon: Megaphone,
      title: "内容敏感度",
      description: "长期观察小红书内容生态，能把兴趣点、视觉表达和用户沟通结合起来。",
    },
    {
      icon: CheckCircle2,
      title: "结果导向",
      description: "重视可量化结果，从曝光、拉新、互动、点击到商业合作金额进行追踪。",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            我的{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              工作方法
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            从用户洞察出发，把内容、视觉、社群和商业目标串联成可执行、可复盘的运营方案。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} variants={itemVariants}>
                  <motion.div
                    className="relative group h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {idx < processSteps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-20 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"
                        aria-hidden="true"
                      />
                    )}

                    <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <motion.div
                          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} mb-4`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </motion.div>

                        <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                        <motion.div
                          className="text-xs font-bold text-primary opacity-60"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          步骤 {idx + 1}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-balance">工作特点</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {expertise.map((item) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} variants={itemVariants}>
                  <motion.div
                    className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
