import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Bot, Camera, Forklift, Box, ScanLine, Eye } from "lucide-react";

const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/warehouse-robots-N5qtLpeJoFJNGcr4G4K6Qk.webp";
const ARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/architecture-bg-FYrCw7eGpAKAAaWrFiErBr.webp";

const robots = [
  { icon: Bot, nameEn: "AirRob AMR", nameCn: "AirRob AMR", descEn: "Autonomous Mobile Robot", descCn: "自主移动机器人" },
  { icon: Box, nameEn: "4-way Shuttle", nameCn: "四向穿梭车", descEn: "High-density Storage", descCn: "高密度存储" },
  { icon: Forklift, nameEn: "Bluecore AGV", nameCn: "Bluecore AGV", descEn: "Automated Guided Vehicle", descCn: "自动导引车" },
  { icon: Forklift, nameEn: "Autonomous Forklift", nameCn: "无人叉车", descEn: "Automated Transport", descCn: "自动搬运" },
];

const visionAI = [
  { icon: Eye, nameEn: "Staff Monitoring Agent", nameCn: "员工监控Agent", descEn: "Behavior analysis & safety compliance", descCn: "行为分析与安全合规" },
  { icon: Camera, nameEn: "AI Camera Audit", nameCn: "AI摄像头审计", descEn: "Packing station video QC", descCn: "打包台视频QC" },
  { icon: ScanLine, nameEn: "YMS Gate Recognition", nameCn: "YMS道闸识别", descEn: "Intelligent vehicle recognition & scheduling", descCn: "车辆智能识别与调度" },
];

export default function PhysicalSection() {
  return (
    <section id="physical" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="10"
          title="走向物理世界"
          titleEn="Entering the Physical World"
          subtitle="硬件无关的WES（仓库执行系统）——不绑定任何单一硬件厂商，让智能真正离开屏幕。"
          subtitleEn="Hardware-agnostic WES (Warehouse Execution System) — not locked to any single hardware vendor, bringing intelligence beyond the screen."
        />

        {/* Hero image */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <img src={WAREHOUSE_IMG} alt="Smart Warehouse" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-md">
              <p className="text-xs font-mono text-cyan-glow tracking-wider mb-2">HARDWARE-AGNOSTIC WES</p>
              <p className="text-sm text-foreground/80">
                Software stack running stably in real warehouse production environments covering 10M+ sq ft
              </p>
              <p className="text-xs text-foreground/40 mt-1">
                软件栈在超过1000万平方英尺的真实仓库生产环境中稳定运行
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Robot integrations */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <h3 className="font-bold mb-1">Integrated Robotic Equipment</h3>
              <p className="text-xs text-muted-foreground/50 mb-5">已集成的机器人设备</p>
              <div className="grid grid-cols-2 gap-3">
                {robots.map((r) => (
                  <div key={r.nameEn} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-9 h-9 rounded-lg bg-cyan-glow/10 flex items-center justify-center shrink-0">
                      <r.icon className="w-4 h-4 text-cyan-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.nameEn}</p>
                      <p className="text-[10px] text-muted-foreground/30">{r.nameCn}</p>
                      <p className="text-xs text-muted-foreground">{r.descEn}</p>
                      <p className="text-[10px] text-muted-foreground/30">{r.descCn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Vision AI */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <h3 className="font-bold mb-1">Vision & Edge AI Applications</h3>
              <p className="text-xs text-muted-foreground/50 mb-5">视觉与边缘AI应用</p>
              <div className="space-y-3 mb-5">
                {visionAI.map((v) => (
                  <div key={v.nameEn} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-9 h-9 rounded-lg bg-purple-glow/10 flex items-center justify-center shrink-0">
                      <v.icon className="w-4 h-4 text-purple-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{v.nameEn}</p>
                      <p className="text-[10px] text-muted-foreground/30">{v.nameCn}</p>
                      <p className="text-xs text-muted-foreground">{v.descEn}</p>
                      <p className="text-[10px] text-muted-foreground/30">{v.descCn}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img src={ARCH_IMG} alt="5-Layer Architecture" className="w-full h-32 object-cover rounded-lg opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs font-mono text-cyan-glow tracking-wider">5-LAYER AI ARCHITECTURE · 五层AI架构</p>
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
