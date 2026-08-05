import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";

export const metadata: Metadata = pageMetadata("credits");

export default function CreditsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
