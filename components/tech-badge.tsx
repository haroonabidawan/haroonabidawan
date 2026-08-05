import { getTechBadgeUrl } from "@/lib/tech-icons";

type TechBadgeProps = {
  label: string;
  muted?: boolean;
};

export function TechBadge({ label, muted = false }: TechBadgeProps) {
  const badgeUrl = getTechBadgeUrl(label, muted);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- Shields.io badge CDN
    <img
      src={badgeUrl}
      alt={label}
      title={label}
      height={28}
      className="h-7 w-auto"
      loading="lazy"
      decoding="async"
    />
  );
}

type CategoryIconProps = {
  category: string;
  className?: string;
};

export function CategoryIcon({ category, className = "h-7 w-auto" }: CategoryIconProps) {
  const badgeUrl = getTechBadgeUrl(category);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- Shields.io badge CDN
    <img
      src={badgeUrl}
      alt={category}
      title={category}
      height={28}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
