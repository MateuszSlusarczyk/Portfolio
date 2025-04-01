"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface LangProps {
  language: "POL" | "ENG";
  setLang: (lang: "POL" | "ENG") => void;
}

export default function ProjectsSection({ language, setLang }: LangProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currImage, setCurrImage] = useState(0);

  const translations = {
    POL: {
      sectionTitle: "Projekty",
      projects: [
        {
          title: "Łzy Stawu",
          description:
            "Przeglądarkowa, turowa gra RPG inspirowana Visual Novel. Stworzona w React, Tailwind CSS i Typescript. Kluczowym aspektem jest wykorzystanie React Redux w dużym projekcie.",
        },
        {
          title: "Soundharbor",
          description:
            "Aplikacja rekomendująca muzykę na podstawie preferencji użytkownika, z użyciem API Spotify. Zbudowana w React, Tailwind CSS i Typescript.",
        },
        {
          title: "QuizGrad",
          description:
            "Platforma do tworzenia i rozwiązywania quizów z funkcjami czasu rzeczywistego. Projekt zespołowy na studiach, wykorzystujący React, Tailwind CSS i Typescript.",
        },
        {
          title: "Tasker",
          description:
            "Aplikacja do zarządzania zadaniami w firmie z systemem autoryzacji i kanbanem. Pierwszy projekt w React, Tailwind CSS i Typescript.",
        },
      ],
    },
    ENG: {
      sectionTitle: "Projects",
      projects: [
        {
          title: "Tears of the Pond",
          description:
            "A turn-based browser RPG inspired by Visual Novels. Built using React, Tailwind CSS, and Typescript. Main highlight is implementing React Redux in a large-scale project.",
        },
        {
          title: "Soundharbor",
          description:
            "An app that recommends music based on user preferences, using the Spotify API. Created with React, Tailwind CSS and Typescript.",
        },
        {
          title: "QuizGrad",
          description:
            "A quiz platform created as a university team project with real-time server-based interactions. Built using React, Tailwind CSS and Typescript.",
        },
        {
          title: "Tasker",
          description:
            "A task management app for companies with auth system and kanban functionality. First project using React, Tailwind CSS and Typescript.",
        },
      ],
    },
  };

  const projectData = [
    {
      images: ["/Menu.webp", "/Creator.webp", "/Dialog.webp"],
      link: "https://lzystawu.vercel.app",
    },
    {
      images: [
        "/SoundHarbor.webp",
        "/Playlista.webp",
        "/Podstawowe.webp",
        "/Zaawansowane.webp",
      ],
      link: "https://soundharbor.vercel.app",
    },
    {
      images: ["/QuizGrad.webp", "/QuizGradLogin.webp"],
    },
    {
      images: ["/Tasker.webp"],
    },
  ];

  const t = translations[language];
  const projects = t.projects.map((project, index) => ({
    ...project,
    ...projectData[index],
  }));

  const maxColumns = 3;
  const numInactiveProjects =
    activeProject === null ? projects.length : projects.length - 1;

  const changeImage = (num: number) => {
    const images = projects[activeProject!].images;
    const newIndex = (currImage + num + images.length) % images.length;
    setCurrImage(newIndex);
  };

  const setProject = (index: number) => {
    if (activeProject === index) setActiveProject(null);
    else {
      setActiveProject(index);
      setCurrImage(0);
    }
  };

  return (
    <section className="py-10 px-6">
      <Parallax speed={-10}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t.sectionTitle}
          </h2>
          <motion.div
            className={`grid grid-cols-${Math.min(
              numInactiveProjects,
              maxColumns
            )} gap-4 justify-center`}
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
                  className={`text-xl font-bold transition-all cursor-pointer mb-4 block ${
                    projects[activeProject].link ? "hover:text-blue-400" : ""
                  }`}
                >
                  {projects[activeProject].title}
                </a>
                <p className="text-gray-400 mb-4">
                  {projects[activeProject].description}
                </p>
                <div
                  className="flex items-center justify-center md:gap-4 gap-1"
                  onClick={() => {
                    setProject(activeProject);
                  }}
                >
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
