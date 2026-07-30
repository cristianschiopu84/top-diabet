"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-primary/20 bg-white/72 shadow-lg shadow-primary/10 backdrop-blur-2xl"
          : "border-transparent bg-white/58 backdrop-blur-xl"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-6 lg:px-8"
        aria-label="Navigare principală"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${SITE.name} — Acasă`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white shadow-md shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
            TD
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted sm:text-xs">
                Dr. Diana Drăgoi
            </span>
            <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                Diana <span className="text-primary">Drăgoi</span>
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-all hover:bg-white/80 hover:text-foreground hover:shadow-sm hover:shadow-primary/15"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={SITE.phoneHref} className="px-5 py-3">
            Programează-te
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground ring-1 ring-transparent transition hover:bg-white/80 hover:ring-primary/25 lg:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-primary/15 bg-white/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition hover:bg-light-gray/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={SITE.phoneHref}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Programează-te
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
