"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { ZigZagTrail } from "@/components/zigzag-trail";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const skillGroups = Object.entries(profile.skills);
const totalStops = skillGroups.length + 1; // +1 education

function TrailCard({
  index,
  title,
  children,
  face,
}: {
  index: number;
  title: string;
  children: ReactNode;
  face: "left" | "right";
}) {
  return (
    <article
      className={[
        "relative overflow-hidden border border-border/80 bg-card/30",
        "before:absolute before:inset-y-3 before:w-px before:bg-accent/70",
        face === "left"
          ? "before:left-0 md:before:left-auto md:before:right-0"
          : "before:left-0",
      ].join(" ")}
    >
      <div className="px-5 py-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {String(index).padStart(2, "0")}
        </p>
        <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
          {title}
        </h2>
      </div>
      <div className="border-t border-border/70 px-5 py-4 md:px-6">{children}</div>
    </article>
  );
}

export default function ToolkitPage() {
  const reduceMotion = useReducedMotion();

  const stops = [
    ...skillGroups.map(([group, items], i) => {
      const face = i % 2 === 0 ? ("left" as const) : ("right" as const);
      return {
        id: group,
        lead: i === 0,
        children: (
          <TrailCard index={i + 1} title={group} face={face}>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="border border-border/80 bg-background/80 px-3 py-1.5 text-sm font-normal text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </TrailCard>
        ),
      };
    }),
    {
      id: "education",
      lead: false,
      children: (
        <TrailCard
          index={totalStops}
          title="Education"
          face={skillGroups.length % 2 === 0 ? "left" : "right"}
        >
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

          <div className="mt-4 border-t border-border/70 pt-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
              Languages
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.languages.map((lang) => (
                <span
                  key={lang}
                  className="border border-border/80 bg-background/80 px-3 py-1.5 text-sm font-normal text-secondary-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </TrailCard>
      ),
    },
  ];

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
          Follow the trail. Left, right, top to bottom.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {totalStops} groups
        </p>
      </motion.div>

      <ZigZagTrail stops={stops} />

      <SceneOutro
        links={[
          { href: "/work", label: "See the work" },
          { href: "/experience", label: "Open experience" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
