import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { SITE } from "@/lib/constants";
import { LEGAL_ENTITY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate",
  description: `Politica de confidențialitate — ${SITE.title}.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Politică de Confidențialitate" updated="16 iulie 2026">
      <p>
        Prezentul document explică modul în care {LEGAL_ENTITY.companyName}{" "}
        ({LEGAL_ENTITY.tradeName}) („noi”, „operatorul”) prelucrează datele cu
        caracter personal ale vizitatorilor site-ului și ale pacienților care ne
        contactează online, în conformitate cu Regulamentul (UE) 2016/679
        (GDPR) și legislația română aplicabilă.
      </p>

      <h2>1. Operatorul de date</h2>
      <ul>
        <li>
          <strong className="text-foreground">Denumire:</strong>{" "}
          {LEGAL_ENTITY.companyName}
        </li>
        <li>
          <strong className="text-foreground">Denumire comercială:</strong>{" "}
          {LEGAL_ENTITY.tradeName}
        </li>
        <li>
          <strong className="text-foreground">CUI:</strong> {LEGAL_ENTITY.cui}
        </li>
        <li>
          <strong className="text-foreground">Nr. Reg. Com.:</strong>{" "}
          {LEGAL_ENTITY.regCom}
        </li>
        <li>
          <strong className="text-foreground">EUID:</strong> {LEGAL_ENTITY.euid}
        </li>
        <li>
          <strong className="text-foreground">Sediu:</strong>{" "}
          {LEGAL_ENTITY.registeredOffice}
        </li>
        <li>
          <strong className="text-foreground">Email:</strong>{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`} className="font-medium text-primary">
            {LEGAL_ENTITY.email}
          </a>
        </li>
        <li>
          <strong className="text-foreground">Telefon:</strong>{" "}
          {LEGAL_ENTITY.phone}
        </li>
        <li>
          <strong className="text-foreground">Contact date personale:</strong>{" "}
          <a href={`mailto:${LEGAL_ENTITY.dpoEmail}`} className="font-medium text-primary">
            {LEGAL_ENTITY.dpoEmail}
          </a>
        </li>
      </ul>

      <h2>2. Date colectate</h2>
      <p>În funcție de interacțiune, putem prelucra:</p>
      <ul>
        <li>date de identificare și contact (nume, email, telefon);</li>
        <li>conținutul mesajelor trimise prin email sau telefonic;</li>
        <li>
          date tehnice de navigare (adresă IP, tip dispozitiv, pagini vizitate)
          — prin cookie-uri, doar cu consimțământ unde este necesar;
        </li>
        <li>
          date medicale — exclusiv în cadrul relației terapeutice / consultației,
          nu prin intermediul site-ului, decât dacă le furnizați voluntar în
          mesaj.
        </li>
      </ul>

      <h2>3. Scopul prelucrării</h2>
      <ul>
        <li>gestionarea programărilor și a solicitărilor de contact;</li>
        <li>comunicarea cu dumneavoastră privind serviciile clinicii;</li>
        <li>îmbunătățirea site-ului și a experienței de navigare;</li>
        <li>îndeplinirea obligațiilor legale aplicabile;</li>
        <li>
          măsurarea traficului și marketing — doar pe baza consimțământului
          pentru cookie-uri analitice / de marketing.
        </li>
      </ul>

      <h2>4. Temeiul legal</h2>
      <ul>
        <li>
          <strong className="text-foreground">Art. 6 (1)(a) GDPR</strong> —
          consimțământ (cookie-uri non-esențiale, comunicări opționale);
        </li>
        <li>
          <strong className="text-foreground">Art. 6 (1)(b) GDPR</strong> —
          măsuri precontractuale / relația de îngrijire solicitată;
        </li>
        <li>
          <strong className="text-foreground">Art. 6 (1)(c) GDPR</strong> —
          obligații legale;
        </li>
        <li>
          <strong className="text-foreground">Art. 6 (1)(f) GDPR</strong> —
          interes legitim (securitatea site-ului, prevenirea abuzurilor), cu
          echilibrarea drepturilor persoanelor vizate;
        </li>
        <li>
          pentru date medicale: temeiurile speciale din Art. 9 GDPR, după caz
          (îngrijire medicală, consimțământ explicit).
        </li>
      </ul>

      <h2>5. Durata stocării</h2>
      <p>
        Păstrăm datele doar cât este necesar scopului pentru care au fost
        colectate:
      </p>
      <ul>
        <li>
          solicitări de contact: pe durata soluționării și ulterior un termen
          rezonabil de arhivare administrativă (ex. până la 24 luni, dacă nu
          intervine o obligație legală mai lungă);
        </li>
        <li>
          preferințe cookie: până la retragerea consimțământului sau expirarea
          înregistrării locale;
        </li>
        <li>
          documente medicale / dosar pacient: conform obligațiilor legale
          aplicabile profesiei medicale.
        </li>
      </ul>

      <h2>6. Drepturile utilizatorilor</h2>
      <p>Aveți dreptul la:</p>
      <ul>
        <li>acces la date;</li>
        <li>rectificare;</li>
        <li>ștergere („dreptul de a fi uitat”), în condițiile legii;</li>
        <li>restricționarea prelucrării;</li>
        <li>portabilitate;</li>
        <li>opoziție;</li>
        <li>retragerea consimțământului, fără a afecta legalitatea prelucrării anterioare;</li>
        <li>
          plângere la {LEGAL_ENTITY.supervisoryAuthority} —{" "}
          <a
            href={LEGAL_ENTITY.supervisoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary"
          >
            dataprotection.ro
          </a>
          .
        </li>
      </ul>

      <h2>7. Date de contact pentru solicitări</h2>
      <p>
        Pentru exercitarea drepturilor GDPR, scrieți la{" "}
        <a href={`mailto:${LEGAL_ENTITY.email}`} className="font-medium text-primary">
          {LEGAL_ENTITY.email}
        </a>{" "}
        sau la {LEGAL_ENTITY.dpoEmail}, menționând „Solicitare GDPR” în subiect.
      </p>

      <h2>8. Transfer internațional</h2>
      <p>
        Ca regulă, datele sunt prelucrate în Spațiul Economic European. Dacă
        folosim furnizori din afara SEE (ex. instrumente de analiză), transferul
        are loc doar cu garanții adecvate (clauze contractuale standard,
        decizii de adecvare) și, unde este cazul, pe baza consimțământului
        dumneavoastră pentru cookie-uri.
      </p>

      <h2>9. Cookie-uri</h2>
      <p>
        Site-ul folosește cookie-uri necesare și, opțional, analitice, de
        marketing și de preferințe. Detalii complete:{" "}
        <Link href="/cookies-policy" className="font-medium text-primary">
          Politica Cookies
        </Link>
        . Puteți modifica oricând alegerea din linkul „Setări cookies” din
        subsolul paginii.
      </p>

      <h2>10. Actualizări</h2>
      <p>
        Putem actualiza această politică. Versiunea publicată pe site este cea
        aplicabilă. Vă recomandăm să o consultați periodic.
      </p>
    </LegalLayout>
  );
}
