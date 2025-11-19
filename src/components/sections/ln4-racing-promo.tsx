import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const LN4RacingPromo = () => {
  return (
    <section className="bg-background text-text-primary py-16 lg:py-32 overflow-x-clip">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col justify-center gap-6 lg:gap-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <header>
            <h2 className="font-display text-3xl md:text-4xl text-text-secondary lowercase">
              new in:
            </h2>
            <h3 className="font-accent text-6xl md:text-8xl text-primary uppercase -mt-2 md:-mt-4">
              LN4 RACING
            </h3>
          </header>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            A collection built for performance and speed, combining classic motorsport aesthetics & modern craftsmanship.
          </p>

          <div>
            <Link 
              href="https://store.landonorris.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105 group"
            >
              <span>VISIT THE STORE</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[550px]">
          <div className="flex gap-4 md:gap-6 items-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04] hover:z-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680e60835fbb5c102a061414_ln4-shop-item-1.webp"
                    alt="Lando Norris LN4 Racing Hoodie"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04] hover:z-10" style={{ transform: 'translateY(0.3em) rotate(2deg)' }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680e608383e74efc2c589094_ln4-shop-item-2.webp"
                    alt="Lando Norris LN4 Racing white t-shirt"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="flex">
              {/* Card 3 */}
              <div className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04] hover:z-10" style={{ transform: 'translateY(-0.4em) rotate(-3deg)' }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/680e60834aa24a35dc6ae406_ln4-shop-item-3.webp"
                    alt="Lando Norris Quadrant white t-shirt"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LN4RacingPromo;