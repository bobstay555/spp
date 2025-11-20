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

/* Existing splash cursor */
import SplashCursorWrapper from "@/components/client/SplashCursorWrapper";

/* ⭐ STEP 2 — IMPORT GSAP STACKED CARDS LOGIC ⭐ */

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">

      {/* GSAP stacked cards engine */}
      

      {/* NAVIGATION (not stacked) */}
      <Navigation />

      {/* CARD 1 */}
      <section className="c-card relative" id="home">

        {/* background */}
        <div className="absolute inset-0 -z-10">
          <SplashCursorWrapper
            gradientColors={["#FF9FFC", "#5227FF"]}
            angle={0}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>

        <Hero />
        <HeroMarqueeCamera />
      </section>

      {/* CARD 2 */}
      <section className="c-card" id="about">
        <MissionStatement />
      </section>

      {/* CARD 3 */}
      <section className="c-card" id="portfolio">
        <HorizontalGallery />
        <HelmetShowcase />
        <HelmetGrid />
        <HelmetCta />
      </section>

      {/* CARD 4 */}
      <section className="c-card" id="services">
        <LN4RacingPromo />
        <PartnershipsIntro />
        <PartnershipsLogos />
      </section>

      {/* CARD 5 */}
      <section className="c-card" id="social">
        <SocialFeed />
      </section>

      {/* CARD 6 (FINAL CARD) */}
      <section className="c-card" id="contact">
        <Footer />
      </section>

    </main>
  );
}
