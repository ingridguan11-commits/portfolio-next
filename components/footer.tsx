"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav>
            <h3 className="font-bold mb-4">网站导航</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  关于我
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  实习经历
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  专业能力
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  工作方法
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  作品展示
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-bold mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:ingridguan11@163.com"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  邮箱
                </a>
              </li>
              <li>
                <a
                  href="tel:+8613427272681"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  电话 / 微信
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}/guan-yingying-resume.pdf`}
                  download="关颖莹简历.pdf"
                  className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                >
                  下载简历
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold mb-4">专业能力</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>产品运营与用户增长</li>
              <li>内容策划与社群运营</li>
              <li>摄影与视觉设计</li>
              <li>AI创作与交互作品</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">所在地</h3>
            <p className="text-sm text-muted-foreground">中国深圳</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} 关颖莹。保留所有权利。</p>
          <p>产品运营与视觉创作个人作品集</p>
        </div>
      </div>
    </footer>
  )
}
