import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { contactPageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={contactPageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
