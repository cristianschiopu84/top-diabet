import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="intrebari" className="bg-white py-20 sm:py-24">
      <Container>
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
