"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { BarChart3, Camera, Code2, Megaphone } from "lucide-react"

export default function CoreAbilities() {
  const highlights = [
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
      title: "交互设计与项目落地",
      description: "完成品牌策划、VR交互和机器人交互项目，获得多项设计与交互类竞赛奖项。",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="core-abilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">核心能力</h2>
          <HoverEffect items={highlights} className="lg:grid-cols-4" />
        </motion.div>
      </div>
    </section>
  )
}
