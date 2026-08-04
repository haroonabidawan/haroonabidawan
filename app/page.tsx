"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { AppNav } from "@/components/app-nav";
import { HeroStillSlider } from "@/components/hero-still-slider";
import { PrimaryCta } from "@/components/primary-cta";
import { SceneLinkButton } from "@/components/scene-outro";
import { trackEvent } from "@/lib/analytics";
import { profile } from "@/lib/profile";
import { CINEMA, EASE_OUT } from "@/lib/motion";

/** Tagline lands after the brand beat. No fullscreen gate in front of LCP. */
const TAGLINE_DELAY_MS = 420;

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [showTagline, setShowTagline] = useState(Boolean(reduceMotion));

  useEffect(() => {
    if (reduceMotion) {
      setShowTagline(true);
      return;
    }

    const toTagline = setTimeout(() => setShowTagline(true), TAGLINE_DELAY_MS);
    return () => clearTimeout(toTagline);
  }, [reduceMotion]);

  const stagger = (i: number) =>
    reduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 10, filter: "blur(8px)" as const },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" as const },
          transition: { duration: 0.9, delay: 0.08 * i, ease: CINEMA },
        };

  return (
    <div className="relative z-20 min-h-dvh bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? { scale: 1.04 } : { scale: 1.08 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: reduceMotion ? 0 : 8, ease: EASE_OUT }}
        >
          <HeroStillSlider reduceMotion={Boolean(reduceMotion)} />
        </motion.div>
        <div className="absolute inset-0 bg-background/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 220px var(--vignette)" }}
        />
      </div>

      <div className="film-page relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 pt-10 md:px-6">
        <main className="flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
            <motion.div {...stagger(0)} className="mb-4 md:mb-5">
              <Image
                src="/logo.png"
                alt="Carbon Trail"
                width={112}
                height={112}
                priority
                fetchPriority="high"
                className="mx-auto h-14 w-14 object-contain md:h-20 md:w-20"
              />
            </motion.div>

            <motion.p {...stagger(1)} className="type-eyebrow text-secondary-foreground">
              I&apos;m
            </motion.p>

            <motion.h1
              {...stagger(2)}
              className="mt-2 font-sans text-[clamp(1.75rem,8vw,4rem)] font-bold leading-none tracking-[-0.025em] text-foreground md:mt-3"
            >
              {profile.name}
            </motion.h1>

            <motion.p {...stagger(3)} className="mt-3 font-wordmark text-sm tracking-[0.04em] text-secondary-foreground md:mt-4 md:text-base">
              {profile.role}
            </motion.p>

            {/* First-viewport budget: tenure below the fold on short phones */}
            <motion.p
              {...stagger(4)}
              className="mt-4 hidden max-w-2xl text-balance text-base font-normal leading-relaxed text-secondary-foreground sm:block"
            >
              {profile.tenure}
            </motion.p>

            <motion.p {...stagger(5)} className="mt-2 font-mono text-sm text-secondary-foreground md:mt-3">
              {profile.availability}
            </motion.p>

            <motion.div
              className="mt-6 h-px w-12 bg-border md:mt-8"
              initial={reduceMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              animate={showTagline ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              style={{ transformOrigin: "center" }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: CINEMA }}
            />

            <motion.p
              className="mt-6 max-w-xl text-balance text-[clamp(1rem,2.4vw,1.15rem)] font-semibold leading-snug tracking-[-0.01em] text-foreground md:mt-8"
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 12, filter: "blur(8px)" }
              }
              animate={
                showTagline
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 12, filter: "blur(8px)" }
              }
              transition={{ duration: reduceMotion ? 0 : 1, ease: CINEMA }}
            >
              <span className="text-accent">Software you can run at midnight</span>
              {" "}without holding your breath. Calm systems. Clear ownership.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={showTagline ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.15, ease: CINEMA }}
            >
              <PrimaryCta />
              <a
                href={profile.resume.href}
                download={profile.resume.downloadName}
                onClick={() => trackEvent("download_cv")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="mt-4 flex flex-wrap items-center justify-center gap-3"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={showTagline ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.28, ease: CINEMA }}
            >
              <SceneLinkButton href="/work" label="See the work" />
              <SceneLinkButton href="/experience" label="Open experience" />
              <SceneLinkButton href="/about" label="About" />
            </motion.div>

            <motion.p
              {...stagger(6)}
              className="mt-8 max-w-2xl text-balance text-base font-normal leading-relaxed text-secondary-foreground sm:hidden"
            >
              {profile.tenure}
            </motion.p>
          </div>
        </main>
      </div>

      <AppNav />
    </div>
  );
}
