/**
 * Design: Deep Space Command — Agent Application Examples (Bilingual, EN primary)
 * Four video demos: AI Recruit, Staff Monitoring, Content Generate & AEO, Ontology Agent Factory
 */

import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Play, UserSearch, Eye, PenTool, Network } from "lucide-react";

const examples = [
  {
    icon: UserSearch,
    titleEn: "AI Recruit Agent",
    titleCn: "AI招聘Agent",
    descEn: "Automates resume screening, candidate matching, and interview scheduling — reducing time-to-hire by 60% while maintaining quality standards.",
    descCn: "自动化简历筛选、候选人匹配和面试安排——在保持质量标准的同时将招聘周期缩短60%。",
    videoId: "RAI1Vzoduvw",
    color: "cyan" as const,
  },
  {
    icon: Eye,
    titleEn: "Staff Monitoring Agent",
    titleCn: "员工行为监控Agent",
    descEn: "Vision-based AI monitors warehouse staff behavior for safety compliance, productivity tracking, and SOP adherence in real-time.",
    descCn: "基于视觉的AI实时监控仓库员工行为，确保安全合规、生产力追踪和SOP执行。",
    videoId: "0R8umQdRDFE",
    color: "purple" as const,
  },
  {
    icon: PenTool,
    titleEn: "Content Generate & AEO Agent",
    titleCn: "内容生成与AEO Agent",
    descEn: "AI-driven content generation for marketing and SEO, combined with Answer Engine Optimization (AEO) to maximize visibility in AI-powered search results.",
    descCn: "AI驱动的营销和SEO内容生成，结合答案引擎优化（AEO），在AI搜索结果中最大化曝光。",
    videoId: "tEJ52CVlz0o",
    color: "cyan" as const,
  },
  {
    icon: Network,
    titleEn: "Ontology-Powered Agent Factory",
    titleCn: "Ontology驱动的Agent工厂",
    descEn: "Demonstrates how Ontology serves as the foundation for rapid Agent assembly — turning domain knowledge into deployable AI Agents at scale.",
    descCn: "展示Ontology如何作为快速Agent组装的基础——将领域知识规模化转化为可部署的AI Agent。",
    videoId: "l0Iya3yYmmc",
    color: "purple" as const,
  },
];

export default function AgentExamplesSection() {
  return (
    <section id="agent-examples" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle
          number="05"
          title="更多Agent应用案例"
          titleEn="More Agent Applications in Action"
          subtitle="从招聘到内容生成，从行为监控到Agent工厂——AI Agent正在渗透企业运营的每一个角落。"
          subtitleEn="From recruiting to content generation, from behavior monitoring to Agent factory — AI Agents are permeating every corner of enterprise operations."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((ex, i) => (
            <AnimatedSection key={ex.videoId} delay={i * 0.12}>
              <GlowCard glowColor={ex.color} className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    ex.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-purple-glow/10 text-purple-glow"
                  }`}>
                    <ex.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{ex.titleEn}</h3>
                    <p className="text-[10px] text-muted-foreground/40">{ex.titleCn}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-1">{ex.descEn}</p>
                <p className="text-xs text-muted-foreground/40 leading-relaxed mb-4">{ex.descCn}</p>

                {/* Video thumbnail with play link */}
                <a
                  href={`https://youtu.be/${ex.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors mt-auto"
                >
                  <img
                    src={`https://img.youtube.com/vi/${ex.videoId}/mqdefault.jpg`}
                    alt={`${ex.titleEn} Demo`}
                    className="w-full h-44 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-black/60 border flex items-center justify-center transition-all ${
                      ex.color === "cyan"
                        ? "border-white/20 group-hover:bg-cyan-500/30 group-hover:border-cyan-500/40"
                        : "border-white/20 group-hover:bg-purple-500/30 group-hover:border-purple-500/40"
                    }`}>
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/60 bg-black/50 px-2 py-0.5 rounded">
                    ▶ Watch Demo
                  </div>
                </a>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
