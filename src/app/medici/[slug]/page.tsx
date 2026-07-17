import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { doctors } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return { title: "Medic negăsit" };

  return {
    title: doctor.name,
    description: `${doctor.name} — ${doctor.specialty}. ${doctor.bio}`,
    alternates: { canonical: `${SITE.url}/medici/${doctor.slug}` },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) notFound();

  return (
    <section className="bg-gradient-to-b from-light-gray to-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full ring-4 ring-primary/15">
              <Image
                src={doctor.image}
                alt={`Avatar ilustrat ${doctor.name}`}
                fill
                className="object-cover"
                sizes="144px"
                priority
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                Profil medic
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {doctor.name}
              </h1>
              <p className="mt-2 font-medium text-primary">{doctor.specialty}</p>
              <p className="mt-1 text-sm text-muted">{doctor.experience}</p>
            </div>
          </div>
          <p className="mt-8 text-base leading-relaxed text-muted">{doctor.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={SITE.phoneHref}>Programează-te</Button>
            <Button href="/#medici" variant="secondary">
              Toți medicii
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
