// TODO(i18n): copy in this section is still hardcoded English. It needs a
// `deck.v1.hero` dictionary (zh/en/ja/es) and `useT` — see
// client/src/i18n/CONVENTIONS.md.

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

/*
 * The original hero photograph lived on the CloudFront host that now 403s and
 * is unrecoverable, so the backdrop is built from the theme tokens instead:
 * two accent washes and a faint grid, both derived from --cyan-glow /
 * --purple-glow / --border, so the whole thing re-tunes itself in the light
 * theme rather than assuming a dark ground.
 */
const BACKDROP = `
  radial-gradient(58% 52% at 18% 12%, color-mix(in oklch, var(--cyan-glow) 24%, transparent), transparent 70%),
  radial-gradient(52% 48% at 84% 26%, color-mix(in oklch, var(--purple-glow) 22%, transparent), transparent 72%),
  radial-gradient(90% 60% at 50% 108%, color-mix(in oklch, var(--cyan-glow) 14%, transparent), transparent 75%),
  var(--background)
`;

/* Derived from --foreground so the grid stays visible on either ground:
   pale lines on the night theme, ink-tinted lines on the day theme. */
const GRID_LINE = "color-mix(in oklch, var(--foreground) 11%, transparent)";
const GRID_FADE = "radial-gradient(68% 58% at 50% 42%, #000 20%, transparent 100%)";

const LENOVO_LOGO = `${import.meta.env.BASE_URL}logos/lenovo.svg`;

/**
 * Lenovo ships a full-colour mark drawn for a light ground, so it gets a
 * neutral chip rather than a filter or an invert. The chip stays light in both
 * themes; the token border is what separates it from a light page. If the
 * artwork is missing the chip degrades to the brand name rather than to a
 * broken-image glyph.
 */
function PartnerLogo() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-sm font-semibold tracking-wide text-foreground">Lenovo</span>
    );
  }

  return (
    <span className="inline-flex items-center rounded border border-border/60 bg-white px-2 py-1 shadow-sm">
      <img
        src={LENOVO_LOGO}
        alt="Lenovo"
        className="h-4 w-auto object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();

  /** Entrance animation that collapses to a plain fade when motion is reduced. */
  const rise = (delay: number, y = 40) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Token-built backdrop */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: BACKDROP }} />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, ${GRID_LINE} 1px, transparent 1px),
                            linear-gradient(to bottom, ${GRID_LINE} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: GRID_FADE,
          WebkitMaskImage: GRID_FADE,
        }}
      />
      {/* Settle the backdrop into the page ground at the bottom edge. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/45 to-background"
      />

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-6">
        <motion.div {...rise(0.2, 30)}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 mb-8">
            <PartnerLogo />
            <span className="text-muted-foreground text-lg font-light" aria-hidden="true">
              &amp;
            </span>
            <BrandLogo heightClass="h-7" />
          </div>
        </motion.div>

        <motion.h1
          {...rise(0.4)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          <span className="block">From Digitalization to</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-glow via-foreground to-purple-glow bg-clip-text text-transparent">
            Physical AI
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.6)}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Item's AI Journey Over the Past Year — Practices, Challenges &amp; Cognitive Restructuring
        </motion.p>

        <motion.div
          {...(reduce
            ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
            : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1, delay: 0.9 } })}
          className="mt-6 mb-10"
        >
          <p className="text-sm font-mono text-cyan-glow tracking-wide">
            Item serves as the implementation foundation for all supply chain transformation
            projects across UNIS Group
          </p>
        </motion.div>

        <motion.div
          {...rise(1.2, 20)}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            <span>AI Middleware</span>
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
        transition={{ delay: reduce ? 0 : 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
