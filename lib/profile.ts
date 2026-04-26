export const profile = {
  name: "Haroon Abid Awan",
  role: "Senior Full Stack & AI-Enabled Automation Engineer",
  /** Quiet credibility line under the role. */
  tenure:
    "Leading all technology at Bespoke Marketing today. Before that, five years of enterprise backends, SaaS, and automation that still runs at 2 a.m.",
  location: "Manama, Bahrain",
  availability: "Open to relocate",
  phoneDisplay: "+973 37327569",
  phoneTel: "+97337327569",
  email: "haroon.abid.1999@gmail.com",
  links: {
    github: "https://github.com/haroonabidawan",
    linkedin: "https://www.linkedin.com/in/haroonabidawan/",
  },
  /** Cinematic positioning: intrigue first, facts land quietly. */
  positioning: {
    lead: "Most of what I build never makes the marquee.",
    body: "Multi-tenant SaaS, automation that survives real traffic, and AI folded into products where privacy still matters. Laravel and NestJS are home bases. n8n and Ollama are where the kitchen gets interesting.",
  },
  /** Second beat: plain-language stake from the CV, rewritten for this frame. */
  snapshot: {
    title: "The short version.",
    body: "I architect scalable products, pick up new stacks without drama, and treat AI as a tool in the stack, not a headline. PHP and Node are where I have the most miles. LLMs land in SaaS when tenants need real intelligence, not a demo. n8n and Ollama are how I wire self-optimizing workflows when API bills and data residency matter.",
  },
  /** Third beat: how collaboration feels. */
  principles: {
    title: "How I work with a crew.",
    lines: [
      "I own the slice I promise: schema, APIs, deploy, and the awkward edge cases in between.",
      "Security and performance belong in the first cut, not a panic pass before launch.",
      "I write and ship so the next person in the chair is not guessing my intent.",
      "I mentor when the room needs leveling up, not when my ego needs a stage.",
    ],
  },
  /** Contact scene: concrete offers, no vague “let’s chat”. */
  openTo: {
    title: "What I am open to.",
    items: [
      "Senior or lead full-stack roles with real ownership over backend and product shape.",
      "Contract or project spikes: NestJS or Laravel cores, multi-tenant SaaS, or n8n and Ollama automation.",
      "Teams that care about shipping, documentation, and the bill when the LLM vendor changes pricing.",
    ],
  },
  skills: {
    "AI & automation": [
      "n8n",
      "Ollama",
      "LLM integration",
      "prompt design",
      "agentic workflows",
      "AI-driven product features",
    ],
    "Full stack": [
      "PHP (Laravel, Symfony, Yii2)",
      "Node.js (NestJS)",
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "TypeScript",
    ],
    "Data & persistence": [
      "PostgreSQL",
      "MySQL",
      "MS SQL",
      "Prisma",
      "Drizzle",
      "Supabase",
      "Redis",
    ],
    "Cloud & delivery": [
      "AWS (EC2, S3, RDS, Lambda, SQS, SES)",
      "Docker",
      "CI/CD",
      "Coolify",
      "WHM / cPanel",
      "VPS operations",
    ],
    "Architecture": [
      "Microservices",
      "Multi-tenancy",
      "REST & GraphQL",
      "WebSockets",
      "RabbitMQ",
      "Keycloak (SSO)",
      "Turbo Repos",
    ],
    "Engineering tools": ["Git", "Postman"],
    "Payments": [
      "Benefit",
      "Stripe",
      "PayPal",
      "CardKnox",
      "EasyPay",
      "Credimax",
      "Tap Payments",
    ],
  },
  experience: [
    {
      company: "Bespoke Marketing",
      title: "Senior Software Engineer",
      period: "Feb 2026 to present",
      highlights: [
        "I lead everything in tech: architecture, delivery, tooling, vendors, and what ships next.",
        "Multi-tenant SaaS on NestJS, Next.js, and Turbo Repos.",
        "Product AI: embedded LLM flows so internal and client data gets processed with intelligence, not manual churn.",
        "n8n pipelines and Ollama agents for automated reporting, Monday.com sync, and repeatable workflows.",
        "Local AI infrastructure to control API spend and keep sensitive work off third-party models.",
        "Multi-tenant PostgreSQL and CI/CD on Docker and AWS in production.",
      ],
    },
    {
      company: "Nordic Holdings",
      title: "Senior Software Engineer",
      period: "Aug 2025 to Jan 2026",
      highlights: [
        "Architected a multi-tenant SaaS platform on NestJS, Next.js, and Turbo Repos.",
        "Product AI: embedded LLM flows so tenants could process data with intelligence, not manual churn.",
        "Built n8n pipelines and Ollama agents for Markdown reporting and Monday.com sync.",
        "Ran local AI infrastructure to cut API spend and keep sensitive data off third-party models.",
        "Operated multi-tenant PostgreSQL and CI/CD on Docker and AWS.",
      ],
    },
    {
      company: "Fathom Media",
      title: "Web & App Developer",
      period: "Apr 2025 to Aug 2025",
      highlights: [
        "Delivered full-stack work for high-profile clients on Laravel, Vue.js, Nuxt.js, and Supabase.",
        "Hardened and tuned applications so security and speed showed up where users actually feel them.",
      ],
    },
    {
      company: "SayG W.L.L",
      title: "Senior Software Engineer",
      period: "Jul 2023 to Mar 2025",
      highlights: [
        "Built and evolved backends on Laravel, Symfony, and Yii2 with AWS and VPS deployment pipelines.",
        "Protected data integrity and performance across heavy MS SQL and MySQL estates.",
      ],
    },
    {
      company: "Contrive Solutions",
      title: "Sub-Team Lead",
      period: "Nov 2021 to Jun 2023",
      highlights: [
        "Ran delivery and mentored developers while monoliths split toward microservices.",
        "Shipped on AWS (S3, EC2) with Laravel, Vue.js, and React in production.",
      ],
    },
    {
      company: "Code Talker Innovations",
      title: "Associate Software Engineer",
      period: "Aug 2020 to Oct 2021",
      highlights: [
        "Built core web features and database schemas on PHP, Laravel, and MySQL.",
      ],
    },
  ],
  projects: [
    {
      name: "AI-Agent Reporter",
      tag: "Automation",
      hook: "When the data moves, the report follows.",
      detail:
        "A custom n8n workflow watches data updates, lets an LLM read the brief, writes `.md` reports, and pushes status into project-management tools.",
      stack: ["n8n", "LLM", "Markdown", "PM tooling"],
      outcome: "Reporting that keeps up with the database without another human in the loop.",
    },
    {
      name: "Awal Gas",
      tag: "Operations",
      hook: "Cylinders, orders, and maintenance in one stack.",
      detail:
        "API surface and admin panel for cylinder ordering and field maintenance: the ops team and the app share one source of truth.",
      stack: ["Laravel", "API design", "Admin UI"],
      outcome: "Fewer phone tags between dispatch, customers, and the warehouse.",
    },
    {
      name: "ForwardChess",
      tag: "Identity",
      hook: "One login, two surfaces.",
      detail:
        "Single sign-on between Laravel and WordPress so members stop maintaining two identities for one brand.",
      stack: ["Laravel", "WordPress", "SSO"],
      outcome: "One account path across the product and the content site.",
    },
    {
      name: "Vogue Boutique",
      tag: "Commerce",
      hook: "Checkout that respects local rails.",
      detail:
        "Full e-commerce build with regional payment rails so checkout matches how people actually pay on the ground.",
      stack: ["Laravel", "Benefit", "EasyPay", "E-commerce"],
      outcome: "Sales flow aligned with local gateways, not a generic Stripe-only template.",
    },
    {
      name: "Sunshine Meat Market",
      tag: "Retail",
      hook: "Web orders meet the kitchen screen.",
      detail:
        "End-to-end grocery flow from web orders into a desktop-managed kitchen display so prep sees what the customer just bought.",
      stack: ["Web", "Desktop display", "Order pipeline"],
      outcome: "The line stays in sync with the cart.",
    },
    {
      name: "Image Shield",
      tag: "Security",
      hook: "Know where your images go.",
      detail:
        "Vue and Laravel platform that watches image usage through S3 bucket activity so leaks show up as signal, not rumors.",
      stack: ["Vue.js", "Laravel", "S3", "Monitoring"],
      outcome: "Visibility into asset misuse without combing logs by hand.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      school: "Virtual University of Pakistan",
      years: "2018 to 2022",
    },
    {
      degree: "Intermediate in Computer Science",
      school: "Govt. Post Graduate College, Chakwal",
      years: "2015 to 2018",
    },
  ],
  languages: [
    "English (native)",
    "Urdu (native)",
    "Punjabi (native)",
  ],
} as const;
