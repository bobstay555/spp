"use client";

import Image from "next/image";

export default function PortfolioPage() {
  // Load 30 images automatically from /public/gallery
  const galleryImages = Array.from({ length: 30 }, (_, i) => `/gallery/${i + 1}.webp`);

  return (
    <main className="min-h-screen bg-background text-foreground snap-start">
      
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight text-display">
          Our Portfolio
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          A curated showcase of Smile Pic Photography’s finest work — weddings, portraits,
          newborn shoots, family sessions, events, commercial work, and more.
          Every moment captured with passion and precision.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-32">
        <div className="container px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-border"
              >
                <Image
                  src={src}
                  alt={`Smile Pic Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
