import { useEffect, useRef, useState, type ReactNode } from "react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* -------------------------------------------------------------------------
   ITEM AI — Investor Briefing.

   Ported from a dark-only standalone HTML deck. Everything visual is rebuilt
   from the repo's tokens so both themes are real; every user-visible string
   comes from `pages.productV4`. Numbers, metrics, product names, vendor names
   and layer ids stay here as structure — they are identical in every locale.
   ------------------------------------------------------------------------- */

type Accent = "cyan" | "purple" | "blue" | "green" | "orange" | "teal" | "gold" | "red" | "neutral";

interface AccentStyle {
  text: string;
  dot: string;
  chip: string;
  tint: string;
  hover: string;
  edge: string;
  bar: string;
}

const A: Record<Accent, AccentStyle> = {
  cyan: {
    text: "text-cyan-glow",
    dot: "bg-cyan-glow",
    chip: "border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow",
    tint: "bg-gradient-to-br from-cyan-glow/12 via-card to-card",
    hover: "hover:border-cyan-glow/60",
    edge: "border-l-cyan-glow",
    bar: "bg-gradient-to-b from-cyan-glow/85 to-cyan-glow/15",
  },
  purple: {
    text: "text-purple-glow",
    dot: "bg-purple-glow",
    chip: "border-purple-glow/40 bg-purple-glow/10 text-purple-glow",
    tint: "bg-gradient-to-br from-purple-glow/12 via-card to-card",
    hover: "hover:border-purple-glow/60",
    edge: "border-l-purple-glow",
    bar: "bg-gradient-to-b from-purple-glow/85 to-purple-glow/15",
  },
  blue: {
    text: "text-sky-700 dark:text-sky-300",
    dot: "bg-sky-600 dark:bg-sky-400",
    chip: "border-sky-600/35 bg-sky-500/10 text-sky-700 dark:border-sky-400/35 dark:text-sky-300",
    tint: "bg-gradient-to-br from-sky-500/12 via-card to-card",
    hover: "hover:border-sky-600/60 dark:hover:border-sky-400/60",
    edge: "border-l-sky-600 dark:border-l-sky-400",
    bar: "bg-gradient-to-b from-sky-600/85 to-sky-600/15 dark:from-sky-400/85 dark:to-sky-400/15",
  },
  green: {
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-600 dark:bg-emerald-400",
    chip: "border-emerald-600/35 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/35 dark:text-emerald-300",
    tint: "bg-gradient-to-br from-emerald-500/12 via-card to-card",
    hover: "hover:border-emerald-600/60 dark:hover:border-emerald-400/60",
    edge: "border-l-emerald-600 dark:border-l-emerald-400",
    bar: "bg-gradient-to-b from-emerald-600/85 to-emerald-600/15 dark:from-emerald-400/85 dark:to-emerald-400/15",
  },
  orange: {
    text: "text-orange-700 dark:text-orange-300",
    dot: "bg-orange-600 dark:bg-orange-400",
    chip: "border-orange-600/35 bg-orange-500/10 text-orange-700 dark:border-orange-400/35 dark:text-orange-300",
    tint: "bg-gradient-to-br from-orange-500/12 via-card to-card",
    hover: "hover:border-orange-600/60 dark:hover:border-orange-400/60",
    edge: "border-l-orange-600 dark:border-l-orange-400",
    bar: "bg-gradient-to-b from-orange-600/85 to-orange-600/15 dark:from-orange-400/85 dark:to-orange-400/15",
  },
  teal: {
    text: "text-teal-700 dark:text-teal-300",
    dot: "bg-teal-600 dark:bg-teal-400",
    chip: "border-teal-600/35 bg-teal-500/10 text-teal-700 dark:border-teal-400/35 dark:text-teal-300",
    tint: "bg-gradient-to-br from-teal-500/12 via-card to-card",
    hover: "hover:border-teal-600/60 dark:hover:border-teal-400/60",
    edge: "border-l-teal-600 dark:border-l-teal-400",
    bar: "bg-gradient-to-b from-teal-600/85 to-teal-600/15 dark:from-teal-400/85 dark:to-teal-400/15",
  },
  gold: {
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-600 dark:bg-amber-400",
    chip: "border-amber-600/35 bg-amber-500/10 text-amber-700 dark:border-amber-400/35 dark:text-amber-300",
    tint: "bg-gradient-to-br from-amber-500/12 via-card to-card",
    hover: "hover:border-amber-600/60 dark:hover:border-amber-400/60",
    edge: "border-l-amber-600 dark:border-l-amber-400",
    bar: "bg-gradient-to-b from-amber-600/85 to-amber-600/15 dark:from-amber-400/85 dark:to-amber-400/15",
  },
  red: {
    text: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-600 dark:bg-rose-400",
    chip: "border-rose-600/35 bg-rose-500/10 text-rose-700 dark:border-rose-400/35 dark:text-rose-300",
    tint: "bg-gradient-to-br from-rose-500/12 via-card to-card",
    hover: "hover:border-rose-600/60 dark:hover:border-rose-400/60",
    edge: "border-l-rose-600 dark:border-l-rose-400",
    bar: "bg-gradient-to-b from-rose-600/85 to-rose-600/15 dark:from-rose-400/85 dark:to-rose-400/15",
  },
  neutral: {
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
    chip: "border-border bg-surface-veil text-muted-foreground",
    tint: "bg-card",
    hover: "hover:border-foreground/30",
    edge: "border-l-muted-foreground",
    bar: "bg-gradient-to-b from-muted-foreground/70 to-muted-foreground/10",
  },
};

const CARD = "rounded-xl border border-border bg-card shadow-sm dark:shadow-none";
const KICKER = "block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground";
const TH = "px-3 py-2.5 text-left font-mono text-[10.5px] font-normal uppercase tracking-[0.14em] text-muted-foreground border-b border-border";
const TD = "px-3 py-2.5 align-top border-b border-border/60 text-foreground/90";

/* ---------- scroll reveal ---------- */

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
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
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
      className={`${className} transition duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- small primitives ---------- */

function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Divider() {
  return <div className="section-divider mx-auto max-w-6xl" aria-hidden="true" />;
}

function Eyebrow({ accent, sys, label }: { accent: Accent; sys: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${A[accent].dot}`} aria-hidden="true" />
      <span className={A[accent].text}>{sys}</span>
      <span>{label}</span>
    </div>
  );
}

