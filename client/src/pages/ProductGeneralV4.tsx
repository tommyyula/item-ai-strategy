import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ChevronsUp } from "lucide-react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
 * ITEM AI — cross-industry AI operating system.
 *
 * Ported from reference/manus-pages/product_general_v4.html. The original was a
 * standalone dark-only page whose English and Chinese copy were stacked in the
 * same markup and toggled with a class on <html>. Here every string comes from
 * `pages.productGeneralV4`, exactly one locale renders, and the whole page is
 * rebuilt on the repo's design tokens so it reads in both day and night.
 * ------------------------------------------------------------------------- */

/* ── Shapes of the structured dictionary content ───────────────────────── */
type Stat = { value: string; label: string };
type StatCard = { value: string; title: string; body: string };
type Layer = { id: string; name: string; desc: string };
type UniversalProduct = { name: string; code: string; desc: string };
type TemplateProduct = {
  name: string;
  code: string;
  industry: string;
  desc: string;
  replaces: string;
};
type Vertical = { name: string; tam: string; desc: string };
type IntegrationCard = { label: string; body: string };
type Tier = { price: string; name: string; desc: string };
type Row = { label: string; value: string };
type Phase = {
  tag: string;
  title: string;
  objectives: string[];
  kpis: Record<string, Stat>;
};
type Rung = { stage: string; meta: string; desc: string; value: string };

type Translator = ReturnType<typeof useT>;

/**
 * Pull an ordered slice out of a dictionary group. Repeated content is stored
 * as keyed objects (a dictionary leaf may only be a string, a string array, or
 * a nested group), so the component owns the display order.
 */
function group<T>(t: Translator, path: string, order: readonly string[]) {
  const node = t.raw<Record<string, T>>(path) ?? ({} as Record<string, T>);
  return order.filter((k) => node[k] !== undefined).map((k) => ({ key: k, item: node[k] }));
}

/* ── Tone palette ─────────────────────────────────────────────────────────
 * Every tone carries a light and a dark value, so nothing here assumes a dark
 * ground. `cyan` and `purple` use the repo's accent tokens, which already
 * resolve to a legible value in the day theme.                              */
const TONE = {
  cyan: {
    text: "text-cyan-glow",
    tint: "bg-cyan-glow/10",
    edge: "border-cyan-glow/40",
    hover: "hover:border-cyan-glow/70",
    bar: "from-cyan-glow/80 to-cyan-glow/10",
  },
  purple: {
    text: "text-purple-glow",
    tint: "bg-purple-glow/10",
    edge: "border-purple-glow/40",
    hover: "hover:border-purple-glow/70",
    bar: "from-purple-glow/80 to-purple-glow/10",
  },
  sky: {
    text: "text-sky-700 dark:text-sky-300",
    tint: "bg-sky-500/10",
    edge: "border-sky-500/40",
    hover: "hover:border-sky-500/70",
    bar: "from-sky-500/80 to-sky-500/10",
  },
  emerald: {
    text: "text-emerald-700 dark:text-emerald-300",
    tint: "bg-emerald-500/10",
    edge: "border-emerald-500/40",
    hover: "hover:border-emerald-500/70",
    bar: "from-emerald-500/80 to-emerald-500/10",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-300",
    tint: "bg-amber-500/10",
    edge: "border-amber-500/40",
    hover: "hover:border-amber-500/70",
    bar: "from-amber-500/80 to-amber-500/10",
  },
  orange: {
    text: "text-orange-700 dark:text-orange-300",
    tint: "bg-orange-500/10",
    edge: "border-orange-500/40",
    hover: "hover:border-orange-500/70",
    bar: "from-orange-500/80 to-orange-500/10",
  },
  teal: {
    text: "text-teal-700 dark:text-teal-300",
    tint: "bg-teal-500/10",
    edge: "border-teal-500/40",
    hover: "hover:border-teal-500/70",
    bar: "from-teal-500/80 to-teal-500/10",
  },
  rose: {
    text: "text-rose-700 dark:text-rose-300",
    tint: "bg-rose-500/10",
    edge: "border-rose-500/40",
    hover: "hover:border-rose-500/70",
    bar: "from-rose-500/80 to-rose-500/10",
  },
  neutral: {
    text: "text-muted-foreground",
    tint: "bg-surface-veil",
    edge: "border-border",
    hover: "hover:border-border",
    bar: "from-muted-foreground/50 to-muted-foreground/10",
  },
} as const;

