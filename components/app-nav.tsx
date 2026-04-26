"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/profile";

const items = [
  { href: "/", label: "Title" },
  { href: "/about", label: "About" },
  { href: "/timeline", label: "Timeline" },
  { href: "/frames", label: "Frames" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/contact", label: "Contact" },
  { href: "/credits", label: "Credits" },
] as const;

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/90 backdrop-blur-md"
      aria-label="Site"
    >
      {/* Mobile: two rows, links above logo and socials */}
      <div className="flex flex-col md:hidden">
        {/* Links row, centered and scrollable if needed */}
        <div className="flex items-center justify-center overflow-x-auto border-b border-border/50 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "shrink-0 px-2.5 py-2 font-mono text-[0.58rem] uppercase tracking-widest transition-all",
                  active ? "text-accent" : "text-muted-foreground",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Logo + socials row */}
        <div className="flex items-center justify-between px-3 py-1.5">
          <Link href="/" className="opacity-80 transition-opacity hover:opacity-100" aria-label="Home">
            <Image src="/logo.png" alt="" width={64} height={64} className="h-6 w-6 object-contain" />
          </Link>
          <div className="flex items-center gap-1">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email"
              className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current" fill="none" strokeWidth="1.8">
                <path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" />
                <path d="m5 8 7 5 7-5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: single row */}
      <div className="mx-auto hidden max-w-5xl items-center gap-3 px-5 py-2.5 md:flex">
        <Link href="/" className="shrink-0 opacity-80 transition-opacity hover:opacity-100" aria-label="Home">
          <Image src="/logo.png" alt="" width={64} height={64} className="h-8 w-8 object-contain" />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-0.5">
            {items.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "shrink-0 rounded-full px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest transition-all",
                    active ? "bg-card text-accent" : "text-muted-foreground hover:text-secondary-foreground",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.38.21 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5Zm1.36 1.19H5.58V19h2.72V9.69Zm4.34 0H9.96V19h2.68v-4.88c0-1.29.24-2.53 1.84-2.53 1.58 0 1.6 1.48 1.6 2.62V19H18.8v-5.35c0-2.63-.57-4.65-3.65-4.65-1.48 0-2.47.81-2.87 1.58h-.04V9.69Z" />
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email"
            className="flex h-7 w-7 items-center justify-center text-muted-foreground transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current" fill="none" strokeWidth="1.8">
              <path d="M4 7.2C4 6.54 4.54 6 5.2 6h13.6c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H5.2c-.66 0-1.2-.54-1.2-1.2V7.2Z" />
              <path d="m5 8 7 5 7-5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
