import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

const contactItems = [
  {
    icon: HiMapPin,
    label: "Adresa",
    value: "Strada Calea București nr. 137E, Craiova",
    href: "https://www.google.com/maps/search/?api=1&query=Calea+Bucure%C8%99ti+137E%2C+Craiova",
    external: true,
  },
  {
    icon: HiPhone,
    label: "Telefon",
    value: "0770 880 071",
    href: SITE.phoneHref,
  },
  {
    icon: HiEnvelope,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
];

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
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-light-gray p-8 text-center shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="mt-2 text-sm leading-relaxed text-muted transition hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
