"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const slides = [
  { key: "hook",       title: profile.positioning.lead,    body: profile.positioning.body, kind: "prose" as const },
  { key: "snapshot",   title: profile.snapshot.title,      body: profile.snapshot.body,    kind: "prose" as const },
  { key: "principles", title: profile.principles.title,    lines: profile.principles.lines, kind: "list" as const },
];

export default function PositionPage() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-2xl shrink-0 pb-4"
      >
        <p className="type-eyebrow text-accent">Position</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          The stack, the stance, the way I work.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Three slides. No noise.
        </p>
      </motion.div>

      <CardRail label={`${slides.length} slides`}>
        {slides.map((slide, i) => (
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: CINEMA }}
            className="flex w-[min(72vw,260px)] max-h-52 shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[260px]"
          >
            <div className="border-b border-border px-4 py-3">
              <h2 className="text-sm font-bold leading-tight tracking-tight text-foreground">
                {slide.title}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
              {slide.kind === "prose" ? (
                <p className="text-[0.75rem] font-light leading-relaxed text-secondary-foreground">
                  {slide.body}
                </p>
              ) : (
                <ul className="space-y-2.5">
                  {slide.lines.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-accent/60" />
                      <span className="text-[0.75rem] font-light leading-snug text-secondary-foreground">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </CardRail>
    </div>
  );
}
