"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CardRailProps = {
  children: React.ReactNode;
  label?: string;
};

/**
 * One children tree. Mobile stacks vertically. md+ becomes a horizontal filmstrip.
 */
export function CardRail({ children, label }: CardRailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const start = el.scrollLeft <= 0;
    const end = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
    setAtStart(start);
    setAtEnd(end);
    setCanScroll(el.scrollWidth > el.clientWidth + 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [check]);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const row = el.querySelector<HTMLElement>("[data-card-row]");
    const firstCard = row?.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 12 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="flex w-full flex-col">
      {label ? (
        <p className="mb-3 font-mono text-xs text-secondary-foreground md:hidden">{label}</p>
      ) : null}

      <div
        ref={ref}
        className="w-full md:overflow-x-auto md:py-3 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        <div className="w-full md:mx-auto md:w-max md:rounded-2xl md:border md:border-border/70 md:bg-background/40 md:p-3 md:shadow-[0_0_70px_color-mix(in_oklab,var(--accent)_10%,transparent)]">
          <div className="mb-3 hidden h-2 items-center gap-3 px-1 md:flex" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`top-${i}`} className="h-1 w-1 rounded-full bg-border/70" />
            ))}
          </div>

          <div
            data-card-row
            className="flex w-full flex-col items-stretch gap-4 md:my-3 md:w-max md:flex-row md:gap-3"
          >
            {children}
          </div>

          <div className="mt-3 hidden h-2 items-center gap-3 px-1 md:flex" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`bottom-${i}`} className="h-1 w-1 rounded-full bg-border/70" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 hidden w-full shrink-0 items-center justify-between border-t border-border py-2.5 md:flex">
        {label ? (
          <p className="font-mono text-xs text-secondary-foreground">{label}</p>
        ) : (
          <span />
        )}
        {canScroll ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={atStart}
              aria-label="Scroll left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-secondary-foreground transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-25"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={atEnd}
              aria-label="Scroll right"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-secondary-foreground transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-25"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
