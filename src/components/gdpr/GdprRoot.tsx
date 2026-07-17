"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () =>
    import("@/components/gdpr/CookieBanner").then((m) => m.CookieBanner),
  { ssr: false }
);

const CookieSettingsModal = dynamic(
  () =>
    import("@/components/gdpr/CookieSettingsModal").then(
      (m) => m.CookieSettingsModal
    ),
  { ssr: false }
);

const TrackingScripts = dynamic(
  () =>
    import("@/components/gdpr/TrackingScripts").then((m) => m.TrackingScripts),
  { ssr: false }
);

/**
 * Client GDPR shell — lazy-loaded UI + consent-gated tracking.
 */
export function GdprRoot() {
  return (
    <>
      <CookieBanner />
      <CookieSettingsModal />
      <TrackingScripts />
    </>
  );
}
