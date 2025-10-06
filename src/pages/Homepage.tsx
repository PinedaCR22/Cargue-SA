import ContactStrip from "../sections/homepage/ContactStrip";
import FeaturedProjects from "../sections/homepage/FeaturedProjects";
import Hero from "../sections/homepage/hero";
import Info from "../sections/homepage/info";
import Services from "../sections/homepage/services";
import WhyUs from "../sections/homepage/WhyUs";

import useSEO from "../seo/useSEO";
import JsonLd from "../seo/JsonLd";
import { SITE } from "../seo/site.config";

export default function HomePage() {
  // 🔹 Título SOLO "Cargue S.A"
  useSEO({
    title: "Cargue S.A",
    description: `${SITE.name}: ${SITE.services.join(
      " y "
    )} en ${SITE.address.locality}, ${SITE.address.region}. Atendemos ${SITE.serviceAreas[0]}.`,
    url: `${SITE.domain}/`,
    image: SITE.ogImagePath,
    canonical: `${SITE.domain}/`,
  });

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.domain,
    image: SITE.logoPath,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    openingHours: SITE.hours,
    areaServed: SITE.serviceAreas,
    sameAs: Object.values(SITE.socials).filter(Boolean),
  };

  return (
    <main className="min-h-dvh bg-white text-[#1f2937]">
      {/* H1 oculto accesible */}
      <h1 className="sr-only">Cargue S.A</h1>

      <JsonLd data={orgSchema} />

      <Hero />
      <Info />
      <Services />
      <FeaturedProjects />
      <WhyUs />
      <ContactStrip />
    </main>
  );
}
