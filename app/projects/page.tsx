"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PageMark } from "@/components/illustrations/page-mark";
import { ProjectCard } from "@/components/project-card";
import { PageOutro } from "@/components/page-outro";
import { profile } from "@/lib/profile";
import { EASE_REVEAL } from "@/lib/motion";

const projects = profile.projects;

export default function ProjectsPage() {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE_REVEAL }}
        className="w-full max-w-3xl pb-8 md:pb-10"
      >
        <PageMark kind="work" />
        <p className="type-eyebrow text-accent">{profile.pages.projects.title}</p>
        <h1 className="mt-2 text-[clamp(1.3rem,2.8vw,1.7rem)] font-bold leading-tight tracking-tight text-foreground">
          {profile.pages.projects.h1}
        </h1>
        <p className="mt-2 text-base text-secondary-foreground">
          {projects.length} projects. Scroll the list.
        </p>
        <Link
          href="/work"
          className="mt-5 inline-flex font-mono text-xs text-secondary-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          {profile.pages.projects.backLink}
        </Link>
      </motion.div>

      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.35), ease: EASE_REVEAL }}
            className="flex h-full min-w-0"
          >
            <ProjectCard project={p} index={i} total={projects.length} variant="compact" />
          </motion.div>
        ))}
      </div>

      <PageOutro
        links={[
          { href: "/work", label: "Featured work" },
          { href: "/services", label: "Services" },
          { href: "/experience", label: "Open experience" },
        ]}
      />
    </div>
  );
}
