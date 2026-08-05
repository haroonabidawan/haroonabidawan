import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { experiencePageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("experience");

export default function ExperienceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={experiencePageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
