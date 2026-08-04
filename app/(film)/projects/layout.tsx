import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All project frames. HireMe, SellIt, Crisis Pass, RentIt, freelance sites, and earlier work with live links.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
