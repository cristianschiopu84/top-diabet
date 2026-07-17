import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { SITE } from "@/lib/constants";
import { LEGAL_ENTITY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: `Termeni și condiții de utilizare — ${SITE.title}.`,
  alternates: { canonical: `${SITE.url}/terms-and-conditions` },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout title="Termeni și Condiții" updated="16 iulie 2026">
      <p>
        Acești termeni reglementează utilizarea website-ului {SITE.url}, operat
        de {LEGAL_ENTITY.companyName} ({LEGAL_ENTITY.tradeName}). Prin accesarea
        site-ului, acceptați termenii de mai jos.
      </p>

      <h2>1. Utilizarea site-ului</h2>
      <p>
        Site-ul are scop informativ și de facilitare a contactului / programării
        la clinică. Conținutul medical are caracter general și{" "}
        <strong className="text-foreground">
          nu înlocuiește consultația de specialitate
        </strong>
        . Nu utilizați site-ul în mod abuziv, ilegal sau care afectează
        securitatea / disponibilitatea serviciului.
      </p>

      <h2>2. Programări</h2>
      <p>
        Solicitările trimise (email, telefon) reprezintă o
        cerere de contact, nu o confirmare automată a consultației.
        Disponibilitatea se confirmă de către clinică. Ne rezervăm dreptul de a
        reprograma sau anula sloturi în situații justificate (indisponibilitate
        medicală, forță majoră etc.), cu informarea dumneavoastră.
      </p>

      <h2>3. Limitarea răspunderii</h2>
      <ul>
        <li>
          Informațiile de pe site sunt oferite „ca atare”, fără garanție de
          exhaustivitate;
        </li>
        <li>
          nu răspundem pentru decizii medicale luate exclusiv pe baza
          conținutului public;
        </li>
        <li>
          nu garantăm funcționarea neîntreruptă a site-ului sau absența erorilor
          tehnice;
        </li>
        <li>
          linkurile către terți sunt oferite pentru informare; politicile acelor
          site-uri le aparțin.
        </li>
      </ul>

      <h2>4. Proprietate intelectuală</h2>
      <p>
        Textele, designul, logo-ul și celelalte elemente aparțin{" "}
        {LEGAL_ENTITY.companyName} / {LEGAL_ENTITY.tradeName}, exceptând
        conținutul terților (ex. imagini licențiate). Reproducerea fără acord
        scris este interzisă.
      </p>

      <h2>5. Date personale</h2>
      <p>
        Prelucrarea datelor este descrisă în{" "}
        <Link href="/privacy-policy" className="font-medium text-primary">
          Politica de Confidențialitate
        </Link>{" "}
        și{" "}
        <Link href="/cookies-policy" className="font-medium text-primary">
          Politica Cookies
        </Link>
        .
      </p>

      <h2>6. Legislația aplicabilă</h2>
      <p>
        Termenii sunt guvernați de legea română. Orice litigiu va fi soluționat
        pe cale amiabilă; în caz contrar, de instanțele competente din România.
      </p>

      <h2>7. Contact</h2>
      <p>
        {LEGAL_ENTITY.companyName}
        <br />
        CUI {LEGAL_ENTITY.cui} · Nr. Reg. Com. {LEGAL_ENTITY.regCom}
        <br />
        EUID {LEGAL_ENTITY.euid}
        <br />
        {LEGAL_ENTITY.registeredOffice}
        <br />
        {LEGAL_ENTITY.phone} ·{" "}
        <a href={`mailto:${LEGAL_ENTITY.email}`} className="font-medium text-primary">
          {LEGAL_ENTITY.email}
        </a>
      </p>
    </LegalLayout>
  );
}
