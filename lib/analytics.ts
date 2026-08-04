export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagCommand = (
  command: "config" | "event" | "js",
  targetOrDate: string | Date,
  params?: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: GtagCommand;
    dataLayer?: Array<Record<string, string | number | boolean>>;
  }
}

export function trackEvent(action: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", action, params);
}
