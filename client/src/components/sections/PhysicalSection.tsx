import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Bot, Camera, Forklift, Box, ScanLine, Eye } from "lucide-react";

const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/warehouse-robots-N5qtLpeJoFJNGcr4G4K6Qk.webp";
const ARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/architecture-bg-FYrCw7eGpAKAAaWrFiErBr.webp";

const robots = [
  { icon: Bot, name: "AirRob AMR", desc: "自主移动机器人" },
  { icon: Box, name: "四向穿梭车", desc: "高密度存储" },
  { icon: Forklift, name: "Bluecore AGV", desc: "自动导引车" },
  { icon: Forklift, name: "无人叉车", desc: "自动搬运" },
];

const visionAI = [
  { icon: Eye, name: "员工监控Agent", desc: "行为分析与安全合规" },
  { icon: Camera, name: "AI摄像头审计", desc: "打包台视频QC" },
  { icon: ScanLine, name: "YMS道闸识别", desc: "车辆智能识别与调度" },
];

export default function PhysicalSection() {
  return (
    <section id="physical" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="09"
          title="走向物理世界"
          subtitle="硬件无关的WES（仓库执行系统）——不绑定任何单一硬件厂商，让智能真正离开屏幕。"
        />

        {/* Hero image */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <img src={WAREHOUSE_IMG} alt="Smart Warehouse" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-md">
              <p className="text-xs font-mono text-cyan-glow tracking-wider mb-2">HARDWARE-AGNOSTIC WES</p>
              <p className="text-sm text-foreground/80">
                软件栈在超过1000万平方英尺的真实仓库生产环境中稳定运行
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Robot integrations */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <h3 className="font-bold mb-5">已集成的机器人设备</h3>
              <div className="grid grid-cols-2 gap-3">
                {robots.map((r) => (
                  <div key={r.name} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-9 h-9 rounded-lg bg-cyan-glow/10 flex items-center justify-center shrink-0">
                      <r.icon className="w-4 h-4 text-cyan-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Vision AI */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <h3 className="font-bold mb-5">视觉与边缘AI应用</h3>
              <div className="space-y-3 mb-5">
                {visionAI.map((v) => (
                  <div key={v.name} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-9 h-9 rounded-lg bg-purple-glow/10 flex items-center justify-center shrink-0">
                      <v.icon className="w-4 h-4 text-purple-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img src={ARCH_IMG} alt="5-Layer Architecture" className="w-full h-32 object-cover rounded-lg opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs font-mono text-cyan-glow tracking-wider">5-LAYER AI ARCHITECTURE</p>
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
