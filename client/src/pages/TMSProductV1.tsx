import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  Gauge,
  Lock,
  TrendingUp,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
   ITEM Freight Trust Platform — product deck.
   Ported from a hosted single-file HTML page into native React + Tailwind.
   All copy comes from the `pages.tmsProductV1` dictionary; the vendored
   screenshots live in client/public/media and are referenced via BASE_URL.
   --------------------------------------------------------------------------- */

type Card = { title: string; body: string };
type Layer = { title: string; body: string; modules: string[] };
type Group = { title: string; body: string; tags: string[] };
type Column = { title: string; body: string; items: string[] };
type Stat = { value: string; label: string };
type Lead = { lead: string; body: string };

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

const ORDER = {
  problemCards: ["gps", "driverSwap", "equipment", "photos", "seals", "evidence"],
  layers: ["identity", "execution", "evidence", "data"],
  dockTimeline: ["docked", "emptyConfirmed", "loading", "loaded", "sealed", "departed"],
  sealKinds: ["traditional", "rfid", "electronic", "sensor"],
  signalGroups: ["carrier", "independent", "contextual"],
  checkpointKinds: ["active", "passive", "corroborated"],
  riskColumns: ["shipmentScore", "carrierScorecard", "autoPolicies"],
  dataflowColumns: ["sources", "processing", "outputs"],
  integrationCards: [
    "erp",
    "wms",
    "telematics",
    "visibility",
    "compliance",
    "hardware",
    "tms",
    "insurance",
  ],
  valueCards: ["security", "visibility", "speed", "claims"],
  valueStats: ["theftRisk", "claimsCycle", "gateEfficiency", "trackingConfidence"],
} as const;

type Tone = "cyan" | "purple" | "blue" | "green" | "amber" | "red";

const toneText: Record<Tone, string> = {
  cyan: "text-cyan-glow",
  purple: "text-purple-glow",
  blue: "text-sky-700 dark:text-sky-300",
  green: "text-emerald-700 dark:text-emerald-300",
  amber: "text-amber-700 dark:text-amber-300",
  red: "text-rose-700 dark:text-rose-300",
};

const toneChip: Record<Tone, string> = {
  cyan: "border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow",
  purple: "border-purple-glow/30 bg-purple-glow/10 text-purple-glow",
  blue: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  red: "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

/** Accent edges. Only the one edge is coloured, so `.panel`'s own border stays. */
const toneEdgeLeft: Record<Tone, string> = {
  cyan: "border-l-2 border-l-cyan-glow",
  purple: "border-l-2 border-l-purple-glow",
  blue: "border-l-2 border-l-sky-500",
  green: "border-l-2 border-l-emerald-500",
  amber: "border-l-2 border-l-amber-500",
  red: "border-l-2 border-l-rose-500",
};

const toneEdgeTop: Record<Tone, string> = {
  cyan: "border-t-2 border-t-cyan-glow",
  purple: "border-t-2 border-t-purple-glow",
  blue: "border-t-2 border-t-sky-500",
  green: "border-t-2 border-t-emerald-500",
  amber: "border-t-2 border-t-amber-500",
  red: "border-t-2 border-t-rose-500",
};

const MEDIA = `${import.meta.env.BASE_URL}media/`;

/* -------------------------------- primitives ------------------------------ */

function Panel({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`panel rounded-xl p-5 sm:p-6 ${className}`}>{children}</div>;
}

function Chip({ tone = "blue", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-block rounded-md border px-2.5 py-1 text-[11px] font-semibold leading-none ${toneChip[tone]}`}
    >
      {children}
    </span>
  );
}

function Pill({ tone = "green", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${toneChip[tone]}`}
    >
      {children}
    </span>
  );
}

