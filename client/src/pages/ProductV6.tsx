import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import TopBar from "@/components/TopBar";
import { useT } from "@/i18n/runtime";

/* ---------------------------------------------------------------------------
   ITEM AI — Product Overview (V6)

   Ported from the standalone dark-only deck to native React + Tailwind on the
   repo's design tokens, so the page reads in both the day and night themes.
   Every user-visible sentence comes from `pages.productV6`; product names,
   company names, money figures and metrics stay in these constants because
   they are identical in every locale.
   --------------------------------------------------------------------------- */

type Accent = "cyan" | "purple" | "blue" | "danger";

const ACCENT_VAR: Record<Accent, string> = {
  cyan: "--cyan-glow",
  purple: "--purple-glow",
  blue: "--chart-5",
  danger: "--destructive",
};

/** Text in the accent hue — resolves per theme, so it stays legible on both grounds. */
const ink = (a: Accent): CSSProperties => ({ color: `var(${ACCENT_VAR[a]})` });

/** A card tinted with the accent hue instead of the source deck's fixed dark gradients. */
const tint = (a: Accent): CSSProperties => ({
  background: `linear-gradient(160deg, color-mix(in oklch, var(${ACCENT_VAR[a]}) 12%, transparent), transparent 65%)`,
  borderColor: `color-mix(in oklch, var(${ACCENT_VAR[a]}) 32%, transparent)`,
});

const chipTint = (a: Accent): CSSProperties => ({
  color: `var(${ACCENT_VAR[a]})`,
  background: `color-mix(in oklch, var(${ACCENT_VAR[a]}) 12%, transparent)`,
  borderColor: `color-mix(in oklch, var(${ACCENT_VAR[a]}) 35%, transparent)`,
});

/* ---------------------------------- data ---------------------------------- */

const HERO_STATS = [
  { key: "aiProducts", value: "22", unit: "", accent: true },
  { key: "coreLayers", value: "5", unit: "", accent: false },
  { key: "pilot", value: "8–12", unit: "wk", accent: false },
  { key: "exceptions", value: "95%", unit: "+", accent: false },
] as const;

const HERO_CHIPS: { label: string; accent: Accent }[] = [
  { label: "Ontology", accent: "purple" },
  { label: "Foundry", accent: "cyan" },
  { label: "AI OS", accent: "cyan" },
  { label: "AIP", accent: "blue" },
  { label: "Harness", accent: "purple" },
];

const TAX_KEYS = ["compliance", "data", "operations"] as const;
const TAX_ACCENT: Record<(typeof TAX_KEYS)[number], Accent> = {
  compliance: "danger",
  data: "purple",
  operations: "blue",
};

const STACK_LAYERS: { key: string; id: string; accent: Accent }[] = [
  { key: "applications", id: "L7 · Applications", accent: "blue" },
  { key: "ai", id: "L6 · AI Layer", accent: "cyan" },
  { key: "foundry", id: "L5 · Foundry", accent: "cyan" },
  { key: "aip", id: "L4 · AIP", accent: "blue" },
  { key: "ontology", id: "L3 · Ontology", accent: "purple" },
  { key: "harness", id: "L2 · Harness", accent: "purple" },
  { key: "infrastructure", id: "L1 · Infrastructure", accent: "blue" },
];

