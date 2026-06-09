import type { MetadataRoute } from "next"

const siteUrl = "https://ingridguan11-commits.github.io/portfolio"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
