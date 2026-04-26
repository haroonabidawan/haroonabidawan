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
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 12 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div
        ref={ref}
        className="flex w-full items-center gap-3 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
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
