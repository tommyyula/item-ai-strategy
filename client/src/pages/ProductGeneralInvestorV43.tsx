import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ──────────────────────────────────────────────────────────────────────────
   ITEM AI — General Enterprise Edition (Investor) v4.3.

   Ported from the hosted deck into a native, themeable page. Every visible
   string comes from `pages.productGeneralInvestorV43`; the pure figures below
   live here so they are byte-identical in all four locales.
   ────────────────────────────────────────────────────────────────────────── */

const YEARS = ["Y1", "Y2", "Y3", "Y4", "Y5"] as const;

/** Slide F1 — revenue engine. */
const REVENUE_ROWS = [
  { key: "customers", cells: ["22", "60", "130", "230", "370"], strong: false },
  { key: "acv", cells: ["260", "290", "330", "370", "410"], strong: false },
  { key: "arr", cells: ["5.7", "17.4", "42.9", "85.1", "151.7"], strong: true },
  { key: "growth", cells: ["—", "204%", "147%", "98%", "78%"], strong: false },
] as const;

/** Slide F2 — five-year P&L. */
const PNL_ROWS = [
  { key: "revenue", cells: ["2.9", "11.6", "30.2", "64.0", "118.4"], tone: "strong" },
  { key: "grossMargin", cells: ["62%", "66%", "70%", "73%", "76%"], tone: "plain" },
  { key: "grossProfit", cells: ["1.8", "7.6", "21.1", "46.7", "90.0"], tone: "plain" },
  { key: "rnd", cells: ["10.0", "13.5", "17.5", "22.0", "26.5"], tone: "plain" },
  { key: "sm", cells: ["6.5", "13.0", "20.5", "28.0", "36.5"], tone: "plain" },
  { key: "ga", cells: ["3.5", "5.0", "7.0", "9.0", "11.0"], tone: "plain" },
  { key: "opex", cells: ["20.0", "31.5", "45.0", "59.0", "74.0"], tone: "plain" },
  { key: "ebitda", cells: ["-18.2", "-23.9", "-23.9", "-12.3", "+16.0"], tone: "ebitda" },
  { key: "ebitdaMargin", cells: ["—", "—", "-79%", "-19%", "+14%"], tone: "plain" },
  { key: "headcount", cells: ["78", "120", "180", "245", "310"], tone: "plain" },
] as const;

/** Slide F2 — EBITDA bar chart. Pixel heights carried over from the source. */
const EBITDA_BARS = [
  { year: "Y1", height: 40, value: "-18.2", positive: false },
  { year: "Y2", height: 53, value: "-23.9", positive: false },
  { year: "Y3", height: 53, value: "-23.9", positive: false },
  { year: "Y4", height: 27, value: "-12.3", positive: false },
  { year: "Y5", height: 35, value: "+16.0", positive: true },
] as const;

/** Slide F3 — cash bridge. */
const FUNDING_ROWS = [
  { key: "ebitda", cells: ["-18.2", "-23.9", "-23.9", "-12.3", "+16.0"], strong: false },
  { key: "burn", cells: ["-18.2", "-42.1", "-66.0", "-78.3", "-62.3"], strong: false },
  { key: "cash", cells: ["16.8", "52.9", "29.0", "16.7", "32.7"], strong: true },
] as const;

const SERIES_A = {
  amount: "$35M",
  alloc: [
    { key: "rnd", width: 45, swatch: "bg-cyan-glow" },
    { key: "gtm", width: 28, swatch: "bg-chart-5" },
    { key: "compute", width: 15, swatch: "bg-amber-500" },
    { key: "ga", width: 12, swatch: "bg-muted-foreground/55" },
  ],
} as const;

const SERIES_B = {
  amount: "$60M",
  alloc: [
    { key: "gtm", width: 50, swatch: "bg-chart-5" },
    { key: "templates", width: 20, swatch: "bg-cyan-glow" },
    { key: "intl", width: 12, swatch: "bg-emerald-500" },
    { key: "compute", width: 10, swatch: "bg-amber-500" },
    { key: "buffer", width: 8, swatch: "bg-muted-foreground/55" },
  ],
} as const;

/** Layer 5 — the twelve general applications, in source order. */
const GENERAL_APPS = [
  { key: "gpt", name: "ItemGPT" },
  { key: "claw", name: "ItemClaw" },
  { key: "flow", name: "ItemFlow" },
  { key: "sense", name: "ItemSense" },
  { key: "predict", name: "ItemPredict" },
  { key: "ops", name: "ItemOps AI" },
  { key: "audit", name: "ItemAudit" },
  { key: "vision", name: "ItemVision" },
  { key: "voice", name: "ItemVoice" },
  { key: "support", name: "ItemSupport" },
  { key: "grow", name: "ItemGrow" },
  { key: "doc", name: "ItemDoc" },
] as const;

/** Layer 6 — the ten industry templates, in source order. */
const TEMPLATES = [
  { key: "chain", name: "ItemChain", proven: true },
  { key: "dock", name: "ItemDock", proven: false },
  { key: "trade", name: "ItemTrade", proven: false },
  { key: "fin", name: "ItemFin", proven: false },
  { key: "dine", name: "ItemDine", proven: false },
  { key: "estate", name: "ItemEstate", proven: false },
  { key: "build", name: "ItemBuild", proven: false },
  { key: "health", name: "ItemHealth", proven: false },
  { key: "auto", name: "ItemAuto", proven: false },
  { key: "retail", name: "ItemRetail", proven: false },
] as const;

const CORE_LAYERS = ["l6", "l5", "l4", "l3", "l2"] as const;

