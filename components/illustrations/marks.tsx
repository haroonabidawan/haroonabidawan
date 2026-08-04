import Image from "next/image";

/** Carbon Trail scene marks. AI elevated line art in public/illustrations. */

type MarkProps = {
  className?: string;
  title?: string;
};

const base = "mx-auto h-28 w-28 select-none object-contain md:h-32 md:w-32";

const markSrc = {
  midnight: "/illustrations/midnight.webp",
  frames: "/illustrations/frames.webp",
  path: "/illustrations/path.webp",
  toolkit: "/illustrations/toolkit.webp",
  brief: "/illustrations/brief.webp",
  crew: "/illustrations/crew.webp",
  about: "/illustrations/about.webp",
} as const;

type MarkKind = keyof typeof markSrc;

type MarkImageProps = {
  kind: MarkKind;
  className?: string;
};

function MarkImage({ kind, className = base }: MarkImageProps) {
  return (
    <Image
      src={markSrc[kind]}
      alt=""
      width={128}
      height={128}
      className={className}
      sizes="128px"
      draggable={false}
    />
  );
}

export function MarkMidnight({ className }: MarkProps) {
  return <MarkImage kind="midnight" className={className} />;
}

export function MarkFrames({ className }: MarkProps) {
  return <MarkImage kind="frames" className={className} />;
}

export function MarkPath({ className }: MarkProps) {
  return <MarkImage kind="path" className={className} />;
}

export function MarkToolkit({ className }: MarkProps) {
  return <MarkImage kind="toolkit" className={className} />;
}

export function MarkBrief({ className }: MarkProps) {
  return <MarkImage kind="brief" className={className} />;
}

export function MarkCrew({ className }: MarkProps) {
  return <MarkImage kind="crew" className={className} />;
}

export function MarkAbout({ className }: MarkProps) {
  return <MarkImage kind="about" className={className} />;
}
