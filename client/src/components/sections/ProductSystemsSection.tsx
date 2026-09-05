import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import SectionTitle from "@/components/SectionTitle";
import { useT } from "@/i18n/runtime";

/**
 * The five product systems — the detail view of Architecture layers 2–6.
 *
 * Copy lives in the `productSystems` namespace. Cards are keyed there
 * (`cards.ontology` … `cards.harness`) because a dictionary node cannot be an
 * array of objects, so display order, the accent assignment and the per-card
 * structure (featured band, environments strip, commercial line) are held here.
 *
 * Every card accent is a design-system token — `--cyan-glow`, `--purple-glow`
 * and the `--chart-*` ramp — and every tint, edge, badge and glow is mixed
 * from it with `color-mix(in oklch, …)`, exactly as ArchitectureSection does.
 * No literal colour appears anywhere in this file, so the band reads the same
 * way on a light ground as on a dark one.
 */

type CardKey = "ontology" | "foundry" | "aiOs" | "aip" | "harness";

interface CardSpec {
  key: CardKey;
  /** A token from the palette, never a literal — see the note above. */
  accent: string;
  /** Ordered sub-card keys; empty when the card lists bare product names. */
  products: readonly string[];
  /** `cards.<key>.productNames` rendered as compact mono chips (AI OS). */
  chips?: true;
  /** `cards.<key>.feature`, shown above the products (AI OS). */
  feature?: true;
  /** `cards.<key>.environments` as a full-width divided band (Harness). */
  environments?: true;
  /** Harness carries no commercial-role line in the source. */
  commercial?: true;
  /** The fifth card spans the grid beneath the 2×2. */
  wide?: true;
}

