import Image from 'next/image';

const PartnershipsIntro = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto py-16 px-8 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/680cbcfdbc4bdc0ef619369f_ln-icon-crossed-flags2-4.svg"
            alt="Crossed Flags Icon"
            width={76}
            height={55}
            className="h-auto"
          />
        </div>
        <h2 className="font-display font-bold text-[28px] leading-tight text-text-primary md:text-[40px] mb-6">
          partners <span className="text-primary">&amp;campaigns</span>
        </h2>
        <p className="font-body text-sm leading-relaxed text-text-secondary md:text-xl max-w-3xl mx-auto">
          Lando is proud to collaborate with a range of partners, who share his
          passion for performance across a range of industries.
        </p>
      </div>
    </section>
  );
};

export default PartnershipsIntro;