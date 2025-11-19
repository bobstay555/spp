import React from 'react';
import { ArrowRight } from 'lucide-react';

const HelmetCta = () => {
  return (
    <section className="bg-black py-16 md:py-24 snap-start h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:max-w-[1440px]">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          
          <p className="font-accent text-2xl text-foreground max-w-lg">
            Explore our full photography portfolio — weddings, portraits, events,
            and more captured with artistic precision.
          </p>

          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-[2rem] bg-primary py-4 px-12 text-base font-semibold uppercase tracking-[0.02em] text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_rgba(255,255,255,0.25)]"
          >
            <span>VIEW PORTFOLIO</span>
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default HelmetCta;
