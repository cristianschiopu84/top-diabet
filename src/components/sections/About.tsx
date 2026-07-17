import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { stats } from "@/lib/data";

export function About() {
  return (
    <section id="despre" className="bg-light-gray py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-slate-900/8 ring-1 ring-border">
              <Image
                src="/images/despre-birou.jpg"
                alt="Interior modern al clinicii Top Diabet"
                width={1402}
                height={1122}
                className="h-[360px] w-full object-cover sm:h-[460px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
              Despre clinică
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              O clinică modernă, centrată pe pacient
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              La Top Diabet, sub îndrumarea Dr. Mihaela Vladu, combinăm expertiza
              medicală, tehnologia de monitorizare și educația diabetologică pentru
              a oferi un parcurs clar, calm și eficient. Fiecare consultație este
              personalizată — de la diagnostic până la urmărirea pe termen lung.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Mediul clinic este gândit să inspire încredere: spații luminoase,
              comunicare transparentă și un standard de îngrijire comparabil cu
              cele mai bune clinici private din România.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-14">
          <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-border sm:p-10">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Calitate și siguranță, la cele mai înalte standarde
            </h3>
            <div className="mt-5 grid gap-x-10 gap-y-4 text-base leading-relaxed text-muted lg:grid-cols-2">
              <div className="space-y-4">
                <p>
                  Calitatea de excepție a serviciilor medicale, personalizate
                  nevoilor fiecărui pacient, și performanța reprezintă o regulă
                  pentru noi. Dedicăm toate resursele noastre pentru a asigura
                  fiecărui client servicii medicale profesioniste la cele mai
                  înalte standarde, bazate pe un suport tehnic de ultimă
                  generație, în condiții impecabile de siguranță și confort.
                </p>
                <p>
                  Pregătirea personalului și modul de lucru sunt constant
                  îmbunătățite, conferind astfel siguranță maximă pacienților și
                  garantând rezultate excelente.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Policlinica noastră dispune de un laborator performant de
                  analize medicale, dotat cu analizoare automate, în care se pot
                  realiza analize specifice de biochimie, hematologie,
                  imunologie, bacteriologie, parazitologie și toxicologie.
                </p>
                <p>
                  Depunem, în continuare, toate eforturile pentru a păstra
                  standardul ridicat al serviciilor cu care ne-am obișnuit
                  pacienții și pentru a ne asigura de calitatea și siguranța
                  actului medical.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
