"use client";

import { motion } from "motion/react";
import { SceneMark } from "@/components/illustrations/scene-mark";
import { ProjectCard } from "@/components/project-card";
import { SceneOutro } from "@/components/scene-outro";
import { profile } from "@/lib/profile";
import { CINEMA } from "@/lib/motion";

const featured = profile.projects.filter((p) => "featured" in p && p.featured);

export default function FramesPage() {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: CINEMA }}
        className="w-full max-w-3xl pb-8 md:pb-10"
      >
        <SceneMark kind="frames" />
        <p className="type-eyebrow text-accent">Work</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          Four products that carry the proof.
        </h1>
        <p className="mt-2 text-base text-secondary-foreground">
          Live GCC products. The full reel is one click away.
        </p>
      </motion.div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: CINEMA }}
            className="flex min-w-0 h-full"
          >
            <ProjectCard project={p} index={i} total={featured.length} variant="featured" />
          </motion.div>
        ))}
      </div>

      <SceneOutro
        links={[
          { href: "/projects", label: "Browse every frame" },
          { href: "/timeline", label: "Open experience" },
          { href: "/toolkit", label: "Toolkit" },
        ]}
      />
    </div>
  );
}
