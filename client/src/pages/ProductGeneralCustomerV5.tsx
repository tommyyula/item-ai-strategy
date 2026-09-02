import type { CSSProperties, ReactNode } from "react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
 * ITEM AI — Customer Edition V5.
 *
 * Native port of reference/manus-pages/product_general_customer_v5.html. The
 * original was a dark-only, 14-slide keyboard deck that stacked Chinese and
 * English in sibling spans; this renders the same argument as one scrolling
 * page, in a single locale, on the repo's theme tokens.
 * ------------------------------------------------------------------------- */

/* Gradients are mixed from the accent tokens, so they resolve correctly on
   both the light and the dark ground rather than assuming a dark page. */
const COVER_GLOW: CSSProperties = {
  background:
    "radial-gradient(1100px 620px at 78% 16%, color-mix(in oklch, var(--cyan-glow) 16%, transparent), transparent 62%)," +
    "radial-gradient(820px 520px at 8% 92%, color-mix(in oklch, var(--purple-glow) 12%, transparent), transparent 62%)",
};

const CORE_LAYER_FILL: CSSProperties = {
  background:
    "linear-gradient(90deg, color-mix(in oklch, var(--cyan-glow) 16%, transparent), color-mix(in oklch, var(--purple-glow) 7%, transparent))",
};

const ACCENT_FILL: CSSProperties = {
  background: "linear-gradient(90deg, var(--cyan-glow), var(--purple-glow))",
};

const QUADRANT_FILL: CSSProperties = {
  background:
    "radial-gradient(420px 260px at 86% 14%, color-mix(in oklch, var(--cyan-glow) 12%, transparent), transparent 66%)",
};

/* -------------------------------------------------------------- primitives */

function Section({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20">{children}</section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-glow">
      <span className="h-px w-8 bg-cyan-glow" aria-hidden="true" />
      {children}
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
      {children}
    </p>
  );
}

type Tone = "cyan" | "purple" | "muted" | "proven";

const TONE_CLASS: Record<Tone, string> = {
  cyan: "border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow",
  purple: "border-purple-glow/40 bg-purple-glow/10 text-purple-glow",
  muted: "border-border bg-surface-veil text-muted-foreground",
  proven:
    "border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/40 dark:text-emerald-300",
};

function Tag({
  children,
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * The original marked demo-enabled features with an `<a href="#">` that went
 * nowhere. Rendering a dead link would be worse than not linking at all, so
 * the affordance survives as a non-interactive badge.
 */
function DemoChip({ label }: { label: string }) {
  return (
    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-glow/35 bg-cyan-glow/10 px-2.5 py-1 font-mono text-[10px] tracking-wide text-cyan-glow">
      <span aria-hidden="true">▶</span>
      {label}
    </span>
  );
}

function Card({
  title,
  body,
  demo,
  accent = false,
}: {
  title: string;
  body: string;
  demo?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`panel flex flex-col rounded-xl p-5 transition-transform duration-200 hover:-translate-y-0.5 ${
        accent ? "border-cyan-glow/45" : ""
      }`}
    >
      <h3
        className={`text-base font-bold leading-snug ${accent ? "text-cyan-glow" : "text-foreground"}`}
      >
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
      {demo && <DemoChip label={demo} />}
    </div>
  );
}

function Callout({ label, body, tone = "cyan" }: { label: string; body: string; tone?: Tone }) {
  const isPurple = tone === "purple";
  return (
    <div
      className={`mt-7 max-w-4xl rounded-r-xl border-l-[3px] px-5 py-4 ${
        isPurple ? "border-l-purple-glow bg-purple-glow/[0.07]" : "border-l-cyan-glow bg-cyan-glow/[0.07]"
      }`}
    >
      <p className="text-sm leading-relaxed text-foreground">
        <span className={`font-semibold ${isPurple ? "text-purple-glow" : "text-cyan-glow"}`}>
          {label}{" "}
        </span>
        {body}
      </p>
    </div>
  );
}

/** Seven-layer stack reduced to a progress strip for the layer detail sections. */
function LayerStrip({ active }: { active: number }) {
  return (
    <div className="mb-5 flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6, 7].map((n) =>
        n === 1 || n === 7 ? (
          <span key={n} className="h-[5px] flex-1 rounded-sm border border-dashed border-border" />
        ) : (
          <span
            key={n}
            className={`h-[7px] flex-1 rounded-sm ${n === active ? "" : "bg-surface-veil-strong"}`}
            style={n === active ? ACCENT_FILL : undefined}
          />
        ),
      )}
    </div>
  );
}

