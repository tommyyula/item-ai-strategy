// TODO(i18n): this variant still renders hardcoded English copy. It needs a
// `pages.productEnn2` dictionary (zh/en/ja/es) and `useT` calls, the same way
// ProductENN does — see client/src/i18n/CONVENTIONS.md.

import TopBar from "@/components/TopBar";
import BrandLogo from "@/components/BrandLogo";
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/sections/HeroSection";
import CompanyIntroSection from "@/components/sections/CompanyIntroSection";
import EvolutionSection from "@/components/sections/EvolutionSection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import AgentsSection from "@/components/sections/AgentsSection";
import AgentExamplesSection from "@/components/sections/AgentExamplesSection";
import PhysicalSection from "@/components/sections/PhysicalSection";
import JourneySection from "@/components/sections/JourneySection";
import OntologySection from "@/components/sections/OntologySection";
import HarnessSection from "@/components/sections/HarnessSection";
import LLMSection from "@/components/sections/LLMSection";
import HardwareSection from "@/components/sections/HardwareSection";
import FutureSection from "@/components/sections/FutureSection";

/**
 * ENN co-branded cut of the main deck. Same sections as Home, with an
 * ITEM × ENN lockup in the page furniture.
 *
 * The day/night switch and the ITEM logo now come from <TopBar />, which is
 * driven by the app-wide ThemeContext — the page no longer carries its own
 * `isDayMode` state or its own sheet of `!important` day-mode overrides.
 */

// Vendored: the CloudFront/manuscdn copies of this mark are gone.
const ENN_LOGO = `${import.meta.env.BASE_URL}media/cpYtDSTTMLAMRYyR.png`;

export default function ProductENN2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      {/*
        Partner lockup. It sits top-centre rather than top-left, because the
        top-left corner belongs to TopBar's ITEM logo. Hidden on narrow
        viewports so it never collides with the TopBar controls.
      */}
      <div className="pointer-events-none fixed top-4 left-1/2 z-40 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 backdrop-blur-md">
          <BrandLogo variant="mark" heightClass="h-5" />
          <span className="text-sm font-light text-muted-foreground" aria-hidden="true">
            &times;
          </span>
          {/*
            ENN ships a full-colour mark drawn for a light ground, so it gets a
            neutral chip instead of a filter. The chip stays light in both
            themes; the token border is what separates it from a light page.
          */}
          <span className="inline-flex items-center rounded border border-border/60 bg-white px-2 py-1 shadow-sm">
            <img src={ENN_LOGO} alt="ENN Group" className="h-4 w-auto object-contain" />
          </span>
        </div>
      </div>

      <SideNav />

      <main className="lg:pl-16">
        <HeroSection />
        <div className="section-divider" />
        <CompanyIntroSection />
        <div className="section-divider" />
        <EvolutionSection />
        <div className="section-divider" />
        <VideoShowcaseSection />
        <div className="section-divider" />
        <AgentsSection />
        <div className="section-divider" />
        <AgentExamplesSection />
        <div className="section-divider" />
        <PhysicalSection />
        <div className="section-divider" />
        <JourneySection />
        <div className="section-divider" />
        <OntologySection />
        <div className="section-divider" />
        <HarnessSection />
        <div className="section-divider" />
        <LLMSection />
        <div className="section-divider" />
        <HardwareSection />
        <div className="section-divider" />
        <FutureSection />
      </main>
    </div>
  );
}
