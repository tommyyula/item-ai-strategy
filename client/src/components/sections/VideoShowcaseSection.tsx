/**
 * Design: Deep Space Command — Video Showcase Section (Bilingual, EN primary)
 * Two tabs: Multi-Agent collaboration & Digital × Physical
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../SectionTitle";

const tabs = [
  {
    id: "multi-agent",
    labelEn: "Multi-Agent Collaboration",
    labelCn: "多Agent协作",
    videoId: "NmYgyat35Rk",
    descEn: "Multiple specialized AI Agents working in concert — from task planning and path optimization to real-time execution, forming a complete decision-execution loop.",
    descCn: "多个专业AI Agent协同工作——从任务规划、路径优化到实时执行，形成完整的决策-执行闭环。",
    color: "cyan",
  },
  {
    id: "digital-physical",
    labelEn: "Digital × Physical",
    labelCn: "数字×物理",
    videoId: "NMLtgGNog3Q",
    descEn: "AI Agent decisions no longer stay on screen — they directly drive robots and devices in the physical world, bridging the gap between digital intelligence and physical execution.",
    descCn: "AI Agent的决策不再停留在屏幕上——直接驱动物理世界的机器人和设备，打通数字智能与物理执行之间的鸿沟。",
    color: "purple",
  },
];

export default function VideoShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);

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
            title="AI Agent 实战演示"
            titleEn="AI Agent Demos in Action"
            subtitle="最近的突破性成果——多个AI Agent协同工作，真正打通了数字世界与物理世界的边界。"
            subtitleEn="Recent breakthroughs — multiple AI Agents working in concert, truly bridging the digital and physical worlds."
          />
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection delay={0.15}>
          <div className="flex justify-center gap-3 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`relative px-6 py-3 rounded-lg font-mono text-sm tracking-wide transition-all duration-300 border ${
                  activeTab === i
                    ? tab.color === "cyan"
                      ? "border-cyan-500/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(0,200,255,0.15)]"
                      : "border-purple-500/60 bg-purple-500/15 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : "border-white/10 bg-white/[0.03] text-white/40 hover:border-white/20 hover:text-white/60"
                }`}
              >
                {activeTab === i && (
                  <motion.span
                    layoutId="activeTabGlow"
                    className={`absolute -inset-[1px] rounded-lg ${
                      tab.color === "cyan"
                        ? "bg-cyan-500/10"
                        : "bg-purple-500/10"
                    } blur-sm`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {tab.labelEn}
                  <span className="ml-2 text-xs opacity-50">{tab.labelCn}</span>
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Video embed with animation */}
        <AnimatedSection delay={0.25}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeTab].id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mx-auto max-w-4xl">
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${
                  tabs[activeTab].color === "cyan"
                    ? "from-cyan-500/50 via-purple-500/30 to-cyan-500/50"
                    : "from-purple-500/50 via-cyan-500/30 to-purple-500/50"
                } blur-sm`} />
                <div className="relative rounded-xl overflow-hidden bg-[#0a0e1a] border border-white/10">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${tabs[activeTab].videoId}?rel=0&modestbranding=1`}
                      title={tabs[activeTab].labelEn}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Description below video */}
              <div className="max-w-4xl mx-auto mt-6 text-center">
                <p className="text-sm text-gray-300 leading-relaxed">{tabs[activeTab].descEn}</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-2">{tabs[activeTab].descCn}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Highlight badges */}
        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Latest Breakthroughs 最新突破
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-mono tracking-wide">
              Production-Validated 生产验证
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono tracking-wide">
              Closed-Loop Intelligence 闭环智能
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
