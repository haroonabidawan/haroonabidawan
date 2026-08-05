"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PageOutro } from "@/components/page-outro";
import { CategoryIcon, TechBadge } from "@/components/tech-badge";
import { ZigZagTrail } from "@/components/zigzag-trail";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

const skillGroups = Object.entries(profile.skills);
const totalStops = skillGroups.length + (profile.learningNext.length > 0 ? 1 : 0) + 1;

function TrailCard({
  index,
  title,
  children,
  face,
  subtitle,
  category,
}: {
  index: number;
  title: string;
  children: ReactNode;
  face: "left" | "right";
  subtitle?: string;
  category?: string;
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
        <h2 className="mt-2 flex items-center justify-start gap-2.5 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
          {category ? <CategoryIcon category={category} /> : null}
          <span>{title}</span>
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-secondary-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="border-t border-border/70 px-5 py-4 md:px-6">{children}</div>
    </article>
  );
}

function TagList({ items, muted = false }: { items: readonly string[]; muted?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechBadge key={item} label={item} muted={muted} />
      ))}
    </div>
  );
}

export default function ToolkitPage() {
  const reduceMotion = useReducedMotion();

  const skillStops = skillGroups.map(([group, items], i) => {
    const stopIndex = i + 1;
    const face = i % 2 === 0 ? ("left" as const) : ("right" as const);
    return {
      id: group,
      lead: i === 0,
      children: (
        <TrailCard index={stopIndex} title={group} face={face} category={group}>
          <TagList items={items} />
        </TrailCard>
      ),
    };
  });

  const exploringStops =
    profile.learningNext.length > 0
      ? (() => {
          const stopIndex = skillGroups.length + 1;
          const face =
            skillGroups.length % 2 === 0 ? ("left" as const) : ("right" as const);
          return [
            {
              id: "learning-next",
              lead: false,
              children: (
                <TrailCard
                  index={stopIndex}
                  title={profile.pages.toolkit.learningLabel}
                  face={face}
                  category={profile.pages.toolkit.learningLabel}
                  subtitle="On the roadmap, not in production yet"
                >
                  <TagList items={profile.learningNext} muted />
                </TrailCard>
              ),
            },
          ];
        })()
      : [];

  const educationIndex = skillGroups.length + (profile.learningNext.length > 0 ? 1 : 0) + 1;
  const educationStop = {
    id: "education",
    lead: false,
    children: (
      <TrailCard
        index={educationIndex}
        title={profile.pages.toolkit.educationLabel}
        face={(skillGroups.length + (profile.learningNext.length > 0 ? 1 : 0)) % 2 === 0 ? "left" : "right"}
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
            {profile.pages.toolkit.languagesLabel}
          </p>
          <div className="mt-2">
            <TagList items={profile.languages} />
          </div>
        </div>
      </TrailCard>
    ),
  };

  const stops = [...skillStops, ...exploringStops, educationStop];

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE_REVEAL }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <PageMark kind="toolkit" />
        <p className="type-eyebrow text-accent">{profile.pages.toolkit.title}</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.pages.toolkit.h1}
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">
          {profile.pages.toolkit.subtitle}
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {totalStops} groups
        </p>
      </motion.div>

      <ZigZagTrail stops={stops} />

      <PageOutro
        links={[
          { href: "/work", label: "See the work" },
          { href: "/services", label: "Services" },
          { href: "/experience", label: "Open experience" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
