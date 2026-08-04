"use client";

import { motion, useReducedMotion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const skillGroups = Object.entries(profile.skills);
const totalStops = skillGroups.length + 1; // +1 education

export default function CraftPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: CINEMA }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <SceneMark kind="toolkit" />
        <p className="type-eyebrow text-accent">Skills</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          The toolkit behind the camera.
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">
          Every tool has a role before the first take. Read top to bottom.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {totalStops} groups
        </p>
      </motion.div>

      <ol className="relative mx-auto w-full max-w-3xl list-none text-left">
        <motion.div
          aria-hidden="true"
          className="absolute bottom-2 left-[0.6875rem] top-2 w-px origin-top bg-border md:left-[0.9375rem]"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.1, ease: CINEMA }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-2 left-[0.6875rem] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent/40 to-transparent md:left-[0.9375rem]"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 1.4,
            delay: reduceMotion ? 0 : 0.15,
            ease: CINEMA,
          }}
        />

        {skillGroups.map(([group, items], i) => {
          const lead = i === 0;

          return (
            <motion.li
              key={group}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
                ease: CINEMA,
              }}
              className="relative pb-10 pl-10 last:pb-2 md:pl-14"
            >
              <span
                aria-hidden="true"
                className={[
                  "absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border md:left-1 md:h-7 md:w-7",
                  lead
                    ? "border-accent bg-accent/25 shadow-[0_0_20px_color-mix(in_oklab,var(--accent)_35%,transparent)]"
                    : "border-border bg-background",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2 w-2 rounded-full md:h-2.5 md:w-2.5",
                    lead ? "bg-accent" : "bg-secondary-foreground/50",
                  ].join(" ")}
                />
              </span>

              <article className="rounded-xl border border-border bg-card/40">
                <div className="border-b border-border px-4 py-3">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-mono text-base font-medium uppercase tracking-[0.12em] text-foreground">
                    {group}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 px-4 py-4">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-normal text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </motion.li>
          );
        })}

        <motion.li
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25, margin: "0px 0px -40px 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: CINEMA }}
          className="relative pb-2 pl-10 md:pl-14"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background md:left-1 md:h-7 md:w-7"
          >
            <span className="h-2 w-2 rounded-full bg-secondary-foreground/50 md:h-2.5 md:w-2.5" />
          </span>

          <article className="rounded-xl border border-border bg-card/40">
            <div className="border-b border-border px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {String(totalStops).padStart(2, "0")}
              </p>
              <h2 className="mt-1 font-mono text-base font-medium uppercase tracking-[0.12em] text-foreground">
                Education
              </h2>
            </div>
            <div className="px-4 py-4">
              <ul className="space-y-3">
                {profile.education.map((ed) => (
                  <li key={ed.degree}>
                    <p className="text-base font-medium text-foreground">{ed.degree}</p>
                    <p className="mt-0.5 text-base text-secondary-foreground">
                      {ed.school}
                      <span className="mx-1.5 text-secondary-foreground/70">·</span>
                      <span>{ed.years}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-border pt-3">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
                  Languages
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm font-normal text-secondary-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </motion.li>
      </ol>

      <SceneOutro
        links={[
          { href: "/frames", label: "See the work" },
          { href: "/timeline", label: "Open experience" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
