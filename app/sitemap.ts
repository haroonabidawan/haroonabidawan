import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";
import { absoluteSiteUrl, sitemapRoutes } from "@/lib/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(profile.seo.lastModified);

  return sitemapRoutes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteSiteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
