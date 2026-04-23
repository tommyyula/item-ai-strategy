import SectionTitleEn from "./SectionTitleEn";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Globe, Server, Layers, ArrowRight } from "lucide-react";

const usModels = [
  { name: "OpenAI GPT-4o", useEn: "Complex Reasoning / Agentic Workflow" },
  { name: "Claude", useEn: "Long-text Analysis / Code Generation" },
  { name: "Gemini", useEn: "Multimodal Understanding / Video Analysis" },
];

const cnModels = [
  { name: "Qwen", useEn: "Local Deployment / Chinese NLU" },
  { name: "DeepSeek", useEn: "Cost-sensitive Scenarios / Reasoning" },
  { name: "Fine-tuned OSS", useEn: "Vertical Domain Specific" },
];

const futureModels = [
  { abbr: "LMMs", nameEn: "Large Multimodal Models", descEn: "Unified understanding of text + image + audio" },
  { abbr: "LVMs", nameEn: "Large Vision Models", descEn: "Visual monitoring / Video QC / Packing station QC" },
  { abbr: "LPMs", nameEn: "Large Physical Models", descEn: "Robot control / Physical world interaction" },
];

export default function LLMSection() {
  return (
    <section id="llm" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="10"
          title="LLM Selection Strategy"
          subtitle="A pragmatic Hybrid Router strategy, not locked to any single model — highly aligned with the enterprise 'Hybrid AI' philosophy."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* US Models */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <h3 className="font-bold">US Frontier Models</h3>
                  <p className="text-xs text-muted-foreground">High-complexity Reasoning / Code Gen</p>
                </div>
              </div>
              <div className="space-y-3">
                {usModels.map((m) => (
                  <div key={m.name} className="p-3 rounded bg-secondary/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{m.useEn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* CN Models */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-glow/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-purple-glow" />
                </div>
                <div>
                  <h3 className="font-bold">China Open-source / Local Models</h3>
                  <p className="text-xs text-muted-foreground">Privacy / Localization / Cost</p>
                </div>
              </div>
              <div className="space-y-3">
                {cnModels.map((m) => (
                  <div key={m.name} className="p-3 rounded bg-secondary/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{m.useEn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Future expansion */}
        <AnimatedSection delay={0.2}>
          <GlowCard className="p-6">
            <div className="flex items-center gap-3 mb-1">
              <Layers className="w-5 h-5 text-cyan-glow" />
              <h3 className="font-bold">Future Expansion: From LLM to Multimodal</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {futureModels.map((m) => (
                <div key={m.abbr} className="p-4 rounded-lg bg-secondary/30 border border-panel-border/30 text-center">
                  <p className="text-lg font-bold font-mono text-cyan-glow mb-1">{m.abbr}</p>
                  <p className="text-sm font-medium mb-0.5">{m.nameEn}</p>
                  <p className="text-xs text-muted-foreground">{m.descEn}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
