import type { LocalePack } from "./index";

/**
 * V2 — Strategic Partnership proposal deck.
 *
 * `en` is the reference shape; `zh`, `ja` and `es` are typed against
 * `typeof en`, so a missing or misspelled key is a compile error rather than a
 * silent English fallback at runtime.
 *
 * The source page rendered English and Chinese stacked together. Both halves of
 * every pair are preserved — the English in `en`, the author's Chinese in `zh`
 * — and the page now renders exactly one locale. `ja` and `es` are new.
 *
 * Money figures, metrics, hardware SKUs, product names and company names are
 * locale-invariant and live in the component as constants.
 */

const en = {
  nav: {
    label: "Sections",
    cover: "Cover",
    opportunity: "Opportunity",
    model: "Business Model",
    infra: "Infrastructure",
    roi: "ROI Analysis",
    verticals: "Verticals",
    engagement: "Engagement",
    next: "Next Steps",
  },

  hero: {
    title: "Strategic Partnership",
    lede: "Bundling Fashion Nova hardware with Item's AI platform to unlock new revenue streams across e-commerce, supply chain, and warehouse automation verticals.",
    chips: ["AI Infrastructure", "GPU Compute", "Co-Hosting", "Joint Go-to-Market"],
  },

  opportunity: {
    title: "The Opportunity",
    subtitle:
      "Mid-market enterprises need AI infrastructure but lack the expertise to build and operate it. Item bridges this gap — and Fashion Nova's hardware completes the stack.",
    cards: {
      gap: {
        kicker: "MARKET GAP",
        title: "The Build vs. Buy Dilemma",
        body: "Cloud AI costs are spiraling — $860K/year for a typical e-commerce brand running multi-model inference. Private infrastructure cuts this by 85%, but most companies cannot design, procure, or operate GPU clusters.",
      },
      track: {
        kicker: "PROVEN TRACK RECORD",
        title: "Item + UNIS Since 2019",
        body: "UNIS has served Fashion Nova since 2019 at Memphis, processing 100M+ orders/year with Item as the technology backbone. This existing relationship provides a natural foundation for deeper strategic collaboration.",
      },
      revenue: {
        kicker: "NEW REVENUE",
        title: "Hardware-Attached Software",
        body: "Every AI infrastructure deployment Item sells requires GPU servers, networking, and edge devices. Fashion Nova becomes the preferred hardware vendor — creating a recurring sales channel through Item's growing customer base.",
      },
    },
  },

  model: {
    title: "The Business Model",
    subtitle:
      "A three-layer value stack where Fashion Nova provides the foundation, Item delivers the intelligence, and customers get turnkey AI.",
    layers: {
      l3: {
        title: "Customer Application Layer",
        body: "5 AI Pillars: Data Intelligence, Product Discovery, Customer Experience, Advertising Optimization, Operations Automation",
        tagLabel: "REVENUE",
        tagValue: "SaaS + Consulting",
      },
      l2: {
        title: "Item AI Platform Layer",
        body: "Ontology modeling, Agent orchestration, GraphRAG, WES integration, Multi-agent runtime with business harness",
        tagLabel: "ITEM",
        tagValue: "Software + AI",
      },
      l1: {
        title: "Fashion Nova Hardware Foundation",
        body: "ThinkSystem GPU servers (8× H100 80GB SXM), NVLink 4.0, edge inference devices, 5.5G/Wi-Fi 8 networking, co-location at One Wilshire LA",
        tagLabel: "Fashion Nova",
        tagValue: "Hardware + Infra",
      },
    },
    valuePartner: {
      title: "Value for Partner",
      bullets: [
        "New hardware sales channel through Item's 1,200+ enterprise customers",
        "Recurring revenue from co-location and managed infrastructure services",
        "Reference cases in high-growth AI infrastructure vertical",
        "Edge device deployment at scale (warehouse, logistics, retail)",
      ],
    },
    valueItem: {
      title: "Value for Item",
      bullets: [
        "Preferred pricing on Fashion Nova ThinkSystem servers and edge devices",
        "Complete solution offering: software + hardware in one proposal",
        "Co-marketing and joint go-to-market with Fashion Nova brand",
        "Access to Fashion Nova's enterprise customer network for cross-selling",
      ],
    },
  },

  infra: {
    title: "AI Infrastructure Blueprint",
    subtitle:
      "A reference architecture for private AI infrastructure co-hosted at One Wilshire, Los Angeles — the premier interconnection hub on the US West Coast.",
    config: {
      title: "Reference Configuration",
      specs: {
        gpu: { label: "GPU", detail: "640GB total GPU memory" },
        interconnect: { label: "Interconnect", detail: "900 GB/s bidirectional" },
        network: { label: "Network", detail: "RDMA-capable fabric" },
        location: { label: "Location", detail: "Premier IX hub, <1ms latency" },
      },
      note: {
        kicker: "Fashion Nova Opportunity:",
        body: "Replace Dell PowerEdge XE9680 with Fashion Nova ThinkSystem SR675 V3 — equivalent 8×H100 configuration with Fashion Nova's enterprise support, XClarity management, and competitive pricing.",
      },
    },
    pillars: {
      security: {
        title: "Network Security",
        body: "Private VLAN isolation, hardware firewall, encrypted tunnels between customer VPC and co-located servers. SOC 2 Type II compliant facility.",
      },
      governance: {
        title: "Data Governance",
        body: "Customer data never leaves the private cluster. Full audit logging, role-based access control, and automated compliance reporting.",
      },
      sla: {
        title: "Infrastructure SLA",
        body: "99.95% uptime guarantee. Redundant power (N+1), cooling, and network paths. 24/7 remote hands support at One Wilshire.",
      },
    },
  },

  roi: {
    title: "ROI Analysis",
    subtitle:
      "Private AI infrastructure delivers dramatic cost savings compared to cloud — with better performance, data sovereignty, and predictable costs.",
    chart: {
      title: "Annual AI Infrastructure Cost",
      caption: "Typical e-commerce brand running multi-model inference",
      cloud: "Public cloud",
      private: "Private infrastructure",
      reduction: "85% cost reduction",
      axis: "USD thousands per year",
      payback: "Payback in under 6 months",
      alt: "Bar chart comparing $860K a year of public cloud AI spend with $133K a year of private infrastructure — an 85% reduction.",
    },
    scenarios: {
      conservative: "Conservative",
      base: "Base Case",
      optimistic: "Optimistic",
    },
    netLabel: "Year 1 Net Value",
    metrics: {
      cloudCost: "Cloud Cost / Year",
      privateCost: "Private Cost / Year",
      reduction: "Cost Reduction",
      payback: "Payback Period",
    },
  },

  verticals: {
    title: "Target Verticals",
    subtitle:
      "Five high-growth verticals where Item's AI platform + Fashion Nova hardware creates a compelling bundled offering.",
    hardwareLabel: "Fashion Nova HARDWARE",
    items: {
      ecommerce: {
        title: "E-commerce AI",
        body: "Content generation, SEO optimization, product discovery, customer support automation. Proven with Sportspower/TruJump deployment.",
      },
      supplyChain: {
        title: "Supply Chain AI",
        body: "Shipping document processing, customs compliance agents, carrier relationship management, drayage pricing optimization.",
      },
      warehouse: {
        title: "Warehouse Automation",
        body: "WES orchestration, AMR/AS-RS integration, real-time slotting optimization, vision AI for quality inspection.",
      },
      multiAgent: {
        title: "Multi-Agent Systems",
        body: "LPM-based real-time conversational AI for conference calls. 4-agent live call requires 17-22× H100 GPUs — massive hardware demand.",
      },
      retailEdge: {
        title: "Edge AI for Retail",
        body: "In-store analytics, inventory tracking, customer behavior analysis, smart checkout. Requires distributed edge compute.",
      },
      dataIntel: {
        title: "Data Intelligence",
        body: "Enterprise knowledge graphs, GraphRAG pipelines, ontology-driven analytics, real-time business intelligence dashboards.",
      },
    },
  },

  engagement: {
    title: "Engagement Model",
    subtitle:
      "A proven two-phase engagement: Forward Deployment for rapid value demonstration, followed by a tiered Monthly Retainer for ongoing optimization.",
    phase1: {
      title: "Forward Deployment",
      durationLabel: "Duration",
      durationValue: "520 hours",
      feeLabel: "Fixed Fee",
      body: "Dedicated team embeds with the customer to deploy AI infrastructure, configure models, build initial agent workflows, and validate ROI metrics.",
    },
    phase2: {
      title: "Monthly Retainer",
      tiers: {
        foundation: { name: "Foundation", desc: "Monitoring + basic support" },
        growth: { name: "Growth", desc: "Active optimization + new agents" },
        enterprise: { name: "Enterprise", desc: "Full managed service + SLA" },
      },
      totalLabel: "Year 1 Total:",
      totalNote: "depending on tier",
    },
  },

  next: {
    title: "Next Steps",
    steps: {
      deepDive: {
        title: "Technical Deep-Dive",
        body: "Joint workshop between Item engineering and Fashion Nova ISG team to align on ThinkSystem configurations, pricing tiers, and co-location logistics.",
      },
      pilot: {
        title: "Pilot Customer Selection",
        body: "Identify 2-3 pilot customers from Item's existing pipeline for the first joint deployment — ideally one e-commerce and one supply chain vertical.",
      },
      gtm: {
        title: "Joint Go-to-Market Plan",
        body: "Co-develop marketing materials, case studies, and a joint value proposition for mid-market enterprises seeking AI infrastructure.",
      },
      agreement: {
        title: "Partnership Agreement",
        body: "Formalize the strategic partnership with preferred pricing, co-marketing commitments, and revenue-sharing framework.",
      },
    },
    closing: {
      headline: "From Supply Chain Partner to Strategic AI Alliance",
      body: "The infrastructure layer is the new battleground. Together, we can own the mid-market AI infrastructure stack — Fashion Nova's hardware excellence paired with Item's AI platform creates a moat that neither can build alone.",
    },
  },
};

