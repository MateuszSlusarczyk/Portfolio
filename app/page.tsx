"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Stars from "./components/Stars";

export default function HomePage() {
  return (
    <ParallaxProvider>
      <main className="space-y-16 h-full relative overflow-hidden">
        <Stars /> 
        <HeroSection />
        <div className="h-20"></div>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </ParallaxProvider>
  );
}
