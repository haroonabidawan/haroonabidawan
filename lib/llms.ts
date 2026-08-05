import { profile } from "@/lib/profile";
import { absoluteSiteUrl, sitemapRoutes } from "@/lib/sitemap-routes";

function featuredProjects() {
  return profile.projects.filter((project) => "featured" in project && project.featured);
}

function link(path: string, label: string, note?: string): string {
  const suffix = note ? `: ${note}` : "";
  const href = path.startsWith("http") ? path : absoluteSiteUrl(path);
  return `- [${label}](${href})${suffix}`;
}

export function generateLlmsTxt(): string {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.seo.llms.summary}`,
    "",
    profile.seo.llms.audience,
    "",
    profile.seo.llms.contactNote,
    "",
    "## Primary pages",
    link("/", "Home", profile.hero.taglineFull),
    link("/contact", "Contact", profile.pages.contact.headline),
    link("/services", "Services", profile.services.support),
    link("/work", "Work", profile.pages.work.subtitle),
    link("/about", "About", profile.about.hook),
    "",
    "## Service lanes",
    ...profile.services.items.map((service) =>
      link(`/services/${service.id}`, service.title, service.hook),
    ),
    "",
    "## Featured GCC products",
    ...featuredProjects().map((project) =>
      link(
        "href" in project && project.href ? project.href : "/work",
        project.name,
        project.outcome,
      ),
    ),
    "",
    "## Profiles",
    `- [LinkedIn](${profile.links.linkedin})`,
    `- [GitHub](${profile.links.github})`,
    `- [Instagram](${profile.links.instagram})`,
    "",
    "## Machine-readable",
    `- [Sitemap](${absoluteSiteUrl("/sitemap.xml")})`,
    `- [Full LLM context](${absoluteSiteUrl("/llms-full.txt")})`,
    `- [CV PDF](${absoluteSiteUrl(profile.resume.href)})`,
  ];

  return `${lines.join("\n")}\n`;
}

export function generateLlmsFullTxt(): string {
  const lines = [
    `# ${profile.name} · ${profile.brand.name}`,
    "",
    `> ${profile.meta.description}`,
    "",
    "## Identity",
    `- Name: ${profile.name}`,
    `- Role: ${profile.role}`,
    `- Location: ${profile.hero.locationLine}`,
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phoneDisplay}`,
    `- Site: ${profile.brand.siteUrl}`,
    "",
    "## Summary",
    profile.about.tagline,
    "",
    profile.tenure,
    "",
    "## Services",
    ...profile.services.items.map(
      (service) =>
        `### ${service.title}\n${service.hook}\n${service.overview}\nURL: ${absoluteSiteUrl(`/services/${service.id}`)}`,
    ),
    "",
    "## Featured work",
    ...featuredProjects().map(
      (project) =>
        `### ${project.name}\n${project.hook}\n${project.detail}\nOutcome: ${project.outcome}\n${"href" in project && project.href ? `URL: ${project.href}` : ""}`.trim(),
    ),
    "",
    "## Experience",
    ...profile.experience.map(
      (job) => `### ${job.company} · ${job.title}\n${job.period}\n${job.highlights[0] ?? ""}`,
    ),
    "",
    "## Toolkit highlights",
    ...Object.entries(profile.skills).map(
      ([group, items]) => `### ${group}\n${items.join(", ")}`,
    ),
    "",
    "## FAQ",
    ...profile.seo.faq.map((item) => `### ${item.question}\n${item.answer}`),
    "",
    "## All routes",
    ...sitemapRoutes.map((route) => `- ${route.label}: ${absoluteSiteUrl(route.path)}`),
    "",
    "## Brief checklist",
    ...profile.briefIncludes.map((item) => `- ${item}`),
  ];

  return `${lines.join("\n\n")}\n`;
}
