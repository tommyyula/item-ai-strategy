/**
 * Harness — constraints and moat.
 *
 * The hosted `harness-concept-*.webp` is gone. The overview tab now opens with
 * an authored inline SVG that actually states the equation the copy makes:
 * a Model core wrapped by the Harness ring, with feedforward entering and
 * feedback returning. Drawn from theme variables, legible on either ground.
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Shield, TrendingDown, TrendingUp, Zap, Eye, Lock, Repeat } from "lucide-react";
import { useState } from "react";
import { useT } from "@/i18n/runtime";

const TAB_KEYS = ["overview", "architecture", "moat"] as const;
type TabKey = (typeof TAB_KEYS)[number];

function HarnessDiagram({ inLabel, outLabel }: { inLabel: string; outLabel: string }) {
  return (
    <svg
      viewBox="0 0 460 200"
      role="img"
      aria-label="A Model core wrapped by the Harness ring, with feedforward control entering and feedback control returning"
      className="w-full h-auto text-cyan-glow"
    >
      <defs>
        <marker id="harness-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* Harness ring */}
      <circle
        cx="230"
        cy="100"
        r="76"
        fill="color-mix(in oklch, var(--cyan-glow) 8%, transparent)"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="6 5"
      />
      {/* Model core */}
      <circle
        cx="230"
        cy="100"
        r="42"
        fill="color-mix(in oklch, var(--panel-bg) 92%, transparent)"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <text x="230" y="105" textAnchor="middle" fontSize="15" className="font-mono" fill="var(--foreground)">
        Model
      </text>
      <text x="230" y="38" textAnchor="middle" fontSize="12" className="font-mono" fill="currentColor">
        Harness
      </text>

      {/* Feedforward in */}
      <path
        d="M24 74 H140"
        stroke="currentColor"
        strokeWidth="1.6"
        markerEnd="url(#harness-arrow)"
      />
      <text x="24" y="62" fontSize="11" className="font-mono" fill="var(--muted-foreground)">
        {inLabel}
      </text>

      {/* Feedback out */}
      <g color="var(--purple-glow)">
        <path
          d="M306 128 H436"
          stroke="currentColor"
          strokeWidth="1.6"
          markerEnd="url(#harness-arrow)"
        />
      </g>
      <text
        x="436"
        y="116"
        fontSize="11"
        textAnchor="end"
        className="font-mono"
        fill="var(--muted-foreground)"
      >
        {outLabel}
      </text>
    </svg>
  );
}

export default function HarnessSection() {
  const t = useT("deck.harness");
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <section id="harness" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="10" title={t("title")} subtitle={t("subtitle")} />

        {/* Tab navigation */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-secondary/50 w-fit">
            {TAB_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                aria-pressed={activeTab === key}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(`tabs.${key}`)}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab: Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <AnimatedSection>
              <div className="rounded-lg border border-border bg-surface-veil p-6 mb-8 max-w-3xl mx-auto">
                <HarnessDiagram
                  inLabel={t("feedforward.title")}
                  outLabel={t("feedback.title")}
                />
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Generic Harness — deliberately muted */}
              <AnimatedSection direction="left">
                <GlowCard className="p-6 h-full border-l-2 border-l-border">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-lg font-bold text-foreground">{t("generic.title")}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t("generic.body")}
                  </p>
                  <div className="p-3 rounded bg-surface-veil border border-border">
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                      {t("generic.note")}
                    </p>
                  </div>
                </GlowCard>
              </AnimatedSection>

              {/* Business Harness */}
              <AnimatedSection direction="right">
                <GlowCard glowColor="cyan" className="p-6 h-full border-l-2 border-l-cyan-glow/60">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-cyan-glow" />
                    <h3 className="text-lg font-bold text-foreground">{t("business.title")}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t("business.body")}
                  </p>
                  <div className="p-3 rounded bg-cyan-glow/5 border border-cyan-glow/20">
                    <p className="text-xs text-cyan-glow font-mono leading-relaxed">
                      {t("business.note")}
                    </p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="text-center mt-8 p-5 rounded-lg border border-dashed border-purple-glow/30 bg-purple-glow/5 max-w-2xl mx-auto">
                <p className="text-sm text-purple-glow italic">{t("strategy")}</p>
              </div>
            </AnimatedSection>
          </div>
        )}

        {/* Tab: Architecture */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            <AnimatedSection>
              <GlowCard className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-cyan-glow" />
                  <h3 className="text-xl font-bold text-foreground">{t("trust.title")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{t("trust.body")}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold text-sm text-foreground">{t("feedforward.title")}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {t("feedforward.body")}
                    </p>
                    <ul className="space-y-1.5">
                      {t.list("feedforward.items").map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span aria-hidden className="w-1 h-1 rounded-full bg-cyan-glow shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg bg-purple-glow/5 border border-purple-glow/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-4 h-4 text-purple-glow" />
                      <h4 className="font-bold text-sm text-foreground">{t("feedback.title")}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {t("feedback.body")}
                    </p>
                    <ul className="space-y-1.5">
                      {t.list("feedback.items").map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="w-1 h-1 rounded-full bg-purple-glow shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <GlowCard className="p-8">
                <h3 className="text-lg font-bold mb-4 text-foreground">{t("execTypes.title")}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-cyan-glow mb-2">
                      {t("execTypes.deterministic.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("execTypes.deterministic.body")}
                    </p>
                  </div>
                  <div className="p-4 rounded bg-secondary/50">
                    <h4 className="font-mono text-sm text-purple-glow mb-2">
                      {t("execTypes.inference.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("execTypes.inference.body")}
                    </p>
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
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-cyan-glow" />
                  <h3 className="text-xl font-bold text-foreground">{t("moat.title")}</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-5 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="font-bold mb-3 text-foreground">{t("moat.state.title")}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("moat.state.body")}
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Repeat className="w-4 h-4 text-cyan-glow" />
                      <h4 className="font-bold text-foreground">{t("moat.compound.title")}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {t("moat.compound.body")}
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cyan-glow/20">
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">10M+</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {t("moat.compound.stats.orders")}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-purple-glow">1000+</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {t("moat.compound.stats.edgeCases")}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold font-mono text-cyan-glow">24/7</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {t("moat.compound.stats.distillation")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="p-5 rounded-lg border border-dashed border-cyan-glow/30 bg-cyan-glow/5 max-w-3xl mx-auto text-center">
                <p className="text-sm text-cyan-glow italic">“{t("moat.quote")}”</p>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </section>
  );
}
