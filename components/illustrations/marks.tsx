/** Carbon Trail scene marks. Line art only. No stock characters. */

type MarkProps = {
  className?: string;
  title?: string;
};

const base = "mx-auto h-28 w-28 text-accent md:h-32 md:w-32";

export function MarkMidnight({ className = base, title = "Midnight systems" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <circle cx="60" cy="60" r="46" className="stroke-border" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="28" className="stroke-current" strokeWidth="1.4" opacity="0.55" />
      <path
        d="M60 22v12M60 86v12M22 60h12M86 60h12"
        className="stroke-current"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="60" cy="60" r="4" className="fill-current" />
      <path
        d="M38 72c6 8 16 12 22 12s16-4 22-12"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M48 44h24M52 50h16"
        className="stroke-secondary-foreground"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function MarkFrames({ className = base, title = "Product frames" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <rect x="18" y="28" width="54" height="40" rx="4" className="stroke-border" strokeWidth="1.2" />
      <rect x="40" y="44" width="54" height="40" rx="4" className="stroke-current" strokeWidth="1.5" />
      <path d="M48 56h38M48 64h28M48 72h32" className="stroke-secondary-foreground" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <circle cx="86" cy="52" r="3" className="fill-current" opacity="0.9" />
    </svg>
  );
}

export function MarkPath({ className = base, title = "Career path" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <path
        d="M28 28v52a10 10 0 1 0 10 10"
        className="stroke-border"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M28 42h42a12 12 0 0 0 0-24H58"
        className="stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="82" cy="90" r="9" className="stroke-current" strokeWidth="1.5" />
      <circle cx="82" cy="90" r="3.5" className="fill-current" />
      <circle cx="28" cy="28" r="3" className="fill-secondary-foreground" opacity="0.55" />
      <circle cx="28" cy="54" r="3" className="fill-secondary-foreground" opacity="0.55" />
    </svg>
  );
}

export function MarkToolkit({ className = base, title = "Toolkit" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <rect x="24" y="46" width="72" height="42" rx="6" className="stroke-current" strokeWidth="1.5" />
      <path d="M40 46v-6a20 20 0 0 1 40 0v6" className="stroke-border" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 64h72" className="stroke-border" strokeWidth="1.2" />
      <circle cx="44" cy="78" r="3" className="fill-current" />
      <circle cx="60" cy="78" r="3" className="fill-secondary-foreground" opacity="0.55" />
      <circle cx="76" cy="78" r="3" className="fill-secondary-foreground" opacity="0.55" />
      <path d="M52 34h16" className="stroke-current" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function MarkBrief({ className = base, title = "Send a brief" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <rect x="26" y="34" width="68" height="48" rx="5" className="stroke-current" strokeWidth="1.5" />
      <path d="M30 40l30 22 30-22" className="stroke-border" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M42 92h36" className="stroke-secondary-foreground" strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
      <circle cx="84" cy="34" r="8" className="fill-background stroke-current" strokeWidth="1.4" />
      <path d="M84 30v8M80 34h8" className="stroke-current" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function MarkCrew({ className = base, title = "Credits crew" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <circle cx="44" cy="40" r="10" className="stroke-current" strokeWidth="1.4" />
      <circle cx="76" cy="40" r="10" className="stroke-border" strokeWidth="1.3" />
      <path d="M28 78c4-14 10-20 16-20s12 6 16 20" className="stroke-current" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 78c4-14 10-20 16-20s12 6 16 20" className="stroke-border" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M36 92h48" className="stroke-secondary-foreground" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function MarkAbout({ className = base, title = "About" }: MarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={title} fill="none">
      <title>{title}</title>
      <circle cx="60" cy="42" r="14" className="stroke-current" strokeWidth="1.5" />
      <path
        d="M34 92c6-18 14-26 26-26s20 8 26 26"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M78 36c6-2 12 2 12 10" className="stroke-border" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="88" cy="28" r="3" className="fill-accent" opacity="0.85" />
    </svg>
  );
}
