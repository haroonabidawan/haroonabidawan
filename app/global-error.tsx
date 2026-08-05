"use client";

import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
});

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">
        <main className="flex min-h-dvh flex-col items-center justify-center px-5 text-center">
          <p className="type-eyebrow text-accent">System fault</p>
          <h1 className="mt-3 max-w-md text-[clamp(1.5rem,4vw,2.1rem)] font-bold leading-tight tracking-tight text-foreground">
            The lights went out.
          </h1>
          <p className="mt-3 max-w-sm text-base text-secondary-foreground">
            A hard failure at the root. Reset and try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-accent/50 bg-accent/15 px-5 py-2.5 font-wordmark text-sm text-accent transition-colors hover:border-accent"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
