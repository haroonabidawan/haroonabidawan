"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";

const spring = { type: "spring" as const, stiffness: 380, damping: 22 };

type Size = "sm" | "md";

const sizeClasses: Record<Size, string> = {
  sm: "h-11 w-11 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
};

export function SocialLinks({
  size = "md",
  className = "",
  includeDirect = true,
}: {
  size?: Size;
  /** Merged onto the outer row (e.g. tighter gap in the nav). */
  className?: string;
  /** Phone + WhatsApp. Turn off when those live in a labeled CTA row. */
  includeDirect?: boolean;
}) {
  const cn = `inline-flex items-center justify-center rounded-full border border-border bg-card text-secondary-foreground transition-colors hover:text-accent ${sizeClasses[size]}`;

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 ${className}`}>
      <motion.a
        href={profile.links.github}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        aria-label="GitHub"
        className={cn}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
        </svg>
      </motion.a>

      <motion.a
        href={profile.links.linkedin}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        aria-label="LinkedIn"
        className={cn}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
        </svg>
      </motion.a>

      <motion.a
        href={profile.links.instagram}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        aria-label="Instagram"
        className={cn}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.15a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 4.4c-2.07 0-2.33.01-3.14.05-.8.04-1.35.17-1.83.36a3.7 3.7 0 0 0-1.34.87 3.7 3.7 0 0 0-.87 1.34c-.19.48-.32 1.03-.36 1.83C4.41 9.67 4.4 9.93 4.4 12s.01 2.33.05 3.14c.04.8.17 1.35.36 1.83.2.5.46.93.87 1.34.41.41.84.67 1.34.87.48.19 1.03.32 1.83.36.81.04 1.07.05 3.14.05s2.33-.01 3.14-.05c.8-.04 1.35-.17 1.83-.36a3.7 3.7 0 0 0 1.34-.87 3.7 3.7 0 0 0 .87-1.34c.19-.48.32-1.03.36-1.83.04-.81.05-1.07.05-3.14s-.01-2.33-.05-3.14c-.04-.8-.17-1.35-.36-1.83a3.7 3.7 0 0 0-.87-1.34 3.7 3.7 0 0 0-1.34-.87c-.48-.19-1.03-.32-1.83-.36C14.33 4.41 14.07 4.4 12 4.4Zm0 1.7c2.04 0 2.28.01 3.08.05.74.03 1.15.16 1.42.26.36.14.61.31.88.58.27.27.44.52.58.88.1.27.23.68.26 1.42.04.8.05 1.04.05 3.08s-.01 2.28-.05 3.08c-.03.74-.16 1.15-.26 1.42-.14.36-.31.61-.58.88a2.37 2.37 0 0 1-.88.58c-.27.1-.68.23-1.42.26-.8.04-1.04.05-3.08.05s-2.28-.01-3.08-.05c-.74-.03-1.15-.16-1.42-.26a2.37 2.37 0 0 1-.88-.58 2.37 2.37 0 0 1-.58-.88c-.1-.27-.23-.68-.26-1.42C6.11 14.28 6.1 14.04 6.1 12s.01-2.28.05-3.08c.03-.74.16-1.15.26-1.42.14-.36.31-.61.58-.88.27-.27.52-.44.88-.58.27-.1.68-.23 1.42-.26.8-.04 1.04-.05 3.08-.05Z" />
        </svg>
      </motion.a>

      <motion.a
        href={profile.links.facebook}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        aria-label="Facebook"
        className={cn}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current">
          <path d="M13.5 21v-7.5H16l.5-3h-3V8.7c0-.9.2-1.5 1.6-1.5H16.5V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.5H8v3h2.3V21h3.2Z" />
        </svg>
      </motion.a>

      <motion.a
        href={`mailto:${profile.email}`}
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={spring}
        aria-label="Email"
        className={cn}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="stroke-current" fill="none" strokeWidth="1.8">
          <path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" />
          <path d="m5 8 7 5 7-5" />
        </svg>
      </motion.a>

      {includeDirect ? (
        <>
          <motion.a
            href={`tel:${profile.phoneTel}`}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            aria-label="Phone"
            className={cn}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="stroke-current" fill="none" strokeWidth="1.8">
              <path d="M6.5 4.5h3l1.2 3-1.6 1.6a12 12 0 0 0 5.3 5.3l1.6-1.6 3 1.2v3a1.5 1.5 0 0 1-1.4 1.5 17 17 0 0 1-15-15A1.5 1.5 0 0 1 6.5 4.5Z" />
            </svg>
          </motion.a>

          <motion.a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            aria-label="WhatsApp"
            className={cn}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.79 14.04c-.24.68-1.42 1.25-1.96 1.33-.5.07-1.14.1-1.84-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.24-5-4.44-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.3.38-.43.51-.14.14-.29.29-.12.56.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.63-.14.26.1 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
            </svg>
          </motion.a>
        </>
      ) : null}
    </div>
  );
}
