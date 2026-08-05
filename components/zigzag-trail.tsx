"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { EASE_REVEAL } from "@/lib/motion";

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

type Point = { x: number; y: number };

/**
 * Alternating left / right stops with a measured center trail.
 * Path is rebuilt from real node positions so connections stay tight.
 */
export function ZigZagTrail({
  stops,
  className,
  stopClassName = "w-full md:max-w-md",
}: ZigZagTrailProps) {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [spine, setSpine] = useState("");
  const [stubs, setStubs] = useState<string[]>([]);

  const rebuild = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const listRect = list.getBoundingClientRect();
    const w = list.clientWidth;
    const h = list.scrollHeight;
    if (w < 1 || h < 1) return;

    const nodes: Point[] = [];
    const stubPaths: string[] = [];

    stops.forEach((_, i) => {
      const node = nodeRefs.current[i];
      const card = cardRefs.current[i];
      if (!node) return;

      const nr = node.getBoundingClientRect();
      const nx = nr.left + nr.width / 2 - listRect.left;
      const ny = nr.top + nr.height / 2 - listRect.top;
      nodes.push({ x: nx, y: ny });

      if (!card) return;
      const cr = card.getBoundingClientRect();
      const onLeft = i % 2 === 0;
      const isDesktop = w >= 768;

      let targetX: number;
      let targetY: number;
      if (isDesktop) {
        targetX = onLeft ? cr.right - listRect.left : cr.left - listRect.left;
        targetY = cr.top + Math.min(28, cr.height / 2) - listRect.top;
      } else {
        targetX = cr.left - listRect.left;
        targetY = ny;
      }

      const midX = (nx + targetX) / 2;
      stubPaths.push(
        `M ${nx.toFixed(1)} ${ny.toFixed(1)} C ${midX.toFixed(1)} ${ny.toFixed(1)}, ${midX.toFixed(1)} ${targetY.toFixed(1)}, ${targetX.toFixed(1)} ${targetY.toFixed(1)}`,
      );
    });

    setBox({ w, h });
    setSpine(buildSmoothSpine(nodes));
    setStubs(stubPaths);
  }, [stops]);

  useLayoutEffect(() => {
    rebuild();
    const id = window.requestAnimationFrame(() => {
      rebuild();
      window.requestAnimationFrame(rebuild);
    });
    return () => window.cancelAnimationFrame(id);
  }, [rebuild]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const ro = new ResizeObserver(() => {
      rebuild();
    });
    ro.observe(list);
    for (const el of cardRefs.current) {
      if (el) ro.observe(el);
    }

    window.addEventListener("resize", rebuild);
    const fontsReady =
      typeof document !== "undefined" && "fonts" in document
        ? document.fonts.ready.then(() => rebuild())
        : Promise.resolve();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", rebuild);
      void fontsReady;
    };
  }, [rebuild, stops.length]);

  return (
    <ol
      ref={listRef}
      className={[
        "relative mx-auto w-full max-w-5xl list-none text-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {box.w > 0 && box.h > 0 ? (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          width={box.w}
          height={box.h}
          viewBox={`0 0 ${box.w} ${box.h}`}
        >
          <defs>
            <linearGradient id="trail-accent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
              <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* Soft underlay for depth */}
          {spine ? (
            <motion.path
              d={spine}
              fill="none"
              stroke="var(--border-strong)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: reduceMotion ? 0 : 1.15, ease: EASE_REVEAL }}
            />
          ) : null}

          {spine ? (
            <motion.path
              d={spine}
              fill="none"
              stroke="url(#trail-accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 1.35,
                delay: reduceMotion ? 0 : 0.08,
                ease: EASE_REVEAL,
              }}
            />
          ) : null}

          {stubs.map((d, i) => (
            <motion.path
              key={`stub-${stops[i]?.id ?? i}`}
              d={d}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.25"
              strokeLinecap="round"
              opacity={0.45}
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.15 + i * 0.05,
                ease: EASE_REVEAL,
              }}
            />
          ))}
        </svg>
      ) : null}

      {stops.map((stop, i) => {
        const onLeft = i % 2 === 0;

        return (
          <motion.li
            key={stop.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -32px 0px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
              ease: EASE_REVEAL,
            }}
            className={[
              "relative z-10 grid grid-cols-1 pb-12 last:pb-2 md:grid-cols-2 md:gap-x-20 md:pb-16",
              "pl-11 md:pl-0",
            ].join(" ")}
          >
            <span
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              aria-hidden="true"
              className={[
                "absolute top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border md:top-5 md:h-7 md:w-7",
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
                  ? "md:col-start-1 md:justify-self-end md:pr-2"
                  : "md:col-start-2 md:justify-self-start md:pl-2"
              }
            >
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={stopClassName}
              >
                {stop.children}
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

/** Smooth vertical spine through measured node centers. */
function buildSmoothSpine(nodes: Point[]): string {
  if (nodes.length === 0) return "";
  if (nodes.length === 1) {
    const p = nodes[0];
    return `M ${p.x.toFixed(1)} ${(p.y - 12).toFixed(1)} L ${p.x.toFixed(1)} ${(p.y + 12).toFixed(1)}`;
  }

  const parts: string[] = [
    `M ${nodes[0].x.toFixed(1)} ${Math.max(nodes[0].y - 10, 0).toFixed(1)}`,
    `L ${nodes[0].x.toFixed(1)} ${nodes[0].y.toFixed(1)}`,
  ];

  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const dy = b.y - a.y;
    const bulge = Math.min(36, Math.max(18, Math.abs(dy) * 0.18));
    const toward = i % 2 === 0 ? -1 : 1;
    const c1x = a.x + toward * bulge;
    const c2x = b.x + toward * bulge;
    const c1y = a.y + dy * 0.35;
    const c2y = a.y + dy * 0.65;
    parts.push(
      `C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`,
    );
  }

  const last = nodes[nodes.length - 1];
  parts.push(`L ${last.x.toFixed(1)} ${(last.y + 14).toFixed(1)}`);
  return parts.join(" ");
}
