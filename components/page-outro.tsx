"use client";

import Link from "next/link";
import { PrimaryCta } from "@/components/primary-cta";
import { trackOutroLink } from "@/lib/analytics";

export type OutroLink = {
  href: string;
  label: string;
};

const secondaryClass =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent";

type PageOutroProps = {
  /** Secondary routes from this page. Primary CTA stays Send a brief. */
  links: readonly OutroLink[];
  eyebrow?: string;
  /** mailto (default) or /contact */
  ctaTo?: "email" | "contact";
  /** Hide primary CTA on pages that already lead with it above. */
  showPrimary?: boolean;
};

export function PageOutro({
  links,
  eyebrow = "Next",
  ctaTo = "contact",
  showPrimary = true,
}: PageOutroProps) {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-3 pb-2 md:mt-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
        {eyebrow}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {showPrimary ? <PrimaryCta to={ctaTo} /> : null}
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={secondaryClass}
            onClick={() => trackOutroLink(link.label, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Shared secondary button style for pages that compose their own CTA row. */
export function OutroLinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={secondaryClass}
      onClick={() => trackOutroLink(label, href)}
    >
      {label}
    </Link>
  );
}
