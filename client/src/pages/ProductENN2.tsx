import { useState } from "react";
import { Moon, Sun } from "lucide-react";
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

const ENN_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/117473971/cpYtDSTTMLAMRYyR.png";
const ITEM_LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/item-logo-white_4ff1c5bb.png";

export default function ProductENN2() {
  const [isDayMode, setIsDayMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDayMode ? "enn-day-mode" : ""}`}>
      {/* Top header bar with logos and toggle */}
      <header className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-3 backdrop-blur-xl border-b transition-colors duration-500 ${
        isDayMode 
          ? "bg-white/90 border-gray-200" 
          : "bg-[#04070F]/80 border-white/10"
      }`}>
        {/* Logos */}
        <div className="flex items-center gap-3">
          <img 
            src={ITEM_LOGO_WHITE} 
            alt="ITEM AI" 
            className={`h-7 transition-all duration-500 ${isDayMode ? "brightness-0" : ""}`}
          />
          <span className={`text-sm font-light transition-colors duration-500 ${isDayMode ? "text-gray-400" : "text-white/30"}`}>×</span>
          <img 
            src={ENN_LOGO} 
            alt="ENN Group 新奥集团" 
            className={`h-7 object-contain transition-all duration-500 ${isDayMode ? "" : "brightness-0 invert"}`}
          />
        </div>

        {/* Day/Night Toggle */}
        <div className={`flex items-center gap-1 rounded-full p-1 border transition-colors duration-500 ${
          isDayMode 
            ? "bg-gray-100 border-gray-200" 
            : "bg-white/5 border-white/10"
        }`}>
          <button
            onClick={() => setIsDayMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
              !isDayMode 
                ? "bg-cyan-500/20 text-cyan-300 shadow-sm" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            Night
          </button>
          <button
            onClick={() => setIsDayMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
              isDayMode 
                ? "bg-amber-100 text-amber-700 shadow-sm" 
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            Day
          </button>
        </div>
      </header>

      {/* Side navigation */}
      <SideNav />

      {/* Main content - same as Home */}
      <main className="lg:pl-16 pt-14">
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

      {/* Day mode style overrides */}
      {isDayMode && (
        <style>{`
          .enn-day-mode {
            --background: oklch(0.98 0.005 250);
            --foreground: oklch(0.20 0.02 250);
            --card: oklch(0.97 0.005 250);
            --card-foreground: oklch(0.20 0.02 250);
            --popover: oklch(0.97 0.005 250);
            --popover-foreground: oklch(0.20 0.02 250);
            --primary: oklch(0.55 0.20 230);
            --primary-foreground: oklch(0.98 0.005 250);
            --secondary: oklch(0.94 0.01 250);
            --secondary-foreground: oklch(0.30 0.02 250);
            --muted: oklch(0.94 0.01 250);
            --muted-foreground: oklch(0.50 0.02 250);
            --accent: oklch(0.55 0.20 290);
            --accent-foreground: oklch(0.20 0.02 270);
            --border: oklch(0.88 0.01 250);
            --input: oklch(0.94 0.01 250);
            --ring: oklch(0.55 0.20 230);
          }
          .enn-day-mode {
            background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%) !important;
            color: #1e293b !important;
          }
          .enn-day-mode .section-divider {
            background: linear-gradient(90deg, transparent, oklch(0.55 0.20 230 / 0.3), oklch(0.55 0.25 290 / 0.3), transparent) !important;
          }
          .enn-day-mode .panel {
            background: rgba(255,255,255,0.9) !important;
            border-color: oklch(0.88 0.01 250 / 0.6) !important;
          }
          .enn-day-mode .panel:hover {
            border-color: oklch(0.55 0.20 230 / 0.5) !important;
            box-shadow: 0 0 30px oklch(0.55 0.20 230 / 0.1) !important;
          }
          .enn-day-mode h1, .enn-day-mode h2, .enn-day-mode h3, .enn-day-mode h4 {
            color: #0f172a !important;
          }
          .enn-day-mode h1 .text-transparent {
            color: transparent !important;
          }
          .enn-day-mode p {
            color: #334155 !important;
          }
          .enn-day-mode .text-muted-foreground {
            color: #64748b !important;
          }
          .enn-day-mode .text-muted-foreground\\/65,
          .enn-day-mode .text-muted-foreground\\/75 {
            color: #94a3b8 !important;
          }
          .enn-day-mode .text-cyan-glow {
            color: oklch(0.55 0.20 195) !important;
          }
          .enn-day-mode .text-cyan-glow\\/70,
          .enn-day-mode .text-cyan-glow\\/60 {
            color: oklch(0.50 0.15 195) !important;
          }
          .enn-day-mode .bg-background {
            background-color: #f8fafc !important;
          }
          .enn-day-mode .bg-card {
            background-color: #ffffff !important;
          }
          .enn-day-mode .border-panel-border\\/30,
          .enn-day-mode .border-panel-border {
            border-color: #e2e8f0 !important;
          }
          .enn-day-mode .bg-deep-space\\/80,
          .enn-day-mode .bg-deep-space {
            background-color: rgba(248,250,252,0.9) !important;
          }
          .enn-day-mode .bg-panel-bg {
            background-color: #ffffff !important;
          }
          .enn-day-mode .glow-cyan {
            box-shadow: 0 0 20px oklch(0.55 0.20 195 / 0.2), 0 0 60px oklch(0.55 0.20 195 / 0.05) !important;
          }
          .enn-day-mode .bg-cyan-glow\\/5,
          .enn-day-mode .bg-cyan-glow\\/10 {
            background-color: oklch(0.55 0.20 195 / 0.08) !important;
          }
          .enn-day-mode .border-cyan-glow\\/20,
          .enn-day-mode .border-cyan-glow\\/30,
          .enn-day-mode .border-cyan-glow\\/40 {
            border-color: oklch(0.55 0.20 195 / 0.25) !important;
          }
          .enn-day-mode .bg-gradient-to-b {
            background: linear-gradient(to bottom, rgba(248,250,252,0.4), rgba(248,250,252,0.6), #f8fafc) !important;
          }
          .enn-day-mode [class*="from-background"] {
            --tw-gradient-from: #f8fafc !important;
          }
          .enn-day-mode .text-foreground {
            color: #1e293b !important;
          }
          .enn-day-mode ::-webkit-scrollbar-track {
            background: #f1f5f9 !important;
          }
          .enn-day-mode ::-webkit-scrollbar-thumb {
            background: #cbd5e1 !important;
          }
        `}</style>
      )}
    </div>
  );
}