/* ── primitives ─────────────────────────────────────────────────────────── */

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="border-t border-border/70 px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-cyan-glow">
      <span aria-hidden="true" className="h-px w-8 bg-cyan-glow" />
      <span>{children}</span>
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-4xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2.4rem]">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-muted-foreground">{children}</p>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel p-5 transition-colors sm:p-6 ${className}`}>{children}</div>;
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-base font-bold leading-snug">{children}</h3>;
}

function CardBody({ children }: { children: ReactNode }) {
  return <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{children}</p>;
}

type Tone = "cyan" | "gold" | "green" | "grey";

const TAG_TONES: Record<Tone, string> = {
  cyan: "border-cyan-glow/45 bg-cyan-glow/10 text-cyan-glow",
  gold: "border-amber-500/45 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  green: "border-emerald-500/45 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  grey: "border-border bg-surface-veil text-muted-foreground",
};

function Tag({ tone = "cyan", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] ${TAG_TONES[tone]}`}
    >
      {children}
    </span>
  );
}

function Kpi({
  value,
  suffix,
  sub,
  label,
  tone = "cyan",
}: {
  value: string;
  suffix?: string;
  sub?: string;
  label: ReactNode;
  tone?: "cyan" | "gold";
}) {
  return (
    <Card>
      <div
        className={`font-display text-[1.9rem] font-bold leading-none sm:text-[2.2rem] ${
          tone === "gold" ? "text-amber-600 dark:text-amber-400" : "text-cyan-glow"
        }`}
      >
        {value}
        {suffix && <span className="ml-1 text-[0.45em] font-medium tracking-wide">{suffix}</span>}
      </div>
      {sub && <div className="mt-2 font-mono text-[11px] leading-relaxed tracking-wide text-muted-foreground/80">{sub}</div>}
      <div className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">{label}</div>
    </Card>
  );
}

function Callout({ label, tone = "cyan", children }: { label: string; tone?: "cyan" | "gold"; children: ReactNode }) {
  const gold = tone === "gold";
  return (
    <div
      className={`mt-8 max-w-5xl rounded-r-xl border-l-[3px] px-5 py-4 sm:px-6 ${
        gold ? "border-amber-500 bg-amber-500/[0.07]" : "border-cyan-glow bg-cyan-glow/[0.07]"
      }`}
    >
      <p className="text-sm leading-relaxed text-foreground">
        <span className={`font-semibold ${gold ? "text-amber-700 dark:text-amber-400" : "text-cyan-glow"}`}>
          {label}{" "}
        </span>
        {children}
      </p>
    </div>
  );
}

function Sources({ children }: { children: ReactNode }) {
  return <p className="mt-8 font-mono text-[10.5px] leading-relaxed text-muted-foreground/75">{children}</p>;
}

function TableShell({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-[13px]">{children}</table>
    </div>
  );
}

function Th({ children, align = "left" }: { children: ReactNode; align?: "left" | "right" }) {
  return (
    <th
      scope="col"
      className={`border-b border-cyan-glow/40 px-3 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-cyan-glow ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {children}
    </th>
  );
}

/** Seven-layer stack row. */
function StackRow({
  num,
  name,
  desc,
  prod,
  protocols,
  integration = false,
}: {
  num: string;
  name: string;
  desc: string;
  prod: string;
  protocols?: string;
  integration?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-x-5 gap-y-2 rounded-xl px-4 py-3 sm:px-5 md:grid-cols-[132px_minmax(0,1fr)_260px] ${
        integration
          ? "border border-dashed border-muted-foreground/45 bg-surface-veil"
          : "border border-cyan-glow/35 bg-gradient-to-r from-cyan-glow/[0.14] to-cyan-glow/[0.04]"
      }`}
    >
      <div className={`font-mono text-[11px] tracking-[0.1em] ${integration ? "text-muted-foreground" : "text-cyan-glow"}`}>
        {num}
      </div>
      <div>
        <div className={`font-display text-[15px] font-bold ${integration ? "text-muted-foreground" : "text-foreground"}`}>
          {name}
        </div>
        <div className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">{desc}</div>
      </div>
      <div className="font-mono text-[10.5px] leading-relaxed text-muted-foreground md:text-right">
        {prod}
        {protocols && (
          <>
            <br />
            {protocols}
          </>
        )}
      </div>
    </div>
  );
}

/** The 7-segment "you are here" indicator above each layer detail. */
function MiniStack({ active }: { active: number }) {
  return (
    <div aria-hidden="true" className="mb-5 flex gap-1">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => {
        const isIntegration = n === 1 || n === 7;
        return (
          <span
            key={n}
            className={`h-[7px] flex-1 rounded-sm ${
              n === active
                ? "bg-cyan-glow"
                : isIntegration
                  ? "border border-dashed border-muted-foreground/50"
                  : "bg-border"
            }`}
          />
        );
      })}
    </div>
  );
}

function LayerHeading({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-4">
      <span className="rounded-md bg-cyan-glow px-3 py-1.5 font-mono text-[12px] tracking-[0.1em] text-background">
        {badge}
      </span>
      <Title>{title}</Title>
    </div>
  );
}

