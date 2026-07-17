import { About } from "@/components/sections/About";
import { Advantages } from "@/components/sections/Advantages";
import { Blog } from "@/components/sections/Blog";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTA } from "@/components/sections/CTA";
import { Doctors } from "@/components/sections/Doctors";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Advantages />
      <Testimonials />
      <Blog />
      <FAQ />
      <ContactSection />
      <CTA />
    </>
  );
}
