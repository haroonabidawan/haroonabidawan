import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits",
  description:
    "The crew behind the texture, tone, and final cut. Credits and thanks for Carbon Trail.",
};

export default function CreditsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
