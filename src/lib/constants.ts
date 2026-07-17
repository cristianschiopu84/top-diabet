export const SITE = {
  name: "Top Diabet",
  title: "Dr. Mihaela Vladu — Top Diabet",
  doctor: "Dr. Mihaela Vladu",
  legalName: "Top Diabet",
  tagline: "Grijă personalizată pentru controlul diabetului.",
  description:
    "Dr. Mihaela Vladu — Top Diabet. Consultații de diabet, nutriție și boli metabolice într-un mediu modern și profesionist. Calea București 137E, Craiova.",
  url: "https://topdiabet.ro",
  email: "contact@topdiabet.ro",
  phone: "+40 770 880 071",
  phoneHref: "tel:+40770880071",
  phoneSecondary: "0770 720 596",
  phoneSecondaryHref: "tel:+40770720596",
  address: {
    street: "Calea București 137E",
    city: "Craiova",
    postalCode: "200440",
    country: "RO",
    full: "Calea București 137E, Craiova",
  },
  hours: "Luni – Vineri: 08:00 – 20:00 · Sâmbătă: 09:00 – 14:00",
  social: {
    facebook: "https://facebook.com/topdiabet",
    instagram: "https://instagram.com/topdiabet",
    linkedin: "https://linkedin.com/company/topdiabet",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Calea+Bucure%C8%99ti+137E,+Craiova&output=embed",
} as const;

export const NAV_LINKS = [
  { href: "#acasa", label: "Acasă" },
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#medici", label: "Medici" },
  { href: "#blog", label: "Blog" },
  { href: "#intrebari", label: "Întrebări frecvente" },
  { href: "#contact", label: "Contact" },
] as const;
