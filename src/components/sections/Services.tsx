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
    <section id="servicii" className="bg-white py-20 sm:py-24">
      <Container>
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
                <article className="group h-full rounded-3xl border border-border bg-white p-7 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
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
