import { profile } from "@/lib/profile";

export type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  label: string;
};

export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly", label: "Home" },
  { path: "/contact", priority: 0.95, changeFrequency: "monthly", label: "Contact" },
  { path: "/services", priority: 0.92, changeFrequency: "monthly", label: "Services" },
  ...profile.services.items.map((item) => ({
    path: `/services/${item.id}`,
    priority: 0.88,
    changeFrequency: "monthly" as const,
    label: item.title,
  })),
  { path: "/work", priority: 0.9, changeFrequency: "monthly", label: "Work" },
  { path: "/projects", priority: 0.85, changeFrequency: "monthly", label: "Projects" },
  { path: "/about", priority: 0.84, changeFrequency: "monthly", label: "About" },
  { path: "/experience", priority: 0.83, changeFrequency: "monthly", label: "Experience" },
  { path: "/toolkit", priority: 0.8, changeFrequency: "monthly", label: "Toolkit" },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly", label: "Privacy" },
  { path: "/credits", priority: 0.35, changeFrequency: "yearly", label: "Credits" },
];

export function absoluteSiteUrl(path: string): string {
  const base = profile.brand.siteUrl;
  if (path === "/") return base;
  return `${base}${path}`;
}
