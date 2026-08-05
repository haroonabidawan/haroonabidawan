import { profile, type ServiceItem } from "@/lib/profile";
import { absoluteSiteUrl } from "@/lib/sitemap-routes";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };
type JsonLdObject = { [key: string]: JsonLdValue };

const SITE_URL = profile.brand.siteUrl;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/services#professional-service`;
const FAQ_ID = `${SITE_URL}/#faq`;

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return absoluteSiteUrl(path.startsWith("/") ? path : `/${path}`);
}

function areaServedNodes(): JsonLdObject[] {
  return profile.seo.areaServed.map((region) => ({
    "@type": "Country",
    name: region.name,
    identifier: region.code,
  }));
}

export function personSchema(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: "Haroon",
    familyName: "Abid Awan",
    jobTitle: profile.role,
    description: profile.meta.description,
    url: SITE_URL,
    email: profile.email,
    telephone: profile.phoneTel,
    image: absoluteUrl(profile.brand.profileImage),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.seo.geo.locality,
      addressRegion: profile.seo.geo.region,
      addressCountry: profile.seo.geo.countryCode,
    },
    workLocation: {
      "@type": "Place",
      name: profile.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.seo.geo.locality,
        addressCountry: profile.seo.geo.countryCode,
      },
    },
    worksFor: {
      "@type": "Organization",
      name: profile.experience[0]?.company ?? "Bespoke Marketing",
    },
    alumniOf: profile.education.map((education) => ({
      "@type": "EducationalOrganization",
      name: education.school,
    })),
    areaServed: areaServedNodes(),
    knowsAbout: [...profile.seo.knowsAbout],
    knowsLanguage: profile.languages.map((language) => language.split(" (")[0]),
    sameAs: [
      profile.links.github,
      profile.links.linkedin,
      profile.links.instagram,
      profile.links.facebook,
    ],
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: profile.name,
    description: profile.meta.description,
    inLanguage: profile.seo.locale,
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    potentialAction: [
      {
        "@type": "ContactAction",
        name: profile.cta.label,
        target: absoluteUrl("/contact"),
      },
      {
        "@type": "ReadAction",
        name: "LLM site context",
        target: absoluteUrl("/llms-full.txt"),
      },
    ],
  };
}

export function professionalServiceSchema(): JsonLdObject {
  return {
    "@type": "ProfessionalService",
    "@id": PROFESSIONAL_SERVICE_ID,
    name: `${profile.name} · ${profile.pages.services.title}`,
    description: profile.pages.services.description,
    url: absoluteUrl("/services"),
    image: absoluteUrl(profile.brand.profileImage),
    areaServed: areaServedNodes(),
    provider: { "@id": PERSON_ID },
    serviceType: profile.services.items.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: profile.services.hook,
      itemListElement: profile.services.items.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: service.title,
        description: service.hook,
        url: absoluteUrl(`/services/${service.id}`),
      })),
    },
  };
}

export function faqSchema(): JsonLdObject {
  return {
    "@type": "FAQPage",
    "@id": FAQ_ID,
    name: `${profile.name} FAQ`,
    inLanguage: profile.seo.locale,
    mainEntity: profile.seo.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema(input: {
  name: string;
  path: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
}): JsonLdObject {
  const pageType = input.type ?? "WebPage";

  return {
    "@type": pageType,
    "@id": absoluteUrl(`${input.path}#webpage`),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: profile.seo.locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    primaryImageOfPage: absoluteUrl(profile.meta.openGraphImage),
  };
}

export function serviceSchema(service: ServiceItem): JsonLdObject {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`/services/${service.id}#service`),
    name: service.title,
    description: service.overview,
    url: absoluteUrl(`/services/${service.id}`),
    serviceType: service.title,
    areaServed: areaServedNodes(),
    provider: { "@id": PERSON_ID },
    offers: {
      "@type": "Offer",
      name: service.title,
      description: service.hook,
      url: absoluteUrl(`/services/${service.id}`),
    },
  };
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function featuredWorkSchema(): JsonLdObject {
  const featured = profile.projects.filter(
    (project) => "featured" in project && project.featured,
  );

  return {
    "@type": "ItemList",
    name: profile.pages.work.h1,
    description: profile.pages.work.description,
    itemListElement: featured.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      description: project.hook,
      url: "href" in project && project.href ? project.href : absoluteUrl("/work"),
    })),
  };
}

