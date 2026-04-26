"use client";

type StepRailProps = {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo?: (i: number) => void;
};

export function StepRail({ step, total, onPrev, onNext, onGoTo }: StepRailProps) {
  const atStart = step <= 0;
  const atEnd = step >= total - 1;

  return (
    <div className="flex shrink-0 items-center justify-between gap-4 border-t border-border bg-background px-5 py-3 md:px-8">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        aria-label="Previous"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all disabled:pointer-events-none disabled:opacity-20 hover:border-accent hover:text-accent"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 3L5 8l5 5" />
        </svg>
      </button>

      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGoTo?.(i)}
            aria-label={`Step ${i + 1}`}
            className={[
              "h-1 rounded-full transition-all duration-300",
              i === step ? "w-5 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground",
              !onGoTo && "cursor-default pointer-events-none",
            ].filter(Boolean).join(" ")}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        aria-label="Next"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-all disabled:pointer-events-none disabled:opacity-20 hover:border-accent hover:text-accent"
      >
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>
    </div>
  );
}