type Shape = typeof en;

const zh: Shape = {
  nav: {
    label: "章节",
    cover: "封面",
    opportunity: "机遇",
    model: "商业模式",
    infra: "基础设施",
    roi: "ROI分析",
    verticals: "垂直领域",
    engagement: "合作方案",
    next: "下一步",
  },

  hero: {
    title: "战略合作伙伴提案",
    lede: "将Fashion Nova硬件与Item AI平台捆绑，在电商、供应链和仓储自动化领域开拓新的收入渠道。",
    chips: ["AI基础设施", "GPU算力", "联合托管", "联合市场推广"],
  },

  opportunity: {
    title: "市场机遇",
    subtitle:
      "中端企业需要AI基础设施，但缺乏构建和运营的专业能力。Item填补了这一空白，而Fashion Nova的硬件则完善了整个技术栈。",
    cards: {
      gap: {
        kicker: "市场空白",
        title: "构建还是购买的两难",
        body: "云端AI成本持续攀升——一个典型电商品牌运行多模型推理每年需$860K。私有化部署可降低85%成本，但大多数企业无力自建GPU集群。",
      },
      track: {
        kicker: "已验证的合作记录",
        title: "Item + UNIS 自2019年起服务Fashion Nova",
        body: "UNIS自2019年起在Memphis为Fashion Nova提供服务，每年处理1亿+订单，Item作为技术底座。这一现有关系为更深层战略合作奠定了天然基础。",
      },
      revenue: {
        kicker: "新收入",
        title: "硬件绑定软件的新收入模式",
        body: "Item每一个AI基础设施部署都需要GPU服务器、网络和边缘设备。Fashion Nova成为首选硬件供应商——通过Item不断增长的客户群创造持续销售渠道。",
      },
    },
  },

  model: {
    title: "商业模式",
    subtitle: "三层价值栈：Fashion Nova提供基础层，Item交付智能层，客户获得交钥匙AI解决方案。",
    layers: {
      l3: {
        title: "客户应用层",
        body: "五大AI支柱：数据智能、产品发现、客户体验、广告优化、运营自动化",
        tagLabel: "收入",
        tagValue: "SaaS + 咨询",
      },
      l2: {
        title: "Item AI平台层",
        body: "本体建模、Agent编排、GraphRAG、WES集成、带业务Harness的多Agent运行时",
        tagLabel: "ITEM",
        tagValue: "软件 + AI",
      },
      l1: {
        title: "Fashion Nova硬件基础层",
        body: "ThinkSystem GPU服务器（8×H100 80GB SXM）、NVLink 4.0、边缘推理设备、5.5G/Wi-Fi 8网络、One Wilshire LA托管",
        tagLabel: "Fashion Nova",
        tagValue: "硬件 + 基础设施",
      },
    },
    valuePartner: {
      title: "Fashion Nova获得的价值",
      bullets: [
        "通过Item 1200+企业客户开拓新的硬件销售渠道",
        "来自托管和基础设施管理服务的持续收入",
        "在高增长AI基础设施垂直领域的标杆案例",
        "大规模边缘设备部署（仓储、物流、零售）",
      ],
    },
    valueItem: {
      title: "Item获得的价值",
      bullets: [
        "Fashion Nova ThinkSystem服务器和边缘设备的优惠价格",
        "完整解决方案：一个提案中包含软件+硬件",
        "与Fashion Nova品牌的联合营销和市场推广",
        "接入Fashion Nova企业客户网络进行交叉销售",
      ],
    },
  },

  infra: {
    title: "AI基础设施蓝图",
    subtitle: "在美国西海岸首要互联枢纽——洛杉矶One Wilshire托管的私有AI基础设施参考架构。",
    config: {
      title: "参考配置",
      specs: {
        gpu: { label: "GPU", detail: "640GB GPU总显存" },
        interconnect: { label: "互联", detail: "900 GB/s双向带宽" },
        network: { label: "网络", detail: "支持RDMA的网络架构" },
        location: { label: "位置", detail: "顶级IX枢纽，<1ms延迟" },
      },
      note: {
        kicker: "Fashion Nova机会：",
        body: "用Fashion Nova ThinkSystem SR675 V3替代Dell PowerEdge XE9680——同等8×H100配置，加上Fashion Nova企业级支持、XClarity管理和有竞争力的价格。",
      },
    },
    pillars: {
      security: {
        title: "网络安全",
        body: "私有VLAN隔离、硬件防火墙、客户VPC与托管服务器间的加密隧道。SOC 2 Type II合规设施。",
      },
      governance: {
        title: "数据治理",
        body: "客户数据永不离开私有集群。完整审计日志、基于角色的访问控制和自动合规报告。",
      },
      sla: {
        title: "基础设施SLA",
        body: "99.95%正常运行时间保证。冗余电源（N+1）、冷却和网络路径。One Wilshire 24/7远程支持。",
      },
    },
  },

  roi: {
    title: "投资回报分析",
    subtitle: "与云端相比，私有AI基础设施在成本、性能、数据主权和成本可预测性方面具有显著优势。",
    chart: {
      title: "AI基础设施年度成本",
      caption: "运行多模型推理的典型电商品牌",
      cloud: "公有云",
      private: "私有基础设施",
      reduction: "成本降低85%",
      axis: "千美元／年",
      payback: "6个月内收回投资",
      alt: "柱状图对比：公有云AI每年$860K，私有基础设施每年$133K，成本降低85%。",
    },
    scenarios: {
      conservative: "保守",
      base: "基准",
      optimistic: "乐观",
    },
    netLabel: "第一年净价值",
    metrics: {
      cloudCost: "云端年成本",
      privateCost: "私有年成本",
      reduction: "成本降低",
      payback: "回收周期",
    },
  },

  verticals: {
    title: "目标垂直领域",
    subtitle: "五个高增长垂直领域，Item AI平台+Fashion Nova硬件构成极具吸引力的捆绑方案。",
    hardwareLabel: "Fashion Nova 硬件",
    items: {
      ecommerce: {
        title: "电商AI",
        body: "内容生成、SEO优化、产品发现、客服自动化。已在Sportspower/TruJump部署中验证。",
      },
      supplyChain: {
        title: "供应链AI",
        body: "运输文件处理、海关合规Agent、承运商关系管理、拖车定价优化。",
      },
      warehouse: {
        title: "仓储自动化",
        body: "WES编排、AMR/AS-RS集成、实时库位优化、视觉AI质量检测。",
      },
      multiAgent: {
        title: "多Agent系统",
        body: "基于LPM的实时对话AI会议系统。4个Agent实时通话需17-22×H100 GPU——巨大的硬件需求。",
      },
      retailEdge: {
        title: "零售边缘AI",
        body: "店内分析、库存追踪、客户行为分析、智能结账。需要分布式边缘计算。",
      },
      dataIntel: {
        title: "数据智能",
        body: "企业知识图谱、GraphRAG管道、本体驱动分析、实时商业智能仪表盘。",
      },
    },
  },

  engagement: {
    title: "合作方案",
    subtitle: "经过验证的两阶段合作模式：前置部署快速展示价值，随后分层月度服务持续优化。",
    phase1: {
      title: "前置部署",
      durationLabel: "周期",
      durationValue: "520 小时",
      feeLabel: "固定费用",
      body: "专属团队嵌入客户现场，部署AI基础设施、配置模型、构建初始Agent工作流并验证ROI指标。",
    },
    phase2: {
      title: "月度服务",
      tiers: {
        foundation: { name: "基础层", desc: "监控 + 基础支持" },
        growth: { name: "成长层", desc: "主动优化 + 新增Agent" },
        enterprise: { name: "企业层", desc: "全托管服务 + SLA" },
      },
      totalLabel: "第一年总计：",
      totalNote: "视层级而定",
    },
  },

  next: {
    title: "下一步",
    steps: {
      deepDive: {
        title: "技术深度交流",
        body: "Item工程团队与Fashion Nova ISG团队联合研讨，对齐ThinkSystem配置、价格层级和托管物流。",
      },
      pilot: {
        title: "试点客户选择",
        body: "从Item现有客户管道中选择2-3个试点客户进行首次联合部署——理想情况下一个电商和一个供应链客户。",
      },
      gtm: {
        title: "联合市场推广计划",
        body: "共同开发营销材料、案例研究和面向寻求AI基础设施的中端企业的联合价值主张。",
      },
      agreement: {
        title: "合作协议",
        body: "以优惠价格、联合营销承诺和收入分成框架正式确立战略合作伙伴关系。",
      },
    },
    closing: {
      headline: "从供应链合作伙伴到战略AI联盟",
      body: "基础设施层是新的战场。Fashion Nova的硬件卓越性与Item的AI平台相结合，构建起任何一方都无法独自建立的护城河。",
    },
  },
};

