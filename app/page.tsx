"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const greetings = ["Hello", "مرحباً", "خوش آمدید"];

const INTRO_SEEN_KEY = "haa_intro_seen";

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

    const greetingStepMs = 2000;
    const greetingPhaseFadeCompensationMs = 350;

    const englishToArabicGreeting = setTimeout(
      () => setGreetingIndex(1),
      greetingStepMs - greetingPhaseFadeCompensationMs,
    );
    const arabicToUrduGreeting = setTimeout(
      () => setGreetingIndex(2),
      greetingStepMs * 2 - greetingPhaseFadeCompensationMs,
    );
    const showContent = setTimeout(
      () => setPhase("content"),
      greetingStepMs * 3 - greetingPhaseFadeCompensationMs,
    );

    return () => {
      clearTimeout(englishToArabicGreeting);
      clearTimeout(arabicToUrduGreeting);
      clearTimeout(showContent);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <main className="relative flex min-h-screen w-full items-center justify-center px-6 py-10">
        <AnimatePresence mode="wait">
          {phase === "greetings" ? (
            <motion.section
              key="greetings-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center"
            >
              <p className="font-sans text-[clamp(2.8rem,9vw,6.2rem)] font-bold leading-none tracking-[-0.02em] text-foreground">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetings[greetingIndex]}
                    initial={{
                      clipPath: isRtlGreeting
                        ? "inset(0 0 0 100%)"
                        : "inset(0 100% 0 0)",
                    }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    exit={{
                      clipPath: isRtlGreeting
                        ? "inset(0 100% 0 0)"
                        : "inset(0 0 0 100%)",
                    }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
            >
              <div className="mt-8 flex flex-col items-center gap-2">
                <motion.p
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-sans text-sm font-medium tracking-widest text-muted-foreground"
                >
                  I&apos;m
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.72, delay: 0.1, ease: "easeOut" }}
                  className="font-sans max-w-4xl whitespace-nowrap text-[clamp(2.1rem,6.2vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.015em] text-foreground"
                >
                  Haroon Abid Awan,
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.62, delay: 0.24, ease: "easeOut" }}
                  className="font-wordmark text-sm tracking-[0.02em] text-muted-foreground md:text-base"
                >
                  Full Stack Engineer & AI Automation Specialist
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                className="font-sans mt-12 max-w-4xl text-balance text-[clamp(1.05rem,2.3vw,1.55rem)] font-semibold leading-[1.3] tracking-[-0.01em] text-foreground"
              >
                I design{" "}
                <span className="text-accent">systems that scale</span> and{" "}
                <span className="text-accent">AI that ships</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.68, delay: 1.08, ease: "easeOut" }}
                className="mt-10 max-w-3xl type-body text-secondary-foreground"
              >
                <span className="font-medium text-foreground">Currently coding this portfolio.</span>{" "}
                Check back soon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 1.44, ease: "easeOut" }}
                className="mt-6 flex flex-col items-center gap-5"
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
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
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
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent md:h-11 md:w-11"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="mailto:Haroon.abid.1999@gmail.com"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
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
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
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
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
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
                initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 1.9, ease: "easeOut" }}
                className="mt-4 font-wordmark text-xs tracking-[0.08em] text-muted-foreground"
              >
                © 2026 Haroon Abid Awan
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: 2.0, ease: "easeOut" }}
                className="mt-3 flex items-center gap-4"
              >
                <Link
                  href="/credits"
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
