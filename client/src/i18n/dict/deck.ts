import type { LocalePack } from "./index";

/**
 * Copy for the main deck (the `/` route) — one sub-namespace per section.
 *
 * Metrics, product names, company names and acronyms (100M+, $20B, ItemGPT,
 * Foundry, Harness, Ontology, WMS, TMS, UNIS, Lenovo) are deliberately NOT
 * localised; where a value is purely one of those it stays in the component.
 */
const deck: LocalePack = {
  /* ------------------------------------------------------------------ zh -- */
  zh: {
    hero: {
      titleLead: "从数字化到",
      titleAccent: "物理AI",
      subtitle: "Item 过去一年的 AI 实践、挑战与认知重构",
      statement: "Item 是 UNIS 集团所有供应链转型项目的实施底座",
      pills: {
        middleware: "AI 中间件层",
        ontologyHarness: "Ontology + Harness",
        physicalAi: "物理 AI",
      },
    },

    companyIntro: {
      title: "关于我们",
      subtitle: "UNIS 提供全渠道履约服务；Item 构建驱动一切的技术平台。",
      unis: {
        leadStrong: "全渠道准时足量履约。",
        lead: "UNIS 自 2019 年起在孟菲斯为 Fashion Nova 提供服务，全国性网络覆盖 98% 消费者的当日或次日达。",
        stats: {
          orders: "年订单量",
          accounts: "客户账户",
          inventory: "库存价值",
          warehouse: "平方英尺仓库",
        },
        highlights: {
          ports: "美国四大港口（加州、德州、乔治亚州、新泽西州）",
          la: "洛杉矶地区 450 万平方英尺",
          technicians: "1,300 名服务技术人员",
        },
      },
      item: {
        leadStrong: "UNIS 背后的技术引擎。",
        lead: "Item 是 UNIS 集团所有供应链转型项目的实施底座。",
        stackLabel: "能力栈",
        caps: {
          saas: "SaaS 平台",
          factory: "AI Agent 工厂",
          robotics: "机器人集成",
        },
        quote: "从数字化运营 → AI 智能化 → 物理自动化",
      },
    },

    evolution: {
      title: "AI 演进路径与规模验证",
      subtitle: "从数字化到物理AI的三阶段演进框架，以及经过生产验证的规模数据。",
      phases: {
        digital: {
          title: "数字化",
          desc: "全栈SaaS（OMS/WMS/TMS/YMS）+ 数字孪生，让业务变得可被系统理解。",
        },
        agent: {
          title: "AI Agent",
          desc: "智能体编排 + 上下文记忆，让决策变得可被自动执行。",
        },
        physical: {
          title: "物理 AI",
          desc: "WES/WCS + 各类机器人（AMR、AS/RS、分拣系统）深度整合，智能离开屏幕。",
        },
      },
      metrics: {
        orders: "年处理订单量",
        wms: "统一的传统WMS实例",
        coverage: "仓库覆盖面积",
      },
    },

    video: {
      title: "AI Agent 实战演示",
      subtitle: "最近的突破性成果——多个AI Agent协同工作，真正打通了数字世界与物理世界的边界。",
      tabs: {
        devScrum: {
          label: "开发者 Agent 站会",
          desc: "AI开发者Agent自主进行Scrum站会——汇报进度、识别阻塞项并协调下一步行动，如同真正的工程团队。",
        },
        multiAgent: {
          label: "多 Agent 协作",
          desc: "多个专业AI Agent协同工作——从任务规划、路径优化到实时执行，形成完整的决策-执行闭环。",
        },
        digitalPhysical: {
          label: "数字 × 物理",
          desc: "AI Agent的决策不再停留在屏幕上——直接驱动物理世界的机器人和设备，打通数字智能与物理执行之间的鸿沟。",
        },
      },
      badges: {
        breakthroughs: "最新突破",
        validated: "生产验证",
        closedLoop: "闭环智能",
      },
    },

    agents: {
      title: "Office Automation Agent 化",
      subtitle: "从「系统记录」到「系统行动」的转变——我们在企业内部办公和运营流程中的Agent化尝试与成果。",
      demo: "演示",
      items: {
        ticketing: {
          title: "呼叫中心工单",
          subtitle: "自研AI客服系统",
          desc: "AI Agent理解客户意图，直接调用OMS/WMS接口进行状态查询和异常处理，大幅降低人工干预率。",
          tags: ["意图识别", "自动工单", "OMS/WMS 集成"],
        },
        assistant: {
          title: "个人助理",
          subtitle: "从自研到OpenClaw的演进",
          desc: "早期构建通用型个人助理Agent，后替换为OpenClaw。通用任务交由专业工具，内部精力聚焦业务深度。",
          tags: ["认知转变", "聚焦领域", "OpenClaw"],
        },
        driver: {
          title: "司机 AI Agent",
          subtitle: "司机端全流程Agent化",
          desc: "在TMS/YMS环节为司机配备AI辅助，处理签到、月台拥堵、文件缺失等异常，提供实时指导。",
          tags: ["司机签到", "异常处理", "实时指导"],
        },
      },
    },

    agentExamples: {
      title: "更多 Agent 应用案例",
      subtitle: "从招聘到内容生成，从行为监控到Agent工厂——AI Agent正在渗透企业运营的每一个角落。",
      watch: "观看演示",
      items: {
        recruit: {
          title: "AI 招聘 Agent",
          desc: "自动化简历筛选、候选人匹配和面试安排——在保持质量标准的同时将招聘周期缩短60%。",
        },
        monitoring: {
          title: "员工行为监控 Agent",
          desc: "基于视觉的AI实时监控仓库员工行为，确保安全合规、生产力追踪和SOP执行。",
        },
        content: {
          title: "内容生成与 AEO Agent",
          desc: "AI驱动的营销和SEO内容生成，结合答案引擎优化（AEO），在AI搜索结果中最大化曝光。",
        },
        factory: {
          title: "Ontology 驱动的 Agent 工厂",
          desc: "展示Ontology如何作为快速Agent组装的基础——将领域知识规模化转化为可部署的AI Agent。",
        },
      },
    },

    physical: {
      title: "走向物理世界",
      subtitle: "硬件无关的WES——让智能真正离开屏幕，从AGV盘点到Vision Pro拣货，从道闸识别到机器狗巡逻。",
      watch: "观看",
      banner: {
        eyebrow: "硬件无关的 WES",
        body: "软件栈在超过 1000 万平方英尺的真实仓库生产环境中稳定运行",
      },
      groups: {
        robotics: "机器人与自动化",
        vision: "视觉与边缘 AI 应用",
      },
      videos: {
        agv: {
          title: "AGV 盘点机器人",
          desc: "自主导引车在仓库通道中执行实时库存盘点——以24/7自动化精度取代人工循环盘点。",
        },
        gate: { title: "YMS 道闸识别", desc: "AI驱动的道闸车辆识别与调度。" },
        iot: { title: "IoT 堆场助手 Agent", desc: "IoT传感器+AI Agent实现实时堆场管理。" },
        pack: { title: "打包台监控", desc: "视觉AI实时监控打包质量与合规性。" },
        visionPro: { title: "Vision Pro 拣货", desc: "Apple Vision Pro AR引导的仓库拣货作业。" },
        dog: { title: "机器狗巡逻 — 堆场安防", desc: "机器狗自主巡逻，实现堆场安防监控。" },
      },
    },

    journey: {
      title: "问题与心路历程",
      subtitle: "坦诚分享踩过的坑和认知转变——从迷信大模型到重构架构的觉醒之路。",
      pitfall: {
        tag: "早期陷阱",
        title: "迷信大模型的「通用能力」",
        body: "我们曾试图单纯通过Prompt Engineering来解决所有复杂的业务问题。这种做法导致了严重的幻觉问题，系统执行不可靠，且完全无法应对复杂的企业合规红线和SOP要求。",
        tags: ["幻觉", "执行不可靠", "合规失效"],
      },
      insight: {
        tag: "认知转折",
        title: "基础模型不是护城河",
        body: "我们意识到，随着模型的快速迭代和开源，通用能力会迅速商品化甚至贬值。真正的护城河在于业务 Harness 和本体知识库（Ontology）。",
      },
      restructure: {
        title: "架构重构方向",
        body: "把大脑（大模型）与手脚（执行工具）彻底解耦，全面转向构建强大的「业务Harness」和「Ontology知识库」。",
      },
    },

    ontology: {
      title: "Ontology：企业AI的语义骨干",
      subtitle:
        "通用大模型不懂企业的「行业暗知识」和「SOP」。没有Ontology，AI Agent无法在企业级场景中做到准确和行为一致。",
      caption: "Layer 2 · Neo4j GraphRAG · 企业大脑",
      what: {
        title: "什么是 Ontology？",
        body: "Ontology不仅仅是知识图谱。它是特定领域的结构化框架、实体模型和语义骨干。它定义了领域内所有概念之间的关系、约束和推理规则，让AI Agent能够像领域专家一样思考和行动。",
      },
      results: {
        eyebrow: "构建成果",
        buildTime: "构建时间",
        iterations: "自主研究迭代",
        coverage: "领域知识覆盖",
      },
      why: {
        title: "为什么 Ontology 是决定性的？",
        points: {
          unify: "将55个独立WMS实例统一到一个语义架构中",
          understand: "让AI Agent理解「SKU」「月台」「波次」等领域概念的真实含义",
          validate: "为Harness提供验证基准——Agent的输出必须符合Ontology定义的约束",
          transform: "将Agent从「玩具」转化为「生产力工具」的秘密武器",
        },
      },
      quote:
        "Ontology是让AI从通用智能走向专业智能的桥梁。没有它，大模型只是一个聪明但无知的外来者。",
    },

    harness: {
      title: "Harness：AI的约束与护城河",
      subtitle:
        "Agent = Model + Harness。Harness是包围在模型外围，用于引导、约束和验证AI输出的结构化软件环境。",
      tabs: {
        overview: "核心分野",
        architecture: "架构与分类",
        moat: "护城河效应",
      },
      generic: {
        title: "通用 Harness",
        body: "沙盒隔离、凭证管理、崩溃恢复、上下文管理、MCP协议等基础设施级能力。",
        note: "随模型升级而贬值 — 属于模型原厂领地，像水电煤一样会逐渐基础设施化",
      },
      business: {
        title: "业务 Harness",
        body: "行业暗知识、合规红线、垂直领域SOP、组织品味、经验蒸馏飞轮。",
        note: "随模型升级而增值 — 企业和从业者的专属领地，构成真正的护城河",
      },
      strategy:
        "Item的战略重心在于构建深厚的「业务Harness」，确保平台价值不会被更强的大模型取代，反而因底层模型变强而产生复利增值。",
      trust: {
        title: "Harness 工程的信任屏障",
        body: "对于AI生成的非确定性结果，Harness提供了必要的前馈控制和反馈控制，构建起完整的信任屏障体系。",
      },
      feedforward: {
        title: "前馈控制 / 引导",
        body: "在Agent行动前进行约束，提高首次成功率。",
        items: ["领域规则注入", "SOP指引模板", "上下文边界设定", "输入格式校验"],
      },
      feedback: {
        title: "反馈控制 / 传感",
        body: "在Agent行动后进行验证，赋予自我纠错能力。",
        items: ["结构化测试验证", "逻辑审查回路", "LLM-as-Judge语义验证", "合规红线检查"],
      },
      execTypes: {
        title: "执行类型分类",
        deterministic: {
          title: "确定性计算控制",
          body: "API契约校验、Linting、类型检查、数据格式验证等可精确判定的规则。",
        },
        inference: {
          title: "推理控制",
          body: "LLM作为裁判进行语义验证、意图一致性检查、业务逻辑合理性评估。",
        },
      },
      moat: {
        title: "业务 Harness 的构建与演进",
        state: {
          title: "状态与身份的治理",
          body: "通用Harness无法解决复杂的企业身份验证和业务状态回滚。我们的业务Harness将复杂的仓储逻辑（如库存锁定、月台调度、波次管理）封装在安全的沙盒中，确保每一步操作都可追溯、可回滚。",
        },
        compound: {
          title: "护城河的复利效应",
          body: "一个处理过一千万张发票或一千万个订单的业务Harness，其积累的「校准深度」和「边缘案例处理能力」是任何通用大模型都无法通过预训练获得的。",
          stats: {
            orders: "处理过的订单",
            edgeCases: "边缘案例库",
            distillation: "持续蒸馏学习",
          },
        },
        quote:
          "这就是为什么Item坚持将核心精力投入到业务Harness的建设中——模型可以被替换，但十年的行业经验蒸馏无法被复制。",
      },
    },

    llm: {
      title: "大模型选型策略",
      subtitle:
        "务实的混合路由策略（Hybrid Router），不绑定单一模型——与Fashion Nova「Hybrid AI」理念高度一致。",
      us: {
        title: "美国头部大模型",
        sub: "高复杂度推理 / 代码生成",
        models: {
          gpt4o: "复杂推理 / Agentic Workflow",
          claude: "长文本分析 / 代码生成",
          gemini: "多模态理解 / 视频分析",
        },
      },
      cn: {
        title: "中国开源 / 本土模型",
        sub: "隐私 / 本地化 / 成本敏感",
        models: {
          qwen: "本地化部署 / 中文理解",
          deepseek: "成本敏感场景 / 推理",
          oss: "垂直领域专用",
        },
      },
      future: {
        title: "未来扩展方向：从 LLM 到多模态",
        lmms: { name: "大多模态模型", desc: "文本+图像+音频的统一理解" },
        lvms: { name: "大视觉模型", desc: "视觉监控 / 视频质检 / 打包台QC" },
        lpms: { name: "大物理模型", desc: "机器人控制 / 物理世界交互" },
      },
    },

    hardware: {
      title: "硬件与算力基础设施",
      subtitle: "从云端到边缘的演进——支撑庞大的Agent集群和物理执行，仅靠软件是不够的。",
      expansion: "扩展需求",
      current: {
        eyebrow: "当前硬件基础",
        items: {
          cloudGpu: { label: "云端 GPU", desc: "大模型推理（OpenAI / Claude API）" },
          kafka: { label: "Kafka + K8s", desc: "云原生流处理与容器编排" },
          edge: { label: "边缘设备", desc: "AI摄像头数据处理" },
        },
      },
      needs: {
        chips: {
          title: "边缘推理芯片",
          desc: "AMR、四向穿梭车、无人叉车的大规模部署需要专为低延迟推理设计的边缘芯片。",
        },
        clusters: {
          title: "云端 GPU 集群",
          desc: "支撑Agent Factory和不断增长的Ontology图谱计算（GraphRAG）。",
        },
        network: {
          title: "高速网络硬件",
          desc: "物理AI的实时控制对延迟要求极高，需要扩展对新一代网络硬件的集成支持。",
        },
      },
    },

    future: {
      title: "合作展望",
      subtitle: "与Fashion Nova的联合价值——从内部验证到对外输出的战略路径。",
      visions: {
        ecosystem: {
          title: "生态融合",
          desc: "将Item的软件栈与Fashion Nova的边缘计算硬件及机器人进行深度生态融合，共建「软件定义硬件」的解决方案。",
        },
        cases: {
          title: "联合参考案例",
          desc: "以Fashion Nova内部的AMR Zone Picking项目作为起点，共同打磨联合解决方案并验证商业价值。",
        },
        gtm: {
          title: "对外输出",
          desc: "不仅服务于Fashion Nova自身的供应链升级，更要将联合解决方案向外输出，共同构建下一代智能仓库基础设施。",
        },
      },
      closing:
        "Item 作为 UNIS 集团所有供应链转型项目的实施底座，已经在生产环境中验证了从数字化到物理AI的完整路径。我们期待与Fashion Nova携手，将这套经过实战检验的AI中间件层与Fashion Nova的硬件生态深度融合，共同定义下一代智能仓库的标准。",
      footer: "Item AI 战略简报 — 机密 — UNIS Group",
    },
  },

  /* ------------------------------------------------------------------ en -- */
  en: {
    hero: {
      titleLead: "From Digitalization to",
      titleAccent: "Physical AI",
      subtitle:
        "Item's AI Journey Over the Past Year — Practices, Challenges & Cognitive Restructuring",
      statement:
        "Item serves as the implementation foundation for all supply chain transformation projects across UNIS Group",
      pills: {
        middleware: "AI Middleware",
        ontologyHarness: "Ontology + Harness",
        physicalAi: "Physical AI",
      },
    },

    companyIntro: {
      title: "Who We Are",
      subtitle:
        "UNIS provides omni-channel fulfillment; Item builds the technology platform that powers it all.",
      unis: {
        leadStrong: "Omni-channel fulfillment on-time and in-full.",
        lead: "UNIS started serving Fashion Nova since 2019 at Memphis, US. Strategically designed national footprint reaches 98% of consumers with same-or next-day service.",
        stats: {
          orders: "Orders / Year",
          accounts: "Customer Accounts",
          inventory: "Inventory Value",
          warehouse: "Sq Ft Warehouse",
        },
        highlights: {
          ports: "4 major US ports (CA, TX, GA, NJ)",
          la: "4.5M sq ft in LA area",
          technicians: "1,300 service technicians",
        },
      },
      item: {
        leadStrong: "The technology engine behind UNIS.",
        lead: "Item is the implementation foundation for all supply chain transformation projects across UNIS Group.",
        stackLabel: "Capability Stack",
        caps: {
          saas: "SaaS Platform",
          factory: "AI Agent Factory",
          robotics: "Robotics Integration",
        },
        quote: "From digital operations → AI intelligence → physical automation",
      },
    },

    evolution: {
      title: "AI Evolution Path & Scale Validation",
      subtitle:
        "A three-phase evolution framework from digitalization to Physical AI, backed by production-validated metrics.",
      phases: {
        digital: {
          title: "Digitalization",
          desc: "Full-stack SaaS (OMS/WMS/TMS/YMS) + Digital Twin, making business processes machine-readable.",
        },
        agent: {
          title: "AI Agent",
          desc: "Agent orchestration + contextual memory, enabling decisions to be automatically executed.",
        },
        physical: {
          title: "Physical AI",
          desc: "WES/WCS + robotics (AMR, AS/RS, sorters) deep integration — intelligence leaves the screen.",
        },
      },
      metrics: {
        orders: "Annual Orders Processed",
        wms: "Legacy WMS Instances Unified",
        coverage: "Warehouse Coverage",
      },
    },

    video: {
      title: "AI Agent Demos in Action",
      subtitle:
        "Recent breakthroughs — multiple AI Agents working in concert, truly bridging the digital and physical worlds.",
      tabs: {
        devScrum: {
          label: "Developer Agent Scrum",
          desc: "AI Developer Agents conduct autonomous Scrum standups — reporting progress, identifying blockers, and coordinating next steps, just like a real engineering team.",
        },
        multiAgent: {
          label: "Multi-Agent Collaboration",
          desc: "Multiple specialized AI Agents working in concert — from task planning and path optimization to real-time execution, forming a complete decision-execution loop.",
        },
        digitalPhysical: {
          label: "Digital × Physical",
          desc: "AI Agent decisions no longer stay on screen — they directly drive robots and devices in the physical world, bridging the gap between digital intelligence and physical execution.",
        },
      },
      badges: {
        breakthroughs: "Latest Breakthroughs",
        validated: "Production-Validated",
        closedLoop: "Closed-Loop Intelligence",
      },
    },

    agents: {
      title: "Office Automation — Agentification",
      subtitle:
        "From 'system of record' to 'system of action' — our experiments and results in agentifying internal office and operational workflows.",
      demo: "Demo",
      items: {
        ticketing: {
          title: "Call Center Ticketing",
          subtitle: "In-house AI Customer Service System",
          desc: "AI Agents understand customer intent and directly invoke OMS/WMS APIs for status queries and exception handling, significantly reducing manual intervention.",
          tags: ["Intent Recognition", "Auto-Ticketing", "OMS/WMS Integration"],
        },
        assistant: {
          title: "Personal Assistant",
          subtitle: "Evolution from In-house to OpenClaw",
          desc: "Initially built a general-purpose personal assistant Agent, later replaced by OpenClaw. Delegated generic tasks to specialized tools, refocusing internal efforts on domain depth.",
          tags: ["Mindset Shift", "Domain Focus", "OpenClaw"],
        },
        driver: {
          title: "Driver AI Agent",
          subtitle: "Full-process Agent for Drivers",
          desc: "Equips drivers with AI assistance in TMS/YMS workflows — handling check-ins, dock congestion, missing documents, and providing real-time guidance.",
          tags: ["Driver Check-in", "Exception Handling", "Real-time Guidance"],
        },
      },
    },

    agentExamples: {
      title: "More Agent Applications in Action",
      subtitle:
        "From recruiting to content generation, from behavior monitoring to Agent factory — AI Agents are permeating every corner of enterprise operations.",
      watch: "Watch Demo",
      items: {
        recruit: {
          title: "AI Recruit Agent",
          desc: "Automates resume screening, candidate matching, and interview scheduling — reducing time-to-hire by 60% while maintaining quality standards.",
        },
        monitoring: {
          title: "Staff Monitoring Agent",
          desc: "Vision-based AI monitors warehouse staff behavior for safety compliance, productivity tracking, and SOP adherence in real-time.",
        },
        content: {
          title: "Content Generate & AEO Agent",
          desc: "AI-driven content generation for marketing and SEO, combined with Answer Engine Optimization (AEO) to maximize visibility in AI-powered search results.",
        },
        factory: {
          title: "Ontology-Powered Agent Factory",
          desc: "Demonstrates how Ontology serves as the foundation for rapid Agent assembly — turning domain knowledge into deployable AI Agents at scale.",
        },
      },
    },

    physical: {
      title: "Entering the Physical World",
      subtitle:
        "Hardware-agnostic WES — bringing intelligence beyond the screen, from AGV counting to Vision Pro picking, from gate recognition to robotic dog patrols.",
      watch: "Watch",
      banner: {
        eyebrow: "Hardware-agnostic WES",
        body: "Software stack running in real warehouse production environments covering 10M+ sq ft",
      },
      groups: {
        robotics: "Robotics & Automation",
        vision: "Vision & Edge AI Applications",
      },
      videos: {
        agv: {
          title: "AGV Inventory Count Robot",
          desc: "Autonomous guided vehicles perform real-time inventory counting across warehouse aisles — replacing manual cycle counts with 24/7 automated precision.",
        },
        gate: {
          title: "YMS Gate Recognition",
          desc: "AI-powered vehicle recognition and scheduling at yard gates.",
        },
        iot: {
          title: "IoT Yard Assistant Agent",
          desc: "IoT sensors + AI Agent for real-time yard management.",
        },
        pack: {
          title: "Pack Station Monitor",
          desc: "Vision AI monitors packing quality and compliance in real-time.",
        },
        visionPro: {
          title: "Picking by Vision Pro",
          desc: "Apple Vision Pro AR-guided warehouse picking operations.",
        },
        dog: {
          title: "Dog Walk — Yard Security",
          desc: "Robotic dog patrols for autonomous yard security monitoring.",
        },
      },
    },

    journey: {
      title: "Challenges & Lessons Learned",
      subtitle:
        "An honest account of pitfalls and cognitive shifts — the awakening journey from blind faith in LLMs to architectural restructuring.",
      pitfall: {
        tag: "Early Pitfall",
        title: 'Over-reliance on LLM "General Capabilities"',
        body: "We attempted to solve all complex business problems purely through Prompt Engineering. This led to severe hallucination issues, unreliable execution, and a complete inability to handle enterprise compliance red lines and SOP requirements.",
        tags: ["Hallucination", "Unreliable Execution", "Compliance Failure"],
      },
      insight: {
        tag: "Cognitive Turning Point",
        title: "Foundation Models Are Not the Moat",
        body: "We realized that as models rapidly iterate and go open-source, general capabilities quickly commoditize. The true moat lies in Business Harness and Ontology.",
      },
      restructure: {
        title: "Architecture Restructuring Direction",
        body: "Fully decouple the brain (LLM) from the hands (execution tools), pivoting entirely toward building robust Business Harness and Ontology knowledge bases.",
      },
    },

    ontology: {
      title: "Ontology: The Semantic Backbone of Enterprise AI",
      subtitle:
        "General-purpose LLMs don't understand enterprise 'domain dark knowledge' or SOPs. Without Ontology, AI Agents cannot achieve accuracy and behavioral consistency in enterprise scenarios.",
      caption: "Layer 2 · Neo4j GraphRAG · Enterprise Brain",
      what: {
        title: "What is Ontology?",
        body: "Ontology is more than a knowledge graph. It is a domain-specific structural framework, entity model, and semantic backbone. It defines relationships, constraints, and reasoning rules among all concepts within a domain, enabling AI Agents to think and act like domain experts.",
      },
      results: {
        eyebrow: "Construction Results",
        buildTime: "Build Time",
        iterations: "Research Iterations",
        coverage: "Domain Coverage",
      },
      why: {
        title: "Why is Ontology Decisive?",
        points: {
          unify: "Unifying 55 independent WMS instances into a single semantic architecture",
          understand:
            "Enabling AI Agents to understand the real meaning of domain concepts like SKU, Dock, and Wave",
          validate:
            "Providing validation benchmarks for Harness — Agent outputs must conform to Ontology-defined constraints",
          transform: "The secret weapon for transforming Agents from 'toys' into 'productivity tools'",
        },
      },
      quote:
        "Ontology is the bridge from general intelligence to domain expertise. Without it, LLMs are merely clever but ignorant outsiders.",
    },

    harness: {
      title: "Harness: Constraints & Moat for AI",
      subtitle:
        "Agent = Model + Harness. Harness is the structured software environment surrounding the model, designed to guide, constrain, and validate AI outputs.",
      tabs: {
        overview: "Core Distinction",
        architecture: "Architecture",
        moat: "Moat Effect",
      },
      generic: {
        title: "Generic Harness",
        body: "Infrastructure-level capabilities: sandbox isolation, credential management, crash recovery, context management, MCP protocol, etc.",
        note: "Depreciates with model upgrades — belongs to model vendors' territory, gradually becoming commoditized infrastructure",
      },
      business: {
        title: "Business Harness",
        body: "Domain dark knowledge, compliance red lines, vertical SOPs, organizational taste, and experience distillation flywheel.",
        note: "Appreciates with model upgrades — the exclusive territory of enterprises and practitioners, forming the true moat",
      },
      strategy:
        "Item's strategic focus is on building deep Business Harness, ensuring platform value won't be displaced by stronger LLMs, but instead compounds as underlying models improve.",
      trust: {
        title: "Trust Barrier of Harness Engineering",
        body: "For non-deterministic AI outputs, Harness provides essential feedforward and feedback controls, establishing a complete trust barrier system.",
      },
      feedforward: {
        title: "Feedforward / Guides",
        body: "Constrain before Agent action to improve first-pass success rate.",
        items: [
          "Domain rule injection",
          "SOP guidance templates",
          "Context boundary setting",
          "Input format validation",
        ],
      },
      feedback: {
        title: "Feedback / Sensors",
        body: "Validate after Agent action, enabling self-correction capability.",
        items: [
          "Structured test validation",
          "Logic review loop",
          "LLM-as-Judge semantic validation",
          "Compliance red-line check",
        ],
      },
      execTypes: {
        title: "Execution Type Classification",
        deterministic: {
          title: "Deterministic Computational Control",
          body: "API contract validation, linting, type checking, data format verification — precisely determinable rules.",
        },
        inference: {
          title: "Inference Control",
          body: "LLM-as-Judge for semantic validation, intent consistency checks, and business logic reasonability assessment.",
        },
      },
      moat: {
        title: "Building & Evolving Business Harness",
        state: {
          title: "State & Identity Governance",
          body: "Generic Harness cannot handle complex enterprise authentication and business state rollback. Our Business Harness encapsulates complex warehouse logic (inventory locking, dock scheduling, wave management) in secure sandboxes, ensuring every operation is traceable and reversible.",
        },
        compound: {
          title: "The Compound Interest Effect of the Moat",
          body: "A Business Harness that has processed ten million invoices or orders accumulates 'calibration depth' and 'edge case handling capability' that no general-purpose LLM can acquire through pre-training alone.",
          stats: {
            orders: "Orders Processed",
            edgeCases: "Edge Cases Library",
            distillation: "Continuous Distillation",
          },
        },
        quote:
          "This is why Item invests its core efforts in building Business Harness — models can be replaced, but a decade of distilled industry experience cannot be replicated.",
      },
    },

    llm: {
      title: "LLM Selection Strategy",
      subtitle:
        "A pragmatic Hybrid Router strategy, not locked to any single model — highly aligned with Fashion Nova's 'Hybrid AI' philosophy.",
      us: {
        title: "US Frontier Models",
        sub: "High-complexity Reasoning / Code Gen",
        models: {
          gpt4o: "Complex Reasoning / Agentic Workflow",
          claude: "Long-text Analysis / Code Generation",
          gemini: "Multimodal Understanding / Video Analysis",
        },
      },
      cn: {
        title: "China Open-source / Local Models",
        sub: "Privacy / Localization / Cost",
        models: {
          qwen: "Local Deployment / Chinese NLU",
          deepseek: "Cost-sensitive Scenarios / Reasoning",
          oss: "Vertical Domain Specific",
        },
      },
      future: {
        title: "Future Expansion: From LLM to Multimodal",
        lmms: {
          name: "Large Multimodal Models",
          desc: "Unified understanding of text + image + audio",
        },
        lvms: {
          name: "Large Vision Models",
          desc: "Visual monitoring / Video QC / Packing station QC",
        },
        lpms: {
          name: "Large Physical Models",
          desc: "Robot control / Physical world interaction",
        },
      },
    },

    hardware: {
      title: "Hardware & Computing Infrastructure",
      subtitle:
        "Evolution from cloud to edge — supporting massive Agent clusters and physical execution requires more than software alone.",
      expansion: "Expansion Needs",
      current: {
        eyebrow: "Current Hardware Foundation",
        items: {
          cloudGpu: { label: "Cloud GPU", desc: "LLM inference (OpenAI / Claude API)" },
          kafka: {
            label: "Kafka + K8s",
            desc: "Cloud-native stream processing & container orchestration",
          },
          edge: { label: "Edge Devices", desc: "AI camera data processing" },
        },
      },
      needs: {
        chips: {
          title: "Edge Inference Chips",
          desc: "Mass deployment of AMRs, shuttle systems, and autonomous forklifts requires edge chips designed for low-latency inference.",
        },
        clusters: {
          title: "Cloud GPU Clusters",
          desc: "Supporting Agent Factory and the growing Ontology graph computation (GraphRAG).",
        },
        network: {
          title: "High-speed Networking",
          desc: "Real-time control for Physical AI demands ultra-low latency, requiring integration with next-gen networking hardware.",
        },
      },
    },

    future: {
      title: "Collaboration Vision",
      subtitle:
        "Joint value with Fashion Nova — a strategic path from internal validation to external go-to-market.",
      visions: {
        ecosystem: {
          title: "Ecosystem Integration",
          desc: "Deep ecosystem integration of Item's software stack with Fashion Nova's edge computing hardware and robotics, co-building 'software-defined hardware' solutions.",
        },
        cases: {
          title: "Joint Reference Cases",
          desc: "Starting with Fashion Nova's internal AMR Zone Picking project, jointly refining solutions and validating business value.",
        },
        gtm: {
          title: "External Go-to-Market",
          desc: "Beyond serving Fashion Nova's own supply chain upgrades, exporting joint solutions externally to co-build next-gen smart warehouse infrastructure.",
        },
      },
      closing:
        "As the implementation foundation for all supply chain transformation projects across UNIS Group, Item has validated the complete path from digitalization to Physical AI in production environments. We look forward to partnering with Fashion Nova, deeply integrating this battle-tested AI middleware layer with Fashion Nova's hardware ecosystem, and jointly defining the standard for next-generation smart warehouses.",
      footer: "Item AI Strategy Briefing — Confidential — UNIS Group",
    },
  },

  /* ------------------------------------------------------------------ ja -- */
  ja: {
    hero: {
      titleLead: "デジタル化から",
      titleAccent: "フィジカルAIへ",
      subtitle: "Item のこの一年のAI実践、直面した課題、そして認識の再構築",
      statement: "Item は UNIS グループの全サプライチェーン変革プロジェクトを支える実装基盤です",
      pills: {
        middleware: "AIミドルウェア層",
        ontologyHarness: "Ontology + Harness",
        physicalAi: "フィジカルAI",
      },
    },

    companyIntro: {
      title: "会社概要",
      subtitle:
        "UNIS はオムニチャネル・フルフィルメントを提供し、Item はそれを支える技術プラットフォームを構築しています。",
      unis: {
        leadStrong: "納期どおり、欠品なしのオムニチャネル・フルフィルメント。",
        lead: "UNIS は 2019 年より米国メンフィスで Fashion Nova を支援しています。戦略的に設計した全米ネットワークにより、消費者の 98% へ当日または翌日配送を提供します。",
        stats: {
          orders: "年間受注件数",
          accounts: "取引アカウント数",
          inventory: "在庫金額",
          warehouse: "倉庫面積（平方フィート）",
        },
        highlights: {
          ports: "米国主要 4 港湾（CA・TX・GA・NJ）",
          la: "ロサンゼルス圏に 450 万平方フィート",
          technicians: "サービス技術者 1,300 名",
        },
      },
      item: {
        leadStrong: "UNIS を支える技術エンジン。",
        lead: "Item は UNIS グループの全サプライチェーン変革プロジェクトの実装基盤です。",
        stackLabel: "ケイパビリティ・スタック",
        caps: {
          saas: "SaaS プラットフォーム",
          factory: "AI Agent ファクトリー",
          robotics: "ロボティクス統合",
        },
        quote: "デジタル運用 → AI による知能化 → 物理オートメーションへ",
      },
    },

    evolution: {
      title: "AI進化のロードマップと規模実証",
      subtitle:
        "デジタル化からフィジカルAIへ至る3段階の進化フレームワークと、本番環境で実証された規模指標です。",
      phases: {
        digital: {
          title: "デジタル化",
          desc: "フルスタックSaaS（OMS/WMS/TMS/YMS）とデジタルツインにより、業務プロセスをシステムが理解できる形にします。",
        },
        agent: {
          title: "AI Agent",
          desc: "エージェントのオーケストレーションと文脈記憶により、意思決定を自動的に実行できるようにします。",
        },
        physical: {
          title: "フィジカルAI",
          desc: "WES/WCS と各種ロボット（AMR、AS/RS、仕分け機）を深く統合し、知能を画面の外へ送り出します。",
        },
      },
      metrics: {
        orders: "年間処理受注件数",
        wms: "統合したレガシーWMSインスタンス",
        coverage: "倉庫カバー面積",
      },
    },

    video: {
      title: "AIエージェント実演デモ",
      subtitle:
        "直近のブレークスルー。複数のAI Agentが連携し、デジタル世界と物理世界の境界を実際に橋渡ししています。",
      tabs: {
        devScrum: {
          label: "開発者エージェントのスクラム",
          desc: "AI開発者エージェントが自律的にスクラムの朝会を実施します。進捗報告、ブロッカーの特定、次のアクションの調整まで、実際のエンジニアリングチームと同じように進めます。",
        },
        multiAgent: {
          label: "マルチエージェント協調",
          desc: "複数の専門AI Agentが連携して稼働します。タスク計画から経路最適化、リアルタイム実行までをつなぎ、意思決定と実行の完全なループを形成します。",
        },
        digitalPhysical: {
          label: "デジタル × フィジカル",
          desc: "AI Agent の判断は画面の中にとどまりません。物理世界のロボットや設備を直接動かし、デジタルな知能と物理的な実行の断絶を埋めます。",
        },
      },
      badges: {
        breakthroughs: "最新のブレークスルー",
        validated: "本番環境で実証済み",
        closedLoop: "クローズドループ知能",
      },
    },

    agents: {
      title: "オフィス業務のエージェント化",
      subtitle:
        "「記録するシステム」から「行動するシステム」へ。社内業務と運用プロセスをエージェント化した取り組みと成果です。",
      demo: "デモ",
      items: {
        ticketing: {
          title: "コールセンター・チケッティング",
          subtitle: "自社開発のAIカスタマーサービス基盤",
          desc: "AI Agent が顧客の意図を理解し、OMS/WMS の API を直接呼び出してステータス照会や例外処理を行うため、人手による介入を大幅に削減します。",
          tags: ["意図認識", "自動チケット起票", "OMS/WMS 連携"],
        },
        assistant: {
          title: "パーソナルアシスタント",
          subtitle: "自社開発から OpenClaw への移行",
          desc: "当初は汎用のパーソナルアシスタント Agent を自社開発しましたが、のちに OpenClaw へ置き換えました。汎用タスクは専門ツールに委ね、社内のリソースは業務ドメインの深掘りに集中させています。",
          tags: ["発想の転換", "ドメイン特化", "OpenClaw"],
        },
        driver: {
          title: "ドライバー向け AI Agent",
          subtitle: "ドライバー業務の全工程エージェント化",
          desc: "TMS/YMS の各工程でドライバーを AI が支援します。チェックイン、バース混雑、書類不備などの例外に対応し、リアルタイムで案内します。",
          tags: ["ドライバー受付", "例外処理", "リアルタイム案内"],
        },
      },
    },

    agentExamples: {
      title: "さらなるエージェント活用事例",
      subtitle:
        "採用からコンテンツ生成、行動モニタリングから Agent Factory まで。AI Agent は企業運営のあらゆる領域に広がっています。",
      watch: "デモを見る",
      items: {
        recruit: {
          title: "AI 採用 Agent",
          desc: "履歴書のスクリーニング、候補者マッチング、面接調整を自動化し、品質基準を維持したまま採用リードタイムを 60% 短縮します。",
        },
        monitoring: {
          title: "従業員行動モニタリング Agent",
          desc: "ビジョンAIが倉庫スタッフの行動をリアルタイムに把握し、安全コンプライアンス、生産性の可視化、SOP の遵守を支援します。",
        },
        content: {
          title: "コンテンツ生成・AEO Agent",
          desc: "マーケティングとSEO向けのコンテンツをAIで生成し、Answer Engine Optimization（AEO）と組み合わせて、AI検索結果での露出を最大化します。",
        },
        factory: {
          title: "Ontology 駆動の Agent ファクトリー",
          desc: "Ontology を土台に Agent を短期間で組み立てる仕組みを示します。ドメイン知識を、そのまま展開可能な AI Agent へと大規模に転換します。",
        },
      },
    },

    physical: {
      title: "フィジカル世界への展開",
      subtitle:
        "ハードウェア非依存の WES。AGV による棚卸しから Vision Pro でのピッキング、ゲート認識から四足歩行ロボットの巡回まで、知能を画面の外へ広げます。",
      watch: "視聴する",
      banner: {
        eyebrow: "ハードウェア非依存の WES",
        body: "1,000 万平方フィートを超える実際の倉庫本番環境で稼働するソフトウェアスタック",
      },
      groups: {
        robotics: "ロボティクスと自動化",
        vision: "ビジョン・エッジAI活用",
      },
      videos: {
        agv: {
          title: "AGV 棚卸しロボット",
          desc: "自律走行搬送車が倉庫の通路を巡回し、リアルタイムで在庫を数えます。人手による循環棚卸しを 24 時間 365 日の自動計測に置き換えます。",
        },
        gate: {
          title: "YMS ゲート認識",
          desc: "ヤードゲートでの車両認識と配車をAIが担います。",
        },
        iot: {
          title: "IoT ヤードアシスタント Agent",
          desc: "IoT センサーと AI Agent によるリアルタイムのヤード管理。",
        },
        pack: {
          title: "梱包ステーション監視",
          desc: "ビジョンAIが梱包品質とコンプライアンスをリアルタイムに監視します。",
        },
        visionPro: {
          title: "Vision Pro によるピッキング",
          desc: "Apple Vision Pro の AR ガイドによる倉庫ピッキング作業。",
        },
        dog: {
          title: "四足歩行ロボット巡回 — ヤード警備",
          desc: "四足歩行ロボットが自律巡回し、ヤードの警備監視を行います。",
        },
      },
    },

    journey: {
      title: "課題と学びの軌跡",
      subtitle:
        "つまずきと認識の変化を率直に共有します。LLM への過信からアーキテクチャ再構築へと至った気づきの道のりです。",
      pitfall: {
        tag: "初期の落とし穴",
        title: "LLM の「汎用能力」への過信",
        body: "複雑な業務課題をすべてプロンプトエンジニアリングだけで解こうとしました。その結果、深刻なハルシネーションが生じ、実行は不安定になり、企業のコンプライアンス上のレッドラインや SOP の要件にはまったく対応できませんでした。",
        tags: ["ハルシネーション", "実行の不安定さ", "コンプライアンス不適合"],
      },
      insight: {
        tag: "認識の転換点",
        title: "基盤モデルは競争優位の源泉ではない",
        body: "モデルの高速な世代交代とオープンソース化により、汎用能力は急速にコモディティ化します。真の競争優位は Business Harness と Ontology にあると認識するに至りました。",
      },
      restructure: {
        title: "アーキテクチャ再構築の方向性",
        body: "頭脳（LLM）と手足（実行ツール）を完全に分離し、堅牢な Business Harness と Ontology のナレッジベース構築へ全面的に舵を切ります。",
      },
    },

    ontology: {
      title: "Ontology：エンタープライズAIの意味論的バックボーン",
      subtitle:
        "汎用LLMは企業の「業界の暗黙知」や SOP を理解しません。Ontology がなければ、AI Agent はエンタープライズ領域で必要な正確性と一貫した振る舞いを実現できません。",
      caption: "Layer 2 · Neo4j GraphRAG · 企業の頭脳",
      what: {
        title: "Ontology とは何か",
        body: "Ontology は単なるナレッジグラフではありません。特定ドメインの構造的フレームワークであり、エンティティモデルであり、意味論的なバックボーンです。ドメイン内のあらゆる概念の関係、制約、推論ルールを定義し、AI Agent がドメイン専門家のように考え、行動できるようにします。",
      },
      results: {
        eyebrow: "構築の成果",
        buildTime: "構築期間",
        iterations: "自律リサーチ反復回数",
        coverage: "ドメイン知識のカバー率",
      },
      why: {
        title: "なぜ Ontology が決定的なのか",
        points: {
          unify: "55 の独立した WMS インスタンスを単一の意味論アーキテクチャへ統合する",
          understand:
            "SKU、Dock、Wave といったドメイン概念の本来の意味を AI Agent に理解させる",
          validate:
            "Harness に検証基準を提供する。Agent の出力は Ontology が定義する制約に適合しなければならない",
          transform: "Agent を「おもちゃ」から「生産性ツール」へ変える切り札となる",
        },
      },
      quote:
        "Ontology は汎用知能からドメイン専門性への架け橋です。これがなければ、LLM は賢いだけの門外漢にとどまります。",
    },

    harness: {
      title: "Harness：AIの制約と競争優位",
      subtitle:
        "Agent = Model + Harness。Harness はモデルを取り囲み、AIの出力を誘導・制約・検証する構造化されたソフトウェア環境です。",
      tabs: {
        overview: "本質的な違い",
        architecture: "アーキテクチャ",
        moat: "競争優位の効果",
      },
      generic: {
        title: "Generic Harness",
        body: "サンドボックス分離、認証情報の管理、クラッシュ復旧、コンテキスト管理、MCP プロトコルなど、インフラ層の能力です。",
        note: "モデルの進化とともに価値が目減りします。モデルベンダーの領域であり、水道や電気のように徐々にインフラ化していきます",
      },
      business: {
        title: "Business Harness",
        body: "業界の暗黙知、コンプライアンス上のレッドライン、垂直領域の SOP、組織としての判断基準、そして経験を蒸留するフライホイールです。",
        note: "モデルの進化とともに価値が高まります。事業会社と実務者だけの領域であり、これこそが真の競争優位を形づくります",
      },
      strategy:
        "Item は戦略の重心を厚みのある Business Harness の構築に置いています。より強力な LLM が登場してもプラットフォームの価値が置き換えられることはなく、むしろ基盤モデルの進化に応じて複利的に高まっていきます。",
      trust: {
        title: "Harness エンジニアリングによる信頼の壁",
        body: "AI の出力は非決定的です。Harness はそこに不可欠なフィードフォワード制御とフィードバック制御を与え、一貫した信頼の壁を築きます。",
      },
      feedforward: {
        title: "フィードフォワード / ガイド",
        body: "Agent が行動する前に制約をかけ、初回成功率を高めます。",
        items: [
          "ドメインルールの注入",
          "SOP ガイドのテンプレート",
          "コンテキスト境界の設定",
          "入力フォーマットの検証",
        ],
      },
      feedback: {
        title: "フィードバック / センサー",
        body: "Agent の行動後に検証し、自己修正の能力を与えます。",
        items: [
          "構造化テストによる検証",
          "ロジックレビューのループ",
          "LLM-as-Judge による意味検証",
          "コンプライアンス・レッドラインの点検",
        ],
      },
      execTypes: {
        title: "実行タイプの分類",
        deterministic: {
          title: "決定論的な計算制御",
          body: "API 契約の検証、Lint、型チェック、データフォーマットの検証など、厳密に判定できるルールです。",
        },
        inference: {
          title: "推論による制御",
          body: "LLM-as-Judge による意味検証、意図の一貫性チェック、業務ロジックの妥当性評価を行います。",
        },
      },
      moat: {
        title: "Business Harness の構築と進化",
        state: {
          title: "状態とアイデンティティのガバナンス",
          body: "Generic Harness では、複雑な企業認証や業務状態のロールバックには対応できません。当社の Business Harness は、在庫ロック、バース調整、ウェーブ管理といった複雑な倉庫ロジックを安全なサンドボックスに封じ込め、あらゆる操作を追跡可能かつ巻き戻し可能にします。",
        },
        compound: {
          title: "競争優位がもたらす複利効果",
          body: "1,000 万件の請求書や受注を処理してきた Business Harness には、「較正の深さ」と「エッジケースへの対応力」が蓄積されます。これは汎用 LLM が事前学習だけで獲得できるものではありません。",
          stats: {
            orders: "処理済みの受注",
            edgeCases: "エッジケース・ライブラリ",
            distillation: "継続的な経験の蒸留",
          },
        },
        quote:
          "だからこそ Item は中核のリソースを Business Harness の構築に投じています。モデルは置き換えられても、十年分の業界経験の蒸留は複製できません。",
      },
    },

    llm: {
      title: "LLM選定戦略",
      subtitle:
        "特定のモデルに依存しない実践的な Hybrid Router 戦略。Fashion Nova の「Hybrid AI」の考え方と高い親和性があります。",
      us: {
        title: "米国のフロンティアモデル",
        sub: "高難度の推論 / コード生成",
        models: {
          gpt4o: "複雑な推論 / Agentic Workflow",
          claude: "長文解析 / コード生成",
          gemini: "マルチモーダル理解 / 動画解析",
        },
      },
      cn: {
        title: "中国のオープンソース / ローカルモデル",
        sub: "プライバシー / ローカライズ / コスト",
        models: {
          qwen: "ローカル展開 / 中国語理解",
          deepseek: "コスト重視の用途 / 推論",
          oss: "垂直ドメイン専用",
        },
      },
      future: {
        title: "今後の拡張：LLM からマルチモーダルへ",
        lmms: {
          name: "大規模マルチモーダルモデル",
          desc: "テキスト・画像・音声を統合的に理解",
        },
        lvms: {
          name: "大規模ビジョンモデル",
          desc: "映像監視 / 動画による検品 / 梱包ステーションのQC",
        },
        lpms: {
          name: "大規模フィジカルモデル",
          desc: "ロボット制御 / 物理世界とのインタラクション",
        },
      },
    },

    hardware: {
      title: "ハードウェアと計算基盤",
      subtitle:
        "クラウドからエッジへの進化。大規模な Agent クラスタと物理実行を支えるには、ソフトウェアだけでは足りません。",
      expansion: "拡張のニーズ",
      current: {
        eyebrow: "現在のハードウェア基盤",
        items: {
          cloudGpu: { label: "クラウド GPU", desc: "LLM 推論（OpenAI / Claude API）" },
          kafka: {
            label: "Kafka + K8s",
            desc: "クラウドネイティブなストリーム処理とコンテナオーケストレーション",
          },
          edge: { label: "エッジデバイス", desc: "AI カメラのデータ処理" },
        },
      },
      needs: {
        chips: {
          title: "エッジ推論チップ",
          desc: "AMR、シャトルシステム、無人フォークリフトを大規模に展開するには、低遅延推論に最適化されたエッジチップが必要です。",
        },
        clusters: {
          title: "クラウド GPU クラスタ",
          desc: "Agent Factory と、拡大し続ける Ontology のグラフ計算（GraphRAG）を支えます。",
        },
        network: {
          title: "高速ネットワーク機器",
          desc: "フィジカルAIのリアルタイム制御は極めて低い遅延を要求するため、次世代ネットワーク機器との統合が欠かせません。",
        },
      },
    },

    future: {
      title: "協業の展望",
      subtitle: "Fashion Nova との共同価値。社内実証から外部展開へと進む戦略的な道筋です。",
      visions: {
        ecosystem: {
          title: "エコシステムの融合",
          desc: "Item のソフトウェアスタックを Fashion Nova のエッジコンピューティング機器およびロボティクスと深く統合し、「ソフトウェア定義ハードウェア」のソリューションを共創します。",
        },
        cases: {
          title: "共同リファレンス事例",
          desc: "Fashion Nova 社内の AMR ゾーンピッキング案件を起点に、共同ソリューションを磨き込み、ビジネス価値を検証します。",
        },
        gtm: {
          title: "外部への展開",
          desc: "Fashion Nova 自身のサプライチェーン高度化にとどまらず、共同ソリューションを外部にも提供し、次世代のスマート倉庫基盤をともに築きます。",
        },
      },
      closing:
        "Item は UNIS グループの全サプライチェーン変革プロジェクトの実装基盤として、デジタル化からフィジカルAIに至る一連の道筋を本番環境で検証してきました。Fashion Nova と手を携え、実戦で鍛えたこの AI ミドルウェア層を Fashion Nova のハードウェア・エコシステムと深く統合し、次世代スマート倉庫の標準をともに定義していきたいと考えています。",
      footer: "Item AI 戦略ブリーフィング — 社外秘 — UNIS Group",
    },
  },

  /* ------------------------------------------------------------------ es -- */
  es: {
    hero: {
      titleLead: "De la digitalización a la",
      titleAccent: "IA física",
      subtitle:
        "El recorrido de Item en IA durante el último año: práctica, desafíos y replanteamiento conceptual",
      statement:
        "Item es la base de implementación de todos los proyectos de transformación de la cadena de suministro del grupo UNIS",
      pills: {
        middleware: "Capa de middleware de IA",
        ontologyHarness: "Ontology + Harness",
        physicalAi: "IA física",
      },
    },

    companyIntro: {
      title: "Quiénes somos",
      subtitle:
        "UNIS ofrece fulfillment omnicanal; Item construye la plataforma tecnológica que lo impulsa todo.",
      unis: {
        leadStrong: "Fulfillment omnicanal, a tiempo y completo.",
        lead: "UNIS atiende a Fashion Nova desde 2019 en Memphis, EE. UU. Su red nacional, diseñada estratégicamente, alcanza al 98% de los consumidores con entrega en el mismo día o al día siguiente.",
        stats: {
          orders: "Pedidos por año",
          accounts: "Cuentas de clientes",
          inventory: "Valor de inventario",
          warehouse: "Pies cuadrados de almacén",
        },
        highlights: {
          ports: "4 grandes puertos de EE. UU. (CA, TX, GA, NJ)",
          la: "4,5 M de pies cuadrados en el área de Los Ángeles",
          technicians: "1.300 técnicos de servicio",
        },
      },
      item: {
        leadStrong: "El motor tecnológico detrás de UNIS.",
        lead: "Item es la base de implementación de todos los proyectos de transformación de la cadena de suministro del grupo UNIS.",
        stackLabel: "Stack de capacidades",
        caps: {
          saas: "Plataforma SaaS",
          factory: "Fábrica de AI Agents",
          robotics: "Integración robótica",
        },
        quote: "De la operación digital → a la inteligencia de IA → a la automatización física",
      },
    },

    evolution: {
      title: "Ruta de evolución de la IA y validación a escala",
      subtitle:
        "Un marco de evolución en tres fases, de la digitalización a la IA física, respaldado por métricas validadas en producción.",
      phases: {
        digital: {
          title: "Digitalización",
          desc: "SaaS de pila completa (OMS/WMS/TMS/YMS) más gemelo digital, para que los procesos de negocio sean legibles por los sistemas.",
        },
        agent: {
          title: "AI Agent",
          desc: "Orquestación de agentes y memoria contextual, para que las decisiones puedan ejecutarse de forma automática.",
        },
        physical: {
          title: "IA física",
          desc: "Integración profunda de WES/WCS con robótica (AMR, AS/RS, clasificadores): la inteligencia sale de la pantalla.",
        },
      },
      metrics: {
        orders: "Pedidos procesados al año",
        wms: "Instancias WMS heredadas unificadas",
        coverage: "Superficie de almacén cubierta",
      },
    },

    video: {
      title: "Demostraciones de agentes de IA en acción",
      subtitle:
        "Avances recientes: varios AI Agents trabajando en conjunto, uniendo de verdad el mundo digital y el físico.",
      tabs: {
        devScrum: {
          label: "Scrum de agentes desarrolladores",
          desc: "Los AI Agents desarrolladores celebran daily standups de forma autónoma: reportan avances, detectan bloqueos y coordinan los siguientes pasos, igual que un equipo de ingeniería real.",
        },
        multiAgent: {
          label: "Colaboración multiagente",
          desc: "Varios AI Agents especializados operan de forma coordinada, desde la planificación de tareas y la optimización de rutas hasta la ejecución en tiempo real, cerrando el ciclo entre decisión y ejecución.",
        },
        digitalPhysical: {
          label: "Digital × Físico",
          desc: "Las decisiones de los AI Agents ya no se quedan en la pantalla: accionan directamente robots y equipos del mundo físico y cierran la brecha entre inteligencia digital y ejecución física.",
        },
      },
      badges: {
        breakthroughs: "Últimos avances",
        validated: "Validado en producción",
        closedLoop: "Inteligencia en ciclo cerrado",
      },
    },

    agents: {
      title: "Automatización de oficina — agentificación",
      subtitle:
        "Del «sistema de registro» al «sistema de acción»: nuestros experimentos y resultados al agentificar los flujos internos de oficina y operación.",
      demo: "Demo",
      items: {
        ticketing: {
          title: "Tickets del centro de atención",
          subtitle: "Sistema propio de atención al cliente con IA",
          desc: "Los AI Agents interpretan la intención del cliente e invocan directamente las API de OMS/WMS para consultar estados y gestionar excepciones, lo que reduce notablemente la intervención manual.",
          tags: ["Reconocimiento de intención", "Tickets automáticos", "Integración OMS/WMS"],
        },
        assistant: {
          title: "Asistente personal",
          subtitle: "De un desarrollo propio a OpenClaw",
          desc: "Primero construimos un Agent asistente de propósito general y más tarde lo sustituimos por OpenClaw. Delegamos las tareas genéricas en herramientas especializadas y reenfocamos el esfuerzo interno en la profundidad del dominio.",
          tags: ["Cambio de enfoque", "Foco en el dominio", "OpenClaw"],
        },
        driver: {
          title: "AI Agent para conductores",
          subtitle: "Agentificación de todo el proceso del conductor",
          desc: "Da a los conductores asistencia de IA en los flujos de TMS/YMS: gestiona el registro de entrada, la congestión de muelles y la documentación faltante, con indicaciones en tiempo real.",
          tags: ["Registro de conductores", "Gestión de excepciones", "Guía en tiempo real"],
        },
      },
    },

    agentExamples: {
      title: "Más aplicaciones de agentes en acción",
      subtitle:
        "Desde la contratación hasta la generación de contenido, del monitoreo de conductas a la fábrica de agentes: los AI Agents permean cada rincón de la operación empresarial.",
      watch: "Ver demo",
      items: {
        recruit: {
          title: "AI Recruit Agent",
          desc: "Automatiza el filtrado de currículums, el emparejamiento de candidatos y la agenda de entrevistas, y reduce el tiempo de contratación un 60% sin bajar el estándar de calidad.",
        },
        monitoring: {
          title: "Agent de monitoreo de personal",
          desc: "IA basada en visión que observa en tiempo real la conducta del personal de almacén para garantizar la seguridad, medir la productividad y verificar el cumplimiento de los SOP.",
        },
        content: {
          title: "Agent de contenido y AEO",
          desc: "Generación de contenido con IA para marketing y SEO, combinada con Answer Engine Optimization (AEO) para maximizar la visibilidad en resultados de búsqueda impulsados por IA.",
        },
        factory: {
          title: "Fábrica de agentes impulsada por Ontology",
          desc: "Muestra cómo Ontology sirve de base para ensamblar agentes con rapidez, convirtiendo el conocimiento del dominio en AI Agents desplegables a escala.",
        },
      },
    },

    physical: {
      title: "Hacia el mundo físico",
      subtitle:
        "Un WES agnóstico al hardware: la inteligencia sale de la pantalla, del inventario con AGV al picking con Vision Pro, del reconocimiento en portería a la vigilancia con robots cuadrúpedos.",
      watch: "Ver",
      banner: {
        eyebrow: "WES agnóstico al hardware",
        body: "Un stack de software operando en entornos reales de producción que superan los 10 millones de pies cuadrados",
      },
      groups: {
        robotics: "Robótica y automatización",
        vision: "Visión e IA en el edge",
      },
      videos: {
        agv: {
          title: "Robot AGV de inventario",
          desc: "Vehículos de guiado autónomo recorren los pasillos del almacén y cuentan el inventario en tiempo real, sustituyendo el conteo cíclico manual por una precisión automatizada 24/7.",
        },
        gate: {
          title: "Reconocimiento en portería YMS",
          desc: "Reconocimiento y programación de vehículos en las puertas del patio con IA.",
        },
        iot: {
          title: "Agent asistente de patio con IoT",
          desc: "Sensores IoT y un AI Agent para la gestión del patio en tiempo real.",
        },
        pack: {
          title: "Monitor de estación de empaque",
          desc: "IA de visión que supervisa en tiempo real la calidad y el cumplimiento del empaque.",
        },
        visionPro: {
          title: "Picking con Vision Pro",
          desc: "Operaciones de picking en almacén guiadas por realidad aumentada con Apple Vision Pro.",
        },
        dog: {
          title: "Robot cuadrúpedo — seguridad del patio",
          desc: "Rondas de un robot cuadrúpedo para la vigilancia autónoma del patio.",
        },
      },
    },

    journey: {
      title: "Retos y lecciones aprendidas",
      subtitle:
        "Un relato honesto de tropiezos y cambios de mentalidad: del exceso de fe en los LLM a la reestructuración de la arquitectura.",
      pitfall: {
        tag: "Tropiezo inicial",
        title: "Exceso de confianza en las «capacidades generales» del LLM",
        body: "Intentamos resolver todos los problemas de negocio complejos únicamente con prompt engineering. El resultado fueron alucinaciones graves, una ejecución poco fiable y una incapacidad total para respetar las líneas rojas de cumplimiento y los SOP de la empresa.",
        tags: ["Alucinaciones", "Ejecución poco fiable", "Fallo de cumplimiento"],
      },
      insight: {
        tag: "Punto de inflexión",
        title: "Los modelos base no son el foso competitivo",
        body: "Entendimos que, con la rápida iteración y apertura de los modelos, las capacidades generales se convierten pronto en un commodity. El verdadero foso está en el Business Harness y en la Ontology.",
      },
      restructure: {
        title: "Dirección de la reestructuración arquitectónica",
        body: "Desacoplar por completo el cerebro (el LLM) de las manos (las herramientas de ejecución) y volcarnos en construir un Business Harness sólido y bases de conocimiento Ontology.",
      },
    },

    ontology: {
      title: "Ontology: la columna semántica de la IA empresarial",
      subtitle:
        "Los LLM generalistas no entienden el «conocimiento tácito» del sector ni los SOP de la empresa. Sin Ontology, los AI Agents no logran precisión ni consistencia de comportamiento en escenarios empresariales.",
      caption: "Layer 2 · Neo4j GraphRAG · Cerebro corporativo",
      what: {
        title: "¿Qué es Ontology?",
        body: "Ontology es mucho más que un grafo de conocimiento. Es un marco estructural propio del dominio, un modelo de entidades y una columna semántica. Define las relaciones, restricciones y reglas de razonamiento entre todos los conceptos del dominio, y permite que los AI Agents piensen y actúen como expertos del sector.",
      },
      results: {
        eyebrow: "Resultados de la construcción",
        buildTime: "Tiempo de construcción",
        iterations: "Iteraciones de investigación",
        coverage: "Cobertura del dominio",
      },
      why: {
        title: "¿Por qué Ontology es decisiva?",
        points: {
          unify: "Unifica 55 instancias WMS independientes en una única arquitectura semántica",
          understand:
            "Permite que los AI Agents entiendan el significado real de conceptos del dominio como SKU, Dock y Wave",
          validate:
            "Aporta los criterios de validación del Harness: la salida del Agent debe cumplir las restricciones que define la Ontology",
          transform:
            "Es el arma secreta para convertir a los agentes de «juguetes» en herramientas de productividad",
        },
      },
      quote:
        "Ontology es el puente entre la inteligencia general y la experiencia de dominio. Sin ella, los LLM no pasan de ser forasteros ingeniosos pero ignorantes.",
    },

    harness: {
      title: "Harness: restricciones y foso competitivo para la IA",
      subtitle:
        "Agent = Model + Harness. Harness es el entorno de software estructurado que rodea al modelo para guiar, restringir y validar sus salidas.",
      tabs: {
        overview: "Distinción clave",
        architecture: "Arquitectura",
        moat: "Efecto foso",
      },
      generic: {
        title: "Generic Harness",
        body: "Capacidades de nivel infraestructura: aislamiento en sandbox, gestión de credenciales, recuperación ante fallos, gestión del contexto, protocolo MCP, entre otras.",
        note: "Se deprecia con cada avance de los modelos: es territorio de los proveedores de modelos y tiende a convertirse en infraestructura commoditizada",
      },
      business: {
        title: "Business Harness",
        body: "Conocimiento tácito del sector, líneas rojas de cumplimiento, SOP verticales, criterio organizativo y el volante de destilación de la experiencia.",
        note: "Se revaloriza con cada avance de los modelos: es territorio exclusivo de las empresas y sus profesionales, y constituye el verdadero foso",
      },
      strategy:
        "Item concentra su estrategia en construir un Business Harness profundo, de modo que el valor de la plataforma no quede desplazado por LLM más potentes, sino que se componga a medida que mejoran los modelos subyacentes.",
      trust: {
        title: "La barrera de confianza de la ingeniería de Harness",
        body: "Frente a salidas de IA no deterministas, Harness aporta los controles de prealimentación y realimentación imprescindibles y levanta un sistema completo de barreras de confianza.",
      },
      feedforward: {
        title: "Prealimentación / guías",
        body: "Restringe al Agent antes de actuar para elevar la tasa de acierto a la primera.",
        items: [
          "Inyección de reglas del dominio",
          "Plantillas de guía de SOP",
          "Definición de los límites de contexto",
          "Validación del formato de entrada",
        ],
      },
      feedback: {
        title: "Realimentación / sensores",
        body: "Valida después de que el Agent actúa y le da capacidad de autocorrección.",
        items: [
          "Validación mediante pruebas estructuradas",
          "Bucle de revisión lógica",
          "Validación semántica con LLM-as-Judge",
          "Control de líneas rojas de cumplimiento",
        ],
      },
      execTypes: {
        title: "Clasificación de los tipos de ejecución",
        deterministic: {
          title: "Control computacional determinista",
          body: "Validación de contratos de API, linting, comprobación de tipos y verificación de formatos: reglas que se determinan con precisión.",
        },
        inference: {
          title: "Control por inferencia",
          body: "LLM-as-Judge para la validación semántica, la comprobación de coherencia de intención y la evaluación de la razonabilidad de la lógica de negocio.",
        },
      },
      moat: {
        title: "Construcción y evolución del Business Harness",
        state: {
          title: "Gobierno del estado y la identidad",
          body: "El Generic Harness no resuelve la autenticación empresarial compleja ni la reversión de estados de negocio. Nuestro Business Harness encapsula la lógica compleja de almacén (bloqueo de inventario, programación de muelles, gestión de olas) en sandboxes seguros y garantiza que cada operación sea trazable y reversible.",
        },
        compound: {
          title: "El interés compuesto del foso competitivo",
          body: "Un Business Harness que ha procesado diez millones de facturas o pedidos acumula una «profundidad de calibración» y una capacidad de manejo de casos límite que ningún LLM generalista obtiene solo con preentrenamiento.",
          stats: {
            orders: "Pedidos procesados",
            edgeCases: "Biblioteca de casos límite",
            distillation: "Destilación continua",
          },
        },
        quote:
          "Por eso Item vuelca su esfuerzo principal en construir el Business Harness: los modelos se pueden sustituir, pero una década de experiencia sectorial destilada no se replica.",
      },
    },

    llm: {
      title: "Estrategia de selección de LLM",
      subtitle:
        "Una estrategia pragmática de Hybrid Router, sin dependencia de un único modelo, muy alineada con la filosofía «Hybrid AI» de Fashion Nova.",
      us: {
        title: "Modelos frontera de EE. UU.",
        sub: "Razonamiento de alta complejidad / generación de código",
        models: {
          gpt4o: "Razonamiento complejo / Agentic Workflow",
          claude: "Análisis de textos largos / generación de código",
          gemini: "Comprensión multimodal / análisis de vídeo",
        },
      },
      cn: {
        title: "Modelos chinos de código abierto y locales",
        sub: "Privacidad / localización / coste",
        models: {
          qwen: "Despliegue local / comprensión del chino",
          deepseek: "Escenarios sensibles al coste / razonamiento",
          oss: "Especializado por dominio vertical",
        },
      },
      future: {
        title: "Expansión futura: del LLM a lo multimodal",
        lmms: {
          name: "Modelos multimodales grandes",
          desc: "Comprensión unificada de texto, imagen y audio",
        },
        lvms: {
          name: "Modelos de visión grandes",
          desc: "Videovigilancia / control de calidad por vídeo / QC en estación de empaque",
        },
        lpms: {
          name: "Modelos físicos grandes",
          desc: "Control de robots / interacción con el mundo físico",
        },
      },
    },

    hardware: {
      title: "Hardware e infraestructura de cómputo",
      subtitle:
        "Evolución de la nube al edge: sostener grandes clústeres de agentes y la ejecución física requiere más que software.",
      expansion: "Necesidades de expansión",
      current: {
        eyebrow: "Base de hardware actual",
        items: {
          cloudGpu: { label: "GPU en la nube", desc: "Inferencia de LLM (API de OpenAI / Claude)" },
          kafka: {
            label: "Kafka + K8s",
            desc: "Procesamiento de flujos y orquestación de contenedores cloud-native",
          },
          edge: { label: "Dispositivos edge", desc: "Procesamiento de datos de cámaras con IA" },
        },
      },
      needs: {
        chips: {
          title: "Chips de inferencia en el edge",
          desc: "El despliegue masivo de AMR, sistemas shuttle y montacargas autónomos exige chips de edge diseñados para inferencia de baja latencia.",
        },
        clusters: {
          title: "Clústeres de GPU en la nube",
          desc: "Sostienen la Agent Factory y el cómputo creciente del grafo de Ontology (GraphRAG).",
        },
        network: {
          title: "Redes de alta velocidad",
          desc: "El control en tiempo real de la IA física exige latencias mínimas y obliga a integrar hardware de red de nueva generación.",
        },
      },
    },

    future: {
      title: "Visión de la colaboración",
      subtitle:
        "Valor conjunto con Fashion Nova: una ruta estratégica de la validación interna a la salida al mercado.",
      visions: {
        ecosystem: {
          title: "Integración de ecosistemas",
          desc: "Integración profunda del stack de software de Item con el hardware de edge computing y la robótica de Fashion Nova, para construir juntos soluciones de «hardware definido por software».",
        },
        cases: {
          title: "Casos de referencia conjuntos",
          desc: "Partiendo del proyecto interno de AMR Zone Picking de Fashion Nova, afinamos la solución conjunta y validamos su valor de negocio.",
        },
        gtm: {
          title: "Salida al mercado externo",
          desc: "Más allá de apoyar la modernización de la propia cadena de suministro de Fashion Nova, llevar las soluciones conjuntas al mercado y construir juntos la infraestructura del almacén inteligente de nueva generación.",
        },
      },
      closing:
        "Como base de implementación de todos los proyectos de transformación de la cadena de suministro del grupo UNIS, Item ha validado en entornos de producción la ruta completa de la digitalización a la IA física. Esperamos asociarnos con Fashion Nova para integrar en profundidad esta capa de middleware de IA, ya probada en operación, con su ecosistema de hardware, y definir juntos el estándar del almacén inteligente de nueva generación.",
      footer: "Informe estratégico de IA de Item — Confidencial — UNIS Group",
    },
  },
};

export default deck;
