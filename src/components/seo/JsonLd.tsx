import { SITE } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE.title,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-14:00"],
    medicalSpecialty: ["Diabetology", "Endocrinology", "Nutrition"],
    priceRange: "$$",
    physician: {
      "@type": "Physician",
      name: SITE.doctor,
      medicalSpecialty: ["Diabetology", "Nutrition"],
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
