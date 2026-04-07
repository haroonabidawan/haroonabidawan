"use client";

import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0C0C0C", color: "#E8E0D0" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(78,122,86,0.24), transparent 42%), radial-gradient(circle at 8% 88%, rgba(58,90,64,0.2), transparent 38%)",
        }}
      />
      <main className="relative flex min-h-screen w-full items-center justify-center px-6 py-10">
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.section
              key="logo-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="Haroon Abid Awan logo"
                  width={240}
                  height={240}
                  className="h-36 w-36 object-contain md:h-48 md:w-48"
                  priority
                />
              </motion.div>
            </motion.section>
          ) : (
            <motion.section
              key="main-content"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mx-auto flex w-full max-w-5xl flex-col items-start text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${spaceGrotesk.className} mt-8 max-w-4xl text-[clamp(2.1rem,6.2vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.015em]`}
                style={{ color: "#E8E0D0" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                  className="block text-[1.25em] md:text-[1.32em]"
                >
                  Hey,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.92, ease: "easeOut" }}
                  className="mt-5 block whitespace-nowrap"
                >
                  I&apos;m Haroon Abid Awan.
                </motion.span>
              </motion.h1>

              <div className="mt-8 space-y-2">
                {[
                  "Senior Full Stack Engineer/",
                  "AI Automation Specialist/",
                  "Scalable Product Architect",
                ].map((item, index) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.62, delay: 1.24 + index * 0.18, ease: "easeOut" }}
                    className="type-eyebrow font-wordmark"
                    style={{ color: "#A8A090", textTransform: "none" }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.72, delay: 1.86, ease: "easeOut" }}
                className="mt-5 max-w-2xl type-body"
                style={{ color: "#A8A090" }}
              >
                A fresh portfolio experience is currently in the works. New details,
                selected work, and deeper case studies are coming very soon.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.72, delay: 2.04, ease: "easeOut" }}
                className="mt-5 max-w-3xl type-body"
                style={{ color: "#E8E0D0" }}
              >
                I design and ship robust web platforms, intelligent automation
                workflows, and production-grade systems that keep performance and
                maintainability at the center.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                className="mt-6 flex items-center gap-4"
              >
                <motion.a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                  style={{ borderColor: "#2E2E2E", color: "#90C0A0", backgroundColor: "#1A1A1A" }}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
                  style={{ borderColor: "#2E2E2E", color: "#90C0A0", backgroundColor: "#1A1A1A" }}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.8">
                    <path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" />
                    <path d="m5 8 7 5 7-5" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 2.34, ease: "easeOut" }}
                className="mt-8 inline-flex items-center gap-3 rounded-full border px-5 py-2"
                style={{ borderColor: "#2E2E2E", backgroundColor: "#1A1A1A" }}
              >
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  style={{ color: "#4E7A56" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
                  <path d="M19.5 12a7.5 7.5 0 0 0-.08-1.1l2-1.56-2-3.47-2.43.72a7.62 7.62 0 0 0-1.9-1.1L14.7 3h-4.01l-.39 2.49a7.6 7.6 0 0 0-1.9 1.1l-2.43-.72-2 3.47 2 1.56a7.5 7.5 0 0 0 0 2.2l-2 1.56 2 3.47 2.43-.72a7.62 7.62 0 0 0 1.9 1.1L10.69 21h4.01l.39-2.49a7.6 7.6 0 0 0 1.9-1.1l2.43.72 2-3.47-2-1.56c.05-.36.08-.73.08-1.1Z" />
                </motion.svg>
                <span className="type-eyebrow font-wordmark" style={{ color: "#90C0A0" }}>
                  SYSTEM CALIBRATION IN PROGRESS
                </span>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
