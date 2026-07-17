import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Date de contact"
            description="Ne găsești la clinica din Craiova. Sună-ne sau scrie-ne un email."
          />
        </FadeIn>
        <FadeIn className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl border border-border bg-light-gray p-8 text-center shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HiMapPin className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Adresa
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calea+Bucure%C8%99ti+137E%2C+Craiova"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm leading-relaxed text-muted transition hover:text-primary"
              >
                Strada Calea București nr. 137E, Craiova
              </a>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-border bg-light-gray p-8 text-center shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HiPhone className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Telefon
              </h3>
              <div className="mt-2 flex flex-col gap-1.5">
                <a
                  href={SITE.phoneHref}
                  className="text-sm leading-relaxed text-muted transition hover:text-primary"
                >
                  {SITE.phone}
                </a>
                <a
                  href={SITE.phoneSecondaryHref}
                  className="text-sm leading-relaxed text-muted transition hover:text-primary"
                >
                  {SITE.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-border bg-light-gray p-8 text-center shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HiEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Email
              </h3>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 text-sm leading-relaxed text-muted transition hover:text-primary"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
