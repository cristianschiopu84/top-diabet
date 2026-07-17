"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white py-20 sm:py-24" aria-roledescription="carousel">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Testimoniale"
            title="Ce spun pacienții noștri"
            description="Povești reale despre control glicemic, încredere și rezultate măsurabile."
          />
        </FadeIn>

        <FadeIn className="mt-14">
          <div className="relative mx-auto max-w-3xl rounded-[1.75rem] border border-border bg-light-gray p-8 shadow-sm sm:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div
                  className="mb-5 flex justify-center gap-1 text-accent"
                  aria-label={`${item.rating} din 5 stele`}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" aria-hidden />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  „{item.quote}”
                </p>
                <footer className="mt-8 flex flex-col items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-base font-semibold text-white ring-2 ring-white"
                    aria-hidden
                  >
                    {initials(item.name)}
                  </div>
                  <div>
                    <cite className="not-italic text-base font-semibold text-foreground">
                      {item.name}
                    </cite>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Testimonialul anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:scale-105 hover:border-primary/30 hover:text-primary"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Navigare testimoniale">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Testimonialul următor"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:scale-105 hover:border-primary/30 hover:text-primary"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
