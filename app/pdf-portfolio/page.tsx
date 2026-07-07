import type { Metadata } from "next"
import styles from "./PdfPortfolio.module.css"

export const metadata: Metadata = {
  title: "关颖莹 PDF导出版作品集",
  description: "适合校招网站上传PDF的作品集导出版页面。",
}

type Project = {
  title: string
  type: string
  background: string
  role: string
  work: string[]
  result: string
  image?: string
  imageMode?: "cover" | "contain" | "icon"
  link?: string
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const productProjects: Project[] = [
  {
    title: "熵减",
    type: "AI产品 / PWA / 个人秩序系统",
    background: "面向个人任务、状态和生活秩序管理的自我管理工具，目标是在混乱扩张前帮助用户先夺回一点控制权。",
    role: "产品策划、信息结构设计、AI辅助开发与页面搭建",
    work: [
      "梳理产品定位、核心使用场景与页面信息层级。",
      "使用 Codex 等 AI 工具辅助完成 Vibe Coding、交互迭代和上线验证。",
    ],
    result: "完成可访问的 PWA 作品，体现产品拆解、快速原型、AI工具协作和可交付意识。",
    image: `${basePath}/portfolio/little-devil.png`,
    imageMode: "icon",
    link: "https://entropy-reduction-pwa.vercel.app/",
  },
  {
    title: "AI口语助手",
    type: "产品项目 / 商业分析 / 市场调研",
    background: "围绕跨国企业、国际游客等 KA 客群的语言沟通场景，探索 AI 口语工具的使用需求和商业化可能。",
    role: "商业分析、市场调研、盈利模式设计与方案表达",
    work: [
      "定位目标用户与付费场景，拆解企业年费、个人订阅等分层商业模式。",
      "将调研结论整理为产品方案与展示型 PPT，形成清晰的项目叙事。",
    ],
    result: "完成项目方案并获得国赛三等奖；项目中沉淀了商业分析、用户分层和方案表达能力。",
    image: `${basePath}/portfolio/native-speaker-cover.png`,
    imageMode: "contain",
    link: `${basePath}/portfolio/native-speaker.pdf`,
  },
]

const contentProjects: Project[] = [
  {
    title: "小红书个人 IP 内容运营",
    type: "自媒体 / 内容增长 / 账号运营",
    background: "围绕小红书内容生态进行长期观察和创作，关注选题、标题、封面、内容结构与平台互动之间的关系。",
    role: "内容策划、脚本拆解、封面判断、账号复盘",
    work: [
      "围绕生活方式、美食、摄影等兴趣方向进行选题策划与内容表达。",
      "复盘爆款内容结构，形成选题、标题、画面节奏和评论互动的内容判断。",
    ],
    result: "个人 IP 运营中打造过超 40W 播放、4W 点赞以及 17W 播放、4.4K 点赞的视频爆款。",
    link: "https://xhslink.com/m/1kmgsKXD5cr",
  },
  {
    title: "奢侈品垂类账号搭建",
    type: "内容增长 / 垂类账号 / 私域转化",
    background: "面向高净值用户兴趣点，探索奢侈品垂类账号从 0 到 1 的内容定位、账号调性和转化链路。",
    role: "内容策划、养号策略、私域转化 SOP 支持",
    work: [
      "参与账号矩阵搭建、内容方向设定和早期养号策略整理。",
      "协助设计从内容种草到私域承接的基础 SOP。",
    ],
    result: "完成垂类内容策划与私域链路梳理，单篇笔记曝光量达 6W+。",
  },
]

const designProjects: Project[] = [
  {
    title: "XPPEN品牌策划案",
    type: "品牌策划 / 营销方案 / 视觉设计",
    background: "围绕品牌沟通、活动玩法与视觉主张，完成面向品牌表达的营销策划方案。",
    role: "策略梳理、PPT制作、主视觉设计与方案表达",
    work: [
      "梳理品牌沟通目标与活动玩法，搭建策划案结构。",
      "完成视觉主张、页面排版和方案展示。",
    ],
    result: "输出完整品牌策划案，体现品牌理解、视觉表达和策略包装能力。",
    image: `${basePath}/portfolio/xppen-cover.png`,
    imageMode: "contain",
    link: `${basePath}/portfolio/xppen-campaign.pdf`,
  },
  {
    title: "沉浸式品牌广告 VR 交互",
    type: "VR交互 / 品牌广告 / 剧情体验",
    background: "以“穿越之我在养颜馆当掌柜”为主题，将品牌信息放入沉浸式剧情任务和互动体验中。",
    role: "交互叙事、体验路径设计、视觉呈现支持",
    work: [
      "围绕品牌场景和剧情任务组织体验动线。",
      "将广告信息转化为用户可参与、可探索的互动内容。",
    ],
    result: "完成 VR 广告交互作品，获得省赛二等奖。",
    image: `${basePath}/portfolio/vr-cover.jpg`,
    link: "https://preview.inibiru.com/creator/custom/index.html?id=56736",
  },
  {
    title: "机器人大赛交互作品",
    type: "交互设计 / 竞赛作品 / 剧情体验",
    background: "围绕火星宿局叙事进行机器人交互赛道作品设计，强调故事介绍、场景进入和互动体验。",
    role: "剧情介绍、交互体验设计与展示支持",
    work: [
      "整理作品叙事线和关键交互节点。",
      "围绕竞赛展示场景优化内容呈现和用户理解路径。",
    ],
    result: "完成全国大学生机器人大赛交互赛道一等奖作品。",
    image: `${basePath}/portfolio/robot-interaction-cover.png`,
    link: "https://vqy6ro.ma3you.top/a/O7Kggn0/",
  },
]

const visualWorks = [
  {
    title: "舞台与人像摄影",
    image: `${basePath}/portfolio/stage-photography.jpeg`,
    text: "整合舞台、人像与 AI 后期摄影作品，熟练运用 Lightroom、Photoshop、醒图等工具进行拍摄、修图与视觉表达。",
  },
  {
    title: "人像摄影《不良》",
    image: `${basePath}/portfolio/portrait-buliang.jpeg`,
    text: "以人物气质、造型和画面情绪为核心，完成前期拍摄与后期修图。",
  },
  {
    title: "AI摄影与AI后期",
    image: `${basePath}/portfolio/ai-documentary.jpeg`,
    text: "使用 ChatGPT、Midjourney、ComfyUI 等工具辅助完成视觉创意表达和后期探索。",
  },
  {
    title: "商业与人文摄影",
    image: `${basePath}/portfolio/commercial-photo.jpeg`,
    text: "围绕场景、产品和人物关系进行视觉记录，沉淀审美判断与画面表达能力。",
  },
]

const aiWorkflows = [
  {
    title: "产品策划与 AI 开发",
    text: "用 Codex、Claude Code 辅助需求拆解、页面搭建和产品原型迭代，让想法更快变成可验证的线上作品。",
  },
  {
    title: "AI 辅助视觉创作",
    text: "使用 ChatGPT、Midjourney、ComfyUI 完成 AI 摄影、AI 后期与产品创意表达，并沉淀视觉提示词与后期流程。",
  },
  {
    title: "知识库与内容方法论",
    text: "用 Obsidian 沉淀项目资料、洞察笔记和复盘框架，再借助 Claude Code 梳理结构和提炼方法论。",
  },
  {
    title: "自媒体脚本创作",
    text: "用 ChatGPT 辅助完成选题拆解、爆款结构分析、标题优化和短视频脚本初稿，提高内容策划迭代效率。",
  },
]

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className={`${styles.projectCard} ${large ? styles.projectCardLarge : ""}`}>
      {project.image ? (
        <div
          className={`${styles.imageBox} ${
            project.imageMode === "contain" ? styles.imageContain : project.imageMode === "icon" ? styles.iconCover : ""
          }`}
        >
          <img src={project.image} alt={`${project.title}项目图`} />
        </div>
      ) : (
        <div className={styles.imageBox}>
          <span className={styles.projectMeta}>{project.type}</span>
        </div>
      )}
      <div>
        <span className={styles.projectMeta}>{project.type}</span>
        <h3>{project.title}</h3>
        <dl>
          <div>
            <dt>背景</dt>
            <dd>{project.background}</dd>
          </div>
          <div>
            <dt>角色</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>工作</dt>
            <dd>{project.work.join(" ")}</dd>
          </div>
          <div>
            <dt>产出</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
        {project.link && <p className={styles.projectLink}>链接：{project.link}</p>}
      </div>
    </article>
  )
}

