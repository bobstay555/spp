"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./threeDCarousel.css";

const images = [
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg",
  "/g4.jpg",
  "/g5.jpg",
  "/g6.jpg",
];

export default function ThreeDCarousel() {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation((prev) => prev + 60);
  const rotateRight = () => setRotation((prev) => prev - 60);

  return (
    <div className="carousel-wrapper">
      <motion.div
        className="carousel"
        animate={{ rotateY: rotation }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {images.map((src, i) => (
          <div key={i} className="carousel-item">
            <img src={src} alt={`img-${i}`} />
          </div>
        ))}
      </motion.div>

      <div className="carousel-buttons">
        <button onClick={rotateLeft}>◀</button>
        <button onClick={rotateRight}>▶</button>
      </div>
    </div>
  );
}
