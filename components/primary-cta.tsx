"use client";

import Link from "next/link";
import { trackCta } from "@/lib/analytics";
import { profile } from "@/lib/profile";

type PrimaryCtaProps = {
  className?: string;
  /** mailto (default) or /contact */
  to?: "email" | "contact";
};

function mailtoHref() {
  const subject = encodeURIComponent(profile.cta.subject);
  return `mailto:${profile.email}?subject=${subject}`;
}

const baseClass =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-accent/50 bg-accent/15 px-5 py-2.5 font-wordmark text-sm text-accent transition-colors hover:border-accent";

export function PrimaryCta({ className, to = "email" }: PrimaryCtaProps) {
  const classes = [baseClass, className].filter(Boolean).join(" ");

  const onClick = () => {
    trackCta(to);
  };

  if (to === "contact") {
    return (
      <Link href="/contact" className={classes} onClick={onClick}>
        {profile.cta.label}
      </Link>
    );
  }

  return (
    <a href={mailtoHref()} className={classes} onClick={onClick}>
      {profile.cta.label}
    </a>
  );
}
