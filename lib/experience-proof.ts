/** Experience page narratives. Keys match profile.experience[].company. */
export const experienceProof = {
  "Bespoke Marketing": {
    problem:
      "The company needed a multi-product lane across GCC: marketplace, crisis systems, property and business sales, video-first hiring, plus CRMs that keep up with the business.",
    decision:
      "I engineered and launched RentIt Bahrain and Crisis Pass, then kept building SellIt GCC and HireMe GCC on a gluestack Turbo Repo with Python FastAPI. HireMe adds privacy controls and AI-assisted features. CRM scale, localization, and marketing automation stay in the same lane.",
    outcome:
      "RentIt is live in Bahrain with expansion architecture in motion. Crisis Pass, SellIt, and HireMe ship as public GCC products. FastAPI services and automation keep pace with the work.",
    owned: ["RentIt", "Crisis Pass", "SellIt", "HireMe", "FastAPI"],
    signals: ["gluestack Turbo Repo", "SellIt GCC", "HireMe + AI", "Python FastAPI"],
    links: [
      { label: "RentIt", href: "https://rentit-bh.com/" },
      { label: "HireMe", href: "https://hireme-gcc.com/" },
      { label: "SellIt", href: "https://sellit-gcc.com/" },
      { label: "Crisis Pass", href: "https://crisispass.com/" },
    ],
  },
  "Nordic Holdings": {
    problem:
      "Tenants needed intelligence and automation in production, not a demo-layer AI add-on.",
    decision:
      "I architected multi-tenant SaaS on NestJS, Next.js, and Turbo Repos, then wired LLM flows to n8n pipelines and Ollama agents with local model infrastructure.",
    outcome:
      "Reporting and data-processing steps became automated while API spend and privacy risk dropped.",
    owned: ["Platform", "AI integration", "Workflow automation", "DevOps"],
    signals: ["NestJS + Next.js", "Turbo repos", "PostgreSQL + Docker/AWS"],
  },
  "Fathom Media": {
    problem:
      "Client products were shipping fast but needed reliability and performance hardening under real usage.",
    decision:
      "I delivered full-stack features on Laravel, Vue, Nuxt, and Supabase while adding focused security and performance passes.",
    outcome:
      "High-profile client products shipped with tighter response, cleaner stability, and fewer post-launch surprises.",
    owned: ["Full stack delivery", "Security hardening", "Performance tuning"],
    signals: ["Laravel ecosystem", "Vue/Nuxt", "Supabase"],
  },
  "SayG W.L.L": {
    problem:
      "Legacy-heavy systems had to scale while preserving data integrity across demanding SQL estates.",
    decision:
      "I evolved backends on Laravel, Symfony, and Yii2 and formalized deployments on AWS plus VPS pipelines.",
    outcome:
      "Core services stayed stable under load while database performance and consistency improved.",
    owned: ["Backend architecture", "Database performance", "Deployment pipelines"],
    signals: ["MS SQL + MySQL", "AWS + VPS", "Framework modernization"],
  },
  "Contrive Solutions": {
    problem:
      "Delivery needed leadership during the transition from monolith patterns to service-oriented systems.",
    decision:
      "I ran project flow, mentored engineers, and shipped production paths on AWS with Laravel, Vue, and React.",
    outcome:
      "Team output became more predictable while architecture moved toward cleaner service boundaries.",
    owned: ["Team leadership", "System design", "Production delivery"],
    signals: ["Microservice transition", "AWS S3/EC2", "Cross-stack shipping"],
  },
  "Code Talker Innovations": {
    problem:
      "Core product surfaces needed fast, reliable web feature delivery on a young codebase.",
    decision:
      "I focused on backend fundamentals, schema quality, and dependable Laravel implementation.",
    outcome:
      "Core functionality shipped on a stable foundation that later teams could build on.",
    owned: ["Backend implementation", "Database schema design"],
    signals: ["PHP + Laravel", "MySQL", "Feature velocity"],
  },
} as const;

export type ExperienceProofCompany = keyof typeof experienceProof;
