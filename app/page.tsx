import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Consulting } from "@/components/Consulting";
import { Brands } from "@/components/Brands";
import { Toolbox } from "@/components/Toolbox";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Consulting />
        <Brands />
        <About />
        <Toolbox />
      </main>
      <Footer />
    </>
  );
}
