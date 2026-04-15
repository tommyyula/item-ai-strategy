import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { AlertTriangle, Lightbulb, ArrowDown } from "lucide-react";

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <SectionTitle
          number="05"
          title="问题与心路历程"
          subtitle="坦诚分享踩过的坑和认知转变——从迷信大模型到重构架构的觉醒之路。"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-destructive/60 via-muted-foreground/20 to-cyan-glow/60" />

          {/* Phase 1: The Trap */}
          <AnimatedSection direction="left" className="relative mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="md:text-right md:pr-8">
                <div className="flex items-center gap-3 mb-4 md:justify-end">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-mono text-sm text-destructive tracking-wider">早期陷阱</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">迷信大模型的「通用能力」</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我们曾试图单纯通过Prompt Engineering来解决所有复杂的业务问题。这种做法导致了严重的幻觉问题，系统执行不可靠，且完全无法应对复杂的企业合规红线和SOP要求。
                </p>
                <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                  {["幻觉问题", "执行不可靠", "合规失控"].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 top-1 w-3 h-3 rounded-full bg-destructive -translate-x-1.5 ring-4 ring-background" />
          </AnimatedSection>

          {/* Arrow */}
          <AnimatedSection className="relative mb-16 flex justify-center" delay={0.2}>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>
          </AnimatedSection>

          {/* Phase 2: The Insight */}
          <AnimatedSection direction="right" className="relative mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="hidden md:block" />
              <div className="md:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-cyan-glow" />
                  <span className="font-mono text-sm text-cyan-glow tracking-wider">认知转折</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">基础模型不是护城河</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我们意识到，随着模型的快速迭代和开源，通用能力会迅速商品化甚至贬值。真正的护城河在于<strong className="text-foreground">业务Harness</strong>和<strong className="text-foreground">本体知识库（Ontology）</strong>。
                </p>
                <div className="mt-6 p-4 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                  <p className="text-sm text-cyan-glow font-medium mb-2">架构重构方向</p>
                  <p className="text-sm text-muted-foreground">
                    把大脑（大模型）与手脚（执行工具）彻底解耦，全面转向构建强大的「业务Harness」和「Ontology知识库」。
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute left-6 md:left-1/2 top-1 w-3 h-3 rounded-full bg-cyan-glow -translate-x-1.5 ring-4 ring-background" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
