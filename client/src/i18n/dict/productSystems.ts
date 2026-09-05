import type { LocalePack } from "./index";

/**
 * The five product systems — the detail view of Architecture layers 2–6.
 *
 * Cards are keyed objects (`cards.ontology` … `cards.harness`) rather than an
 * array, because a dictionary node may only be a string, a string array, or a
 * nested group. Display order, accent assignment and per-card structure
 * (which cards carry a featured band, an environments strip or a commercial
 * line) live in the component.
 *
 * Not localised anywhere, by instruction: product names and identifiers
 * (ITEM.*, Agent Runtime, Agent IDE, IAM, Foundry, AIP, Harness, Ontology,
 * AI OS, Private Stack), acronyms (OMS/TMS/WMS/YMS/WES/WCS, DDD, PaaS, SaaS,
 * FaaS, ACV, CI/CD, LLM, IoT, GIS, IAM) and the environment names
 * (Cloud / On-Prem / Edge / Air-gapped) — including where those environment
 * names appear inside prose.
 *
 * Harness has no `commercial` key in any locale: the source card carries no
 * commercial-role line and the component renders that block only when the key
 * resolves.
 */
const pack: LocalePack = {
  zh: {
    title: "五大产品系统：架构第 2–6 层的展开",
    subtitle:
      "架构中的每一层都是一套产品系统，拥有各自的设计意图、产品线、能力与商业角色。意义、数据、智能、行动、交付——五者合起来构成 ITEM 平台。",
    labels: {
      design: "设计：",
      purpose: "目的：",
      commercial: "商业角色：",
    },
    cards: {
      ontology: {
        eyebrow: "01 · 意义系统",
        name: "Ontology",
        badge: "护城河",
        design:
          "受治理的知识图谱与实时数字孪生层，定义业务对象、关系、逻辑、动作与动态规则。",
        purpose:
          "驱动全平台一致、可执行智能的单一事实来源——订单、运单、集装箱、卡车、司机、仓库、机器人与月台门，统一在一个语义模型中。",
        products: {
          p1: { name: "ITEM.Ontology Studio", note: "DDD 建模" },
          p2: { name: "ITEM.Ontology Executor", note: "知识图谱与检索" },
        },
        caps: ["对象建模", "知识图谱", "规则引擎", "数字孪生", "语义互操作"],
        commercial: "从不单独销售——作为战略护城河层捆绑交付，形成本体依赖。",
      },
      foundry: {
        eyebrow: "02 · 数据与应用系统",
        name: "Foundry",
        badge: "PaaS",
        design:
          "以本体驱动的企业运营平台——统一异构数据源、低代码应用构建器、工作流编排与运营数字孪生。",
        purpose:
          "在人与 AI 组成的团队之间编排智能决策；OMS、TMS、WMS、YMS、WES、WCS 及一切业务应用的构建与运行底座。",
        products: {
          p1: { name: "ITEM.BI", note: "数据平台" },
          p2: { name: "ITEM.DI", note: "数据集成" },
        },
        caps: ["数据集成", "应用构建器", "事件处理", "数据管道", "低代码"],
        commercial: "PaaS——席位许可 · 工作流执行 · 开发者许可 · 企业平台订阅。",
      },
      aiOs: {
        eyebrow: "03 · 智能系统",
        name: "AI OS",
        badge: "捆绑平台层",
        design:
          "面向生产力、智能与价值链决策的 AI 就绪操作系统——统一运营工作台、实时数据融合、内嵌 Copilot、事件编排。",
        purpose: "让人与 AI 在同一界面上观察、预测、决策与优化——企业的实时运营大脑。",
        feature: { name: "Agent Runtime", note: "智能体执行层" },
        productNames: [
          "ITEM.Predict",
          "ITEM.WMS",
          "ITEM.WES",
          "ITEM.OMS",
          "ITEM.APS",
          "ITEM.TMS",
          "ITEM.YMS",
          "ITEM.Dock",
        ],
        caps: ["决策智能", "实时分析", "企业搜索", "Copilot", "人机协同"],
        commercial: "作为捆绑的平台层随每一次企业部署交付，抬升整体 ACV。",
      },
      aip: {
        eyebrow: "04 · 行动系统",
        name: "AIP",
        badge: "战略平台",
        design:
          "企业级 AI 运行时——多模型编排、智能体运行时、自主工作流、人在回路治理、提示词与版本管理、可观测性与合规审计。",
        purpose:
          "把 LLM 与智能体安全地锚定到真实世界数据与运营系统上，让决策变成可审计、可回退的执行。",
        products: {
          p1: { name: "ITEM.GPT", note: "多智能体平台" },
          p2: { name: "ITEM.Flow", note: "工作流" },
          p3: { name: "ITEM.Vision", note: "IoT、GIS 与视觉模型" },
        },
        caps: ["多模型编排", "智能体运行时", "工具调用", "治理", "审计"],
        commercial: "核心平台产品——SaaS 许可 · 按用量计费的算力 · 智能体执行费 · FaaS 计费。",
      },
      harness: {
        eyebrow: "05 · 交付系统",
        name: "Harness",
        badge: "企业基础设施",
        design:
          "持续交付 / 自主部署平台——在任意环境（Cloud、On-Prem、Air-gapped、Edge）中部署、监控、更新与管理软件，内置金丝雀发布、回滚与合规监控。",
        purpose:
          "把关键任务级 AI 送进任何客户边界之内——这是政府、国防、医疗与制造行业的准入门槛，也是 Private Stack（主权 AI 云）背后的交付引擎。",
        products: {
          p1: { name: "Agent IDE", note: "智能体开发环境" },
          p2: { name: "IAM", note: "企业身份与访问管理" },
          p3: { name: "Multi-Tenant Deployment Platform", note: "全环境运行，统一治理" },
        },
        environments: ["Cloud", "On-Prem", "Edge", "Air-gapped"],
        caps: ["CI/CD", "Air-gapped", "Edge", "金丝雀发布", "回滚", "环境治理"],
      },
    },
  },

  en: {
    title: "Five Product Systems: The Detail View of Layers 2–6",
    subtitle:
      "Each layer of the architecture is a product system with its own design intent, product line, capabilities and commercial role. Meaning, data, intelligence, action and delivery — together they form the ITEM platform.",
    labels: {
      design: "Design —",
      purpose: "Purpose —",
      commercial: "Commercial role —",
    },
    cards: {
      ontology: {
        eyebrow: "01 · SYSTEM OF MEANING",
        name: "Ontology",
        badge: "The Moat",
        design:
          "A governed knowledge graph and real-time digital-twin layer defining business objects, relationships, logic, actions and dynamic rules.",
        purpose:
          "The single source of truth driving consistent, executable intelligence platform-wide — orders, shipments, containers, trucks, drivers, warehouses, robots and dock doors in one semantic model.",
        products: {
          p1: { name: "ITEM.Ontology Studio", note: "DDD Modelling" },
          p2: { name: "ITEM.Ontology Executor", note: "Knowledge Graph & Retrieval" },
        },
        caps: [
          "Object modeling",
          "Knowledge graph",
          "Rules engine",
          "Digital twin",
          "Semantic interop",
        ],
        commercial:
          "Never sold standalone — bundled as the strategic moat layer that creates ontology dependency.",
      },
      foundry: {
        eyebrow: "02 · SYSTEM OF DATA & APPS",
        name: "Foundry",
        badge: "PaaS",
        design:
          "The ontology-powered enterprise operations platform — unifying heterogeneous data sources, low-code app builder, workflow orchestration and operational digital twins.",
        purpose:
          "Orchestrate intelligent decisions across human + AI teams; the build-and-run substrate for OMS, TMS, WMS, YMS, WES, WCS and every business app.",
        products: {
          p1: { name: "ITEM.BI", note: "Data Platform" },
          p2: { name: "ITEM.DI", note: "Data Integration" },
        },
        caps: ["Data integration", "App builder", "Event processing", "Pipelines", "Low-code"],
        commercial:
          "PaaS — seat licenses · workflow execution · developer licenses · enterprise platform subscription.",
      },
      aiOs: {
        eyebrow: "03 · SYSTEM OF INTELLIGENCE",
        name: "AI OS",
        badge: "Bundled platform",
        design:
          "An AI-ready operating system for productivity, intelligence and value-chain decisions — unified operational workspace, real-time data fusion, embedded copilots, event orchestration.",
        purpose:
          "Let humans + AI observe, predict, decide and optimize on one surface — the enterprise's real-time operational brain.",
        feature: { name: "Agent Runtime", note: "the agent execution layer" },
        productNames: [
          "ITEM.Predict",
          "ITEM.WMS",
          "ITEM.WES",
          "ITEM.OMS",
          "ITEM.APS",
          "ITEM.TMS",
          "ITEM.YMS",
          "ITEM.Dock",
        ],
        caps: [
          "Decision intelligence",
          "Real-time analytics",
          "Enterprise search",
          "Copilot",
          "Human+AI teaming",
        ],
        commercial:
          "Bundled platform layer shipped with every enterprise deployment, lifting total ACV.",
      },
      aip: {
        eyebrow: "04 · SYSTEM OF ACTION",
        name: "AIP",
        badge: "Strategic platform",
        design:
          "The enterprise AI runtime — multi-model orchestration, agent runtime, autonomous workflows, human-in-the-loop governance, prompt/version management, observability and compliance audit.",
        purpose:
          "Safely anchor LLMs and agents to real-world data and operational systems, turning decisions into auditable, reversible execution.",
        products: {
          p1: { name: "ITEM.GPT", note: "Multi-Agent Platform" },
          p2: { name: "ITEM.Flow", note: "Workflow" },
          p3: { name: "ITEM.Vision", note: "IoT, GIS & Vision Models" },
        },
        caps: ["Multi-model orchestration", "Agent runtime", "Tool calling", "Governance", "Audit"],
        commercial:
          "Core platform product — SaaS licenses · usage-based compute · agent execution fees · FaaS billing.",
      },
      harness: {
        eyebrow: "05 · SYSTEM OF DELIVERY",
        name: "Harness",
        badge: "Enterprise infra",
        design:
          "The continuous-delivery / autonomous-deployment platform — deploying, monitoring, updating and managing software in any environment (Cloud, On-Prem, Air-gapped, Edge) with canary releases, rollback and compliance monitoring built in.",
        purpose:
          "Put mission-critical AI inside any customer boundary — the entry requirement for government, defense, healthcare and manufacturing, and the delivery engine behind Private Stack (sovereign AI cloud).",
        products: {
          p1: { name: "Agent IDE", note: "Agent development environment" },
          p2: { name: "IAM", note: "Enterprise identity & access" },
          p3: { name: "Multi-Tenant Deployment Platform", note: "Run anywhere, governed" },
        },
        environments: ["Cloud", "On-Prem", "Edge", "Air-gapped"],
        caps: [
          "CI/CD",
          "Air-gapped",
          "Edge",
          "Canary releases",
          "Rollback",
          "Environment governance",
        ],
      },
    },
  },

  ja: {
    title: "5つのプロダクトシステム：アーキテクチャ第2〜6層の詳細",
    subtitle:
      "アーキテクチャの各層は、それぞれ独自の設計意図・製品ライン・機能・商業的役割を持つプロダクトシステムです。意味、データ、インテリジェンス、アクション、デリバリー——この5つがITEMプラットフォームを構成します。",
    labels: {
      design: "設計：",
      purpose: "目的：",
      commercial: "商業的役割：",
    },
    cards: {
      ontology: {
        eyebrow: "01 · 意味のシステム",
        name: "Ontology",
        badge: "参入障壁",
        design:
          "ビジネスオブジェクト、関係、ロジック、アクション、動的ルールを定義する、ガバナンスされたナレッジグラフとリアルタイムのデジタルツイン層です。",
        purpose:
          "プラットフォーム全体で一貫した実行可能なインテリジェンスを駆動する唯一の信頼できる情報源。受注、出荷、コンテナ、トラック、ドライバー、倉庫、ロボット、ドックドアを一つのセマンティックモデルに統合します。",
        products: {
          p1: { name: "ITEM.Ontology Studio", note: "DDDモデリング" },
          p2: { name: "ITEM.Ontology Executor", note: "ナレッジグラフと検索" },
        },
        caps: [
          "オブジェクトモデリング",
          "ナレッジグラフ",
          "ルールエンジン",
          "デジタルツイン",
          "セマンティック相互運用",
        ],
        commercial:
          "単独では販売せず、オントロジー依存を生む戦略的な参入障壁レイヤーとしてバンドル提供します。",
      },
      foundry: {
        eyebrow: "02 · データとアプリケーションのシステム",
        name: "Foundry",
        badge: "PaaS",
        design:
          "オントロジーを基盤とするエンタープライズ運用プラットフォーム。異種データソースの統合、ローコードアプリビルダー、ワークフローオーケストレーション、運用デジタルツインを提供します。",
        purpose:
          "人とAIのチームをまたいでインテリジェントな意思決定をオーケストレーションし、OMS・TMS・WMS・YMS・WES・WCSをはじめとするあらゆる業務アプリを構築・実行する基盤です。",
        products: {
          p1: { name: "ITEM.BI", note: "データプラットフォーム" },
          p2: { name: "ITEM.DI", note: "データ統合" },
        },
        caps: [
          "データ統合",
          "アプリビルダー",
          "イベント処理",
          "パイプライン",
          "ローコード",
        ],
        commercial:
          "PaaS——シートライセンス · ワークフロー実行 · 開発者ライセンス · エンタープライズプラットフォーム契約。",
      },
      aiOs: {
        eyebrow: "03 · インテリジェンスのシステム",
        name: "AI OS",
        badge: "バンドル提供のプラットフォーム",
        design:
          "生産性、インテリジェンス、バリューチェーンの意思決定に向けたAIレディなオペレーティングシステム。統合された運用ワークスペース、リアルタイムのデータ統合、組み込みコパイロット、イベントオーケストレーションを備えます。",
        purpose:
          "人とAIが一つの画面で観察・予測・意思決定・最適化を行う、企業のリアルタイム運用ブレインです。",
        feature: { name: "Agent Runtime", note: "エージェント実行レイヤー" },
        productNames: [
          "ITEM.Predict",
          "ITEM.WMS",
          "ITEM.WES",
          "ITEM.OMS",
          "ITEM.APS",
          "ITEM.TMS",
          "ITEM.YMS",
          "ITEM.Dock",
        ],
        caps: [
          "意思決定インテリジェンス",
          "リアルタイム分析",
          "エンタープライズ検索",
          "Copilot",
          "人とAIの協働",
        ],
        commercial:
          "すべてのエンタープライズ導入に標準で含まれるバンドル型プラットフォーム層として、ACV全体を押し上げます。",
      },
      aip: {
        eyebrow: "04 · アクションのシステム",
        name: "AIP",
        badge: "戦略プラットフォーム",
        design:
          "エンタープライズ向けAIランタイム。マルチモデルオーケストレーション、エージェントランタイム、自律ワークフロー、ヒューマン・イン・ザ・ループのガバナンス、プロンプト／バージョン管理、オブザーバビリティ、コンプライアンス監査を備えます。",
        purpose:
          "LLMとエージェントを実世界のデータと業務システムに安全につなぎ、意思決定を監査可能かつ取り消し可能な実行へと変えます。",
        products: {
          p1: { name: "ITEM.GPT", note: "マルチエージェントプラットフォーム" },
          p2: { name: "ITEM.Flow", note: "ワークフロー" },
          p3: { name: "ITEM.Vision", note: "IoT・GIS・ビジョンモデル" },
        },
        caps: [
          "マルチモデルオーケストレーション",
          "エージェントランタイム",
          "ツール呼び出し",
          "ガバナンス",
          "監査",
        ],
        commercial:
          "中核となるプラットフォーム製品。SaaSライセンス · 従量課金のコンピュート · エージェント実行料 · FaaS課金。",
      },
      harness: {
        eyebrow: "05 · デリバリーのシステム",
        name: "Harness",
        badge: "エンタープライズ基盤",
        design:
          "継続的デリバリー／自律デプロイのプラットフォーム。あらゆる環境（Cloud、On-Prem、Air-gapped、Edge）でソフトウェアをデプロイ・監視・更新・管理し、カナリアリリース、ロールバック、コンプライアンス監視を標準で備えます。",
        purpose:
          "ミッションクリティカルなAIをあらゆる顧客の境界内に届けます。官公庁、防衛、医療、製造における参入要件であり、Private Stack（ソブリンAIクラウド）を支えるデリバリーエンジンです。",
        products: {
          p1: { name: "Agent IDE", note: "エージェント開発環境" },
          p2: { name: "IAM", note: "エンタープライズID・アクセス管理" },
          p3: { name: "Multi-Tenant Deployment Platform", note: "どこでも実行、統制のもとで" },
        },
        environments: ["Cloud", "On-Prem", "Edge", "Air-gapped"],
        caps: [
          "CI/CD",
          "Air-gapped",
          "Edge",
          "カナリアリリース",
          "ロールバック",
          "環境ガバナンス",
        ],
      },
    },
  },

  es: {
    title: "Cinco sistemas de producto: el detalle de las capas 2–6",
    subtitle:
      "Cada capa de la arquitectura es un sistema de producto con su propia intención de diseño, línea de productos, capacidades y rol comercial. Significado, datos, inteligencia, acción y entrega: juntos forman la plataforma ITEM.",
    labels: {
      design: "Diseño —",
      purpose: "Propósito —",
      commercial: "Rol comercial —",
    },
    cards: {
      ontology: {
        eyebrow: "01 · SISTEMA DE SIGNIFICADO",
        name: "Ontology",
        badge: "Ventaja defensible",
        design:
          "Una capa gobernada de grafo de conocimiento y gemelo digital en tiempo real que define objetos de negocio, relaciones, lógica, acciones y reglas dinámicas.",
        purpose:
          "La única fuente de verdad que impulsa una inteligencia coherente y ejecutable en toda la plataforma: pedidos, envíos, contenedores, camiones, conductores, almacenes, robots y muelles en un solo modelo semántico.",
        products: {
          p1: { name: "ITEM.Ontology Studio", note: "Modelado DDD" },
          p2: { name: "ITEM.Ontology Executor", note: "Grafo de conocimiento y recuperación" },
        },
        caps: [
          "Modelado de objetos",
          "Grafo de conocimiento",
          "Motor de reglas",
          "Gemelo digital",
          "Interoperabilidad semántica",
        ],
        commercial:
          "Nunca se vende por separado: se incluye como la capa estratégica de ventaja defensible que genera dependencia de la ontología.",
      },
      foundry: {
        eyebrow: "02 · SISTEMA DE DATOS Y APLICACIONES",
        name: "Foundry",
        badge: "PaaS",
        design:
          "La plataforma de operaciones empresariales impulsada por la ontología: unifica fuentes de datos heterogéneas, constructor de apps low-code, orquestación de flujos de trabajo y gemelos digitales operativos.",
        purpose:
          "Orquestar decisiones inteligentes entre equipos humanos + IA; el sustrato para construir y ejecutar OMS, TMS, WMS, YMS, WES, WCS y cualquier aplicación de negocio.",
        products: {
          p1: { name: "ITEM.BI", note: "Plataforma de datos" },
          p2: { name: "ITEM.DI", note: "Integración de datos" },
        },
        caps: [
          "Integración de datos",
          "Constructor de apps",
          "Procesamiento de eventos",
          "Pipelines",
          "Low-code",
        ],
        commercial:
          "PaaS: licencias por usuario · ejecución de flujos de trabajo · licencias de desarrollador · suscripción de plataforma empresarial.",
      },
      aiOs: {
        eyebrow: "03 · SISTEMA DE INTELIGENCIA",
        name: "AI OS",
        badge: "Plataforma incluida",
        design:
          "Un sistema operativo preparado para la IA orientado a la productividad, la inteligencia y las decisiones de la cadena de valor: espacio de trabajo operativo unificado, fusión de datos en tiempo real, copilotos integrados y orquestación de eventos.",
        purpose:
          "Permite que humanos + IA observen, predigan, decidan y optimicen en una sola superficie: el cerebro operativo en tiempo real de la empresa.",
        feature: { name: "Agent Runtime", note: "la capa de ejecución de agentes" },
        productNames: [
          "ITEM.Predict",
          "ITEM.WMS",
          "ITEM.WES",
          "ITEM.OMS",
          "ITEM.APS",
          "ITEM.TMS",
          "ITEM.YMS",
          "ITEM.Dock",
        ],
        caps: [
          "Inteligencia de decisiones",
          "Analítica en tiempo real",
          "Búsqueda empresarial",
          "Copilot",
          "Colaboración humano+IA",
        ],
        commercial:
          "Capa de plataforma incluida en cada despliegue empresarial, que eleva el ACV total.",
      },
      aip: {
        eyebrow: "04 · SISTEMA DE ACCIÓN",
        name: "AIP",
        badge: "Plataforma estratégica",
        design:
          "El runtime de IA empresarial: orquestación multimodelo, runtime de agentes, flujos de trabajo autónomos, gobernanza con intervención humana, gestión de prompts y versiones, observabilidad y auditoría de cumplimiento.",
        purpose:
          "Anclar de forma segura los LLM y los agentes a datos reales y sistemas operativos, convirtiendo las decisiones en una ejecución auditable y reversible.",
        products: {
          p1: { name: "ITEM.GPT", note: "Plataforma multiagente" },
          p2: { name: "ITEM.Flow", note: "Flujos de trabajo" },
          p3: { name: "ITEM.Vision", note: "Modelos de IoT, GIS y visión" },
        },
        caps: [
          "Orquestación multimodelo",
          "Runtime de agentes",
          "Llamada a herramientas",
          "Gobernanza",
          "Auditoría",
        ],
        commercial:
          "Producto central de plataforma: licencias SaaS · cómputo por uso · tarifas de ejecución de agentes · facturación FaaS.",
      },
      harness: {
        eyebrow: "05 · SISTEMA DE ENTREGA",
        name: "Harness",
        badge: "Infraestructura empresarial",
        design:
          "La plataforma de entrega continua y despliegue autónomo: despliega, supervisa, actualiza y gestiona software en cualquier entorno (Cloud, On-Prem, Air-gapped, Edge) con despliegues canary, reversión y supervisión de cumplimiento incorporados.",
        purpose:
          "Llevar la IA de misión crítica dentro de cualquier frontera del cliente: el requisito de entrada para gobierno, defensa, salud e industria, y el motor de entrega detrás de Private Stack (nube de IA soberana).",
        products: {
          p1: { name: "Agent IDE", note: "Entorno de desarrollo de agentes" },
          p2: { name: "IAM", note: "Identidad y acceso empresarial" },
          p3: {
            name: "Multi-Tenant Deployment Platform",
            note: "Ejecución en cualquier entorno, con gobernanza",
          },
        },
        environments: ["Cloud", "On-Prem", "Edge", "Air-gapped"],
        caps: [
          "CI/CD",
          "Air-gapped",
          "Edge",
          "Despliegues canary",
          "Reversión",
          "Gobernanza de entornos",
        ],
      },
    },
  },
};

export default pack;
