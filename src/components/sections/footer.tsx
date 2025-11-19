import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/smile_picphotography/", label: "Instagram" },
  { href: "https://www.facebook.com/share/1NzbWGU6Nw/", label: "Facebook" },
  { href: "https://maps.app.goo.gl/ZzyEjGytfBEXNpG3A", label: "Location" },
  { href: "tel:6382954626", label: "Call Us" },
];

const partnerLogos = [
  "canon.svg",
  "nikon.svg",
  "sony.svg",
  "dji.svg",
  "fujifilm.svg",
  "godox.svg",
  "panasonic.svg",
  "sigma.svg",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#CDFF00] to-[#282C20] to-[80%] pt-24 lg:pt-40 pb-12 text-primary-background"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/svgs/67dbeba158707fa1cd5e5e45_blobs_footer_1-30.svg"
        alt=""
        fill
        className="absolute inset-0 w-full h-full mix-blend-multiply opacity-50 z-0 pointer-events-none object-cover"
      />

      <div className="container relative z-10 px-6 md:px-12">

        {/* Heading */}
        <div className="relative mb-12 lg:mb-[-4rem] xl:mb-[-6rem]">
          <h2 className="text-center font-accent text-[clamp(3.5rem,10vw,8.75rem)] leading-[0.85] font-normal uppercase text-primary-background max-w-6xl mx-auto">
            Capturing Moments
            <br /> That Last Forever.
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-y-16">

          {/* Pages */}
          <div className="lg:justify-self-start flex flex-col items-center lg:items-start gap-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.08em] mb-4 text-center lg:text-left">PAGES</h3>
              <nav className="flex flex-col items-center lg:items-start gap-4">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll={true}
                    className="text-2xl font-normal leading-tight hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Link
              href="#contact"
              scroll={true}
              className="text-2xl font-normal leading-tight hover:underline transition-all"
            >
              Book a Session
            </Link>
          </div>

          {/* placeholder */}
          <div className="order-first lg:order-none max-w-[490px] mx-auto w-full">
            <div className="aspect-square w-full bg-black/10 rounded-xl" aria-hidden="true" />
          </div>

          {/* Social Links */}
          <div className="lg:justify-self-end flex flex-col items-center lg:items-end gap-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.08em] mb-4 text-center lg:text-right">FOLLOW US</h3>
              <nav className="flex flex-col items-center lg:items-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-normal leading-tight hover:underline transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="mt-24 pt-8 border-t border-primary-background/20 overflow-hidden">
          <style>
            {`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>

          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-16 py-4 w-max animate-[scroll-left_25s_linear_infinite]">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <Image
                  key={i}
                  src={`/brands/${logo}`}
                  alt={logo}
                  width={120}
                  height={40}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-xs font-semibold uppercase text-primary-background/70">
            <Link href="#privacy-policy" className="hover:text-primary-background transition">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-primary-background transition">Terms</Link>
          </div>

          <a
            href="mailto:smilepicphotography03@gmail.com"
            className="inline-block bg-primary text-primary-foreground text-sm font-medium uppercase rounded-lg px-6 py-4 hover:bg-primary/90 transition-colors"
          >
            Business Enquiries
          </a>
        </div>
      </div>
    </footer>
  );
}
