import SideNavEn from "@/components/sections-en/SideNavEn";
import HeroSectionEn from "@/components/sections-en/HeroSection";
import CompanyIntroSection from "@/components/sections-en/CompanyIntroSection";
import EvolutionSection from "@/components/sections-en/EvolutionSection";
import VideoShowcaseSection from "@/components/sections-en/VideoShowcaseSection";
import AgentsSection from "@/components/sections-en/AgentsSection";
import AgentExamplesSection from "@/components/sections-en/AgentExamplesSection";
import PhysicalSection from "@/components/sections-en/PhysicalSection";
import JourneySection from "@/components/sections-en/JourneySection";
import OntologySection from "@/components/sections-en/OntologySection";
import HarnessSection from "@/components/sections-en/HarnessSection";
import LLMSection from "@/components/sections-en/LLMSection";
import HardwareSection from "@/components/sections-en/HardwareSection";
import FutureSection from "@/components/sections-en/FutureSection";

export default function En() {
  return (
    <div className="min-h-screen">
      <SideNavEn />
      <main className="lg:pl-16">
        <HeroSectionEn />
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
