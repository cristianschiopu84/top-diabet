import { SITE } from "@/lib/constants";
import { LEGAL_ENTITY } from "@/lib/legal";

export function JsonLd() {
  if (SITE.isPreview) {
    return null;
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE.name,
    legalName: LEGAL_ENTITY.companyName,
    alternateName: SITE.title,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    taxID: LEGAL_ENTITY.cui,
    vatID: `RO${LEGAL_ENTITY.cui}`,
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
