import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useT } from "@/i18n/runtime";

/**
 * The 7-layer platform architecture.
 *
 * Copy lives in the `architecture` namespace. Layers are keyed there
 * (`layers.l7` … `layers.l1`) because a dictionary node cannot be an array of
 * objects, so display order and the core/integration tone are held here.
 */

type LayerKey = "l7" | "l6" | "l5" | "l4" | "l3" | "l2" | "l1";

/** Layers 2–6 are ITEM product; 1 and 7 are open integration points. */
const CORE_LAYERS: LayerKey[] = ["l6", "l5", "l4", "l3", "l2"];

/**
 * Every tint is mixed from `--cyan-glow`, which is re-tuned per theme, so the
 * band reads the same way on a light ground as on a dark one.
 */
const CORE_SURFACE = {
  backgroundImage:
    "linear-gradient(90deg, color-mix(in oklch, var(--cyan-glow) 20%, transparent), color-mix(in oklch, var(--cyan-glow) 6%, transparent))",
  /* Hover halo: alpha rides on --glow, so the light theme lifts instead of blooming. */
  "--layer-glow": "color-mix(in oklch, var(--cyan-glow) calc(22% * var(--glow)), transparent)",
} as CSSProperties;

const INTEG_SURFACE = {
  backgroundImage:
    "linear-gradient(90deg, var(--surface-veil), color-mix(in oklch, var(--panel-border) 8%, transparent))",
} as CSSProperties;

const ROW_GRID =
  "grid gap-x-5 gap-y-2 md:grid-cols-[9rem_minmax(0,1fr)_17rem] md:items-center rounded-[10px] px-4 py-3.5 md:px-5";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface LayerRowProps {
  layer: LayerKey;
  tone: "core" | "integ";
  delay: number;
  still: boolean;
}

function LayerRow({ layer, tone, delay, still }: LayerRowProps) {
  const t = useT("architecture");
  const core = tone === "core";
  const protocols = t.raw<string>(`layers.${layer}.protocols`);

  return (
    <motion.li
      initial={still ? false : { opacity: 0, x: -18 }}
      whileInView={still ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: still ? 0 : delay, ease: EASE }}
    >
      <div
        style={core ? CORE_SURFACE : INTEG_SURFACE}
        className={[
          ROW_GRID,
          "border transition-[transform,border-color,box-shadow] duration-300",
          "motion-reduce:transition-none motion-reduce:hover:translate-x-0",
          core
            ? "border-solid border-cyan-glow/40 hover:translate-x-1 hover:border-cyan-glow/75 hover:shadow-[0_0_26px_var(--layer-glow)]"
            : "border-dashed border-border hover:border-cyan-glow/40",
        ].join(" ")}
      >
        <p
          className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
            core ? "text-cyan-glow" : "text-muted-foreground"
          }`}
        >
          {t(`layers.${layer}.num`)}
        </p>

        <div className="min-w-0">
          <h3
            className={`font-display text-[15px] font-bold leading-snug ${
              core ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {t(`layers.${layer}.name`)}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {t(`layers.${layer}.desc`)}
          </p>
        </div>

        <p
          className={`font-mono text-[10.5px] leading-relaxed md:text-right ${
            core ? "text-cyan-glow" : "text-muted-foreground"
          }`}
        >
          {t(`layers.${layer}.prod`)}
          {typeof protocols === "string" && (
            <>
              <br />
              {protocols}
            </>
          )}
        </p>
      </div>
    </motion.li>
  );
}

export default function ArchitectureSection() {
  const t = useT("architecture");
  const still = useReducedMotion() ?? false;

  return (
    <section id="architecture" className="py-24 md:py-32" aria-labelledby="architecture-title">
      <div className="container max-w-6xl">
        {/* Heading — same shape as the other section titles in the deck. */}
        <motion.div
          className="mb-12"
          initial={still ? false : { opacity: 0, y: 40 }}
          whileInView={still ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-sm uppercase tracking-widest text-cyan-glow/70">
              {t("eyebrow")}
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
          </div>
          <h2
            id="architecture-title"
            className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {t("lede")}
          </p>
        </motion.div>

        {/* Stack — rendered top-down, Layer 7 first. */}
        <ul className="flex flex-col gap-1.5">
          <LayerRow layer="l7" tone="integ" delay={0} still={still} />

          <li>
            <div className="rounded-r-[10px] border-l-2 border-cyan-glow/50 py-1 pl-3 md:pl-4">
              <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.15em] text-cyan-glow">
                {t("brace")}
              </p>
              <ul className="flex flex-col gap-1.5">
                {CORE_LAYERS.map((layer, i) => (
                  <LayerRow
                    key={layer}
                    layer={layer}
                    tone="core"
                    delay={0.06 * (i + 1)}
                    still={still}
                  />
                ))}
              </ul>
            </div>
          </li>

          <LayerRow layer="l1" tone="integ" delay={0.42} still={still} />
        </ul>

        {/* Legend — which band is ITEM product and which is integration. */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <p className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
            <span
              aria-hidden="true"
              style={CORE_SURFACE}
              className="h-3.5 w-7 shrink-0 rounded border border-cyan-glow/40"
            />
            {t("legend.core")}
          </p>
          <p className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
            <span
              aria-hidden="true"
              style={INTEG_SURFACE}
              className="h-3.5 w-7 shrink-0 rounded border border-dashed border-border"
            />
            {t("legend.integ")}
          </p>
        </div>
      </div>
    </section>
  );
}
