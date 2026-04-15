import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Headphones, User, Truck, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: Headphones,
    title: "Call Center Ticketing",
    subtitleEn: "In-house AI Customer Service System",
    subtitleCn: "自研AI客服系统",
    descEn: "AI Agents understand customer intent and directly invoke OMS/WMS APIs for status queries and exception handling, significantly reducing manual intervention.",
    descCn: "AI Agent不仅能理解客户意图，还能直接调用底层OMS/WMS接口进行状态查询和异常处理，大幅降低人工干预率。",
    tags: ["Intent Recognition", "Auto-Ticketing", "OMS/WMS Integration"],
    color: "cyan" as const,
  },
  {
    icon: User,
    title: "Personal Assistant",
    subtitleEn: "Evolution from In-house to OpenClaw",
    subtitleCn: "从自研到OpenClaw的演进",
    descEn: "Initially built a general-purpose personal assistant Agent, later replaced by OpenClaw. Delegated generic tasks to specialized tools, refocusing internal efforts on domain depth.",
    descCn: "早期尝试构建通用型个人助理Agent，后替换为OpenClaw。将通用任务交由专业工具处理，内部精力聚焦业务深度。",
    tags: ["Mindset Shift", "Domain Focus", "OpenClaw"],
    color: "purple" as const,
  },
  {
    icon: Truck,
    title: "Driver AI Agent",
    subtitleEn: "Full-process Agent for Drivers",
    subtitleCn: "司机端全流程Agent化",
    descEn: "Equips drivers with AI assistance in TMS/YMS workflows — handling check-ins, dock congestion, missing documents, and providing real-time guidance.",
    descCn: "在TMS/YMS环节为司机配备AI辅助系统，处理日常签到、月台拥堵、文件缺失等异常情况，提供实时指导。",
    tags: ["Driver Check-in", "Exception Handling", "Real-time Guidance"],
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
                <p className="text-xs font-mono text-cyan-glow/60 mb-0.5">{a.subtitleEn}</p>
                <p className="text-[10px] font-mono text-cyan-glow/30 mb-3">{a.subtitleCn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.descEn}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed mt-1">{a.descCn}</p>
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
