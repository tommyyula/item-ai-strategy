/**
 * Design: Deep Space Command — Harness Section
 * No red/destructive colors — Generic Harness uses muted slate/gray tones
 * Business Harness uses cyan, Architecture uses cyan/purple
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Shield, TrendingDown, TrendingUp, Zap, Eye, Lock, Repeat } from "lucide-react";
import { useState } from "react";

const HARNESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/harness-concept-ZdjYjFYYBEhLzy6XedAGKQ.webp";

const tabs = [
  { id: "overview", label: "Core Distinction 核心分野" },
  { id: "architecture", label: "Architecture 架构与分类" },
  { id: "moat", label: "Moat Effect 护城河效应" },
];

export default function HarnessSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="harness" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="09"
          title="Harness：AI的约束与护城河"
          titleEn="Harness: Constraints & Moat for AI"
          subtitle="Agent = Model + Harness。Harness是包围在模型外围，用于引导、约束和验证AI输出的结构化软件环境。"
          subtitleEn="Agent = Model + Harness. Harness is the structured software environment surrounding the model, designed to guide, constrain, and validate AI outputs."
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
                  <p className="text-xs text-slate-400/60 mb-4">通用 Harness</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    Infrastructure-level capabilities: sandbox isolation, credential management, crash recovery, context management, MCP protocol, etc.
                  </p>
                  <p className="text-xs text-muted-foreground/40 leading-relaxed mb-4">
                    沙盒隔离、凭证管理、崩溃恢复、上下文管理、MCP协议等基础设施级能力。
                  </p>
                  <div className="p-3 rounded bg-slate-400/5 border border-slate-400/15">
                    <p className="text-xs text-slate-400 font-mono">
                      Depreciates with model upgrades — belongs to model vendors' territory, gradually becoming commoditized infrastructure
                    </p>
                    <p className="text-[10px] text-slate-400/50 mt-1">
                      随模型升级而贬值 — 属于模型原厂领地，像水电煤一样会逐渐基础设施化
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
                  <p className="text-xs text-cyan-glow/50 mb-4">业务 Harness</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    Domain dark knowledge, compliance red lines, vertical SOPs, organizational taste, and experience distillation flywheel.
                  </p>
                  <p className="text-xs text-muted-foreground/40 leading-relaxed mb-4">
                    行业暗知识、合规红线、垂直领域SOP、组织品味、经验蒸馏飞轮。
                  </p>
                  <div className="p-3 rounded bg-cyan-glow/5 border border-cyan-glow/15">
                    <p className="text-xs text-cyan-glow font-mono">
                      Appreciates with model upgrades — the exclusive territory of enterprises and practitioners, forming the true moat
                    </p>
                    <p className="text-[10px] text-cyan-glow/50 mt-1">
                      随模型升级而增值 — 企业和从业者的专属领地，构成真正的护城河
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
                <p className="text-xs text-purple-glow/50 mt-2">
                  Item的战略重心在于构建深厚的「业务Harness」，确保平台价值不会被更强的大模型取代，反而因底层模型变强而产生复利增值。
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
                <p className="text-sm text-muted-foreground/50 mb-6">Harness工程的信任屏障</p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  For non-deterministic AI outputs, Harness provides essential feedforward and feedback controls, establishing a complete trust barrier system.
                </p>
                <p className="text-sm text-muted-foreground/40 leading-relaxed mb-8">
                  对于AI生成的非确定性结果，Harness提供了必要的前馈控制和反馈控制，构建起完整的信任屏障体系。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold text-sm">Feedforward / Guides</h4>
                    </div>
                    <p className="text-[10px] text-cyan-glow/40 mb-3">前馈控制</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      Constrain <strong className="text-foreground">before</strong> Agent action to improve first-pass success rate.
                    </p>
                    <p className="text-xs text-muted-foreground/40 mb-3">
                      在Agent行动前进行约束，提高首次成功率。
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        { en: "Domain rule injection", zh: "领域规则注入" },
                        { en: "SOP guidance templates", zh: "SOP指引模板" },
                        { en: "Context boundary setting", zh: "上下文边界设定" },
                        { en: "Input format validation", zh: "输入格式校验" },
                      ].map((item) => (
                        <li key={item.en} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-cyan-glow" />
                          {item.en} <span className="text-muted-foreground/30">{item.zh}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg bg-purple-glow/5 border border-purple-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className="w-4 h-4 text-purple-glow" />
                      <h4 className="font-bold text-sm">Feedback / Sensors</h4>
                    </div>
                    <p className="text-[10px] text-purple-glow/40 mb-3">反馈控制</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      Validate <strong className="text-foreground">after</strong> Agent action, enabling self-correction capability.
                    </p>
                    <p className="text-xs text-muted-foreground/40 mb-3">
                      在Agent行动后进行验证，赋予自我纠错能力。
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        { en: "Structured test validation", zh: "结构化测试验证" },
                        { en: "Logic review loop", zh: "逻辑审查回路" },
                        { en: "LLM-as-Judge semantic validation", zh: "LLM-as-Judge语义验证" },
                        { en: "Compliance red-line check", zh: "合规红线检查" },
                      ].map((item) => (
                        <li key={item.en} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-purple-glow" />
                          {item.en} <span className="text-muted-foreground/30">{item.zh}</span>
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
                <p className="text-xs text-muted-foreground/50 mb-4">执行类型分类</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-cyan-glow mb-1">Deterministic Computational Control</h4>
                    <p className="text-[10px] text-cyan-glow/40 mb-2">确定性计算控制</p>
                    <p className="text-sm text-muted-foreground">API contract validation, linting, type checking, data format verification — precisely determinable rules.</p>
                    <p className="text-xs text-muted-foreground/40 mt-1">API契约校验、Linting、类型检查、数据格式验证等可精确判定的规则。</p>
                  </div>
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-purple-glow mb-1">Inference Control</h4>
                    <p className="text-[10px] text-purple-glow/40 mb-2">推理控制</p>
                    <p className="text-sm text-muted-foreground">LLM-as-Judge for semantic validation, intent consistency checks, and business logic reasonability assessment.</p>
                    <p className="text-xs text-muted-foreground/40 mt-1">LLM作为裁判进行语义验证、意图一致性检查、业务逻辑合理性评估。</p>
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
                <p className="text-sm text-muted-foreground/50 mb-6">业务Harness的构建与演进</p>

                <div className="space-y-6">
                  <div className="p-5 rounded-lg bg-secondary/30 border border-panel-border/30">
                    <h4 className="font-bold mb-1">State & Identity Governance</h4>
                    <p className="text-xs text-muted-foreground/50 mb-3">状态与身份的治理</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Generic Harness cannot handle complex enterprise authentication and business state rollback. Our Business Harness encapsulates complex warehouse logic (inventory locking, dock scheduling, wave management) in secure sandboxes, ensuring every operation is traceable and reversible.
                    </p>
                    <p className="text-xs text-muted-foreground/40 leading-relaxed mt-2">
                      通用Harness无法解决复杂的企业身份验证和业务状态回滚。我们的业务Harness将复杂的仓储逻辑（如库存锁定、月台调度、波次管理）封装在安全的沙盒中，确保每一步操作都可追溯、可回滚。
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Repeat className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold">The Compound Interest Effect of the Moat</h4>
                    </div>
                    <p className="text-xs text-cyan-glow/40 mb-3">护城河的复利效应</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      A Business Harness that has processed ten million invoices or orders accumulates "calibration depth" and "edge case handling capability" that no general-purpose LLM can acquire through pre-training alone.
                    </p>
                    <p className="text-xs text-muted-foreground/40 leading-relaxed mb-4">
                      一个处理过一千万张发票或一千万个订单的业务Harness，其积累的「校准深度」和「边缘案例处理能力」是任何通用大模型都无法通过预训练获得的。
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cyan-glow/10">
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">10M+</p>
                        <p className="text-xs text-muted-foreground mt-1">Orders Processed</p>
                        <p className="text-[10px] text-muted-foreground/40">处理过的订单</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-purple-glow">1000+</p>
                        <p className="text-xs text-muted-foreground mt-1">Edge Cases Library</p>
                        <p className="text-[10px] text-muted-foreground/40">边缘案例库</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">24/7</p>
                        <p className="text-xs text-muted-foreground mt-1">Continuous Distillation</p>
                        <p className="text-[10px] text-muted-foreground/40">持续蒸馏学习</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-5 rounded-lg border border-dashed border-cyan-glow/30 bg-cyan-glow/5 max-w-3xl mx-auto text-center">
                <p className="text-sm text-cyan-glow/90 italic">
                  "This is why Item invests its core efforts in building Business Harness — models can be replaced, but a decade of distilled industry experience cannot be replicated."
                </p>
                <p className="text-xs text-cyan-glow/50 mt-2">
                  "这就是为什么Item坚持将核心精力投入到业务Harness的建设中——模型可以被替换，但十年的行业经验蒸馏无法被复制。"
                </p>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </section>
  );
}
