/**
 * Video showcase — three demo tabs, single-locale copy from `deck.video`.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import { useT } from "@/i18n/runtime";

const tabs = [
  { key: "devScrum", videoId: "hEYO9w0WIas", color: "cyan" as const },
  { key: "multiAgent", videoId: "NmYgyat35Rk", color: "purple" as const },
  { key: "digitalPhysical", videoId: "NMLtgGNog3Q", color: "cyan" as const },
];

export default function VideoShowcaseSection() {
  const t = useT("deck.video");
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];
  const activeLabel = t(`tabs.${active.key}.label`);

  return (
    <section id="video" className="relative py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-glow/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-glow/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle number="03" title={t("title")} subtitle={t("subtitle")} />
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                aria-pressed={activeTab === i}
                className={`relative px-6 py-3 rounded-lg font-mono text-sm tracking-wide transition-all duration-300 border ${
                  activeTab === i
                    ? tab.color === "cyan"
                      ? "border-cyan-glow/60 bg-cyan-glow/15 text-cyan-glow"
                      : "border-purple-glow/60 bg-purple-glow/15 text-purple-glow"
                    : "border-border bg-surface-veil text-muted-foreground hover:border-cyan-glow/40 hover:text-foreground"
                }`}
              >
                {activeTab === i && (
                  <motion.span
                    layoutId="activeTabGlow"
                    aria-hidden
                    className={`absolute -inset-[1px] rounded-lg ${
                      tab.color === "cyan" ? "bg-cyan-glow/10" : "bg-purple-glow/10"
                    } blur-sm`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(`tabs.${tab.key}.label`)}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Video embed */}
        <AnimatedSection delay={0.25}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mx-auto max-w-4xl">
                <div
                  aria-hidden
                  className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${
                    active.color === "cyan"
                      ? "from-cyan-glow/50 via-purple-glow/30 to-cyan-glow/50"
                      : "from-purple-glow/50 via-cyan-glow/30 to-purple-glow/50"
                  } blur-sm`}
                />
                <div className="relative rounded-xl overflow-hidden bg-card border border-border">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${active.videoId}?rel=0&modestbranding=1`}
                      title={activeLabel}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto mt-6 text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`tabs.${active.key}.desc`)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Highlight badges */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow text-sm font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse motion-reduce:animate-none" />
              {t("badges.breakthroughs")}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-glow/30 bg-purple-glow/10 text-purple-glow text-sm font-mono tracking-wide">
              {t("badges.validated")}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow text-sm font-mono tracking-wide">
              {t("badges.closedLoop")}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
