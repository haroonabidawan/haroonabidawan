"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const greetings = ["Hello", "مرحباً", "خوش آمدید"];

const INTRO_SEEN_KEY = "haa_intro_seen";

// Cinematic cubic-bezier — slow in, crisp out (like a film title card)
const CINEMA: [number, number, number, number] = [0.16, 1, 0.3, 1];
// Gentle ease for longer reveals
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Home() {
  const [phase, setPhase] = useState<"greetings" | "content">("content");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const currentGreeting = greetings[greetingIndex];
  const isRtlGreeting = /[\u0600-\u06FF]/.test(currentGreeting);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(INTRO_SEEN_KEY);
    if (alreadySeen) return;

    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    setPhase("greetings");

    const greetingStepMs = 2200;
    const greetingPhaseFadeCompensationMs = 400;

    const englishToArabic = setTimeout(
      () => setGreetingIndex(1),
      greetingStepMs - greetingPhaseFadeCompensationMs,
    );
    const arabicToUrdu = setTimeout(
      () => setGreetingIndex(2),
      greetingStepMs * 2 - greetingPhaseFadeCompensationMs,
    );
    const showContent = setTimeout(
      () => setPhase("content"),
      greetingStepMs * 3 - greetingPhaseFadeCompensationMs,
    );

    return () => {
      clearTimeout(englishToArabic);
      clearTimeout(arabicToUrdu);
      clearTimeout(showContent);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <main className="relative z-20 flex min-h-screen w-full items-center justify-center px-6 py-20 md:py-24">
        <AnimatePresence mode="wait">

          {phase === "greetings" ? (
            <motion.section
              key="greetings-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
              className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center"            >
              {/* Extra padding so diacritics above/below never clip */}
              <p
                className="font-sans text-[clamp(2.8rem,9vw,6.2rem)] font-black leading-none tracking-[-0.02em] text-foreground"
                style={{ padding: "0.35em 0.1em", overflow: "visible" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetings[greetingIndex]}
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      y: 18,
                      filter: "blur(10px)",
                      /* clip reveals left-to-right for LTR, right-to-left for RTL
                         negative top/bottom (-15%) keeps diacritics visible */
                      clipPath: isRtlGreeting
                        ? "inset(-15% 0% -15% 100%)"
                        : "inset(-15% 100% -15% 0%)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                      clipPath: "inset(-15% 0% -15% 0%)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.06,
                      y: -14,
                      filter: "blur(8px)",
                      clipPath: isRtlGreeting
                        ? "inset(-15% 100% -15% 0%)"
                        : "inset(-15% 0% -15% 100%)",
                    }}
                    transition={{ duration: 1.0, ease: CINEMA }}
                    className="inline-block whitespace-nowrap"
                    dir={isRtlGreeting ? "rtl" : "ltr"}
                  >
                    {greetings[greetingIndex]}
                  </motion.span>
                </AnimatePresence>
              </p>
            </motion.section>

          ) : (
            <motion.section
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE_OUT }}
              className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
            >
              {/* Identity — appears as one composition */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <motion.p
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.6, delay: 0.2, ease: CINEMA }}
                  className="type-eyebrow text-muted-foreground"
                >
                  I&apos;m
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.8, delay: 0.34, ease: CINEMA }}
                  className="font-sans max-w-4xl whitespace-nowrap text-[clamp(2.6rem,8vw,5.8rem)] font-extrabold leading-[1.0] tracking-[-0.02em] text-foreground"
                >
                  Haroon Abid Awan
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.4, delay: 0.6, ease: CINEMA }}
                  className="font-wordmark text-sm tracking-[0.02em] text-secondary-foreground md:text-base"
                >
                  Full Stack Engineer & AI Automation Specialist
                </motion.p>
              </div>

              {/* Value prop — materialises as a single line */}
              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.6, delay: 1.0, ease: CINEMA }}
                className="font-sans mt-16 max-w-4xl text-balance text-[clamp(1.05rem,2.3vw,1.55rem)] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground"
              >
                I engineer the invisible.{" "}
                <span className="text-accent">Systems that scale</span> and{" "}
                <span className="text-accent">AI that ships</span>.
              </motion.p>

              {/* Status — quiet, secondary */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.5, ease: CINEMA }}
                className="mt-5 max-w-3xl type-body text-secondary-foreground"
              >
                <span className="font-medium text-foreground">Chopping, mixing, and baking this portfolio.</span>{" "}
                Still in the oven.
              </motion.p>

              {/* Social + logo — one unified block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 2.0, ease: CINEMA }}
                className="mt-16 flex flex-col items-center gap-6"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={128}
                  height={128}
                  className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
                />
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  <motion.a
                    href="https://github.com/haroonabidawan"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="GitHub"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="mailto:Haroon.abid.1999@gmail.com"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
                      <path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" />
                      <path d="m5 8 7 5 7-5" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://facebook.com/haroonabidawan"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.66c0-.93.26-1.56 1.59-1.56h1.7V3.24a22.5 22.5 0 0 0-2.48-.13c-2.46 0-4.14 1.5-4.14 4.26v2.37H7.4v3.2h2.76V21h3.34Z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/haroonabidawan"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.6, ease: CINEMA }}
                className="mt-6 font-wordmark text-xs tracking-[0.08em] text-muted-foreground"
              >
                © 2026 Haroon Abid Awan
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 2.8, ease: CINEMA }}
                className="mt-3 flex items-center gap-4"
              >
                <Link
                  href="/credits-and-thanks"
                  className="font-mono text-xs text-muted-foreground underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
                >
                  Credits & Thanks
                </Link>
                <span className="text-muted-foreground opacity-30">·</span>
                <button
                  onClick={() => {
                    sessionStorage.removeItem(INTRO_SEEN_KEY);
                    window.location.reload();
                  }}
                  className="font-mono text-xs text-muted-foreground opacity-40 transition-opacity hover:opacity-90 hover:underline"
                >
                  replay intro
                </button>
              </motion.div>

            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
