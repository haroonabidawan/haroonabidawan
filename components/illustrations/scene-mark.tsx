"use client";

import { motion, useReducedMotion } from "motion/react";
import { CINEMA } from "@/lib/motion";
import {
  MarkAbout,
  MarkBrief,
  MarkCrew,
  MarkFrames,
  MarkMidnight,
  MarkPath,
  MarkToolkit,
} from "@/components/illustrations/marks";

const marks = {
  midnight: MarkMidnight,
  frames: MarkFrames,
  path: MarkPath,
  toolkit: MarkToolkit,
  brief: MarkBrief,
  crew: MarkCrew,
  about: MarkAbout,
} as const;

const labels = {
  midnight: "Midnight systems",
  frames: "Product frames",
  path: "Career path",
  toolkit: "Toolkit",
  brief: "Send a brief",
  crew: "Credits crew",
  about: "About",
} as const;

export type SceneMarkKind = keyof typeof marks;

type SceneMarkProps = {
  kind: SceneMarkKind;
  className?: string;
};

/**
 * Soft entrance mark above a scene header.
 * Decorative: adjacent eyebrow/heading already names the scene.
 */
export function SceneMark({ kind, className }: SceneMarkProps) {
  const reduceMotion = useReducedMotion();
  const Mark = marks[kind];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.75, ease: CINEMA }}
      className={["mb-5 flex justify-center", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      title={labels[kind]}
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 scale-125 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_68%)]"
          aria-hidden="true"
        />
        <Mark />
      </div>
    </motion.div>
  );
}
