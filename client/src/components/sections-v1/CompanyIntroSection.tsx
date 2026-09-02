// TODO(i18n): copy in this section is still hardcoded English. It needs a
// `deck.v1.company` dictionary (zh/en/ja/es) and `useT` — see
// client/src/i18n/CONVENTIONS.md.

/**
 * Company introduction (merged single page)
 * UNIS (fulfillment) + Item (technology platform) side by side.
 * Surfaces are token-driven so the panel treatment holds in both themes.
 */

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import BrandLogo from "@/components/BrandLogo";
import { Truck, MapPin, Users } from "lucide-react";

/* Customer and partner marks are vendored in client/public/logos.
   BASE_URL keeps them resolvable under the /item-ai-strategy/ Pages path. */
const LOGO_DIR = `${import.meta.env.BASE_URL}logos/`;

const unisStats = [
  { value: "100M+", label: "Orders / Year" },
  { value: "1,200+", label: "Customer Accounts" },
  { value: "$20B", label: "Inventory Value" },
  { value: "10M+", label: "Sq Ft Warehouse" },
];

const allLogos = [
  { name: "Walmart", file: "walmart.svg" },
  { name: "Samsung", file: "samsung.svg" },
  { name: "Lenovo", file: "lenovo.svg" },
  { name: "Amazon", file: "amazon.svg" },
  { name: "Meijer", file: "meijer.svg" },
  { name: "Foxconn", file: "foxconn.svg" },
  { name: "SharkNinja", file: "sharkninja.svg" },
  { name: "VeSync", file: "vesync.png" },
  { name: "Omron", file: "omron.svg" },
  { name: "Adastria", file: "adastria.svg" },
  { name: "GLS", file: "gls.svg" },
  { name: "Libiao Robotics", file: "libiao.svg" },
];

/**
 * Customer logos are supplied in their own brand colours, drawn for a light
 * ground. On the dark theme they sit on a neutral chip instead of being
 * inverted or filtered; on the light theme the same chip reads as a card,
 * separated from the page by the token border. If a mark is missing the chip
 * degrades to the brand name rather than to a broken-image glyph.
 */
function LogoChip({
  name,
  file,
  heightClass = "h-5 md:h-6",
  maxWidth = 88,
}: {
  name: string;
  file: string;
  heightClass?: string;
  maxWidth?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="inline-flex items-center rounded-md border border-border bg-surface-veil px-3 py-2 text-xs font-medium text-muted-foreground">
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center rounded-md border border-border/60 bg-white px-3 py-2 shadow-sm">
      <img
        src={`${LOGO_DIR}${file}`}
        alt={name}
        className={`${heightClass} w-auto object-contain`}
        style={{ maxWidth }}
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function CompanyIntroSection() {
  return (
    <section id="company" className="py-24 md:py-28">
      <div className="container max-w-6xl">
        <SectionTitle
          number="01"
          title="Who We Are"
          subtitle="UNIS provides omni-channel fulfillment; Item builds the technology platform that powers it all."
        />

        {/* Merged two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          {/* UNIS — 3 columns, more detail */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="p-6 rounded-xl bg-surface-veil border border-border backdrop-blur-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <LogoChip name="UNIS" file="unis.svg" heightClass="h-5" maxWidth={96} />
                <p className="text-xs text-muted-foreground font-mono">www.unisco.com</p>
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed mb-5">
                <span className="font-semibold text-cyan-glow">
                  Omni-channel fulfillment on-time and in-full.
                </span>{" "}
                UNIS started serving Lenovo since 2019 at Memphis, US. Strategically designed
                national footprint reaches 98% of consumers with same-or next-day service.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {unisStats.map((s) => (
                  <div
                    key={s.label}
                    className="p-2.5 rounded-lg bg-surface-veil-strong border border-border text-center"
                  >
                    <p className="text-lg font-bold text-cyan-glow font-mono">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-foreground/90">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-cyan-glow" /> 4 major US ports (CA, TX, GA, NJ)
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3 h-3 text-cyan-glow" /> 4.5M sq ft in LA area
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-cyan-glow" /> 1,300 service technicians
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Item — 2 columns, concise positioning statement */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-surface-veil border border-border backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <BrandLogo heightClass="h-7" />
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed mb-5">
                <span className="font-semibold text-purple-glow">
                  The technology engine behind UNIS.
                </span>{" "}
                Item is the implementation foundation for all supply chain transformation projects
                across UNIS Group.
              </p>

              {/* Simple capability tags instead of detailed stages */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[10px] text-muted-foreground font-mono tracking-wider mb-3">
                  CAPABILITY STACK
                </p>
                <div className="space-y-2">
                  <CapTag
                    label="SaaS Platform"
                    sub="OMS · WMS · TMS · YMS · RMS · Billing"
                    color="cyan"
                  />
                  <CapTag
                    label="AI Agent Factory"
                    sub="Ontology → Agent Assembly → Runtime"
                    color="purple"
                  />
                  <CapTag
                    label="Robotics Integration"
                    sub="WES · WCS · AMR · AS/RS · Sortation"
                    color="cyan"
                  />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                  "From digital operations → AI intelligence → physical automation"
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Unified logo bar — customers & partners */}
        <AnimatedSection delay={0.2}>
          <div className="p-5 rounded-xl bg-surface-veil-strong border border-border">
            <p className="text-[10px] text-muted-foreground font-mono tracking-wider mb-4 text-center">
              CUSTOMERS &amp; PARTNERS
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {allLogos.map((logo) => (
                <LogoChip key={logo.name} name={logo.name} file={logo.file} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CapTag({ label, sub, color }: { label: string; sub: string; color: "cyan" | "purple" }) {
  return (
    <div
      className={`flex items-center gap-3 p-2.5 rounded-lg border ${
        color === "cyan"
          ? "border-cyan-glow/25 bg-cyan-glow/5"
          : "border-purple-glow/25 bg-purple-glow/5"
      }`}
    >
      <div
        className={`w-1.5 h-6 rounded-full shrink-0 ${
          color === "cyan" ? "bg-cyan-glow" : "bg-purple-glow"
        }`}
      />
      <div>
        <p
          className={`text-xs font-semibold ${
            color === "cyan" ? "text-cyan-glow" : "text-purple-glow"
          }`}
        >
          {label}
        </p>
        <p className="text-[10px] text-muted-foreground font-mono">{sub}</p>
      </div>
    </div>
  );
}
