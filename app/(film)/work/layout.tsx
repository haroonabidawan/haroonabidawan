import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Featured work: HireMe, SellIt, Crisis Pass, and RentIt. Live GCC products that carry the proof.",
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
