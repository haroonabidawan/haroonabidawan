import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { toolkitPageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("toolkit");

export default function ToolkitLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={toolkitPageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
