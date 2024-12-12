"use client";

import { Parallax } from 'react-scroll-parallax';
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center space-y-4 relative gap-20 md:gap-10">
    <Parallax speed={-20} >
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
        Witaj w moim portfolio!
        </h1>
    </Parallax>
    <Parallax speed={-20}>
        <p className="text-gray-400 text-lg ">Jestem programistą, który wierzy, że technologia może być tak samo fascynująca jak opowieści fantasy. <br/>Moim celem jest tworzenie aplikacji, które inspirują</p>
    </Parallax>
    <div className="absolute bottom-20 inset-x-0 flex justify-center">
        <FaArrowDown className="text-white text-3xl animate-bounce" />
    </div>
    </section>
  );
}
