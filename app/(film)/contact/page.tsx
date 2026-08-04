"use client";

import { motion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { PrimaryCta } from "@/components/primary-cta";
import { SceneOutro } from "@/components/scene-outro";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-transparent px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent";

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
        transition={{ duration: 1, ease: CINEMA }}
        className="relative flex w-full max-w-3xl flex-col items-center"
      >
        <SceneMark kind="brief" />
        <p className="type-eyebrow text-accent">Contact</p>

        <h1 className="mt-3 max-w-xl text-[clamp(1.5rem,3.6vw,2.15rem)] font-bold leading-tight tracking-tight text-foreground">
          Send the brief. I&apos;ll reply with a clear next step.
        </h1>

        <p className="mt-4 max-w-md text-base font-normal leading-relaxed text-secondary-foreground">
          {profile.location}. {profile.availability}.
          <span className="mt-1 block text-foreground/90">If the fit is right, we roll cameras.</span>
        </p>

        {/* One reach cluster. No icon-only doubles. */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta />
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={secondaryBtn}
          >
            WhatsApp
          </a>
          <a href={`tel:${profile.phoneTel}`} className={secondaryBtn}>
            Call
          </a>
        </div>

        <p className="mt-4 font-mono text-sm tracking-[0.04em] text-secondary-foreground">
          {profile.email}
        </p>

        {/* Two jobs, side by side on desktop. Hairlines, not cards. */}
        <div className="mt-14 grid w-full gap-10 text-left md:grid-cols-2 md:gap-12">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: CINEMA }}
            className="border-t border-border pt-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              The brief
            </p>
            <p className="mt-2 text-sm text-secondary-foreground">
              Four lines. Enough to start.
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
            transition={{ duration: 0.7, delay: 0.18, ease: CINEMA }}
            className="border-t border-border pt-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Open to
            </p>
            <p className="mt-2 text-sm text-secondary-foreground">
              Roles and spikes that earn the chair.
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
            Elsewhere
          </p>
          <div className="mt-4">
            <SocialLinks includeDirect={false} />
          </div>
        </div>

        <SceneOutro
          showPrimary={false}
          eyebrow="Keep exploring"
          links={[
            { href: "/work", label: "See the work" },
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
