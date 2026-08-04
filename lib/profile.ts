export const profile = {
  name: "Haroon Abid Awan",
  role: "Senior Full Stack & AI Enabled Automation Engineer",
  /** Quiet credibility line under the role. Facts from CV.md. */
  tenure:
    "Shipping software and web solutions at Bespoke Marketing. Five-plus years of enterprise backends, SaaS, and automation that still runs at 2 a.m.",
  location: "Manama, Bahrain",
  availability: "Open to relocate",
  phoneDisplay: "+973 37327569",
  phoneTel: "+97337327569",
  /** Same number. Opens WhatsApp chat. */
  whatsapp: "https://wa.me/97337327569",
  email: "haroon.abid.1999@gmail.com",
  /** Unified primary CTA across Title, About, Timeline, Frames, Contact. */
  cta: {
    label: "Send a brief",
    subject: "Project brief",
  },
  briefIncludes: [
    "What you are building or fixing",
    "Timeline and constraints",
    "Stack preferences, if any",
    "How success looks in 30 days",
  ],
  resume: {
    href: "/resume/haroon-abid-awan-cv.pdf",
    downloadName: "Haroon-Abid-Awan-CV.pdf",
  },
  links: {
    github: "https://github.com/haroonabidawan",
    linkedin: "https://www.linkedin.com/in/haroonabidawan/",
    instagram: "https://www.instagram.com/haroonabidawan/",
    facebook: "https://www.facebook.com/haroonabidawan/",
  },
  /** About page: one hook, then facts. CV.md is the source of truth. */
  about: {
    hook: "Most of what I build never makes the marquee.",
    who: {
      title: "Who",
      body: "Senior Full Stack and AI Enabled Automation Engineer based in Manama, Bahrain. Open to relocate. Five-plus years shipping enterprise backends, SaaS, and automation that still runs when the room is empty.",
    },
    shipping: {
      title: "What I ship now",
      body: "At Bespoke Marketing I engineered and launched RentIt Bahrain, with scaling and localization in motion for KSA and GCC. I built and shipped Crisis Pass for high-availability crisis workflows. SellIt GCC is the investment properties and businesses marketplace. HireMe GCC is the video-first recruitment product with privacy controls and AI-assisted features. Both run on a gluestack Turbo Repo with Python FastAPI. I also scale internal CRMs and wire intelligent automation across marketing data pipelines.",
    },
    how: {
      title: "How I work",
      lines: [
        "I own the slice I promise: schema, APIs, deploy, and the awkward edge cases in between.",
        "AI lands in the product when it cuts real work. Privacy and API cost stay in the first cut, not a panic pass before launch.",
        "I write and ship so the next person in the chair is not guessing my intent.",
      ],
    },
    bases: {
      title: "Home bases",
      body: "Laravel, NestJS, and Python FastAPI carry the backend miles. gluestack and Turbo Repos shape the product frontends I ship at Bespoke. n8n and Ollama are where automation and local AI earn their keep. React, Next.js, Vue, Nuxt, PostgreSQL, Redis, Docker, and AWS show up when the product asks for them.",
    },
  },
  /** Contact scene: concrete offers, no vague “let’s chat”. */
  openTo: {
    title: "What I am open to.",
    items: [
      "Senior or lead full-stack roles with real ownership over backend and product shape.",
      "Contract or project spikes: NestJS, Laravel, or FastAPI cores, gluestack / Turbo Repo products, multi-tenant SaaS, or n8n and Ollama automation.",
      "Teams that care about shipping, documentation, and the bill when the LLM vendor changes pricing.",
    ],
  },
  /** Skill groups mirror CV.md; Vue/Nuxt kept from Fathom delivery. */
  skills: {
    "AI-enabled automation": [
      "n8n",
      "Ollama",
      "AI-driven feature development",
      "prompt engineering",
      "agentic workflows",
    ],
    "Full stack": [
      "PHP (Laravel, Symfony, Yii2)",
      "Node.js (NestJS)",
      "Python (FastAPI)",
      "React",
      "Next.js",
      "TypeScript",
      "gluestack",
      "Vue.js",
      "Nuxt.js",
    ],
    "Databases & ORMs": [
      "PostgreSQL",
      "MySQL",
      "MS SQL",
      "Prisma",
      "Drizzle",
      "Supabase",
      "Redis",
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, RDS, Lambda, SQS, SES)",
      "Docker",
      "CI/CD",
      "Coolify",
      "WHM / cPanel",
    ],
    "Architecture & tools": [
      "Microservices",
      "Multi-tenancy",
      "REST & GraphQL",
      "WebSockets",
      "RabbitMQ",
      "Keycloak (SSO)",
      "Turbo Repos",
      "Git",
      "Postman",
    ],
    "Payment gateways": [
      "Benefit",
      "Stripe",
      "PayPal",
      "CardKnox",
      "EasyPay",
      "Credimax",
      "Tap Payments",
    ],
  },
  /** Experience bullets: CV.md is the source of truth. */
  experience: [
    {
      company: "Bespoke Marketing",
      title: "Senior Software Engineer",
      period: "Feb 2026 to present",
      highlights: [
        "RentIt Marketplace (rentit-bh.com): engineered and launched RentIt Bahrain; architecting scaling, localization, and database structures for KSA and GCC expansion.",
        "Crisis Pass: developed and launched Crisis Pass (crisispass.com) with secure, high-availability architecture and rigid data validation.",
        "SellIt GCC (sellit-gcc.com): building Sell-It GCC, an EN/AR marketplace for investment properties and businesses across the GCC, on a gluestack Turbo Repo with Python FastAPI services.",
        "HireMe GCC (hireme-gcc.com): building HireMe GCC, a video-first recruitment platform with privacy controls and AI-assisted features, on the same gluestack Turbo Repo and FastAPI stack.",
        "Internal CRMs: developing, optimizing, and scaling internal CRM systems for growing data volumes and business logic.",
        "Platform stack: day-to-day delivery on gluestack + Turbo Repo frontends with Python FastAPI backends across Bespoke product lines.",
        "Automation: integrating full-stack business workflows and intelligent automation across marketing data pipelines.",
      ],
    },
    {
      company: "Nordic Holdings",
      title: "Senior Software Engineer",
      period: "Aug 2025 to Jan 2026",
      highlights: [
        "Architected a scalable multi-tenant SaaS platform using NestJS, Next.js, and Turbo Repos.",
        "Product AI: integrated core LLM capabilities for intelligent tenant data processing.",
        "Automation: engineered n8n pipelines and Ollama agents for Markdown reporting and Monday.com sync.",
        "Efficiency: deployed local AI infrastructure to cut API spend and keep sensitive data private.",
        "DevOps: managed multi-tenant PostgreSQL and CI/CD pipelines via Docker and AWS.",
      ],
    },
    {
      company: "Fathom Media",
      title: "Web & App Developer",
      period: "Apr 2025 to Aug 2025",
      highlights: [
        "Delivered full-stack solutions using Laravel, Vue.js, Nuxt.js, and Supabase for high-profile clients.",
        "Secured and optimized client applications through security hardening and performance tuning.",
      ],
    },
    {
      company: "SayG W.L.L",
      title: "Senior Software Engineer",
      period: "Jul 2023 to Mar 2025",
      highlights: [
        "Engineered scalable backends on Laravel, Symfony, and Yii2 with AWS and VPS deployment pipelines.",
        "Optimized data integrity and performance across complex MS SQL and MySQL estates.",
      ],
    },
    {
      company: "Contrive Solutions",
      title: "Sub-Team Lead",
      period: "Nov 2021 to Jun 2023",
      highlights: [
        "Led project workflows and mentored developers while transitioning monoliths to microservices.",
        "Deployed on AWS (S3, EC2) and shipped production work with Laravel, Vue.js, and React.",
      ],
    },
    {
      company: "Code Talker Innovations",
      title: "Associate Software Engineer",
      period: "Aug 2020 to Oct 2021",
      highlights: [
        "Developed core web features and database schemas with PHP, Laravel, and MySQL.",
      ],
    },
  ],
  /** Projects: CV.md facts, cinematic framing on top. Public href when live. */
  projects: [
    {
      name: "HireMe GCC",
      tag: "Product",
      featured: true,
      status: "Shipping · Bespoke",
      href: "https://hireme-gcc.com/",
      still: "/stills/hireme.webp",
      hook: "Job boards burn candidates. Privacy dies first.",
      detail:
        "Video-first recruitment for the GCC with stealth presence, employer blocklists, ghost mode, and AI-assisted product features on a gluestack Turbo Repo with FastAPI.",
      stack: ["gluestack", "Turbo Repo", "FastAPI", "AI features"],
      outcome: "Live at hireme-gcc.com. Candidates stay in control. Verified employers come to them.",
    },
    {
      name: "SellIt GCC",
      tag: "Product",
      featured: true,
      status: "Shipping · Bespoke",
      href: "https://sellit-gcc.com/",
      still: "/stills/sellit.webp",
      hook: "Investment properties and businesses across the GCC needed one EN/AR marketplace, not a spreadsheet trail.",
      detail:
        "Building Sell-It GCC on the same gluestack Turbo Repo and Python FastAPI services that carry HireMe.",
      stack: ["gluestack", "Turbo Repo", "FastAPI", "EN/AR"],
      outcome: "Live at sellit-gcc.com. Properties and businesses listed for regional buyers.",
    },
    {
      name: "Crisis Pass",
      tag: "Product",
      featured: true,
      status: "Shipped · Bespoke",
      href: "https://crisispass.com/",
      still: "/stills/crisispass.webp",
      hook: "Expatriates needed an evacuation plan before the crisis, not after the airport board went red.",
      detail:
        "Secure, high-availability architecture with rigid data validation for crisis preparedness and evacuation support across Bahrain and the wider Middle East.",
      stack: ["High availability", "Data validation", "Membership"],
      outcome: "Live at crisispass.com. Real human support wired into a product that has to hold under pressure.",
    },
    {
      name: "RentIt Bahrain",
      tag: "Product",
      featured: true,
      status: "Shipped · Expanding",
      href: "https://rentit-bh.com/",
      still: "/stills/rentit.webp",
      hook: "A rental marketplace had to launch in Bahrain and stay ready for KSA and GCC scale.",
      detail:
        "Engineered and launched RentIt Bahrain. Now architecting scaling, localization, and database structures for regional expansion.",
      stack: ["Marketplace", "Localization", "GCC scale"],
      outcome: "Live at rentit-bh.com. Direct landlord rentals, expanding toward KSA and the GCC.",
    },
    {
      name: "Bahrain Artistic Framing Center",
      tag: "Freelance",
      status: "Shipped",
      href: "https://bahrainartframing.com/",
      still: "/stills/bafc.webp",
      hook: "A gallery and framing house needed a site that carried the craft, not a template.",
      detail:
        "End-to-end freelance delivery for Bahrain Artistic Framing Center: brand surface, gallery presence, and the full site path from first paint to launch.",
      stack: ["Next.js", "TypeScript", "Brand UI"],
      outcome: "Live at bahrainartframing.com. A Bahrain art and framing house with a proper front door.",
    },
    {
      name: "Shafiq Glass & Aluminum",
      tag: "Freelance",
      status: "Shipped · 2025",
      href: "https://www.shafiqglass.com/",
      still: "/stills/shafiq.webp",
      hook: "Nearly twenty years of glass and aluminum work. The web still looked like a brochure from another decade.",
      detail:
        "Freelance rebuild for Shafiq Glass: services, facilities story, featured projects, and a clear path to request a consultation.",
      stack: ["Next.js", "TypeScript", "Marketing site"],
      outcome: "Live at shafiqglass.com. Precision and scale readable before the first site visit.",
    },
    {
      name: "Sheema Framing & Art Gallery",
      tag: "Freelance",
      status: "In the oven",
      href: "https://sheemaframing.com/",
      still: "/stills/sheema.webp",
      hook: "Original art and custom framing since 1989. The site had to feel like walking the gallery floor.",
      detail:
        "Ongoing freelance build: paintings, events, products, and contact flows for Sheema Framing & Art Gallery in Bahrain.",
      stack: ["Next.js", "TypeScript", "CMS-ready"],
      outcome: "Live and still cooking. Categories and featured work fill as the gallery publishes.",
    },
    {
      name: "AI-Agent Reporter",
      tag: "Automation",
      still: "/stills/ai-agent-reporter.webp",
      hook: "When the data moves, the report follows.",
      detail:
        "A custom n8n workflow triggers on data updates, uses an LLM to interpret instructions, generates `.md` reports, and pushes updates into project management tools.",
      stack: ["n8n", "LLM", "Markdown", "PM tooling"],
      outcome: "Reporting that keeps up with the database without another human in the loop.",
    },
    {
      name: "Awal Gas",
      tag: "Operations",
      href: "https://awaligas.com/",
      still: "/stills/awal-gas.webp",
      hook: "Cylinders, orders, and maintenance in one stack.",
      detail:
        "Comprehensive API and admin panel for a cylinder ordering and maintenance service app.",
      stack: ["Laravel", "API design", "Admin UI"],
      outcome: "Fewer phone tags between dispatch, customers, and the warehouse.",
    },
    {
      name: "ForwardChess",
      tag: "Identity",
      href: "https://forwardchess.com/",
      still: "/stills/forwardchess.webp",
      hook: "One login, two surfaces.",
      detail:
        "SSO between Laravel and WordPress to unify user authentication across platforms.",
      stack: ["Laravel", "WordPress", "SSO"],
      outcome: "One account path across the product and the content site. Live at forwardchess.com.",
    },
    {
      name: "Vogue Boutique",
      tag: "Commerce",
      href: "https://voguebahrain.com/",
      still: "/stills/vogue-boutique.webp",
      hook: "Checkout that respects local rails.",
      detail:
        "Full-featured e-commerce platform with Benefit and Easy Pay payment integrations.",
      stack: ["Laravel", "Benefit", "EasyPay", "E-commerce"],
      outcome: "Sales flow aligned with local gateways. Live at voguebahrain.com.",
    },
    {
      name: "Sunshine Meat Market",
      tag: "Retail",
      href: "https://sunshinemeatmarket.com/",
      still: "/stills/sunshine-meat-market.webp",
      hook: "Web orders meet the kitchen screen.",
      detail:
        "End-to-end grocery system connecting web orders to a desktop-managed kitchen display.",
      stack: ["Web", "Desktop display", "Order pipeline"],
      outcome: "The line stays in sync with the cart. Live at sunshinemeatmarket.com.",
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
    "English (Fluent, near-native)",
    "Urdu (Native)",
    "Punjabi (Native)",
  ],
} as const;
