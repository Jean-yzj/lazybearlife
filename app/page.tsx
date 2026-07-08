import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Consulting } from "@/components/Consulting";
import { Brands } from "@/components/Brands";
import { About } from "@/components/About";
import { Notes } from "@/components/Notes";
import { Recommends } from "@/components/Recommends";
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
        <Notes />
        <Recommends />
      </main>
      <Footer />
    </>
  );
}
