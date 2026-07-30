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
          ? "border-border/80 bg-white/80 shadow-sm shadow-slate-900/[0.04] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
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
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-sm shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
            TD
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted sm:text-xs">
              Dr. Mihaela Vladu
            </span>
            <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              Top <span className="text-primary">Diabet</span>
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-light-gray hover:text-foreground"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-light-gray lg:hidden"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-light-gray"
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
