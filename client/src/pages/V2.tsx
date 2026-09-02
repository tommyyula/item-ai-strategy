import { motion } from "framer-motion";
import { Fragment, useState, useEffect, type CSSProperties } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BrandLogo from "@/components/BrandLogo";
import CountUp from "@/components/CountUp";
import GlowCard from "@/components/GlowCard";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
   V2 — Strategic Partnership proposal.

   Every user-visible sentence comes from the `v2` namespace and the page
   renders one locale at a time; the English/Chinese stacked pairs the source
   deck used are split across `en` and `zh` in the dictionary.

   Money figures, metrics, hardware SKUs and company names are locale-invariant
   and stay in the constants below. The two CDN illustrations the deck used to
   hotlink are gone for good, so the hero is a token-built gradient wash and the
   ROI panel is a chart drawn from the same figures the page already states.
   --------------------------------------------------------------------------- */

/* --------------------------------- data ---------------------------------- */

const SECTIONS = [
  { id: "v2-hero", num: "00", key: "cover" },
  { id: "v2-opportunity", num: "01", key: "opportunity" },
  { id: "v2-model", num: "02", key: "model" },
  { id: "v2-infra", num: "03", key: "infra" },
  { id: "v2-roi", num: "04", key: "roi" },
  { id: "v2-verticals", num: "05", key: "verticals" },
  { id: "v2-proposal", num: "06", key: "engagement" },
  { id: "v2-next", num: "07", key: "next" },
] as const;

const OPPORTUNITY_CARDS = [
  { key: "gap", glow: "cyan", accent: "text-cyan-glow" },
  { key: "track", glow: "purple", accent: "text-purple-glow" },
  { key: "revenue", glow: "cyan", accent: "text-cyan-glow" },
] as const;

const LAYERS = [
  { key: "l3", badge: "L3", accent: "cyan" },
  { key: "l2", badge: "L2", accent: "purple" },
  { key: "l1", badge: "L1", accent: "cyan" },
] as const;

/** Hardware specification values — identical in every locale. */
const SPECS = [
  { key: "gpu", value: "8× H100 80GB SXM" },
  { key: "interconnect", value: "NVLink 4.0 + NVSwitch" },
  { key: "network", value: "400GbE InfiniBand" },
  { key: "location", value: "One Wilshire, LA" },
] as const;

const PILLARS = [
  { key: "security", icon: "🔒", glow: "cyan" },
  { key: "governance", icon: "📋", glow: "purple" },
  { key: "sla", icon: "⚡", glow: "purple" },
] as const;

/* ROI figures, exactly as the deck states them. */
const CLOUD_COST_K = 860; // $860K / year, public cloud
const PRIVATE_COST_K = 133; // $133K / year, private infrastructure
const AXIS_MAX_K = 900; // chart scale only — not a quoted figure

const SCENARIOS = [
  { key: "conservative", value: 195, tone: "text-muted-foreground", border: "border-border", glow: "cyan" },
  { key: "base", value: 425, tone: "text-cyan-glow", border: "border-cyan-glow/40", glow: "cyan" },
  { key: "optimistic", value: 793, tone: "text-purple-glow", border: "border-purple-glow/40", glow: "purple" },
] as const;

const ROI_METRICS = [
  { key: "cloudCost", value: "$860K", accent: false },
  { key: "privateCost", value: "$133K", accent: true },
  { key: "reduction", value: "85%", accent: true },
  { key: "payback", value: "< 6 mo", accent: false },
] as const;

const VERTICALS = [
  { key: "ecommerce", icon: "🛒", hardware: "1× ThinkSystem SR675 V3 (8×H100)", glow: "cyan" },
  { key: "supplyChain", icon: "🚛", hardware: "Edge servers + Cloud GPU burst", glow: "purple" },
  { key: "warehouse", icon: "🤖", hardware: "Edge NPU + ThinkEdge SE450", glow: "cyan" },
  { key: "multiAgent", icon: "🎙️", hardware: "3× ThinkSystem SR675 V3 cluster", glow: "purple" },
  { key: "retailEdge", icon: "🏪", hardware: "ThinkEdge SE30/SE50 fleet", glow: "cyan" },
  { key: "dataIntel", icon: "📊", hardware: "ThinkSystem SR650 V3 + GPU", glow: "purple" },
] as const;

