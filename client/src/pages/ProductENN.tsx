import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
   ITEM AI × ENN — product overview.
   Ported from the standalone dark-only HTML deck onto the repo's design
   tokens, so the page reads correctly in both the day and night themes.
   Every user-visible string comes from `pages.productEnn`.
   --------------------------------------------------------------------------- */

const ENN_LOGO = `${import.meta.env.BASE_URL}media/cpYtDSTTMLAMRYyR.png`;

type Accent = "cyan" | "purple" | "blue" | "red" | "neutral";

const ACCENT: Record<Accent, { text: string; bg: string; border: string; v: string }> = {
  cyan: { text: "text-cyan-glow", bg: "bg-cyan-glow", border: "border-cyan-glow/40", v: "--cyan-glow" },
  purple: {
    text: "text-purple-glow",
    bg: "bg-purple-glow",
    border: "border-purple-glow/40",
    v: "--purple-glow",
  },
  blue: { text: "text-chart-5", bg: "bg-chart-5", border: "border-chart-5/40", v: "--chart-5" },
  red: {
    text: "text-destructive",
    bg: "bg-destructive",
    border: "border-destructive/40",
    v: "--destructive",
  },
  neutral: {
    text: "text-muted-foreground",
    bg: "bg-muted-foreground",
    border: "border-border",
    v: "--muted-foreground",
  },
};

/** A card wash that follows the active theme instead of assuming a dark ground. */
function tint(accent: Accent, pct = 10): CSSProperties {
  return {
    background: `linear-gradient(160deg, color-mix(in oklch, var(${ACCENT[accent].v}) ${pct}%, var(--card)), var(--card))`,
  };
}

function softFill(accent: Accent, pct = 12): CSSProperties {
  return { background: `color-mix(in oklch, var(${ACCENT[accent].v}) ${pct}%, transparent)` };
}

/* ----------------------------- page data ---------------------------------- */

const HERO_STATS = [
  { key: "products", value: "22", unit: "", accent: true },
  { key: "layers", value: "5", unit: "", accent: false },
  { key: "pilot", value: "8–12", unit: "wk", accent: false },
  { key: "automation", value: "95%", unit: "+", accent: false },
] as const;

const SYSLINE: { label: string; accent: Accent }[] = [
  { label: "Ontology", accent: "purple" },
  { label: "Foundry", accent: "cyan" },
  { label: "AI OS", accent: "cyan" },
  { label: "AIP", accent: "blue" },
  { label: "Harness", accent: "purple" },
];

const TAXES: { key: string; accent: Accent }[] = [
  { key: "compliance", accent: "red" },
  { key: "data", accent: "blue" },
  { key: "operations", accent: "cyan" },
];

const LAYERS: { key: string; code: string; accent: Accent }[] = [
  { key: "app", code: "L7 · Applications", accent: "blue" },
  { key: "ai", code: "L6 · AI Layer", accent: "cyan" },
  { key: "foundry", code: "L5 · Foundry", accent: "cyan" },
  { key: "aip", code: "L4 · AIP", accent: "blue" },
  { key: "ontology", code: "L3 · Ontology", accent: "purple" },
  { key: "harness", code: "L2 · Harness", accent: "purple" },
  { key: "infra", code: "L1 · Infrastructure", accent: "neutral" },
];

const SYSTEMS: {
  key: string;
  num: string;
  name: string;
  accent: Accent;
  products: string[];
  wide?: boolean;
}[] = [
  {
    key: "ontology",
    num: "01 · SYSTEM OF MEANING",
    name: "Ontology",
    accent: "purple",
    products: ["studio", "executor"],
  },
  {
    key: "foundry",
    num: "02 · SYSTEM OF DATA & APPS",
    name: "Foundry",
    accent: "cyan",
    products: ["bi", "di"],
  },
  {
    key: "aios",
    num: "03 · SYSTEM OF INTELLIGENCE",
    name: "AI OS",
    accent: "cyan",
    products: [],
  },
  {
    key: "aip",
    num: "04 · SYSTEM OF ACTION",
    name: "AIP",
    accent: "blue",
    products: ["gpt", "flow", "vision"],
  },
  {
    key: "harness",
    num: "05 · SYSTEM OF DELIVERY",
    name: "Harness",
    accent: "purple",
    products: ["ide", "iam", "deploy"],
    wide: true,
  },
];

