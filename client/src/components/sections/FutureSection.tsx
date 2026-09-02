import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Handshake, Target, Rocket, ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n/runtime";

const visions = [
  { key: "ecosystem", icon: Handshake },
  { key: "cases", icon: Target },
  { key: "gtm", icon: Rocket },
];

export default function FutureSection() {
  const t = useT("deck.future");

  return (
    <section id="future" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl relative z-10">
        <SectionTitle number="13" title={t("title")} subtitle={t("subtitle")} align="center" />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {visions.map((v, i) => (
            <AnimatedSection key={v.key} delay={i * 0.15}>
              <GlowCard className="p-6 h-full text-center group">
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-glow/20 transition-colors">
                  <v.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {t(`visions.${v.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`visions.${v.key}.desc`)}
                </p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing statement */}
        <AnimatedSection delay={0.3}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 mb-8">
              <ArrowUpRight className="w-4 h-4 text-cyan-glow" aria-hidden />
              <span className="text-sm font-mono text-cyan-glow">
                Item &times; Fashion Nova = Next-Gen Warehouse Infrastructure
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("closing")}</p>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">{t("footer")}</p>
        </div>
      </div>
    </section>
  );
}
