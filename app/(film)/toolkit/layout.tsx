import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolkit",
  description:
    "The stack behind the camera. AI automation, Laravel, NestJS, FastAPI, gluestack, and the tools that earn a seat.",
};

export default function ToolkitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
