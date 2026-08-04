import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send the brief. Clear next step. Email, phone, and what to include so we can move fast.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
