"use client";

import { motion } from "motion/react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PageOutro } from "@/components/page-outro";
import { RepoDocLinks } from "@/components/repo-doc-links";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

const sections = [
  {
    title: "What this site collects",
    body: "This portfolio does not run an account system or store form submissions on a server of mine. If you email or call, that conversation lives in the channel you chose. Page traffic is measured with Google Analytics, as described below.",
  },
  {
    title: "Contact",
    body: "Email reaches me through Send a brief. Phone and WhatsApp use the numbers on Contact. I use those details only to reply about work. I do not sell them.",
  },
  {
    title: "Analytics",
    body: "This site uses Google Analytics 4 (GA4). It records page views, device and browser basics, approximate location, and a few interaction events such as navigation and Send a brief. Google may set cookies or similar identifiers for that measurement. I use the numbers to see which pages and CTAs earn attention. No ads on this site. I do not sell remarketing lists or traffic data to third parties.",
  },
  {
    title: "Google's role",
    body: "GA4 is processed by Google under their terms and privacy policy. You can limit ad personalization and measurement cookies in your browser settings, or through Google's own controls where available.",
  },
  {
    title: "Third-party sites",
    body: "Live project links leave this domain. Those sites have their own policies. Resume downloads are served as a static file from this host.",
  },
  {
    title: "Open source",
    body: "This portfolio is published on GitHub under the MIT license. Documentation, contributing guidelines, and security reporting are linked below.",
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
        transition={{ duration: 0.9, ease: EASE_REVEAL }}
        className="flex w-full max-w-2xl flex-col items-center"
      >
        <PageMark kind="privacy" />
        <p className="type-eyebrow text-accent">{profile.pages.privacy.title}</p>
        <h1 className="mt-3 text-[clamp(1.35rem,3.2vw,1.9rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.pages.privacy.h1}
        </h1>
        <p className="mt-3 max-w-md text-base font-normal leading-relaxed text-secondary-foreground">
          {profile.pages.privacy.subtitle}
        </p>

        <div className="mt-10 w-full space-y-8 text-left">
          {sections.map((section, i) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06 * i, ease: EASE_REVEAL }}
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

        <RepoDocLinks className="mt-8" />

        <PageOutro
          links={[
            { href: "/credits", label: "Credits" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/", label: "Back home" },
          ]}
        />
      </motion.div>
    </div>
  );
}
