export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export type AnalyticsParamValue = string | number | boolean;

export type AnalyticsEventParams = Record<string, AnalyticsParamValue | undefined>;

/** Objects pushed to window.dataLayer for GA4 / GTM consumers. */
export type DataLayerObject = AnalyticsEventParams & {
  event?: string;
  page_path?: string;
  page_title?: string;
  page_location?: string;
};

type GtagCommand = (
  command: "config" | "event" | "js" | "set",
  targetOrDate: string | Date,
  params?: AnalyticsEventParams,
) => void;

declare global {
  interface Window {
    gtag?: GtagCommand;
    dataLayer?: DataLayerObject[];
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/** Low-level push. Prefer trackEvent / trackPageView helpers. */
export function pushDataLayer(data: DataLayerObject): void {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(data);
}

export function trackPageView(path: string, title?: string): void {
  if (!GA_MEASUREMENT_ID) return;

  const pageTitle = title ?? document.title;
  const pageLocation = window.location.href;

  pushDataLayer({
    event: "page_view",
    page_path: path,
    page_title: pageTitle,
    page_location: pageLocation,
  });

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: pageTitle,
    page_location: pageLocation,
  });
}

export function trackEvent(eventName: string, params?: AnalyticsEventParams): void {
  if (!GA_MEASUREMENT_ID) return;

  const payload = { event: eventName, ...params };
  pushDataLayer(payload);
  window.gtag?.("event", eventName, params);
}

export function trackNavigation(
  linkText: string,
  linkUrl: string,
  surface: "desktop" | "mobile_tab" | "mobile_more",
): void {
  trackEvent("navigation_click", {
    link_text: linkText,
    link_url: linkUrl,
    nav_surface: surface,
  });
}

export function trackCta(destination: "email" | "contact"): void {
  trackEvent("cta_send_brief", {
    cta_name: "send_brief",
    destination,
  });
}

export function trackFileDownload(fileName: string): void {
  trackEvent("file_download", {
    file_name: fileName,
    link_url: window.location.href,
  });
}

export function trackOutboundClick(linkText: string, linkUrl: string, context?: string): void {
  trackEvent("outbound_click", {
    link_text: linkText,
    link_url: linkUrl,
    ...(context ? { context } : {}),
  });
}

export function trackSocialClick(platform: string): void {
  trackEvent("social_click", {
    platform,
    link_text: platform,
  });
}

export function trackOutroLink(linkText: string, linkUrl: string): void {
  trackEvent("outro_link_click", {
    link_text: linkText,
    link_url: linkUrl,
  });
}
