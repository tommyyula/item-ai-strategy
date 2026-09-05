import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { useT } from "@/i18n/runtime";

/**
 * The original hero used a hosted `hero-bg-*.webp` that is gone for good.
 * It is replaced by a token-built wash: two accent auroras plus a masked
 * grid, both derived from `--cyan-glow` / `--purple-glow` / `--panel-border`
 * via color-mix, so the treatment follows the active theme instead of
 * assuming a dark ground.
 */
const AURORA = `
  radial-gradient(58% 52% at 20% 16%, color-mix(in oklch, var(--cyan-glow) 26%, transparent) 0%, transparent 70%),
  radial-gradient(52% 48% at 84% 26%, color-mix(in oklch, var(--purple-glow) 24%, transparent) 0%, transparent 72%),
  radial-gradient(90% 60% at 50% 104%, color-mix(in oklch, var(--cyan-glow) 14%, transparent) 0%, transparent 76%)
`;

const GRID_LINE = "color-mix(in oklch, var(--panel-border) 55%, transparent)";
const GRID = `
  linear-gradient(to right, ${GRID_LINE} 1px, transparent 1px),
  linear-gradient(to bottom, ${GRID_LINE} 1px, transparent 1px)
`;
const GRID_MASK = "radial-gradient(68% 58% at 50% 38%, #000 0%, transparent 100%)";

/** Running order for today's session, in the order it is presented. */
const AGENDA = ["intro", "tour", "pa", "hrm", "cx", "ontology", "qa"] as const;

export default function HeroSection() {
  const t = useT("deck.hero");
  const ui = useT("common.ui");
  const reduce = useReducedMotion();

  /** Slide-in offsets collapse to a plain fade when motion is reduced. */
  const rise = (y: number, delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.2 : 1, delay: reduce ? 0 : delay },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-28 lg:py-24"
    >
      {/* Token-built background wash (replaces the lost hero illustration) */}
      <div aria-hidden className="absolute inset-0" style={{ backgroundImage: AURORA }} />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: GRID,
          backgroundSize: "72px 72px",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"
      />

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-6">
        <motion.div {...rise(30, 0.2)}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-cyan-glow/30 bg-surface-veil-strong backdrop-blur-sm mb-8">
            <BrandLogo heightClass="h-7" />
          </div>
        </motion.div>

        <motion.h1
          {...rise(40, 0.4)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground"
        >
          <span className="block">{t("titleLead")}</span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-glow via-foreground to-purple-glow bg-clip-text text-transparent">
            {t("titleAccent")}
          </span>
        </motion.h1>

        <motion.p
          {...rise(40, 0.6)}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 1, delay: reduce ? 0 : 0.9 }}
          className="mt-2 mb-10"
        >
          <p className="text-sm font-mono text-cyan-glow tracking-wide">{t("statement")}</p>
        </motion.div>

        <motion.div
          {...rise(20, 1.2)}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            {t("pills.middleware")}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-glow" />
            {t("pills.ontologyHarness")}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
            {t("pills.physicalAi")}
          </span>
        </motion.div>

        {/* Running order for today's session */}
        <motion.div {...rise(24, 1.5)} className="mx-auto mt-12 max-w-2xl">
          <div className="panel px-5 py-5 text-left sm:px-7 sm:py-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-cyan-glow">
                  {t("agenda.badge")}
                </span>
                <h2 className="text-base font-semibold text-foreground sm:text-lg">
                  {t("agenda.title")}
                </h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{t("agenda.meta")}</span>
            </div>

            <ol className="space-y-0.5">
              {AGENDA.map((key) => {
                const duration = t(`agenda.items.${key}.duration`);
                const owner = t(`agenda.items.${key}.owner`);
                return (
                  <li
                    key={key}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-md px-2 py-2 transition-colors hover:bg-surface-veil"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-cyan-glow"
                    />
                    <span className="min-w-0 flex-1 text-sm text-foreground sm:text-[0.95rem]">
                      {t(`agenda.items.${key}.topic`)}
                    </span>
                    {duration && (
                      <span className="shrink-0 font-mono text-xs text-cyan-glow">{duration}</span>
                    )}
                    {owner && (
                      <span className="shrink-0 text-xs text-muted-foreground sm:w-28 sm:text-right">
                        {owner}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
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
          <span className="text-xs font-mono tracking-widest uppercase">{ui("scroll")}</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
