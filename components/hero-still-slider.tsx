"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE_OUT } from "@/lib/motion";

/** Featured frames only. Atmosphere first; product second. */
const SLIDES = [
  "/stills/hireme.webp",
  "/stills/rentit.webp",
  "/stills/sellit.webp",
  "/stills/crisispass.webp",
] as const;

const INTERVAL_MS = 2400;
const FADE_MS = 0.55;

type HeroStillSliderProps = {
  reduceMotion: boolean;
};

export function HeroStillSlider({ reduceMotion }: HeroStillSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const start = () => {
      timer = setInterval(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
      }, INTERVAL_MS);
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
        timer = undefined;
        return;
      }
      if (!timer) start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {SLIDES.map((src, i) => {
        const active = i === index;
        return (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : FADE_MS,
              ease: EASE_OUT,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              quality={70}
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
