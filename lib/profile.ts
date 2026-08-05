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
  /** Unified primary CTA across home, About, Experience, Work, Contact. */
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
  repo: {
    url: "https://github.com/haroonabidawan/haroonabidawan",
    contributing:
      "https://github.com/haroonabidawan/haroonabidawan/blob/production/CONTRIBUTING.md",
  },
  /** About page: one hook, then facts. CV.md is the source of truth. */
  about: {
    hook: "Architecture first, features follow.",
    tagline: "Most of what I ship runs quietly in production.",
    focusAreas: [
      {
        title: "System design",
        body: "Enterprise shapes scoped before the first sprint. Trade-offs written plain.",
      },
      {
        title: "Infrastructure",
        body: "Fault-tolerant backends, deploy paths, and data layers that hold under load.",
      },
      {
        title: "Microservices",
        body: "Distributed systems with tenancy, APIs, and boundaries a team can extend.",
      },
      {
        title: "Technical planning",
        body: "Roadmaps and foundations you can brief against, not slide decks that age out.",
      },
      {
        title: "AI integration",
        body: "LLMs, automation, and local inference wired into products where they cut real work.",
      },
    ],
    who: {
      title: "Who",
      body: "Senior Full Stack and AI Enabled Automation Engineer based in Manama, Bahrain. From Pakistan. Open to relocate. Five-plus years shipping enterprise backends, SaaS, and automation that still runs when the room is empty.",
    },
    shipping: {
      title: "What I ship now",
      body: "At Bespoke Marketing I engineered and launched RentIt Bahrain, with scaling and localization in motion for KSA and GCC. I built and shipped Crisis Pass for high-availability crisis workflows. SellIt GCC is the investment properties and businesses marketplace. HireMe GCC is the video-first recruitment product with privacy controls and AI-assisted features. Both run on a gluestack Turbo Repo with Python FastAPI. I also scale internal CRMs and wire intelligent automation across marketing data pipelines.",
    },
    how: {
      title: "How I work",
      lines: [
        "I own the slice I promise: schema, APIs, deploy, and the awkward edge cases in between.",
        "Security by design: OAuth, Keycloak, JWT, and tenancy isolation when the product needs it.",
        "AI lands in the product when it removes real work. Privacy and API cost belong in the first release, not a late rework before launch.",
        "Documentation and handoff for the next engineer. No tribal knowledge traps.",
        "CI/CD and deploy paths that stay boring on purpose.",
        "I write and ship so the next engineer on the team is not guessing my intent.",
      ],
    },
    bases: {
      title: "Home bases",
      body: "Laravel, NestJS, and Python FastAPI carry the backend miles. gluestack and Turbo Repos shape the product frontends I ship at Bespoke. n8n and Ollama are where automation and local AI earn their keep. React, Next.js, Vue, Nuxt, PostgreSQL, Redis, Docker, and AWS show up when the product asks for them.",
    },
  },
  /** Contact page: concrete offers, no vague “let’s chat”. */
  openTo: {
    title: "What I am open to.",
    items: [
      "Senior or lead full-stack roles with real ownership over backend and product shape.",
      "Teams that care about shipping, documentation, and the bill when the LLM vendor changes pricing.",
      "Manama today. Open to relocate for the right role.",
    ],
  },
  /** Commercial lanes. Index + /services/[slug] detail. */
  services: {
    hook: "What I take on when the brief is real.",
    support: "Five lanes. One owner. From discovery to what still runs at midnight.",
    items: [
      {
        id: "consultancy",
        title: "Consultancy",
        hook: "Clear the scope before the first commit.",
        body: "Architecture, stack choice, and delivery shape when the room is still arguing. You leave with a clear build path, not another slide deck.",
        icon: "/services/consultancy.webp",
        overview:
          "Sometimes the expensive mistake is starting build before scope is clear. Consultancy covers system design, infrastructure choices, microservice boundaries, delivery planning, and where AI earns a seat. You leave with a build path, not another deck.",
        fits: [
          "The stack is undecided and the room is arguing from habit.",
          "Rewrite versus build needs a calm technical call.",
          "You want diligence before hiring a team or signing a vendor.",
          "Delivery risk is high and you need the weak points named early.",
        ],
        delivers: [
          "A recommended architecture with trade-offs written plain.",
          "A phased plan you can brief against.",
          "A risk list worth reading twice.",
          "A clear next brief so build does not restart the fog.",
        ],
        stack: ["NestJS", "Laravel", "FastAPI", "gluestack", "n8n", "PostgreSQL", "AWS"],
        proofIds: ["HireMe GCC", "SellIt GCC", "RentIt Bahrain", "Crisis Pass"],
      },
      {
        id: "websites",
        title: "Websites",
        hook: "A front door that earns the click.",
        body: "Marketing and product sites that ship clean. WordPress or a modern stack when the brief asks for it. Fast, calm, and easy for the next person to own.",
        icon: "/services/websites.webp",
        overview:
          "A site should carry the brand without apologizing. I ship marketing and product front doors that load clean, read calm, and hand off without mystery. Vogue Boutique is proof: Benefit and Easy Pay wired for local checkout, not a generic Stripe paste-in. WordPress stays in the lane when it is the right tool.",
        fits: [
          "Brand relaunch that needs a proper front door.",
          "Gallery, framing, or commerce presence that must feel intentional.",
          "A WordPress estate that needs discipline, not another plugin pile.",
          "You want a path for content owners after launch.",
        ],
        delivers: [
          "A shipped site on a stack that fits the brief.",
          "A clear content path for the people who update it.",
          "Performance basics that hold on real phones.",
          "Handoff notes so ownership does not live in my head.",
        ],
        stack: ["Next.js", "WordPress", "TypeScript", "Benefit", "Stripe"],
        proofIds: [
          "Bahrain Artistic Framing Center",
          "Shafiq Glass & Aluminum",
          "Sheema Framing & Art Gallery",
          "Vogue Boutique",
          "Sunshine Meat Market",
        ],
      },
      {
        id: "platforms",
        title: "Web platforms",
        hook: "Software people live in every day.",
        body: "SaaS, portals, and multi-tenant web platforms. Schemas, APIs, auth, and the dull reliability that keeps tenants quiet.",
        icon: "/services/platforms.webp",
        overview:
          "Platforms are not brochures. They are systems people open on a Tuesday morning and expect to work. I build SaaS, portals, and multi-tenant products where tenancy, APIs, and auth are in the first release, not a late rework before launch.",
        fits: [
          "Multi-tenant SaaS with real billing and real isolation needs.",
          "EN/AR product surfaces that share one platform core.",
          "Internal portals that need proper auth, not a shared password.",
          "You need schema and API ownership with a deploy path that sticks.",
        ],
        delivers: [
          "Schema and API core the team can extend.",
          "A tenancy model that survives the second customer.",
          "Admin surfaces for the people who operate the product.",
          "A deploy path that is boring on purpose.",
        ],
        stack: ["NestJS", "FastAPI", "Laravel", "gluestack", "Turbo Repo", "PostgreSQL", "Redis"],
        proofIds: ["HireMe GCC", "SellIt GCC", "RentIt Bahrain", "Crisis Pass"],
      },
      {
        id: "mobile",
        title: "Mobile apps",
        hook: "The pocket screen is only half the product.",
        body: "App-shaped products with the backends, auth, and integrations that make them real. Not a pretty shell over a missing API.",
        icon: "/services/mobile.webp",
        overview:
          "An app without a serious backend is a demo in a nicer case. Awal Gas is the pattern: cylinder ordering, maintenance flows, and an admin panel the ops team runs daily. I take on mobile-shaped products when the API contract, auth, and ops panel ship in the same brief as the screens.",
        fits: [
          "Field ops or ordering flows that live in the pocket.",
          "Consumer apps that need a release-ready backend.",
          "You already have screens, but the API story is missing.",
          "Admin and kitchen or ops panels must stay in sync with the app.",
        ],
        delivers: [
          "An API contract the client can trust.",
          "Auth that does not fall over at first scale.",
          "An admin or ops panel for the people behind the counter.",
          "A backend ready enough to ship beside the app.",
        ],
        stack: ["Laravel", "NestJS", "FastAPI", "REST APIs", "PostgreSQL", "MySQL"],
        proofIds: ["Awal Gas", "Sunshine Meat Market"],
      },
      {
        id: "custom",
        title: "Custom systems",
        hook: "When the template is the problem.",
        body: "Bespoke tools, CRMs, workflows, and the awkward glue between them. Built for your constraints, not a theme marketplace.",
        icon: "/services/custom.webp",
        overview:
          "Templates end where your edge cases begin. ForwardChess unified Laravel and WordPress with SSO when one login had to span two surfaces. Custom systems are for CRMs, automation glue, Keycloak estates, and workflows that refuse a marketplace theme.",
        fits: [
          "CRM or ops tools that have outgrown the plug-in aisle.",
          "Automation glue between tools that do not speak politely.",
          "SSO or auth that has to unify messy estates.",
          "Workflows and reporting that need local AI or careful spend control.",
        ],
        delivers: [
          "A working system under your constraints.",
          "Integrations that earn their keep.",
          "Ops notes for the people who run it at midnight.",
          "An ownership path that survives handoff.",
        ],
        stack: ["n8n", "Ollama", "Laravel", "NestJS", "Keycloak", "Docker", "AWS"],
        proofIds: ["AI-Agent Reporter", "ForwardChess"],
      },
    ],
  },
  /** Skill groups mirror CV.md and production stack. */
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
      "JavaScript",
      "TypeScript",
      "C#",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "gluestack",
      "Tailwind CSS",
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
      "GitHub Actions",
      "GitLab CI",
      "Coolify",
      "Traefik",
      "Nginx",
      "Linux",
      "WHM / cPanel",
    ],
    "Architecture & messaging": [
      "Microservices",
      "Multi-tenancy",
      "REST APIs",
      "WebSockets",
      "Socket.io",
      "RabbitMQ",
      "Turbo Repos",
      "Swagger / OpenAPI",
      "Git",
      "Postman",
    ],
    "Security & auth": [
      "Keycloak (SSO)",
      "OAuth 2.0",
      "JWT",
      "SSL/TLS",
      "Zero-trust patterns",
    ],
    "Payment gateways": [
      "Benefit",
      "Stripe",
      "PayPal",
      "CardKnox",
      "EasyPay",
      "Credimax",
      "Tap Payments",
      "AFS",
    ],
    "Testing & quality": [
      "Jest",
      "PHPUnit",
      "Laravel Pint",
      "CI/CD pipelines",
    ],
  },
  /** Not in production yet. Toolkit trail stop. */
  learningNext: [
    "Kubernetes",
    "Apache Kafka",
    "Terraform",
    "RAG systems",
    "vector databases",
    "LlamaIndex",
    "LangChain",
    "scikit-learn",
  ],
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
      cover: "/projects/hireme.webp",
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
      cover: "/projects/sellit.webp",
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
      cover: "/projects/crisispass.webp",
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
      cover: "/projects/rentit.webp",
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
      cover: "/projects/bafc.webp",
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
      cover: "/projects/shafiq.webp",
      hook: "Nearly twenty years of glass and aluminum work. The web still looked like a brochure from another decade.",
      detail:
        "Freelance rebuild for Shafiq Glass: services, facilities story, featured projects, and a clear path to request a consultation.",
      stack: ["Next.js", "TypeScript", "Marketing site"],
      outcome: "Live at shafiqglass.com. Precision and scale readable before the first site visit.",
    },
    {
      name: "Sheema Framing & Art Gallery",
      tag: "Freelance",
      status: "In progress",
      href: "https://sheemaframing.com/",
      cover: "/projects/sheema.webp",
      hook: "Original art and custom framing since 1989. The site had to feel like walking the gallery floor.",
      detail:
        "Ongoing freelance build: paintings, events, products, and contact flows for Sheema Framing & Art Gallery in Bahrain.",
      stack: ["Next.js", "TypeScript", "CMS-ready"],
      outcome: "Live and still expanding. Categories and featured work fill as the gallery publishes.",
    },
    {
      name: "AI-Agent Reporter",
      tag: "Automation",
      cover: "/projects/ai-agent-reporter.webp",
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
      cover: "/projects/awal-gas.webp",
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
      cover: "/projects/forwardchess.webp",
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
      cover: "/projects/vogue-boutique.webp",
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
      cover: "/projects/sunshine-meat-market.webp",
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
    "Arabic (learning)",
  ],
} as const;

export type ServiceId = (typeof profile.services.items)[number]["id"];

export type ServiceItem = (typeof profile.services.items)[number];

export function getServiceById(id: string): ServiceItem | undefined {
  return profile.services.items.find((item) => item.id === id);
}

export function getAdjacentServices(id: ServiceId): {
  prev: ServiceItem;
  next: ServiceItem;
} {
  const items = profile.services.items;
  const index = items.findIndex((item) => item.id === id);
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  return { prev, next };
}
