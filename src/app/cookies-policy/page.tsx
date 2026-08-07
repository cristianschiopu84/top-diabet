import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { SITE } from "@/lib/constants";
import { LEGAL_ENTITY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politica Cookies",
  description: `Politica de cookies — ${SITE.title}.`,
  alternates: { canonical: `${SITE.url}/cookies-policy` },
};

export default function CookiesPolicyPage() {
  return (
    <LegalLayout title="Politica Cookies" updated="16 iulie 2026">
      <p>
        Această politică explică modul în care {LEGAL_ENTITY.companyName}{" "}
        ({LEGAL_ENTITY.tradeName}, CUI {LEGAL_ENTITY.cui}) folosește cookie-uri
        și tehnologii similare pe {SITE.url}, în conformitate cu GDPR și
        Directiva ePrivacy.
      </p>

      <h2>1. Ce sunt cookie-urile?</h2>
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul
        dumneavoastră când vizitați un website. Ele pot fi „de sesiune”
        (șterse la închiderea browserului) sau „persistente” (rămân o perioadă
        definită).
      </p>

      <h2>2. Tipurile de cookie-uri pe care le folosim</h2>
      <ul>
        <li>
          <strong className="text-foreground">Necesare</strong> — esențiale pentru
          funcționare, securitate și memorarea consimțământului. Sunt active
          întotdeauna.
        </li>
        <li>
          <strong className="text-foreground">Analitice</strong> — ne ajută să
          înțelegem traficul și utilizarea paginilor (ex. Google Analytics,
          Microsoft Clarity, Hotjar). Se încarcă doar cu consimțământ.
        </li>
        <li>
          <strong className="text-foreground">Marketing</strong> — măsurarea
          campaniilor și remarketing (ex. Meta Pixel). Se încarcă doar cu
          consimțământ.
        </li>
        <li>
          <strong className="text-foreground">Preferințe</strong> — rețin setări
          opționale de interfață. Se activează doar cu consimțământ.
        </li>
      </ul>

      <h2>3. Durata</h2>
      <ul>
        <li>
          Cookie-ul / înregistrarea de consimțământ: până la retragere sau
          actualizare (stocare locală în browser).
        </li>
        <li>
          Cookie-urile ale furnizorilor terți: conform politicilor acestora
          (de regulă de la sesiune până la 24 luni).
        </li>
      </ul>

      <h2>4. Scopul</h2>
      <p>
        Cookie-urile necesare asigură navigarea și reținerea alegerii GDPR.
        Cele analitice și de marketing sunt folosite exclusiv după acceptarea
        categoriei aferente, pentru statistici și, după caz, promovare.
      </p>

      <h2>5. Blocarea scripturilor de tracking</h2>
      <p>
        Nu încărcăm Google Analytics, Google Tag Manager, Meta Pixel, Hotjar,
        Microsoft Clarity sau alte scripturi de urmărire înainte de
        consimțământul dumneavoastră pentru categoria relevantă.
      </p>

      <h2>6. Cum puteți șterge cookie-urile</h2>
      <p>
        Puteți șterge cookie-urile din setările browserului (Chrome, Firefox,
        Edge, Safari etc.). Ștergerea poate afecta funcționalitatea unor
        elemente ale site-ului.
      </p>

      <h2>7. Cum modificați preferințele</h2>
      <p>
        Folosiți oricând linkul{" "}
        <strong className="text-foreground">„Setări cookies”</strong> din
        subsolul site-ului pentru a redeschide panoul GDPR, a accepta, a
        refuza sau a personaliza categoriile. Detalii despre date personale:{" "}
        <Link href="/privacy-policy" className="font-medium text-primary">
          Politica de Confidențialitate
        </Link>
        .
      </p>

      <h2>8. Contact</h2>
      <p>
        Operator: {LEGAL_ENTITY.companyName} (CUI {LEGAL_ENTITY.cui})
        <br />
        Întrebări:{" "}
        <a href={`mailto:${LEGAL_ENTITY.email}`} className="font-medium text-primary">
          {LEGAL_ENTITY.email}
        </a>
        .
      </p>

      <h2>Conținut furnizat de terți</h2>
      <p>
        Site-ul poate încărca conținut furnizat de terți (de exemplu{" "}
        <strong className="text-foreground">Google Maps</strong>), care poate
        seta cookie-uri sau colecta date tehnice conform politicilor
        furnizorului respectiv.
      </p>
      <p>
        Pentru informații suplimentare privind modul în care Google prelucrează
        datele, consultați:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary"
        >
          https://policies.google.com/privacy
        </a>
        .
      </p>
    </LegalLayout>
  );
}
