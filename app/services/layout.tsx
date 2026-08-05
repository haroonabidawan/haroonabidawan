import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Consultancy, websites, web platforms, mobile apps, and custom systems. Five lanes. One owner.",
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
