import SectionTitleEn from "./SectionTitleEn";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";
import { Database, Brain, Bot } from "lucide-react";

const phases = [
  {
    icon: Database,
    phase: "Phase 1",
    title: "Digitalization",
    desc: "Full-stack SaaS (OMS/WMS/TMS/YMS) + Digital Twin, making business processes machine-readable.",
    color: "cyan" as const,
  },
  {
    icon: Brain,
    phase: "Phase 2",
    title: "AI Agent",
    desc: "Agent orchestration + contextual memory, enabling decisions to be automatically executed.",
    color: "purple" as const,
  },
  {
    icon: Bot,
    phase: "Phase 3",
    title: "Physical AI",
    desc: "WES/WCS + robotics (AMR, AS/RS, sorters) deep integration — intelligence leaves the screen.",
    color: "cyan" as const,
  },
];

const metrics = [
  { value: 100000000, suffix: "+", label: "Annual Orders Processed", prefix: "" },
  { value: 55, suffix: "", label: "Legacy WMS Instances Unified", prefix: "" },
  { value: 10, suffix: "M+ sq ft", label: "Warehouse Coverage", prefix: "" },
];

export default function EvolutionSection() {
  return (
    <section id="evolution" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="02"
          title="AI Evolution Path & Scale Validation"
          subtitle="A three-phase evolution framework from digitalization to Physical AI, backed by production-validated metrics."
        />

        {/* Three phases */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {phases.map((p, i) => (
            <AnimatedSection key={p.phase} delay={i * 0.15}>
              <GlowCard glowColor={p.color} className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    p.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-purple-glow/10 text-purple-glow"
                  }`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                    {p.phase}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Metrics */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-mono glow-text-cyan text-cyan-glow mb-2">
                  <CountUp end={m.value} suffix={m.suffix} prefix={m.prefix} duration={2.5} />
                </div>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
