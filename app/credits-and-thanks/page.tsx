"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Transition } from "motion/react";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/profile";

const contributors = [
  {
    name: "Sarah Panganiban",
    handle: "Sarah P.",
    url: "https://www.sarahmp.com/",
    role: "Logo design, logo selection & colour palette",
    note: "Based in Bahrain with an eye sharp enough to cut through noise. Sarah shaped the visual soul of this site, from the wordmark to the Carbon Trail palette. If this place has taste, she seasoned it.",
    location: "Bahrain",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
});

export default function CreditsPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background text-foreground">

      {/* Top nav */}
      <motion.div
        {...fadeUp(0)}
        className="w-full max-w-2xl px-5 pt-14 text-center md:px-8 md:pt-16"
      >
        <Link
          href="/"
          className="font-mono text-sm text-accent underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
        >
          ← Back to home
        </Link>
      </motion.div>

      {/* Hero header */}
      <header className="w-full max-w-2xl px-5 pt-7 text-center md:px-8 md:pt-10">
        <motion.p {...fadeUp(0.1)} className="type-eyebrow text-accent">
          Credits & Thanks
        </motion.p>
        <motion.h1
          {...fadeUp(0.2)}
          className="mt-3 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-tight tracking-tight text-foreground"
        >
          Every great film needs a crew.
        </motion.h1>
        <motion.p
          {...fadeUp(0.32)}
          className="mx-auto mt-3 max-w-lg text-sm font-light leading-relaxed text-secondary-foreground"
        >
          Great work is never a solo act. These are the people who sharpened the details, seasoned the decisions, and made this thing worth watching.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-6 h-px bg-border"
        />
      </header>

      {/* Contributors */}
      <main className="w-full max-w-2xl px-5 pb-16 md:px-8">
        <ul className="mt-6 list-none space-y-0 text-left">
          {contributors.map((c, i) => (
            <motion.li
              key={c.name}
              {...fadeUp(0.52 + i * 0.12)}
              className={`py-5 ${i < contributors.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-muted-foreground pt-1 select-none w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-sans text-lg font-semibold !text-foreground hover:!text-foreground"
                    >
                      {c.name}
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/link:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M3 13L13 3M13 3H7M13 3v6" />
                      </svg>
                    </a>
                    <p className="font-mono text-xs text-muted-foreground">{c.location}</p>
                  </div>
                </div>

                {/* Profile link pill */}
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.7rem] text-accent transition-colors hover:border-accent"
                >
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 13L13 3M13 3H7M13 3v6" />
                  </svg>
                  {c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>

              <p className="mt-2 ml-8 font-mono text-xs text-accent">{c.role}</p>
              <p className="mt-1.5 ml-8 text-sm font-light leading-relaxed text-secondary-foreground">{c.note}</p>
            </motion.li>
          ))}
        </ul>

        {/* Open contribution callout */}
        <motion.div
          {...fadeUp(0.66)}
          className="mt-6 rounded-lg border border-border bg-card px-5 py-4"
        >
          <p className="font-sans text-sm font-medium text-foreground">Pull up a chair.</p>
          <p className="mt-1 text-sm font-light leading-relaxed text-secondary-foreground">
            This kitchen always has room for one more. Sharp eyes, clean code, strong opinions: all welcome. Drop a line at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>{" "}
            and you might earn a seat at this table.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.76)}
          className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8"
        >
          <Image
            src="/logo.png"
            alt=""
            width={128}
            height={128}
            className="h-12 w-12 shrink-0 object-contain"
          />

          <SocialLinks size="sm" />

          <p className="font-wordmark text-xs tracking-[0.08em] text-muted-foreground">
            © 2026 {profile.name}
          </p>

          <div className="flex items-center gap-4">
            <Link href="/" className="font-mono text-xs text-muted-foreground underline-offset-4 transition-opacity hover:opacity-90 hover:underline">
              ← home
            </Link>
            <span className="text-muted-foreground opacity-30">·</span>
            <Link href="/credits-and-thanks" className="font-mono text-xs text-muted-foreground underline-offset-4 transition-opacity hover:opacity-90 hover:underline">
              Credits & Thanks
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
