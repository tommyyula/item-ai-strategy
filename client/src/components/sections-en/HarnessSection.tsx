/**
 * Design: Deep Space Command — Harness Section
 * No red/destructive colors — Generic Harness uses muted slate/gray tones
 * Business Harness uses cyan, Architecture uses cyan/purple
 */

import SectionTitleEn from "./SectionTitleEn";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Shield, TrendingDown, TrendingUp, Zap, Eye, Lock, Repeat } from "lucide-react";
import { useState } from "react";

const HARNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/harness-concept-ZdjYjFYYBEhLzy6XedAGKQ.webp";

const tabs = [
  { id: "overview", label: "Core Distinction" },
  { id: "architecture", label: "Architecture" },
  { id: "moat", label: "Moat Effect" },
];

export default function HarnessSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="harness" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="09"
          title="Harness: Constraints & Moat for AI"
          subtitle="Agent = Model + Harness. Harness is the structured software environment surrounding the model, designed to guide, constrain, and validate AI outputs."
        />

        {/* Tab navigation */}
        <AnimatedSection className="mb-8">
          <div className="flex gap-1 p-1 rounded-lg bg-secondary/50 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <AnimatedSection>
              <div className="relative rounded-lg overflow-hidden mb-8 max-w-3xl mx-auto">
                <img src={HARNESS_IMG} alt="Harness Concept" className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Generic Harness — muted slate tones instead of red */}
              <AnimatedSection direction="left">
                <GlowCard className="p-6 h-full border-l-2 border-l-slate-400/50">
                  <div className="flex items-center gap-3 mb-1">
                    <TrendingDown className="w-5 h-5 text-slate-400" />
                    <h3 className="text-lg font-bold">Generic Harness</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    Infrastructure-level capabilities: sandbox isolation, credential management, crash recovery, context management, MCP protocol, etc.
                  </p>
                  <div className="p-3 rounded bg-slate-400/5 border border-slate-400/15">
                    <p className="text-xs text-slate-400 font-mono">
                      Depreciates with model upgrades — belongs to model vendors' territory, gradually becoming commoditized infrastructure
                    </p>
                  </div>
                </GlowCard>
              </AnimatedSection>

              {/* Business Harness — cyan tones */}
              <AnimatedSection direction="right">
                <GlowCard glowColor="cyan" className="p-6 h-full border-l-2 border-l-cyan-glow/50">
                  <div className="flex items-center gap-3 mb-1">
                    <TrendingUp className="w-5 h-5 text-cyan-glow" />
                    <h3 className="text-lg font-bold">Business Harness</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    Domain dark knowledge, compliance red lines, vertical SOPs, organizational taste, and experience distillation flywheel.
                  </p>
                  <div className="p-3 rounded bg-cyan-glow/5 border border-cyan-glow/15">
                    <p className="text-xs text-cyan-glow font-mono">
                      Appreciates with model upgrades — the exclusive territory of enterprises and practitioners, forming the true moat
                    </p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="text-center mt-8 p-5 rounded-lg border border-dashed border-purple-glow/30 bg-purple-glow/5 max-w-2xl mx-auto">
                <p className="text-sm text-purple-glow/90 italic">
                  Item's strategic focus is on building deep Business Harness, ensuring platform value won't be displaced by stronger LLMs, but instead compounds as underlying models improve.
                </p>
                <p className="text-xs text-purple-glow/70 mt-2">
                  
                </p>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* Tab: Architecture */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            <AnimatedSection>
              <GlowCard className="p-8">
                <div className="flex items-center gap-3 mb-1">
                  <Shield className="w-6 h-6 text-cyan-glow" />
                  <h3 className="text-xl font-bold">Trust Barrier of Harness Engineering</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-2">
                  For non-deterministic AI outputs, Harness provides essential feedforward and feedback controls, establishing a complete trust barrier system.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold text-sm">Feedforward / Guides</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      Constrain <strong className="text-foreground">before</strong> Agent action to improve first-pass success rate.
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Domain rule injection",
                        "SOP guidance templates",
                        "Context boundary setting",
                        "Input format validation",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-cyan-glow" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg bg-purple-glow/5 border border-purple-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="w-4 h-4 text-purple-glow" />
                      <h4 className="font-bold text-sm">Feedback / Sensors</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      Validate <strong className="text-foreground">after</strong> Agent action, enabling self-correction capability.
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Structured test validation",
                        "Logic review loop",
                        "LLM-as-Judge semantic validation",
                        "Compliance red-line check",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-purple-glow" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <GlowCard className="p-8">
                <h3 className="text-lg font-bold mb-1">Execution Type Classification</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-cyan-glow mb-1">Deterministic Computational Control</h4>
                    <p className="text-sm text-muted-foreground">API contract validation, linting, type checking, data format verification — precisely determinable rules.</p>
                    
                  </div>
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-purple-glow mb-1">Inference Control</h4>
                    <p className="text-sm text-muted-foreground">LLM-as-Judge for semantic validation, intent consistency checks, and business logic reasonability assessment.</p>
                    
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          </div>
        )}

        {/* Tab: Moat */}
        {activeTab === "moat" && (
          <div className="space-y-8">
            <AnimatedSection>
              <GlowCard className="p-8">
                <div className="flex items-center gap-3 mb-1">
                  <Lock className="w-6 h-6 text-cyan-glow" />
                  <h3 className="text-xl font-bold">Building & Evolving Business Harness</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-5 rounded-lg bg-secondary/30 border border-panel-border/30">
                    <h4 className="font-bold mb-1">State & Identity Governance</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Generic Harness cannot handle complex enterprise authentication and business state rollback. Our Business Harness encapsulates complex warehouse logic (inventory locking, dock scheduling, wave management) in secure sandboxes, ensuring every operation is traceable and reversible.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Repeat className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold">The Compound Interest Effect of the Moat</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      A Business Harness that has processed ten million invoices or orders accumulates "calibration depth" and "edge case handling capability" that no general-purpose LLM can acquire through pre-training alone.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cyan-glow/10">
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">10M+</p>
                        <p className="text-xs text-muted-foreground mt-1">Orders Processed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-purple-glow">1000+</p>
                        <p className="text-xs text-muted-foreground mt-1">Edge Cases Library</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">24/7</p>
                        <p className="text-xs text-muted-foreground mt-1">Continuous Distillation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-5 rounded-lg border border-dashed border-cyan-glow/30 bg-cyan-glow/5 max-w-3xl mx-auto text-center">
                <p className="text-sm text-cyan-glow/90 italic">
                  "This is why Item focuses its core efforts on building business Harness — models can be replaced, but a decade of distilled industry experience cannot be replicated."
                </p>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </section>
  );
}
