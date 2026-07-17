"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ALL_ACCEPTED_CATEGORIES,
  DEFAULT_CATEGORIES,
  createConsentRecord,
  type ConsentCategories,
  type StoredConsent,
} from "@/lib/consent";
import { readConsentFromStorage, writeConsentToStorage } from "@/lib/storage";

type ConsentContextValue = {
  /** True after hydration + storage read */
  ready: boolean;
  /** User has saved a choice */
  hasConsented: boolean;
  categories: ConsentCategories;
  consent: StoredConsent | null;
  isBannerVisible: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: ConsentCategories) => void;
  openSettings: () => void;
  closeSettings: () => void;
  openBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<StoredConsent | null>(null);
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readConsentFromStorage();
    setConsent(stored);
    setBannerVisible(!stored);
    setReady(true);
  }, []);

  const persist = useCallback((categories: ConsentCategories) => {
    const record = createConsentRecord(categories);
    writeConsentToStorage(record);
    setConsent(record);
    setBannerVisible(false);
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist(ALL_ACCEPTED_CATEGORIES);
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist(DEFAULT_CATEGORIES);
  }, [persist]);

  const savePreferences = useCallback(
    (categories: ConsentCategories) => {
      persist({ ...categories, necessary: true });
    },
    [persist]
  );

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
    setBannerVisible(false);
  }, []);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
    if (!consent) setBannerVisible(true);
  }, [consent]);

  const openBanner = useCallback(() => {
    setSettingsOpen(false);
    setBannerVisible(true);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      ready,
      hasConsented: Boolean(consent),
      categories: consent?.categories ?? DEFAULT_CATEGORIES,
      consent,
      isBannerVisible,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
      openBanner,
    }),
    [
      ready,
      consent,
      isBannerVisible,
      isSettingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
      openBanner,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsentContext(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}
