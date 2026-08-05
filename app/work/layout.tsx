import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { workPageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("work");

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={workPageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
