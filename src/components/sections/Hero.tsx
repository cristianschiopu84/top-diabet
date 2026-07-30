"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeLeft, fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="acasa"
      className="relative overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray/60"
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-secondary"
          >
            Dr. Diana Drăgoi · Craiova
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Grijă personalizată pentru{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              controlul diabetului
            </span>
            .
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            Consultații de diabet, nutriție și boli metabolice într-un mediu modern
            și profesionist.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button href={SITE.phoneHref}>Programează-te</Button>
            <Button href="#servicii" variant="secondary">
              Vezi serviciile
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeLeft}
          className="relative"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/20 blur-xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/85 shadow-2xl shadow-primary/15 ring-1 ring-primary/20 backdrop-blur-sm">
            <Image
              src="/images/hero-mihaela.jpg"
              alt="Dr. Diana Drăgoi în cabinet"
              width={1457}
              height={1079}
              priority
              className="h-[420px] w-full object-cover object-center sm:h-[520px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
