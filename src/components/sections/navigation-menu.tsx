"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// --- UTILITY ---
const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ");

// --- PROPS INTERFACE ---
interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- DATA ---
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/on-track", label: "On Track" },
  { href: "/off-track", label: "Off Track" },
  { href: "/calendar", label: "Calendar" },
];

const socialLinksData = [
  { href: "https://www.tiktok.com/@landonorris", label: "tiktok" },
  { href: "https://www.instagram.com/lando", label: "instagram" },
  { href: "https://www.youtube.com/landonorris04", label: "youtube" },
  { href: "https://www.twitch.tv/landonorris", label: "Twitch" },
];

const menuImagesCol1 = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/67dae5835c0649927438ae19_ln4-menu-img-1-1.webp",
    alt: "Lando Norris in a racing suit",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/67dae5827466101f6aca77eb_ln4-menu-img-3-2.webp",
    alt: "Lando Norris holding a helmet",
  },
];

const menuImagesCol2 = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/67dae5829bee1b4a7b936935_ln4-menu-img-2-3.webp",
    alt: "Portrait of Lando Norris",
  },
Src:   {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/67dae5824cc4245e1e6cf501_ln4-menu-img-5-4.webp",
    alt: "Lando Norris in his F1 car",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0433b27c-cec6-447f-a41b-c188b56113bd-landonorris-com/assets/images/67dae582f6abf54adb515c73_ln4-menu-img-4-5.webp",
    alt: "Lando Norris celebrating on the podium",
  },
];

// --- CHILD COMPONENTS ---
const MenuImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full mb-8 aspect-[2/3]">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 0vw, 20vw"
    />
    <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
  </div>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group relative block font-display text-5xl font-bold uppercase leading-none text-foreground transition-colors hover:text-primary py-2"
  >
    {children}
    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </Link>
);

const SocialLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isExternal = href.startsWith("http");
  const props = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...props}
      className="group relative capitalize text-foreground transition-colors hover:text-primary text-base"
    >
      <span>{children}</span>
      <span className="absolute bottom-[-2px] left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </a>
  );
};

// --- MAIN COMPONENT ---
export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [isRendered, setIsRendered] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsRendered(true);
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isRendered) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @keyframes scroll-up {
            from { transform: translateY(0%); }
            to { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            from { transform: translateY(-50%); }
            to { transform: translateY(0%); }
          }
          .animate-scroll-up { animation: scroll-up 60s linear infinite; }
          .animate-scroll-down { animation: scroll-down 75s linear infinite; }
        `}
      </style>
      <div
        className={cn(
          "fixed inset-0 z-[90] bg-[#282C20FA] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="container mx-auto h-full px-6 md:px-12"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid h-full grid-cols-1 gap-x-8 pt-24 pb-12 lg:grid-cols-2 lg:pt-32 lg:pb-16">
            {/* Left Column */}
            <div className="flex h-full flex-col justify-between">
              <nav className="flex flex-col items-start">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </nav>

              <div className="flex flex-col items-start gap-6">
                <SocialLink href="mailto:business@landonorris.com">
                  business enquiries
                </SocialLink>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {socialLinksData.map((link) => (
                    <SocialLink key={link.href} href={link.href}>
                      {link.label}
                    </SocialLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Images) */}
            <div className="relative hidden h-full overflow-hidden lg:grid grid-cols-2 gap-x-8">
              {/* Column 1 */}
              <div className="relative">
                <div className="animate-scroll-up absolute top-0 left-0 w-full">
                  {[...menuImagesCol1, ...menuImagesCol1].map((img, i) => (
                    <MenuImage key={`col1-${i}`} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="relative">
                <div
                  className="animate-scroll-down absolute top-0 left-0 w-full"
                  style={{ transform: "translateY(-50%)" }}
                >
                  {[...menuImagesCol2, ...menuImagesCol2].map((img, i) => (
                    <MenuImage key={`col2-${i}`} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}