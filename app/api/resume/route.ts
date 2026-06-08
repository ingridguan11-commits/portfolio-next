import { NextResponse } from "next/server"

export async function GET() {
  try {
const resumeContent = `
关颖莹 / Jade Guan
产品运营 · 内容策划 · 视觉创作
ingridguan11@163.com | 13427272681 | 深圳

SUMMARY
深圳大学广告学数字策略方向本科生，具备产品运营、用户增长、内容运营、视觉设计、摄影与AI创作经验。善于将用户洞察转化为可落地的运营策略，执行力强，沟通协作和抗压能力突出。

SKILLS
运营: 用户运营、内容运营、社群运营、活动策划、竞品调研、AARRR模型
数据: SPSS、Excel、广告效果分析、用户反馈分析
新媒体与视觉: Photoshop、Lightroom、VSCO、醒图、剪映、可画
AI与交互: ChatGPT、Midjourney、ComfyUI、AI后期、VR交互、机器人交互
语言: CET-6

EXPERIENCE

旅拍圈层运营实习生
vivo全球总部 | 2026.03 – 至今
• 针对旅拍人群需求与购买场景，定制vivo手机旅拍项目推广方向与重点
• 开展租机价格测算，推进销售方案落地与销售指标达成
• 协助设计总部、区域代理、旅行社与导游的分润体系和利益链路
• 跟进各区域项目开展情况，与中摄协、导游协会和知名旅行社建立合作

产品运营实习生
迅雷浏览器业务 | 2025.12 – 2026.03
• 从用户视角体验资源型社区玩法，助推社区分区、用户共建机制与内容激励思路落地
• 策划3场校园活动，累计曝光1W+，搭建并运营7+校园社群，覆盖2000+用户
• 跟进1000+用户客诉数据，推动边下边播、密码保险箱等高频需求进入优化队列
• 优化站点管理与H5页面布局，使访问失败率由25%下降至11%，页面作品点击率提升至15%

小红书运营实习生
东弘传媒 | 2025.05 – 2025.07
• 负责小红书奢侈品垂类账号矩阵从0到1搭建、养号策略制定与内容策划
• 设计并执行小红书导流私域SOP，参与潜在KOC用户识别、触达和关系维护
• 结合高净值用户兴趣点进行高端调性内容创作，单篇笔记曝光量达6W+

校园经历
深圳大学学生会外联部 总干事 | 2024.06 – 2025.06
• 独立策划并统筹深广高校书信交流、深圳北站迎新接车等大型校园活动
• 联动10+所高校，累计覆盖参与者2W+，全网曝光超14W
• 统筹80+垂直领域达人建联，推进内容审核SOP制定与发布节奏管控
• 主导华为、小米、华硕、极氪、麦当劳等企业赞助洽谈，促成合作金额11W+

PROJECTS
AI口语助手 | 项目负责人 | 2025.03 – 2025.08
• 主导商业分析与市场调研，定位跨国企业、国际游客等KA客群
• 设计企业年费/个人订阅的分层盈利模式，通过数据分析优化运营策略
• 累计触达用户5000+，获大学生计算机设计大赛国赛三等奖

腾讯未来产品经理创造营 | 2026.01 – 2026.02
• 系统学习用户需求分析、产品设计、产品增长等模块
• 设计“永夜星河·AI角色伴游”互动平台，规划四大功能模块与分层付费体系

EDUCATION

深圳大学 本科
广告学数字策略方向 | 2023.09 – 2027.06
专业课程：整合营销传播、图文编辑与处理、广告策划、数据分析与处理等

AWARDS
全国大学生机器人大赛交互设计一等奖
全国计算机设计大赛三等奖
大学生广告艺术大赛交互类省赛二等奖
    `

    // Create a simple text-based response that can be downloaded as a file
    const headers = new Headers()
    headers.set("Content-Type", "text/plain; charset=utf-8")
    headers.set("Content-Disposition", 'attachment; filename="Guan_Yingying_Resume.txt"')

    return new NextResponse(resumeContent, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error generating resume:", error)
    return NextResponse.json({ error: "Failed to generate resume" }, { status: 500 })
  }
}