const ja: Shape = {
  nav: {
    label: "セクション",
    cover: "表紙",
    opportunity: "市場機会",
    model: "ビジネスモデル",
    infra: "インフラ",
    roi: "ROI分析",
    verticals: "注力領域",
    engagement: "協業モデル",
    next: "次のステップ",
  },

  hero: {
    title: "戦略的パートナーシップのご提案",
    lede: "Fashion Nova のハードウェアと Item の AI プラットフォームを組み合わせ、EC・サプライチェーン・倉庫自動化の各領域で新たな収益機会を創出します。",
    chips: ["AIインフラ", "GPUコンピュート", "コロケーション", "共同市場開拓"],
  },

  opportunity: {
    title: "市場機会",
    subtitle:
      "ミッドマーケット企業は AI インフラを必要としながら、それを構築・運用する専門知識を持ち合わせていません。Item がそのギャップを埋め、Fashion Nova のハードウェアがスタックを完成させます。",
    cards: {
      gap: {
        kicker: "市場のギャップ",
        title: "自社構築か購入かのジレンマ",
        body: "クラウド AI のコストは急騰しており、マルチモデル推論を運用する典型的な EC ブランドでは年間 $860K に達します。プライベートインフラであれば 85% 削減できますが、GPU クラスタを設計・調達・運用できる企業はごく限られています。",
      },
      track: {
        kicker: "実績に裏付けられた関係",
        title: "Item + UNIS、2019年から",
        body: "UNIS は2019年から Memphis で Fashion Nova を支援し、Item を技術基盤として年間 100M+ の注文を処理しています。この既存の関係が、より踏み込んだ戦略的協業の自然な土台となります。",
      },
      revenue: {
        kicker: "新たな収益源",
        title: "ハードウェアに紐づくソフトウェア",
        body: "Item が販売する AI インフラ案件には、必ず GPU サーバー、ネットワーク、エッジデバイスが伴います。Fashion Nova は優先ハードウェアベンダーとして、拡大する Item の顧客基盤を通じた継続的な販売チャネルを獲得します。",
      },
    },
  },

  model: {
    title: "ビジネスモデル",
    subtitle:
      "3層のバリュースタックです。Fashion Nova が基盤を提供し、Item がインテリジェンスを実装し、顧客はターンキーの AI を手にします。",
    layers: {
      l3: {
        title: "顧客アプリケーション層",
        body: "5つの AI の柱：データインテリジェンス、商品ディスカバリー、カスタマーエクスペリエンス、広告最適化、オペレーション自動化",
        tagLabel: "収益",
        tagValue: "SaaS + コンサルティング",
      },
      l2: {
        title: "Item AI プラットフォーム層",
        body: "オントロジーモデリング、エージェントオーケストレーション、GraphRAG、WES 連携、業務 Harness を備えたマルチエージェントランタイム",
        tagLabel: "ITEM",
        tagValue: "ソフトウェア + AI",
      },
      l1: {
        title: "Fashion Nova ハードウェア基盤層",
        body: "ThinkSystem GPU サーバー（8× H100 80GB SXM）、NVLink 4.0、エッジ推論デバイス、5.5G/Wi-Fi 8 ネットワーク、One Wilshire LA でのコロケーション",
        tagLabel: "Fashion Nova",
        tagValue: "ハードウェア + インフラ",
      },
    },
    valuePartner: {
      title: "パートナーにとっての価値",
      bullets: [
        "Item の 1,200+ のエンタープライズ顧客を通じた新たなハードウェア販売チャネル",
        "コロケーションおよびマネージドインフラサービスによる継続収益",
        "高成長の AI インフラ領域におけるリファレンス事例",
        "エッジデバイスの大規模展開（倉庫・物流・小売）",
      ],
    },
    valueItem: {
      title: "Item にとっての価値",
      bullets: [
        "Fashion Nova ThinkSystem サーバーおよびエッジデバイスの優遇価格",
        "ソフトウェアとハードウェアを一つの提案にまとめた完全なソリューション",
        "Fashion Nova ブランドとの共同マーケティングおよび市場開拓",
        "クロスセルに向けた Fashion Nova のエンタープライズ顧客ネットワークへのアクセス",
      ],
    },
  },

  infra: {
    title: "AI インフラ設計図",
    subtitle:
      "米国西海岸屈指の相互接続ハブである One Wilshire（ロサンゼルス）にコロケーションする、プライベート AI インフラのリファレンスアーキテクチャです。",
    config: {
      title: "リファレンス構成",
      specs: {
        gpu: { label: "GPU", detail: "GPU メモリ合計 640GB" },
        interconnect: { label: "インターコネクト", detail: "900 GB/s 双方向" },
        network: { label: "ネットワーク", detail: "RDMA 対応ファブリック" },
        location: { label: "設置場所", detail: "最上位の IX ハブ、レイテンシ <1ms" },
      },
      note: {
        kicker: "Fashion Nova の機会：",
        body: "Dell PowerEdge XE9680 を Fashion Nova ThinkSystem SR675 V3 に置き換えます。同等の 8×H100 構成に、Fashion Nova のエンタープライズサポート、XClarity による管理、競争力のある価格が加わります。",
      },
    },
    pillars: {
      security: {
        title: "ネットワークセキュリティ",
        body: "プライベート VLAN による分離、ハードウェアファイアウォール、顧客 VPC とコロケーションサーバー間の暗号化トンネル。SOC 2 Type II 準拠のファシリティです。",
      },
      governance: {
        title: "データガバナンス",
        body: "顧客データがプライベートクラスタの外に出ることはありません。完全な監査ログ、ロールベースのアクセス制御、コンプライアンスレポートの自動生成を備えます。",
      },
      sla: {
        title: "インフラ SLA",
        body: "99.95% の稼働率保証。冗長化された電源（N+1）、冷却、ネットワーク経路。One Wilshire での 24/7 リモートハンズ対応。",
      },
    },
  },

  roi: {
    title: "ROI 分析",
    subtitle:
      "プライベート AI インフラはクラウドと比べて大幅なコスト削減を実現し、性能・データ主権・コストの予見性でも優位に立ちます。",
    chart: {
      title: "AI インフラの年間コスト",
      caption: "マルチモデル推論を運用する典型的な EC ブランドの場合",
      cloud: "パブリッククラウド",
      private: "プライベートインフラ",
      reduction: "コスト 85% 削減",
      axis: "千米ドル／年",
      payback: "6か月未満で投資回収",
      alt: "パブリッククラウドの年間 $860K と、プライベートインフラの年間 $133K を比較した棒グラフ。85% の削減を示しています。",
    },
    scenarios: {
      conservative: "保守的",
      base: "ベースケース",
      optimistic: "楽観的",
    },
    netLabel: "初年度の正味価値",
    metrics: {
      cloudCost: "クラウドコスト／年",
      privateCost: "プライベートコスト／年",
      reduction: "コスト削減率",
      payback: "投資回収期間",
    },
  },

  verticals: {
    title: "注力する垂直領域",
    subtitle:
      "Item の AI プラットフォームと Fashion Nova のハードウェアを組み合わせた提案が強く効く、5つの高成長領域です。",
    hardwareLabel: "Fashion Nova ハードウェア",
    items: {
      ecommerce: {
        title: "EC 向け AI",
        body: "コンテンツ生成、SEO 最適化、商品ディスカバリー、カスタマーサポートの自動化。Sportspower/TruJump への導入で実証済みです。",
      },
      supplyChain: {
        title: "サプライチェーン AI",
        body: "船積書類の処理、通関コンプライアンスエージェント、キャリアとの関係管理、ドレージ料金の最適化。",
      },
      warehouse: {
        title: "倉庫自動化",
        body: "WES オーケストレーション、AMR/AS-RS 連携、リアルタイムのロケーション最適化、品質検査向けビジョン AI。",
      },
      multiAgent: {
        title: "マルチエージェントシステム",
        body: "LPM ベースの会議通話向けリアルタイム対話 AI。4エージェントのライブ通話には 17-22× H100 GPU が必要となり、ハードウェア需要は極めて大きくなります。",
      },
      retailEdge: {
        title: "リテール向けエッジ AI",
        body: "店舗内分析、在庫トラッキング、顧客行動分析、スマートチェックアウト。分散型のエッジコンピューティングが前提となります。",
      },
      dataIntel: {
        title: "データインテリジェンス",
        body: "エンタープライズ知識グラフ、GraphRAG パイプライン、オントロジー駆動の分析、リアルタイム BI ダッシュボード。",
      },
    },
  },

  engagement: {
    title: "協業モデル",
    subtitle:
      "実績のある2段階の協業モデルです。まず Forward Deployment で価値を短期間に実証し、続いて段階制の月額リテイナーで継続的に最適化します。",
    phase1: {
      title: "フォワードデプロイメント",
      durationLabel: "期間",
      durationValue: "520 時間",
      feeLabel: "固定料金",
      body: "専任チームが顧客先に常駐し、AI インフラの構築、モデルの設定、初期エージェントワークフローの実装、ROI 指標の検証までを担います。",
    },
    phase2: {
      title: "月額リテイナー",
      tiers: {
        foundation: { name: "ファウンデーション", desc: "モニタリング + 基本サポート" },
        growth: { name: "グロース", desc: "継続的な最適化 + 新規エージェント" },
        enterprise: { name: "エンタープライズ", desc: "フルマネージドサービス + SLA" },
      },
      totalLabel: "初年度合計：",
      totalNote: "ティアにより変動",
    },
  },

  next: {
    title: "次のステップ",
    steps: {
      deepDive: {
        title: "技術ディープダイブ",
        body: "Item のエンジニアリングチームと Fashion Nova ISG チームによる合同ワークショップを実施し、ThinkSystem の構成、価格ティア、コロケーションの実務について合意します。",
      },
      pilot: {
        title: "パイロット顧客の選定",
        body: "Item の既存パイプラインから 2-3 社のパイロット顧客を選定し、最初の共同展開を行います。理想は EC 領域から1社、サプライチェーン領域から1社です。",
      },
      gtm: {
        title: "共同市場開拓プラン",
        body: "マーケティング資料、導入事例、そして AI インフラを求めるミッドマーケット企業向けの共同バリュープロポジションを共同で開発します。",
      },
      agreement: {
        title: "パートナーシップ契約",
        body: "優遇価格、共同マーケティングのコミットメント、レベニューシェアの枠組みを定め、戦略的パートナーシップを正式に締結します。",
      },
    },
    closing: {
      headline: "サプライチェーンのパートナーから、戦略的 AI アライアンスへ",
      body: "インフラ層こそが新たな主戦場です。両社が組めば、ミッドマーケットの AI インフラスタックを押さえられます。Fashion Nova のハードウェアの強みと Item の AI プラットフォームの組み合わせは、どちらか一方だけでは築けない参入障壁を生み出します。",
    },
  },
};

