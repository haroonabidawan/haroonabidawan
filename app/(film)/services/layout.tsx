import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Consultancy, websites, web platforms, mobile apps, and custom systems. Five lanes. One owner.",
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