const RETAINER_TIERS = [
  { key: "foundation", price: "$3,500/mo" },
  { key: "growth", price: "$7,500/mo" },
  { key: "enterprise", price: "$11,500/mo" },
] as const;

const PHASE1_FEE = "$107,800";
const YEAR_ONE_TOTAL = "$466K – $562K";

const NEXT_STEPS = [
  { key: "deepDive", num: "01" },
  { key: "pilot", num: "02" },
  { key: "gtm", num: "03" },
  { key: "agreement", num: "04" },
] as const;

/* -------------------------------- helpers -------------------------------- */

/** A tinted panel in one of the two brand hues — resolves per theme. */
const tint = (hue: "cyan" | "purple", strength = 12): CSSProperties => ({
  background: `linear-gradient(90deg, color-mix(in oklch, var(--${hue}-glow) ${strength}%, transparent), transparent 70%)`,
  borderColor: `color-mix(in oklch, var(--${hue}-glow) 34%, transparent)`,
});

const chip = (hue: "cyan" | "purple"): CSSProperties => ({
  color: `var(--${hue}-glow)`,
  background: `color-mix(in oklch, var(--${hue}-glow) 12%, transparent)`,
  borderColor: `color-mix(in oklch, var(--${hue}-glow) 34%, transparent)`,
});

/* -------------------------------- side nav -------------------------------- */

