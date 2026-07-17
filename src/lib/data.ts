export const services = [
  {
    id: "endocrinologie",
    title: "Endocrinologie",
    description:
      "Evaluarea și tratamentul afecțiunilor endocrine: tiroidă, hipofiză, suprarenale și dezechilibre hormonale.",
    icon: "dna" as const,
  },
  {
    id: "diabet",
    title: "Diabet zaharat și boli de nutriție",
    description:
      "Diagnostic, tratament și monitorizare pentru diabet tip 1, tip 2, prediabet și boli metabolice.",
    icon: "syringe" as const,
  },
  {
    id: "medicina-interna",
    title: "Medicină internă",
    description:
      "Evaluare completă, diagnostic și tratament pentru afecțiunile organelor interne la adulți.",
    icon: "stethoscope" as const,
  },
  {
    id: "psihiatrie",
    title: "Psihiatrie",
    description:
      "Evaluare, consiliere și tratament pentru sănătatea mintală, într-un cadru confidențial și empatic.",
    icon: "brain" as const,
  },
  {
    id: "medicina-de-familie",
    title: "Medicină de familie",
    description:
      "Îngrijire medicală de bază pentru întreaga familie: prevenție, consultații și monitorizare continuă.",
    icon: "user" as const,
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "ani experiență" },
  { value: 5000, suffix: "+", label: "pacienți" },
  { value: 98, suffix: "%", label: "satisfacție" },
];

export const doctors = [
  {
    slug: "dr-mihaela-vladu",
    name: "Dr. Mihaela Vladu",
    specialty: "Medic primar diabet și boli de nutriție",
    experience: "Fondatoare Top Diabet",
    bio: "Medic primar diabet și boli de nutriție, fondatoarea clinicii Top Diabet. Abordare personalizată pentru diabet tip 1, tip 2, nutriție și boli metabolice.",
    image: "/images/medici/dr-mihaela-vladu.png",
  },
  {
    slug: "dr-catalin-cotulbea",
    name: "Dr. Cătălin Cotulbea",
    specialty: "Diabetolog",
    experience: "Peste 10 ani experiență",
    bio: "Medic diabetolog cu peste 10 ani de experiență în diagnosticul, tratamentul și monitorizarea diabetului zaharat.",
    image: "/images/medici/dr-catalin-cotulbea.png",
  },
  {
    slug: "dr-diana-clenciu",
    name: "Dr. Diana Clenciu",
    specialty: "Diabetolog",
    experience: "Peste 15 ani experiență",
    bio: "Medic diabetolog cu peste 15 ani de experiență în îngrijirea pacienților cu diabet și boli metabolice.",
    image: "/images/medici/dr-diana-clenciu.png",
  },
  {
    slug: "dr-adina-mitrea",
    name: "Dr. Adina Mitrea",
    specialty: "Diabetolog",
    experience: "Peste 10 ani experiență",
    bio: "Medic diabetolog cu peste 10 ani de experiență în tratamentul diabetului zaharat și al afecțiunilor metabolice.",
    image: "/images/medici/dr-adina-mitrea.png",
  },
  {
    slug: "dr-oana-citu",
    name: "Dr. Oana Cițu",
    specialty: "Diabetolog",
    experience: "Peste 7 ani experiență",
    bio: "Medic diabetolog cu peste 7 ani de experiență în îngrijirea și consilierea pacienților cu diabet.",
    image: "/images/medici/dr-oana-citu.png",
  },
  {
    slug: "dr-diana-protasiewich",
    name: "Dr. Diana Protasiewich",
    specialty: "Diabetolog",
    experience: "Peste 10 ani experiență",
    bio: "Medic diabetolog cu peste 10 ani de experiență în diagnosticul și tratamentul diabetului zaharat.",
    image: "/images/medici/dr-diana-protasiewich.png",
  },
  {
    slug: "dr-simona-lungu",
    name: "Dr. Simona Lungu",
    specialty: "Diabetolog",
    experience: "Peste 7 ani experiență",
    bio: "Medic diabetolog cu peste 7 ani de experiență în tratamentul și monitorizarea diabetului zaharat.",
    image: "/images/medici/dr-simona-lungu.png",
  },
  {
    slug: "dr-loredana-ivan",
    name: "Dr. Loredana Ivan",
    specialty: "Psihiatrie",
    experience: "Peste 10 ani experiență",
    bio: "Medic psihiatru cu peste 10 ani de experiență în evaluarea, consilierea și tratamentul afecțiunilor de sănătate mintală.",
    image: "/images/medici/dr-loredana-ivan.png",
  },
];

export const advantages = [
  {
    title: "Programări rapide",
    description: "Sloturi flexibile și confirmare rapidă, inclusiv online.",
    icon: "clock" as const,
  },
  {
    title: "Consultații personalizate",
    description: "Fiecare plan este construit pe nevoile tale reale.",
    icon: "user" as const,
  },
  {
    title: "Tehnologie modernă",
    description: "CGM, analize avansate și urmărire digitală.",
    icon: "cpu" as const,
  },
  {
    title: "Monitorizare permanentă",
    description: "Suport între vizite, pentru control continuu.",
    icon: "pulse" as const,
  },
  {
    title: "Empatie",
    description: "Comunicare clară, respect și suport pe termen lung.",
    icon: "smile" as const,
  },
  {
    title: "Experiență",
    description: "Echipă cu experiență vastă în diabetologie clinică.",
    icon: "award" as const,
  },
];

