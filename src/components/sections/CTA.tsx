import { HiOutlineClock, HiOutlinePhone } from "react-icons/hi2";
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
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              aria-hidden
            />
            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Programează o consultație chiar astăzi.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/90">
              Fă primul pas spre un control mai bun al diabetului — într-un mediu
              modern, empatic și profesionist.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE.phoneHref} variant="white" className="px-8">
                Programează-te
              </Button>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-white/20"
              >
                <HiOutlinePhone className="h-4 w-4" aria-hidden />
                {SITE.phone}
              </a>
            </div>
            <p className="relative mt-6 inline-flex items-center justify-center gap-2 text-sm text-white/80">
              <HiOutlineClock className="h-4 w-4" aria-hidden />
              {SITE.hours}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
