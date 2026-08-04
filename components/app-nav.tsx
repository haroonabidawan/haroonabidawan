"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type NavEvent = "nav_frames" | "nav_timeline" | "nav_contact" | null;

type MobileTab = {
  href: string;
  label: string;
  event: NavEvent;
  icon: "home" | "work" | "path" | "contact";
};

/** Same labels as desktop web nav. */
const mobileTabs: MobileTab[] = [
  { href: "/", label: "Home", event: null, icon: "home" },
  { href: "/frames", label: "Work", event: "nav_frames", icon: "work" },
  { href: "/timeline", label: "Experience", event: "nav_timeline", icon: "path" },
  { href: "/contact", label: "Contact", event: "nav_contact", icon: "contact" },
];

/** Desktop-only extras that do not fit the primary dock. */
const moreLinks = [
  { href: "/about", label: "About" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/credits", label: "Credits" },
] as const;

const moreActiveHrefs = new Set<string>(moreLinks.map((l) => l.href));

const desktopItems = [
  { href: "/about", label: "About", event: null as NavEvent },
  { href: "/timeline", label: "Experience", event: "nav_timeline" as NavEvent },
  { href: "/frames", label: "Work", event: "nav_frames" as NavEvent },
  { href: "/toolkit", label: "Toolkit", event: null as NavEvent },
  { href: "/contact", label: "Contact", event: "nav_contact" as NavEvent },
  { href: "/credits", label: "Credits", event: null as NavEvent },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/frames") return pathname === "/frames" || pathname === "/projects";
  return pathname === href;
}

function TabIcon({
  name,
  active,
}: {
  name: MobileTab["icon"] | "more";
  active: boolean;
}) {
  const stroke = active ? "stroke-accent" : "stroke-current";

  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stroke}`} fill="none" strokeWidth="1.7" aria-hidden="true">
          <path d="M4.5 10.5 12 4l7.5 6.5V20a1 1 0 0 1-1 1h-4.5v-5.5h-4V21H5.5a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
        </svg>
      );
    case "work":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stroke}`} fill="none" strokeWidth="1.7" aria-hidden="true">
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "path":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stroke}`} fill="none" strokeWidth="1.7" aria-hidden="true">
          <path d="M6 4v12.5a2.5 2.5 0 1 0 2.5 2.5" strokeLinecap="round" />
          <path d="M6 8h8.5a2.5 2.5 0 0 0 0-5H12" strokeLinecap="round" />
          <circle cx="17.5" cy="19" r="2.5" className={active ? "fill-accent/20" : "fill-none"} />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stroke}`} fill="none" strokeWidth="1.7" aria-hidden="true">
          <path d="M5 7.5C5 6.67 5.67 6 6.5 6h11c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-9Z" />
          <path d="m6.5 8 5.5 4 5.5-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "more":
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stroke}`} fill="none" strokeWidth="1.7" aria-hidden="true">
          <circle cx="6.5" cy="12" r="1.35" className={active ? "fill-accent" : "fill-current"} />
          <circle cx="12" cy="12" r="1.35" className={active ? "fill-accent" : "fill-current"} />
          <circle cx="17.5" cy="12" r="1.35" className={active ? "fill-accent" : "fill-current"} />
        </svg>
      );
  }
}

function tabClass(active: boolean, grow = "flex-1") {
  return [
    "relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-1.5 transition-colors",
    grow,
    active ? "bg-accent/15 text-accent" : "text-secondary-foreground active:bg-background/60",
  ].join(" ");
}

const tabLabelClass =
  "max-w-full px-0.5 text-center font-mono text-[0.58rem] font-medium uppercase leading-none tracking-[0.04em]";

export function AppNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const panelId = useId();
  const moreActive = moreOpen || moreActiveHrefs.has(pathname);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40" aria-label="Site">
      {/* Mobile more sheet */}
      <div className="md:hidden">
        {moreOpen ? (
          <button
            type="button"
            aria-label="Close more menu"
            className="fixed inset-0 z-40 bg-background/55 backdrop-blur-sm"
            onClick={() => setMoreOpen(false)}
          />
        ) : null}

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="More pages"
          aria-hidden={!moreOpen}
          className={[
            "pointer-events-none fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-50 px-3 transition duration-300",
            moreOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div
            className={[
              "mx-auto max-w-md overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-[0_16px_48px_color-mix(in_oklab,var(--bg-base)_88%,transparent)] backdrop-blur-xl",
              moreOpen ? "pointer-events-auto" : "pointer-events-none",
            ].join(" ")}
          >
            <div className="border-b border-border px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">More</p>
            </div>
            <ul className="divide-y divide-border">
              {moreLinks.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMoreOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "flex min-h-14 items-center justify-between gap-3 px-4 py-3 transition-colors",
                        active ? "bg-accent/10 text-accent" : "text-foreground active:bg-background/50",
                      ].join(" ")}
                    >
                      <span className="font-wordmark text-sm">{item.label}</span>
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 stroke-current" fill="none" strokeWidth="1.8" aria-hidden="true">
                        <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile tab bar */}
      <div className="pointer-events-none px-2 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 md:hidden">
        <div className="pointer-events-auto relative z-50 mx-auto flex max-w-md items-stretch gap-1 rounded-2xl border border-border/80 bg-card/95 px-1 py-1.5 shadow-[0_12px_40px_color-mix(in_oklab,var(--bg-base)_85%,transparent)] backdrop-blur-xl">
          {mobileTabs.map(({ href, label, event, icon }) => {
            const active = isActive(pathname, href);
            const grow = href === "/timeline" ? "flex-[1.55]" : "flex-1";
            return (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  setMoreOpen(false);
                  if (event) trackEvent(event);
                }}
                aria-current={active ? "page" : undefined}
                className={tabClass(active, grow)}
              >
                {active ? (
                  <span aria-hidden="true" className="absolute inset-x-2 top-1 h-0.5 rounded-full bg-accent/80" />
                ) : null}
                <TabIcon name={icon} active={active} />
                <span className={tabLabelClass}>{label}</span>
              </Link>
            );
          })}

          <button
            type="button"
            aria-label="More"
            aria-expanded={moreOpen}
            aria-controls={panelId}
            onClick={() => setMoreOpen((v) => !v)}
            className={tabClass(moreActive, "flex-[0.9]")}
          >
            {moreActive ? (
              <span aria-hidden="true" className="absolute inset-x-2 top-1 h-0.5 rounded-full bg-accent/80" />
            ) : null}
            <TabIcon name="more" active={moreActive} />
            <span className={tabLabelClass}>More</span>
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-6xl items-center gap-3 border-t border-border bg-background/90 px-5 py-2.5 backdrop-blur-md md:flex">
        <Link href="/" className="shrink-0 opacity-90 transition-opacity hover:opacity-100" aria-label="Home">
          <Image src="/logo.png" alt="" width={64} height={64} className="h-8 w-8 object-contain" />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1">
            {desktopItems.map(({ href, label, event }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => {
                    if (event) trackEvent(event);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "inline-flex min-h-12 shrink-0 items-center rounded-full px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all",
                    active
                      ? "bg-card text-accent"
                      : "text-secondary-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="h-8 w-8 shrink-0" aria-hidden="true" />
      </div>
    </nav>
  );
}