export const testimonials = [
  {
    name: "Maria I.",
    role: "Pacientă · Diabet tip 2",
    quote:
      "Am simțit pentru prima dată că cineva îmi explică totul pe înțelesul meu. Glicemia e stabilă și am încredere în planul meu.",
    rating: 5,
  },
  {
    name: "Cristian D.",
    role: "Pacient · Diabet tip 1",
    quote:
      "Monitorizarea continuă și educația primită aici mi-au schimbat rutina zilnică. Profesionalism de top.",
    rating: 5,
  },
  {
    name: "Andreea P.",
    role: "Pacientă · Nutriție",
    quote:
      "Planul nutrițional a fost realist și ușor de urmat. Am slăbit sănătos, fără restricții extreme.",
    rating: 5,
  },
  {
    name: "Radu M.",
    role: "Pacient · Obezitate",
    quote:
      "Clinică modernă, medici empatici și rezultate măsurabile. Recomand cu încredere Top Diabet.",
    rating: 5,
  },
  {
    name: "Elena V.",
    role: "Pacientă · Prediabet",
    quote:
      "Am aflat la timp că sunt la risc și am primit un plan clar de prevenție. După șase luni, analizele mele sunt în parametri normali.",
    rating: 5,
  },
  {
    name: "Mihai T.",
    role: "Pacient · Diabet tip 2",
    quote:
      "După ani de valori instabile, aici am găsit un tratament care funcționează pentru mine. Hemoglobina glicată a scăzut vizibil.",
    rating: 5,
  },
  {
    name: "Carmen S.",
    role: "Pacientă · Nutriție",
    quote:
      "Consilierea nutrițională m-a ajutat să înțeleg ce mănânc și de ce. Nu e o dietă, e un mod de viață pe care îl pot ține.",
    rating: 5,
  },
  {
    name: "Adrian N.",
    role: "Pacient · Monitorizare CGM",
    quote:
      "Senzorul de monitorizare continuă mi-a arătat exact cum reacționează corpul meu. Deciziile se iau pe date, nu pe presupuneri.",
    rating: 5,
  },
  {
    name: "Ioana B.",
    role: "Pacientă · Diabet gestațional",
    quote:
      "Pe toată durata sarcinii am fost urmărită îndeaproape. M-am simțit în siguranță, iar bebelușul s-a născut perfect sănătos.",
    rating: 5,
  },
  {
    name: "Vasile P.",
    role: "Pacient · Diabet tip 1",
    quote:
      "Educația diabetologică primită aici valorează enorm. Îmi ajustez singur dozele cu încredere, iar controalele confirmă că fac bine.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    slug: "controlul-glicemiei-in-2026",
    title: "Controlul glicemiei în 2026: ce contează cu adevărat",
    excerpt:
      "De la CGM la obiceiuri zilnice — ghid practic pentru un control mai stabil.",
    date: "12 martie 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "alimentatie-pentru-diabet-tip-2",
    title: "Alimentație pentru diabet tip 2 fără diete extreme",
    excerpt:
      "Cum construiești mese echilibrate care susțin energia și valorile glicemice.",
    date: "28 februarie 2026",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cgm-cand-merita",
    title: "Monitorizare continuă: când merită să începi",
    excerpt:
      "Avantaje, candidați ideali și cum interpretezi datele împreună cu medicul.",
    date: "5 februarie 2026",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
  },
];

export const faqs = [
  {
    question: "Cum pot programa o consultație?",
    answer:
      "Poți programa telefonic — apasă butonul „Programează-te” sau sună la 0770 880 071 — ori prin email. Îți confirmăm slotul disponibil în cel mai scurt timp.",
  },
  {
    question: "Ce trebuie să aduc la prima vizită?",
    answer:
      "Recomandăm analize recente (dacă există), lista tratamentelor curente, jurnal glicemic sau date CGM și un scurt istoric medical.",
  },
  {
    question: "Lucrați și cu diabet tip 1, și tip 2?",
    answer:
      "Da. Oferim consultații pentru diabet tip 1, tip 2, prediabet, precum și pentru nutriție și boli metabolice asociate.",
  },
  {
    question: "Oferiți și consiliere nutrițională?",
    answer:
      "Da. Nutriționistul clinician din echipă elaborează planuri alimentare personalizate, integrate cu tratamentul diabetologic.",
  },
  {
    question: "Pot beneficia de monitorizare continuă (CGM)?",
    answer:
      "Da. Evaluăm dacă CGM este potrivit pentru tine, te ghidăm în alegerea dispozitivului și în interpretarea datelor.",
  },
  {
    question: "Consultațiile sunt acoperite de asigurare?",
    answer:
      "În funcție de tipul de consultație și de asigurarea pe care o deții. Contactează-ne pentru detalii actualizate despre decontare.",
  },
];
