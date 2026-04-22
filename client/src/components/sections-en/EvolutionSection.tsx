import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";
import { Database, Brain, Bot } from "lucide-react";

const phases = [
  {
    icon: Database,
    phase: "Phase 1",
    title: "数字化",
    titleEn: "Digitalization",
    desc: "全栈SaaS（OMS/WMS/TMS/YMS）+ 数字孪生，让业务变得可被系统理解。",
    descEn: "Full-stack SaaS (OMS/WMS/TMS/YMS) + Digital Twin, making business processes machine-readable.",
    color: "cyan" as const,
  },
  {
    icon: Brain,
    phase: "Phase 2",
    title: "AI Agent",
    titleEn: "AI Agent",
    desc: "智能体编排 + 上下文记忆，让决策变得可被自动执行。",
    descEn: "Agent orchestration + contextual memory, enabling decisions to be automatically executed.",
    color: "purple" as const,
  },
  {
    icon: Bot,
    phase: "Phase 3",
    title: "物理 AI",
    titleEn: "Physical AI",
    desc: "WES/WCS + 各类机器人（AMR、AS/RS、分拣系统）深度整合，智能离开屏幕。",
    descEn: "WES/WCS + robotics (AMR, AS/RS, sorters) deep integration — intelligence leaves the screen.",
    color: "cyan" as const,
  },
];

const metrics = [
  { value: 100000000, suffix: "+", label: "年处理订单量", labelEn: "Annual Orders Processed", prefix: "" },
  { value: 55, suffix: "", label: "统一的传统WMS实例", labelEn: "Legacy WMS Instances Unified", prefix: "" },
  { value: 10, suffix: "M+ sq ft", label: "仓库覆盖面积", labelEn: "Warehouse Coverage", prefix: "" },
];

export default function EvolutionSection() {
  return (
    <section id="evolution" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="02"
          title="AI 演进路径与规模验证"
          titleEn="AI Evolution Path & Scale Validation"
          subtitle="从数字化到物理AI的三阶段演进框架，以及经过生产验证的规模数据。"
          subtitleEn="A three-phase evolution framework from digitalization to Physical AI, backed by production-validated metrics."
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
                <h3 className="text-xl font-bold mb-0.5">{p.titleEn}</h3>
                <p className="text-xs text-muted-foreground/50 mb-3">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.descEn}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed mt-1">{p.desc}</p>
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
                <p className="text-sm text-muted-foreground">{m.labelEn}</p>
                <p className="text-xs text-muted-foreground/40">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
