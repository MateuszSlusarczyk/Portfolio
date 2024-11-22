"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { randomInt } from "crypto";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currImage, setCurrImage] = useState(0);

  const projects = [
    {
      title: "Łzy Stawu",
      description: "Przeglądarkowa, turowa gra rpg inspirowana grami typu Visual Novel.",
      images: ["/Menu.webp", "/Creator.webp", "/Dialog.webp"],
      link: "https://lzystawu.vercel.app",
    },
    {
      title: "Portfolio",
      description: "Moje portfolio, które aktualnie przeglądasz.",
      images: ["/Portfolio.webp", "/Portfolio2.webp", "/Portfolio3.webp"],
      link: "https://example.vercel.app",
    },
    {
      title: "Inny Projekt",
      description: "Przykładowy opis innego projektu.",
      images: ["/Example1.webp", "/Example2.webp", "/Example3.webp"],
      link: "https://example.vercel.app",
    },
  ];

  const changeImage = (num: number) => {
    const images = projects[activeProject!].images;
    const newIndex = (currImage + num + images.length) % images.length;
    setCurrImage(newIndex);
  };


  const setProject = (index: number) => {
    if(activeProject === index) setActiveProject(null);
    else{
    setActiveProject(index);
    setCurrImage(0);
    }
  }
  function getRandom(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <section className="py-10 px-6">
      <Parallax speed={-10}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Projekty</h2>
          <motion.div
            className={`grid ${
              activeProject === null
                ? "grid-cols-1 md:grid-cols-3 gap-4"
                : "grid-rows-1 grid-cols-2 gap-4"
            }`}
            layout
          >
            {/* Aktywny projekt w pierwszym rzędzie */}
            {activeProject !== null && (
              <motion.div
                layout
                key={activeProject}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-lg col-span-full"
              >
                <a
                  href={projects[activeProject].link}
                  target="_blank"
                  className="text-xl font-bold hover:text-blue-400 transition-all cursor-pointer mb-4 block"
                >
                  {projects[activeProject].title}
                </a>
                <p className="text-gray-400 mb-4">{projects[activeProject].description}</p>
                <div className="flex items-center justify-center gap-4 " onClick={() => { setProject(activeProject)}}>
                  <button
                    className="text-xl md:text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeImage(-1);
                    }}
                  >
                    <FaArrowLeft />
                  </button>
                  <Image
                    src={projects[activeProject].images[currImage]}
                    alt={projects[activeProject].title}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                  <button
                    className="text-xl md:text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      changeImage(1);
                    }}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Pozostałe projekty w drugim rzędzie */}
            {projects.map((project, index) => {
              if (index === activeProject) return null;

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setProject(index)}
                  className="bg-gray-700 rounded-md cursor-pointer hover:bg-gray-600 p-6"
                >
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Parallax>
    </section>
  );
}
