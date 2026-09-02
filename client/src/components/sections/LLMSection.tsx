import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Globe, Server, Layers, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/runtime";

/** Model names are product names and stay unlocalised. */
const usModels = [
  { key: "gpt4o", name: "OpenAI GPT-4o" },
  { key: "claude", name: "Claude" },
  { key: "gemini", name: "Gemini" },
];

const cnModels = [
  { key: "qwen", name: "Qwen" },
  { key: "deepseek", name: "DeepSeek" },
  { key: "oss", name: "Fine-tuned OSS" },
];

const futureModels = [
  { key: "lmms", abbr: "LMMs" },
  { key: "lvms", abbr: "LVMs" },
  { key: "lpms", abbr: "LPMs" },
];

export default function LLMSection() {
  const t = useT("deck.llm");

  return (
    <section id="llm" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="11" title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* US frontier models */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-cyan-glow" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t("us.title")}</h3>
                  <p className="text-xs text-muted-foreground">{t("us.sub")}</p>
                </div>
              </div>
              <div className="space-y-3">
                {usModels.map((m) => (
                  <div
                    key={m.key}
                    className="p-3 rounded bg-secondary/40 flex items-center justify-between gap-3"
                  >
                    <span className="text-sm font-medium text-foreground">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono text-right">
                      {t(`us.models.${m.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* China open-source / local models */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-glow/10 flex items-center justify-center shrink-0">
                  <Server className="w-5 h-5 text-purple-glow" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t("cn.title")}</h3>
                  <p className="text-xs text-muted-foreground">{t("cn.sub")}</p>
                </div>
              </div>
              <div className="space-y-3">
                {cnModels.map((m) => (
                  <div
                    key={m.key}
                    className="p-3 rounded bg-secondary/40 flex items-center justify-between gap-3"
                  >
                    <span className="text-sm font-medium text-foreground">{m.name}</span>
                    <span className="text-xs text-muted-foreground font-mono text-right">
                      {t(`cn.models.${m.key}`)}
                    </span>
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
              <h3 className="font-bold text-foreground">{t("future.title")}</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {futureModels.map((m) => (
                <div
                  key={m.key}
                  className="p-4 rounded-lg bg-secondary/30 border border-border text-center"
                >
                  <p className="text-lg font-bold font-mono text-cyan-glow mb-1">{m.abbr}</p>
                  <p className="text-sm font-medium mb-2 text-foreground">
                    {t(`future.${m.key}.name`)}
                  </p>
                  <p className="text-xs text-muted-foreground">{t(`future.${m.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
