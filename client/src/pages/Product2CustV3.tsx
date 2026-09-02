import { useEffect, useRef, useState, type ReactNode } from "react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
   ITEM AI — customer-facing product overview (v3).

   Ported from the standalone dark-only HTML deck: the four stacked language
   blocks are gone (one locale renders at a time, from pages.product2CustV3)
   and every colour now comes from a theme token or a light/dark pair, so the
   page reads correctly in both themes.
   --------------------------------------------------------------------------- */

const WRAP = "mx-auto w-full max-w-6xl px-6";
const CARD = "panel rounded-xl p-5 md:p-6";
const COLHEAD =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2.5";

type Accent = {
  text: string;
  dot: string;
  topBorder: string;
  leftBorder: string;
  tint: string;
  softBorder: string;
};

/** Brand tokens where the palette has them, light/dark pairs everywhere else. */
const ACCENT: Record<
  "brand" | "purple" | "green" | "sky" | "orange" | "teal" | "amber" | "red",
  Accent
> = {
  brand: {
    text: "text-cyan-glow",
    dot: "bg-cyan-glow",
    topBorder: "border-t-cyan-glow",
    leftBorder: "border-l-cyan-glow",
    tint: "bg-cyan-glow/10",
    softBorder: "border-cyan-glow/40",
  },
  purple: {
    text: "text-purple-glow",
    dot: "bg-purple-glow",
    topBorder: "border-t-purple-glow",
    leftBorder: "border-l-purple-glow",
    tint: "bg-purple-glow/10",
    softBorder: "border-purple-glow/40",
  },
  green: {
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-600 dark:bg-emerald-400",
    topBorder: "border-t-emerald-600 dark:border-t-emerald-400",
    leftBorder: "border-l-emerald-600 dark:border-l-emerald-400",
    tint: "bg-emerald-500/10",
    softBorder: "border-emerald-500/40",
  },
  sky: {
    text: "text-sky-700 dark:text-sky-300",
    dot: "bg-sky-600 dark:bg-sky-300",
    topBorder: "border-t-sky-600 dark:border-t-sky-300",
    leftBorder: "border-l-sky-600 dark:border-l-sky-300",
    tint: "bg-sky-500/10",
    softBorder: "border-sky-500/40",
  },
  orange: {
    text: "text-orange-700 dark:text-orange-400",
    dot: "bg-orange-600 dark:bg-orange-400",
    topBorder: "border-t-orange-600 dark:border-t-orange-400",
    leftBorder: "border-l-orange-600 dark:border-l-orange-400",
    tint: "bg-orange-500/10",
    softBorder: "border-orange-500/40",
  },
  teal: {
    text: "text-teal-700 dark:text-teal-300",
    dot: "bg-teal-600 dark:bg-teal-300",
    topBorder: "border-t-teal-600 dark:border-t-teal-300",
    leftBorder: "border-l-teal-600 dark:border-l-teal-300",
    tint: "bg-teal-500/10",
    softBorder: "border-teal-500/40",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-600 dark:bg-amber-400",
    topBorder: "border-t-amber-600 dark:border-t-amber-400",
    leftBorder: "border-l-amber-600 dark:border-l-amber-400",
    tint: "bg-amber-500/10",
    softBorder: "border-amber-500/40",
  },
  red: {
    text: "text-destructive",
    dot: "bg-destructive",
    topBorder: "border-t-destructive",
    leftBorder: "border-l-destructive",
    tint: "bg-destructive/10",
    softBorder: "border-destructive/40",
  },
};

/* ---------------------------------- atoms --------------------------------- */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 motion-reduce:opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

