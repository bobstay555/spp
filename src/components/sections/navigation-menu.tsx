"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const cn = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ");

// UPDATED NAV LINKS
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// UPDATED SOCIAL LINKS
const socialLinksData = [
  { href: "https://www.instagram.com/smile_picphotography/", label: "instagram" },
  { href: "https://www.facebook.com/share/1NzbWGU6Nw/", label: "facebook" },
  { href: "https://maps.app.goo.gl/ZzyEjGytfBEXNpG3A", label: "location" },
  { href: "tel:6382954626", label: "call us" },
];

// PHOTO MENU IMAGES — you can replace with your own photography samples anytime
const menuImagesCol1 = [
  {
    src: "/photos/sample1.jpg",
    alt: "Photography sample portrait",
  },
  {
    src: "/photos/sample2.jpg",
    alt: "Photography sample wedding",
  },
];

const menuImagesCol2 = [
  {
    src: "/photos/sample3.jpg",
    alt: "Photography newborn",
  },
  {
    src: "/photos/sample4.jpg",
    alt: "Photography outdoor couple",
  },
  {
    src: "/photos/sample5.jpg",
    alt: "Photography event",
  },
];

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

export default function NavigationMenu({ isOpen, onClose }: any) {
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

  if (!isRendered) return null;

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

            {/* LEFT SIDE */}
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
                <SocialLink href="mailto:smilepicphotography03@gmail.com">
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

            {/* RIGHT SIDE — SCROLLING IMAGES */}
            <div className="relative hidden h-full overflow-hidden lg:grid grid-cols-2 gap-x-8">

              <div className="relative">
                <div className="animate-scroll-up absolute top-0 left-0 w-full">
                  {[...menuImagesCol1, ...menuImagesCol1].map((img, i) => (
                    <MenuImage key={`col1-${i}`} src={img.src} alt={img.alt} />
                  ))}
                </div>
              </div>

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