export function allProjectsSchema(): JsonLdObject {
  return {
    "@type": "ItemList",
    name: profile.pages.projects.h1,
    description: profile.pages.projects.description,
    numberOfItems: profile.projects.length,
    itemListElement: profile.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      description: project.hook,
      url: "href" in project && project.href ? project.href : absoluteUrl("/projects"),
    })),
  };
}

export function experienceListSchema(): JsonLdObject {
  return {
    "@type": "ItemList",
    name: profile.pages.experience.h1,
    description: profile.pages.experience.description,
    itemListElement: profile.experience.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${job.title} at ${job.company}`,
      description: job.highlights[0] ?? job.period,
    })),
  };
}

function schemaGraph(nodes: JsonLdObject[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function rootSchemaDocument(): JsonLdObject {
  return schemaGraph([
    personSchema(),
    websiteSchema(),
    professionalServiceSchema(),
    faqSchema(),
    webPageSchema({
      name: profile.seo.titleDefault,
      path: "/",
      description: profile.meta.description,
    }),
  ]);
}

export function pageSchemaDocument(input: {
  pageName: string;
  path: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  extra?: JsonLdObject[];
}): JsonLdObject {
  return schemaGraph([
    webPageSchema({
      name: input.pageName,
      path: input.path,
      description: input.description,
      type: input.type,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: input.pageName, path: input.path },
    ]),
    ...(input.extra ?? []),
  ]);
}

export function servicePageSchemaDocument(service: ServiceItem): JsonLdObject {
  return schemaGraph([
    webPageSchema({
      name: service.title,
      path: `/services/${service.id}`,
      description: service.hook,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: profile.pages.services.title, path: "/services" },
      { name: service.title, path: `/services/${service.id}` },
    ]),
    serviceSchema(service),
  ]);
}

export const aboutPageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.about.title,
    path: "/about",
    description: profile.pages.about.description,
    type: "ProfilePage",
  });

export const contactPageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.contact.title,
    path: "/contact",
    description: profile.pages.contact.description,
    type: "ContactPage",
  });

export const workPageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.work.title,
    path: "/work",
    description: profile.pages.work.description,
    type: "CollectionPage",
    extra: [featuredWorkSchema()],
  });

export const projectsPageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.projects.title,
    path: "/projects",
    description: profile.pages.projects.description,
    type: "CollectionPage",
    extra: [allProjectsSchema()],
  });

export const servicesIndexSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.services.title,
    path: "/services",
    description: profile.pages.services.description,
    type: "CollectionPage",
    extra: [professionalServiceSchema()],
  });

export const experiencePageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.experience.title,
    path: "/experience",
    description: profile.pages.experience.description,
    type: "ProfilePage",
    extra: [experienceListSchema()],
  });

export const toolkitPageSchemaDocument = () =>
  pageSchemaDocument({
    pageName: profile.pages.toolkit.title,
    path: "/toolkit",
    description: profile.pages.toolkit.description,
  });

/** @deprecated Use rootSchemaDocument */
export function rootSchemaGraph(): JsonLdObject[] {
  return [rootSchemaDocument()];
}

/** @deprecated Use servicePageSchemaDocument */
export function servicePageSchemaGraph(service: ServiceItem): JsonLdObject[] {
  return [servicePageSchemaDocument(service)];
}

/** @deprecated Use contactPageSchemaDocument */
export function contactPageSchemaGraph(): JsonLdObject[] {
  return [contactPageSchemaDocument()];
}

/** @deprecated Use workPageSchemaDocument */
export function workPageSchemaGraph(): JsonLdObject[] {
  return [workPageSchemaDocument()];
}
