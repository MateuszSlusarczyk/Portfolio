"use client";

import { Parallax } from 'react-scroll-parallax';

interface LangProps {
  language: 'POL' | 'ENG';
  setLang: (lang: 'POL' | 'ENG') => void;
}

export default function AboutSection({language, setLang}:LangProps) {
  

  const translations = {
  POL: {
      title: "O Mnie",
      description: "Jako student kończący stopień magisterski na Politechnice Częstochowskiej, dynamicznie rozwijam swoje umiejętności w zakresie programowania. W czasie wolnym tworzę nowe projekty, które traktuje jak osobiste wyzwania, przy okazji kończące się przydatnymi i wygodnymi w użyciu aplikacjami.",
      CV: "Pobierz CV",
      CV_Link: "/CV_PL.pdf"
    },
  ENG: {
      title: "About Me",
      description: "As a masters student in Częstochowa University of Technology, i dynamically grow my skills in programming. In my free time i create new, interesting projects, treating them as personal challenges. They also end up as useful and easy to navigate apps.",
      CV: "Download my resume",
      CV_Link: "/CV_EN.pdf"
    }
  };


  const t = translations[language]
  return (
    <section className="py-20 px-6 items-center justify-center flex flex-col gap-28 md:gap-16 ">
    <Parallax speed={-15}>
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <p className="text-gray-400 mt-4 text-lg">
        {t.description}
        </p>
        </div>
    </Parallax>
    <Parallax speed={-10}>
    <div className="bg-gray-700 px-4 py-2 rounded-full shadow-md text-white hover:scale-110 transform transition-transform duration-300">
        <a href={t.CV_Link} download="CV.pdf">{t.CV}</a>
    </div>
    </Parallax>
    </section>
  );
}
