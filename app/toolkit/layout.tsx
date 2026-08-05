import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Toolkit",
  description:
    "The stack behind the products. AI automation, Laravel, NestJS, FastAPI, security, payments, and the tools that ship.",
};

export default function ToolkitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageShell>{children}</PageShell>;
}
