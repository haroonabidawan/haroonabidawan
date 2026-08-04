"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { SceneOutro } from "@/components/scene-outro";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();
  const { hook, support, items } = profile.services;

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: CINEMA }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <SceneMark kind="services" />
        <p className="type-eyebrow text-accent">Services</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          {hook}
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">{support}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {items.length} lanes
        </p>
      </motion.div>

      <ul className="mx-auto flex w-full max-w-3xl list-none flex-col gap-5 text-left">
        {items.map((service, i) => (
          <motion.li
            key={service.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
              ease: CINEMA,
            }}
          >
            <Link
              href={`/services/${service.id}`}
              className={[
                "group relative flex gap-4 overflow-hidden border border-border/80 bg-card/30 p-4 transition-colors md:gap-5 md:p-5",
                "before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-accent/70",
                "hover:border-accent/60 hover:bg-card/45",
              ].join(" ")}
            >
              <Image
                src={service.icon}
                alt=""
                width={80}
                height={80}
                className="mt-0.5 h-16 w-16 shrink-0 select-none object-contain md:h-20 md:w-20"
                sizes="80px"
                draggable={false}
              />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-lg font-semibold leading-tight tracking-tight text-foreground md:text-xl">
                  {service.title}
                </h2>
                <p className="mt-1 font-wordmark text-sm text-accent/90 md:text-base">
                  {service.hook}
                </p>
                <p className="mt-2 text-base font-normal leading-relaxed text-secondary-foreground">
                  {service.body}
                </p>
                <span className="mt-3 inline-flex min-h-12 items-center font-mono text-xs uppercase tracking-[0.14em] text-accent transition-transform group-hover:translate-x-0.5">
                  Open lane
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <SceneOutro
        links={[
          { href: "/work", label: "See the work" },
          { href: "/contact", label: "Contact" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
