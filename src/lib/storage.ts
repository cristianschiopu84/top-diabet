import {
  CONSENT_STORAGE_KEY,
  isValidStoredConsent,
  type StoredConsent,
} from "@/lib/consent";

export function readConsentFromStorage(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isValidStoredConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeConsentToStorage(consent: StoredConsent): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    window.dispatchEvent(
      new CustomEvent("top-diabet:consent-updated", { detail: consent })
    );
  } catch {
    // Storage may be unavailable (private mode) — fail silently.
  }
}

export function clearConsentFromStorage(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}
