import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Credits",
  description:
    "The people behind the brand, tone, and finish. Credits and thanks for Carbon Trail.",
};

export default function CreditsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
