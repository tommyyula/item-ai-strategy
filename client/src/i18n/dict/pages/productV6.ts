import type { LocalePack } from "../index";

/**
 * ITEM AI — Product Overview (V6).
 *
 * `en` is the reference shape: every other locale is typed against `typeof en`,
 * so a missing or misspelled key is a compile error rather than a silent
 * English fallback at runtime.
 *
 * Product names (ItemGPT, ITEM.Claw …), company names, metrics and money
 * figures are locale-invariant and live in the component as constants. English
 * product taglines are treated the same way the source deck treats them — one
 * brand line, unchanged in every locale.
 */

const en = {
  nav: { label: "Sections", story: "Story", platform: "Platform", products: "Products" },

  hero: {
    badge: "Product Overview · Supply Chain AI OS · 2026",
    title: {
      lead: "The AI-Native ",
      accent: "Operating System",
      tail: " for the Physical Economy",
    },
    subtitle:
      "ITEM AI replaces fragmented supply-chain software with a single ontology-driven enterprise AI operating system — uniting humans + AI + robots + operations across transportation, warehousing, logistics, commerce and industrial automation.",
    stats: {
      aiProducts: "AI Core Products",
      coreLayers: "Core Layers",
      pilot: "Weeks to pilot",
      exceptions: "Exception automation",
    },
    tagline: "One platform · multiple expansion vectors",
  },

  problem: {
    eyebrow: "The Problem",
    title: "Global supply chains run on fragmented systems",
    lede: "One vendor for TMS, another for WMS, another for OMS; robotics software, visibility, analytics and AI copilots all live apart, with workflows severed between them. Enterprises pay three hidden taxes for this, every year.",
    taxes: {
      compliance: {
        kicker: "Hidden Tax 01",
        headline: "Compliance",
        title: "The Compliance Tax",
        body: "Chargebacks, OTIF penalties, audits, permits, claims, SLA failures — errors happen in the seams between systems.",
      },
      data: {
        kicker: "Hidden Tax 02",
        headline: "Data",
        title: "The Data Tax",
        body: "Inaccurate forecasts, siloed systems, poor visibility, delayed decisions — the data exists but never becomes action.",
      },
      operations: {
        kicker: "Hidden Tax 03",
        headline: "Operations",
        title: "The Operations Tax",
        body: "Manual workflows, labor inefficiency, costly orchestration — people doing the work software should be doing.",
      },
    },
    note: {
      figure: "Millions to tens of millions",
      body: 'Large enterprises spend millions to tens of millions per year on fragmented systems just to "operate." The market is shifting from Software of Record to Software of Action.',
    },
  },

  category: {
    eyebrow: "The Category",
    title: { lead: "Not more tools — ", accent: "an operating system", tail: "" },
    lede: "ITEM AI is not a catalog of 81 products. It is one platform with a layered expansion strategy: a category-defining operating system with multiple expansion vectors.",
    old: {
      title: "No longer · fragmented point tools",
      items: [
        "OMS + TMS + WMS + WES + WCS, each in its own silo",
        "Robotics software runs standalone",
        "Visibility and analytics disconnected",
        "AI copilots that suggest but cannot execute",
        "Rules and tribal knowledge live in senior operators' heads",
      ],
    },
    next: {
      title: "Instead · one unified operating system",
      items: [
        "Spanning transport, warehouse, yard, inventory, robotics",
        "Workforce, planning, compliance, intelligence on one plane",
        "One ontology driving consistent, executable intelligence",
        "Decisions become governed, automated actions",
        "Humans + AI + robots coordinated in one runtime",
      ],
    },
    thesis: {
      lead: "ITEM AI = the ",
      accent: "Enterprise AI Operating System",
      tail: " for physical supply chains.",
      line2: "One ontology-driven AI OS, replacing fragmented enterprise software.",
    },
  },

  stack: {
    eyebrow: "The Platform",
    title: "The ITEM Stack — the platform on one page",
    lede: "A seven-layer stack, top to bottom. Each layer is a moat on its own; together they form an operating system no point solution can displace.",
    layers: {
      applications: {
        name: "Applications",
        detail: "TMS · WMS · OMS · YMS · WES · WCS · Control Tower",
        tag: "Revenue products",
      },
      ai: {
        name: "AI Layer",
        detail: "ITEM.GPT · ITEM.Claw · ITEM.Predict · ITEM.Sense",
        tag: "Core revenue",
      },
      foundry: {
        name: "Enterprise Operations Platform",
        detail: "Data integration · App builder · Workflow orchestration · Digital twin",
        tag: "PaaS",
      },
      aip: {
        name: "AI Runtime",
        detail: "Multi-model orchestration · Agent runtime · Governance & audit",
        tag: "Strategic platform",
      },
      ontology: {
        name: "Operational Intelligence / Semantic Layer",
        detail: "Knowledge graph · Digital twin · Rules engine · Single source of truth",
        tag: "Moat · never sold alone",
      },
      harness: {
        name: "Deployment Layer",
        detail: "CI/CD · Cloud / on-prem / air-gapped / edge · Compliance & rollback",
        tag: "Enterprise infra",
      },
      infrastructure: {
        name: "Infrastructure",
        detail: "Private Stack · Cloud · Edge · GPU / NPU",
        tag: "IaaS",
      },
    },
    note: "Every operational decision depends on ITEM's business graph — ontology dependency makes the stack extraordinarily hard to rip out.",
  },

  systems: {
    eyebrow: "Five Core Layers",
    title: "Five Core Layers — each with a clear design purpose",
    lede: "Each system has a clear design purpose and commercial role. Everything else is a platform extension — not a new startup.",
    labels: { design: "Design:", purpose: "Purpose:", role: "Commercial role:" },
    cards: {
      ontology: {
        kicker: "01 · SYSTEM OF MEANING",
        badge: "The Moat",
        design:
          "a governed knowledge graph and real-time digital-twin layer defining business objects, relationships, logic, actions and dynamic rules.",
        purpose:
          "the single source of truth driving consistent, executable intelligence platform-wide — orders, shipments, containers, trucks, drivers, warehouses, robots and dock doors in one semantic model.",
        products: {
          studio: "DDD Modelling",
          executor: "Knowledge Graph & Retrieval",
        },
        caps: [
          "Object modeling",
          "Knowledge graph",
          "Rules engine",
          "Digital twin",
          "Semantic interop",
        ],
        role: "never sold standalone — bundled as the strategic moat layer that creates ontology dependency.",
      },
      foundry: {
        kicker: "02 · SYSTEM OF DATA & APPS",
        badge: "PaaS",
        design:
          "the ontology-powered enterprise operations platform — unifying heterogeneous data sources, low-code app builder, workflow orchestration and operational digital twins.",
        purpose:
          "orchestrate intelligent decisions across human + AI teams; the build-and-run substrate for OMS, TMS, WMS, YMS, WES, WCS and every business app.",
        products: { bi: "Data Platform", di: "Data Integration" },
        caps: [
          "Data integration",
          "App builder",
          "Event processing",
          "Pipelines",
          "Low-code",
        ],
        role: "PaaS — seat licenses · workflow execution · developer licenses · enterprise platform subscription.",
      },
      aios: {
        kicker: "03 · SYSTEM OF INTELLIGENCE",
        badge: "Bundled platform",
        design:
          "an AI-ready operating system for productivity, intelligence and value-chain decisions — unified operational workspace, real-time data fusion, embedded copilots, event orchestration.",
        purpose:
          "let humans + AI observe, predict, decide and optimize on one surface — the enterprise's real-time operational brain.",
        products: { runtime: "the agent execution layer" },
        caps: [
          "Decision intelligence",
          "Real-time analytics",
          "Enterprise search",
          "Copilot",
          "Human + AI teaming",
        ],
        role: "bundled platform layer shipped with every enterprise deployment, lifting total ACV.",
      },
      aip: {
        kicker: "04 · SYSTEM OF ACTION",
        badge: "Strategic platform",
        design:
          "the enterprise AI runtime — multi-model orchestration, agent runtime, autonomous workflows, human-in-the-loop governance, prompt/version management, observability and compliance audit.",
        purpose:
          "safely anchor LLMs and agents to real-world data and operational systems, turning decisions into auditable, reversible execution.",
        products: {
          gpt: "Multi-Agent Platform",
          flow: "Workflow",
          vision: "IoT, GIS & Vision Models",
        },
        caps: [
          "Multi-model orchestration",
          "Agent runtime",
          "Tool calling",
          "Governance",
          "Audit",
        ],
        role: "core platform product — SaaS licenses · usage-based compute · agent execution fees · FaaS billing.",
      },
      harness: {
        kicker: "05 · SYSTEM OF DELIVERY",
        badge: "Enterprise infra",
        design:
          "the continuous-delivery / autonomous-deployment platform — deploying, monitoring, updating and managing software in any environment (cloud, on-prem, air-gapped, edge) with canary releases, rollback and compliance monitoring built in.",
        purpose:
          "put mission-critical AI inside any customer boundary — the entry requirement for government, defense, healthcare and manufacturing, and the delivery engine behind Private Stack (sovereign AI cloud).",
        products: {
          ide: "Agent development environment",
          iam: "Enterprise identity & access",
          deploy: "Run anywhere, governed",
        },
        caps: [
          "CI/CD",
          "Air-gapped",
          "Edge",
          "Canary releases",
          "Rollback",
          "Environment governance",
        ],
        role: "enterprise infrastructure product, typically bundled into enterprise contracts; unlocks Private Stack's 2–3× ACV premium.",
      },
    },
  },

  products: {
    eyebrow: "AI Core Products",
    title: {
      lead: "22 AI Core Products: ",
      accent: "12 General Apps × 10 Industry Templates",
      tail: "",
    },
    lede: "12 general AI applications are reused across every industry — deciding, executing, predicting, visualizing, supporting, growing. 10 industry templates package vertical ontology, prebuilt workflows, compliance rules and connectors into pluggable solutions.",
    groups: {
      ontology: "System of Meaning",
      foundry: "System of Data & Apps",
      aios: "System of Intelligence",
      aip: "System of Action",
      apps: "Standalone AI Products",
    },
    items: {
      itemGpt: {
        tag: "AI for Every Decision. In Real Time.",
        desc: "Natural-language ops interface — converse to query, decide and act across the entire platform.",
      },
      itemDoc: {
        tag: "Documents That Process Themselves.",
        desc: "Document automation — intelligent reading, generation and archiving of contracts, invoices and reports.",
      },
      itemSense: {
        tag: "See Everything. Instantly.",
        desc: "Real-time visibility + digital-twin cockpit — one live picture of the entire network.",
      },
      itemPredict: {
        tag: "Predict What's Next.",
        desc: "General forecasting engine — demand, cash flow, footfall, resources. See the break before it happens.",
      },
      itemOpsAi: {
        tag: "Operations That Run Themselves.",
        desc: "Autonomous decisioning + continuous optimization — the brain of self-running operations.",
      },
      itemAudit: {
        tag: "Find What You're Losing.",
        desc: "Billing-error detection, compliance audit, cost recovery — claw back every dollar.",
      },
      itemVision: {
        tag: "See What Others Miss.",
        desc: "Computer vision — security, quality inspection, site monitoring, geospatial intelligence.",
      },
      itemVoice: {
        tag: "Operate Hands-Free.",
        desc: "Voice AI — the hands-free interface for frontline work and inbound calls.",
      },
      itemClaw: {
        tag: "Execution Without Friction.",
        desc: "Multi-agent workflow executor — turning decisions into governed actions, from suggestion to execution.",
      },
      itemFlow: {
        tag: "Design. Automate. Scale.",
        desc: "Visual AI workflow builder — approvals, routing, escalation, exceptions.",
      },
      itemSupport: {
        tag: "Every Channel. One Thread.",
        desc: "Omnichannel ticketing: email · messaging · SMS · phone — with full operational context and AI-drafted resolutions.",
      },
      itemGrow: {
        tag: "Pipeline That Never Sleeps.",
        desc: "GTM AI — SDR/BDR · SEO/AEO/GEO · content generation; ontology-driven intelligent outreach.",
      },
    },
    templates: {
      title: "Industry Templates",
      subtitle: "Pluggable verticals · Layer 6",
      proven: "Proven",
      items: {
        itemChain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "Full order/transport/warehouse/yard execution — flagship",
        },
        itemDock: {
          tag: "PORTS & DRAYAGE",
          desc: "Port, drayage & container operations",
        },
        itemTrade: {
          tag: "GLOBAL TRADE",
          desc: "Tariff classification, compliance, trade intelligence",
        },
        itemFin: {
          tag: "FINANCIAL ADVISORY",
          desc: "Advisory: client profiling, portfolio analytics, filings",
        },
        itemDine: {
          tag: "RESTAURANT OPS",
          desc: "Restaurant: scheduling, prep forecasting, waste control",
        },
        itemEstate: {
          tag: "PROPERTY MANAGEMENT",
          desc: "Property: leases, tenant services, repairs, energy",
        },
        itemBuild: {
          tag: "REAL ESTATE DEV",
          desc: "Development: schedules, vendors, cost, sales",
        },
        itemHealth: {
          tag: "HEALTHCARE OPS",
          desc: "Healthcare: cold chain, expiry, traceability",
        },
        itemAuto: {
          tag: "MANUFACTURING",
          desc: "Manufacturing: JIT sequencing, supplier risk",
        },
        itemRetail: {
          tag: "RETAIL & COMMERCE",
          desc: "Retail: omnichannel orders, inventory, returns",
        },
      },
    },
    note: "Platform components ship with their systems (not counted above): Agent Runtime (AI OS) · Agent IDE · IAM · Multi-Tenant Deployment Platform (Harness).",
  },

  physical: {
    eyebrow: "Physical AI & RaaS",
    title: {
      lead: "Hardware is the customer's CapEx — ",
      accent: "intelligence is the perpetual value engine",
      tail: "",
    },
    lede: "11 robotics partners (6 Dealer/ODM + 5 Reseller/OEM) turn the RaaS model from theory into reality: every robot in the ecosystem becomes a subscription endpoint, with ITEM's WCS, WES, ITEM.Claw, ITEM.Vision and heterogeneous-autonomy layer running on top of the hardware.",
    fleet: {
      caption: "Combined Fleet Capability Map · 11 Partners",
      headers: {
        type: "Robot type",
        partner: "Partner",
        environment: "Environment",
        modules: "ITEM modules",
        raas: "RaaS model",
      },
      rows: {
        hangcha: {
          type: "Autonomous forklifts AGF/AMR",
          environment: "Indoor DC",
          modules: "WCS · WES · ITEM.Claw",
          raas: "$ / forklift / mo",
        },
        libiao: {
          type: "Sortation AMR",
          environment: "Fulfillment",
          modules: "WES · OMS · ITEM.Claw",
          raas: "$ / sort or robot",
        },
        xyz: {
          type: "Piece-picking robots",
          environment: "Pick stations",
          modules: "WES · OMS · ITEM.Vision",
          raas: "$ / pick",
        },
        unitree: {
          type: "Humanoids",
          environment: "DC / airport / factory",
          modules: "WES · WCS · Autonomy",
          raas: "$ / humanoid / mo",
        },
        pudu: {
          type: "Indoor delivery robots",
          environment: "DC / hospital / hotel",
          modules: "FMS · WES · ITEM.Voice",
          raas: "$ / delivery",
        },
        deepRobotics: {
          type: "Quadruped inspection",
          environment: "Yard / perimeter / outdoor",
          modules: "YMS · ITEM.Vision · ITEM.Sense",
          raas: "$ / patrol / mo",
        },
        zsRobotics: {
          type: "Industrial AMR",
          environment: "DC pallet moves",
          modules: "WES · WCS · ITEM.Claw",
          raas: "$ / robot / mo",
        },
        galaxis: {
          type: "Indoor positioning backbone",
          environment: "DC interior",
          modules: "All robot modules",
          raas: "Infra subscription",
        },
        lanxin: {
          type: "SLAM navigation intelligence",
          environment: "All environments",
          modules: "WCS · Digital twin",
          raas: "SDK license",
        },
        slamtec: {
          type: "LiDAR sensors",
          environment: "All environments",
          modules: "Physical AI layer",
          raas: "Embedded in RaaS",
        },
        mita: {
          type: "Systems integration",
          environment: "All deployments",
          modules: "WCS · WES · PLC",
          raas: "Pro services",
        },
      },
    },
    ledger: {
      caption: "The RaaS Ledger · One Enterprise DC",
      headers: {
        fleet: "Fleet",
        capex: "Customer CapEx",
        subscription: "ITEM annual subscription",
      },
      rows: {
        forklifts: "20× Hangcha forklifts",
        sortation: "50× Libiao sortation",
        picking: "10× XYZ picking",
        humanoids: "30× Unitree G1 humanoids",
        mixed: "5× Deep Robotics + 20× Pudu",
        infra: "Galaxis / Slamtec infra",
        total: "Total per DC",
      },
    },
    coverage: {
      body: "25 DCs at this scale mean ITEM's intelligence layer covers the entire robot fleet — zero hardware risk, asset-light for customers. The intelligence layer is deeply embedded in physical operations, ensuring continuous value delivery.",
      footnote:
        "Humanoid manufacturing costs are falling ~40% YoY (Goldman Sachs) — as hardware collapses in price, the software intelligence layer captures more of the value. We don't sell robots;",
      emphasis: "we make every robot smarter, and charge for that intelligence forever.",
    },
  },

  flywheel: {
    eyebrow: "The Flywheel",
    title: {
      lead: "A ",
      accent: "closed loop",
      tail: " from pipeline to platform to resolution",
    },
    lede: "The system sells itself, runs itself, improves itself and retains itself — architecturally, not as a slogan. Every stage feeds data back into the ontology.",
    nodes: {
      grow: "Finds the customer: SDR / AEO / GEO pipeline intelligence",
      gpt: "Conversational demo & decision interface",
      sce: "OMS · TMS · WMS · WES · YMS run their operations",
      sense: "Monitors everything in real time",
      support: "Resolves every exception",
      audit: "Recovers every dollar → feeds ITEM.Grow expansion",
    },
    note: {
      label: "The operational data flywheel:",
      body: "more workflows → more decisions → better models → better automation. Every ITEM.Support resolution trains the next ITEM.GPT answer; every ITEM.Audit finding becomes the case study in the next ITEM.Grow outreach sequence. This is the flywheel that justifies Palantir-class multiples on an early revenue base.",
    },
  },

  cases: {
    eyebrow: "Case Studies",
    label: "Case",
    title: "Proven entry scenarios",
    lede: "Land with high-value control-tower use cases, then expand into autonomous operations. These three scenario classes have validated the platform in pilots and deployments.",
    items: {
      electronics: {
        title: "Consumer Electronics Supply Chain",
        body: "Global factory + warehouse + transport visibility; shortage prediction; order-promise optimization. One ontology spanning every object from supplier to customer.",
      },
      threePl: {
        title: "3PL Multi-Warehouse Control Tower",
        body: "Network-wide exception management; labor, inventory and shipping decisions; client-facing visibility. Tier-1 3PLs like Kuehne+Nagel — where Libiao's ~50-AMR RaaS sortation fleets already run — are exactly this buyer persona.",
      },
      yard: {
        title: "Yard + Dock Intelligence (LA/LB Beachhead)",
        body: "Appointment scheduling, dock assignment, trailer tracking and dwell-time reduction. LA/LB + the Inland Empire is the ideal wedge market, where ITEM.Dock builds port-side dominance.",
      },
    },
    metrics: {
      cost: "Lower operational cost",
      onTime: "On-time performance lift",
      exceptions: "Exception automation",
      turns: "Higher inventory turns (early AI adopters)",
    },
    note: "Note: the first three are ITEM pilot target ranges; inventory-turn data reflects industry benchmarks for early logistics-AI adopters (~15% lower cost, ~35% higher turns).",
  },

  implementation: {
    eyebrow: "Implementation",
    title: "8–12 weeks to first production pilot",
    lede: "The Forward Deployed Engineer (FDE) model: a small team on site, ontology first, gate-based acceptance — enterprise rollout in 3–6 months.",
    phases: {
      discovery: {
        title: "Discovery",
        duration: "2 weeks",
        body: "Operational profiling, data-source inventory, use-case and KPI lock, commercial and security onboarding.",
      },
      ontology: {
        title: "Ontology + Data",
        duration: "4–6 weeks",
        body: "Model the customer's business objects and rules, connect ERP / WMS / TMS / IoT data — once the ontology exists, every subsequent module deploys at lower marginal cost.",
      },
      pilot: {
        title: "Pilot Agents",
        duration: "6–8 weeks",
        body: "First production agents and control-tower workflows on the governed runtime, accepted against KPI gates.",
      },
      scale: {
        title: "Scale Apps",
        duration: "8–12 weeks",
        body: "Multi-site rollout of SCE-suite modules, more data domains and role-based apps.",
      },
      autonomous: {
        title: "Autonomous Ops",
        duration: "6–12 months",
        body: "Robot fleets, RaaS subscriptions and autonomous execution go live — the customer enters the irreplaceable state.",
      },
    },
  },

  customers: {
    eyebrow: "Target Customers",
    title: "Who buys this operating system",
    bestFit: {
      kicker: "Best-Fit Customers",
      items: {
        manufacturers: {
          label: "Manufacturers",
          detail: "multi-site production, warehousing and global distribution (consumer electronics first)",
        },
        logistics: {
          label: "3PL / Logistics operators",
          detail: "running WMS, TMS, yard and dock networks",
        },
        forwarders: {
          label: "Forwarders / carriers / customs brokers",
          detail: "buyers of freight intelligence and trade compliance",
        },
        retail: {
          label: "Retail & suppliers",
          detail: "demand, inventory and fulfillment intelligence",
        },
        ports: {
          label: "Port, terminal & facility operators",
          detail: "the natural home of physical assets + physical AI",
        },
      },
    },
    vertical: {
      kicker: "Vertical Expansion (Certification-Unlocked)",
      body: "Certifications do two jobs at once: remove enterprise-procurement friction and signal platform maturity. 14 certifications cover all major global compliance frameworks.",
      certs: {
        iso27001: "EU/UK/APAC enterprise",
        iso42001: "AI-governance first-mover",
        hitrust: "Pharma cold chain",
        fedramp: "Federal + DoD logistics ($50B+)",
        ctpat: "Customs & ports",
        cmmc: "Defense contractors",
        tisax: "Automotive supply chain",
        other: "Health · finance · ESG",
      },
    },
  },

  competitive: {
    eyebrow: "Competitive Position",
    title: {
      lead: "Palantir does data intelligence. ",
      accent: "ITEM does operational execution.",
      tail: "",
    },
    lede: "On one ontology, one data model and one agent runtime, ITEM's unified architecture contains the functional equivalents of Palantir, Manhattan, ServiceNow and MuleSoft — whose combined market value alone exceeds $500B.",
    table: {
      caption: "Capability Map · ITEM vs Data Platforms vs Legacy SCM",
      capability: "Capability",
      rows: {
        ontology: {
          label: "Ontology / semantic layer",
          item: "Native",
          palantir: "Strong",
          databricks: "Limited",
          manhattan: "None",
          sap: "Limited",
        },
        apps: {
          label: "Supply-chain apps (OMS/TMS/WMS/YMS)",
          item: "Native",
          palantir: "Custom",
          databricks: "Partner",
          manhattan: "Strong (legacy)",
          sap: "Strong (legacy)",
        },
        agents: {
          label: "Multi-agent execution runtime",
          item: "Native",
          palantir: "Strong",
          databricks: "Strong",
          manhattan: "None",
          sap: "Copilot-grade",
        },
        robots: {
          label: "Physical AI / robot coordination",
          item: "Native (11-partner fleet)",
          palantir: "None",
          databricks: "None",
          manhattan: "Limited",
          sap: "Limited",
        },
        deploy: {
          label: "Air-gapped / edge / sovereign deploy",
          item: "Native (Harness)",
          palantir: "Strong",
          databricks: "Limited",
          manhattan: "None",
          sap: "Partial",
        },
        flywheel: {
          label: "Closed-loop GTM + CX flywheel",
          item: "Native (Grow → Support → Audit)",
          palantir: "None",
          databricks: "None",
          manhattan: "None",
          sap: "Scattered across clouds",
        },
        focus: {
          label: "Physical-operations focus",
          item: "Core",
          palantir: "Broad enterprise",
          databricks: "Data/AI",
          manhattan: "SCM only",
          sap: "Productivity/data",
        },
      },
    },
    note: "Positioning based on public product descriptions (Palantir AIP/Ontology, Databricks Data Intelligence Platform, Manhattan Active, Microsoft Fabric/Copilot Studio, etc.).",
    cards: {
      incumbents: {
        kicker: "vs Incumbents",
        body: "Manhattan, Blue Yonder, SAP and Oracle were built before agentic AI — they record operations, they can't run them. Every incumbent install base is an ITEM conversion opportunity.",
      },
      dataPlatforms: {
        kicker: "vs Data Platforms",
        body: "Palantir and Databricks stop at insight. ITEM owns apps + AI runtime + semantics + deployment — from insight all the way to the dock door and the robot.",
      },
      pointTools: {
        kicker: "vs AI Point Tools",
        body: 'Most AI companies stop at copilots; we execute. "Humans + AI + robots" across digital and physical operations is a shape no point tool can replicate.',
      },
    },
  },

  closing: {
    eyebrow: "The Vision",
    vision: {
      lead: "One platform, one ontology, one intelligence layer — uniting ",
      accent: "humans + AI + robots + operations",
      tail: " so your enterprise runs itself.",
    },
    fine: "Start a pilot in 8–12 weeks. Prove value in one scenario, then expand across the network — no rip-and-replace, runs alongside your existing ERP, WMS, TMS.",
    cta: "Request a Product Demo",
  },

  footer: "Product Overview · 2026",
};

