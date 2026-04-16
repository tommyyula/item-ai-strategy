/**
 * Design: Deep Space Command — Entering the Physical World (Bilingual, EN primary)
 * Left: AGV Inventory Count Robot (large video)
 * Right: 5 smaller video demos (YMS Gate, IoT Yard, Pack Station, Vision Pro, Dog Walk)
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Play, Bot, Camera, ScanLine, Glasses, Dog, Wifi } from "lucide-react";

const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/warehouse-robots-N5qtLpeJoFJNGcr4G4K6Qk.webp";

const leftVideo = {
  titleEn: "AGV Inventory Count Robot",
  titleCn: "AGV盘点机器人",
  descEn: "Autonomous guided vehicles perform real-time inventory counting across warehouse aisles — replacing manual cycle counts with 24/7 automated precision.",
  descCn: "自主导引车在仓库通道中执行实时库存盘点——以24/7自动化精度取代人工循环盘点。",
  videoId: "pdtSXZ2tpQ4",
  icon: Bot,
};

const rightVideos = [
  {
    titleEn: "YMS Gate Recognition",
    titleCn: "YMS道闸识别",
    descEn: "AI-powered vehicle recognition and scheduling at yard gates.",
    descCn: "AI驱动的道闸车辆识别与调度。",
    videoId: "DY37zk0J3ck",
    icon: ScanLine,
  },
  {
    titleEn: "IoT Yard Assistant Agent",
    titleCn: "IoT堆场助手Agent",
    descEn: "IoT sensors + AI Agent for real-time yard management.",
    descCn: "IoT传感器+AI Agent实现实时堆场管理。",
    videoId: "NAUl7oNpA7s",
    icon: Wifi,
  },
  {
    titleEn: "Pack Station Monitor",
    titleCn: "打包台监控",
    descEn: "Vision AI monitors packing quality and compliance in real-time.",
    descCn: "视觉AI实时监控打包质量与合规性。",
    videoId: "1sKOAjcCTq8",
    icon: Camera,
  },
  {
    titleEn: "Picking by Vision Pro",
    titleCn: "Vision Pro拣货",
    descEn: "Apple Vision Pro AR-guided warehouse picking operations.",
    descCn: "Apple Vision Pro AR引导的仓库拣货作业。",
    videoId: "AafmAqWqqYM",
    icon: Glasses,
  },
  {
    titleEn: "Dog Walk — Yard Security",
    titleCn: "机器狗巡逻——堆场安防",
    descEn: "Robotic dog patrols for autonomous yard security monitoring.",
    descCn: "机器狗自主巡逻，实现堆场安防监控。",
    videoId: "RJ8AzaJF4As",
    icon: Dog,
  },
];

function VideoCard({
  titleEn,
  titleCn,
  descEn,
  descCn,
  videoId,
  icon: Icon,
  large = false,
}: {
  titleEn: string;
  titleCn: string;
  descEn: string;
  descCn: string;
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
        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded">
          ▶ Watch
        </div>
      </div>
      <div className="mt-2 flex items-start gap-2">
        <Icon className={`shrink-0 text-cyan-glow/60 mt-0.5 ${large ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
        <div>
          <p className={`font-semibold ${large ? "text-sm" : "text-xs"}`}>{titleEn}</p>
          <p className="text-[10px] text-muted-foreground/40">{titleCn}</p>
          {large && (
            <>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{descEn}</p>
              <p className="text-[10px] text-muted-foreground/40 leading-relaxed mt-0.5">{descCn}</p>
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
        <SectionTitle
          number="06"
          title="走向物理世界"
          titleEn="Entering the Physical World"
          subtitle="硬件无关的WES——让智能真正离开屏幕，从AGV盘点到Vision Pro拣货，从道闸识别到机器狗巡逻。"
          subtitleEn="Hardware-agnostic WES — bringing intelligence beyond the screen, from AGV counting to Vision Pro picking, from gate recognition to robotic dog patrols."
        />

        {/* Hero banner */}
        <AnimatedSection className="mb-10">
          <div className="relative rounded-lg overflow-hidden">
            <img src={WAREHOUSE_IMG} alt="Smart Warehouse" className="w-full h-48 md:h-56 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-md">
              <p className="text-xs font-mono text-cyan-glow tracking-wider mb-1">HARDWARE-AGNOSTIC WES</p>
              <p className="text-sm text-foreground/80">
                Software stack running in real warehouse production environments covering 10M+ sq ft
              </p>
              <p className="text-[10px] text-foreground/40 mt-0.5">
                软件栈在超过1000万平方英尺的真实仓库生产环境中稳定运行
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
              <p className="text-[10px] text-muted-foreground/40 mb-4">机器人与自动化</p>
              <VideoCard {...leftVideo} large />
            </GlowCard>
          </AnimatedSection>

          {/* Right: 5 smaller videos in a grid */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-5 h-full">
              <h3 className="font-bold text-sm mb-1">Vision & Edge AI Applications</h3>
              <p className="text-[10px] text-muted-foreground/40 mb-4">视觉与边缘AI应用</p>
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
