import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { rootMetadata } from "@/lib/meta";
import { rootSchemaDocument } from "@/lib/schema";
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

export const metadata: Metadata = rootMetadata;

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
        <JsonLd data={rootSchemaDocument()} />
        <Analytics />
        <div
          className="pointer-events-none fixed inset-0 z-8 opacity-35"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 47%, color-mix(in oklab, var(--foreground) 7%, transparent) 50%, transparent 53%, transparent 100%)",
            backgroundSize: "100% 9rem",
          }}
        />
        <div
          className="pointer-events-none fixed inset-0 z-10"
          style={{ boxShadow: "inset 0 0 220px var(--vignette)" }}
        />
        {children}
      </body>
    </html>
  );
}
