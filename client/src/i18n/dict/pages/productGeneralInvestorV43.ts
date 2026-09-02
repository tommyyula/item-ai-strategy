import type { LocalePack } from "../index";

/**
 * ITEM AI — General Enterprise Edition (Investor) v4.3.
 *
 * Ported from the hosted deck. Pure figures (currency amounts, table cells,
 * percentages) live in the component so they are physically identical in every
 * locale; this file carries only prose, labels, and the few values the source
 * itself localised (`1B+`, `4`, `N × Templates`).
 */
const pack: LocalePack = {
  zh: {
    cover: {
      tag: "通用企业版 · V4",
      titleMain: "通用企业 AI 操作系统",
      tagline: "面向所有行业的企业级 AI 操作系统",
      subtitle:
        "一套已在供应链行业验证并生产运行的 AI 操作系统架构，现以「平台 + 行业模板」的方式向所有行业开放。同一个本体、同一个 AI 运行时、同一个运营平台——只需更换行业模板，即可落地到任何一个垂直领域。",
      industries: {
        proven: "✓ 供应链与物流 · 已验证运行",
        financial: "财务咨询",
        restaurant: "餐馆运营",
        property: "房产管理",
        development: "地产开发",
        healthcare: "医疗健康",
        manufacturing: "制造与汽车",
        retail: "零售电商",
        more: "+ 更多行业模板",
      },
      meta: "从数字 AI 到物理 AI · 一个平台 · 服务每一个行业",
      scrollHint: "向下滚动浏览全文",
    },
    repositioning: {
      eyebrow: "01 · 重新定位",
      title: "从「供应链 AI」到「通用 AI 操作系统」",
      lede: "ITEM AI 不是一个供应链软件公司。供应链只是我们的第一个行业模板——一个从数据接入、本体建模、智能体编排到物理设备控制的完整闭环，已经在真实企业客户的生产环境中运行。这套架构中 80% 以上的能力是行业无关的：换掉业务对象和行业规则，同一个平台即可运营一家财务咨询公司、一个连锁餐饮集团、或一家地产开发商。",
      cards: {
        proven: {
          title: "已被证明，而非承诺",
          body: "Gartner 预测超过 40% 的智能体 AI 项目将在 2027 年前被取消；目前只有 23% 的企业真正把智能体系统规模化投产。市场缺的不是 AI 概念，而是被验证能运行的完整模板。ITEM 的供应链部署正是那个证明。",
        },
        template: {
          title: "行业 = 模板，不是重写",
          body: "平台的本体层、AI 运行时、运营平台与通用应用完全复用。进入一个新行业 = 加载一套新的业务对象 + 工作流 + 合规规则 + 行业智能体，交付周期从「数年开发」压缩到「数周配置」。",
        },
        vertical: {
          title: "垂直 AI 是增长最快的方向",
          body: "在整个 AI 智能体市场中，垂直行业智能体是增长最快的细分（约 62.7% CAGR）。拥有「一个平台 × N 个行业模板」结构的厂商，能以横向平台的成本获得垂直 AI 的溢价。",
        },
      },
      callout: {
        label: "定位一句话：",
        text: "ITEM AI = 一个通用的企业 AI 操作系统，加上一组可插拔的行业模板。供应链是第一个、也是已经验证的那一个。",
      },
      sources:
        "来源：Gartner（智能体项目取消率预测 / 企业投产率）；MarketsandMarkets《AI Agents Market 2025–2030》（垂直智能体 CAGR）。",
    },
    problem: {
      eyebrow: "02 · 共同的问题",
      title: "每个行业，都在交同样的三种「隐藏税」",
      lede: "不论是物流企业、财务咨询公司、餐饮集团还是地产商，运营的低效都来自同一个根源：碎片化的系统 + 割裂的数据 + 人工驱动的工作流。行业不同，税单相同。",
      taxes: {
        compliance: {
          title: "① 合规税",
          body: "罚款、审计、索赔、监管申报、SLA 违约、许可维护。供应链的 OTIF 罚款、财务行业的监管报送、餐饮的食安检查、地产的合规审批——形式不同，成本机制完全一样。",
        },
        data: {
          title: "② 数据税",
          body: "预测不准、系统割裂、可视化缺失、决策延迟。每个部门一套系统、每套系统一个数据孤岛。企业为「把数据拼起来」支付的隐性成本，往往超过软件本身的许可费。",
        },
        operations: {
          title: "③ 运营税",
          body: "手工流程、重复劳动、昂贵的协调与编排。知识工作者的多步骤任务中，高达 86% 的人工耗时可以被智能体消除（Google Cloud 早期采用者数据）；88% 的早期采用者已实现正回报。",
        },
      },
      stats: {
        service: { label: "AI 智能体带来的客户服务成本下降（企业级智能体部署实测）" },
        backOffice: { label: "采购/后台运营支出的最大压缩幅度（企业智能体 AI 部署案例）" },
        readiness: {
          label: "具备治理、数据与集成基础能力的企业，自主工作流成功率的倍数（IBM）——这正是「平台 + 模板」要替客户补齐的能力",
        },
      },
      sources:
        "来源：Google Cloud 智能体 ROI 数据；MarketsandMarkets《Enterprise Agentic AI Market》；IBM 自主工作流就绪度研究。",
    },
    whyNow: {
      eyebrow: "03 · 为什么是现在",
      title: "市场正在从「软件」切换到「智能体」——窗口就是现在",
      stats: {
        ai: { sub: "→ $3.64T (2033) · 29.3% CAGR", label: "全球 AI 市场规模（2026），七年内接近 6 倍" },
        agentic: { sub: "→ $139.2B (2034) · 40.5% CAGR", label: "全球智能体 AI（Agentic AI）市场（2026）" },
        share: { sub: "≈ $450B · GARTNER 2035", label: "2035 年智能体 AI 占企业软件收入的比例——2025 年仅为 2%" },
        embed: { sub: "2026 年底 · vs 2025 年 <5%", label: "将嵌入任务型 AI 智能体的企业应用比例，一年内约 8 倍增长" },
        spend: { sub: "IDC · 2029", label: "全球 AI 支出，将超过全部 IT 支出的 26%" },
        agents: { value: "10 亿+", sub: "IDC · 2029", label: "全球在用 AI 智能体数量，约为 2025 年的 40 倍" },
        ceo: { sub: "CEO 调研", label: "已在核心运营中集成智能体的 CEO 比例——超越了当年 RPA 的采用速度" },
        scaled: {
          sub: "规模化投产率",
          label: "真正把智能体系统规模化投产的企业比例——巨大的「落地缺口」正是已验证模板的机会",
        },
      },
      callout: {
        label: "结论：",
        text: "需求爆炸（40% CAGR）与落地失败（23% 投产率、40% 项目将被取消）同时存在。市场付费意愿从「买 AI 能力」转向「买被验证能跑通的行业化 AI 运营模板」——这正是 ITEM 的产品形态。",
      },
      sources:
        "来源：MarketsandMarkets《Artificial Intelligence Market 2026–2033》；Fortune Business Insights《Agentic AI Market》；Gartner；IDC；Mordor Intelligence。",
    },
    architecture: {
      eyebrow: "04 · 平台架构",
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
        core: "ITEM 核心产品（Layer 2–6）——下文逐层展开",
        integ: "开放集成层（Layer 1 & 7）——与客户已有系统对接，不重复建设",
      },
    },
    layer2: {
      title: "数据与语义智能层 —— 平台的护城河",
      lede: "这一层回答一个问题：AI 如何理解你的业务？不论行业，企业的运营都由「对象 + 关系 + 规则 + 状态」构成。ITEM 把它们建模为一个受治理的、实时的语义层——所有上层应用共享同一份业务真相，这是任何点状 AI 工具无法复制的结构性优势。",
      cards: {
        ontology: {
          body: "受治理的知识图谱：业务对象、实体关系、规则引擎、状态管理。行业无关的引擎，行业相关的对象。供应链里的对象是订单/货件/仓库；财务咨询里是客户/组合/合规规则；餐饮里是门店/菜单/班次；地产里是楼盘/租约/工单。引擎不变，模板切换。",
        },
        graphrag: {
          body: "基于知识图谱的上下文检索层。让每一次 AI 推理都锚定在企业的真实数据与业务关系上，而不是通用语料——从根本上压制幻觉，让智能体的每个动作可解释、可审计。",
        },
        twin: {
          body: "业务的实时镜像：每个对象的当前状态、历史轨迹与预测走向。供应链里孪生一张物流网络，餐饮里孪生门店运营，地产里孪生楼宇资产组合——同一套孪生基础设施。",
        },
      },
      callout: {
        label: "为什么这层是护城河：",
        text: "每一个运营决策都会沉淀回本体。运行越久，业务图谱越深，切换成本越高。竞争对手可以复制功能，无法复制客户在本体中积累的运营知识。",
      },
    },
    layer3: {
      title: "AI 运行时层 —— 安全、治理、多模型",
      lede: "这一层回答：AI 如何安全地在企业里执行？大模型每季度都在更迭，企业不应绑定任何单一模型。ITEM 的运行时把「模型选择」变成一个可路由、可治理、可审计的基础设施决策。",
      cards: {
        aip: {
          body: "企业级 AI 运行时：多模型编排、智能体运行时、自主工作流、人在回路治理、提示与版本管理、权限与合规审计、工具调用框架、记忆与推理系统。面向监管行业（金融、医疗）尤其关键：每一个智能体动作都有完整审计链。",
        },
        router: {
          body: "LLM 路由与优化：按任务类型、成本、延迟与合规要求，在 OpenAI、Claude、Gemini、开源模型与客户私有模型之间自动仲裁。客户获得模型层的永久中立——新模型发布即接入，无迁移成本。",
        },
        harness: {
          body: "在云、本地、气隙、边缘任何环境中自主部署、监控、更新与回滚，内置合规监控与金丝雀发布。这是把同一套平台交付给「云原生初创」和「监管银行」都能通过安全审查的原因。",
        },
      },
      stats: {
        models: { label: "可路由的基础模型（OpenAI · Claude · Gemini · Grok · DeepSeek · Qwen + 私有模型）" },
        envs: { value: "4 类", label: "部署环境全覆盖：公有云 · 私有云 · 本地 · 边缘/气隙" },
        audit: { label: "智能体动作审计覆盖率——治理不是附加项，而是运行时默认行为" },
      },
    },
    layer4: {
      title: "企业运营平台层 —— 人 + AI 共同工作的地方",
      lede: "这一层回答：业务团队如何真正用起来？模型和本体都是后台；企业需要一个前台——构建应用、编排流程、让人类与智能体在同一个工作区协作。",
      cards: {
        foundry: {
          body: "本体驱动的应用与流程工厂：数据集成、低代码/无代码应用构建器、工作流编排、实时事件处理、人机协作。行业模板正是在 Foundry 上构建的——供应链模板、财务咨询模板、餐饮模板，本质上都是 Foundry 应用 + 本体对象 + 智能体配置的打包。这意味着客户和合作伙伴也能用同样的工具构建自己的扩展。",
        },
        aios: {
          body: "统一运营工作区：跨职能工作流、决策智能、企业搜索、实时分析、嵌入式 Copilot、运营仪表盘、通知与工作管理。对一线员工，它是每天打开的那个界面；对管理层，它是全业务的实时驾驶舱；对智能体，它是与人类交接任务的场所。人在回路不是弹窗，而是操作系统级设计。",
        },
      },
      callout: {
        label: "交付模式的含义：",
        text: "新行业模板 ≈ Foundry 上的一组预置应用与流程。这就是「进入新行业 = 数周配置而非数年开发」在工程上成立的原因。",
      },
    },
    layer5: {
      title: "通用 AI 应用层 —— 12 个跨行业复用的命名产品",
      lede: "这 12 个产品不属于任何一个行业。决策、执行、预测、看见、听见、支持、增长——每个行业都需要。它们在供应链客户的生产环境中打磨成熟，切换行业时零改造复用。",
      products: {
        gpt: { tag: "为每一个决策提供 AI", desc: "自然语言运营接口——用一句话调度整个平台" },
        claw: { tag: "无摩擦执行", desc: "多智能体工作流执行器——从建议到执行" },
        flow: { tag: "设计 · 自动化 · 规模化", desc: "可视化 AI 工作流构建器" },
        sense: { tag: "即刻看见一切", desc: "实时可视化 + 数字孪生驾驶舱" },
        predict: { tag: "预见下一步", desc: "需求 / 现金流 / 客流 / 资源的通用预测引擎" },
        ops: { tag: "自己运行的运营", desc: "自主运营与持续优化" },
        audit: { tag: "找回正在流失的钱", desc: "计费纠错、合规稽核、成本回收" },
        vision: { tag: "看见别人错过的", desc: "计算机视觉——安防、质检、现场监控" },
        voice: { tag: "免提操作", desc: "语音 AI——一线作业与来电的免提交互" },
        support: { tag: "全渠道，一条主线", desc: "全渠道工单：邮件 · 消息 · 短信 · 电话" },
        grow: { tag: "永不停歇的管道", desc: "SDR/BDR · SEO/AEO/GEO · 内容生成的 GTM AI" },
        doc: { tag: "自己处理自己的文档", desc: "文档自动化——合同、发票、报告的读取与生成" },
      },
      callout: {
        label: "通用性的证据：",
        text: "ItemSupport 处理的可以是延误货件工单，也可以是租户报修或客户咨询；ItemPredict 预测的可以是库存，也可以是门店客流或楼盘去化。对象来自本体，能力来自产品。",
      },
    },
    layer6: {
      title: "行业模板层 —— 10 个可插拔的垂直方案",
      lede: "每个行业模板 = 行业本体对象 + 预置工作流 + 合规规则包 + 行业智能体 + 系统连接器。供应链模板已在生产环境验证——它证明了整个模板机制可以跑通；其余行业按同一机制复制。",
      proven: "✓ 已验证运行",
      templates: {
        chain: { tag: "供应链与物流", desc: "订单/运输/仓储/堆场全套执行系统——旗舰模板，生产运行中" },
        dock: { tag: "港口与拖车", desc: "港口、拖车、集装箱运营（供应链子模板）" },
        trade: { tag: "全球贸易", desc: "关税归类、跨境合规、贸易智能" },
        fin: { tag: "财务咨询", desc: "财务咨询与财富管理：客户画像、组合分析、合规报送、投顾 Copilot" },
        dine: { tag: "餐馆运营", desc: "餐馆运营：排班、备货预测、损耗控制、多门店驾驶舱" },
        estate: { tag: "房产管理", desc: "房产管理：租约、租户服务、报修工单、能耗与资产运营" },
        build: { tag: "地产开发", desc: "地产开发：项目进度、供应商、成本与销售去化管理" },
        health: { tag: "医疗运营", desc: "医疗运营与供应链：冷链、效期、合规追溯" },
        auto: { tag: "制造与汽车", desc: "制造与汽车：JIT 排序、供应商风险、产线协同" },
        retail: { tag: "零售电商", desc: "零售电商：全渠道订单、库存、退货与会员运营" },
      },
      callout: {
        label: "模板的商业含义：",
        text: "横向平台竞争靠功能，垂直模板竞争靠行业知识。ITEM 用一套平台承载 N 个模板——每新增一个行业，边际成本递减，而垂直 AI 恰是整个智能体市场中增速最快的细分（≈62.7% CAGR）。",
      },
    },
    catalog: {
      eyebrow: "05 · 产品全景",
      title: "22 个命名产品全景：12 个通用应用 × 10 个行业模板",
      general: {
        tag: "通用应用",
        subtitle: "跨行业复用 · Layer 5",
        count: "12 个产品",
        note: "每个行业都需要，切换行业零改造。",
      },
      vertical: {
        tag: "行业模板",
        subtitle: "可插拔垂直方案 · Layer 6",
        count: "10 个模板",
        note: "行业对象 + 流程 + 合规 + 智能体的打包。",
        proven: "✓ 已验证",
      },
      table: {
        head: { dimension: "维度", general: "通用应用（12）", templates: "行业模板（10）" },
        rows: {
          question: {
            label: "回答的问题",
            general: "「企业运营需要哪些 AI 能力？」",
            template: "「这些能力如何长成某个行业的样子？」",
          },
          reuse: {
            label: "复用方式",
            general: "跨行业 100% 复用，随平台交付",
            template: "按行业加载，可组合、可定制、可由伙伴共建",
          },
          economics: {
            label: "研发经济学",
            general: "一次构建，所有行业摊薄成本",
            template: "首个模板（供应链）最贵，其后每个模板边际成本递减",
          },
          sales: { label: "销售角色", general: "平台订阅的核心价值构成", template: "行业化的切入点（wedge）与溢价来源" },
          validation: {
            label: "验证状态",
            general: "已在供应链生产环境全量运行",
            template: "ItemChain 已验证；其余按已验证机制复制",
          },
        },
      },
    },
    verticals: {
      eyebrow: "06 · 垂直市场",
      title: "五个重点行业：市场规模与已验证的价值锚点",
      items: {
        supply: {
          badge: "✓ 已验证",
          name: "供应链与物流",
          market: "物流 AI 市场 · 2030s",
          basis: "$20.1B 起步 · 25.9% CAGR",
          body: "早期采用者已实现约 -15% 成本、+35% 库存周转。ITEM 旗舰模板的诞生地。",
        },
        fin: {
          name: "财务咨询",
          market: "智能投顾管理资产 · 2027（PwC）",
          basis: "2022 年为 $2.5T",
          body: "BCG 2026：AI-first 已是财富管理行业的强制项而非选择题；AI 正在起草财务方案、自动化合规文档。",
        },
        dine: {
          name: "餐馆运营",
          market: "餐饮 AI 市场 · 2034",
          basis: "2025 年 $13.2B · 22.6% CAGR",
          body: "AI 库存与预测：食材成本 -8~14%、损耗 -25~40%、缺货 -60%，单店年净节省 $1.5–6.5 万。",
        },
        estate: {
          name: "房产管理",
          market: "地产行业 AI 效率收益 · 2030",
          basis: "（Morgan Stanley）",
          body: "物业与商业地产 37% 的任务可被自动化——集中在管理、销售、行政支持与维保四大板块。",
        },
        build: {
          name: "地产开发",
          market: "地产 AI 市场 · 2029",
          basis: "2025 年 $303B · 34.4% CAGR",
          body: "McKinsey 估计 AI 每年可为地产行业创造 $180B+ 价值；估值模型误差率已从 10–15% 降至 2.8%。",
        },
      },
      callout: {
        label: "同一个平台的五张面孔：",
        text: "本体换对象、Foundry 换流程、Layer 6 换模板——第 2 至第 5 层原封不动。这就是「行业只是模板」的字面含义。",
      },
      sources:
        "来源：物流 AI（行业市场研究，前期分析沿用）；PwC 智能投顾 AUM 预测；BCG《2026 Global Wealth Report》；DataIntelo《AI in Restaurants Market 2025–2034》；Morgan Stanley Research；Research and Markets《AI in Real Estate》；McKinsey。",
    },
    expansion: {
      eyebrow: "07 · 扩张地图",
      title: "扩张地图：一个内核 × 四大超集群 × 三个阶段",
      lede: "我们按美国 BLS 官方行业分类逐一评估了 ITEM 架构的适配度：54 个行业得分高于 8.0/10。这不意味着 54 个产品——所有高分行业归入四个共享同一交易内核的超集群，按纪律分阶段进入。蓝图是全面的，步子是克制的。",
      clusters: {
        a: {
          title: "Ⓐ 物的移动",
          scope: "货运 · 港口 · 铁路 · 冷链 · 批发",
          statusLabel: "今天已在：",
          status: "ItemChain ✓ · ItemDock · ItemTrade",
        },
        b: {
          title: "Ⓑ 物的作业",
          scope: "数据中心 · 建造 · 设施 · 现场服务 · 公用事业",
          statusLabel: "模板对应：",
          status: "ItemBuild · ItemEstate",
        },
        c: {
          title: "Ⓒ 物的转化",
          scope: "矿产 · 材料 · 制造 · 回收与循环",
          statusLabel: "模板对应：",
          status: "ItemAuto + 后续扩展",
        },
        d: {
          title: "Ⓓ 物的风险",
          scope: "保险 · 质保 · 索赔 · 资本——经济层",
          statusLabel: "优势：",
          status: "索赔发生前就握有物理证据",
        },
      },
      phases: {
        p1: {
          phase: "PHASE 1 · 现在 → Y2",
          title: "先多式联运，再多行业",
          body: "在已验证的货运核心上补齐网络：港口与运输支持（适配 9.8）、海运（9.8）、铁路联运（9.7）。",
          note: "纪律信号：不追新行业，先把 Ⓐ 集群做成完整网络。",
        },
        p2: {
          phase: "PHASE 2 · Y2 → Y3",
          title: "首个相邻操作系统：ItemInfra",
          body: "以 AI 数据中心建设潮为锚（适配 9.7）——美国能源部预计数据中心将占全美用电量 11.8%。一个数据中心项目 = 高价值供应链 + 建造 + 现场服务 + 安防的组合，全部落在 Ⓑ 集群同一内核上。",
        },
        p3: {
          phase: "PHASE 3 · Y3 → Y5",
          title: "物理材料网络：ItemMaterials",
          body: "矿产（9.6）、化工（9.3）、电池与回收（9.2–9.4）——Ⓒ 集群，由监管顺风驱动：欧盟电池护照 2027 年 2 月强制、FDA 食品追溯 2028 年执法。",
        },
      },
      callout: {
        label: "给投资人的一句话：",
        text: "最大的扩张机会不是「更多软件垂直」，而是一个交易内核，治理物理经济中「物」的移动、作业、转化与风险——论点从「货到了吗」升级为「物理世界是否按合同发生了改变、能否证明、价值是否应当转移」。",
      },
    },
    physical: {
      eyebrow: "08 · 物理世界",
      title: "物理世界对接：开放的设备与机器人集成层",
      lede: "对需要物理执行的行业（仓储、餐饮后厨、楼宇巡检、工地），ITEM 通过 Layer 7 的开放协议对接客户已有或选购的任意设备——我们不绑定任何硬件品牌，也不做硬件。硬件是客户的资产，智能与编排是 ITEM 的产品。",
      cards: {
        robots: {
          title: "任意机器人类型",
          body: "AGV/AMR · 机械臂 · 人形 · 四足 · 无人机 · 送餐机器人 · 清洁与巡检机器人——经异构自主层统一调度，多品牌同场协同。",
        },
        protocols: {
          title: "开放协议栈",
          body: "MCP · A2A · REST API · EDI · 事件流 · RTLS · PLC 工业协议——新设备接入是配置动作，不是开发项目。",
        },
        scenarios: {
          title: "行业化的物理场景",
          body: "仓库的叉车与分拣、餐厅的送餐与后厨、楼宇的巡检与安防、工地的监控与测绘——由对应行业模板定义任务语义。",
        },
        proven: {
          title: "验证于最难的场景",
          body: "物流仓储是物理 AI 最复杂的环境（多设备、高吞吐、强实时）。在那里跑通的对接层，迁移到其他行业只会更简单。",
        },
      },
      callout: {
        label: "一句话：",
        text: "ITEM 让每台设备更聪明，并为这份智能持续收费——但设备本身，永远是开放生态。",
      },
    },
    competitive: {
      eyebrow: "09 · 竞争定位",
      title: "竞争定位：知识层 · 流程层 · 运营层",
      lede: "Glean 让企业「更懂自己知道什么」（知识层）；Automation Anywhere 让「现有流程自己跑」（流程层）。两者都是客户现有系统之上的增强层。ITEM 在第三个位置：让运营本身运行在 AI 操作系统上——拥有运营数据模型，并延伸到物理世界。他们增强栈，我们成为栈。",
      axes: { y: "数字 + 物理", x1: "增强现有系统", x2: "成为运营系统" },
      dots: {
        bigtech: { sub: "大厂对左下象限的挤压" },
        glean: { sub: "Work AI · 知识层" },
        aa: { sub: "APA · 流程层（软件 bot）" },
        item: { sub: "运营操作系统 · L2 本体 + L6 模板 + L7 物理" },
      },
      table: {
        head: { dimension: "维度" },
        rows: {
          dataModel: {
            label: "数据模型",
            glean: "文档/人员上下文图谱",
            aa: "流程定义，无业务数据模型",
            item: "业务对象的运营本体 + 数字孪生",
          },
          relation: {
            label: "与客户系统的关系",
            glean: "坐在其上读取（250+ 连接器）",
            aa: "在其界面/API 上自动化",
            item: "成为运营记录系统；L1 & L7 开放集成其余",
          },
          physical: { label: "物理世界", glean: "无", aa: "仅软件「机器人」", item: "真实机器人 + 设备 + PLC（L7）" },
          verticalization: {
            label: "行业化方式",
            glean: "营销分段（同一横向产品）",
            aa: "预置流程方案（AP、KYC、RCM）",
            item: "运营级行业模板（对象 + 流程 + 合规 + 智能体）",
          },
          budget: {
            label: "预算韧性",
            glean: "生产力预算，可削减",
            aa: "流程预算，可替换",
            item: "运营关键：关掉 = 停业（NRR 118% 的底层逻辑）",
          },
        },
      },
      callout: {
        label: "诚实的重叠与应对：",
        text: "中间层（L3–L5 的智能体构建/编排/治理）三家会趋同——Glean 已有「Agent Harness」，AA 刚发布「EnterpriseClaw」（与 Item Harness / ItemClaw 命名撞车，商标核查中）。我们的防御核心在他们不重写 ERP 级软件就到不了的位置：L2 运营本体 + L6 运营模板 + L7 物理执行。竞合姿态：Glean 可作为上下文来源接入 ITEM，而非正面对抗。",
      },
    },
    businessModel: {
      eyebrow: "10 · 商业模型",
      title: "商业模型：平台订阅 × 模板溢价 × 用量增长",
      streams: {
        platform: {
          title: "平台订阅 SaaS/PaaS",
          body: "Layer 2–5 的核心平台与通用应用，按模块与席位订阅——收入的稳定基座。",
        },
        template: {
          title: "行业模板溢价",
          body: "Layer 6 模板按行业授权。垂直方案携带行业知识与合规包，定价高于横向功能。",
        },
        usage: { title: "用量与执行 FaaS", body: "智能体执行、工作流运行、文档处理按量计费——随客户业务量自然增长。" },
        device: { title: "设备智能订阅", body: "接入平台的每台机器人/设备按月订阅智能层——硬件零风险，收入永续。" },
      },
      stats: {
        gartner: { label: "Gartner：2035 年智能体 AI 贡献的企业软件收入（≈30%）——ITEM 的收入结构正对准这条曲线" },
        cagr: { label: "垂直 AI 智能体细分的 CAGR——模板层是全市场增长最快的位置" },
        templates: { value: "N × 模板", label: "每新增一个行业模板：新 TAM、新买家、递减的边际成本——平台经济学的复利结构" },
      },
      callout: {
        label: "扩张飞轮：",
        text: "通用应用降低进入行业的成本 → 行业模板打开垂直溢价 → 客户运营数据回流本体 → 模板越用越准 → 下一个行业更快。",
      },
      sources: "来源：Gartner（智能体 AI 企业软件收入占比）；MarketsandMarkets（垂直智能体 CAGR）。",
    },
    gtm: {
      eyebrow: "11 · 市场进入",
      title: "Land → Expand → Own：在每个行业复用同一套打法",
      phases: {
        land: {
          phase: "PHASE 1 · LAND",
          title: "模板切入",
          body: "用行业模板 + ItemGPT 解决一个高痛点场景：物流的运输执行、餐饮的备货预测、物业的报修工单、投顾的合规文档。",
          note: "数周上线，先赢一个可量化的 ROI。",
        },
        expand: {
          phase: "PHASE 2 · EXPAND",
          title: "通用应用扩张",
          body: "沿 12 个通用应用横向铺开：ItemSupport 接管全渠道服务、ItemPredict 覆盖更多预测、ItemAudit 追回损失、ItemGrow 驱动增长。",
          note: "每个新模块都在同一本体上，扩张是架构性的。",
        },
        own: {
          phase: "PHASE 3 · OWN",
          title: "运营操作系统",
          body: "Foundry 上沉淀客户自己的应用与流程，物理设备接入智能订阅，AI OS 成为全员每天打开的工作台。",
          note: "此时 ITEM 不再是一个供应商，而是客户运营的操作系统。",
        },
      },
      callout: {
        label: "与供应链版的差别只有一个词：",
        text: "Phase 1 的切入模板从「TMS/WMS」变成了「所在行业的那一个」。打法、扩张路径与终局完全一致——因为平台完全一致。",
      },
    },
    finance: {
      eyebrow: "12 · 财务模型 — 假设",
      title: "财务模型假设：收入引擎与成本引擎",
      lede: "本模型仅计入通用版新增行业的收入，不含已在运行的供应链业务线；所有假设锚定 2026 年 SaaS/AI 行业基准，宁可保守。Y1 = 通用版 GTM 启动后的第一个 12 个月。",
      cards: {
        pricing: {
          title: "客户与定价",
          body: "混合 ACV 起步 $26 万（企业级 $50 万+ / 中型市场 $15 万），随模块扩张升至 Y5 的 $41 万。客户数：22 → 60 → 130 → 230 → 370。NRR 假设 118%——正是 $10 万+ ACV 企业级 SaaS 的行业中位数，非激进假设。",
        },
        margin: {
          title: "毛利路径（诚实版）",
          body: "AI 原生公司的推理成本压低早期毛利（LLM 原生中位仅 ~52%，Bessemer 报告规模化 AI 公司均值 25%）。我们从 62% 起步、Y5 到 76%——改善的引擎正是 Blackbox Router 的模型路由与规模化。传统 SaaS 为 77–81%，我们向其收敛。",
        },
        cost: {
          title: "成本结构",
          body: "全负担人均成本 $18 万/年（薪酬 + 福利 + 设备）。员工数 78 → 310。研发前置（模板工厂），销售费用随收入爬坡。收入按期初期末 ARR 均值确认，避免用期末 ARR 虚增当年收入。",
        },
      },
      table: {
        head: { engine: "收入引擎" },
        rows: { customers: "客户数（期末）", acv: "混合 ACV（$K）", arr: "期末 ARR（$M）", growth: "ARR 同比增速" },
      },
      sources:
        "基准来源：Benchmarkit 2025 数据集（企业级 NRR 中位 118%、毛利 77–81%）；Bessemer《State of the Cloud 2026》（AI 公司毛利）；SaaS Capital / ChartMogul（增速分布）。",
    },
    pnl: {
      eyebrow: "13 · 财务模型 — 损益",
      title: "五年损益：从 -$18M 到 +$16M EBITDA",
      rows: {
        revenue: "确认收入（ARR 均值法）",
        grossMargin: "毛利率",
        grossProfit: "毛利",
        rnd: "研发（模板工厂 + 平台）",
        sm: "销售与市场",
        ga: "管理与行政",
        opex: "运营费用合计",
        ebitda: "EBITDA",
        ebitdaMargin: "EBITDA 率",
        headcount: "员工数",
      },
      chartNote: "EBITDA（$M）· 亏损峰值出现在 Y2–Y3 的 GTM 扩张期；Y4 起销售效率与毛利改善同时发力。",
      callout: {
        label: "投资人视角的三个读数：",
        points: [
          "① 亏损由投入节奏驱动，而非单位经济恶化（毛利逐年上行）。",
          "② OpEx 占收入比从 690% 降至 63%，经营杠杆真实存在。",
          "③ Y5 同时满足高增长（+78%）与正利润（+14%）——Rule of 40 ≈ 98。",
        ],
      },
    },
    funding: {
      eyebrow: "14 · 财务模型 — 融资与盈亏平衡",
      title: "融资计划与盈亏平衡：总需 $95M，第 4 年 Q4 打平",
      rounds: {
        a: {
          name: "启动资金 · SERIES A",
          when: "通用版发布时 · 覆盖至第 18–20 个月",
          alloc: {
            rnd: "研发与模板工厂 45%（$15.8M）：平台加固 + 首批 3 个新行业模板",
            gtm: "GTM 28%（$9.8M）：3 个垂直的销售与市场团队",
            compute: "计算与基础设施 15%（$5.2M）",
            ga: "认证合规 + G&A 12%（$4.2M）",
          },
        },
        b: {
          name: "追加投资 · SERIES B",
          when: "第 18–22 个月 · ARR $12–16M 时点（AI 原生私募倍数 25–30× ARR）",
          alloc: {
            gtm: "GTM 规模化 50%（$30M）",
            templates: "模板扩张 +5 个行业 20%（$12M）",
            intl: "国际化 12%（$7.2M）",
            compute: "计算 10%（$6M）",
            buffer: "缓冲 8%（$4.8M）",
          },
        },
      },
      table: { rows: { ebitda: "当年 EBITDA", burn: "累计消耗", cash: "期末现金（A $35M + B $60M）" } },
      breakeven: "单月 EBITDA 打平：第 4 年 Q4 ｜ 第 5 年全年转正 +$16M ｜ 峰值资金缺口 $78.3M（Y4）｜ 最低现金垫 $16.7M",
      callout: {
        label: "为什么是两轮而不是一轮：",
        text: "A 轮只为「用 3 个新行业复现供应链的验证」定价；B 轮在 ARR $12–16M、模板机制二次验证后再融——届时按 AI 原生 25–30× 倍数定价，创始人稀释最小化。若 B 轮市场恶化，削减 GTM 扩张即可把打平点自力推进（见下方情景分析）。",
      },
    },
    metrics: {
      eyebrow: "15 · 财务模型 — 投资人指标",
      title: "投资人指标仪表盘：每一项对照 2026 行业基准",
      kpis: {
        payback: { term: "CAC 回收期", note: "Y1→Y5。基准：企业级中位 18–24 个月，精英 <12——Y3 即达 15，Y5 进入精英区" },
        ltv: { term: "LTV:CAC", note: "（五年期 · NRR 118%）。基准：健康 3:1，企业级均值 4.5:1，顶级 4–6:1" },
        nrr: { term: "NRR", note: "= 企业级行业中位数；>120% 的公司估值高 2.3×——多模块架构是我们冲击 120%+ 的结构性抓手" },
        burn: {
          term: "Burn Multiple",
          note: "Y1→Y4（每 $1 新 ARR 的净消耗）。基准：>$10M ARR 后 >3 即为问题，<1 为顶级——83% 的后期投资人视其为核心指标",
        },
        magic: { term: "Magic Number", note: "（Y3：新增 ARR / 销售费用）。基准：中位 0.7，≥1.0 优秀" },
        rule40: { term: "Rule of 40", note: "（Y5：增长 78% + 利润率 14%）。基准：>40 及格，>60 享 2–3× 估值溢价" },
        arrPerEmployee: { term: "人均 ARR", note: "（Y5：$151.7M / 310 人）——资本效率的最直观读数" },
        expansionCost: {
          term: "扩张 ARR 获取成本",
          note: "vs 新客 $2.00（行业数据）——模板架构让扩张收入占比持续上升，混合获客成本结构性下降",
        },
      },
      scenarios: {
        head: { scenario: "情景分析", arr: "Y5 ARR", breakeven: "打平时点", capital: "总资本需求", delta: "关键差异" },
        rows: {
          conservative: {
            name: "保守",
            breakeven: "第 5 年末",
            capital: "~$115M（需 C 轮 $25M）",
            delta: "客户 -25% · ACV -15% · 毛利改善放缓",
          },
          base: { name: "基准（本模型）", breakeven: "第 4 年 Q4", capital: "$95M", delta: "如前文假设" },
          aggressive: {
            name: "乐观",
            breakeven: "第 4 年 Q1",
            capital: "~$70M",
            delta: "供应链存量客户交叉销售 + 伙伴渠道提前起量",
          },
        },
      },
      sources:
        "基准来源：Benchmarkit 2025（CAC 回收 / NRR / 毛利 / 扩张成本 $1 vs $2）；SaaS Capital / ScaleXP（burn multiple、投资人调研）；KeyBanc / ICONIQ（NRR 与估值关系）；Phoenix Strategy Group（Rule of 40 溢价）。",
    },
    vision: {
      eyebrow: "16 · 愿景",
      title: {
        l1: "下一个千亿美元级企业软件公司，",
        l2pre: "是一个",
        l2accent: "通用的 AI 操作系统",
        l3pre: "加上",
        l3accent: "一个行业模板库",
        l3post: "。",
      },
      subtitle:
        "横向平台有规模没有行业深度，垂直方案有深度没有平台经济学。ITEM AI 同时拥有两者：五层已验证的通用内核（Layer 2–6），一个从供应链开始、向所有行业展开的模板库，以及两端完全开放的集成边界（Layer 1 & 7）。",
      tags: { platform: "一个平台", industries: "N 个行业", proven: "供应链 · 已验证", next: "你的行业 · 下一个" },
      meta: "ITEM AI · GENERAL ENTERPRISE EDITION · product_general_v4",
    },
  },

  en: {
    cover: {
      tag: "GENERAL ENTERPRISE EDITION · V4",
      titleMain: "The General Enterprise AI Operating System",
      tagline: "The Enterprise AI Operating System — for Every Industry",
      subtitle:
        "An AI operating system architecture already validated and running in production in supply chain — now open to every industry as “one platform + pluggable industry templates.” Same ontology, same AI runtime, same operations platform: swap the industry template and deploy into any vertical.",
      industries: {
        proven: "✓ Supply Chain & Logistics · Proven in Production",
        financial: "Financial Advisory",
        restaurant: "Restaurant Operations",
        property: "Property Management",
        development: "Real Estate Development",
        healthcare: "Healthcare",
        manufacturing: "Manufacturing & Auto",
        retail: "Retail & Commerce",
        more: "+ More Templates",
      },
      meta: "FROM DIGITAL TO PHYSICAL AI · ONE PLATFORM · EVERY INDUSTRY",
      scrollHint: "Scroll to read the full deck",
    },
    repositioning: {
      eyebrow: "01 · The Repositioning",
      title: "From “Supply-Chain AI” to a General AI Operating System",
      lede: "ITEM AI is not a supply-chain software company. Supply chain is simply our first industry template — a complete loop from data ingestion, ontology modeling, and agent orchestration to physical device control, already running in real enterprise production. Over 80% of the architecture is industry-agnostic: swap the business objects and industry rules, and the same platform runs a financial advisory firm, a restaurant chain, or a real estate developer.",
      cards: {
        proven: {
          title: "Proven, Not Promised",
          body: "Gartner forecasts over 40% of agentic AI projects will be canceled by 2027; only 23% of organizations have actually scaled agentic systems into production. The market isn't short on AI concepts — it's short on complete templates proven to run. ITEM's supply-chain deployment is that proof.",
        },
        template: {
          title: "An Industry = a Template, Not a Rewrite",
          body: "The ontology layer, AI runtime, operations platform, and general apps are fully reused. Entering a new industry = loading a new set of business objects + workflows + compliance rules + industry agents — compressing delivery from years of development to weeks of configuration.",
        },
        vertical: {
          title: "Vertical AI Is the Fastest-Growing Segment",
          body: "Across the AI-agent market, vertical industry agents are the fastest-growing segment (~62.7% CAGR). A vendor structured as “one platform × N industry templates” earns vertical-AI premiums at horizontal-platform cost.",
        },
      },
      callout: {
        label: "Positioning in one line:",
        text: "ITEM AI = a general enterprise AI operating system, plus a library of pluggable industry templates. Supply chain is the first — and the one already proven.",
      },
      sources:
        "Sources: Gartner (agentic project cancellation forecast / production adoption rate); MarketsandMarkets, AI Agents Market 2025–2030 (vertical-agent CAGR).",
    },
    problem: {
      eyebrow: "02 · The Universal Problem",
      title: "Every Industry Pays the Same Three Hidden Taxes",
      lede: "Whether it's a logistics operator, an advisory firm, a restaurant group, or a developer, operational inefficiency comes from the same root: fragmented systems + siloed data + manually driven workflows. Different industries, identical tax bill.",
      taxes: {
        compliance: {
          title: "① The Compliance Tax",
          body: "Fines, audits, claims, regulatory filings, SLA breaches, license upkeep. OTIF penalties in supply chain, regulatory reporting in finance, food-safety inspections in restaurants, permitting in real estate — different forms, identical cost mechanics.",
        },
        data: {
          title: "② The Data Tax",
          body: "Bad forecasts, disconnected systems, no visibility, delayed decisions. One system per department, one silo per system. The hidden cost of “stitching the data together” often exceeds the software licenses themselves.",
        },
        operations: {
          title: "③ The Operations Tax",
          body: "Manual processes, repeated work, expensive coordination. In multi-step knowledge work, up to 86% of human task time can be eliminated by agents (Google Cloud early-adopter data); 88% of early adopters report positive ROI.",
        },
      },
      stats: {
        service: { label: "Customer-service cost reduction from AI agents (measured in enterprise deployments)" },
        backOffice: { label: "Peak reduction in procurement / back-office operating spend (enterprise agentic AI cases)" },
        readiness: {
          label: "Higher success rate for autonomous workflows at organizations with governance, data, and integration foundations (IBM) — exactly the capabilities “platform + template” delivers out of the box",
        },
      },
      sources:
        "Sources: Google Cloud agent ROI data; MarketsandMarkets, Enterprise Agentic AI Market; IBM autonomous-workflow readiness research.",
    },
    whyNow: {
      eyebrow: "03 · Why Now",
      title: "The Market Is Switching from Software to Agents — the Window Is Now",
      stats: {
        ai: { sub: "→ $3.64T (2033) · 29.3% CAGR", label: "Global AI market (2026) — nearly 6× in seven years" },
        agentic: { sub: "→ $139.2B (2034) · 40.5% CAGR", label: "Global agentic AI market (2026)" },
        share: {
          sub: "≈ $450B · GARTNER 2035",
          label: "Share of enterprise software revenue from agentic AI by 2035 — up from just 2% in 2025",
        },
        embed: {
          sub: "END-2026 · vs <5% IN 2025",
          label: "Enterprise apps embedding task-specific agents — ~8× growth in a single year",
        },
        spend: { sub: "IDC · 2029", label: "Global AI spend — exceeding 26% of all IT spending" },
        agents: { value: "1B+", sub: "IDC · 2029", label: "AI agents in use worldwide — ~40× the 2025 count" },
        ceo: {
          sub: "CEO SURVEY",
          label: "CEOs already integrating agents into core operations — faster uptake than the RPA wave",
        },
        scaled: {
          sub: "SCALED-TO-PRODUCTION RATE",
          label: "Organizations that have actually scaled agentic systems — a massive deployment gap, and the opening for proven templates",
        },
      },
      callout: {
        label: "The takeaway:",
        text: "Exploding demand (40% CAGR) coexists with failed deployment (23% production rate, 40% of projects headed for cancellation). Buying behavior is shifting from “AI capability” to “a proven, industry-shaped AI operations template” — which is exactly ITEM's product form.",
      },
      sources:
        "Sources: MarketsandMarkets, Artificial Intelligence Market 2026–2033; Fortune Business Insights, Agentic AI Market; Gartner; IDC; Mordor Intelligence.",
    },
    architecture: {
      eyebrow: "04 · Platform Architecture",
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
        core: "ITEM core products (Layers 2–6) — expanded layer by layer below",
        integ: "Open integration layers (Layers 1 & 7) — connect to what the customer already has; never rebuilt",
      },
    },
    layer2: {
      title: "Data & Semantic Intelligence — the Platform's Moat",
      lede: "This layer answers one question: how does AI understand your business? In any industry, operations consist of objects + relationships + rules + state. ITEM models them as a governed, real-time semantic layer — every upper-layer application shares one business truth, a structural advantage no point AI tool can replicate.",
      cards: {
        ontology: {
          body: "A governed knowledge graph: business objects, entity relationships, rules engine, state management. Industry-agnostic engine, industry-specific objects. In supply chain the objects are orders/shipments/warehouses; in advisory, clients/portfolios/compliance rules; in restaurants, stores/menus/shifts; in real estate, properties/leases/work orders. The engine never changes — the template does.",
        },
        graphrag: {
          body: "Graph-based contextual retrieval. Every AI inference is anchored to the enterprise's real data and business relationships rather than generic corpora — suppressing hallucination at the root and making every agent action explainable and auditable.",
        },
        twin: {
          body: "A live mirror of the business: each object's current state, history, and predicted trajectory. Twin a logistics network in supply chain, store operations in restaurants, a building portfolio in real estate — one twin infrastructure.",
        },
      },
      callout: {
        label: "Why this layer is the moat:",
        text: "Every operational decision settles back into the ontology. The longer it runs, the deeper the business graph, the higher the switching cost. Competitors can copy features — they cannot copy the operational knowledge a customer has accumulated in the ontology.",
      },
    },
    layer3: {
      title: "AI Runtime — Secure, Governed, Multi-Model",
      lede: "This layer answers: how does AI execute safely inside the enterprise? Foundation models turn over every quarter — no enterprise should be locked to one. ITEM's runtime turns model choice into a routable, governed, auditable infrastructure decision.",
      cards: {
        aip: {
          body: "The enterprise AI runtime: multi-model orchestration, agent runtime, autonomous workflows, human-in-the-loop governance, prompt/version management, permissions & compliance auditing, tool-calling framework, memory & reasoning. Critical for regulated industries (finance, healthcare): every agent action carries a full audit trail.",
        },
        router: {
          body: "LLM routing and arbitration: automatically selects among OpenAI, Claude, Gemini, open-source, and the customer's private models by task type, cost, latency, and compliance. Customers get permanent neutrality at the model layer — new models plug in on release, zero migration cost.",
        },
        harness: {
          body: "Autonomous deploy, monitor, update, and rollback across cloud, on-prem, air-gapped, and edge — with built-in compliance monitoring and canary releases. This is why the same platform passes security review at a cloud-native startup and a regulated bank alike.",
        },
      },
      stats: {
        models: { label: "Routable foundation models (OpenAI · Claude · Gemini · Grok · DeepSeek · Qwen + private models)" },
        envs: { value: "4", label: "Deployment environments covered: public cloud · private cloud · on-prem · edge/air-gapped" },
        audit: { label: "Agent-action audit coverage — governance is runtime default, not an add-on" },
      },
    },
    layer4: {
      title: "Enterprise Operations Platform — Where Humans + AI Work Together",
      lede: "This layer answers: how do business teams actually use it? Models and ontology are the back office; the enterprise needs a front office — to build applications, orchestrate processes, and let humans and agents collaborate in one workspace.",
      cards: {
        foundry: {
          body: "The ontology-powered app & process factory: data integration, low-code/no-code app builder, workflow orchestration, real-time event processing, human+AI collaboration. Industry templates are built on Foundry — the supply-chain, advisory, and restaurant templates are essentially packaged Foundry apps + ontology objects + agent configurations. Which means customers and partners can build their own extensions with the same tools.",
        },
        aios: {
          body: "The unified operations workspace: cross-functional workflows, decision intelligence, enterprise search, real-time analytics, embedded copilots, dashboards, notifications, work management. For frontline staff, it's the screen they open every day; for leadership, a real-time cockpit; for agents, the place where tasks are handed to humans. Human-in-the-loop is OS-level design, not a pop-up.",
        },
      },
      callout: {
        label: "What this means for delivery:",
        text: "A new industry template ≈ a set of prebuilt Foundry apps and processes. This is why “new industry = weeks of configuration, not years of development” holds at the engineering level.",
      },
    },
    layer5: {
      title: "General AI Applications — 12 Named Products Reused Across Industries",
      lede: "These 12 products belong to no single industry. Deciding, executing, predicting, seeing, hearing, supporting, growing — every industry needs them. Hardened in supply-chain production, they are reused with zero rework when switching verticals.",
      products: {
        gpt: {
          tag: "AI FOR EVERY DECISION",
          desc: "Natural-language ops interface — command the whole platform in one sentence",
        },
        claw: { tag: "EXECUTION WITHOUT FRICTION", desc: "Multi-agent workflow executor — from suggestion to execution" },
        flow: { tag: "DESIGN. AUTOMATE. SCALE.", desc: "Visual AI workflow builder" },
        sense: { tag: "SEE EVERYTHING. INSTANTLY.", desc: "Real-time visibility + digital-twin cockpit" },
        predict: {
          tag: "PREDICT WHAT'S NEXT",
          desc: "General forecasting engine — demand / cash flow / footfall / resources",
        },
        ops: { tag: "OPERATIONS THAT RUN THEMSELVES", desc: "Autonomous operations and continuous optimization" },
        audit: { tag: "FIND WHAT YOU'RE LOSING", desc: "Billing-error detection, compliance audit, cost recovery" },
        vision: { tag: "SEE WHAT OTHERS MISS", desc: "Computer vision — security, quality inspection, site monitoring" },
        voice: { tag: "OPERATE HANDS-FREE", desc: "Voice AI — hands-free frontline work and inbound calls" },
        support: { tag: "EVERY CHANNEL. ONE THREAD.", desc: "Omnichannel ticketing: email · messaging · SMS · phone" },
        grow: { tag: "PIPELINE THAT NEVER SLEEPS", desc: "GTM AI — SDR/BDR · SEO/AEO/GEO · content generation" },
        doc: {
          tag: "DOCUMENTS THAT PROCESS THEMSELVES",
          desc: "Document automation — reading and generating contracts, invoices, reports",
        },
      },
      callout: {
        label: "Proof of generality:",
        text: "ItemSupport can handle a delayed-shipment ticket, a tenant repair request, or a client inquiry; ItemPredict can forecast inventory, restaurant footfall, or property absorption. Objects come from the ontology; capability comes from the product.",
      },
    },
    layer6: {
      title: "Industry Templates — 10 Pluggable Vertical Solutions",
      lede: "Each template = industry ontology objects + prebuilt workflows + compliance rule pack + industry agents + system connectors. The supply-chain template is proven in production — it validates the entire template mechanism; other industries replicate it.",
      proven: "✓ PROVEN",
      templates: {
        chain: {
          tag: "SUPPLY CHAIN & LOGISTICS",
          desc: "Full order/transport/warehouse/yard execution — flagship template, live in production",
        },
        dock: { tag: "PORTS & DRAYAGE", desc: "Port, drayage & container operations (supply-chain sub-template)" },
        trade: { tag: "GLOBAL TRADE", desc: "Tariff classification, cross-border compliance, trade intelligence" },
        fin: {
          tag: "FINANCIAL ADVISORY",
          desc: "Advisory & wealth: client profiling, portfolio analytics, regulatory filings, advisor copilot",
        },
        dine: {
          tag: "RESTAURANT OPERATIONS",
          desc: "Restaurant ops: scheduling, prep forecasting, waste control, multi-store cockpit",
        },
        estate: {
          tag: "PROPERTY MANAGEMENT",
          desc: "Property mgmt: leases, tenant services, repair tickets, energy & asset operations",
        },
        build: {
          tag: "REAL ESTATE DEVELOPMENT",
          desc: "Development: project schedules, vendors, cost control, sales absorption",
        },
        health: { tag: "HEALTHCARE OPS", desc: "Healthcare ops & supply: cold chain, expiry, compliance traceability" },
        auto: { tag: "MANUFACTURING & AUTO", desc: "Manufacturing & auto: JIT sequencing, supplier risk, line coordination" },
        retail: { tag: "RETAIL & COMMERCE", desc: "Retail & commerce: omnichannel orders, inventory, returns, membership ops" },
      },
      callout: {
        label: "The business meaning of templates:",
        text: "Horizontal platforms compete on features; vertical templates compete on industry knowledge. ITEM carries N templates on one platform — each new industry at declining marginal cost, in the fastest-growing segment of the entire agent market (~62.7% CAGR).",
      },
    },
    catalog: {
      eyebrow: "05 · Product Catalog",
      title: "All 22 Named Products: 12 General Apps × 10 Industry Templates",
      general: {
        tag: "GENERAL APPS",
        subtitle: "Reused across industries · Layer 5",
        count: "12 PRODUCTS",
        note: "Needed by every industry, zero rework when switching verticals.",
      },
      vertical: {
        tag: "INDUSTRY TEMPLATES",
        subtitle: "Pluggable vertical solutions · Layer 6",
        count: "10 TEMPLATES",
        note: "Packaged industry objects + workflows + compliance + agents.",
        proven: "✓ proven",
      },
      table: {
        head: { dimension: "Dimension", general: "General Apps (12)", templates: "Industry Templates (10)" },
        rows: {
          question: {
            label: "Question answered",
            general: "“What AI capabilities does enterprise operation need?”",
            template: "“How do those capabilities take an industry's shape?”",
          },
          reuse: {
            label: "Reuse model",
            general: "100% cross-industry reuse, ships with the platform",
            template: "Loaded per industry; composable, customizable, partner-buildable",
          },
          economics: {
            label: "R&D economics",
            general: "Built once, cost amortized across all industries",
            template: "First template (supply chain) costs the most; each subsequent one costs less",
          },
          sales: {
            label: "Sales role",
            general: "Core value of the platform subscription",
            template: "The industry wedge and the source of pricing premium",
          },
          validation: {
            label: "Validation status",
            general: "Fully running in supply-chain production",
            template: "ItemChain proven; the rest replicate the proven mechanism",
          },
        },
      },
    },
    verticals: {
      eyebrow: "06 · Vertical Markets",
      title: "Five Priority Verticals: Market Size and Proven Value Anchors",
      items: {
        supply: {
          badge: "✓ PROVEN",
          name: "Supply Chain & Logistics",
          market: "AI-in-logistics market · 2030s",
          basis: "from $20.1B · 25.9% CAGR",
          body: "Early adopters already see ~-15% cost, +35% inventory turns. Birthplace of ITEM's flagship template.",
        },
        fin: {
          name: "Financial Advisory",
          market: "Robo-advisory AUM · 2027 (PwC)",
          basis: "vs $2.5T in 2022",
          body: "BCG 2026: AI-first is now a mandate, not an option in wealth management; AI already drafts financial plans and automates compliance docs.",
        },
        dine: {
          name: "Restaurant Operations",
          market: "AI-in-restaurants market · 2034",
          basis: "from $13.2B in 2025 · 22.6% CAGR",
          body: "AI inventory & forecasting: food cost -8–14%, waste -25–40%, stockouts -60% — net savings of $15K–65K per location per year.",
        },
        estate: {
          name: "Property Management",
          market: "AI efficiency gains in real estate · 2030",
          basis: "(Morgan Stanley)",
          body: "37% of REIT/CRE tasks are automatable — concentrated in management, sales, admin support, and maintenance.",
        },
        build: {
          name: "Real Estate Development",
          market: "AI-in-real-estate market · 2029",
          basis: "from $303B in 2025 · 34.4% CAGR",
          body: "McKinsey estimates AI can add $180B+ per year to real estate; valuation-model error is down from 10–15% to 2.8%.",
        },
      },
      callout: {
        label: "Five faces of one platform:",
        text: "Swap the ontology objects, swap the Foundry processes, swap the Layer-6 template — Layers 2–5 stay untouched. That is the literal meaning of “an industry is just a template.”",
      },
      sources:
        "Sources: AI-in-logistics (industry research, carried from prior analysis); PwC robo-advisory AUM forecast; BCG 2026 Global Wealth Report; DataIntelo, AI in Restaurants Market 2025–2034; Morgan Stanley Research; Research and Markets, AI in Real Estate; McKinsey.",
    },
    expansion: {
      eyebrow: "07 · Expansion Map",
      title: "The Expansion Map: One Kernel × Four Superclusters × Three Phases",
      lede: "We scored ITEM's architectural fit against the official U.S. BLS industry taxonomy, industry by industry: 54 industries score above 8.0/10. That does not mean 54 products — every qualifying industry rolls up into four superclusters sharing one transaction kernel, entered in disciplined phases. The blueprint is comprehensive; the steps are restrained.",
      clusters: {
        a: {
          title: "Ⓐ Movement of Things",
          scope: "Freight · ports · rail · cold chain · wholesale",
          statusLabel: "Live today:",
          status: "ItemChain ✓ · ItemDock · ItemTrade",
        },
        b: {
          title: "Ⓑ Work on Things",
          scope: "Data centers · construction · facilities · field service · utilities",
          statusLabel: "Mapped templates:",
          status: "ItemBuild · ItemEstate",
        },
        c: {
          title: "Ⓒ Transformation of Things",
          scope: "Mining · materials · manufacturing · recycling & circularity",
          statusLabel: "Mapped templates:",
          status: "ItemAuto + future expansion",
        },
        d: {
          title: "Ⓓ Risk on Things",
          scope: "Insurance · warranty · claims · capital — the economic layer",
          statusLabel: "Edge:",
          status: "Holding the physical evidence before the claim occurs",
        },
      },
      phases: {
        p1: {
          phase: "PHASE 1 · NOW → Y2",
          title: "Multimodal Before Multi-Industry",
          body: "Complete the network on the proven freight core: ports & transport support (fit 9.8), maritime (9.8), rail & intermodal (9.7).",
          note: "The discipline signal: no new industries until Cluster Ⓐ is a complete network.",
        },
        p2: {
          phase: "PHASE 2 · Y2 → Y3",
          title: "First Adjacent OS: ItemInfra",
          body: "Anchored by the AI data-center buildout (fit 9.7) — the U.S. DOE projects data centers at 11.8% of national electricity use. One data-center project = high-value supply chain + construction + field service + security, all on Cluster Ⓑ's shared kernel.",
        },
        p3: {
          phase: "PHASE 3 · Y3 → Y5",
          title: "The Materials Network: ItemMaterials",
          body: "Mining (9.6), chemicals (9.3), batteries & recycling (9.2–9.4) — Cluster Ⓒ, driven by regulatory tailwinds: the EU battery passport becomes mandatory in Feb 2027, FDA food traceability enforcement in 2028.",
        },
      },
      callout: {
        label: "The one-liner for investors:",
        text: "The biggest expansion opportunity is not “more software verticals” — it is one transaction kernel governing the movement, work, transformation, and risk of physical things. The thesis upgrades from “did the freight arrive?” to “did the physical world change as contracted, can we prove it, and should value move?”",
      },
    },
    physical: {
      eyebrow: "08 · Physical World",
      title: "Connecting the Physical World: an Open Device & Robot Integration Layer",
      lede: "For industries that need physical execution (warehouses, restaurant kitchens, building patrols, construction sites), ITEM connects to any device the customer owns or buys through Layer 7's open protocols — we bind to no hardware brand and build no hardware. Hardware is the customer's asset; intelligence and orchestration are ITEM's product.",
      cards: {
        robots: {
          title: "Any Robot Type",
          body: "AGV/AMR · robotic arms · humanoids · quadrupeds · drones · food-service robots · cleaning & inspection robots — unified by the heterogeneous-autonomy layer; multiple brands coordinated in one site.",
        },
        protocols: {
          title: "Open Protocol Stack",
          body: "MCP · A2A · REST API · EDI · event streams · RTLS · industrial PLC — onboarding a new device is a configuration step, not a development project.",
        },
        scenarios: {
          title: "Industry-Shaped Physical Scenarios",
          body: "Forklifts and sortation in warehouses; delivery and kitchen in restaurants; patrol and security in buildings; monitoring and surveying on sites — task semantics defined by each industry template.",
        },
        proven: {
          title: "Proven in the Hardest Setting",
          body: "Warehousing is physical AI's most demanding environment (many devices, high throughput, hard real-time). An integration layer proven there only gets easier in other industries.",
        },
      },
      callout: {
        label: "In one line:",
        text: "ITEM makes every device smarter and charges for that intelligence continuously — while the devices themselves remain an open ecosystem, forever.",
      },
    },
    competitive: {
      eyebrow: "09 · Competitive Positioning",
      title: "Competitive Positioning: Knowledge Layer · Process Layer · Operations Layer",
      lede: "Glean helps an enterprise “know what it knows” (the knowledge layer); Automation Anywhere makes “existing processes run themselves” (the process layer). Both are augmentation layers on top of the customer's existing systems. ITEM occupies a third position: the operation itself runs on an AI operating system — owning the operational data model and extending into the physical world. They augment the stack; we become the stack.",
      axes: { y: "DIGITAL + PHYSICAL", x1: "AUGMENT THE STACK", x2: "OWN THE OPERATION" },
      dots: {
        bigtech: { sub: "Big-tech pressure on this quadrant" },
        glean: { sub: "Work AI · knowledge layer" },
        aa: { sub: "APA · process layer (software bots)" },
        item: { sub: "Operations OS · L2 ontology + L6 templates + L7 physical" },
      },
      table: {
        head: { dimension: "Dimension" },
        rows: {
          dataModel: {
            label: "Data model",
            glean: "Document & people context graph",
            aa: "Process definitions; no business data model",
            item: "Operational ontology of business objects + digital twin",
          },
          relation: {
            label: "Relation to customer systems",
            glean: "Sits on top, reads (250+ connectors)",
            aa: "Automates on top via UI / API",
            item: "Becomes the operational system of record; L1 & L7 integrate the rest",
          },
          physical: {
            label: "Physical world",
            glean: "None",
            aa: "Software “bots” only",
            item: "Real robots + devices + PLC (L7)",
          },
          verticalization: {
            label: "Verticalization",
            glean: "Marketing segments of one horizontal product",
            aa: "Prebuilt process solutions (AP, KYC, RCM)",
            item: "Operations-grade industry templates (objects + workflows + compliance + agents)",
          },
          budget: {
            label: "Budget resilience",
            glean: "Productivity budget — cuttable",
            aa: "Process budget — replaceable",
            item: "Operations-critical: switching off = stopping the business (the logic behind 118% NRR)",
          },
        },
      },
      callout: {
        label: "The honest overlap, and the answer:",
        text: "The middle layers (L3–L5 agent building / orchestration / governance) will converge across all three — Glean already ships an “Agent Harness,” and AA just launched “EnterpriseClaw” (name collisions with Item Harness / ItemClaw; trademark review underway). Our defensible core sits where neither can go without rebuilding ERP-class software: the L2 operational ontology + L6 operational templates + L7 physical execution. Coopetition stance: Glean plugs into ITEM as a context source rather than a head-on rival.",
      },
    },
    businessModel: {
      eyebrow: "10 · Business Model",
      title: "Business Model: Platform Subscription × Template Premium × Usage Growth",
      streams: {
        platform: {
          title: "Platform Subscription (SaaS/PaaS)",
          body: "Layers 2–5 core platform and general apps, subscribed by module and seat — the stable revenue base.",
        },
        template: {
          title: "Industry Template Premium",
          body: "Layer-6 templates licensed per industry. Vertical solutions carry industry knowledge and compliance packs — priced above horizontal features.",
        },
        usage: {
          title: "Usage & Execution (FaaS)",
          body: "Agent execution, workflow runs, and document processing billed by usage — growing naturally with the customer's volume.",
        },
        device: {
          title: "Device Intelligence Subscription",
          body: "Every connected robot/device subscribes monthly to the intelligence layer — zero hardware risk, perpetual revenue.",
        },
      },
      stats: {
        gartner: {
          label: "Gartner: agentic AI's contribution to enterprise software revenue by 2035 (~30%) — ITEM's revenue mix is aimed straight at this curve",
        },
        cagr: { label: "CAGR of the vertical AI-agent segment — the template layer sits in the market's fastest-growing position" },
        templates: {
          value: "N × Templates",
          label: "Each new industry template: new TAM, new buyers, declining marginal cost — the compounding structure of platform economics",
        },
      },
      callout: {
        label: "The expansion flywheel:",
        text: "General apps lower the cost of entering an industry → templates unlock vertical premiums → customer operating data flows back into the ontology → templates get sharper with use → the next industry gets faster.",
      },
      sources:
        "Sources: Gartner (agentic AI share of enterprise software revenue); MarketsandMarkets (vertical-agent CAGR).",
    },
    gtm: {
      eyebrow: "11 · Go-To-Market",
      title: "Land → Expand → Own: the Same Playbook, Reused in Every Industry",
      phases: {
        land: {
          phase: "PHASE 1 · LAND",
          title: "Land with the Template",
          body: "Use the industry template + ItemGPT on one high-pain scenario: transport execution in logistics, prep forecasting in restaurants, repair ticketing in property, compliance docs in advisory.",
          note: "Live in weeks; win one quantifiable ROI first.",
        },
        expand: {
          phase: "PHASE 2 · EXPAND",
          title: "Expand with General Apps",
          body: "Roll out across the 12 general apps: ItemSupport takes over omnichannel service, ItemPredict covers more forecasts, ItemAudit recovers losses, ItemGrow drives pipeline.",
          note: "Every new module sits on the same ontology — expansion is architectural.",
        },
        own: {
          phase: "PHASE 3 · OWN",
          title: "Own the Operating System",
          body: "The customer's own apps and processes settle onto Foundry, physical devices join the intelligence subscription, and AI OS becomes the workspace everyone opens daily.",
          note: "At that point ITEM is no longer a vendor — it is the customer's operating system.",
        },
      },
      callout: {
        label: "Only one word differs from the supply-chain edition:",
        text: "Phase 1's landing template changes from “TMS/WMS” to “the one for your industry.” The playbook, expansion path, and endgame are identical — because the platform is identical.",
      },
    },
    finance: {
      eyebrow: "12 · Financial Model — Assumptions",
      title: "Model Assumptions: the Revenue Engine and the Cost Engine",
      lede: "This model counts only new-vertical revenue from the General Edition — the running supply-chain line is excluded. Every assumption is anchored to 2026 SaaS/AI benchmarks, erring conservative. Y1 = the first 12 months after General-Edition GTM launch.",
      cards: {
        pricing: {
          title: "Customers & Pricing",
          body: "Blended ACV starts at $260K (enterprise $500K+ / mid-market $150K), rising to $410K by Y5 via module expansion. Customers: 22 → 60 → 130 → 230 → 370. NRR assumed at 118% — exactly the industry median for $100K+ ACV enterprise SaaS, not an aggressive bet.",
        },
        margin: {
          title: "Gross-Margin Path (the Honest One)",
          body: "Inference cost depresses early AI-native margins (LLM-native median ~52%; Bessemer reports scaling AI companies averaging 25%). We start at 62% and reach 76% by Y5 — the improvement engine is Blackbox Router's model routing plus scale. Traditional SaaS runs 77–81%; we converge toward it.",
        },
        cost: {
          title: "Cost Structure",
          body: "Fully loaded cost per head: $180K/yr (comp + benefits + equipment). Headcount 78 → 310. R&D front-loaded (the template factory); S&M ramps with revenue. Revenue recognized as the average of opening and closing ARR — no inflating the year with exit ARR.",
        },
      },
      table: {
        head: { engine: "Revenue Engine" },
        rows: {
          customers: "Customers (exit)",
          acv: "Blended ACV ($K)",
          arr: "Exit ARR ($M)",
          growth: "ARR YoY growth",
        },
      },
      sources:
        "Benchmark sources: Benchmarkit 2025 dataset (enterprise NRR median 118%, gross margin 77–81%); Bessemer State of the Cloud 2026 (AI-company margins); SaaS Capital / ChartMogul (growth distributions).",
    },
    pnl: {
      eyebrow: "13 · Financial Model — P&L",
      title: "Five-Year P&L: from –$18M to +$16M EBITDA",
      rows: {
        revenue: "Recognized revenue (avg-ARR)",
        grossMargin: "Gross margin",
        grossProfit: "Gross profit",
        rnd: "R&D (template factory + platform)",
        sm: "Sales & marketing",
        ga: "G&A",
        opex: "Total OpEx",
        ebitda: "EBITDA",
        ebitdaMargin: "EBITDA margin",
        headcount: "Headcount",
      },
      chartNote:
        "EBITDA ($M) · Peak losses land in the Y2–Y3 GTM expansion; from Y4, sales efficiency and margin gains compound together.",
      callout: {
        label: "Three reads for an investor:",
        points: [
          "① Losses are driven by investment pacing, not deteriorating unit economics (gross margin rises every year).",
          "② OpEx falls from 690% of revenue to 63% — real operating leverage.",
          "③ Y5 delivers high growth (+78%) and positive margin (+14%) simultaneously — Rule of 40 ≈ 98.",
        ],
      },
    },
    funding: {
      eyebrow: "14 · Financial Model — Funding & Break-Even",
      title: "Funding Plan & Break-Even: $95M Total, Breakeven in Y4 Q4",
      rounds: {
        a: {
          name: "LAUNCH CAPITAL · SERIES A",
          when: "At General-Edition launch · runway to month 18–20",
          alloc: {
            rnd: "R&D & template factory 45% ($15.8M): platform hardening + first 3 new-vertical templates",
            gtm: "GTM 28% ($9.8M): sales & marketing for 3 verticals",
            compute: "Compute & infrastructure 15% ($5.2M)",
            ga: "Certifications + G&A 12% ($4.2M)",
          },
        },
        b: {
          name: "FOLLOW-ON · SERIES B",
          when: "Month 18–22 · at $12–16M ARR (AI-native private multiples: 25–30× ARR)",
          alloc: {
            gtm: "GTM scale-up 50% ($30M)",
            templates: "Template expansion, +5 verticals 20% ($12M)",
            intl: "International 12% ($7.2M)",
            compute: "Compute 10% ($6M)",
            buffer: "Buffer 8% ($4.8M)",
          },
        },
      },
      table: { rows: { ebitda: "EBITDA", burn: "Cumulative burn", cash: "Cash exit (A $35M + B $60M)" } },
      breakeven:
        "Monthly EBITDA breakeven: Y4 Q4 | Full-year positive in Y5 at +$16M | Peak funding gap $78.3M (Y4) | Minimum cash cushion $16.7M",
      callout: {
        label: "Why two rounds instead of one:",
        text: "Series A is priced only for “replicating the supply-chain proof across 3 new verticals”; Series B raises after the template mechanism is validated a second time at $12–16M ARR — priced at AI-native 25–30× multiples, minimizing founder dilution. If the B market turns, cutting GTM expansion pushes to breakeven organically (see the scenario analysis below).",
      },
    },
    metrics: {
      eyebrow: "15 · Financial Model — Investor Metrics",
      title: "The Investor Dashboard: Every Metric vs. 2026 Benchmarks",
      kpis: {
        payback: {
          term: "CAC payback",
          note: "Y1→Y5. Benchmark: enterprise median 18–24 mo, elite <12 — we hit 15 by Y3 and elite territory by Y5",
        },
        ltv: {
          term: "LTV:CAC",
          note: "(5-yr horizon · 118% NRR). Benchmark: healthy 3:1, enterprise avg 4.5:1, top quartile 4–6:1",
        },
        nrr: {
          term: "NRR",
          note: "= the enterprise median; companies >120% command 2.3× valuations — the multi-module architecture is our structural lever toward 120%+",
        },
        burn: {
          term: "Burn multiple",
          note: "Y1→Y4 (net burn per $1 net-new ARR). Benchmark: >3 past $10M ARR is a problem, <1 is elite — 83% of late-stage investors call it critical",
        },
        magic: { term: "Magic number", note: "(Y3: net-new ARR / S&M). Benchmark: median 0.7, ≥1.0 excellent" },
        rule40: {
          term: "Rule of 40",
          note: "(Y5: 78% growth + 14% margin). Benchmark: >40 passes, >60 earns a 2–3× valuation premium",
        },
        arrPerEmployee: {
          term: "ARR per employee",
          note: "(Y5: $151.7M / 310 heads) — the most legible read on capital efficiency",
        },
        expansionCost: {
          term: "Cost per $1 of expansion ARR",
          note: "vs $2.00 for new logos (industry data) — the template architecture keeps shifting mix toward expansion, structurally lowering blended CAC",
        },
      },
      scenarios: {
        head: { scenario: "Scenario", arr: "Y5 ARR", breakeven: "Breakeven", capital: "Total capital", delta: "Key delta" },
        rows: {
          conservative: {
            name: "Conservative",
            breakeven: "End of Y5",
            capital: "~$115M (+$25M Series C)",
            delta: "Customers -25% · ACV -15% · slower margin gains",
          },
          base: { name: "Base (this model)", breakeven: "Y4 Q4", capital: "$95M", delta: "As per the prior sections" },
          aggressive: {
            name: "Aggressive",
            breakeven: "Y4 Q1",
            capital: "~$70M",
            delta: "Cross-sell into the supply-chain base + partner channel ramps early",
          },
        },
      },
      sources:
        "Benchmark sources: Benchmarkit 2025 (CAC payback / NRR / margins / $1-vs-$2 expansion cost); SaaS Capital / ScaleXP (burn multiple, investor surveys); KeyBanc / ICONIQ (NRR-to-valuation curve); Phoenix Strategy Group (Rule of 40 premium).",
    },
    vision: {
      eyebrow: "16 · The Vision",
      title: {
        l1: "The next $100B enterprise software company",
        l2pre: "is a ",
        l2accent: "general AI operating system",
        l3pre: "plus a ",
        l3accent: "library of industry templates",
        l3post: ".",
      },
      subtitle:
        "Horizontal platforms have scale without industry depth; vertical solutions have depth without platform economics. ITEM AI holds both: a proven five-layer general core (Layers 2–6), a template library that starts in supply chain and unfolds into every industry, and fully open integration boundaries at both ends (Layers 1 & 7).",
      tags: { platform: "One Platform", industries: "N Industries", proven: "Supply Chain · Proven", next: "Your Industry · Next" },
      meta: "ITEM AI · GENERAL ENTERPRISE EDITION · product_general_v4",
    },
  },

  ja: {
    cover: {
      tag: "汎用エンタープライズ版 · V4",
      titleMain: "汎用エンタープライズ AI オペレーティングシステム",
      tagline: "あらゆる業界に対応するエンタープライズ AI オペレーティングシステム",
      subtitle:
        "サプライチェーン業界で検証され、すでに本番稼働している AI オペレーティングシステムのアーキテクチャを、「プラットフォーム + 業界テンプレート」という形であらゆる業界に開放します。同一のオントロジー、同一の AI ランタイム、同一の運用プラットフォーム。業界テンプレートを差し替えるだけで、どの垂直領域にも展開できます。",
      industries: {
        proven: "✓ サプライチェーン・物流 · 本番稼働で実証済み",
        financial: "ファイナンシャル・アドバイザリー",
        restaurant: "レストラン運営",
        property: "不動産管理",
        development: "不動産開発",
        healthcare: "ヘルスケア",
        manufacturing: "製造・自動車",
        retail: "リテール・EC",
        more: "+ その他の業界テンプレート",
      },
      meta: "デジタル AI からフィジカル AI へ · ひとつのプラットフォーム · すべての業界へ",
      scrollHint: "スクロールして全編をご覧ください",
    },
    repositioning: {
      eyebrow: "01 · ポジショニングの再定義",
      title: "「サプライチェーン AI」から「汎用 AI オペレーティングシステム」へ",
      lede: "ITEM AI はサプライチェーン向けソフトウェア企業ではありません。サプライチェーンは最初の業界テンプレートにすぎず、データ連携、オントロジー設計、エージェントのオーケストレーションから物理デバイス制御までを一気通貫で結ぶ完全なループが、実際の法人顧客の本番環境ですでに稼働しています。このアーキテクチャの 80% 以上は業界非依存であり、業務オブジェクトと業界ルールを差し替えれば、同じプラットフォームがファイナンシャル・アドバイザリー会社も、外食チェーンも、不動産デベロッパーも運営できます。",
      cards: {
        proven: {
          title: "約束ではなく、実証済み",
          body: "Gartner は、エージェント型 AI プロジェクトの 40% 超が 2027 年までに中止されると予測しています。エージェントシステムを本番規模まで展開できた企業は、現時点でわずか 23% です。市場に不足しているのは AI のコンセプトではなく、稼働が実証された完全なテンプレートです。ITEM のサプライチェーン導入が、その証明です。",
        },
        template: {
          title: "業界 = テンプレート、作り直しではない",
          body: "オントロジー層、AI ランタイム、運用プラットフォーム、汎用アプリケーションはすべて再利用されます。新しい業界への参入とは、業務オブジェクト + ワークフロー + コンプライアンス規則 + 業界エージェントを新たに読み込むことであり、提供期間は「数年の開発」から「数週間の設定」へ短縮されます。",
        },
        vertical: {
          title: "垂直特化 AI が最も成長する領域",
          body: "AI エージェント市場全体のなかで、業界特化型エージェントは最も成長の速いセグメントです（約 62.7% CAGR）。「ひとつのプラットフォーム × N 個の業界テンプレート」という構造を持つベンダーは、水平型プラットフォームのコストで垂直 AI のプレミアムを獲得できます。",
        },
      },
      callout: {
        label: "ひと言でいうポジショニング：",
        text: "ITEM AI = 汎用エンタープライズ AI オペレーティングシステム + 差し替え可能な業界テンプレート群。サプライチェーンはその第一号であり、すでに実証されたテンプレートです。",
      },
      sources:
        "出典：Gartner（エージェント型プロジェクトの中止率予測 / 本番導入率）、MarketsandMarkets『AI Agents Market 2025–2030』（垂直エージェントの CAGR）。",
    },
    problem: {
      eyebrow: "02 · 共通の課題",
      title: "どの業界も、同じ 3 種類の「見えない税」を払っている",
      lede: "物流事業者でも、アドバイザリー会社でも、外食グループでも、デベロッパーでも、運用の非効率は同じ根に行き着きます。分断されたシステム + サイロ化したデータ + 人手に依存したワークフロー。業界は違っても、請求される税額は同じです。",
      taxes: {
        compliance: {
          title: "① コンプライアンス税",
          body: "罰金、監査、クレーム、規制当局への報告、SLA 違反、ライセンス維持。サプライチェーンの OTIF ペナルティ、金融の規制報告、外食の食品衛生検査、不動産の許認可。形は違っても、コストの発生メカニズムは同一です。",
        },
        data: {
          title: "② データ税",
          body: "予測精度の低さ、システムの分断、可視性の欠如、意思決定の遅延。部門ごとにシステムがあり、システムごとにサイロがあります。「データをつなぎ合わせる」ための見えないコストは、ソフトウェアのライセンス費用を上回ることも珍しくありません。",
        },
        operations: {
          title: "③ オペレーション税",
          body: "手作業のプロセス、重複した作業、高コストな調整とオーケストレーション。複数ステップのナレッジワークでは、人が費やす時間の最大 86% をエージェントで削減できます（Google Cloud のアーリーアダプター実績）。早期導入企業の 88% がすでにプラスの ROI を報告しています。",
        },
      },
      stats: {
        service: { label: "AI エージェント導入によるカスタマーサービスコストの削減幅（企業導入実測値）" },
        backOffice: { label: "調達・バックオフィス運用費の最大削減幅（エンタープライズのエージェント型 AI 導入事例）" },
        readiness: {
          label: "ガバナンス・データ・統合の基盤を備えた企業における自律ワークフロー成功率の倍率（IBM）。「プラットフォーム + テンプレート」が標準で提供するのは、まさにこの基盤です",
        },
      },
      sources:
        "出典：Google Cloud のエージェント ROI データ、MarketsandMarkets『Enterprise Agentic AI Market』、IBM の自律ワークフロー成熟度調査。",
    },
    whyNow: {
      eyebrow: "03 · なぜ今なのか",
      title: "市場は「ソフトウェア」から「エージェント」へ移行している——窓は今開いている",
      stats: {
        ai: { sub: "→ $3.64T (2033) · 29.3% CAGR", label: "世界の AI 市場規模（2026 年）。7 年で約 6 倍へ" },
        agentic: { sub: "→ $139.2B (2034) · 40.5% CAGR", label: "世界のエージェント型 AI 市場（2026 年）" },
        share: {
          sub: "≈ $450B · GARTNER 2035",
          label: "2035 年にエージェント型 AI が占めるエンタープライズソフトウェア収益の比率。2025 年はわずか 2%",
        },
        embed: {
          sub: "2026 年末 · 2025 年は <5%",
          label: "タスク特化型 AI エージェントを組み込むエンタープライズアプリの比率。1 年で約 8 倍の伸び",
        },
        spend: { sub: "IDC · 2029", label: "世界の AI 支出。IT 支出全体の 26% を超える水準へ" },
        agents: { value: "10億+", sub: "IDC · 2029", label: "世界で稼働する AI エージェント数。2025 年の約 40 倍" },
        ceo: {
          sub: "CEO 調査",
          label: "中核業務にエージェントをすでに組み込んでいる CEO の比率。かつての RPA 導入を上回る速度",
        },
        scaled: {
          sub: "本番スケール率",
          label: "エージェントシステムを本番規模まで展開できた企業の比率。この大きな「実装ギャップ」こそ、実証済みテンプレートの機会です",
        },
      },
      callout: {
        label: "結論：",
        text: "需要の爆発（40% CAGR）と実装の失敗（本番化率 23%、プロジェクトの 40% が中止見込み）が同時に起きています。購買行動は「AI の能力を買う」から「稼働が実証された業界特化の AI 運用テンプレートを買う」へ移りつつあり、それがまさに ITEM のプロダクト形態です。",
      },
      sources:
        "出典：MarketsandMarkets『Artificial Intelligence Market 2026–2033』、Fortune Business Insights『Agentic AI Market』、Gartner、IDC、Mordor Intelligence。",
    },
    architecture: {
      eyebrow: "04 · プラットフォームアーキテクチャ",
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
        core: "ITEM のコアプロダクト（Layer 2–6）。以下で層ごとに詳述します",
        integ: "オープン統合層（Layer 1 & 7）。顧客の既存資産に接続し、重複して作り直しません",
      },
    },
    layer2: {
      title: "データ・セマンティック知能層 —— プラットフォームの参入障壁",
      lede: "この層が答えるのは、AI はどうやって事業を理解するのか、という問いです。業界を問わず、企業の運用はオブジェクト + 関係 + ルール + 状態で構成されます。ITEM はそれらをガバナンスされたリアルタイムのセマンティック層としてモデル化します。上位のすべてのアプリケーションが同一の業務事実を共有する——これは単機能の AI ツールには再現できない構造的優位です。",
      cards: {
        ontology: {
          body: "ガバナンスされたナレッジグラフ：業務オブジェクト、エンティティ間の関係、ルールエンジン、状態管理。エンジンは業界非依存、オブジェクトは業界依存です。サプライチェーンでは受注／出荷／倉庫、アドバイザリーでは顧客／ポートフォリオ／規制ルール、外食では店舗／メニュー／シフト、不動産では物件／賃貸借契約／作業指示。エンジンは変わらず、変わるのはテンプレートだけです。",
        },
        graphrag: {
          body: "グラフに基づく文脈検索層。すべての AI 推論が汎用コーパスではなく、企業の実データと業務上の関係に紐づきます。ハルシネーションを根本から抑制し、エージェントのあらゆる動作を説明可能かつ監査可能にします。",
        },
        twin: {
          body: "事業のリアルタイムな鏡：各オブジェクトの現在状態、履歴、予測される推移。サプライチェーンでは物流ネットワーク、外食では店舗運営、不動産では建物ポートフォリオを双子化します——基盤はひとつのツイン基盤です。",
        },
      },
      callout: {
        label: "この層が参入障壁である理由：",
        text: "あらゆる運用上の意思決定はオントロジーに蓄積されていきます。稼働期間が長いほど業務グラフは深くなり、乗り換えコストは高くなります。競合は機能を模倣できても、顧客がオントロジーに蓄積した運用知識までは複製できません。",
      },
    },
    layer3: {
      title: "AI ランタイム層 —— 安全・ガバナンス・マルチモデル",
      lede: "この層が答えるのは、AI はどうやって企業のなかで安全に実行されるのか、という問いです。基盤モデルは四半期ごとに入れ替わり、企業が単一モデルに縛られる理由はありません。ITEM のランタイムは「モデル選択」を、ルーティング可能でガバナンス可能、監査可能なインフラ上の判断へ変えます。",
      cards: {
        aip: {
          body: "エンタープライズ AI ランタイム：マルチモデル編成、エージェントランタイム、自律ワークフロー、ヒューマン・イン・ザ・ループのガバナンス、プロンプトとバージョンの管理、権限とコンプライアンス監査、ツール呼び出しフレームワーク、記憶と推論。規制業種（金融・医療）では特に重要で、すべてのエージェント動作に完全な監査証跡が残ります。",
        },
        router: {
          body: "LLM のルーティングと最適化：タスク種別、コスト、レイテンシ、コンプライアンス要件に応じて、OpenAI、Claude、Gemini、オープンソース、顧客のプライベートモデルの間で自動的に振り分けます。顧客はモデル層での恒久的な中立性を得られ、新モデルはリリース即接続、移行コストはゼロです。",
        },
        harness: {
          body: "クラウド、オンプレミス、エアギャップ、エッジのいずれの環境でも、自律的にデプロイ・監視・更新・ロールバックを行い、コンプライアンス監視とカナリアリリースを標準搭載します。同一のプラットフォームが、クラウドネイティブなスタートアップでも規制下の銀行でもセキュリティ審査を通過できる理由です。",
        },
      },
      stats: {
        models: { label: "ルーティング可能な基盤モデル（OpenAI · Claude · Gemini · Grok · DeepSeek · Qwen + プライベートモデル）" },
        envs: { value: "4", label: "対応する導入環境：パブリッククラウド · プライベートクラウド · オンプレミス · エッジ／エアギャップ" },
        audit: { label: "エージェント動作の監査カバレッジ。ガバナンスは追加機能ではなく、ランタイムの既定動作です" },
      },
    },
    layer4: {
      title: "企業運用プラットフォーム層 —— 人と AI が共に働く場所",
      lede: "この層が答えるのは、事業部門はどうやって実際に使うのか、という問いです。モデルとオントロジーはバックオフィスであり、企業にはフロントオフィスが必要です。アプリケーションを構築し、プロセスを編成し、人とエージェントがひとつのワークスペースで協働するための場です。",
      cards: {
        foundry: {
          body: "オントロジー駆動のアプリ・プロセス工場：データ統合、ローコード／ノーコードのアプリビルダー、ワークフロー編成、リアルタイムのイベント処理、人と AI の協働。業界テンプレートはこの Foundry 上で構築されます。サプライチェーン、アドバイザリー、外食の各テンプレートは、本質的には Foundry アプリ + オントロジーオブジェクト + エージェント設定のパッケージです。つまり顧客やパートナーも、同じツールで自社の拡張を構築できます。",
        },
        aios: {
          body: "統合された運用ワークスペース：部門横断のワークフロー、意思決定インテリジェンス、企業内検索、リアルタイム分析、組み込み Copilot、運用ダッシュボード、通知と業務管理。現場社員にとっては毎日開く画面、経営層にとっては全社のリアルタイムコックピット、エージェントにとっては人へタスクを引き継ぐ場所です。ヒューマン・イン・ザ・ループはポップアップではなく、OS レベルの設計です。",
        },
      },
      callout: {
        label: "提供モデルにとっての意味：",
        text: "新しい業界テンプレートとは、Foundry 上のあらかじめ用意されたアプリとプロセスの集合にほぼ等しい。「新業界への参入 = 数年の開発ではなく数週間の設定」が技術的に成立する理由です。",
      },
    },
    layer5: {
      title: "汎用 AI アプリケーション層 —— 業界横断で再利用される 12 のプロダクト",
      lede: "この 12 のプロダクトは、特定の業界に属しません。判断する、実行する、予測する、見る、聴く、支援する、伸ばす——どの業界にも必要な機能です。サプライチェーン顧客の本番環境で磨き上げられ、業界を切り替えても改修ゼロで再利用できます。",
      products: {
        gpt: { tag: "すべての意思決定に AI を", desc: "自然言語の運用インターフェース。ひと言でプラットフォーム全体を動かします" },
        claw: { tag: "摩擦のない実行", desc: "マルチエージェントのワークフロー実行基盤。提案から実行まで" },
        flow: { tag: "設計する。自動化する。拡張する。", desc: "ビジュアルな AI ワークフロービルダー" },
        sense: { tag: "すべてを、即座に可視化", desc: "リアルタイムの可視化 + デジタルツインのコックピット" },
        predict: { tag: "次に起きることを予測する", desc: "需要 / キャッシュフロー / 来客数 / リソースの汎用予測エンジン" },
        ops: { tag: "自ら回るオペレーション", desc: "自律運用と継続的な最適化" },
        audit: { tag: "失っている利益を見つける", desc: "請求誤りの検出、コンプライアンス監査、コスト回収" },
        vision: { tag: "他が見落とすものを見る", desc: "コンピュータビジョン。セキュリティ、品質検査、現場モニタリング" },
        voice: { tag: "ハンズフリーで動かす", desc: "音声 AI。現場作業と入電対応をハンズフリーに" },
        support: { tag: "すべてのチャネルを、ひとつの糸に", desc: "オムニチャネルのチケット管理：メール · メッセージ · SMS · 電話" },
        grow: { tag: "止まらないパイプライン", desc: "GTM AI。SDR/BDR · SEO/AEO/GEO · コンテンツ生成" },
        doc: { tag: "自ら処理される書類", desc: "ドキュメント自動化。契約書・請求書・レポートの読み取りと生成" },
      },
      callout: {
        label: "汎用性の証拠：",
        text: "ItemSupport が扱うのは遅延貨物のチケットでも、テナントの修繕依頼でも、顧客からの問い合わせでも構いません。ItemPredict が予測するのは在庫でも、店舗の来客数でも、物件の販売消化でも構いません。オブジェクトはオントロジーから、能力はプロダクトから来ます。",
      },
    },
    layer6: {
      title: "業界テンプレート層 —— 差し替え可能な 10 の垂直ソリューション",
      lede: "各テンプレート = 業界オントロジーのオブジェクト + 事前構築ワークフロー + コンプライアンス規則パック + 業界エージェント + システムコネクタ。サプライチェーンのテンプレートは本番環境で実証済みであり、テンプレート機構そのものの有効性を裏づけています。他の業界は同じ仕組みで複製します。",
      proven: "✓ 実証済み",
      templates: {
        chain: { tag: "サプライチェーン・物流", desc: "受注／輸送／倉庫／ヤードの実行を網羅する旗艦テンプレート。本番稼働中" },
        dock: { tag: "港湾・ドレージ", desc: "港湾、ドレージ、コンテナ運用（サプライチェーンのサブテンプレート）" },
        trade: { tag: "グローバル貿易", desc: "関税分類、越境コンプライアンス、貿易インテリジェンス" },
        fin: {
          tag: "ファイナンシャル・アドバイザリー",
          desc: "アドバイザリーと資産運用：顧客プロファイリング、ポートフォリオ分析、規制報告、アドバイザー向け Copilot",
        },
        dine: { tag: "レストラン運営", desc: "店舗運営：シフト、仕込み予測、廃棄削減、多店舗コックピット" },
        estate: { tag: "不動産管理", desc: "賃貸借契約、テナント対応、修繕チケット、エネルギーと資産運用" },
        build: { tag: "不動産開発", desc: "開発：工程管理、協力会社、コスト管理、販売消化" },
        health: { tag: "ヘルスケア運用", desc: "医療運用とサプライ：コールドチェーン、有効期限、コンプライアンス追跡" },
        auto: { tag: "製造・自動車", desc: "製造・自動車：JIT 順序計画、サプライヤーリスク、ライン連携" },
        retail: { tag: "リテール・EC", desc: "リテール・EC：オムニチャネル受注、在庫、返品、会員運用" },
      },
      callout: {
        label: "テンプレートがもつ事業上の意味：",
        text: "水平型プラットフォームは機能で競い、垂直テンプレートは業界知識で競います。ITEM はひとつのプラットフォームで N 個のテンプレートを担い、業界を増やすたびに限界費用は逓減します。しかも垂直 AI は、エージェント市場全体で最も成長の速いセグメントです（≈62.7% CAGR）。",
      },
    },
    catalog: {
      eyebrow: "05 · プロダクトカタログ",
      title: "22 のプロダクト全体像：12 の汎用アプリ × 10 の業界テンプレート",
      general: {
        tag: "汎用アプリ",
        subtitle: "業界横断で再利用 · Layer 5",
        count: "12 プロダクト",
        note: "どの業界にも必要で、業界を切り替えても改修は不要です。",
      },
      vertical: {
        tag: "業界テンプレート",
        subtitle: "差し替え可能な垂直ソリューション · Layer 6",
        count: "10 テンプレート",
        note: "業界オブジェクト + ワークフロー + コンプライアンス + エージェントのパッケージです。",
        proven: "✓ 実証済み",
      },
      table: {
        head: { dimension: "観点", general: "汎用アプリ（12）", templates: "業界テンプレート（10）" },
        rows: {
          question: {
            label: "答える問い",
            general: "「企業運用にはどの AI 能力が必要か」",
            template: "「その能力は、ある業界ではどんな形になるか」",
          },
          reuse: {
            label: "再利用の形",
            general: "業界横断で 100% 再利用、プラットフォームに同梱",
            template: "業界ごとに読み込み、組み合わせ・カスタマイズ・パートナーによる共同構築が可能",
          },
          economics: {
            label: "R&D の経済性",
            general: "一度作れば、全業界でコストを按分できる",
            template: "最初のテンプレート（サプライチェーン）が最も高く、以降は 1 つごとに安くなる",
          },
          sales: {
            label: "営業上の役割",
            general: "プラットフォーム購読の中核的な価値",
            template: "業界へのくさび（wedge）であり、価格プレミアムの源泉",
          },
          validation: {
            label: "検証状況",
            general: "サプライチェーンの本番環境で全面稼働",
            template: "ItemChain は実証済み。他は実証済みの仕組みを複製",
          },
        },
      },
    },
    verticals: {
      eyebrow: "06 · 垂直市場",
      title: "重点 5 業界：市場規模と実証済みの価値アンカー",
      items: {
        supply: {
          badge: "✓ 実証済み",
          name: "サプライチェーン・物流",
          market: "物流 AI 市場 · 2030 年代",
          basis: "$20.1B から · 25.9% CAGR",
          body: "早期導入企業はすでに約 -15% のコスト削減と +35% の在庫回転改善を実現。ITEM の旗艦テンプレートが生まれた領域です。",
        },
        fin: {
          name: "ファイナンシャル・アドバイザリー",
          market: "ロボアドバイザリーの運用資産 · 2027 年（PwC）",
          basis: "2022 年は $2.5T",
          body: "BCG 2026：資産運用業界において AI ファーストはもはや選択肢ではなく必須要件です。AI はすでに資産計画の草案作成やコンプライアンス書類の自動化を担っています。",
        },
        dine: {
          name: "レストラン運営",
          market: "外食 AI 市場 · 2034 年",
          basis: "2025 年 $13.2B から · 22.6% CAGR",
          body: "AI による在庫管理と予測：食材原価 -8–14%、廃棄 -25–40%、欠品 -60%。1 店舗あたり年間 $15K–65K の純節減です。",
        },
        estate: {
          name: "不動産管理",
          market: "不動産業界における AI の効率化効果 · 2030 年",
          basis: "（Morgan Stanley）",
          body: "REIT・商業不動産の業務の 37% は自動化可能で、管理、営業、事務支援、保守の 4 領域に集中しています。",
        },
        build: {
          name: "不動産開発",
          market: "不動産 AI 市場 · 2029 年",
          basis: "2025 年 $303B から · 34.4% CAGR",
          body: "McKinsey は AI が不動産業界に年間 $180B 超の価値をもたらすと試算しています。評価モデルの誤差率は 10–15% から 2.8% へ低下しました。",
        },
      },
      callout: {
        label: "ひとつのプラットフォームがもつ 5 つの顔：",
        text: "オントロジーのオブジェクトを替え、Foundry のプロセスを替え、Layer 6 のテンプレートを替える——第 2 層から第 5 層は手つかずのままです。「業界とは、単なるテンプレートである」という言葉の、文字どおりの意味です。",
      },
      sources:
        "出典：物流 AI（業界調査、従前の分析を継承）、PwC のロボアドバイザリー AUM 予測、BCG『2026 Global Wealth Report』、DataIntelo『AI in Restaurants Market 2025–2034』、Morgan Stanley Research、Research and Markets『AI in Real Estate』、McKinsey。",
    },
    expansion: {
      eyebrow: "07 · 拡張マップ",
      title: "拡張マップ：ひとつのカーネル × 4 つのスーパークラスター × 3 つのフェーズ",
      lede: "米国 BLS の公式産業分類に沿って、ITEM のアーキテクチャ適合度を業種ごとに評価しました。54 業種が 8.0/10 を超えています。これは 54 個のプロダクトを意味しません。適合する業種はすべて、同一の取引カーネルを共有する 4 つのスーパークラスターに集約され、規律をもって段階的に参入します。青写真は網羅的に、歩みは抑制的に。",
      clusters: {
        a: {
          title: "Ⓐ モノの移動",
          scope: "貨物 · 港湾 · 鉄道 · コールドチェーン · 卸売",
          statusLabel: "現在の稼働：",
          status: "ItemChain ✓ · ItemDock · ItemTrade",
        },
        b: {
          title: "Ⓑ モノへの作業",
          scope: "データセンター · 建設 · ファシリティ · フィールドサービス · 公益事業",
          statusLabel: "対応テンプレート：",
          status: "ItemBuild · ItemEstate",
        },
        c: {
          title: "Ⓒ モノの変換",
          scope: "鉱業 · 素材 · 製造 · リサイクルと循環",
          statusLabel: "対応テンプレート：",
          status: "ItemAuto + 今後の拡張",
        },
        d: {
          title: "Ⓓ モノのリスク",
          scope: "保険 · 保証 · 保険金請求 · 資本——経済レイヤー",
          statusLabel: "優位性：",
          status: "請求が発生する前に、物理的な証拠を保持している",
        },
      },
      phases: {
        p1: {
          phase: "PHASE 1 · 現在 → Y2",
          title: "多業界より先に、マルチモーダルを",
          body: "実証済みの貨物コアの上でネットワークを完成させます。港湾・輸送支援（適合度 9.8）、海運（9.8）、鉄道・複合一貫輸送（9.7）。",
          note: "規律のシグナル：クラスター Ⓐ を完全なネットワークにするまで、新しい業界は追いません。",
        },
        p2: {
          phase: "PHASE 2 · Y2 → Y3",
          title: "最初の隣接 OS：ItemInfra",
          body: "AI データセンターの建設ラッシュを起点とします（適合度 9.7）。米国エネルギー省は、データセンターが全米電力消費の 11.8% を占めると予測しています。1 件のデータセンター案件 = 高付加価値のサプライチェーン + 建設 + フィールドサービス + セキュリティであり、すべてクラスター Ⓑ の共通カーネル上に載ります。",
        },
        p3: {
          phase: "PHASE 3 · Y3 → Y5",
          title: "物理素材のネットワーク：ItemMaterials",
          body: "鉱業（9.6）、化学（9.3）、電池とリサイクル（9.2–9.4）——クラスター Ⓒ。規制の追い風が推進力になります。EU の電池パスポートは 2027 年 2 月に義務化、FDA の食品トレーサビリティは 2028 年に執行開始です。",
        },
      },
      callout: {
        label: "投資家へのひと言：",
        text: "最大の拡張機会は「ソフトウェアの垂直領域を増やすこと」ではなく、物理経済における「モノ」の移動・作業・変換・リスクを統べるひとつの取引カーネルです。論点は「貨物は届いたか」から「物理世界は契約どおりに変化したか、それを証明できるか、価値は移転されるべきか」へと進化します。",
      },
    },
    physical: {
      eyebrow: "08 · 物理世界",
      title: "物理世界との接続：オープンな機器・ロボット統合層",
      lede: "物理的な実行を伴う業界（倉庫、厨房、建物巡回、建設現場）に対して、ITEM は Layer 7 のオープンプロトコルを通じ、顧客が保有または調達したあらゆる機器と接続します。当社は特定のハードウェアブランドに縛られず、ハードウェアも製造しません。ハードウェアは顧客の資産であり、知能とオーケストレーションが ITEM のプロダクトです。",
      cards: {
        robots: {
          title: "あらゆるロボット種別",
          body: "AGV/AMR · ロボットアーム · ヒューマノイド · 四足歩行 · ドローン · 配膳ロボット · 清掃／点検ロボット。異種自律制御層で統一的に配車し、複数ブランドを同一現場で協調させます。",
        },
        protocols: {
          title: "オープンなプロトコルスタック",
          body: "MCP · A2A · REST API · EDI · イベントストリーム · RTLS · 産業用 PLC。新しい機器の追加は設定作業であり、開発プロジェクトではありません。",
        },
        scenarios: {
          title: "業界ごとの物理シナリオ",
          body: "倉庫のフォークリフトと仕分け、飲食店の配膳と厨房、建物の巡回と警備、現場の監視と測量。タスクの意味づけは各業界テンプレートが定義します。",
        },
        proven: {
          title: "最も難しい現場で実証",
          body: "物流倉庫はフィジカル AI にとって最も過酷な環境です（多数の機器、高スループット、厳しいリアルタイム性）。そこで通用した統合層が、他の業界でより難しくなることはありません。",
        },
      },
      callout: {
        label: "ひと言でいえば：",
        text: "ITEM はあらゆる機器をより賢くし、その知能に対して継続的に課金します。一方で機器そのものは、常にオープンなエコシステムのままです。",
      },
    },
    competitive: {
      eyebrow: "09 · 競争ポジショニング",
      title: "競争ポジショニング：知識レイヤー · プロセスレイヤー · 運用レイヤー",
      lede: "Glean は企業が「自社が知っていることを把握する」ことを助けます（知識レイヤー）。Automation Anywhere は「既存プロセスを自走させる」ものです（プロセスレイヤー）。いずれも顧客の既存システムの上に載る拡張レイヤーです。ITEM は第三のポジションを占めます。運用そのものが AI オペレーティングシステム上で動き、運用データモデルを保有し、物理世界にまで及びます。彼らはスタックを補強し、私たちはスタックそのものになります。",
      axes: { y: "デジタル + フィジカル", x1: "既存スタックを補強する", x2: "運用そのものを担う" },
      dots: {
        bigtech: { sub: "大手による同象限への圧力" },
        glean: { sub: "Work AI · 知識レイヤー" },
        aa: { sub: "APA · プロセスレイヤー（ソフトウェアボット）" },
        item: { sub: "運用 OS · L2 オントロジー + L6 テンプレート + L7 物理" },
      },
      table: {
        head: { dimension: "観点" },
        rows: {
          dataModel: {
            label: "データモデル",
            glean: "文書と人のコンテキストグラフ",
            aa: "プロセス定義のみ。業務データモデルはない",
            item: "業務オブジェクトの運用オントロジー + デジタルツイン",
          },
          relation: {
            label: "顧客システムとの関係",
            glean: "上に載って読み取る（250 以上のコネクタ）",
            aa: "UI / API 経由で上から自動化する",
            item: "運用の記録システムそのものになる。残りは L1 と L7 で統合",
          },
          physical: {
            label: "物理世界",
            glean: "なし",
            aa: "ソフトウェア「ボット」のみ",
            item: "実機ロボット + 機器 + PLC（L7）",
          },
          verticalization: {
            label: "業界特化の方法",
            glean: "同一の水平プロダクトのマーケティング区分",
            aa: "事前構築のプロセスソリューション（AP、KYC、RCM）",
            item: "運用グレードの業界テンプレート（オブジェクト + ワークフロー + コンプライアンス + エージェント）",
          },
          budget: {
            label: "予算の耐性",
            glean: "生産性予算。削減されうる",
            aa: "プロセス予算。置き換えられうる",
            item: "運用に不可欠：止めれば事業が止まる（NRR 118% を支える論理）",
          },
        },
      },
      callout: {
        label: "重なりを正直に、そして答えを：",
        text: "中間層（L3–L5 のエージェント構築／編成／ガバナンス）は 3 社とも収斂していきます。Glean はすでに「Agent Harness」を提供し、AA は「EnterpriseClaw」を発表しました（Item Harness / ItemClaw と名称が衝突しており、商標を確認中です）。当社の防御可能な中核は、ERP 級のソフトウェアを作り直さない限り到達できない位置にあります。L2 の運用オントロジー、L6 の運用テンプレート、L7 の物理実行です。競合協調の姿勢として、Glean は正面から争う相手ではなく、コンテキストの供給源として ITEM に接続できます。",
      },
    },
    businessModel: {
      eyebrow: "10 · ビジネスモデル",
      title: "ビジネスモデル：プラットフォーム購読 × テンプレートプレミアム × 利用量の成長",
      streams: {
        platform: {
          title: "プラットフォーム購読（SaaS/PaaS）",
          body: "Layer 2–5 のコアプラットフォームと汎用アプリを、モジュールとシート単位で購読。収益の安定した土台です。",
        },
        template: {
          title: "業界テンプレートのプレミアム",
          body: "Layer 6 のテンプレートは業界単位でライセンス供与します。垂直ソリューションは業界知識とコンプライアンスパックを伴うため、水平的な機能より高い価格が付きます。",
        },
        usage: {
          title: "利用量と実行（FaaS）",
          body: "エージェントの実行、ワークフローの稼働、ドキュメント処理を従量課金。顧客の業務量とともに自然に成長します。",
        },
        device: {
          title: "デバイス知能の購読",
          body: "接続されたロボット／機器 1 台ごとに、知能レイヤーを月額で購読。ハードウェアリスクはゼロ、収益は継続します。",
        },
      },
      stats: {
        gartner: {
          label: "Gartner：2035 年にエージェント型 AI が生むエンタープライズソフトウェア収益（≈30%）。ITEM の収益構成はこの曲線に正面から狙いを定めています",
        },
        cagr: { label: "垂直 AI エージェント領域の CAGR。テンプレート層は市場で最も成長の速い位置にあります" },
        templates: {
          value: "N × テンプレート",
          label: "業界テンプレートを 1 つ追加するごとに、新しい TAM、新しい買い手、逓減する限界費用。プラットフォーム経済の複利構造です",
        },
      },
      callout: {
        label: "拡張のフライホイール：",
        text: "汎用アプリが業界参入のコストを下げる → 業界テンプレートが垂直プレミアムを開く → 顧客の運用データがオントロジーへ還流する → 使うほどテンプレートが精緻になる → 次の業界がさらに速くなる。",
      },
      sources:
        "出典：Gartner（エージェント型 AI のエンタープライズソフトウェア収益比率）、MarketsandMarkets（垂直エージェントの CAGR）。",
    },
    gtm: {
      eyebrow: "11 · 市場参入",
      title: "Land → Expand → Own：どの業界でも同じプレイブックを再利用する",
      phases: {
        land: {
          phase: "PHASE 1 · LAND",
          title: "テンプレートで入り込む",
          body: "業界テンプレート + ItemGPT で、痛点の大きいシナリオをひとつ解決します。物流なら輸送実行、外食なら仕込み予測、不動産管理なら修繕チケット、アドバイザリーならコンプライアンス書類。",
          note: "数週間で稼働させ、まず定量化できる ROI をひとつ獲得します。",
        },
        expand: {
          phase: "PHASE 2 · EXPAND",
          title: "汎用アプリで広げる",
          body: "12 の汎用アプリへ横展開します。ItemSupport がオムニチャネル対応を引き受け、ItemPredict が予測範囲を広げ、ItemAudit が損失を回収し、ItemGrow がパイプラインを牽引します。",
          note: "新しいモジュールはすべて同じオントロジー上にあり、拡張はアーキテクチャに裏づけられています。",
        },
        own: {
          phase: "PHASE 3 · OWN",
          title: "運用 OS になる",
          body: "顧客自身のアプリとプロセスが Foundry 上に蓄積され、物理デバイスが知能購読に加わり、AI OS が全社員の毎日開くワークスペースになります。",
          note: "この時点で ITEM はベンダーではなく、顧客の運用そのもののオペレーティングシステムです。",
        },
      },
      callout: {
        label: "サプライチェーン版との違いは、たった一語：",
        text: "Phase 1 の起点テンプレートが「TMS/WMS」から「その業界のもの」に変わるだけです。プレイブックも拡張経路も終着点も同一です——プラットフォームが同一だからです。",
      },
    },
    finance: {
      eyebrow: "12 · 財務モデル — 前提",
      title: "モデルの前提：収益エンジンとコストエンジン",
      lede: "本モデルは汎用版による新規業界の収益のみを計上し、すでに稼働中のサプライチェーン事業は含みません。前提はすべて 2026 年の SaaS/AI ベンチマークに基づき、保守的に置いています。Y1 = 汎用版 GTM 開始後の最初の 12 か月です。",
      cards: {
        pricing: {
          title: "顧客と価格",
          body: "ブレンド ACV は $260K から始まり（エンタープライズ $500K 超 / ミッドマーケット $150K）、モジュール拡張により Y5 には $410K へ上昇します。顧客数は 22 → 60 → 130 → 230 → 370。NRR は 118% を前提としており、これは ACV $100K 超のエンタープライズ SaaS の業界中央値そのもので、強気な想定ではありません。",
        },
        margin: {
          title: "粗利率の推移（誠実な見立て）",
          body: "推論コストが AI ネイティブ企業の初期粗利を押し下げます（LLM ネイティブの中央値は約 52%、Bessemer によればスケール段階の AI 企業は平均 25%）。当社は 62% から始まり Y5 に 76% へ到達します。改善のエンジンは Blackbox Router によるモデルルーティングと規模の効果です。従来型 SaaS は 77–81% であり、当社はその水準へ収斂していきます。",
        },
        cost: {
          title: "コスト構造",
          body: "1 人あたりのフルロードコストは年間 $180K（報酬 + 福利厚生 + 機材）。人員は 78 → 310。R&D は前倒し（テンプレート工場）、S&M は収益に合わせて増やします。収益は期首と期末 ARR の平均で認識し、期末 ARR による当年収益の水増しを避けています。",
        },
      },
      table: {
        head: { engine: "収益エンジン" },
        rows: {
          customers: "顧客数（期末）",
          acv: "ブレンド ACV（$K）",
          arr: "期末 ARR（$M）",
          growth: "ARR 前年比成長率",
        },
      },
      sources:
        "ベンチマーク出典：Benchmarkit 2025 データセット（エンタープライズ NRR 中央値 118%、粗利率 77–81%）、Bessemer『State of the Cloud 2026』（AI 企業の粗利率）、SaaS Capital / ChartMogul（成長率分布）。",
    },
    pnl: {
      eyebrow: "13 · 財務モデル — 損益",
      title: "5 年間の損益：-$18M から +$16M EBITDA へ",
      rows: {
        revenue: "認識収益（平均 ARR 方式）",
        grossMargin: "粗利率",
        grossProfit: "粗利",
        rnd: "R&D（テンプレート工場 + プラットフォーム）",
        sm: "営業・マーケティング",
        ga: "一般管理費",
        opex: "営業費用合計",
        ebitda: "EBITDA",
        ebitdaMargin: "EBITDA マージン",
        headcount: "人員数",
      },
      chartNote:
        "EBITDA（$M）· 損失のピークは Y2–Y3 の GTM 拡大期に訪れます。Y4 以降は営業効率と粗利改善が同時に効いてきます。",
      callout: {
        label: "投資家視点での 3 つの読み取り：",
        points: [
          "① 損失は投資のペース配分によるものであり、ユニットエコノミクスの悪化ではありません（粗利率は毎年上昇）。",
          "② OpEx の対収益比は 690% から 63% へ低下し、営業レバレッジが実在します。",
          "③ Y5 は高成長（+78%）と黒字（+14%）を同時に満たします——Rule of 40 ≈ 98。",
        ],
      },
    },
    funding: {
      eyebrow: "14 · 財務モデル — 資金調達と損益分岐",
      title: "資金計画と損益分岐：総額 $95M、Y4 Q4 に分岐点へ",
      rounds: {
        a: {
          name: "立ち上げ資金 · SERIES A",
          when: "汎用版のローンチ時 · 18–20 か月目までのランウェイ",
          alloc: {
            rnd: "R&D・テンプレート工場 45%（$15.8M）：プラットフォーム強化 + 新規 3 業界のテンプレート",
            gtm: "GTM 28%（$9.8M）：3 つの垂直領域の営業・マーケティング体制",
            compute: "計算資源・インフラ 15%（$5.2M）",
            ga: "認証取得 + 一般管理費 12%（$4.2M）",
          },
        },
        b: {
          name: "追加調達 · SERIES B",
          when: "18–22 か月目 · ARR $12–16M の時点（AI ネイティブの未公開市場倍率 25–30× ARR）",
          alloc: {
            gtm: "GTM のスケールアップ 50%（$30M）",
            templates: "テンプレート拡張、+5 業界 20%（$12M）",
            intl: "海外展開 12%（$7.2M）",
            compute: "計算資源 10%（$6M）",
            buffer: "バッファ 8%（$4.8M）",
          },
        },
      },
      table: { rows: { ebitda: "当期 EBITDA", burn: "累計バーン", cash: "期末現金（A $35M + B $60M）" } },
      breakeven:
        "月次 EBITDA の損益分岐：Y4 Q4 ｜ Y5 は通期黒字 +$16M ｜ 資金需要のピーク $78.3M（Y4）｜ 最低現金クッション $16.7M",
      callout: {
        label: "1 回ではなく 2 回に分ける理由：",
        text: "シリーズ A は「新規 3 業界でサプライチェーンの実証を再現する」ためだけに価格付けされます。シリーズ B は ARR $12–16M でテンプレート機構が二度目の検証を経てから調達し、AI ネイティブの 25–30× 倍率で価格付けすることで創業者の希薄化を最小化します。B の市況が悪化した場合は、GTM 拡大を絞ることで自力で損益分岐へ進めます（以下のシナリオ分析を参照）。",
      },
    },
    metrics: {
      eyebrow: "15 · 財務モデル — 投資家指標",
      title: "投資家向けダッシュボード：全指標を 2026 年ベンチマークと対比",
      kpis: {
        payback: {
          term: "CAC 回収期間",
          note: "Y1→Y5。ベンチマーク：エンタープライズ中央値 18–24 か月、エリートは 12 未満。Y3 で 15 に達し、Y5 でエリート水準へ",
        },
        ltv: {
          term: "LTV:CAC",
          note: "（5 年ホライズン · NRR 118%）。ベンチマーク：健全 3:1、エンタープライズ平均 4.5:1、上位四分位 4–6:1",
        },
        nrr: {
          term: "NRR",
          note: "= エンタープライズの中央値。120% 超の企業は 2.3 倍のバリュエーションを得ます。マルチモジュール構成は 120% 超を狙う構造的なテコです",
        },
        burn: {
          term: "バーンマルチプル",
          note: "Y1→Y4（純増 ARR $1 あたりの純消費）。ベンチマーク：ARR $10M 超で 3 を上回ると問題、1 未満はエリート。後期投資家の 83% が重要指標と回答",
        },
        magic: { term: "マジックナンバー", note: "（Y3：純増 ARR / S&M）。ベンチマーク：中央値 0.7、1.0 以上で優良" },
        rule40: {
          term: "Rule of 40",
          note: "（Y5：成長率 78% + 利益率 14%）。ベンチマーク：40 超で合格、60 超は 2–3 倍のバリュエーションプレミアム",
        },
        arrPerEmployee: {
          term: "従業員 1 人あたり ARR",
          note: "（Y5：$151.7M / 310 人）——資本効率を最も直感的に示す指標です",
        },
        expansionCost: {
          term: "拡張 ARR $1 の獲得コスト",
          note: "新規ロゴの $2.00 との対比（業界データ）。テンプレート構造により拡張収益の比率が上がり続け、ブレンド CAC が構造的に下がります",
        },
      },
      scenarios: {
        head: { scenario: "シナリオ", arr: "Y5 ARR", breakeven: "損益分岐時期", capital: "総所要資本", delta: "主な差分" },
        rows: {
          conservative: {
            name: "保守",
            breakeven: "Y5 末",
            capital: "~$115M（シリーズ C $25M が必要）",
            delta: "顧客数 -25% · ACV -15% · 粗利改善の鈍化",
          },
          base: { name: "基準（本モデル）", breakeven: "Y4 Q4", capital: "$95M", delta: "前掲の前提どおり" },
          aggressive: {
            name: "強気",
            breakeven: "Y4 Q1",
            capital: "~$70M",
            delta: "サプライチェーン既存顧客へのクロスセル + パートナーチャネルの早期立ち上がり",
          },
        },
      },
      sources:
        "ベンチマーク出典：Benchmarkit 2025（CAC 回収 / NRR / 粗利率 / 拡張コスト $1 対 $2）、SaaS Capital / ScaleXP（バーンマルチプル、投資家調査）、KeyBanc / ICONIQ（NRR とバリュエーションの関係）、Phoenix Strategy Group（Rule of 40 のプレミアム）。",
    },
    vision: {
      eyebrow: "16 · ビジョン",
      title: {
        l1: "次の 1,000 億ドル規模のエンタープライズソフトウェア企業とは、",
        l2pre: "",
        l2accent: "汎用 AI オペレーティングシステム",
        l3pre: "と",
        l3accent: "業界テンプレートのライブラリ",
        l3post: "の組み合わせである。",
      },
      subtitle:
        "水平型プラットフォームは規模はあっても業界の深さがなく、垂直ソリューションは深さはあってもプラットフォームの経済性がありません。ITEM AI はその両方を備えます。実証済みの 5 層の汎用コア（Layer 2–6）、サプライチェーンから始まりあらゆる業界へ広がるテンプレートライブラリ、そして両端に完全にオープンな統合境界（Layer 1 & 7）です。",
      tags: {
        platform: "ひとつのプラットフォーム",
        industries: "N 個の業界",
        proven: "サプライチェーン · 実証済み",
        next: "あなたの業界 · 次はここへ",
      },
      meta: "ITEM AI · GENERAL ENTERPRISE EDITION · product_general_v4",
    },
  },

  es: {
    cover: {
      tag: "EDICIÓN EMPRESARIAL GENERAL · V4",
      titleMain: "El sistema operativo de IA para toda la empresa",
      tagline: "El sistema operativo de IA empresarial — para todos los sectores",
      subtitle:
        "Una arquitectura de sistema operativo de IA ya validada y en producción en la cadena de suministro, ahora abierta a todos los sectores bajo el modelo «una plataforma + plantillas sectoriales intercambiables». La misma ontología, el mismo runtime de IA, la misma plataforma de operaciones: basta con cambiar la plantilla del sector para desplegarla en cualquier vertical.",
      industries: {
        proven: "✓ Cadena de suministro y logística · Probado en producción",
        financial: "Asesoría financiera",
        restaurant: "Operaciones de restauración",
        property: "Gestión inmobiliaria",
        development: "Promoción inmobiliaria",
        healthcare: "Salud",
        manufacturing: "Manufactura y automoción",
        retail: "Retail y comercio",
        more: "+ Más plantillas sectoriales",
      },
      meta: "DE LA IA DIGITAL A LA IA FÍSICA · UNA PLATAFORMA · TODOS LOS SECTORES",
      scrollHint: "Desplázate para ver la presentación completa",
    },
    repositioning: {
      eyebrow: "01 · El reposicionamiento",
      title: "De la «IA para la cadena de suministro» a un sistema operativo de IA de propósito general",
      lede: "ITEM AI no es una empresa de software para la cadena de suministro. La cadena de suministro es simplemente nuestra primera plantilla sectorial: un ciclo completo que va de la ingesta de datos, el modelado ontológico y la orquestación de agentes hasta el control de dispositivos físicos, y que ya funciona en producción con clientes empresariales reales. Más del 80% de la arquitectura es independiente del sector: al cambiar los objetos de negocio y las reglas sectoriales, la misma plataforma opera una firma de asesoría financiera, una cadena de restaurantes o una promotora inmobiliaria.",
      cards: {
        proven: {
          title: "Probado, no prometido",
          body: "Gartner prevé que más del 40% de los proyectos de IA agéntica se cancelarán antes de 2027; solo el 23% de las organizaciones ha llevado realmente sistemas agénticos a producción a escala. Al mercado no le faltan conceptos de IA: le faltan plantillas completas cuyo funcionamiento esté probado. El despliegue de ITEM en la cadena de suministro es esa prueba.",
        },
        template: {
          title: "Un sector es una plantilla, no una reescritura",
          body: "La capa ontológica, el runtime de IA, la plataforma de operaciones y las aplicaciones generales se reutilizan íntegramente. Entrar en un sector nuevo consiste en cargar un conjunto distinto de objetos de negocio + flujos de trabajo + reglas de cumplimiento + agentes sectoriales, lo que comprime la entrega de años de desarrollo a semanas de configuración.",
        },
        vertical: {
          title: "La IA vertical es el segmento de mayor crecimiento",
          body: "Dentro del mercado de agentes de IA, los agentes sectoriales son el segmento que más rápido crece (~62.7% CAGR). Un proveedor estructurado como «una plataforma × N plantillas sectoriales» obtiene la prima de la IA vertical con el coste de una plataforma horizontal.",
        },
      },
      callout: {
        label: "El posicionamiento en una línea:",
        text: "ITEM AI = un sistema operativo de IA empresarial de propósito general, más una biblioteca de plantillas sectoriales intercambiables. La cadena de suministro es la primera y la única ya probada.",
      },
      sources:
        "Fuentes: Gartner (previsión de cancelación de proyectos agénticos / tasa de adopción en producción); MarketsandMarkets, AI Agents Market 2025–2030 (CAGR de agentes verticales).",
    },
    problem: {
      eyebrow: "02 · El problema universal",
      title: "Todos los sectores pagan los mismos tres impuestos ocultos",
      lede: "Ya se trate de un operador logístico, una firma de asesoría, un grupo de restauración o una promotora, la ineficiencia operativa nace de la misma raíz: sistemas fragmentados + datos aislados + flujos de trabajo dependientes de personas. Sectores distintos, la misma factura fiscal.",
      taxes: {
        compliance: {
          title: "① El impuesto de cumplimiento",
          body: "Multas, auditorías, reclamaciones, reportes regulatorios, incumplimientos de SLA, mantenimiento de licencias. Penalizaciones OTIF en la cadena de suministro, reporting regulatorio en finanzas, inspecciones sanitarias en restauración, permisos en el sector inmobiliario: formas distintas, mecánica de coste idéntica.",
        },
        data: {
          title: "② El impuesto de los datos",
          body: "Previsiones erróneas, sistemas desconectados, falta de visibilidad, decisiones tardías. Un sistema por departamento, un silo por sistema. El coste oculto de «unir los datos» suele superar al de las propias licencias de software.",
        },
        operations: {
          title: "③ El impuesto operativo",
          body: "Procesos manuales, trabajo repetido, coordinación cara. En tareas de conocimiento de varios pasos, hasta el 86% del tiempo humano puede eliminarse con agentes (datos de adoptantes tempranos de Google Cloud); el 88% de esos adoptantes reporta un ROI positivo.",
        },
      },
      stats: {
        service: { label: "Reducción del coste de atención al cliente gracias a los agentes de IA (medida en despliegues empresariales)" },
        backOffice: { label: "Reducción máxima del gasto operativo en compras y back office (casos empresariales de IA agéntica)" },
        readiness: {
          label: "Mayor tasa de éxito de los flujos autónomos en organizaciones con bases de gobernanza, datos e integración (IBM); justamente las capacidades que «plataforma + plantilla» entrega de serie",
        },
      },
      sources:
        "Fuentes: datos de ROI de agentes de Google Cloud; MarketsandMarkets, Enterprise Agentic AI Market; investigación de IBM sobre madurez en flujos autónomos.",
    },
    whyNow: {
      eyebrow: "03 · Por qué ahora",
      title: "El mercado está pasando del software a los agentes: la ventana es ahora",
      stats: {
        ai: { sub: "→ $3.64T (2033) · 29.3% CAGR", label: "Mercado global de IA (2026): casi 6× en siete años" },
        agentic: { sub: "→ $139.2B (2034) · 40.5% CAGR", label: "Mercado global de IA agéntica (2026)" },
        share: {
          sub: "≈ $450B · GARTNER 2035",
          label: "Peso de la IA agéntica en los ingresos del software empresarial en 2035, frente a apenas un 2% en 2025",
        },
        embed: {
          sub: "FINALES DE 2026 · vs <5% EN 2025",
          label: "Aplicaciones empresariales con agentes especializados integrados: ~8× de crecimiento en un solo año",
        },
        spend: { sub: "IDC · 2029", label: "Gasto global en IA: superará el 26% de todo el gasto en TI" },
        agents: { value: "1B+", sub: "IDC · 2029", label: "Agentes de IA en uso en el mundo: ~40× la cifra de 2025" },
        ceo: {
          sub: "ENCUESTA A CEO",
          label: "CEO que ya integran agentes en sus operaciones centrales: una adopción más rápida que la ola del RPA",
        },
        scaled: {
          sub: "TASA DE ESCALADO A PRODUCCIÓN",
          label: "Organizaciones que realmente han escalado sistemas agénticos: una brecha de implantación enorme y la oportunidad de las plantillas probadas",
        },
      },
      callout: {
        label: "La conclusión:",
        text: "La demanda se dispara (40% CAGR) al mismo tiempo que la implantación fracasa (23% en producción, 40% de los proyectos abocados a la cancelación). La disposición a pagar se desplaza de «comprar capacidad de IA» a «comprar una plantilla de operaciones con IA, sectorial y con funcionamiento probado», que es exactamente la forma del producto de ITEM.",
      },
      sources:
        "Fuentes: MarketsandMarkets, Artificial Intelligence Market 2026–2033; Fortune Business Insights, Agentic AI Market; Gartner; IDC; Mordor Intelligence.",
    },
    architecture: {
      eyebrow: "04 · Arquitectura de la plataforma",
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
        core: "Productos propios de ITEM (capas 2–6), desarrollados capa por capa más abajo",
        integ: "Capas de integración abierta (capas 1 y 7): se conectan con lo que el cliente ya tiene, nunca se reconstruyen",
      },
    },
    layer2: {
      title: "Datos e inteligencia semántica: el foso de la plataforma",
      lede: "Esta capa responde a una pregunta: ¿cómo entiende la IA tu negocio? En cualquier sector, las operaciones se componen de objetos + relaciones + reglas + estado. ITEM los modela como una capa semántica gobernada y en tiempo real: todas las aplicaciones superiores comparten una única verdad de negocio, una ventaja estructural que ninguna herramienta puntual de IA puede replicar.",
      cards: {
        ontology: {
          body: "Un grafo de conocimiento gobernado: objetos de negocio, relaciones entre entidades, motor de reglas y gestión de estado. Motor independiente del sector, objetos propios de cada sector. En la cadena de suministro los objetos son pedidos, envíos y almacenes; en asesoría, clientes, carteras y reglas de cumplimiento; en restauración, locales, cartas y turnos; en inmobiliario, activos, contratos de arrendamiento y órdenes de trabajo. El motor nunca cambia; lo que cambia es la plantilla.",
        },
        graphrag: {
          body: "Recuperación contextual basada en grafos. Cada inferencia de IA queda anclada a los datos reales y a las relaciones de negocio de la empresa, y no a corpus genéricos: suprime la alucinación de raíz y hace que cada acción del agente sea explicable y auditable.",
        },
        twin: {
          body: "Un espejo vivo del negocio: el estado actual, el historial y la trayectoria prevista de cada objeto. Un gemelo de la red logística en la cadena de suministro, de la operación de los locales en restauración, de la cartera de edificios en inmobiliario: una única infraestructura de gemelo digital.",
        },
      },
      callout: {
        label: "Por qué esta capa es el foso:",
        text: "Cada decisión operativa se sedimenta de vuelta en la ontología. Cuanto más tiempo funciona, más profundo es el grafo de negocio y mayor el coste de cambio. Los competidores pueden copiar funcionalidades; no pueden copiar el conocimiento operativo que el cliente ha acumulado en la ontología.",
      },
    },
    layer3: {
      title: "Runtime de IA: seguro, gobernado y multimodelo",
      lede: "Esta capa responde a: ¿cómo se ejecuta la IA de forma segura dentro de la empresa? Los modelos fundacionales se renuevan cada trimestre y ninguna empresa debería quedar atada a uno solo. El runtime de ITEM convierte la elección de modelo en una decisión de infraestructura enrutable, gobernable y auditable.",
      cards: {
        aip: {
          body: "El runtime de IA empresarial: orquestación multimodelo, runtime de agentes, flujos autónomos, gobernanza con humano en el bucle, gestión de prompts y versiones, permisos y auditoría de cumplimiento, marco de llamada a herramientas, memoria y razonamiento. Resulta crítico en sectores regulados (finanzas, salud): cada acción de un agente deja una traza de auditoría completa.",
        },
        router: {
          body: "Enrutado y optimización de LLM: selecciona automáticamente entre OpenAI, Claude, Gemini, modelos de código abierto y los modelos privados del cliente según el tipo de tarea, el coste, la latencia y los requisitos de cumplimiento. El cliente obtiene neutralidad permanente en la capa de modelo: los modelos nuevos se conectan el día de su lanzamiento, sin coste de migración.",
        },
        harness: {
          body: "Despliegue, monitorización, actualización y rollback autónomos en nube, on-premise, entornos aislados y edge, con monitorización de cumplimiento y despliegues canary integrados. Por eso la misma plataforma supera la revisión de seguridad tanto en una startup cloud-native como en un banco regulado.",
        },
      },
      stats: {
        models: { label: "Modelos fundacionales enrutables (OpenAI · Claude · Gemini · Grok · DeepSeek · Qwen + modelos privados)" },
        envs: { value: "4", label: "Entornos de despliegue cubiertos: nube pública · nube privada · on-premise · edge/aislado" },
        audit: { label: "Cobertura de auditoría de las acciones de los agentes: la gobernanza es el comportamiento por defecto del runtime, no un añadido" },
      },
    },
    layer4: {
      title: "Plataforma de operaciones: donde personas e IA trabajan juntas",
      lede: "Esta capa responde a: ¿cómo lo usan de verdad los equipos de negocio? Los modelos y la ontología son la trastienda; la empresa necesita una primera línea donde construir aplicaciones, orquestar procesos y permitir que personas y agentes colaboren en un mismo espacio de trabajo.",
      cards: {
        foundry: {
          body: "La fábrica de aplicaciones y procesos impulsada por la ontología: integración de datos, constructor de aplicaciones low-code/no-code, orquestación de flujos, procesamiento de eventos en tiempo real y colaboración entre personas e IA. Las plantillas sectoriales se construyen sobre Foundry: las de cadena de suministro, asesoría o restauración son, en esencia, paquetes de aplicaciones Foundry + objetos de la ontología + configuraciones de agentes. Eso significa que clientes y socios pueden construir sus propias extensiones con las mismas herramientas.",
        },
        aios: {
          body: "El espacio de trabajo unificado de operaciones: flujos interdepartamentales, inteligencia de decisión, búsqueda corporativa, analítica en tiempo real, copilotos integrados, cuadros de mando, notificaciones y gestión del trabajo. Para el personal de primera línea es la pantalla que abre cada día; para la dirección, una cabina en tiempo real; para los agentes, el lugar donde las tareas se entregan a las personas. El humano en el bucle es un diseño de nivel sistema operativo, no una ventana emergente.",
        },
      },
      callout: {
        label: "Lo que esto significa para la entrega:",
        text: "Una nueva plantilla sectorial equivale a un conjunto de aplicaciones y procesos preconstruidos en Foundry. Por eso «nuevo sector = semanas de configuración, no años de desarrollo» se sostiene también en el plano de la ingeniería.",
      },
    },
    layer5: {
      title: "Aplicaciones de IA generales: 12 productos reutilizados en todos los sectores",
      lede: "Estos 12 productos no pertenecen a ningún sector concreto. Decidir, ejecutar, predecir, ver, escuchar, dar soporte, crecer: todos los sectores lo necesitan. Curtidos en producción con clientes de la cadena de suministro, se reutilizan sin ninguna reforma al cambiar de vertical.",
      products: {
        gpt: {
          tag: "IA PARA CADA DECISIÓN",
          desc: "Interfaz operativa en lenguaje natural: gobierna toda la plataforma con una sola frase",
        },
        claw: { tag: "EJECUCIÓN SIN FRICCIÓN", desc: "Ejecutor de flujos multiagente: de la sugerencia a la ejecución" },
        flow: { tag: "DISEÑA. AUTOMATIZA. ESCALA.", desc: "Constructor visual de flujos de trabajo con IA" },
        sense: { tag: "VERLO TODO. AL INSTANTE.", desc: "Visibilidad en tiempo real + cabina de gemelo digital" },
        predict: {
          tag: "ANTICIPA LO QUE VIENE",
          desc: "Motor de previsión general: demanda / flujo de caja / afluencia / recursos",
        },
        ops: { tag: "OPERACIONES QUE SE GOBIERNAN SOLAS", desc: "Operación autónoma y optimización continua" },
        audit: { tag: "ENCUENTRA LO QUE ESTÁS PERDIENDO", desc: "Detección de errores de facturación, auditoría de cumplimiento y recuperación de costes" },
        vision: { tag: "VE LO QUE OTROS NO VEN", desc: "Visión por computador: seguridad, control de calidad y vigilancia de instalaciones" },
        voice: { tag: "OPERA SIN MANOS", desc: "IA de voz: trabajo de primera línea y llamadas entrantes en manos libres" },
        support: { tag: "TODOS LOS CANALES. UN SOLO HILO.", desc: "Ticketing omnicanal: correo · mensajería · SMS · teléfono" },
        grow: { tag: "UN PIPELINE QUE NUNCA DUERME", desc: "IA de GTM: SDR/BDR · SEO/AEO/GEO · generación de contenidos" },
        doc: {
          tag: "DOCUMENTOS QUE SE PROCESAN SOLOS",
          desc: "Automatización documental: lectura y generación de contratos, facturas e informes",
        },
      },
      callout: {
        label: "La prueba de que son generales:",
        text: "ItemSupport puede gestionar el ticket de un envío retrasado, la petición de reparación de un inquilino o la consulta de un cliente; ItemPredict puede prever inventario, afluencia a un restaurante o absorción de una promoción. Los objetos vienen de la ontología; la capacidad, del producto.",
      },
    },
    layer6: {
      title: "Plantillas sectoriales: 10 soluciones verticales intercambiables",
      lede: "Cada plantilla = objetos de la ontología sectorial + flujos preconstruidos + paquete de reglas de cumplimiento + agentes sectoriales + conectores de sistemas. La plantilla de cadena de suministro está probada en producción y valida todo el mecanismo; los demás sectores lo replican.",
      proven: "✓ PROBADO",
      templates: {
        chain: {
          tag: "CADENA DE SUMINISTRO Y LOGÍSTICA",
          desc: "Ejecución completa de pedidos, transporte, almacén y patio: la plantilla insignia, en producción",
        },
        dock: { tag: "PUERTOS Y DRAYAGE", desc: "Operación portuaria, de drayage y de contenedores (subplantilla de cadena de suministro)" },
        trade: { tag: "COMERCIO GLOBAL", desc: "Clasificación arancelaria, cumplimiento transfronterizo e inteligencia comercial" },
        fin: {
          tag: "ASESORÍA FINANCIERA",
          desc: "Asesoría y patrimonio: perfilado de clientes, analítica de carteras, reportes regulatorios y copiloto del asesor",
        },
        dine: {
          tag: "OPERACIONES DE RESTAURACIÓN",
          desc: "Operación de locales: turnos, previsión de preparación, control de mermas y cabina multitienda",
        },
        estate: {
          tag: "GESTIÓN INMOBILIARIA",
          desc: "Gestión de arrendamientos, servicios al inquilino, tickets de reparación, energía y operación de activos",
        },
        build: {
          tag: "PROMOCIÓN INMOBILIARIA",
          desc: "Promoción: planificación de obra, proveedores, control de costes y absorción de ventas",
        },
        health: { tag: "OPERACIONES SANITARIAS", desc: "Operación y suministro sanitario: cadena de frío, caducidades y trazabilidad de cumplimiento" },
        auto: { tag: "MANUFACTURA Y AUTOMOCIÓN", desc: "Manufactura y automoción: secuenciación JIT, riesgo de proveedores y coordinación de línea" },
        retail: { tag: "RETAIL Y COMERCIO", desc: "Retail y comercio: pedidos omnicanal, inventario, devoluciones y programas de fidelización" },
      },
      callout: {
        label: "El significado comercial de las plantillas:",
        text: "Las plataformas horizontales compiten por funcionalidades; las plantillas verticales, por conocimiento sectorial. ITEM soporta N plantillas sobre una sola plataforma, con un coste marginal decreciente por cada sector nuevo y en el segmento de mayor crecimiento de todo el mercado de agentes (≈62.7% CAGR).",
      },
    },
    catalog: {
      eyebrow: "05 · Catálogo de producto",
      title: "Los 22 productos: 12 aplicaciones generales × 10 plantillas sectoriales",
      general: {
        tag: "APLICACIONES GENERALES",
        subtitle: "Reutilizadas en todos los sectores · Layer 5",
        count: "12 PRODUCTOS",
        note: "Necesarias en todos los sectores, sin reformas al cambiar de vertical.",
      },
      vertical: {
        tag: "PLANTILLAS SECTORIALES",
        subtitle: "Soluciones verticales intercambiables · Layer 6",
        count: "10 PLANTILLAS",
        note: "Objetos sectoriales + flujos + cumplimiento + agentes, empaquetados.",
        proven: "✓ probado",
      },
      table: {
        head: { dimension: "Dimensión", general: "Aplicaciones generales (12)", templates: "Plantillas sectoriales (10)" },
        rows: {
          question: {
            label: "Pregunta que responde",
            general: "«¿Qué capacidades de IA necesita la operación de una empresa?»",
            template: "«¿Qué forma toman esas capacidades en un sector concreto?»",
          },
          reuse: {
            label: "Modelo de reutilización",
            general: "100% reutilizable entre sectores, se entrega con la plataforma",
            template: "Se carga por sector; componible, personalizable y construible por socios",
          },
          economics: {
            label: "Economía de I+D",
            general: "Se construye una vez y el coste se amortiza entre todos los sectores",
            template: "La primera plantilla (cadena de suministro) es la más cara; cada siguiente cuesta menos",
          },
          sales: {
            label: "Papel comercial",
            general: "Valor central de la suscripción a la plataforma",
            template: "La cuña sectorial y la fuente de la prima de precio",
          },
          validation: {
            label: "Estado de validación",
            general: "En pleno funcionamiento en producción en la cadena de suministro",
            template: "ItemChain está probado; el resto replica el mecanismo ya validado",
          },
        },
      },
    },
    verticals: {
      eyebrow: "06 · Mercados verticales",
      title: "Cinco verticales prioritarios: tamaño de mercado y anclas de valor probadas",
      items: {
        supply: {
          badge: "✓ PROBADO",
          name: "Cadena de suministro y logística",
          market: "Mercado de IA en logística · década de 2030",
          basis: "desde $20.1B · 25.9% CAGR",
          body: "Los adoptantes tempranos ya observan ~-15% de coste y +35% de rotación de inventario. Es la cuna de la plantilla insignia de ITEM.",
        },
        fin: {
          name: "Asesoría financiera",
          market: "Activos bajo gestión en robo-advisory · 2027 (PwC)",
          basis: "frente a $2.5T en 2022",
          body: "BCG 2026: en gestión patrimonial, ser AI-first ya es una obligación y no una opción; la IA redacta planes financieros y automatiza documentación de cumplimiento.",
        },
        dine: {
          name: "Operaciones de restauración",
          market: "Mercado de IA en restauración · 2034",
          basis: "desde $13.2B en 2025 · 22.6% CAGR",
          body: "Inventario y previsión con IA: coste de alimentos -8–14%, mermas -25–40%, roturas de stock -60%; un ahorro neto de $15K–65K por local y año.",
        },
        estate: {
          name: "Gestión inmobiliaria",
          market: "Ganancias de eficiencia por IA en el sector inmobiliario · 2030",
          basis: "(Morgan Stanley)",
          body: "El 37% de las tareas en REIT y CRE es automatizable, concentrado en gestión, ventas, soporte administrativo y mantenimiento.",
        },
        build: {
          name: "Promoción inmobiliaria",
          market: "Mercado de IA en el sector inmobiliario · 2029",
          basis: "desde $303B en 2025 · 34.4% CAGR",
          body: "McKinsey estima que la IA puede aportar más de $180B al año al sector inmobiliario; el error de los modelos de valoración ha bajado del 10–15% al 2.8%.",
        },
      },
      callout: {
        label: "Cinco caras de una misma plataforma:",
        text: "Se cambian los objetos de la ontología, los procesos de Foundry y la plantilla de la capa 6; las capas 2 a 5 quedan intactas. Ese es el sentido literal de «un sector es solo una plantilla».",
      },
      sources:
        "Fuentes: IA en logística (investigación sectorial, heredada del análisis previo); previsión de AUM en robo-advisory de PwC; BCG, 2026 Global Wealth Report; DataIntelo, AI in Restaurants Market 2025–2034; Morgan Stanley Research; Research and Markets, AI in Real Estate; McKinsey.",
    },
    expansion: {
      eyebrow: "07 · Mapa de expansión",
      title: "Mapa de expansión: un núcleo × cuatro superclústeres × tres fases",
      lede: "Evaluamos el encaje arquitectónico de ITEM sector por sector frente a la taxonomía oficial de la BLS de EE. UU.: 54 sectores superan los 8.0/10. Eso no significa 54 productos: todos los sectores que califican se agrupan en cuatro superclústeres que comparten un mismo núcleo transaccional, en el que entramos por fases y con disciplina. El plano es exhaustivo; los pasos, contenidos.",
      clusters: {
        a: {
          title: "Ⓐ Movimiento de las cosas",
          scope: "Transporte de mercancías · puertos · ferrocarril · cadena de frío · mayoristas",
          statusLabel: "Ya en marcha:",
          status: "ItemChain ✓ · ItemDock · ItemTrade",
        },
        b: {
          title: "Ⓑ Trabajo sobre las cosas",
          scope: "Centros de datos · construcción · instalaciones · servicio de campo · utilities",
          statusLabel: "Plantillas asociadas:",
          status: "ItemBuild · ItemEstate",
        },
        c: {
          title: "Ⓒ Transformación de las cosas",
          scope: "Minería · materiales · manufactura · reciclaje y circularidad",
          statusLabel: "Plantillas asociadas:",
          status: "ItemAuto + expansión futura",
        },
        d: {
          title: "Ⓓ Riesgo sobre las cosas",
          scope: "Seguros · garantías · siniestros · capital, la capa económica",
          statusLabel: "Ventaja:",
          status: "Disponer de la evidencia física antes de que se produzca el siniestro",
        },
      },
      phases: {
        p1: {
          phase: "PHASE 1 · AHORA → Y2",
          title: "Primero multimodal, después multisectorial",
          body: "Completar la red sobre el núcleo de carga ya probado: puertos y soporte al transporte (encaje 9.8), marítimo (9.8), ferrocarril e intermodal (9.7).",
          note: "La señal de disciplina: ningún sector nuevo hasta que el clúster Ⓐ sea una red completa.",
        },
        p2: {
          phase: "PHASE 2 · Y2 → Y3",
          title: "Primer sistema operativo adyacente: ItemInfra",
          body: "Anclado en la ola de construcción de centros de datos para IA (encaje 9.7): el Departamento de Energía de EE. UU. proyecta que los centros de datos alcanzarán el 11.8% del consumo eléctrico nacional. Un proyecto de centro de datos equivale a cadena de suministro de alto valor + construcción + servicio de campo + seguridad, todo sobre el núcleo compartido del clúster Ⓑ.",
        },
        p3: {
          phase: "PHASE 3 · Y3 → Y5",
          title: "La red de materiales: ItemMaterials",
          body: "Minería (9.6), química (9.3), baterías y reciclaje (9.2–9.4): el clúster Ⓒ, impulsado por vientos regulatorios favorables. El pasaporte europeo de baterías será obligatorio en febrero de 2027 y la trazabilidad alimentaria de la FDA entra en vigor en 2028.",
        },
      },
      callout: {
        label: "La frase para inversores:",
        text: "La mayor oportunidad de expansión no es «más verticales de software», sino un único núcleo transaccional que gobierne el movimiento, el trabajo, la transformación y el riesgo de las cosas físicas. La tesis pasa de «¿ha llegado la mercancía?» a «¿cambió el mundo físico según lo contratado, podemos probarlo y debe moverse el valor?».",
      },
    },
    physical: {
      eyebrow: "08 · Mundo físico",
      title: "Conectar el mundo físico: una capa abierta de integración de dispositivos y robots",
      lede: "Para los sectores que requieren ejecución física (almacenes, cocinas, rondas en edificios, obras), ITEM se conecta con cualquier dispositivo que el cliente posea o adquiera mediante los protocolos abiertos de la capa 7. No nos atamos a ninguna marca de hardware ni fabricamos hardware. El hardware es un activo del cliente; la inteligencia y la orquestación son el producto de ITEM.",
      cards: {
        robots: {
          title: "Cualquier tipo de robot",
          body: "AGV/AMR · brazos robóticos · humanoides · cuadrúpedos · drones · robots de servicio en sala · robots de limpieza e inspección, unificados por la capa de autonomía heterogénea y coordinados en un mismo emplazamiento aunque sean de marcas distintas.",
        },
        protocols: {
          title: "Pila de protocolos abierta",
          body: "MCP · A2A · REST API · EDI · flujos de eventos · RTLS · PLC industrial. Incorporar un dispositivo nuevo es un paso de configuración, no un proyecto de desarrollo.",
        },
        scenarios: {
          title: "Escenarios físicos con forma sectorial",
          body: "Carretillas y clasificación en almacenes; servicio en sala y cocina en restaurantes; rondas y seguridad en edificios; vigilancia y topografía en obra. La semántica de cada tarea la define la plantilla sectorial correspondiente.",
        },
        proven: {
          title: "Probado en el entorno más exigente",
          body: "El almacén logístico es el entorno más duro de la IA física (muchos dispositivos, alto rendimiento, tiempo real estricto). Una capa de integración probada ahí solo puede resultar más sencilla en otros sectores.",
        },
      },
      callout: {
        label: "En una línea:",
        text: "ITEM hace más inteligente cada dispositivo y cobra por esa inteligencia de forma continua, mientras los dispositivos siguen formando, siempre, un ecosistema abierto.",
      },
    },
    competitive: {
      eyebrow: "09 · Posicionamiento competitivo",
      title: "Posicionamiento competitivo: capa de conocimiento · capa de proceso · capa de operación",
      lede: "Glean ayuda a la empresa a «saber lo que sabe» (capa de conocimiento); Automation Anywhere hace que «los procesos existentes se ejecuten solos» (capa de proceso). Ambas son capas de refuerzo sobre los sistemas que el cliente ya tiene. ITEM ocupa una tercera posición: la operación misma se ejecuta sobre un sistema operativo de IA, con el modelo de datos operativo en propiedad y extensión hasta el mundo físico. Ellos refuerzan el stack; nosotros nos convertimos en el stack.",
      axes: { y: "DIGITAL + FÍSICO", x1: "REFORZAR EL STACK", x2: "SER LA OPERACIÓN" },
      dots: {
        bigtech: { sub: "Presión de las grandes tecnológicas en este cuadrante" },
        glean: { sub: "Work AI · capa de conocimiento" },
        aa: { sub: "APA · capa de proceso (bots de software)" },
        item: { sub: "SO de operaciones · ontología L2 + plantillas L6 + físico L7" },
      },
      table: {
        head: { dimension: "Dimensión" },
        rows: {
          dataModel: {
            label: "Modelo de datos",
            glean: "Grafo de contexto de documentos y personas",
            aa: "Definiciones de proceso; sin modelo de datos de negocio",
            item: "Ontología operativa de los objetos de negocio + gemelo digital",
          },
          relation: {
            label: "Relación con los sistemas del cliente",
            glean: "Se sitúa encima y lee (más de 250 conectores)",
            aa: "Automatiza por encima, vía interfaz o API",
            item: "Se convierte en el sistema de registro operativo; L1 y L7 integran el resto",
          },
          physical: {
            label: "Mundo físico",
            glean: "Ninguno",
            aa: "Solo «bots» de software",
            item: "Robots reales + dispositivos + PLC (L7)",
          },
          verticalization: {
            label: "Forma de verticalizar",
            glean: "Segmentos de marketing de un mismo producto horizontal",
            aa: "Soluciones de proceso preconstruidas (AP, KYC, RCM)",
            item: "Plantillas sectoriales de grado operativo (objetos + flujos + cumplimiento + agentes)",
          },
          budget: {
            label: "Resistencia presupuestaria",
            glean: "Presupuesto de productividad: recortable",
            aa: "Presupuesto de proceso: sustituible",
            item: "Crítico para la operación: apagarlo es parar el negocio (la lógica detrás de un NRR del 118%)",
          },
        },
      },
      callout: {
        label: "El solapamiento, con honestidad, y la respuesta:",
        text: "Las capas intermedias (construcción, orquestación y gobernanza de agentes en L3–L5) convergerán en las tres compañías: Glean ya ofrece un «Agent Harness» y AA acaba de lanzar «EnterpriseClaw» (colisión de nombres con Item Harness / ItemClaw; revisión de marcas en curso). Nuestro núcleo defendible está donde ninguna de las dos puede llegar sin reescribir software de clase ERP: la ontología operativa L2, las plantillas operativas L6 y la ejecución física L7. Postura de coopetición: Glean se conecta a ITEM como fuente de contexto en lugar de ser un rival frontal.",
      },
    },
    businessModel: {
      eyebrow: "10 · Modelo de negocio",
      title: "Modelo de negocio: suscripción a la plataforma × prima de plantilla × crecimiento por uso",
      streams: {
        platform: {
          title: "Suscripción a la plataforma (SaaS/PaaS)",
          body: "La plataforma central y las aplicaciones generales de las capas 2 a 5, suscritas por módulo y por usuario: la base estable de ingresos.",
        },
        template: {
          title: "Prima de la plantilla sectorial",
          body: "Las plantillas de la capa 6 se licencian por sector. Las soluciones verticales incorporan conocimiento sectorial y paquetes de cumplimiento, por lo que se sitúan por encima del precio de las funcionalidades horizontales.",
        },
        usage: {
          title: "Uso y ejecución (FaaS)",
          body: "La ejecución de agentes, las ejecuciones de flujos y el procesamiento documental se facturan por consumo, creciendo de forma natural con el volumen del cliente.",
        },
        device: {
          title: "Suscripción de inteligencia por dispositivo",
          body: "Cada robot o dispositivo conectado suscribe mensualmente la capa de inteligencia: riesgo cero en hardware e ingresos recurrentes.",
        },
      },
      stats: {
        gartner: {
          label: "Gartner: aportación de la IA agéntica a los ingresos del software empresarial en 2035 (~30%); la combinación de ingresos de ITEM apunta directamente a esa curva",
        },
        cagr: { label: "CAGR del segmento de agentes de IA verticales: la capa de plantillas ocupa la posición de mayor crecimiento del mercado" },
        templates: {
          value: "N × Plantillas",
          label: "Cada nueva plantilla sectorial: nuevo TAM, nuevos compradores y coste marginal decreciente; la estructura compuesta de la economía de plataforma",
        },
      },
      callout: {
        label: "El volante de la expansión:",
        text: "Las aplicaciones generales abaratan la entrada en un sector → las plantillas desbloquean la prima vertical → los datos operativos del cliente vuelven a la ontología → las plantillas afinan con el uso → el siguiente sector llega más rápido.",
      },
      sources:
        "Fuentes: Gartner (peso de la IA agéntica en los ingresos del software empresarial); MarketsandMarkets (CAGR de agentes verticales).",
    },
    gtm: {
      eyebrow: "11 · Estrategia de entrada al mercado",
      title: "Land → Expand → Own: el mismo manual, reutilizado en cada sector",
      phases: {
        land: {
          phase: "PHASE 1 · LAND",
          title: "Entrar con la plantilla",
          body: "Usar la plantilla sectorial + ItemGPT en un único escenario de alto dolor: ejecución del transporte en logística, previsión de preparación en restauración, tickets de reparación en gestión inmobiliaria, documentación de cumplimiento en asesoría.",
          note: "En funcionamiento en semanas; primero, ganar un ROI cuantificable.",
        },
        expand: {
          phase: "PHASE 2 · EXPAND",
          title: "Expandir con las aplicaciones generales",
          body: "Desplegar a lo largo de las 12 aplicaciones generales: ItemSupport asume el servicio omnicanal, ItemPredict cubre más previsiones, ItemAudit recupera pérdidas e ItemGrow impulsa el pipeline.",
          note: "Cada módulo nuevo se apoya en la misma ontología: la expansión es arquitectónica.",
        },
        own: {
          phase: "PHASE 3 · OWN",
          title: "Ser el sistema operativo",
          body: "Las aplicaciones y procesos propios del cliente se asientan en Foundry, los dispositivos físicos se suman a la suscripción de inteligencia y AI OS se convierte en el espacio de trabajo que todos abren cada día.",
          note: "En ese punto ITEM deja de ser un proveedor: es el sistema operativo de la operación del cliente.",
        },
      },
      callout: {
        label: "Solo cambia una palabra respecto a la edición de cadena de suministro:",
        text: "La plantilla de entrada de la fase 1 pasa de «TMS/WMS» a «la de tu sector». El manual, la ruta de expansión y el desenlace son idénticos, porque la plataforma es idéntica.",
      },
    },
    finance: {
      eyebrow: "12 · Modelo financiero — Supuestos",
      title: "Supuestos del modelo: el motor de ingresos y el motor de costes",
      lede: "Este modelo contabiliza únicamente los ingresos de nuevos verticales de la Edición General; la línea de cadena de suministro ya en marcha queda excluida. Todos los supuestos se anclan a los benchmarks SaaS/IA de 2026, con sesgo conservador. Y1 = los primeros 12 meses tras el lanzamiento comercial de la Edición General.",
      cards: {
        pricing: {
          title: "Clientes y precios",
          body: "El ACV mixto parte de $260K (empresa $500K+ / mid-market $150K) y sube hasta $410K en Y5 por expansión de módulos. Clientes: 22 → 60 → 130 → 230 → 370. Se asume un NRR del 118%, exactamente la mediana del SaaS empresarial con ACV superior a $100K; no es una apuesta agresiva.",
        },
        margin: {
          title: "Trayectoria del margen bruto (la versión honesta)",
          body: "El coste de inferencia deprime el margen inicial de las compañías AI-native (mediana de las LLM-native ~52%; Bessemer sitúa en el 25% la media de las compañías de IA en fase de escalado). Partimos del 62% y alcanzamos el 76% en Y5: el motor de esa mejora es el enrutado de modelos de Blackbox Router junto con la escala. El SaaS tradicional se mueve entre el 77% y el 81%, y hacia ahí convergemos.",
        },
        cost: {
          title: "Estructura de costes",
          body: "Coste totalmente cargado por persona: $180K al año (retribución + beneficios + equipamiento). Plantilla de 78 → 310. I+D anticipada (la fábrica de plantillas); ventas y marketing crecen con los ingresos. Los ingresos se reconocen como la media del ARR de apertura y de cierre, sin inflar el año con el ARR de salida.",
        },
      },
      table: {
        head: { engine: "Motor de ingresos" },
        rows: {
          customers: "Clientes (cierre)",
          acv: "ACV mixto ($K)",
          arr: "ARR de cierre ($M)",
          growth: "Crecimiento interanual del ARR",
        },
      },
      sources:
        "Fuentes de benchmark: conjunto de datos Benchmarkit 2025 (mediana de NRR empresarial 118%, margen bruto 77–81%); Bessemer, State of the Cloud 2026 (márgenes de compañías de IA); SaaS Capital / ChartMogul (distribuciones de crecimiento).",
    },
    pnl: {
      eyebrow: "13 · Modelo financiero — Cuenta de resultados",
      title: "Cuenta de resultados a cinco años: de –$18M a +$16M de EBITDA",
      rows: {
        revenue: "Ingresos reconocidos (ARR medio)",
        grossMargin: "Margen bruto",
        grossProfit: "Beneficio bruto",
        rnd: "I+D (fábrica de plantillas + plataforma)",
        sm: "Ventas y marketing",
        ga: "Gastos generales y administración",
        opex: "OpEx total",
        ebitda: "EBITDA",
        ebitdaMargin: "Margen EBITDA",
        headcount: "Plantilla",
      },
      chartNote:
        "EBITDA ($M) · Las pérdidas máximas se concentran en la expansión comercial de Y2–Y3; a partir de Y4, la eficiencia comercial y la mejora de margen se refuerzan mutuamente.",
      callout: {
        label: "Tres lecturas para un inversor:",
        points: [
          "① Las pérdidas responden al ritmo de inversión, no a un deterioro de la economía unitaria (el margen bruto sube cada año).",
          "② El OpEx cae del 690% de los ingresos al 63%: hay apalancamiento operativo real.",
          "③ Y5 combina alto crecimiento (+78%) con margen positivo (+14%): Rule of 40 ≈ 98.",
        ],
      },
    },
    funding: {
      eyebrow: "14 · Modelo financiero — Financiación y punto de equilibrio",
      title: "Plan de financiación y punto de equilibrio: $95M en total, equilibrio en Y4 Q4",
      rounds: {
        a: {
          name: "CAPITAL DE LANZAMIENTO · SERIES A",
          when: "En el lanzamiento de la Edición General · pista hasta el mes 18–20",
          alloc: {
            rnd: "I+D y fábrica de plantillas 45% ($15.8M): refuerzo de la plataforma + las 3 primeras plantillas de nuevos verticales",
            gtm: "GTM 28% ($9.8M): equipos de ventas y marketing para 3 verticales",
            compute: "Cómputo e infraestructura 15% ($5.2M)",
            ga: "Certificaciones + gastos generales 12% ($4.2M)",
          },
        },
        b: {
          name: "AMPLIACIÓN · SERIES B",
          when: "Mes 18–22 · con un ARR de $12–16M (múltiplos privados AI-native: 25–30× ARR)",
          alloc: {
            gtm: "Escalado de GTM 50% ($30M)",
            templates: "Expansión de plantillas, +5 verticales 20% ($12M)",
            intl: "Internacionalización 12% ($7.2M)",
            compute: "Cómputo 10% ($6M)",
            buffer: "Colchón 8% ($4.8M)",
          },
        },
      },
      table: { rows: { ebitda: "EBITDA del ejercicio", burn: "Consumo acumulado", cash: "Caja de cierre (A $35M + B $60M)" } },
      breakeven:
        "Equilibrio mensual de EBITDA: Y4 Q4 | Ejercicio completo positivo en Y5 con +$16M | Necesidad máxima de financiación $78.3M (Y4) | Colchón mínimo de caja $16.7M",
      callout: {
        label: "Por qué dos rondas y no una:",
        text: "La Serie A se valora únicamente para «replicar la prueba de la cadena de suministro en 3 nuevos verticales»; la Serie B se levanta cuando el mecanismo de plantillas se ha validado por segunda vez, con un ARR de $12–16M, y se valora con múltiplos AI-native de 25–30×, minimizando la dilución de los fundadores. Si el mercado de la Serie B se deteriora, recortar la expansión comercial permite alcanzar el equilibrio por medios propios (véase el análisis de escenarios más abajo).",
      },
    },
    metrics: {
      eyebrow: "15 · Modelo financiero — Métricas para inversores",
      title: "El cuadro de mando del inversor: cada métrica frente a los benchmarks de 2026",
      kpis: {
        payback: {
          term: "Recuperación del CAC",
          note: "Y1→Y5. Benchmark: mediana empresarial de 18–24 meses, nivel élite por debajo de 12; llegamos a 15 en Y3 y al terreno élite en Y5",
        },
        ltv: {
          term: "LTV:CAC",
          note: "(horizonte de 5 años · NRR del 118%). Benchmark: saludable 3:1, media empresarial 4.5:1, cuartil superior 4–6:1",
        },
        nrr: {
          term: "NRR",
          note: "= la mediana empresarial; las compañías por encima del 120% obtienen valoraciones 2.3× superiores. La arquitectura multimódulo es nuestra palanca estructural para superar el 120%",
        },
        burn: {
          term: "Burn multiple",
          note: "Y1→Y4 (consumo neto por cada $1 de ARR neto nuevo). Benchmark: por encima de 3 con más de $10M de ARR es un problema, por debajo de 1 es élite; el 83% de los inversores de fase tardía lo considera crítico",
        },
        magic: { term: "Magic number", note: "(Y3: ARR neto nuevo / gasto en ventas y marketing). Benchmark: mediana 0.7, excelente a partir de 1.0" },
        rule40: {
          term: "Rule of 40",
          note: "(Y5: 78% de crecimiento + 14% de margen). Benchmark: por encima de 40 se aprueba, por encima de 60 se obtiene una prima de valoración de 2–3×",
        },
        arrPerEmployee: {
          term: "ARR por empleado",
          note: "(Y5: $151.7M / 310 personas): la lectura más legible de la eficiencia de capital",
        },
        expansionCost: {
          term: "Coste por cada $1 de ARR de expansión",
          note: "frente a $2.00 por cliente nuevo (dato sectorial): la arquitectura de plantillas desplaza la mezcla hacia la expansión y reduce estructuralmente el CAC mixto",
        },
      },
      scenarios: {
        head: {
          scenario: "Escenario",
          arr: "ARR en Y5",
          breakeven: "Punto de equilibrio",
          capital: "Capital total",
          delta: "Diferencia clave",
        },
        rows: {
          conservative: {
            name: "Conservador",
            breakeven: "Final de Y5",
            capital: "~$115M (+$25M Serie C)",
            delta: "Clientes -25% · ACV -15% · mejora de margen más lenta",
          },
          base: { name: "Base (este modelo)", breakeven: "Y4 Q4", capital: "$95M", delta: "Según los supuestos anteriores" },
          aggressive: {
            name: "Agresivo",
            breakeven: "Y4 Q1",
            capital: "~$70M",
            delta: "Venta cruzada sobre la base de cadena de suministro + canal de socios activado antes",
          },
        },
      },
      sources:
        "Fuentes de benchmark: Benchmarkit 2025 (recuperación del CAC / NRR / márgenes / coste de expansión $1 frente a $2); SaaS Capital / ScaleXP (burn multiple, encuestas a inversores); KeyBanc / ICONIQ (relación entre NRR y valoración); Phoenix Strategy Group (prima de la Rule of 40).",
    },
    vision: {
      eyebrow: "16 · La visión",
      title: {
        l1: "La próxima empresa de software empresarial de $100B",
        l2pre: "es un ",
        l2accent: "sistema operativo de IA de propósito general",
        l3pre: "más una ",
        l3accent: "biblioteca de plantillas sectoriales",
        l3post: ".",
      },
      subtitle:
        "Las plataformas horizontales tienen escala sin profundidad sectorial; las soluciones verticales tienen profundidad sin economía de plataforma. ITEM AI reúne ambas: un núcleo general de cinco capas ya probado (capas 2–6), una biblioteca de plantillas que arranca en la cadena de suministro y se despliega hacia todos los sectores, y fronteras de integración completamente abiertas en ambos extremos (capas 1 y 7).",
      tags: {
        platform: "Una plataforma",
        industries: "N sectores",
        proven: "Cadena de suministro · Probada",
        next: "Tu sector · El siguiente",
      },
      meta: "ITEM AI · GENERAL ENTERPRISE EDITION · product_general_v4",
    },
  },
};

export default pack;
