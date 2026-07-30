import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section
      id="intrebari"
      className="relative overflow-hidden bg-gradient-to-b from-white via-light-gray/45 to-white py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Întrebări frecvente"
            title="Răspunsuri clare, înainte de consultație"
            description="Cele mai frecvente întrebări despre programări, vizite și servicii."
          />
        </FadeIn>
        <FadeIn className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </FadeIn>
      </Container>
    </section>
  );
}
