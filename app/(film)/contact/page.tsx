"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { PageShell } from "@/components/page-shell";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden">
        <PageShell>
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: CINEMA }}
            className="flex w-full flex-col items-center text-center"
          >
            <p className="type-eyebrow text-accent">Contact</p>

            <h1 className="mt-3 text-[clamp(1.35rem,3.2vw,1.9rem)] font-bold leading-tight tracking-tight text-foreground">
              If the fit is right, we roll.
            </h1>

            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-secondary-foreground">
              I read what you send. I answer like an adult.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-border bg-card/60 px-4 py-2 font-wordmark text-sm text-accent transition-colors hover:border-accent"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneTel}`}
                className="rounded-full border border-border bg-card/60 px-4 py-2 font-wordmark text-sm text-accent transition-colors hover:border-accent"
              >
                {profile.phoneDisplay}
              </a>
            </div>

            <div className="mt-5">
              <SocialLinks />
            </div>

            <div className="mx-auto mt-8 w-full max-w-sm rounded-xl border border-border bg-card/40">
              <div className="border-b border-border px-4 py-3">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {profile.openTo.title}
                </p>
              </div>
              <ul className="px-4 py-3 space-y-2.5">
                {profile.openTo.items.map((item) => (
                  <li key={item} className="flex gap-3 text-left">
                    <span className="mt-[0.6em] h-px w-3 shrink-0 bg-border" />
                    <span className="text-xs font-light leading-relaxed text-secondary-foreground md:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </PageShell>
      </div>

      <div className="flex shrink-0 items-center justify-between border-t border-border px-5 py-3 md:px-8">
        <p className="font-wordmark text-[0.62rem] tracking-[0.06em] text-muted-foreground/60">
          © 2026 {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/credits-and-thanks"
            className="font-mono text-[0.65rem] text-muted-foreground underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
          >
            Credits & Thanks
          </Link>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="font-mono text-[0.65rem] text-muted-foreground/50 underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
          >
            replay intro
          </button>
        </div>
      </div>
    </div>
  );
}
