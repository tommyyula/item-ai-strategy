import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";

const ONTOLOGY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/ontology-graph-ivkiih3h7v7GhQdxQ4RPkg.webp";

export default function OntologySection() {
  return (
    <section id="ontology" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="06"
          title="Ontology：企业AI的语义骨干"
          titleEn="Ontology: The Semantic Backbone of Enterprise AI"
          subtitle="通用大模型不懂企业的「行业暗知识」和「SOP」。没有Ontology，AI Agent无法在企业级场景中做到准确和行为一致。"
          subtitleEn="General-purpose LLMs don't understand enterprise 'domain dark knowledge' or SOPs. Without Ontology, AI Agents cannot achieve accuracy and behavioral consistency in enterprise scenarios."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image + concept */}
          <AnimatedSection direction="left">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img
                src={ONTOLOGY_IMG}
                alt="Ontology Knowledge Graph"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-mono text-cyan-glow">
                  Layer 2 · Neo4j GraphRAG · 企业大脑 Enterprise Brain
                </p>
              </div>
            </div>
            <GlowCard className="p-5">
              <h4 className="font-bold mb-1">什么是Ontology？</h4>
              <p className="text-xs text-muted-foreground/50 italic mb-2">What is Ontology?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ontology不仅仅是知识图谱。它是特定领域的<strong className="text-foreground">结构化框架</strong>、<strong className="text-foreground">实体模型</strong>和<strong className="text-foreground">语义骨干</strong>。它定义了领域内所有概念之间的关系、约束和推理规则，让AI Agent能够像领域专家一样思考和行动。
              </p>
              <p className="text-xs text-muted-foreground/40 leading-relaxed italic mt-2">
                Ontology is more than a knowledge graph. It is a domain-specific <strong className="text-foreground/60">structural framework</strong>, <strong className="text-foreground/60">entity model</strong>, and <strong className="text-foreground/60">semantic backbone</strong>. It defines relationships, constraints, and reasoning rules among all concepts within a domain, enabling AI Agents to think and act like domain experts.
              </p>
            </GlowCard>
          </AnimatedSection>

          {/* Right: Metrics + details */}
          <div className="space-y-6">
            <AnimatedSection direction="right" delay={0.1}>
              <GlowCard className="p-6">
                <p className="text-xs font-mono text-cyan-glow/60 tracking-widest uppercase mb-1">
                  构建成果
                </p>
                <p className="text-[10px] font-mono text-cyan-glow/30 tracking-widest uppercase italic mb-4">
                  Construction Results
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={2} suffix=" 天" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">构建时间</p>
                    <p className="text-[10px] text-muted-foreground/40 italic">Build Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={630} suffix=" 次" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">自主研究迭代</p>
                    <p className="text-[10px] text-muted-foreground/40 italic">Research Iterations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={98} suffix="%" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">领域知识覆盖</p>
                    <p className="text-[10px] text-muted-foreground/40 italic">Domain Coverage</p>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <GlowCard glowColor="purple" className="p-6">
                <h4 className="font-bold mb-1">为什么Ontology是决定性的？</h4>
                <p className="text-xs text-muted-foreground/50 italic mb-3">Why is Ontology Decisive?</p>
                <ul className="space-y-3">
                  {[
                    { zh: "将55个独立WMS实例统一到一个语义架构中", en: "Unifying 55 independent WMS instances into a single semantic architecture" },
                    { zh: "让AI Agent理解「SKU」「月台」「波次」等领域概念的真实含义", en: "Enabling AI Agents to understand the real meaning of domain concepts like SKU, Dock, and Wave" },
                    { zh: "为Harness提供验证基准——Agent的输出必须符合Ontology定义的约束", en: "Providing validation benchmarks for Harness — Agent outputs must conform to Ontology-defined constraints" },
                    { zh: "将Agent从「玩具」转化为「生产力工具」的秘密武器", en: "The secret weapon for transforming Agents from 'toys' into 'productivity tools'" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-glow mt-2 shrink-0" />
                      <div>
                        <span>{item.zh}</span>
                        <p className="text-xs text-muted-foreground/40 italic mt-0.5">{item.en}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="p-4 rounded-lg border border-dashed border-cyan-glow/30 bg-cyan-glow/5">
                <p className="text-sm text-cyan-glow/80 italic">
                  "Ontology是让AI从通用智能走向专业智能的桥梁。没有它，大模型只是一个聪明但无知的外来者。"
                </p>
                <p className="text-xs text-cyan-glow/40 italic mt-2">
                  "Ontology is the bridge from general intelligence to domain expertise. Without it, LLMs are merely clever but ignorant outsiders."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
