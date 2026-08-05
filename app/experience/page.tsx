"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { ZigZagTrail } from "@/components/zigzag-trail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const jobs = profile.experience;
const proofByCompany: Record<
  string,
  {
    problem: string;
    decision: string;
    outcome: string;
    owned: readonly string[];
    signals: readonly string[];
    links?: readonly { label: string; href: string }[];
  }
> = {
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
};

function Beat({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{label}</p>
      <p className="mt-1.5 text-base font-normal leading-relaxed text-secondary-foreground">
        {body}
      </p>
    </div>
  );
}

function TrailCard({
  index,
  face,
  current,
  children,
}: {
  index: number;
  face: "left" | "right";
  current?: boolean;
  children: ReactNode;
}) {
  return (
    <article
      className={[
        "relative overflow-hidden border border-border/80 bg-card/30",
        "before:absolute before:inset-y-3 before:w-px before:bg-accent/70",
        face === "left"
          ? "before:left-0 md:before:left-auto md:before:right-0"
          : "before:left-0",
      ].join(" ")}
    >
      {children}
      {current ? (
        <span className="absolute right-3 top-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
          Current
        </span>
      ) : null}
      <span className="sr-only">Stop {index}</span>
    </article>
  );
}

export default function ExperiencePage() {
  const reduceMotion = useReducedMotion();

  const stops = jobs.map((job, i) => {
    const proof = proofByCompany[job.company];
    const current = i === 0;
    const face = i % 2 === 0 ? ("left" as const) : ("right" as const);

    return {
      id: job.company + job.period,
      lead: current,
      children: (
        <TrailCard index={i + 1} face={face} current={current}>
          <div className="border-b border-border/70 px-5 py-4 md:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
              {job.company}
            </h2>
            <p className="mt-0.5 font-wordmark text-sm text-secondary-foreground md:text-base">
              {job.title}
            </p>
            <p className="mt-2 font-mono text-xs text-secondary-foreground">{job.period}</p>
          </div>

          <div className="space-y-4 px-5 py-4 md:px-6">
            <div className="flex flex-wrap gap-1.5">
              {proof.owned.map((scope) => (
                <span
                  key={scope}
                  className="border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {scope}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <Beat label="Problem" body={proof.problem} />
              <Beat label="Decision" body={proof.decision} />
              <Beat label="Outcome" body={proof.outcome} />
            </div>

            <div className="border-t border-border/70 pt-3">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-secondary-foreground">
                Signals
              </p>
              <p className="mt-1.5 text-base font-normal leading-relaxed text-secondary-foreground">
                {proof.signals.join(" · ")}
              </p>
            </div>

            {proof.links && proof.links.length > 0 ? (
              <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border/70 pt-3">
                {proof.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center font-wordmark text-sm text-accent underline-offset-4 transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </TrailCard>
      ),
    };
  });

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: CINEMA }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <SceneMark kind="path" />
        <p className="type-eyebrow text-accent">Experience</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          Where trust was earned.
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">
          Problem. Decision. Outcome. Follow the trail.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {jobs.length} roles
        </p>
      </motion.div>

      <ZigZagTrail stops={stops} stopClassName="w-full md:max-w-lg" />

      <SceneOutro
        links={[
          { href: "/work", label: "See the work" },
          { href: "/services", label: "Services" },
          { href: "/toolkit", label: "Toolkit" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
