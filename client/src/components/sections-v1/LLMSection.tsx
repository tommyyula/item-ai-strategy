// TODO(i18n): copy in this section is still hardcoded English. It needs a
// `deck.v1.llm` dictionary (zh/en/ja/es) and `useT` — see
// client/src/i18n/CONVENTIONS.md.

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Globe, Server, Layers, ArrowRight } from "lucide-react";

const usModels = [
  { name: "OpenAI GPT-4o", use: "Complex Reasoning / Agentic Workflow" },
  { name: "Claude", use: "Long-text Analysis / Code Generation" },
  { name: "Gemini", use: "Multimodal Understanding / Video Analysis" },
];

const cnModels = [
  { name: "Qwen", use: "Local Deployment / Chinese NLU" },
  { name: "DeepSeek", use: "Cost-sensitive Scenarios / Reasoning" },
  { name: "Fine-tuned OSS", use: "Vertical Domain Specific" },
];

const futureModels = [
  {
    abbr: "LMMs",
    name: "Large Multimodal Models",
    desc: "Unified understanding of text + image + audio",
  },
  {
    abbr: "LVMs",
    name: "Large Vision Models",
    desc: "Visual monitoring / Video QC / Packing station QC",
  },
  {
    abbr: "LPMs",
    name: "Large Physical Models",
    desc: "Robot control / Physical world interaction",
  },
];

export default function LLMSection() {
  return (
    <section id="llm" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="10"
          title="LLM Selection Strategy"
          subtitle="A pragmatic Hybrid Router strategy, not locked to any single model — highly aligned with Lenovo's 'Hybrid AI' philosophy."
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
                  <p className="text-xs text-muted-foreground">
                    High-complexity Reasoning / Code Gen
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {usModels.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between gap-3 p-3 rounded bg-secondary/40"
                  >
                    <span className="text-sm font-medium">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono text-right">
                      {m.use}
                    </span>
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
                  <div
                    key={m.name}
                    className="flex items-center justify-between gap-3 p-3 rounded bg-secondary/40"
                  >
                    <span className="text-sm font-medium">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono text-right">
                      {m.use}
                    </span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Future expansion */}
        <AnimatedSection delay={0.2}>
          <GlowCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-cyan-glow" />
              <h3 className="font-bold">Future Expansion: From LLM to Multimodal</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {futureModels.map((m) => (
                <div
                  key={m.abbr}
                  className="p-4 rounded-lg bg-secondary/30 border border-border text-center"
                >
                  <p className="text-lg font-bold font-mono text-cyan-glow mb-1">{m.abbr}</p>
                  <p className="text-sm font-medium mb-1.5">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
