"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { CookiePreferences } from "@/components/gdpr/CookiePreferences";
import { useConsent } from "@/hooks/useConsent";
import type { ConsentCategories } from "@/lib/consent";

export function CookieSettingsModal() {
  const {
    ready,
    isSettingsOpen,
    categories,
    closeSettings,
    savePreferences,
    acceptAll,
    rejectAll,
  } = useConsent();
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [draft, setDraft] = useState<ConsentCategories>(categories);

  useEffect(() => {
    if (isSettingsOpen) {
      setDraft(categories);
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isSettingsOpen, categories]);

  useEffect(() => {
    if (!isSettingsOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSettings();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSettingsOpen, closeSettings]);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {isSettingsOpen ? (
        <motion.div
          className="fixed inset-0 z-[110] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Închide setările cookies"
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm"
            onClick={closeSettings}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            initial={reduceMotion ? false : { y: 28, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-slate-900/20"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
              <div>
                <h2
                  id={titleId}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Setări cookies
                </h2>
                <p id={descId} className="mt-1 text-sm text-muted">
                  Alege ce categorii de cookie-uri permitem.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeSettings}
                aria-label="Închide"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition hover:bg-light-gray hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <HiXMark className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <CookiePreferences value={draft} onChange={setDraft} />
            </div>

            <div className="flex flex-col gap-2 border-t border-border bg-light-gray/50 p-4 sm:flex-row sm:justify-end sm:p-5">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Refuz toate
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-2xl px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Accept toate
              </button>
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0c667e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Salvează preferințele
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
