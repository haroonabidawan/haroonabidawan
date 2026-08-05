"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AppNav } from "@/components/app-nav";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main className="relative z-20 flex min-h-dvh flex-1 flex-col items-center justify-center px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] text-center md:pb-28">
        <p className="type-eyebrow text-accent">Error</p>
        <h1 className="mt-3 max-w-md text-[clamp(1.5rem,4vw,2.1rem)] font-bold leading-tight tracking-tight text-foreground">
          Something went wrong.
        </h1>
        <p className="mt-3 max-w-sm text-base text-secondary-foreground">
          A fault during load. Try again, or return to a known page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/50 bg-accent/15 px-5 py-2.5 font-wordmark text-sm text-accent transition-colors hover:border-accent"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Back to home
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See the work
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/60 px-5 py-2.5 font-wordmark text-sm text-secondary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Services
          </Link>
        </div>
      </main>
      <AppNav />
    </>
  );
}