function LayerBadge({ n }: { n: number }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-3 py-1.5 font-mono text-xs font-medium tracking-[0.1em] text-background"
      style={ACCENT_FILL}
    >
      LAYER {n}
    </span>
  );
}

function ProductCard({
  name,
  tag,
  desc,
  tone,
  demo,
  badge,
}: {
  name: string;
  tag: string;
  desc: string;
  tone: "cyan" | "purple";
  demo?: string;
  badge?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-lg border border-border border-l-[3px] bg-card/60 p-3.5 transition-transform duration-200 hover:-translate-y-0.5 ${
        tone === "cyan" ? "border-l-cyan-glow" : "border-l-purple-glow"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-foreground">{name}</span>
        {badge && (
          <Tag tone="proven" className="px-2 py-0.5 text-[9px]">
            {badge}
          </Tag>
        )}
      </div>
      <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.06em] text-muted-foreground">
        {tag}
      </div>
      <p className="mt-2 text-[11.5px] leading-relaxed text-muted-foreground">{desc}</p>
      {demo && <DemoChip label={demo} />}
    </div>
  );
}

/* -------------------------------------------------------------------- data */

const LAYERS = [
  { key: "l7", n: 7, core: false },
  { key: "l6", n: 6, core: true },
  { key: "l5", n: 5, core: true },
  { key: "l4", n: 4, core: true },
  { key: "l3", n: 3, core: true },
  { key: "l2", n: 2, core: true },
  { key: "l1", n: 1, core: false },
];

const GENERAL_APPS = [
  { key: "itemGpt", name: "ItemGPT", demo: true },
  { key: "itemClaw", name: "ItemClaw", demo: true },
  { key: "itemFlow", name: "ItemFlow", demo: true },
  { key: "itemSense", name: "ItemSense", demo: true },
  { key: "itemPredict", name: "ItemPredict", demo: false },
  { key: "itemOpsAi", name: "ItemOps AI", demo: false },
  { key: "itemAudit", name: "ItemAudit", demo: false },
  { key: "itemVision", name: "ItemVision", demo: true },
  { key: "itemVoice", name: "ItemVoice", demo: false },
  { key: "itemSupport", name: "ItemSupport", demo: true },
  { key: "itemGrow", name: "ItemGrow", demo: true },
  { key: "itemDoc", name: "ItemDoc", demo: false },
];

const TEMPLATES = [
  { key: "itemChain", name: "ItemChain", proven: true },
  { key: "itemDock", name: "ItemDock", proven: false },
  { key: "itemTrade", name: "ItemTrade", proven: false },
  { key: "itemFin", name: "ItemFin", proven: false },
  { key: "itemDine", name: "ItemDine", proven: false },
  { key: "itemEstate", name: "ItemEstate", proven: false },
  { key: "itemBuild", name: "ItemBuild", proven: false },
  { key: "itemHealth", name: "ItemHealth", proven: false },
  { key: "itemAuto", name: "ItemAuto", proven: false },
  { key: "itemRetail", name: "ItemRetail", proven: false },
];

const CATALOG_ROWS = ["question", "reuse", "status"] as const;
const POSITIONING_ROWS = ["dataModel", "relation", "physical", "vertical"] as const;

const QUAD_DOTS = [
  { key: "copilot", left: "16%", top: "82%", kind: "ghost" },
  { key: "glean", left: "26%", top: "60%", kind: "purple" },
  { key: "aa", left: "45%", top: "70%", kind: "neutral" },
  { key: "item", left: "76%", top: "22%", kind: "item" },
] as const;

