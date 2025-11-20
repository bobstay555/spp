"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const McLarenF1BadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 92 56" fill="currentColor" {...props}>
    <path d="..." />
  </svg>
);

const MissionStatement = () => {
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const lines = [
    <>
      CAPTURING{" "}
      <span className="synthetic-text synthetic-metal">MOMENTS</span>,
    </>,

    <>
      PRESERVING{" "}
      <span className="synthetic-text synthetic-glass">MEMORIES</span>,
    </>,

    <>
      CREATING <span className="synthetic-text synthetic-plastic">STORIES</span>{" "}
      THAT LAST
    </>,

    <>PHOTOGRAPHY THAT SPEAKS</>,

    <>EMOTION, BEAUTY & TRUTH.</>,

    <>
      THIS IS <span className="synthetic-text synthetic-metal">SMILE PIC</span>.
    </>,
  ];

  lineRefs.current = [];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);

      const vh = window.innerHeight;

      lineRefs.current.forEach((el, idx) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = center - vh / 2;

        const base = 0.03;
        const speed = base + idx * 0.01;

        el.style.transform = `translate3d(0, ${-dist * speed}px, 0)`;
      });

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section className="bg-primary-background text-text-secondary min-h-[220vh] py-16 lg:py-32">
      <div
        className="container mx-auto px-6 md:px-12 max-w-[1400px]"
        ref={containerRef}
      >
        {/* TOP ICON + LABEL */}
        <div className="flex flex-col items-center text-center mb-20">
          <McLarenF1BadgeIcon className="h-14 w-auto mb-4 text-text-secondary/80" />
          <p className="text-xs uppercase tracking-wider font-medium text-text-tertiary">
            SMILE PIC PHOTOGRAPHY • SINCE 2020
          </p>
        </div>

        {/* MOVING TEXT LINES */}
        <div className="flex flex-col gap-24 lg:gap-28">
          {lines.map((line, i) => (
            <div
              key={i}
              ref={(el) => (lineRefs.current[i] = el)}
              className="overflow-visible will-change-transform"
            >
              <div className="font-body font-bold text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.9] uppercase tracking-tight text-white">
                {line}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom space so last lines scroll fully */}
        <div className="h-[40vh]" />

        {/* ✅ IMAGE ADDED BELOW — ONLY NEW PART */}
        <div className="w-full flex justify-center mt-20">
          <img
            src="/hero.webp"
            alt="Smile Pic"
            className="w-full max-w-5xl object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default MissionStatement;
