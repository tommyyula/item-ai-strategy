/**
 * Challenges & lessons — a two-beat timeline. Amber marks the pitfall, cyan the
 * turning point; both are token-driven so the section reads in either theme.
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { AlertTriangle, Lightbulb, ArrowDown } from "lucide-react";
import { useT } from "@/i18n/runtime";

export default function JourneySection() {
  const t = useT("deck.journey");

  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <SectionTitle number="07" title={t("title")} subtitle={t("subtitle")} />

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-border to-cyan-glow/60"
          />

          {/* Phase 1: the trap */}
          <AnimatedSection direction="left" className="relative mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="md:text-right md:pr-8">
                <div className="flex items-center gap-3 mb-4 md:justify-end">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-mono text-sm text-amber-600 dark:text-amber-400 tracking-wider">
                    {t("pitfall.tag")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t("pitfall.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("pitfall.body")}</p>
                <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                  {t.list("pitfall.tags").map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
            <div
              aria-hidden
              className="absolute left-6 md:left-1/2 top-1 w-3 h-3 rounded-full bg-amber-500 -translate-x-1.5 ring-4 ring-background"
            />
          </AnimatedSection>

          {/* Arrow */}
          <AnimatedSection className="relative mb-16 flex justify-center" delay={0.2}>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-muted-foreground" aria-hidden />
            </div>
          </AnimatedSection>

          {/* Phase 2: the insight */}
          <AnimatedSection direction="right" className="relative mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="hidden md:block" />
              <div className="md:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-cyan-glow" />
                  <span className="font-mono text-sm text-cyan-glow tracking-wider">
                    {t("insight.tag")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{t("insight.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("insight.body")}</p>

                <div className="mt-6 p-4 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                  <p className="text-sm text-cyan-glow font-medium mb-2">
                    {t("restructure.title")}
                  </p>
                  <p className="text-sm text-muted-foreground">{t("restructure.body")}</p>
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute left-6 md:left-1/2 top-1 w-3 h-3 rounded-full bg-cyan-glow -translate-x-1.5 ring-4 ring-background"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
