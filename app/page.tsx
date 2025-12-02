import { NavbarDemo } from "../components/ui/demo-navbar";
import { Hero } from "../components/ui/hero-with-image-text-and-two-buttons";
import { AboutSection } from "../components/ui/about-section";
import { ServicesSection } from "../components/ui/services-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarDemo />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}



