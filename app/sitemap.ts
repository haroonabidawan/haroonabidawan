import type { MetadataRoute } from "next";

const siteUrl = "https://haroonabidawan.com";

const routes = [
  "/",
  "/about",
  "/timeline",
  "/frames",
  "/projects",
  "/toolkit",
  "/contact",
  "/privacy",
  "/credits",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
