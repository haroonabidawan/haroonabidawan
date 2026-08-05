import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Featured work: HireMe, SellIt, Crisis Pass, and RentIt. Live GCC products that carry the proof.",
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
