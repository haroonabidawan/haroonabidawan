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
  description: "Portfolio coming soon.",
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
        {/* Letterbox bars — cinematic frame on every page */}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-10 bg-background md:h-14" />
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-10 bg-background md:h-14" />
        {/* Vignette — darkens edges to pull focus to center */}
        <div
          className="pointer-events-none fixed inset-0 z-10"
          style={{ boxShadow: "inset 0 0 220px var(--vignette)" }}
        />
        {children}
      </body>
    </html>
  );
}
