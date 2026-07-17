"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useConsent } from "@/hooks/useConsent";

export function CookieBanner() {
  const {
    ready,
    isBannerVisible,
    acceptAll,
    rejectAll,
    openSettings,
  } = useConsent();
  const reduceMotion = useReducedMotion();

  if (!ready) return null;

  return (
    <AnimatePresence>
      {isBannerVisible ? (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          initial={reduceMotion ? false : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/40 bg-white/85 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
            <div className="p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                Confidențialitate
              </p>
              <h2
                id="cookie-banner-title"
                className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
              >
                Respectăm confidențialitatea ta
              </h2>
              <p
                id="cookie-banner-desc"
                className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[0.95rem]"
              >
                Folosim cookie-uri necesare pentru funcționarea site-ului și, cu
                acordul tău, cookie-uri analitice, de marketing și de preferințe.
                Poți accepta, refuza sau personaliza oricând. Detalii în{" "}
                <Link
                  href="/cookies-policy"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Politica Cookies
                </Link>{" "}
                și{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Politica de Confidențialitate
                </Link>
                .
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0c667e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Accept toate
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-light-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Refuz toate
                </button>
                <button
                  type="button"
                  onClick={openSettings}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Personalizează
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
