"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const jobs = profile.experience;

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
          Credits on the timeline.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Roles and ships, told in order.
        </p>
      </motion.div>

      <CardRail label={`${jobs.length} roles`}>
        {jobs.map((job, i) => (
          <motion.div
            key={job.company + job.period}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: CINEMA }}
            className="flex w-[min(92vw,460px)] max-h-52 shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[460px]"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h2 className="font-sans text-sm font-semibold leading-tight text-foreground">
                    {job.company}
                  </h2>
                  {i === 0 && (
                    <span className="inline-flex items-center rounded-full bg-accent/15 px-1.5 py-0.5 font-mono text-[0.52rem] uppercase tracking-widest text-accent">
                      now
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

            <ul className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
              {job.highlights.map((line) => (
                <li key={line} className="mb-2 flex gap-2.5 last:mb-0">
                  <span className="mt-[0.55em] h-px w-2.5 shrink-0 bg-border" />
                  <span className="text-[0.72rem] font-light leading-snug text-secondary-foreground">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </CardRail>
    </div>
  );
}
