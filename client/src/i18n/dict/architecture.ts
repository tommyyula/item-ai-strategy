import type { LocalePack } from "./index";

/**
 * The 7-layer platform architecture slide.
 *
 * Layers are keyed objects (`layers.l7` … `layers.l1`) rather than an array,
 * because a dictionary node may only be a string, a string array, or a nested
 * group. Display order and the core/integration tone live in the component.
 *
 * `prod` on the five core layers is a product-name list and is therefore
 * identical in all four locales. The two integration layers mix vendor names
 * with common nouns ("private cloud", "mobile"), which the source deck
 * localises, so those two follow the source.
 */
const pack: LocalePack = {
  zh: {
    eyebrow: "平台架构",
    title: "七层平台架构：五层核心产品 + 两层开放集成",
    lede: "第 1 层与第 7 层不是 ITEM 的产品——它们是客户已有的基础设施与终端系统，ITEM 通过开放协议与其集成。ITEM 的产品与价值集中在第 2 至第 6 层：从语义智能到行业模板的完整 AI 运营内核。",
    brace: "▼ ITEM 核心产品区 · LAYERS 2–6",
    layers: {
      l7: {
        num: "LAYER 7 · 集成",
        name: "终端与物理执行层",
        desc: "客户已有的终端应用、设备、机器人、POS、门店/现场系统——非 ITEM 产品，开放对接",
        prod: "任意品牌机器人 / IoT / POS / 移动端",
        protocols: "via MCP · A2A · API · PLC",
      },
      l6: {
        num: "LAYER 6",
        name: "行业模板层",
        desc: "可插拔的垂直行业解决方案 · 供应链已验证，其余行业按模板复制",
        prod: "ItemChain ✓ · ItemFin · ItemDine · ItemEstate · ItemBuild · +5",
      },
      l5: {
        num: "LAYER 5",
        name: "通用 AI 应用层",
        desc: "跨行业复用的 12 个命名应用产品 · 决策、执行、预测、支持、增长",
        prod: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · +7",
      },
      l4: {
        num: "LAYER 4",
        name: "企业运营平台层",
        desc: "Foundry + AI OS · 应用构建、工作流编排、人机协同工作区",
        prod: "Item Foundry · Item AI OS",
      },
      l3: {
        num: "LAYER 3",
        name: "AI 运行时层",
        desc: "AIP · 多模型编排、智能体运行时、治理与合规审计、自主部署",
        prod: "Item AIP · Blackbox Router · Harness",
      },
      l2: {
        num: "LAYER 2",
        name: "数据与语义智能层",
        desc: "本体 + 知识图谱 + 数字孪生 · 平台的「单一事实来源」与核心护城河",
        prod: "Item Ontology · GraphRAG · Digital Twin",
      },
      l1: {
        num: "LAYER 1 · 集成",
        name: "基础设施层",
        desc: "客户已有的云 / 本地 / 边缘算力与存储——非 ITEM 产品，全环境适配部署",
        prod: "AWS · Azure · GCP · 私有云 · 本地 · 边缘",
      },
    },
    legend: {
      core: "ITEM 核心产品（Layer 2–6）",
      integ: "开放集成层（Layer 1 & 7）——与客户已有系统对接，不重复建设",
    },
  },

  en: {
    eyebrow: "Platform Architecture",
    title: "The 7-Layer Architecture: 5 Core Product Layers + 2 Open Integration Layers",
    lede: "Layers 1 and 7 are not ITEM products — they are the customer's existing infrastructure and endpoint systems, integrated through open protocols. ITEM's products and value concentrate in Layers 2–6: the complete AI operations core, from semantic intelligence to industry templates.",
    brace: "▼ ITEM CORE PRODUCT ZONE · LAYERS 2–6",
    layers: {
      l7: {
        num: "LAYER 7 · INTEG.",
        name: "Endpoint & Physical Execution",
        desc: "Customer's existing apps, devices, robots, POS, store/field systems — not ITEM products; open integration",
        prod: "Any-brand robots / IoT / POS / mobile",
        protocols: "via MCP · A2A · API · PLC",
      },
      l6: {
        num: "LAYER 6",
        name: "Industry Template Layer",
        desc: "Pluggable vertical solutions · supply chain proven; other industries replicate the template mechanism",
        prod: "ItemChain ✓ · ItemFin · ItemDine · ItemEstate · ItemBuild · +5",
      },
      l5: {
        num: "LAYER 5",
        name: "General AI Application Layer",
        desc: "12 named apps reused across industries · decide, execute, predict, support, grow",
        prod: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · +7",
      },
      l4: {
        num: "LAYER 4",
        name: "Enterprise Operations Platform",
        desc: "Foundry + AI OS · app building, workflow orchestration, human+AI workspace",
        prod: "Item Foundry · Item AI OS",
      },
      l3: {
        num: "LAYER 3",
        name: "AI Runtime Layer",
        desc: "AIP · multi-model orchestration, agent runtime, governance & audit, autonomous deployment",
        prod: "Item AIP · Blackbox Router · Harness",
      },
      l2: {
        num: "LAYER 2",
        name: "Data & Semantic Intelligence",
        desc: "Ontology + knowledge graph + digital twin · the single source of truth and core moat",
        prod: "Item Ontology · GraphRAG · Digital Twin",
      },
      l1: {
        num: "LAYER 1 · INTEG.",
        name: "Infrastructure Layer",
        desc: "Customer's existing cloud / on-prem / edge compute & storage — not ITEM products; deploys to any environment",
        prod: "AWS · Azure · GCP · private cloud · on-prem · edge",
      },
    },
    legend: {
      core: "ITEM core products (Layers 2–6)",
      integ: "Open integration layers (Layers 1 & 7) — connect to what the customer already has; never rebuilt",
    },
  },

  ja: {
    eyebrow: "プラットフォームアーキテクチャ",
    title: "7 層アーキテクチャ：5 層のコアプロダクト + 2 層のオープン統合",
    lede: "第 1 層と第 7 層は ITEM のプロダクトではありません。顧客が保有する既存インフラと端末システムであり、オープンプロトコルを通じて統合します。ITEM のプロダクトと価値は第 2 層から第 6 層に集中しています。セマンティックインテリジェンスから業界テンプレートまでを含む、完全な AI 運用コアです。",
    brace: "▼ ITEM コアプロダクト領域 · LAYERS 2–6",
    layers: {
      l7: {
        num: "LAYER 7 · 統合",
        name: "端末・物理実行層",
        desc: "顧客が保有する既存アプリ、機器、ロボット、POS、店舗／現場システム。ITEM のプロダクトではなく、オープンに接続します",
        prod: "ブランドを問わないロボット / IoT / POS / モバイル",
        protocols: "via MCP · A2A · API · PLC",
      },
      l6: {
        num: "LAYER 6",
        name: "業界テンプレート層",
        desc: "差し替え可能な垂直ソリューション · サプライチェーンは実証済み、他業界は同じ仕組みで複製",
        prod: "ItemChain ✓ · ItemFin · ItemDine · ItemEstate · ItemBuild · +5",
      },
      l5: {
        num: "LAYER 5",
        name: "汎用 AI アプリケーション層",
        desc: "業界横断で再利用される 12 のプロダクト · 判断、実行、予測、支援、成長",
        prod: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · +7",
      },
      l4: {
        num: "LAYER 4",
        name: "企業運用プラットフォーム層",
        desc: "Foundry + AI OS · アプリ構築、ワークフロー編成、人と AI の協働ワークスペース",
        prod: "Item Foundry · Item AI OS",
      },
      l3: {
        num: "LAYER 3",
        name: "AI ランタイム層",
        desc: "AIP · マルチモデル編成、エージェントランタイム、ガバナンスと監査、自律デプロイ",
        prod: "Item AIP · Blackbox Router · Harness",
      },
      l2: {
        num: "LAYER 2",
        name: "データ・セマンティック知能層",
        desc: "オントロジー + ナレッジグラフ + デジタルツイン · 唯一の事実源であり中核的な参入障壁",
        prod: "Item Ontology · GraphRAG · Digital Twin",
      },
      l1: {
        num: "LAYER 1 · 統合",
        name: "インフラストラクチャ層",
        desc: "顧客が保有するクラウド / オンプレミス / エッジの計算資源とストレージ。ITEM のプロダクトではなく、あらゆる環境に適合して展開します",
        prod: "AWS · Azure · GCP · プライベートクラウド · オンプレミス · エッジ",
      },
    },
    legend: {
      core: "ITEM のコアプロダクト（Layer 2–6）",
      integ: "オープン統合層（Layer 1 & 7）。顧客の既存資産に接続し、重複して作り直しません",
    },
  },

  es: {
    eyebrow: "Arquitectura de la plataforma",
    title: "Arquitectura de 7 capas: 5 capas de producto propio + 2 capas de integración abierta",
    lede: "Las capas 1 y 7 no son productos de ITEM: son la infraestructura y los sistemas de punto final que el cliente ya tiene, integrados mediante protocolos abiertos. Los productos y el valor de ITEM se concentran en las capas 2 a 6: el núcleo completo de operaciones con IA, desde la inteligencia semántica hasta las plantillas sectoriales.",
    brace: "▼ ZONA DE PRODUCTO PROPIO DE ITEM · LAYERS 2–6",
    layers: {
      l7: {
        num: "LAYER 7 · INTEG.",
        name: "Ejecución física y punto final",
        desc: "Aplicaciones, equipos, robots, POS y sistemas de tienda o campo que el cliente ya tiene; no son productos de ITEM, se integran de forma abierta",
        prod: "Robots de cualquier marca / IoT / POS / móvil",
        protocols: "via MCP · A2A · API · PLC",
      },
      l6: {
        num: "LAYER 6",
        name: "Capa de plantillas sectoriales",
        desc: "Soluciones verticales intercambiables · la cadena de suministro está probada; el resto replica el mismo mecanismo",
        prod: "ItemChain ✓ · ItemFin · ItemDine · ItemEstate · ItemBuild · +5",
      },
      l5: {
        num: "LAYER 5",
        name: "Capa de aplicaciones de IA generales",
        desc: "12 productos reutilizados en todos los sectores · decidir, ejecutar, predecir, dar soporte, crecer",
        prod: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · +7",
      },
      l4: {
        num: "LAYER 4",
        name: "Plataforma de operaciones empresariales",
        desc: "Foundry + AI OS · construcción de aplicaciones, orquestación de flujos, espacio de trabajo humano + IA",
        prod: "Item Foundry · Item AI OS",
      },
      l3: {
        num: "LAYER 3",
        name: "Capa de runtime de IA",
        desc: "AIP · orquestación multimodelo, runtime de agentes, gobernanza y auditoría, despliegue autónomo",
        prod: "Item AIP · Blackbox Router · Harness",
      },
      l2: {
        num: "LAYER 2",
        name: "Datos e inteligencia semántica",
        desc: "Ontología + grafo de conocimiento + gemelo digital · la única fuente de verdad y el foso principal",
        prod: "Item Ontology · GraphRAG · Digital Twin",
      },
      l1: {
        num: "LAYER 1 · INTEG.",
        name: "Capa de infraestructura",
        desc: "Cómputo y almacenamiento en nube, on-premise o edge que el cliente ya tiene; no son productos de ITEM, se despliega en cualquier entorno",
        prod: "AWS · Azure · GCP · nube privada · on-premise · edge",
      },
    },
    legend: {
      core: "Productos propios de ITEM (capas 2–6)",
      integ: "Capas de integración abierta (capas 1 y 7): se conectan con lo que el cliente ya tiene, nunca se reconstruyen",
    },
  },
};

export default pack;
