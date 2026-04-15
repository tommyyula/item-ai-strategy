import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Headphones, User, Truck, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: Headphones,
    title: "Call Center Ticketing",
    subtitle: "自研AI客服系统",
    desc: "AI Agent不仅能理解客户意图，还能直接调用底层OMS/WMS接口进行状态查询和异常处理，大幅降低人工干预率。",
    tags: ["意图识别", "自动工单", "OMS/WMS联动"],
    color: "cyan" as const,
  },
  {
    icon: User,
    title: "Personal Assistant",
    subtitle: "从自研到OpenClaw的演进",
    desc: "早期尝试构建通用型个人助理Agent，后替换为OpenClaw。将通用任务交由专业工具处理，内部精力聚焦业务深度。",
    tags: ["认知转变", "聚焦业务", "OpenClaw"],
    color: "purple" as const,
  },
  {
    icon: Truck,
    title: "Driver AI Agent",
    subtitle: "司机端全流程Agent化",
    desc: "在TMS/YMS环节为司机配备AI辅助系统，处理日常签到、月台拥堵、文件缺失等异常情况，提供实时指导。",
    tags: ["Driver Check-in", "异常处理", "实时指导"],
    color: "cyan" as const,
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="03"
          title="Office Automation Agent化"
          subtitle="从「系统记录」到「系统行动」的转变——我们在企业内部办公和运营流程中的Agent化尝试与成果。"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.15}>
              <GlowCard glowColor={a.color} className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    a.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-purple-glow/10 text-purple-glow"
                  }`}>
                    <a.icon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                </div>
                <h3 className="text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-xs font-mono text-cyan-glow/60 mb-3">{a.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-panel-border/30">
                  {a.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
