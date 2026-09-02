/**
 * Entering the physical world.
 *
 * The banner used to be a hosted `warehouse-robots-*.webp` that is gone. It is
 * now a token-built band: an accent wash plus an authored inline SVG of a
 * warehouse aisle with AMRs, drawn entirely with `currentColor` and the theme
 * variables so it reads in both day and night view.
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Play, Bot, Camera, ScanLine, Glasses, Dog, Wifi } from "lucide-react";
import { useT } from "@/i18n/runtime";

const BANNER_WASH = `
  radial-gradient(70% 120% at 12% 50%, color-mix(in oklch, var(--cyan-glow) 22%, transparent) 0%, transparent 72%),
  radial-gradient(60% 120% at 88% 40%, color-mix(in oklch, var(--purple-glow) 18%, transparent) 0%, transparent 74%)
`;

const rightVideos = [
  { key: "gate", videoId: "DY37zk0J3ck", icon: ScanLine },
  { key: "iot", videoId: "NAUl7oNpA7s", icon: Wifi },
  { key: "pack", videoId: "1sKOAjcCTq8", icon: Camera },
  { key: "visionPro", videoId: "AafmAqWqqYM", icon: Glasses },
  { key: "dog", videoId: "RJ8AzaJF4As", icon: Dog },
];

/** Authored replacement for the lost warehouse photograph. */
function AisleGraphic() {
  return (
    <svg
      viewBox="0 0 480 140"
      className="absolute inset-y-0 right-0 h-full w-auto text-cyan-glow opacity-40"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Racking bays receding to the right */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} stroke="currentColor" strokeWidth="1.2" opacity={0.35 + i * 0.12}>
          <rect x={190 + i * 58} y={30 + (4 - i) * 3} width="44" height={78 - (4 - i) * 6} rx="2" />
          <line
            x1={190 + i * 58}
            y1={56 + (4 - i) * 1.5}
            x2={234 + i * 58}
            y2={56 + (4 - i) * 1.5}
          />
          <line
            x1={190 + i * 58}
            y1={82 - (4 - i) * 1.5}
            x2={234 + i * 58}
            y2={82 - (4 - i) * 1.5}
          />
        </g>
      ))}
      {/* Aisle floor lines */}
      <path d="M150 132 L470 104" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M150 118 L470 96" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      {/* Two AMRs on the aisle */}
      <g fill="currentColor" opacity="0.75">
        <rect x="196" y="112" width="30" height="12" rx="3" />
        <rect x="318" y="100" width="22" height="9" rx="2.5" />
      </g>
      <circle cx="211" cy="106" r="3.5" fill="currentColor" opacity="0.9" />
      <circle cx="329" cy="96" r="2.6" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function VideoCard({
  title,
  desc,
  videoId,
  watchLabel,
  icon: Icon,
  large = false,
}: {
  title: string;
  desc: string;
  videoId: string;
  watchLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  large?: boolean;
}) {
  return (
    <a
      href={`https://youtu.be/${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — ${watchLabel}`}
      className="group block"
    >
      <div className="relative rounded-lg overflow-hidden border border-border hover:border-cyan-glow/40 transition-colors">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt=""
          loading="lazy"
          className={`w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity ${
            large ? "h-64 md:h-72" : "h-28"
          }`}
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={`rounded-full bg-background/70 border border-border flex items-center justify-center group-hover:bg-cyan-glow/30 group-hover:border-cyan-glow/40 transition-all ${
              large ? "w-14 h-14" : "w-9 h-9"
            }`}
          >
            <Play className={`text-foreground ml-0.5 ${large ? "w-6 h-6" : "w-3.5 h-3.5"}`} />
          </span>
        </span>
        <span className="absolute bottom-2 left-2 text-[10px] font-mono text-foreground bg-background/70 px-2 py-0.5 rounded">
          {watchLabel}
        </span>
      </div>
      <div className="mt-2 flex items-start gap-2">
        <Icon
          className={`shrink-0 text-cyan-glow mt-0.5 ${large ? "w-4 h-4" : "w-3.5 h-3.5"}`}
        />
        <div>
          <p className={`font-semibold text-foreground ${large ? "text-sm" : "text-xs"}`}>
            {title}
          </p>
          {large && (
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">{desc}</p>
          )}
        </div>
      </div>
    </a>
  );
}

export default function PhysicalSection() {
  const t = useT("deck.physical");
  const watch = t("watch");

  return (
    <section id="physical" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="06" title={t("title")} subtitle={t("subtitle")} />

        {/* Banner — token-built, replaces the lost warehouse photo */}
        <AnimatedSection className="mb-10">
          <div className="relative rounded-lg overflow-hidden border border-border bg-surface-veil h-48 md:h-56">
            <div aria-hidden className="absolute inset-0" style={{ backgroundImage: BANNER_WASH }} />
            <AisleGraphic />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"
            />
            <div className="absolute bottom-5 left-5 max-w-md">
              <p className="text-xs font-mono text-cyan-glow tracking-wider mb-1 uppercase">
                {t("banner.eyebrow")}
              </p>
              <p className="text-sm text-foreground">{t("banner.body")}</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: AGV large video */}
          <AnimatedSection direction="left">
            <GlowCard className="p-5 h-full">
              <h3 className="font-bold text-sm mb-4 text-foreground">{t("groups.robotics")}</h3>
              <VideoCard
                title={t("videos.agv.title")}
                desc={t("videos.agv.desc")}
                videoId="pdtSXZ2tpQ4"
                watchLabel={watch}
                icon={Bot}
                large
              />
            </GlowCard>
          </AnimatedSection>

          {/* Right: five smaller videos */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-5 h-full">
              <h3 className="font-bold text-sm mb-4 text-foreground">{t("groups.vision")}</h3>
              <div className="grid grid-cols-2 gap-4">
                {rightVideos.slice(0, 4).map((v) => (
                  <VideoCard
                    key={v.key}
                    title={t(`videos.${v.key}.title`)}
                    desc={t(`videos.${v.key}.desc`)}
                    videoId={v.videoId}
                    watchLabel={watch}
                    icon={v.icon}
                  />
                ))}
              </div>
              <div className="mt-4">
                <VideoCard
                  title={t(`videos.${rightVideos[4].key}.title`)}
                  desc={t(`videos.${rightVideos[4].key}.desc`)}
                  videoId={rightVideos[4].videoId}
                  watchLabel={watch}
                  icon={rightVideos[4].icon}
                />
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
