import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PrimaryCta } from "@/components/primary-cta";
import { PageOutro } from "@/components/page-outro";
import { serviceMetadata } from "@/lib/meta";
import {
  getAdjacentServices,
  getServiceById,
  profile,
  type ServiceId,
} from "@/lib/profile";
import { servicePageSchemaDocument } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return profile.services.items.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    return { title: "Services" };
  }
  return serviceMetadata(service);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const index = profile.services.items.findIndex((item) => item.id === service.id);
  const { prev, next } = getAdjacentServices(service.id as ServiceId);
  const proof = (service.proofIds ?? [])
    .map((name) => profile.projects.find((project) => project.name === name))
    .filter((project): project is (typeof profile.projects)[number] => Boolean(project));

  return (
    <div className="flex w-full flex-col items-center py-4 text-center">
      <JsonLd data={servicePageSchemaDocument(service)} />
      <div className="flex w-full max-w-2xl flex-col items-center">
        <Image
          src={service.icon}
          alt=""
          width={128}
          height={128}
          className="mb-5 h-28 w-28 select-none object-contain md:h-32 md:w-32"
          sizes="128px"
          priority
          draggable={false}
        />
        <p className="type-eyebrow text-accent">Services</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-secondary-foreground">
          {String(index + 1).padStart(2, "0")} / {String(profile.services.items.length).padStart(2, "0")}
        </p>
        <h1 className="mt-3 text-[clamp(1.5rem,3.6vw,2.1rem)] font-bold leading-tight tracking-tight text-foreground">
          {service.title}
        </h1>
        <p className="mt-3 max-w-lg font-wordmark text-base text-accent md:text-lg">
          {service.hook}
        </p>
        <p className="mt-4 max-w-xl text-left text-base font-normal leading-relaxed text-secondary-foreground md:text-center">
          {service.overview}
        </p>

        <div className="mt-10 w-full space-y-8 text-left">
          <section className="border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Fits</p>
            <ul className="mt-3 space-y-2.5">
              {service.fits.map((line) => (
                <li
                  key={line}
                  className="border-l border-accent/50 pl-3 text-base leading-relaxed text-secondary-foreground"
                >
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Delivers</p>
            <ul className="mt-3 space-y-2.5">
              {service.delivers.map((line) => (
                <li
                  key={line}
                  className="border-l border-accent/50 pl-3 text-base leading-relaxed text-secondary-foreground"
                >
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Stack signals
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.stack.map((item) => (
                <span
                  key={item}
                  className="border border-border/80 bg-background/80 px-3 py-1.5 text-sm font-normal text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {proof.length > 0 ? (
            <section className="border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Proof</p>
              <ul className="mt-3 space-y-2">
                {proof.map((project) => (
                  <li key={project.name}>
                    {"href" in project && project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center font-wordmark text-sm text-accent underline-offset-4 transition-colors hover:underline"
                      >
                        {project.name}
                      </a>
                    ) : (
                      <Link
                        href="/work"
                        className="inline-flex min-h-12 items-center font-wordmark text-sm text-accent underline-offset-4 transition-colors hover:underline"
                      >
                        {project.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/work"
                className="mt-2 inline-flex min-h-12 items-center font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground transition-colors hover:text-accent"
              >
                See the work
              </Link>
            </section>
          ) : null}

          <nav
            aria-label="Adjacent services"
            className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6"
          >
            <Link
              href={`/services/${prev.id}`}
              className="inline-flex min-h-12 max-w-[45%] flex-col items-start justify-center text-left"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-secondary-foreground">
                Previous
              </span>
              <span className="mt-0.5 font-wordmark text-sm text-accent">{prev.title}</span>
            </Link>
            <Link
              href={`/services/${next.id}`}
              className="inline-flex min-h-12 max-w-[45%] flex-col items-end justify-center text-right"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-secondary-foreground">
                Next
              </span>
              <span className="mt-0.5 font-wordmark text-sm text-accent">{next.title}</span>
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCta to="contact" />
        </div>

        <PageOutro
          showPrimary={false}
          links={[
            { href: "/services", label: "All services" },
            { href: "/work", label: "See the work" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </div>
    </div>
  );
}
