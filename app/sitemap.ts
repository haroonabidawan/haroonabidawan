import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

const siteUrl = "https://haroonabidawan.com";

const routes = [
  "/",
  "/about",
  "/experience",
  "/work",
  "/projects",
  "/services",
  ...profile.services.items.map((item) => `/services/${item.id}`),
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
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
