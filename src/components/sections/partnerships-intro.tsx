import Image from 'next/image';

const PartnershipsIntro = () => {
  return (
    <section className="bg-background text-foreground snap-start h-screen flex items-center">
      <div className="container mx-auto py-16 px-8 text-center">
        
        {/* CAMERA ICON */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/icons/camera.svg"        // <-- YOUR LOCAL CAMERA ICON
            alt="Camera Icon"
            width={76}
            height={55}
            className="h-auto opacity-90"
          />
        </div>

        {/* TITLE */}
        <h2 className="font-display font-bold text-[28px] leading-tight text-text-primary md:text-[40px] mb-6">
          collaborations <span className="text-primary">&amp; projects</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="font-body text-sm leading-relaxed text-text-secondary md:text-xl max-w-3xl mx-auto">
          At Smile Pic Photography, we proudly collaborate with event organizers,
          brands, studios, and families — delivering creative visuals that bring
          emotion, style, and story together.
        </p>

      </div>
    </section>
  );
};

export default PartnershipsIntro;