const AIOS_MODULES = [
  "ITEM.Predict",
  "ITEM.WMS",
  "ITEM.WES",
  "ITEM.OMS",
  "ITEM.APS",
  "ITEM.TMS",
  "ITEM.YMS",
  "ITEM.Dock",
];

const CATALOG: {
  group: string;
  accent: Accent;
  items: { key: string; name: string; proven?: boolean }[];
}[] = [
  {
    group: "ontology",
    accent: "purple",
    items: [
      { key: "itemGpt", name: "ItemGPT" },
      { key: "itemDoc", name: "ItemDoc" },
    ],
  },
  {
    group: "foundry",
    accent: "cyan",
    items: [
      { key: "itemSense", name: "ItemSense" },
      { key: "itemPredict", name: "ItemPredict" },
    ],
  },
  {
    group: "aios",
    accent: "cyan",
    items: [
      { key: "itemOpsAi", name: "ItemOps AI" },
      { key: "itemAudit", name: "ItemAudit" },
      { key: "itemVision", name: "ItemVision" },
      { key: "itemVoice", name: "ItemVoice" },
    ],
  },
  {
    group: "aip",
    accent: "blue",
    items: [
      { key: "itemClaw", name: "ItemClaw" },
      { key: "itemFlow", name: "ItemFlow" },
    ],
  },
  {
    group: "apps",
    accent: "blue",
    items: [
      { key: "itemSupport", name: "ItemSupport" },
      { key: "itemGrow", name: "ItemGrow" },
    ],
  },
  {
    group: "templates",
    accent: "purple",
    items: [
      { key: "itemChain", name: "ItemChain", proven: true },
      { key: "itemDock", name: "ItemDock" },
      { key: "itemTrade", name: "ItemTrade" },
      { key: "itemFin", name: "ItemFin" },
      { key: "itemDine", name: "ItemDine" },
      { key: "itemEstate", name: "ItemEstate" },
      { key: "itemBuild", name: "ItemBuild" },
      { key: "itemHealth", name: "ItemHealth" },
      { key: "itemAuto", name: "ItemAuto" },
      { key: "itemRetail", name: "ItemRetail" },
    ],
  },
];

const FLEET: { key: string; partner: string; tier: number }[] = [
  { key: "hangcha", partner: "Hangcha", tier: 3 },
  { key: "libiao", partner: "Libiao", tier: 3 },
  { key: "xyz", partner: "XYZ Robotics", tier: 3 },
  { key: "unitree", partner: "Unitree", tier: 3 },
  { key: "pudu", partner: "Pudu", tier: 2 },
  { key: "deepRobotics", partner: "Deep Robotics", tier: 2 },
  { key: "zsRobotics", partner: "ZS Robotics", tier: 2 },
  { key: "galaxis", partner: "Galaxis", tier: 2 },
  { key: "lanxin", partner: "Lanxin", tier: 2 },
  { key: "slamtec", partner: "Slamtec", tier: 2 },
  { key: "mita", partner: "Mita Robot", tier: 2 },
];

const LEDGER = [
  { key: "forklifts", capex: "$2–4M", sub: "$360–720K" },
  { key: "sortation", capex: "$0.5–1M", sub: "$240–480K" },
  { key: "picking", capex: "$1–2M", sub: "$300–600K" },
  { key: "humanoids", capex: "$405–900K", sub: "$540K–1.08M" },
  { key: "mixed", capex: "$400–800K", sub: "$216–420K" },
  { key: "infra", capex: "$100–300K", sub: "$180–300K" },
];
const LEDGER_TOTAL = { capex: "$4.4–9M", sub: "$1.8–3.6M" };

const LOOP: { key: string; name: string; accent: Accent }[] = [
  { key: "grow", name: "ITEM.Grow", accent: "blue" },
  { key: "gpt", name: "ITEM.GPT", accent: "cyan" },
  { key: "sce", name: "SCE Suite", accent: "blue" },
  { key: "sense", name: "ITEM.Sense", accent: "cyan" },
  { key: "support", name: "ITEM.Support", accent: "purple" },
  { key: "audit", name: "ITEM.Audit", accent: "purple" },
];

const CASES = ["electronics", "threepl", "yard"];

const METRICS: { key: string; value: string; accent: Accent }[] = [
  { key: "cost", value: "20–35%", accent: "cyan" },
  { key: "otd", value: "15–40%", accent: "blue" },
  { key: "automation", value: "95%+", accent: "cyan" },
  { key: "turns", value: "35%", accent: "purple" },
];

