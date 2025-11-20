"use client";

export default function HorizontalGallery() {
  return (
    <section
      id="gallery-section"
      className="
        bg-background min-h-screen
        py-20 lg:py-32
        snap-start
        opacity-0 translate-y-20
        transition-all duration-[1200ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
      "
    >
      {/* TEXT HEADER */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-5xl md:text-7xl font-bold">GALLERY</h2>
        <p className="mt-4 text-3xl italic opacity-80">Smile Pic Photography</p>

        <p className="mt-6 max-w-2xl text-lg opacity-70">
          A full showcase of our photography work — weddings, portraits, newborns,
          events, product shoots, and more.
        </p>
      </div>

      {/* EMPTY PLACEHOLDER (NO CAROUSEL) */}
      <div className="flex justify-center mt-10 text-muted-foreground">
        <p>Gallery coming soon...</p>
      </div>
    </section>
  );
}
