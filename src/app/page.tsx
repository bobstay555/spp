import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import HeroMarquee from "@/components/sections/hero-marquee";
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
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HeroMarquee />
      <MissionStatement />
      <HorizontalGallery />
      <HelmetShowcase />
      <HelmetGrid />
      <HelmetCta />
      <LN4RacingPromo />
      <PartnershipsIntro />
      <PartnershipsLogos />
      <SocialFeed />
      <Footer />
    </main>
  );
}