/** Every locale must match the reference shape exactly. */
type Shape = typeof en;

const zh: Shape = {
  nav: { label: "章节", story: "故事", platform: "平台", products: "产品" },

  hero: {
    badge: "产品概览 · 供应链 AI 操作系统 · 2026",
    title: {
      lead: "面向实体经济的",
      accent: "AI 原生操作系统",
      tail: "",
    },
    subtitle:
      "ITEM AI 用一个由本体（Ontology）驱动的企业级 AI 操作系统，替代碎片化的供应链软件——统一驱动人 + AI + 机器人 + 运营，覆盖运输、仓储、物流、商务与工业自动化。",
    stats: {
      aiProducts: "AI 核心产品",
      coreLayers: "核心层架构",
      pilot: "试点上线周期",
      exceptions: "异常自动化率",
    },
    tagline: "一个平台 · 多条扩张向量",
  },

  problem: {
    eyebrow: "问题",
    title: "全球供应链运行在碎片化系统上",
    lede: "TMS 一家供应商、WMS 另一家、OMS 又一家；机器人软件、可视化、分析、AI Copilot 各自独立，工作流彼此割裂。企业为此持续支付三项「隐藏税」。",
    taxes: {
      compliance: {
        kicker: "隐藏税 一",
        headline: "合规",
        title: "合规税",
        body: "扣款、OTIF 罚款、审计、许可、索赔、SLA 失败——错误在系统之间的缝隙里发生。",
      },
      data: {
        kicker: "隐藏税 二",
        headline: "数据",
        title: "数据税",
        body: "预测不准、系统割裂、可视化差、决策延迟——数据存在，但无法转化为行动。",
      },
      operations: {
        kicker: "隐藏税 三",
        headline: "运营",
        title: "运营税",
        body: "手工工作流、劳动力低效、编排成本高——人在替软件做软件该做的事。",
      },
    },
    note: {
      figure: "数百万至数千万美元",
      body: "大型企业每年仅为「运营」就在碎片化系统上花费数百万至数千万美元。市场正在从「记录型软件（Software of Record）」转向「行动型软件（Software of Action）」。",
    },
  },

  category: {
    eyebrow: "品类",
    title: { lead: "不是更多工具，", accent: "而是一个操作系统", tail: "" },
    lede: "我们不是「81 个产品的目录」，而是一个平台 + 分层扩张战略：一个具有多条扩张向量、定义品类的操作系统。",
    old: {
      title: "不再是 · 碎片化点工具",
      items: [
        "OMS + TMS + WMS + WES + WCS 各自为政",
        "机器人软件独立运行",
        "可视化与分析彼此割裂",
        "AI Copilot 只能「建议」，不能执行",
        "规则与知识留在资深员工脑中",
      ],
    },
    next: {
      title: "而是 · 一个统一操作系统",
      items: [
        "覆盖运输、仓储、堆场、库存、机器人",
        "劳动力、计划、合规、智能在同一平面",
        "由单一本体驱动一致、可执行的智能",
        "决策直接变成被治理的自动化动作",
        "人 + AI + 机器人在同一运行时协同",
      ],
    },
    thesis: {
      lead: "ITEM AI = 面向实体供应链的",
      accent: "企业级 AI 操作系统",
      tail: "。",
      line2: "用一个由本体驱动的 AI 操作系统，替代碎片化的企业软件。",
    },
  },

  stack: {
    eyebrow: "平台架构",
    title: "The ITEM Stack — 一页讲清平台",
    lede: "自上而下的七层堆栈。每一层都是独立的护城河，叠加在一起就是无法被单点替代的操作系统。",
    layers: {
      applications: {
        name: "应用层",
        detail: "TMS · WMS · OMS · YMS · WES · WCS · Control Tower",
        tag: "收入产品",
      },
      ai: {
        name: "AI 产品层",
        detail: "ITEM.GPT · ITEM.Claw · ITEM.Predict · ITEM.Sense",
        tag: "核心收入",
      },
      foundry: {
        name: "企业运营平台",
        detail: "数据集成 · 应用构建 · 工作流编排 · 数字孪生",
        tag: "PaaS",
      },
      aip: {
        name: "AI 运行时",
        detail: "多模型编排 · 智能体运行时 · 治理与审计",
        tag: "战略平台",
      },
      ontology: {
        name: "运营智能 / 语义层",
        detail: "知识图谱 · 数字孪生 · 规则引擎 · 单一事实来源",
        tag: "护城河 · 不单独销售",
      },
      harness: {
        name: "部署层",
        detail: "CI/CD · 云 / 本地 / 气隙 / 边缘 · 合规与回滚",
        tag: "企业基础设施",
      },
      infrastructure: {
        name: "基础设施",
        detail: "Private Stack · Cloud · Edge · GPU / NPU",
        tag: "IaaS",
      },
    },
    note: "每一个运营决策都依赖 ITEM 的业务图谱——本体依赖（Ontology Dependency）使整个堆栈极难替换。",
  },

  systems: {
    eyebrow: "五个核心层",
    title: "五个核心层——每一层都有清晰的设计目的",
    lede: "每个系统都有清晰的设计目的与商业角色。其余一切都是「平台扩展」，而非新的创业公司。",
    labels: { design: "设计：", purpose: "目的：", role: "商业角色：" },
    cards: {
      ontology: {
        kicker: "01 · 意义系统",
        badge: "护城河",
        design:
          "受治理的知识图谱与实时数字孪生层，定义业务对象、关系、逻辑、动作与动态规则。",
        purpose:
          "作为单一事实来源，驱动平台范围内一致、可执行的智能——订单、货件、集装箱、卡车、司机、仓库、机器人、月台门都在同一语义模型中。",
        products: {
          studio: "DDD 建模",
          executor: "知识图谱与检索",
        },
        caps: ["业务对象建模", "知识图谱", "规则引擎", "数字孪生", "语义互操作"],
        role: "不单独销售——作为战略护城河层捆绑提供，制造本体依赖。",
      },
      foundry: {
        kicker: "02 · 数据与应用系统",
        badge: "PaaS",
        design:
          "由本体驱动的企业运营平台——统一异构数据源、低代码应用构建器、工作流编排与运营数字孪生。",
        purpose:
          "在人 + AI 团队之间编排智能决策，是 OMS、TMS、WMS、YMS、WES、WCS 等全部应用的开发与运行底座。",
        products: { bi: "数据平台", di: "数据集成" },
        caps: ["数据集成", "应用构建器", "事件处理", "数据管道", "Low-code"],
        role: "PaaS——席位许可 · 工作流执行 · 开发者许可 · 企业平台订阅。",
      },
      aios: {
        kicker: "03 · 智能系统",
        badge: "捆绑平台层",
        design:
          "为生产力、智能与价值链决策而设计的 AI 就绪操作系统——统一运营工作区、实时数据融合、嵌入式 Copilot、事件编排。",
        purpose:
          "让人 + AI 在同一工作面上观察、预测、决策、优化，成为整个企业的实时运营大脑。",
        products: { runtime: "智能体运行时" },
        caps: ["决策智能", "实时分析", "企业搜索", "Copilot", "人机协同"],
        role: "捆绑平台层，随企业部署一同交付，提升整体 ACV。",
      },
      aip: {
        kicker: "04 · 行动系统",
        badge: "战略平台",
        design:
          "企业 AI 运行时——多模型编排、智能体运行时、自主工作流、人在回路治理、提示 / 版本管理、可观测性与合规审计。",
        purpose:
          "把 LLM 与智能体安全地锚定到现实世界数据与运营系统，让决策变成可审计、可回滚的执行。",
        products: {
          gpt: "多智能体平台",
          flow: "工作流",
          vision: "IoT、GIS 与视觉模型",
        },
        caps: ["多模型编排", "智能体运行时", "工具调用", "治理", "审计"],
        role: "核心平台产品——SaaS 许可 · 用量计算 · 智能体执行费 · FaaS 计费。",
      },
      harness: {
        kicker: "05 · 交付系统",
        badge: "企业基础设施",
        design:
          "持续交付 / 自主部署平台——在任何环境（云、本地、气隙、边缘）自主部署、监控、更新并管理软件，内置金丝雀发布、回滚与合规监控。",
        purpose:
          "让关键任务级 AI 可以部署到客户的任何边界之内——这是政府、国防、医疗与制造客户的入场前提，也是 Private Stack（主权 AI 云）的交付引擎。",
        products: {
          ide: "智能体开发环境",
          iam: "企业级身份与权限",
          deploy: "多租户部署平台",
        },
        caps: ["CI/CD", "气隙部署", "边缘部署", "金丝雀发布", "回滚", "环境治理"],
        role: "企业基础设施产品，通常捆绑进企业合同；解锁 Private Stack 的 2–3 倍 ACV 溢价。",
      },
    },
  },

  products: {
    eyebrow: "AI 核心产品",
    title: {
      lead: "22 个 AI 核心产品：",
      accent: "12 通用应用 × 10 行业模板",
      tail: "",
    },
    lede: "12 个通用 AI 应用跨行业复用——决策、执行、预测、可视化、支持、增长，每个行业都需要。10 个行业模板把行业本体、预置工作流、合规规则与连接器打包为可插拔的垂直方案。",
    groups: {
      ontology: "本体系统",
      foundry: "数据系统",
      aios: "智能系统",
      aip: "行动系统",
      apps: "AI 应用层",
    },
    items: {
      itemGpt: {
        tag: "AI for Every Decision. In Real Time.",
        desc: "自然语言运营接口——用一句话调度整个平台，对话即查询、即决策、即行动。",
      },
      itemDoc: {
        tag: "Documents That Process Themselves.",
        desc: "文档自动化——合同、发票、报告的智能读取、生成与归档。",
      },
      itemSense: {
        tag: "See Everything. Instantly.",
        desc: "实时可视化 + 数字孪生驾驶舱——整个网络的单一实时画面。",
      },
      itemPredict: {
        tag: "Predict What's Next.",
        desc: "需求 / 现金流 / 客流 / 资源的通用预测引擎——在运营断裂之前看到它。",
      },
      itemOpsAi: {
        tag: "Operations That Run Themselves.",
        desc: "自主决策 + 持续优化——运营自我运行的执行大脑。",
      },
      itemAudit: {
        tag: "Find What You're Losing.",
        desc: "计费纠错、合规稽核、成本回收——追回每一分钱。",
      },
      itemVision: {
        tag: "See What Others Miss.",
        desc: "计算机视觉——安防、质检、现场监控、地理智能。",
      },
      itemVoice: {
        tag: "Operate Hands-Free.",
        desc: "语音 AI——一线作业与来电的免提交互接口。",
      },
      itemClaw: {
        tag: "Execution Without Friction.",
        desc: "多智能体工作流执行器——从建议到执行，把决策变成被治理的动作。",
      },
      itemFlow: {
        tag: "Design. Automate. Scale.",
        desc: "可视化 AI 工作流构建器——审批、路由、升级、异常处理。",
      },
      itemSupport: {
        tag: "Every Channel. One Thread.",
        desc: "全渠道工单：邮件 · 消息 · 短信 · 电话——带完整运营上下文与 AI 解决方案。",
      },
      itemGrow: {
        tag: "Pipeline That Never Sleeps.",
        desc: "GTM AI——SDR/BDR · SEO/AEO/GEO · 内容生成，本体驱动的智能外联。",
      },
    },
    templates: {
      title: "行业模板",
      subtitle: "可插拔垂直方案 · Layer 6",
      proven: "已验证",
      items: {
        itemChain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "订单 / 运输 / 仓储 / 堆场全套执行——旗舰模板",
        },
        itemDock: { tag: "PORTS & DRAYAGE", desc: "港口、拖车、集装箱运营" },
        itemTrade: { tag: "GLOBAL TRADE", desc: "关税归类、跨境合规、贸易智能" },
        itemFin: {
          tag: "FINANCIAL ADVISORY",
          desc: "财务咨询：客户画像、组合分析、合规报送",
        },
        itemDine: { tag: "RESTAURANT OPS", desc: "餐馆运营：排班、备货预测、损耗控制" },
        itemEstate: {
          tag: "PROPERTY MANAGEMENT",
          desc: "房产管理：租约、租户服务、报修、能耗",
        },
        itemBuild: { tag: "REAL ESTATE DEV", desc: "地产开发：项目进度、供应商、成本与销售" },
        itemHealth: { tag: "HEALTHCARE OPS", desc: "医疗运营：冷链、效期、合规追溯" },
        itemAuto: { tag: "MANUFACTURING", desc: "制造与汽车：JIT 排序、供应商风险" },
        itemRetail: { tag: "RETAIL & COMMERCE", desc: "零售电商：全渠道订单、库存、退货" },
      },
    },
    note: "另有平台组件随系统交付（不计入产品数）：Agent Runtime（AI OS）· Agent IDE · IAM · Multi-Tenant Deployment Platform（Harness）。",
  },

  physical: {
    eyebrow: "物理 AI 与 RaaS",
    title: {
      lead: "硬件是客户的资本支出，",
      accent: "智能层是持续运行的价值引擎",
      tail: "",
    },
    lede: "11 个机器人合作伙伴（6 家 Dealer/ODM + 5 家 Reseller/OEM）把 RaaS 收入模型从理论变为现实：生态中每台机器人都成为订阅端点，ITEM 的 WCS、WES、ITEM.Claw、ITEM.Vision 与异构自主层运行在硬件之上。",
    fleet: {
      caption: "综合舰队能力图 · 11 个合作伙伴",
      headers: {
        type: "机器人类型",
        partner: "合作伙伴",
        environment: "环境",
        modules: "ITEM 模块",
        raas: "RaaS 模型",
      },
      rows: {
        hangcha: {
          type: "自动叉车 AGF/AMR",
          environment: "室内 DC",
          modules: "WCS · WES · ITEM.Claw",
          raas: "$ / 叉车 / 月",
        },
        libiao: {
          type: "分拣 AMR",
          environment: "履约中心",
          modules: "WES · OMS · ITEM.Claw",
          raas: "$ / 分拣或机器人",
        },
        xyz: {
          type: "单件拣选机器人",
          environment: "拣选站",
          modules: "WES · OMS · ITEM.Vision",
          raas: "$ / 拣选",
        },
        unitree: {
          type: "人形机器人",
          environment: "DC / 机场 / 工厂",
          modules: "WES · WCS · 自主层",
          raas: "$ / 人形 / 月",
        },
        pudu: {
          type: "室内配送机器人",
          environment: "DC / 医院 / 酒店",
          modules: "FMS · WES · ITEM.Voice",
          raas: "$ / 配送",
        },
        deepRobotics: {
          type: "四足巡检",
          environment: "堆场 / 周界 / 户外",
          modules: "YMS · ITEM.Vision · ITEM.Sense",
          raas: "$ / 巡逻 / 月",
        },
        zsRobotics: {
          type: "工业 AMR",
          environment: "DC 托盘搬运",
          modules: "WES · WCS · ITEM.Claw",
          raas: "$ / 机器人 / 月",
        },
        galaxis: {
          type: "室内定位骨干",
          environment: "DC 内部",
          modules: "全机器人模块",
          raas: "基础设施订阅",
        },
        lanxin: {
          type: "SLAM 导航智能",
          environment: "全环境",
          modules: "WCS · 数字孪生",
          raas: "SDK 许可",
        },
        slamtec: {
          type: "LiDAR 传感器",
          environment: "全环境",
          modules: "物理 AI 层",
          raas: "嵌入 RaaS",
        },
        mita: {
          type: "系统集成",
          environment: "全部署",
          modules: "WCS · WES · PLC",
          raas: "专业服务",
        },
      },
    },
    ledger: {
      caption: "单个企业 DC 的 RaaS 账本",
      headers: {
        fleet: "舰队",
        capex: "客户资本支出",
        subscription: "ITEM 年订阅价值",
      },
      rows: {
        forklifts: "20× Hangcha 叉车",
        sortation: "50× Libiao 分拣",
        picking: "10× XYZ 拣选",
        humanoids: "30× Unitree G1 人形",
        mixed: "5× Deep Robotics + 20× Pudu",
        infra: "Galaxis / Slamtec 基础设施",
        total: "每 DC 合计",
      },
    },
    coverage: {
      body: "在此规模下部署 25 个 DC，ITEM 的智能层覆盖整个机器人舰队——客户零硬件风险、轻资产模式。智能层与物理运营深度绑定，确保持续价值交付。",
      footnote:
        "人形制造成本同比下降约 40%（Goldman Sachs）——硬件成本崩塌时，软件智能层在价值占比上反而上升。我们不卖机器人；",
      emphasis: "我们让每台机器人更聪明，并永远为这份智能收费。",
    },
  },

  flywheel: {
    eyebrow: "飞轮",
    title: {
      lead: "从管道到平台再到解决的",
      accent: "完整闭环",
      tail: "",
    },
    lede: "系统自我销售、自我运行、自我改进、自我留存——这是架构层面的，而非口号。每个阶段都把数据反馈给本体。",
    nodes: {
      grow: "找到客户：SDR / AEO / GEO 管道智能",
      gpt: "对话式演示与决策接口",
      sce: "OMS · TMS · WMS · WES · YMS 运行其运营",
      sense: "实时监控一切",
      support: "解决每个异常",
      audit: "追回每一美元 → 反哺 ITEM.Grow 扩张",
    },
    note: {
      label: "运营数据飞轮：",
      body: "更多工作流 → 更多决策 → 更好模型 → 更好自动化。ITEM.Support 中的每次解决都训练下一个 ITEM.GPT 答案；每个 ITEM.Audit 发现都成为下一条 ITEM.Grow 外联序列的案例。这正是支撑早期收入基础获得 Palantir 级倍数的飞轮。",
    },
  },

  cases: {
    eyebrow: "案例研究",
    label: "案例",
    title: "已验证的切入场景",
    lede: "从高价值控制塔用例切入，再扩张到自主运营。以下三类场景已在试点与部署中验证平台价值。",
    items: {
      electronics: {
        title: "消费电子供应链",
        body: "全球工厂 + 仓储 + 运输可视化；短缺预测；订单承诺优化。单一本体覆盖从供应商到客户的全链路对象。",
      },
      threePl: {
        title: "3PL 多仓控制塔",
        body: "网络级异常管理；劳动力、库存与发运决策；面向客户的可视化。Kuehne+Nagel 级 3PL 正是 RaaS 分拣舰队（Libiao 约 50 台 AMR）已落地的买家画像。",
      },
      yard: {
        title: "堆场 + 月台智能（LA/LB 滩头）",
        body: "预约调度、月台分配、拖车追踪与滞留时间压缩。LA/LB + Inland Empire 是理想的切入市场，ITEM.Dock 在此建立港口侧主导地位。",
      },
    },
    metrics: {
      cost: "运营成本下降",
      onTime: "准时履约提升",
      exceptions: "异常处理自动化",
      turns: "库存周转提升（物流 AI 早期采用者）",
    },
    note: "注：顶部三项为 ITEM 试点目标区间；库存周转数据来自物流 AI 早期采用者行业基准（约 15% 更低成本与 35% 更高周转）。",
  },

  implementation: {
    eyebrow: "实施周期",
    title: "8–12 周到首个生产试点",
    lede: "Forward Deployed Engineer（FDE）模式：小团队进场、本体先行、按 Gate 验收推进——3–6 个月完成企业级铺开。",
    phases: {
      discovery: {
        title: "发现",
        duration: "2 周",
        body: "运营画像、数据源盘点、用例与 KPI 锁定、商务与安全准入。",
      },
      ontology: {
        title: "本体 + 数据",
        duration: "4–6 周",
        body: "建模客户的业务对象与规则，接入 ERP / WMS / TMS / IoT 数据——本体一旦建成，后续每个模块的边际部署成本都在下降。",
      },
      pilot: {
        title: "试点智能体",
        duration: "6–8 周",
        body: "在受治理的运行时上交付首批生产智能体与控制塔工作流，按 KPI Gate 验收。",
      },
      scale: {
        title: "规模化应用",
        duration: "8–12 周",
        body: "多站点铺开 SCE 套件模块，接入更多数据域与角色应用。",
      },
      autonomous: {
        title: "自主运营",
        duration: "6–12 个月",
        body: "机器人舰队、RaaS 订阅与自主执行上线——客户进入「不可替换」状态。",
      },
    },
  },

  customers: {
    eyebrow: "目标客户",
    title: "谁会为这个操作系统买单",
    bestFit: {
      kicker: "最佳契合客户",
      items: {
        manufacturers: {
          label: "制造商",
          detail: "多站点生产、仓储与全球分销（消费电子优先）",
        },
        logistics: { label: "3PL / 物流企业", detail: "运营 WMS、TMS、堆场与月台网络" },
        forwarders: {
          label: "货代 / 承运商 / 报关行",
          detail: "货运智能与贸易合规买家",
        },
        retail: { label: "零售与供应商", detail: "需求、库存与履约智能" },
        ports: {
          label: "港口、码头与设施运营方",
          detail: "实体资产 + 物理 AI 的天然场景",
        },
      },
    },
    vertical: {
      kicker: "垂直扩张方向（认证解锁）",
      body: "认证同时做两件事：移除企业采购摩擦，并传递平台成熟度信号。14 项认证覆盖全球主要合规框架。",
      certs: {
        iso27001: "欧 / 英 / 亚太企业销售",
        iso42001: "AI 治理先发",
        hitrust: "医药冷链",
        fedramp: "联邦 + DoD 物流（$50B+）",
        ctpat: "海关与港口",
        cmmc: "国防承包商",
        tisax: "汽车供应链",
        other: "医疗 · 金融 · ESG",
      },
    },
  },

  competitive: {
    eyebrow: "竞争定位",
    title: {
      lead: "Palantir 做数据智能，",
      accent: "ITEM 做运营执行",
      tail: "",
    },
    lede: "ITEM 的统一架构在单一本体、单一数据模型、单一智能体运行时上，包含了 Palantir、Manhattan、ServiceNow、MuleSoft 的功能等价物——仅这些市值之和就超过 $500B。",
    table: {
      caption: "能力对比 · ITEM vs 数据平台 vs 传统 SCM",
      capability: "能力",
      rows: {
        ontology: {
          label: "本体 / 语义层",
          item: "原生",
          palantir: "强",
          databricks: "有限",
          manhattan: "无",
          sap: "有限",
        },
        apps: {
          label: "供应链应用（OMS/TMS/WMS/YMS）",
          item: "原生",
          palantir: "定制",
          databricks: "合作伙伴",
          manhattan: "强（遗留架构）",
          sap: "强（遗留架构）",
        },
        agents: {
          label: "多智能体执行运行时",
          item: "原生",
          palantir: "强",
          databricks: "强",
          manhattan: "无",
          sap: "Copilot 级",
        },
        robots: {
          label: "物理 AI / 机器人协调",
          item: "原生（11 伙伴舰队）",
          palantir: "无",
          databricks: "无",
          manhattan: "有限",
          sap: "有限",
        },
        deploy: {
          label: "气隙 / 边缘 / 主权部署",
          item: "原生（Harness）",
          palantir: "强",
          databricks: "有限",
          manhattan: "无",
          sap: "部分",
        },
        flywheel: {
          label: "闭环 GTM + CX 飞轮",
          item: "原生（Grow → Support → Audit）",
          palantir: "无",
          databricks: "无",
          manhattan: "无",
          sap: "分散于多云产品",
        },
        focus: {
          label: "实体运营聚焦",
          item: "核心",
          palantir: "广义企业",
          databricks: "数据 / AI",
          manhattan: "SCM 单域",
          sap: "生产力 / 数据",
        },
      },
    },
    note: "竞争定位基于公开产品描述（Palantir AIP/Ontology、Databricks Data Intelligence Platform、Manhattan Active、Microsoft Fabric/Copilot Studio 等）。",
    cards: {
      incumbents: {
        kicker: "对在位者",
        body: "Manhattan、Blue Yonder、SAP、Oracle 建于智能体 AI 之前——它们记录运营，无法运行运营。每个竞争对手的现有装机量都是 ITEM 的转化机会。",
      },
      dataPlatforms: {
        kicker: "对数据平台",
        body: "Palantir 与 Databricks 止步于洞察。ITEM 拥有应用层 + AI 运行时 + 语义层 + 部署的全栈所有权，从洞察直达月台门与机器人。",
      },
      pointTools: {
        kicker: "对 AI 点工具",
        body: "多数 AI 公司止步于 Copilot；我们能执行。统一数字与物理运营的「人 + AI + 机器人」是任何单点工具都无法复制的形态。",
      },
    },
  },

  closing: {
    eyebrow: "愿景",
    vision: {
      lead: "一个平台、一套本体、一个智能层——统一驱动 ",
      accent: "人 + AI + 机器人 + 运营",
      tail: "，让你的企业自我运行。",
    },
    fine: "8–12 周开始试点。在一个场景验证价值，然后扩展到整个网络——无需替换现有系统，与你的 ERP、WMS、TMS 并行运行。",
    cta: "预约产品演示",
  },

  footer: "产品概览 · 2026",
};

