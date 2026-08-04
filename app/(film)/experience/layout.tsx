import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roles where trust was earned. Problem, decision, outcome across Bespoke, Nordic, Fathom, and earlier chapters.",
};

export default function ExperienceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
