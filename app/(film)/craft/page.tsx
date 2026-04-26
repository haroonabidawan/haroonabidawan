"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const skillGroups = Object.entries(profile.skills);
const totalCards = skillGroups.length + 1; // +1 for education

export default function CraftPage() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-2xl shrink-0 pb-4"
      >
        <p className="type-eyebrow text-accent">Skills</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          The toolkit behind the camera.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Every tool has a role before the first take.
        </p>
      </motion.div>

      <CardRail label={`${totalCards} groups`}>
        {skillGroups.map(([group, items], i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: CINEMA }}
            className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
          >
            <div className="border-b border-border px-4 py-2.5">
              <h2 className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                {group}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[0.68rem] font-light text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: skillGroups.length * 0.06, ease: CINEMA }}
          className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
        >
          <div className="border-b border-border px-4 py-2.5">
            <h2 className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
              Education
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin]">
            <ul className="space-y-3">
              {profile.education.map((ed) => (
                <li key={ed.degree}>
                  <p className="text-[0.75rem] font-medium text-foreground">{ed.degree}</p>
                  <p className="mt-0.5 text-[0.68rem] text-secondary-foreground">
                    {ed.school}
                    <span className="mx-1.5 opacity-40">·</span>
                    <span className="text-muted-foreground">{ed.years}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-border pt-3">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                Languages
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[0.68rem] font-light text-secondary-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </CardRail>
    </div>
  );
}
