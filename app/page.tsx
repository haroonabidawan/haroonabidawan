"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { AppNav } from "@/components/app-nav";
import { profile } from "@/lib/profile";
import { CINEMA, EASE_OUT } from "@/lib/motion";

const HELLO_HOLD_MS = 2400;
const HELLO_EXIT_BUFFER_MS = 380;

export default function Home() {
  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    let toTitle: ReturnType<typeof setTimeout>;
    let toTagline: ReturnType<typeof setTimeout>;

    const startFrame = requestAnimationFrame(() => {
      toTitle   = setTimeout(() => setShowTitle(true),   HELLO_HOLD_MS - HELLO_EXIT_BUFFER_MS);
      toTagline = setTimeout(() => setShowTagline(true), HELLO_HOLD_MS + 600);
    });

    return () => {
      cancelAnimationFrame(startFrame);
      clearTimeout(toTitle);
      clearTimeout(toTagline);
    };
  }, []);

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 10, filter: "blur(8px)" as const },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" as const },
    transition: { duration: 0.9, delay: 0.08 * i, ease: CINEMA },
  });

  return (
    <div className="relative z-20 flex h-dvh max-h-dvh flex-col overflow-hidden bg-background text-foreground">
      <AnimatePresence>
        {!showTitle && (
          <motion.div
            key="hello-fullscreen"
            className="fixed inset-0 z-35 flex items-center justify-center bg-background/60 backdrop-blur-2xl"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(16px)", scale: 1.02 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            aria-hidden={showTitle}
          >
            <motion.p
              className="font-sans text-[clamp(3rem,11vw,6.5rem)] font-black leading-none tracking-[-0.03em] text-foreground"
              style={{ padding: "0.35em 0.1em" }}
              initial={{ opacity: 0, scale: 0.88, y: 28, filter: "blur(16px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.06, y: -24, filter: "blur(12px)" }}
              transition={{ duration: 1.1, ease: CINEMA }}
            >
              Hello
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden">
        <main className="flex h-full min-h-0 w-full max-w-2xl flex-col items-center justify-center overflow-hidden px-5 text-center md:px-6">
          <AnimatePresence mode="wait">
            {showTitle && (
              <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">

                <motion.p {...stagger(0)} className="type-eyebrow text-muted-foreground">
                  I&apos;m
                </motion.p>

                <motion.h1
                  {...stagger(1)}
                  className="mt-2 font-sans text-[clamp(2rem,6.5vw,4rem)] font-extrabold leading-none tracking-[-0.025em] text-foreground"
                >
                  {profile.name}
                </motion.h1>

                <motion.p {...stagger(2)} className="mt-3 font-wordmark text-xs tracking-[0.04em] text-secondary-foreground sm:text-sm md:text-base">
                  {profile.role}
                </motion.p>

                <motion.p {...stagger(3)} className="mt-3 max-w-lg text-balance text-[0.78rem] font-light leading-relaxed text-muted-foreground sm:text-sm">
                  {profile.tenure}
                </motion.p>

                <motion.p {...stagger(4)} className="mt-2.5 font-mono text-[0.65rem] text-muted-foreground/70">
                  {profile.location}
                  <span className="mx-2 opacity-40">·</span>
                  {profile.availability}
                </motion.p>

                <motion.div
                  className="mt-6 h-px w-12 bg-border"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={showTagline ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.6, ease: CINEMA }}
                />

                <motion.p
                  className="mt-6 max-w-md text-balance text-[clamp(0.9rem,2.4vw,1.1rem)] font-semibold leading-snug tracking-[-0.01em] text-foreground"
                  initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                  animate={showTagline ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 12, filter: "blur(8px)" }}
                  transition={{ duration: 1, ease: CINEMA }}
                >
                  Calm systems. Clear ownership.{" "}
                  <span className="text-accent">Software you can run at midnight</span> without holding your breath.
                </motion.p>

              </div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {showTitle && <AppNav />}
    </div>
  );
}
