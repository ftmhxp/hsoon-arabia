import { NavbarDemo } from "../components/ui/demo-navbar";
import { Hero } from "../components/ui/hero-with-image-text-and-two-buttons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarDemo />
      <Hero />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-regular text-center mb-8 mt-50">    </h1>
        <p className="text-center text-lg">
        </p>
      </div>
    </main>
  );
}
