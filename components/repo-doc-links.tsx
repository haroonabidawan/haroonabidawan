"use client";

import { trackOutboundClick } from "@/lib/analytics";
import { profile } from "@/lib/profile";

const linkClass =
  "font-mono text-xs text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline";

type RepoDocLink = {
  label: string;
  href: string;
  context: string;
};

const repoDocLinks: readonly RepoDocLink[] = [
  { label: "Documentation", href: profile.repo.docs.index, context: "repo_docs_index" },
  { label: "Contributing", href: profile.repo.docs.contributing, context: "repo_docs_contributing" },
  { label: "Development", href: profile.repo.docs.development, context: "repo_docs_development" },
  { label: "Security", href: profile.repo.docs.security, context: "repo_docs_security" },
  { label: "Code of conduct", href: profile.repo.docs.codeOfConduct, context: "repo_docs_conduct" },
  { label: "Issues", href: profile.repo.issues, context: "repo_issues" },
  { label: "Repository", href: profile.repo.url, context: "repo_root" },
];

export function RepoDocLinks({
  className = "",
  links = repoDocLinks,
}: {
  className?: string;
  links?: readonly RepoDocLink[];
}) {
  return (
    <nav
      className={`flex flex-wrap justify-center gap-x-4 gap-y-2 ${className}`}
      aria-label="GitHub documentation"
    >
      {links.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          onClick={() => trackOutboundClick(link.label, link.href, link.context)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
