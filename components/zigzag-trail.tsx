"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { CINEMA } from "@/lib/motion";

export type ZigZagStop = {
  id: string;
  lead?: boolean;
  children: ReactNode;
};

type ZigZagTrailProps = {
  stops: readonly ZigZagStop[];
  className?: string;
  /** Desktop card column width. */
  stopClassName?: string;
};

/**
 * Alternating left / right stops with a center zigzag path.
 * Mobile: stacked with a soft zigzag spine on the left.
 */
export function ZigZagTrail({ stops, className, stopClassName = "w-full md:max-w-md" }: ZigZagTrailProps) {
  const reduceMotion = useReducedMotion();
  const count = stops.length;
  const vbH = Math.max(count * 100, 100);

  // Sharp zigzag through center: left pocket → center node → right pocket → …
  const pathD = buildZigPath(count, vbH);

  return (
    <ol
      className={[
        "relative mx-auto w-full max-w-5xl list-none text-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 100 ${vbH}`}
        preserveAspectRatio="none"
      >
        <motion.path
          d={pathD}
          fill="none"
          className="stroke-border"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.25, ease: CINEMA }}
        />
        <motion.path
          d={pathD}
          fill="none"
          className="stroke-accent"
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{
            duration: reduceMotion ? 0 : 1.45,
            delay: reduceMotion ? 0 : 0.12,
            ease: CINEMA,
          }}
        />
      </svg>

      {stops.map((stop, i) => {
        const onLeft = i % 2 === 0;

        return (
          <motion.li
            key={stop.id}
            initial={reduceMotion ? false : { opacity: 0, y: 24, x: onLeft ? -12 : 12 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.22, margin: "0px 0px -32px 0px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
              ease: CINEMA,
            }}
            className={[
              "relative grid grid-cols-1 pb-10 last:pb-2 md:grid-cols-2 md:gap-x-16 md:pb-14",
              // Mobile keeps a left gutter for the spine feel
              "pl-10 md:pl-0",
            ].join(" ")}
          >
            {/* Node sits on the zigzag center (desktop) / left gutter (mobile) */}
            <span
              aria-hidden="true"
              className={[
                "absolute top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border md:h-7 md:w-7",
                "left-0 md:left-1/2 md:-translate-x-1/2",
                stop.lead
                  ? "border-accent bg-accent/25 shadow-[0_0_22px_color-mix(in_oklab,var(--accent)_40%,transparent)]"
                  : "border-border bg-background",
              ].join(" ")}
            >
              <span
                className={[
                  "h-2 w-2 rounded-full md:h-2.5 md:w-2.5",
                  stop.lead ? "bg-accent" : "bg-secondary-foreground/50",
                ].join(" ")}
              />
            </span>

            <div
              className={
                onLeft
                  ? "md:col-start-1 md:justify-self-end md:pr-1 md:text-left"
                  : "md:col-start-2 md:justify-self-start md:pl-1 md:text-left"
              }
            >
              <div className={stopClassName}>{stop.children}</div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

function buildZigPath(count: number, vbH: number): string {
  if (count <= 0) return "M50 0";

  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const y = ((i + 0.18) / count) * vbH;
    const nextY = i < count - 1 ? ((i + 1 + 0.18) / count) * vbH : y;
    const onLeft = i % 2 === 0;
    // Pocket pulls toward the card side, then snaps back to center for the node
    const pocketX = onLeft ? 28 : 72;
    const nodeX = 50;

    if (i === 0) {
      parts.push(`M ${nodeX} ${Math.max(y - 8, 0)}`);
      parts.push(`L ${nodeX} ${y}`);
    } else {
      parts.push(`L ${nodeX} ${y}`);
    }

    if (i < count - 1) {
      const midY = (y + nextY) / 2;
      parts.push(`L ${pocketX} ${midY}`);
    }
  }

  const lastY = ((count - 1 + 0.18) / count) * vbH;
  parts.push(`L 50 ${Math.min(lastY + 14, vbH)}`);
  return parts.join(" ");
}
