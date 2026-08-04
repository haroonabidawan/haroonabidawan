import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Contact handling, Google Analytics 4 on this portfolio, and what I do with your data. Short, plain, and specific.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
