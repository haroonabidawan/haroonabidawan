"use client";

import Image from "next/image";
import { trackOutboundClick } from "@/lib/analytics";

export type ProjectItem = {
  name: string;
  tag: string;
  hook: string;
  detail: string;
  outcome: string;
  stack: readonly string[];
  featured?: boolean;
  status?: string;
  href?: string;
  cover?: string;
};

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  total: number;
  /** featured: problem + outcome. compact: hook + stack chips for the full list. */
  variant?: "featured" | "compact";
};

/** Desktop grid: pad to this many slots. Mobile: show real chips only. */
const CHIP_SLOTS_MD = 4;

export function ProjectCard({
  project: p,
  index,
  total,
  variant = "featured",
}: ProjectCardProps) {
  const compact = variant === "compact";
  const realChips = [...p.stack.slice(0, CHIP_SLOTS_MD)];
  const paddedChips = [...realChips];
  while (paddedChips.length < CHIP_SLOTS_MD) paddedChips.push("");
  const liveHref = p.href;

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 text-left">
      <div className="relative aspect-[16/10] w-full shrink-0 border-b border-border bg-background">
        {p.cover ? (
          <>
            <Image
              src={p.cover}
              alt=""
              fill
              sizes={
                compact
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          </>
        ) : null}
      </div>

      {/* Mobile: natural height. md+: fixed mirror bands. */}
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-3 md:h-[5.75rem]">
        <div className="min-w-0 flex-1">
          <p className="truncate font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {p.tag}
          </p>
          <h2 className="mt-0.5 line-clamp-2 font-sans text-base font-semibold leading-tight text-foreground md:h-10 md:text-lg">
            {p.name}
          </h2>
          <p className="mt-1 truncate font-mono text-xs text-secondary-foreground">
            {p.status ?? "\u00a0"}
          </p>
        </div>
        <p className="shrink-0 font-mono text-xs text-secondary-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 py-3">
        {compact ? (
          <p className="shrink-0 text-base font-normal leading-relaxed text-secondary-foreground md:h-[3.75rem] md:overflow-hidden md:text-sm">
            <span className="line-clamp-3">{p.hook}</span>
          </p>
        ) : (
          <div className="shrink-0 space-y-3 md:h-[8.5rem] md:overflow-hidden">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Problem</p>
              <p className="mt-1 line-clamp-3 text-base font-normal leading-relaxed text-secondary-foreground md:line-clamp-2 md:text-sm">
                {p.hook}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Outcome</p>
              <p className="mt-1 line-clamp-3 text-base font-normal leading-relaxed text-secondary-foreground md:line-clamp-2 md:text-sm">
                {p.outcome}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4 shrink-0 border-t border-border pt-3 md:mt-auto">
          {!compact ? (
            <p className="mb-1.5 font-mono text-xs uppercase tracking-[0.12em] text-secondary-foreground">
              Stack
            </p>
          ) : null}

          {/* Mobile: wrap real chips. md+: fixed 2×2. */}
          <div className="flex flex-wrap gap-1.5 md:hidden">
            {realChips.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="hidden h-[3.75rem] grid-cols-2 content-start gap-1.5 overflow-hidden md:grid">
            {paddedChips.map((s, i) =>
              s ? (
                <span
                  key={`${s}-${i}`}
                  className="truncate rounded-full border border-border bg-background px-2.5 py-1 text-center font-mono text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ) : (
                <span
                  key={`slot-${i}`}
                  className="invisible rounded-full border border-transparent px-2.5 py-1 font-mono text-xs"
                  aria-hidden="true"
                >
                  ·
                </span>
              ),
            )}
          </div>

          <div className="mt-3 flex h-12 items-center">
            {liveHref ? (
              <a
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundClick("Live site", liveHref, p.name)}
                className="inline-flex h-12 items-center font-wordmark text-sm text-accent underline-offset-4 transition-colors hover:underline"
              >
                Open live site
              </a>
            ) : (
              <span
                className="invisible inline-flex h-12 items-center font-wordmark text-sm"
                aria-hidden="true"
              >
                Open live site
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
