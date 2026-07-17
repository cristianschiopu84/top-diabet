/**
 * Consent model & cookie category definitions for GDPR / ePrivacy.
 * Extend TRACKING_CONFIG when adding new vendors.
 */

export const CONSENT_STORAGE_KEY = "top-diabet-consent-v1";
export const CONSENT_VERSION = 1;

export type ConsentCategoryId =
  | "necessary"
  | "analytics"
  | "marketing"
  | "preferences";

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type StoredConsent = {
  version: number;
  updatedAt: string;
  categories: ConsentCategories;
};

export type ConsentCategoryMeta = {
  id: ConsentCategoryId;
  title: string;
  description: string;
  required: boolean;
};

export const CONSENT_CATEGORIES: ConsentCategoryMeta[] = [
  {
    id: "necessary",
    title: "Necesare",
    description:
      "Asigură funcționarea de bază a site-ului (securitate, preferințe de consimțământ). Nu pot fi dezactivate.",
    required: true,
  },
  {
    id: "analytics",
    title: "Analitice",
    description:
      "Ne ajută să înțelegem cum este folosit site-ul (ex. Google Analytics, Microsoft Clarity, Hotjar).",
    required: false,
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Permite măsurarea campaniilor și remarketing (ex. Meta Pixel, Google Ads).",
    required: false,
  },
  {
    id: "preferences",
    title: "Preferințe",
    description:
      "Memorează setări opționale de interfață pentru o experiență personalizată.",
    required: false,
  },
];

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ALL_ACCEPTED_CATEGORIES: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

/** Optional tracking IDs — leave empty until configured in env. */
export const TRACKING_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID ?? "",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
} as const;

export function createConsentRecord(
  categories: ConsentCategories
): StoredConsent {
  return {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: { ...categories, necessary: true },
  };
}

export function isValidStoredConsent(value: unknown): value is StoredConsent {
  if (!value || typeof value !== "object") return false;
  const record = value as StoredConsent;
  if (record.version !== CONSENT_VERSION) return false;
  if (typeof record.updatedAt !== "string") return false;
  const c = record.categories;
  if (!c || typeof c !== "object") return false;
  return (
    c.necessary === true &&
    typeof c.analytics === "boolean" &&
    typeof c.marketing === "boolean" &&
    typeof c.preferences === "boolean"
  );
}
