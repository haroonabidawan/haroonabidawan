"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
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
  }
> = {
  "Bespoke Marketing": {
    problem:
      "The business needed one technical owner across product, platform, and automation while delivery pressure kept rising.",
    decision:
      "I standardized the stack around NestJS, Next.js, multi-tenant PostgreSQL, and AI workflows with n8n plus Ollama for cost and privacy control.",
    outcome:
      "Roadmap, architecture, and shipping cadence moved through one accountable lane without slowing product velocity.",
    owned: ["Architecture", "Delivery", "Automation", "Infra"],
    signals: ["Multi-tenant SaaS", "CI/CD on Docker + AWS", "Local model infra"],
  },
  "Nordic Holdings": {
    problem:
      "Tenants needed intelligence and automation in production, not a demo-layer AI add-on.",
    decision:
      "I designed LLM-capable tenant flows and connected them to n8n pipelines plus Ollama agents with protected data paths.",
    outcome:
      "Reporting and data-processing steps became automated while API spend and privacy risk dropped.",
    owned: ["Platform", "AI integration", "Workflow automation", "DevOps"],
    signals: ["NestJS + Next.js", "Turbo repos", "PostgreSQL operations"],
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

export default function WorkPage() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-2xl shrink-0 pb-4"
      >
        <p className="type-eyebrow text-accent">Experience</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          The timeline where trust was earned.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Problem. Decision. Outcome.
        </p>
      </motion.div>

      <CardRail label={`${jobs.length} roles`}>
        {jobs.map((job, i) => {
          const proof = proofByCompany[job.company];
          return (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: CINEMA }}
              className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h2 className="font-sans text-sm font-semibold leading-tight text-foreground">
                      {job.company}
                    </h2>
                    {i === 0 && (
                      <span className="inline-flex items-center rounded-full bg-accent/15 px-1.5 py-0.5 font-mono text-[0.52rem] uppercase tracking-widest text-accent">
                        current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 font-wordmark text-[0.62rem] text-secondary-foreground">
                    {job.title}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-[0.55rem] text-muted-foreground">
                  {job.period}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
                <div className="flex flex-wrap gap-1.5">
                  {proof.owned.map((scope) => (
                    <span
                      key={scope}
                      className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[0.55rem] text-secondary-foreground"
                    >
                      Owned: {scope}
                    </span>
                  ))}
                </div>

                <div className="mt-3 space-y-2">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-accent">Problem</p>
                    <p className="mt-1 text-[0.72rem] font-light leading-snug text-secondary-foreground">
                      {proof.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-accent">Decision</p>
                    <p className="mt-1 text-[0.72rem] font-light leading-snug text-secondary-foreground">
                      {proof.decision}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-accent">Outcome</p>
                    <p className="mt-1 text-[0.72rem] font-light leading-snug text-secondary-foreground">
                      {proof.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-3 border-t border-border pt-2.5">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">
                    Signals
                  </p>
                  <p className="mt-1 text-[0.68rem] font-light leading-relaxed text-muted-foreground">
                    {proof.signals.join(" · ")}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </CardRail>
    </div>
  );
}
