/** Carbon Trail accent for icon badges (`--text-accent`). */
export const TECH_ICON_COLOR = "90C0A0";

const BADGE_LABEL_COLOR = "0C0C0C";
const BADGE_COLOR = "3A5A40";
const BADGE_ROADMAP_COLOR = "252525";

const TECH_ICON_SLUGS: Record<string, string> = {
  n8n: "n8n",
  Ollama: "ollama",
  "AI-driven feature development": "openai",
  "prompt engineering": "openai",
  "agentic workflows": "n8n",
  "PHP (Laravel, Symfony, Yii2)": "php",
  "Node.js (NestJS)": "nodedotjs",
  "Python (FastAPI)": "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  "C#": "csharp",
  React: "react",
  "Next.js": "nextdotjs",
  "Vue.js": "vuedotjs",
  "Nuxt.js": "nuxtdotjs",
  gluestack: "react",
  "Tailwind CSS": "tailwindcss",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "MS SQL": "microsoftsqlserver",
  Prisma: "prisma",
  Drizzle: "prisma",
  Supabase: "supabase",
  Redis: "redis",
  "AWS (EC2, S3, RDS, Lambda, SQS, SES)": "amazonaws",
  Docker: "docker",
  "CI/CD": "githubactions",
  "GitHub Actions": "githubactions",
  "GitLab CI": "gitlab",
  Coolify: "docker",
  Traefik: "traefik",
  Nginx: "nginx",
  Linux: "linux",
  "WHM / cPanel": "cpanel",
  Microservices: "docker",
  "Multi-tenancy": "amazonaws",
  "REST APIs": "swagger",
  WebSockets: "socketdotio",
  "Socket.io": "socketdotio",
  RabbitMQ: "rabbitmq",
  "Turbo Repos": "turborepo",
  "Swagger / OpenAPI": "swagger",
  Git: "git",
  Postman: "postman",
  "Keycloak (SSO)": "keycloak",
  "OAuth 2.0": "auth0",
  JWT: "auth0",
  "SSL/TLS": "letsencrypt",
  "Zero-trust patterns": "cloudflare",
  Benefit: "stripe",
  Stripe: "stripe",
  PayPal: "paypal",
  CardKnox: "stripe",
  EasyPay: "stripe",
  Credimax: "stripe",
  "Tap Payments": "stripe",
  AFS: "stripe",
  Jest: "jest",
  PHPUnit: "php",
  "Laravel Pint": "laravel",
  "CI/CD pipelines": "githubactions",
  Kubernetes: "kubernetes",
  "Apache Kafka": "apachekafka",
  Terraform: "terraform",
  "RAG systems": "openai",
  "vector databases": "pinecone",
  LlamaIndex: "meta",
  LangChain: "langchain",
  "scikit-learn": "scikitlearn",
};

const BADGE_SHORT_LABELS: Record<string, string> = {
  "PHP (Laravel, Symfony, Yii2)": "PHP",
  "Node.js (NestJS)": "Node.js",
  "Python (FastAPI)": "Python",
  "AWS (EC2, S3, RDS, Lambda, SQS, SES)": "AWS",
  "Keycloak (SSO)": "Keycloak",
  "Swagger / OpenAPI": "OpenAPI",
  "AI-driven feature development": "AI features",
  "prompt engineering": "Prompts",
  "agentic workflows": "Agentic",
  "Zero-trust patterns": "Zero trust",
  "CI/CD pipelines": "CI/CD",
  "vector databases": "Vector DB",
  "RAG systems": "RAG",
  "WHM / cPanel": "cPanel",
  "Tap Payments": "Tap Pay",
};

/** Category header icons on Toolkit. */
export const CATEGORY_ICON_SLUGS: Record<string, string> = {
  "AI-enabled automation": "openai",
  "Full stack": "react",
  "Databases & ORMs": "postgresql",
  "Cloud & DevOps": "docker",
  "Architecture & messaging": "rabbitmq",
  "Security & auth": "keycloak",
  "Payment gateways": "stripe",
  "Testing & quality": "jest",
  "Planning to learn next": "kubernetes",
};

export function getTechIconSlug(label: string): string | undefined {
  return TECH_ICON_SLUGS[label];
}

export function getTechBadgeShortLabel(label: string): string {
  return BADGE_SHORT_LABELS[label] ?? label;
}

/** Shields.io badge URL. Renders reliably on GitHub README. */
export function getTechBadgeUrl(label: string, roadmap = false): string {
  const slug = getTechIconSlug(label);
  const short = getTechBadgeShortLabel(label);
  const color = roadmap ? BADGE_ROADMAP_COLOR : BADGE_COLOR;
  const text = encodeURIComponent(short.replace(/ /g, "_"));
  const params = new URLSearchParams({
    style: "flat-square",
    labelColor: BADGE_LABEL_COLOR,
    logoColor: TECH_ICON_COLOR,
  });
  if (slug) params.set("logo", slug);
  return `https://img.shields.io/badge/${text}-${color}?${params.toString()}`;
}

/** @deprecated Use getTechBadgeUrl for GitHub. Kept for simple icon fallbacks. */
export function getTechIconUrl(label: string): string | undefined {
  const slug = getTechIconSlug(label);
  if (!slug) return undefined;
  return `https://cdn.simpleicons.org/${slug}/${TECH_ICON_COLOR}`;
}

export function getCategoryIconUrl(category: string): string | undefined {
  const slug = CATEGORY_ICON_SLUGS[category];
  if (!slug) return undefined;
  return getTechBadgeUrl(category);
}

export function readmeTechBadge(label: string, roadmap = false): string {
  const url = getTechBadgeUrl(label, roadmap);
  return `[![${label}](${url})](https://haroonabidawan.com/toolkit "${label}")`;
}

export function readmeTechRow(labels: readonly string[], roadmap = false): string {
  return labels.map((label) => readmeTechBadge(label, roadmap)).join(" ");
}
