import type { LocalePack } from "./index";

/**
 * Layer 6 of the platform architecture, expanded: the ten pluggable vertical
 * templates.
 *
 * Templates are keyed objects (`templates.chain` … `templates.retail`) rather
 * than an array, because a dictionary node may only be a string, a string
 * array, or a nested group. Display order and the per-template accent live in
 * the component.
 *
 * `name` is a product name, so it is deliberately identical in all four
 * locales — do not translate ItemChain, ItemDock, ItemTrade, ItemFin,
 * ItemDine, ItemEstate, ItemBuild, ItemHealth, ItemAuto or ItemRetail. Same
 * for "ITEM", "JIT" and the figure "~62.7% CAGR".
 *
 * `lede` is the first sentence of the intro; `provenLead` + `provenRest` are
 * the second, split so the component can carry the accent colour on the lead
 * clause without putting markup in a dictionary value. `provenRest` therefore
 * carries its own leading separator.
 */
const pack: LocalePack = {
  zh: {
    eyebrow: "LAYER 6",
    title: "行业模板层：10 个可插拔的垂直行业解决方案",
    lede: "每个模板 = 行业本体对象 + 预置工作流 + 合规规则包 + 行业智能体 + 系统连接器。",
    provenLead: "供应链模板已在生产环境中得到验证",
    provenRest: "——它验证了整套模板机制，其他行业照此复制。",
    provenBadge: "已验证",
    templates: {
      chain: {
        name: "ItemChain",
        category: "供应链与物流",
        desc: "订单／运输／仓储／堆场全流程执行——旗舰模板，已在生产环境运行",
      },
      dock: {
        name: "ItemDock",
        category: "港口与拖车",
        desc: "港口、拖车与集装箱作业（供应链子模板）",
      },
      trade: {
        name: "ItemTrade",
        category: "全球贸易",
        desc: "关税归类、跨境合规、贸易情报",
      },
      fin: {
        name: "ItemFin",
        category: "金融顾问",
        desc: "财富与投顾：客户画像、组合分析、监管报送、顾问助手",
      },
      dine: {
        name: "ItemDine",
        category: "餐饮运营",
        desc: "餐厅运营：排班、备餐预测、损耗控制、多门店驾驶舱",
      },
      estate: {
        name: "ItemEstate",
        category: "物业管理",
        desc: "物业管理：租约、租户服务、维修工单、能耗与资产运营",
      },
      build: {
        name: "ItemBuild",
        category: "房地产开发",
        desc: "开发建设：项目排期、供应商、成本控制、销售去化",
      },
      health: {
        name: "ItemHealth",
        category: "医疗运营",
        desc: "医疗运营与供应：冷链、效期、合规追溯",
      },
      auto: {
        name: "ItemAuto",
        category: "制造与汽车",
        desc: "制造与汽车：JIT 排序、供应商风险、产线协同",
      },
      retail: {
        name: "ItemRetail",
        category: "零售与商业",
        desc: "零售与商业：全渠道订单、库存、退货、会员运营",
      },
    },
    callout: {
      label: "模板的商业意义：",
      body: "横向平台比拼功能，垂直模板比拼行业认知。ITEM 在一个平台上承载 N 个模板——每进入一个新行业，边际成本持续下降，而这正是整个 Agent 市场中增长最快的细分（~62.7% CAGR）。",
    },
  },

  en: {
    eyebrow: "LAYER 6",
    title: "Industry Templates — 10 Pluggable Vertical Solutions",
    lede: "Each template = industry ontology objects + prebuilt workflows + compliance rule pack + industry agents + system connectors.",
    provenLead: "The supply-chain template is proven in production",
    provenRest: " — it validates the entire template mechanism; other industries replicate it.",
    provenBadge: "PROVEN",
    templates: {
      chain: {
        name: "ItemChain",
        category: "SUPPLY CHAIN & LOGISTICS",
        desc: "Full order/transport/warehouse/yard execution — flagship template, live in production",
      },
      dock: {
        name: "ItemDock",
        category: "PORTS & DRAYAGE",
        desc: "Port, drayage & container operations (supply-chain sub-template)",
      },
      trade: {
        name: "ItemTrade",
        category: "GLOBAL TRADE",
        desc: "Tariff classification, cross-border compliance, trade intelligence",
      },
      fin: {
        name: "ItemFin",
        category: "FINANCIAL ADVISORY",
        desc: "Advisory & wealth: client profiling, portfolio analytics, regulatory filings, advisor copilot",
      },
      dine: {
        name: "ItemDine",
        category: "RESTAURANT OPERATIONS",
        desc: "Restaurant ops: scheduling, prep forecasting, waste control, multi-store cockpit",
      },
      estate: {
        name: "ItemEstate",
        category: "PROPERTY MANAGEMENT",
        desc: "Property mgmt: leases, tenant services, repair tickets, energy & asset operations",
      },
      build: {
        name: "ItemBuild",
        category: "REAL ESTATE DEVELOPMENT",
        desc: "Development: project schedules, vendors, cost control, sales absorption",
      },
      health: {
        name: "ItemHealth",
        category: "HEALTHCARE OPS",
        desc: "Healthcare ops & supply: cold chain, expiry, compliance traceability",
      },
      auto: {
        name: "ItemAuto",
        category: "MANUFACTURING & AUTO",
        desc: "Manufacturing & auto: JIT sequencing, supplier risk, line coordination",
      },
      retail: {
        name: "ItemRetail",
        category: "RETAIL & COMMERCE",
        desc: "Retail & commerce: omnichannel orders, inventory, returns, membership ops",
      },
    },
    callout: {
      label: "The business meaning of templates:",
      body: "Horizontal platforms compete on features; vertical templates compete on industry knowledge. ITEM carries N templates on one platform — each new industry at declining marginal cost, in the fastest-growing segment of the entire agent market (~62.7% CAGR).",
    },
  },

  ja: {
    eyebrow: "LAYER 6",
    title: "業界テンプレート層：差し替え可能な 10 の垂直ソリューション",
    lede: "各テンプレート = 業界オントロジーのオブジェクト + 事前構築ワークフロー + コンプライアンス・ルールパック + 業界エージェント + システムコネクタ。",
    provenLead: "サプライチェーン・テンプレートは本番環境で実証済み",
    provenRest: "——テンプレートの仕組み全体を検証しており、他の業界も同じ形で展開できます。",
    provenBadge: "実証済み",
    templates: {
      chain: {
        name: "ItemChain",
        category: "サプライチェーン・物流",
        desc: "受注／輸送／倉庫／ヤードの全工程を実行。旗艦テンプレートとして本番環境で稼働中",
      },
      dock: {
        name: "ItemDock",
        category: "港湾・ドレージ",
        desc: "港湾、ドレージ、コンテナ業務（サプライチェーンのサブテンプレート）",
      },
      trade: {
        name: "ItemTrade",
        category: "グローバル貿易",
        desc: "関税分類、越境コンプライアンス、貿易インテリジェンス",
      },
      fin: {
        name: "ItemFin",
        category: "金融アドバイザリー",
        desc: "アドバイザリーと資産運用：顧客プロファイリング、ポートフォリオ分析、規制報告、アドバイザー向けコパイロット",
      },
      dine: {
        name: "ItemDine",
        category: "飲食店オペレーション",
        desc: "飲食店運営：シフト作成、仕込み需要予測、廃棄削減、多店舗コックピット",
      },
      estate: {
        name: "ItemEstate",
        category: "プロパティマネジメント",
        desc: "不動産管理：賃貸借契約、テナント対応、修繕チケット、エネルギーと資産の運用",
      },
      build: {
        name: "ItemBuild",
        category: "不動産開発",
        desc: "開発事業：プロジェクト工程、協力会社、コスト管理、販売消化",
      },
      health: {
        name: "ItemHealth",
        category: "ヘルスケア・オペレーション",
        desc: "医療現場の運用と供給：コールドチェーン、有効期限、コンプライアンス・トレーサビリティ",
      },
      auto: {
        name: "ItemAuto",
        category: "製造・自動車",
        desc: "製造・自動車：JIT 順序建て、サプライヤーリスク、ライン連携",
      },
      retail: {
        name: "ItemRetail",
        category: "リテール・コマース",
        desc: "小売・コマース：オムニチャネル受注、在庫、返品、会員運営",
      },
    },
    callout: {
      label: "テンプレートがもつビジネス上の意味：",
      body: "水平型プラットフォームは機能で競い、垂直テンプレートは業界知見で競います。ITEM は 1 つのプラットフォーム上で N 個のテンプレートを展開し、新しい業界を追加するたびに限界コストは下がります。しかもそこは、エージェント市場全体で最も成長の速い領域です（~62.7% CAGR）。",
    },
  },

  es: {
    eyebrow: "LAYER 6",
    title: "Plantillas sectoriales: 10 soluciones verticales intercambiables",
    lede: "Cada plantilla = objetos de la ontología del sector + flujos de trabajo preconstruidos + paquete de reglas de cumplimiento + agentes sectoriales + conectores de sistemas.",
    provenLead: "La plantilla de cadena de suministro está probada en producción",
    provenRest: " — valida todo el mecanismo de plantillas; el resto de los sectores lo replica.",
    provenBadge: "PROBADA",
    templates: {
      chain: {
        name: "ItemChain",
        category: "CADENA DE SUMINISTRO Y LOGÍSTICA",
        desc: "Ejecución completa de pedidos, transporte, almacén y patio: plantilla insignia, en producción",
      },
      dock: {
        name: "ItemDock",
        category: "PUERTOS Y DRAYAGE",
        desc: "Operaciones portuarias, de drayage y de contenedores (subplantilla de cadena de suministro)",
      },
      trade: {
        name: "ItemTrade",
        category: "COMERCIO GLOBAL",
        desc: "Clasificación arancelaria, cumplimiento transfronterizo, inteligencia comercial",
      },
      fin: {
        name: "ItemFin",
        category: "ASESORÍA FINANCIERA",
        desc: "Asesoría y patrimonio: perfilado de clientes, analítica de carteras, informes regulatorios, copiloto del asesor",
      },
      dine: {
        name: "ItemDine",
        category: "OPERACIONES DE RESTAURACIÓN",
        desc: "Operación de restaurantes: turnos, previsión de preparación, control de mermas, cabina multitienda",
      },
      estate: {
        name: "ItemEstate",
        category: "GESTIÓN INMOBILIARIA",
        desc: "Gestión de inmuebles: contratos de arrendamiento, servicios al inquilino, incidencias de mantenimiento, energía y operación de activos",
      },
      build: {
        name: "ItemBuild",
        category: "DESARROLLO INMOBILIARIO",
        desc: "Desarrollo: calendarios de obra, proveedores, control de costes, absorción de ventas",
      },
      health: {
        name: "ItemHealth",
        category: "OPERACIONES SANITARIAS",
        desc: "Operación y suministro sanitario: cadena de frío, caducidades, trazabilidad de cumplimiento",
      },
      auto: {
        name: "ItemAuto",
        category: "MANUFACTURA Y AUTOMOCIÓN",
        desc: "Manufactura y automoción: secuenciación JIT, riesgo de proveedores, coordinación de línea",
      },
      retail: {
        name: "ItemRetail",
        category: "RETAIL Y COMERCIO",
        desc: "Retail y comercio: pedidos omnicanal, inventario, devoluciones, operación de fidelización",
      },
    },
    callout: {
      label: "El significado de negocio de las plantillas:",
      body: "Las plataformas horizontales compiten por funcionalidades; las plantillas verticales compiten por conocimiento sectorial. ITEM lleva N plantillas sobre una sola plataforma: cada nuevo sector con un coste marginal decreciente, en el segmento de mayor crecimiento de todo el mercado de agentes (~62.7% CAGR).",
    },
  },
};

export default pack;
