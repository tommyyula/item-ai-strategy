/**
 * V1 — Lenovo version of the presentation (backup)
 * Uses original Lenovo-branded section components from sections-v1/
 * All other sections are shared with the main (Fashion Nova) version
 */
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/sections-v1/HeroSection";
import CompanyIntroSection from "@/components/sections-v1/CompanyIntroSection";
import EvolutionSection from "@/components/sections/EvolutionSection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import AgentsSection from "@/components/sections/AgentsSection";
import AgentExamplesSection from "@/components/sections/AgentExamplesSection";
import PhysicalSection from "@/components/sections/PhysicalSection";
import JourneySection from "@/components/sections/JourneySection";
import OntologySection from "@/components/sections/OntologySection";
import HarnessSection from "@/components/sections/HarnessSection";
import LLMSection from "@/components/sections-v1/LLMSection";
import HardwareSection from "@/components/sections/HardwareSection";
import FutureSection from "@/components/sections-v1/FutureSection";

export default function V1() {
  return (
    <div className="min-h-screen">
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
