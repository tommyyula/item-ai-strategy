import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Globe, Server, Layers, ArrowRight } from "lucide-react";

const usModels = [
  { name: "OpenAI GPT-4o", use: "复杂推理 / Agentic Workflow" },
  { name: "Claude", use: "长文本分析 / 代码生成" },
  { name: "Gemini", use: "多模态理解 / 视频分析" },
];

const cnModels = [
  { name: "Qwen", use: "本地化部署 / 中文理解" },
  { name: "DeepSeek", use: "成本敏感场景 / 推理" },
  { name: "开源微调模型", use: "垂直领域专用" },
];

const futureModels = [
  { abbr: "LMMs", name: "大多模态模型", desc: "文本+图像+音频的统一理解" },
  { abbr: "LVMs", name: "大视觉模型", desc: "视觉监控 / 视频质检 / 打包台QC" },
  { abbr: "LPMs", name: "大物理模型", desc: "机器人控制 / 物理世界交互" },
];

export default function LLMSection() {
  return (
    <section id="llm" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="08"
          title="大模型选型策略"
          subtitle="务实的混合路由策略（Hybrid Router），不绑定单一模型——与联想「Hybrid AI」理念高度一致。"
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
                  <h3 className="font-bold">美国头部大模型</h3>
                  <p className="text-xs text-muted-foreground">高复杂度推理 / 代码生成</p>
                </div>
              </div>
              <div className="space-y-3">
                {usModels.map((m) => (
                  <div key={m.name} className="flex items-center justify-between p-3 rounded bg-secondary/40">
                    <span className="text-sm font-medium">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{m.use}</span>
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
                  <h3 className="font-bold">中国开源/本土模型</h3>
                  <p className="text-xs text-muted-foreground">隐私 / 本地化 / 成本敏感</p>
                </div>
              </div>
              <div className="space-y-3">
                {cnModels.map((m) => (
                  <div key={m.name} className="flex items-center justify-between p-3 rounded bg-secondary/40">
                    <span className="text-sm font-medium">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">{m.use}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>

        {/* Future expansion */}
        <AnimatedSection delay={0.2}>
          <GlowCard className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-cyan-glow" />
              <h3 className="font-bold">未来扩展方向：从LLM到多模态</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {futureModels.map((m) => (
                <div key={m.abbr} className="p-4 rounded-lg bg-secondary/30 border border-panel-border/30 text-center">
                  <p className="text-lg font-bold font-mono text-cyan-glow mb-1">{m.abbr}</p>
                  <p className="text-sm font-medium mb-2">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
