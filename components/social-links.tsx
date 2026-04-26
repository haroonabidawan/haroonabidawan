"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/profile";

const spring = { type: "spring" as const, stiffness: 380, damping: 22 };

type Size = "sm" | "md";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-10 w-10 md:h-11 md:w-11 [&_svg]:h-5 [&_svg]:w-5",
};

export function SocialLinks({
  size = "md",
  className = "",
}: {
  size?: Size;
  /** Merged onto the outer row (e.g. tighter gap in the nav). */
  className?: string;
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
    </div>
  );
}
