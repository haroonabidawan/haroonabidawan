"use client";

import { motion, useReducedMotion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
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

function Beat({
  label,
  body,
}: {
  label: string;
  body: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{label}</p>
      <p className="mt-1.5 text-base font-normal leading-relaxed text-secondary-foreground">
        {body}
      </p>
    </div>
  );
}

export default function WorkPage() {
  const reduceMotion = useReducedMotion();

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
          Problem. Decision. Outcome. Read top to bottom.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {jobs.length} roles
        </p>
      </motion.div>

      <ol className="relative mx-auto w-full max-w-3xl list-none text-left">
        {/* Spine */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-2 left-[0.6875rem] top-2 w-px origin-top bg-border md:left-[0.9375rem]"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: CINEMA }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-2 left-[0.6875rem] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent/40 to-transparent md:left-[0.9375rem]"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.4, delay: reduceMotion ? 0 : 0.15, ease: CINEMA }}
        />

        {jobs.map((job, i) => {
          const proof = proofByCompany[job.company];
          const current = i === 0;

          return (
            <motion.li
              key={job.company + job.period}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
                ease: CINEMA,
              }}
              className="relative pb-10 pl-10 last:pb-2 md:pl-14"
            >
              {/* Node on the spine */}
              <span
                aria-hidden="true"
                className={[
                  "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border md:left-1 md:h-7 md:w-7",
                  current
                    ? "border-accent bg-accent/25 shadow-[0_0_20px_color-mix(in_oklab,var(--accent)_35%,transparent)]"
                    : "border-border bg-background",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2 w-2 rounded-full md:h-2.5 md:w-2.5",
                    current ? "bg-accent" : "bg-secondary-foreground/50",
                  ].join(" ")}
                />
              </span>

              <article className="rounded-xl border border-border bg-card/40">
                <div className="flex flex-col gap-2 border-b border-border px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                      {current ? " · Current" : ""}
                    </p>
                    <h2 className="mt-1 font-sans text-lg font-semibold leading-tight text-foreground">
                      {job.company}
                    </h2>
                    <p className="mt-0.5 font-wordmark text-sm text-secondary-foreground md:text-base">
                      {job.title}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-secondary-foreground sm:pt-1">
                    {job.period}
                  </p>
                </div>

                <div className="space-y-4 px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proof.owned.map((scope) => (
                      <span
                        key={scope}
                        className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-secondary-foreground"
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

                  <div className="border-t border-border pt-3">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-secondary-foreground">
                      Signals
                    </p>
                    <p className="mt-1.5 text-base font-normal leading-relaxed text-secondary-foreground">
                      {proof.signals.join(" · ")}
                    </p>
                  </div>

                  {proof.links && proof.links.length > 0 ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-3">
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
              </article>
            </motion.li>
          );
        })}
      </ol>

      <SceneOutro
        links={[
          { href: "/frames", label: "See the work" },
          { href: "/toolkit", label: "Toolkit" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
