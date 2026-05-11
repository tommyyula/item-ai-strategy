import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Globe, Server, Layers, ArrowRight } from "lucide-react";

const usModels = [
  { name: "OpenAI GPT-4o", useEn: "Complex Reasoning / Agentic Workflow", useCn: "复杂推理 / Agentic Workflow" },
  { name: "Claude", useEn: "Long-text Analysis / Code Generation", useCn: "长文本分析 / 代码生成" },
  { name: "Gemini", useEn: "Multimodal Understanding / Video Analysis", useCn: "多模态理解 / 视频分析" },
];

const cnModels = [
  { name: "Qwen", useEn: "Local Deployment / Chinese NLU", useCn: "本地化部署 / 中文理解" },
  { name: "DeepSeek", useEn: "Cost-sensitive Scenarios / Reasoning", useCn: "成本敏感场景 / 推理" },
  { name: "Fine-tuned OSS", useEn: "Vertical Domain Specific", useCn: "垂直领域专用" },
];

const futureModels = [
  { abbr: "LMMs", nameEn: "Large Multimodal Models", nameCn: "大多模态模型", descEn: "Unified understanding of text + image + audio", descCn: "文本+图像+音频的统一理解" },
  { abbr: "LVMs", nameEn: "Large Vision Models", nameCn: "大视觉模型", descEn: "Visual monitoring / Video QC / Packing station QC", descCn: "视觉监控 / 视频质检 / 打包台QC" },
  { abbr: "LPMs", nameEn: "Large Physical Models", nameCn: "大物理模型", descEn: "Robot control / Physical world interaction", descCn: "机器人控制 / 物理世界交互" },
];

export default function LLMSection() {
  return (
    <section id="llm" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="10"
          title="大模型选型策略"
          titleEn="LLM Selection Strategy"
          subtitle="务实的混合路由策略（Hybrid Router），不绑定单一模型——与Fashion Nova「Hybrid AI」理念高度一致。"
          subtitleEn="A pragmatic Hybrid Router strategy, not locked to any single model — highly aligned with Fashion Nova's 'Hybrid AI' philosophy."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* US Models */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <h3 className="font-bold">US Frontier Models</h3>
                  <p className="text-xs text-muted-foreground">High-complexity Reasoning / Code Gen</p>
                  <p className="text-[10px] text-muted-foreground/65">美国头部大模型 — 高复杂度推理 / 代码生成</p>
                </div>
              </div>
              <div className="space-y-3">
                {usModels.map((m) => (
                  <div key={m.name} className="p-3 rounded bg-secondary/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{m.useEn}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/65 text-right mt-0.5">{m.useCn}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* CN Models */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-glow/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-purple-glow" />
                </div>
                <div>
                  <h3 className="font-bold">China Open-source / Local Models</h3>
                  <p className="text-xs text-muted-foreground">Privacy / Localization / Cost</p>
                  <p className="text-[10px] text-muted-foreground/65">中国开源/本土模型 — 隐私 / 本地化 / 成本敏感</p>
                </div>
              </div>
              <div className="space-y-3">
                {cnModels.map((m) => (
                  <div key={m.name} className="p-3 rounded bg-secondary/40">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{m.useEn}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/65 text-right mt-0.5">{m.useCn}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Future expansion */}
        <AnimatedSection delay={0.2}>
          <GlowCard className="p-6">
            <div className="flex items-center gap-3 mb-1">
              <Layers className="w-5 h-5 text-cyan-glow" />
              <h3 className="font-bold">Future Expansion: From LLM to Multimodal</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground/75 mb-6 ml-8">未来扩展方向：从LLM到多模态</p>
            <div className="grid md:grid-cols-3 gap-4">
              {futureModels.map((m) => (
                <div key={m.abbr} className="p-4 rounded-lg bg-secondary/30 border border-panel-border/30 text-center">
                  <p className="text-lg font-bold font-mono text-cyan-glow mb-1">{m.abbr}</p>
                  <p className="text-sm font-medium mb-0.5">{m.nameEn}</p>
                  <p className="text-[10px] text-muted-foreground/65 mb-2">{m.nameCn}</p>
                  <p className="text-xs text-muted-foreground">{m.descEn}</p>
                  <p className="text-[10px] text-muted-foreground/65 mt-0.5">{m.descCn}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
