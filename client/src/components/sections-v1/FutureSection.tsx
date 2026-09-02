// TODO(i18n): copy in this section is still hardcoded English. It needs a
// `deck.v1.future` dictionary (zh/en/ja/es) and `useT` — see
// client/src/i18n/CONVENTIONS.md.

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Handshake, Target, Rocket, ArrowUpRight } from "lucide-react";

const visions = [
  {
    icon: Handshake,
    title: "Ecosystem Integration",
    desc: "Deep ecosystem integration of Item's software stack with Lenovo's edge computing hardware and robotics, co-building 'software-defined hardware' solutions.",
  },
  {
    icon: Target,
    title: "Joint Reference Cases",
    desc: "Starting with Lenovo's internal AMR Zone Picking project, jointly refining solutions and validating business value.",
  },
  {
    icon: Rocket,
    title: "External Go-to-Market",
    desc: "Beyond serving Lenovo's own supply chain upgrades, exporting joint solutions externally to co-build next-gen smart warehouse infrastructure.",
  },
];

export default function FutureSection() {
  return (
    <section id="future" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl relative z-10">
        <SectionTitle
          number="12"
          title="Collaboration Vision"
          subtitle="Joint value with Lenovo — a strategic path from internal validation to external go-to-market."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {visions.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <GlowCard className="p-6 h-full text-center group">
                <div className="w-14 h-14 rounded-xl bg-cyan-glow/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-glow/20 transition-colors">
                  <v.icon className="w-7 h-7 text-cyan-glow" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA / closing statement */}
        <AnimatedSection delay={0.3}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 mb-8">
              <ArrowUpRight className="w-4 h-4 text-cyan-glow" />
              <span className="text-sm font-mono text-cyan-glow">
                Item &times; Lenovo = Next-Gen Warehouse Infrastructure
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As the implementation foundation for all supply chain transformation projects across
              UNIS Group, Item has validated the complete path from digitalization to Physical AI in
              production environments. We look forward to partnering with Lenovo, deeply integrating
              this battle-tested AI middleware layer with Lenovo's hardware ecosystem, and jointly
              defining the standard for next-generation smart warehouses.
            </p>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Item AI Strategy Briefing &mdash; Confidential &mdash; UNIS Group
          </p>
        </div>
      </div>
    </section>
  );
}
