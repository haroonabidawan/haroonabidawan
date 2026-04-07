"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Transition } from "motion/react";

const contributors = [
  {
    name: "Sarah Panganiban",
    handle: "Sarah P.",
    url: "https://www.sarahmp.com/",
    role: "Logo design, logo selection & colour palette",
    note: "Based in Bahrain with an eye sharp enough to cut through noise. Sarah shaped the visual soul of this site — from the wordmark to the Carbon Trail palette. If this place has taste, she seasoned it.",
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
    <div className="min-h-screen bg-background text-foreground">

      {/* Top nav */}
      <motion.div
        {...fadeUp(0)}
        className="mx-auto max-w-2xl px-5 pt-14 md:px-8 md:pt-16"
      >
        <Link
          href="/"
          className="font-mono text-sm text-accent underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
        >
          ← Back to home
        </Link>
      </motion.div>

      {/* Hero header */}
      <header className="mx-auto max-w-2xl px-5 pt-7 md:px-8 md:pt-10">
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
          className="mt-3 max-w-lg text-sm font-light leading-relaxed text-secondary-foreground"
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
      <main className="mx-auto max-w-2xl px-5 pb-16 md:px-8">
        <ul className="mt-6 list-none space-y-0">
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
            This kitchen always has room for one more. Sharp eyes, clean code, strong opinions — all welcome. Drop a line at{" "}
            <a
              href="mailto:Haroon.abid.1999@gmail.com"
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              Haroon.abid.1999@gmail.com
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

          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.a href="https://github.com/haroonabidawan" target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.97 }} aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" /></svg>
            </motion.a>
            <motion.a href="https://www.linkedin.com" target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.97 }} aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" /></svg>
            </motion.a>
            <motion.a href="mailto:Haroon.abid.1999@gmail.com" whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.97 }} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="1.8"><path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" /><path d="m5 8 7 5 7-5" /></svg>
            </motion.a>
            <motion.a href="https://facebook.com/haroonabidawan" target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.97 }} aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.66c0-.93.26-1.56 1.59-1.56h1.7V3.24a22.5 22.5 0 0 0-2.48-.13c-2.46 0-4.14 1.5-4.14 4.26v2.37H7.4v3.2h2.76V21h3.34Z" /></svg>
            </motion.a>
            <motion.a href="https://instagram.com/haroonabidawan" target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.06 }} whileTap={{ scale: 0.97 }} aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
            </motion.a>
          </div>

          <p className="font-wordmark text-xs tracking-[0.08em] text-muted-foreground">
            © 2026 Haroon Abid Awan
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
