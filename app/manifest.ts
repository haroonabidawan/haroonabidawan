import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.seo.titleDefault,
    short_name: profile.seo.manifest.shortName,
    description: profile.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: profile.seo.manifest.backgroundColor,
    theme_color: profile.seo.manifest.themeColor,
    lang: profile.seo.locale,
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
