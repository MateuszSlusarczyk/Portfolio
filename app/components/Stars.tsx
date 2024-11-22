"use client";

import { Parallax } from "react-scroll-parallax";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Stars() {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // Losowa pozycja pozioma
    top: Math.random() * 150, // Losowa pozycja pionowa (vh)
    speed: Math.random() * 10 - 5, // Losowa prędkość Parallax
    size: Math.random() * 1.5 + 0.5, // Losowy rozmiar gwiazdy
  }));

  return (
    <>
      {stars.map((star) => (
        <Parallax key={star.id} speed={star.speed}>
          <motion.div
            className="absolute text-yellow-300"
            style={{
              left: `${star.left}%`,
              top: `${star.top}vh`,
              fontSize: `${star.size}rem`,
            }}
            animate={{
              opacity: [0.7, 1, 0.7], // Efekt błysku
              y: [0, -2, 0], // Lekkie ruchy w górę i dół
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Losowy czas trwania (2-5 sekund)
              repeat: Infinity, // Powtarzanie w nieskończoność
              ease: "easeInOut",
            }}
          >
            <FaStar
              className="relative"
              style={{
                filter: `drop-shadow(0 0 ${star.size * 0.8}rem rgba(255, 223, 0, 0.6))`,
              }}
            />
          </motion.div>
        </Parallax>
      ))}
    </>
  );
}
