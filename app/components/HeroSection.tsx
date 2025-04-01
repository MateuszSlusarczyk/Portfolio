"use client";

import { Parallax } from 'react-scroll-parallax';
import { FaArrowDown } from "react-icons/fa";
import Flag from 'react-flagkit';

interface LangProps {
  language: 'POL' | 'ENG';
  setLang: (lang: 'POL' | 'ENG') => void;
}

export default function HeroSection({ language, setLang }: LangProps) {

  const translations = {
    POL: {
      title: "Witaj w moim portfolio!",
      description: "Jestem programistą, który wierzy, że technologia może być tak samo fascynująca jak opowieści fantasy. \nMoim celem jest tworzenie aplikacji, które inspirują",
    },
    ENG: {
      title: "Welcome to my portfolio!",
      description: "I'm a developer who believes technology can be just as fascinating as fantasy stories. \nMy goal is to build apps that inspire.",
    }
  };

  const changeLanguage = (lang:string) => {
    if (lang === "POL") {
      setLang("POL");
      
    } else {
      setLang("ENG");
    }
  }
  const t = translations[language]
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center space-y-4 relative gap-20 md:gap-10">
    <Parallax speed={-20} >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
        {t.title}
        </h1>
    </Parallax>
    <Parallax speed={-20}>
        <p className="text-gray-400 text-lg ">{t.description}</p>
        <div className='flex gap-4 justify-center'>
        <Flag
          country="PL"
          role="button"
          onClick={() => changeLanguage("POL")}
        />    
        <Flag
          country="GB"
          role="button"
          onClick={() => changeLanguage("ENG")}
        />
        </div>
    </Parallax>
    
    <div className="absolute bottom-20 inset-x-0 flex justify-center">
        <FaArrowDown className="text-white text-3xl animate-bounce" />
    </div>
    </section>
  );
}
