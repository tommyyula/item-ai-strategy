import SideNav from "@/components/SideNav";
import HeroSection from "@/components/sections/HeroSection";
import EvolutionSection from "@/components/sections/EvolutionSection";
import AgentsSection from "@/components/sections/AgentsSection";
import JourneySection from "@/components/sections/JourneySection";
import OntologySection from "@/components/sections/OntologySection";
import HarnessSection from "@/components/sections/HarnessSection";
import LLMSection from "@/components/sections/LLMSection";
import HardwareSection from "@/components/sections/HardwareSection";
import PhysicalSection from "@/components/sections/PhysicalSection";
import FutureSection from "@/components/sections/FutureSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SideNav />
      <main className="lg:pl-16">
        <HeroSection />
        <div className="section-divider" />
        <EvolutionSection />
        <div className="section-divider" />
        <AgentsSection />
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
        <PhysicalSection />
        <div className="section-divider" />
        <FutureSection />
      </main>
    </div>
  );
}
