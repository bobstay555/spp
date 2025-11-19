"use client";

import { useState, useEffect, FC, ReactNode } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

interface MenuItemProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ href, children, onClick }) => (
  <Link
    href={href}
    scroll={true}
    onClick={onClick}
    className="group text-4xl font-bold text-foreground transition-colors md:text-5xl"
  >
    <span>{children}</span>
    <span className="mt-1 block h-1 max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full"></span>
  </Link>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 z-[100] w-full bg-background">
        <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8">

          {/* LOGO */}
          <Link
            href="#home"
            scroll={true}
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            <span className="font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground md:text-xl">
              Smile Pic Photography
            </span>
          </Link>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-4">

            {/* BOOK NOW → WHATSAPP */}
            <a
              href="https://wa.me/916382954626?text=Hi%2C%20I%20would%20like%20to%20book%20a%20photoshoot."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02] hover:bg-accent-secondary md:flex"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Book Now</span>
            </a>

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-transform hover:scale-[1.02]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed inset-0 z-[99] bg-background transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mx-auto flex h-full flex-col items-center justify-center p-8">

          <nav className="flex flex-col items-center gap-8 text-center">

            {/* HOME */}
            <MenuItem href="#home" onClick={closeMenu}>
              Home
            </MenuItem>

            {/* PORTFOLIO */}
            <MenuItem href="#portfolio" onClick={closeMenu}>
              Portfolio
            </MenuItem>

            {/* SERVICES */}
            <MenuItem href="#services" onClick={closeMenu}>
              Services
            </MenuItem>

            {/* CONTACT */}
            <MenuItem href="#contact" onClick={closeMenu}>
              Contact
            </MenuItem>
          </nav>

          {/* WHATSAPP CTA (Mobile) */}
          <a
            href="https://wa.me/916382954626?text=Hi%2C%20I%20would%20like%20to%20book%20a%20photoshoot."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 text-2xl font-bold text-primary hover:opacity-80 transition"
          >
            Book on WhatsApp
          </a>

          {/* SOCIAL LINKS */}
          <div className="absolute bottom-8 flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
            <a
              href="https://www.instagram.com/smile_picphotography/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1NzbWGU6Nw/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Facebook
            </a>
            <a
              href="https://maps.app.goo.gl/ZzyEjGytfBEXNpG3A"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Location
            </a>
            <a
              href="tel:6382954626"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
