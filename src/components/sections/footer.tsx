import Image from 'next/image';
import Link from 'next/link';

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/on-track', label: 'On Track' },
  { href: '/off-track', label: 'Off Track' },
  { href: '/calendar', label: 'Calendar' },
];

const socialLinks = [
  { href: 'https://www.tiktok.com/@landonorris', label: 'TikTok' },
  { href: 'https://www.instagram.com/lando', label: 'Instagram' },
  { href: 'https://www.youtube.com/landonorris04', label: 'YouTube' },
  { href: 'https://www.twitch.tv/landonorris', label: 'Twitch' },
];

const partnerLogos = [
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d7361eb2ca03ba0929_ln4-footer-logo-google-24.svg', alt: 'Google' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d722f5ba2f4074cbe7_ln4-footer-logo-ralph-lau-25.svg', alt: 'Ralph Lauren' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d70a9e147b77952c0d_ln4-footer-logo-android-26.svg', alt: 'Android' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d7564fc5a9fccf822f_ln4-footer-logo-pap-27.svg', alt: 'Playstation' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d761eeca9060e00622_ln4-footer-logo-monster-28.svg', alt: 'Monster Energy' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/68dbd5d74d2804b912ed1fcc_ln4-footer-logo-hilton-29.svg', alt: 'Hilton' },
  { src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67d33eb40292f3a5fef32ed3_ln4-footer-logo-add-c-23.svg', alt: 'McLaren' },
];

const PlaceholderLogo = ({ name }: { name: string }) => (
    <div className="flex justify-center items-center h-6">
      <span className="font-bold text-sm text-primary-background opacity-50">{name.toUpperCase()}</span>
    </div>
);


const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-[#CDFF00] to-[#282C20] to-[80%] pt-24 lg:pt-40 pb-12 text-primary-background">
            <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67dbeba158707fa1cd5e5e45_blobs_footer_1-30.svg"
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 z-0 pointer-events-none"
            />
            <div className="container relative z-10 px-6 md:px-12">
                <div className="relative mb-12 lg:mb-[-4rem] xl:mb-[-6rem]">
                    <h2 className="text-center font-accent text-[clamp(3.5rem,10vw,8.75rem)] leading-[0.85] font-normal uppercase text-primary-background max-w-6xl mx-auto">
                        Always bringing
                        <br /> the fight.
                    </h2>
                     {/* Signature asset is missing. If available, it would be an Image component with absolute positioning.
                     Example: <Image src="..." alt="Lando's signature" width={352} height={160} className="hidden lg:block absolute -top-16 right-0 w-88 -rotate-12" /> */}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-y-16 lg:gap-x-12">
                    <div className="lg:justify-self-start flex flex-col items-center lg:items-start gap-10">
                        <div>
                            <h3 className="text-xs font-medium uppercase tracking-[0.08em] mb-4 text-center lg:text-left">PAGES</h3>
                            <nav className="flex flex-col items-center lg:items-start gap-4">
                                {pageLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="text-2xl font-normal leading-tight hover:underline transition-all">
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <Link href="https://store.landonorris.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-normal leading-tight hover:underline transition-all">
                                Store
                        </Link>
                    </div>

                    <div className="order-first lg:order-none max-w-[490px] mx-auto w-full">
                        {/* Placeholder for missing helmet image. The screenshot shows a person wearing a helmet. */}
                        <div className="aspect-square w-full" aria-hidden="true" />
                    </div>

                    <div className="lg:justify-self-end flex flex-col items-center lg:items-end gap-10">
                        <div>
                            <h3 className="text-xs font-medium uppercase tracking-[0.08em] mb-4 text-center lg:text-right">FOLLOW ON</h3>
                            <nav className="flex flex-col items-center lg:items-end gap-4">
                                {socialLinks.map((link) => (
                                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl font-normal leading-tight hover:underline transition-all">
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-primary-background/20">
                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-x-8 gap-y-6 items-center justify-items-center">
                        {partnerLogos.map((logo) => (
                            <a key={logo.alt} href="#" className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
                                <Image src={logo.src} alt={logo.alt} width={100} height={24} className="h-5 md:h-6 w-auto object-contain" />
                            </a>
                        ))}
                        <PlaceholderLogo name="Quadrant" />
                        <PlaceholderLogo name="Uber" />
                    </div>
                </div>

                <div className="mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
                     <div className="flex items-center gap-8 text-xs font-semibold uppercase text-primary-background/70">
                        <Link href="/privacy-policy" className="hover:text-primary-background transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary-background transition">Terms</Link>
                    </div>
                    <a href="mailto:business@landonorris.com" className="inline-block bg-primary text-primary-foreground text-sm font-medium uppercase rounded-lg px-6 py-4 hover:bg-primary/90 transition-colors">
                        Business Enquiries
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;