const PHASES = ["discovery", "ontology", "pilot", "scale", "autonomous"];

const BEST_FIT = ["manufacturers", "logistics", "forwarders", "retail", "ports"];

const CERTS: { key: string; name: string; accent: Accent }[] = [
  { key: "iso27001", name: "ISO 27001", accent: "blue" },
  { key: "iso42001", name: "ISO 42001", accent: "purple" },
  { key: "hitrust", name: "HITRUST AI", accent: "cyan" },
  { key: "fedramp", name: "FedRAMP", accent: "blue" },
  { key: "ctpat", name: "C-TPAT / AEO", accent: "cyan" },
  { key: "cmmc", name: "CMMC L2", accent: "purple" },
  { key: "tisax", name: "TISAX / ISO 9001", accent: "blue" },
  { key: "mixed", name: "HIPAA / PCI / ISO 14001", accent: "neutral" },
];

const RIVALS = ["ITEM AI", "Palantir", "Databricks", "Manhattan / Blue Yonder", "SAP / Oracle / Microsoft"];

const MATRIX: { key: string; cells: string[] }[] = [
  { key: "ontology", cells: ["native", "strong", "limited", "none", "limited"] },
  { key: "apps", cells: ["native", "custom", "partner", "legacy", "legacy"] },
  { key: "agents", cells: ["native", "strong", "strong", "none", "copilot"] },
  { key: "physical", cells: ["nativeFleet", "none", "none", "limited", "limited"] },
  { key: "deploy", cells: ["nativeHarness", "strong", "limited", "none", "partial"] },
  { key: "flywheel", cells: ["nativeLoop", "none", "none", "none", "scattered"] },
  { key: "focus", cells: ["core", "broad", "dataAi", "scmOnly", "productivity"] },
];

const WEAK = new Set(["none", "limited", "custom", "partner", "dataAi", "productivity", "broad"]);

/* ------------------------------- helpers ---------------------------------- */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const still = useReducedMotion();
  if (still) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

