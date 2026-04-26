import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Haroon Abid Awan",
  description:
    "Senior full stack and AI-enabled automation engineer. Multi-tenant SaaS, Laravel, NestJS, and calm systems that ship.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div
          className="pointer-events-none fixed inset-0 z-8 opacity-35"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 47%, color-mix(in oklab, var(--foreground) 7%, transparent) 50%, transparent 53%, transparent 100%)",
            backgroundSize: "100% 9rem",
          }}
        />
        {/* Vignette: darkens edges to pull focus to center */}
        <div
          className="pointer-events-none fixed inset-0 z-10"
          style={{ boxShadow: "inset 0 0 220px var(--vignette)" }}
        />
        {children}
      </body>
    </html>
  );
}
