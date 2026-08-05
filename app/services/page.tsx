"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { PageMark } from "@/components/illustrations/page-mark";
import { PageOutro } from "@/components/page-outro";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();
  const { hook, support, items } = profile.services;

  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE_REVEAL }}
        className="w-full max-w-3xl shrink-0 pb-8 md:pb-10"
      >
        <PageMark kind="services" />
        <p className="type-eyebrow text-accent">Services</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          {hook}
        </h1>
        <p className="mt-1.5 text-base text-secondary-foreground">{support}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-secondary-foreground">
          {items.length} lanes
        </p>
      </motion.div>

      <ul className="mx-auto grid w-full max-w-5xl list-none grid-cols-1 gap-4 text-left sm:gap-5 md:grid-cols-2">
        {items.map((service, i) => (
          <motion.li
            key={service.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : Math.min(i * 0.04, 0.2),
              ease: EASE_REVEAL,
            }}
            className="flex min-h-0"
          >
            <Link
              href={`/services/${service.id}`}
              className={[
                "group relative flex h-full w-full flex-col gap-3 overflow-hidden border border-border/80 bg-card/30 p-4 transition-colors md:p-5",
                "before:absolute before:inset-y-3 before:left-0 before:w-px before:bg-accent/70",
                "hover:border-accent/60 hover:bg-card/45",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <Image
                  src={service.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="h-14 w-14 shrink-0 select-none object-contain md:h-16 md:w-16"
                  sizes="64px"
                  draggable={false}
                />
                <div className="min-w-0 pt-0.5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold leading-tight tracking-tight text-foreground">
                    {service.title}
                  </h2>
                </div>
              </div>
              <p className="font-wordmark text-sm text-accent/90 md:text-base">
                {service.hook}
              </p>
              <p className="flex-1 text-base font-normal leading-relaxed text-secondary-foreground">
                {service.body}
              </p>
              <span className="inline-flex min-h-12 items-center font-mono text-xs uppercase tracking-[0.14em] text-accent transition-transform group-hover:translate-x-0.5">
                Open lane
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <PageOutro
        links={[
          { href: "/work", label: "See the work" },
          { href: "/contact", label: "Contact" },
          { href: "/about", label: "About" },
        ]}
      />
    </div>
  );
}
