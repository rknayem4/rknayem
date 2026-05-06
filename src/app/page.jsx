"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useGSAPReveal } from "@/hooks/useGSAP";

export default function Home() {
  useGSAPReveal(".gsap-reveal");
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
