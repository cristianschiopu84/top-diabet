import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

export function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-[#0f8aa3] to-secondary px-8 py-14 text-center shadow-xl shadow-primary/20 sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-accent/20 blur-2xl"
              aria-hidden
            />
            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Programează o consultație chiar astăzi.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/90">
              Fă primul pas spre un control mai bun al diabetului — într-un mediu
              modern, empatic și profesionist.
            </p>
            <div className="relative mt-8">
              <Button href={SITE.phoneHref} variant="white" className="px-8">
                Programează-te
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
