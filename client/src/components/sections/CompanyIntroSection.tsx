import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Truck, Package, MapPin, Users, Building2, Bot, Cpu, Warehouse } from "lucide-react";

const ITEM_LOGO = "https://unisco.sfo3.digitaloceanspaces.com/design-item-com/svg/item-logo-fullcolor-whitetxt.svg";

const unisStats = [
  { value: "100M+", label: "Orders / Year", labelCn: "年订单量" },
  { value: "1,200+", label: "Customer Accounts", labelCn: "客户账户" },
  { value: "$20B", label: "Inventory Value", labelCn: "库存价值" },
  { value: "10M+", label: "Sq Ft Warehouse", labelCn: "平方英尺仓库" },
];

const unisHighlights = [
  { icon: MapPin, text: "Transload from 4 major US ports of entry (CA, TX, GA, NJ)", textCn: "从美国4大入境港口转运（CA, TX, GA, NJ）" },
  { icon: Truck, text: "98% of consumers reachable with same-or next-day service", textCn: "98%消费者可享受当日或次日达服务" },
  { icon: Users, text: "1,300 network repair/service technicians", textCn: "1,300名网络维修/服务技术人员" },
];

const itemStages = [
  {
    icon: Building2,
    title: "Digital Transformation",
    titleCn: "数字化转型",
    desc: "Full-stack SaaS platform: OMS, WMS, TMS, YMS, RMS, and Billing & Pay — eliminating data silos across the entire supply chain.",
    descCn: "全栈SaaS平台：OMS、WMS、TMS、YMS、RMS及Billing & Pay——消除整个供应链的数据孤岛。",
    color: "cyan" as const,
  },
  {
    icon: Bot,
    title: "AI Agent Factory",
    titleCn: "AI Agent工厂",
    desc: "Turn enterprise knowledge into deployable AI agents at scale — through ontology modeling, rapid agent assembly, and production-grade runtime orchestration.",
    descCn: "将企业知识转化为可规模化部署的AI Agent——通过Ontology建模、快速Agent组装和生产级运行时编排。",
    color: "purple" as const,
  },
  {
    icon: Cpu,
    title: "Robotics & Automation",
    titleCn: "机器人与自动化",
    desc: "WES and WCS integrate directly with robotics partners (AMR, AS/RS, sortation) to bridge the gap between software intelligence and physical execution.",
    descCn: "WES和WCS直接与机器人合作伙伴（AMR、AS/RS、分拣系统）集成，弥合软件智能与物理执行之间的鸿沟。",
    color: "cyan" as const,
  },
];

const customerLogos = [
  { name: "Walmart", url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" },
  { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Lenovo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
  { name: "Foxconn", url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Foxconn_logo.svg" },
];

const partnerLogos = [
  { name: "Omron", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Omron_logo.svg" },
  { name: "GLS", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/GLS_Logo_2021.svg" },
];

export default function CompanyIntroSection() {
  return (
    <section id="company" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        {/* Section header */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-cyan-glow/70 tracking-widest uppercase">00</span>
            <div className="h-px w-12 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Who We Are
          </h2>
          <p className="mt-2 text-lg md:text-xl text-muted-foreground/60 font-light tracking-wide">
            关于我们
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            UNIS provides omni-channel fulfillment services; Item builds the technology platform that powers UNIS and beyond.
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground/50 max-w-3xl leading-relaxed">
            UNIS提供全渠道履约服务；Item构建驱动UNIS及更广泛业务的技术平台。
          </p>
        </AnimatedSection>

        {/* Two-column layout: UNIS | Item */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* UNIS side */}
          <AnimatedSection direction="left">
            <GlowCard className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <Warehouse className="w-8 h-8 text-cyan-glow" />
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">UNIS</h3>
                  <p className="text-xs text-muted-foreground/50">www.unisco.com</p>
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-1">
                <span className="font-semibold text-cyan-glow">Omni-channel fulfillment on-time and in-full.</span> UNIS started serving Lenovo since 2019 at Memphis, US. UNIS helps leading CPG manufacturers from electronics to apparel achieve omni-channel fulfillment by tapping into a national footprint strategically designed to reach 98% of consumers with same-or next-day service.
              </p>
              <p className="text-xs text-muted-foreground/40 leading-relaxed mb-5">
                全渠道准时足量履约。UNIS自2019年起在美国孟菲斯为联想提供服务，帮助领先的消费品制造商实现全渠道履约，覆盖98%的消费者实现当日或次日达。
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {unisStats.map((s) => (
                  <div key={s.label} className="p-3 rounded-lg bg-secondary/30 text-center">
                    <p className="text-xl font-bold text-cyan-glow font-mono">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    <p className="text-[10px] text-muted-foreground/30">{s.labelCn}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {unisHighlights.map((h) => (
                  <div key={h.text} className="flex items-start gap-2.5">
                    <h.icon className="w-4 h-4 text-cyan-glow/70 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-foreground/70">{h.text}</p>
                      <p className="text-[10px] text-muted-foreground/30">{h.textCn}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer logos */}
              <div className="mt-5 pt-4 border-t border-panel-border/30">
                <p className="text-[10px] text-muted-foreground/40 font-mono tracking-wider mb-3">KEY CUSTOMERS</p>
                <div className="flex items-center gap-5 flex-wrap">
                  {customerLogos.map((logo) => (
                    <img
                      key={logo.name}
                      src={logo.url}
                      alt={logo.name}
                      className="h-5 opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                    />
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Item side */}
          <AnimatedSection direction="right">
            <GlowCard glowColor="purple" className="p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <img src={ITEM_LOGO} alt="Item" className="h-8" />
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-1">
                <span className="font-semibold text-purple-glow">Item builds the technology platform that powers UNIS and beyond.</span> Item enables logistics enterprises to evolve through three stages — from digital operations, to AI-driven intelligence, to warehouse automation.
              </p>
              <p className="text-xs text-muted-foreground/40 leading-relaxed mb-5">
                Item构建驱动UNIS及更广泛业务的技术平台。Item帮助物流企业通过三个阶段实现演进——从数字化运营，到AI驱动的智能化，再到仓库自动化。
              </p>

              {/* Three stages */}
              <div className="space-y-4 mb-5">
                {itemStages.map((stage) => (
                  <div key={stage.title} className="p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${stage.color === "cyan" ? "bg-cyan-glow/10" : "bg-purple-glow/10"}`}>
                        <stage.icon className={`w-4 h-4 ${stage.color === "cyan" ? "text-cyan-glow" : "text-purple-glow"}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{stage.title}</p>
                        <p className="text-[10px] text-muted-foreground/30">{stage.titleCn}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                    <p className="text-[10px] text-muted-foreground/30 leading-relaxed mt-1">{stage.descCn}</p>
                  </div>
                ))}
              </div>

              {/* Partner logos */}
              <div className="pt-4 border-t border-panel-border/30">
                <p className="text-[10px] text-muted-foreground/40 font-mono tracking-wider mb-3">TECHNOLOGY & ROBOTICS PARTNERS</p>
                <div className="flex items-center gap-5 flex-wrap">
                  {partnerLogos.map((logo) => (
                    <img
                      key={logo.name}
                      src={logo.url}
                      alt={logo.name}
                      className="h-5 opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                    />
                  ))}
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
