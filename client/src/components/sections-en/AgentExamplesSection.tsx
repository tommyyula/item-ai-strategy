/**
 * Design: Deep Space Command — Agent Application Examples (Bilingual, EN primary)
 * Four video demos: AI Recruit, Staff Monitoring, Content Generate & AEO, Ontology Agent Factory
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitleEn from "./SectionTitleEn";
import GlowCard from "../GlowCard";
import { Play, UserSearch, Eye, PenTool, Network } from "lucide-react";

const examples = [
  {
    icon: UserSearch,
    titleEn: "AI Recruit Agent",
    descEn: "Automates resume screening, candidate matching, and interview scheduling — reducing time-to-hire by 60% while maintaining quality standards.",
    videoId: "RAI1Vzoduvw",
    color: "cyan" as const,
  },
  {
    icon: Eye,
    titleEn: "Staff Monitoring Agent",
    descEn: "Vision-based AI monitors warehouse staff behavior for safety compliance, productivity tracking, and SOP adherence in real-time.",
    videoId: "0R8umQdRDFE",
    color: "purple" as const,
  },
  {
    icon: PenTool,
    titleEn: "Content Generate & AEO Agent",
    descEn: "AI-driven content generation for marketing and SEO, combined with Answer Engine Optimization (AEO) to maximize visibility in AI-powered search results.",
    videoId: "WOAr3NfU-QY",
    color: "cyan" as const,
  },
  {
    icon: Network,
    titleEn: "Ontology-Powered Agent Factory",
    descEn: "Demonstrates how Ontology serves as the foundation for rapid Agent assembly — turning domain knowledge into deployable AI Agents at scale.",
    videoId: "l0Iya3yYmmc",
    color: "purple" as const,
  },
];

export default function AgentExamplesSection() {
  return (
    <section id="agent-examples" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="05"
          title="More Agent Applications in Action"
          subtitle="From recruiting to content generation, from behavior monitoring to Agent factory — AI Agents are permeating every corner of enterprise operations."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((ex, i) => (
            <AnimatedSection key={ex.videoId} delay={i * 0.12}>
              <GlowCard glowColor={ex.color} className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    ex.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-purple-glow/10 text-purple-glow"
                  }`}>
                    <ex.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{ex.titleEn}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-1">{ex.descEn}</p>

                {/* Video thumbnail with play link */}
                <a
                  href={`https://youtu.be/${ex.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors mt-auto"
                >
                  <img
                    src={`https://img.youtube.com/vi/${ex.videoId}/mqdefault.jpg`}
                    alt={`${ex.titleEn} Demo`}
                    className="w-full h-44 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-black/60 border flex items-center justify-center transition-all ${
                      ex.color === "cyan"
                        ? "border-white/20 group-hover:bg-cyan-500/30 group-hover:border-cyan-500/40"
                        : "border-white/20 group-hover:bg-purple-500/30 group-hover:border-purple-500/40"
                    }`}>
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded">
                    ▶ Watch Demo
                  </div>
                </a>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
