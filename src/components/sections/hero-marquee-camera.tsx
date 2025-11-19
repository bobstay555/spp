"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* DSLR CAMERA PATHS */
const cameraPaths = [
  "M10 80 Q10 40 50 40 H150 Q190 40 190 80 V140 Q190 180 150 180 H50 Q10 180 10 140 Z",
  "M100 110 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0",
  "M100 110 m-22 0 a22 22 0 1 1 44 0 a22 22 0 1 1 -44 0",
  "M60 40 L70 15 H130 L140 40 Z",
  "M150 45 a6 6 0 1 1 0.1 0",
  "M10 100 H30",
  "M170 100 H190",
];

/* Animated Path */
const AnimatedPath = ({
  d,
  progress,
  length,
}: {
  d: string;
  progress: MotionValue<number>;
  length: number;
}) => {
  const offset = useTransform(progress, [0, 1], [length, 0]);

  return (
    <motion.path
      d={d}
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: length,
        strokeDashoffset: offset,
      }}
    />
  );
};

/* CAMERA SVG */
const CameraSVG = ({ progress }: { progress: MotionValue<number> }) => {
  const refs = useRef<(SVGPathElement | null)[]>([]);
  const lengthsRef = useRef<number[]>([]);

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full text-primary drop-shadow-[0_0_20px_hsl(var(--primary))]"
      fill="none"
    >
      {/* Invisible measurement paths */}
      {cameraPaths.map((d, i) => (
        <path
          key={"m-" + i}
          d={d}
          ref={(el) => {
            refs.current[i] = el;
            if (el) lengthsRef.current[i] = el.getTotalLength();
          }}
          style={{ display: "none" }}
        />
      ))}

      {/* Animated paths */}
      {cameraPaths.map((d, i) => (
        <AnimatedPath
          key={"p-" + i}
          d={d}
          progress={progress}
          length={lengthsRef.current[i] || 0}
        />
      ))}
    </svg>
  );
};

/* MAIN SECTION */
export default function HeroMarqueeCamera() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Heading */}
      <p className="absolute top-20 text-sm uppercase tracking-[0.15em] text-muted-foreground">
        Message From Our Studio
      </p>

      {/* Background Text */}
      <h1 className="absolute text-[6rem] md:text-[10rem] opacity-[0.05] font-display uppercase leading-[0.8] text-text-secondary pointer-events-none">
      </h1>

      {/* CAMERA + FLASH */}
      <div className="relative w-full max-w-[650px] mx-auto flex justify-center items-center py-20">

        {/* FLASH EFFECT ALWAYS ON */}
        <div
          className="
            absolute w-[300px] h-[300px]
            rounded-full
            bg-white 
            opacity-0 
            blur-3xl 
            animate-cameraFlash
          "
        />

        <CameraSVG progress={scrollYProgress} />
      </div>
    </section>
  );
}
