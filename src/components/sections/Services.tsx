import { IconType } from "react-icons";
import {
  FaBrain,
  FaDna,
  FaStethoscope,
  FaSyringe,
  FaUserMd,
} from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const icons: Record<(typeof services)[number]["icon"], IconType> = {
  dna: FaDna,
  syringe: FaSyringe,
  stethoscope: FaStethoscope,
  brain: FaBrain,
  user: FaUserMd,
};

export function Services() {
  return (
    <section
      id="servicii"
      className="relative overflow-hidden bg-gradient-to-b from-white via-light-gray/55 to-white py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-12 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Servicii"
            title="Servicii medicale complete, într-un singur loc"
            description="Consultații de specialitate într-un mediu modern, cu accent pe prevenție și îngrijire pe termen lung."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.05}>
                <article className="group h-full rounded-3xl border border-primary/15 bg-white/80 p-7 shadow-lg shadow-primary/8 ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/20 text-primary transition-colors duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