function Section({
  id,
  alt = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-border/60 py-16 md:py-20 ${alt ? "bg-surface-veil" : ""}`}
    >
      <div className={WRAP}>{children}</div>
    </section>
  );
}

function Eyebrow({ num, accent, children }: { num?: string; accent: Accent; children: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className={`h-[7px] w-[7px] rounded-full ${accent.dot}`} aria-hidden="true" />
      {num && <span>{num} ·</span>}
      <span>{children}</span>
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground md:text-[31px]">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return <p className="mb-8 max-w-3xl text-[16px] text-muted-foreground">{children}</p>;
}

function Note({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 text-xs text-muted-foreground ${className}`}>{children}</p>;
}

function TickList({ items, cross = false }: { items: string[]; cross?: boolean }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="relative py-1 pl-7 text-[14.5px] text-foreground/90">
          <span
            aria-hidden="true"
            className={`absolute left-0 top-1 font-bold ${
              cross ? ACCENT.red.text : ACCENT.green.text
            }`}
          >
            {cross ? "✕" : "✓"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Punch({ lead, strong }: { lead: string; strong?: string }) {
  return (
    <div className="mt-6 rounded-xl border border-border bg-surface-veil px-5 py-4 text-center text-base text-foreground">
      {lead} {strong && <strong className={`font-bold ${ACCENT.brand.text}`}>{strong}</strong>}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

const NAV = [
  { href: "#why", key: "why" },
  { href: "#arch", key: "arch" },
  { href: "#systems", key: "systems" },
  { href: "#impact", key: "impact" },
  { href: "#why-item", key: "whyItem" },
] as const;

const HERO_STATS = ["cost", "onTime", "exceptions", "visibility"] as const;

const LIVE_ROWS = [
  { key: "orders", value: "12,834", delta: "▲ 8.2%", up: true },
  { key: "shipments", value: "6,723", delta: "▲ 5.4%", up: true },
  { key: "containers", value: "8,612", delta: "▲ 7.1%", up: true },
  { key: "exceptions", value: "72", delta: "▼ 12.7%", up: false },
] as const;

const NEEDS = ["observe", "predict", "decide", "execute"] as const;

const ARCH_SYSTEMS = [
  { key: "ontology", accent: ACCENT.purple },
  { key: "foundry", accent: ACCENT.green },
  { key: "aios", accent: ACCENT.sky },
  { key: "aip", accent: ACCENT.orange },
  { key: "harness", accent: ACCENT.teal },
] as const;

/** Node positions carried over from the source graph, in percent. */
const ONTO_NODES = [
  { key: "supplier", x: 18, y: 28, hot: false },
  { key: "factory", x: 42, y: 22, hot: false },
  { key: "product", x: 68, y: 28, hot: false },
  { key: "order", x: 50, y: 50, hot: true },
  { key: "inventory", x: 30, y: 55, hot: false },
  { key: "shipment", x: 72, y: 58, hot: false },
  { key: "warehouse", x: 40, y: 80, hot: false },
  { key: "dock", x: 62, y: 84, hot: false },
  { key: "customer", x: 84, y: 80, hot: false },
] as const;

const ONTO_EDGES: Array<[number, number, number, number]> = [
  [18, 28, 42, 22],
  [42, 22, 68, 28],
  [68, 28, 50, 50],
  [18, 28, 30, 55],
  [30, 55, 50, 50],
  [50, 50, 72, 58],
  [50, 50, 40, 80],
  [72, 58, 84, 80],
  [40, 80, 62, 84],
  [62, 84, 84, 80],
  [30, 55, 40, 80],
];

const LOOP_STEPS = ["observe", "predict", "decide", "optimize"] as const;

const MODULES = ["predict", "wms", "wes", "oms", "aps", "tms", "yms", "dock"] as const;

const AIP_PRODUCTS = ["gpt", "flow", "vision"] as const;

const WORKFLOW = ["detect", "analyze", "decide", "execute", "audit"] as const;

const HARNESS_BUILD = ["ide", "iam", "tenancy"] as const;

const HARNESS_ENVS = ["cloud", "privateCloud", "onPrem", "edge", "airGapped"] as const;

const CASES = ["electronics", "threePl", "yard"] as const;

const ROADMAP = ["discovery", "ontologyData", "pilotAgents", "scaleApps", "autonomousOps"] as const;

const TIERS = ["starter", "enterprise", "global"] as const;

const COMPARE_COLUMNS = ["item", "palantir", "databricks", "microsoft"] as const;

const TONE = {
  pos: "font-semibold text-emerald-700 dark:text-emerald-400",
  mid: "text-amber-700 dark:text-amber-400",
  neg: "text-muted-foreground",
} as const;

const COMPARE_ROWS: Array<{
  key: string;
  tones: Record<(typeof COMPARE_COLUMNS)[number], keyof typeof TONE>;
}> = [
  {
    key: "ontology",
    tones: { item: "pos", palantir: "pos", databricks: "neg", microsoft: "neg" },
  },
  { key: "apps", tones: { item: "pos", palantir: "mid", databricks: "neg", microsoft: "neg" } },
  {
    key: "wmsNative",
    tones: { item: "pos", palantir: "neg", databricks: "neg", microsoft: "neg" },
  },
  {
    key: "dataPlatform",
    tones: { item: "pos", palantir: "pos", databricks: "pos", microsoft: "pos" },
  },
  {
    key: "multiAgent",
    tones: { item: "pos", palantir: "pos", databricks: "pos", microsoft: "pos" },
  },
  {
    key: "physicalFocus",
    tones: { item: "pos", palantir: "mid", databricks: "neg", microsoft: "neg" },
  },
];

const NEXT_FIELDS = ["useCase", "scope", "metric"] as const;

export default function Product2CustV3() {
  const t = useT("pages.product2CustV3");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      {/* In-page section nav — centred so it clears the fixed TopBar corners. */}
      <div className="sticky top-0 z-40 hidden border-b border-border/60 bg-background/85 backdrop-blur-md lg:block">
        <nav
          aria-label={t("nav.label")}
          className={`${WRAP} flex h-14 items-center justify-center gap-8`}
        >
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-cyan-glow"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      </div>

      {/* ============ 01 HERO ============ */}
      <section
        className="relative overflow-hidden pt-24 pb-16 lg:pt-20"
        style={{
          backgroundImage:
            "radial-gradient(900px 420px at 85% -10%, color-mix(in oklch, var(--cyan-glow) 14%, transparent), transparent 60%), radial-gradient(700px 380px at -10% 30%, color-mix(in oklch, var(--purple-glow) 12%, transparent), transparent 55%)",
        }}
      >
        <div className={WRAP}>
          <div className="mb-3.5 flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className={`h-[7px] w-[7px] rounded-full ${ACCENT.brand.dot}`} aria-hidden="true" />
            <span className={ACCENT.brand.text}>ITEM AI</span>
            <span>{t("hero.eyebrow")}</span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.85fr]">
            <div>
              <h1 className="text-[34px] font-extrabold leading-[1.16] tracking-tight text-foreground md:text-[46px]">
                <span className="block">{t("hero.titleLead")}</span>
                <span className={`block ${ACCENT.brand.text}`}>{t("hero.titleAccent")}</span>
              </h1>

              <p className="mb-7 mt-5 max-w-2xl text-[17px] text-muted-foreground">
                {t("hero.subtitle")}
              </p>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {HERO_STATS.map((key) => (
                  <div key={key} className="panel rounded-xl px-4 py-3.5">
                    <div className={`text-2xl font-extrabold ${ACCENT.brand.text}`}>
                      {t(`hero.stats.${key}.value`)}
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-muted-foreground">
                      {t(`hero.stats.${key}.label`)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.list("hero.chips").map((chip, i) => (
                  <span
                    key={chip}
                    className={`rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-[11.5px] font-semibold ${
                      [
                        ACCENT.purple.text,
                        ACCENT.green.text,
                        ACCENT.sky.text,
                        ACCENT.orange.text,
                        ACCENT.teal.text,
                      ][i] ?? ACCENT.brand.text
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-3.5 font-mono text-[13px] tracking-wide text-muted-foreground">
                {t("hero.fiveLine")}
              </p>
            </div>

            <div className="panel rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${ACCENT.green.dot} animate-pulse motion-reduce:animate-none`}
                />
                {t("hero.live.title")}
              </div>
              <table className="w-full border-collapse text-[13.5px]">
                <tbody>
                  {LIVE_ROWS.map((row, i) => (
                    <tr key={row.key} className={i === 0 ? "" : "border-t border-border/60"}>
                      <td className="py-2 text-muted-foreground">{t(`hero.live.${row.key}`)}</td>
                      <td className="py-2 text-right font-mono font-semibold text-foreground">
                        {row.value}
                      </td>
                      <td
                        className={`w-16 py-2 text-right text-xs ${
                          row.up ? ACCENT.green.text : ACCENT.red.text
                        }`}
                      >
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 WHY TRADITIONAL FAILS ============ */}
      <Section id="why" alt>
        <Reveal>
          <Eyebrow num="02" accent={ACCENT.red}>
            {t("problem.eyebrow")}
          </Eyebrow>
          <H2>{t("problem.title")}</H2>
          <Lede>{t("problem.lede")}</Lede>
        </Reveal>

        <Reveal className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className={CARD}>
            <div className={COLHEAD}>{t("problem.legacy.heading")}</div>
            <div className="my-3.5 rounded-lg border border-border bg-surface-veil px-3.5 py-3 text-center font-mono text-[13px] text-foreground">
              {t("problem.legacy.chain")}
            </div>
            <TickList items={t.list("problem.legacy.items")} cross />
          </div>

          <div>
            <div className={COLHEAD}>{t("problem.needs.heading")}</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {NEEDS.map((key, i) => (
                <div key={key} className={`${CARD} p-4`}>
                  <span
                    className={`mb-1.5 block font-mono text-[11px] tracking-[0.15em] ${ACCENT.sky.text}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <b className="mb-1 block text-[15px] font-bold text-foreground">
                    {t(`problem.needs.${key}.title`)}
                  </b>
                  <p className="text-[13px] text-muted-foreground">
                    {t(`problem.needs.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Punch lead={t("problem.punchLead")} strong={t("problem.punchStrong")} />
        </Reveal>
      </Section>

      {/* ============ 03 ARCHITECTURE ============ */}
      <Section id="arch">
        <Reveal>
          <Eyebrow num="03" accent={ACCENT.brand}>
            {t("architecture.eyebrow")}
          </Eyebrow>
          <H2>{t("architecture.title")}</H2>
          <Lede>{t("architecture.lede")}</Lede>
        </Reveal>

        <Reveal className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ARCH_SYSTEMS.map((system, i) => (
            <div
              key={system.key}
              className={`${CARD} border-t-[3px] ${system.accent.topBorder} flex flex-col`}
            >
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {i + 1} · {t(`architecture.systems.${system.key}.kicker`)}
              </span>
              <h3 className={`text-[19px] font-bold ${system.accent.text}`}>
                {t(`architecture.systems.${system.key}.name`)}
              </h3>
              <p className="my-2 flex-1 text-[13px] text-muted-foreground">
                {t(`architecture.systems.${system.key}.body`)}
              </p>
              <span className="self-start rounded-md border border-border bg-surface-veil px-2.5 py-1 font-mono text-[10.5px] text-foreground">
                {t(`architecture.systems.${system.key}.tag`)}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-lg border border-border bg-surface-veil px-4 py-3 text-center font-mono text-[13px] text-muted-foreground">
            {t.list("architecture.flow").map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">→</span>}
                <b className="font-bold text-foreground">{step}</b>
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ 04 ONTOLOGY ============ */}
      <Section id="systems" alt>
        <Reveal>
          <Eyebrow num="04" accent={ACCENT.purple}>
            {t("ontology.eyebrow")}
          </Eyebrow>
          <H2>{t("ontology.heading")}</H2>
          <Lede>{t("ontology.lede")}</Lede>
        </Reveal>

        <Reveal className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3.5">
            {(["studio", "executor"] as const).map((key) => (
              <div
                key={key}
                className={`${CARD} border-l-[3px] ${ACCENT.purple.leftBorder}`}
              >
                <h3 className="text-[17px] font-bold text-foreground">
                  {t(`ontology.${key}.name`)}
                </h3>
                <p className={`mb-2 mt-1 font-mono text-[11.5px] ${ACCENT.purple.text}`}>
                  {t(`ontology.${key}.kicker`)}
                </p>
                <TickList items={t.list(`ontology.${key}.items`)} />
              </div>
            ))}
          </div>

          <div>
            <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-border bg-surface-veil p-5">
              <span className="absolute left-4 top-3.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("ontology.graph.label")}
              </span>
              <svg
                className="absolute inset-0 h-full w-full text-border"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {ONTO_EDGES.map(([x1, y1, x2, y2]) => (
                  <line
                    key={`${x1}-${y1}-${x2}-${y2}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth={0.4}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              {ONTO_NODES.map((node) => (
                <span
                  key={node.key}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border bg-card px-3 py-1.5 text-xs font-semibold shadow-[var(--panel-shadow)] ${
                    node.hot
                      ? `${ACCENT.purple.softBorder} ${ACCENT.purple.text}`
                      : "border-border text-foreground"
                  }`}
                >
                  {t(`ontology.graph.nodes.${node.key}`)}
                </span>
              ))}
            </div>
            <Note>{t("ontology.note")}</Note>
          </div>
        </Reveal>
      </Section>

      {/* ============ 05 FOUNDRY ============ */}
      <Section>
        <Reveal>
          <Eyebrow num="05" accent={ACCENT.green}>
            {t("foundry.eyebrow")}
          </Eyebrow>
          <H2>{t("foundry.heading")}</H2>
          <Lede>{t("foundry.lede")}</Lede>
        </Reveal>

        <Reveal className="grid items-stretch gap-4 lg:grid-cols-[0.85fr_1.5fr_0.9fr]">
          <div className={CARD}>
            <div className={COLHEAD}>{t("foundry.sources.heading")}</div>
            <div className="flex flex-col gap-2">
              {t.list("foundry.sources.items").map((src) => (
                <span
                  key={src}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-[13px] text-foreground"
                >
                  {src}
                </span>
              ))}
            </div>
          </div>

          <div className={`${CARD} bg-surface-veil`}>
            <div className={`${COLHEAD} ${ACCENT.green.text}`}>{t("foundry.core.heading")}</div>
            <div className="mb-2.5 grid gap-2.5 sm:grid-cols-2">
              {(["bi", "di"] as const).map((key) => (
                <div
                  key={key}
                  className={`rounded-lg border border-border border-l-[3px] ${ACCENT.green.leftBorder} bg-card px-3 py-2.5`}
                >
                  <b className="block text-[13.5px] font-bold text-foreground">
                    {t(`foundry.core.${key}.name`)}
                  </b>
                  <span className="text-[11.5px] text-muted-foreground">
                    {t(`foundry.core.${key}.label`)}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-3.5 flex flex-wrap items-center gap-2">
              {t.list("foundry.core.pipeline").map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-muted-foreground" aria-hidden="true">
                      ›
                    </span>
                  )}
                  <span
                    className={`rounded-md border ${ACCENT.green.softBorder} ${ACCENT.green.tint} px-3 py-1 font-mono text-[11.5px] font-semibold ${ACCENT.green.text}`}
                  >
                    {step}
                  </span>
                </span>
              ))}
            </div>

            <TickList items={t.list("foundry.core.items")} />
          </div>

          <div className={CARD}>
            <div className={COLHEAD}>{t("foundry.output.heading")}</div>
            <h3 className="mb-2.5 text-[17px] font-bold text-foreground">
              {t("foundry.output.title")}
            </h3>
            {(["unified", "trusted", "auditable"] as const).map((key, i) => (
              <div
                key={key}
                className={`flex items-start gap-2.5 py-2.5 ${i === 0 ? "" : "border-t border-border/60"}`}
              >
                <span className={`font-extrabold ${ACCENT.green.text}`} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <b className="block text-[14.5px] font-bold text-foreground">
                    {t(`foundry.output.${key}.term`)}
                  </b>
                  <span className="text-[12.5px] text-muted-foreground">
                    {t(`foundry.output.${key}.detail`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ 06 AI OS ============ */}
      <Section alt>
        <Reveal>
          <Eyebrow num="06" accent={ACCENT.sky}>
            {t("aios.eyebrow")}
          </Eyebrow>
          <H2>{t("aios.heading")}</H2>
          <Lede>{t("aios.lede")}</Lede>
        </Reveal>

        <Reveal className="grid gap-4 lg:grid-cols-2">
          <div className={CARD}>
            <div className={`${COLHEAD} ${ACCENT.sky.text}`}>{t("aios.loop.heading")}</div>
            {LOOP_STEPS.map((key, i) => (
              <div
                key={key}
                className={`flex gap-3.5 py-3 ${i === 0 ? "" : "border-t border-border/60"}`}
              >
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 ${ACCENT.sky.softBorder} font-mono text-[13px] font-bold ${ACCENT.sky.text}`}
                >
                  {i + 1}
                </span>
                <div>
                  <b className="block font-bold text-foreground">{t(`aios.loop.${key}.title`)}</b>
                  <span className="text-[13px] text-muted-foreground">
                    {t(`aios.loop.${key}.body`)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={CARD}>
            <div className={`${COLHEAD} ${ACCENT.sky.text}`}>{t("aios.modules.heading")}</div>
            <div
              className={`mb-3 rounded-lg border ${ACCENT.sky.softBorder} ${ACCENT.sky.tint} px-3 py-2.5 text-center font-bold text-foreground`}
            >
              {t("aios.modules.runtime.name")}
              <small className="ml-2 font-normal text-muted-foreground">
                {t("aios.modules.runtime.note")}
              </small>
            </div>
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {MODULES.map((key) => (
                <div
                  key={key}
                  className="rounded-lg border border-border bg-card px-1.5 py-3 text-center"
                >
                  <b className="block font-mono text-xs text-foreground">
                    {t(`aios.modules.${key}.name`)}
                  </b>
                  <span className="text-[10.5px] text-muted-foreground">
                    {t(`aios.modules.${key}.label`)}
                  </span>
                </div>
              ))}
            </div>
            <Note className="text-center">{t("aios.note")}</Note>
          </div>
        </Reveal>

        <Reveal>
          <Punch lead={t("aios.punch")} />
        </Reveal>
      </Section>

      {/* ============ 07 AIP ============ */}
      <Section>
        <Reveal>
          <Eyebrow num="07" accent={ACCENT.orange}>
            {t("aip.eyebrow")}
          </Eyebrow>
          <H2>{t("aip.heading")}</H2>
          <Lede>{t("aip.lede")}</Lede>
        </Reveal>

        <Reveal className="mb-7 grid gap-4 md:grid-cols-3">
          {AIP_PRODUCTS.map((key) => (
            <div key={key} className={`${CARD} border-l-[3px] ${ACCENT.orange.leftBorder}`}>
              <h3 className="mb-1.5 text-[17px] font-bold text-foreground">
                {t(`aip.products.${key}.name`)}
              </h3>
              <p className="text-sm text-muted-foreground">{t(`aip.products.${key}.body`)}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className={COLHEAD}>{t("aip.workflow.heading")}</div>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {WORKFLOW.map((key, i) => (
              <div key={key} className={`${CARD} p-4`}>
                <span
                  className={`mb-1.5 block font-mono text-[11px] tracking-[0.15em] ${ACCENT.orange.text}`}
                >
                  {String(i + 1).padStart(2, "0")} · {t(`aip.workflow.${key}.phase`)}
                </span>
                <b className="mb-1 block text-sm font-bold text-foreground">
                  {t(`aip.workflow.${key}.title`)}
                </b>
                <p className="text-xs text-muted-foreground">{t(`aip.workflow.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Punch lead={t("aip.punchLead")} strong={t("aip.punchStrong")} />
        </Reveal>
      </Section>

      {/* ============ 08 HARNESS ============ */}
      <Section alt>
        <Reveal>
          <Eyebrow num="08" accent={ACCENT.teal}>
            {t("harness.eyebrow")}
          </Eyebrow>
          <H2>{t("harness.heading")}</H2>
          <Lede>{t("harness.lede")}</Lede>
        </Reveal>

        <Reveal className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className={`${COLHEAD} ${ACCENT.teal.text}`}>{t("harness.build.heading")}</div>
            <div className="space-y-3">
              {HARNESS_BUILD.map((key) => (
                <div key={key} className={`${CARD} border-l-[3px] ${ACCENT.teal.leftBorder}`}>
                  <h3 className="mb-1.5 text-[17px] font-bold text-foreground">
                    {t(`harness.build.${key}.name`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(`harness.build.${key}.body`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={CARD}>
            <div className={`${COLHEAD} ${ACCENT.teal.text}`}>{t("harness.envs.heading")}</div>
            {HARNESS_ENVS.map((key, i) => (
              <div
                key={key}
                className={`flex flex-wrap justify-between gap-2.5 py-2.5 text-[13.5px] ${
                  i === 0 ? "" : "border-t border-border/60"
                }`}
              >
                <b className={`font-bold ${ACCENT.teal.text}`}>{t(`harness.envs.${key}.name`)}</b>
                <span className="text-right text-muted-foreground">
                  {t(`harness.envs.${key}.detail`)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Punch lead={t("harness.punchLead")} strong={t("harness.punchStrong")} />
        </Reveal>
      </Section>

      {/* ============ 09 IMPACT ============ */}
      <Section id="impact">
        <Reveal>
          <Eyebrow num="09" accent={ACCENT.brand}>
            {t("impact.eyebrow")}
          </Eyebrow>
          <H2>{t("impact.title")}</H2>
          <p className="mb-8 max-w-3xl text-[16px] text-muted-foreground">
            {t("impact.ledeLead")}{" "}
            <b className={`font-bold ${ACCENT.brand.text}`}>{t("impact.ledeStrong")}</b>
          </p>
        </Reveal>

        <Reveal className="mb-8">
          <div className={COLHEAD}>{t("impact.cases.heading")}</div>
          <div className="grid gap-4 md:grid-cols-3">
            {CASES.map((key) => (
              <div key={key} className={CARD}>
                <h3 className="mb-1.5 text-[17px] font-bold text-foreground">
                  {t(`impact.cases.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">{t(`impact.cases.${key}.body`)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mb-8">
          <div className={COLHEAD}>{t("impact.roadmap.heading")}</div>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
            {ROADMAP.map((key, i) => (
              <div key={key} className={`${CARD} p-4`}>
                <span
                  className={`mb-2 flex h-7 w-7 items-center justify-center rounded-full ${ACCENT.brand.dot} font-mono text-xs font-bold text-background`}
                >
                  {i}
                </span>
                <b className="block text-[13.5px] font-bold text-foreground">
                  {t(`impact.roadmap.${key}.title`)}
                </b>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {t(`impact.roadmap.${key}.duration`)}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className={COLHEAD}>{t("impact.commercial.heading")}</div>
          <div className="grid gap-4 md:grid-cols-3">
            {TIERS.map((key) => (
              <div
                key={key}
                className={`${CARD} ${key === "enterprise" ? ACCENT.brand.softBorder : ""}`}
              >
                <h3 className="text-[17px] font-bold text-foreground">
                  {t(`impact.commercial.${key}.title`)}
                </h3>
                <div className={`my-1.5 text-[25px] font-extrabold ${ACCENT.brand.text}`}>
                  {t(`impact.commercial.${key}.price`)}
                </div>
                <p className="text-[13px] text-muted-foreground">
                  {t(`impact.commercial.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
          <Note>{t("impact.note")}</Note>
        </Reveal>
      </Section>

      {/* ============ 10 WHY ITEM ============ */}
      <Section id="why-item" alt>
        <Reveal>
          <Eyebrow num="10" accent={ACCENT.amber}>
            {t("whyItem.eyebrow")}
          </Eyebrow>
          <H2>{t("whyItem.title")}</H2>
          <Lede>{t("whyItem.lede")}</Lede>
        </Reveal>

        <Reveal className="mb-7 grid gap-4 lg:grid-cols-2">
          <div className={CARD}>
            <div className={COLHEAD}>{t("whyItem.bestFit.heading")}</div>
            <TickList items={t.list("whyItem.bestFit.items")} />
            <Note>{t("whyItem.bestFit.note")}</Note>
          </div>

          <div>
            <div className={COLHEAD}>{t("whyItem.compare.heading")}</div>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full border-collapse text-[13.5px]">
                <thead>
                  <tr className="bg-surface-veil">
                    <th className="border-b border-border/60 px-3.5 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {t("whyItem.compare.columns.capability")}
                    </th>
                    {COMPARE_COLUMNS.map((col) => (
                      <th
                        key={col}
                        className={`border-b border-border/60 px-3.5 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.12em] ${
                          col === "item" ? ACCENT.brand.text : "text-muted-foreground"
                        }`}
                      >
                        {t(`whyItem.compare.columns.${col}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={row.key}>
                      <td
                        className={`px-3.5 py-2.5 font-semibold text-foreground ${
                          i === COMPARE_ROWS.length - 1 ? "" : "border-b border-border/60"
                        }`}
                      >
                        {t(`whyItem.compare.rows.${row.key}.capability`)}
                      </td>
                      {COMPARE_COLUMNS.map((col) => (
                        <td
                          key={col}
                          className={`px-3.5 py-2.5 ${TONE[row.tones[col]]} ${
                            i === COMPARE_ROWS.length - 1 ? "" : "border-b border-border/60"
                          }`}
                        >
                          {t(`whyItem.compare.rows.${row.key}.${col}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={`${CARD} bg-surface-veil`}>
            <div className={`${COLHEAD} ${ACCENT.brand.text}`}>{t("whyItem.next.heading")}</div>
            <h3 className="mb-3.5 text-xl font-bold text-foreground">{t("whyItem.next.title")}</h3>
            <div className="my-4 grid gap-3.5 md:grid-cols-3">
              {NEXT_FIELDS.map((key) => (
                <div key={key}>
                  <div className={COLHEAD}>{t(`whyItem.next.${key}.label`)}</div>
                  <b className="font-bold text-foreground">{t(`whyItem.next.${key}.value`)}</b>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="inline-block rounded-xl bg-cyan-glow px-6 py-3 text-[15.5px] font-bold text-background transition-opacity hover:opacity-90"
            >
              {t("whyItem.next.cta")}
            </button>
          </div>
          <Note>{t("whyItem.note")}</Note>
        </Reveal>
      </Section>

      <footer className="border-t border-border/60 py-8">
        <div className={`${WRAP} text-xs text-muted-foreground`}>{t("footer")}</div>
      </footer>
    </div>
  );
}