const ja: Shape = {
  nav: { label: "セクション", story: "ストーリー", platform: "プラットフォーム", products: "プロダクト" },

  hero: {
    badge: "製品概要 · サプライチェーン AI OS · 2026",
    title: {
      lead: "実体経済のための",
      accent: "AI ネイティブ・オペレーティングシステム",
      tail: "",
    },
    subtitle:
      "ITEM AI は、断片化したサプライチェーンソフトウェアを、オントロジー駆動の単一エンタープライズ AI オペレーティングシステムで置き換えます。輸送・倉庫・物流・コマース・産業オートメーションを横断し、人 + AI + ロボット + オペレーションを統合します。",
    stats: {
      aiProducts: "AI コアプロダクト",
      coreLayers: "コアレイヤー",
      pilot: "パイロット導入期間（週）",
      exceptions: "例外自動化率",
    },
    tagline: "ワンプラットフォーム · 複数の拡張ベクトル",
  },

  problem: {
    eyebrow: "課題",
    title: "グローバルサプライチェーンは断片化したシステムの上で動いている",
    lede: "TMS は 1 社、WMS は別の 1 社、OMS はまた別の 1 社。ロボットソフトウェア、可視化、アナリティクス、AI Copilot はそれぞれ独立し、ワークフローは分断されています。企業はそのために毎年 3 つの「隠れた税金」を払い続けています。",
    taxes: {
      compliance: {
        kicker: "隠れた税 01",
        headline: "コンプライアンス",
        title: "コンプライアンス税",
        body: "チャージバック、OTIF ペナルティ、監査、許認可、クレーム、SLA 違反——エラーはシステム間の隙間で発生します。",
      },
      data: {
        kicker: "隠れた税 02",
        headline: "データ",
        title: "データ税",
        body: "不正確な予測、サイロ化したシステム、乏しい可視性、遅い意思決定——データは存在しても、行動に変わりません。",
      },
      operations: {
        kicker: "隠れた税 03",
        headline: "オペレーション",
        title: "オペレーション税",
        body: "手作業のワークフロー、労働の非効率、高いオーケストレーションコスト——ソフトウェアがやるべき仕事を人が担っています。",
      },
    },
    note: {
      figure: "数百万〜数千万ドル",
      body: "大企業は「運営する」だけのために、断片化したシステムに年間数百万〜数千万ドルを費やしています。市場は「記録のソフトウェア（Software of Record）」から「行動のソフトウェア（Software of Action）」へ移行しつつあります。",
    },
  },

  category: {
    eyebrow: "カテゴリー",
    title: {
      lead: "ツールを増やすのではなく、",
      accent: "ひとつのオペレーティングシステムを",
      tail: "",
    },
    lede: "ITEM AI は「81 プロダクトのカタログ」ではありません。ひとつのプラットフォームと階層型の拡張戦略——複数の拡張ベクトルを持つ、カテゴリーを定義するオペレーティングシステムです。",
    old: {
      title: "もう不要 · 断片化したポイントツール",
      items: [
        "OMS + TMS + WMS + WES + WCS がそれぞれサイロの中",
        "ロボットソフトウェアは単独で稼働",
        "可視化とアナリティクスは分断",
        "「提案」はできても実行できない AI Copilot",
        "ルールと暗黙知はベテラン担当者の頭の中",
      ],
    },
    next: {
      title: "これからは · ひとつの統合オペレーティングシステム",
      items: [
        "輸送・倉庫・ヤード・在庫・ロボティクスを横断",
        "労働力・計画・コンプライアンス・インテリジェンスを同一平面に",
        "単一のオントロジーが一貫した実行可能なインテリジェンスを駆動",
        "意思決定はガバナンスされた自動アクションに直結",
        "人 + AI + ロボットが同一ランタイムで協調",
      ],
    },
    thesis: {
      lead: "ITEM AI = フィジカルサプライチェーンのための",
      accent: "エンタープライズ AI オペレーティングシステム",
      tail: "。",
      line2:
        "オントロジー駆動のひとつの AI OS が、断片化したエンタープライズソフトウェアを置き換えます。",
    },
  },

  stack: {
    eyebrow: "プラットフォームアーキテクチャ",
    title: "The ITEM Stack — 1 ページでわかるプラットフォーム",
    lede: "上から下への 7 層スタック。各層は単体でもモート（堀）であり、重なり合うことで、ポイントソリューションには置き換え不可能なオペレーティングシステムになります。",
    layers: {
      applications: {
        name: "アプリケーション層",
        detail: "TMS · WMS · OMS · YMS · WES · WCS · Control Tower",
        tag: "収益プロダクト",
      },
      ai: {
        name: "AI プロダクト層",
        detail: "ITEM.GPT · ITEM.Claw · ITEM.Predict · ITEM.Sense",
        tag: "中核収益",
      },
      foundry: {
        name: "エンタープライズ運営プラットフォーム",
        detail:
          "データ統合 · アプリビルダー · ワークフローオーケストレーション · デジタルツイン",
        tag: "PaaS",
      },
      aip: {
        name: "AI ランタイム",
        detail: "マルチモデルオーケストレーション · エージェントランタイム · ガバナンスと監査",
        tag: "戦略プラットフォーム",
      },
      ontology: {
        name: "オペレーショナルインテリジェンス / セマンティック層",
        detail:
          "ナレッジグラフ · デジタルツイン · ルールエンジン · 単一の信頼できる情報源",
        tag: "モート（堀）· 単体では販売しない",
      },
      harness: {
        name: "デプロイメント層",
        detail:
          "CI/CD · クラウド / オンプレ / エアギャップ / エッジ · コンプライアンスとロールバック",
        tag: "エンタープライズインフラ",
      },
      infrastructure: {
        name: "インフラストラクチャ",
        detail: "Private Stack · Cloud · Edge · GPU / NPU",
        tag: "IaaS",
      },
    },
    note: "すべての運営判断が ITEM のビジネスグラフに依存する——オントロジー依存により、このスタックは極めて置き換えにくいものになります。",
  },

  systems: {
    eyebrow: "5 つのコアレイヤー",
    title: "5 つのコアレイヤー——それぞれ明確な設計目的を持つ",
    lede: "各システムには明確な設計目的と商業的役割があります。それ以外はすべて「プラットフォーム拡張」であり、新しいスタートアップではありません。",
    labels: { design: "設計：", purpose: "目的：", role: "商業的役割：" },
    cards: {
      ontology: {
        kicker: "01 · 意味のシステム",
        badge: "モート（堀）",
        design:
          "ガバナンスされたナレッジグラフとリアルタイムのデジタルツイン層。ビジネスオブジェクト、関係、ロジック、アクション、動的ルールを定義します。",
        purpose:
          "プラットフォーム全体で一貫した実行可能なインテリジェンスを駆動する単一の信頼できる情報源——注文、貨物、コンテナ、トラック、ドライバー、倉庫、ロボット、ドックドアを同一のセマンティックモデルに収めます。",
        products: {
          studio: "DDD モデリング",
          executor: "ナレッジグラフと検索",
        },
        caps: [
          "オブジェクトモデリング",
          "ナレッジグラフ",
          "ルールエンジン",
          "デジタルツイン",
          "セマンティック相互運用",
        ],
        role: "単体では販売しません。戦略的モート層としてバンドル提供し、オントロジー依存を生み出します。",
      },
      foundry: {
        kicker: "02 · データとアプリのシステム",
        badge: "PaaS",
        design:
          "オントロジー駆動のエンタープライズ運営プラットフォーム——異種データソースの統合、ローコードのアプリビルダー、ワークフローオーケストレーション、運営デジタルツイン。",
        purpose:
          "人 + AI チームの間でインテリジェントな意思決定をオーケストレーションします。OMS、TMS、WMS、YMS、WES、WCS などすべての業務アプリの開発・実行基盤です。",
        products: { bi: "データプラットフォーム", di: "データ統合" },
        caps: [
          "データ統合",
          "アプリビルダー",
          "イベント処理",
          "データパイプライン",
          "Low-code",
        ],
        role: "PaaS——シートライセンス · ワークフロー実行 · 開発者ライセンス · エンタープライズプラットフォームサブスクリプション。",
      },
      aios: {
        kicker: "03 · インテリジェンスのシステム",
        badge: "バンドルプラットフォーム層",
        design:
          "生産性・インテリジェンス・バリューチェーンの意思決定のために設計された AI レディなオペレーティングシステム——統合運営ワークスペース、リアルタイムデータ融合、組み込み Copilot、イベントオーケストレーション。",
        purpose:
          "人 + AI が同じ作業面で観察・予測・決定・最適化を行い、企業全体のリアルタイム運営頭脳となります。",
        products: { runtime: "エージェント実行レイヤー" },
        caps: [
          "意思決定インテリジェンス",
          "リアルタイム分析",
          "エンタープライズ検索",
          "Copilot",
          "人と AI の協働",
        ],
        role: "バンドルされるプラットフォーム層。すべてのエンタープライズ導入に同梱され、全体 ACV を引き上げます。",
      },
      aip: {
        kicker: "04 · アクションのシステム",
        badge: "戦略プラットフォーム",
        design:
          "エンタープライズ AI ランタイム——マルチモデルオーケストレーション、エージェントランタイム、自律ワークフロー、ヒューマンインザループのガバナンス、プロンプト / バージョン管理、可観測性、コンプライアンス監査。",
        purpose:
          "LLM とエージェントを現実世界のデータと運営システムに安全にアンカーし、意思決定を監査可能・取り消し可能な実行に変えます。",
        products: {
          gpt: "マルチエージェントプラットフォーム",
          flow: "ワークフロー",
          vision: "IoT・GIS・ビジョンモデル",
        },
        caps: [
          "マルチモデルオーケストレーション",
          "エージェントランタイム",
          "ツール呼び出し",
          "ガバナンス",
          "監査",
        ],
        role: "中核プラットフォームプロダクト——SaaS ライセンス · 従量課金コンピュート · エージェント実行料 · FaaS 課金。",
      },
      harness: {
        kicker: "05 · デリバリーのシステム",
        badge: "エンタープライズインフラ",
        design:
          "継続的デリバリー / 自律デプロイメントプラットフォーム——あらゆる環境（クラウド、オンプレ、エアギャップ、エッジ）でソフトウェアを自律的にデプロイ・監視・更新・管理します。カナリアリリース、ロールバック、コンプライアンス監視を内蔵。",
        purpose:
          "ミッションクリティカルな AI を顧客のあらゆる境界の内側に届けます。政府・防衛・医療・製造の参入要件であり、Private Stack（ソブリン AI クラウド）のデリバリーエンジンです。",
        products: {
          ide: "エージェント開発環境",
          iam: "エンタープライズの ID とアクセス管理",
          deploy: "どこでも実行・ガバナンス付き",
        },
        caps: [
          "CI/CD",
          "エアギャップ",
          "エッジ",
          "カナリアリリース",
          "ロールバック",
          "環境ガバナンス",
        ],
        role: "エンタープライズインフラプロダクト。通常はエンタープライズ契約にバンドルされ、Private Stack の 2〜3 倍の ACV プレミアムを解放します。",
      },
    },
  },

  products: {
    eyebrow: "AI コアプロダクト",
    title: {
      lead: "22 の AI コアプロダクト：",
      accent: "12 汎用アプリ × 10 業界テンプレート",
      tail: "",
    },
    lede: "12 の汎用 AI アプリケーションは業界を問わず再利用されます——意思決定、実行、予測、可視化、サポート、成長。10 の業界テンプレートが、業界オントロジー・プリビルトワークフロー・コンプライアンスルール・コネクターをプラガブルなソリューションにパッケージします。",
    groups: {
      ontology: "意味のシステム",
      foundry: "データとアプリのシステム",
      aios: "インテリジェンスのシステム",
      aip: "アクションのシステム",
      apps: "スタンドアロン AI プロダクト",
    },
    items: {
      itemGpt: {
        tag: "AI for Every Decision. In Real Time.",
        desc: "自然言語オペレーションインターフェース——対話がそのままクエリ、意思決定、アクションになります。",
      },
      itemDoc: {
        tag: "Documents That Process Themselves.",
        desc: "ドキュメント自動化——契約書、請求書、レポートのインテリジェントな読み取り・生成・アーカイブ。",
      },
      itemSense: {
        tag: "See Everything. Instantly.",
        desc: "リアルタイム可視化 + デジタルツインコックピット——ネットワーク全体のライブな単一画面。",
      },
      itemPredict: {
        tag: "Predict What's Next.",
        desc: "汎用予測エンジン——需要・キャッシュフロー・客数・リソース。オペレーションが壊れる前に兆候を捉えます。",
      },
      itemOpsAi: {
        tag: "Operations That Run Themselves.",
        desc: "自律的な意思決定 + 継続的最適化——自走するオペレーションの頭脳。",
      },
      itemAudit: {
        tag: "Find What You're Losing.",
        desc: "請求エラー検出、コンプライアンス監査、コスト回収——1 ドル残らず取り戻します。",
      },
      itemVision: {
        tag: "See What Others Miss.",
        desc: "コンピュータビジョン——セキュリティ、品質検査、現場モニタリング、地理空間インテリジェンス。",
      },
      itemVoice: {
        tag: "Operate Hands-Free.",
        desc: "音声 AI——現場作業とインバウンドコールのためのハンズフリーインターフェース。",
      },
      itemClaw: {
        tag: "Execution Without Friction.",
        desc: "マルチエージェントワークフロー実行器——提案から実行へ、意思決定をガバナンスされたアクションに変えます。",
      },
      itemFlow: {
        tag: "Design. Automate. Scale.",
        desc: "ビジュアル AI ワークフロービルダー——承認、ルーティング、エスカレーション、例外処理。",
      },
      itemSupport: {
        tag: "Every Channel. One Thread.",
        desc: "オムニチャネルチケッティング：メール · メッセージ · SMS · 電話——完全な運営コンテキストと AI 起草の解決案付き。",
      },
      itemGrow: {
        tag: "Pipeline That Never Sleeps.",
        desc: "GTM AI——SDR/BDR · SEO/AEO/GEO · コンテンツ生成。オントロジー駆動のインテリジェントなアウトリーチ。",
      },
    },
    templates: {
      title: "業界テンプレート",
      subtitle: "プラガブルな垂直ソリューション · Layer 6",
      proven: "実証済み",
      items: {
        itemChain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "オーダー / 輸送 / 倉庫 / ヤードのフル実行——フラグシップ",
        },
        itemDock: {
          tag: "PORTS & DRAYAGE",
          desc: "港湾、ドレージ、コンテナオペレーション",
        },
        itemTrade: {
          tag: "GLOBAL TRADE",
          desc: "関税分類、コンプライアンス、貿易インテリジェンス",
        },
        itemFin: {
          tag: "FINANCIAL ADVISORY",
          desc: "アドバイザリー：クライアントプロファイリング、ポートフォリオ分析、各種届出",
        },
        itemDine: {
          tag: "RESTAURANT OPS",
          desc: "レストラン：シフト管理、仕込み予測、廃棄ロス管理",
        },
        itemEstate: {
          tag: "PROPERTY MANAGEMENT",
          desc: "不動産：リース、テナントサービス、修繕、エネルギー",
        },
        itemBuild: {
          tag: "REAL ESTATE DEV",
          desc: "開発：スケジュール、ベンダー、コスト、販売",
        },
        itemHealth: {
          tag: "HEALTHCARE OPS",
          desc: "ヘルスケア：コールドチェーン、有効期限、トレーサビリティ",
        },
        itemAuto: {
          tag: "MANUFACTURING",
          desc: "製造：JIT シーケンシング、サプライヤーリスク",
        },
        itemRetail: {
          tag: "RETAIL & COMMERCE",
          desc: "小売：オムニチャネル注文、在庫、返品",
        },
      },
    },
    note: "このほか、プラットフォームコンポーネントが各システムに同梱されます（上記のプロダクト数には含まれません）：Agent Runtime（AI OS）· Agent IDE · IAM · Multi-Tenant Deployment Platform（Harness）。",
  },

  physical: {
    eyebrow: "フィジカル AI と RaaS",
    title: {
      lead: "ハードウェアは顧客の CapEx、",
      accent: "インテリジェンスは永続的な価値エンジン",
      tail: "",
    },
    lede: "11 のロボティクスパートナー（Dealer/ODM 6 社 + Reseller/OEM 5 社）が RaaS 収益モデルを理論から現実に変えます。エコシステム内のすべてのロボットがサブスクリプションのエンドポイントとなり、ITEM の WCS、WES、ITEM.Claw、ITEM.Vision、異種ロボット自律レイヤーがハードウェアの上で稼働します。",
    fleet: {
      caption: "統合フリート能力マップ · 11 パートナー",
      headers: {
        type: "ロボットタイプ",
        partner: "パートナー",
        environment: "環境",
        modules: "ITEM モジュール",
        raas: "RaaS モデル",
      },
      rows: {
        hangcha: {
          type: "自律フォークリフト AGF/AMR",
          environment: "屋内 DC",
          modules: "WCS · WES · ITEM.Claw",
          raas: "$ / フォークリフト / 月",
        },
        libiao: {
          type: "仕分け AMR",
          environment: "フルフィルメント",
          modules: "WES · OMS · ITEM.Claw",
          raas: "$ / 仕分けまたはロボット",
        },
        xyz: {
          type: "ピースピッキングロボット",
          environment: "ピッキングステーション",
          modules: "WES · OMS · ITEM.Vision",
          raas: "$ / ピック",
        },
        unitree: {
          type: "ヒューマノイド",
          environment: "DC / 空港 / 工場",
          modules: "WES · WCS · 自律レイヤー",
          raas: "$ / ヒューマノイド / 月",
        },
        pudu: {
          type: "屋内配送ロボット",
          environment: "DC / 病院 / ホテル",
          modules: "FMS · WES · ITEM.Voice",
          raas: "$ / 配送",
        },
        deepRobotics: {
          type: "四足点検ロボット",
          environment: "ヤード / 周辺 / 屋外",
          modules: "YMS · ITEM.Vision · ITEM.Sense",
          raas: "$ / 巡回 / 月",
        },
        zsRobotics: {
          type: "産業用 AMR",
          environment: "DC パレット搬送",
          modules: "WES · WCS · ITEM.Claw",
          raas: "$ / ロボット / 月",
        },
        galaxis: {
          type: "屋内測位バックボーン",
          environment: "DC 内部",
          modules: "全ロボットモジュール",
          raas: "インフラサブスクリプション",
        },
        lanxin: {
          type: "SLAM ナビゲーションインテリジェンス",
          environment: "全環境",
          modules: "WCS · デジタルツイン",
          raas: "SDK ライセンス",
        },
        slamtec: {
          type: "LiDAR センサー",
          environment: "全環境",
          modules: "フィジカル AI 層",
          raas: "RaaS に組み込み",
        },
        mita: {
          type: "システムインテグレーション",
          environment: "全デプロイメント",
          modules: "WCS · WES · PLC",
          raas: "プロフェッショナルサービス",
        },
      },
    },
    ledger: {
      caption: "RaaS 台帳 · エンタープライズ DC 1 拠点",
      headers: {
        fleet: "フリート",
        capex: "顧客 CapEx",
        subscription: "ITEM 年間サブスクリプション",
      },
      rows: {
        forklifts: "20× Hangcha フォークリフト",
        sortation: "50× Libiao 仕分け",
        picking: "10× XYZ ピッキング",
        humanoids: "30× Unitree G1 ヒューマノイド",
        mixed: "5× Deep Robotics + 20× Pudu",
        infra: "Galaxis / Slamtec インフラ",
        total: "DC あたり合計",
      },
    },
    coverage: {
      body: "この規模で 25 の DC を展開すれば、ITEM のインテリジェンスレイヤーがロボットフリート全体をカバーします。顧客にとってハードウェアリスクはゼロ、アセットライトです。インテリジェンスレイヤーは物理オペレーションに深く組み込まれ、継続的な価値を提供します。",
      footnote:
        "ヒューマノイドの製造コストは前年比約 40% 下落しています（Goldman Sachs）——ハードウェアの価格が崩れるほど、ソフトウェアのインテリジェンス層が価値の取り分を拡大します。私たちはロボットを売りません。",
      emphasis: "すべてのロボットをより賢くし、そのインテリジェンスに永続的に課金します。",
    },
  },

  flywheel: {
    eyebrow: "フライホイール",
    title: {
      lead: "パイプラインからプラットフォーム、解決までの",
      accent: "完全なクローズドループ",
      tail: "",
    },
    lede: "システムが自ら売り、自ら動き、自ら改善し、自ら定着する——スローガンではなく、アーキテクチャとして。各ステージがデータをオントロジーへ還流します。",
    nodes: {
      grow: "顧客を見つける：SDR / AEO / GEO パイプラインインテリジェンス",
      gpt: "対話型デモと意思決定インターフェース",
      sce: "OMS · TMS · WMS · WES · YMS がオペレーションを運用",
      sense: "すべてをリアルタイムで監視",
      support: "すべての例外を解決",
      audit: "1 ドル残らず回収 → ITEM.Grow の拡張へ還流",
    },
    note: {
      label: "運営データのフライホイール：",
      body: "ワークフローが増えるほど意思決定が増え、モデルが良くなり、自動化が良くなります。ITEM.Support での解決のひとつひとつが次の ITEM.GPT の回答を訓練し、ITEM.Audit の発見のひとつひとつが次の ITEM.Grow アウトリーチのケーススタディになります。これこそ、早期の収益基盤に Palantir 級の倍率を正当化するフライホイールです。",
    },
  },

  cases: {
    eyebrow: "ケーススタディ",
    label: "ケース",
    title: "実証済みのエントリーシナリオ",
    lede: "価値の高いコントロールタワーのユースケースで参入し、自律オペレーションへ拡張します。以下の 3 つのシナリオ類型は、パイロットと本番導入でプラットフォーム価値を実証済みです。",
    items: {
      electronics: {
        title: "コンシューマーエレクトロニクスのサプライチェーン",
        body: "グローバルな工場 + 倉庫 + 輸送の可視化、欠品予測、受注確約の最適化。サプライヤーから顧客まで、あらゆるオブジェクトを単一のオントロジーでカバーします。",
      },
      threePl: {
        title: "3PL マルチ倉庫コントロールタワー",
        body: "ネットワーク全体の例外管理、労働力・在庫・出荷の意思決定、顧客向け可視化。Kuehne+Nagel 級の Tier-1 3PL——Libiao の約 50 台 AMR による RaaS 仕分けフリートがすでに稼働——は、まさにこのバイヤーペルソナです。",
      },
      yard: {
        title: "ヤード + ドックインテリジェンス（LA/LB ビーチヘッド）",
        body: "アポイントメントスケジューリング、ドック割当、トレーラー追跡、滞留時間の圧縮。LA/LB + Inland Empire は理想的なくさび市場であり、ITEM.Dock がここで港湾サイドの主導権を確立します。",
      },
    },
    metrics: {
      cost: "運営コストの削減",
      onTime: "定時パフォーマンスの向上",
      exceptions: "例外処理の自動化",
      turns: "在庫回転率の向上（物流 AI アーリーアダプター）",
    },
    note: "注：上の 3 つは ITEM パイロットの目標レンジです。在庫回転のデータは物流 AI アーリーアダプターの業界ベンチマーク（コスト約 15% 減、回転率約 35% 増）に基づきます。",
  },

  implementation: {
    eyebrow: "導入サイクル",
    title: "8〜12 週間で最初の本番パイロットへ",
    lede: "Forward Deployed Engineer（FDE）モデル：小規模チームが現場に入り、オントロジーファーストで、ゲート検収により前進します。3〜6 ヶ月でエンタープライズ展開を完了します。",
    phases: {
      discovery: {
        title: "ディスカバリー",
        duration: "2 週間",
        body: "運営プロファイリング、データソースの棚卸し、ユースケースと KPI の確定、商務・セキュリティのオンボーディング。",
      },
      ontology: {
        title: "オントロジー + データ",
        duration: "4〜6 週間",
        body: "顧客のビジネスオブジェクトとルールをモデリングし、ERP / WMS / TMS / IoT データを接続します。オントロジーが一度できれば、以降の各モジュールの限界導入コストは下がり続けます。",
      },
      pilot: {
        title: "パイロットエージェント",
        duration: "6〜8 週間",
        body: "ガバナンス付きランタイム上で最初の本番エージェントとコントロールタワーワークフローを提供し、KPI ゲートで検収します。",
      },
      scale: {
        title: "アプリのスケール",
        duration: "8〜12 週間",
        body: "SCE スイートモジュールのマルチサイト展開、データドメインとロールベースアプリの追加。",
      },
      autonomous: {
        title: "自律オペレーション",
        duration: "6〜12 ヶ月",
        body: "ロボットフリート、RaaS サブスクリプション、自律実行が本番稼働し、顧客は「置き換え不能」の状態に入ります。",
      },
    },
  },

  customers: {
    eyebrow: "ターゲット顧客",
    title: "このオペレーティングシステムを買うのは誰か",
    bestFit: {
      kicker: "ベストフィット顧客",
      items: {
        manufacturers: {
          label: "製造業",
          detail: "マルチサイトの生産・倉庫・グローバル流通（まずはコンシューマーエレクトロニクス）",
        },
        logistics: {
          label: "3PL / 物流事業者",
          detail: "WMS、TMS、ヤード、ドックのネットワークを運営",
        },
        forwarders: {
          label: "フォワーダー / キャリア / 通関業者",
          detail: "貨物インテリジェンスと貿易コンプライアンスの買い手",
        },
        retail: {
          label: "小売とサプライヤー",
          detail: "需要・在庫・フルフィルメントのインテリジェンス",
        },
        ports: {
          label: "港湾・ターミナル・施設運営者",
          detail: "物理資産 + フィジカル AI の自然な主戦場",
        },
      },
    },
    vertical: {
      kicker: "垂直展開（認証で解放）",
      body: "認証は同時に 2 つの仕事をします。エンタープライズ調達の摩擦を取り除くこと、そしてプラットフォームの成熟度を示すことです。14 の認証がグローバルな主要コンプライアンスフレームワークをカバーします。",
      certs: {
        iso27001: "EU / 英国 / APAC エンタープライズ営業",
        iso42001: "AI ガバナンスの先行者",
        hitrust: "医薬品コールドチェーン",
        fedramp: "連邦 + DoD 物流（$50B+）",
        ctpat: "税関と港湾",
        cmmc: "防衛コントラクター",
        tisax: "自動車サプライチェーン",
        other: "ヘルスケア · 金融 · ESG",
      },
    },
  },

  competitive: {
    eyebrow: "競争ポジション",
    title: {
      lead: "Palantir はデータインテリジェンス、",
      accent: "ITEM はオペレーション実行",
      tail: "",
    },
    lede: "単一のオントロジー、単一のデータモデル、単一のエージェントランタイムの上に、ITEM の統合アーキテクチャは Palantir、Manhattan、ServiceNow、MuleSoft の機能等価物を内包します——その時価総額の合計だけで $500B を超えます。",
    table: {
      caption: "能力マップ · ITEM vs データプラットフォーム vs レガシー SCM",
      capability: "能力",
      rows: {
        ontology: {
          label: "オントロジー / セマンティック層",
          item: "ネイティブ",
          palantir: "強い",
          databricks: "限定的",
          manhattan: "なし",
          sap: "限定的",
        },
        apps: {
          label: "サプライチェーンアプリ（OMS/TMS/WMS/YMS）",
          item: "ネイティブ",
          palantir: "カスタム",
          databricks: "パートナー",
          manhattan: "強い（レガシー）",
          sap: "強い（レガシー）",
        },
        agents: {
          label: "マルチエージェント実行ランタイム",
          item: "ネイティブ",
          palantir: "強い",
          databricks: "強い",
          manhattan: "なし",
          sap: "Copilot 級",
        },
        robots: {
          label: "フィジカル AI / ロボット協調",
          item: "ネイティブ（11 パートナーのフリート）",
          palantir: "なし",
          databricks: "なし",
          manhattan: "限定的",
          sap: "限定的",
        },
        deploy: {
          label: "エアギャップ / エッジ / ソブリン展開",
          item: "ネイティブ（Harness）",
          palantir: "強い",
          databricks: "限定的",
          manhattan: "なし",
          sap: "部分的",
        },
        flywheel: {
          label: "クローズドループ GTM + CX フライホイール",
          item: "ネイティブ（Grow → Support → Audit）",
          palantir: "なし",
          databricks: "なし",
          manhattan: "なし",
          sap: "複数のクラウド製品に分散",
        },
        focus: {
          label: "フィジカルオペレーション特化",
          item: "コア",
          palantir: "広範なエンタープライズ",
          databricks: "データ / AI",
          manhattan: "SCM のみ",
          sap: "生産性 / データ",
        },
      },
    },
    note: "競争ポジショニングは公開されている製品説明（Palantir AIP/Ontology、Databricks Data Intelligence Platform、Manhattan Active、Microsoft Fabric/Copilot Studio など）に基づきます。",
    cards: {
      incumbents: {
        kicker: "対 既存ベンダー",
        body: "Manhattan、Blue Yonder、SAP、Oracle はエージェント型 AI 以前に作られました。オペレーションを記録はできても、動かすことはできません。各社の既存導入ベースはすべて ITEM の転換機会です。",
      },
      dataPlatforms: {
        kicker: "対 データプラットフォーム",
        body: "Palantir と Databricks はインサイトで止まります。ITEM はアプリ + AI ランタイム + セマンティクス + デプロイメントのフルスタックを所有し、インサイトからドックドアとロボットまで到達します。",
      },
      pointTools: {
        kicker: "対 AI ポイントツール",
        body: "多くの AI 企業は Copilot で止まりますが、私たちは実行します。デジタルとフィジカルのオペレーションを統合する「人 + AI + ロボット」は、どのポイントツールにも複製できない形態です。",
      },
    },
  },

  closing: {
    eyebrow: "ビジョン",
    vision: {
      lead: "ワンプラットフォーム、ワンオントロジー、ワンインテリジェンスレイヤー——",
      accent: "人 + AI + ロボット + オペレーション",
      tail: "を統合し、企業が自律的に稼働します。",
    },
    fine: "8〜12 週間でパイロットを開始できます。ひとつのシナリオで価値を証明し、その後ネットワーク全体に拡張——既存の ERP・WMS・TMS と並行して稼働します。",
    cta: "製品デモを予約する",
  },

  footer: "製品概要 · 2026",
};

