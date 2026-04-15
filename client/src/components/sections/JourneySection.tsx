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
          titleEn="Challenges & Lessons Learned"
          subtitle="坦诚分享踩过的坑和认知转变——从迷信大模型到重构架构的觉醒之路。"
          subtitleEn="An honest account of pitfalls and cognitive shifts — the awakening journey from blind faith in LLMs to architectural restructuring."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-destructive/60 via-muted-foreground/20 to-cyan-glow/60" />

          {/* Phase 1: The Trap */}
          <AnimatedSection direction="left" className="relative mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="md:text-right md:pr-8">
                <div className="flex items-center gap-3 mb-1 md:justify-end">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-mono text-sm text-destructive tracking-wider">Early Pitfall</span>
                </div>
                <p className="text-xs text-destructive/40 mb-4 md:text-right">早期陷阱</p>
                <h3 className="text-2xl font-bold mb-1">Over-reliance on LLM "General Capabilities"</h3>
                <p className="text-sm text-muted-foreground/50 mb-4">迷信大模型的「通用能力」</p>
                <p className="text-muted-foreground leading-relaxed">
                  We attempted to solve all complex business problems purely through Prompt Engineering. This led to severe hallucination issues, unreliable execution, and a complete inability to handle enterprise compliance red lines and SOP requirements.
                </p>
                <p className="text-sm text-muted-foreground/40 leading-relaxed mt-2">
                  我们曾试图单纯通过Prompt Engineering来解决所有复杂的业务问题。这种做法导致了严重的幻觉问题，系统执行不可靠，且完全无法应对复杂的企业合规红线和SOP要求。
                </p>
                <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                  {[
                    "Hallucination",
                    "Unreliable Execution",
                    "Compliance Failure",
                  ].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
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
                <div className="flex items-center gap-3 mb-1">
                  <Lightbulb className="w-5 h-5 text-cyan-glow" />
                  <span className="font-mono text-sm text-cyan-glow tracking-wider">Cognitive Turning Point</span>
                </div>
                <p className="text-xs text-cyan-glow/40 mb-4">认知转折</p>
                <h3 className="text-2xl font-bold mb-1">Foundation Models Are Not the Moat</h3>
                <p className="text-sm text-muted-foreground/50 mb-4">基础模型不是护城河</p>
                <p className="text-muted-foreground leading-relaxed">
                  We realized that as models rapidly iterate and go open-source, general capabilities quickly commoditize. The true moat lies in <strong className="text-foreground">Business Harness</strong> and <strong className="text-foreground">Ontology</strong>.
                </p>
                <p className="text-sm text-muted-foreground/40 leading-relaxed mt-2">
                  我们意识到，随着模型的快速迭代和开源，通用能力会迅速商品化甚至贬值。真正的护城河在于<strong className="text-foreground/60">业务Harness</strong>和<strong className="text-foreground/60">本体知识库（Ontology）</strong>。
                </p>
                <div className="mt-6 p-4 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                  <p className="text-sm text-cyan-glow font-medium mb-1">Architecture Restructuring Direction</p>
                  <p className="text-xs text-cyan-glow/40 mb-2">架构重构方向</p>
                  <p className="text-sm text-muted-foreground">
                    Fully decouple the brain (LLM) from the hands (execution tools), pivoting entirely toward building robust Business Harness and Ontology knowledge bases.
                  </p>
                  <p className="text-xs text-muted-foreground/40 mt-1">
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
