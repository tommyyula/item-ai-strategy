/**
 * Design: Deep Space Command — Video Showcase Section (Bilingual, EN primary)
 * Positioned between Evolution and Agents sections
 */

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

export default function VideoShowcaseSection() {
  return (
    <section id="video" className="relative py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionTitle
            number="03"
            title="多Agent协作实录"
            titleEn="Multi-Agent Collaboration in Action"
            subtitle="最近几天的突破性成果——多个AI Agent协同工作，真正打通了数字世界与物理世界的边界。"
            subtitleEn="A breakthrough achieved in recent days — multiple AI Agents working in concert, truly bridging the digital and physical worlds."
          />
        </AnimatedSection>

        {/* Highlight badges */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Latest 最新成果
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-mono tracking-wide">
              Multi-Agent 多Agent协作
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono tracking-wide">
              Digital × Physical 数字×物理
            </span>
          </div>
        </AnimatedSection>

        {/* YouTube Video Embed */}
        <AnimatedSection delay={0.25}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 blur-sm" />
            <div className="relative rounded-xl overflow-hidden bg-[#0a0e1a] border border-white/10">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/CNBW3mBrPYw?si=NORya_8p9l0Rfuqe&rel=0&modestbranding=1"
                  title="Multi-Agent Collaboration Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Description cards below video */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <HighlightCard
              icon="🤖"
              title="Agent Orchestration"
              titleCn="Agent 协同编排"
              description="Specialized Agents each handle their domain — from task planning and path optimization to real-time execution, forming a complete decision-execution loop."
              descriptionCn="多个专业Agent各司其职——从任务规划、路径优化到实时执行，形成完整的决策-执行闭环。"
            />
            <HighlightCard
              icon="🌐"
              title="Digital ↔ Physical Bridge"
              titleCn="数字↔物理打通"
              description="AI Agent decisions no longer stay on screen — they directly drive robots and devices in the physical world to complete real operations."
              descriptionCn="AI Agent的决策不再停留在屏幕上，而是直接驱动物理世界的机器人和设备完成真实作业。"
            />
            <HighlightCard
              icon="⚡"
              title="Real-time Feedback Loop"
              titleCn="实时反馈回路"
              description="Sensor data from the physical world feeds back in real-time, enabling Agents to dynamically adjust strategies for true closed-loop intelligence."
              descriptionCn="物理世界的传感器数据实时回传，Agent动态调整策略，实现真正的闭环智能。"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HighlightCard({
  icon,
  title,
  titleCn,
  description,
  descriptionCn,
}: {
  icon: string;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group"
    >
      <div className="absolute -inset-[0.5px] rounded-lg bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-5 rounded-lg bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
        <div className="text-2xl mb-3">{icon}</div>
        <h4 className="text-white font-semibold text-sm mb-0.5 tracking-wide">{title}</h4>
        <p className="text-white/30 text-xs mb-2">{titleCn}</p>
        <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
        <p className="text-gray-500/60 text-[11px] leading-relaxed mt-1">{descriptionCn}</p>
      </div>
    </motion.div>
  );
}
