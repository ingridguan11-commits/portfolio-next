import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "关颖莹 | 产品运营与视觉创作作品集",
  description:
    "关颖莹，深圳大学广告学数字策略方向本科生，关注产品运营、用户增长、内容策划、摄影、AI视觉与交互创作。",
  keywords: [
    "关颖莹",
    "Jade Guan",
    "产品运营",
    "内容运营",
    "用户增长",
    "新媒体运营",
    "摄影作品集",
    "视觉设计",
    "深圳大学",
    "广告学数字策略",
    "AI视觉创作",
  ],
  generator: "v0.app",
  openGraph: {
    title: "关颖莹 | 产品运营与视觉创作作品集",
    description:
      "产品运营、内容策划、用户增长、摄影与AI视觉创作作品集。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "关颖莹 | 产品运营与视觉创作作品集",
    description:
      "产品运营、内容策划、用户增长、摄影与AI视觉创作作品集。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "关颖莹",
              alternateName: "Jade Guan",
              jobTitle: "产品运营实习生",
              email: "ingridguan11@163.com",
              telephone: "+8613427272681",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Shenzhen",
                addressCountry: "CN",
              },
              alumniOf: "深圳大学",
              knowsAbout: [
                "产品运营",
                "产品策划",
                "用户增长",
                "内容运营",
                "SQL",
                "Codex",
                "Claude Code",
                "Vibe Coding",
                "摄影",
                "视觉设计",
                "AI创作",
                "交互设计",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