function Title({
  pre,
  accent,
  post,
  accentClass,
}: {
  pre?: string;
  accent?: string;
  post?: string;
  accentClass?: string;
}) {
  return (
    <h2 className="mb-4 font-display text-[clamp(1.75rem,3.4vw,2.6rem)] font-extrabold leading-[1.15] tracking-tight text-foreground">
      {pre}
      {accent ? <span className={accentClass ?? "text-cyan-glow"}>{accent}</span> : null}
      {post}
    </h2>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return <p className="mb-10 max-w-3xl text-[16.5px] leading-relaxed text-muted-foreground">{children}</p>;
}

function Chip({ accent = "neutral", className = "", children }: { accent?: Accent; className?: string; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold ${A[accent].chip} ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------- structural data (identical in every locale) ---------- */

const NAV = [
  { key: "story", href: "#pv4-story" },
  { key: "platform", href: "#pv4-platform" },
  { key: "products", href: "#pv4-products" },
  { key: "commercial", href: "#pv4-commercial" },
  { key: "roadmap", href: "#pv4-roadmap" },
  { key: "valuation", href: "#pv4-valuation" },
] as const;

const HERO_STATS = [
  { key: "arr", v: "$20M", sup: "", accent: true },
  { key: "tam", v: "$735B", sup: "+", accent: false },
  { key: "suite", v: "22", sup: "", accent: false },
  { key: "models", v: "5", sup: "+1", accent: false },
] as const;

const HERO_CHIPS: { name: string; accent: Accent }[] = [
  { name: "Ontology", accent: "purple" },
  { name: "Foundry", accent: "green" },
  { name: "AI OS", accent: "cyan" },
  { name: "AIP", accent: "orange" },
  { name: "Harness", accent: "teal" },
];

const TAXES: { key: string; accent: Accent }[] = [
  { key: "compliance", accent: "red" },
  { key: "data", accent: "gold" },
  { key: "ops", accent: "blue" },
];

const STACK_LAYERS: { key: string; lid: string; accent: Accent }[] = [
  { key: "app", lid: "L7 · Applications", accent: "blue" },
  { key: "ai", lid: "L6 · AI Layer", accent: "cyan" },
  { key: "foundry", lid: "L5 · Foundry", accent: "green" },
  { key: "aip", lid: "L4 · AIP", accent: "orange" },
  { key: "ontology", lid: "L3 · Ontology", accent: "purple" },
  { key: "harness", lid: "L2 · Harness", accent: "teal" },
  { key: "infra", lid: "L1 · Infrastructure", accent: "neutral" },
];

interface SystemDef {
  key: string;
  num: string;
  name: string;
  accent: Accent;
  wide?: boolean;
  prods?: { k: string; n: string }[];
  runtime?: string;
  modchips?: string[];
  envs?: string;
}

const SYSTEMS: SystemDef[] = [
  {
    key: "ontology",
    num: "01",
    name: "Ontology",
    accent: "purple",
    prods: [
      { k: "studio", n: "ITEM.Ontology Studio" },
      { k: "executor", n: "ITEM.Ontology Executor" },
    ],
  },
  {
    key: "foundry",
    num: "02",
    name: "Foundry",
    accent: "green",
    prods: [
      { k: "bi", n: "ITEM.BI" },
      { k: "di", n: "ITEM.DI" },
    ],
  },
  {
    key: "aios",
    num: "03",
    name: "AI OS",
    accent: "cyan",
    runtime: "Agent Runtime",
    modchips: [
      "ITEM.Predict",
      "ITEM.WMS",
      "ITEM.WES",
      "ITEM.OMS",
      "ITEM.APS",
      "ITEM.TMS",
      "ITEM.YMS",
      "ITEM.Dock",
    ],
  },
  {
    key: "aip",
    num: "04",
    name: "AIP",
    accent: "orange",
    prods: [
      { k: "gpt", n: "ITEM.GPT" },
      { k: "flow", n: "ITEM.Flow" },
      { k: "vision", n: "ITEM.Vision" },
    ],
  },
  {
    key: "harness",
    num: "05",
    name: "Harness",
    accent: "teal",
    wide: true,
    prods: [
      { k: "ide", n: "Agent IDE" },
      { k: "iam", n: "IAM" },
      { k: "mtdp", n: "Multi-Tenant Deployment Platform" },
    ],
    envs: "Cloud · On-Prem · Edge · Air-gapped",
  },
];

const CATALOG: { key: string; sys: string; accent: Accent; items: { k: string; n: string; comp: string; isNew?: boolean }[] }[] = [
  {
    key: "ontology",
    sys: "Ontology",
    accent: "purple",
    items: [
      { k: "ontologyStudio", n: "ITEM.Ontology Studio", comp: "Palantir Ontology" },
      { k: "ontologyExecutor", n: "ITEM.Ontology Executor", comp: "Palantir Ontology · Neo4j" },
    ],
  },
  {
    key: "foundry",
    sys: "Foundry",
    accent: "green",
    items: [
      { k: "bi", n: "ITEM.BI", comp: "Databricks · Looker" },
      { k: "di", n: "ITEM.DI", comp: "Fivetran · Informatica" },
    ],
  },
  {
    key: "aios",
    sys: "AI OS",
    accent: "cyan",
    items: [
      { k: "predict", n: "ITEM.Predict", comp: "o9 · Kinaxis" },
      { k: "wms", n: "ITEM.WMS", comp: "Manhattan · Blue Yonder" },
      { k: "wes", n: "ITEM.WES", comp: "Dematic iQ · Körber" },
      { k: "oms", n: "ITEM.OMS", comp: "Manhattan Active · IBM Sterling" },
      { k: "aps", n: "ITEM.APS", comp: "Blue Yonder · SAP IBP" },
      { k: "tms", n: "ITEM.TMS", comp: "Oracle OTM · McLeod" },
      { k: "yms", n: "ITEM.YMS", comp: "FourKites Yard" },
      { k: "dock", n: "ITEM.Dock", comp: "PortPro · Trinium" },
    ],
  },
  {
    key: "aip",
    sys: "AIP",
    accent: "orange",
    items: [
      { k: "gpt", n: "ITEM.GPT", comp: "Palantir AIP Copilot" },
      { k: "flow", n: "ITEM.Flow", comp: "MuleSoft · Temporal" },
      { k: "vision", n: "ITEM.Vision", comp: "Samsara · Envision" },
    ],
  },
  {
    key: "apps",
    sys: "AI Applications",
    accent: "blue",
    items: [
      { k: "claw", n: "ITEM.Claw", comp: "UiPath · LangGraph" },
      { k: "sense", n: "ITEM.Sense", comp: "Project44 · Palantir" },
      { k: "opsAi", n: "ITEM.Ops AI", comp: "C3.ai" },
      { k: "audit", n: "ITEM.Audit", comp: "PRGX · Cass" },
      { k: "voice", n: "ITEM.Voice", comp: "Honeywell Vocollect" },
      { k: "support", n: "ITEM.Support", comp: "Sierra AI · Zendesk · ServiceNow", isNew: true },
      { k: "grow", n: "ITEM.Grow", comp: "Salesforce Agentforce · 11x.ai", isNew: true },
    ],
  },
];

const FLEET: { k: string; partner: string; stars: number; modules?: string }[] = [
  { k: "hangcha", partner: "Hangcha", stars: 3, modules: "WCS · WES · ITEM.Claw" },
  { k: "libiao", partner: "Libiao", stars: 3, modules: "WES · OMS · ITEM.Claw" },
  { k: "xyz", partner: "XYZ Robotics", stars: 3, modules: "WES · OMS · ITEM.Vision" },
  { k: "unitree", partner: "Unitree", stars: 3 },
  { k: "pudu", partner: "Pudu", stars: 2, modules: "FMS · WES · ITEM.Voice" },
  { k: "deep", partner: "Deep Robotics", stars: 2, modules: "YMS · ITEM.Vision · ITEM.Sense" },
  { k: "zs", partner: "ZS Robotics", stars: 2, modules: "WES · WCS · ITEM.Claw" },
  { k: "galaxis", partner: "Galaxis", stars: 2 },
  { k: "lanxin", partner: "Lanxin", stars: 2 },
  { k: "slamtec", partner: "Slamtec", stars: 2 },
  { k: "mita", partner: "Mita Robot", stars: 2, modules: "WCS · WES · PLC" },
];

const LEDGER = [
  { k: "hangcha", capex: "$2–4M", arr: "$360–720K" },
  { k: "libiao", capex: "$0.5–1M", arr: "$240–480K" },
  { k: "xyz", capex: "$1–2M", arr: "$300–600K" },
  { k: "unitree", capex: "$405–900K", arr: "$540K–1.08M" },
  { k: "mixed", capex: "$400–800K", arr: "$216–420K" },
  { k: "infra", capex: "$100–300K", arr: "$180–300K" },
] as const;

const FLYWHEEL: { k: string; name: string; accent: Accent }[] = [
  { k: "grow", name: "ITEM.Grow", accent: "orange" },
  { k: "gpt", name: "ITEM.GPT", accent: "cyan" },
  { k: "sce", name: "SCE Suite", accent: "blue" },
  { k: "sense", name: "ITEM.Sense", accent: "green" },
  { k: "support", name: "ITEM.Support", accent: "teal" },
  { k: "audit", name: "ITEM.Audit", accent: "gold" },
];

const CASE_METRICS: { k: string; v: string; accent: Accent }[] = [
  { k: "cost", v: "20–35%", accent: "green" },
  { k: "otp", v: "15–40%", accent: "cyan" },
  { k: "exception", v: "95%+", accent: "blue" },
  { k: "turns", v: "35%", accent: "purple" },
];

const PHASES = [
  { k: "discovery", n: "0" },
  { k: "ontology", n: "1" },
  { k: "pilot", n: "2" },
  { k: "scale", n: "3" },
  { k: "autonomous", n: "4" },
] as const;

const TIERS: { k: string; kicker: string; price: string; feature?: boolean; accent: Accent }[] = [
  { k: "starter", kicker: "Tier · Starter Pilot", price: "$100–250K", accent: "neutral" },
  { k: "enterprise", kicker: "Tier · Enterprise Rollout", price: "$300K–1M", feature: true, accent: "green" },
  { k: "global", kicker: "Tier · Global AI OS", price: "$1M+", accent: "neutral" },
];

const REVENUE_MODELS = [
  { k: "saas", name: "SaaS", comps: "Manhattan · Blue Yonder", multiple: "15–40× ARR", warm: false },
  { k: "paas", name: "PaaS", comps: "Palantir · Databricks", multiple: "30–80× ARR", warm: true },
  { k: "iaas", name: "IaaS", comps: "AWS · CoreWeave", multiple: "8–20× ARR", warm: false },
  { k: "raas", name: "RaaS", comps: "Locus · Berkshire Grey", multiple: "10–25× ARR", warm: false },
  { k: "faas", name: "FaaS", comps: "AWS Lambda · Twilio", multiple: "15–30× ARR", warm: false },
  { k: "marketplace", name: "Marketplace", comps: "Uber · Flexport", multiple: "20–60× GMV", warm: true },
] as const;

const BEST_FIT = ["manufacturers", "threePL", "forwarders", "retail", "ports"] as const;

const CERT_CHIPS: { k: string; cert: string; accent: Accent }[] = [
  { k: "iso27001", cert: "ISO 27001", accent: "blue" },
  { k: "iso42001", cert: "ISO 42001", accent: "purple" },
  { k: "hitrust", cert: "HITRUST AI", accent: "green" },
  { k: "fedramp", cert: "FedRAMP", accent: "gold" },
  { k: "ctpat", cert: "C-TPAT / AEO", accent: "cyan" },
  { k: "cmmc", cert: "CMMC L2", accent: "teal" },
  { k: "tisax", cert: "TISAX / ISO 9001", accent: "orange" },
  { k: "other", cert: "HIPAA / PCI / ISO 14001", accent: "neutral" },
];

const COMPETITORS = ["item", "palantir", "databricks", "manhattan", "sap"] as const;
const COMPETITOR_LABELS: Record<(typeof COMPETITORS)[number], string> = {
  item: "ITEM AI",
  palantir: "Palantir",
  databricks: "Databricks",
  manhattan: "Manhattan / Blue Yonder",
  sap: "SAP / Oracle / Microsoft",
};

type Tone = "pos" | "neg" | "mid";
const COMPARE_ROWS: { k: string; tones: Record<(typeof COMPETITORS)[number], Tone> }[] = [
  { k: "ontology", tones: { item: "pos", palantir: "mid", databricks: "neg", manhattan: "neg", sap: "neg" } },
  { k: "apps", tones: { item: "pos", palantir: "neg", databricks: "neg", manhattan: "mid", sap: "mid" } },
  { k: "agents", tones: { item: "pos", palantir: "mid", databricks: "mid", manhattan: "neg", sap: "mid" } },
  { k: "robots", tones: { item: "pos", palantir: "neg", databricks: "neg", manhattan: "neg", sap: "neg" } },
  { k: "deploy", tones: { item: "pos", palantir: "mid", databricks: "neg", manhattan: "neg", sap: "mid" } },
  { k: "loop", tones: { item: "pos", palantir: "neg", databricks: "neg", manhattan: "neg", sap: "mid" } },
  { k: "focus", tones: { item: "pos", palantir: "neg", databricks: "neg", manhattan: "mid", sap: "neg" } },
];
const TONE_CLASS: Record<Tone, string> = {
  pos: "font-semibold text-emerald-700 dark:text-emerald-300",
  mid: "text-foreground/90",
  neg: "text-muted-foreground",
};

const COMPARE_CARDS = ["incumbents", "dataPlatforms", "pointTools"] as const;

const KPIS_12: { k: string; v: string; accent?: Accent; unit?: boolean }[] = [
  { k: "arr", v: "$20M", accent: "cyan" },
  { k: "soc2", v: "SOC 2 ✓" },
  { k: "weeks", v: "8–12", unit: true },
  { k: "nrr", v: "130%+" },
];

const CHART_BARS: { k: string; v: string; h: string; accent: Accent }[] = [
  { k: "land", v: "$20M", h: "24%", accent: "cyan" },
  { k: "ntm", v: "$45–60M", h: "58%", accent: "blue" },
  { k: "raas", v: "+$45–90M RaaS", h: "92%", accent: "purple" },
];

const RUNGS: { k: string; basis: string; val: string; accent: Accent }[] = [
  { k: "floor", basis: "PE / M&A · 25–35× ARR", val: "$500–700M", accent: "gold" },
  { k: "base", basis: "Series B/C · 70–90× ARR", val: "$1.4–1.8B", accent: "green" },
  { k: "bull", basis: "3+ bidders · 110–150× ARR", val: "$2.2–3.0B", accent: "cyan" },
  { k: "transformative", basis: "Pre-IPO · 90–120× NTM ARR", val: "$4.5–7.2B", accent: "purple" },
];

const ANCHORS = [
  { k: "replacement", v: "$700M–1.2B" },
  { k: "certification", v: "$300–800M" },
  { k: "category", v: "$3.7B" },
] as const;

/* ---------- page furniture ---------- */

function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -right-[15vw] -top-[22vw] h-[55vw] w-[55vw] rounded-full bg-cyan-glow/10 blur-[120px]" />
      <div className="absolute -bottom-[20vw] -left-[12vw] h-[45vw] w-[45vw] rounded-full bg-purple-glow/10 blur-[120px]" />
    </div>
  );
}

function SectionNav() {
  const t = useT("pages.productV4");
  return (
    <nav className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 lg:block">
      <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/70 px-2 py-1 backdrop-blur-md">
        {NAV.map((n) => (
          <a
            key={n.key}
            href={n.href}
            className="rounded-full px-3 py-1.5 text-[12.5px] text-muted-foreground transition-colors hover:bg-surface-veil hover:text-foreground"
          >
            {t(`nav.${n.key}`)}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ---------- 01 · hero ---------- */

function Hero() {
  const t = useT("pages.productV4");
  return (
    <section
      id="pv4-story"
      className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 md:pt-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-veil px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden="true" />
            {t("hero.badge")}
          </span>

          <h1 className="mb-6 max-w-4xl font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
            {t("hero.titlePre")}
            <span className="text-cyan-glow">{t("hero.titleAccent")}</span>
            {t("hero.titlePost")}
          </h1>

          <p className="mb-12 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">{t("hero.sub")}</p>
        </Reveal>

        <Reveal className="grid max-w-5xl grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.key} className={`${CARD} px-5 py-5`}>
              <div
                className={`font-display text-[28px] font-extrabold tracking-tight tabular-nums ${
                  s.accent ? "text-cyan-glow" : "text-foreground"
                }`}
              >
                {s.v}
                {s.sup ? <span className="text-base font-semibold text-muted-foreground">{s.sup}</span> : null}
              </div>
              <div className="mt-1 text-[12.5px] text-muted-foreground">{t(`hero.stats.${s.key}`)}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-11 flex flex-wrap gap-2.5">
          {HERO_CHIPS.map((c) => (
            <Chip key={c.name} accent={c.accent} className="font-mono text-[11.5px] tracking-wider">
              {c.name}
            </Chip>
          ))}
          <Chip>{t("hero.platformLine")}</Chip>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 02 · problem ---------- */

function Problem() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="red" sys="SYS 01" label={t("problem.eyebrow")} />
        <Title pre={t("problem.title")} />
        <Lede>{t("problem.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {TAXES.map((tax) => (
          <div key={tax.key} className={`${CARD} ${A[tax.accent].tint} p-6`}>
            <span className={KICKER}>{t(`problem.taxes.${tax.key}.kicker`)}</span>
            <h3
              className={`mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight ${A[tax.accent].text}`}
            >
              {t(`problem.taxes.${tax.key}.name`)}
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
              {t(`problem.taxes.${tax.key}.body`)}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-4">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3 rounded-xl border border-dashed border-border px-6 py-5">
          <span className="font-display text-[30px] font-extrabold whitespace-nowrap text-amber-700 dark:text-amber-300">
            $8–35M+
          </span>
          <p className="min-w-[16rem] flex-1 text-[14.5px] leading-relaxed text-muted-foreground">{t("problem.frag")}</p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 03 · category ---------- */

function Category() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="blue" sys="SYS 02" label={t("category.eyebrow")} />
        <Title pre={t("category.titlePre")} accent={t("category.titleAccent")} post={t("category.titlePost")} />
        <Lede>{t("category.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <div className={`${CARD} ${A.red.tint} p-7`}>
          <h3 className="mb-4 font-display text-lg font-bold text-foreground">{t("category.old.heading")}</h3>
          <ul className="space-y-1">
            {t.list("category.old.items").map((item) => (
              <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                <span className="absolute left-0 font-bold text-rose-600 dark:text-rose-400" aria-hidden="true">
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center text-2xl text-cyan-glow" aria-hidden="true">
          <span className="rotate-90 lg:rotate-0">→</span>
        </div>

        <div className={`${CARD} ${A.blue.tint} p-7`}>
          <h3 className="mb-4 font-display text-lg font-bold text-foreground">{t("category.next.heading")}</h3>
          <ul className="space-y-1">
            {t.list("category.next.items").map((item) => (
              <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                <span className="absolute left-0 font-bold text-emerald-600 dark:text-emerald-400" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className={`${CARD} ${A.blue.tint} px-7 py-8 text-center`}>
          <p className="text-[clamp(1.05rem,2.1vw,1.35rem)] font-bold leading-snug text-foreground">
            {t("category.thesisPre")}
            <span className="text-cyan-glow">{t("category.thesisAccent")}</span>
            {t("category.thesisPost")}
            <br />
            <span className="font-semibold text-muted-foreground">{t("category.thesisLine2")}</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 04 · the stack ---------- */

function Stack() {
  const t = useT("pages.productV4");
  return (
    <Section id="pv4-platform">
      <Reveal>
        <Eyebrow accent="cyan" sys="SYS 03" label={t("stack.eyebrow")} />
        <Title pre={t("stack.title")} />
        <Lede>{t("stack.lede")}</Lede>
      </Reveal>

      <Reveal className="mx-auto flex max-w-4xl flex-col gap-2.5">
        {STACK_LAYERS.map((l) => (
          <div
            key={l.key}
            className={`${CARD} ${A[l.accent].hover} grid grid-cols-1 items-center gap-x-5 gap-y-2 px-6 py-4 transition-transform duration-200 hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0 sm:grid-cols-[7.5rem_1fr_auto]`}
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">{l.lid}</span>
            <div>
              <div className="text-[15px] font-bold text-foreground">{t(`stack.layers.${l.key}.name`)}</div>
              <div className="mt-0.5 text-[12.5px] text-muted-foreground">{t(`stack.layers.${l.key}.sub`)}</div>
            </div>
            <span
              className={`justify-self-start rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide sm:justify-self-end ${A[l.accent].chip}`}
            >
              {t(`stack.layers.${l.key}.tag`)}
            </span>
          </div>
        ))}
      </Reveal>

      <Reveal className="mx-auto mt-5 max-w-4xl">
        <p className="text-center text-[13.5px] text-muted-foreground">{t("stack.note")}</p>
      </Reveal>
    </Section>
  );
}

/* ---------- 05 · five core systems ---------- */

function Systems() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="purple" sys="SYS 04" label={t("systems.eyebrow")} />
        <Title pre={t("systems.title")} />
        <Lede>{t("systems.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {SYSTEMS.map((s) => (
          <div
            key={s.key}
            className={`${CARD} ${A[s.accent].tint} flex flex-col gap-4 p-7 ${s.wide ? "lg:col-span-2" : ""}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`font-mono text-[11.5px] uppercase tracking-[0.18em] ${A[s.accent].text}`}>
                {s.num} · {t(`systems.items.${s.key}.role`)}
              </span>
              <Chip accent={s.accent}>{t(`systems.items.${s.key}.badge`)}</Chip>
            </div>

            <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground">{s.name}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              <b className="font-semibold text-foreground">{t("systems.designLabel")}</b>{" "}
              {t(`systems.items.${s.key}.design`)}{" "}
              <b className="font-semibold text-foreground">{t("systems.purposeLabel")}</b>{" "}
              {t(`systems.items.${s.key}.purpose`)}
            </p>

            {s.prods ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {s.prods.map((p) => (
                  <div key={p.k} className={`rounded-lg border border-border border-l-2 bg-surface-veil px-3 py-2 ${A[s.accent].edge}`}>
                    <b className="block text-[12.5px] font-semibold text-foreground">{p.n}</b>
                    <span className="text-[11px] text-muted-foreground">{t(`systems.items.${s.key}.prods.${p.k}`)}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {s.runtime ? (
              <div className="space-y-2">
                <div className={`rounded-lg border px-3 py-2 text-center ${A[s.accent].chip}`}>
                  <b className="text-[12.5px] font-semibold">{s.runtime}</b>
                  <span className="ml-2 text-[11px] opacity-80">{t(`systems.items.${s.key}.runtime`)}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.modchips?.map((m) => (
                    <span
                      key={m}
                      className="rounded-md border border-border bg-surface-veil px-2.5 py-1 font-mono text-[11px] text-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {s.envs ? (
              <div className="rounded-lg border border-border bg-surface-veil px-3 py-2 text-center font-mono text-[12px] text-muted-foreground">
                {s.envs}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-1.5">
              {t.list(`systems.items.${s.key}.caps`).map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-surface-veil px-2.5 py-1 text-[11.5px] text-foreground/90"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-auto border-t border-border pt-3.5 text-[12.5px] text-muted-foreground">
              <b className="font-semibold text-foreground/90">{t("systems.bizLabel")}</b>{" "}
              {t(`systems.items.${s.key}.biz`)}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

/* ---------- 06 · named product suite ---------- */

function Suite() {
  const t = useT("pages.productV4");
  let n = 0;
  return (
    <Section id="pv4-products">
      <Reveal>
        <Eyebrow accent="orange" sys="SYS 05" label={t("suite.eyebrow")} />
        <Title pre={t("suite.titlePre")} accent={t("suite.titleAccent")} post={t("suite.titlePost")} />
        <Lede>{t("suite.lede")}</Lede>
      </Reveal>

      <div className="space-y-8">
        {CATALOG.map((g) => (
          <Reveal key={g.key}>
            <div
              className={`mb-3 flex items-center gap-3 rounded-lg border border-border border-l-[3px] bg-card px-4 py-2.5 ${A[g.accent].edge}`}
            >
              <span className={`h-2 w-2 rounded-full ${A[g.accent].dot}`} aria-hidden="true" />
              <b className="text-[14.5px] font-bold tracking-wide text-foreground">{g.sys}</b>
              <span className="text-[12px] text-muted-foreground">{t(`suite.groups.${g.key}`)}</span>
              <span
                className={`ml-auto rounded border border-border px-2 py-0.5 font-mono text-[11px] ${A[g.accent].text}`}
              >
                {g.items.length}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => {
                n += 1;
                return (
                  <div key={p.k} className={`${CARD} flex min-h-[9.5rem] flex-col gap-2 px-5 py-5`}>
                    <div className="flex items-baseline justify-between gap-3">
                      <b className="text-[16px] font-bold text-foreground">
                        {p.n}
                        {p.isNew ? (
                          <span className="ml-1.5 align-super font-mono text-[9.5px] tracking-wider text-emerald-700 dark:text-emerald-300">
                            {t("suite.newLabel")}
                          </span>
                        ) : null}
                      </b>
                      <span className="shrink-0 font-mono text-[10px] tracking-wider text-muted-foreground">
                        P{String(n).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="text-[12.5px] italic text-cyan-glow">{t(`suite.items.${p.k}.tag`)}</div>
                    <p className="text-[12.8px] leading-relaxed text-muted-foreground">{t(`suite.items.${p.k}.desc`)}</p>
                    <div className="mt-auto border-t border-border pt-2 font-mono text-[10.5px] text-muted-foreground">
                      {t("suite.compsLabel")} · <b className={`font-semibold ${A[g.accent].text}`}>{p.comp}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <p className="text-[11.5px] italic text-muted-foreground">{t("suite.note")}</p>
      </Reveal>
    </Section>
  );
}

/* ---------- 07 · physical AI & RaaS ---------- */

function PhysicalAI() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="teal" sys="SYS 06" label={t("physical.eyebrow")} />
        <Title pre={t("physical.titlePre")} accent={t("physical.titleAccent")} post={t("physical.titlePost")} />
        <Lede>{t("physical.lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className={`${CARD} p-6`}>
          <span className={KICKER}>{t("physical.fleet.caption")}</span>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>{t("physical.fleet.cols.type")}</th>
                  <th className={TH}>{t("physical.fleet.cols.partner")}</th>
                  <th className={TH}>{t("physical.fleet.cols.env")}</th>
                  <th className={TH}>{t("physical.fleet.cols.modules")}</th>
                  <th className={`${TH} text-right`}>{t("physical.fleet.cols.raas")}</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((r) => (
                  <tr key={r.k}>
                    <td className={TD}>{t(`physical.fleet.rows.${r.k}.type`)}</td>
                    <td className={TD}>
                      <b className="font-semibold text-foreground">{r.partner}</b>
                      <span className="ml-1.5 text-amber-600 dark:text-amber-400" aria-hidden="true">
                        {"★".repeat(r.stars)}
                      </span>
                    </td>
                    <td className={TD}>{t(`physical.fleet.rows.${r.k}.env`)}</td>
                    <td className={TD}>{r.modules ?? t(`physical.fleet.modules.${r.k}`)}</td>
                    <td className={`${TD} text-right tabular-nums`}>{t(`physical.fleet.rows.${r.k}.raas`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className={`${CARD} ${A.teal.tint} p-6`}>
          <span className={KICKER}>{t("physical.ledger.caption")}</span>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[22rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>{t("physical.ledger.cols.fleet")}</th>
                  <th className={`${TH} text-right`}>{t("physical.ledger.cols.capex")}</th>
                  <th className={`${TH} text-right`}>{t("physical.ledger.cols.arr")}</th>
                </tr>
              </thead>
              <tbody>
                {LEDGER.map((r) => (
                  <tr key={r.k}>
                    <td className={TD}>{t(`physical.ledger.rows.${r.k}`)}</td>
                    <td className={`${TD} text-right tabular-nums`}>{r.capex}</td>
                    <td className={`${TD} text-right font-semibold tabular-nums text-emerald-700 dark:text-emerald-300`}>
                      {r.arr}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-border">
                  <td className={`${TD} border-b-0 font-bold text-foreground`}>{t("physical.ledger.rows.total")}</td>
                  <td className={`${TD} border-b-0 text-right font-bold tabular-nums text-foreground`}>$4.4–9M</td>
                  <td
                    className={`${TD} border-b-0 text-right font-bold tabular-nums text-emerald-700 dark:text-emerald-300`}
                  >
                    $1.8–3.6M
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${CARD} flex flex-col justify-center gap-5 p-6`}>
          <div>
            <div className="font-display text-[38px] font-extrabold leading-none tracking-tight text-teal-700 dark:text-teal-300">
              25 DC → $45–90M
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("physical.scale.body")}</p>
          </div>
          <p className="border-t border-border pt-4 text-[13.5px] leading-relaxed text-muted-foreground">
            {t("physical.scale.notePre")}
            <b className="font-semibold text-teal-700 dark:text-teal-300">{t("physical.scale.noteAccent")}</b>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 08 · the flywheel ---------- */

function Flywheel() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="purple" sys="SYS 07" label={t("flywheel.eyebrow")} />
        <Title pre={t("flywheel.titlePre")} accent={t("flywheel.titleAccent")} post={t("flywheel.titlePost")} />
        <Lede>{t("flywheel.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {FLYWHEEL.map((node, i) => (
          <div key={node.k} className={`${CARD} relative px-4 py-5`}>
            <b className={`mb-1.5 block text-[14.5px] font-bold ${A[node.accent].text}`}>{node.name}</b>
            <p className="text-[11.8px] leading-relaxed text-muted-foreground">{t(`flywheel.nodes.${node.k}`)}</p>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute font-bold ${
                i === FLYWHEEL.length - 1
                  ? "right-2.5 top-2.5 text-[15px] text-purple-glow"
                  : "-bottom-6 left-1/2 -translate-x-1/2 rotate-90 text-[17px] text-cyan-glow xl:-right-6 xl:bottom-auto xl:left-auto xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 xl:rotate-0"
              }`}
            >
              {i === FLYWHEEL.length - 1 ? "↺" : "→"}
            </span>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-12">
        <div className={`${CARD} ${A.purple.tint} px-7 py-6 text-[14.5px] leading-relaxed text-muted-foreground`}>
          <b className="font-semibold text-purple-glow">{t("flywheel.noteLabel")}</b> {t("flywheel.noteBody")}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 09 · case studies ---------- */

function Cases() {
  const t = useT("pages.productV4");
  const caseKeys = ["electronics", "threePL", "yard"] as const;
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="green" sys="SYS 08" label={t("cases.eyebrow")} />
        <Title pre={t("cases.title")} />
        <Lede>{t("cases.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {caseKeys.map((k, i) => (
          <div key={k} className={`${CARD} p-6`}>
            <span className={KICKER}>Case {String(i + 1).padStart(2, "0")}</span>
            <h3 className="mb-2.5 mt-3 font-display text-[17px] font-bold text-foreground">
              {t(`cases.items.${k}.title`)}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-muted-foreground">{t(`cases.items.${k}.body`)}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CASE_METRICS.map((m) => (
          <div key={m.k} className={`${CARD} p-6 text-center`}>
            <div className={`font-display text-[28px] font-extrabold tabular-nums ${A[m.accent].text}`}>{m.v}</div>
            <div className="mt-1 text-[12.5px] text-muted-foreground">{t(`cases.metrics.${m.k}`)}</div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-4">
        <p className="text-[11.5px] italic text-muted-foreground">{t("cases.note")}</p>
      </Reveal>
    </Section>
  );
}

/* ---------- 10 · implementation ---------- */

function Implementation() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="cyan" sys="SYS 09" label={t("implementation.eyebrow")} />
        <Title pre={t("implementation.title")} />
        <Lede>{t("implementation.lede")}</Lede>
      </Reveal>

      <Reveal className="mx-auto max-w-3xl">
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[21px] top-2 w-0.5 bg-gradient-to-b from-cyan-glow via-sky-500 to-purple-glow dark:via-sky-400"
          />
          {PHASES.map((p, i) => (
            <li key={p.k} className={`relative pl-[4.25rem] ${i === PHASES.length - 1 ? "" : "pb-8"}`}>
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-glow/60 bg-cyan-glow/10 font-mono text-[15px] font-bold text-cyan-glow">
                {p.n}
              </span>
              <h4 className="flex flex-wrap items-baseline gap-x-3 font-display text-[17px] font-bold text-foreground">
                {t(`implementation.phases.${p.k}.name`)}
                <span className="font-mono text-[11.5px] font-normal tracking-wide text-amber-700 dark:text-amber-300">
                  {t(`implementation.phases.${p.k}.dur`)}
                </span>
              </h4>
              <p className="mt-1.5 max-w-2xl text-[13.8px] leading-relaxed text-muted-foreground">
                {t(`implementation.phases.${p.k}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* ---------- 11 · commercial model ---------- */

function Commercial() {
  const t = useT("pages.productV4");
  return (
    <Section id="pv4-commercial">
      <Reveal>
        <Eyebrow accent="green" sys="SYS 10" label={t("commercial.eyebrow")} />
        <Title pre={t("commercial.title")} />
        <Lede>{t("commercial.lede")}</Lede>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.k}
            className={`${CARD} relative flex flex-col gap-2.5 p-7 ${
              tier.feature ? `${A.green.tint} border-emerald-600/40 dark:border-emerald-400/40` : ""
            }`}
          >
            {tier.feature ? (
              <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white dark:bg-emerald-400 dark:text-emerald-950">
                {t("commercial.tiers.enterprise.flag")}
              </span>
            ) : null}
            <span className={KICKER}>{tier.kicker}</span>
            <div className="font-display text-[30px] font-extrabold tracking-tight tabular-nums text-emerald-700 dark:text-emerald-300">
              {tier.price}
              {tier.k === "global" ? (
                <span className="ml-1.5 text-[15px] font-medium text-muted-foreground">
                  {t("commercial.tiers.global.per")}
                </span>
              ) : null}
            </div>
            <h3 className="font-display text-[17px] font-bold text-foreground">{t(`commercial.tiers.${tier.k}.name`)}</h3>
            <p className="text-[13.3px] leading-relaxed text-muted-foreground">{t(`commercial.tiers.${tier.k}.body`)}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-4">
        <div className={`${CARD} p-6`}>
          <span className={KICKER}>{t("commercial.models.caption")}</span>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>{t("commercial.models.cols.model")}</th>
                  <th className={TH}>{t("commercial.models.cols.what")}</th>
                  <th className={TH}>{t("commercial.models.cols.comps")}</th>
                  <th className={`${TH} text-right`}>{t("commercial.models.cols.multiple")}</th>
                </tr>
              </thead>
              <tbody>
                {REVENUE_MODELS.map((m) => (
                  <tr key={m.k}>
                    <td className={TD}>
                      <b className="font-semibold text-foreground">{m.name}</b>
                    </td>
                    <td className={TD}>{t(`commercial.models.rows.${m.k}`)}</td>
                    <td className={TD}>{m.comps}</td>
                    <td
                      className={`${TD} text-right tabular-nums ${
                        m.warm ? "font-semibold text-amber-700 dark:text-amber-300" : ""
                      }`}
                    >
                      {m.multiple}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("commercial.note")}</p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 12 · target customers ---------- */

function Customers() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="blue" sys="SYS 11" label={t("customers.eyebrow")} />
        <Title pre={t("customers.title")} />
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className={`${CARD} p-6`}>
          <span className={KICKER}>{t("customers.bestFit.caption")}</span>
          <ul className="mt-3">
            {BEST_FIT.map((k, i) => (
              <li
                key={k}
                className={`py-2.5 text-sm leading-relaxed text-muted-foreground ${
                  i === BEST_FIT.length - 1 ? "" : "border-b border-border"
                }`}
              >
                <b className="font-semibold text-foreground">{t(`customers.bestFit.items.${k}.name`)}</b> —{" "}
                {t(`customers.bestFit.items.${k}.body`)}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${CARD} p-6`}>
          <span className={KICKER}>{t("customers.vertical.caption")}</span>
          <p className="mb-4 mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{t("customers.vertical.body")}</p>
          <div className="flex flex-wrap gap-2">
            {CERT_CHIPS.map((c) => (
              <Chip key={c.k} accent={c.accent}>
                <span className="font-semibold">{c.cert}</span>
                <span aria-hidden="true">→</span>
                <span className="font-normal">{t(`customers.vertical.chips.${c.k}`)}</span>
              </Chip>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 13 · competitive position ---------- */

function Competitive() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="gold" sys="SYS 12" label={t("competitive.eyebrow")} />
        <Title
          pre={t("competitive.titlePre")}
          accent={t("competitive.titleAccent")}
          post={t("competitive.titlePost")}
        />
        <Lede>{t("competitive.lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className={`${CARD} p-6`}>
          <span className={KICKER}>{t("competitive.table.caption")}</span>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={TH}>{t("competitive.table.colCapability")}</th>
                  {COMPETITORS.map((c) => (
                    <th
                      key={c}
                      className={`${TH} ${c === "item" ? "text-emerald-700 dark:text-emerald-300" : ""}`}
                    >
                      {COMPETITOR_LABELS[c]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.k}>
                    <td className={TD}>{t(`competitive.table.rows.${row.k}.cap`)}</td>
                    {COMPETITORS.map((c) => (
                      <td key={c} className={`${TD} ${TONE_CLASS[row.tones[c]]}`}>
                        {t(`competitive.table.rows.${row.k}.${c}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("competitive.note")}</p>
        </div>
      </Reveal>

      <Reveal className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {COMPARE_CARDS.map((k, i) => {
          const accents: Accent[] = ["blue", "purple", "teal"];
          return (
            <div key={k} className={`${CARD} ${A[accents[i]].tint} p-6`}>
              <span className={KICKER}>{t(`competitive.cards.${k}.caption`)}</span>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                {t(`competitive.cards.${k}.body`)}
              </p>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}

/* ---------- 14 · next 12 months ---------- */

function Roadmap12() {
  const t = useT("pages.productV4");
  const blocks = ["focus", "motion", "trust"] as const;
  const tags = ["FOCUS", "MOTION", "TRUST"];
  return (
    <Section id="pv4-roadmap">
      <Reveal>
        <Eyebrow accent="cyan" sys="SYS 13" label={t("roadmap12.eyebrow")} />
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className={`rounded-full border px-4 py-1.5 font-mono text-[12px] font-bold tracking-[0.16em] ${A.cyan.chip}`}>
            PHASE · LAND
          </span>
          <h3 className="font-display text-[clamp(1.35rem,2.6vw,1.6rem)] font-bold text-foreground">
            {t("roadmap12.title")}
          </h3>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b} className={`${CARD} p-6`}>
            <h4 className="mb-3 flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] tracking-wider ${A.cyan.chip}`}
              >
                {tags[i]}
              </span>
              {t(`roadmap12.blocks.${b}.heading`)}
            </h4>
            <ul className="space-y-1">
              {t.list(`roadmap12.blocks.${b}.items`).map((item) => (
                <li key={item} className="relative py-1 pl-4.5 text-[13.3px] leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-cyan-glow"
                  />
                  <span className="pl-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-5 flex flex-wrap gap-3.5">
        {KPIS_12.map((kpi) => (
          <div key={kpi.k} className={`${CARD} min-w-[9.5rem] flex-1 px-5 py-3.5`}>
            <div
              className={`font-display text-[22px] font-extrabold tabular-nums ${
                kpi.accent ? A[kpi.accent].text : "text-foreground"
              }`}
            >
              {kpi.v}
              {kpi.unit ? (
                <span className="ml-1 text-[13px] font-medium text-muted-foreground">
                  {t("roadmap12.kpis.weeksUnit")}
                </span>
              ) : null}
            </div>
            <div className="mt-1 text-[11.5px] text-muted-foreground">{t(`roadmap12.kpis.${kpi.k}`)}</div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

/* ---------- 15 · next 24 months ---------- */

function Roadmap24() {
  const t = useT("pages.productV4");
  const blocks = ["verticals", "product", "revenue"] as const;
  const tags = ["VERTICALS", "PRODUCT", "REVENUE"];
  return (
    <Section>
      <Reveal>
        <Eyebrow accent="purple" sys="SYS 14" label={t("roadmap24.eyebrow")} />
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span
            className={`rounded-full border px-4 py-1.5 font-mono text-[12px] font-bold tracking-[0.16em] ${A.purple.chip}`}
          >
            PHASE · EXPAND → OWN
          </span>
          <h3 className="font-display text-[clamp(1.35rem,2.6vw,1.6rem)] font-bold text-foreground">
            {t("roadmap24.title")}
          </h3>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b} className={`${CARD} p-6`}>
            <h4 className="mb-3 flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] tracking-wider ${A.purple.chip}`}
              >
                {tags[i]}
              </span>
              {t(`roadmap24.blocks.${b}.heading`)}
            </h4>
            <ul className="space-y-1">
              {t.list(`roadmap24.blocks.${b}.items`).map((item) => (
                <li key={item} className="relative py-1 pl-4.5 text-[13.3px] leading-relaxed text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-purple-glow"
                  />
                  <span className="pl-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="mb-6 text-center font-display text-xl font-bold text-foreground">{t("roadmap24.chart.heading")}</h3>
        <div className="mx-auto flex h-[280px] max-w-3xl items-end gap-[8%] border-b border-border px-[4%]">
          {CHART_BARS.map((bar) => (
            <div key={bar.k} className="flex h-full flex-1 flex-col items-center justify-end gap-2.5">
              <div
                className={`flex w-full max-w-[8rem] items-start justify-center rounded-t-lg pt-2.5 ${A[bar.accent].bar}`}
                style={{ height: bar.h }}
              >
                <b className="whitespace-nowrap text-[14px] font-bold tabular-nums text-foreground">{bar.v}</b>
              </div>
              <div className="text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {t(`roadmap24.chart.bars.${bar.k}`)}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-[12.5px] text-muted-foreground">
          {t("roadmap24.chart.note")}
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- 16 · valuation ---------- */

function Valuation() {
  const t = useT("pages.productV4");
  return (
    <Section id="pv4-valuation">
      <Reveal>
        <Eyebrow accent="gold" sys="SYS 15" label={t("valuation.eyebrow")} />
        <Title pre={t("valuation.title")} />
        <Lede>{t("valuation.lede")}</Lede>
      </Reveal>

      <Reveal className="space-y-3">
        {RUNGS.map((r) => (
          <div
            key={r.k}
            className={`${CARD} ${A[r.accent].tint} grid grid-cols-1 items-center gap-5 px-6 py-5 lg:grid-cols-[13rem_1fr_14rem]`}
          >
            <div>
              <div className="text-[15px] font-bold text-foreground">{t(`valuation.rungs.${r.k}.name`)}</div>
              <div className="mt-1 font-mono text-[10.5px] tracking-wide text-muted-foreground">{r.basis}</div>
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground">{t(`valuation.rungs.${r.k}.body`)}</p>
            <div
              className={`font-display text-[22px] font-extrabold tabular-nums tracking-tight lg:text-right ${A[r.accent].text}`}
            >
              {r.val}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {ANCHORS.map((a) => (
          <div key={a.k} className={`${CARD} p-6`}>
            <span className={KICKER}>{t(`valuation.anchors.${a.k}.caption`)}</span>
            <div className="mt-2 font-display text-[24px] font-extrabold tabular-nums text-foreground">{a.v}</div>
            <p className="mt-2 text-[12.8px] leading-relaxed text-muted-foreground">
              {t(`valuation.anchors.${a.k}.body`)}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

/* ---------- 17 · closing ---------- */

function Closing() {
  const t = useT("pages.productV4");
  return (
    <Section>
      <div className="text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow accent="blue" sys="SYS 16" label={t("closing.eyebrow")} />
          </div>
          <p className="mx-auto mb-7 max-w-3xl font-display text-[clamp(1.35rem,3vw,2.05rem)] font-extrabold leading-snug text-foreground">
            {t("closing.visionLine1")}
            <br />
            {t("closing.visionPre")}
            <span className="text-cyan-glow">{t("closing.visionAccent")}</span>
            {t("closing.visionPost")}
          </p>
          <p className="mx-auto mb-11 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            {t("closing.fine")}
          </p>
          <a
            href="mailto:invest@item.com"
            className="inline-block rounded-xl bg-cyan-glow px-9 py-3.5 text-[15.5px] font-bold text-background transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {t("closing.cta")}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- page ---------- */

export default function ProductV4() {
  const t = useT("pages.productV4");
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <TopBar />
      <Atmosphere />
      <SectionNav />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Divider />
        <Category />
        <Divider />
        <Stack />
        <Divider />
        <Systems />
        <Divider />
        <Suite />
        <Divider />
        <PhysicalAI />
        <Divider />
        <Flywheel />
        <Divider />
        <Cases />
        <Divider />
        <Implementation />
        <Divider />
        <Commercial />
        <Divider />
        <Customers />
        <Divider />
        <Competitive />
        <Divider />
        <Roadmap12 />
        <Divider />
        <Roadmap24 />
        <Divider />
        <Valuation />
        <Closing />
      </main>

      <footer className="relative z-10 border-t border-border px-6 py-7 text-center text-xs text-muted-foreground">
        ITEM AI · {t("footer")}
      </footer>
    </div>
  );
}
