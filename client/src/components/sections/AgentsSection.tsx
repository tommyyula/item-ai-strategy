/**
 * Office automation agents — three cards with linked demo videos.
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Headphones, User, Truck, ArrowRight, Play } from "lucide-react";
import { useT } from "@/i18n/runtime";

const agents = [
  {
    key: "ticketing",
    icon: Headphones,
    color: "cyan" as const,
    videoIds: ["tX8zB8opwHw", "hs_78Qt5csA"],
    isShort: false,
  },
  {
    key: "assistant",
    icon: User,
    color: "purple" as const,
    videoIds: [] as string[],
    isShort: false,
  },
  {
    key: "driver",
    icon: Truck,
    color: "cyan" as const,
    videoIds: ["hxSAx5vjv1I"],
    isShort: true,
  },
];

export default function AgentsSection() {
  const t = useT("deck.agents");

  return (
    <section id="agents" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="04" title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((a, i) => {
            const title = t(`items.${a.key}.title`);
            return (
              <AnimatedSection key={a.key} delay={i * 0.15}>
                <GlowCard glowColor={a.color} className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        a.color === "cyan"
                          ? "bg-cyan-glow/10 text-cyan-glow"
                          : "bg-purple-glow/10 text-purple-glow"
                      }`}
                    >
                      <a.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{title}</h3>
                  <p className="text-xs font-mono text-cyan-glow mb-3">
                    {t(`items.${a.key}.subtitle`)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
                    {t(`items.${a.key}.desc`)}
                  </p>

                  {a.videoIds.length > 0 && (
                    <div className="mb-3 flex flex-col gap-2">
                      {a.videoIds.map((vid, vi) => (
                        <a
                          key={vid}
                          href={
                            a.isShort && vi === 0
                              ? `https://youtube.com/shorts/${vid}`
                              : `https://youtu.be/${vid}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${title} — ${t("demo")} ${vi + 1}`}
                          className="group relative block rounded-lg overflow-hidden border border-border hover:border-cyan-glow/40 transition-colors"
                        >
                          <img
                            src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`}
                            alt=""
                            loading="lazy"
                            className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className="w-10 h-10 rounded-full bg-background/70 border border-border flex items-center justify-center group-hover:bg-cyan-glow/30 group-hover:border-cyan-glow/40 transition-all">
                              <Play className="w-4 h-4 text-foreground ml-0.5" />
                            </span>
                          </span>
                          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-foreground bg-background/70 px-2 py-0.5 rounded">
                            {t("demo")}
                            {a.videoIds.length > 1 ? ` ${vi + 1}` : ""}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {t.list(`items.${a.key}.tags`).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