type ToneName = keyof typeof TONE;

/* ── Section index, shared by the rail and the prev/next control ───────── */
const SECTIONS = [
  { id: "pg4-hero", num: "00", labelKey: "nav.hero" },
  { id: "pg4-problem", num: "01", labelKey: "problem.eyebrow" },
  { id: "pg4-shift", num: "02", labelKey: "shift.eyebrow" },
  { id: "pg4-platform", num: "03", labelKey: "platform.eyebrow" },
  { id: "pg4-products", num: "04", labelKey: "products.eyebrow" },
  { id: "pg4-verticals", num: "05", labelKey: "verticals.eyebrow" },
  { id: "pg4-integration", num: "06", labelKey: "integration.eyebrow" },
  { id: "pg4-commercial", num: "07", labelKey: "commercial.eyebrow" },
  { id: "pg4-roadmap", num: "08", labelKey: "roadmap.eyebrow" },
  { id: "pg4-valuation", num: "09", labelKey: "valuation.eyebrow" },
] as const;

/* ── Small building blocks ─────────────────────────────────────────────── */

/** Fade-and-lift on first scroll into view; static under reduced motion. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out ${
        shown ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

function Divider() {
  return <div className="section-divider mx-auto w-full max-w-[1180px]" aria-hidden="true" />;
}

function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" aria-hidden="true" />
      <span className="text-cyan-glow">{num}</span>
      <span>{children}</span>
    </div>
  );
}

/** Section heading: a lead clause plus one (or two) accented clauses. */
function Heading({
  lead,
  accent,
  accentTone = "cyan",
  accentB,
  accentBTone = "orange",
  tail,
  gap,
}: {
  lead: string;
  accent: string;
  accentTone?: ToneName;
  accentB?: string;
  accentBTone?: ToneName;
  tail?: string;
  gap: string;
}) {
  return (
    <h2 className="font-display text-3xl font-extrabold leading-[1.16] tracking-tight text-foreground md:text-4xl lg:text-[2.7rem]">
      <span>{lead}</span>
      <span className={TONE[accentTone].text}>
        {gap}
        {accent}
      </span>
      {accentB && (
        <>
          <span> + </span>
          <span className={TONE[accentBTone].text}>{accentB}</span>
        </>
      )}
      {tail && (
        <span>
          {gap}
          {tail}
        </span>
      )}
    </h2>
  );
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{children}</p>
  );
}

