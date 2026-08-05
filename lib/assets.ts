/** Static asset paths under public/. */

export const brandAssets = {
  logo: "/brand/logo.png",
  profile: "/brand/profile.webp",
} as const;

export const pageMarks = {
  about: "/pages/about.webp",
  contact: "/pages/contact.webp",
  credits: "/pages/credits.webp",
  experience: "/pages/experience.webp",
  privacy: "/pages/privacy.webp",
  services: "/pages/services.webp",
  toolkit: "/pages/toolkit.webp",
  work: "/pages/work.webp",
} as const;

export type PageMarkKind = keyof typeof pageMarks;

export const serviceIcons = {
  consultancy: "/services/consultancy.webp",
  websites: "/services/websites.webp",
  platforms: "/services/platforms.webp",
  mobile: "/services/mobile.webp",
  custom: "/services/custom.webp",
} as const;

export const projectImage = (slug: string) => `/projects/${slug}.webp` as const;

/** Featured products for the home hero carousel. */
export const heroProjectSlugs = ["hireme", "rentit", "sellit", "crisispass"] as const;

export const heroProjectImages = heroProjectSlugs.map((slug) => projectImage(slug));
