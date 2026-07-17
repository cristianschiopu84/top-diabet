"use client";

import { useConsentContext } from "@/components/gdpr/ConsentProvider";

/**
 * Public hook for reading / updating GDPR consent.
 */
export function useConsent() {
  return useConsentContext();
}
