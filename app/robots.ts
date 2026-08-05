import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

const siteUrl = profile.brand.siteUrl;

const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
