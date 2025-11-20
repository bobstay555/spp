import Image from "next/image";

const HelmetShowcase = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 snap-start h-screen">

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/gallery/my-photo.webp"
            alt="Smile Pic Photography showcase image"
            fill
            className="object-contain bg-black"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container pt-12">
          <h2 className="font-display font-extrabold text-5xl uppercase leading-none text-text-primary">
            Portfolio
          </h2>
          <h3 className="font-accent italic text-3xl leading-none text-primary mt-1">
            Signature Work
          </h3>
          <p className="mt-6 text-text-secondary font-body text-base">
            Explore our finest photography — weddings, portraits, maternity,
            newborn, events, and lifestyle captures. Every frame is crafted with
            creativity, precision, and passion.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container">
        <div className="relative aspect-[21/9] w-full overflow-hidden group">

          <Image
            src="/gallery/my-photo.webp"
            alt="Smile Pic Photography portfolio highlight"
            fill
            className="object-contain bg-black transition-transform duration-[5000ms]"
            sizes="(min-width: 1440px) 1280px, (min-width: 768px) calc(100vw - 96px), 100vw"
            priority
          />

          {/* Dark Overlays */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end p-16">
            <div className="w-full grid grid-cols-2 items-end gap-x-8">
              <div>
                <h2 className="font-display font-extrabold text-[5rem] uppercase leading-none text-text-primary">
                  Portfolio
                </h2>
                <h3 className="font-accent italic text-[2.5rem] leading-none text-primary mt-1">
                  Signature Work
                </h3>
              </div>

              <div className="pb-1">
                <p className="text-text-secondary font-body text-base max-w-md ml-auto">
                  Discover our most memorable moments captured through the lens —
                  weddings, portraits, families, newborns, corporate shoots,
                  events, and more. Every image reflects our dedication to
                  detail, emotion, and storytelling.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HelmetShowcase;
