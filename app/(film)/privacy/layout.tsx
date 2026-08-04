import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How this portfolio handles contact, analytics, and your data. Short, plain, and specific.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
