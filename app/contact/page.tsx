"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PrimaryCta } from "@/components/primary-cta";
import { PageOutro } from "@/components/page-outro";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

const directLink =
  "font-mono text-xs uppercase tracking-[0.12em] text-secondary-foreground underline-offset-4 transition-colors hover:text-accent hover:underline";

export default function ContactPage() {
  return (
    <div className="relative flex w-full flex-col items-center py-4 text-center">
      {/* Quiet atmosphere. Not a second hero. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 68%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: EASE_REVEAL }}
        className="relative flex w-full max-w-3xl flex-col items-center"
      >
        <PageMark kind="contact" />
        <p className="type-eyebrow text-accent">{profile.pages.contact.title}</p>

        <h1 className="mt-3 max-w-xl text-[clamp(1.5rem,3.6vw,2.15rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.pages.contact.headline}
        </h1>

        <p className="mt-4 max-w-md text-base font-normal leading-relaxed text-secondary-foreground">
          {profile.pages.contact.fitLine}
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-4">
          <PrimaryCta className="w-full sm:w-auto" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={directLink}
            >
              WhatsApp
            </a>
            <span className="font-mono text-xs text-border" aria-hidden="true">
              ·
            </span>
            <a href={`tel:${profile.phoneTel}`} className={directLink}>
              Call
            </a>
          </div>
        </div>

        {/* Two jobs, side by side on desktop. Hairlines, not cards. */}
        <div className="mt-14 grid w-full gap-10 text-left md:grid-cols-2 md:gap-12">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_REVEAL }}
            className="border-t border-border pt-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {profile.pages.contact.briefLabel}
            </p>
            <p className="mt-2 text-sm text-secondary-foreground">
              {profile.pages.contact.briefHint}
            </p>
            <ol className="mt-5 space-y-3">
              {profile.briefIncludes.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-normal leading-relaxed text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE_REVEAL }}
            className="border-t border-border pt-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {profile.pages.contact.openToLabel}
            </p>
            <p className="mt-2 text-sm text-secondary-foreground">
              {profile.pages.contact.openToHint}{" "}
              <Link href="/services" className="text-accent underline-offset-4 hover:underline">
                {profile.pages.services.title}
              </Link>
              .
            </p>
            <ul className="mt-5 space-y-3">
              {profile.openTo.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.75em] h-px w-3 shrink-0 bg-accent/60" />
                  <span className="text-base font-normal leading-relaxed text-foreground/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <div className="mt-14 flex w-full flex-col items-center border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
            {profile.pages.contact.elsewhere}
          </p>
          <div className="mt-4">
            <SocialLinks includeDirect={false} />
          </div>
        </div>

        <PageOutro
          showPrimary={false}
          eyebrow={profile.pages.contact.outroEyebrow}
          links={[
            { href: "/work", label: "See the work" },
            { href: "/services", label: "Services" },
            { href: "/experience", label: "Open experience" },
            { href: "/toolkit", label: "Toolkit" },
            { href: "/about", label: "About" },
            { href: "/credits", label: "Credits" },
            { href: "/privacy", label: "Privacy" },
          ]}
        />
      </motion.div>
    </div>
  );
}
