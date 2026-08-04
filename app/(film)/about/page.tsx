"use client";

import { motion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const sections = [
  profile.about.who,
  profile.about.shipping,
  profile.about.how,
  profile.about.bases,
] as const;

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col items-center py-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="flex w-full max-w-2xl flex-col items-center"
      >
        <SceneMark kind="about" />
        <p className="type-eyebrow text-accent">About</p>

        <h1 className="mt-3 text-[clamp(1.35rem,3.2vw,1.9rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.about.hook}
        </h1>

        <p className="mt-3 max-w-lg text-base font-normal leading-relaxed text-secondary-foreground">
          The quiet systems. The proof lives in what still runs.
        </p>

        <div className="mt-10 w-full space-y-8 text-left">
          {sections.map((section, i) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 * i, ease: CINEMA }}
              className="border-t border-border pt-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {section.title}
              </p>

              {"body" in section ? (
                <p className="mt-3 text-base font-normal leading-relaxed text-secondary-foreground">
                  {section.body}
                </p>
              ) : (
                <ul className="mt-3 space-y-2.5">
                  {section.lines.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-border" />
                      <span className="text-base font-normal leading-relaxed text-secondary-foreground">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        <SceneOutro
          ctaTo="email"
          links={[
            { href: "/work", label: "See the work" },
            { href: "/experience", label: "Open experience" },
            { href: "/toolkit", label: "Toolkit" },
          ]}
        />
      </motion.div>
    </div>
  );
}
