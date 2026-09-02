import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";
import { Database, Brain, Bot } from "lucide-react";
import { useT } from "@/i18n/runtime";

const phases = [
  { key: "digital", icon: Database, phase: "Phase 1", color: "cyan" as const },
  { key: "agent", icon: Brain, phase: "Phase 2", color: "purple" as const },
  { key: "physical", icon: Bot, phase: "Phase 3", color: "cyan" as const },
];

const metrics = [
  { key: "orders", value: 100000000, suffix: "+" },
  { key: "wms", value: 55, suffix: "" },
  { key: "coverage", value: 10, suffix: "M+ sq ft" },
];

export default function EvolutionSection() {
  const t = useT("deck.evolution");

  return (
    <section id="evolution" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="02" title={t("title")} subtitle={t("subtitle")} />

        {/* Three phases */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {phases.map((p, i) => (
            <AnimatedSection key={p.key} delay={i * 0.15}>
              <GlowCard glowColor={p.color} className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      p.color === "cyan"
                        ? "bg-cyan-glow/10 text-cyan-glow"
                        : "bg-purple-glow/10 text-purple-glow"
                    }`}
                  >
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                    {p.phase}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {t(`phases.${p.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`phases.${p.key}.desc`)}
                </p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Metrics */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div key={m.key} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-mono glow-text-cyan text-cyan-glow mb-2">
                  <CountUp end={m.value} suffix={m.suffix} duration={2.5} />
                </div>
                <p className="text-sm text-muted-foreground">{t(`metrics.${m.key}`)}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
