/**
 * Company introduction — UNIS (fulfillment) + Item (technology platform).
 *
 * Customer and partner marks used to be hotlinked from a CDN that now 403s on
 * everything. They are vendored under `client/public/logos/` and referenced via
 * BASE_URL. They are full-colour brand marks, so each sits in a light neutral
 * chip that stays light in both themes — never inverted or hue-shifted.
 */

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import BrandLogo from "@/components/BrandLogo";
import { Truck, MapPin, Users } from "lucide-react";
import { useT } from "@/i18n/runtime";

const logoUrl = (slug: string, ext = "svg") =>
  `${import.meta.env.BASE_URL}logos/${slug}.${ext}`;

/** Metrics stay in code — they are not translated. */
const unisStats = [
  { key: "orders", value: "100M+" },
  { key: "accounts", value: "1,200+" },
  { key: "inventory", value: "$20B" },
  { key: "warehouse", value: "10M+" },
];

/** Acronym stacks are product vocabulary, not prose. */
const caps = [
  { key: "saas", sub: "OMS · WMS · TMS · YMS · RMS · Billing", color: "cyan" as const },
  { key: "factory", sub: "Ontology → Agent Assembly → Runtime", color: "purple" as const },
  { key: "robotics", sub: "WES · WCS · AMR · AS/RS · Sortation", color: "cyan" as const },
];

const partnerLogos = [
  { name: "Walmart", src: logoUrl("walmart") },
  { name: "Samsung", src: logoUrl("samsung") },
  { name: "Amazon", src: logoUrl("amazon") },
  { name: "Meijer", src: logoUrl("meijer") },
  { name: "Foxconn", src: logoUrl("foxconn") },
  { name: "SharkNinja", src: logoUrl("sharkninja") },
  { name: "VeSync", src: logoUrl("vesync", "png") },
  { name: "Omron", src: logoUrl("omron") },
  { name: "Adastria", src: logoUrl("adastria") },
  { name: "GLS", src: logoUrl("gls") },
  { name: "Libiao Robotics", src: logoUrl("libiao") },
  { name: "Lenovo", src: logoUrl("lenovo") },
];

/**
 * A brand mark on a light neutral chip. If the file is missing the chip falls
 * back to the company name so the strip never shows a broken image.
 */
function LogoChip({
  name,
  src,
  heightClass = "h-6 md:h-7",
}: {
  name: string;
  src: string;
  heightClass?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-card dark:bg-white/90 border border-border shadow-sm">
      {failed ? (
        <span className="text-xs font-semibold tracking-wide text-slate-700">{name}</span>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className={`${heightClass} w-auto max-w-[92px] object-contain`}
          loading="lazy"
        />
      )}
    </span>
  );
}

export default function CompanyIntroSection() {
  const t = useT("deck.companyIntro");
  const ui = useT("common.ui");

  return (
    <section id="company" className="py-24 md:py-28">
      <div className="container max-w-6xl">
        <SectionTitle number="01" title={t("title")} subtitle={t("subtitle")} />

        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          {/* UNIS */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="p-6 rounded-xl bg-surface-veil border border-border backdrop-blur-sm h-full">
              <div className="flex items-center gap-3 mb-5">
                <LogoChip name="UNIS" src={logoUrl("unis")} heightClass="h-6" />
                <p className="text-xs text-muted-foreground font-mono">www.unisco.com</p>
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-5">
                <span className="font-semibold text-cyan-glow">{t("unis.leadStrong")}</span>{" "}
                {t("unis.lead")}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {unisStats.map((s) => (
                  <div
                    key={s.key}
                    className="p-2.5 rounded-lg bg-surface-veil-strong border border-border text-center"
                  >
                    <p className="text-lg font-bold text-cyan-glow font-mono">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                      {t(`unis.stats.${s.key}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-cyan-glow" /> {t("unis.highlights.ports")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3 h-3 text-cyan-glow" /> {t("unis.highlights.la")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-cyan-glow" /> {t("unis.highlights.technicians")}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Item */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-surface-veil border border-border backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <BrandLogo heightClass="h-7" />
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-5">
                <span className="font-semibold text-purple-glow">{t("item.leadStrong")}</span>{" "}
                {t("item.lead")}
              </p>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[10px] text-muted-foreground font-mono tracking-wider mb-3 uppercase">
                  {t("item.stackLabel")}
                </p>
                <div className="space-y-2">
                  {caps.map((c) => (
                    <CapTag
                      key={c.key}
                      label={t(`item.caps.${c.key}`)}
                      sub={c.sub}
                      color={c.color}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  “{t("item.quote")}”
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Customers & partners */}
        <AnimatedSection delay={0.2}>
          <div className="p-5 rounded-xl bg-surface-veil-strong border border-border">
            <p className="text-[10px] text-muted-foreground font-mono tracking-wider mb-4 text-center uppercase">
              {ui("customersPartners")}
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              {partnerLogos.map((logo) => (
                <LogoChip key={logo.name} name={logo.name} src={logo.src} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CapTag({
  label,
  sub,
  color,
}: {
  label: string;
  sub: string;
  color: "cyan" | "purple";
}) {
  return (
    <div
      className={`flex items-center gap-3 p-2.5 rounded-lg border ${
        color === "cyan"
          ? "border-cyan-glow/20 bg-cyan-glow/5"
          : "border-purple-glow/20 bg-purple-glow/5"
      }`}
    >
      <div
        className={`w-1.5 h-6 rounded-full shrink-0 ${
          color === "cyan" ? "bg-cyan-glow/70" : "bg-purple-glow/70"
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
