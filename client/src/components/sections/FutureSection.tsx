import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Handshake, Target, Rocket, ArrowUpRight } from "lucide-react";

const visions = [
  {
    icon: Handshake,
    title: "生态融合",
    desc: "将Item的软件栈与联想的边缘计算硬件及机器人进行深度生态融合，共建「软件定义硬件」的解决方案。",
  },
  {
    icon: Target,
    title: "联合参考案例",
    desc: "以联想内部的AMR Zone Picking项目作为起点，共同打磨联合解决方案并验证商业价值。",
  },
  {
    icon: Rocket,
    title: "对外输出",
    desc: "不仅服务于联想自身的供应链升级，更要将联合解决方案向外输出，共同构建下一代智能仓库基础设施。",
  },
];

export default function FutureSection() {
  return (
    <section id="future" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl relative z-10">
        <SectionTitle
          number="10"
          title="合作展望"
          subtitle="与联想的联合价值——从内部验证到对外输出的战略路径。"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {visions.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <GlowCard className="p-6 h-full text-center group">
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-glow/20 transition-colors">
                  <v.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
                Item &times; Lenovo = Next-Gen Warehouse Infrastructure
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Item 作为 UNIS 集团所有供应链转型项目的实施底座，已经在生产环境中验证了从数字化到物理AI的完整路径。我们期待与联想携手，将这套经过实战检验的AI中间件层与联想的硬件生态深度融合，共同定义下一代智能仓库的标准。
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