const CARDS: readonly CardSpec[] = [
  // The moat layer: purple is the deck's strategic accent, and holding it
  // apart from the cyan family marks Ontology as the one layer never sold.
  { key: "ontology", accent: "var(--purple-glow)", products: ["p1", "p2"], commercial: true },
  // The data/build substrate sits next to the flagship cyan without becoming
  // it — chart-3 is the softer cyan of the ramp.
  { key: "foundry", accent: "var(--chart-3)", products: ["p1", "p2"], commercial: true },
  // The operational surface people actually look at gets the primary brand
  // accent, which is contrast-tuned per theme.
  {
    key: "aiOs",
    accent: "var(--cyan-glow)",
    products: [],
    chips: true,
    feature: true,
    commercial: true,
  },
  // Action is the sibling of meaning: the deeper violet of the ramp reads as
  // Ontology's counterpart at the runtime end.
  { key: "aip", accent: "var(--chart-4)", products: ["p1", "p2", "p3"], commercial: true },
  // Delivery is plumbing: chart-5 is the most neutral step of the ramp, so
  // the widest card does not shout over the four above it.
  {
    key: "harness",
    accent: "var(--chart-5)",
    products: ["p1", "p2", "p3"],
    environments: true,
    wide: true,
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Everything the card paints with, derived from one accent token.
 * `--ps-ink` pulls the accent toward `--foreground` so small accent text stays
 * legible on either ground, and `--ps-glow` rides on `--glow` so the light
 * theme lifts instead of blooming.
 */
function accentVars(accent: string): CSSProperties {
  return {
    "--ps-accent": accent,
    "--ps-ink": "color-mix(in oklch, var(--ps-accent) 55%, var(--foreground))",
    "--ps-edge": "color-mix(in oklch, var(--ps-accent) 35%, transparent)",
    "--ps-edge-strong": "color-mix(in oklch, var(--ps-accent) 62%, transparent)",
    "--ps-tint": "color-mix(in oklch, var(--ps-accent) 12%, transparent)",
    "--ps-tint-soft": "color-mix(in oklch, var(--ps-accent) 6%, transparent)",
    "--ps-glow": "color-mix(in oklch, var(--ps-accent) calc(26% * var(--glow)), transparent)",
    backgroundImage:
      "linear-gradient(150deg, color-mix(in oklch, var(--ps-accent) 11%, transparent), color-mix(in oklch, var(--ps-accent) 3%, transparent) 58%, transparent)",
  } as CSSProperties;
}

const CHIP =
  "rounded-full border border-[color:var(--ps-edge)] bg-[color:var(--ps-tint-soft)] px-2.5 py-1 font-mono text-[10.5px] leading-none text-[color:var(--ps-ink)]";

interface SystemCardProps {
  spec: CardSpec;
  delay: number;
  still: boolean;
}

function SystemCard({ spec, delay, still }: SystemCardProps) {
  const t = useT("productSystems");
  const { key } = spec;
  const commercial = t.raw<string>(`cards.${key}.commercial`);

  return (
    <motion.article
      style={accentVars(spec.accent)}
      initial={still ? false : { opacity: 0, y: 24 }}
      whileInView={still ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: still ? 0 : delay, ease: EASE }}
      className={[
        "flex h-full flex-col rounded-xl border border-[color:var(--ps-edge)] bg-card p-6 md:p-7",
        "transition-[transform,border-color,box-shadow] duration-300",
        "hover:-translate-y-0.5 hover:border-[color:var(--ps-edge-strong)]",
        "hover:shadow-[0_0_34px_var(--ps-glow)]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        spec.wide ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      {/* Numbered eyebrow, with the positioning badge opposite it. */}
      {/* Wraps rather than squeezes: the longest badge and eyebrow translations
          do not fit side by side on a phone. */}
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-[color:var(--ps-ink)]">
          {t(`cards.${key}.eyebrow`)}
        </p>
        <span className="shrink-0 rounded-full border border-[color:var(--ps-edge-strong)] bg-[color:var(--ps-tint)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[color:var(--ps-ink)]">
          {t(`cards.${key}.badge`)}
        </span>
      </div>

      <h3 className="mt-2.5 font-display text-2xl font-bold leading-tight text-foreground md:text-[28px]">
        {t(`cards.${key}.name`)}
      </h3>

      {/* Design / Purpose — the two words carry as inline labels. */}
      <div className="mt-4 flex flex-col gap-2 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          {/* The label carries its own punctuation, so CJK gets "：" and the
              latin locales an em dash without the component guessing. */}
          <span className="mr-1 font-semibold text-foreground">{t("labels.design")}</span>
          {t(`cards.${key}.design`)}
        </p>
        <p>
          <span className="mr-1 font-semibold text-foreground">{t("labels.purpose")}</span>
          {t(`cards.${key}.purpose`)}
        </p>
      </div>

      {/* Featured band — Agent Runtime sits above the product list, not in it. */}
      {spec.feature && (
        <div className="mt-5 rounded-lg border border-[color:var(--ps-edge-strong)] bg-[color:var(--ps-tint)] px-4 py-3 shadow-[0_0_22px_var(--ps-glow)]">
          <p className="font-display text-base font-bold leading-tight text-[color:var(--ps-ink)]">
            {t(`cards.${key}.feature.name`)}
          </p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">
            {t(`cards.${key}.feature.note`)}
          </p>
        </div>
      )}

      {/* Products — sub-cards with a coloured left border. */}
      {spec.products.length > 0 && (
        <ul className="mt-5 flex flex-col gap-2">
          {spec.products.map((p) => (
            <li
              key={p}
              className="rounded-r-md border-l-2 border-[color:var(--ps-edge-strong)] bg-[color:var(--ps-tint-soft)] py-2 pl-3 pr-3"
            >
              <p className="font-mono text-[12.5px] leading-snug text-foreground">
                {t(`cards.${key}.products.${p}.name`)}
              </p>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted-foreground">
                {t(`cards.${key}.products.${p}.note`)}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Eight application names, a flat list with no sub-labels. */}
      {spec.chips && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {t.list(`cards.${key}.productNames`).map((name) => (
            <li
              key={name}
              className="rounded-md border border-[color:var(--ps-edge)] bg-[color:var(--ps-tint-soft)] px-2 py-1 font-mono text-[11px] leading-none text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      {/* Environments — one full-width band, divided rather than spaced. */}
      {spec.environments && (
        <ul className="mt-5 grid grid-cols-2 overflow-hidden rounded-lg border border-[color:var(--ps-edge)] bg-[color:var(--ps-tint-soft)] sm:grid-cols-4">
          {t.list(`cards.${key}.environments`).map((env) => (
            <li
              key={env}
              className="border-[color:var(--ps-edge)] px-3 py-2.5 text-center font-mono text-[11.5px] text-[color:var(--ps-ink)] [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t sm:[&:not(:first-child)]:border-l sm:[&:nth-child(n+3)]:border-t-0"
            >
              {env}
            </li>
          ))}
        </ul>
      )}

      {/* Capabilities — pushed to the foot so cards in a row line up. */}
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {t.list(`cards.${key}.caps`).map((cap) => (
          <li key={cap} className={CHIP}>
            {cap}
          </li>
        ))}
      </ul>

      {/* Commercial role, separated by a rule. Absent on Harness. */}
      {typeof commercial === "string" && (
        <p className="mt-5 border-t border-border pt-4 text-[12px] leading-relaxed text-muted-foreground">
          <span className="mr-1 font-mono uppercase tracking-[0.12em] text-[color:var(--ps-ink)]">
            {t("labels.commercial")}
          </span>
          {commercial}
        </p>
      )}
    </motion.article>
  );
}

export default function ProductSystemsSection() {
  const t = useT("productSystems");
  const still = useReducedMotion() ?? false;

  return (
    <section id="product-systems" className="py-24 md:py-32" aria-label={t("title")}>
      <div className="container max-w-6xl">
        <SectionTitle number="09" title={t("title")} subtitle={t("subtitle")} />

        {/* Four in a 2×2, the fifth spanning beneath — one column on small screens. */}
        <div className="grid gap-5 lg:grid-cols-2">
          {CARDS.map((spec, i) => (
            <SystemCard key={spec.key} spec={spec} delay={0.06 * i} still={still} />
          ))}
        </div>
      </div>
    </section>
  );
}
