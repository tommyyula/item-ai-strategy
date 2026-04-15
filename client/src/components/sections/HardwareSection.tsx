import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Cpu, Cloud, Wifi, HardDrive, ArrowRight } from "lucide-react";

const currentHW = [
  { icon: Cloud, label: "云端GPU", labelEn: "Cloud GPU", desc: "大模型推理（OpenAI / Claude API）", descEn: "LLM inference (OpenAI / Claude API)" },
  { icon: HardDrive, label: "Kafka + K8s", labelEn: "Kafka + K8s", desc: "云原生流处理与容器编排", descEn: "Cloud-native stream processing & container orchestration" },
  { icon: Cpu, label: "边缘设备", labelEn: "Edge Devices", desc: "AI摄像头数据处理", descEn: "AI camera data processing" },
];

const futureNeeds = [
  {
    icon: Cpu,
    title: "边缘推理芯片",
    titleEn: "Edge Inference Chips",
    subtitle: "NPU / LPU",
    desc: "AMR、四向穿梭车、无人叉车的大规模部署需要专为低延迟推理设计的边缘芯片。",
    descEn: "Mass deployment of AMRs, shuttle systems, and autonomous forklifts requires edge chips designed for low-latency inference.",
    color: "cyan" as const,
  },
  {
    icon: Cloud,
    title: "云端GPU集群",
    titleEn: "Cloud GPU Clusters",
    subtitle: "A100 / H100 / 国产替代 Domestic Alternatives",
    desc: "支撑Agent Factory和不断增长的Ontology图谱计算（GraphRAG）。",
    descEn: "Supporting Agent Factory and the growing Ontology graph computation (GraphRAG).",
    color: "purple" as const,
  },
  {
    icon: Wifi,
    title: "高速网络硬件",
    titleEn: "High-speed Networking",
    subtitle: "5.5G / Wi-Fi 8 / UWB / 光纤 Fiber",
    desc: "物理AI的实时控制对延迟要求极高，需要扩展对新一代网络硬件的集成支持。",
    descEn: "Real-time control for Physical AI demands ultra-low latency, requiring integration with next-gen networking hardware.",
    color: "cyan" as const,
  },
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="09"
          title="硬件与算力基础设施"
          titleEn="Hardware & Computing Infrastructure"
          subtitle="从云端到边缘的演进——支撑庞大的Agent集群和物理执行，仅靠软件是不够的。"
          subtitleEn="Evolution from cloud to edge — supporting massive Agent clusters and physical execution requires more than software alone."
        />

        {/* Current hardware */}
        <AnimatedSection className="mb-12">
          <GlowCard className="p-6">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-1">
              当前硬件基础
            </p>
            <p className="text-[10px] font-mono text-muted-foreground/40 tracking-widest uppercase italic mb-5">
              Current Hardware Foundation
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {currentHW.map((hw) => (
                <div key={hw.label} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center shrink-0">
                    <hw.icon className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{hw.label}</p>
                    <p className="text-[10px] text-muted-foreground/40 italic">{hw.labelEn}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{hw.desc}</p>
                    <p className="text-[10px] text-muted-foreground/30 italic">{hw.descEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </AnimatedSection>

        {/* Arrow */}
        <AnimatedSection className="flex justify-center mb-12">
          <div className="flex items-center gap-3 text-muted-foreground/50">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-glow/40" />
            <ArrowRight className="w-5 h-5 text-cyan-glow" />
            <span className="text-xs font-mono text-cyan-glow/60 tracking-wider">扩展需求 Expansion Needs</span>
            <ArrowRight className="w-5 h-5 text-cyan-glow" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-glow/40" />
          </div>
        </AnimatedSection>

        {/* Future needs */}
        <div className="grid md:grid-cols-3 gap-6">
          {futureNeeds.map((need, i) => (
            <AnimatedSection key={need.title} delay={i * 0.15}>
              <GlowCard glowColor={need.color} className="p-6 h-full">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  need.color === "cyan"
                    ? "bg-cyan-glow/10 text-cyan-glow"
                    : "bg-purple-glow/10 text-purple-glow"
                }`}>
                  <need.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-0.5">{need.title}</h3>
                <p className="text-xs text-muted-foreground/40 italic mb-1">{need.titleEn}</p>
                <p className="text-xs font-mono text-cyan-glow/60 mb-3">{need.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{need.desc}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed italic mt-1">{need.descEn}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
