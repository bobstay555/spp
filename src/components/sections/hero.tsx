"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, Unlock } from "lucide-react";

const CardBorderSVG = () => (
  <svg
    width="119"
    height="244"
    viewBox="0 0 119 244"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="none"
  >
    <path d="M118 1H1V243H118" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const NextRaceCard = () => (
  <div className="absolute bottom-12 left-6 lg:left-12 hidden lg:block z-10">
    <div className="relative w-[119px] h-[244px]">
      <div className="absolute inset-0 text-border">
        <CardBorderSVG />
      </div>
      <div className="relative z-10 p-4 flex flex-col h-full text-text-secondary">
        <div className="text-center text-[10px] uppercase font-medium tracking-[0.15em] text-muted-foreground">
          Featured Service
        </div>

        <Link href="#services" className="flex flex-col items-center mt-3 group">
          <div className="w-[97px] h-[83px] bg-secondary rounded-sm mb-2 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Photography</span>
          </div>
          <div className="text-center text-[10px] uppercase font-semibold tracking-[0.05em] text-secondary-foreground group-hover:text-primary transition-colors">
            <span>Wedding</span>
            <span className="ml-1">Shoot</span>
          </div>
        </Link>

        <div className="w-full h-px bg-border my-4" />

        <div className="flex flex-col items-center">
          <div className="w-[107px] h-[56px] bg-secondary rounded-sm mb-2 flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Camera</span>
          </div>
          <div className="text-center text-[10px] uppercase font-medium leading-[1.3] tracking-[0.05em] text-muted-foreground">
            Smile Pic
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TouchControls = () => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="absolute bottom-6 right-6 lg:hidden flex items-center justify-end space-x-2 z-10">
      <div className="relative text-[10px] uppercase font-medium tracking-[0.1em] text-muted-foreground text-right w-[88px]">
        <div className={`transition-opacity duration-300 ${isLocked ? "opacity-0" : "opacity-100"}`}>
          tap to lock
        </div>
        <div className={`absolute inset-0 transition-opacity duration-300 ${isLocked ? "opacity-100" : "opacity-0"}`}>
          Back to scroll
        </div>
      </div>
      <button
        onClick={() => setIsLocked(!isLocked)}
        className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-secondary-foreground flex-shrink-0"
      >
        <div className="relative w-4 h-4">
          <div className={`absolute inset-0 transition-opacity ${isLocked ? "opacity-0" : "opacity-100"}`}>
            <Unlock size={16} />
          </div>
          <div className={`absolute inset-0 transition-opacity ${isLocked ? "opacity-100" : "opacity-0"}`}>
            <Lock size={16} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="relative snap-start min-h-screen">

      {/* SEO Hidden Text */}
      <div className="sr-only">
        <h1>Smile Pic Photography</h1>
        <h2>Professional Photography Studio in Alangulam, Tenkasi</h2>
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center w-full pb-20">

        {/* ⭐ Neon 3D Wobbling Layered Text */}
        <div className="hidden lg:block hero-3d-container">
          <figure className="hero-3d-figure">
            {Array.from({ length: 10 }).map((_, i) => (
              <h1 key={i} className="hero-3d-text">
                SMILE PIC
              </h1>
            ))}
          </figure>
        </div>

        <div className="relative w-full min-h-screen px-6 lg:px-16 flex items-center justify-center">

          <div className="relative w-full h-auto">
            {/* Mobile title */}
            <div className="lg:hidden text-center flex flex-col items-center">
              <Image
                src="/mobile-title.webp"
                alt="Smile Pic Photography Text"
                width={280}
                height={350}
                className="mx-auto w-[60vw] max-w-[280px] h-auto"
                priority
              />
              <div className="mt-8 text-center text-[10px] uppercase font-medium leading-[1.3] tracking-[0.05em] text-muted-foreground">
                Professional Studio
                <br />
                Since 2020
              </div>
            </div>
          </div>

          <NextRaceCard />
          <TouchControls />
        </div>
      </section>
    </div>
  );
}
