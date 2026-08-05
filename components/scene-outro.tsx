"use client";

import Link from "next/link";
import { PrimaryCta } from "@/components/primary-cta";

export type SceneLink = {
  href: string;
  label: string;
};

const secondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent";

type SceneOutroProps = {
  /** Secondary routes from this page. Primary CTA stays Send a brief. */
  links: readonly SceneLink[];
  eyebrow?: string;
  /** mailto (default) or /contact */
  ctaTo?: "email" | "contact";
  /** Hide primary CTA on pages that already lead with it above. */
  showPrimary?: boolean;
};

export function SceneOutro({
  links,
  eyebrow = "Next",
  ctaTo = "contact",
  showPrimary = true,
}: SceneOutroProps) {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-3 pb-2 md:mt-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
        {eyebrow}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {showPrimary ? <PrimaryCta to={ctaTo} /> : null}
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href} className={secondaryClass}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Shared secondary button style for pages that compose their own CTA row. */
export function SceneLinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className={secondaryClass}>
      {label}
    </Link>
  );
}
