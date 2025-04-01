"use client";

import { Parallax } from "react-scroll-parallax";

interface LangProps {
  language: 'POL' | 'ENG';
}


export default function SkillsSection({language}:LangProps) {
  const translations = {
    POL: {
      title: "Umiejętności",
    },
    ENG: {
      title: "Skills",
    }
  };
  const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Figma", "Redux", "Node.js", "MongoDB", "Vercel", "Linux"];

  const t = translations[language]
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <Parallax speed={10}>
          <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        </Parallax>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((skill, index) => (
            <Parallax speed={(index % 2 === 0 ? 10 : -10)} key={index}>
              <div className="bg-gray-700 px-4 py-2 rounded-full shadow-md text-white hover:scale-105 transform transition-transform duration-300">
                {skill}
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
