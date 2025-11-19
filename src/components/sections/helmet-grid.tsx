import Image from "next/image";

const galleryImages = Array.from({ length: 20 }, (_, i) => `/gallery/${i + 1}.webp`);

interface PhotoSet {
  src: string;
  index: number;
}

const PhotoCard = ({ src, index }: PhotoSet) => {
  return (
    <div className="group block bg-card p-4 rounded-lg border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={`Smile Pic Photography gallery ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
};

const HelmetGrid = () => {
  return (
    <section id="gallery" className="bg-black py-20 sm:py-24 lg:py-32 min-h-screen">
      <div className="container px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="text-left">
              <h2 className="text-6xl lg:text-7xl font-extrabold text-display text-white mb-2 tracking-tighter">
                GALLERY
              </h2>
              <h3 className="text-5xl lg:text-6xl font-normal text-white italic text-accent-font">
                Smile Pic Photography
              </h3>
            </div>

            <div className="flex items-center">
              <p className="text-lg text-text-secondary max-w-md">
                A full showcase of our photography work — weddings, portraits, newborns,
                events, product shoots, and more.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {galleryImages.map((src, index) => (
              <PhotoCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelmetGrid;
