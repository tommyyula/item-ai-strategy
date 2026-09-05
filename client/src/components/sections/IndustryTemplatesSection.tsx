import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { useT } from "@/i18n/runtime";

/**
 * Layer 6 of the 7-layer architecture, drilled down: the ten pluggable
 * vertical templates.
 *
 * Copy lives in the `industryTemplates` namespace. Templates are keyed there
 * (`templates.chain` … `templates.retail`) because a dictionary node cannot be
 * an array of objects, so display order and the accent rhythm live here.
 *
 * Accents come from the design tokens only — `--cyan-glow`, `--purple-glow`
 * and the `--chart-*` ramp — and every tint, rule and badge is mixed from them
 * with `color-mix(in oklch, …)`, so the band reads the same way on a light
 * ground as on a dark one. Glow alphas ride on `--glow`, which the light theme
 * dials down to a lift rather than a bloom.
 */

type TemplateKey =
  | "chain"
  | "dock"
  | "trade"
  | "fin"
  | "dine"
  | "estate"
  | "build"
  | "health"
  | "auto"
  | "retail";

interface Template {
  key: TemplateKey;
  /** Token expression, never a literal colour. */
  accent: string;
  /** The one template that is live in production. */
  flagship?: boolean;
}

/**
 * Three accent families rather than ten unrelated hues:
 *   cyan   — the supply-chain lineage (ItemChain, and its two adjacencies)
 *   purple — the service verticals
 *   steel  — the industrial and commerce verticals
 * ItemChain alone carries the full-strength `--cyan-glow`; its neighbours sit
 * a step softer on `--chart-3`, so the flagship stays the brightest card.
 */
const CYAN = "var(--cyan-glow)";
const CYAN_SOFT = "var(--chart-3)";
const PURPLE = "var(--purple-glow)";
const STEEL = "var(--chart-5)";

const TEMPLATES: Template[] = [
  { key: "chain", accent: CYAN, flagship: true },
  { key: "dock", accent: CYAN_SOFT },
  { key: "trade", accent: CYAN_SOFT },
  { key: "fin", accent: PURPLE },
  { key: "dine", accent: PURPLE },
  { key: "estate", accent: PURPLE },
  { key: "build", accent: PURPLE },
  { key: "health", accent: STEEL },
  { key: "auto", accent: STEEL },
  { key: "retail", accent: STEEL },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/** Card surface: accent rule, accent wash, and a halo that scales with --glow. */
function cardSurface(accent: string, flagship: boolean): CSSProperties {
  return {
    "--tpl": accent,
    "--tpl-glow": `color-mix(in oklch, var(--tpl) calc(${
      flagship ? 26 : 16
    }% * var(--glow)), transparent)`,
    borderLeftColor: `color-mix(in oklch, var(--tpl) ${flagship ? 90 : 62}%, transparent)`,
    backgroundImage: `linear-gradient(105deg, color-mix(in oklch, var(--tpl) ${
      flagship ? 14 : 7
    }%, transparent), color-mix(in oklch, var(--tpl) ${flagship ? 4 : 2}%, transparent))`,
  } as CSSProperties;
}

/**
 * Accent text pulled toward `--foreground` so the small mono label keeps its
 * contrast in both themes — `--foreground` is dark on the light ground and
 * light on the dark one, so the same mix lifts contrast either way.
 */
const ACCENT_TEXT: CSSProperties = {
  color: "color-mix(in oklch, var(--tpl) 82%, var(--foreground))",
};

const BADGE: CSSProperties = {
  color: "color-mix(in oklch, var(--tpl) 78%, var(--foreground))",
  borderColor: "color-mix(in oklch, var(--tpl) 55%, transparent)",
  backgroundColor: "color-mix(in oklch, var(--tpl) 16%, transparent)",
};

interface TemplateCardProps {
  template: Template;
  delay: number;
  still: boolean;
}

function TemplateCard({ template, delay, still }: TemplateCardProps) {
  const t = useT("industryTemplates");
  const { key, accent, flagship = false } = template;

  return (
    <motion.li
      className="h-full"
      initial={still ? false : { opacity: 0, y: 16 }}
      whileInView={still ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: still ? 0 : delay, ease: EASE }}
    >
      <article
        style={cardSurface(accent, flagship)}
        className={[
          "flex h-full flex-col rounded-r-[10px] border border-l-[3px] px-4 py-4",
          "transition-[transform,border-color,box-shadow] duration-300",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          "hover:-translate-y-0.5 hover:shadow-[0_0_26px_var(--tpl-glow)]",
          flagship
            ? "border-l-[4px] border-cyan-glow/45 shadow-[0_0_22px_var(--tpl-glow)] hover:border-cyan-glow/75"
            : "border-border hover:border-cyan-glow/40",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-[15px] font-bold leading-snug text-foreground">
            {t(`templates.${key}.name`)}
          </h3>
          {flagship && (
            <span
              style={BADGE}
              className="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase leading-[1.4] tracking-[0.1em]"
            >
              <span aria-hidden="true">✓ </span>
              {t("provenBadge")}
            </span>
          )}
        </div>

        <p
          style={ACCENT_TEXT}
          className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em]"
        >
          {t(`templates.${key}.category`)}
        </p>

        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
          {t(`templates.${key}.desc`)}
        </p>
      </article>
    </motion.li>
  );
}

/** Closing note: accent left rule over a faint cyan wash. */
const CALLOUT_SURFACE = {
  borderLeftColor: "color-mix(in oklch, var(--cyan-glow) 70%, transparent)",
  backgroundImage:
    "linear-gradient(100deg, color-mix(in oklch, var(--cyan-glow) 8%, transparent), transparent 70%)",
} as CSSProperties;

export default function IndustryTemplatesSection() {
  const t = useT("industryTemplates");
  const still = useReducedMotion() ?? false;

  return (
    <section id="industry-templates" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        {/* The running deck number stays in the title slot, matching SideNav;
            the layer badge below ties this drill-down back to the 7-layer
            diagram two sections up. */}
        <SectionTitle number="10" title={t("title")} subtitle={t("lede")} />

        {/* Second half of the intro — the proven clause carries the accent. */}
        <AnimatedSection className="-mt-8 mb-12 max-w-3xl" delay={0.05}>
          <span className="mb-4 inline-flex items-center rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-glow">
            {t("eyebrow")}
          </span>
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="font-semibold text-cyan-glow">{t("provenLead")}</span>
            {t("provenRest")}
          </p>
        </AnimatedSection>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {TEMPLATES.map((template, i) => (
            <TemplateCard
              key={template.key}
              template={template}
              delay={0.04 * i}
              still={still}
            />
          ))}
        </ul>

        <AnimatedSection className="mt-10" delay={0.1}>
          <div
            style={CALLOUT_SURFACE}
            className="rounded-r-[10px] border border-l-[3px] border-border px-5 py-4"
          >
            <p className="font-display text-sm font-semibold text-cyan-glow">
              {t("callout.label")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("callout.body")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
