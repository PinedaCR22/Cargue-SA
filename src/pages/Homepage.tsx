// src/pages/HomePage.tsx

import ContactStrip from "../sections/homepage/ContactStrip";
import FeaturedProjects from "../sections/homepage/FeaturedProjects";
import Hero from "../sections/homepage/hero";
import Services from "../sections/homepage/services";
import WhyUs from "../sections/homepage/WhyUs";


const HomePage = () => {
  return (
    <main className="min-h-dvh bg-white text-[#1f2937]">
      <Hero />
      <Services />
      <FeaturedProjects />
      <WhyUs />
      <ContactStrip />
    </main>
  );
};

export default HomePage;
