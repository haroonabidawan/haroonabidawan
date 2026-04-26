"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CardRailProps = {
  children: React.ReactNode;
  label?: string;
};

export function CardRail({ children, label }: CardRailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      ro.disconnect();
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
    <div className="flex w-full flex-col overflow-hidden">
      <div
        ref={ref}
        className="w-full overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto w-max rounded-2xl border border-border/70 bg-background/40 p-3 shadow-[0_0_70px_color-mix(in_oklab,var(--accent)_10%,transparent)]">
          <div className="flex h-2 items-center gap-3 px-1" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`top-${i}`} className="h-1 w-1 rounded-full bg-border/70" />
            ))}
          </div>
          <div data-card-row className="my-3 flex w-max items-stretch gap-3">{children}</div>
          <div className="flex h-2 items-center gap-3 px-1" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={`bottom-${i}`} className="h-1 w-1 rounded-full bg-border/70" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full shrink-0 items-center justify-between border-t border-border py-2.5">
        {label ? (
          <p className="font-mono text-[0.6rem] text-muted-foreground/50">{label}</p>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-all disabled:pointer-events-none disabled:opacity-20 hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3L5 8l5 5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-all disabled:pointer-events-none disabled:opacity-20 hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