function V2SideNav() {
  const t = useT("v2.nav");
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(sorted[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -10% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label={t("label")}
      className="fixed left-0 top-0 h-screen z-40 hidden lg:flex flex-col items-center justify-center w-16 gap-1"
    >
      <div className="flex flex-col items-center gap-1 py-4 px-2 rounded-r-lg bg-card/80 backdrop-blur-md border-r border-t border-b border-border">
        {SECTIONS.map(({ id, num, key }) => {
          const title = t(key);
          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              aria-label={title}
              aria-current={active === id ? "true" : undefined}
              title={title}
              className="group relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300"
            >
              {active === id && (
                <motion.div
                  layoutId="v2-nav-active"
                  className="absolute inset-0 rounded-md bg-cyan-glow/15 border border-cyan-glow/40"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 text-xs font-mono font-medium transition-colors duration-300 ${
                  active === id ? "text-cyan-glow" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {num}
              </span>
              <span className="absolute left-full ml-3 px-2.5 py-1 rounded bg-popover border border-border text-xs text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-body shadow-sm">
                {title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ------------------------------ section title ----------------------------- */

function V2SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <AnimatedSection className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-cyan-glow tracking-widest uppercase">{number}</span>
        <div
          className="h-px w-12"
          style={{
            background: "linear-gradient(90deg, color-mix(in oklch, var(--cyan-glow) 60%, transparent), transparent)",
          }}
        />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight font-display">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">{subtitle}</p>}
    </AnimatedSection>
  );
}

/* ------------------------------ hero backdrop ----------------------------- */

/**
 * Replaces the dead CDN hero photograph. Two brand-hue washes over a masked
 * technical grid, all built from `color-mix` on the theme tokens so the
 * treatment re-tunes itself on a light ground instead of assuming black.
 */
function HeroWash() {
  const grid =
    "repeating-linear-gradient(90deg, color-mix(in oklch, var(--panel-border) 55%, transparent) 0 1px, transparent 1px 88px)," +
    "repeating-linear-gradient(0deg, color-mix(in oklch, var(--panel-border) 45%, transparent) 0 1px, transparent 1px 88px)";
  const mask = "radial-gradient(78% 68% at 50% 42%, black, transparent 80%)";

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 16% 6%, color-mix(in oklch, var(--cyan-glow) 28%, transparent), transparent 62%)," +
            "radial-gradient(105% 85% at 88% 20%, color-mix(in oklch, var(--purple-glow) 26%, transparent), transparent 60%)," +
            "radial-gradient(90% 70% at 50% 110%, color-mix(in oklch, var(--cyan-glow) 16%, transparent), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: grid, maskImage: mask, WebkitMaskImage: mask }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
    </div>
  );
}

/* ------------------------------- ROI chart -------------------------------- */

/**
 * Replaces the dead CDN infographic. A two-bar comparison drawn in CSS from the
 * two figures the deck already quotes — $860K/yr cloud against $133K/yr
 * private — with the gap between them called out as the stated 85% reduction.
 */
function RoiCostChart() {
  const t = useT("v2.roi.chart");
  const cloudPct = (CLOUD_COST_K / AXIS_MAX_K) * 100;
  const privatePct = (PRIVATE_COST_K / AXIS_MAX_K) * 100;

  const track =
    "repeating-linear-gradient(90deg, color-mix(in oklch, var(--panel-border) 45%, transparent) 0 1px, transparent 1px 10%)";

  const bars = [
    {
      key: "cloud",
      label: t("cloud"),
      amount: "$860K",
      pct: cloudPct,
      fill: "linear-gradient(90deg, color-mix(in oklch, var(--purple-glow) 45%, transparent), color-mix(in oklch, var(--purple-glow) 85%, transparent))",
      valueClass: "text-purple-glow",
    },
    {
      key: "private",
      label: t("private"),
      amount: "$133K",
      pct: privatePct,
      fill: "linear-gradient(90deg, color-mix(in oklch, var(--cyan-glow) 55%, transparent), color-mix(in oklch, var(--cyan-glow) 95%, transparent))",
      valueClass: "text-cyan-glow",
    },
  ];

  return (
    <figure className="panel m-0 p-6 md:p-8">
      <figcaption className="mb-6">
        <h3 className="text-lg font-bold font-display">{t("title")}</h3>
        <p className="text-sm text-muted-foreground">{t("caption")}</p>
      </figcaption>

      <div role="img" aria-label={t("alt")} className="space-y-7">
        {bars.map((bar) => (
          <div key={bar.key}>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <span className="text-sm text-muted-foreground">{bar.label}</span>
              <span className={`font-mono text-xl md:text-2xl font-bold ${bar.valueClass}`}>{bar.amount}</span>
            </div>
            <div className="relative h-6 rounded-full border border-border overflow-hidden" style={{ background: track }}>
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ width: `${bar.pct}%`, background: bar.fill }}
              />
            </div>
          </div>
        ))}

        {/* The gap between the two bars, annotated with the stated reduction. */}
        <div className="relative h-8">
          <div
            className="absolute top-0 h-8 border-x border-dashed border-cyan-glow/60"
            style={{ left: `${privatePct}%`, width: `${cloudPct - privatePct}%` }}
          >
            <div
              className="absolute inset-x-0 top-1/2 h-px"
              style={{ background: "color-mix(in oklch, var(--cyan-glow) 55%, transparent)" }}
            />
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-mono font-semibold"
              style={chip("cyan")}
            >
              {t("reduction")}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
        <span className="text-xs font-mono text-muted-foreground">{t("axis")}</span>
        <span className="text-xs text-muted-foreground">{t("payback")}</span>
      </div>
    </figure>
  );
}

/* --------------------------------- page ----------------------------------- */

export default function V2() {
  const t = useT("v2");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <V2SideNav />

      {/* ═══ SECTION 00: HERO ═══ */}
      <section id="v2-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroWash />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center mb-8">
              <BrandLogo heightClass="h-10 md:h-14" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-display">
              <span className="bg-gradient-to-r from-cyan-glow via-foreground to-purple-glow bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("hero.lede")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {t.list("hero.chips").map((label, i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <span className="text-cyan-glow" aria-hidden="true">
                      |
                    </span>
                  )}
                  <span className="font-mono">{label}</span>
                </Fragment>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SECTION 01: THE OPPORTUNITY ═══ */}
      <section id="v2-opportunity" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="01" title={t("opportunity.title")} subtitle={t("opportunity.subtitle")} />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {OPPORTUNITY_CARDS.map((card, i) => (
              <AnimatedSection key={card.key} delay={0.1 * (i + 1)}>
                <GlowCard className="p-8 h-full" glowColor={card.glow}>
                  <div className={`${card.accent} font-mono text-sm mb-3`}>{t(`opportunity.cards.${card.key}.kicker`)}</div>
                  <h3 className="text-xl font-bold font-display mb-4">{t(`opportunity.cards.${card.key}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`opportunity.cards.${card.key}.body`)}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 02: BUSINESS MODEL ═══ */}
      <section id="v2-model" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="02" title={t("model.title")} subtitle={t("model.subtitle")} />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 max-w-4xl mx-auto mt-8">
              {LAYERS.map((layer) => (
                <motion.div
                  key={layer.key}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-lg border"
                  style={tint(layer.accent, layer.key === "l1" ? 18 : 10)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div
                      className="w-16 h-16 shrink-0 rounded-lg border flex items-center justify-center text-2xl font-bold font-mono"
                      style={chip(layer.accent)}
                    >
                      {layer.badge}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display">{t(`model.layers.${layer.key}.title`)}</h3>
                      <p className="mt-2 text-muted-foreground">{t(`model.layers.${layer.key}.body`)}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-sm font-mono" style={{ color: `var(--${layer.accent}-glow)` }}>
                        {t(`model.layers.${layer.key}.tagLabel`)}
                      </div>
                      <div className="text-xs text-muted-foreground">{t(`model.layers.${layer.key}.tagValue`)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.2}>
              <GlowCard className="p-8 h-full">
                <h3 className="text-lg font-bold font-display mb-4">{t("model.valuePartner.title")}</h3>
                <ul className="space-y-3">
                  {t.list("model.valuePartner.bullets").map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-glow shrink-0" aria-hidden="true" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlowCard className="p-8 h-full" glowColor="purple">
                <div className="flex items-center gap-3 mb-4">
                  <BrandLogo heightClass="h-6" />
                  <h3 className="text-lg font-bold font-display">{t("model.valueItem.title")}</h3>
                </div>
                <ul className="space-y-3">
                  {t.list("model.valueItem.bullets").map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-glow shrink-0" aria-hidden="true" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 03: INFRASTRUCTURE SPEC ═══ */}
      <section id="v2-infra" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="03" title={t("infra.title")} subtitle={t("infra.subtitle")} />

          <AnimatedSection delay={0.1}>
            <GlowCard className="p-8 mt-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-cyan-glow animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                <h3 className="text-xl font-bold font-display">{t("infra.config.title")}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPECS.map((spec) => (
                  <div key={spec.key} className="p-4 rounded-lg bg-surface-veil border border-border">
                    <div className="text-xs font-mono text-cyan-glow mb-2">{t(`infra.config.specs.${spec.key}.label`)}</div>
                    <div className="text-lg font-bold font-display">{spec.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {t(`infra.config.specs.${spec.key}.detail`)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg border" style={tint("cyan", 10)}>
                <p className="text-sm text-muted-foreground">
                  <span className="text-cyan-glow font-mono font-bold">{t("infra.config.note.kicker")}</span>{" "}
                  {t("infra.config.note.body")}
                </p>
              </div>
            </GlowCard>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {PILLARS.map((pillar, i) => (
              <AnimatedSection key={pillar.key} delay={0.1 * (i + 1)}>
                <GlowCard className="p-6 h-full" glowColor={pillar.glow}>
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3">{t(`infra.pillars.${pillar.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(`infra.pillars.${pillar.key}.body`)}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 04: ROI ANALYSIS ═══ */}
      <section id="v2-roi" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="04" title={t("roi.title")} subtitle={t("roi.subtitle")} />

          <AnimatedSection delay={0.1}>
            <div className="mt-8">
              <RoiCostChart />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {SCENARIOS.map((item, i) => (
              <AnimatedSection key={item.key} delay={0.1 * (i + 1)}>
                <GlowCard className={`p-8 text-center h-full ${item.border}`} glowColor={item.glow}>
                  <div className="text-sm font-mono text-muted-foreground mb-4">{t(`roi.scenarios.${item.key}`)}</div>
                  <div className={`text-4xl md:text-5xl font-bold font-display ${item.tone}`}>
                    $<CountUp end={item.value} duration={2} />K
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{t("roi.netLabel")}</div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {ROI_METRICS.map((metric) => (
                <div key={metric.key} className="p-4 rounded-lg bg-surface-veil border border-border text-center">
                  <div className={`text-2xl font-bold font-display ${metric.accent ? "text-cyan-glow" : ""}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{t(`roi.metrics.${metric.key}`)}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 05: TARGET VERTICALS ═══ */}
      <section id="v2-verticals" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="05" title={t("verticals.title")} subtitle={t("verticals.subtitle")} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {VERTICALS.map((vertical, i) => (
              <AnimatedSection key={vertical.key} delay={0.08 * (i + 1)}>
                <GlowCard className="p-6 h-full flex flex-col" glowColor={vertical.glow}>
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {vertical.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display mb-3">{t(`verticals.items.${vertical.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`verticals.items.${vertical.key}.body`)}
                  </p>
                  <div className="mt-auto pt-4">
                    <div className="border-t border-border pt-3">
                      <div className="text-xs font-mono text-cyan-glow">{t("verticals.hardwareLabel")}</div>
                      <div className="text-sm text-foreground/90 mt-1">{vertical.hardware}</div>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 06: ENGAGEMENT MODEL ═══ */}
      <section id="v2-proposal" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="06" title={t("engagement.title")} subtitle={t("engagement.subtitle")} />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <AnimatedSection delay={0.1}>
              <GlowCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg font-bold font-mono"
                    style={chip("cyan")}
                  >
                    1
                  </div>
                  <h3 className="text-xl font-bold font-display">{t("engagement.phase1.title")}</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded bg-surface-veil border border-border">
                    <div className="flex justify-between items-center gap-3">
                      <span className="text-sm text-muted-foreground">{t("engagement.phase1.durationLabel")}</span>
                      <span className="font-mono text-cyan-glow">{t("engagement.phase1.durationValue")}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-surface-veil border border-border">
                    <div className="flex justify-between items-center gap-3">
                      <span className="text-sm text-muted-foreground">{t("engagement.phase1.feeLabel")}</span>
                      <span className="font-mono text-cyan-glow">{PHASE1_FEE}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("engagement.phase1.body")}</p>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlowCard className="p-8 h-full" glowColor="purple">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-lg font-bold font-mono"
                    style={chip("purple")}
                  >
                    2
                  </div>
                  <h3 className="text-xl font-bold font-display">{t("engagement.phase2.title")}</h3>
                </div>
                <div className="space-y-3">
                  {RETAINER_TIERS.map((tier) => (
                    <div key={tier.key} className="p-3 rounded bg-surface-veil border border-border">
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-sm font-bold">{t(`engagement.phase2.tiers.${tier.key}.name`)}</span>
                        <span className="font-mono text-purple-glow">{tier.price}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {t(`engagement.phase2.tiers.${tier.key}.desc`)}
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-3 rounded border" style={tint("purple", 10)}>
                    <div className="text-sm text-muted-foreground">
                      <span className="text-purple-glow font-mono font-bold">{t("engagement.phase2.totalLabel")}</span>{" "}
                      {YEAR_ONE_TOTAL} · {t("engagement.phase2.totalNote")}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 07: NEXT STEPS ═══ */}
      <section id="v2-next" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle number="07" title={t("next.title")} />

          <div className="max-w-3xl">
            <div className="space-y-6">
              {NEXT_STEPS.map((item, i) => (
                <AnimatedSection key={item.key} delay={0.1 * (i + 1)}>
                  <div className="flex gap-6 items-start">
                    <div
                      className="w-12 h-12 rounded-lg border flex items-center justify-center text-lg font-bold font-mono shrink-0"
                      style={chip("cyan")}
                    >
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display mb-2">{t(`next.steps.${item.key}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t(`next.steps.${item.key}.body`)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <BrandLogo heightClass="h-8" />
              </div>
              <p className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
                {t("next.closing.headline")}
              </p>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("next.closing.body")}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  );
}
