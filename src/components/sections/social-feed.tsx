import Image from 'next/image';

const socialImages = [
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5835c0649927438ae19_ln4-menu-img-1.webp',
    alt: 'Lando Norris on the trackside giving a thumbs up',
    rotationClass: 'lg:-rotate-3',
    marginClass: 'lg:-mr-16',
    sizeClass: 'w-64 lg:w-[280px]',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae582f6abf54adb515c73_ln4-menu-img-4.webp',
    alt: 'Lando Norris portrait',
    isCenter: true,
    sizeClass: 'w-72 lg:w-[300px]',
    marginClass: 'relative z-10 lg:scale-105',
    rotationClass: '',
  },
  {
    src: 'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67dae5829bee1b4a7b936935_ln4-menu-img-2.webp',
    alt: 'Lando Norris in his F1 car with helmet on',
    rotationClass: 'lg:rotate-3',
    marginClass: 'lg:-ml-16',
    sizeClass: 'w-64 lg:w-[280px]',
  },
];

const socialLinks = [
  { name: 'TIKTOK', href: 'https://www.tiktok.com/@landonorris' },
  { name: 'INSTAGRAM', href: 'https://www.instagram.com/lando' },
  { name: 'YOUTUBE', href: 'https://www.youtube.com/landonorris04' },
  { name: 'TWITCH', href: 'https://www.twitch.tv/landonorris' },
];

const SocialFeed = () => {
  return (
    <section className="bg-background text-foreground py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-center">
            <span className="block font-accent italic text-text-secondary text-4xl md:text-5xl tracking-tight">what’s up</span>
            <span className="block font-display font-extrabold text-text-primary text-6xl md:text-8xl uppercase leading-[0.8] mt-1">ON SOCIALS</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:h-[450px]">
          {socialImages.map((image, index) => (
            <div
              key={index}
              className={`transform transition-transform duration-300 ease-in-out hover:z-20 hover:scale-105
                ${image.rotationClass || ''}
                ${image.marginClass || ''}
                ${image.sizeClass}
              `}
            >
              <div className="relative aspect-[3/4] shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 75vw, 300px"
                  className="rounded-[2rem] border-2 border-white object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-24">
          <h3 className="font-accent text-xl md:text-2xl text-text-secondary mb-8">
            Follow Lando on social media
          </h3>
          <nav className="flex justify-center items-center gap-x-6 md:gap-x-10" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-sm font-bold uppercase tracking-wider text-text-tertiary hover:text-text-primary transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 block h-[1px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;