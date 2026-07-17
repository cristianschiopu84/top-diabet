"use client";

import { useId } from "react";
import type { ConsentCategories, ConsentCategoryId } from "@/lib/consent";
import { CONSENT_CATEGORIES } from "@/lib/consent";

type CookiePreferencesProps = {
  value: ConsentCategories;
  onChange: (next: ConsentCategories) => void;
};

export function CookiePreferences({ value, onChange }: CookiePreferencesProps) {
  const groupId = useId();

  const toggle = (id: ConsentCategoryId, enabled: boolean) => {
    if (id === "necessary") return;
    onChange({ ...value, [id]: enabled, necessary: true });
  };

  return (
    <fieldset className="space-y-3" aria-labelledby={`${groupId}-legend`}>
      <legend id={`${groupId}-legend`} className="sr-only">
        Categorii de cookie-uri
      </legend>
      {CONSENT_CATEGORIES.map((category) => {
        const checked = value[category.id];
        const inputId = `${groupId}-${category.id}`;

        return (
          <div
            key={category.id}
            className="rounded-2xl border border-border bg-light-gray/80 p-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <label
                  htmlFor={inputId}
                  className="text-sm font-semibold text-foreground sm:text-base"
                >
                  {category.title}
                  {category.required ? (
                    <span className="ml-2 text-xs font-medium text-muted">
                      (obligatoriu)
                    </span>
                  ) : null}
                </label>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>
              <button
                id={inputId}
                type="button"
                role="switch"
                aria-checked={checked}
                aria-label={`${category.title}: ${checked ? "activ" : "inactiv"}`}
                disabled={category.required}
                onClick={() => toggle(category.id, !checked)}
                className={`relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                  checked ? "bg-primary" : "bg-slate-300"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                    checked ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
}
