"use client";

import { Parallax } from "react-scroll-parallax";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Stars() {
  interface Star {
    id: number;
    left: number;
    top: number;
    size: number;
    speed: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Define mobile screen width threshold
    const baseStarCount = isMobile ? 30 : 100; // Fewer stars on mobile, more on desktop

    // Generate random positions for stars based on baseStarCount
    const newStars = Array.from({ length: baseStarCount }).map((_, index) => {
      return {
        id: index,
        left: Math.random() * 100, // Random horizontal position (percentage)
        top: Math.random() * 150, // Random vertical position (percentage)
        size: Math.random() * 1.5 + 0.5, // Random star size
        speed: Math.random() * 10 - 5, // Random parallax speed
      };
    });

    setStars(newStars);
  }, []);

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
              opacity: [0.7, 1, 0.7], // Twinkle effect
              y: [0, -2, 0], // Subtle vertical motion
            }}
            transition={{
              duration: Math.random() * 3 + 2, // Random duration (2-5 seconds)
              repeat: Infinity, // Repeat indefinitely
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