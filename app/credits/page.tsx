"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PageOutro } from "@/components/page-outro";
import { RepoDocLinks } from "@/components/repo-doc-links";
import { trackOutboundClick } from "@/lib/analytics";
import { EASE_REVEAL } from "@/lib/motion";
import { profile } from "@/lib/profile";

const contributors = [
  {
    name: "Sarah Panganiban",
    handle: "Sarah P.",
    url: "https://www.sarahmp.com/",
    role: "Logo design, logo selection & colour palette",
    note: "Based in Bahrain with an eye sharp enough to cut through noise. Sarah shaped the visual identity of this site, from the wordmark to the Carbon Trail palette. If this site has taste, she set it.",
    location: "Bahrain",
  },
] as const;

function ChairCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={[
        "relative w-full border border-border/80 bg-card/35",
        "before:absolute before:inset-x-6 before:-top-2 before:h-2 before:rounded-t-sm before:border before:border-b-0 before:border-border/70 before:bg-card/50",
        "after:absolute after:inset-x-10 after:-bottom-3 after:h-3 after:border after:border-t-0 after:border-border/50 after:bg-background/80",
        className,
      ].join(" ")}
    >
      <div className="relative z-10 p-5 md:p-6">{children}</div>
    </article>
  );
}

function OpenSeatChair() {
  return (
    <ChairCard className="max-w-sm md:max-w-none">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Open role</p>
      <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
        Want to contribute?
      </h2>
      <p className="mt-3 text-left text-base font-normal leading-relaxed text-secondary-foreground">
        Always room for sharp work on brand, code, or product. Strong opinions welcome.
      </p>
      <div className="mt-5 border-t border-border/70 pt-4 text-left">
        <a
          href={profile.repo.docs.contributing}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-1.5 border border-accent/50 bg-accent/15 px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent"
          onClick={() =>
            trackOutboundClick(
              "Contribute on GitHub",
              profile.repo.docs.contributing,
              "credits_open_seat",
            )
          }
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Contribute on GitHub
        </a>
        <RepoDocLinks
          className="mt-4 justify-start"
          links={[
            { label: "Documentation", href: profile.repo.docs.index, context: "credits_docs_index" },
            {
              label: "Development guide",
              href: profile.repo.docs.development,
              context: "credits_docs_development",
            },
            { label: "Security", href: profile.repo.docs.security, context: "credits_docs_security" },
            { label: "Issues", href: profile.repo.issues, context: "credits_issues" },
          ]}
        />
      </div>
    </ChairCard>
  );
}

function FeaturedContributor() {
  const contributor = contributors[0];
  return (
    <ChairCard className="max-w-sm md:max-w-none">
      <div className="flex items-start justify-between gap-3 text-left">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            01 · {contributor.location}
          </p>
          <h2 className="mt-2 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
            {contributor.name}
          </h2>
        </div>
        <p className="shrink-0 font-mono text-xs text-secondary-foreground">{contributor.handle}</p>
      </div>
      <p className="mt-3 text-left font-mono text-sm leading-snug text-accent">{contributor.role}</p>
      <p className="mt-3 text-left text-base font-normal leading-relaxed text-secondary-foreground">
        {contributor.note}
      </p>
      <div className="mt-5 border-t border-border/70 pt-4 text-left">
        <a
          href={contributor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-1.5 border border-border bg-background/80 px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M3 13L13 3M13 3H7M13 3v6" />
          </svg>
          {contributor.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </a>
      </div>
    </ChairCard>
  );
}

function ContributorsTable() {
  return (
    <div className="relative w-full max-w-xl md:max-w-none">
      <div
        className={[
          "relative overflow-hidden border border-border bg-card/50 px-6 py-8 md:px-8 md:py-10",
          "shadow-[0_24px_60px_color-mix(in_oklab,var(--bg-base)_70%,transparent)]",
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-3 h-px bg-border/60 md:inset-x-8"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-3 h-px bg-border/60 md:inset-x-8"
        />

        <div className="relative flex flex-col items-center gap-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contributors</p>
          <p className="max-w-sm text-base leading-relaxed text-secondary-foreground">
            One product surface. Shared credit for the work that ships.
          </p>

          <div className="mt-1 flex items-center justify-center gap-6 md:gap-10" aria-hidden="true">
            {[0, 1, 2].map((n) => (
              <span
                key={n}
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full border md:h-11 md:w-11",
                  n === 1
                    ? "border-accent/70 bg-accent/15"
                    : "border-border bg-background/60",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-2 w-2 rounded-full",
                    n === 1 ? "bg-accent" : "bg-secondary-foreground/40",
                  ].join(" ")}
                />
              </span>
            ))}
          </div>

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            {contributors.length + 1} slots · {contributors.length} filled
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-[78%] justify-between px-2" aria-hidden="true">
        <span className="h-6 w-px bg-border md:h-8" />
        <span className="h-6 w-px bg-border md:h-8" />
      </div>
    </div>
  );
}

export default function CreditsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE_REVEAL }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <PageMark kind="credits" />
        <p className="type-eyebrow text-accent">Credits & Thanks</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          Strong products are built by teams.
        </h1>
        <p className="mx-auto mt-1.5 max-w-lg text-base text-secondary-foreground">
          The people behind the brand, tone, and finish. Room for one more.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.08, ease: EASE_REVEAL }}
        className="relative mx-auto w-full max-w-6xl px-2 md:px-4"
      >
        {/* Mobile: stacked table + chairs */}
        <div className="flex flex-col items-center gap-0 md:hidden">
          <div className="relative z-10 w-full px-2">
            <OpenSeatChair />
          </div>
          <div className="relative z-0 flex h-8 w-full justify-center" aria-hidden="true">
            <span className="absolute top-0 h-full w-px bg-gradient-to-b from-border to-accent/50" />
          </div>
          <div className="relative z-10 w-full px-2">
            <ContributorsTable />
          </div>
          <div className="relative z-0 flex h-8 w-full justify-center" aria-hidden="true">
            <span className="absolute top-0 h-full w-px bg-gradient-to-b from-accent/50 to-border" />
          </div>
          <div className="relative z-10 w-full px-2">
            <FeaturedContributor />
          </div>
        </div>

        {/* Desktop: chairs flanking the table */}
        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] md:items-end md:gap-6 lg:gap-8">
          <div className="flex flex-col items-end pb-6">
            <OpenSeatChair />
            <span
              aria-hidden="true"
              className="mt-3 h-px w-16 bg-gradient-to-r from-transparent to-accent/50"
            />
          </div>

          <div className="flex flex-col items-center pb-2">
            <ContributorsTable />
          </div>

          <div className="flex flex-col items-start pb-6">
            <FeaturedContributor />
            <span
              aria-hidden="true"
              className="mt-3 h-px w-16 bg-gradient-to-l from-transparent to-accent/50"
            />
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.16, ease: EASE_REVEAL }}
        className="mx-auto mt-10 w-full max-w-2xl border-t border-border px-2 pt-8 text-center md:px-4"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Open source</p>
        <p className="mt-3 text-base leading-relaxed text-secondary-foreground">
          This site is public on GitHub. Docs, contributing guidelines, and security reporting live in the
          repository.
        </p>
        <RepoDocLinks className="mt-5" />
      </motion.section>

      <PageOutro
        links={[
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/privacy", label: "Privacy" },
        ]}
      />
    </div>
  );
}
