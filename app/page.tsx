"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Stars from "./components/Stars";
import { useState } from "react";

export default function HomePage() {
  
  const [language, setLanguage] = useState<'POL' | 'ENG'>('ENG');
  return (
    <ParallaxProvider>
      <main className="space-y-16 h-full relative overflow-hidden">
        <Stars /> 
        <HeroSection language={language} setLang={setLanguage}/>
        <div className="h-20"></div>
        <AboutSection language={language} />
        <ProjectsSection language={language}  />
        <SkillsSection language={language} />
        <ContactSection language={language}  />
      </main>
    </ParallaxProvider>
  );
}