function FooterNote({ page }: { page: string }) {
  return (
    <div className={styles.footerNote}>
      <span>关颖莹 · PDF导出版作品集</span>
      <span>{page}</span>
    </div>
  )
}

export default function PdfPortfolioPage() {
  return (
    <main className={styles.pdfRoot}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarButton}>按 ⌘P / Ctrl+P 打印或另存为 PDF</span>
        <a className={styles.toolbarLink} href={`${basePath}/`}>
          返回网页作品集
        </a>
      </div>

      <div className={styles.document}>
        <section className={`${styles.sheet} ${styles.cover}`}>
          <div>
            <p className={styles.eyebrow}>Portfolio for Campus Recruitment</p>
            <h1 className={styles.name}>关颖莹</h1>
            <p className={styles.direction}>求职方向：产品运营 / 内容增长 / 商业化运营 / AI 产品相关方向</p>
            <p className={styles.positioning}>
              传播学与数字策略背景，兼具内容洞察、产品思维、视觉表达与 AI 工具应用能力。
            </p>
            <div className={styles.tagRow}>
              {["产品策划", "产品运营", "内容增长", "视觉设计", "摄影创作", "AI工具应用"].map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.coverGrid}>
            <div className={styles.coverCard}>
              <p className={styles.eyebrow}>Content Scope</p>
              <h2>PDF 版只保留作品项目</h2>
              <p>
                本版本面向校招系统 PDF 上传场景，删去实习经历叙述，聚焦产品、内容、视觉、交互与 AI 工具应用作品，方便 HR 快速阅读。
              </p>
            </div>
            <div className={styles.coverCard}>
              <p className={styles.eyebrow}>Reading Path</p>
              <h2>7 页 A4 结构</h2>
              <p>按能力概览、产品项目、内容增长、品牌交互、视觉作品、AI 工作流和作品链接组织。</p>
            </div>
          </div>
          <FooterNote page="01 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>能力概览</h2>
            <p>用一页快速说明我能把什么类型的问题转化为可交付作品。</p>
          </header>
          <p className={styles.sectionLead}>
            我的作品并不只是一组视觉结果，而是围绕“问题识别 - 内容表达 - 产品/体验方案 - 复盘沉淀”的完整能力组合。
          </p>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <h3>产品与商业理解</h3>
              <p>能从用户场景、付费动机和业务目标出发，拆解产品定位、核心功能与商业化路径。</p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>需求拆解</span>
                <span className={styles.tag}>商业分析</span>
                <span className={styles.tag}>方案表达</span>
              </div>
            </div>
            <div className={styles.summaryCard}>
              <h3>内容策划与增长</h3>
              <p>理解小红书内容生态，能围绕选题、标题、封面、脚本和私域承接建立内容判断。</p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>爆款复盘</span>
                <span className={styles.tag}>脚本创作</span>
                <span className={styles.tag}>账号运营</span>
              </div>
            </div>
            <div className={styles.summaryCard}>
              <h3>视觉表达与摄影</h3>
              <p>具备舞台、人像、商业和 AI 视觉创作经验，能完成拍摄、修图、排版与视觉叙事。</p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>摄影</span>
                <span className={styles.tag}>修图</span>
                <span className={styles.tag}>视觉设计</span>
              </div>
            </div>
            <div className={styles.summaryCard}>
              <h3>AI Native 工作流</h3>
              <p>把 AI 工具嵌入产品策划、视觉创作、知识库管理和内容脚本流程，提高从想法到交付的速度。</p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>Codex</span>
                <span className={styles.tag}>Claude Code</span>
                <span className={styles.tag}>Midjourney</span>
              </div>
            </div>
          </div>
          <FooterNote page="02 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>产品 / AI 产品设计项目</h2>
            <p>聚焦产品定位、商业分析、AI 工具协作和可交付原型。</p>
          </header>
          <div className={styles.projectStack}>
            {productProjects.map((project) => (
              <ProjectCard key={project.title} project={project} large />
            ))}
          </div>
          <FooterNote page="03 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>自媒体 / 内容增长项目</h2>
            <p>展示内容洞察、账号运营、爆款复盘和私域转化意识。</p>
          </header>
          <div className={styles.projectStack}>
            {contentProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <FooterNote page="04 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>品牌策划 / 交互设计作品</h2>
            <p>用策略、叙事和视觉方案把品牌信息转化为体验。</p>
          </header>
          <div className={styles.projectStack}>
            {designProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <FooterNote page="05 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>视觉设计 / 摄影创作</h2>
            <p>保留更鲜活的审美与表达面：拍摄、修图、AI 后期和视觉叙事。</p>
          </header>
          <div className={styles.miniGrid}>
            {visualWorks.map((work) => (
              <article className={styles.visualCard} key={work.title}>
                <img src={work.image} alt={work.title} />
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.coverCard} style={{ marginTop: 16 }}>
            <p className={styles.eyebrow}>Output</p>
            <h2>完整摄影作品集</h2>
            <p>
              已整理为独立 PDF，包含舞台、人像与 AI 后期方向作品。多场舞台摄影获 18W 曝光量与超 5K 喜爱。
            </p>
            <p className={styles.projectLink}>链接：{`${basePath}/portfolio/photography-portfolio.pdf`}</p>
          </div>
          <FooterNote page="06 / 07" />
        </section>

        <section className={styles.sheet}>
          <header className={styles.pageHeader}>
            <h2>AI 工具应用与作品链接</h2>
            <p>把 AI 工具真正放进产品、内容和视觉工作流。</p>
          </header>
          <div className={styles.toolGrid}>
            {aiWorkflows.map((workflow) => (
              <article className={styles.linkCard} key={workflow.title}>
                <h3>{workflow.title}</h3>
                <p>{workflow.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.coverCard} style={{ marginTop: 18 }}>
            <p className={styles.eyebrow}>Links</p>
            <h2>主要作品入口</h2>
            <p className={styles.projectLink}>熵减 PWA：https://entropy-reduction-pwa.vercel.app/</p>
            <p className={styles.projectLink}>小红书主页：https://xhslink.com/m/1kmgsKXD5cr</p>
            <p className={styles.projectLink}>网页作品集：https://ingridguan11-commits.github.io/portfolio/</p>
          </div>
          <FooterNote page="07 / 07" />
        </section>
      </div>
    </main>
  )
}
