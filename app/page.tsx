import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Process from "./components/Process";
import Values from "./components/Values";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/BackgroundSystem";

export default function Home() {
  return (
    <>
      {/* Fixed ambient multi-layer background — sits under all sections */}
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Values />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
