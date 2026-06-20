"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, Sparkles } from "lucide-react"

export default function Contact() {
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
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "邮箱",
      value: "ingridguan11@163.com",
      href: "mailto:ingridguan11@163.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "电话 / 微信",
      value: "13427272681",
      href: "tel:+8613427272681",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Download,
      label: "简历",
      value: "下载PDF简历",
      href: `${basePath}/guan-yingying-resume.pdf`,
      color: "from-gray-600 to-gray-800",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            与我{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              联系
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.div key={method.label} variants={itemVariants}>
                <motion.div
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg h-full"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-bold mb-3 text-foreground">{method.label}</h3>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline text-sm flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                    download={method.label === "简历" ? "关颖莹简历.pdf" : undefined}
                  >
                    {method.value}
                    {method.label === "简历" && <Sparkles className="w-3 h-3" aria-hidden="true" />}
                  </a>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
