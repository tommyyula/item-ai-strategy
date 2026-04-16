/**
 * Design: Deep Space Command — Office Automation Agent Section (Bilingual, EN primary)
 * Includes embedded videos for Ticketing and Driver Assistant
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Headphones, User, Truck, ArrowRight, Play } from "lucide-react";

const agents = [
  {
    icon: Headphones,
    title: "Call Center Ticketing",
    subtitleEn: "In-house AI Customer Service System",
    subtitleCn: "自研AI客服系统",
    descEn: "AI Agents understand customer intent and directly invoke OMS/WMS APIs for status queries and exception handling, significantly reducing manual intervention.",
    descCn: "AI Agent理解客户意图，直接调用OMS/WMS接口进行状态查询和异常处理，大幅降低人工干预率。",
    tags: ["Intent Recognition", "Auto-Ticketing", "OMS/WMS Integration"],
    color: "cyan" as const,
    videoId: "tX8zB8opwHw",
  },
  {
    icon: User,
    title: "Personal Assistant",
    subtitleEn: "Evolution from In-house to OpenClaw",
    subtitleCn: "从自研到OpenClaw的演进",
    descEn: "Initially built a general-purpose personal assistant Agent, later replaced by OpenClaw. Delegated generic tasks to specialized tools, refocusing internal efforts on domain depth.",
    descCn: "早期构建通用型个人助理Agent，后替换为OpenClaw。通用任务交由专业工具，内部精力聚焦业务深度。",
    tags: ["Mindset Shift", "Domain Focus", "OpenClaw"],
    color: "purple" as const,
    videoId: null,
  },
  {
    icon: Truck,
    title: "Driver AI Agent",
    subtitleEn: "Full-process Agent for Drivers",
    subtitleCn: "司机端全流程Agent化",
    descEn: "Equips drivers with AI assistance in TMS/YMS workflows — handling check-ins, dock congestion, missing documents, and providing real-time guidance.",
    descCn: "在TMS/YMS环节为司机配备AI辅助，处理签到、月台拥堵、文件缺失等异常，提供实时指导。",
    tags: ["Driver Check-in", "Exception Handling", "Real-time Guidance"],
    color: "cyan" as const,
    videoId: "hxSAx5vjv1I",
    isShort: true,
  },
];

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="04"
          title="Office Automation Agent化"
          titleEn="Office Automation — Agentification"
          subtitle="从「系统记录」到「系统行动」的转变——我们在企业内部办公和运营流程中的Agent化尝试与成果。"
          subtitleEn="From 'system of record' to 'system of action' — our experiments and results in agentifying internal office and operational workflows."
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
                <p className="text-xs text-muted-foreground/40 leading-relaxed mt-1 mb-3">{a.descCn}</p>

                {/* Embedded video */}
                {a.videoId && (
                  <div className="mb-3">
                    <a
                      href={a.isShort
                        ? `https://youtube.com/shorts/${a.videoId}`
                        : `https://youtu.be/${a.videoId}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${a.videoId}/mqdefault.jpg`}
                        alt={`${a.title} Demo`}
                        className="w-full h-32 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center group-hover:bg-cyan-500/30 group-hover:border-cyan-500/40 transition-all">
                          <Play className="w-4 h-4 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded">
                        ▶ Watch Demo
                      </div>
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-3 border-t border-panel-border/30">
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
