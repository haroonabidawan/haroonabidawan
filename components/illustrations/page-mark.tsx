"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MarkAbout,
  MarkContact,
  MarkCredits,
  MarkExperience,
  MarkPrivacy,
  MarkServices,
  MarkToolkit,
  MarkWork,
  type PageMarkKind,
} from "@/components/illustrations/marks";
import { EASE_REVEAL } from "@/lib/motion";

const marks = {
  privacy: MarkPrivacy,
  work: MarkWork,
  experience: MarkExperience,
  toolkit: MarkToolkit,
  contact: MarkContact,
  credits: MarkCredits,
  about: MarkAbout,
  services: MarkServices,
} as const;

const labels = {
  privacy: "Privacy",
  work: "Featured work",
  experience: "Experience",
  toolkit: "Engineering toolkit",
  contact: "Contact",
  credits: "Contributors",
  about: "About",
  services: "Services",
} as const;

export type { PageMarkKind };

type PageMarkProps = {
  kind: PageMarkKind;
  className?: string;
};

/** Soft entrance mark above a page header. Decorative. */
export function PageMark({ kind, className }: PageMarkProps) {
  const reduceMotion = useReducedMotion();
  const Mark = marks[kind];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.75, ease: EASE_REVEAL }}
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
