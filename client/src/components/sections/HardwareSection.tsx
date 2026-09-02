import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Cpu, Cloud, Wifi, HardDrive, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/runtime";

const currentHW = [
  { key: "cloudGpu", icon: Cloud },
  { key: "kafka", icon: HardDrive },
  { key: "edge", icon: Cpu },
];

/** Hardware designations are product vocabulary and stay unlocalised. */
const futureNeeds = [
  { key: "chips", icon: Cpu, spec: "NPU / LPU", color: "cyan" as const },
  { key: "clusters", icon: Cloud, spec: "A100 / H100 / Domestic Alternatives", color: "purple" as const },
  { key: "network", icon: Wifi, spec: "5.5G / Wi-Fi 8 / UWB / Fiber", color: "cyan" as const },
];

export default function HardwareSection() {
  const t = useT("deck.hardware");

  return (
    <section id="hardware" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="12" title={t("title")} subtitle={t("subtitle")} />

        {/* Current hardware */}
        <AnimatedSection className="mb-12">
          <GlowCard className="p-6">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-5">
              {t("current.eyebrow")}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {currentHW.map((hw) => (
                <div
                  key={hw.key}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center shrink-0">
                    <hw.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {t(`current.items.${hw.key}.label`)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t(`current.items.${hw.key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>

        {/* Transition */}
        <AnimatedSection className="flex justify-center mb-12">
          <div className="flex items-center gap-3">
            <div
              aria-hidden
              className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-glow/40"
            />
            <ArrowRight className="w-5 h-5 text-cyan-glow" aria-hidden />
            <span className="text-xs font-mono text-cyan-glow tracking-wider uppercase">
              {t("expansion")}
            </span>
            <ArrowRight className="w-5 h-5 text-cyan-glow" aria-hidden />
            <div
              aria-hidden
              className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-glow/40"
            />
          </div>
        </AnimatedSection>

        {/* Future needs */}
        <div className="grid md:grid-cols-3 gap-6">
          {futureNeeds.map((need, i) => (
            <AnimatedSection key={need.key} delay={i * 0.15}>
              <GlowCard glowColor={need.color} className="p-6 h-full">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    need.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-purple-glow/10 text-purple-glow"
                  }`}
                >
                  <need.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-foreground">
                  {t(`needs.${need.key}.title`)}
                </h3>
                <p className="text-xs font-mono text-cyan-glow mb-3">{need.spec}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`needs.${need.key}.desc`)}
                </p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
