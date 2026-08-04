"use client";

import { motion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const sections = [
  {
    title: "What this site collects",
    body: "This portfolio does not run an account system or store form submissions on a server of mine. If you email or call, that conversation lives in the channel you chose.",
  },
  {
    title: "Contact",
    body: `Email goes to ${profile.email}. Phone goes to ${profile.phoneDisplay}. I use those details only to reply about work. I do not sell them.`,
  },
  {
    title: "Analytics",
    body: "Analytics load only if a measurement ID is configured in the deployment environment. When active, they help me see which pages and CTAs earn attention. No ads. No remarketing lists sold to third parties.",
  },
  {
    title: "Third-party sites",
    body: "Live project links leave this domain. Those sites have their own policies. Resume downloads are served as a static file from this host.",
  },
  {
    title: "Questions",
    body: "If something here feels unclear, send a brief. I will answer plainly.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="flex w-full flex-col items-center py-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="flex w-full max-w-2xl flex-col items-center"
      >
        <SceneMark kind="midnight" />
        <p className="type-eyebrow text-accent">Privacy</p>
        <h1 className="mt-3 text-[clamp(1.35rem,3.2vw,1.9rem)] font-bold leading-tight tracking-tight text-foreground">
          Clear ownership. Including your data.
        </h1>
        <p className="mt-3 max-w-md text-base font-normal leading-relaxed text-secondary-foreground">
          Short page. No legal fog. What happens when you visit or reach out.
        </p>

        <div className="mt-10 w-full space-y-8 text-left">
          {sections.map((section, i) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06 * i, ease: CINEMA }}
              className="border-t border-border pt-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {section.title}
              </p>
              <p className="mt-3 text-base font-normal leading-relaxed text-secondary-foreground">
                {section.body}
              </p>
            </motion.section>
          ))}
        </div>

        <SceneOutro
          links={[
            { href: "/credits", label: "Credits" },
            { href: "/about", label: "About" },
            { href: "/", label: "Back home" },
          ]}
        />
      </motion.div>
    </div>
  );
}
