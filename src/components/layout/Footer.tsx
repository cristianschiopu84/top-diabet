import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiEnvelope, HiMapPin, HiPhone, HiClock } from "react-icons/hi2";
import { OpenCookieSettingsButton } from "@/components/gdpr/OpenCookieSettingsButton";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

const legalLinks = [
  { href: "/privacy-policy", label: "Politică de Confidențialitate" },
  { href: "/cookies-policy", label: "Politica Cookies" },
  { href: "/terms-and-conditions", label: "Termeni și Condiții" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-light-gray/80 backdrop-blur-sm">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                TD
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
                  Dr. Diana Drăgoi
                </span>
                <span className="text-base font-semibold tracking-tight sm:text-lg">
                  Diana <span className="text-primary">Drăgoi</span>
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Dr. Diana Drăgoi. Consultații de specialitate într-un mediu modern,
              empatic și orientat spre rezultate pe termen lung.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Diana Drăgoi"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-primary shadow-sm ring-1 ring-primary/20 transition hover:scale-105 hover:bg-primary hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Diana Drăgoi"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-primary shadow-sm ring-1 ring-primary/20 transition hover:scale-105 hover:bg-primary hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Diana Drăgoi"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-primary shadow-sm ring-1 ring-primary/20 transition hover:scale-105 hover:bg-primary hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
              Linkuri rapide
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <HiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>{SITE.address.full}</span>
              </li>
              <li className="flex gap-3">
                <HiPhone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="flex flex-col gap-1">
                  <a href={SITE.phoneHref} className="hover:text-primary">
                    {SITE.phone}
                  </a>
                  <a href={SITE.phoneSecondaryHref} className="hover:text-primary">
                    {SITE.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <HiEnvelope className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <HiClock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>{SITE.hours}</span>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-white/85 shadow-sm backdrop-blur-sm">
              <iframe
                title="Hartă Google — locația clinicii Dr. Diana Drăgoi"
                src={SITE.mapsEmbed}
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.legalName}. Toate drepturile rezervate.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <OpenCookieSettingsButton />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
