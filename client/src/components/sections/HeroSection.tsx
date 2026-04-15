import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/hero-bg-4oHPfcTAqZFTD4ufTYG9tE.webp";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            <span className="text-sm font-mono text-cyan-glow tracking-wider">
              UNIS Group &times; Lenovo CIO Briefing
            </span>
          </div>
        </motion.div>

        {/* English title is now primary */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-3"
        >
          <span className="block">From Digitalization to</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-glow via-foreground to-purple-glow bg-clip-text text-transparent">
            Physical AI
          </span>
        </motion.h1>

        {/* Chinese title is now secondary */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground/50 font-light tracking-wide mb-6"
        >
          从数字化到物理AI
        </motion.p>

        {/* English description is now primary */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-1"
        >
          Item's AI Journey Over the Past Year — Practices, Challenges &amp; Cognitive Restructuring
        </motion.p>
        {/* Chinese description is now secondary */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-sm text-muted-foreground/40 max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Item过去一年的AI实践、挑战与认知重构
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-2 mb-10"
        >
          {/* English UNIS statement is now primary */}
          <p className="text-sm font-mono text-cyan-glow/70 tracking-wide">
            Item serves as the implementation foundation for all supply chain transformation projects across UNIS Group
          </p>
          {/* Chinese UNIS statement is now secondary */}
          <p className="text-xs font-mono text-cyan-glow/35 tracking-wide mt-1">
            Item 是 UNIS 集团所有供应链转型项目的实施底座
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            <span>AI Middleware <span className="text-muted-foreground/40 text-xs">AI中间件层</span></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-glow" />
            <span>Ontology + Harness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            <span>Physical AI</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
