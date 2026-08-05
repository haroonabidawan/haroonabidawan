import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who I am, what I ship, how I work. RentIt, Crisis Pass, SellIt, HireMe, and calm systems that still run at midnight.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
