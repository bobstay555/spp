import Image from "next/image";

const HelmetShowcase = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302ff5ff89a9a4afb8c19e_ln-home-helm-large-19.webp"
            alt="Lando Norris holding a neon green helmet"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container pt-12">
          <h2 className="font-display font-extrabold text-5xl uppercase leading-none text-text-primary">
            Helmets
          </h2>
          <h3 className="font-accent italic text-3xl leading-none text-primary mt-1">
            Hall of Fame
          </h3>
          <p className="mt-6 text-text-secondary font-body text-base">
            From his iconic blobs to innovative one-off designs, Lando has
            always been passionate about designing innovative and memorable
            helmets.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container">
        <div className="relative aspect-[21/9] w-full overflow-hidden group">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/68302ff5ff89a9a4afb8c19e_ln-home-helm-large-19.webp"
            alt="Lando holding neon green helmet with pattern, wearing geometric print jacket"
            fill
            className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-[5000ms] ease-in-out"
            sizes="(min-width: 1440px) 1280px, (min-width: 768px) calc(100vw - 96px), 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent h-3/4" />

          <div className="absolute inset-0 flex items-end p-16">
            <div className="w-full grid grid-cols-2 items-end gap-x-8">
              <div>
                <h2 className="font-display font-extrabold text-[5rem] uppercase leading-none text-text-primary">
                  Helmets
                </h2>
                <h3 className="font-accent italic text-[2.5rem] leading-none text-primary mt-1">
                  Hall of Fame
                </h3>
              </div>
              <div className="pb-1">
                <p className="text-text-secondary font-body text-base max-w-md ml-auto">
                  From his iconic blobs to innovative one-off designs, Lando has
                  always been passionate about designing innovative and
                  memorable helmets.
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