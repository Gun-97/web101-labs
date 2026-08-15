import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import AIBackground from "@/components/AIBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
        <div className="pointer-events-none fixed inset-0 z-0">
          <BlobBackground />
        </div>
        <AIBackground />
        <div className="relative z-10">
          <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