function Card({
  children,
  className = "",
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: ToneName;
}) {
  return (
    <div
      style={{ boxShadow: "var(--panel-shadow)" }}
      className={`rounded-xl border border-border bg-card p-6 transition-colors ${
        tone ? `${TONE[tone].tint} ${TONE[tone].hover}` : "hover:border-cyan-glow/40"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 block font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </span>
  );
}

/* ── Navigation: a section rail plus a prev/next stepper ───────────────── */

function useActiveSection() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-12% 0px -12% 0px" },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return active;
}

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionRail({ t, active }: { t: Translator; active: string }) {
  return (
    <nav
      aria-label={t("nav.jumpTo")}
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-1 rounded-r-xl border border-l-0 border-border bg-card/80 px-2 py-3 backdrop-blur-md">
        {SECTIONS.map((s) => {
          const label = t(s.labelKey);
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => goTo(s.id)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                title={label}
                className={`group relative flex h-9 w-9 items-center justify-center rounded-md font-mono text-[11px] transition-colors ${
                  isActive
                    ? "bg-cyan-glow/15 text-cyan-glow"
                    : "text-muted-foreground hover:bg-surface-veil hover:text-foreground"
                }`}
              >
                {s.num}
                <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 xl:block">
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function StepControls({ t, active }: { t: Translator; active: string }) {
  const index = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === active),
  );
  const step = useCallback(
    (delta: number) => {
      const next = SECTIONS[index + delta];
      if (next) goTo(next.id);
    },
    [index],
  );

  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/85 text-foreground/80 backdrop-blur-md transition-colors hover:border-cyan-glow/60 hover:text-foreground disabled:cursor-default disabled:opacity-35 disabled:hover:border-border";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <button
        type="button"
        className={btn}
        onClick={() => goTo(SECTIONS[0].id)}
        disabled={index === 0}
        aria-label={t("nav.top")}
        title={t("nav.top")}
      >
        <ChevronsUp className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => step(-1)}
        disabled={index === 0}
        aria-label={t("nav.prev")}
        title={t("nav.prev")}
      >
        <ChevronUp className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => step(1)}
        disabled={index === SECTIONS.length - 1}
        aria-label={t("nav.next")}
        title={t("nav.next")}
      >
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

/* ── Ordering and tone metadata for the keyed dictionary groups ────────── */
const HERO_STATS = ["tam", "products", "verticals", "cagr"] as const;
const PROBLEM_CARDS: ReadonlyArray<{ key: string; tone: ToneName }> = [
  { key: "manual", tone: "rose" },
  { key: "cost", tone: "amber" },
  { key: "integration", tone: "orange" },
];
const LAYERS: ReadonlyArray<{ key: string; tone: ToneName; core: boolean }> = [
  { key: "l7", tone: "neutral", core: false },
  { key: "l6", tone: "teal", core: true },
  { key: "l5", tone: "purple", core: true },
  { key: "l4", tone: "orange", core: true },
  { key: "l3", tone: "emerald", core: true },
  { key: "l2", tone: "cyan", core: true },
  { key: "l1", tone: "neutral", core: false },
];
const UNIVERSAL = [
  "agentForge",
  "ontologyStudio",
  "decisionEngine",
  "flowOrchestrator",
  "insightMiner",
  "complianceGuard",
  "connectorHub",
  "predictiveCore",
  "naturalOps",
  "simulationLab",
  "adaptiveScheduler",
  "docIntelligence",
] as const;
const TEMPLATES = [
  "supplyChainOs",
  "fulfillmentAgent",
  "financeAdvisor",
  "hospitalityOps",
  "propertyMind",
  "devSiteAgent",
  "retailBrain",
  "healthOpsAgent",
  "manufactureOs",
  "fleetCommand",
] as const;
const VERTICALS: ReadonlyArray<{
  key: string;
  icon: string;
  tone: ToneName;
  glyph: string;
  statusKey: string;
  featured?: boolean;
}> = [
  {
    key: "supplyChain",
    icon: "🚛",
    tone: "emerald",
    glyph: "●",
    statusKey: "statusProduction",
    featured: true,
  },
  { key: "finance", icon: "💰", tone: "amber", glyph: "◐", statusKey: "statusPilot" },
  { key: "hospitality", icon: "🍽️", tone: "amber", glyph: "◐", statusKey: "statusPilot" },
  { key: "property", icon: "🏢", tone: "cyan", glyph: "○", statusKey: "statusTemplate" },
  { key: "development", icon: "🏗️", tone: "cyan", glyph: "○", statusKey: "statusTemplate" },
  { key: "manufacturing", icon: "🏭", tone: "cyan", glyph: "○", statusKey: "statusTemplate" },
];
const INTEGRATION_CARDS = ["warehouse", "kitchen", "building", "factory"] as const;
const TIERS: ReadonlyArray<{ key: string; featured?: boolean }> = [
  { key: "pilot" },
  { key: "enterprise", featured: true },
  { key: "global" },
];
const REVENUE = ["saas", "templates", "usage", "services", "outcome"] as const;
const ECONOMICS: ReadonlyArray<{ key: string; tone: ToneName }> = [
  { key: "grossMargin", tone: "emerald" },
  { key: "nrr", tone: "emerald" },
  { key: "cacPayback", tone: "amber" },
  { key: "ltvCac", tone: "emerald" },
  { key: "churn", tone: "emerald" },
];
const CHART: ReadonlyArray<{ key: string; tone: ToneName; height: number }> = [
  { key: "current", tone: "cyan", height: 18 },
  { key: "m12", tone: "sky", height: 45 },
  { key: "m24", tone: "purple", height: 100 },
];
const PHASES: ReadonlyArray<{ key: string; tone: ToneName; kpis: readonly string[] }> = [
  { key: "p1", tone: "cyan", kpis: ["arr", "verticalsLive", "accounts"] },
  { key: "p2", tone: "sky", kpis: ["arr", "verticalsLive", "accounts"] },
  { key: "p3", tone: "purple", kpis: ["arr", "nrr", "accounts"] },
];
const RUNGS: ReadonlyArray<{ key: string; tone: ToneName }> = [
  { key: "current", tone: "cyan" },
  { key: "m12", tone: "sky" },
  { key: "m24", tone: "purple" },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function ProductGeneralV4() {
  const t = useT("pages.productGeneralV4");
  const active = useActiveSection();

  // CJK carries its own visual spacing; a literal space between a heading's
  // lead and its accent clause would read as a gap in zh and ja.
  const gap = t.locale === "zh" || t.locale === "ja" ? "" : " ";

  const heroStats = group<Stat>(t, "hero.stats", HERO_STATS);
  const problemCards = group<StatCard>(
    t,
    "problem.cards",
    PROBLEM_CARDS.map((c) => c.key),
  );
  const layers = group<Layer>(
    t,
    "platform.layers",
    LAYERS.map((l) => l.key),
  );
  const universal = group<UniversalProduct>(t, "products.universal", UNIVERSAL);
  const templates = group<TemplateProduct>(t, "products.templates", TEMPLATES);
  const verticals = group<Vertical>(
    t,
    "verticals.items",
    VERTICALS.map((v) => v.key),
  );
  const integrationCards = group<IntegrationCard>(t, "integration.cards", INTEGRATION_CARDS);
  const tiers = group<Tier>(
    t,
    "commercial.tiers",
    TIERS.map((x) => x.key),
  );
  const revenue = group<Row>(t, "commercial.revenue", REVENUE);
  const economics = group<Row>(
    t,
    "commercial.economics",
    ECONOMICS.map((e) => e.key),
  );
  const chart = group<Stat>(
    t,
    "roadmap.chart",
    CHART.map((c) => c.key),
  );
  const phases = group<Phase>(
    t,
    "roadmap.phases",
    PHASES.map((p) => p.key),
  );
  const rungs = group<Rung>(
    t,
    "valuation.rungs",
    RUNGS.map((r) => r.key),
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <TopBar />

      {/* Ambient wash, built from the accent tokens so it dims itself in the
          day theme instead of assuming a black ground. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute -right-[15vw] -top-[22vw] h-[55vw] w-[55vw] rounded-full blur-[120px]"
          style={{
            background: "color-mix(in oklch, var(--cyan-glow) calc(14% * var(--glow)), transparent)",
          }}
        />
        <div
          className="absolute -bottom-[20vw] -left-[12vw] h-[45vw] w-[45vw] rounded-full blur-[120px]"
          style={{
            background:
              "color-mix(in oklch, var(--purple-glow) calc(12% * var(--glow)), transparent)",
          }}
        />
      </div>

      <SectionRail t={t} active={active} />
      <StepControls t={t} active={active} />

      <main className="relative z-10">
        {/* ══ 00 · Hero ═══════════════════════════════════════════════════ */}
        <Section id="pg4-hero" className="flex min-h-screen items-center pt-28">
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("meta.kicker")}
              </p>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-veil px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-glow">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                {t("hero.badge")}
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block">{t("hero.titleLead")}</span>
                <span className="block text-cyan-glow">{t("hero.titleAccent")}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("hero.sub")}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-3.5 md:grid-cols-4">
                {heroStats.map(({ key, item }, i) => (
                  <div key={key} className="rounded-xl border border-border bg-card/80 px-5 py-5">
                    <dt className="sr-only">{item.label}</dt>
                    <dd>
                      <span
                        className={`block font-display text-3xl font-extrabold tabular-nums tracking-tight ${
                          i === 0 ? "text-cyan-glow" : "text-foreground"
                        }`}
                      >
                        {item.value}
                      </span>
                      <span className="mt-1 block text-[12.5px] leading-snug text-muted-foreground">
                        {item.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-11 flex flex-wrap gap-2.5">
                {t.list("hero.chips").map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-cyan-glow/35 bg-cyan-glow/10 px-4 py-1.5 font-mono text-[11.5px] tracking-wide text-cyan-glow"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        <Divider />

        {/* ══ 01 · Problem ════════════════════════════════════════════════ */}
        <Section id="pg4-problem">
          <Reveal>
            <Eyebrow num="01">{t("problem.eyebrow")}</Eyebrow>
            <Heading
              lead={t("problem.titleLead")}
              accent={t("problem.titleAccent")}
              accentTone="rose"
              gap={gap}
            />
            <Lede>{t("problem.lede")}</Lede>
          </Reveal>

          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {problemCards.map(({ key, item }, i) => (
              <Reveal key={key} delay={i * 70}>
                <Card className="h-full">
                  <div
                    className={`font-display text-4xl font-extrabold tracking-tight ${
                      TONE[PROBLEM_CARDS[i].tone].text
                    }`}
                  >
                    {item.value}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-6 gap-y-3 rounded-xl border border-dashed border-border px-6 py-5">
              <span className="font-display text-3xl font-extrabold text-amber-700 dark:text-amber-300">
                {t("problem.fragValue")}
              </span>
              <p className="min-w-[16rem] flex-1 text-sm leading-relaxed text-muted-foreground">
                {t("problem.fragBody")}
              </p>
            </div>
          </Reveal>
        </Section>

        <Divider />

        {/* ══ 02 · Category shift ═════════════════════════════════════════ */}
        <Section id="pg4-shift">
          <Reveal>
            <Eyebrow num="02">{t("shift.eyebrow")}</Eyebrow>
            <Heading lead={t("shift.titleLead")} accent={t("shift.titleAccent")} gap={gap} />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-0">
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/[0.07] p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t("shift.oldTitle")}
                </h3>
                <ul className="mt-4">
                  {t.list("shift.oldItems").map((item) => (
                    <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                      <span
                        className="absolute left-0 font-bold text-rose-700 dark:text-rose-300"
                        aria-hidden="true"
                      >
                        ×
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-center justify-center px-5 text-2xl text-cyan-glow max-md:rotate-90 max-md:py-2"
                aria-hidden="true"
              >
                →
              </div>

              <div className="rounded-xl border border-cyan-glow/40 bg-cyan-glow/[0.07] p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t("shift.newTitle")}
                </h3>
                <ul className="mt-4">
                  {t.list("shift.newItems").map((item) => (
                    <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                      <span
                        className="absolute left-0 font-bold text-emerald-700 dark:text-emerald-300"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 rounded-xl border border-border bg-cyan-glow/[0.06] px-7 py-8 text-center font-display text-lg font-bold leading-relaxed text-foreground md:text-xl">
              {t("shift.thesisLead")}{" "}
              <span className="text-cyan-glow">{t("shift.thesisAccent")}</span>
            </p>
          </Reveal>
        </Section>

        <Divider />

        {/* ══ 03 · Seven-layer architecture ═══════════════════════════════ */}
        <Section id="pg4-platform">
          <Reveal>
            <Eyebrow num="03">{t("platform.eyebrow")}</Eyebrow>
            <Heading lead={t("platform.titleLead")} accent={t("platform.titleAccent")} gap={gap} />
            <Lede>{t("platform.lede")}</Lede>
          </Reveal>

          <ol className="mx-auto mt-11 flex max-w-[900px] flex-col gap-2.5">
            {layers.map(({ key, item }, i) => {
              const meta = LAYERS[i];
              const tone = TONE[meta.tone];
              return (
                <li key={key}>
                  <Reveal delay={i * 45}>
                    <div
                      className={`grid items-center gap-4 rounded-xl border bg-card px-6 py-4 transition-[transform,border-color] motion-safe:duration-200 sm:grid-cols-[7rem_1fr_auto] md:hover:translate-x-2 ${
                        meta.core
                          ? `border-border ${tone.hover}`
                          : "border-dashed border-border opacity-75 hover:opacity-100"
                      }`}
                    >
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.id}
                      </span>
                      <span>
                        <span className="block font-display text-[15.5px] font-bold text-foreground">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-[12.5px] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </span>
                      </span>
                      <span
                        className={`justify-self-start rounded-full border px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] sm:justify-self-end ${
                          meta.core
                            ? `${tone.edge} ${tone.tint} ${tone.text}`
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {meta.core ? t("platform.coreTag") : t("platform.integrationTag")}
                      </span>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-[900px] text-center text-[13px] text-muted-foreground">
              {t("platform.note")}
            </p>
          </Reveal>
        </Section>

        <Divider />

        {/* ══ 04 · Product suite ══════════════════════════════════════════ */}
        <Section id="pg4-products">
          <Reveal>
            <Eyebrow num="04">{t("products.eyebrow")}</Eyebrow>
            <Heading
              lead={t("products.titleLead")}
              accent={t("products.titleAccentA")}
              accentB={t("products.titleAccentB")}
              gap={gap}
            />
            <Lede>{t("products.lede")}</Lede>
          </Reveal>

          <Reveal delay={60}>
            <h3 className="mb-4 mt-12 flex flex-wrap items-center gap-3 font-display text-lg font-semibold text-cyan-glow">
              <span className="rounded-md border border-cyan-glow/35 bg-cyan-glow/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em]">
                {t("products.universalBadge")}
              </span>
              {t("products.universalHeading")}
            </h3>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universal.map(({ key, item }, i) => (
              <Reveal key={key} delay={(i % 3) * 60}>
                <Card className="flex h-full flex-col gap-1.5 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <b className="font-display text-[16.5px] text-foreground">{item.name}</b>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                      {item.code}
                    </span>
                  </div>
                  <div className="text-[12.5px] italic text-cyan-glow">
                    {t("products.universalTag")}
                  </div>
                  <p className="text-[12.8px] leading-relaxed text-muted-foreground">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <h3 className="mb-4 mt-14 flex flex-wrap items-center gap-3 font-display text-lg font-semibold text-orange-700 dark:text-orange-300">
              <span className="rounded-md border border-orange-500/35 bg-orange-500/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em]">
                {t("products.templateBadge")}
              </span>
              {t("products.templateHeading")}
            </h3>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {templates.map(({ key, item }, i) => (
              <Reveal key={key} delay={(i % 2) * 60}>
                <Card className="flex h-full flex-col gap-1.5 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <b className="font-display text-[16.5px] text-foreground">{item.name}</b>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                      {item.code}
                    </span>
                  </div>
                  <div className="text-[12.5px] italic text-orange-700 dark:text-orange-300">
                    {item.industry}
                  </div>
                  <p className="text-[12.8px] leading-relaxed text-muted-foreground">{item.desc}</p>
                  <p className="mt-auto border-t border-border pt-2.5 font-mono text-[10.5px] text-muted-foreground">
                    {t("products.replacesLabel")}{" "}
                    <b className="font-semibold text-sky-700 dark:text-sky-300">{item.replaces}</b>
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ══ 05 · Verticals ══════════════════════════════════════════════ */}
        <Section id="pg4-verticals">
          <Reveal>
            <Eyebrow num="05">{t("verticals.eyebrow")}</Eyebrow>
            <Heading lead={t("verticals.titleLead")} accent={t("verticals.titleAccent")} gap={gap} />
            <Lede>{t("verticals.lede")}</Lede>
          </Reveal>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {verticals.map(({ key, item }, i) => {
              const meta = VERTICALS[i];
              const tone = TONE[meta.tone];
              return (
                <Reveal key={key} delay={(i % 3) * 60}>
                  <div
                    className={`h-full rounded-xl border bg-card p-6 transition-colors ${
                      meta.featured ? "border-emerald-500/50" : `border-border ${tone.hover}`
                    }`}
                  >
                    <h4 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                      <span aria-hidden="true">{meta.icon}</span>
                      {item.name}
                    </h4>
                    <div className="mt-2 font-mono text-xs text-emerald-700 dark:text-emerald-300">
                      {item.tam}
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                    <div
                      className={`mt-3.5 font-mono text-[11px] uppercase tracking-[0.14em] ${tone.text}`}
                    >
                      <span aria-hidden="true">{meta.glyph}</span>{" "}
                      {t(`verticals.${meta.statusKey}`)}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <Divider />

        {/* ══ 06 · Integration layer ══════════════════════════════════════ */}
        <Section id="pg4-integration">
          <Reveal>
            <Eyebrow num="06">{t("integration.eyebrow")}</Eyebrow>
            <Heading
              lead={t("integration.titleLead")}
              accent={t("integration.titleAccent")}
              gap={gap}
            />
            <Lede>{t("integration.lede")}</Lede>
          </Reveal>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrationCards.map(({ key, item }, i) => (
              <Reveal key={key} delay={i * 60}>
                <Card className="h-full p-5 text-center">
                  <Kicker>{item.label}</Kicker>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{item.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-[900px] text-center text-[13px] text-muted-foreground">
              {t("integration.note")}
            </p>
          </Reveal>
        </Section>

        <Divider />

        {/* ══ 07 · Commercial model ═══════════════════════════════════════ */}
        <Section id="pg4-commercial">
          <Reveal>
            <Eyebrow num="07">{t("commercial.eyebrow")}</Eyebrow>
            <Heading
              lead={t("commercial.titleLead")}
              accent={t("commercial.titleAccent")}
              gap={gap}
            />
            <Lede>{t("commercial.lede")}</Lede>
          </Reveal>

          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {tiers.map(({ key, item }, i) => (
              <Reveal key={key} delay={i * 70}>
                <div
                  className={`relative flex h-full flex-col gap-2.5 rounded-xl border bg-card p-7 ${
                    TIERS[i].featured ? "border-emerald-500/55" : "border-border"
                  }`}
                >
                  {TIERS[i].featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white dark:bg-emerald-400 dark:text-emerald-950">
                      {t("commercial.popular")}
                    </span>
                  )}
                  <div className="font-display text-3xl font-extrabold tabular-nums tracking-tight text-emerald-700 dark:text-emerald-300">
                    {item.price}
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-[13.3px] leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Card tone="emerald" className="h-full p-6">
                <Kicker>{t("commercial.revenueTitle")}</Kicker>
                <table className="w-full text-[13.5px]">
                  <caption className="sr-only">{t("commercial.revenueTitle")}</caption>
                  <tbody>
                    {revenue.map(({ key, item }) => (
                      <tr key={key} className="border-b border-border last:border-0">
                        <td className="py-2.5 pr-3 text-muted-foreground">{item.label}</td>
                        <td className="py-2.5 text-right font-semibold tabular-nums text-foreground">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Reveal>

            <Reveal delay={70}>
              <Card tone="cyan" className="h-full p-6">
                <Kicker>{t("commercial.economicsTitle")}</Kicker>
                <table className="w-full text-[13.5px]">
                  <caption className="sr-only">{t("commercial.economicsTitle")}</caption>
                  <tbody>
                    {economics.map(({ key, item }, i) => (
                      <tr key={key} className="border-b border-border last:border-0">
                        <td className="py-2.5 pr-3 text-muted-foreground">{item.label}</td>
                        <td
                          className={`py-2.5 text-right font-semibold tabular-nums ${
                            TONE[ECONOMICS[i].tone].text
                          }`}
                        >
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Reveal>
          </div>
        </Section>

        <Divider />

        {/* ══ 08 · Roadmap ════════════════════════════════════════════════ */}
        <Section id="pg4-roadmap">
          <Reveal>
            <Eyebrow num="08">{t("roadmap.eyebrow")}</Eyebrow>
            <Heading
              lead={t("roadmap.titleLead")}
              accent={t("roadmap.titleAccent")}
              tail={t("roadmap.titleTail")}
              gap={gap}
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-12 flex h-[300px] max-w-[880px] items-end gap-[8%] border-b border-border px-[4%]">
              {chart.map(({ key, item }, i) => (
                <div key={key} className="flex h-full flex-1 flex-col justify-end gap-2.5">
                  <div
                    className={`mx-auto flex w-full max-w-[130px] justify-center rounded-t-lg bg-linear-to-b pt-2.5 ${
                      TONE[CHART[i].tone].bar
                    }`}
                    style={{ height: `${CHART[i].height}%` }}
                  >
                    <b className="font-display text-[15px] tabular-nums text-foreground">
                      {item.value}
                    </b>
                  </div>
                  <div className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-[880px] text-center text-[12.5px] text-muted-foreground">
              {t("roadmap.chartNote")}
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {phases.map(({ key, item }, i) => {
              const meta = PHASES[i];
              const tone = TONE[meta.tone];
              return (
                <Reveal key={key} delay={40}>
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-4">
                      <span
                        className={`rounded-full border px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] ${tone.edge} ${tone.tint} ${tone.text}`}
                      >
                        {item.tag}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="h-full">
                        <h4 className="mb-3 font-display text-sm font-semibold text-foreground">
                          {t("roadmap.objectivesLabel")}
                        </h4>
                        <ul>
                          {(item.objectives ?? []).map((o) => (
                            <li
                              key={o}
                              className="relative py-1 pl-5 text-[13.3px] leading-relaxed text-muted-foreground"
                            >
                              <span
                                className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-cyan-glow"
                                aria-hidden="true"
                              />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </Card>

                      <Card className="h-full">
                        <h4 className="mb-3 font-display text-sm font-semibold text-foreground">
                          {t("roadmap.kpisLabel")}
                        </h4>
                        <dl className="flex flex-wrap gap-3.5">
                          {meta.kpis.map((kpiKey) => {
                            const kpi = item.kpis?.[kpiKey];
                            if (!kpi) return null;
                            return (
                              <div
                                key={kpiKey}
                                className="min-w-[8.5rem] rounded-xl border border-border bg-surface-veil px-5 py-3.5"
                              >
                                <dd className="font-display text-[23px] font-extrabold tabular-nums text-foreground">
                                  {kpi.value}
                                </dd>
                                <dt className="mt-0.5 text-[11.5px] text-muted-foreground">
                                  {kpi.label}
                                </dt>
                              </div>
                            );
                          })}
                        </dl>
                      </Card>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <Divider />

        {/* ══ 09 · Valuation ══════════════════════════════════════════════ */}
        <Section id="pg4-valuation">
          <Reveal>
            <Eyebrow num="09">{t("valuation.eyebrow")}</Eyebrow>
            <Heading lead={t("valuation.titleLead")} accent={t("valuation.titleAccent")} gap={gap} />
            <Lede>{t("valuation.lede")}</Lede>
          </Reveal>

          <div className="mt-11 space-y-3">
            {rungs.map(({ key, item }, i) => (
              <Reveal key={key} delay={i * 70}>
                <div className="grid items-center gap-5 rounded-xl border border-border bg-card px-6 py-5 lg:grid-cols-[13rem_1fr_14rem]">
                  <div>
                    <div className="font-display text-[15px] font-bold text-foreground">
                      {item.stage}
                    </div>
                    <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">
                      {item.meta}
                    </div>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div
                    className={`font-display text-[23px] font-extrabold tabular-nums tracking-tight lg:text-right ${
                      TONE[RUNGS[i].tone].text
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("valuation.note")}</p>
          </Reveal>
        </Section>

        <Divider />

        {/* ══ Closing ═════════════════════════════════════════════════════ */}
        <Section id="pg4-closing" className="text-center">
          <Reveal>
            <p className="mx-auto max-w-[880px] font-display text-2xl font-extrabold leading-[1.4] text-foreground md:text-3xl">
              <span className="block">{t("closing.visionA")}</span>
              <span className="block text-cyan-glow">{t("closing.visionB")}</span>
              <span className="block">{t("closing.visionC")}</span>
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-7 max-w-[720px] text-[15.5px] leading-relaxed text-muted-foreground">
              {t("closing.fine")}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="mailto:contact@item.ai"
              className="mt-11 inline-block rounded-xl bg-primary px-9 py-4 font-display text-[15.5px] font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("closing.cta")}
            </a>
          </Reveal>
        </Section>

        <footer className="border-t border-border px-6 py-7 text-center text-xs text-muted-foreground">
          {t("closing.footer")}
        </footer>
      </main>
    </div>
  );
}