const SYSTEM_CARDS: {
  key: string;
  name: string;
  accent: Accent;
  products: { key: string; name: string }[];
  wide?: boolean;
  chips?: string[];
  envs?: string;
}[] = [
  {
    key: "ontology",
    name: "Ontology",
    accent: "purple",
    products: [
      { key: "studio", name: "ITEM.Ontology Studio" },
      { key: "executor", name: "ITEM.Ontology Executor" },
    ],
  },
  {
    key: "foundry",
    name: "Foundry",
    accent: "cyan",
    products: [
      { key: "bi", name: "ITEM.BI" },
      { key: "di", name: "ITEM.DI" },
    ],
  },
  {
    key: "aios",
    name: "AI OS",
    accent: "cyan",
    products: [{ key: "runtime", name: "Agent Runtime" }],
    chips: [
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
    name: "AIP",
    accent: "blue",
    products: [
      { key: "gpt", name: "ITEM.GPT" },
      { key: "flow", name: "ITEM.Flow" },
      { key: "vision", name: "ITEM.Vision" },
    ],
  },
  {
    key: "harness",
    name: "Harness",
    accent: "purple",
    wide: true,
    envs: "Cloud  |  On-Prem  |  Edge  |  Air-gapped",
    products: [
      { key: "ide", name: "Agent IDE" },
      { key: "iam", name: "IAM" },
      { key: "deploy", name: "Multi-Tenant Deployment Platform" },
    ],
  },
];

const CATALOG: { key: string; name: string; accent: Accent; items: { key: string; name: string }[] }[] =
  [
    {
      key: "ontology",
      name: "Ontology",
      accent: "purple",
      items: [
        { key: "itemGpt", name: "ItemGPT" },
        { key: "itemDoc", name: "ItemDoc" },
      ],
    },
    {
      key: "foundry",
      name: "Foundry",
      accent: "cyan",
      items: [
        { key: "itemSense", name: "ItemSense" },
        { key: "itemPredict", name: "ItemPredict" },
      ],
    },
    {
      key: "aios",
      name: "AI OS",
      accent: "cyan",
      items: [
        { key: "itemOpsAi", name: "ItemOps AI" },
        { key: "itemAudit", name: "ItemAudit" },
        { key: "itemVision", name: "ItemVision" },
        { key: "itemVoice", name: "ItemVoice" },
      ],
    },
    {
      key: "aip",
      name: "AIP",
      accent: "blue",
      items: [
        { key: "itemClaw", name: "ItemClaw" },
        { key: "itemFlow", name: "ItemFlow" },
      ],
    },
    {
      key: "apps",
      name: "AI Applications",
      accent: "blue",
      items: [
        { key: "itemSupport", name: "ItemSupport" },
        { key: "itemGrow", name: "ItemGrow" },
      ],
    },
  ];

const TEMPLATES: { key: string; name: string; proven?: boolean }[] = [
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
];

/** Partner tier from the source deck's ⭐ rating, drawn as dots instead of emoji. */
const FLEET_ROWS: { key: string; partner: string; tier: number; lead?: boolean }[] = [
  { key: "hangcha", partner: "Hangcha", tier: 3, lead: true },
  { key: "libiao", partner: "Libiao", tier: 3, lead: true },
  { key: "xyz", partner: "XYZ Robotics", tier: 3, lead: true },
  { key: "unitree", partner: "Unitree", tier: 3, lead: true },
  { key: "pudu", partner: "Pudu", tier: 2 },
  { key: "deepRobotics", partner: "Deep Robotics", tier: 2 },
  { key: "zsRobotics", partner: "ZS Robotics", tier: 2 },
  { key: "galaxis", partner: "Galaxis", tier: 2 },
  { key: "lanxin", partner: "Lanxin", tier: 2 },
  { key: "slamtec", partner: "Slamtec", tier: 2 },
  { key: "mita", partner: "Mita Robot", tier: 2 },
];

const LEDGER_ROWS = [
  { key: "forklifts", capex: "$2–4M", sub: "$360–720K" },
  { key: "sortation", capex: "$0.5–1M", sub: "$240–480K" },
  { key: "picking", capex: "$1–2M", sub: "$300–600K" },
  { key: "humanoids", capex: "$405–900K", sub: "$540K–1.08M" },
  { key: "mixed", capex: "$400–800K", sub: "$216–420K" },
  { key: "infra", capex: "$100–300K", sub: "$180–300K" },
] as const;

const LEDGER_TOTAL = { capex: "$4.4–9M", sub: "$1.8–3.6M" };

const COVERAGE_HEADLINE = "25 DC → Full Coverage";

const FLYWHEEL_NODES: { key: string; name: string; accent: Accent }[] = [
  { key: "grow", name: "ITEM.Grow", accent: "blue" },
  { key: "gpt", name: "ITEM.GPT", accent: "cyan" },
  { key: "sce", name: "SCE Suite", accent: "blue" },
  { key: "sense", name: "ITEM.Sense", accent: "cyan" },
  { key: "support", name: "ITEM.Support", accent: "purple" },
  { key: "audit", name: "ITEM.Audit", accent: "purple" },
];

const CASE_KEYS = ["electronics", "threePl", "yard"] as const;

const CASE_METRICS: { key: string; value: string; accent: Accent }[] = [
  { key: "cost", value: "20–35%", accent: "cyan" },
  { key: "onTime", value: "15–40%", accent: "blue" },
  { key: "exceptions", value: "95%+", accent: "cyan" },
  { key: "turns", value: "35%", accent: "purple" },
];

const PHASES = ["discovery", "ontology", "pilot", "scale", "autonomous"] as const;

const BEST_FIT = ["manufacturers", "logistics", "forwarders", "retail", "ports"] as const;

const CERTS: { key: string; name: string; accent: Accent }[] = [
  { key: "iso27001", name: "ISO 27001", accent: "blue" },
  { key: "iso42001", name: "ISO 42001", accent: "purple" },
  { key: "hitrust", name: "HITRUST AI", accent: "cyan" },
  { key: "fedramp", name: "FedRAMP", accent: "purple" },
  { key: "ctpat", name: "C-TPAT / AEO", accent: "cyan" },
  { key: "cmmc", name: "CMMC L2", accent: "cyan" },
  { key: "tisax", name: "TISAX / ISO 9001", accent: "blue" },
  { key: "other", name: "HIPAA / PCI / ISO 14001", accent: "purple" },
];

const COMP_COLUMNS = [
  { key: "item", name: "ITEM AI", highlight: true },
  { key: "palantir", name: "Palantir", highlight: false },
  { key: "databricks", name: "Databricks", highlight: false },
  { key: "manhattan", name: "Manhattan / Blue Yonder", highlight: false },
  { key: "sap", name: "SAP / Oracle / Microsoft", highlight: false },
] as const;

const COMP_ROWS = [
  "ontology",
  "apps",
  "agents",
  "robots",
  "deploy",
  "flywheel",
  "focus",
] as const;

const COMP_CARDS = ["incumbents", "dataPlatforms", "pointTools"] as const;

/* --------------------------------- helpers -------------------------------- */

/** Scroll-in reveal that stands down entirely under `prefers-reduced-motion`. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
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
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
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
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

function Eyebrow({
  sys,
  label,
  accent = "cyan",
  centered = false,
}: {
  sys: string;
  label: string;
  accent?: Accent;
  centered?: boolean;
}) {
  return (
    <div
      className={`mb-6 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(${ACCENT_VAR[accent]})` }} />
      <span style={ink(accent)}>{sys}</span>
      <span>{label}</span>
    </div>
  );
}

function Heading({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return (
    <h2
      className={`mb-4 text-[1.75rem] font-extrabold leading-[1.18] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mb-11 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-[1.06rem]">
      {children}
    </p>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="section-divider mx-auto w-full max-w-[1180px]" aria-hidden="true" />;
}

/** Heading fragment: neutral lead, accented middle, neutral tail. */
function Split({ ns, accent = "cyan" }: { ns: (k: string) => string; accent?: Accent }) {
  return (
    <>
      {ns("lead")}
      <span style={ink(accent)}>{ns("accent")}</span>
      {ns("tail")}
    </>
  );
}

/* --------------------------------- sections -------------------------------- */

function PageNav() {
  const t = useT("pages.productV6.nav");
  const links = [
    { href: "#story", label: t("story") },
    { href: "#platform", label: t("platform") },
    { href: "#products", label: t("products") },
  ];
  return (
    <nav
      aria-label={t("label")}
      className="fixed top-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border/70 bg-card/70 px-2 py-1 backdrop-blur-md lg:flex"
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="rounded-full px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-veil hover:text-foreground"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  const t = useT("pages.productV6.hero");
  return (
    <section
      id="story"
      className="relative scroll-mt-24 overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28"
    >
      {/* Atmosphere: token-built, so it dims to a soft wash in the light theme. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 78% 8%, color-mix(in oklch, var(--cyan-glow) 14%, transparent), transparent 60%), radial-gradient(ellipse 50% 45% at 8% 100%, color-mix(in oklch, var(--purple-glow) 12%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-veil px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-glow">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--chart-3)" }}
            aria-hidden="true"
          />
          {t("badge")}
        </div>

        <h1 className="mb-6 max-w-4xl text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem]">
          {t("title.lead")}
          <span className="text-cyan-glow">{t("title.accent")}</span>
          {t("title.tail")}
        </h1>

        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="grid max-w-4xl grid-cols-2 gap-3.5 md:grid-cols-4">
          {HERO_STATS.map((s) => (
            <div key={s.key} className="panel px-5 py-5">
              <div
                className={`text-[1.7rem] font-extrabold tabular-nums tracking-tight sm:text-3xl ${
                  s.accent ? "text-cyan-glow" : "text-foreground"
                }`}
              >
                {s.value}
                {s.unit && (
                  <span className="text-base font-semibold text-muted-foreground">{s.unit}</span>
                )}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-[0.8rem]">
                {t(`stats.${s.key}`)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 flex flex-wrap gap-2.5">
          {HERO_CHIPS.map((c) => (
            <span
              key={c.label}
              style={chipTint(c.accent)}
              className="rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wider"
            >
              {c.label}
            </span>
          ))}
          <span className="rounded-full border border-border bg-surface-veil px-3.5 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground">
            {t("tagline")}
          </span>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const t = useT("pages.productV6.problem");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 01" label={t("eyebrow")} accent="danger" />
        <Heading>{t("title")}</Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {TAX_KEYS.map((k, i) => (
          <Reveal key={k} delay={i * 80} className="h-full">
            <article className="panel h-full border p-6" style={tint(TAX_ACCENT[k])}>
              <Kicker>{t(`taxes.${k}.kicker`)}</Kicker>
              <div
                className="mb-1.5 text-3xl font-extrabold tracking-tight sm:text-[2.4rem]"
                style={ink(TAX_ACCENT[k])}
              >
                {t(`taxes.${k}.headline`)}
              </div>
              <h3 className="mb-2.5 text-lg font-semibold text-foreground">
                {t(`taxes.${k}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`taxes.${k}.body`)}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-3 rounded-xl border border-dashed border-border px-6 py-5">
          <span
            className="text-2xl font-extrabold whitespace-nowrap sm:text-[2rem]"
            style={ink("purple")}
          >
            {t("note.figure")}
          </span>
          <p className="min-w-[16rem] flex-1 text-sm leading-relaxed text-muted-foreground">
            {t("note.body")}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Category() {
  const t = useT("pages.productV6.category");
  const panels = [
    { key: "old" as const, accent: "danger" as Accent, mark: "×" },
    { key: "next" as const, accent: "cyan" as Accent, mark: "✓" },
  ];
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 02" label={t("eyebrow")} accent="blue" />
        <Heading>
          <Split ns={(k) => t(`title.${k}`)} />
        </Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <article className="panel border p-7" style={tint("danger")}>
            <h3 className="mb-3.5 text-lg font-semibold text-foreground">{t("old.title")}</h3>
            <ul className="space-y-1">
              {t.list("old.items").map((item) => (
                <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 font-bold"
                    style={ink("danger")}
                  >
                    {panels[0].mark}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div
            aria-hidden="true"
            className="flex items-center justify-center text-2xl text-cyan-glow lg:w-16"
          >
            <span className="rotate-90 lg:rotate-0">→</span>
          </div>

          <article className="panel border p-7" style={tint("cyan")}>
            <h3 className="mb-3.5 text-lg font-semibold text-foreground">{t("next.title")}</h3>
            <ul className="space-y-1">
              {t.list("next.items").map((item) => (
                <li key={item} className="relative py-1.5 pl-6 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="absolute left-0 font-bold text-cyan-glow">
                    {panels[1].mark}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="panel mt-6 border px-7 py-8 text-center" style={tint("blue")}>
          <p className="text-lg font-bold leading-snug text-foreground sm:text-xl lg:text-[1.4rem]">
            <Split ns={(k) => t(`thesis.${k}`)} />
          </p>
          <p className="mt-2 text-lg font-bold leading-snug text-foreground sm:text-xl lg:text-[1.4rem]">
            {t("thesis.line2")}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Stack() {
  const t = useT("pages.productV6.stack");
  return (
    <Section id="platform">
      <Reveal>
        <Eyebrow sys="SYS 03" label={t("eyebrow")} accent="cyan" />
        <Heading>{t("title")}</Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className="mx-auto flex max-w-[880px] flex-col gap-2.5">
          {STACK_LAYERS.map((layer) => (
            <div
              key={layer.key}
              className="panel grid items-center gap-3 px-5 py-4 transition-transform duration-200 hover:translate-x-2 motion-reduce:transform-none sm:grid-cols-[7rem_1fr_auto]"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {layer.id}
              </span>
              <div>
                <div className="text-[0.95rem] font-bold text-foreground">
                  {t(`layers.${layer.key}.name`)}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {t(`layers.${layer.key}.detail`)}
                </div>
              </div>
              <span
                style={chipTint(layer.accent)}
                className="justify-self-start rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide sm:justify-self-end"
              >
                {t(`layers.${layer.key}.tag`)}
              </span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-[880px] text-center text-sm text-muted-foreground">
          {t("note")}
        </p>
      </Reveal>
    </Section>
  );
}

function Systems() {
  const t = useT("pages.productV6.systems");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 04" label={t("eyebrow")} accent="purple" />
        <Heading>{t("title")}</Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <div className="grid gap-4.5 gap-y-5 md:grid-cols-2">
        {SYSTEM_CARDS.map((card, i) => (
          <Reveal
            key={card.key}
            delay={i * 60}
            className={`h-full ${card.wide ? "md:col-span-2" : ""}`}
          >
            <article className="panel flex h-full flex-col gap-3.5 border p-7" style={tint(card.accent)}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] tracking-[0.18em]" style={ink(card.accent)}>
                  {t(`cards.${card.key}.kicker`)}
                </span>
                <span
                  style={chipTint(card.accent)}
                  className="rounded-full border px-3 py-1 text-xs font-semibold"
                >
                  {t(`cards.${card.key}.badge`)}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{card.name}</h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">{t("labels.design")}</strong>{" "}
                {t(`cards.${card.key}.design`)}{" "}
                <strong className="font-semibold text-foreground">{t("labels.purpose")}</strong>{" "}
                {t(`cards.${card.key}.purpose`)}
              </p>

              <div className="grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]">
                {card.products.map((p) => (
                  <div
                    key={p.key}
                    className={`rounded-lg border border-border bg-surface-veil px-3 py-2 ${
                      card.key === "aios" ? "sm:col-span-full sm:text-center" : ""
                    }`}
                    style={{ borderLeft: `2px solid var(${ACCENT_VAR[card.accent]})` }}
                  >
                    <b className="block text-xs font-semibold text-foreground">{p.name}</b>
                    <i className="text-[11px] not-italic text-muted-foreground">
                      {t(`cards.${card.key}.products.${p.key}`)}
                    </i>
                  </div>
                ))}
                {card.chips && (
                  <div className="flex flex-wrap gap-1.5 sm:col-span-full">
                    {card.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-border bg-surface-veil px-2.5 py-1 font-mono text-[11px] text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                {card.envs && (
                  <div className="rounded-lg border border-border bg-surface-veil px-3 py-2 text-center font-mono text-xs text-muted-foreground sm:col-span-full">
                    {card.envs}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {t.list(`cards.${card.key}.caps`).map((cap) => (
                  <span
                    key={cap}
                    className="rounded-md border border-border bg-surface-veil px-2.5 py-1 text-[11.5px] text-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-border pt-3.5 text-xs text-muted-foreground">
                <b className="font-semibold text-foreground">{t("labels.role")}</b>{" "}
                {t(`cards.${card.key}.role`)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Products() {
  const t = useT("pages.productV6.products");
  let n = 0;
  return (
    <Section id="products">
      <Reveal>
        <Eyebrow sys="SYS 05" label={t("eyebrow")} accent="blue" />
        <Heading>
          <Split ns={(k) => t(`title.${k}`)} />
        </Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CATALOG.map((group) => (
          <div key={group.key} className="contents">
            <Reveal className="md:col-span-2 lg:col-span-3">
              <div
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card/60 px-3.5 py-2.5"
                style={{ borderLeft: `3px solid var(${ACCENT_VAR[group.accent]})` }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: `var(${ACCENT_VAR[group.accent]})` }}
                  aria-hidden="true"
                />
                <b className="text-sm font-semibold tracking-wide text-foreground">{group.name}</b>
                <span className="text-xs text-muted-foreground">{t(`groups.${group.key}`)}</span>
                <span
                  className="ml-auto rounded-md border border-border px-2 py-0.5 font-mono text-[11px]"
                  style={ink(group.accent)}
                >
                  {group.items.length}
                </span>
              </div>
            </Reveal>

            {group.items.map((item) => {
              n += 1;
              const id = `P${String(n).padStart(2, "0")}`;
              return (
                <Reveal key={item.key} className="h-full">
                  <article className="panel flex h-full min-h-[9.5rem] flex-col gap-1.5 px-5 py-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <b className="text-base font-semibold text-foreground">{item.name}</b>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {id}
                      </span>
                    </div>
                    <div className="text-xs italic text-cyan-glow">{t(`items.${item.key}.tag`)}</div>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {t(`items.${item.key}.desc`)}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ))}

        <Reveal className="md:col-span-2 lg:col-span-3">
          <div
            className="mt-2 flex items-center gap-2.5 rounded-xl border border-border bg-card/60 px-3.5 py-2.5"
            style={{ borderLeft: "3px solid var(--chart-5)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--chart-5)" }}
              aria-hidden="true"
            />
            <b className="text-sm font-semibold tracking-wide text-foreground">
              {t("templates.title")}
            </b>
            <span className="text-xs text-muted-foreground">{t("templates.subtitle")}</span>
            <span
              className="ml-auto rounded-md border border-border px-2 py-0.5 font-mono text-[11px]"
              style={ink("blue")}
            >
              {TEMPLATES.length}
            </span>
          </div>
        </Reveal>

        {TEMPLATES.map((tpl) => {
          n += 1;
          const id = `P${String(n).padStart(2, "0")}`;
          return (
            <Reveal key={tpl.key} className="h-full">
              <article className="panel flex h-full min-h-[9.5rem] flex-col gap-1.5 px-5 py-5">
                <div className="flex items-baseline justify-between gap-2">
                  <b className="text-base font-semibold text-foreground">
                    {tpl.name}
                    {tpl.proven && (
                      <span
                        className="ml-1.5 align-super font-mono text-[9px] uppercase tracking-widest"
                        style={ink("cyan")}
                      >
                        ✓ {t("templates.proven")}
                      </span>
                    )}
                  </b>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {id}
                  </span>
                </div>
                <div className="text-xs italic text-cyan-glow">
                  {t(`templates.items.${tpl.key}.tag`)}
                </div>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {t(`templates.items.${tpl.key}.desc`)}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("note")}</p>
      </Reveal>
    </Section>
  );
}

function Physical() {
  const t = useT("pages.productV6.physical");
  const th =
    "border-b border-border px-3 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground";
  const td = "border-b border-border/60 px-3 py-2.5 align-top text-muted-foreground";

  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 06" label={t("eyebrow")} accent="cyan" />
        <Heading>
          <Split ns={(k) => t(`title.${k}`)} />
        </Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className="panel p-6">
          <Kicker>{t("fleet.caption")}</Kicker>
          <div className="-mx-2 overflow-x-auto px-2">
            <table className="w-full min-w-[46rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={th}>{t("fleet.headers.type")}</th>
                  <th className={th}>{t("fleet.headers.partner")}</th>
                  <th className={th}>{t("fleet.headers.environment")}</th>
                  <th className={th}>{t("fleet.headers.modules")}</th>
                  <th className={`${th} text-right`}>{t("fleet.headers.raas")}</th>
                </tr>
              </thead>
              <tbody>
                {FLEET_ROWS.map((row) => (
                  <tr key={row.key}>
                    <td className={td}>{t(`fleet.rows.${row.key}.type`)}</td>
                    <td className={td}>
                      <span
                        className={
                          row.lead ? "font-semibold text-foreground" : "font-medium text-foreground"
                        }
                      >
                        {row.partner}
                      </span>
                      <span className="ml-2 inline-flex gap-0.5 align-middle" aria-hidden="true">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="inline-block h-1.5 w-1.5 rounded-full"
                            style={{
                              background:
                                i < row.tier
                                  ? "var(--cyan-glow)"
                                  : "color-mix(in oklch, var(--muted-foreground) 35%, transparent)",
                            }}
                          />
                        ))}
                      </span>
                    </td>
                    <td className={td}>{t(`fleet.rows.${row.key}.environment`)}</td>
                    <td className={td}>{t(`fleet.rows.${row.key}.modules`)}</td>
                    <td className={`${td} text-right tabular-nums`}>
                      {t(`fleet.rows.${row.key}.raas`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="panel h-full border p-6" style={tint("cyan")}>
            <Kicker>{t("ledger.caption")}</Kicker>
            <div className="-mx-2 overflow-x-auto px-2">
              <table className="w-full min-w-[22rem] border-collapse text-[13.5px]">
                <thead>
                  <tr>
                    <th className={th}>{t("ledger.headers.fleet")}</th>
                    <th className={`${th} text-right`}>{t("ledger.headers.capex")}</th>
                    <th className={`${th} text-right`}>{t("ledger.headers.subscription")}</th>
                  </tr>
                </thead>
                <tbody>
                  {LEDGER_ROWS.map((row) => (
                    <tr key={row.key}>
                      <td className={td}>{t(`ledger.rows.${row.key}`)}</td>
                      <td className={`${td} text-right tabular-nums`}>{row.capex}</td>
                      <td
                        className={`${td} text-right font-semibold tabular-nums`}
                        style={ink("cyan")}
                      >
                        {row.sub}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className={`${td} border-t border-border font-semibold text-foreground`}>
                      {t("ledger.rows.total")}
                    </td>
                    <td
                      className={`${td} border-t border-border text-right font-semibold tabular-nums text-foreground`}
                    >
                      {LEDGER_TOTAL.capex}
                    </td>
                    <td
                      className={`${td} border-t border-border text-right font-bold tabular-nums`}
                      style={ink("cyan")}
                    >
                      {LEDGER_TOTAL.sub}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="h-full" delay={80}>
          <div className="panel flex h-full flex-col justify-center gap-4 p-6">
            <div>
              <div
                className="text-3xl font-extrabold tracking-tight sm:text-[2.4rem]"
                style={ink("cyan")}
              >
                {COVERAGE_HEADLINE}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("coverage.body")}
              </p>
            </div>
            <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              {t("coverage.footnote")}{" "}
              <b className="font-semibold" style={ink("cyan")}>
                {t("coverage.emphasis")}
              </b>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Flywheel() {
  const t = useT("pages.productV6.flywheel");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 07" label={t("eyebrow")} accent="purple" />
        <Heading>
          <Split ns={(k) => t(`title.${k}`)} accent="purple" />
        </Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {FLYWHEEL_NODES.map((node, i) => (
            <li key={node.key} className="panel relative px-4 py-4">
              <b className="mb-1.5 block text-sm font-semibold" style={ink(node.accent)}>
                {node.name}
              </b>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t(`nodes.${node.key}`)}
              </p>
              <span
                aria-hidden="true"
                className="absolute top-2.5 right-3 font-mono text-xs"
                style={ink(i === FLYWHEEL_NODES.length - 1 ? "purple" : "cyan")}
              >
                {i === FLYWHEEL_NODES.length - 1 ? "↺" : "→"}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={100}>
        <p
          className="panel mt-10 border px-7 py-6 text-sm leading-relaxed text-muted-foreground"
          style={tint("purple")}
        >
          <b className="font-semibold" style={ink("purple")}>
            {t("note.label")}
          </b>{" "}
          {t("note.body")}
        </p>
      </Reveal>
    </Section>
  );
}

function Cases() {
  const t = useT("pages.productV6.cases");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 08" label={t("eyebrow")} accent="cyan" />
        <Heading>{t("title")}</Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {CASE_KEYS.map((k, i) => (
          <Reveal key={k} delay={i * 70} className="h-full">
            <article className="panel h-full p-6">
              <Kicker>{`${t("label")} 0${i + 1}`}</Kicker>
              <h3 className="mb-2.5 text-[17px] font-semibold text-foreground">
                {t(`items.${k}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`items.${k}.body`)}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CASE_METRICS.map((m, i) => (
          <Reveal key={m.key} delay={i * 60} className="h-full">
            <div className="panel h-full p-6 text-center">
              <div className="text-3xl font-extrabold tabular-nums" style={ink(m.accent)}>
                {m.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{t(`metrics.${m.key}`)}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-4 text-[11.5px] italic text-muted-foreground">{t("note")}</p>
      </Reveal>
    </Section>
  );
}

function Implementation() {
  const t = useT("pages.productV6.implementation");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 09" label={t("eyebrow")} accent="cyan" />
        <Heading>{t("title")}</Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <ol className="relative mx-auto max-w-[920px]">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[21px] w-0.5"
            style={{
              background:
                "linear-gradient(180deg, var(--cyan-glow), var(--chart-5), var(--purple-glow))",
            }}
          />
          {PHASES.map((p, i) => (
            <li key={p} className="relative pb-8 pl-[66px] last:pb-0">
              <span
                className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full border font-mono text-[15px] font-bold"
                style={{
                  ...chipTint("cyan"),
                  background: "color-mix(in oklch, var(--cyan-glow) 12%, var(--card))",
                }}
                aria-hidden="true"
              >
                {i}
              </span>
              <h3 className="flex flex-wrap items-baseline gap-3 text-[17px] font-semibold text-foreground">
                {t(`phases.${p}.title`)}
                <span className="font-mono text-[11.5px] tracking-wider" style={ink("purple")}>
                  {t(`phases.${p}.duration`)}
                </span>
              </h3>
              <p className="mt-1.5 max-w-[680px] text-sm leading-relaxed text-muted-foreground">
                {t(`phases.${p}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

function Customers() {
  const t = useT("pages.productV6.customers");
  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 11" label={t("eyebrow")} accent="blue" />
        <Heading>{t("title")}</Heading>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="panel h-full p-6">
            <Kicker>{t("bestFit.kicker")}</Kicker>
            <ul>
              {BEST_FIT.map((k, i) => (
                <li
                  key={k}
                  className={`py-2.5 text-sm text-muted-foreground ${
                    i < BEST_FIT.length - 1 ? "border-b border-border/60" : ""
                  }`}
                >
                  <b className="font-semibold text-foreground">
                    {t(`bestFit.items.${k}.label`)}
                  </b>{" "}
                  — {t(`bestFit.items.${k}.detail`)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="h-full" delay={80}>
          <div className="panel h-full p-6">
            <Kicker>{t("vertical.kicker")}</Kicker>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t("vertical.body")}</p>
            <div className="flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <span
                  key={c.key}
                  style={chipTint(c.accent)}
                  className="rounded-full border px-3.5 py-1.5 text-xs font-semibold"
                >
                  {c.name} → {t(`vertical.certs.${c.key}`)}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Competitive() {
  const t = useT("pages.productV6.competitive");
  const th =
    "border-b border-border px-3 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.14em]";
  const td = "border-b border-border/60 px-3 py-2.5 align-top text-muted-foreground";

  return (
    <Section>
      <Reveal>
        <Eyebrow sys="SYS 12" label={t("eyebrow")} accent="purple" />
        <Heading>
          <Split ns={(k) => t(`title.${k}`)} />
        </Heading>
        <Lede>{t("lede")}</Lede>
      </Reveal>

      <Reveal>
        <div className="panel p-6">
          <Kicker>{t("table.caption")}</Kicker>
          <div className="-mx-2 overflow-x-auto px-2">
            <table className="w-full min-w-[52rem] border-collapse text-[13.5px]">
              <thead>
                <tr>
                  <th className={`${th} text-muted-foreground`}>{t("table.capability")}</th>
                  {COMP_COLUMNS.map((c) => (
                    <th
                      key={c.key}
                      className={th}
                      style={c.highlight ? ink("cyan") : { color: "var(--muted-foreground)" }}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMP_ROWS.map((row) => (
                  <tr key={row}>
                    <td className={`${td} text-foreground`}>{t(`table.rows.${row}.label`)}</td>
                    {COMP_COLUMNS.map((c) => (
                      <td
                        key={c.key}
                        className={`${td} ${c.highlight ? "font-semibold" : ""}`}
                        style={c.highlight ? ink("cyan") : undefined}
                      >
                        {t(`table.rows.${row}.${c.key}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3.5 text-[11.5px] italic text-muted-foreground">{t("note")}</p>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {COMP_CARDS.map((k, i) => (
          <Reveal key={k} delay={i * 70} className="h-full">
            <article
              className="panel h-full border p-6"
              style={tint(i === 0 ? "blue" : i === 1 ? "purple" : "cyan")}
            >
              <Kicker>{t(`cards.${k}.kicker`)}</Kicker>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`cards.${k}.body`)}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Closing() {
  const t = useT("pages.productV6.closing");
  return (
    <Section className="pb-16 text-center">
      <Reveal>
        <Eyebrow sys="SYS 16" label={t("eyebrow")} accent="cyan" centered />
        <p className="mx-auto mb-7 max-w-[880px] text-xl font-extrabold leading-snug text-foreground sm:text-2xl lg:text-[2.1rem]">
          {t("vision.lead")}
          <span className="text-cyan-glow">{t("vision.accent")}</span>
          {t("vision.tail")}
        </p>
        <p className="mx-auto mb-11 max-w-[720px] text-[15px] leading-relaxed text-muted-foreground">
          {t("fine")}
        </p>
        <a
          href="mailto:info@item.com"
          className="inline-block rounded-xl bg-primary px-9 py-3.5 text-[15px] font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
        >
          {t("cta")} →
        </a>
      </Reveal>
    </Section>
  );
}

function Footer() {
  const t = useT("pages.productV6");
  return (
    <footer className="border-t border-border px-6 py-7 text-center text-xs text-muted-foreground">
      ITEM AI · {t("footer")}
    </footer>
  );
}

export default function ProductV6() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <PageNav />
      <main>
        <Hero />
        <Problem />
        <Divider />
        <Category />
        <Divider />
        <Stack />
        <Divider />
        <Systems />
        <Divider />
        <Products />
        <Divider />
        <Physical />
        <Divider />
        <Flywheel />
        <Divider />
        <Cases />
        <Divider />
        <Implementation />
        <Divider />
        <Customers />
        <Divider />
        <Competitive />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
