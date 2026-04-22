import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Handshake, Target, Rocket, ArrowUpRight } from "lucide-react";

const visions = [
  {
    icon: Handshake,
    titleEn: "Ecosystem Integration",
    titleCn: "生态融合",
    descEn: "Deep ecosystem integration of Item's software stack with Fashion Nova's edge computing hardware and robotics, co-building 'software-defined hardware' solutions.",
    descCn: "将Item的软件栈与Fashion Nova的边缘计算硬件及机器人进行深度生态融合，共建「软件定义硬件」的解决方案。",
  },
  {
    icon: Target,
    titleEn: "Joint Reference Cases",
    titleCn: "联合参考案例",
    descEn: "Starting with Fashion Nova's internal AMR Zone Picking project, jointly refining solutions and validating business value.",
    descCn: "以Fashion Nova内部的AMR Zone Picking项目作为起点，共同打磨联合解决方案并验证商业价值。",
  },
  {
    icon: Rocket,
    titleEn: "External Go-to-Market",
    titleCn: "对外输出",
    descEn: "Beyond serving Fashion Nova's own supply chain upgrades, exporting joint solutions externally to co-build next-gen smart warehouse infrastructure.",
    descCn: "不仅服务于Fashion Nova自身的供应链升级，更要将联合解决方案向外输出，共同构建下一代智能仓库基础设施。",
  },
];

export default function FutureSection() {
  return (
    <section id="future" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl relative z-10">
        <SectionTitle
          number="12"
          title="合作展望"
          titleEn="Collaboration Vision"
          subtitle="与Fashion Nova的联合价值——从内部验证到对外输出的战略路径。"
          subtitleEn="Joint value with Fashion Nova — a strategic path from internal validation to external go-to-market."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {visions.map((v, i) => (
            <AnimatedSection key={v.titleEn} delay={i * 0.15}>
              <GlowCard className="p-6 h-full text-center group">
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-glow/20 transition-colors">
                  <v.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-bold mb-0.5">{v.titleEn}</h3>
                <p className="text-xs text-muted-foreground/50 mb-3">{v.titleCn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.descEn}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed mt-2">{v.descCn}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA / closing statement */}
        <AnimatedSection delay={0.3}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 mb-8">
              <ArrowUpRight className="w-4 h-4 text-cyan-glow" />
              <span className="text-sm font-mono text-cyan-glow">
                Item &times; Fashion Nova = Next-Gen Warehouse Infrastructure
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2">
              As the implementation foundation for all supply chain transformation projects across UNIS Group, Item has validated the complete path from digitalization to Physical AI in production environments. We look forward to partnering with Fashion Nova, deeply integrating this battle-tested AI middleware layer with Fashion Nova's hardware ecosystem, and jointly defining the standard for next-generation smart warehouses.
            </p>
            <p className="text-sm text-muted-foreground/40 leading-relaxed">
              Item 作为 UNIS 集团所有供应链转型项目的实施底座，已经在生产环境中验证了从数字化到物理AI的完整路径。我们期待与Fashion Nova携手，将这套经过实战检验的AI中间件层与Fashion Nova的硬件生态深度融合，共同定义下一代智能仓库的标准。
            </p>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-panel-border/30 text-center">
          <p className="text-xs text-muted-foreground/50 font-mono">
            Item AI Strategy Briefing &mdash; Confidential &mdash; UNIS Group
          </p>
        </div>
      </div>
    </section>
  );
}
