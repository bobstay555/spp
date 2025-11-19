"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const signaturePaths = [
  "M6.39999 157.9C28.3999 153.3 46.8 143.9 66.8 139.3C104.4 129.7 132 135.7 151.2 165.7C160.8 180.5 163.6 193.3 172.8 201.7C184.8 212.5 198.8 210.9 212.4 203.7C231.2 193.3 244.4 176.5 262.4 167.3C279.6 158.5 301.6 156.1 319.2 162.1C333.6 167.3 344.8 177.3 355.6 186.9C367.6 197.7 381.6 204.1 396 204.1C412.4 204.1 426.8 198.9 437.2 189.3C453.6 174.5 455.6 153.3 456 129.3",
  "M214.4 153.7C216.4 151.7 218.667 150.367 221.2 149.7C226 148.5 230.8 150.1 232.8 154.9C234.8 159.7 232.8 163.7 228.4 164.9C224 166.1 219.6 164.1 217.6 159.7L214.4 153.7Z",
  "M239.141 120.471C239.541 124.871 240.341 127.671 243.541 127.671C246.741 127.671 247.941 124.871 247.941 120.471C247.941 116.071 246.741 113.271 243.541 113.271C240.341 113.271 239.141 116.071 239.141 120.471Z",
  "M463.342 108.973V84.5727H466.942V108.973H463.342Z",
  "M472.185 106.155C471.985 107.755 470.685 108.955 469.085 108.955C467.485 108.955 466.185 107.755 466.185 106.155C466.185 104.555 467.485 103.355 469.085 103.355C470.685 103.355 471.985 104.555 472.185 106.155Z",
  "M477.6 130.5C478.8 128.5 480.8 125.7 483.2 124.1C488.4 120.5 496 123.7 498.4 130.1C500.8 136.5 497.6 144.1 492 146.5C486.4 148.9 479.2 146.9 476.4 140.5L477.6 130.5Z",
  "M510.966 69.1325C504.966 61.5325 493.766 54.7325 481.766 63.1325C470.566 70.7325 468.966 84.3325 474.966 94.3325C480.966 104.333 490.966 109.133 500.966 103.533C510.966 97.9325 515.366 86.3325 512.966 76.3325",
  "M504.6 142.9C506.2 142.1 511 139.7 514.2 139.3C527.8 137.7 534.6 148.1 530.6 159.7C527.4 169.3 518.2 174.5 508.6 172.1C499 169.7 493.8 161.7 496.2 152.1",
  "M522.4 200.7C523.6 195.9 528.8 190.1 534.8 191.1C541.2 192.1 544.4 198.5 542.4 204.3C540.4 210.1 534.4 214.5 528.4 212.7C522.4 210.9 519.2 204.7 522.4 200.7Z",
  "M541.771 183.051C542.771 178.651 546.771 170.651 553.571 170.251C560.371 169.851 565.171 175.851 564.371 182.651C563.571 189.451 558.371 195.451 551.571 195.051C544.771 194.651 539.971 188.651 541.771 183.051Z",
  "M529.288 334.843C533.288 333.643 540.488 322.843 544.488 316.443C556.088 297.643 562.888 274.843 562.488 250.043C562.088 225.243 553.688 202.843 540.488 184.843",
  "M599.2 230C590.8 238.4 582.8 252 579.2 264.4C571.2 292.4 570.8 320.8 584.4 340.4"
];

const AnimatedSignaturePath = ({ d, progress, pathLength }: { d: string; progress: MotionValue<number>; pathLength: number }) => {
  const strokeDashoffset = useTransform(progress, [0.1, 0.9], [pathLength, 0]);

  return (
    <motion.path
      d={d}
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
      style={{ strokeDashoffset }}
    />
  );
};


const SignatureSVG = ({ progress }: { progress: MotionValue<number> }) => {
  const [pathLengths, setPathLengths] = useState<number[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const lengths = pathRefs.current.map(ref => ref ? ref.getTotalLength() : 0);
    setPathLengths(lengths);
  }, []);

  return (
    <svg 
      width="100%" 
      viewBox="0 0 601 341" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]"
      aria-label="Lando Norris's animated signature"
    >
      <g>
        {signaturePaths.map((d, i) => (
          // Render static paths for length calculation
          <path key={`measure-${i}`} ref={el => pathRefs.current[i] = el} d={d} style={{ display: 'none' }} />
        ))}
        {pathLengths.length > 0 && signaturePaths.map((d, i) => (
          <AnimatedSignaturePath key={`draw-${i}`} d={d} progress={progress} pathLength={pathLengths[i]} />
        ))}
      </g>
    </svg>
  );
};


const HeroMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 md:mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Message from Lando
            </p>
          </div>
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-3xl">
            <SignatureSVG progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMarquee;