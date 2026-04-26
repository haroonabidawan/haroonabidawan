"use client";

import { motion } from "motion/react";
import { AppNav } from "@/components/app-nav";
import { CardRail } from "@/components/card-rail";
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
  return (
    <div className="relative z-20 flex h-dvh max-h-dvh flex-col items-center justify-center overflow-hidden bg-background px-5 text-foreground md:px-8">
      <main className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: CINEMA }}
          className="w-full max-w-2xl shrink-0 pb-4"
        >
          <p className="type-eyebrow text-accent">
          Credits & Thanks
          </p>
          <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
            Great work is never a solo act.
          </h1>
          <p className="mx-auto mt-1.5 max-w-lg text-sm font-light text-secondary-foreground">
            The crew behind the texture, tone, and final cut.
          </p>
        </motion.div>

        <CardRail label={`${contributors.length + 1} credits`}>
          {contributors.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: CINEMA }}
              className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
            >
              <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
                <div className="min-w-0 text-left">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent">
                    {String(i + 1).padStart(2, "0")} · {c.location}
                  </p>
                  <h2 className="mt-0.5 font-sans text-sm font-semibold leading-tight text-foreground">
                    {c.name}
                  </h2>
                </div>
                <p className="shrink-0 font-mono text-[0.55rem] text-muted-foreground">
                  {c.handle}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 text-left [scrollbar-width:thin]">
                <p className="font-mono text-[0.68rem] leading-snug text-accent">{c.role}</p>
                <p className="mt-2 text-[0.75rem] font-light leading-relaxed text-secondary-foreground">
                  {c.note}
                </p>
                <div className="mt-3 border-t border-border pt-3">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.65rem] text-accent transition-colors hover:border-accent"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="h-2.5 w-2.5 shrink-0"
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
            </motion.article>
          ))}
          <motion.article
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: contributors.length * 0.08, ease: CINEMA }}
            className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
          >
            <div className="border-b border-border px-4 py-3 text-left">
              <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent">
                Open seat
              </p>
              <h2 className="mt-0.5 font-sans text-sm font-semibold leading-tight text-foreground">
                Pull up a chair.
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 text-left [scrollbar-width:thin]">
              <p className="text-[0.75rem] font-light leading-relaxed text-secondary-foreground">
                This kitchen always has room for one more. Sharp eyes, clean code, strong opinions. All welcome.
              </p>
            </div>
          </motion.article>
        </CardRail>
      </main>
      <AppNav />
    </div>
  );
}
