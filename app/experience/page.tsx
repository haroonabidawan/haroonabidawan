"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PageOutro } from "@/components/page-outro";
import { ZigZagTrail } from "@/components/zigzag-trail";
import { experienceProof } from "@/lib/experience-proof";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

const jobs = profile.experience;

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
    const proof = experienceProof[job.company as keyof typeof experienceProof];
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

            {"links" in proof && proof.links.length > 0 ? (
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
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE_REVEAL }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <PageMark kind="experience" />
        <p className="type-eyebrow text-accent">{profile.pages.experience.title}</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.pages.experience.h1}
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">
          {profile.pages.experience.subtitle}
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {jobs.length} roles
        </p>
      </motion.div>

      <ZigZagTrail stops={stops} stopClassName="w-full md:max-w-lg" />

      <PageOutro
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