const es: Shape = {
  nav: { label: "Secciones", story: "Historia", platform: "Plataforma", products: "Productos" },

  hero: {
    badge: "Visión general del producto · AI OS para la cadena de suministro · 2026",
    title: {
      lead: "El ",
      accent: "sistema operativo",
      tail: " nativo de IA para la economía física",
    },
    subtitle:
      "ITEM AI sustituye el software fragmentado de cadena de suministro por un único sistema operativo empresarial de IA impulsado por una ontología: personas + IA + robots + operaciones unificadas en transporte, almacenamiento, logística, comercio y automatización industrial.",
    stats: {
      aiProducts: "Productos de IA principales",
      coreLayers: "Capas centrales",
      pilot: "Semanas hasta el piloto",
      exceptions: "Automatización de excepciones",
    },
    tagline: "Una plataforma · múltiples vectores de expansión",
  },

  problem: {
    eyebrow: "El problema",
    title: "Las cadenas de suministro globales funcionan sobre sistemas fragmentados",
    lede: "Un proveedor para el TMS, otro para el WMS y otro más para el OMS; el software de robótica, la visibilidad, la analítica y los copilotos de IA viven por separado, con los flujos de trabajo rotos entre ellos. Las empresas pagan por esto tres impuestos ocultos cada año.",
    taxes: {
      compliance: {
        kicker: "Impuesto oculto 01",
        headline: "Cumplimiento",
        title: "El impuesto de cumplimiento",
        body: "Contracargos, penalizaciones OTIF, auditorías, permisos, reclamaciones, incumplimientos de SLA: los errores ocurren en las costuras entre sistemas.",
      },
      data: {
        kicker: "Impuesto oculto 02",
        headline: "Datos",
        title: "El impuesto de los datos",
        body: "Previsiones imprecisas, sistemas aislados, poca visibilidad, decisiones tardías: los datos existen, pero nunca se convierten en acción.",
      },
      operations: {
        kicker: "Impuesto oculto 03",
        headline: "Operaciones",
        title: "El impuesto operativo",
        body: "Flujos manuales, ineficiencia laboral, orquestación costosa: personas haciendo el trabajo que debería hacer el software.",
      },
    },
    note: {
      figure: "De millones a decenas de millones",
      body: 'Las grandes empresas gastan de millones a decenas de millones al año en sistemas fragmentados solo para "operar". El mercado está pasando del software de registro (Software of Record) al software de acción (Software of Action).',
    },
  },

  category: {
    eyebrow: "La categoría",
    title: { lead: "No más herramientas: ", accent: "un sistema operativo", tail: "" },
    lede: "ITEM AI no es un catálogo de 81 productos. Es una plataforma con una estrategia de expansión por capas: un sistema operativo que define categoría, con múltiples vectores de crecimiento.",
    old: {
      title: "Ya no · herramientas puntuales fragmentadas",
      items: [
        "OMS + TMS + WMS + WES + WCS, cada uno en su propio silo",
        "El software de robótica funciona de forma aislada",
        "Visibilidad y analítica desconectadas",
        "Copilotos de IA que sugieren pero no ejecutan",
        "Las reglas y el conocimiento tácito viven en la cabeza de los operadores veteranos",
      ],
    },
    next: {
      title: "En su lugar · un sistema operativo unificado",
      items: [
        "Abarca transporte, almacén, patio, inventario y robótica",
        "Personal, planificación, cumplimiento e inteligencia en un mismo plano",
        "Una ontología que impulsa inteligencia coherente y ejecutable",
        "Las decisiones se convierten en acciones automatizadas y gobernadas",
        "Personas + IA + robots coordinados en un único runtime",
      ],
    },
    thesis: {
      lead: "ITEM AI = el ",
      accent: "sistema operativo empresarial de IA",
      tail: " para las cadenas de suministro físicas.",
      line2:
        "Un único AI OS impulsado por ontología que sustituye al software empresarial fragmentado.",
    },
  },

  stack: {
    eyebrow: "La plataforma",
    title: "The ITEM Stack: la plataforma en una sola página",
    lede: "Una pila de siete capas, de arriba abajo. Cada capa es una ventaja defensiva por sí sola; juntas forman un sistema operativo que ninguna solución puntual puede desplazar.",
    layers: {
      applications: {
        name: "Aplicaciones",
        detail: "TMS · WMS · OMS · YMS · WES · WCS · Control Tower",
        tag: "Productos de ingresos",
      },
      ai: {
        name: "Capa de IA",
        detail: "ITEM.GPT · ITEM.Claw · ITEM.Predict · ITEM.Sense",
        tag: "Ingresos centrales",
      },
      foundry: {
        name: "Plataforma de operaciones empresariales",
        detail:
          "Integración de datos · Constructor de apps · Orquestación de flujos · Gemelo digital",
        tag: "PaaS",
      },
      aip: {
        name: "Runtime de IA",
        detail: "Orquestación multimodelo · Runtime de agentes · Gobernanza y auditoría",
        tag: "Plataforma estratégica",
      },
      ontology: {
        name: "Inteligencia operativa / capa semántica",
        detail:
          "Grafo de conocimiento · Gemelo digital · Motor de reglas · Fuente única de verdad",
        tag: "Ventaja defensiva · nunca se vende sola",
      },
      harness: {
        name: "Capa de despliegue",
        detail:
          "CI/CD · Nube / on-premise / air-gapped / edge · Cumplimiento y rollback",
        tag: "Infraestructura empresarial",
      },
      infrastructure: {
        name: "Infraestructura",
        detail: "Private Stack · Cloud · Edge · GPU / NPU",
        tag: "IaaS",
      },
    },
    note: "Cada decisión operativa depende del grafo de negocio de ITEM: la dependencia de la ontología hace que la pila sea extraordinariamente difícil de sustituir.",
  },

  systems: {
    eyebrow: "Cinco capas centrales",
    title: "Cinco capas centrales, cada una con un propósito de diseño claro",
    lede: "Cada sistema tiene un propósito de diseño y un rol comercial definidos. Todo lo demás es una extensión de la plataforma, no una nueva empresa.",
    labels: { design: "Diseño:", purpose: "Propósito:", role: "Rol comercial:" },
    cards: {
      ontology: {
        kicker: "01 · SISTEMA DE SIGNIFICADO",
        badge: "La ventaja defensiva",
        design:
          "un grafo de conocimiento gobernado y una capa de gemelo digital en tiempo real que define objetos de negocio, relaciones, lógica, acciones y reglas dinámicas.",
        purpose:
          "la fuente única de verdad que impulsa inteligencia coherente y ejecutable en toda la plataforma: pedidos, envíos, contenedores, camiones, conductores, almacenes, robots y muelles en un mismo modelo semántico.",
        products: {
          studio: "Modelado DDD",
          executor: "Grafo de conocimiento y recuperación",
        },
        caps: [
          "Modelado de objetos",
          "Grafo de conocimiento",
          "Motor de reglas",
          "Gemelo digital",
          "Interoperabilidad semántica",
        ],
        role: "nunca se vende por separado: se incluye como capa defensiva estratégica que genera dependencia de la ontología.",
      },
      foundry: {
        kicker: "02 · SISTEMA DE DATOS Y APLICACIONES",
        badge: "PaaS",
        design:
          "la plataforma de operaciones empresariales impulsada por la ontología: unificación de fuentes de datos heterogéneas, constructor de apps low-code, orquestación de flujos y gemelos digitales operativos.",
        purpose:
          "orquestar decisiones inteligentes entre equipos humanos y de IA; el sustrato de desarrollo y ejecución para OMS, TMS, WMS, YMS, WES, WCS y cualquier aplicación de negocio.",
        products: { bi: "Plataforma de datos", di: "Integración de datos" },
        caps: [
          "Integración de datos",
          "Constructor de apps",
          "Procesamiento de eventos",
          "Pipelines",
          "Low-code",
        ],
        role: "PaaS: licencias por usuario · ejecución de flujos · licencias de desarrollador · suscripción de plataforma empresarial.",
      },
      aios: {
        kicker: "03 · SISTEMA DE INTELIGENCIA",
        badge: "Plataforma incluida",
        design:
          "un sistema operativo preparado para IA orientado a la productividad, la inteligencia y las decisiones de cadena de valor: espacio de trabajo operativo unificado, fusión de datos en tiempo real, copilotos integrados y orquestación de eventos.",
        purpose:
          "permitir que personas e IA observen, predigan, decidan y optimicen sobre una misma superficie: el cerebro operativo en tiempo real de la empresa.",
        products: { runtime: "la capa de ejecución de agentes" },
        caps: [
          "Inteligencia de decisión",
          "Analítica en tiempo real",
          "Búsqueda empresarial",
          "Copilot",
          "Colaboración humano-IA",
        ],
        role: "capa de plataforma incluida en cada despliegue empresarial, que eleva el ACV total.",
      },
      aip: {
        kicker: "04 · SISTEMA DE ACCIÓN",
        badge: "Plataforma estratégica",
        design:
          "el runtime de IA empresarial: orquestación multimodelo, runtime de agentes, flujos autónomos, gobernanza con supervisión humana, gestión de prompts y versiones, observabilidad y auditoría de cumplimiento.",
        purpose:
          "anclar de forma segura los LLM y los agentes a los datos reales y a los sistemas operativos, convirtiendo las decisiones en ejecución auditable y reversible.",
        products: {
          gpt: "Plataforma multiagente",
          flow: "Flujos de trabajo",
          vision: "Modelos de IoT, GIS y visión",
        },
        caps: [
          "Orquestación multimodelo",
          "Runtime de agentes",
          "Llamada a herramientas",
          "Gobernanza",
          "Auditoría",
        ],
        role: "producto central de plataforma: licencias SaaS · cómputo por consumo · tarifas de ejecución de agentes · facturación FaaS.",
      },
      harness: {
        kicker: "05 · SISTEMA DE ENTREGA",
        badge: "Infraestructura empresarial",
        design:
          "la plataforma de entrega continua y despliegue autónomo: despliega, supervisa, actualiza y gestiona software en cualquier entorno (nube, on-premise, air-gapped, edge) con versiones canary, rollback y monitorización de cumplimiento integrados.",
        purpose:
          "llevar la IA de misión crítica dentro de cualquier frontera del cliente: el requisito de entrada para gobierno, defensa, salud e industria, y el motor de entrega de Private Stack (nube de IA soberana).",
        products: {
          ide: "Entorno de desarrollo de agentes",
          iam: "Identidad y acceso empresarial",
          deploy: "Ejecución en cualquier lugar, con gobernanza",
        },
        caps: [
          "CI/CD",
          "Air-gapped",
          "Edge",
          "Despliegues canary",
          "Rollback",
          "Gobernanza de entornos",
        ],
        role: "producto de infraestructura empresarial, normalmente incluido en los contratos corporativos; desbloquea la prima de ACV de 2–3× de Private Stack.",
      },
    },
  },

  products: {
    eyebrow: "Productos de IA principales",
    title: {
      lead: "22 productos de IA principales: ",
      accent: "12 aplicaciones generales × 10 plantillas sectoriales",
      tail: "",
    },
    lede: "12 aplicaciones de IA generales se reutilizan en todos los sectores: decidir, ejecutar, predecir, visualizar, dar soporte y crecer. 10 plantillas sectoriales empaquetan la ontología vertical, los flujos preconstruidos, las reglas de cumplimiento y los conectores en soluciones conectables.",
    groups: {
      ontology: "Sistema de significado",
      foundry: "Sistema de datos y aplicaciones",
      aios: "Sistema de inteligencia",
      aip: "Sistema de acción",
      apps: "Productos de IA independientes",
    },
    items: {
      itemGpt: {
        tag: "AI for Every Decision. In Real Time.",
        desc: "Interfaz operativa en lenguaje natural: conversa para consultar, decidir y actuar en toda la plataforma.",
      },
      itemDoc: {
        tag: "Documents That Process Themselves.",
        desc: "Automatización documental: lectura, generación y archivo inteligentes de contratos, facturas e informes.",
      },
      itemSense: {
        tag: "See Everything. Instantly.",
        desc: "Visibilidad en tiempo real y cabina de gemelo digital: una imagen viva de toda la red.",
      },
      itemPredict: {
        tag: "Predict What's Next.",
        desc: "Motor de previsión general: demanda, flujo de caja, afluencia y recursos. Vea la ruptura antes de que ocurra.",
      },
      itemOpsAi: {
        tag: "Operations That Run Themselves.",
        desc: "Decisión autónoma y optimización continua: el cerebro de unas operaciones que se ejecutan solas.",
      },
      itemAudit: {
        tag: "Find What You're Losing.",
        desc: "Detección de errores de facturación, auditoría de cumplimiento y recuperación de costes: recupere cada dólar.",
      },
      itemVision: {
        tag: "See What Others Miss.",
        desc: "Visión por computador: seguridad, control de calidad, supervisión de instalaciones e inteligencia geoespacial.",
      },
      itemVoice: {
        tag: "Operate Hands-Free.",
        desc: "IA de voz: la interfaz manos libres para el trabajo en planta y las llamadas entrantes.",
      },
      itemClaw: {
        tag: "Execution Without Friction.",
        desc: "Ejecutor de flujos multiagente: convierte las decisiones en acciones gobernadas, de la sugerencia a la ejecución.",
      },
      itemFlow: {
        tag: "Design. Automate. Scale.",
        desc: "Constructor visual de flujos con IA: aprobaciones, enrutamiento, escalado y excepciones.",
      },
      itemSupport: {
        tag: "Every Channel. One Thread.",
        desc: "Tickets omnicanal: correo · mensajería · SMS · teléfono, con contexto operativo completo y resoluciones redactadas por IA.",
      },
      itemGrow: {
        tag: "Pipeline That Never Sleeps.",
        desc: "IA para GTM: SDR/BDR · SEO/AEO/GEO · generación de contenido; prospección inteligente impulsada por la ontología.",
      },
    },
    templates: {
      title: "Plantillas sectoriales",
      subtitle: "Verticales conectables · Layer 6",
      proven: "Probada",
      items: {
        itemChain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "Ejecución completa de pedido / transporte / almacén / patio: plantilla insignia",
        },
        itemDock: {
          tag: "PORTS & DRAYAGE",
          desc: "Operaciones portuarias, de drayage y de contenedores",
        },
        itemTrade: {
          tag: "GLOBAL TRADE",
          desc: "Clasificación arancelaria, cumplimiento e inteligencia comercial",
        },
        itemFin: {
          tag: "FINANCIAL ADVISORY",
          desc: "Asesoría: perfilado de clientes, analítica de carteras y reportes regulatorios",
        },
        itemDine: {
          tag: "RESTAURANT OPS",
          desc: "Restauración: turnos, previsión de preparación y control de mermas",
        },
        itemEstate: {
          tag: "PROPERTY MANAGEMENT",
          desc: "Inmuebles: contratos, servicios al inquilino, reparaciones y energía",
        },
        itemBuild: {
          tag: "REAL ESTATE DEV",
          desc: "Promoción: cronogramas, proveedores, costes y ventas",
        },
        itemHealth: {
          tag: "HEALTHCARE OPS",
          desc: "Salud: cadena de frío, caducidades y trazabilidad",
        },
        itemAuto: {
          tag: "MANUFACTURING",
          desc: "Industria: secuenciación JIT y riesgo de proveedores",
        },
        itemRetail: {
          tag: "RETAIL & COMMERCE",
          desc: "Retail: pedidos omnicanal, inventario y devoluciones",
        },
      },
    },
    note: "Los componentes de plataforma se entregan con sus sistemas (no se cuentan arriba): Agent Runtime (AI OS) · Agent IDE · IAM · Multi-Tenant Deployment Platform (Harness).",
  },

  physical: {
    eyebrow: "IA física y RaaS",
    title: {
      lead: "El hardware es el CapEx del cliente: ",
      accent: "la inteligencia es el motor de valor perpetuo",
      tail: "",
    },
    lede: "11 socios de robótica (6 Dealer/ODM + 5 Reseller/OEM) convierten el modelo RaaS de teoría en realidad: cada robot del ecosistema pasa a ser un punto de suscripción, con WCS, WES, ITEM.Claw, ITEM.Vision y la capa de autonomía heterogénea de ITEM ejecutándose sobre el hardware.",
    fleet: {
      caption: "Mapa combinado de capacidades de flota · 11 socios",
      headers: {
        type: "Tipo de robot",
        partner: "Socio",
        environment: "Entorno",
        modules: "Módulos ITEM",
        raas: "Modelo RaaS",
      },
      rows: {
        hangcha: {
          type: "Carretillas autónomas AGF/AMR",
          environment: "CD interior",
          modules: "WCS · WES · ITEM.Claw",
          raas: "$ / carretilla / mes",
        },
        libiao: {
          type: "AMR de clasificación",
          environment: "Fulfillment",
          modules: "WES · OMS · ITEM.Claw",
          raas: "$ / clasificación o robot",
        },
        xyz: {
          type: "Robots de picking unitario",
          environment: "Estaciones de picking",
          modules: "WES · OMS · ITEM.Vision",
          raas: "$ / picking",
        },
        unitree: {
          type: "Humanoides",
          environment: "CD / aeropuerto / fábrica",
          modules: "WES · WCS · Autonomía",
          raas: "$ / humanoide / mes",
        },
        pudu: {
          type: "Robots de reparto en interiores",
          environment: "CD / hospital / hotel",
          modules: "FMS · WES · ITEM.Voice",
          raas: "$ / entrega",
        },
        deepRobotics: {
          type: "Inspección cuadrúpeda",
          environment: "Patio / perímetro / exterior",
          modules: "YMS · ITEM.Vision · ITEM.Sense",
          raas: "$ / ronda / mes",
        },
        zsRobotics: {
          type: "AMR industrial",
          environment: "Movimiento de palés en CD",
          modules: "WES · WCS · ITEM.Claw",
          raas: "$ / robot / mes",
        },
        galaxis: {
          type: "Red troncal de posicionamiento interior",
          environment: "Interior del CD",
          modules: "Todos los módulos de robot",
          raas: "Suscripción de infraestructura",
        },
        lanxin: {
          type: "Inteligencia de navegación SLAM",
          environment: "Todos los entornos",
          modules: "WCS · Gemelo digital",
          raas: "Licencia de SDK",
        },
        slamtec: {
          type: "Sensores LiDAR",
          environment: "Todos los entornos",
          modules: "Capa de IA física",
          raas: "Integrado en el RaaS",
        },
        mita: {
          type: "Integración de sistemas",
          environment: "Todos los despliegues",
          modules: "WCS · WES · PLC",
          raas: "Servicios profesionales",
        },
      },
    },
    ledger: {
      caption: "El libro mayor del RaaS · Un CD empresarial",
      headers: {
        fleet: "Flota",
        capex: "CapEx del cliente",
        subscription: "Suscripción anual de ITEM",
      },
      rows: {
        forklifts: "20× carretillas Hangcha",
        sortation: "50× clasificación Libiao",
        picking: "10× picking XYZ",
        humanoids: "30× humanoides Unitree G1",
        mixed: "5× Deep Robotics + 20× Pudu",
        infra: "Infraestructura Galaxis / Slamtec",
        total: "Total por CD",
      },
    },
    coverage: {
      body: "25 centros de distribución de esta escala significan que la capa de inteligencia de ITEM cubre toda la flota de robots: riesgo de hardware cero y modelo ligero en activos para el cliente. La capa de inteligencia queda profundamente integrada en la operación física, garantizando una entrega de valor continua.",
      footnote:
        "Los costes de fabricación de humanoides caen alrededor de un 40% interanual (Goldman Sachs): a medida que el hardware se abarata, la capa de inteligencia software captura más valor. No vendemos robots;",
      emphasis:
        "hacemos que cada robot sea más inteligente y cobramos por esa inteligencia para siempre.",
    },
  },

  flywheel: {
    eyebrow: "El volante de inercia",
    title: {
      lead: "Un ",
      accent: "circuito cerrado",
      tail: " del pipeline a la plataforma y a la resolución",
    },
    lede: "El sistema se vende solo, se ejecuta solo, se mejora solo y se retiene solo: por arquitectura, no como eslogan. Cada etapa devuelve datos a la ontología.",
    nodes: {
      grow: "Encuentra al cliente: inteligencia de pipeline SDR / AEO / GEO",
      gpt: "Demo conversacional e interfaz de decisión",
      sce: "OMS · TMS · WMS · WES · YMS ejecutan sus operaciones",
      sense: "Supervisa todo en tiempo real",
      support: "Resuelve cada excepción",
      audit: "Recupera cada dólar → alimenta la expansión de ITEM.Grow",
    },
    note: {
      label: "El volante de datos operativos:",
      body: "más flujos de trabajo → más decisiones → mejores modelos → mejor automatización. Cada resolución de ITEM.Support entrena la siguiente respuesta de ITEM.GPT; cada hallazgo de ITEM.Audit se convierte en el caso de éxito de la siguiente secuencia de ITEM.Grow. Este es el volante que justifica múltiplos del nivel de Palantir sobre una base de ingresos temprana.",
    },
  },

  cases: {
    eyebrow: "Casos de estudio",
    label: "Caso",
    title: "Escenarios de entrada probados",
    lede: "Entre con casos de torre de control de alto valor y expándase después hacia operaciones autónomas. Estos tres tipos de escenario ya han validado la plataforma en pilotos y despliegues.",
    items: {
      electronics: {
        title: "Cadena de suministro de electrónica de consumo",
        body: "Visibilidad global de fábrica, almacén y transporte; predicción de faltantes; optimización de la promesa de pedido. Una única ontología que abarca cada objeto, del proveedor al cliente.",
      },
      threePl: {
        title: "Torre de control multialmacén para 3PL",
        body: "Gestión de excepciones en toda la red; decisiones de personal, inventario y expedición; visibilidad para el cliente final. Los 3PL de primer nivel como Kuehne+Nagel, donde ya operan las flotas RaaS de clasificación de Libiao con unos 50 AMR, son exactamente este perfil comprador.",
      },
      yard: {
        title: "Inteligencia de patio y muelle (cabeza de playa LA/LB)",
        body: "Gestión de citas, asignación de muelles, seguimiento de remolques y reducción del tiempo de permanencia. LA/LB y el Inland Empire son el mercado cuña ideal, donde ITEM.Dock construye su dominio en el lado portuario.",
      },
    },
    metrics: {
      cost: "Menor coste operativo",
      onTime: "Mejora del cumplimiento en plazo",
      exceptions: "Automatización de excepciones",
      turns: "Mayor rotación de inventario (adoptantes tempranos de IA)",
    },
    note: "Nota: las tres primeras cifras son rangos objetivo de los pilotos de ITEM; los datos de rotación de inventario reflejan referencias del sector para adoptantes tempranos de IA logística (unos 15% menos de coste y 35% más de rotación).",
  },

  implementation: {
    eyebrow: "Implementación",
    title: "8–12 semanas hasta el primer piloto en producción",
    lede: "El modelo Forward Deployed Engineer (FDE): un equipo reducido en planta, la ontología primero y aceptación por hitos; despliegue empresarial en 3–6 meses.",
    phases: {
      discovery: {
        title: "Descubrimiento",
        duration: "2 semanas",
        body: "Perfilado operativo, inventario de fuentes de datos, cierre de casos de uso y KPI, y alta comercial y de seguridad.",
      },
      ontology: {
        title: "Ontología + datos",
        duration: "4–6 semanas",
        body: "Modelado de los objetos de negocio y las reglas del cliente y conexión de datos de ERP / WMS / TMS / IoT. Una vez existe la ontología, cada módulo posterior se despliega con menor coste marginal.",
      },
      pilot: {
        title: "Agentes piloto",
        duration: "6–8 semanas",
        body: "Primeros agentes en producción y flujos de torre de control sobre el runtime gobernado, aceptados frente a hitos de KPI.",
      },
      scale: {
        title: "Escalado de aplicaciones",
        duration: "8–12 semanas",
        body: "Despliegue multisede de los módulos de la suite SCE, con más dominios de datos y aplicaciones por rol.",
      },
      autonomous: {
        title: "Operación autónoma",
        duration: "6–12 meses",
        body: "Flotas de robots, suscripciones RaaS y ejecución autónoma entran en producción: el cliente alcanza el estado insustituible.",
      },
    },
  },

  customers: {
    eyebrow: "Clientes objetivo",
    title: "Quién compra este sistema operativo",
    bestFit: {
      kicker: "Clientes con mejor encaje",
      items: {
        manufacturers: {
          label: "Fabricantes",
          detail: "producción multisede, almacenamiento y distribución global (electrónica de consumo primero)",
        },
        logistics: {
          label: "3PL / operadores logísticos",
          detail: "que gestionan redes de WMS, TMS, patio y muelle",
        },
        forwarders: {
          label: "Transitarios / transportistas / agentes de aduanas",
          detail: "compradores de inteligencia de carga y cumplimiento comercial",
        },
        retail: {
          label: "Retail y proveedores",
          detail: "inteligencia de demanda, inventario y fulfillment",
        },
        ports: {
          label: "Operadores de puertos, terminales e instalaciones",
          detail: "el hogar natural de los activos físicos y la IA física",
        },
      },
    },
    vertical: {
      kicker: "Expansión vertical (desbloqueada por certificaciones)",
      body: "Las certificaciones cumplen dos funciones a la vez: eliminan fricción en las compras corporativas y señalan la madurez de la plataforma. 14 certificaciones cubren los principales marcos de cumplimiento globales.",
      certs: {
        iso27001: "Empresas de UE/Reino Unido/APAC",
        iso42001: "Pionero en gobernanza de IA",
        hitrust: "Cadena de frío farmacéutica",
        fedramp: "Logística federal y de DoD ($50B+)",
        ctpat: "Aduanas y puertos",
        cmmc: "Contratistas de defensa",
        tisax: "Cadena de suministro de automoción",
        other: "Salud · finanzas · ESG",
      },
    },
  },

  competitive: {
    eyebrow: "Posición competitiva",
    title: {
      lead: "Palantir hace inteligencia de datos. ",
      accent: "ITEM hace ejecución operativa.",
      tail: "",
    },
    lede: "Sobre una ontología, un modelo de datos y un runtime de agentes, la arquitectura unificada de ITEM contiene los equivalentes funcionales de Palantir, Manhattan, ServiceNow y MuleSoft, cuyo valor de mercado conjunto supera por sí solo los $500B.",
    table: {
      caption: "Mapa de capacidades · ITEM vs plataformas de datos vs SCM heredado",
      capability: "Capacidad",
      rows: {
        ontology: {
          label: "Ontología / capa semántica",
          item: "Nativa",
          palantir: "Fuerte",
          databricks: "Limitada",
          manhattan: "Ninguna",
          sap: "Limitada",
        },
        apps: {
          label: "Aplicaciones de cadena de suministro (OMS/TMS/WMS/YMS)",
          item: "Nativas",
          palantir: "A medida",
          databricks: "Vía partner",
          manhattan: "Fuerte (heredado)",
          sap: "Fuerte (heredado)",
        },
        agents: {
          label: "Runtime de ejecución multiagente",
          item: "Nativo",
          palantir: "Fuerte",
          databricks: "Fuerte",
          manhattan: "Ninguno",
          sap: "Nivel Copilot",
        },
        robots: {
          label: "IA física / coordinación de robots",
          item: "Nativa (flota de 11 socios)",
          palantir: "Ninguna",
          databricks: "Ninguna",
          manhattan: "Limitada",
          sap: "Limitada",
        },
        deploy: {
          label: "Despliegue air-gapped / edge / soberano",
          item: "Nativo (Harness)",
          palantir: "Fuerte",
          databricks: "Limitado",
          manhattan: "Ninguno",
          sap: "Parcial",
        },
        flywheel: {
          label: "Volante cerrado de GTM + CX",
          item: "Nativo (Grow → Support → Audit)",
          palantir: "Ninguno",
          databricks: "Ninguno",
          manhattan: "Ninguno",
          sap: "Disperso entre nubes",
        },
        focus: {
          label: "Foco en operaciones físicas",
          item: "Central",
          palantir: "Empresa en general",
          databricks: "Datos/IA",
          manhattan: "Solo SCM",
          sap: "Productividad/datos",
        },
      },
    },
    note: "Posicionamiento basado en descripciones públicas de producto (Palantir AIP/Ontology, Databricks Data Intelligence Platform, Manhattan Active, Microsoft Fabric/Copilot Studio, etc.).",
    cards: {
      incumbents: {
        kicker: "frente a los incumbentes",
        body: "Manhattan, Blue Yonder, SAP y Oracle se construyeron antes de la IA agéntica: registran las operaciones, pero no pueden ejecutarlas. Cada base instalada de un incumbente es una oportunidad de conversión para ITEM.",
      },
      dataPlatforms: {
        kicker: "frente a las plataformas de datos",
        body: "Palantir y Databricks se detienen en el insight. ITEM es dueño de las aplicaciones, el runtime de IA, la semántica y el despliegue: del insight hasta la puerta del muelle y el robot.",
      },
      pointTools: {
        kicker: "frente a las herramientas puntuales de IA",
        body: 'La mayoría de las empresas de IA se detienen en el copiloto; nosotros ejecutamos. "Personas + IA + robots" en operaciones digitales y físicas es una forma que ninguna herramienta puntual puede replicar.',
      },
    },
  },

  closing: {
    eyebrow: "La visión",
    vision: {
      lead: "Una plataforma, una ontología, una capa de inteligencia: unifique ",
      accent: "personas + IA + robots + operaciones",
      tail: " para que su empresa se opere sola.",
    },
    fine: "Empiece un piloto en 8–12 semanas. Demuestre el valor en un escenario y expándalo después a toda la red: sin sustituir lo existente, funcionando junto a su ERP, WMS y TMS.",
    cta: "Solicitar una demo del producto",
  },

  footer: "Visión general del producto · 2026",
};

const pack: LocalePack = { zh, en, ja, es };

export default pack;
