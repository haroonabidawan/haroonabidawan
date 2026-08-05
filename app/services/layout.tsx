import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { servicesIndexSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={servicesIndexSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
