import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { doctors } from "@/lib/data";

export function Doctors() {
  return (
    <section
      id="medici"
      className="relative overflow-hidden bg-gradient-to-b from-white via-light-gray/45 to-white py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-60 w-60 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Medici"
            title="Echipa care te însoțește"
            description="Specialiști cu experiență clinică, dedicați rezultatelor pe termen lung."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <FadeIn key={doctor.slug} delay={index * 0.06}>
              <article className="group flex h-full flex-col items-center rounded-3xl border border-primary/15 bg-white/80 p-8 text-center shadow-lg shadow-primary/8 ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/15">
                <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/20 transition duration-300 group-hover:ring-secondary/35">
                  <Image
                    src={doctor.image}
                    alt={`Avatar ilustrat ${doctor.name}`}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {doctor.specialty}
                </p>
                <p className="mt-1 text-sm text-muted">{doctor.experience}</p>
                <div className="mt-6 w-full">
                  <Button
                    href={`/medici/${doctor.slug}`}
                    variant="secondary"
                    className="w-full"
                  >
                    Vezi profilul
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
