/**
 * Design: Deep Space Command — Company Introduction (Merged single page)
 * UNIS (fulfillment) + Item (technology platform) side by side
 * No red backgrounds — consistent dark theme with cyan/purple accents
 * Item content simplified to avoid overlap with Evolution section
 */

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitleEn from "./SectionTitleEn";
import { Truck, MapPin, Users } from "lucide-react";

const ITEM_LOGO_SVG = "https://unisco.sfo3.digitaloceanspaces.com/design-item-com/svg/item-logo-fullcolor-whitetxt.svg";

const unisStats = [
  { value: "100M+", label: "Orders / Year" },
  { value: "1,200+", label: "Customer Accounts" },
  { value: "$20B", label: "Inventory Value" },
  { value: "10M+", label: "Sq Ft Warehouse" },
];

/* All logos from PPT extraction - CDN URLs */
const allLogos = [
  { name: "Walmart", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image2_0b92a732.png" },
  { name: "Samsung", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image3_15244f3c.png" },
  { name: "Amazon", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image4_e5b97640.png" },
  { name: "Meijer", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image5_f32d6f0a.png" },
  { name: "Foxconn", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image6_97765300.png" },
  { name: "SharkNinja", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image7_7fa51092.png" },
  { name: "VeSync", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image14_7275d439.png" },
  { name: "Omron", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image10_7cb86829.png" },
  { name: "Adastria", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image11_e8f74934.png" },
  { name: "GLS", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image12_1335d885.png" },
  { name: "Libiao Robotics", url: "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image13_565b125e.png" },
];

export default function CompanyIntroSection() {
  return (
    <section id="company" className="py-24 md:py-28">
      <div className="container max-w-6xl">
        <SectionTitleEn
          number="01"
          title="Who We Are"
          subtitle="UNIS provides omni-channel fulfillment; Item builds the technology platform that powers it all."
          
        />

        {/* Merged two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          {/* UNIS — 3 columns, more detail */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image15_73115e90.png" alt="Unis" className="h-7" />
                <p className="text-xs text-muted-foreground/65 font-mono">www.unisco.com</p>
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed mb-1">
                <span className="font-semibold text-cyan-glow">Omni-channel fulfillment on-time and in-full.</span> UNIS started serving Fashion Nova since 2019 at Memphis, US. Strategically designed national footprint reaches 98% of consumers with same-or next-day service.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {unisStats.map((s) => (
                  <div key={s.label} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center">
                    <p className="text-lg font-bold text-cyan-glow font-mono">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Key highlights */}
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-foreground/90">
                <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-cyan-glow/60" /> 4 major US ports (CA, TX, GA, NJ)</span>
                <span className="flex items-center gap-1.5"><Truck className="w-3 h-3 text-cyan-glow/60" /> 4.5M sq ft in LA area</span>
                <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-cyan-glow/60" /> 1,300 service technicians</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Item — 2 columns, concise positioning statement */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <img src={ITEM_LOGO_SVG} alt="Item" className="h-7" />
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed mb-1">
                <span className="font-semibold text-purple-glow">The technology engine behind UNIS.</span> Item is the implementation foundation for all supply chain transformation projects across UNIS Group.
              </p>
              <p className="text-xs text-muted-foreground/65 leading-relaxed mb-5">
                
              </p>

              {/* Simple capability tags instead of detailed stages */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[10px] text-muted-foreground/65 font-mono tracking-wider mb-3">CAPABILITY STACK</p>
                <div className="space-y-2">
                  <CapTag label="SaaS Platform" sub="OMS · WMS · TMS · YMS · RMS · Billing" color="cyan" />
                  <CapTag label="AI Agent Factory" sub="Ontology → Agent Assembly → Runtime" color="purple" />
                  <CapTag label="Robotics Integration" sub="WES · WCS · AMR · AS/RS · Sortation" color="cyan" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.08]">
                <p className="text-[10px] text-muted-foreground/65 italic leading-relaxed">
                  "Digital Operations → AI Intelligence → Physical Automation"
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Unified logo bar — customers & partners */}
        <AnimatedSection delay={0.2}>
          <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <p className="text-[10px] text-muted-foreground/65 font-mono tracking-wider mb-4 text-center">
              CUSTOMERS & PARTNERS
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {allLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.url}
                  alt={logo.name}
                  className="h-5 md:h-6 opacity-50 hover:opacity-80 transition-opacity object-contain"
                  style={{ maxWidth: "80px" }}
                />
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
    <div className={`flex items-center gap-3 p-2.5 rounded-lg border ${
      color === "cyan"
        ? "border-cyan-500/15 bg-cyan-500/5"
        : "border-purple-500/15 bg-purple-500/5"
    }`}>
      <div className={`w-1.5 h-6 rounded-full shrink-0 ${
        color === "cyan" ? "bg-cyan-glow/60" : "bg-purple-glow/60"
      }`} />
      <div>
        <p className={`text-xs font-semibold ${
          color === "cyan" ? "text-cyan-glow/90" : "text-purple-glow/90"
        }`}>{label}</p>
        <p className="text-[10px] text-muted-foreground/65 font-mono">{sub}</p>
      </div>
    </div>
  );
}
