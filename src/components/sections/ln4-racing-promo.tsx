import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const LN4RacingPromo = () => {
  return (
    <section className="bg-background text-text-primary py-16 lg:py-32 overflow-x-clip snap-start h-screen flex items-center">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center gap-6 lg:gap-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <header>
            <h2 className="font-display text-3xl md:text-4xl text-text-secondary lowercase">
              new in:
            </h2>
            <h3 className="font-accent text-6xl md:text-8xl text-primary uppercase -mt-2 md:-mt-4">
              SMILE PIC
            </h3>
          </header>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            A fresh collection of our finest photography — weddings, portraits,
            maternity, newborn, and lifestyle shoots, crafted with artistic detail
            and storytelling.
          </p>

          <div>
            <Link 
              href="https://wa.me/6382954626?text=Hello%20Smile%20Pic%20Photography!%20I%20would%20like%20to%20book%20a%20photoshoot."
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-sm uppercase tracking-widest transition-transform duration-300 hover:scale-105 group"
            >
              <span>BOOK A SHOOT</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        
        {/* IMAGE CARDS */}
        <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[550px]">
          <div className="flex gap-4 md:gap-6 items-center">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4 md:gap-6">

              {/* Card 1 - Wedding */}
              <div className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04]">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg"
                    alt="Wedding Photography Showcase"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card 2 - Family */}
              <div
                className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04]"
                style={{ transform: 'translateY(0.3em) rotate(2deg)' }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg"
                    alt="Family Photography Showcase"
                    width={480}
                    height={600}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* COLUMN 2 */}
            <div className="flex">

              {/* Card 3 - Portrait */}
              <div
                className="w-40 sm:w-48 md:w-56 transition-transform duration-300 hover:scale-[1.04]"
                style={{ transform: 'translateY(-0.4em) rotate(-3deg)' }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/34788995/pexels-photo-34788995.jpeg"
                    alt="Portrait Photography Showcase"
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