function Bullets({
  items,
  icon = "check",
  tone = "green",
}: {
  items: string[];
  icon?: "check" | "arrow" | "dot";
  tone?: Tone;
}) {
  return (
    <ul className="mt-3 divide-y divide-border">
      {items.map((line) => (
        <li key={line} className="flex items-start gap-2.5 py-2 text-sm text-muted-foreground">
          <span className={`mt-0.5 shrink-0 ${toneText[tone]}`} aria-hidden="true">
            {icon === "check" && <Check className="h-4 w-4" />}
            {icon === "arrow" && <ArrowRight className="h-4 w-4" />}
            {icon === "dot" && <span className="block h-1.5 w-1.5 translate-y-1.5 rounded-full bg-current" />}
          </span>
          <span className="leading-relaxed">{line}</span>
        </li>
      ))}
    </ul>
  );
}

function Note({ value, tone = "cyan" }: { value: Lead; tone?: Tone }) {
  return (
    <div className={`my-4 rounded-r-lg bg-surface-veil px-5 py-4 ${toneEdgeLeft[tone]}`}>
      <p className="text-sm leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-foreground">{value.lead}</strong> {value.body}
      </p>
    </div>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-cyan-glow/25 bg-gradient-to-br from-cyan-glow/10 to-purple-glow/10 px-6 py-5">
      {children}
    </div>
  );
}

