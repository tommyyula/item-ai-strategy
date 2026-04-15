import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Headphones, User, Truck, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: Headphones,
    title: "Call Center Ticketing",
    subtitle: "自研AI客服系统",
    subtitleEn: "In-house AI Customer Service System",
    desc: "AI Agent不仅能理解客户意图，还能直接调用底层OMS/WMS接口进行状态查询和异常处理，大幅降低人工干预率。",
    descEn: "AI Agents understand customer intent and directly invoke OMS/WMS APIs for status queries and exception handling, significantly reducing manual intervention.",
    tags: ["意图识别 Intent Recognition", "自动工单 Auto-Ticketing", "OMS/WMS联动 Integration"],
    color: "cyan" as const,
  },
  {
    icon: User,
    title: "Personal Assistant",
    subtitle: "从自研到OpenClaw的演进",
    subtitleEn: "Evolution from In-house to OpenClaw",
    desc: "早期尝试构建通用型个人助理Agent，后替换为OpenClaw。将通用任务交由专业工具处理，内部精力聚焦业务深度。",
    descEn: "Initially built a general-purpose personal assistant Agent, later replaced by OpenClaw. Delegated generic tasks to specialized tools, refocusing internal efforts on domain depth.",
    tags: ["认知转变 Mindset Shift", "聚焦业务 Domain Focus", "OpenClaw"],
    color: "purple" as const,
  },
  {
    icon: Truck,
    title: "Driver AI Agent",
    subtitle: "司机端全流程Agent化",
    subtitleEn: "Full-process Agent for Drivers",
    desc: "在TMS/YMS环节为司机配备AI辅助系统，处理日常签到、月台拥堵、文件缺失等异常情况，提供实时指导。",
    descEn: "Equips drivers with AI assistance in TMS/YMS workflows — handling check-ins, dock congestion, missing documents, and providing real-time guidance.",
    tags: ["Driver Check-in", "异常处理 Exception Handling", "实时指导 Real-time Guidance"],
    color: "cyan" as const,
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="04"
          title="Office Automation Agent化"
          titleEn="Office Automation — Agent-ification"
          subtitle="从「系统记录」到「系统行动」的转变——我们在企业内部办公和运营流程中的Agent化尝试与成果。"
          subtitleEn="From 'system of record' to 'system of action' — our experiments and results in Agent-ifying internal office and operational workflows."
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
                <p className="text-xs font-mono text-cyan-glow/60 mb-0.5">{a.subtitle}</p>
                <p className="text-[10px] font-mono text-cyan-glow/30 italic mb-3">{a.subtitleEn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed italic mt-1">{a.descEn}</p>
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
