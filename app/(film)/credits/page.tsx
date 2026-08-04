"use client";

import { motion, useReducedMotion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { CINEMA } from "@/lib/motion";

const contributors = [
  {
    name: "Sarah Panganiban",
    handle: "Sarah P.",
    url: "https://www.sarahmp.com/",
    role: "Logo design, logo selection & colour palette",
    note: "Based in Bahrain with an eye sharp enough to cut through noise. Sarah shaped the visual soul of this site, from the wordmark to the Carbon Trail palette. If this place has taste, she seasoned it.",
    location: "Bahrain",
  },
];

export default function CreditsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: CINEMA }}
        className="w-full max-w-3xl shrink-0 pb-4"
      >
        <SceneMark kind="crew" />
        <p className="type-eyebrow text-accent">Credits & Thanks</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          Great work is never a solo act.
        </h1>
        <p className="mx-auto mt-1.5 max-w-lg text-base text-secondary-foreground">
          The crew behind the texture, tone, and final cut.
        </p>
      </motion.div>

      <CardRail label={`${contributors.length + 1} credits`}>
        {contributors.map((c, i) => (
          <article
            key={c.name}
            className="film-card flex shrink-0 flex-col rounded-xl border border-border bg-card/40"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
              <div className="min-w-0 text-left">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {String(i + 1).padStart(2, "0")} · {c.location}
                </p>
                <h2 className="mt-0.5 font-sans text-base font-semibold leading-tight text-foreground">
                  {c.name}
                </h2>
              </div>
              <p className="shrink-0 font-mono text-xs text-secondary-foreground">{c.handle}</p>
            </div>

            <div className="px-4 py-3 text-left">
              <p className="font-mono text-sm leading-snug text-accent">{c.role}</p>
              <p className="mt-2 text-base font-normal leading-relaxed text-secondary-foreground">
                {c.note}
              </p>
              <div className="mt-3 border-t border-border pt-3">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 13L13 3M13 3H7M13 3v6" />
                  </svg>
                  {c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>
            </div>
          </article>
        ))}
        <article className="film-card flex shrink-0 flex-col rounded-xl border border-border bg-card/40">
          <div className="border-b border-border px-4 py-3 text-left">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Open seat</p>
            <h2 className="mt-0.5 font-sans text-base font-semibold leading-tight text-foreground">
              Pull up a chair.
            </h2>
          </div>
          <div className="px-4 py-3 text-left">
            <p className="text-base font-normal leading-relaxed text-secondary-foreground">
              This kitchen always has room for one more. Sharp eyes, clean code, strong opinions. All welcome.
            </p>
          </div>
        </article>
      </CardRail>

      <SceneOutro
        links={[
          { href: "/about", label: "About" },
          { href: "/toolkit", label: "Toolkit" },
          { href: "/privacy", label: "Privacy" },
        ]}
      />
    </div>
  );
}
