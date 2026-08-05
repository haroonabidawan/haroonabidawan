import Script from "next/script";
import { Suspense } from "react";
import { AnalyticsPageView } from "@/components/analytics-page-view";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            ${isDev ? "debug_mode: true," : ""}
          });
          dataLayer.push({
            event: 'site_context',
            site_name: 'Haroon Abid Awan',
            site_host: 'haroonabidawan.com',
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsPageView />
      </Suspense>
    </>
  );
}
