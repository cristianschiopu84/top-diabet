function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

const appEnvironment =
  process.env.NEXT_PUBLIC_APP_ENV === "preview" ? "preview" : "production";

const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dianadragoi.ro"
);

export const SITE = {
  name: "Diana Drăgoi",
  title: "Dr. Diana Drăgoi",
  doctor: "Dr. Diana Drăgoi",
  legalName: "DIANA DRĂGOI SRL",
  tagline: "Grijă personalizată pentru sănătatea ta.",
  description:
    "Dr. Diana Drăgoi. Consultații de specialitate într-un mediu modern și profesionist, în Craiova.",
  url: siteUrl,
  environment: appEnvironment,
  isPreview: appEnvironment === "preview",
  email: "contact@dianadragoi.ro",
  phone: "+40 770 880 071",
  phoneHref: "tel:+40770880071",
  phoneSecondary: "+40 770 720 596",
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
    facebook: "https://facebook.com/dianadragoi",
    instagram: "https://instagram.com/dianadragoi",
    linkedin: "https://linkedin.com/in/dianadragoi",
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