/** Product / template tile. */
function ProductCard({
  name,
  tag,
  desc,
  tone,
  badge,
}: {
  name: string;
  tag: string;
  desc: string;
  tone: "cyan" | "gold";
  badge?: ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-card/60 px-4 py-3.5 transition-colors hover:border-cyan-glow/40 ${
        tone === "gold" ? "border-l-[3px] border-l-amber-500" : "border-l-[3px] border-l-cyan-glow"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-display text-sm font-bold">{name}</span>
        {badge}
      </div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.05em] text-muted-foreground/80">{tag}</div>
      <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

/** Three-step process band. */
function FlowStep({ phase, title, body, note }: { phase: string; title: string; body: string; note?: string }) {
  return (
    <div className="relative rounded-xl border border-border bg-card/60 px-5 py-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-glow">{phase}</div>
      <h3 className="mt-2 font-display text-[17px] font-bold">{title}</h3>
      <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{body}</p>
      {note && <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  );
}

/* ── page ───────────────────────────────────────────────────────────────── */

export default function ProductGeneralInvestorV43() {
  const t = useT("pages.productGeneralInvestorV43");

  const coverIndustries: { key: string; tone: Tone }[] = [
    { key: "proven", tone: "green" },
    { key: "financial", tone: "gold" },
    { key: "restaurant", tone: "gold" },
    { key: "property", tone: "gold" },
    { key: "development", tone: "gold" },
    { key: "healthcare", tone: "gold" },
    { key: "manufacturing", tone: "gold" },
    { key: "retail", tone: "gold" },
    { key: "more", tone: "grey" },
  ];

  const verticalItems = [
    { key: "supply", value: "$196.6B", tone: "cyan" as const, accent: "border-t-emerald-500" },
    { key: "fin", value: "$5.9T", tone: "gold" as const, accent: "border-t-amber-500" },
    { key: "dine", value: "$82.7B", tone: "gold" as const, accent: "border-t-amber-500" },
    { key: "estate", value: "$34B", tone: "gold" as const, accent: "border-t-amber-500" },
    { key: "build", value: "$989B", tone: "gold" as const, accent: "border-t-amber-500" },
  ];

  const quadrantDots = [
    { key: "bigtech", name: "Copilot · Agentforce", left: "16%", top: "82%", variant: "ghost" as const },
    { key: "glean", name: "Glean", left: "26%", top: "60%", variant: "gold" as const },
    { key: "aa", name: "Automation Anywhere", left: "44%", top: "70%", variant: "purple" as const },
    { key: "item", name: "ITEM AI", left: "79%", top: "22%", variant: "item" as const },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      {/* ── Cover ─────────────────────────────────────────────────────── */}
      <section
        id="pgi-cover"
        className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(1100px 620px at 78% 18%, color-mix(in oklch, var(--cyan-glow) calc(20% * var(--glow)), transparent), transparent 62%)",
              "radial-gradient(800px 500px at 12% 88%, color-mix(in oklch, var(--purple-glow) calc(16% * var(--glow)), transparent), transparent 62%)",
            ].join(","),
          }}
        />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="font-mono text-[12px] tracking-[0.3em] text-cyan-glow">{t("cover.tag")}</div>
          <h1 className="mt-6 font-display text-[2.1rem] font-bold leading-[1.14] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            ITEM AI
            <br />
            {t("cover.titleMain")}
            <span className="mt-4 block text-[0.44em] font-medium tracking-normal text-muted-foreground">
              {t("cover.tagline")}
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            {t("cover.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {coverIndustries.map(({ key, tone }) => (
              <Tag key={key} tone={tone}>
                {t(`cover.industries.${key}`)}
              </Tag>
            ))}
          </div>
          <div className="mt-11 font-mono text-[11px] leading-[2] tracking-[0.12em] text-muted-foreground/80">
            {t("cover.meta")}
            <br />
            {t("cover.scrollHint")}
          </div>
        </div>
      </section>

      {/* ── 01 · Repositioning ────────────────────────────────────────── */}
      <Section id="pgi-repositioning">
        <Eyebrow>{t("repositioning.eyebrow")}</Eyebrow>
        <Title>{t("repositioning.title")}</Title>
        <Lede>{t("repositioning.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["proven", "template", "vertical"].map((k) => (
            <Card key={k}>
              <CardTitle>{t(`repositioning.cards.${k}.title`)}</CardTitle>
              <CardBody>{t(`repositioning.cards.${k}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <Callout label={t("repositioning.callout.label")}>{t("repositioning.callout.text")}</Callout>
        <Sources>{t("repositioning.sources")}</Sources>
      </Section>

      {/* ── 02 · Universal problem ────────────────────────────────────── */}
      <Section id="pgi-problem">
        <Eyebrow>{t("problem.eyebrow")}</Eyebrow>
        <Title>{t("problem.title")}</Title>
        <Lede>{t("problem.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["compliance", "data", "operations"].map((k) => (
            <Card key={k}>
              <CardTitle>{t(`problem.taxes.${k}.title`)}</CardTitle>
              <CardBody>{t(`problem.taxes.${k}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Kpi value="-50%" label={t("problem.stats.service.label")} />
          <Kpi value="-90%" label={t("problem.stats.backOffice.label")} />
          <Kpi value="5.4×" label={t("problem.stats.readiness.label")} />
        </div>
        <Sources>{t("problem.sources")}</Sources>
      </Section>

      {/* ── 03 · Why now ──────────────────────────────────────────────── */}
      <Section id="pgi-why-now">
        <Eyebrow>{t("whyNow.eyebrow")}</Eyebrow>
        <Title>{t("whyNow.title")}</Title>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi value="$601.9B" sub={t("whyNow.stats.ai.sub")} label={t("whyNow.stats.ai.label")} />
          <Kpi value="$9.1B" sub={t("whyNow.stats.agentic.sub")} label={t("whyNow.stats.agentic.label")} />
          <Kpi value="30%" sub={t("whyNow.stats.share.sub")} label={t("whyNow.stats.share.label")} />
          <Kpi value="40%" sub={t("whyNow.stats.embed.sub")} label={t("whyNow.stats.embed.label")} />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi value="$1.3T" sub={t("whyNow.stats.spend.sub")} label={t("whyNow.stats.spend.label")} />
          <Kpi
            value={t("whyNow.stats.agents.value")}
            sub={t("whyNow.stats.agents.sub")}
            label={t("whyNow.stats.agents.label")}
          />
          <Kpi value="61%" sub={t("whyNow.stats.ceo.sub")} label={t("whyNow.stats.ceo.label")} />
          <Kpi value="23%" tone="gold" sub={t("whyNow.stats.scaled.sub")} label={t("whyNow.stats.scaled.label")} />
        </div>
        <Callout label={t("whyNow.callout.label")}>{t("whyNow.callout.text")}</Callout>
        <Sources>{t("whyNow.sources")}</Sources>
      </Section>

      {/* ── 04 · Platform architecture ────────────────────────────────── */}
      <Section id="pgi-architecture">
        <Eyebrow>{t("architecture.eyebrow")}</Eyebrow>
        <Title>{t("architecture.title")}</Title>
        <Lede>{t("architecture.lede")}</Lede>
        <div className="mt-8 flex max-w-[1080px] flex-col gap-1.5">
          <StackRow
            integration
            num={t("architecture.layers.l7.num")}
            name={t("architecture.layers.l7.name")}
            desc={t("architecture.layers.l7.desc")}
            prod={t("architecture.layers.l7.prod")}
            protocols={t("architecture.layers.l7.protocols")}
          />
          <div className="my-1 ml-1.5 border-l-2 border-cyan-glow pl-3 font-mono text-[10.5px] tracking-[0.15em] text-cyan-glow">
            {t("architecture.brace")}
          </div>
          {CORE_LAYERS.map((l) => (
            <StackRow
              key={l}
              num={t(`architecture.layers.${l}.num`)}
              name={t(`architecture.layers.${l}.name`)}
              desc={t(`architecture.layers.${l}.desc`)}
              prod={t(`architecture.layers.${l}.prod`)}
            />
          ))}
          <StackRow
            integration
            num={t("architecture.layers.l1.num")}
            name={t("architecture.layers.l1.name")}
            desc={t("architecture.layers.l1.desc")}
            prod={t("architecture.layers.l1.prod")}
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2.5">
          <div className="flex items-center gap-2.5 text-[12.5px] text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-3.5 w-7 rounded border border-cyan-glow/40 bg-gradient-to-r from-cyan-glow/45 to-cyan-glow/20"
            />
            {t("architecture.legend.core")}
          </div>
          <div className="flex items-center gap-2.5 text-[12.5px] text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-3.5 w-7 rounded border border-dashed border-muted-foreground/50 bg-surface-veil"
            />
            {t("architecture.legend.integ")}
          </div>
        </div>
      </Section>

      {/* ── Layer 2 ───────────────────────────────────────────────────── */}
      <Section id="pgi-layer-2">
        <MiniStack active={2} />
        <LayerHeading badge="LAYER 2" title={t("layer2.title")} />
        <Lede>{t("layer2.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Item Ontology</CardTitle>
            <CardBody>{t("layer2.cards.ontology.body")}</CardBody>
          </Card>
          <Card>
            <CardTitle>Item GraphRAG</CardTitle>
            <CardBody>{t("layer2.cards.graphrag.body")}</CardBody>
          </Card>
          <Card>
            <CardTitle>Item Digital Twin</CardTitle>
            <CardBody>{t("layer2.cards.twin.body")}</CardBody>
          </Card>
        </div>
        <Callout label={t("layer2.callout.label")}>{t("layer2.callout.text")}</Callout>
      </Section>

      {/* ── Layer 3 ───────────────────────────────────────────────────── */}
      <Section id="pgi-layer-3">
        <MiniStack active={3} />
        <LayerHeading badge="LAYER 3" title={t("layer3.title")} />
        <Lede>{t("layer3.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Item AIP</CardTitle>
            <CardBody>{t("layer3.cards.aip.body")}</CardBody>
          </Card>
          <Card>
            <CardTitle>Item Blackbox Router</CardTitle>
            <CardBody>{t("layer3.cards.router.body")}</CardBody>
          </Card>
          <Card>
            <CardTitle>Item Harness</CardTitle>
            <CardBody>{t("layer3.cards.harness.body")}</CardBody>
          </Card>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Kpi value="12+" label={t("layer3.stats.models.label")} />
          <Kpi value={t("layer3.stats.envs.value")} label={t("layer3.stats.envs.label")} />
          <Kpi value="100%" label={t("layer3.stats.audit.label")} />
        </div>
      </Section>

      {/* ── Layer 4 ───────────────────────────────────────────────────── */}
      <Section id="pgi-layer-4">
        <MiniStack active={4} />
        <LayerHeading badge="LAYER 4" title={t("layer4.title")} />
        <Lede>{t("layer4.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardTitle>Item Foundry</CardTitle>
            <CardBody>{t("layer4.cards.foundry.body")}</CardBody>
          </Card>
          <Card>
            <CardTitle>Item AI OS</CardTitle>
            <CardBody>{t("layer4.cards.aios.body")}</CardBody>
          </Card>
        </div>
        <Callout label={t("layer4.callout.label")}>{t("layer4.callout.text")}</Callout>
      </Section>

      {/* ── Layer 5 ───────────────────────────────────────────────────── */}
      <Section id="pgi-layer-5">
        <MiniStack active={5} />
        <LayerHeading badge="LAYER 5" title={t("layer5.title")} />
        <Lede>{t("layer5.lede")}</Lede>
        <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {GENERAL_APPS.map(({ key, name }) => (
            <ProductCard
              key={key}
              name={name}
              tone="cyan"
              tag={t(`layer5.products.${key}.tag`)}
              desc={t(`layer5.products.${key}.desc`)}
            />
          ))}
        </div>
        <Callout label={t("layer5.callout.label")}>{t("layer5.callout.text")}</Callout>
      </Section>

      {/* ── Layer 6 ───────────────────────────────────────────────────── */}
      <Section id="pgi-layer-6">
        <MiniStack active={6} />
        <LayerHeading badge="LAYER 6" title={t("layer6.title")} />
        <Lede>{t("layer6.lede")}</Lede>
        <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {TEMPLATES.map(({ key, name, proven }) => (
            <ProductCard
              key={key}
              name={name}
              tone="gold"
              tag={t(`layer6.templates.${key}.tag`)}
              desc={t(`layer6.templates.${key}.desc`)}
              badge={proven ? <Tag tone="green">{t("layer6.proven")}</Tag> : undefined}
            />
          ))}
        </div>
        <Callout tone="gold" label={t("layer6.callout.label")}>
          {t("layer6.callout.text")}
        </Callout>
      </Section>

      {/* ── 05 · Product catalog ──────────────────────────────────────── */}
      <Section id="pgi-catalog">
        <Eyebrow>{t("catalog.eyebrow")}</Eyebrow>
        <Title>{t("catalog.title")}</Title>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Tag tone="cyan">{t("catalog.general.tag")}</Tag>
          <span className="font-display text-base font-bold">{t("catalog.general.subtitle")}</span>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-border sm:block" />
          <span className="font-mono text-[11px] text-muted-foreground">{t("catalog.general.count")}</span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          {GENERAL_APPS.map((a) => a.name).join(" · ")} — {t("catalog.general.note")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Tag tone="gold">{t("catalog.vertical.tag")}</Tag>
          <span className="font-display text-base font-bold">{t("catalog.vertical.subtitle")}</span>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-border sm:block" />
          <span className="font-mono text-[11px] text-muted-foreground">{t("catalog.vertical.count")}</span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          ItemChain{" "}
          <span className="text-emerald-700 dark:text-emerald-400">({t("catalog.vertical.proven")})</span>
          {" · "}
          {TEMPLATES.slice(1)
            .map((x) => x.name)
            .join(" · ")}{" "}
          — {t("catalog.vertical.note")}
        </p>

        <TableShell>
          <thead>
            <tr>
              <Th>{t("catalog.table.head.dimension")}</Th>
              <Th>{t("catalog.table.head.general")}</Th>
              <Th>{t("catalog.table.head.templates")}</Th>
            </tr>
          </thead>
          <tbody>
            {["question", "reuse", "economics", "sales", "validation"].map((row) => (
              <tr key={row} className="transition-colors hover:bg-cyan-glow/[0.04]">
                <td className="w-[22%] border-b border-border px-3 py-3 align-top font-semibold text-foreground">
                  {t(`catalog.table.rows.${row}.label`)}
                </td>
                <td className="w-[39%] border-b border-border px-3 py-3 align-top leading-relaxed text-muted-foreground">
                  {t(`catalog.table.rows.${row}.general`)}
                </td>
                <td className="w-[39%] border-b border-border px-3 py-3 align-top leading-relaxed text-muted-foreground">
                  {t(`catalog.table.rows.${row}.template`)}
                </td>
              </tr>
            ))}
          </tbody>
        </TableShell>
      </Section>

      {/* ── 06 · Vertical markets ─────────────────────────────────────── */}
      <Section id="pgi-verticals">
        <Eyebrow>{t("verticals.eyebrow")}</Eyebrow>
        <Title>{t("verticals.title")}</Title>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {verticalItems.map(({ key, value, tone, accent }) => (
            <Card key={key} className={`border-t-[3px] ${accent}`}>
              {key === "supply" ? (
                <Tag tone="green">{t("verticals.items.supply.badge")}</Tag>
              ) : (
                <Tag tone="gold">{TEMPLATES.find((x) => x.key === key)?.name}</Tag>
              )}
              <h3 className="mt-3 font-display text-base font-bold leading-snug">{t(`verticals.items.${key}.name`)}</h3>
              <div
                className={`mt-2 font-display text-[1.6rem] font-bold leading-none ${
                  tone === "gold" ? "text-amber-600 dark:text-amber-400" : "text-cyan-glow"
                }`}
              >
                {value}
              </div>
              <div className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground/80">
                {t(`verticals.items.${key}.market`)}
                <br />
                {t(`verticals.items.${key}.basis`)}
              </div>
              <CardBody>{t(`verticals.items.${key}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <Callout label={t("verticals.callout.label")}>{t("verticals.callout.text")}</Callout>
        <Sources>{t("verticals.sources")}</Sources>
      </Section>

      {/* ── 07 · Expansion map ────────────────────────────────────────── */}
      <Section id="pgi-expansion">
        <Eyebrow>{t("expansion.eyebrow")}</Eyebrow>
        <Title>{t("expansion.title")}</Title>
        <Lede>{t("expansion.lede")}</Lede>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              { key: "a", accent: "border-t-cyan-glow" },
              { key: "b", accent: "border-t-chart-5" },
              { key: "c", accent: "border-t-amber-500" },
              { key: "d", accent: "border-t-emerald-500" },
            ] as const
          ).map(({ key, accent }) => (
            <Card key={key} className={`border-t-[3px] ${accent}`}>
              <CardTitle>{t(`expansion.clusters.${key}.title`)}</CardTitle>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                {t(`expansion.clusters.${key}.scope`)}
                <br />
                <span className="font-semibold text-foreground">{t(`expansion.clusters.${key}.statusLabel`)}</span>{" "}
                {t(`expansion.clusters.${key}.status`)}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          <FlowStep
            phase={t("expansion.phases.p1.phase")}
            title={t("expansion.phases.p1.title")}
            body={t("expansion.phases.p1.body")}
            note={t("expansion.phases.p1.note")}
          />
          <FlowStep
            phase={t("expansion.phases.p2.phase")}
            title={t("expansion.phases.p2.title")}
            body={t("expansion.phases.p2.body")}
          />
          <FlowStep
            phase={t("expansion.phases.p3.phase")}
            title={t("expansion.phases.p3.title")}
            body={t("expansion.phases.p3.body")}
          />
        </div>
        <Callout label={t("expansion.callout.label")}>{t("expansion.callout.text")}</Callout>
      </Section>

      {/* ── 08 · Physical world ───────────────────────────────────────── */}
      <Section id="pgi-physical">
        <Eyebrow>{t("physical.eyebrow")}</Eyebrow>
        <Title>{t("physical.title")}</Title>
        <Lede>{t("physical.lede")}</Lede>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["robots", "protocols", "scenarios", "proven"].map((k) => (
            <Card key={k}>
              <CardTitle>{t(`physical.cards.${k}.title`)}</CardTitle>
              <CardBody>{t(`physical.cards.${k}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <Callout label={t("physical.callout.label")}>{t("physical.callout.text")}</Callout>
      </Section>

      {/* ── 09 · Competitive positioning ──────────────────────────────── */}
      <Section id="pgi-competitive">
        <Eyebrow>{t("competitive.eyebrow")}</Eyebrow>
        <Title>{t("competitive.title")}</Title>
        <Lede>{t("competitive.lede")}</Lede>

        <div className="mt-8 grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
          {/* Positioning quadrant */}
          <div className="relative h-[340px] rounded-xl border border-border bg-surface-veil">
            <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-border" />
            <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-border" />
            <div className="absolute left-3 top-2 font-mono text-[9.5px] leading-snug tracking-[0.08em] text-muted-foreground">
              {t("competitive.axes.y")}
            </div>
            <div className="absolute bottom-2 left-3 max-w-[38%] font-mono text-[9.5px] leading-snug tracking-[0.08em] text-muted-foreground">
              {t("competitive.axes.x1")}
            </div>
            <div className="absolute bottom-2 right-3 max-w-[38%] text-right font-mono text-[9.5px] leading-snug tracking-[0.08em] text-muted-foreground">
              {t("competitive.axes.x2")}
            </div>
            {quadrantDots.map(({ key, name, left, top, variant }) => (
              <div
                key={key}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
                style={{ left, top, maxWidth: "40%" }}
              >
                <span
                  aria-hidden="true"
                  className={
                    variant === "item"
                      ? "h-[15px] w-[15px] rounded-full bg-cyan-glow glow-cyan"
                      : variant === "gold"
                        ? "h-[15px] w-[15px] rounded-full bg-amber-500"
                        : variant === "purple"
                          ? "h-[15px] w-[15px] rounded-full bg-purple-glow"
                          : "h-[13px] w-[13px] rounded-full border-[1.5px] border-dashed border-muted-foreground/60"
                  }
                />
                <span
                  className={`font-display text-[12px] font-bold leading-tight ${
                    variant === "item"
                      ? "text-cyan-glow"
                      : variant === "gold"
                        ? "text-amber-600 dark:text-amber-400"
                        : variant === "purple"
                          ? "text-purple-glow"
                          : "font-medium text-muted-foreground"
                  }`}
                >
                  {name}
                </span>
                <span className="font-mono text-[9px] leading-snug text-muted-foreground/80">
                  {t(`competitive.dots.${key}.sub`)}
                </span>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-[11.5px]">
              <thead>
                <tr>
                  <Th>{t("competitive.table.head.dimension")}</Th>
                  <Th>Glean</Th>
                  <Th>Automation Anywhere</Th>
                  <Th>ITEM AI</Th>
                </tr>
              </thead>
              <tbody>
                {["dataModel", "relation", "physical", "verticalization", "budget"].map((row) => (
                  <tr key={row} className="transition-colors hover:bg-cyan-glow/[0.04]">
                    <td className="whitespace-nowrap border-b border-border px-2.5 py-2.5 align-top font-semibold text-foreground">
                      {t(`competitive.table.rows.${row}.label`)}
                    </td>
                    <td className="border-b border-border px-2.5 py-2.5 align-top leading-snug text-muted-foreground">
                      {t(`competitive.table.rows.${row}.glean`)}
                    </td>
                    <td className="border-b border-border px-2.5 py-2.5 align-top leading-snug text-muted-foreground">
                      {t(`competitive.table.rows.${row}.aa`)}
                    </td>
                    <td className="border-b border-border px-2.5 py-2.5 align-top leading-snug text-foreground">
                      {t(`competitive.table.rows.${row}.item`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Callout tone="gold" label={t("competitive.callout.label")}>
          {t("competitive.callout.text")}
        </Callout>
      </Section>

      {/* ── 10 · Business model ───────────────────────────────────────── */}
      <Section id="pgi-business-model">
        <Eyebrow>{t("businessModel.eyebrow")}</Eyebrow>
        <Title>{t("businessModel.title")}</Title>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["platform", "template", "usage", "device"].map((k) => (
            <Card key={k}>
              <CardTitle>{t(`businessModel.streams.${k}.title`)}</CardTitle>
              <CardBody>{t(`businessModel.streams.${k}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Kpi value="$450B" label={t("businessModel.stats.gartner.label")} />
          <Kpi value="62.7%" label={t("businessModel.stats.cagr.label")} />
          <Kpi
            tone="gold"
            value={t("businessModel.stats.templates.value")}
            label={t("businessModel.stats.templates.label")}
          />
        </div>
        <Callout label={t("businessModel.callout.label")}>{t("businessModel.callout.text")}</Callout>
        <Sources>{t("businessModel.sources")}</Sources>
      </Section>

      {/* ── 11 · Go-to-market ─────────────────────────────────────────── */}
      <Section id="pgi-gtm">
        <Eyebrow>{t("gtm.eyebrow")}</Eyebrow>
        <Title>{t("gtm.title")}</Title>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {["land", "expand", "own"].map((k) => (
            <FlowStep
              key={k}
              phase={t(`gtm.phases.${k}.phase`)}
              title={t(`gtm.phases.${k}.title`)}
              body={t(`gtm.phases.${k}.body`)}
              note={t(`gtm.phases.${k}.note`)}
            />
          ))}
        </div>
        <Callout label={t("gtm.callout.label")}>{t("gtm.callout.text")}</Callout>
      </Section>

      {/* ── 12 · Financial model — assumptions ────────────────────────── */}
      <Section id="pgi-finance">
        <Eyebrow>{t("finance.eyebrow")}</Eyebrow>
        <Title>{t("finance.title")}</Title>
        <Lede>{t("finance.lede")}</Lede>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["pricing", "margin", "cost"].map((k) => (
            <Card key={k}>
              <CardTitle>{t(`finance.cards.${k}.title`)}</CardTitle>
              <CardBody>{t(`finance.cards.${k}.body`)}</CardBody>
            </Card>
          ))}
        </div>
        <TableShell>
          <thead>
            <tr>
              <Th>{t("finance.table.head.engine")}</Th>
              {YEARS.map((y) => (
                <Th key={y} align="right">
                  {y}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REVENUE_ROWS.map(({ key, cells, strong }) => (
              <tr key={key} className={strong ? "bg-cyan-glow/[0.06]" : ""}>
                <td className="border-b border-border px-3 py-2 font-semibold text-foreground">
                  {t(`finance.table.rows.${key}`)}
                </td>
                {cells.map((c, i) => (
                  <td
                    key={YEARS[i]}
                    className={`border-b border-border px-3 py-2 text-right font-mono text-[12px] ${
                      strong ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableShell>
        <Sources>{t("finance.sources")}</Sources>
      </Section>

      {/* ── 13 · Financial model — P&L ────────────────────────────────── */}
      <Section id="pgi-pnl">
        <Eyebrow>{t("pnl.eyebrow")}</Eyebrow>
        <Title>{t("pnl.title")}</Title>
        <TableShell>
          <thead>
            <tr>
              <Th>$M</Th>
              {YEARS.map((y) => (
                <Th key={y} align="right">
                  {y}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PNL_ROWS.map(({ key, cells, tone }) => (
              <tr key={key} className={tone === "strong" ? "bg-cyan-glow/[0.06]" : ""}>
                <td className="border-b border-border px-3 py-2 font-semibold text-foreground">
                  {t(`pnl.rows.${key}`)}
                </td>
                {cells.map((c, i) => (
                  <td
                    key={YEARS[i]}
                    className={`border-b border-border px-3 py-2 text-right font-mono text-[12px] ${
                      tone === "ebitda"
                        ? c.startsWith("+")
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-amber-700 dark:text-amber-400"
                        : tone === "strong"
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableShell>

        {/* EBITDA bar chart */}
        <div className="mt-8 max-w-[1080px]">
          <div className="relative flex h-[132px] items-start gap-3 pt-1 sm:gap-5" aria-hidden="true">
            <span className="absolute inset-x-0 top-[46px] h-px bg-muted-foreground/50" />
            {EBITDA_BARS.map(({ year, height, value, positive }) => (
              <div key={year} className="relative flex h-full flex-1 flex-col items-center">
                {positive ? (
                  <>
                    <span
                      className="absolute w-[56%] rounded-t-md border border-emerald-500/50 bg-gradient-to-b from-emerald-500/85 to-emerald-500/30"
                      style={{ bottom: "calc(100% - 46px)", height }}
                    />
                    <span className="absolute -top-1 font-mono text-[11px] text-emerald-700 dark:text-emerald-400">
                      {value}
                    </span>
                    <span className="absolute top-[52px] font-mono text-[10px] tracking-[0.1em] text-muted-foreground/80">
                      {year}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="absolute top-[26px] font-mono text-[10px] tracking-[0.1em] text-muted-foreground/80">
                      {year}
                    </span>
                    <span
                      className="absolute top-[47px] w-[56%] rounded-b-md border border-amber-500/50 bg-gradient-to-b from-amber-500/75 to-amber-500/25"
                      style={{ height }}
                    />
                    <span
                      className="absolute font-mono text-[11px] text-amber-700 dark:text-amber-400"
                      style={{ top: 47 + height + 4 }}
                    >
                      {value}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground/80">{t("pnl.chartNote")}</p>
        </div>

        <div className="mt-8 max-w-5xl rounded-r-xl border-l-[3px] border-cyan-glow bg-cyan-glow/[0.07] px-5 py-4 sm:px-6">
          <p className="text-sm font-semibold text-cyan-glow">{t("pnl.callout.label")}</p>
          <ul className="mt-2 space-y-1.5">
            {t.list("pnl.callout.points").map((point) => (
              <li key={point} className="text-sm leading-relaxed text-foreground">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── 14 · Financial model — funding & break-even ───────────────── */}
      <Section id="pgi-funding">
        <Eyebrow>{t("funding.eyebrow")}</Eyebrow>
        <Title>{t("funding.title")}</Title>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {(
            [
              { id: "a", data: SERIES_A },
              { id: "b", data: SERIES_B },
            ] as const
          ).map(({ id, data }) => (
            <Card key={id}>
              <div className="font-mono text-[11px] tracking-[0.2em] text-cyan-glow">{t(`funding.rounds.${id}.name`)}</div>
              <div className="mt-1.5 font-display text-[2rem] font-bold leading-none">{data.amount}</div>
              <div className="mt-2 font-mono text-[10.5px] leading-relaxed text-muted-foreground/80">
                {t(`funding.rounds.${id}.when`)}
              </div>
              <div aria-hidden="true" className="mt-3 flex h-2.5 overflow-hidden rounded-full">
                {data.alloc.map(({ key, width, swatch }) => (
                  <span key={key} className={swatch} style={{ width: `${width}%` }} />
                ))}
              </div>
              <ul className="mt-3 space-y-1">
                {data.alloc.map(({ key, swatch }) => (
                  <li key={key} className="flex gap-2 text-[11.5px] leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className={`mt-1.5 h-2 w-2 shrink-0 rounded-sm ${swatch}`} />
                    <span>{t(`funding.rounds.${id}.alloc.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <TableShell>
          <thead>
            <tr>
              <Th>$M</Th>
              {YEARS.map((y) => (
                <Th key={y} align="right">
                  {y}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FUNDING_ROWS.map(({ key, cells, strong }) => (
              <tr key={key} className={strong ? "bg-cyan-glow/[0.06]" : ""}>
                <td className="border-b border-border px-3 py-2 font-semibold text-foreground">
                  {t(`funding.table.rows.${key}`)}
                </td>
                {cells.map((c, i) => (
                  <td
                    key={YEARS[i]}
                    className={`border-b border-border px-3 py-2 text-right font-mono text-[12px] ${
                      strong ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableShell>

        <div className="mt-5 inline-flex items-start gap-2 rounded-full border border-emerald-500/45 bg-emerald-500/10 px-4 py-2 font-mono text-[12px] leading-relaxed tracking-[0.04em] text-emerald-700 dark:text-emerald-400">
          <span aria-hidden="true">◆</span>
          <span>{t("funding.breakeven")}</span>
        </div>

        <Callout label={t("funding.callout.label")}>{t("funding.callout.text")}</Callout>
      </Section>

      {/* ── 15 · Financial model — investor metrics ───────────────────── */}
      <Section id="pgi-metrics">
        <Eyebrow>{t("metrics.eyebrow")}</Eyebrow>
        <Title>{t("metrics.title")}</Title>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            value="22→10"
            suffix="mo"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.payback.term")}</span>{" "}
                {t("metrics.kpis.payback.note")}
              </>
            }
          />
          <Kpi
            value="4–6×"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.ltv.term")}</span>{" "}
                {t("metrics.kpis.ltv.note")}
              </>
            }
          />
          <Kpi
            value="118%"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.nrr.term")}</span>{" "}
                {t("metrics.kpis.nrr.note")}
              </>
            }
          />
          <Kpi
            value="3.2→0.3"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.burn.term")}</span>{" "}
                {t("metrics.kpis.burn.note")}
              </>
            }
          />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            value="1.24"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.magic.term")}</span>{" "}
                {t("metrics.kpis.magic.note")}
              </>
            }
          />
          <Kpi
            value="≈98"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.rule40.term")}</span>{" "}
                {t("metrics.kpis.rule40.note")}
              </>
            }
          />
          <Kpi
            value="$489K"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.arrPerEmployee.term")}</span>{" "}
                {t("metrics.kpis.arrPerEmployee.note")}
              </>
            }
          />
          <Kpi
            tone="gold"
            value="$1.00"
            label={
              <>
                <span className="font-semibold text-foreground">{t("metrics.kpis.expansionCost.term")}</span>{" "}
                {t("metrics.kpis.expansionCost.note")}
              </>
            }
          />
        </div>

        <TableShell>
          <thead>
            <tr>
              <Th>{t("metrics.scenarios.head.scenario")}</Th>
              <Th align="right">{t("metrics.scenarios.head.arr")}</Th>
              <Th align="right">{t("metrics.scenarios.head.breakeven")}</Th>
              <Th align="right">{t("metrics.scenarios.head.capital")}</Th>
              <Th align="right">{t("metrics.scenarios.head.delta")}</Th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                { key: "conservative", arr: "~$95M", strong: false },
                { key: "base", arr: "$151.7M", strong: true },
                { key: "aggressive", arr: "~$200M", strong: false },
              ] as const
            ).map(({ key, arr, strong }) => (
              <tr key={key} className={strong ? "bg-cyan-glow/[0.06]" : ""}>
                <td className="border-b border-border px-3 py-2.5 align-top font-semibold text-foreground">
                  {t(`metrics.scenarios.rows.${key}.name`)}
                </td>
                <td className="border-b border-border px-3 py-2.5 text-right align-top font-mono text-[12px] text-foreground">
                  {arr}
                </td>
                <td className="border-b border-border px-3 py-2.5 text-right align-top font-mono text-[12px] text-muted-foreground">
                  {t(`metrics.scenarios.rows.${key}.breakeven`)}
                </td>
                <td className="border-b border-border px-3 py-2.5 text-right align-top font-mono text-[12px] text-muted-foreground">
                  {t(`metrics.scenarios.rows.${key}.capital`)}
                </td>
                <td className="border-b border-border px-3 py-2.5 text-right align-top leading-snug text-muted-foreground">
                  {t(`metrics.scenarios.rows.${key}.delta`)}
                </td>
              </tr>
            ))}
          </tbody>
        </TableShell>
        <Sources>{t("metrics.sources")}</Sources>
      </Section>

      {/* ── 16 · Vision ───────────────────────────────────────────────── */}
      <section id="pgi-vision" className="relative overflow-hidden border-t border-border/70 px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 560px at 76% 22%, color-mix(in oklch, var(--cyan-glow) calc(18% * var(--glow)), transparent), transparent 62%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px]">
          <Eyebrow>{t("vision.eyebrow")}</Eyebrow>
          <h2 className="max-w-4xl font-display text-[1.9rem] font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[3rem]">
            {t("vision.title.l1")}
            <br />
            {t("vision.title.l2pre")}
            <span className="text-cyan-glow">{t("vision.title.l2accent")}</span>
            <br />
            {t("vision.title.l3pre")}
            <span className="text-amber-600 dark:text-amber-400">{t("vision.title.l3accent")}</span>
            {t("vision.title.l3post")}
          </h2>
          <p className="mt-7 max-w-3xl text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            {t("vision.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Tag tone="cyan">{t("vision.tags.platform")}</Tag>
            <Tag tone="gold">{t("vision.tags.industries")}</Tag>
            <Tag tone="green">{t("vision.tags.proven")}</Tag>
            <Tag tone="grey">{t("vision.tags.next")}</Tag>
          </div>
          <div className="mt-11 font-mono text-[11px] tracking-[0.12em] text-muted-foreground/80">{t("vision.meta")}</div>
        </div>
      </section>
    </div>
  );
}
