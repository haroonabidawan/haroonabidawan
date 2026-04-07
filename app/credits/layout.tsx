import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits & Thanks · Haroon Abid Awan",
};

export default function CreditsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
