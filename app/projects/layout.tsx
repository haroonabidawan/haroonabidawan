import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/meta";
import { projectsPageSchemaDocument } from "@/lib/schema";

export const metadata: Metadata = pageMetadata("projects");

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={projectsPageSchemaDocument()} />
      <PageShell>{children}</PageShell>
    </>
  );
}
