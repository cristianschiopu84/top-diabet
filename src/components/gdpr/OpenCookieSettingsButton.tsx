"use client";

import type { ReactNode } from "react";
import { useConsent } from "@/hooks/useConsent";

type OpenCookieSettingsButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function OpenCookieSettingsButton({
  className = "text-sm text-muted transition hover:text-primary",
  children = "Setări cookies",
}: OpenCookieSettingsButtonProps) {
  const { openSettings } = useConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className={className}
      aria-haspopup="dialog"
    >
      {children}
    </button>
  );
}
