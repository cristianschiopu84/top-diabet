"use client";

import { IconType } from "react-icons";
import {
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineCpuChip,
  HiOutlineFaceSmile,
  HiOutlineAcademicCap,
} from "react-icons/hi2";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { advantages } from "@/lib/data";

const icons: Record<(typeof advantages)[number]["icon"], IconType> = {
  clock: HiOutlineClock,
  user: HiOutlineUser,
  cpu: HiOutlineCpuChip,
  pulse: MdOutlineMonitorHeart,
  smile: HiOutlineFaceSmile,
  award: HiOutlineAcademicCap,
};

export function Advantages() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-light-gray/65 via-white to-light-gray/50 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute right-12 top-14 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Avantaje"
            title="De ce pacienții aleg clinica Dr. Diana Drăgoi"
            description="Standarde înalte de îngrijire, tehnologie modernă și o relație medicală bazată pe încredere."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={index * 0.04}>
                <div className="flex h-full gap-4 rounded-3xl border border-primary/15 bg-white/80 p-6 shadow-lg shadow-primary/8 ring-1 ring-white/70 backdrop-blur-sm transition duration-300 hover:scale-[1.015] hover:shadow-xl hover:shadow-secondary/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 text-secondary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
