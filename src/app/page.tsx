"use client";

import dynamic from "next/dynamic";

// Dynamic imports for code splitting
const Navbar = dynamic(() => import("@/components/ui/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"));
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Research = dynamic(() => import("@/components/sections/Research"));
const Leadership = dynamic(() => import("@/components/sections/Leadership"));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.default })));
const Footer = dynamic(() => import("@/components/sections/Contact").then((m) => ({ default: m.Footer })));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--color-bg-primary)]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