function Figure({
  png,
  svg,
  alt,
  caption,
  className = "",
}: {
  png: string;
  svg: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      {/* Raster screenshots carry their own baked-in background, so they are
          never filtered or inverted — a neutral frame carries them instead. */}
      <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-sm">
        <picture>
          <source srcSet={`${MEDIA}${svg}`} type="image/svg+xml" />
          <img
            src={`${MEDIA}${png}`}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full rounded-lg"
          />
        </picture>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

/* --------------------------------- side nav ------------------------------- */

function SectionRail({ labels, label }: { labels: string[]; label: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number(visible.target.id.replace("slide-", "")));
      },
      { threshold: [0.25, 0.5], rootMargin: "-15% 0px -15% 0px" },
    );
    labels.forEach((_, i) => {
      const el = document.getElementById(`slide-${i}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [labels]);

  return (
    <nav
      aria-label={label}
      className="fixed left-0 top-0 z-40 hidden h-screen w-12 flex-col items-center gap-0.5 overflow-y-auto border-r border-border bg-background/85 py-16 backdrop-blur-md lg:flex"
    >
      {labels.map((title, i) => (
        <a
          key={title}
          href={`#slide-${i}`}
          title={title}
          aria-label={title}
          aria-current={active === i ? "true" : undefined}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-[10px] font-semibold transition-colors ${
            active === i
              ? "border-cyan-glow bg-cyan-glow/15 text-cyan-glow"
              : "border-transparent text-muted-foreground hover:border-border hover:bg-surface-veil hover:text-foreground"
          }`}
        >
          {String(i).padStart(2, "0")}
        </a>
      ))}
    </nav>
  );
}

/* --------------------------------- section -------------------------------- */

function Slide({
  index,
  title,
  subtitle,
  footer,
  children,
  className = "",
}: {
  index: number;
  title?: string;
  subtitle?: string;
  footer: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={`slide-${index}`}
      className={`relative border-b border-border px-6 py-20 sm:px-10 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {title && (
          <header className="mb-8">
            <span className="flex items-center gap-3 text-sm font-semibold tracking-wider text-cyan-glow">
              {String(index).padStart(2, "0")}
              <span className="h-px w-10 bg-cyan-glow" aria-hidden="true" />
            </span>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </header>
        )}
        {children}
        <p className="mt-12 text-right text-[11px] text-muted-foreground">{footer}</p>
      </div>
    </section>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function TMSProductV1() {
  const t = useT("pages.tmsProductV1");
  const footer = t("common.footer");
  const nav = t.list("nav");

  const problemCards = group<Card>(t, "problem.cards", ORDER.problemCards);
  const layers = group<Layer>(t, "platform.layers", ORDER.layers);
  const timeline = group<Card>(t, "dock.timeline", ORDER.dockTimeline);
  const sealKinds = group<Card>(t, "ebol.seal.kinds", ORDER.sealKinds);
  const signalGroups = group<Group>(t, "tracking.groups", ORDER.signalGroups);
  const checkpointKinds = group<Column>(t, "checkpoint.kinds", ORDER.checkpointKinds);
  const riskColumns = group<Column>(t, "risk.columns", ORDER.riskColumns);
  const dataflowColumns = group<Card>(t, "dataflow.columns", ORDER.dataflowColumns);
  const integrationCards = group<Card>(t, "integration.cards", ORDER.integrationCards);
  const valueCards = group<Card>(t, "value.cards", ORDER.valueCards);
  const stats = group<Stat>(t, "value.stats", ORDER.valueStats);

  const valueIcons = [Lock, Eye, Gauge, TrendingUp];
  const signalTones: Tone[] = ["blue", "purple", "green"];
  const checkpointTones: Tone[] = ["green", "blue", "purple"];
  const riskTones: Tone[] = ["red", "blue", "green"];
  const dataflowTones: Tone[] = ["blue", "cyan", "green"];
  const integrationTones: Tone[] = ["blue", "cyan", "purple", "green", "amber", "red", "blue", "cyan"];
  const sealTones: Tone[] = ["green", "cyan", "purple", "amber"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <SectionRail labels={nav} label={t("common.sectionLabel")} />

      <main className="lg:pl-12">
        {/* 00 — Cover ------------------------------------------------------- */}
        <section
          id="slide-0"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-border px-6 py-24 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 45%, color-mix(in oklch, var(--cyan-glow) 14%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, color-mix(in oklch, var(--purple-glow) 12%, transparent) 0%, transparent 55%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-6xl">{t("cover.title")}</h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">{t("cover.subtitle")}</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-foreground/85">
              {t("cover.tagline")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {t.list("cover.chips").map((chip, i) => (
                <Chip key={chip} tone={(["blue", "purple", "cyan", "green"] as Tone[])[i % 4]}>
                  {chip}
                </Chip>
              ))}
            </div>
          </div>
          <a
            href="#slide-1"
            className="absolute bottom-10 z-10 text-xs uppercase tracking-[0.2em] text-muted-foreground motion-safe:animate-bounce"
          >
            {t("cover.scrollHint")} ↓
          </a>
        </section>

        {/* 01 — Trust problem ---------------------------------------------- */}
        <Slide index={1} title={t("problem.title")} subtitle={t("problem.subtitle")} footer={footer}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problemCards.map(({ key, item }) => (
              <Panel key={key}>
                <h3 className={`text-base font-bold ${toneText.red}`}>{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            ))}
          </div>
          <Highlight>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">{t("problem.highlight.lead")}</strong>{" "}
              {t("problem.highlight.body")}
            </p>
          </Highlight>
        </Slide>

        {/* 02 — Tracked vs verified ---------------------------------------- */}
        <Slide index={2} title={t("verified.title")} subtitle={t("verified.subtitle")} footer={footer}>
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Panel>
              <h3 className="text-base font-bold text-muted-foreground">{t("verified.traditional.title")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t("verified.traditional.note")}</p>
              <ul className="mt-4 divide-y divide-border">
                {t.list("verified.traditional.items").map((item) => (
                  <li key={item} className="py-2 text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`mt-4 text-xs ${toneText.red}`}>{t("verified.traditional.result")}</p>
            </Panel>

            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-sm font-extrabold ${toneChip.purple}`}
              aria-hidden="true"
            >
              {t("verified.vs")}
            </div>

            <Panel className="border-cyan-glow/30">
              <h3 className={`text-base font-bold ${toneText.cyan}`}>{t("verified.item.title")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t("verified.item.note")}</p>
              <Bullets items={t.list("verified.item.items")} tone="green" />
              <p className={`mt-4 text-xs ${toneText.green}`}>{t("verified.item.result")}</p>
            </Panel>
          </div>

          <Highlight>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">{t("verified.principle.lead")}</strong>{" "}
              {t("verified.principle.body")}
            </p>
          </Highlight>
        </Slide>

        {/* 03 — Platform overview ------------------------------------------ */}
        <Slide index={3} title={t("platform.title")} subtitle={t("platform.subtitle")} footer={footer}>
          <div className="space-y-4">
            {layers.map(({ key, item }) => (
              <Panel key={key}>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${toneText.cyan}`}>
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.modules.map((m) => (
                    <Chip key={m} tone="blue">
                      {m}
                    </Chip>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </Slide>

        {/* 04 — System architecture ---------------------------------------- */}
        <Slide
          index={4}
          title={t("architecture.title")}
          subtitle={t("architecture.subtitle")}
          footer={footer}
        >
          <Figure
            png="ZLXlmXzesVyFIWKR.png"
            svg="YliAxrUJuUwLizHw.svg"
            alt={t("architecture.altSystem")}
            className="mx-auto max-w-4xl"
          />
          <Note value={{ lead: t("architecture.explanation.lead"), body: t("architecture.explanation.body") }} />
          <Figure
            png="LJZsvtXoJGLmFQLT.png"
            svg="ouUnrNRgHhUTaMvV.svg"
            alt={t("architecture.altModules")}
            className="mx-auto max-w-4xl"
          />
        </Slide>

        {/* 05 — DIEV + Shipper TMS ----------------------------------------- */}
        <Slide index={5} title={t("diev.title")} subtitle={t("diev.subtitle")} footer={footer}>
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel className={toneEdgeLeft.purple}>
              <h3 className={`text-lg font-bold ${toneText.purple}`}>{t("diev.identity.name")}</h3>
              <p className="mt-1 text-sm font-semibold text-foreground">{t("diev.identity.subtitle")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("diev.identity.body")}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.list("diev.identity.tags").map((tag) => (
                  <Chip key={tag} tone="purple">
                    {tag}
                  </Chip>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="green">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("diev.identity.badges.pass")}
                </Pill>
                <Pill tone="amber">{t("diev.identity.badges.review")}</Pill>
                <Pill tone="red">{t("diev.identity.badges.decline")}</Pill>
              </div>
            </Panel>

            <Panel className={toneEdgeLeft.cyan}>
              <h3 className={`text-lg font-bold ${toneText.cyan}`}>{t("diev.execution.name")}</h3>
              <p className="mt-1 text-sm font-semibold text-foreground">{t("diev.execution.subtitle")}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("diev.execution.body")}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.list("diev.execution.tags").map((tag) => (
                  <Chip key={tag} tone="blue">
                    {tag}
                  </Chip>
                ))}
              </div>
            </Panel>
          </div>

          <ol className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {t.list("diev.flow").map((step, i, arr) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={`rounded-lg border px-3 py-2 text-xs font-medium ${
                    i === 0 ? toneChip.purple : i === arr.length - 1 ? toneChip.green : "border-border bg-card text-foreground"
                  }`}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-cyan-glow" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Slide>

        {/* 06 — End-to-end process ----------------------------------------- */}
        <Slide index={6} title={t("process.title")} subtitle={t("process.subtitle")} footer={footer}>
          <Figure
            png="FRzZmCoodPVfekNF.png"
            svg="lXNiGuIDmXnXwIky.svg"
            alt={t("process.altFlow")}
            className="mx-auto max-w-4xl"
          />
          <Note value={{ lead: t("process.evidence.lead"), body: t("process.evidence.body") }} />
          <Figure
            png="WuxAHRSdLSxxDJTc.png"
            svg="XCyxrUQkYrRtURai.svg"
            alt={t("process.altEntities")}
            className="mx-auto max-w-2xl"
          />
          <Note
            tone="purple"
            value={{ lead: t("process.entities.lead"), body: t("process.entities.body") }}
          />
        </Slide>

        {/* 07 — Trailer inspection ----------------------------------------- */}
        <Slide index={7} title={t("inspection.title")} subtitle={t("inspection.subtitle")} footer={footer}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-5">
              <Panel>
                <h3 className={`text-sm font-bold ${toneText.cyan}`}>{t("inspection.scope.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t("inspection.scope.body")}
                </p>

                {(
                  [
                    ["inspection.scope.exteriorLabel", "inspection.scope.exterior", "blue"],
                    ["inspection.scope.interiorLabel", "inspection.scope.interior", "cyan"],
                    ["inspection.scope.reeferLabel", "inspection.scope.reefer", "green"],
                  ] as const
                ).map(([labelKey, listKey, tone]) => (
                  <div key={labelKey} className="mt-4">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      {t(labelKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.list(listKey).map((item) => (
                        <Chip key={item} tone={tone as Tone}>
                          {item}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </Panel>

              <Panel>
                <h3 className={`text-sm font-bold ${toneText.purple}`}>{t("inspection.ai.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("inspection.ai.body")}</p>
                <Bullets items={t.list("inspection.ai.items")} tone="green" />
              </Panel>
            </div>

            <div>
              <Figure png="AgehqucrkmgnemAb.png" svg="qdYFsEOsABCJNgfS.svg" alt={t("inspection.alt")} />
              <Note
                value={{ lead: t("inspection.explanation.lead"), body: t("inspection.explanation.body") }}
              />
            </div>
          </div>
        </Slide>

        {/* 08 — Dock loading ----------------------------------------------- */}
        <Slide index={8} title={t("dock.title")} subtitle={t("dock.subtitle")} footer={footer}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className={`mb-4 text-base font-bold ${toneText.cyan}`}>{t("dock.timelineTitle")}</h3>
              <ol className="relative space-y-3 border-l border-border pl-6">
                {timeline.map(({ key, item }) => (
                  <li key={key} className="relative rounded-lg border border-border bg-card p-4">
                    <span
                      className="absolute -left-[1.9rem] top-5 block h-2.5 w-2.5 rounded-full bg-cyan-glow"
                      aria-hidden="true"
                    />
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-5">
              <Panel>
                <h3 className={`text-sm font-bold ${toneText.purple}`}>{t("dock.camera.title")}</h3>
                <Bullets items={t.list("dock.camera.items")} tone="green" />
              </Panel>
              <Panel>
                <h3 className={`text-sm font-bold ${toneText.cyan}`}>{t("dock.systems.title")}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.list("dock.systems.tags").map((tag) => (
                    <Chip key={tag} tone="blue">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </Panel>
              <Highlight>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-foreground">{t("dock.output.lead")}</strong>{" "}
                  {t("dock.output.body")}
                </p>
              </Highlight>
            </div>
          </div>
        </Slide>

        {/* 09 — eBOL & smart seal ------------------------------------------ */}
        <Slide index={9} title={t("ebol.title")} subtitle={t("ebol.subtitle")} footer={footer}>
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel className={toneEdgeLeft.cyan}>
              <h3 className="text-base font-bold">{t("ebol.bol.title")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("ebol.bol.body")}</p>
              <Bullets items={t.list("ebol.bol.items")} tone="green" />
            </Panel>

            <Panel className={toneEdgeLeft.green}>
              <h3 className="text-base font-bold">{t("ebol.seal.title")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("ebol.seal.body")}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {sealKinds.map(({ key, item }, i) => (
                  <div
                    key={key}
                    className={`rounded-lg border p-3 ${toneChip[sealTones[i % sealTones.length]]}`}
                  >
                    <p className="text-[11px] font-bold">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <Panel className={`mt-6 ${toneEdgeLeft.red}`}>
            <h3 className={`text-sm font-bold ${toneText.red}`}>{t("ebol.doorEvents.title")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("ebol.doorEvents.body")}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.list("ebol.doorEvents.badges").map((badge, i) => (
                <Pill key={badge} tone={(["green", "amber", "red", "red"] as Tone[])[i] ?? "red"}>
                  {badge}
                </Pill>
              ))}
            </div>
          </Panel>
        </Slide>

        {/* 10 — Multi-signal tracking -------------------------------------- */}
        <Slide index={10} title={t("tracking.title")} subtitle={t("tracking.subtitle")} footer={footer}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className={`mb-4 text-base font-bold ${toneText.cyan}`}>{t("tracking.sourcesTitle")}</h3>
              <div className="space-y-4">
                {signalGroups.map(({ key, item }, i) => (
                  <Panel key={key}>
                    <h4 className={`text-sm font-bold ${toneText[signalTones[i % 3]]}`}>{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Chip key={tag} tone={signalTones[i % 3]}>
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </Panel>
                ))}
              </div>
            </div>

            <div>
              <Panel className="border-cyan-glow/30">
                <h3 className="text-sm font-bold">{t("tracking.confidence.title")}</h3>
                <dl className="mt-4 rounded-lg border border-border bg-surface-veil p-5 font-mono text-sm">
                  <dt className="text-xs text-muted-foreground">{t("tracking.confidence.locationLabel")}</dt>
                  <dd className="mt-1 font-semibold text-foreground">{t("tracking.confidence.location")}</dd>

                  <dt className="mt-5 text-xs text-muted-foreground">
                    {t("tracking.confidence.scoreLabel")}
                  </dt>
                  <dd className={`mt-1 text-3xl font-extrabold ${toneText.green}`}>
                    {t("tracking.confidence.score")}
                  </dd>

                  <dt className="mt-5 text-xs text-muted-foreground">
                    {t("tracking.confidence.signalsLabel")}
                  </dt>
                  <dd className="mt-2 space-y-1.5">
                    {t.list("tracking.confidence.signals").map((signal) => (
                      <p key={signal} className={`flex items-center gap-2 text-xs ${toneText.green}`}>
                        <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {signal}
                      </p>
                    ))}
                  </dd>
                </dl>
              </Panel>
              <Note
                value={{ lead: t("tracking.explanation.lead"), body: t("tracking.explanation.body") }}
              />
            </div>
          </div>
        </Slide>

        {/* 11 — Checkpoint intelligence ------------------------------------ */}
        <Slide index={11} title={t("checkpoint.title")} subtitle={t("checkpoint.subtitle")} footer={footer}>
          <Figure
            png="FfcmhqziBgcDKSuY.png"
            svg="GiprtMWCgokuGMKd.svg"
            alt={t("checkpoint.alt")}
            className="mx-auto max-w-4xl"
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {checkpointKinds.map(({ key, item }, i) => (
              <Panel key={key} className={toneEdgeTop[checkpointTones[i % 3]]}>
                <h3 className={`text-sm font-bold ${toneText[checkpointTones[i % 3]]}`}>{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                <Bullets items={item.items} tone={checkpointTones[i % 3]} />
              </Panel>
            ))}
          </div>

          <Highlight>
            <div className="flex flex-wrap items-center gap-2">
              <strong className="text-sm font-semibold text-foreground">{t("checkpoint.status.label")}</strong>
              {t.list("checkpoint.status.badges").map((badge, i) => (
                <Pill key={badge} tone={(["green", "amber", "red", "red"] as Tone[])[i] ?? "red"}>
                  {badge}
                </Pill>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t("checkpoint.status.note")}</p>
          </Highlight>
        </Slide>

        {/* 12 — AI control tower ------------------------------------------- */}
        <Slide index={12} title={t("controlTower.title")} subtitle={t("controlTower.subtitle")} footer={footer}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-5">
              <Panel className={toneEdgeLeft.red}>
                <h3 className={`text-sm font-bold ${toneText.red}`}>{t("controlTower.monitor.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("controlTower.monitor.body")}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.list("controlTower.monitor.critical").map((item) => (
                    <Chip key={item} tone="red">
                      {item}
                    </Chip>
                  ))}
                  {t.list("controlTower.monitor.warning").map((item) => (
                    <Chip key={item} tone="amber">
                      {item}
                    </Chip>
                  ))}
                </div>
              </Panel>

              <Panel className={toneEdgeLeft.green}>
                <h3 className={`text-sm font-bold ${toneText.green}`}>{t("controlTower.actions.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("controlTower.actions.body")}</p>
                <Bullets items={t.list("controlTower.actions.items")} icon="arrow" tone="green" />
              </Panel>
            </div>

            <div>
              <Figure png="kZiruIHrGukMUVwg.png" svg="cNiBwsPwejrXMiEG.svg" alt={t("controlTower.alt")} />
              <Note
                value={{
                  lead: t("controlTower.explanation.lead"),
                  body: t("controlTower.explanation.body"),
                }}
              />
            </div>
          </div>
        </Slide>

        {/* 13 — Delivery & ePOD -------------------------------------------- */}
        <Slide index={13} title={t("delivery.title")} subtitle={t("delivery.subtitle")} footer={footer}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className={`mb-1 text-base font-bold ${toneText.cyan}`}>{t("delivery.sequenceTitle")}</h3>
              <Bullets items={t.list("delivery.sequence")} tone="green" />
            </div>

            <div className="space-y-5">
              <Panel>
                <h3 className={`text-sm font-bold ${toneText.purple}`}>{t("delivery.compare.title")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("delivery.compare.body")}</p>
                <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className={`rounded-lg border p-3 text-center ${toneChip.blue}`}>
                    <p className="text-[11px] opacity-80">{t("delivery.compare.loadingLabel")}</p>
                    <p className="mt-1 text-xs font-semibold">{t("delivery.compare.loadingValue")}</p>
                  </div>
                  <span className={`text-xs font-bold ${toneText.purple}`} aria-hidden="true">
                    {t("delivery.compare.vs")}
                  </span>
                  <div className={`rounded-lg border p-3 text-center ${toneChip.purple}`}>
                    <p className="text-[11px] opacity-80">{t("delivery.compare.deliveryLabel")}</p>
                    <p className="mt-1 text-xs font-semibold">{t("delivery.compare.deliveryValue")}</p>
                  </div>
                </div>
                <Bullets items={t.list("delivery.compare.items")} tone="green" />
              </Panel>

              <Highlight>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-foreground">{t("delivery.output.lead")}</strong>{" "}
                  {t("delivery.output.body")}
                </p>
              </Highlight>
            </div>
          </div>
        </Slide>

        {/* 14 — AI claims investigation ------------------------------------ */}
        <Slide index={14} title={t("claims.title")} subtitle={t("claims.subtitle")} footer={footer}>
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Panel className="border-rose-500/30">
              <h3 className={`text-sm font-bold ${toneText.red}`}>{t("claims.traditional.title")}</h3>
              <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                {t("claims.traditional.body")}
              </p>
            </Panel>
            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-sm font-extrabold ${toneChip.purple}`}
              aria-hidden="true"
            >
              {t("claims.vs")}
            </div>
            <Panel className="border-emerald-500/30">
              <h3 className={`text-sm font-bold ${toneText.green}`}>{t("claims.item.title")}</h3>
              <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                {t("claims.item.body")}
              </p>
            </Panel>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Panel>
              <h3 className="text-sm font-bold">{t("claims.caseFile.title")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("claims.caseFile.body")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.list("claims.caseFile.tags").map((tag, i) => (
                  <Chip key={tag} tone={(["blue", "cyan", "purple", "green", "amber"] as Tone[])[i % 5]}>
                    {tag}
                  </Chip>
                ))}
              </div>
            </Panel>
            <Panel>
              <h3 className="text-sm font-bold">{t("claims.investigator.title")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("claims.investigator.body")}</p>
              <Bullets items={t.list("claims.investigator.items")} tone="green" />
            </Panel>
          </div>
        </Slide>

        {/* 15 — Risk & carrier scorecard ----------------------------------- */}
        <Slide index={15} title={t("risk.title")} subtitle={t("risk.subtitle")} footer={footer}>
          <div className="grid gap-5 lg:grid-cols-3">
            {riskColumns.map(({ key, item }, i) => (
              <Panel key={key} className={toneEdgeTop[riskTones[i % 3]]}>
                <h3 className={`text-sm font-bold ${toneText[riskTones[i % 3]]}`}>{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                <Bullets items={item.items} icon={i === 2 ? "arrow" : "dot"} tone={riskTones[i % 3]} />
              </Panel>
            ))}
          </div>
        </Slide>

        {/* 16 — Data flow --------------------------------------------------- */}
        <Slide index={16} title={t("dataflow.title")} subtitle={t("dataflow.subtitle")} footer={footer}>
          <Figure
            png="vPXOkdYkbAFBYqCk.png"
            svg="yRjcRCchmlmOEuEE.svg"
            alt={t("dataflow.alt")}
            className="mx-auto max-w-4xl"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {dataflowColumns.map(({ key, item }, i) => (
              <Panel key={key}>
                <h3 className={`text-sm font-bold ${toneText[dataflowTones[i % 3]]}`}>{item.title}</h3>
                <p className="mt-2 text-sm leading-loose text-muted-foreground">{item.body}</p>
              </Panel>
            ))}
          </div>
        </Slide>

        {/* 17 — Product experience ----------------------------------------- */}
        <Slide index={17} title={t("experience.title")} subtitle={t("experience.subtitle")} footer={footer}>
          <Figure
            png="kZiruIHrGukMUVwg.png"
            svg="cNiBwsPwejrXMiEG.svg"
            alt={t("experience.altDashboard")}
            className="mx-auto max-w-4xl"
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Figure
              png="AgehqucrkmgnemAb.png"
              svg="qdYFsEOsABCJNgfS.svg"
              alt={t("experience.altShipment")}
              caption={t("experience.captionShipment")}
            />
            <Figure
              png="cPIiWDlFDHcKstnW.png"
              svg="sEsBIkCNGzDHGmuY.svg"
              alt={t("experience.altCheckpoint")}
              caption={t("experience.captionCheckpoint")}
            />
          </div>

          <Figure
            png="YSvXEbPJgwdFsbel.png"
            svg="LtvwbUwhPGQrQVer.svg"
            alt={t("experience.altDriverApp")}
            caption={t("experience.captionDriverApp")}
            className="mx-auto mt-6 max-w-3xl"
          />
        </Slide>

        {/* 18 — Integration ecosystem -------------------------------------- */}
        <Slide index={18} title={t("integration.title")} subtitle={t("integration.subtitle")} footer={footer}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrationCards.map(({ key, item }, i) => (
              <Panel key={key} className="text-center">
                <h3 className={`text-xs font-bold ${toneText[integrationTones[i % integrationTones.length]]}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            ))}
          </div>
          <Note
            value={{ lead: t("integration.explanation.lead"), body: t("integration.explanation.body") }}
          />
        </Slide>

        {/* 19 — Customer value --------------------------------------------- */}
        <Slide index={19} title={t("value.title")} subtitle={t("value.subtitle")} footer={footer}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards.map(({ key, item }, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <Panel key={key} className="text-center">
                  <Icon className="mx-auto h-6 w-6 text-cyan-glow" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </Panel>
              );
            })}
          </div>

          <dl className="mt-10 flex flex-wrap justify-center gap-5">
            {stats.map(({ key, item }) => (
              <div
                key={key}
                className="min-w-[8rem] rounded-xl border border-border bg-card px-7 py-5 text-center"
              >
                <dd className="text-2xl font-extrabold text-cyan-glow">{item.value}</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-14 text-center">
            <p className="text-xl font-extrabold leading-relaxed sm:text-2xl">
              {t.list("value.closing").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">{t("value.brand")}</p>
          </div>
        </Slide>
      </main>
    </div>
  );
}
