"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// DSLR Camera drawing paths
const dslrPaths = [
  // Camera body outline
  "M90 150 H160 L185 110 H310 L335 150 H410 C435 150 455 170 455 195 V275 C455 300 435 320 410 320 H90 C65 320 45 300 45 275 V195 C45 170 65 150 90 150 Z",

  // Grip
  "M90 150 C75 150 60 170 60 195 C60 220 75 235 90 235",

  // Viewfinder
  "M230 110 L255 75 L280 110",

  // Flash housing
  "M255 75 C255 60 270 45 290 45 C310 45 325 60 325 75",

  // Lens outer ring
  "M250 285 C205 285 165 245 165 200 C165 155 205 115 250 115 C295 115 335 155 335 200 C335 245 295 285 250 285 Z",

  // Lens mid ring
  "M250 260 C220 260 195 235 195 205 C195 175 220 150 250 150 C280 150 305 175 305 205 C305 235 280 260 250 260 Z",

  // Lens inner glass
  "M250 235 C235 235 220 220 220 205 C220 190 235 175 250 175 C265 175 280 190 280 205 C280 220 265 235 250 235 Z",

  // Buttons
  "M355 195 C365 195 370 200 370 210",
  "M355 225 C365 225 370 230 370 240",
];

// Animated path component
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
      stroke="hsl(var(--primary))"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ strokeDasharray: length, strokeDashoffset: length }}
      style={{ strokeDashoffset: offset }}
    />
  );
};

// SVG container
const DSLRsvg = ({ progress }: { progress: MotionValue<number> }) => {
  const refs = useRef<(SVGPathElement | null)[]>([]);
  const [lengths, setLengths] = useState<number[]>([]);

  useEffect(() => {
    setLengths(refs.current.map((p) => (p ? p.getTotalLength() : 0)));
  }, []);

  return (
    <svg
      viewBox="0 0 500 350"
      width="100%"
      stroke="currentColor"
      className="mx-auto text-primary drop-shadow-[0_0_20px_hsl(var(--primary))]"
    >
      {/* hidden measurement paths */}
      {dslrPaths.map((d, i) => (
        <path
          key={`measure-${i}`}
          d={d}
          ref={(el) => (refs.current[i] = el)}
          style={{ display: "none" }}
        />
      ))}

      {/* drawing animation */}
      {lengths.length > 0 &&
        dslrPaths.map((d, i) => (
          <AnimatedPath key={`draw-${i}`} d={d} progress={progress} length={lengths[i]} />
        ))}
    </svg>
  );
};

// MAIN EXPORTED COMPONENT
export default function DSLRdrawing() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // perfect drawing timing
  });

  return (
    <section
      id="camera"
      ref={ref}
      className="h-[180vh] flex justify-center items-center bg-background"
    >
      <div className="w-full max-w-3xl">
        <DSLRsvg progress={scrollYProgress} />
      </div>
    </section>
  );
}
