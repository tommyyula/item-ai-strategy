/**
 * Ontology — the semantic backbone.
 *
 * The hosted `ontology-graph-*.webp` is gone for good. In its place is an
 * authored inline SVG of the entity graph itself: the domain nodes the copy
 * talks about (SKU, Dock, Wave …) and the relations between them, drawn with
 * `currentColor` and theme variables so it works on either ground. The node
 * labels are domain vocabulary and stay unlocalised.
 */

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";
import { useT } from "@/i18n/runtime";

type Node = { id: string; label: string; x: number; y: number; r: number; accent?: boolean };

const NODES: Node[] = [
  { id: "site", label: "Site", x: 60, y: 52, r: 24 },
  { id: "order", label: "Order", x: 165, y: 34, r: 27, accent: true },
  { id: "sku", label: "SKU", x: 152, y: 132, r: 26, accent: true },
  { id: "wave", label: "Wave", x: 262, y: 88, r: 28, accent: true },
  { id: "dock", label: "Dock", x: 358, y: 42, r: 25 },
  { id: "carrier", label: "Carrier", x: 372, y: 140, r: 27 },
  { id: "task", label: "Task", x: 258, y: 186, r: 24 },
];

const EDGES: [string, string][] = [
  ["site", "order"],
  ["site", "sku"],
  ["order", "sku"],
  ["order", "wave"],
  ["sku", "wave"],
  ["wave", "dock"],
  ["wave", "carrier"],
  ["wave", "task"],
  ["dock", "carrier"],
  ["sku", "task"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

function OntologyGraph() {
  return (
    <svg
      viewBox="0 0 440 230"
      role="img"
      aria-label="Ontology entity graph: Site, Order, SKU, Wave, Dock, Carrier and Task connected by domain relations"
      className="w-full h-auto text-cyan-glow"
    >
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.45">
        {EDGES.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} />
        ))}
      </g>
      {NODES.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="color-mix(in oklch, var(--panel-bg) 92%, transparent)"
            stroke="currentColor"
            strokeWidth={n.accent ? 1.8 : 1.1}
            opacity={n.accent ? 1 : 0.7}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            className="font-mono"
            fontSize="11"
            fill="var(--foreground)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const pointKeys = ["unify", "understand", "validate", "transform"];

export default function OntologySection() {
  const t = useT("deck.ontology");

  return (
    <section id="ontology" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionTitle number="09" title={t("title")} subtitle={t("subtitle")} />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: authored graph + concept */}
          <AnimatedSection direction="left">
            <div className="rounded-lg overflow-hidden mb-6 border border-border bg-surface-veil p-5">
              <OntologyGraph />
              <p className="mt-3 text-sm font-mono text-cyan-glow">{t("caption")}</p>
            </div>
            <GlowCard className="p-5">
              <h4 className="font-bold mb-2 text-foreground">{t("what.title")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("what.body")}</p>
            </GlowCard>
          </AnimatedSection>

          {/* Right: metrics + details */}
          <div className="space-y-6">
            <AnimatedSection direction="right" delay={0.1}>
              <GlowCard className="p-6">
                <p className="text-xs font-mono text-cyan-glow tracking-widest uppercase mb-4">
                  {t("results.eyebrow")}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={2} suffix=" Days" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("results.buildTime")}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={630} suffix=" Iter." />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("results.iterations")}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono text-cyan-glow glow-text-cyan">
                      <CountUp end={98} suffix="%" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("results.coverage")}</p>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <GlowCard glowColor="purple" className="p-6">
                <h4 className="font-bold mb-3 text-foreground">{t("why.title")}</h4>
                <ul className="space-y-3">
                  {pointKeys.map((k) => (
                    <li key={k} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="w-1.5 h-1.5 rounded-full bg-purple-glow mt-2 shrink-0"
                      />
                      <span>{t(`why.points.${k}`)}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="p-4 rounded-lg border border-dashed border-cyan-glow/30 bg-cyan-glow/5">
                <p className="text-sm text-cyan-glow italic">“{t("quote")}”</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
