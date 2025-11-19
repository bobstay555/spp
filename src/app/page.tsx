import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import HeroMarqueeCamera from "@/components/sections/hero-marquee-camera";

import MissionStatement from "@/components/sections/mission-statement";
import HorizontalGallery from "@/components/sections/horizontal-gallery";
import HelmetShowcase from "@/components/sections/helmet-showcase";
import HelmetGrid from "@/components/sections/helmet-grid";
import HelmetCta from "@/components/sections/helmet-cta";
import LN4RacingPromo from "@/components/sections/ln4-racing-promo";
import PartnershipsIntro from "@/components/sections/partnerships-intro";
import PartnershipsLogos from "@/components/sections/partnerships-logos";
import SocialFeed from "@/components/sections/social-feed";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">

      {/* 🔥 NAVIGATION */}
      <Navigation />

      {/* 🔥 HERO SECTION */}
      <section id="home">
        <Hero />
        <HeroMarqueeCamera />
      </section>

      {/* 🔥 ABOUT / MISSION SECTION */}
      <section id="about">
        <MissionStatement />
      </section>

      {/* 🔥 PORTFOLIO GALLERY SECTION */}
      <section id="portfolio">
        <HorizontalGallery />
        <HelmetShowcase />
        <HelmetGrid />
        <HelmetCta />
      </section>

      {/* 🔥 SERVICES SECTION */}
      <section id="services">
        <LN4RacingPromo />
        <PartnershipsIntro />
        <PartnershipsLogos />
      </section>

      {/* 🔥 SOCIAL SECTION */}
      <section id="social">
        <SocialFeed />
      </section>

      {/* 🔥 CONTACT SECTION */}
      <section id="contact">
        <Footer />
      </section>

    </main>
  );
}
