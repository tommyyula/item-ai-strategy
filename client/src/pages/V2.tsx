import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import CountUp from "@/components/CountUp";

const ITEM_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/image8_1a8f9bd6.png";
const FASHIONNOVA_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/117473971/wztBmWBqjqhmduNs.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/v2-hero-partnership-koDv4r3sxSUJryrdd8KhBs.webp";
const ROI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/117473971/h7qedRhtoqj5LJqKjV6TsA/v2-roi-infographic-Wh2rnNZyPQZSQ4yxcLS8jF.webp";

/* ─── Side Nav ─── */
const sections = [
  { id: "v2-hero", label: "00", title: "Cover" },
  { id: "v2-opportunity", label: "01", title: "Opportunity 机遇" },
  { id: "v2-model", label: "02", title: "Business Model 模式" },
  { id: "v2-infra", label: "03", title: "Infrastructure 基础设施" },
  { id: "v2-roi", label: "04", title: "ROI Analysis ROI分析" },
  { id: "v2-verticals", label: "05", title: "Verticals 垂直领域" },
  { id: "v2-proposal", label: "06", title: "Engagement 合作方案" },
  { id: "v2-next", label: "07", title: "Next Steps 下一步" },
];

function V2SideNav() {
  const [active, setActive] = useState("v2-hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(sorted[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -10% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 h-screen z-50 hidden lg:flex flex-col items-center justify-center w-16 gap-1">
      <div className="flex flex-col items-center gap-1 py-4 px-2 rounded-r-lg bg-deep-space/80 backdrop-blur-md border-r border-t border-b border-panel-border/30">
        {sections.map(({ id, label, title }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300"
            title={title}
          >
            {active === id && (
              <motion.div
                layoutId="v2-nav-active"
                className="absolute inset-0 rounded-md bg-cyan-glow/15 border border-cyan-glow/40"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`relative z-10 text-xs font-mono font-medium transition-colors duration-300 ${active === id ? "text-cyan-glow" : "text-muted-foreground group-hover:text-foreground"}`}>
              {label}
            </span>
            <div className="absolute left-full ml-3 px-2.5 py-1 rounded bg-panel-bg border border-panel-border text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-body">
              {title}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}

/* ─── Section Title ─── */
function V2SectionTitle({ number, titleEn, titleCn, subtitleEn, subtitleCn }: {
  number: string; titleEn: string; titleCn?: string; subtitleEn?: string; subtitleCn?: string;
}) {
  return (
    <AnimatedSection className="mb-12">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <img src={ITEM_LOGO} alt="Item" className="h-5 opacity-50" />
          <span className="text-muted-foreground/40 text-sm">×</span>
          <img src={FASHIONNOVA_LOGO} alt="Fashion Nova" className="h-5 opacity-50 bg-white rounded px-1 py-0.5" />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-sm text-cyan-glow/70 tracking-widest uppercase">{number}</span>
        <div className="h-px w-12 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight font-display">
        {titleEn}
      </h2>
      {titleCn && (
        <p className="mt-2 text-lg md:text-xl text-muted-foreground/60 font-light tracking-wide">{titleCn}</p>
      )}
      {subtitleEn && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">{subtitleEn}</p>
      )}
      {subtitleCn && (
        <p className="mt-1.5 text-sm text-muted-foreground/50 max-w-3xl leading-relaxed">{subtitleCn}</p>
      )}
    </AnimatedSection>
  );
}

/* ─── Main V2 Page ─── */
export default function V2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <V2SideNav />

      {/* ═══ SECTION 00: HERO ═══ */}
      <section id="v2-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-6 mb-8">
              <img src={ITEM_LOGO} alt="Item" className="h-10 md:h-14" />
              <span className="text-3xl md:text-4xl text-cyan-glow/60 font-light">×</span>
              <img src={FASHIONNOVA_LOGO} alt="Fashion Nova" className="h-10 md:h-14 bg-white rounded px-3 py-1" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-display">
              <span className="bg-gradient-to-r from-cyan-glow via-foreground to-purple-glow bg-clip-text text-transparent">
                Strategic Partnership
              </span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-muted-foreground/60 font-light">战略合作伙伴提案</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bundling Fashion Nova hardware with Item's AI platform to unlock new revenue streams across e-commerce, supply chain, and warehouse automation verticals.
            </p>
            <p className="mt-2 text-sm text-muted-foreground/50">
              将Fashion Nova硬件与Item AI平台捆绑，在电商、供应链和仓储自动化领域开拓新的收入渠道。
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground/60">
              <span className="font-mono">AI Infrastructure</span>
              <span className="text-cyan-glow/40">|</span>
              <span className="font-mono">GPU Compute</span>
              <span className="text-cyan-glow/40">|</span>
              <span className="font-mono">Co-Hosting</span>
              <span className="text-cyan-glow/40">|</span>
              <span className="font-mono">Joint Go-to-Market</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SECTION 01: THE OPPORTUNITY ═══ */}
      <section id="v2-opportunity" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="01"
            titleEn="The Opportunity"
            titleCn="市场机遇"
            subtitleEn="Mid-market enterprises need AI infrastructure but lack the expertise to build and operate it. Item bridges this gap — and Fashion Nova's hardware completes the stack."
            subtitleCn="中端企业需要AI基础设施，但缺乏构建和运营的专业能力。Item填补了这一空白，而Fashion Nova的硬件则完善了整个技术栈。"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <AnimatedSection delay={0.1}>
              <GlowCard className="p-8 h-full">
                <div className="text-cyan-glow font-mono text-sm mb-3">MARKET GAP</div>
                <h3 className="text-xl font-bold font-display mb-3">The Build vs. Buy Dilemma</h3>
                <p className="text-sm text-muted-foreground/60 mb-4">构建还是购买的两难</p>
                <p className="text-muted-foreground leading-relaxed">
                  Cloud AI costs are spiraling — $860K/year for a typical e-commerce brand running multi-model inference. 
                  Private infrastructure cuts this by 85%, but most companies cannot design, procure, or operate GPU clusters.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/50">
                  云端AI成本持续攀升——一个典型电商品牌运行多模型推理每年需$860K。私有化部署可降低85%成本，但大多数企业无力自建GPU集群。
                </p>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlowCard className="p-8 h-full" glowColor="purple">
                <div className="text-purple-glow font-mono text-sm mb-3">PROVEN TRACK RECORD</div>
                <h3 className="text-xl font-bold font-display mb-3">Item + UNIS Since 2019</h3>
                <p className="text-sm text-muted-foreground/60 mb-4">Item + UNIS 自2019年起服务Fashion Nova</p>
                <p className="text-muted-foreground leading-relaxed">
                  UNIS has served Fashion Nova since 2019 at Memphis, processing 100M+ orders/year with Item as the technology backbone. 
                  This existing relationship provides a natural foundation for deeper strategic collaboration.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/50">
                  UNIS自2019年起在Memphis为Fashion Nova提供服务，每年处理1亿+订单，Item作为技术底座。这一现有关系为更深层战略合作奠定了天然基础。
                </p>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlowCard className="p-8 h-full">
                <div className="text-cyan-glow font-mono text-sm mb-3">NEW REVENUE</div>
                <h3 className="text-xl font-bold font-display mb-3">Hardware-Attached Software</h3>
                <p className="text-sm text-muted-foreground/60 mb-4">硬件绑定软件的新收入模式</p>
                <p className="text-muted-foreground leading-relaxed">
                  Every AI infrastructure deployment Item sells requires GPU servers, networking, and edge devices. 
                  Fashion Nova becomes the preferred hardware vendor — creating a recurring sales channel through Item's growing customer base.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/50">
                  Item每一个AI基础设施部署都需要GPU服务器、网络和边缘设备。Fashion Nova成为首选硬件供应商——通过Item不断增长的客户群创造持续销售渠道。
                </p>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 02: BUSINESS MODEL ═══ */}
      <section id="v2-model" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="02"
            titleEn="The Business Model"
            titleCn="商业模式"
            subtitleEn="A three-layer value stack where Fashion Nova provides the foundation, Item delivers the intelligence, and customers get turnkey AI."
            subtitleCn="三层价值栈：Fashion Nova提供基础层，Item交付智能层，客户获得交钥匙AI解决方案。"
          />

          <AnimatedSection delay={0.1}>
            <div className="relative mt-8">
              {/* Three-layer stack visualization */}
              <div className="space-y-4 max-w-4xl mx-auto">
                {/* Layer 3 - Customer */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-lg border border-cyan-glow/30 bg-gradient-to-r from-cyan-glow/5 to-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-2xl font-bold font-mono text-cyan-glow">L3</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display">Customer Application Layer</h3>
                      <p className="text-sm text-muted-foreground/60">客户应用层</p>
                      <p className="mt-2 text-muted-foreground">
                        5 AI Pillars: Data Intelligence, Product Discovery, Customer Experience, Advertising Optimization, Operations Automation
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/50">
                        五大AI支柱：数据智能、产品发现、客户体验、广告优化、运营自动化
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-cyan-glow">REVENUE</div>
                      <div className="text-xs text-muted-foreground">SaaS + Consulting</div>
                    </div>
                  </div>
                </motion.div>

                {/* Layer 2 - Item AI */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-lg border border-purple-glow/30 bg-gradient-to-r from-purple-glow/5 to-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-purple-glow/10 border border-purple-glow/30 flex items-center justify-center text-2xl font-bold font-mono text-purple-glow">L2</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display">Item AI Platform Layer</h3>
                      <p className="text-sm text-muted-foreground/60">Item AI平台层</p>
                      <p className="mt-2 text-muted-foreground">
                        Ontology modeling, Agent orchestration, GraphRAG, WES integration, Multi-agent runtime with business harness
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/50">
                        本体建模、Agent编排、GraphRAG、WES集成、带业务Harness的多Agent运行时
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-purple-glow">ITEM</div>
                      <div className="text-xs text-muted-foreground">Software + AI</div>
                    </div>
                  </div>
                </motion.div>

                {/* Layer 1 - Fashion Nova Hardware */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-lg border border-cyan-glow/50 bg-gradient-to-r from-cyan-glow/10 to-purple-glow/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-cyan-glow/15 border border-cyan-glow/40 flex items-center justify-center text-2xl font-bold font-mono text-cyan-glow">L1</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display">Fashion Nova Hardware Foundation</h3>
                      <p className="text-sm text-muted-foreground/60">Fashion Nova硬件基础层</p>
                      <p className="mt-2 text-muted-foreground">
                        ThinkSystem GPU servers (8× H100 80GB SXM), NVLink 4.0, edge inference devices, 5.5G/Wi-Fi 8 networking, co-location at One Wilshire LA
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/50">
                        ThinkSystem GPU服务器（8×H100 80GB SXM）、NVLink 4.0、边缘推理设备、5.5G/Wi-Fi 8网络、One Wilshire LA托管
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-cyan-glow">Fashion Nova</div>
                      <div className="text-xs text-muted-foreground">Hardware + Infra</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Arrows between layers */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/20 via-purple-glow/20 to-cyan-glow/20 hidden md:block" />
            </div>
          </AnimatedSection>

          {/* Value for each party */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <AnimatedSection delay={0.2}>
              <GlowCard className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img src={FASHIONNOVA_LOGO} alt="Fashion Nova" className="h-6 bg-white rounded px-2 py-0.5" />
                  <h3 className="text-lg font-bold font-display">Value for Fashion Nova</h3>
                </div>
                <p className="text-sm text-muted-foreground/60 mb-4">Fashion Nova获得的价值</p>
                <ul className="space-y-3">
                  {[
                    { en: "New hardware sales channel through Item's 1,200+ enterprise customers", cn: "通过Item 1200+企业客户开拓新的硬件销售渠道" },
                    { en: "Recurring revenue from co-location and managed infrastructure services", cn: "来自托管和基础设施管理服务的持续收入" },
                    { en: "Reference cases in high-growth AI infrastructure vertical", cn: "在高增长AI基础设施垂直领域的标杆案例" },
                    { en: "Edge device deployment at scale (warehouse, logistics, retail)", cn: "大规模边缘设备部署（仓储、物流、零售）" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-glow shrink-0" />
                      <div>
                        <span className="text-foreground/90">{item.en}</span>
                        <p className="text-xs text-muted-foreground/50 mt-0.5">{item.cn}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GlowCard className="p-8" glowColor="purple">
                <div className="flex items-center gap-3 mb-4">
                  <img src={ITEM_LOGO} alt="Item" className="h-6" />
                  <h3 className="text-lg font-bold font-display">Value for Item</h3>
                </div>
                <p className="text-sm text-muted-foreground/60 mb-4">Item获得的价值</p>
                <ul className="space-y-3">
                  {[
                    { en: "Preferred pricing on Fashion Nova ThinkSystem servers and edge devices", cn: "Fashion Nova ThinkSystem服务器和边缘设备的优惠价格" },
                    { en: "Complete solution offering: software + hardware in one proposal", cn: "完整解决方案：一个提案中包含软件+硬件" },
                    { en: "Co-marketing and joint go-to-market with Fashion Nova brand", cn: "与Fashion Nova品牌的联合营销和市场推广" },
                    { en: "Access to Fashion Nova's enterprise customer network for cross-selling", cn: "接入Fashion Nova企业客户网络进行交叉销售" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-glow shrink-0" />
                      <div>
                        <span className="text-foreground/90">{item.en}</span>
                        <p className="text-xs text-muted-foreground/50 mt-0.5">{item.cn}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 03: INFRASTRUCTURE SPEC ═══ */}
      <section id="v2-infra" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="03"
            titleEn="AI Infrastructure Blueprint"
            titleCn="AI基础设施蓝图"
            subtitleEn="A reference architecture for private AI infrastructure co-hosted at One Wilshire, Los Angeles — the premier interconnection hub on the US West Coast."
            subtitleCn="在美国西海岸首要互联枢纽——洛杉矶One Wilshire托管的私有AI基础设施参考架构。"
          />

          {/* Server Spec Card */}
          <AnimatedSection delay={0.1}>
            <GlowCard className="p-8 mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyan-glow animate-pulse" />
                <h3 className="text-xl font-bold font-display">Reference Configuration</h3>
                <span className="text-sm text-muted-foreground/60 ml-2">参考配置</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "GPU", value: "8× H100 80GB SXM", detail: "640GB total GPU memory", detailCn: "640GB GPU总显存" },
                  { label: "Interconnect", value: "NVLink 4.0 + NVSwitch", detail: "900 GB/s bidirectional", detailCn: "900 GB/s双向带宽" },
                  { label: "Network", value: "400GbE InfiniBand", detail: "RDMA-capable fabric", detailCn: "支持RDMA的网络架构" },
                  { label: "Location", value: "One Wilshire, LA", detail: "Premier IX hub, <1ms latency", detailCn: "顶级IX枢纽，<1ms延迟" },
                ].map((spec, i) => (
                  <div key={i} className="p-4 rounded-lg bg-deep-space/60 border border-panel-border/30">
                    <div className="text-xs font-mono text-cyan-glow/70 mb-2">{spec.label}</div>
                    <div className="text-lg font-bold font-display">{spec.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{spec.detail}</div>
                    <div className="text-xs text-muted-foreground/50">{spec.detailCn}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-cyan-glow/5 border border-cyan-glow/20">
                <p className="text-sm text-muted-foreground">
                  <span className="text-cyan-glow font-mono font-bold">Fashion Nova Opportunity:</span>{" "}
                  Replace Dell PowerEdge XE9680 with Fashion Nova ThinkSystem SR675 V3 — equivalent 8×H100 configuration with Fashion Nova's enterprise support, XClarity management, and competitive pricing.
                </p>
                <p className="text-xs text-muted-foreground/50 mt-1">
                  <span className="text-cyan-glow/70 font-mono font-bold">Fashion Nova机会：</span>{" "}
                  用Fashion Nova ThinkSystem SR675 V3替代Dell PowerEdge XE9680——同箉8×H100配置，加上Fashion Nova企业级支持、XClarity管理和有竞争力的价格。
                </p>
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Security & Governance */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "🔒", titleEn: "Network Security", titleCn: "网络安全", descEn: "Private VLAN isolation, hardware firewall, encrypted tunnels between customer VPC and co-located servers. SOC 2 Type II compliant facility.", descCn: "私有VLAN隔离、硬件防火墙、客户VPC与托管服务器间的加密隧道。SOC 2 Type II合规设施。" },
              { icon: "📋", titleEn: "Data Governance", titleCn: "数据治理", descEn: "Customer data never leaves the private cluster. Full audit logging, role-based access control, and automated compliance reporting.", descCn: "客户数据永不离开私有集群。完整审计日志、基于角色的访问控制和自动合规报告。" },
              { icon: "⚡", titleEn: "Infrastructure SLA", titleCn: "基础设施SLA", descEn: "99.95% uptime guarantee. Redundant power (N+1), cooling, and network paths. 24/7 remote hands support at One Wilshire.", descCn: "99.95%正常运行时间保证。冗余电源（N+1）、冷却和网络路径。One Wilshire 24/7远程支持。" },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                <GlowCard className="p-6 h-full" glowColor={i === 0 ? "cyan" : "purple"}>
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-lg font-bold font-display">{card.titleEn}</h3>
                  <p className="text-sm text-muted-foreground/60 mb-3">{card.titleCn}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.descEn}</p>
                  <p className="text-xs text-muted-foreground/50 mt-2">{card.descCn}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 04: ROI ANALYSIS ═══ */}
      <section id="v2-roi" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="04"
            titleEn="ROI Analysis"
            titleCn="投资回报分析"
            subtitleEn="Private AI infrastructure delivers dramatic cost savings compared to cloud — with better performance, data sovereignty, and predictable costs."
            subtitleCn="与云端相比，私有AI基础设施在成本、性能、数据主权和成本可预测性方面具有显著优势。"
          />

          {/* Cost Comparison Image */}
          <AnimatedSection delay={0.1}>
            <div className="mt-8 rounded-xl overflow-hidden border border-panel-border/40">
              <img src={ROI_IMG} alt="Cloud vs Private AI Infrastructure Cost Comparison" className="w-full" />
            </div>
          </AnimatedSection>

          {/* ROI Scenarios */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { scenario: "Conservative", scenarioCn: "保守", roi: 195, color: "text-muted-foreground", borderColor: "border-panel-border/40" },
              { scenario: "Base Case", scenarioCn: "基准", roi: 425, color: "text-cyan-glow", borderColor: "border-cyan-glow/40" },
              { scenario: "Optimistic", scenarioCn: "乐观", roi: 793, color: "text-purple-glow", borderColor: "border-purple-glow/40" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                <GlowCard className={`p-8 text-center ${item.borderColor}`} glowColor={i === 2 ? "purple" : "cyan"}>
                  <div className="text-sm font-mono text-muted-foreground/70 mb-2">{item.scenario}</div>
                  <div className="text-xs text-muted-foreground/50 mb-4">{item.scenarioCn}</div>
                  <div className={`text-4xl md:text-5xl font-bold font-display ${item.color}`}>
                    $<CountUp end={item.roi} duration={2} />K
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Year 1 Net Value</div>
                  <div className="text-xs text-muted-foreground/50">第一年净价值</div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Key metrics */}
          <AnimatedSection delay={0.4}>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Cloud Cost / Year", labelCn: "云端年成本", value: "$860K", accent: false },
                { label: "Private Cost / Year", labelCn: "私有年成本", value: "$133K", accent: true },
                { label: "Cost Reduction", labelCn: "成本降低", value: "85%", accent: true },
                { label: "Payback Period", labelCn: "回收周期", value: "< 6 mo", accent: false },
              ].map((metric, i) => (
                <div key={i} className="p-4 rounded-lg bg-panel-bg/60 border border-panel-border/30 text-center">
                  <div className={`text-2xl font-bold font-display ${metric.accent ? "text-cyan-glow" : ""}`}>{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground/50">{metric.labelCn}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 05: TARGET VERTICALS ═══ */}
      <section id="v2-verticals" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="05"
            titleEn="Target Verticals"
            titleCn="目标垂直领域"
            subtitleEn="Five high-growth verticals where Item's AI platform + Fashion Nova hardware creates a compelling bundled offering."
            subtitleCn="五个高增长垂直领域，Item AI平台+Fashion Nova硬件构成极具吸引力的捆绑方案。"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🛒", titleEn: "E-commerce AI", titleCn: "电商AI",
                descEn: "Content generation, SEO optimization, product discovery, customer support automation. Proven with Sportspower/TruJump deployment.",
                descCn: "内容生成、SEO优化、产品发现、客服自动化。已在Sportspower/TruJump部署中验证。",
                hardware: "1× ThinkSystem SR675 V3 (8×H100)",
              },
              {
                icon: "🚛", titleEn: "Supply Chain AI", titleCn: "供应链AI",
                descEn: "Shipping document processing, customs compliance agents, carrier relationship management, drayage pricing optimization.",
                descCn: "运输文件处理、海关合规Agent、承运商关系管理、拖车定价优化。",
                hardware: "Edge servers + Cloud GPU burst",
              },
              {
                icon: "🤖", titleEn: "Warehouse Automation", titleCn: "仓储自动化",
                descEn: "WES orchestration, AMR/AS-RS integration, real-time slotting optimization, vision AI for quality inspection.",
                descCn: "WES编排、AMR/AS-RS集成、实时库位优化、视觉AI质量检测。",
                hardware: "Edge NPU + ThinkEdge SE450",
              },
              {
                icon: "🎙️", titleEn: "Multi-Agent Systems", titleCn: "多Agent系统",
                descEn: "LPM-based real-time conversational AI for conference calls. 4-agent live call requires 17-22× H100 GPUs — massive hardware demand.",
                descCn: "基于LPM的实时对话AI会议系统。4个Agent实时通话需17-22×H100 GPU——巨大的硬件需求。",
                hardware: "3× ThinkSystem SR675 V3 cluster",
              },
              {
                icon: "🏪", titleEn: "Edge AI for Retail", titleCn: "零售边缘AI",
                descEn: "In-store analytics, inventory tracking, customer behavior analysis, smart checkout. Requires distributed edge compute.",
                descCn: "店内分析、库存追踪、客户行为分析、智能结账。需要分布式边缘计算。",
                hardware: "ThinkEdge SE30/SE50 fleet",
              },
              {
                icon: "📊", titleEn: "Data Intelligence", titleCn: "数据智能",
                descEn: "Enterprise knowledge graphs, GraphRAG pipelines, ontology-driven analytics, real-time business intelligence dashboards.",
                descCn: "企业知识图谱、GraphRAG管道、本体驱动分析、实时商业智能仪表盘。",
                hardware: "ThinkSystem SR650 V3 + GPU",
              },
            ].map((vertical, i) => (
              <AnimatedSection key={i} delay={0.08 * (i + 1)}>
                <GlowCard className="p-6 h-full" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                  <div className="text-3xl mb-3">{vertical.icon}</div>
                  <h3 className="text-lg font-bold font-display">{vertical.titleEn}</h3>
                  <p className="text-sm text-muted-foreground/60 mb-3">{vertical.titleCn}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{vertical.descEn}</p>
                  <p className="text-xs text-muted-foreground/50 mt-2">{vertical.descCn}</p>
                  <div className="mt-4 pt-3 border-t border-panel-border/30">
                    <div className="text-xs font-mono text-cyan-glow/70">Fashion Nova HARDWARE</div>
                    <div className="text-sm text-foreground/80 mt-1">{vertical.hardware}</div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 06: ENGAGEMENT MODEL ═══ */}
      <section id="v2-proposal" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="06"
            titleEn="Engagement Model"
            titleCn="合作方案"
            subtitleEn="A proven two-phase engagement: Forward Deployment for rapid value demonstration, followed by a tiered Monthly Retainer for ongoing optimization."
            subtitleCn="经过验证的两阶段合作模式：前置部署快速展示价值，随后分层月度服务持续优化。"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Phase 1 */}
            <AnimatedSection delay={0.1}>
              <GlowCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-lg font-bold font-mono text-cyan-glow">1</div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Forward Deployment</h3>
                    <p className="text-sm text-muted-foreground/60">前置部署</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded bg-deep-space/60 border border-panel-border/30">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration 周期</span>
                      <span className="font-mono text-cyan-glow">520 hours</span>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-deep-space/60 border border-panel-border/30">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Fixed Fee 固定费用</span>
                      <span className="font-mono text-cyan-glow">$107,800</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicated team embeds with the customer to deploy AI infrastructure, configure models, build initial agent workflows, and validate ROI metrics.
                  </p>
                  <p className="text-xs text-muted-foreground/50">
                    专属团队嵌入客户现场，部署AI基础设施、配置模型、构建初始Agent工作流并验证ROI指标。
                  </p>
                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Phase 2 */}
            <AnimatedSection delay={0.2}>
              <GlowCard className="p-8 h-full" glowColor="purple">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-glow/10 border border-purple-glow/30 flex items-center justify-center text-lg font-bold font-mono text-purple-glow">2</div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Monthly Retainer</h3>
                    <p className="text-sm text-muted-foreground/60">月度服务</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { tier: "Foundation", tierCn: "基础层", price: "$3,500/mo", desc: "Monitoring + basic support" },
                    { tier: "Growth", tierCn: "成长层", price: "$7,500/mo", desc: "Active optimization + new agents" },
                    { tier: "Enterprise", tierCn: "企业层", price: "$11,500/mo", desc: "Full managed service + SLA" },
                  ].map((t, i) => (
                    <div key={i} className="p-3 rounded bg-deep-space/60 border border-panel-border/30">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm font-bold">{t.tier}</span>
                          <span className="text-xs text-muted-foreground/50 ml-2">{t.tierCn}</span>
                        </div>
                        <span className="font-mono text-purple-glow">{t.price}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{t.desc}</div>
                    </div>
                  ))}
                  <div className="mt-4 p-3 rounded bg-purple-glow/5 border border-purple-glow/20">
                    <div className="text-sm text-muted-foreground">
                      <span className="text-purple-glow font-mono font-bold">Year 1 Total:</span> $466K – $562K depending on tier
                    </div>
                    <div className="text-xs text-muted-foreground/50 mt-1">第一年总计：$466K – $562K（视层级而定）</div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ═══ SECTION 07: NEXT STEPS ═══ */}
      <section id="v2-next" className="py-24 lg:py-32 lg:pl-20">
        <div className="container">
          <V2SectionTitle
            number="07"
            titleEn="Next Steps"
            titleCn="下一步"
          />

          <div className="max-w-3xl">
            <div className="space-y-6">
              {[
                { step: "01", titleEn: "Technical Deep-Dive", titleCn: "技术深度交流", descEn: "Joint workshop between Item engineering and Fashion Nova ISG team to align on ThinkSystem configurations, pricing tiers, and co-location logistics.", descCn: "Item工程团队与Fashion Nova ISG团队联合研讨，对齐ThinkSystem配置、价格层级和托管物流。" },
                { step: "02", titleEn: "Pilot Customer Selection", titleCn: "试点客户选择", descEn: "Identify 2-3 pilot customers from Item's existing pipeline for the first joint deployment — ideally one e-commerce and one supply chain vertical.", descCn: "从Item现有客户管道中选择2-3个试点客户进行首次联合部署——理想情况下一个电商和一个供应链客户。" },
                { step: "03", titleEn: "Joint Go-to-Market Plan", titleCn: "联合市场推广计划", descEn: "Co-develop marketing materials, case studies, and a joint value proposition for mid-market enterprises seeking AI infrastructure.", descCn: "共同开发营销材料、案例研究和面向寻求AI基础设施的中端企业的联合价值主张。" },
                { step: "04", titleEn: "Partnership Agreement", titleCn: "合作协议", descEn: "Formalize the strategic partnership with preferred pricing, co-marketing commitments, and revenue-sharing framework.", descCn: "以优惠价格、联合营销承诺和收入分成框架正式确立战略合作伙伴关系。" },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-lg bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-lg font-bold font-mono text-cyan-glow shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display">{item.titleEn}</h3>
                      <p className="text-sm text-muted-foreground/60 mb-2">{item.titleCn}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.descEn}</p>
                      <p className="text-xs text-muted-foreground/50 mt-1">{item.descCn}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-6 mb-6">
                <img src={ITEM_LOGO} alt="Item" className="h-8" />
                <span className="text-2xl text-cyan-glow/60 font-light">×</span>
                <img src={FASHIONNOVA_LOGO} alt="Fashion Nova" className="h-8 bg-white rounded px-2 py-1" />
              </div>
              <p className="text-2xl md:text-3xl font-bold font-display bg-gradient-to-r from-cyan-glow to-purple-glow bg-clip-text text-transparent">
                From Supply Chain Partner to Strategic AI Alliance
              </p>
              <p className="mt-2 text-lg text-muted-foreground/60">
                从供应链合作伙伴到战略AI联盟
              </p>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The infrastructure layer is the new battleground. Together, we can own the mid-market AI infrastructure stack — 
                Fashion Nova's hardware excellence paired with Item's AI platform creates a moat that neither can build alone.
              </p>
              <p className="mt-2 text-sm text-muted-foreground/50 max-w-2xl mx-auto">
                基础设施层是新的战场。Fashion Nova的硬件卓越性与Item的AI平台相结合，构建起任何一方都无法独自建立的护城河。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  );
}
