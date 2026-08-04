import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/analytics";
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
  metadataBase: new URL("https://haroonabidawan.com"),
  title: {
    default: "Haroon Abid Awan",
    template: "%s · Haroon Abid Awan",
  },
  description:
    "Senior full stack and AI-enabled automation engineer. Multi-tenant SaaS, Laravel, NestJS, FastAPI, and calm systems that ship.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Haroon Abid Awan",
    description:
      "Calm systems. Clear ownership. Software you can run at midnight without holding your breath.",
    url: "https://haroonabidawan.com",
    siteName: "Haroon Abid Awan",
    type: "website",
    images: [{ url: "/stills/hireme.webp", width: 1280, height: 800, alt: "Haroon Abid Awan" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
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
