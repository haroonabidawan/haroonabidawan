import type { Metadata } from "next";
import { profile, type ServiceItem } from "@/lib/profile";

type PageMetaKey = keyof typeof profile.pages;

const SITE_URL = profile.brand.siteUrl;

const PAGE_PATHS: Record<PageMetaKey, string> = {
  about: "/about",
  contact: "/contact",
  work: "/work",
  projects: "/projects",
  experience: "/experience",
  toolkit: "/toolkit",
  services: "/services",
  credits: "/credits",
  privacy: "/privacy",
};

const OG_IMAGE = {
  url: profile.meta.openGraphImage,
  width: 1200,
  height: 630,
  alt: `${profile.name} · ${profile.role} · GCC full stack engineer`,
} as const;

function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

function languageAlternates(): Metadata["alternates"] {
  return {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLM site guide" },
        { url: "/llms-full.txt", title: "LLM full context" },
      ],
    },
  };
}

function sharedRobots(index = true): Metadata["robots"] {
  return {
    index,
    follow: true,
    googleBot: {
      index,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

function buildOpenGraph(input: {
  title: string;
  description: string;
  path: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    siteName: profile.name,
    locale: profile.seo.locale,
    alternateLocale: [...profile.seo.alternateLocales],
    type: "website",
    images: [OG_IMAGE],
  };
}

function buildTwitter(input: {
  title: string;
  description: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title: input.title,
    description: input.description,
    creator: "@haroonabidawan",
    images: [OG_IMAGE.url],
  };
}

function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const fullTitle = input.title.includes(profile.name)
    ? input.title
    : `${input.title} · ${profile.name}`;

  return {
    title: input.title,
    description: input.description,
    keywords: [...profile.seo.keywords],
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: profile.name,
    publisher: profile.name,
    category: "technology",
    alternates: {
      canonical: absoluteUrl(input.path),
      languages: languageAlternates()?.languages,
    },
    robots: sharedRobots(input.index ?? true),
    openGraph: buildOpenGraph({
      title: fullTitle,
      description: input.description,
      path: input.path,
    }),
    twitter: buildTwitter({
      title: fullTitle,
      description: input.description,
    }),
  };
}

export function pageMetadata(key: PageMetaKey): Metadata {
  const page = profile.pages[key];
  const path = PAGE_PATHS[key];

  return buildMetadata({
    title: page.title,
    description: page.description,
    path,
  });
}

export function serviceMetadata(service: ServiceItem): Metadata {
  const description = `${service.hook} ${service.overview}`.slice(0, 160);

  return buildMetadata({
    title: `${service.title} · GCC ${profile.pages.services.title}`,
    description,
    path: `/services/${service.id}`,
  });
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: profile.seo.titleDefault,
    template: profile.seo.titleTemplate,
  },
  description: profile.meta.description,
  keywords: [...profile.seo.keywords],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  applicationName: profile.seo.manifest.shortName,
  alternates: languageAlternates(),
  robots: sharedRobots(),
  openGraph: buildOpenGraph({
    title: profile.seo.titleDefault,
    description: profile.meta.openGraphDescription,
    path: "/",
  }),
  twitter: buildTwitter({
    title: profile.seo.titleDefault,
    description: profile.meta.openGraphDescription,
  }),
  other: {
    "geo.region": profile.seo.geo.countryCode,
    "geo.placename": profile.seo.geo.locality,
    "geo.position": "26.2235;50.5876",
    ICBM: "26.2235, 50.5876",
    "llms-txt": `${SITE_URL}/llms.txt`,
    "llms-full-txt": `${SITE_URL}/llms-full.txt`,
  },
};

export const notFoundMetadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on haroonabidawan.com.",
  robots: sharedRobots(false),
};
