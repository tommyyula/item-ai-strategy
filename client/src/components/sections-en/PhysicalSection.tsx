/**
 * Design: Deep Space Command — Entering the Physical World (Bilingual, EN primary)
 * Left: AGV Inventory Count Robot (large video)
 * Right: 5 smaller video demos (YMS Gate, IoT Yard, Pack Station, Vision Pro, Dog Walk)
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitleEn from "./SectionTitleEn";
import GlowCard from "../GlowCard";
import { Play, Bot, Camera, ScanLine, Glasses, Dog, Wifi } from "lucide-react";

const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/warehouse-robots-N5qtLpeJoFJNGcr4G4K6Qk.webp";

const leftVideo = {
  titleEn: "AGV Inventory Count Robot",
  descEn: "Autonomous guided vehicles perform real-time inventory counting across warehouse aisles — replacing manual cycle counts with 24/7 automated precision.",
  videoId: "pdtSXZ2tpQ4",
  icon: Bot,
};

const rightVideos = [
  {
    titleEn: "YMS Gate Recognition",
    descEn: "AI-powered vehicle recognition and scheduling at yard gates.",
    videoId: "DY37zk0J3ck",
    icon: ScanLine,
  },
  {
    titleEn: "IoT Yard Assistant Agent",
    descEn: "IoT sensors + AI Agent for real-time yard management.",
    videoId: "NAUl7oNpA7s",
    icon: Wifi,
  },
  {
    titleEn: "Pack Station Monitor",
    descEn: "Vision AI monitors packing quality and compliance in real-time.",
    videoId: "1sKOAjcCTq8",
    icon: Camera,
  },
  {
    titleEn: "Picking by Vision Pro",
    descEn: "Apple Vision Pro AR-guided warehouse picking operations.",
    videoId: "AafmAqWqqYM",
    icon: Glasses,
  },
  {
    titleEn: "Dog Walk — Yard Security",
    descEn: "Robotic dog patrols for autonomous yard security monitoring.",
    videoId: "RJ8AzaJF4As",
    icon: Dog,
  },
];

function VideoCard({
  titleEn,
  descEn,
  videoId,
  icon: Icon,
  large = false,
}: {
  titleEn: string;
    descEn: string;
    videoId: string;
  icon: React.ComponentType<{ className?: string }>;
  large?: boolean;
}) {
  return (
    <a
      href={`https://youtu.be/${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={titleEn}
          className={`w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity ${
            large ? "h-64 md:h-72" : "h-28"
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`rounded-full bg-black/60 border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:border-cyan-500/40 transition-all ${
            large ? "w-14 h-14" : "w-9 h-9"
          }`}>
            <Play className={`text-white ml-0.5 ${large ? "w-6 h-6" : "w-3.5 h-3.5"}`} />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded">
          ▶ Watch
        </div>
      </div>
      <div className="mt-2 flex items-start gap-2">
        <Icon className={`shrink-0 text-cyan-glow/60 mt-0.5 ${large ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
        <div>
          <p className={`font-semibold ${large ? "text-sm" : "text-xs"}`}>{titleEn}</p>
          {large && (
            <>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{descEn}</p>
            </>
          )}
        </div>
      </div>
    </a>
  );
}

export default function PhysicalSection() {
  return (
    <section id="physical" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="06"
          title="Entering the Physical World"
          subtitle="Hardware-agnostic WES — bringing intelligence beyond the screen, from AGV counting to Vision Pro picking, from gate recognition to robotic dog patrols."
        />

        {/* Hero banner */}
        <AnimatedSection className="mb-10">
          <div className="relative rounded-lg overflow-hidden">
            <img src={WAREHOUSE_IMG} alt="Smart Warehouse" className="w-full h-48 md:h-56 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-md">
              <p className="text-xs font-mono text-cyan-glow tracking-wider mb-1">HARDWARE-AGNOSTIC WES</p>
              <p className="text-sm text-foreground/90">
                Software stack running in real warehouse production environments covering 10M+ sq ft
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Left/Right layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: AGV large video */}
          <AnimatedSection direction="left">
            <GlowCard className="p-5 h-full">
              <h3 className="font-bold text-sm mb-1">Robotics & Automation</h3>
              <VideoCard {...leftVideo} large />
            </GlowCard>
          </AnimatedSection>

          {/* Right: 5 smaller videos in a grid */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-5 h-full">
              <h3 className="font-bold text-sm mb-1">Vision & Edge AI Applications</h3>
              <div className="grid grid-cols-2 gap-4">
                {rightVideos.slice(0, 4).map((v) => (
                  <VideoCard key={v.videoId} {...v} />
                ))}
              </div>
              {/* Last one spans full width */}
              <div className="mt-4">
                <VideoCard {...rightVideos[4]} />
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
