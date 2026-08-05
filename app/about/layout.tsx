import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { aboutPageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("about");

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={aboutPageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
