import type { LocalePack } from "../index";

/**
 * pages.productGeneralCustomerV5 — "ITEM AI · Customer Edition V5".
 *
 * Ported from reference/manus-pages/product_general_customer_v5.html, whose
 * markup stacked Chinese and English in sibling `.l-zh` / `.l-en` spans. The
 * Chinese below is the author's original copy, the English is the author's
 * original English; `ja` and `es` are new translations.
 *
 * Product names (ItemGPT, ItemChain, Foundry, …), layer numbers and metrics
 * stay unlocalised and live in the component, not here.
 */
const pack: LocalePack = {
  /* ------------------------------------------------------------------ zh */
  zh: {
    demoLabel: "观看演示",

    meta: {
      edition: "客户版 · V5",
      docTag: "product_general_customer_v5",
    },

    cover: {
      titleLines: ["ITEM AI", "通用企业 AI 操作系统"],
      subtitle: "一个平台 · 所有行业",
      lede: "一套已在供应链行业验证并生产运行的 AI 操作系统架构，现以「平台 + 行业模板」的方式向所有行业开放。同一个本体、同一个 AI 运行时、同一个运营平台——只需更换行业模板，即可落地到任何垂直领域。",
      industries: {
        proven: "✓ 供应链 · 已验证",
        financial: "财务咨询",
        restaurant: "餐馆运营",
        property: "房产管理",
        realEstate: "地产开发",
        next: "你的行业 · 下一个",
      },
      meta: "ITEM AI · 客户版 · V5",
    },

    repositioning: {
      eyebrow: "01 · 重新定位",
      title: "从「物流 AI」到「通用企业 AI 操作系统」",
      lede: "供应链是我们的出发点，不是终点。我们在那里构建了完整的 AI 操作系统——本体、智能体运行时、应用工厂、运营工作区。我们发现：这套架构的 80% 与行业无关。",
      cards: {
        proven: {
          title: "已验证的事实",
          body: "在供应链行业，ITEM 已运行完整的 AI 操作系统：从数据本体到智能体编排，从工作流执行到物理设备对接。这是生产系统，不是概念验证。",
        },
        universality: {
          title: "架构的通用性",
          body: "决策、执行、预测、可视化、支持、增长——每个行业都需要。行业区别只在于：对象不同、流程不同、合规不同——恰好可以模板化。",
        },
        templated: {
          title: "模板化的含义",
          body: "进入新行业 = 配置新模板：加载行业对象、预置行业流程、接入行业系统。数周，而非数年。",
        },
      },
    },

    problem: {
      eyebrow: "02 · 问题所在",
      title: "每个行业都面临同一个问题",
      lede: "传统企业软件记录运营，但记录不等于运行。现有 AI 工具要么只做知识检索，要么只做流程自动化——没有一个真正拥有运营数据模型并延伸到物理世界。",
      cards: {
        knowledge: {
          title: "知识层工具",
          body: "帮你「找到信息」——但决策仍然是人的，执行仍然是手动的。",
        },
        process: {
          title: "流程层工具",
          body: "帮你「自动化步骤」——但不理解业务对象，不拥有数据模型，无法做运营决策。",
        },
        operations: {
          title: "运营层：ITEM AI",
          body: "拥有运营本体、能做决策、能驱动物理执行的 AI 操作系统——这是我们的位置。",
        },
      },
    },

    whyNow: {
      eyebrow: "03 · 为什么是现在",
      title: "为什么是现在？",
      cards: {
        ontology: {
          title: "LLM 让本体构建成本降低 10×",
          body: "大语言模型从文档、流程、对话中自动提取行业对象与关系——构建速度从月级降到天级。",
        },
        agents: {
          title: "智能体技术成熟",
          body: "多智能体协作、工具调用、长期记忆——让「AI 做运营决策」从理论变为现实。",
        },
        enterprise: {
          title: "企业准备好了",
          body: "企业不再问「AI 能做什么」，而是问「AI 能帮我运营什么」。预算从「探索」转向「运营级部署」。",
        },
        proven: {
          title: "我们已经跑通了",
          body: "ITEM 已经在供应链行业用这套架构跑了生产系统。现在是把已验证模式复制到更多行业的时机。",
        },
      },
    },

    architecture: {
      eyebrow: "04 · 架构",
      title: "七层架构：五层自研内核 + 两层开放集成",
      lede: "Layer 1 和 Layer 7 是开放集成层——与客户已有的系统和设备对接。Layer 2–6 是 ITEM 的核心自研产品。",
      layers: {
        l7: {
          name: "物理设备集成",
          note: "开放集成 · 与客户已有设备对接",
          products: "客户的机器人 · IoT · PLC",
        },
        l6: { name: "行业模板层", products: "ItemChain · ItemFin · ItemDine · ItemEstate …" },
        l5: { name: "通用 AI 应用层", products: "ItemGPT · ItemClaw · ItemFlow · ItemSense …" },
        l4: {
          name: "应用与流程工厂（Foundry）",
          products: "低代码构建器 · 工作流引擎 · 事件处理",
        },
        l3: {
          name: "AI 智能体平台（AIP）",
          products: "智能体运行时 · 多智能体 · 工具注册表 · 记忆",
        },
        l2: { name: "运营本体层", products: "知识图谱 · 数字孪生 · 语义层" },
        l1: {
          name: "数据与系统集成",
          note: "开放集成 · 与客户已有 IT 系统对接",
          products: "客户的 ERP · WMS · CRM · 数据库",
        },
      },
      legend: {
        core: "ITEM 核心产品（Layer 2–6）",
        integration: "开放集成层（与客户系统／设备对接）",
      },
    },

    layer2: {
      title: "运营本体 —— 让 AI 理解你的业务",
      lede: "传统系统存储数据行；ITEM 构建业务对象的语义图谱。每个对象（订单、客户、设备、空间、流程）都有类型、关系、规则和历史。AI 智能体在本体上推理，而非在表格上查询。",
      cards: {
        wiki: {
          title: "Wiki + 本体构建",
          body: "用自然语言描述你的业务，AI 自动生成结构化本体。从文档、流程、对话中提取对象与关系。",
        },
        twin: {
          title: "数字孪生",
          body: "实时映射物理世界的状态——仓库、门店、楼宇、产线。每个变化自动反映在本体中。",
        },
        fabric: {
          title: "语义数据层",
          body: "统一来自多个系统的数据，建立跨源的语义关联。不替换你的数据库，而是在其上建立智能层。",
        },
      },
      callout: {
        label: "对客户的意义：",
        body: "你不需要重新整理数据或替换现有系统。ITEM 从你已有的数据中构建智能层——AI 立即理解你的业务上下文。",
      },
    },

    layer3: {
      title: "AI 智能体平台 —— 让 AI 为你做决策和执行",
      lede: "不是聊天机器人，是能做事的 AI 员工。每个智能体拥有角色、权限、工具和记忆，在本体上推理，通过工作流执行任务，遇到不确定时请求人类确认。",
      cards: {
        factory: {
          title: "Agent Factory",
          body: "可视化创建和管理智能体：定义角色、分配工具、设置权限边界。无需编程即可部署专业 AI 员工。",
        },
        collaboration: {
          title: "多智能体协作",
          body: "多个智能体协同完成复杂任务：调度员 + 审核员 + 执行员。自动分工、自动升级、自动汇报。",
        },
        humanLoop: {
          title: "人在回路",
          body: "AI 不是黑箱。关键决策点自动请求人类确认，所有推理过程可审计、可追溯。",
        },
      },
    },

    layer4: {
      title: "应用与流程工厂（Foundry）—— 快速构建你的运营应用",
      lede: "本体驱动的应用与流程工厂：数据集成、低代码／无代码应用构建器、工作流编排、实时事件处理、人机协作。行业模板就是 Foundry 上的预置应用包——客户和合作伙伴可以用同样的工具构建自己的扩展。",
      cards: {
        capacity: {
          title: "Capacity Platform",
          body: "低代码构建运营应用：拖拽式界面、数据绑定、权限控制。从想法到上线，天级而非月级。",
        },
        workflow: {
          title: "工作流引擎",
          body: "可视化设计复杂业务流程：条件分支、并行执行、异常处理、SLA 监控。AI 智能体和人类在同一流程中协作。",
        },
        events: {
          title: "实时事件处理",
          body: "毫秒级响应业务事件：库存变动、订单异常、设备告警、客户行为。事件驱动，不是轮询。",
        },
      },
      callout: {
        label: "对客户的意义：",
        body: "新行业模板 = Foundry 上的一组预置应用与流程。「进入新行业 = 数周配置而非数年开发」在工程上成立的原因就在这里。",
      },
    },

    layer5: {
      title: "通用 AI 应用 —— 12 个跨行业复用的产品",
      lede: "这 12 个产品不属于任何一个行业。决策、执行、预测、看见、听见、支持、增长——每个行业都需要。在供应链生产环境中打磨成熟，切换行业时零改造复用。",
      products: {
        itemGpt: { tag: "每一个决策都有 AI", desc: "自然语言运营接口——用一句话调度整个平台" },
        itemClaw: { tag: "执行零摩擦", desc: "多智能体工作流执行器——从建议到执行" },
        itemFlow: { tag: "设计 · 自动化 · 规模化", desc: "可视化 AI 工作流构建器" },
        itemSense: { tag: "全局可见，实时呈现", desc: "实时可视化 + 数字孪生驾驶舱" },
        itemPredict: { tag: "预见下一步", desc: "需求／现金流／客流／资源的通用预测引擎" },
        itemOpsAi: { tag: "会自己运行的运营", desc: "自主运营与持续优化" },
        itemAudit: { tag: "找回正在流失的钱", desc: "计费纠错、合规稽核、成本回收" },
        itemVision: { tag: "看见别人看不见的", desc: "计算机视觉——安防、质检、现场监控" },
        itemVoice: { tag: "解放双手的运营", desc: "语音 AI——一线作业与来电的免提交互" },
        itemSupport: { tag: "全渠道，一个会话", desc: "全渠道工单：邮件 · 消息 · 短信 · 电话" },
        itemGrow: { tag: "永不停歇的销售管道", desc: "SDR/BDR · SEO/AEO/GEO · 内容生成的 GTM AI" },
        itemDoc: { tag: "会自我处理的文档", desc: "文档自动化——合同、发票、报告的读取与生成" },
      },
    },

    layer6: {
      title: "行业模板 —— 10 个可插拔的垂直方案",
      lede: "每个模板 = 行业本体对象 + 预置工作流 + 合规规则包 + 行业智能体 + 系统连接器。供应链模板已在生产环境验证——证明了整个模板机制可以跑通；其余行业按同一机制复制。",
      provenBadge: "✓ 已验证",
      templates: {
        itemChain: { tag: "供应链与物流", desc: "订单／运输／仓储／堆场全套执行——旗舰模板" },
        itemDock: { tag: "港口与拖车运输", desc: "港口、拖车、集装箱运营" },
        itemTrade: { tag: "全球贸易", desc: "关税归类、跨境合规、贸易智能" },
        itemFin: { tag: "财务咨询", desc: "财务咨询：客户画像、组合分析、合规报送" },
        itemDine: { tag: "餐馆运营", desc: "餐馆运营：排班、备货预测、损耗控制" },
        itemEstate: { tag: "房产管理", desc: "房产管理：租约、租户服务、报修、能耗" },
        itemBuild: { tag: "地产开发", desc: "地产开发：项目进度、供应商、成本与销售" },
        itemHealth: { tag: "医疗运营", desc: "医疗运营：冷链、效期、合规追溯" },
        itemAuto: { tag: "制造业", desc: "制造与汽车：JIT 排序、供应商风险" },
        itemRetail: { tag: "零售与电商", desc: "零售电商：全渠道订单、库存、退货" },
      },
    },

    catalog: {
      eyebrow: "05 · 产品目录",
      title: "22 个产品：12 通用应用 × 10 行业模板",
      general: {
        badge: "通用",
        title: "跨行业复用 · Layer 5",
        list: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · ItemOps AI · ItemAudit · ItemVision · ItemVoice · ItemSupport · ItemGrow · ItemDoc",
      },
      vertical: {
        badge: "垂直",
        title: "可插拔垂直方案 · Layer 6",
        list: "ItemChain ✓ · ItemDock · ItemTrade · ItemFin · ItemDine · ItemEstate · ItemBuild · ItemHealth · ItemAuto · ItemRetail",
      },
      table: {
        head: { dimension: "维度", general: "通用应用（12）", templates: "行业模板（10）" },
        rows: {
          question: {
            label: "回答的问题",
            general: "「企业运营需要哪些 AI 能力？」",
            templates: "「这些能力如何长成某个行业的样子？」",
          },
          reuse: {
            label: "复用方式",
            general: "跨行业 100% 复用",
            templates: "按行业加载，可组合、可定制",
          },
          status: {
            label: "验证状态",
            general: "已在供应链生产环境运行",
            templates: "ItemChain 已验证；其余按同一机制复制",
          },
        },
      },
    },

    positioning: {
      eyebrow: "06 · 我们的不同",
      title: "竞争定位：知识层 · 流程层 · 运营层",
      lede: "Glean 让企业「更懂自己知道什么」；Automation Anywhere 让「现有流程自己跑」。ITEM 在第三个位置：让运营本身运行在 AI 操作系统上——拥有运营数据模型，并延伸到物理世界。",
      quadrant: {
        axisY: "数字 + 物理",
        axisLeft: "增强现有系统",
        axisRight: "成为运营系统",
        dots: {
          copilot: { name: "Copilot · Agentforce", sub: "助手 · 生产力" },
          glean: { name: "Glean", sub: "Work AI · 知识" },
          aa: { name: "Automation Anywhere", sub: "APA · 流程机器人" },
          item: { name: "ITEM AI", sub: "运营 OS · 本体 + 模板 + 物理" },
        },
      },
      table: {
        head: { dimension: "维度", item: "ITEM AI" },
        rows: {
          dataModel: {
            label: "数据模型",
            glean: "文档上下文图谱",
            aa: "流程定义",
            item: "运营本体 + 数字孪生",
          },
          relation: {
            label: "与您系统的关系",
            glean: "坐在其上读取",
            aa: "在界面上自动化",
            item: "成为运营记录系统",
          },
          physical: {
            label: "物理世界",
            glean: "无",
            aa: "仅软件 bot",
            item: "真实机器人 + 设备",
          },
          vertical: {
            label: "行业化",
            glean: "营销分段",
            aa: "预置流程方案",
            item: "运营级行业模板",
          },
        },
      },
    },

    implementation: {
      eyebrow: "07 · 实施",
      title: "实施路径：Land → Expand → Own",
      steps: {
        land: {
          phase: "阶段 1 · LAND",
          title: "模板切入",
          body: "用行业模板 + ItemGPT 解决一个高痛点场景。",
          timing: "2–4 周发现 → 4–8 周上线",
          footnote: "先赢一个可量化的 ROI。",
        },
        expand: {
          phase: "阶段 2 · EXPAND",
          title: "通用应用扩张",
          body: "沿 12 个通用应用横向铺开：ItemSupport 接管服务、ItemPredict 覆盖预测、ItemAudit 追回损失。",
          timing: "8–16 周",
          footnote: "扩展到多个运营场景。",
        },
        own: {
          phase: "阶段 3 · OWN",
          title: "运营操作系统",
          body: "Foundry 上沉淀您自己的应用与流程，物理设备接入智能订阅，AI OS 成为全员每天打开的工作台。",
          footnote: "ITEM 不再是供应商——而是您的运营操作系统。",
        },
      },
      pricing: {
        label: "定价模型：",
        body: "平台订阅（按模块 + 席位）+ 行业模板授权 + 用量计费（智能体执行／工作流运行）+ 设备智能订阅。从小开始，随业务增长自然扩展。",
      },
    },

    vision: {
      eyebrow: "08 · 愿景",
      lineOne: "传统软件记录运营。",
      lineAccent: "ITEM AI 运行运营",
      lineThree: "——并驱动结果。",
      lede: "一个平台，N 个行业。五层已验证的通用内核（Layer 2–6），一个从供应链开始、向所有行业展开的模板库，以及两端完全开放的集成边界（Layer 1 & 7）。您的行业，就是下一个模板。",
      tags: {
        onePlatform: "一个平台",
        nIndustries: "N 个行业",
        proven: "供应链 · 已验证",
        next: "你的行业 · 下一个",
      },
      meta: "ITEM AI · 客户版 · product_general_customer_v5",
    },
  },

  /* ------------------------------------------------------------------ en */
  en: {
    demoLabel: "Watch Demo",

    meta: {
      edition: "Customer Edition · V5",
      docTag: "product_general_customer_v5",
    },

    cover: {
      titleLines: ["ITEM AI", "The General Enterprise", "AI Operating System"],
      subtitle: "One Platform · Every Industry",
      lede: "An AI operating system validated and running in production in supply chain — now open to every industry as “one platform + pluggable industry templates.” Same ontology, same AI runtime, same ops platform: swap the template and deploy into any vertical.",
      industries: {
        proven: "✓ Supply Chain · Proven",
        financial: "Financial Advisory",
        restaurant: "Restaurant Ops",
        property: "Property Mgmt",
        realEstate: "Real Estate Dev",
        next: "Your Industry · Next",
      },
      meta: "ITEM AI · Customer Edition · V5",
    },

    repositioning: {
      eyebrow: "01 · Repositioning",
      title: "From “Logistics AI” to “General Enterprise AI OS”",
      lede: "Supply chain is our starting point, not our destination. There, we built a complete AI OS — ontology, agent runtime, app factory, ops workspace. We discovered: 80% of this architecture is industry-agnostic.",
      cards: {
        proven: {
          title: "What We've Proven",
          body: "In supply chain, ITEM runs a complete AI OS in production: from data ontology to agent orchestration, workflow execution to physical device integration.",
        },
        universality: {
          title: "Architecture Universality",
          body: "Deciding, executing, predicting, visualizing, supporting, growing — every industry needs these. Differences: objects, processes, compliance — precisely what can be templated.",
        },
        templated: {
          title: "What “Templated” Means",
          body: "New industry = configure a new template: load industry objects, preset workflows, connect systems. Weeks, not years.",
        },
      },
    },

    problem: {
      eyebrow: "02 · The Problem",
      title: "Every Industry Faces the Same Problem",
      lede: "Traditional software records operations, but recording is not running. Existing AI tools do knowledge retrieval or process automation — none truly owns the operational data model and extends into the physical world.",
      cards: {
        knowledge: {
          title: "Knowledge-Layer Tools",
          body: "Help you “find information” — but decisions remain human, execution remains manual.",
        },
        process: {
          title: "Process-Layer Tools",
          body: "Help “automate steps” — but don't understand business objects, don't own the data model, can't make operational decisions.",
        },
        operations: {
          title: "Operations Layer: ITEM AI",
          body: "An AI OS that owns the operational ontology, makes decisions, and drives physical execution — this is where we sit.",
        },
      },
    },

    whyNow: {
      eyebrow: "03 · Why Now",
      title: "Why Now?",
      cards: {
        ontology: {
          title: "LLMs Cut Ontology Cost by 10×",
          body: "LLMs auto-extract industry objects and relationships from documents, processes, conversations — build time drops from months to days.",
        },
        agents: {
          title: "Agent Technology Has Matured",
          body: "Multi-agent collaboration, tool use, long-term memory — “AI making operational decisions” is now reality, not theory.",
        },
        enterprise: {
          title: "Enterprises Are Ready",
          body: "Enterprises now ask “what can AI run for me?” Budgets shift from “exploration” to “operations-grade deployment.”",
        },
        proven: {
          title: "We've Already Proven It",
          body: "ITEM already runs production systems with this architecture in supply chain. Now is the time to replicate across industries.",
        },
      },
    },

    architecture: {
      eyebrow: "04 · Architecture",
      title: "7-Layer Architecture: Five Core Layers + Two Open Integration Layers",
      lede: "Layers 1 & 7 are open integration layers — connecting to your existing systems and devices. Layers 2–6 are ITEM's core proprietary product.",
      layers: {
        l7: {
          name: "Physical Device Integration",
          note: "INTEGRATION · Connects to your existing devices",
          products: "Your robots · IoT · PLC",
        },
        l6: {
          name: "Industry Templates",
          products: "ItemChain · ItemFin · ItemDine · ItemEstate …",
        },
        l5: {
          name: "General AI Applications",
          products: "ItemGPT · ItemClaw · ItemFlow · ItemSense …",
        },
        l4: {
          name: "App & Process Factory (Foundry)",
          products: "Low-code builder · Workflow engine · Event processing",
        },
        l3: {
          name: "AI Agent Platform (AIP)",
          products: "Agent runtime · Multi-agent · Tool registry · Memory",
        },
        l2: {
          name: "Operational Ontology",
          products: "Knowledge graph · Digital twin · Semantic layer",
        },
        l1: {
          name: "Data & System Integration",
          note: "INTEGRATION · Connects to your existing IT systems",
          products: "Your ERP · WMS · CRM · databases",
        },
      },
      legend: {
        core: "ITEM Core Product (Layers 2–6)",
        integration: "Open Integration (connects to your systems/devices)",
      },
    },

    layer2: {
      title: "Operational Ontology — Making AI Understand Your Business",
      lede: "Traditional systems store data rows; ITEM builds a semantic graph of business objects. Every object (order, customer, device, space, process) has types, relationships, rules, and history. AI agents reason on the ontology, not query tables.",
      cards: {
        wiki: {
          title: "Wiki + Ontology Building",
          body: "Describe your business in natural language; AI auto-generates the structured ontology from documents, processes, and conversations.",
        },
        twin: {
          title: "Digital Twin",
          body: "Real-time mirror of physical-world state — warehouses, stores, buildings, production lines. Every change auto-reflected in the ontology.",
        },
        fabric: {
          title: "Semantic Data Fabric",
          body: "Unify data from multiple systems with cross-source semantic links. Doesn't replace your databases — builds an intelligence layer on top.",
        },
      },
      callout: {
        label: "What this means for you:",
        body: "You don't need to reorganize data or replace existing systems. ITEM builds the intelligence layer from your existing data — AI immediately understands your business context.",
      },
    },

    layer3: {
      title: "AI Agent Platform — AI That Decides and Executes for You",
      lede: "Not chatbots — AI workers that get things done. Each agent has a role, permissions, tools, and memory. They reason on the ontology, execute through workflows, and ask for human confirmation when uncertain.",
      cards: {
        factory: {
          title: "Agent Factory",
          body: "Visually create and manage agents: define roles, assign tools, set permission boundaries. Deploy specialized AI workers without coding.",
        },
        collaboration: {
          title: "Multi-Agent Collaboration",
          body: "Multiple agents collaborate on complex tasks: dispatcher + reviewer + executor. Auto-delegation, auto-escalation, auto-reporting.",
        },
        humanLoop: {
          title: "Human-in-the-Loop",
          body: "AI is not a black box. Critical decision points auto-request human confirmation; all reasoning is auditable and traceable.",
        },
      },
    },

    layer4: {
      title: "App & Process Factory (Foundry) — Build Your Ops Apps Fast",
      lede: "The ontology-powered app & process factory: data integration, low-code/no-code builder, workflow orchestration, real-time event processing, human+AI collaboration. Industry templates are prebuilt Foundry app packages — customers and partners build their own extensions with the same tools.",
      cards: {
        capacity: {
          title: "Capacity Platform",
          body: "Low-code ops app builder: drag-and-drop UI, data binding, permission control. Idea to production in days, not months.",
        },
        workflow: {
          title: "Workflow Engine",
          body: "Visually design complex business processes: conditional branching, parallel execution, exception handling, SLA monitoring. AI agents and humans collaborate in the same flow.",
        },
        events: {
          title: "Real-Time Event Processing",
          body: "Millisecond response to business events: inventory changes, order anomalies, device alerts, customer actions. Event-driven, not polling.",
        },
      },
      callout: {
        label: "What this means for you:",
        body: "A new industry template = a set of prebuilt Foundry apps. “New industry = weeks of configuration, not years of development” holds at the engineering level.",
      },
    },

    layer5: {
      title: "General AI Applications — 12 Products Reused Across Industries",
      lede: "These 12 products belong to no single industry. Deciding, executing, predicting, seeing, hearing, supporting, growing — every industry needs them. Hardened in production, reused with zero rework when switching verticals.",
      products: {
        itemGpt: {
          tag: "AI FOR EVERY DECISION",
          desc: "Natural-language ops interface — command the platform in one sentence",
        },
        itemClaw: {
          tag: "EXECUTION WITHOUT FRICTION",
          desc: "Multi-agent workflow executor — suggestion to execution",
        },
        itemFlow: { tag: "DESIGN. AUTOMATE. SCALE.", desc: "Visual AI workflow builder" },
        itemSense: {
          tag: "SEE EVERYTHING. INSTANTLY.",
          desc: "Real-time visibility + digital-twin cockpit",
        },
        itemPredict: {
          tag: "PREDICT WHAT'S NEXT",
          desc: "General forecasting — demand / cash flow / footfall / resources",
        },
        itemOpsAi: {
          tag: "OPERATIONS THAT RUN THEMSELVES",
          desc: "Autonomous operations and continuous optimization",
        },
        itemAudit: {
          tag: "FIND WHAT YOU'RE LOSING",
          desc: "Billing-error detection, compliance audit, cost recovery",
        },
        itemVision: {
          tag: "SEE WHAT OTHERS MISS",
          desc: "Computer vision — security, quality, site monitoring",
        },
        itemVoice: {
          tag: "OPERATE HANDS-FREE",
          desc: "Voice AI — hands-free frontline work and inbound calls",
        },
        itemSupport: {
          tag: "EVERY CHANNEL. ONE THREAD.",
          desc: "Omnichannel ticketing: email · messaging · SMS · phone",
        },
        itemGrow: {
          tag: "PIPELINE THAT NEVER SLEEPS",
          desc: "GTM AI — SDR/BDR · SEO/AEO/GEO · content generation",
        },
        itemDoc: {
          tag: "DOCUMENTS THAT PROCESS THEMSELVES",
          desc: "Document automation — contracts, invoices, reports",
        },
      },
    },

    layer6: {
      title: "Industry Templates — 10 Pluggable Vertical Solutions",
      lede: "Each template = industry ontology + prebuilt workflows + compliance rules + industry agents + connectors. The supply-chain template is proven in production — validating the mechanism; other industries replicate it.",
      provenBadge: "✓ PROVEN",
      templates: {
        itemChain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "Full order/transport/warehouse/yard execution — flagship",
        },
        itemDock: { tag: "PORTS & DRAYAGE", desc: "Port, drayage & container operations" },
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
        itemBuild: { tag: "REAL ESTATE DEV", desc: "Development: schedules, vendors, cost, sales" },
        itemHealth: { tag: "HEALTHCARE OPS", desc: "Healthcare: cold chain, expiry, traceability" },
        itemAuto: { tag: "MANUFACTURING", desc: "Manufacturing: JIT sequencing, supplier risk" },
        itemRetail: {
          tag: "RETAIL & COMMERCE",
          desc: "Retail: omnichannel orders, inventory, returns",
        },
      },
    },

    catalog: {
      eyebrow: "05 · Product Catalog",
      title: "22 Products: 12 General Apps × 10 Industry Templates",
      general: {
        badge: "GENERAL",
        title: "Cross-industry · Layer 5",
        list: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · ItemOps AI · ItemAudit · ItemVision · ItemVoice · ItemSupport · ItemGrow · ItemDoc",
      },
      vertical: {
        badge: "VERTICAL",
        title: "Pluggable verticals · Layer 6",
        list: "ItemChain ✓ · ItemDock · ItemTrade · ItemFin · ItemDine · ItemEstate · ItemBuild · ItemHealth · ItemAuto · ItemRetail",
      },
      table: {
        head: { dimension: "Dimension", general: "General Apps (12)", templates: "Templates (10)" },
        rows: {
          question: {
            label: "Question",
            general: "“What AI capabilities does ops need?”",
            templates: "“How do capabilities take an industry's shape?”",
          },
          reuse: {
            label: "Reuse",
            general: "100% cross-industry reuse",
            templates: "Per-industry; composable, customizable",
          },
          status: {
            label: "Status",
            general: "Running in supply-chain production",
            templates: "ItemChain proven; others replicate the mechanism",
          },
        },
      },
    },

    positioning: {
      eyebrow: "06 · How We're Different",
      title: "Positioning: Knowledge · Process · Operations Layer",
      lede: "Glean helps enterprises “know what they know”; Automation Anywhere makes “existing processes run themselves.” ITEM occupies a third position: the operation itself runs on an AI OS — owning the operational data model and extending into the physical world.",
      quadrant: {
        axisY: "DIGITAL + PHYSICAL",
        axisLeft: "AUGMENT THE STACK",
        axisRight: "OWN THE OPERATION",
        dots: {
          copilot: { name: "Copilot · Agentforce", sub: "Assistants · productivity" },
          glean: { name: "Glean", sub: "Work AI · knowledge" },
          aa: { name: "Automation Anywhere", sub: "APA · process bots" },
          item: { name: "ITEM AI", sub: "Ops OS · ontology+templates+physical" },
        },
      },
      table: {
        head: { dimension: "Dimension", item: "ITEM AI" },
        rows: {
          dataModel: {
            label: "Data model",
            glean: "Document context graph",
            aa: "Process definitions",
            item: "Operational ontology + digital twin",
          },
          relation: {
            label: "Relation to your systems",
            glean: "Sits on top, reads",
            aa: "Automates via UI/API",
            item: "Becomes the ops system of record",
          },
          physical: {
            label: "Physical world",
            glean: "None",
            aa: "Software bots only",
            item: "Real robots + devices",
          },
          vertical: {
            label: "Verticalization",
            glean: "Marketing segments",
            aa: "Prebuilt process solutions",
            item: "Ops-grade industry templates",
          },
        },
      },
    },

    implementation: {
      eyebrow: "07 · Implementation",
      title: "How We Work With You: Land → Expand → Own",
      steps: {
        land: {
          phase: "PHASE 1 · LAND",
          title: "Land with Template",
          body: "Use industry template + ItemGPT on one high-pain scenario.",
          timing: "2–4 weeks discovery → 4–8 weeks live",
          footnote: "Win one quantifiable ROI first.",
        },
        expand: {
          phase: "PHASE 2 · EXPAND",
          title: "Expand with General Apps",
          body: "Roll out general apps: ItemSupport for service, ItemPredict for forecasts, ItemAudit for cost recovery.",
          timing: "8–16 weeks",
          footnote: "Expand across multiple ops scenarios.",
        },
        own: {
          phase: "PHASE 3 · OWN",
          title: "Own the OS",
          body: "Your own apps and processes settle onto Foundry, devices join the intelligence layer, AI OS becomes the daily workspace.",
          footnote: "ITEM is no longer a vendor — it's your operating system.",
        },
      },
      pricing: {
        label: "Pricing:",
        body: "Platform subscription (modules + seats) + template license + usage billing (agent runs / workflow executions) + device intelligence subscription. Start small, scale naturally with your business.",
      },
    },

    vision: {
      eyebrow: "08 · The Vision",
      lineOne: "Traditional software records operations.",
      lineAccent: "ITEM AI runs them",
      lineThree: "— and drives outcomes.",
      lede: "One platform, N industries. A proven five-layer core (Layers 2–6), a template library starting in supply chain and unfolding into every industry, and fully open integration at both ends (Layers 1 & 7). Your industry is the next template.",
      tags: {
        onePlatform: "One Platform",
        nIndustries: "N Industries",
        proven: "Supply Chain · Proven",
        next: "Your Industry · Next",
      },
      meta: "ITEM AI · Customer Edition · product_general_customer_v5",
    },
  },

  /* ------------------------------------------------------------------ ja */
  ja: {
    demoLabel: "デモを見る",

    meta: {
      edition: "カスタマー版 · V5",
      docTag: "product_general_customer_v5",
    },

    cover: {
      titleLines: ["ITEM AI", "汎用エンタープライズ", "AI オペレーティングシステム"],
      subtitle: "ワンプラットフォーム · あらゆる業界へ",
      lede: "サプライチェーン領域で実証され、本番稼働しているAIオペレーティングシステムを、「プラットフォーム＋差し替え可能な業界テンプレート」という形であらゆる業界に開放します。オントロジーもAIランタイムも運用基盤も共通のまま、テンプレートを載せ替えるだけで、どの業種にも展開できます。",
      industries: {
        proven: "✓ サプライチェーン · 実証済み",
        financial: "ファイナンシャルアドバイザリー",
        restaurant: "レストラン運営",
        property: "プロパティマネジメント",
        realEstate: "不動産開発",
        next: "御社の業界 · 次はここ",
      },
      meta: "ITEM AI · カスタマー版 · V5",
    },

    repositioning: {
      eyebrow: "01 · リポジショニング",
      title: "「物流 AI」から「汎用エンタープライズ AI OS」へ",
      lede: "サプライチェーンは出発点であって、ゴールではありません。私たちはそこで、オントロジー、エージェントランタイム、アプリファクトリー、運用ワークスペースからなる完全な AI OS を構築しました。そこで分かったのは、このアーキテクチャの 80% は業界に依存しないということです。",
      cards: {
        proven: {
          title: "実証できたこと",
          body: "サプライチェーン領域で ITEM は、データオントロジーからエージェントのオーケストレーション、ワークフロー実行から物理デバイス連携まで、完全な AI OS を本番環境で稼働させています。",
        },
        universality: {
          title: "アーキテクチャの汎用性",
          body: "意思決定、実行、予測、可視化、サポート、成長――どの業界にも必要な機能です。違いは対象となる業務オブジェクト、プロセス、コンプライアンスだけであり、まさにテンプレート化できる部分です。",
        },
        templated: {
          title: "「テンプレート化」の意味",
          body: "新しい業界への参入とは、新しいテンプレートを構成することです。業界オブジェクトを読み込み、標準ワークフローを配置し、既存システムを接続する。数年ではなく数週間で完了します。",
        },
      },
    },

    problem: {
      eyebrow: "02 · 課題",
      title: "どの業界も同じ課題を抱えています",
      lede: "従来の業務システムは運用を記録しますが、記録することと運用を動かすことは別物です。既存の AI ツールはナレッジ検索かプロセス自動化のいずれかにとどまり、運用データモデルを自ら保持して物理世界まで届くものはありません。",
      cards: {
        knowledge: {
          title: "ナレッジ層のツール",
          body: "「情報を見つける」ことは助けてくれますが、意思決定は人のまま、実行も手作業のままです。",
        },
        process: {
          title: "プロセス層のツール",
          body: "「手順の自動化」はできますが、業務オブジェクトを理解せず、データモデルも持たないため、運用上の意思決定はできません。",
        },
        operations: {
          title: "オペレーション層：ITEM AI",
          body: "運用オントロジーを保持し、意思決定を行い、物理的な実行まで駆動する AI OS――それが私たちのポジションです。",
        },
      },
    },

    whyNow: {
      eyebrow: "03 · なぜ今か",
      title: "なぜ、今なのか",
      cards: {
        ontology: {
          title: "LLM がオントロジー構築コストを 10× 圧縮",
          body: "大規模言語モデルが、ドキュメント・業務プロセス・会話から業界オブジェクトと関係性を自動抽出します。構築期間は数か月から数日へ短縮されます。",
        },
        agents: {
          title: "エージェント技術の成熟",
          body: "マルチエージェント協調、ツール呼び出し、長期記憶により、「AI が運用上の意思決定を行う」ことが理論ではなく現実になりました。",
        },
        enterprise: {
          title: "企業側の準備が整った",
          body: "企業の問いは「AI に何ができるか」から「AI に何を運用してもらえるか」へ移りました。予算も検証段階から運用レベルの本格導入へシフトしています。",
        },
        proven: {
          title: "すでに実証済み",
          body: "ITEM はこのアーキテクチャで、サプライチェーン領域の本番システムをすでに稼働させています。実証済みのモデルを他業界へ展開する好機です。",
        },
      },
    },

    architecture: {
      eyebrow: "04 · アーキテクチャ",
      title: "7 レイヤー構成：自社開発のコア 5 層＋オープンな統合 2 層",
      lede: "Layer 1 と Layer 7 はオープンな統合層で、お客様の既存システムや設備と接続します。Layer 2–6 が ITEM の自社開発コアプロダクトです。",
      layers: {
        l7: {
          name: "物理デバイス統合",
          note: "統合レイヤー · 既存の設備・機器と接続",
          products: "お客様のロボット · IoT · PLC",
        },
        l6: {
          name: "業界テンプレート層",
          products: "ItemChain · ItemFin · ItemDine · ItemEstate …",
        },
        l5: {
          name: "汎用 AI アプリケーション層",
          products: "ItemGPT · ItemClaw · ItemFlow · ItemSense …",
        },
        l4: {
          name: "アプリ＆プロセスファクトリー（Foundry）",
          products: "ローコードビルダー · ワークフローエンジン · イベント処理",
        },
        l3: {
          name: "AI エージェントプラットフォーム（AIP）",
          products: "エージェントランタイム · マルチエージェント · ツールレジストリ · メモリ",
        },
        l2: {
          name: "運用オントロジー層",
          products: "ナレッジグラフ · デジタルツイン · セマンティックレイヤー",
        },
        l1: {
          name: "データ＆システム統合",
          note: "統合レイヤー · 既存の IT システムと接続",
          products: "お客様の ERP · WMS · CRM · データベース",
        },
      },
      legend: {
        core: "ITEM コアプロダクト（Layer 2–6）",
        integration: "オープン統合層（既存システム・設備と接続）",
      },
    },

    layer2: {
      title: "運用オントロジー ―― AI に事業を理解させる",
      lede: "従来のシステムがデータ行を保存するのに対し、ITEM は業務オブジェクトのセマンティックグラフを構築します。受注、顧客、設備、空間、プロセスといった各オブジェクトが、型・関係・ルール・履歴を持ちます。AI エージェントはテーブルを検索するのではなく、オントロジー上で推論します。",
      cards: {
        wiki: {
          title: "Wiki ＋ オントロジー構築",
          body: "自然言語で事業を記述すれば、AI がドキュメント・業務プロセス・会話から構造化されたオントロジーを自動生成します。",
        },
        twin: {
          title: "デジタルツイン",
          body: "倉庫、店舗、建物、生産ラインなど、物理世界の状態をリアルタイムに写し取ります。あらゆる変化がオントロジーへ自動的に反映されます。",
        },
        fabric: {
          title: "セマンティックデータファブリック",
          body: "複数システムのデータを統合し、ソースをまたぐ意味的な関連付けを行います。既存データベースを置き換えるのではなく、その上にインテリジェンス層を重ねます。",
        },
      },
      callout: {
        label: "お客様にとっての意味：",
        body: "データを整理し直したり、既存システムを入れ替えたりする必要はありません。ITEM は現在お持ちのデータからインテリジェンス層を構築し、AI がすぐに業務コンテキストを理解します。",
      },
    },

    layer3: {
      title: "AI エージェントプラットフォーム ―― 判断し、実行する AI",
      lede: "チャットボットではなく、実際に仕事を完了させる AI ワーカーです。各エージェントは役割・権限・ツール・記憶を持ち、オントロジー上で推論し、ワークフローを通じてタスクを実行し、判断が難しい場面では人にエスカレーションします。",
      cards: {
        factory: {
          title: "Agent Factory",
          body: "エージェントの作成と管理を GUI で行えます。役割の定義、ツールの割り当て、権限境界の設定まで、コードを書かずに専門 AI ワーカーを配置できます。",
        },
        collaboration: {
          title: "マルチエージェント協調",
          body: "配車担当、レビュー担当、実行担当といった複数のエージェントが連携し、複雑な業務を遂行します。分担・エスカレーション・報告はすべて自動です。",
        },
        humanLoop: {
          title: "ヒューマン・イン・ザ・ループ",
          body: "AI はブラックボックスではありません。重要な意思決定ポイントでは自動的に人の確認を求め、推論過程はすべて監査・追跡できます。",
        },
      },
    },

    layer4: {
      title: "アプリ＆プロセスファクトリー（Foundry）―― 運用アプリを高速に構築",
      lede: "オントロジーを基盤としたアプリ＆プロセスファクトリーです。データ統合、ローコード／ノーコードのアプリビルダー、ワークフローのオーケストレーション、リアルタイムイベント処理、人と AI の協働を備えます。業界テンプレートとは Foundry 上の事前構築済みアプリパッケージであり、お客様やパートナーも同じツールで独自の拡張を作れます。",
      cards: {
        capacity: {
          title: "Capacity Platform",
          body: "運用アプリをローコードで構築します。ドラッグ＆ドロップの UI、データバインディング、権限制御を備え、アイデアから本番稼働まで数か月ではなく数日です。",
        },
        workflow: {
          title: "ワークフローエンジン",
          body: "条件分岐、並列実行、例外処理、SLA 監視を含む複雑な業務プロセスを GUI で設計できます。AI エージェントと人が同じフローの中で協働します。",
        },
        events: {
          title: "リアルタイムイベント処理",
          body: "在庫変動、受注異常、設備アラート、顧客行動といったイベントにミリ秒単位で応答します。ポーリングではなくイベント駆動です。",
        },
      },
      callout: {
        label: "お客様にとっての意味：",
        body: "新しい業界テンプレートとは、Foundry 上の事前構築済みアプリとプロセスの集合です。「新規業界への参入は数年の開発ではなく数週間の構成で済む」という主張が、エンジニアリングとして成立する理由がここにあります。",
      },
    },

    layer5: {
      title: "汎用 AI アプリケーション ―― 業界を越えて再利用される 12 プロダクト",
      lede: "この 12 のプロダクトは特定の業界に属しません。判断する、実行する、予測する、見る、聞く、支える、伸ばす――どの業界にも必要な機能です。サプライチェーンの本番環境で鍛えられており、業種を切り替えても改修ゼロで再利用できます。",
      products: {
        itemGpt: {
          tag: "すべての意思決定に AI を",
          desc: "自然言語による運用インターフェース。一文でプラットフォーム全体を動かします",
        },
        itemClaw: {
          tag: "摩擦のない実行",
          desc: "マルチエージェント型ワークフロー実行基盤。提案から実行まで一気通貫で",
        },
        itemFlow: { tag: "設計・自動化・スケール", desc: "ビジュアルな AI ワークフロービルダー" },
        itemSense: {
          tag: "すべてを、瞬時に可視化",
          desc: "リアルタイム可視化＋デジタルツインのコックピット",
        },
        itemPredict: {
          tag: "次に起きることを予測する",
          desc: "需要・キャッシュフロー・来客数・リソースに対応する汎用予測エンジン",
        },
        itemOpsAi: { tag: "自律的に回るオペレーション", desc: "自律運用と継続的な最適化" },
        itemAudit: {
          tag: "失っているコストを見つける",
          desc: "請求誤りの検出、コンプライアンス監査、コストリカバリー",
        },
        itemVision: {
          tag: "見落としを見逃さない",
          desc: "コンピュータビジョン。セキュリティ、品質検査、現場モニタリング",
        },
        itemVoice: {
          tag: "ハンズフリーで業務を回す",
          desc: "音声 AI。現場作業と入電対応をハンズフリーで",
        },
        itemSupport: {
          tag: "すべてのチャネルを、ひとつのスレッドに",
          desc: "オムニチャネルのチケット管理：メール · メッセージ · SMS · 電話",
        },
        itemGrow: {
          tag: "止まらないパイプライン",
          desc: "GTM AI。SDR/BDR · SEO/AEO/GEO · コンテンツ生成",
        },
        itemDoc: {
          tag: "自ら処理されるドキュメント",
          desc: "文書自動化。契約書・請求書・レポートの読み取りと生成",
        },
      },
    },

    layer6: {
      title: "業界テンプレート ―― 差し替え可能な 10 の垂直ソリューション",
      lede: "各テンプレートは、業界オントロジー＋事前構築ワークフロー＋コンプライアンスルール＋業界エージェント＋コネクタで構成されます。サプライチェーンのテンプレートは本番環境で実証済みであり、この仕組み自体が機能することを裏づけています。他業界も同じ仕組みで展開します。",
      provenBadge: "✓ 実証済み",
      templates: {
        itemChain: {
          tag: "サプライチェーン＆ロジスティクス",
          desc: "受注・輸送・倉庫・ヤードまで一貫して実行するフラッグシップ",
        },
        itemDock: { tag: "港湾＆ドレージ", desc: "港湾、ドレージ、コンテナ運用" },
        itemTrade: {
          tag: "グローバル貿易",
          desc: "関税分類、越境コンプライアンス、貿易インテリジェンス",
        },
        itemFin: {
          tag: "ファイナンシャルアドバイザリー",
          desc: "顧客プロファイリング、ポートフォリオ分析、当局への報告",
        },
        itemDine: { tag: "レストラン運営", desc: "シフト作成、仕込み量の予測、廃棄ロスの抑制" },
        itemEstate: {
          tag: "プロパティマネジメント",
          desc: "賃貸借契約、入居者対応、修繕、エネルギー管理",
        },
        itemBuild: { tag: "不動産開発", desc: "工程管理、協力会社、原価と販売" },
        itemHealth: {
          tag: "ヘルスケア運営",
          desc: "コールドチェーン、有効期限、トレーサビリティ",
        },
        itemAuto: { tag: "製造業", desc: "JIT シーケンス、サプライヤーリスク管理" },
        itemRetail: { tag: "リテール＆コマース", desc: "オムニチャネル受注、在庫、返品対応" },
      },
    },

    catalog: {
      eyebrow: "05 · プロダクトカタログ",
      title: "22 プロダクト：汎用アプリ 12 × 業界テンプレート 10",
      general: {
        badge: "汎用",
        title: "業界横断で再利用 · Layer 5",
        list: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · ItemOps AI · ItemAudit · ItemVision · ItemVoice · ItemSupport · ItemGrow · ItemDoc",
      },
      vertical: {
        badge: "業界特化",
        title: "差し替え可能な垂直ソリューション · Layer 6",
        list: "ItemChain ✓ · ItemDock · ItemTrade · ItemFin · ItemDine · ItemEstate · ItemBuild · ItemHealth · ItemAuto · ItemRetail",
      },
      table: {
        head: { dimension: "観点", general: "汎用アプリ（12）", templates: "業界テンプレート（10）" },
        rows: {
          question: {
            label: "答える問い",
            general: "「企業の運用にはどの AI 機能が必要か」",
            templates: "「その機能は、各業界でどんな形になるか」",
          },
          reuse: {
            label: "再利用の仕方",
            general: "業界を越えて 100% 再利用",
            templates: "業界ごとに読み込み、組み合わせと個別調整が可能",
          },
          status: {
            label: "実証状況",
            general: "サプライチェーンの本番環境で稼働中",
            templates: "ItemChain は実証済み。他は同じ仕組みで展開",
          },
        },
      },
    },

    positioning: {
      eyebrow: "06 · 私たちの違い",
      title: "ポジショニング：ナレッジ層 · プロセス層 · オペレーション層",
      lede: "Glean は「自社が何を知っているか」を分かりやすくし、Automation Anywhere は「既存プロセスを自走させる」ことを実現します。ITEM が占めるのは第三のポジション、すなわち運用そのものを AI OS の上で走らせる領域です。運用データモデルを自ら保持し、物理世界にまで届きます。",
      quadrant: {
        axisY: "デジタル + フィジカル",
        axisLeft: "既存システムを強化する",
        axisRight: "運用そのものを担う",
        dots: {
          copilot: { name: "Copilot · Agentforce", sub: "アシスタント · 生産性" },
          glean: { name: "Glean", sub: "Work AI · ナレッジ" },
          aa: { name: "Automation Anywhere", sub: "APA · プロセスボット" },
          item: { name: "ITEM AI", sub: "運用 OS · オントロジー＋テンプレート＋物理" },
        },
      },
      table: {
        head: { dimension: "観点", item: "ITEM AI" },
        rows: {
          dataModel: {
            label: "データモデル",
            glean: "ドキュメントの文脈グラフ",
            aa: "プロセス定義",
            item: "運用オントロジー＋デジタルツイン",
          },
          relation: {
            label: "既存システムとの関係",
            glean: "上に載って読み取る",
            aa: "UI ／ API 経由で自動化",
            item: "運用の記録システムそのものになる",
          },
          physical: {
            label: "物理世界",
            glean: "対応なし",
            aa: "ソフトウェアボットのみ",
            item: "実機のロボット＋設備",
          },
          vertical: {
            label: "業界特化",
            glean: "マーケティング上のセグメント",
            aa: "事前構築のプロセスソリューション",
            item: "運用レベルの業界テンプレート",
          },
        },
      },
    },

    implementation: {
      eyebrow: "07 · 導入",
      title: "導入の進め方：Land → Expand → Own",
      steps: {
        land: {
          phase: "フェーズ 1 · LAND",
          title: "テンプレートで着地する",
          body: "業界テンプレートと ItemGPT を使い、最も痛みの大きい業務シナリオを 1 つ解決します。",
          timing: "2–4 週間の要件把握 → 4–8 週間で本番稼働",
          footnote: "まずは定量化できる ROI をひとつ取りに行きます。",
        },
        expand: {
          phase: "フェーズ 2 · EXPAND",
          title: "汎用アプリで広げる",
          body: "12 の汎用アプリを横展開します。ItemSupport がサービス対応を、ItemPredict が予測を、ItemAudit がコスト回収を担います。",
          timing: "8–16 週間",
          footnote: "複数の運用シナリオへ拡大します。",
        },
        own: {
          phase: "フェーズ 3 · OWN",
          title: "運用 OS として定着させる",
          body: "お客様独自のアプリとプロセスが Foundry 上に蓄積され、物理設備がインテリジェンス層に接続し、AI OS が全社員の日常的な作業基盤になります。",
          footnote: "ITEM はもはやベンダーではなく、お客様の運用オペレーティングシステムです。",
        },
      },
      pricing: {
        label: "料金モデル：",
        body: "プラットフォーム利用料（モジュール＋シート数）、業界テンプレートのライセンス、従量課金（エージェント実行／ワークフロー実行）、デバイスインテリジェンスのサブスクリプションで構成されます。小さく始め、事業の成長に合わせて自然に拡張できます。",
      },
    },

    vision: {
      eyebrow: "08 · ビジョン",
      lineOne: "従来のソフトウェアは、業務を記録します。",
      lineAccent: "ITEM AI は業務を動かし",
      lineThree: "――成果を生み出します。",
      lede: "ひとつのプラットフォームで、N 個の業界へ。実証済みの 5 層コア（Layer 2–6）、サプライチェーンから始まりあらゆる業界へ広がるテンプレートライブラリ、そして両端が完全にオープンな統合境界（Layer 1 & 7）。次のテンプレートは、御社の業界です。",
      tags: {
        onePlatform: "ワンプラットフォーム",
        nIndustries: "N 個の業界",
        proven: "サプライチェーン · 実証済み",
        next: "御社の業界 · 次はここ",
      },
      meta: "ITEM AI · カスタマー版 · product_general_customer_v5",
    },
  },

  /* ------------------------------------------------------------------ es */
  es: {
    demoLabel: "Ver demo",

    meta: {
      edition: "Edición cliente · V5",
      docTag: "product_general_customer_v5",
    },

    cover: {
      titleLines: ["ITEM AI", "El sistema operativo de IA", "para toda la empresa"],
      subtitle: "Una plataforma · Todos los sectores",
      lede: "Un sistema operativo de IA validado y en producción en la cadena de suministro, ahora abierto a cualquier sector bajo el modelo «una plataforma + plantillas sectoriales intercambiables». La misma ontología, el mismo runtime de IA y la misma plataforma operativa: basta con cambiar la plantilla para desplegarlo en cualquier vertical.",
      industries: {
        proven: "✓ Cadena de suministro · Probado",
        financial: "Asesoría financiera",
        restaurant: "Operación de restaurantes",
        property: "Gestión inmobiliaria",
        realEstate: "Desarrollo inmobiliario",
        next: "Su sector · el siguiente",
      },
      meta: "ITEM AI · Edición cliente · V5",
    },

    repositioning: {
      eyebrow: "01 · Reposicionamiento",
      title: "De la «IA para logística» al «sistema operativo de IA para la empresa»",
      lede: "La cadena de suministro es nuestro punto de partida, no nuestro destino. Allí construimos un sistema operativo de IA completo: ontología, runtime de agentes, fábrica de aplicaciones y espacio de trabajo operativo. Y descubrimos que el 80% de esa arquitectura es independiente del sector.",
      cards: {
        proven: {
          title: "Lo que ya hemos demostrado",
          body: "En la cadena de suministro, ITEM opera un sistema operativo de IA completo en producción: de la ontología de datos a la orquestación de agentes, y de la ejecución de flujos de trabajo a la integración con dispositivos físicos.",
        },
        universality: {
          title: "La universalidad de la arquitectura",
          body: "Decidir, ejecutar, predecir, visualizar, dar soporte y crecer: todo sector lo necesita. Lo que cambia son los objetos de negocio, los procesos y el marco normativo, justamente lo que puede convertirse en plantilla.",
        },
        templated: {
          title: "Qué significa «basado en plantillas»",
          body: "Entrar en un sector nuevo equivale a configurar una plantilla nueva: cargar los objetos del sector, preconfigurar sus procesos y conectar sus sistemas. Semanas, no años.",
        },
      },
    },

    problem: {
      eyebrow: "02 · El problema",
      title: "Todos los sectores enfrentan el mismo problema",
      lede: "El software empresarial tradicional registra la operación, pero registrar no es operar. Las herramientas de IA actuales resuelven la búsqueda de conocimiento o la automatización de procesos, pero ninguna es dueña del modelo de datos operativo ni llega al mundo físico.",
      cards: {
        knowledge: {
          title: "Herramientas de la capa de conocimiento",
          body: "Ayudan a «encontrar información», pero la decisión sigue siendo humana y la ejecución sigue siendo manual.",
        },
        process: {
          title: "Herramientas de la capa de procesos",
          body: "Ayudan a «automatizar pasos», pero no entienden los objetos de negocio, no son dueñas del modelo de datos y no pueden tomar decisiones operativas.",
        },
        operations: {
          title: "Capa operativa: ITEM AI",
          body: "Un sistema operativo de IA que es dueño de la ontología operativa, toma decisiones y acciona la ejecución física. Ahí es donde nos situamos.",
        },
      },
    },

    whyNow: {
      eyebrow: "03 · Por qué ahora",
      title: "¿Por qué ahora?",
      cards: {
        ontology: {
          title: "Los LLM reducen el coste de la ontología 10×",
          body: "Los modelos de lenguaje extraen automáticamente objetos y relaciones sectoriales a partir de documentos, procesos y conversaciones: el tiempo de construcción baja de meses a días.",
        },
        agents: {
          title: "La tecnología de agentes ha madurado",
          body: "La colaboración multiagente, el uso de herramientas y la memoria a largo plazo convierten en realidad, y no en teoría, que la IA tome decisiones operativas.",
        },
        enterprise: {
          title: "Las empresas están preparadas",
          body: "Las empresas ya no preguntan qué puede hacer la IA, sino qué parte de su operación puede llevar. El presupuesto pasa de la exploración al despliegue de nivel operativo.",
        },
        proven: {
          title: "Ya lo hemos demostrado",
          body: "ITEM ya opera sistemas en producción con esta arquitectura en la cadena de suministro. Es el momento de replicar un modelo probado en más sectores.",
        },
      },
    },

    architecture: {
      eyebrow: "04 · Arquitectura",
      title: "Arquitectura de 7 capas: cinco capas propias y dos capas abiertas de integración",
      lede: "Las capas 1 y 7 son capas abiertas de integración que conectan con los sistemas y equipos que ya tiene. Las capas 2 a 6 son el producto propio de ITEM.",
      layers: {
        l7: {
          name: "Integración de dispositivos físicos",
          note: "INTEGRACIÓN · Conecta con los equipos que ya tiene",
          products: "Sus robots · IoT · PLC",
        },
        l6: {
          name: "Plantillas sectoriales",
          products: "ItemChain · ItemFin · ItemDine · ItemEstate …",
        },
        l5: {
          name: "Aplicaciones generales de IA",
          products: "ItemGPT · ItemClaw · ItemFlow · ItemSense …",
        },
        l4: {
          name: "Fábrica de aplicaciones y procesos (Foundry)",
          products: "Constructor low-code · Motor de flujos · Procesamiento de eventos",
        },
        l3: {
          name: "Plataforma de agentes de IA (AIP)",
          products: "Runtime de agentes · Multiagente · Registro de herramientas · Memoria",
        },
        l2: {
          name: "Ontología operativa",
          products: "Grafo de conocimiento · Gemelo digital · Capa semántica",
        },
        l1: {
          name: "Integración de datos y sistemas",
          note: "INTEGRACIÓN · Conecta con los sistemas de TI que ya tiene",
          products: "Sus ERP · WMS · CRM · bases de datos",
        },
      },
      legend: {
        core: "Producto propio de ITEM (capas 2–6)",
        integration: "Integración abierta (conecta con sus sistemas y equipos)",
      },
    },

    layer2: {
      title: "Ontología operativa: que la IA entienda su negocio",
      lede: "Los sistemas tradicionales guardan filas de datos; ITEM construye un grafo semántico de los objetos de negocio. Cada objeto (pedido, cliente, equipo, espacio, proceso) tiene tipos, relaciones, reglas e historial. Los agentes de IA razonan sobre la ontología en lugar de consultar tablas.",
      cards: {
        wiki: {
          title: "Wiki y construcción de la ontología",
          body: "Describa su negocio en lenguaje natural y la IA generará automáticamente la ontología estructurada a partir de documentos, procesos y conversaciones.",
        },
        twin: {
          title: "Gemelo digital",
          body: "Un reflejo en tiempo real del estado del mundo físico: almacenes, tiendas, edificios y líneas de producción. Cada cambio se refleja automáticamente en la ontología.",
        },
        fabric: {
          title: "Tejido semántico de datos",
          body: "Unifica datos de varios sistemas con enlaces semánticos entre fuentes. No sustituye sus bases de datos: añade una capa de inteligencia por encima.",
        },
      },
      callout: {
        label: "Qué significa para usted:",
        body: "No necesita reorganizar sus datos ni sustituir sus sistemas actuales. ITEM construye la capa de inteligencia a partir de los datos que ya tiene y la IA comprende de inmediato el contexto de su negocio.",
      },
    },

    layer3: {
      title: "Plataforma de agentes de IA: una IA que decide y ejecuta por usted",
      lede: "No son chatbots, sino trabajadores de IA que completan tareas. Cada agente tiene un rol, permisos, herramientas y memoria; razona sobre la ontología, ejecuta mediante flujos de trabajo y pide confirmación humana cuando hay incertidumbre.",
      cards: {
        factory: {
          title: "Agent Factory",
          body: "Cree y gestione agentes de forma visual: defina roles, asigne herramientas y establezca límites de permisos. Despliegue trabajadores de IA especializados sin programar.",
        },
        collaboration: {
          title: "Colaboración multiagente",
          body: "Varios agentes colaboran en tareas complejas: coordinador, revisor y ejecutor. Reparto, escalado y reporte automáticos.",
        },
        humanLoop: {
          title: "Humano en el circuito",
          body: "La IA no es una caja negra. En los puntos de decisión críticos solicita confirmación humana y todo el razonamiento queda auditable y trazable.",
        },
      },
    },

    layer4: {
      title: "Fábrica de aplicaciones y procesos (Foundry): construya sus aplicaciones operativas rápido",
      lede: "La fábrica de aplicaciones y procesos impulsada por la ontología: integración de datos, constructor low-code/no-code, orquestación de flujos, procesamiento de eventos en tiempo real y colaboración entre personas e IA. Las plantillas sectoriales son paquetes de aplicaciones ya construidos sobre Foundry, y tanto clientes como socios pueden crear sus propias extensiones con las mismas herramientas.",
      cards: {
        capacity: {
          title: "Capacity Platform",
          body: "Constructor low-code de aplicaciones operativas: interfaz de arrastrar y soltar, vinculación de datos y control de permisos. De la idea a producción en días, no en meses.",
        },
        workflow: {
          title: "Motor de flujos de trabajo",
          body: "Diseñe visualmente procesos complejos: ramificación condicional, ejecución en paralelo, gestión de excepciones y seguimiento de SLA. Los agentes de IA y las personas colaboran en el mismo flujo.",
        },
        events: {
          title: "Procesamiento de eventos en tiempo real",
          body: "Respuesta en milisegundos a los eventos del negocio: movimientos de inventario, incidencias en pedidos, alertas de equipos y comportamiento del cliente. Orientado a eventos, no a sondeo.",
        },
      },
      callout: {
        label: "Qué significa para usted:",
        body: "Una nueva plantilla sectorial es un conjunto de aplicaciones y procesos ya construidos sobre Foundry. Ahí está la razón de ingeniería por la que entrar en un sector nuevo son semanas de configuración y no años de desarrollo.",
      },
    },

    layer5: {
      title: "Aplicaciones generales de IA: 12 productos reutilizables en todos los sectores",
      lede: "Estos 12 productos no pertenecen a ningún sector concreto. Decidir, ejecutar, predecir, ver, escuchar, dar soporte y crecer son necesidades comunes a todos. Están endurecidos en producción y se reutilizan sin retrabajo al cambiar de vertical.",
      products: {
        itemGpt: {
          tag: "IA PARA CADA DECISIÓN",
          desc: "Interfaz operativa en lenguaje natural: dirija toda la plataforma con una sola frase",
        },
        itemClaw: {
          tag: "EJECUCIÓN SIN FRICCIÓN",
          desc: "Ejecutor multiagente de flujos de trabajo: de la recomendación a la ejecución",
        },
        itemFlow: {
          tag: "DISEÑAR. AUTOMATIZAR. ESCALAR.",
          desc: "Constructor visual de flujos de trabajo con IA",
        },
        itemSense: {
          tag: "VERLO TODO. AL INSTANTE.",
          desc: "Visibilidad en tiempo real y cabina de mando con gemelo digital",
        },
        itemPredict: {
          tag: "ANTICIPE LO QUE VIENE",
          desc: "Motor de predicción general: demanda, flujo de caja, afluencia y recursos",
        },
        itemOpsAi: {
          tag: "OPERACIONES QUE SE EJECUTAN SOLAS",
          desc: "Operación autónoma y optimización continua",
        },
        itemAudit: {
          tag: "ENCUENTRE LO QUE ESTÁ PERDIENDO",
          desc: "Detección de errores de facturación, auditoría de cumplimiento y recuperación de costes",
        },
        itemVision: {
          tag: "VEA LO QUE OTROS NO VEN",
          desc: "Visión por computador: seguridad, control de calidad y supervisión de instalaciones",
        },
        itemVoice: {
          tag: "OPERE SIN USAR LAS MANOS",
          desc: "IA de voz para el trabajo en planta y la atención de llamadas entrantes",
        },
        itemSupport: {
          tag: "TODOS LOS CANALES. UN SOLO HILO.",
          desc: "Tickets omnicanal: correo · mensajería · SMS · teléfono",
        },
        itemGrow: {
          tag: "UN PIPELINE QUE NUNCA DUERME",
          desc: "IA de go-to-market: SDR/BDR · SEO/AEO/GEO · generación de contenido",
        },
        itemDoc: {
          tag: "DOCUMENTOS QUE SE PROCESAN SOLOS",
          desc: "Automatización documental: contratos, facturas e informes",
        },
      },
    },

    layer6: {
      title: "Plantillas sectoriales: 10 soluciones verticales intercambiables",
      lede: "Cada plantilla combina la ontología del sector, flujos de trabajo preconfigurados, reglas de cumplimiento, agentes especializados y conectores. La plantilla de cadena de suministro está probada en producción, lo que valida el mecanismo completo; el resto de sectores se replica de la misma forma.",
      provenBadge: "✓ PROBADO",
      templates: {
        itemChain: {
          tag: "CADENA DE SUMINISTRO Y LOGÍSTICA",
          desc: "Ejecución integral de pedidos, transporte, almacén y patio: la plantilla insignia",
        },
        itemDock: {
          tag: "PUERTOS Y TRANSPORTE PORTUARIO",
          desc: "Operación portuaria, acarreo y contenedores",
        },
        itemTrade: {
          tag: "COMERCIO GLOBAL",
          desc: "Clasificación arancelaria, cumplimiento transfronterizo e inteligencia comercial",
        },
        itemFin: {
          tag: "ASESORÍA FINANCIERA",
          desc: "Perfilado de clientes, análisis de carteras y presentación de informes regulatorios",
        },
        itemDine: {
          tag: "OPERACIÓN DE RESTAURANTES",
          desc: "Turnos, previsión de preparación y control de mermas",
        },
        itemEstate: {
          tag: "GESTIÓN INMOBILIARIA",
          desc: "Contratos de arrendamiento, atención a inquilinos, mantenimiento y energía",
        },
        itemBuild: {
          tag: "DESARROLLO INMOBILIARIO",
          desc: "Planificación de obra, proveedores, costes y ventas",
        },
        itemHealth: {
          tag: "OPERACIONES SANITARIAS",
          desc: "Cadena de frío, caducidades y trazabilidad regulatoria",
        },
        itemAuto: { tag: "MANUFACTURA", desc: "Secuenciación JIT y riesgo de proveedores" },
        itemRetail: {
          tag: "RETAIL Y COMERCIO",
          desc: "Pedidos omnicanal, inventario y devoluciones",
        },
      },
    },

    catalog: {
      eyebrow: "05 · Catálogo de producto",
      title: "22 productos: 12 aplicaciones generales × 10 plantillas sectoriales",
      general: {
        badge: "GENERAL",
        title: "Reutilizable entre sectores · Layer 5",
        list: "ItemGPT · ItemClaw · ItemFlow · ItemSense · ItemPredict · ItemOps AI · ItemAudit · ItemVision · ItemVoice · ItemSupport · ItemGrow · ItemDoc",
      },
      vertical: {
        badge: "VERTICAL",
        title: "Verticales intercambiables · Layer 6",
        list: "ItemChain ✓ · ItemDock · ItemTrade · ItemFin · ItemDine · ItemEstate · ItemBuild · ItemHealth · ItemAuto · ItemRetail",
      },
      table: {
        head: {
          dimension: "Dimensión",
          general: "Aplicaciones generales (12)",
          templates: "Plantillas (10)",
        },
        rows: {
          question: {
            label: "Pregunta que responde",
            general: "«¿Qué capacidades de IA necesita la operación?»",
            templates: "«¿Cómo toman esas capacidades la forma de un sector?»",
          },
          reuse: {
            label: "Reutilización",
            general: "100% reutilizable entre sectores",
            templates: "Se carga por sector; combinable y personalizable",
          },
          status: {
            label: "Estado",
            general: "En producción en la cadena de suministro",
            templates: "ItemChain está probado; el resto replica el mecanismo",
          },
        },
      },
    },

    positioning: {
      eyebrow: "06 · En qué nos diferenciamos",
      title: "Posicionamiento: capa de conocimiento, de procesos y de operación",
      lede: "Glean ayuda a las empresas a «saber lo que saben»; Automation Anywhere hace que «los procesos existentes se ejecuten solos». ITEM ocupa una tercera posición: que la operación misma se ejecute sobre un sistema operativo de IA, siendo dueño del modelo de datos operativo y llegando al mundo físico.",
      quadrant: {
        axisY: "DIGITAL + FÍSICO",
        axisLeft: "REFORZAR LOS SISTEMAS ACTUALES",
        axisRight: "ASUMIR LA OPERACIÓN",
        dots: {
          copilot: { name: "Copilot · Agentforce", sub: "Asistentes · productividad" },
          glean: { name: "Glean", sub: "Work AI · conocimiento" },
          aa: { name: "Automation Anywhere", sub: "APA · bots de proceso" },
          item: { name: "ITEM AI", sub: "SO operativo · ontología + plantillas + físico" },
        },
      },
      table: {
        head: { dimension: "Dimensión", item: "ITEM AI" },
        rows: {
          dataModel: {
            label: "Modelo de datos",
            glean: "Grafo de contexto documental",
            aa: "Definiciones de procesos",
            item: "Ontología operativa y gemelo digital",
          },
          relation: {
            label: "Relación con sus sistemas",
            glean: "Se sitúa encima y lee",
            aa: "Automatiza vía interfaz o API",
            item: "Se convierte en el sistema de registro operativo",
          },
          physical: {
            label: "Mundo físico",
            glean: "Ninguna",
            aa: "Solo bots de software",
            item: "Robots y equipos reales",
          },
          vertical: {
            label: "Verticalización",
            glean: "Segmentos de marketing",
            aa: "Soluciones de proceso preconstruidas",
            item: "Plantillas sectoriales de nivel operativo",
          },
        },
      },
    },

    implementation: {
      eyebrow: "07 · Implantación",
      title: "Cómo trabajamos con usted: Land → Expand → Own",
      steps: {
        land: {
          phase: "FASE 1 · LAND",
          title: "Aterrizar con una plantilla",
          body: "Aplicamos la plantilla sectorial y ItemGPT a un único escenario de alto impacto.",
          timing: "2–4 semanas de análisis → 4–8 semanas hasta producción",
          footnote: "Primero se gana un ROI cuantificable.",
        },
        expand: {
          phase: "FASE 2 · EXPAND",
          title: "Expandir con las aplicaciones generales",
          body: "Despliegue transversal de las 12 aplicaciones generales: ItemSupport asume el servicio, ItemPredict cubre la previsión e ItemAudit recupera costes.",
          timing: "8–16 semanas",
          footnote: "Expansión a múltiples escenarios operativos.",
        },
        own: {
          phase: "FASE 3 · OWN",
          title: "Convertirlo en su sistema operativo",
          body: "Sus propias aplicaciones y procesos se consolidan sobre Foundry, los equipos físicos se incorporan a la capa de inteligencia y el sistema operativo de IA pasa a ser el espacio de trabajo diario de toda la organización.",
          footnote: "ITEM deja de ser un proveedor para ser su sistema operativo.",
        },
      },
      pricing: {
        label: "Modelo de precios:",
        body: "Suscripción de plataforma (por módulos y usuarios), licencia de plantilla sectorial, facturación por uso (ejecuciones de agentes y de flujos de trabajo) y suscripción de inteligencia para dispositivos. Empiece con poco y escale de forma natural con su negocio.",
      },
    },

    vision: {
      eyebrow: "08 · La visión",
      lineOne: "El software tradicional registra las operaciones.",
      lineAccent: "ITEM AI las ejecuta",
      lineThree: "— y genera resultados.",
      lede: "Una plataforma, N sectores. Un núcleo de cinco capas ya probado (capas 2–6), una biblioteca de plantillas que empieza en la cadena de suministro y se despliega hacia todos los sectores, y una integración totalmente abierta en ambos extremos (capas 1 y 7). Su sector es la próxima plantilla.",
      tags: {
        onePlatform: "Una plataforma",
        nIndustries: "N sectores",
        proven: "Cadena de suministro · Probado",
        next: "Su sector · el siguiente",
      },
      meta: "ITEM AI · Edición cliente · product_general_customer_v5",
    },
  },
};

export default pack;
