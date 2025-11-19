import React from 'react';
import Image from 'next/image';

const partnersData = [
  { 
    name: 'Ralph Lauren', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph-5.svg', 
    href: '#' 
  },
  { 
    name: 'PlayStation', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67efc88cf1d78e3e7624d5e3_ln4-ln4-collab-logo-ps4-7.svg', 
    href: '#' 
  },
  { 
    name: 'Quadrant', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67efc88c532235956e5d267a_ln4-ln4-collab-logo-quadr-8.svg', 
    href: '#' 
  },
  { 
    name: 'TUMI', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67efc88cb3373daa7ba240d6_ln4-ln4-collab-logo-tumi-9.svg', 
    href: '#' 
  },
  { 
    name: 'Hilton', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilto-10.svg', 
    href: '#' 
  },
  { 
    name: 'Uber', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber-11.svg', 
    href: '#' 
  },
  { 
    name: 'LN Kart', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d7e14222573f46ebdb_ln4-ln4-collab-lnkart-12.svg', 
    href: '#' 
  },
  { 
    name: 'Bell Helmets', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d72c50967c2195c702_ln4-ln4-collab-bell-helme-13.svg', 
    href: '#' 
  },
  { 
    name: 'Pure Electric', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d718fcdbf76afbcc45_ln4-ln4-collab-pure-elect-14.svg',
    href: '#' 
  },
  { 
    name: 'Google', 
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d7a8a302c07e91904d_ln4-ln4-collab-google-15.svg', 
    href: '#' 
  },
];

const PartnershipsLogos = () => {
    return (
        <section className="bg-background py-20 lg:py-40">
            <div className="container">
                <div className="flex justify-end mb-8 lg:mb-0">
                    <div className="relative z-20 max-w-lg text-right">
                         <h2 className="sr-only">Partners and Campaigns</h2>
                         <p className="text-text-secondary text-lg lg:text-xl font-accent-font italic">
                            Lando is proud to collaborate with a range of partners, who share his passion for performance across a range of industries.
                         </p>
                    </div>
                </div>

                <div className="relative">
                    <h3 
                        className="font-accent text-primary italic lowercase select-none pointer-events-none relative z-10 -mt-8"
                        style={{ fontSize: 'clamp(10rem, 25vw, 25rem)', lineHeight: 0.8 }}
                        aria-hidden="true"
                    >
                        Collabs
                    </h3>
                    
                    <div className="relative z-0 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-48 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 pt-10">
                        {partnersData.map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.href}
                                className="group flex items-center justify-center aspect-[3/2] outline-none"
                                aria-label={`Link to ${partner.name}`}
                            >
                                <div className="relative w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-focus-visible:scale-110">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-contain transition-all duration-300 ease-in-out filter grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipsLogos;