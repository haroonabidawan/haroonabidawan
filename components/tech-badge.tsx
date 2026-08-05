import { getCategoryIconUrl, getTechIconUrl } from "@/lib/tech-icons";

type TechBadgeProps = {
  label: string;
  muted?: boolean;
};

export function TechBadge({ label, muted = false }: TechBadgeProps) {
  const iconUrl = getTechIconUrl(label);

  return (
    <span
      className={[
        "inline-flex items-center gap-2 border border-border/80 bg-background/80 px-3 py-1.5 text-sm font-normal",
        muted ? "text-muted-foreground" : "text-secondary-foreground",
      ].join(" ")}
    >
      {iconUrl ? (
        // eslint-disable-next-line @next/next/no-img-element -- external Simple Icons CDN
        <img
          src={iconUrl}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span>{label}</span>
    </span>
  );
}

type CategoryIconProps = {
  category: string;
  className?: string;
};

export function CategoryIcon({ category, className = "h-5 w-5" }: CategoryIconProps) {
  const iconUrl = getCategoryIconUrl(category);
  if (!iconUrl) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external Simple Icons CDN
    <img
      src={iconUrl}
      alt=""
      width={20}
      height={20}
      className={`shrink-0 object-contain ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