function Eyebrow({ sys, label, accent }: { sys: string; label: string; accent: Accent }) {
  return (
    <div className="mb-5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${ACCENT[accent].bg}`} aria-hidden="true" />
      <span className={ACCENT[accent].text}>{sys}</span>
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="section-divider mx-auto w-full max-w-[1180px]" />;
}

/* -------------------------------- page ------------------------------------ */

export default function ProductENN() {
  const t = useT("pages.productEnn");
  const cjk = t.locale === "zh" || t.locale === "ja";
  const sp = cjk ? "" : " ";
  const colon = cjk ? "：" : ": ";

  const heading = (main: string, accent: string) => (
    <>
      {main}
      {sp}
      <span className="text-cyan-glow">{accent}</span>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />

      {/* atmosphere — theme-aware, fades out in the light theme via --glow */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -right-[15vw] -top-[22vw] h-[55vw] w-[55vw] rounded-full blur-[120px]"
          style={{
            background: "color-mix(in oklch, var(--cyan-glow) calc(12% * var(--glow)), transparent)",
          }}
        />
        <div
          className="absolute -bottom-[20vw] -left-[12vw] h-[45vw] w-[45vw] rounded-full blur-[120px]"
          style={{
            background:
              "color-mix(in oklch, var(--purple-glow) calc(10% * var(--glow)), transparent)",
          }}
        />
      </div>

      <nav
        aria-label={t("sections.platform")}
        className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 items-center gap-6 rounded-full border border-border bg-card/70 px-5 py-2 backdrop-blur-md lg:flex"
      >
        {(["story", "platform", "products"] as const).map((k) => (
          <a
            key={k}
            href={`#${k}`}
            className="text-xs text-muted-foreground transition-colors hover:text-cyan-glow"
          >
            {t(`nav.${k}`)}
          </a>
        ))}
      </nav>

      <main className="relative z-10">
        {/* ============================ 01 HERO ============================ */}
        <section
          id="story"
          className="px-6 pb-20 pt-28 md:pt-32"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 8%, color-mix(in oklch, var(--cyan-glow) calc(14% * var(--glow)), transparent), transparent 60%), radial-gradient(ellipse 50% 45% at 8% 100%, color-mix(in oklch, var(--purple-glow) calc(10% * var(--glow)), transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1180px]">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-lg border border-border bg-white px-2.5 py-1.5">
                <img src={ENN_LOGO} alt={t("partner.alt")} className="h-7 w-auto object-contain" />
              </span>
              <span className="text-sm text-muted-foreground">{t("partner.caption")}</span>
            </div>

            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-veil px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" aria-hidden="true" />
              {t("hero.badge")}
            </div>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              {t("hero.titleMain")}
              <br />
              <span className="text-cyan-glow">{t("hero.titleAccent")}</span>
            </h1>

            <p className="mb-11 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.sub")}
            </p>

            <div className="grid max-w-4xl grid-cols-2 gap-3.5 md:grid-cols-4">
              {HERO_STATS.map((s) => (
                <div key={s.key} className="panel rounded-xl px-5 py-5">
                  <div
                    className={`text-3xl font-extrabold tracking-tight tabular-nums ${
                      s.accent ? "text-cyan-glow" : "text-foreground"
                    }`}
                  >
                    {s.value}
                    {s.unit && (
                      <span className="ml-0.5 text-base font-semibold text-muted-foreground">
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{t(`hero.stats.${s.key}`)}</div>
                </div>
              ))}
            </div>

            <div className="mt-11 flex flex-wrap gap-2.5">
              {SYSLINE.map((c) => (
                <span
                  key={c.label}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wider ${ACCENT[c.accent].border} ${ACCENT[c.accent].text}`}
                  style={softFill(c.accent, 8)}
                >
                  {c.label}
                </span>
              ))}
              <span className="rounded-full border border-border bg-surface-veil px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
                {t("hero.chip")}
              </span>
            </div>
          </div>
        </section>

        {/* ========================== 02 PROBLEM =========================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 01" label={t("sections.problem")} accent="red" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("problem.title")}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("problem.lede")}
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {TAXES.map((tax) => (
              <Reveal key={tax.key}>
                <div className="panel h-full rounded-xl p-6" style={tint(tax.accent)}>
                  <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t(`problem.kicker.${tax.key}`)}
                  </span>
                  <h3 className={`mb-2.5 text-2xl font-extrabold ${ACCENT[tax.accent].text}`}>
                    {t(`problem.taxes.${tax.key}.name`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`problem.taxes.${tax.key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-5">
            <div className="flex flex-wrap items-baseline gap-5 rounded-xl border border-dashed border-border px-6 py-5">
              <span className="text-2xl font-extrabold text-chart-5 md:text-3xl">
                {t("problem.note.amount")}
              </span>
              <p className="min-w-[260px] flex-1 text-sm leading-relaxed text-muted-foreground">
                {t("problem.note.body")}
              </p>
            </div>
          </Reveal>
        </Section>

        <Divider />

        {/* ========================= 03 CATEGORY =========================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 02" label={t("sections.category")} accent="blue" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {heading(t("category.titleMain"), t("category.titleAccent"))}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("category.lede")}
            </p>
          </Reveal>

          <Reveal>
            <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
              <div className="panel rounded-xl p-7" style={tint("red", 8)}>
                <h3 className="mb-3.5 text-lg font-bold">{t("category.old.title")}</h3>
                <ul className="space-y-1.5">
                  {t.list("category.old.items").map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 font-bold text-destructive" aria-hidden="true">
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex items-center justify-center text-3xl text-cyan-glow md:px-3"
                aria-hidden="true"
              >
                <span className="rotate-90 md:rotate-0">→</span>
              </div>

              <div className="panel rounded-xl p-7" style={tint("cyan", 8)}>
                <h3 className="mb-3.5 text-lg font-bold">{t("category.next.title")}</h3>
                <ul className="space-y-1.5">
                  {t.list("category.next.items").map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 font-bold text-cyan-glow" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <div className="panel rounded-xl px-7 py-8 text-center" style={tint("cyan", 9)}>
              <p className="text-lg font-bold leading-snug md:text-2xl">
                {t("category.thesis.lead")}
                {sp}
                <span className="text-cyan-glow">{t("category.thesis.accent")}</span>
                {sp}
                {t("category.thesis.tail")}
              </p>
              <p className="mt-2.5 text-sm text-muted-foreground md:text-base">
                {t("category.thesis.sub")}
              </p>
            </div>
          </Reveal>
        </Section>

        <Divider />

        {/* =========================== 04 STACK ============================ */}
        <Section id="platform">
          <Reveal>
            <Eyebrow sys="SYS 03" label={t("sections.platform")} accent="cyan" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("stack.title")}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">{t("stack.lede")}</p>
          </Reveal>

          <div className="mx-auto flex max-w-[900px] flex-col gap-2.5">
            {LAYERS.map((layer) => (
              <Reveal key={layer.key}>
                <div className="panel grid items-center gap-4 rounded-xl px-6 py-4 transition-transform duration-300 hover:translate-x-2 md:grid-cols-[130px_1fr_auto]">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                    {layer.code}
                  </span>
                  <div>
                    <div className="text-[15px] font-bold">{t(`stack.layers.${layer.key}.name`)}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {t(`stack.layers.${layer.key}.detail`)}
                    </div>
                  </div>
                  <span
                    className={`justify-self-start rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide md:justify-self-end ${ACCENT[layer.accent].border} ${ACCENT[layer.accent].text}`}
                    style={softFill(layer.accent, 8)}
                  >
                    {t(`stack.layers.${layer.key}.tag`)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-[900px] text-center text-sm text-muted-foreground">
            {t("stack.note")}
          </p>
        </Section>

        <Divider />

        {/* ========================= 05 FIVE SYSTEMS ======================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 04" label={t("sections.systems")} accent="purple" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("systems.title")}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("systems.lede")}
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {SYSTEMS.map((sys) => (
              <Reveal key={sys.key} className={sys.wide ? "lg:col-span-2" : undefined}>
                <div
                  className="panel flex h-full flex-col gap-3.5 rounded-2xl p-7"
                  style={tint(sys.accent)}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className={`font-mono text-xs tracking-[0.18em] ${ACCENT[sys.accent].text}`}>
                      {sys.num}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${ACCENT[sys.accent].border} ${ACCENT[sys.accent].text}`}
                      style={softFill(sys.accent, 10)}
                    >
                      {t(`systems.items.${sys.key}.badge`)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight">{sys.name}</h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <b className="font-semibold text-foreground">
                      {t("systems.labels.design")}
                      {colon}
                    </b>
                    {t(`systems.items.${sys.key}.design`)}
                    {sp}
                    <b className="font-semibold text-foreground">
                      {t("systems.labels.purpose")}
                      {colon}
                    </b>
                    {t(`systems.items.${sys.key}.purpose`)}
                  </p>

                  {sys.key === "aios" ? (
                    <div className="flex flex-col gap-2">
                      <div
                        className={`rounded-lg border px-3 py-2 text-center text-[13px] ${ACCENT[sys.accent].border}`}
                        style={softFill(sys.accent, 8)}
                      >
                        <b className="font-semibold">{t("systems.items.aios.runtime.name")}</b>{" "}
                        <span className="text-muted-foreground">
                          {t("systems.items.aios.runtime.role")}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {AIOS_MODULES.map((m) => (
                          <span
                            key={m}
                            className="rounded-md border border-border bg-surface-veil px-2.5 py-1 font-mono text-[11px]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-2 sm:grid-cols-2">
                      {sys.products.map((p) => (
                        <div
                          key={p}
                          className="rounded-lg border border-border bg-surface-veil px-3 py-2"
                          style={{
                            borderLeft: `2px solid color-mix(in oklch, var(${ACCENT[sys.accent].v}) 70%, transparent)`,
                          }}
                        >
                          <b className="block text-[12.5px] font-semibold">
                            {t(`systems.items.${sys.key}.products.${p}.name`)}
                          </b>
                          <span className="text-[11px] text-muted-foreground">
                            {t(`systems.items.${sys.key}.products.${p}.role`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {sys.key === "harness" && (
                    <div className="rounded-lg border border-border bg-surface-veil px-3 py-2 text-center font-mono text-xs text-muted-foreground">
                      {t("systems.items.harness.environments")}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {t.list(`systems.items.${sys.key}.caps`).map((cap) => (
                      <span
                        key={cap}
                        className="rounded-md border border-border bg-surface-veil px-2.5 py-1 text-[11.5px] text-muted-foreground"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-border pt-3.5 text-xs text-muted-foreground">
                    <b className="font-semibold text-foreground">
                      {t("systems.labels.commercial")}
                      {colon}
                    </b>
                    {t(`systems.items.${sys.key}.commercial`)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ========================== 06 PRODUCTS ========================== */}
        <Section id="products">
          <Reveal>
            <Eyebrow sys="SYS 05" label={t("sections.products")} accent="blue" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {heading(t("products.titleMain"), t("products.titleAccent"))}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("products.lede")}
            </p>
          </Reveal>

          {(() => {
            let n = 0;
            return CATALOG.map((group) => (
              <div key={group.group} className="mb-4">
                <Reveal>
                  <div
                    className="mb-3 flex flex-wrap items-center gap-2.5 rounded-lg border border-border px-4 py-2.5"
                    style={{
                      borderLeft: `3px solid color-mix(in oklch, var(${ACCENT[group.accent].v}) 80%, transparent)`,
                      ...softFill(group.accent, 5),
                    }}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${ACCENT[group.accent].bg}`}
                      aria-hidden="true"
                    />
                    <b className="text-[14.5px] font-bold tracking-wide">
                      {t(`products.groups.${group.group}.name`)}
                    </b>
                    <span className="text-xs text-muted-foreground">
                      {t(`products.groups.${group.group}.sub`)}
                    </span>
                    <span
                      className={`ml-auto rounded border border-border px-2 py-0.5 font-mono text-[11px] ${ACCENT[group.accent].text}`}
                    >
                      {group.items.length}
                    </span>
                  </div>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => {
                    n += 1;
                    const code = `P${String(n).padStart(2, "0")}`;
                    return (
                      <Reveal key={item.key}>
                        <div className="panel flex h-full min-h-[150px] flex-col gap-1.5 rounded-xl px-5 py-5">
                          <div className="flex items-baseline justify-between gap-2">
                            <b className="text-base font-bold">
                              {item.name}
                              {item.proven && (
                                <span className="ml-1.5 align-super font-mono text-[9px] tracking-wider text-cyan-glow">
                                  ✓ {t("products.provenLabel")}
                                </span>
                              )}
                            </b>
                            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                              {code}
                            </span>
                          </div>
                          <div className="text-[12.5px] italic text-cyan-glow">
                            {t(`products.items.${item.key}.tag`)}
                          </div>
                          <p className="text-[12.8px] leading-relaxed text-muted-foreground">
                            {t(`products.items.${item.key}.desc`)}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            ));
          })()}

          <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("products.note")}</p>
        </Section>

        <Divider />

        {/* ====================== 07 PHYSICAL AI / RAAS ===================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 06" label={t("sections.physical")} accent="cyan" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {heading(t("physical.titleMain"), t("physical.titleAccent"))}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("physical.lede")}
            </p>
          </Reveal>

          <Reveal>
            <div className="panel rounded-xl p-6">
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t("physical.fleet.caption")}
              </span>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[13.5px]">
                  <thead>
                    <tr>
                      {(["type", "partner", "env", "modules", "raas"] as const).map((c) => (
                        <th
                          key={c}
                          className={`whitespace-nowrap border-b border-border px-3 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground ${
                            c === "raas" ? "text-right" : "text-left"
                          }`}
                        >
                          {t(`physical.fleet.cols.${c}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {FLEET.map((row) => (
                      <tr key={row.key} className="border-b border-border/60 last:border-0">
                        <td className="px-3 py-2.5 align-top text-muted-foreground">
                          {t(`physical.fleet.rows.${row.key}.type`)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2.5 align-top font-semibold">
                          {row.partner}{" "}
                          <span className="text-cyan-glow" aria-hidden="true">
                            {"★".repeat(row.tier)}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 align-top text-muted-foreground">
                          {t(`physical.fleet.rows.${row.key}.env`)}
                        </td>
                        <td className="px-3 py-2.5 align-top font-mono text-[12px] text-muted-foreground">
                          {t(`physical.fleet.rows.${row.key}.modules`)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2.5 text-right align-top tabular-nums text-muted-foreground">
                          {t(`physical.fleet.rows.${row.key}.raas`)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="panel h-full rounded-xl p-6" style={tint("cyan", 8)}>
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("physical.ledger.caption")}
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-[13.5px]">
                    <thead>
                      <tr>
                        <th className="border-b border-border px-3 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                          {t("physical.ledger.cols.fleet")}
                        </th>
                        <th className="border-b border-border px-3 py-2.5 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                          {t("physical.ledger.cols.capex")}
                        </th>
                        <th className="border-b border-border px-3 py-2.5 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                          {t("physical.ledger.cols.subscription")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {LEDGER.map((row) => (
                        <tr key={row.key} className="border-b border-border/60">
                          <td className="px-3 py-2.5 text-muted-foreground">
                            {t(`physical.ledger.rows.${row.key}`)}
                          </td>
                          <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                            {row.capex}
                          </td>
                          <td className="px-3 py-2.5 text-right font-semibold tabular-nums text-cyan-glow">
                            {row.sub}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-border">
                        <td className="px-3 py-2.5 font-bold">{t("physical.ledger.rows.total")}</td>
                        <td className="px-3 py-2.5 text-right font-bold tabular-nums">
                          {LEDGER_TOTAL.capex}
                        </td>
                        <td className="px-3 py-2.5 text-right font-bold tabular-nums text-cyan-glow">
                          {LEDGER_TOTAL.sub}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="panel flex h-full flex-col justify-center gap-5 rounded-xl p-7">
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-cyan-glow md:text-[2.6rem]">
                    {t("physical.coverage.headline")}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("physical.coverage.body")}
                  </p>
                </div>
                <div className="border-t border-border pt-4 text-[13.5px] leading-relaxed text-muted-foreground">
                  {t("physical.coverage.footnote")}
                  {sp}
                  <b className="font-semibold text-cyan-glow">
                    {t("physical.coverage.footnoteAccent")}
                  </b>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Divider />

        {/* ========================== 08 FLYWHEEL ========================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 07" label={t("sections.flywheel")} accent="purple" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {heading(t("flywheel.titleMain"), t("flywheel.titleAccent"))}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("flywheel.lede")}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {LOOP.map((node, i) => (
              <Reveal key={node.key}>
                <div className="panel relative h-full rounded-xl px-4 py-5">
                  <b className={`mb-1.5 block text-[14.5px] font-bold ${ACCENT[node.accent].text}`}>
                    {node.name}
                  </b>
                  <p className="text-[11.8px] leading-relaxed text-muted-foreground">
                    {t(`flywheel.nodes.${node.key}`)}
                  </p>
                  <span
                    aria-hidden="true"
                    className={`absolute right-3 top-3 font-bold ${
                      i === LOOP.length - 1 ? "text-purple-glow" : "hidden"
                    }`}
                  >
                    ↺
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="panel rounded-xl px-7 py-6 text-sm leading-relaxed text-muted-foreground" style={tint("purple", 9)}>
              <b className="font-semibold text-purple-glow">{t("flywheel.note.label")}</b>
              {sp}
              {t("flywheel.note.body")}
            </div>
          </Reveal>
        </Section>

        <Divider />

        {/* ======================== 09 CASE STUDIES ======================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 08" label={t("sections.cases")} accent="cyan" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("cases.title")}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">{t("cases.lede")}</p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {CASES.map((key, i) => (
              <Reveal key={key}>
                <div className="panel h-full rounded-xl p-6">
                  <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("cases.label")} {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2.5 text-[17px] font-bold">{t(`cases.items.${key}.title`)}</h3>
                  <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                    {t(`cases.items.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <Reveal key={m.key}>
                <div className="panel h-full rounded-xl p-6 text-center">
                  <div className={`text-3xl font-extrabold tabular-nums ${ACCENT[m.accent].text}`}>
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{t(`cases.metrics.${m.key}`)}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("cases.note")}</p>
        </Section>

        <Divider />

        {/* ======================= 10 IMPLEMENTATION ======================= */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 09" label={t("sections.implementation")} accent="cyan" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("implementation.title")}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("implementation.lede")}
            </p>
          </Reveal>

          <div className="relative mx-auto max-w-[920px]">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[21px] top-2 w-0.5"
              style={{
                background:
                  "linear-gradient(180deg, var(--cyan-glow), color-mix(in oklch, var(--cyan-glow) 50%, var(--purple-glow)), var(--purple-glow))",
              }}
            />
            {PHASES.map((key, i) => (
              <Reveal key={key}>
                <div className="relative pb-8 pl-[66px] last:pb-0">
                  <div
                    className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border font-mono text-[15px] font-bold text-cyan-glow"
                    style={{
                      ...softFill("cyan", 12),
                      borderColor: "color-mix(in oklch, var(--cyan-glow) 55%, transparent)",
                    }}
                  >
                    {i}
                  </div>
                  <h4 className="flex flex-wrap items-baseline gap-3 text-[17.5px] font-bold">
                    {t(`implementation.phases.${key}.name`)}
                    <span className="font-mono text-[11.5px] font-medium tracking-wider text-chart-5">
                      {t(`implementation.phases.${key}.duration`)}
                    </span>
                  </h4>
                  <p className="mt-1.5 max-w-[680px] text-[13.8px] leading-relaxed text-muted-foreground">
                    {t(`implementation.phases.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ========================= 11 CUSTOMERS ========================== */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 11" label={t("sections.customers")} accent="blue" />
            <h2 className="mb-11 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {t("customers.title")}
            </h2>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="panel h-full rounded-xl p-6">
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("customers.bestFit.caption")}
                </span>
                <ul>
                  {BEST_FIT.map((key) => (
                    <li
                      key={key}
                      className="border-b border-border py-2.5 text-sm leading-relaxed text-muted-foreground last:border-0"
                    >
                      <b className="font-semibold text-foreground">
                        {t(`customers.bestFit.items.${key}.name`)}
                      </b>
                      {" — "}
                      {t(`customers.bestFit.items.${key}.desc`)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="panel h-full rounded-xl p-6">
                <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("customers.vertical.caption")}
                </span>
                <p className="mb-4 text-[13.5px] leading-relaxed text-muted-foreground">
                  {t("customers.vertical.body")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {CERTS.map((cert) => (
                    <span
                      key={cert.key}
                      className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold ${ACCENT[cert.accent].border} ${ACCENT[cert.accent].text}`}
                      style={softFill(cert.accent, 8)}
                    >
                      {cert.name} → {t(`customers.vertical.certs.${cert.key}`)}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Divider />

        {/* ======================== 12 COMPETITIVE ========================= */}
        <Section>
          <Reveal>
            <Eyebrow sys="SYS 12" label={t("sections.competitive")} accent="blue" />
            <h2 className="mb-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              {heading(t("competitive.titleMain"), t("competitive.titleAccent"))}
            </h2>
            <p className="mb-11 max-w-3xl leading-relaxed text-muted-foreground">
              {t("competitive.lede")}
            </p>
          </Reveal>

          <Reveal>
            <div className="panel rounded-xl p-6">
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t("competitive.table.caption")}
              </span>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[13.5px]">
                  <thead>
                    <tr>
                      <th className="border-b border-border px-3 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                        {t("competitive.table.capability")}
                      </th>
                      {RIVALS.map((r, i) => (
                        <th
                          key={r}
                          className={`border-b border-border px-3 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.14em] ${
                            i === 0 ? "text-cyan-glow" : "text-muted-foreground"
                          }`}
                        >
                          {r}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MATRIX.map((row) => (
                      <tr key={row.key} className="border-b border-border/60 last:border-0">
                        <td className="px-3 py-2.5 align-top text-muted-foreground">
                          {t(`competitive.table.rows.${row.key}`)}
                        </td>
                        {row.cells.map((cell, i) => (
                          <td
                            key={`${row.key}-${i}`}
                            className={`px-3 py-2.5 align-top ${
                              i === 0
                                ? "font-semibold text-cyan-glow"
                                : WEAK.has(cell)
                                  ? "text-muted-foreground/70"
                                  : "text-foreground/80"
                            }`}
                          >
                            {t(`competitive.verdicts.${cell}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[11.5px] italic text-muted-foreground">
                {t("competitive.table.note")}
              </p>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {(
              [
                { key: "incumbents", accent: "blue" },
                { key: "dataPlatforms", accent: "purple" },
                { key: "pointTools", accent: "cyan" },
              ] as { key: string; accent: Accent }[]
            ).map((card) => (
              <Reveal key={card.key}>
                <div className="panel h-full rounded-xl p-6" style={tint(card.accent, 8)}>
                  <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t(`competitive.cards.${card.key}.label`)}
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                    {t(`competitive.cards.${card.key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ========================== 13 CLOSING =========================== */}
        <Section className="pb-14 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow sys="SYS 16" label={t("sections.vision")} accent="cyan" />
            </div>
            <p className="mx-auto mb-6 max-w-[880px] text-2xl font-extrabold leading-snug md:text-[2.1rem]">
              {t("closing.vision.lead")}
              {sp}
              <span className="text-cyan-glow">{t("closing.vision.accent")}</span>
              {sp}
              {t("closing.vision.tail")}
            </p>
            <p className="mx-auto mb-11 max-w-[720px] leading-relaxed text-muted-foreground">
              {t("closing.fine")}
            </p>
            <a
              href="mailto:info@item.com"
              className="inline-block rounded-xl bg-primary px-9 py-3.5 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("closing.cta")}
            </a>
          </Reveal>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-border px-6 py-7 text-center text-xs text-muted-foreground">
        {t("footer")}
      </footer>
    </div>
  );
}