const QUAD_DOT_CLASS: Record<string, string> = {
  item: "h-[15px] w-[15px] bg-cyan-glow glow-cyan",
  purple: "h-[15px] w-[15px] bg-purple-glow",
  neutral: "h-[15px] w-[15px] bg-foreground/55",
  ghost: "h-[13px] w-[13px] border border-dashed border-muted-foreground",
};

const QUAD_NAME_CLASS: Record<string, string> = {
  item: "text-cyan-glow",
  purple: "text-purple-glow",
  neutral: "text-foreground",
  ghost: "text-muted-foreground",
};

const STEPS = [
  { key: "land", timing: true },
  { key: "expand", timing: true },
  { key: "own", timing: false },
];

/* ---------------------------------------------------------------- the page */

export default function ProductGeneralCustomerV5() {
  const t = useT("pages.productGeneralCustomerV5");
  const demo = t("demoLabel");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      <main>
        {/* ----------------------------------------------------------- cover */}
        <header className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" style={COVER_GLOW} aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-glow">
              {t("meta.edition")}
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.list("cover.titleLines").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-4 block text-base font-medium tracking-normal text-muted-foreground sm:text-lg">
                {t("cover.subtitle")}
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-pretty text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
              {t("cover.lede")}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <Tag tone="proven">{t("cover.industries.proven")}</Tag>
              <Tag tone="purple">{t("cover.industries.financial")}</Tag>
              <Tag tone="purple">{t("cover.industries.restaurant")}</Tag>
              <Tag tone="purple">{t("cover.industries.property")}</Tag>
              <Tag tone="purple">{t("cover.industries.realEstate")}</Tag>
              <Tag tone="muted">{t("cover.industries.next")}</Tag>
            </div>

            <div className="mt-11 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
              {t("cover.meta")}
            </div>
          </div>
        </header>

        <div className="section-divider" />

        {/* --------------------------------------------------- repositioning */}
        <Section>
          <Eyebrow>{t("repositioning.eyebrow")}</Eyebrow>
          <Title>{t("repositioning.title")}</Title>
          <Lede>{t("repositioning.lede")}</Lede>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {["proven", "universality", "templated"].map((k) => (
              <Card
                key={k}
                title={t(`repositioning.cards.${k}.title`)}
                body={t(`repositioning.cards.${k}.body`)}
              />
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- problem */}
        <Section>
          <Eyebrow>{t("problem.eyebrow")}</Eyebrow>
          <Title>{t("problem.title")}</Title>
          <Lede>{t("problem.lede")}</Lede>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {["knowledge", "process", "operations"].map((k) => (
              <Card
                key={k}
                title={t(`problem.cards.${k}.title`)}
                body={t(`problem.cards.${k}.body`)}
                accent={k === "operations"}
              />
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- why now */}
        <Section>
          <Eyebrow>{t("whyNow.eyebrow")}</Eyebrow>
          <Title>{t("whyNow.title")}</Title>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {["ontology", "agents", "enterprise", "proven"].map((k) => (
              <Card key={k} title={t(`whyNow.cards.${k}.title`)} body={t(`whyNow.cards.${k}.body`)} />
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* ---------------------------------------------------- architecture */}
        <Section>
          <Eyebrow>{t("architecture.eyebrow")}</Eyebrow>
          <Title>{t("architecture.title")}</Title>
          <Lede>{t("architecture.lede")}</Lede>

          <ol className="mt-7 flex list-none flex-col gap-1.5">
            {LAYERS.map((layer) => (
              <li
                key={layer.key}
                className={`grid grid-cols-[72px_1fr] items-center gap-3 rounded-lg px-4 py-3 transition-colors sm:grid-cols-[112px_1fr_minmax(0,280px)] sm:gap-4 sm:px-5 ${
                  layer.core
                    ? "border border-cyan-glow/35 hover:border-cyan-glow/70"
                    : "border border-dashed border-border bg-surface-veil"
                }`}
                style={layer.core ? CORE_LAYER_FILL : undefined}
              >
                <div
                  className={`font-mono text-[11px] tracking-[0.1em] ${
                    layer.core ? "text-cyan-glow" : "text-muted-foreground"
                  }`}
                >
                  LAYER {layer.n}
                </div>
                <div>
                  <div
                    className={`text-[15px] font-bold leading-snug ${
                      layer.core ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {t(`architecture.layers.${layer.key}.name`)}
                  </div>
                  {!layer.core && (
                    <div className="mt-1 text-[11.5px] leading-snug text-muted-foreground">
                      {t(`architecture.layers.${layer.key}.note`)}
                    </div>
                  )}
                </div>
                <div className="col-span-2 font-mono text-[10.5px] leading-relaxed text-muted-foreground sm:col-span-1 sm:text-right">
                  {t(`architecture.layers.${layer.key}.products`)}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2">
            <div className="flex items-center gap-2.5 text-[12.5px] text-muted-foreground">
              <span
                className="h-3 w-6 shrink-0 rounded-sm border border-cyan-glow/40"
                style={CORE_LAYER_FILL}
                aria-hidden="true"
              />
              {t("architecture.legend.core")}
            </div>
            <div className="flex items-center gap-2.5 text-[12.5px] text-muted-foreground">
              <span
                className="h-3 w-6 shrink-0 rounded-sm border border-dashed border-border bg-surface-veil"
                aria-hidden="true"
              />
              {t("architecture.legend.integration")}
            </div>
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- layer 2 */}
        <Section>
          <LayerStrip active={2} />
          <div className="flex flex-wrap items-center gap-4">
            <LayerBadge n={2} />
            <Title>{t("layer2.title")}</Title>
          </div>
          <Lede>{t("layer2.lede")}</Lede>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Card title={t("layer2.cards.wiki.title")} body={t("layer2.cards.wiki.body")} demo={demo} />
            <Card title={t("layer2.cards.twin.title")} body={t("layer2.cards.twin.body")} />
            <Card
              title={t("layer2.cards.fabric.title")}
              body={t("layer2.cards.fabric.body")}
              demo={demo}
            />
          </div>
          <Callout label={t("layer2.callout.label")} body={t("layer2.callout.body")} />
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- layer 3 */}
        <Section>
          <LayerStrip active={3} />
          <div className="flex flex-wrap items-center gap-4">
            <LayerBadge n={3} />
            <Title>{t("layer3.title")}</Title>
          </div>
          <Lede>{t("layer3.lede")}</Lede>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Card
              title={t("layer3.cards.factory.title")}
              body={t("layer3.cards.factory.body")}
              demo={demo}
            />
            <Card
              title={t("layer3.cards.collaboration.title")}
              body={t("layer3.cards.collaboration.body")}
            />
            <Card title={t("layer3.cards.humanLoop.title")} body={t("layer3.cards.humanLoop.body")} />
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- layer 4 */}
        <Section>
          <LayerStrip active={4} />
          <div className="flex flex-wrap items-center gap-4">
            <LayerBadge n={4} />
            <Title>{t("layer4.title")}</Title>
          </div>
          <Lede>{t("layer4.lede")}</Lede>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Card
              title={t("layer4.cards.capacity.title")}
              body={t("layer4.cards.capacity.body")}
              demo={demo}
            />
            <Card title={t("layer4.cards.workflow.title")} body={t("layer4.cards.workflow.body")} />
            <Card title={t("layer4.cards.events.title")} body={t("layer4.cards.events.body")} />
          </div>
          <Callout label={t("layer4.callout.label")} body={t("layer4.callout.body")} />
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- layer 5 */}
        <Section>
          <LayerStrip active={5} />
          <div className="flex flex-wrap items-center gap-4">
            <LayerBadge n={5} />
            <Title>{t("layer5.title")}</Title>
          </div>
          <Lede>{t("layer5.lede")}</Lede>
          <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {GENERAL_APPS.map((p) => (
              <ProductCard
                key={p.key}
                name={p.name}
                tone="cyan"
                tag={t(`layer5.products.${p.key}.tag`)}
                desc={t(`layer5.products.${p.key}.desc`)}
                demo={p.demo ? demo : undefined}
              />
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- layer 6 */}
        <Section>
          <LayerStrip active={6} />
          <div className="flex flex-wrap items-center gap-4">
            <LayerBadge n={6} />
            <Title>{t("layer6.title")}</Title>
          </div>
          <Lede>{t("layer6.lede")}</Lede>
          <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {TEMPLATES.map((p) => (
              <ProductCard
                key={p.key}
                name={p.name}
                tone="purple"
                tag={t(`layer6.templates.${p.key}.tag`)}
                desc={t(`layer6.templates.${p.key}.desc`)}
                badge={p.proven ? t("layer6.provenBadge") : undefined}
              />
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* --------------------------------------------------------- catalog */}
        <Section>
          <Eyebrow>{t("catalog.eyebrow")}</Eyebrow>
          <Title>{t("catalog.title")}</Title>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Tag tone="cyan">{t("catalog.general.badge")}</Tag>
            <span className="text-base font-bold text-foreground">{t("catalog.general.title")}</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="font-mono text-[11px] text-muted-foreground">12</span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {t("catalog.general.list")}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Tag tone="purple">{t("catalog.vertical.badge")}</Tag>
            <span className="text-base font-bold text-foreground">{t("catalog.vertical.title")}</span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="font-mono text-[11px] text-muted-foreground">10</span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            {t("catalog.vertical.list")}
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-[12.5px]">
              <thead>
                <tr>
                  {(["dimension", "general", "templates"] as const).map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-cyan-glow/40 px-3.5 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.1em] text-cyan-glow"
                    >
                      {t(`catalog.table.head.${h}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CATALOG_ROWS.map((row) => (
                  <tr key={row} className="transition-colors hover:bg-surface-veil">
                    <th
                      scope="row"
                      className="border-b border-border px-3.5 py-3 text-left align-top font-semibold text-foreground"
                    >
                      {t(`catalog.table.rows.${row}.label`)}
                    </th>
                    <td className="border-b border-border px-3.5 py-3 align-top leading-relaxed text-muted-foreground">
                      {t(`catalog.table.rows.${row}.general`)}
                    </td>
                    <td className="border-b border-border px-3.5 py-3 align-top leading-relaxed text-muted-foreground">
                      {t(`catalog.table.rows.${row}.templates`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <div className="section-divider" />

        {/* ----------------------------------------------------- positioning */}
        <Section>
          <Eyebrow>{t("positioning.eyebrow")}</Eyebrow>
          <Title>{t("positioning.title")}</Title>
          <Lede>{t("positioning.lede")}</Lede>

          <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
            {/* Positioning map. The geometry is decoration; the labels carry
                the meaning, and the same claims repeat in the table beside it. */}
            <div
              className="relative h-[340px] rounded-xl border border-border bg-card/50"
              style={QUADRANT_FILL}
            >
              <span className="absolute left-1/2 top-0 h-full w-px bg-border" aria-hidden="true" />
              <span className="absolute left-0 top-1/2 h-px w-full bg-border" aria-hidden="true" />

              <div className="absolute left-3 top-2 font-mono text-[9.5px] tracking-[0.08em] text-muted-foreground">
                {t("positioning.quadrant.axisY")}
              </div>
              <div className="absolute bottom-2 left-3 max-w-[45%] font-mono text-[9.5px] leading-snug tracking-[0.08em] text-muted-foreground">
                {t("positioning.quadrant.axisLeft")}
              </div>
              <div className="absolute bottom-2 right-3 max-w-[45%] text-right font-mono text-[9.5px] leading-snug tracking-[0.08em] text-muted-foreground">
                {t("positioning.quadrant.axisRight")}
              </div>

              {QUAD_DOTS.map((d) => (
                <div
                  key={d.key}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
                  style={{ left: d.left, top: d.top }}
                >
                  <span
                    className={`rounded-full ${QUAD_DOT_CLASS[d.kind]}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`whitespace-nowrap text-[12px] font-bold leading-tight ${QUAD_NAME_CLASS[d.kind]}`}
                  >
                    {t(`positioning.quadrant.dots.${d.key}.name`)}
                  </span>
                  <span className="whitespace-nowrap font-mono text-[9px] leading-tight text-muted-foreground">
                    {t(`positioning.quadrant.dots.${d.key}.sub`)}
                  </span>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-[11.5px]">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-cyan-glow/40 px-2.5 py-2 text-left font-mono text-[10.5px] uppercase tracking-[0.1em] text-cyan-glow"
                    >
                      {t("positioning.table.head.dimension")}
                    </th>
                    <th
                      scope="col"
                      className="border-b border-cyan-glow/40 px-2.5 py-2 text-left font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Glean
                    </th>
                    <th
                      scope="col"
                      className="border-b border-cyan-glow/40 px-2.5 py-2 text-left font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      Automation Anywhere
                    </th>
                    <th
                      scope="col"
                      className="border-b border-cyan-glow/40 px-2.5 py-2 text-left font-mono text-[10.5px] uppercase tracking-[0.1em] text-cyan-glow"
                    >
                      {t("positioning.table.head.item")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {POSITIONING_ROWS.map((row) => (
                    <tr key={row} className="transition-colors hover:bg-surface-veil">
                      <th
                        scope="row"
                        className="border-b border-border px-2.5 py-2 text-left align-top font-semibold text-foreground"
                      >
                        {t(`positioning.table.rows.${row}.label`)}
                      </th>
                      <td className="border-b border-border px-2.5 py-2 align-top leading-relaxed text-muted-foreground">
                        {t(`positioning.table.rows.${row}.glean`)}
                      </td>
                      <td className="border-b border-border px-2.5 py-2 align-top leading-relaxed text-muted-foreground">
                        {t(`positioning.table.rows.${row}.aa`)}
                      </td>
                      <td className="border-b border-border px-2.5 py-2 align-top font-semibold leading-relaxed text-foreground">
                        {t(`positioning.table.rows.${row}.item`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <div className="section-divider" />

        {/* -------------------------------------------------- implementation */}
        <Section>
          <Eyebrow>{t("implementation.eyebrow")}</Eyebrow>
          <Title>{t("implementation.title")}</Title>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.key} className="relative">
                <div className="panel h-full rounded-xl p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-glow">
                    {t(`implementation.steps.${step.key}.phase`)}
                  </div>
                  <h3 className="mt-2 text-[17px] font-bold text-foreground">
                    {t(`implementation.steps.${step.key}.title`)}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {t(`implementation.steps.${step.key}.body`)}
                  </p>
                  {step.timing && (
                    <p className="mt-3 font-mono text-[11px] font-semibold text-cyan-glow">
                      {t(`implementation.steps.${step.key}.timing`)}
                    </p>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-foreground">
                    {t(`implementation.steps.${step.key}.footnote`)}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <span
                    className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg text-cyan-glow lg:block"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                )}
              </div>
            ))}
          </div>

          <Callout
            label={t("implementation.pricing.label")}
            body={t("implementation.pricing.body")}
            tone="purple"
          />
        </Section>

        <div className="section-divider" />

        {/* ---------------------------------------------------------- vision */}
        <footer className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" style={COVER_GLOW} aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24">
            <Eyebrow>{t("vision.eyebrow")}</Eyebrow>
            <p className="max-w-[1050px] text-balance text-3xl font-display font-bold leading-[1.18] tracking-tight text-foreground sm:text-4xl lg:text-[3.1rem]">
              <span className="block">{t("vision.lineOne")}</span>
              <span className="block text-cyan-glow">{t("vision.lineAccent")}</span>
              <span className="block">{t("vision.lineThree")}</span>
            </p>

            <p className="mt-8 max-w-3xl text-pretty text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
              {t("vision.lede")}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <Tag tone="cyan">{t("vision.tags.onePlatform")}</Tag>
              <Tag tone="purple">{t("vision.tags.nIndustries")}</Tag>
              <Tag tone="proven">{t("vision.tags.proven")}</Tag>
              <Tag tone="muted">{t("vision.tags.next")}</Tag>
            </div>

            <div className="mt-11 font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
              {t("vision.meta")}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
