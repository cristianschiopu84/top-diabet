import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-light-gray to-white py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
          Eroare 404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Linkul poate fi greșit sau pagina a fost mutată. Te putem ajuta să revii
          la site-ul clinicii.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Înapoi acasă</Button>
          <Button href={SITE.phoneHref} variant="secondary">
            Programează-te
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted">
          Sau exploră{" "}
          <Link href="/#servicii" className="font-medium text-primary hover:underline">
            serviciile
          </Link>{" "}
          și{" "}
          <Link href="/#medici" className="font-medium text-primary hover:underline">
            echipa medicală
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
