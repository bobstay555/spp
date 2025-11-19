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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 z-[100] w-full bg-background">
        <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
          <Link
            href="/"
            className="transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          >
            {/* Note: The original site uses an SVG for the logo. This is a text-based approximation. */}
            <span className="font-display text-lg font-bold uppercase tracking-[0.2em] text-foreground md:text-xl">
              Lando Norris
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://store.landonorris.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-200 ease-in-out hover:scale-[1.02] hover:bg-accent-secondary md:flex"
              aria-label="Visit the Lando Norris store"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Store</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
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

      <div
        className={`fixed inset-0 z-[99] bg-background transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mx-auto flex h-full flex-col items-center justify-center p-8">
          <nav className="flex flex-col items-center gap-8 text-center">
            <MenuItem href="/" onClick={closeMenu}>
              Home
            </MenuItem>
            <MenuItem href="/on-track" onClick={closeMenu}>
              On Track
            </MenuItem>
            <MenuItem href="/off-track" onClick={closeMenu}>
              Off Track
            </MenuItem>
            <MenuItem href="/calendar" onClick={closeMenu}>
              Calendar
            </MenuItem>
          </nav>
          <div className="absolute bottom-8 flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
            <a href="https://www.tiktok.com/@landonorris" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">TikTok</a>
            <a href="https://www.instagram.com/lando" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Instagram</a>
            <a href="https://www.youtube.com/landonorris04" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">YouTube</a>
            <a href="https://www.twitch.tv/landonorris" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Twitch</a>
          </div>
        </div>
      </div>
    </>
  );
}