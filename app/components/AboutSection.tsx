"use client";

import { Parallax } from 'react-scroll-parallax';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 items-center justify-center flex flex-col gap-28 md:gap-16 ">
    <Parallax speed={-15}>
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">O Mnie</h2>
        <p className="text-gray-400 mt-4 text-lg">
        Jako student kończący stopień magisterski na Politechnice Częstochowskiej, dynamicznie rozwijam swoje umiejętności w zakresie programowania.
        W czasie wolnym tworzę nowe projekty, które traktuje jak osobiste wyzwania, przy okazji kończące się przydatnymi i wygodnymi w użyciu aplikacjami.
        </p>
        </div>
    </Parallax>
    <Parallax speed={-10}>
    <div className="bg-gray-700 px-4 py-2 rounded-full shadow-md text-white hover:scale-110 transform transition-transform duration-300">
        <a href="/CV.pdf" download="CV.png">Pobierz CV</a>
    </div>
    </Parallax>
    </section>
  );
}
