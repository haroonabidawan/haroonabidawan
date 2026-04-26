"use client";

import { motion } from "motion/react";
import { CardRail } from "@/components/card-rail";
import { CINEMA } from "@/lib/motion";

const scenes = [
  {
    key: "opening-shot",
    label: "Act I · Opening shot",
    title: "A system is already running before anyone enters the room.",
    body: [
      "The screen is dark. Somewhere behind it, tenants are logging in, jobs are moving, reports are being written, and no one is holding their breath.",
      "That is the kind of work I like: software that becomes invisible because it is doing its job.",
    ],
  },
  {
    key: "conflict",
    label: "Act II · Rising tension",
    title: "The easy demo is never the final scene.",
    body: [
      "A SaaS product needs more than clean screens. It needs tenancy boundaries, APIs that stay honest, queues that do not panic, and data that lands where it should.",
      "AI belongs there too, but only when it has a reason to be in the frame. LLMs, n8n, and Ollama are useful when they cut real manual work and keep private data close.",
    ],
  },
  {
    key: "craft",
    label: "Act III · The craft",
    title: "Laravel and NestJS are home bases. The rest is the set.",
    body: [
      "I have the most miles in PHP, Laravel, Node, and NestJS. I move through React, Next.js, Vue, Nuxt, PostgreSQL, Redis, Docker, and AWS when the scene asks for it.",
      "The point is not the stack on the poster. The point is the product surviving real traffic, real people, and real maintenance.",
    ],
  },
  {
    key: "closing-frame",
    label: "Act IV · Closing frame",
    title: "I own the shot I promise.",
    body: [
      "Schema, APIs, deploys, documentation, edge cases, and the awkward handoff. I would rather make the next engineer comfortable than make myself look clever.",
      "Good engineering feels calm. The room gets quieter. The product gets clearer. The crew can move.",
    ],
  },
];

export default function PositionPage() {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-2xl shrink-0 pb-4"
      >
        <p className="type-eyebrow text-accent">About</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          A quiet build, told like a film.
        </h1>
        <p className="mt-1.5 text-sm font-light text-secondary-foreground">
          Hook first. Proof second. Trust by the final frame.
        </p>
      </motion.div>

      <CardRail label={`${scenes.length} scenes`}>
        {scenes.map((scene, i) => (
          <motion.div
            key={scene.key}
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: CINEMA }}
            className="flex w-[min(80vw,440px)] max-h-[60vh] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card/40 md:w-[440px]"
          >
            <div className="border-b border-border px-4 py-3 text-left">
              <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent">
                {scene.label}
              </p>
              <h2 className="mt-1 text-sm font-bold leading-tight tracking-tight text-foreground">
                {scene.title}
              </h2>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-left [scrollbar-width:thin]">
              {scene.body.map((line) => (
                <p key={line} className="text-[0.75rem] font-light leading-relaxed text-secondary-foreground">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </CardRail>
    </div>
  );
}
