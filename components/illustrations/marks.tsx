import Image from "next/image";
import { pageMarks, type PageMarkKind } from "@/lib/assets";

/** Carbon Trail page marks. Line art in public/pages. */

type MarkProps = {
  className?: string;
};

const base = "mx-auto h-28 w-28 select-none object-contain md:h-32 md:w-32";

type MarkImageProps = {
  kind: PageMarkKind;
  className?: string;
};

function MarkImage({ kind, className = base }: MarkImageProps) {
  return (
    <Image
      src={pageMarks[kind]}
      alt=""
      width={128}
      height={128}
      className={className}
      sizes="128px"
      draggable={false}
    />
  );
}

export function MarkPrivacy({ className }: MarkProps) {
  return <MarkImage kind="privacy" className={className} />;
}

export function MarkWork({ className }: MarkProps) {
  return <MarkImage kind="work" className={className} />;
}

export function MarkExperience({ className }: MarkProps) {
  return <MarkImage kind="experience" className={className} />;
}

export function MarkToolkit({ className }: MarkProps) {
  return <MarkImage kind="toolkit" className={className} />;
}

export function MarkContact({ className }: MarkProps) {
  return <MarkImage kind="contact" className={className} />;
}

export function MarkCredits({ className }: MarkProps) {
  return <MarkImage kind="credits" className={className} />;
}

export function MarkAbout({ className }: MarkProps) {
  return <MarkImage kind="about" className={className} />;
}

export function MarkServices({ className }: MarkProps) {
  return <MarkImage kind="services" className={className} />;
}

export type { PageMarkKind };
