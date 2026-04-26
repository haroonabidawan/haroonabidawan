"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const projects = profile.projects;

export default function ProjectsPage() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-2xl shrink-0 pb-4"
      >
        <p className="type-eyebrow text-accent">Projects</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          A longer lens on selected work.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Each one is a different setup. Same discipline underneath.
        </p>
      </motion.div>

      <CardRail label={`${projects.length} projects`}>
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: CINEMA }}
            className="flex w-[min(92vw,460px)] max-h-52 shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[460px]"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent">{p.tag}</p>
                <h2 className="mt-0.5 font-sans text-sm font-semibold leading-tight text-foreground">
                  {p.name}
                </h2>
              </div>
              <p className="shrink-0 font-mono text-[0.52rem] text-muted-foreground/50 tabular-nums">
                {String(i + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
              <p className="text-[0.72rem] font-medium leading-snug text-foreground">{p.hook}</p>
              <p className="mt-1.5 text-[0.7rem] font-light leading-relaxed text-muted-foreground">
                {p.detail}
              </p>

              <div className="mt-auto pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[0.55rem] text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 border-t border-border pt-2.5 text-[0.65rem] font-medium leading-snug text-accent">
                  {p.outcome}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </CardRail>
    </div>
  );
}