const es: Shape = {
  nav: {
    label: "Secciones",
    cover: "Portada",
    opportunity: "Oportunidad",
    model: "Modelo de negocio",
    infra: "Infraestructura",
    roi: "Análisis de ROI",
    verticals: "Verticales",
    engagement: "Colaboración",
    next: "Próximos pasos",
  },

  hero: {
    title: "Alianza estratégica",
    lede: "Integramos el hardware de Fashion Nova con la plataforma de IA de Item para abrir nuevas fuentes de ingresos en comercio electrónico, cadena de suministro y automatización de almacenes.",
    chips: ["Infraestructura de IA", "Cómputo GPU", "Coalojamiento", "Salida al mercado conjunta"],
  },

  opportunity: {
    title: "La oportunidad",
    subtitle:
      "Las empresas del mercado medio necesitan infraestructura de IA, pero no cuentan con la experiencia para construirla y operarla. Item cubre esa brecha y el hardware de Fashion Nova completa el stack.",
    cards: {
      gap: {
        kicker: "BRECHA DE MERCADO",
        title: "El dilema de construir o comprar",
        body: "Los costes de IA en la nube se disparan: $860K al año para una marca de comercio electrónico típica que ejecuta inferencia multimodelo. La infraestructura privada los reduce un 85%, pero la mayoría de las empresas no puede diseñar, adquirir ni operar clústeres de GPU.",
      },
      track: {
        kicker: "TRAYECTORIA COMPROBADA",
        title: "Item + UNIS desde 2019",
        body: "UNIS presta servicio a Fashion Nova desde 2019 en Memphis y procesa 100M+ pedidos al año con Item como columna vertebral tecnológica. Esa relación ya existente es la base natural para una colaboración estratégica más profunda.",
      },
      revenue: {
        kicker: "NUEVOS INGRESOS",
        title: "Software vinculado al hardware",
        body: "Cada despliegue de infraestructura de IA que vende Item requiere servidores GPU, redes y dispositivos de borde. Fashion Nova se convierte en el proveedor de hardware preferente y obtiene un canal de venta recurrente a través de la creciente base de clientes de Item.",
      },
    },
  },

  model: {
    title: "El modelo de negocio",
    subtitle:
      "Un stack de valor de tres capas: Fashion Nova aporta la base, Item entrega la inteligencia y el cliente recibe una IA llave en mano.",
    layers: {
      l3: {
        title: "Capa de aplicación del cliente",
        body: "5 pilares de IA: inteligencia de datos, descubrimiento de productos, experiencia de cliente, optimización publicitaria y automatización de operaciones",
        tagLabel: "INGRESOS",
        tagValue: "SaaS + consultoría",
      },
      l2: {
        title: "Capa de plataforma de IA de Item",
        body: "Modelado de ontologías, orquestación de agentes, GraphRAG, integración con WES y runtime multiagente con business Harness",
        tagLabel: "ITEM",
        tagValue: "Software + IA",
      },
      l1: {
        title: "Base de hardware de Fashion Nova",
        body: "Servidores GPU ThinkSystem (8× H100 80GB SXM), NVLink 4.0, dispositivos de inferencia en el borde, red 5.5G/Wi-Fi 8 y colocación en One Wilshire LA",
        tagLabel: "Fashion Nova",
        tagValue: "Hardware + infraestructura",
      },
    },
    valuePartner: {
      title: "Valor para el partner",
      bullets: [
        "Nuevo canal de venta de hardware a través de los 1,200+ clientes empresariales de Item",
        "Ingresos recurrentes por colocación y servicios gestionados de infraestructura",
        "Casos de referencia en el vertical de infraestructura de IA de alto crecimiento",
        "Despliegue de dispositivos de borde a gran escala (almacén, logística, retail)",
      ],
    },
    valueItem: {
      title: "Valor para Item",
      bullets: [
        "Precios preferentes en servidores ThinkSystem y dispositivos de borde de Fashion Nova",
        "Oferta de solución completa: software + hardware en una sola propuesta",
        "Marketing conjunto y salida al mercado con la marca Fashion Nova",
        "Acceso a la red de clientes empresariales de Fashion Nova para venta cruzada",
      ],
    },
  },

  infra: {
    title: "Plano de infraestructura de IA",
    subtitle:
      "Una arquitectura de referencia para infraestructura de IA privada alojada en One Wilshire, Los Ángeles, el principal hub de interconexión de la costa oeste de EE. UU.",
    config: {
      title: "Configuración de referencia",
      specs: {
        gpu: { label: "GPU", detail: "640GB de memoria GPU total" },
        interconnect: { label: "Interconexión", detail: "900 GB/s bidireccional" },
        network: { label: "Red", detail: "Fabric compatible con RDMA" },
        location: { label: "Ubicación", detail: "Principal hub IX, latencia <1ms" },
      },
      note: {
        kicker: "Oportunidad para Fashion Nova:",
        body: "Sustituir el Dell PowerEdge XE9680 por el Fashion Nova ThinkSystem SR675 V3: configuración equivalente de 8×H100 con el soporte empresarial de Fashion Nova, gestión XClarity y precios competitivos.",
      },
    },
    pillars: {
      security: {
        title: "Seguridad de red",
        body: "Aislamiento por VLAN privada, firewall de hardware y túneles cifrados entre la VPC del cliente y los servidores colocados. Instalación conforme a SOC 2 Type II.",
      },
      governance: {
        title: "Gobernanza de datos",
        body: "Los datos del cliente nunca salen del clúster privado. Registro de auditoría completo, control de acceso basado en roles e informes de cumplimiento automatizados.",
      },
      sla: {
        title: "SLA de infraestructura",
        body: "Garantía de disponibilidad del 99.95%. Alimentación redundante (N+1), refrigeración y rutas de red. Soporte remote hands 24/7 en One Wilshire.",
      },
    },
  },

  roi: {
    title: "Análisis de ROI",
    subtitle:
      "La infraestructura de IA privada genera un ahorro drástico frente a la nube, con mejor rendimiento, soberanía del dato y costes predecibles.",
    chart: {
      title: "Coste anual de infraestructura de IA",
      caption: "Marca de comercio electrónico típica que ejecuta inferencia multimodelo",
      cloud: "Nube pública",
      private: "Infraestructura privada",
      reduction: "85% menos coste",
      axis: "Miles de USD al año",
      payback: "Recuperación en menos de 6 meses",
      alt: "Gráfico de barras que compara $860K al año de gasto en IA en nube pública con $133K al año de infraestructura privada, una reducción del 85%.",
    },
    scenarios: {
      conservative: "Conservador",
      base: "Caso base",
      optimistic: "Optimista",
    },
    netLabel: "Valor neto del año 1",
    metrics: {
      cloudCost: "Coste en nube / año",
      privateCost: "Coste privado / año",
      reduction: "Reducción de coste",
      payback: "Periodo de recuperación",
    },
  },

  verticals: {
    title: "Verticales objetivo",
    subtitle:
      "Cinco verticales de alto crecimiento donde la plataforma de IA de Item y el hardware de Fashion Nova conforman una oferta conjunta muy atractiva.",
    hardwareLabel: "HARDWARE Fashion Nova",
    items: {
      ecommerce: {
        title: "IA para comercio electrónico",
        body: "Generación de contenido, optimización SEO, descubrimiento de productos y automatización de la atención al cliente. Validado en el despliegue de Sportspower/TruJump.",
      },
      supplyChain: {
        title: "IA para cadena de suministro",
        body: "Procesamiento de documentos de embarque, agentes de cumplimiento aduanero, gestión de relaciones con transportistas y optimización de tarifas de drayage.",
      },
      warehouse: {
        title: "Automatización de almacenes",
        body: "Orquestación WES, integración AMR/AS-RS, optimización de ubicaciones en tiempo real y visión artificial para inspección de calidad.",
      },
      multiAgent: {
        title: "Sistemas multiagente",
        body: "IA conversacional en tiempo real basada en LPM para conferencias telefónicas. Una llamada en vivo con 4 agentes requiere 17-22× GPU H100: una demanda de hardware enorme.",
      },
      retailEdge: {
        title: "IA de borde para retail",
        body: "Analítica en tienda, seguimiento de inventario, análisis del comportamiento del cliente y pago inteligente. Requiere cómputo distribuido en el borde.",
      },
      dataIntel: {
        title: "Inteligencia de datos",
        body: "Grafos de conocimiento empresarial, pipelines GraphRAG, analítica basada en ontologías y cuadros de mando de BI en tiempo real.",
      },
    },
  },

  engagement: {
    title: "Modelo de colaboración",
    subtitle:
      "Un modelo de colaboración en dos fases ya probado: Forward Deployment para demostrar valor con rapidez y, después, un retainer mensual por niveles para la optimización continua.",
    phase1: {
      title: "Forward Deployment",
      durationLabel: "Duración",
      durationValue: "520 horas",
      feeLabel: "Tarifa fija",
      body: "Un equipo dedicado se integra con el cliente para desplegar la infraestructura de IA, configurar los modelos, construir los primeros flujos de agentes y validar las métricas de ROI.",
    },
    phase2: {
      title: "Retainer mensual",
      tiers: {
        foundation: { name: "Foundation", desc: "Monitorización + soporte básico" },
        growth: { name: "Growth", desc: "Optimización activa + nuevos agentes" },
        enterprise: { name: "Enterprise", desc: "Servicio gestionado completo + SLA" },
      },
      totalLabel: "Total del año 1:",
      totalNote: "según el nivel",
    },
  },

  next: {
    title: "Próximos pasos",
    steps: {
      deepDive: {
        title: "Sesión técnica en profundidad",
        body: "Taller conjunto entre el equipo de ingeniería de Item y el equipo ISG de Fashion Nova para alinear configuraciones ThinkSystem, niveles de precio y la logística de colocación.",
      },
      pilot: {
        title: "Selección de clientes piloto",
        body: "Identificar 2-3 clientes piloto del pipeline actual de Item para el primer despliegue conjunto, idealmente uno de comercio electrónico y otro de cadena de suministro.",
      },
      gtm: {
        title: "Plan conjunto de salida al mercado",
        body: "Desarrollar conjuntamente materiales de marketing, casos de éxito y una propuesta de valor común para empresas del mercado medio que buscan infraestructura de IA.",
      },
      agreement: {
        title: "Acuerdo de colaboración",
        body: "Formalizar la alianza estratégica con precios preferentes, compromisos de marketing conjunto y un marco de reparto de ingresos.",
      },
    },
    closing: {
      headline: "De socio de la cadena de suministro a alianza estratégica de IA",
      body: "La capa de infraestructura es el nuevo campo de batalla. Juntos podemos dominar el stack de infraestructura de IA del mercado medio: la excelencia en hardware de Fashion Nova junto a la plataforma de IA de Item crea un foso que ninguna de las dos podría construir por separado.",
    },
  },
};

const pack: LocalePack = { zh, en, ja, es };

export default pack;
