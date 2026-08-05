import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full project list. HireMe, SellIt, Crisis Pass, RentIt, freelance sites, and earlier work with live links.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
