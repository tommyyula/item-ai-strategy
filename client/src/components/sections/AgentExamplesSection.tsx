/**
 * Four further agent applications, each linking out to a demo video.
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Play, UserSearch, Eye, PenTool, Network } from "lucide-react";
import { useT } from "@/i18n/runtime";

const examples = [
  { key: "recruit", icon: UserSearch, videoId: "RAI1Vzoduvw", color: "cyan" as const },
  { key: "monitoring", icon: Eye, videoId: "0R8umQdRDFE", color: "purple" as const },
  { key: "content", icon: PenTool, videoId: "WOAr3NfU-QY", color: "cyan" as const },
  { key: "factory", icon: Network, videoId: "l0Iya3yYmmc", color: "purple" as const },
];

export default function AgentExamplesSection() {
  const t = useT("deck.agentExamples");

  return (
    <section id="agent-examples" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="05" title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((ex, i) => {
            const title = t(`items.${ex.key}.title`);
            return (
              <AnimatedSection key={ex.key} delay={i * 0.12}>
                <GlowCard glowColor={ex.color} className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        ex.color === "cyan"
                          ? "bg-cyan-glow/10 text-cyan-glow"
                          : "bg-purple-glow/10 text-purple-glow"
                      }`}
                    >
                      <ex.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(`items.${ex.key}.desc`)}
                  </p>

                  <a
                    href={`https://youtu.be/${ex.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} — ${t("watch")}`}
                    className="group relative block rounded-lg overflow-hidden border border-border hover:border-cyan-glow/40 transition-colors mt-auto"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${ex.videoId}/mqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="w-full h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`w-12 h-12 rounded-full bg-background/70 border border-border flex items-center justify-center transition-all ${
                          ex.color === "cyan"
                            ? "group-hover:bg-cyan-glow/30 group-hover:border-cyan-glow/40"
                            : "group-hover:bg-purple-glow/30 group-hover:border-purple-glow/40"
                        }`}
                      >
                        <Play className="w-5 h-5 text-foreground ml-0.5" />
                      </span>
                    </span>
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono text-foreground bg-background/70 px-2 py-0.5 rounded">
                      {t("watch")}
                    </span>
                  </a>
                </GlowCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
