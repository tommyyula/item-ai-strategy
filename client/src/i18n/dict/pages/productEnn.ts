import type { LocalePack } from "../index";

/**
 * pages.productEnn — "Product Overview" presentation page for ENN.
 * Ported from the standalone HTML deck; the original stacked zh/en/ja markup
 * has been split into locales here, and Spanish added.
 */
const pack: LocalePack = {
  /* ------------------------------------------------------------------ zh */
  zh: {
    nav: { story: "故事", platform: "平台", products: "产品" },
    partner: {
      alt: "新奥集团 ENN Group",
      caption: "为新奥集团准备的产品概览",
    },
    hero: {
      badge: "产品概览 · 供应链 AI 操作系统 · 2026",
      titleMain: "面向实体经济的",
      titleAccent: "AI 原生操作系统",
      sub: "ITEM AI 用一个由本体（Ontology）驱动的企业级 AI 操作系统，替代碎片化的供应链软件——统一驱动人 + AI + 机器人 + 运营，覆盖运输、仓储、物流、商务与工业自动化。",
      stats: {
        products: "AI 核心产品",
        layers: "核心层架构",
        pilot: "试点上线周期",
        automation: "异常自动化率",
      },
      chip: "一个平台 · 多条扩张向量",
    },
    sections: {
      problem: "问题",
      category: "品类",
      platform: "平台架构",
      systems: "五个核心层",
      products: "AI 核心产品",
      physical: "物理 AI 与 RaaS",
      flywheel: "飞轮",
      cases: "案例研究",
      implementation: "实施周期",
      customers: "目标客户",
      competitive: "竞争定位",
      vision: "愿景",
    },
    problem: {
      title: "全球供应链运行在碎片化系统上",
      lede: "TMS 一家供应商、WMS 另一家、OMS 又一家；机器人软件、可视化、分析、AI Copilot 各自独立，工作流彼此割裂。企业为此持续支付三项「隐藏税」。",
      kicker: { compliance: "隐藏税 一", data: "隐藏税 二", operations: "隐藏税 三" },
      taxes: {
        compliance: {
          name: "合规税",
          body: "扣款、OTIF 罚款、审计、许可、索赔、SLA 失败——错误在系统之间的缝隙里发生。",
        },
        data: {
          name: "数据税",
          body: "预测不准、系统割裂、可视化差、决策延迟——数据存在，但无法转化为行动。",
        },
        operations: {
          name: "运营税",
          body: "手工工作流、劳动力低效、编排成本高——人在替软件做软件该做的事。",
        },
      },
      note: {
        amount: "数百万至数千万美元",
        body: "大型企业每年仅为「运营」就在碎片化系统上花费数百万至数千万美元。市场正在从「记录型软件（Software of Record）」转向「行动型软件（Software of Action）」。",
      },
    },
    category: {
      titleMain: "不是更多工具，",
      titleAccent: "而是一个操作系统",
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
        sub: "用一个由本体驱动的 AI 操作系统，替代碎片化的企业软件。",
      },
    },
    stack: {
      title: "The ITEM Stack — 一页讲清平台",
      lede: "自上而下的七层堆栈。每一层都是独立的护城河，叠加在一起就是无法被单点替代的操作系统。",
      note: "每一个运营决策都依赖 ITEM 的业务图谱——本体依赖（Ontology Dependency）使整个堆栈极难替换。",
      layers: {
        app: {
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
        infra: {
          name: "基础设施",
          detail: "Private Stack · Cloud · Edge · GPU / NPU",
          tag: "IaaS",
        },
      },
    },
    systems: {
      title: "五个核心层",
      lede: "每个系统都有清晰的设计目的与商业角色。其余一切都是「平台扩展」，而非新的创业公司。",
      labels: { design: "设计", purpose: "目的", commercial: "商业角色" },
      items: {
        ontology: {
          badge: "护城河",
          design:
            "受治理的知识图谱与实时数字孪生层，定义业务对象、关系、逻辑、动作与动态规则。",
          purpose:
            "作为单一事实来源，驱动平台范围内一致、可执行的智能——订单、货件、集装箱、卡车、司机、仓库、机器人、月台门都在同一语义模型中。",
          products: {
            studio: { name: "ITEM.Ontology Studio", role: "DDD 建模" },
            executor: { name: "ITEM.Ontology Executor", role: "知识图谱与检索" },
          },
          caps: ["业务对象建模", "知识图谱", "规则引擎", "数字孪生", "语义互操作"],
          commercial: "不单独销售——作为战略护城河层捆绑提供，制造本体依赖。",
        },
        foundry: {
          badge: "PaaS",
          design:
            "由本体驱动的企业运营平台——统一异构数据源、低代码应用构建器、工作流编排与运营数字孪生。",
          purpose:
            "在人 + AI 团队之间编排智能决策，是 OMS、TMS、WMS、YMS、WES、WCS 等全部应用的开发与运行底座。",
          products: {
            bi: { name: "ITEM.BI", role: "数据平台" },
            di: { name: "ITEM.DI", role: "数据集成" },
          },
          caps: ["数据集成", "应用构建器", "事件处理", "数据管道", "Low-code"],
          commercial: "PaaS——席位许可 · 工作流执行 · 开发者许可 · 企业平台订阅。",
        },
        aios: {
          badge: "捆绑平台层",
          design:
            "为生产力、智能与价值链决策而设计的 AI 就绪操作系统——统一运营工作区、实时数据融合、嵌入式 Copilot、事件编排。",
          purpose:
            "让人 + AI 在同一工作面上观察、预测、决策、优化，成为整个企业的实时运营大脑。",
          runtime: { name: "Agent Runtime", role: "智能体运行时" },
          caps: ["决策智能", "实时分析", "企业搜索", "Copilot", "人机协同"],
          commercial: "捆绑平台层，随企业部署一同交付，提升整体 ACV。",
        },
        aip: {
          badge: "战略平台",
          design:
            "企业 AI 运行时——多模型编排、智能体运行时、自主工作流、人在回路治理、提示 / 版本管理、可观测性与合规审计。",
          purpose:
            "把 LLM 与智能体安全地锚定到现实世界数据与运营系统，让决策变成可审计、可回滚的执行。",
          products: {
            gpt: { name: "ITEM.GPT", role: "多智能体平台" },
            flow: { name: "ITEM.Flow", role: "工作流" },
            vision: { name: "ITEM.Vision", role: "IoT、GIS 与视觉模型" },
          },
          caps: ["多模型编排", "智能体运行时", "工具调用", "治理", "审计"],
          commercial: "核心平台产品——SaaS 许可 · 用量计算 · 智能体执行费 · FaaS 计费。",
        },
        harness: {
          badge: "企业基础设施",
          design:
            "持续交付 / 自主部署平台——在任何环境（云、本地、气隙、边缘）自主部署、监控、更新并管理软件，内置金丝雀发布、回滚与合规监控。",
          purpose:
            "让关键任务级 AI 可以部署到客户的任何边界之内——这是政府、国防、医疗与制造客户的入场前提，也是 Private Stack（主权 AI 云）的交付引擎。",
          products: {
            ide: { name: "Agent IDE", role: "智能体开发环境" },
            iam: { name: "IAM", role: "企业级身份与权限" },
            deploy: { name: "Multi-Tenant Deployment Platform", role: "多租户部署平台" },
          },
          environments: "Cloud | On-Prem | Edge | Air-gapped",
          caps: ["CI/CD", "气隙部署", "边缘部署", "金丝雀发布", "回滚", "环境治理"],
          commercial:
            "企业基础设施产品，通常捆绑进企业合同；解锁 Private Stack 的 2–3 倍 ACV 溢价。",
        },
      },
    },
    products: {
      titleMain: "22 个 AI 核心产品：",
      titleAccent: "12 通用应用 × 10 行业模板",
      lede: "12 个通用 AI 应用跨行业复用——决策、执行、预测、可视化、支持、增长，每个行业都需要。10 个行业模板把行业本体、预置工作流、合规规则与连接器打包为可插拔的垂直方案。",
      note: "另有平台组件随系统交付（不计入产品数）：Agent Runtime（AI OS）· Agent IDE · IAM · Multi-Tenant Deployment Platform（Harness）。",
      provenLabel: "已验证",
      groups: {
        ontology: { name: "Ontology", sub: "本体系统" },
        foundry: { name: "Foundry", sub: "数据系统" },
        aios: { name: "AI OS", sub: "智能系统" },
        aip: { name: "AIP", sub: "行动系统" },
        apps: { name: "AI Applications", sub: "AI 应用层" },
        templates: { name: "行业模板", sub: "可插拔垂直方案 · Layer 6" },
      },
      items: {
        itemGpt: {
          tag: "每个决策都有 AI，实时发生。",
          desc: "自然语言运营接口——用一句话调度整个平台，对话即查询、即决策、即行动。",
        },
        itemDoc: {
          tag: "会自己处理自己的文档。",
          desc: "文档自动化——合同、发票、报告的智能读取、生成与归档。",
        },
        itemSense: {
          tag: "看见一切，即刻发生。",
          desc: "实时可视化 + 数字孪生驾驶舱——整个网络的单一实时画面。",
        },
        itemPredict: {
          tag: "预见下一步。",
          desc: "需求 / 现金流 / 客流 / 资源的通用预测引擎——在运营断裂之前看到它。",
        },
        itemOpsAi: {
          tag: "自我运行的运营。",
          desc: "自主决策 + 持续优化——运营自我运行的执行大脑。",
        },
        itemAudit: {
          tag: "找回正在流失的每一分钱。",
          desc: "计费纠错、合规稽核、成本回收——追回每一分钱。",
        },
        itemVision: {
          tag: "看见别人看不见的。",
          desc: "计算机视觉——安防、质检、现场监控、地理智能。",
        },
        itemVoice: {
          tag: "解放双手的运营。",
          desc: "语音 AI——一线作业与来电的免提交互接口。",
        },
        itemClaw: {
          tag: "没有摩擦的执行。",
          desc: "多智能体工作流执行器——从建议到执行，把决策变成被治理的动作。",
        },
        itemFlow: {
          tag: "设计、自动化、规模化。",
          desc: "可视化 AI 工作流构建器——审批、路由、升级、异常处理。",
        },
        itemSupport: {
          tag: "所有渠道，一个会话。",
          desc: "全渠道工单：邮件 · 消息 · 短信 · 电话——带完整运营上下文与 AI 解决方案。",
        },
        itemGrow: {
          tag: "永不休息的管道。",
          desc: "GTM AI——SDR/BDR · SEO/AEO/GEO · 内容生成，本体驱动的智能外联。",
        },
        itemChain: {
          tag: "供应链与物流",
          desc: "订单 / 运输 / 仓储 / 堆场全套执行——旗舰模板",
        },
        itemDock: { tag: "港口与拖车", desc: "港口、拖车、集装箱运营" },
        itemTrade: { tag: "全球贸易", desc: "关税归类、跨境合规、贸易智能" },
        itemFin: { tag: "财务咨询", desc: "财务咨询：客户画像、组合分析、合规报送" },
        itemDine: { tag: "餐饮运营", desc: "餐馆运营：排班、备货预测、损耗控制" },
        itemEstate: { tag: "物业管理", desc: "房产管理：租约、租户服务、报修、能耗" },
        itemBuild: { tag: "地产开发", desc: "地产开发：项目进度、供应商、成本与销售" },
        itemHealth: { tag: "医疗运营", desc: "医疗运营：冷链、效期、合规追溯" },
        itemAuto: { tag: "制造业", desc: "制造与汽车：JIT 排序、供应商风险" },
        itemRetail: { tag: "零售与电商", desc: "零售电商：全渠道订单、库存、退货" },
      },
    },
    physical: {
      titleMain: "硬件是客户的资本支出，",
      titleAccent: "智能层是持续运行的价值引擎",
      lede: "11 个机器人合作伙伴（6 家 Dealer/ODM + 5 家 Reseller/OEM）把 RaaS 收入模型从理论变为现实：生态中每台机器人都成为订阅端点，ITEM 的 WCS、WES、ITEM.Claw、ITEM.Vision 与异构自主层运行在硬件之上。",
      fleet: {
        caption: "综合舰队能力图 · 11 个合作伙伴",
        cols: {
          type: "机器人类型",
          partner: "合作伙伴",
          env: "环境",
          modules: "ITEM 模块",
          raas: "RaaS 模型",
        },
        rows: {
          hangcha: {
            type: "自动叉车 AGF/AMR",
            env: "室内 DC",
            modules: "WCS · WES · ITEM.Claw",
            raas: "$ / 叉车 / 月",
          },
          libiao: {
            type: "分拣 AMR",
            env: "履约中心",
            modules: "WES · OMS · ITEM.Claw",
            raas: "$ / 分拣或机器人",
          },
          xyz: {
            type: "单件拣选机器人",
            env: "拣选站",
            modules: "WES · OMS · ITEM.Vision",
            raas: "$ / 拣选",
          },
          unitree: {
            type: "人形机器人",
            env: "DC / 机场 / 工厂",
            modules: "WES · WCS · 自主层",
            raas: "$ / 人形 / 月",
          },
          pudu: {
            type: "室内配送机器人",
            env: "DC / 医院 / 酒店",
            modules: "FMS · WES · ITEM.Voice",
            raas: "$ / 配送",
          },
          deepRobotics: {
            type: "四足巡检",
            env: "堆场 / 周界 / 户外",
            modules: "YMS · ITEM.Vision · ITEM.Sense",
            raas: "$ / 巡逻 / 月",
          },
          zsRobotics: {
            type: "工业 AMR",
            env: "DC 托盘搬运",
            modules: "WES · WCS · ITEM.Claw",
            raas: "$ / 机器人 / 月",
          },
          galaxis: {
            type: "室内定位骨干",
            env: "DC 内部",
            modules: "全机器人模块",
            raas: "基础设施订阅",
          },
          lanxin: {
            type: "SLAM 导航智能",
            env: "全环境",
            modules: "WCS · 数字孪生",
            raas: "SDK 许可",
          },
          slamtec: {
            type: "LiDAR 传感器",
            env: "全环境",
            modules: "物理 AI 层",
            raas: "嵌入 RaaS",
          },
          mita: {
            type: "系统集成",
            env: "全部署",
            modules: "WCS · WES · PLC",
            raas: "专业服务",
          },
        },
      },
      ledger: {
        caption: "单个企业 DC 的 RaaS 账本",
        cols: { fleet: "舰队", capex: "客户资本支出", subscription: "ITEM 年订阅价值" },
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
        headline: "25 DC → 全覆盖",
        body: "在此规模下部署 25 个 DC，ITEM 的智能层覆盖整个机器人舰队——客户零硬件风险、轻资产模式。智能层与物理运营深度绑定，确保持续价值交付。",
        footnote:
          "人形制造成本同比下降约 40%（Goldman Sachs）——硬件成本崩塌时，软件智能层在价值占比上反而上升。我们不卖机器人；",
        footnoteAccent: "我们让每台机器人更聪明，并永远为这份智能收费。",
      },
    },
    flywheel: {
      titleMain: "从管道到平台再到解决，",
      titleAccent: "完整闭环",
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
      label: "案例",
      title: "已验证的切入场景",
      lede: "从高价值控制塔用例切入，再扩张到自主运营。以下三类场景已在试点与部署中验证平台价值。",
      items: {
        electronics: {
          title: "消费电子供应链",
          body: "全球工厂 + 仓储 + 运输可视化；短缺预测；订单承诺优化。单一本体覆盖从供应商到客户的全链路对象。",
        },
        threepl: {
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
        otd: "准时履约提升",
        automation: "异常处理自动化",
        turns: "库存周转提升（物流 AI 早期采用者）",
      },
      note: "注：顶部三项为 ITEM 试点目标区间；库存周转数据来自物流 AI 早期采用者行业基准（约 15% 更低成本与 35% 更高周转）。",
    },
    implementation: {
      title: "8–12 周到首个生产试点",
      lede: "Forward Deployed Engineer（FDE）模式：小团队进场、本体先行、按 Gate 验收推进——3–6 个月完成企业级铺开。",
      phases: {
        discovery: {
          name: "发现",
          duration: "2 周",
          body: "运营画像、数据源盘点、用例与 KPI 锁定、商务与安全准入。",
        },
        ontology: {
          name: "本体 + 数据",
          duration: "4–6 周",
          body: "建模客户的业务对象与规则，接入 ERP / WMS / TMS / IoT 数据——本体一旦建成，后续每个模块的边际部署成本都在下降。",
        },
        pilot: {
          name: "试点智能体",
          duration: "6–8 周",
          body: "在受治理的运行时上交付首批生产智能体与控制塔工作流，按 KPI Gate 验收。",
        },
        scale: {
          name: "规模化应用",
          duration: "8–12 周",
          body: "多站点铺开 SCE 套件模块，接入更多数据域与角色应用。",
        },
        autonomous: {
          name: "自主运营",
          duration: "6–12 个月",
          body: "机器人舰队、RaaS 订阅与自主执行上线——客户进入「不可替换」状态。",
        },
      },
    },
    customers: {
      title: "谁会为这个操作系统买单",
      bestFit: {
        caption: "最佳契合客户",
        items: {
          manufacturers: {
            name: "制造商",
            desc: "多站点生产、仓储与全球分销（消费电子优先）",
          },
          logistics: { name: "3PL / 物流企业", desc: "运营 WMS、TMS、堆场与月台网络" },
          forwarders: {
            name: "货代 / 承运商 / 报关行",
            desc: "货运智能与贸易合规买家",
          },
          retail: { name: "零售与供应商", desc: "需求、库存与履约智能" },
          ports: { name: "港口、码头与设施运营方", desc: "实体资产 + 物理 AI 的天然场景" },
        },
      },
      vertical: {
        caption: "垂直扩张方向（认证解锁）",
        body: "认证同时做两件事：移除企业采购摩擦，并传递平台成熟度信号。14 项认证覆盖全球主要合规框架。",
        certs: {
          iso27001: "欧 / 英 / 亚太企业销售",
          iso42001: "AI 治理先发",
          hitrust: "医药冷链",
          fedramp: "联邦 + DoD 物流（$50B+）",
          ctpat: "海关与港口",
          cmmc: "国防承包商",
          tisax: "汽车供应链",
          mixed: "医疗 · 金融 · ESG",
        },
      },
    },
    competitive: {
      titleMain: "Palantir 做数据智能，",
      titleAccent: "ITEM 做运营执行",
      lede: "ITEM 的统一架构在单一本体、单一数据模型、单一智能体运行时上，包含了 Palantir、Manhattan、ServiceNow、MuleSoft 的功能等价物——仅这些市值之和就超过 $500B。",
      table: {
        caption: "能力对比 · ITEM vs 数据平台 vs 传统 SCM",
        capability: "能力",
        rows: {
          ontology: "本体 / 语义层",
          apps: "供应链应用（OMS/TMS/WMS/YMS）",
          agents: "多智能体执行运行时",
          physical: "物理 AI / 机器人协调",
          deploy: "气隙 / 边缘 / 主权部署",
          flywheel: "闭环 GTM + CX 飞轮",
          focus: "实体运营聚焦",
        },
        note: "竞争定位基于公开产品描述（Palantir AIP/Ontology、Databricks Data Intelligence Platform、Manhattan Active、Microsoft Fabric/Copilot Studio 等）。",
      },
      verdicts: {
        native: "原生",
        nativeFleet: "原生（11 伙伴舰队）",
        nativeHarness: "原生（Harness）",
        nativeLoop: "原生（Grow→Support→Audit）",
        strong: "强",
        legacy: "强（遗留架构）",
        limited: "有限",
        none: "无",
        custom: "定制",
        partner: "合作伙伴",
        copilot: "Copilot 级",
        partial: "部分",
        scattered: "分散于多云产品",
        core: "核心",
        broad: "广义企业",
        dataAi: "数据 / AI",
        scmOnly: "SCM 单域",
        productivity: "生产力 / 数据",
      },
      cards: {
        incumbents: {
          label: "对在位者",
          body: "Manhattan、Blue Yonder、SAP、Oracle 建于智能体 AI 之前——它们记录运营，无法运行运营。每个竞争对手的现有装机量都是 ITEM 的转化机会。",
        },
        dataPlatforms: {
          label: "对数据平台",
          body: "Palantir 与 Databricks 止步于洞察。ITEM 拥有应用层 + AI 运行时 + 语义层 + 部署的全栈所有权，从洞察直达月台门与机器人。",
        },
        pointTools: {
          label: "对 AI 点工具",
          body: "多数 AI 公司止步于 Copilot；我们能执行。统一数字与物理运营的「人 + AI + 机器人」是任何单点工具都无法复制的形态。",
        },
      },
    },
    closing: {
      vision: {
        lead: "一个平台、一套本体、一个智能层——统一驱动",
        accent: "人 + AI + 机器人 + 运营",
        tail: "，让你的企业自我运行。",
      },
      fine: "8–12 周开始试点。在一个场景验证价值，然后扩展到整个网络——无需替换现有系统，与你的 ERP、WMS、TMS 并行运行。",
      cta: "预约产品演示 →",
    },
    footer: "ITEM AI · 产品概览 · 2026",
  },

  /* ------------------------------------------------------------------ en */
  en: {
    nav: { story: "Story", platform: "Platform", products: "Products" },
    partner: {
      alt: "ENN Group",
      caption: "Product overview prepared for ENN Group",
    },
    hero: {
      badge: "Product Overview · Supply Chain AI OS · 2026",
      titleMain: "The AI-Native",
      titleAccent: "Operating System for the Physical Economy",
      sub: "ITEM AI replaces fragmented supply-chain software with a single ontology-driven enterprise AI operating system — uniting humans + AI + robots + operations across transportation, warehousing, logistics, commerce and industrial automation.",
      stats: {
        products: "AI Core Products",
        layers: "Core Layers",
        pilot: "Weeks to pilot",
        automation: "Exception automation",
      },
      chip: "One platform · multiple expansion vectors",
    },
    sections: {
      problem: "The Problem",
      category: "The Category",
      platform: "The Platform",
      systems: "Five Core Layers",
      products: "AI Core Products",
      physical: "Physical AI & RaaS",
      flywheel: "The Flywheel",
      cases: "Case Studies",
      implementation: "Implementation",
      customers: "Target Customers",
      competitive: "Competitive Position",
      vision: "The Vision",
    },
    problem: {
      title: "Global supply chains run on fragmented systems",
      lede: "One vendor for TMS, another for WMS, another for OMS; robotics software, visibility, analytics and AI copilots all live apart, with workflows severed between them. Enterprises pay three hidden taxes for this, every year.",
      kicker: { compliance: "Hidden Tax 01", data: "Hidden Tax 02", operations: "Hidden Tax 03" },
      taxes: {
        compliance: {
          name: "The Compliance Tax",
          body: "Chargebacks, OTIF penalties, audits, permits, claims, SLA failures — errors happen in the seams between systems.",
        },
        data: {
          name: "The Data Tax",
          body: "Inaccurate forecasts, siloed systems, poor visibility, delayed decisions — the data exists but never becomes action.",
        },
        operations: {
          name: "The Operations Tax",
          body: "Manual workflows, labor inefficiency, costly orchestration — people doing the work software should be doing.",
        },
      },
      note: {
        amount: "Millions to tens of millions",
        body: 'Large enterprises spend millions to tens of millions per year on fragmented systems just to "operate." The market is shifting from Software of Record to Software of Action.',
      },
    },
    category: {
      titleMain: "Not more tools —",
      titleAccent: "an operating system",
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
        lead: "ITEM AI = the",
        accent: "Enterprise AI Operating System",
        tail: "for physical supply chains.",
        sub: "One ontology-driven AI OS, replacing fragmented enterprise software.",
      },
    },
    stack: {
      title: "The ITEM Stack — the platform on one page",
      lede: "A seven-layer stack, top to bottom. Each layer is a moat on its own; together they form an operating system no point solution can displace.",
      note: "Every operational decision depends on ITEM's business graph — ontology dependency makes the stack extraordinarily hard to rip out.",
      layers: {
        app: {
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
        infra: {
          name: "Infrastructure",
          detail: "Private Stack · Cloud · Edge · GPU / NPU",
          tag: "IaaS",
        },
      },
    },
    systems: {
      title: "Five Core Layers — each with a clear design purpose",
      lede: "Each system has a clear design purpose and commercial role. Everything else is a platform extension — not a new startup.",
      labels: { design: "Design", purpose: "Purpose", commercial: "Commercial role" },
      items: {
        ontology: {
          badge: "The Moat",
          design:
            "A governed knowledge graph and real-time digital-twin layer defining business objects, relationships, logic, actions and dynamic rules.",
          purpose:
            "The single source of truth driving consistent, executable intelligence platform-wide — orders, shipments, containers, trucks, drivers, warehouses, robots and dock doors in one semantic model.",
          products: {
            studio: { name: "ITEM.Ontology Studio", role: "DDD Modelling" },
            executor: { name: "ITEM.Ontology Executor", role: "Knowledge Graph & Retrieval" },
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
          badge: "PaaS",
          design:
            "The ontology-powered enterprise operations platform — unifying heterogeneous data sources, low-code app builder, workflow orchestration and operational digital twins.",
          purpose:
            "Orchestrate intelligent decisions across human + AI teams; the build-and-run substrate for OMS, TMS, WMS, YMS, WES, WCS and every business app.",
          products: {
            bi: { name: "ITEM.BI", role: "Data Platform" },
            di: { name: "ITEM.DI", role: "Data Integration" },
          },
          caps: [
            "Data integration",
            "App builder",
            "Event processing",
            "Pipelines",
            "Low-code",
          ],
          commercial:
            "PaaS — seat licenses · workflow execution · developer licenses · enterprise platform subscription.",
        },
        aios: {
          badge: "Bundled platform",
          design:
            "An AI-ready operating system for productivity, intelligence and value-chain decisions — unified operational workspace, real-time data fusion, embedded copilots, event orchestration.",
          purpose:
            "Let humans + AI observe, predict, decide and optimize on one surface — the enterprise's real-time operational brain.",
          runtime: { name: "Agent Runtime", role: "the agent execution layer" },
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
          badge: "Strategic platform",
          design:
            "The enterprise AI runtime — multi-model orchestration, agent runtime, autonomous workflows, human-in-the-loop governance, prompt/version management, observability and compliance audit.",
          purpose:
            "Safely anchor LLMs and agents to real-world data and operational systems, turning decisions into auditable, reversible execution.",
          products: {
            gpt: { name: "ITEM.GPT", role: "Multi-Agent Platform" },
            flow: { name: "ITEM.Flow", role: "Workflow" },
            vision: { name: "ITEM.Vision", role: "IoT, GIS & Vision Models" },
          },
          caps: [
            "Multi-model orchestration",
            "Agent runtime",
            "Tool calling",
            "Governance",
            "Audit",
          ],
          commercial:
            "Core platform product — SaaS licenses · usage-based compute · agent execution fees · FaaS billing.",
        },
        harness: {
          badge: "Enterprise infra",
          design:
            "The continuous-delivery / autonomous-deployment platform — deploying, monitoring, updating and managing software in any environment (cloud, on-prem, air-gapped, edge) with canary releases, rollback and compliance monitoring built in.",
          purpose:
            "Put mission-critical AI inside any customer boundary — the entry requirement for government, defense, healthcare and manufacturing, and the delivery engine behind Private Stack (sovereign AI cloud).",
          products: {
            ide: { name: "Agent IDE", role: "Agent development environment" },
            iam: { name: "IAM", role: "Enterprise identity & access" },
            deploy: {
              name: "Multi-Tenant Deployment Platform",
              role: "Run anywhere, governed",
            },
          },
          environments: "Cloud | On-Prem | Edge | Air-gapped",
          caps: [
            "CI/CD",
            "Air-gapped",
            "Edge",
            "Canary releases",
            "Rollback",
            "Environment governance",
          ],
          commercial:
            "Enterprise infrastructure product, typically bundled into enterprise contracts; unlocks Private Stack's 2–3× ACV premium.",
        },
      },
    },
    products: {
      titleMain: "22 AI Core Products:",
      titleAccent: "12 General Apps × 10 Industry Templates",
      lede: "12 general AI applications are reused across every industry — deciding, executing, predicting, visualizing, supporting, growing. 10 industry templates package vertical ontology, prebuilt workflows, compliance rules and connectors into pluggable solutions.",
      note: "Platform components ship with their systems (not counted above): Agent Runtime (AI OS) · Agent IDE · IAM · Multi-Tenant Deployment Platform (Harness).",
      provenLabel: "PROVEN",
      groups: {
        ontology: { name: "Ontology", sub: "System of Meaning" },
        foundry: { name: "Foundry", sub: "System of Data & Apps" },
        aios: { name: "AI OS", sub: "System of Intelligence" },
        aip: { name: "AIP", sub: "System of Action" },
        apps: { name: "AI Applications", sub: "Standalone AI Products" },
        templates: { name: "Industry Templates", sub: "Pluggable verticals · Layer 6" },
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
        itemBuild: {
          tag: "REAL ESTATE DEV",
          desc: "Development: schedules, vendors, cost, sales",
        },
        itemHealth: {
          tag: "HEALTHCARE OPS",
          desc: "Healthcare: cold chain, expiry, traceability",
        },
        itemAuto: { tag: "MANUFACTURING", desc: "Manufacturing: JIT sequencing, supplier risk" },
        itemRetail: {
          tag: "RETAIL & COMMERCE",
          desc: "Retail: omnichannel orders, inventory, returns",
        },
      },
    },
    physical: {
      titleMain: "Hardware is the customer's CapEx —",
      titleAccent: "intelligence is the perpetual value engine",
      lede: "11 robotics partners (6 Dealer/ODM + 5 Reseller/OEM) turn the RaaS model from theory into reality: every robot in the ecosystem becomes a subscription endpoint, with ITEM's WCS, WES, ITEM.Claw, ITEM.Vision and heterogeneous-autonomy layer running on top of the hardware.",
      fleet: {
        caption: "Combined Fleet Capability Map · 11 Partners",
        cols: {
          type: "Robot type",
          partner: "Partner",
          env: "Environment",
          modules: "ITEM modules",
          raas: "RaaS model",
        },
        rows: {
          hangcha: {
            type: "Autonomous forklifts AGF/AMR",
            env: "Indoor DC",
            modules: "WCS · WES · ITEM.Claw",
            raas: "$ / forklift / mo",
          },
          libiao: {
            type: "Sortation AMR",
            env: "Fulfillment",
            modules: "WES · OMS · ITEM.Claw",
            raas: "$ / sort or robot",
          },
          xyz: {
            type: "Piece-picking robots",
            env: "Pick stations",
            modules: "WES · OMS · ITEM.Vision",
            raas: "$ / pick",
          },
          unitree: {
            type: "Humanoids",
            env: "DC / airport / factory",
            modules: "WES · WCS · Autonomy",
            raas: "$ / humanoid / mo",
          },
          pudu: {
            type: "Indoor delivery robots",
            env: "DC / hospital / hotel",
            modules: "FMS · WES · ITEM.Voice",
            raas: "$ / delivery",
          },
          deepRobotics: {
            type: "Quadruped inspection",
            env: "Yard / perimeter / outdoor",
            modules: "YMS · ITEM.Vision · ITEM.Sense",
            raas: "$ / patrol / mo",
          },
          zsRobotics: {
            type: "Industrial AMR",
            env: "DC pallet moves",
            modules: "WES · WCS · ITEM.Claw",
            raas: "$ / robot / mo",
          },
          galaxis: {
            type: "Indoor positioning backbone",
            env: "DC interior",
            modules: "All robot modules",
            raas: "Infra subscription",
          },
          lanxin: {
            type: "SLAM navigation intelligence",
            env: "All environments",
            modules: "WCS · Digital twin",
            raas: "SDK license",
          },
          slamtec: {
            type: "LiDAR sensors",
            env: "All environments",
            modules: "Physical AI layer",
            raas: "Embedded in RaaS",
          },
          mita: {
            type: "Systems integration",
            env: "All deployments",
            modules: "WCS · WES · PLC",
            raas: "Pro services",
          },
        },
      },
      ledger: {
        caption: "The RaaS Ledger · One Enterprise DC",
        cols: {
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
        headline: "25 DC → Full Coverage",
        body: "25 DCs at this scale mean ITEM's intelligence layer covers the entire robot fleet — zero hardware risk, asset-light for customers. The intelligence layer is deeply embedded in physical operations, ensuring continuous value delivery.",
        footnote:
          "Humanoid manufacturing costs are falling ~40% YoY (Goldman Sachs) — as hardware collapses in price, the software intelligence layer captures more of the value. We don't sell robots;",
        footnoteAccent:
          "we make every robot smarter, and charge for that intelligence forever.",
      },
    },
    flywheel: {
      titleMain: "From pipeline to platform to resolution —",
      titleAccent: "one closed loop",
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
        body: "More workflows → more decisions → better models → better automation. Every ITEM.Support resolution trains the next ITEM.GPT answer; every ITEM.Audit finding becomes the case study in the next ITEM.Grow outreach sequence. This is the flywheel that justifies Palantir-class multiples on an early revenue base.",
      },
    },
    cases: {
      label: "Case",
      title: "Proven entry scenarios",
      lede: "Land with high-value control-tower use cases, then expand into autonomous operations. These three scenario classes have validated the platform in pilots and deployments.",
      items: {
        electronics: {
          title: "Consumer Electronics Supply Chain",
          body: "Global factory + warehouse + transport visibility; shortage prediction; order-promise optimization. One ontology spanning every object from supplier to customer.",
        },
        threepl: {
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
        otd: "On-time performance lift",
        automation: "Exception automation",
        turns: "Higher inventory turns (early AI adopters)",
      },
      note: "Note: the first three are ITEM pilot target ranges; inventory-turn data reflects industry benchmarks for early logistics-AI adopters (~15% lower cost, ~35% higher turns).",
    },
    implementation: {
      title: "8–12 weeks to first production pilot",
      lede: "The Forward Deployed Engineer (FDE) model: a small team on site, ontology first, gate-based acceptance — enterprise rollout in 3–6 months.",
      phases: {
        discovery: {
          name: "Discovery",
          duration: "2 weeks",
          body: "Operational profiling, data-source inventory, use-case and KPI lock, commercial and security onboarding.",
        },
        ontology: {
          name: "Ontology + Data",
          duration: "4–6 weeks",
          body: "Model the customer's business objects and rules, connect ERP / WMS / TMS / IoT data — once the ontology exists, every subsequent module deploys at lower marginal cost.",
        },
        pilot: {
          name: "Pilot Agents",
          duration: "6–8 weeks",
          body: "First production agents and control-tower workflows on the governed runtime, accepted against KPI gates.",
        },
        scale: {
          name: "Scale Apps",
          duration: "8–12 weeks",
          body: "Multi-site rollout of SCE-suite modules, more data domains and role-based apps.",
        },
        autonomous: {
          name: "Autonomous Ops",
          duration: "6–12 months",
          body: "Robot fleets, RaaS subscriptions and autonomous execution go live — the customer enters the irreplaceable state.",
        },
      },
    },
    customers: {
      title: "Who buys this operating system",
      bestFit: {
        caption: "Best-Fit Customers",
        items: {
          manufacturers: {
            name: "Manufacturers",
            desc: "multi-site production, warehousing and global distribution (consumer electronics first)",
          },
          logistics: {
            name: "3PL / Logistics operators",
            desc: "running WMS, TMS, yard and dock networks",
          },
          forwarders: {
            name: "Forwarders / carriers / customs brokers",
            desc: "buyers of freight intelligence and trade compliance",
          },
          retail: {
            name: "Retail & suppliers",
            desc: "demand, inventory and fulfillment intelligence",
          },
          ports: {
            name: "Port, terminal & facility operators",
            desc: "the natural home of physical assets + physical AI",
          },
        },
      },
      vertical: {
        caption: "Vertical Expansion (Certification-Unlocked)",
        body: "Certifications do two jobs at once: remove enterprise-procurement friction and signal platform maturity. 14 certifications cover all major global compliance frameworks.",
        certs: {
          iso27001: "EU/UK/APAC enterprise",
          iso42001: "AI-governance first-mover",
          hitrust: "Pharma cold chain",
          fedramp: "Federal + DoD logistics ($50B+)",
          ctpat: "Customs & ports",
          cmmc: "Defense contractors",
          tisax: "Automotive supply chain",
          mixed: "Health · finance · ESG",
        },
      },
    },
    competitive: {
      titleMain: "Palantir does data intelligence.",
      titleAccent: "ITEM does operational execution.",
      lede: "On one ontology, one data model and one agent runtime, ITEM's unified architecture contains the functional equivalents of Palantir, Manhattan, ServiceNow and MuleSoft — whose combined market value alone exceeds $500B.",
      table: {
        caption: "Capability Map · ITEM vs Data Platforms vs Legacy SCM",
        capability: "Capability",
        rows: {
          ontology: "Ontology / semantic layer",
          apps: "Supply-chain apps (OMS/TMS/WMS/YMS)",
          agents: "Multi-agent execution runtime",
          physical: "Physical AI / robot coordination",
          deploy: "Air-gapped / edge / sovereign deploy",
          flywheel: "Closed-loop GTM + CX flywheel",
          focus: "Physical-operations focus",
        },
        note: "Positioning based on public product descriptions (Palantir AIP/Ontology, Databricks Data Intelligence Platform, Manhattan Active, Microsoft Fabric/Copilot Studio, etc.).",
      },
      verdicts: {
        native: "Native",
        nativeFleet: "Native (11-partner fleet)",
        nativeHarness: "Native (Harness)",
        nativeLoop: "Native (Grow→Support→Audit)",
        strong: "Strong",
        legacy: "Strong (legacy)",
        limited: "Limited",
        none: "None",
        custom: "Custom",
        partner: "Partner",
        copilot: "Copilot-grade",
        partial: "Partial",
        scattered: "Scattered across clouds",
        core: "Core",
        broad: "Broad enterprise",
        dataAi: "Data/AI",
        scmOnly: "SCM only",
        productivity: "Productivity/data",
      },
      cards: {
        incumbents: {
          label: "vs Incumbents",
          body: "Manhattan, Blue Yonder, SAP and Oracle were built before agentic AI — they record operations, they can't run them. Every incumbent install base is an ITEM conversion opportunity.",
        },
        dataPlatforms: {
          label: "vs Data Platforms",
          body: "Palantir and Databricks stop at insight. ITEM owns apps + AI runtime + semantics + deployment — from insight all the way to the dock door and the robot.",
        },
        pointTools: {
          label: "vs AI Point Tools",
          body: 'Most AI companies stop at copilots; we execute. "Humans + AI + robots" across digital and physical operations is a shape no point tool can replicate.',
        },
      },
    },
    closing: {
      vision: {
        lead: "One platform, one ontology, one intelligence layer — uniting",
        accent: "humans + AI + robots + operations",
        tail: "so your enterprise runs itself.",
      },
      fine: "Start a pilot in 8–12 weeks. Prove value in one scenario, then expand across the network — no rip-and-replace, runs alongside your existing ERP, WMS, TMS.",
      cta: "Request a Product Demo →",
    },
    footer: "ITEM AI · Product Overview · 2026",
  },

  /* ------------------------------------------------------------------ ja */
  ja: {
    nav: { story: "ストーリー", platform: "プラットフォーム", products: "プロダクト" },
    partner: {
      alt: "ENN Group 新奥集団",
      caption: "ENN Group 向けにご用意した製品概要",
    },
    hero: {
      badge: "製品概要 · サプライチェーン AI OS · 2026",
      titleMain: "実体経済のための",
      titleAccent: "AI ネイティブ・オペレーティングシステム",
      sub: "ITEM AI は、断片化したサプライチェーンソフトウェアを、オントロジー駆動の単一エンタープライズ AI オペレーティングシステムで置き換えます。輸送・倉庫・物流・コマース・産業オートメーションを横断し、人 + AI + ロボット + オペレーションを統合します。",
      stats: {
        products: "AI コアプロダクト",
        layers: "コアレイヤー",
        pilot: "パイロット導入期間",
        automation: "例外自動化率",
      },
      chip: "ワンプラットフォーム · 複数の拡張ベクトル",
    },
    sections: {
      problem: "課題",
      category: "カテゴリー",
      platform: "プラットフォームアーキテクチャ",
      systems: "5 つのコアレイヤー",
      products: "AI コアプロダクト",
      physical: "フィジカル AI と RaaS",
      flywheel: "フライホイール",
      cases: "ケーススタディ",
      implementation: "導入サイクル",
      customers: "ターゲット顧客",
      competitive: "競争ポジション",
      vision: "ビジョン",
    },
    problem: {
      title: "グローバルサプライチェーンは断片化したシステムの上で動いている",
      lede: "TMS は 1 社、WMS は別の 1 社、OMS はまた別の 1 社。ロボットソフトウェア、可視化、アナリティクス、AI Copilot はそれぞれ独立し、ワークフローは分断されています。企業はそのために毎年 3 つの「隠れた税金」を払い続けています。",
      kicker: { compliance: "隠れた税 01", data: "隠れた税 02", operations: "隠れた税 03" },
      taxes: {
        compliance: {
          name: "コンプライアンス税",
          body: "チャージバック、OTIF ペナルティ、監査、許認可、クレーム、SLA 違反——エラーはシステム間の隙間で発生します。",
        },
        data: {
          name: "データ税",
          body: "不正確な予測、サイロ化したシステム、乏しい可視性、遅い意思決定——データは存在しても、行動に変わりません。",
        },
        operations: {
          name: "オペレーション税",
          body: "手作業のワークフロー、労働の非効率、高いオーケストレーションコスト——ソフトウェアがやるべき仕事を人間が担っています。",
        },
      },
      note: {
        amount: "数百万〜数千万ドル",
        body: "大企業は「運営する」だけのために、断片化したシステムに年間で数百万〜数千万ドルを費やしています。市場は「記録のソフトウェア（Software of Record）」から「行動のソフトウェア（Software of Action）」へ移行しつつあります。",
      },
    },
    category: {
      titleMain: "ツールを増やすのではなく、",
      titleAccent: "ひとつのオペレーティングシステムを",
      lede: "私たちが示すのは「81 プロダクトのカタログ」ではありません。ひとつのプラットフォームと階層型の拡張戦略——複数の拡張ベクトルを持つ、カテゴリーを定義するオペレーティングシステムです。",
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
        sub: "オントロジー駆動のひとつの AI OS が、断片化したエンタープライズソフトウェアを置き換えます。",
      },
    },
    stack: {
      title: "The ITEM Stack — 1 ページでわかるプラットフォーム",
      lede: "上から下への 7 層スタック。各層は単体でもモート（堀）であり、重なり合うことで、ポイントソリューションには置き換え不可能なオペレーティングシステムになります。",
      note: "すべての運営判断が ITEM のビジネスグラフに依存します。オントロジー依存により、このスタックは極めて置き換えにくいものになります。",
      layers: {
        app: {
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
          detail: "ナレッジグラフ · デジタルツイン · ルールエンジン · 単一の信頼できる情報源",
          tag: "モート（堀）· 単体では販売しない",
        },
        harness: {
          name: "デプロイメント層",
          detail:
            "CI/CD · クラウド / オンプレ / エアギャップ / エッジ · コンプライアンスとロールバック",
          tag: "エンタープライズインフラ",
        },
        infra: {
          name: "インフラストラクチャ",
          detail: "Private Stack · Cloud · Edge · GPU / NPU",
          tag: "IaaS",
        },
      },
    },
    systems: {
      title: "5 つのコアレイヤー——それぞれ明確な設計目的を持つ",
      lede: "各システムには明確な設計目的と商業的役割があります。それ以外はすべて「プラットフォーム拡張」であり、新しいスタートアップではありません。",
      labels: { design: "設計", purpose: "目的", commercial: "商業的役割" },
      items: {
        ontology: {
          badge: "モート（堀）",
          design:
            "ガバナンスされたナレッジグラフとリアルタイムのデジタルツイン層。ビジネスオブジェクト、関係、ロジック、アクション、動的ルールを定義します。",
          purpose:
            "プラットフォーム全体で一貫した実行可能なインテリジェンスを駆動する単一の信頼できる情報源。注文、貨物、コンテナ、トラック、ドライバー、倉庫、ロボット、ドックドアを同一のセマンティックモデルに収めます。",
          products: {
            studio: { name: "ITEM.Ontology Studio", role: "DDD モデリング" },
            executor: { name: "ITEM.Ontology Executor", role: "ナレッジグラフと検索" },
          },
          caps: [
            "オブジェクトモデリング",
            "ナレッジグラフ",
            "ルールエンジン",
            "デジタルツイン",
            "セマンティック相互運用",
          ],
          commercial:
            "単体では販売しません。戦略的モート層としてバンドル提供し、オントロジー依存を生み出します。",
        },
        foundry: {
          badge: "PaaS",
          design:
            "オントロジー駆動のエンタープライズ運営プラットフォーム。異種データソースの統合、ローコードのアプリビルダー、ワークフローオーケストレーション、運営デジタルツインを備えます。",
          purpose:
            "人 + AI チームの間でインテリジェントな意思決定をオーケストレーションします。OMS、TMS、WMS、YMS、WES、WCS などすべての業務アプリの開発・実行基盤です。",
          products: {
            bi: { name: "ITEM.BI", role: "データプラットフォーム" },
            di: { name: "ITEM.DI", role: "データ統合" },
          },
          caps: [
            "データ統合",
            "アプリビルダー",
            "イベント処理",
            "データパイプライン",
            "Low-code",
          ],
          commercial:
            "PaaS——シートライセンス · ワークフロー実行 · 開発者ライセンス · エンタープライズプラットフォームサブスクリプション。",
        },
        aios: {
          badge: "バンドルプラットフォーム層",
          design:
            "生産性・インテリジェンス・バリューチェーンの意思決定のために設計された AI レディなオペレーティングシステム。統合運営ワークスペース、リアルタイムデータ融合、組み込み Copilot、イベントオーケストレーションを備えます。",
          purpose:
            "人 + AI が同じ作業面で観察・予測・決定・最適化を行い、企業全体のリアルタイム運営頭脳となります。",
          runtime: { name: "Agent Runtime", role: "エージェント実行レイヤー" },
          caps: [
            "意思決定インテリジェンス",
            "リアルタイム分析",
            "エンタープライズ検索",
            "Copilot",
            "人と AI の協働",
          ],
          commercial:
            "バンドルされるプラットフォーム層。すべてのエンタープライズ導入に同梱され、全体 ACV を引き上げます。",
        },
        aip: {
          badge: "戦略プラットフォーム",
          design:
            "エンタープライズ AI ランタイム。マルチモデルオーケストレーション、エージェントランタイム、自律ワークフロー、ヒューマンインザループのガバナンス、プロンプト / バージョン管理、可観測性、コンプライアンス監査を提供します。",
          purpose:
            "LLM とエージェントを現実世界のデータと運営システムに安全にアンカーし、意思決定を監査可能・取り消し可能な実行に変えます。",
          products: {
            gpt: { name: "ITEM.GPT", role: "マルチエージェントプラットフォーム" },
            flow: { name: "ITEM.Flow", role: "ワークフロー" },
            vision: { name: "ITEM.Vision", role: "IoT・GIS・ビジョンモデル" },
          },
          caps: [
            "マルチモデルオーケストレーション",
            "エージェントランタイム",
            "ツール呼び出し",
            "ガバナンス",
            "監査",
          ],
          commercial:
            "中核プラットフォームプロダクト——SaaS ライセンス · 従量課金コンピュート · エージェント実行料 · FaaS 課金。",
        },
        harness: {
          badge: "エンタープライズインフラ",
          design:
            "継続的デリバリー / 自律デプロイメントプラットフォーム。あらゆる環境（クラウド、オンプレ、エアギャップ、エッジ）でソフトウェアを自律的にデプロイ・監視・更新・管理し、カナリアリリース、ロールバック、コンプライアンス監視を内蔵しています。",
          purpose:
            "ミッションクリティカルな AI を顧客のあらゆる境界の内側に届けます。政府・防衛・医療・製造の参入要件であり、Private Stack（ソブリン AI クラウド）のデリバリーエンジンです。",
          products: {
            ide: { name: "Agent IDE", role: "エージェント開発環境" },
            iam: { name: "IAM", role: "エンタープライズの ID とアクセス管理" },
            deploy: {
              name: "Multi-Tenant Deployment Platform",
              role: "どこでも実行・ガバナンス付き",
            },
          },
          environments: "Cloud | On-Prem | Edge | Air-gapped",
          caps: [
            "CI/CD",
            "エアギャップ",
            "エッジ",
            "カナリアリリース",
            "ロールバック",
            "環境ガバナンス",
          ],
          commercial:
            "エンタープライズインフラプロダクト。通常はエンタープライズ契約にバンドルされ、Private Stack の 2〜3 倍の ACV プレミアムを解放します。",
        },
      },
    },
    products: {
      titleMain: "22 の AI コアプロダクト：",
      titleAccent: "12 汎用アプリ × 10 業界テンプレート",
      lede: "12 の汎用 AI アプリケーションは業界を問わず再利用されます——意思決定、実行、予測、可視化、サポート、成長。10 の業界テンプレートが、業界オントロジー・プリビルトワークフロー・コンプライアンスルール・コネクターをプラガブルなソリューションにパッケージします。",
      note: "このほか、プラットフォームコンポーネントが各システムに同梱されます（上記のプロダクト数には含まれません）：Agent Runtime（AI OS）· Agent IDE · IAM · Multi-Tenant Deployment Platform（Harness）。",
      provenLabel: "実証済み",
      groups: {
        ontology: { name: "Ontology", sub: "意味のシステム" },
        foundry: { name: "Foundry", sub: "データとアプリのシステム" },
        aios: { name: "AI OS", sub: "インテリジェンスのシステム" },
        aip: { name: "AIP", sub: "アクションのシステム" },
        apps: { name: "AI Applications", sub: "スタンドアロン AI プロダクト" },
        templates: {
          name: "業界テンプレート",
          sub: "プラガブルな垂直ソリューション · Layer 6",
        },
      },
      items: {
        itemGpt: {
          tag: "すべての意思決定に AI を、リアルタイムで。",
          desc: "自然言語オペレーションインターフェース——対話がそのままクエリ、意思決定、アクションになります。",
        },
        itemDoc: {
          tag: "自ら処理するドキュメント。",
          desc: "ドキュメント自動化——契約書、請求書、レポートのインテリジェントな読み取り・生成・アーカイブ。",
        },
        itemSense: {
          tag: "すべてを、瞬時に見る。",
          desc: "リアルタイム可視化 + デジタルツインコックピット——ネットワーク全体のライブな単一画面。",
        },
        itemPredict: {
          tag: "次に起きることを予測する。",
          desc: "汎用予測エンジン——需要・キャッシュフロー・客数・リソース。オペレーションが壊れる前に兆候を捉えます。",
        },
        itemOpsAi: {
          tag: "自ら動くオペレーション。",
          desc: "自律的な意思決定 + 継続的最適化——自走するオペレーションの頭脳。",
        },
        itemAudit: {
          tag: "失っているものを見つける。",
          desc: "請求エラー検出、コンプライアンス監査、コスト回収——1 ドル残らず取り戻します。",
        },
        itemVision: {
          tag: "他が見落とすものを見る。",
          desc: "コンピュータビジョン——セキュリティ、品質検査、現場モニタリング、地理空間インテリジェンス。",
        },
        itemVoice: {
          tag: "ハンズフリーで現場を動かす。",
          desc: "音声 AI——現場作業とインバウンドコールのためのハンズフリーインターフェース。",
        },
        itemClaw: {
          tag: "摩擦のない実行。",
          desc: "マルチエージェントワークフロー実行器——提案から実行へ、意思決定をガバナンスされたアクションに変えます。",
        },
        itemFlow: {
          tag: "設計する。自動化する。スケールする。",
          desc: "ビジュアル AI ワークフロービルダー——承認、ルーティング、エスカレーション、例外処理。",
        },
        itemSupport: {
          tag: "すべてのチャネルを、ひとつのスレッドに。",
          desc: "オムニチャネルチケッティング：メール · メッセージ · SMS · 電話——完全な運営コンテキストと AI 起草の解決案付き。",
        },
        itemGrow: {
          tag: "眠らないパイプライン。",
          desc: "GTM AI——SDR/BDR · SEO/AEO/GEO · コンテンツ生成。オントロジー駆動のインテリジェントなアウトリーチ。",
        },
        itemChain: {
          tag: "サプライチェーンと物流",
          desc: "オーダー / 輸送 / 倉庫 / ヤードのフル実行——フラグシップ",
        },
        itemDock: { tag: "港湾とドレージ", desc: "港湾、ドレージ、コンテナオペレーション" },
        itemTrade: {
          tag: "グローバル貿易",
          desc: "関税分類、コンプライアンス、貿易インテリジェンス",
        },
        itemFin: {
          tag: "金融アドバイザリー",
          desc: "アドバイザリー：クライアントプロファイリング、ポートフォリオ分析、報告",
        },
        itemDine: {
          tag: "レストランオペレーション",
          desc: "レストラン：シフト管理、仕込み予測、廃棄ロス管理",
        },
        itemEstate: {
          tag: "プロパティマネジメント",
          desc: "不動産：リース、テナントサービス、修繕、エネルギー",
        },
        itemBuild: {
          tag: "不動産開発",
          desc: "開発：スケジュール、ベンダー、コスト、販売",
        },
        itemHealth: {
          tag: "ヘルスケアオペレーション",
          desc: "ヘルスケア：コールドチェーン、有効期限、トレーサビリティ",
        },
        itemAuto: { tag: "製造業", desc: "製造：JIT シーケンシング、サプライヤーリスク" },
        itemRetail: { tag: "小売とコマース", desc: "小売：オムニチャネル注文、在庫、返品" },
      },
    },
    physical: {
      titleMain: "ハードウェアは顧客の CapEx、",
      titleAccent: "インテリジェンスは永続的な価値エンジン",
      lede: "11 のロボティクスパートナー（Dealer/ODM 6 社 + Reseller/OEM 5 社）が RaaS 収益モデルを理論から現実に変えます。エコシステム内のすべてのロボットがサブスクリプションのエンドポイントとなり、ITEM の WCS、WES、ITEM.Claw、ITEM.Vision、異種ロボット自律レイヤーがハードウェアの上で稼働します。",
      fleet: {
        caption: "統合フリート能力マップ · 11 パートナー",
        cols: {
          type: "ロボットタイプ",
          partner: "パートナー",
          env: "環境",
          modules: "ITEM モジュール",
          raas: "RaaS モデル",
        },
        rows: {
          hangcha: {
            type: "自律フォークリフト AGF/AMR",
            env: "屋内 DC",
            modules: "WCS · WES · ITEM.Claw",
            raas: "$ / フォークリフト / 月",
          },
          libiao: {
            type: "仕分け AMR",
            env: "フルフィルメント",
            modules: "WES · OMS · ITEM.Claw",
            raas: "$ / 仕分けまたはロボット",
          },
          xyz: {
            type: "ピースピッキングロボット",
            env: "ピッキングステーション",
            modules: "WES · OMS · ITEM.Vision",
            raas: "$ / ピック",
          },
          unitree: {
            type: "ヒューマノイド",
            env: "DC / 空港 / 工場",
            modules: "WES · WCS · 自律レイヤー",
            raas: "$ / ヒューマノイド / 月",
          },
          pudu: {
            type: "屋内配送ロボット",
            env: "DC / 病院 / ホテル",
            modules: "FMS · WES · ITEM.Voice",
            raas: "$ / 配送",
          },
          deepRobotics: {
            type: "四足点検ロボット",
            env: "ヤード / 周辺 / 屋外",
            modules: "YMS · ITEM.Vision · ITEM.Sense",
            raas: "$ / 巡回 / 月",
          },
          zsRobotics: {
            type: "産業用 AMR",
            env: "DC パレット搬送",
            modules: "WES · WCS · ITEM.Claw",
            raas: "$ / ロボット / 月",
          },
          galaxis: {
            type: "屋内測位バックボーン",
            env: "DC 内部",
            modules: "全ロボットモジュール",
            raas: "インフラサブスクリプション",
          },
          lanxin: {
            type: "SLAM ナビゲーションインテリジェンス",
            env: "全環境",
            modules: "WCS · デジタルツイン",
            raas: "SDK ライセンス",
          },
          slamtec: {
            type: "LiDAR センサー",
            env: "全環境",
            modules: "フィジカル AI 層",
            raas: "RaaS に組み込み",
          },
          mita: {
            type: "システムインテグレーション",
            env: "全デプロイメント",
            modules: "WCS · WES · PLC",
            raas: "プロフェッショナルサービス",
          },
        },
      },
      ledger: {
        caption: "RaaS 台帳 · エンタープライズ DC 1 拠点",
        cols: {
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
        headline: "25 DC → フルカバレッジ",
        body: "この規模で 25 の DC を展開すれば、ITEM のインテリジェンスレイヤーがロボットフリート全体をカバーします。顧客にとってハードウェアリスクはゼロ、アセットライトです。インテリジェンスレイヤーは物理オペレーションに深く組み込まれ、継続的な価値を提供します。",
        footnote:
          "ヒューマノイドの製造コストは前年比約 40% 下落しています（Goldman Sachs）。ハードウェアの価格が崩れるほど、ソフトウェアのインテリジェンス層が価値の取り分を拡大します。私たちはロボットを売りません。",
        footnoteAccent:
          "すべてのロボットをより賢くし、そのインテリジェンスに永続的に課金します。",
      },
    },
    flywheel: {
      titleMain: "パイプラインからプラットフォーム、解決まで——",
      titleAccent: "完全なクローズドループ",
      lede: "システムが自ら売り、自ら動き、自ら改善し、自ら定着する。スローガンではなく、アーキテクチャとしてです。各ステージがデータをオントロジーへ還流します。",
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
      label: "ケース",
      title: "実証済みのエントリーシナリオ",
      lede: "価値の高いコントロールタワーのユースケースで参入し、自律オペレーションへ拡張します。以下の 3 つのシナリオ類型は、パイロットと本番導入でプラットフォーム価値を実証済みです。",
      items: {
        electronics: {
          title: "コンシューマーエレクトロニクスのサプライチェーン",
          body: "グローバルな工場 + 倉庫 + 輸送の可視化、欠品予測、受注確約の最適化。サプライヤーから顧客まで、あらゆるオブジェクトを単一のオントロジーでカバーします。",
        },
        threepl: {
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
        otd: "定時パフォーマンスの向上",
        automation: "例外処理の自動化",
        turns: "在庫回転率の向上（物流 AI アーリーアダプター）",
      },
      note: "注：上の 3 つは ITEM パイロットの目標レンジです。在庫回転のデータは物流 AI アーリーアダプターの業界ベンチマーク（コスト約 15% 減、回転率約 35% 増）に基づきます。",
    },
    implementation: {
      title: "8〜12 週間で最初の本番パイロットへ",
      lede: "Forward Deployed Engineer（FDE）モデル：小規模チームが現場に入り、オントロジーファーストで、ゲート検収により前進します——3〜6 ヶ月でエンタープライズ展開を完了します。",
      phases: {
        discovery: {
          name: "ディスカバリー",
          duration: "2 週",
          body: "運営プロファイリング、データソースの棚卸し、ユースケースと KPI の確定、商務・セキュリティのオンボーディング。",
        },
        ontology: {
          name: "オントロジー + データ",
          duration: "4〜6 週",
          body: "顧客のビジネスオブジェクトとルールをモデリングし、ERP / WMS / TMS / IoT データを接続します。オントロジーが一度できれば、以降の各モジュールの限界導入コストは下がり続けます。",
        },
        pilot: {
          name: "パイロットエージェント",
          duration: "6〜8 週",
          body: "ガバナンス付きランタイム上で最初の本番エージェントとコントロールタワーワークフローを提供し、KPI ゲートで検収します。",
        },
        scale: {
          name: "アプリのスケール",
          duration: "8〜12 週",
          body: "SCE スイートモジュールのマルチサイト展開、データドメインとロールベースアプリの追加。",
        },
        autonomous: {
          name: "自律オペレーション",
          duration: "6〜12 ヶ月",
          body: "ロボットフリート、RaaS サブスクリプション、自律実行が本番稼働し、顧客は「置き換え不能」の状態に入ります。",
        },
      },
    },
    customers: {
      title: "このオペレーティングシステムを買うのは誰か",
      bestFit: {
        caption: "ベストフィット顧客",
        items: {
          manufacturers: {
            name: "製造業",
            desc: "マルチサイトの生産・倉庫・グローバル流通（まずはコンシューマーエレクトロニクス）",
          },
          logistics: {
            name: "3PL / 物流事業者",
            desc: "WMS、TMS、ヤード、ドックのネットワークを運営",
          },
          forwarders: {
            name: "フォワーダー / キャリア / 通関業者",
            desc: "貨物インテリジェンスと貿易コンプライアンスの買い手",
          },
          retail: {
            name: "小売とサプライヤー",
            desc: "需要・在庫・フルフィルメントのインテリジェンス",
          },
          ports: {
            name: "港湾・ターミナル・施設運営者",
            desc: "物理資産 + フィジカル AI の自然な主戦場",
          },
        },
      },
      vertical: {
        caption: "垂直展開（認証で解放）",
        body: "認証は同時に 2 つの仕事をします。エンタープライズ調達の摩擦を取り除くこと、そしてプラットフォームの成熟度を示すことです。14 の認証がグローバルな主要コンプライアンスフレームワークをカバーします。",
        certs: {
          iso27001: "EU / 英国 / APAC エンタープライズ営業",
          iso42001: "AI ガバナンスの先行者",
          hitrust: "医薬品コールドチェーン",
          fedramp: "連邦 + DoD 物流（$50B+）",
          ctpat: "税関と港湾",
          cmmc: "防衛コントラクター",
          tisax: "自動車サプライチェーン",
          mixed: "ヘルスケア · 金融 · ESG",
        },
      },
    },
    competitive: {
      titleMain: "Palantir はデータインテリジェンス、",
      titleAccent: "ITEM はオペレーション実行",
      lede: "単一のオントロジー、単一のデータモデル、単一のエージェントランタイムの上に、ITEM の統合アーキテクチャは Palantir、Manhattan、ServiceNow、MuleSoft の機能等価物を内包します。その時価総額の合計だけで $500B を超えます。",
      table: {
        caption: "能力マップ · ITEM vs データプラットフォーム vs レガシー SCM",
        capability: "能力",
        rows: {
          ontology: "オントロジー / セマンティック層",
          apps: "サプライチェーンアプリ（OMS/TMS/WMS/YMS）",
          agents: "マルチエージェント実行ランタイム",
          physical: "フィジカル AI / ロボット協調",
          deploy: "エアギャップ / エッジ / ソブリン展開",
          flywheel: "クローズドループ GTM + CX フライホイール",
          focus: "フィジカルオペレーション特化",
        },
        note: "競争ポジショニングは公開されている製品説明（Palantir AIP/Ontology、Databricks Data Intelligence Platform、Manhattan Active、Microsoft Fabric/Copilot Studio など）に基づきます。",
      },
      verdicts: {
        native: "ネイティブ",
        nativeFleet: "ネイティブ（11 パートナーのフリート）",
        nativeHarness: "ネイティブ（Harness）",
        nativeLoop: "ネイティブ（Grow→Support→Audit）",
        strong: "強い",
        legacy: "強い（レガシー）",
        limited: "限定的",
        none: "なし",
        custom: "カスタム",
        partner: "パートナー",
        copilot: "Copilot 級",
        partial: "部分的",
        scattered: "複数のクラウド製品に分散",
        core: "コア",
        broad: "広範なエンタープライズ",
        dataAi: "データ / AI",
        scmOnly: "SCM のみ",
        productivity: "生産性 / データ",
      },
      cards: {
        incumbents: {
          label: "対 既存ベンダー",
          body: "Manhattan、Blue Yonder、SAP、Oracle はエージェント型 AI 以前に作られました。オペレーションを記録はできても、動かすことはできません。各社の既存導入ベースはすべて ITEM の転換機会です。",
        },
        dataPlatforms: {
          label: "対 データプラットフォーム",
          body: "Palantir と Databricks はインサイトで止まります。ITEM はアプリ + AI ランタイム + セマンティクス + デプロイメントのフルスタックを所有し、インサイトからドックドアとロボットまで到達します。",
        },
        pointTools: {
          label: "対 AI ポイントツール",
          body: "多くの AI 企業は Copilot で止まりますが、私たちは実行します。デジタルとフィジカルのオペレーションを統合する「人 + AI + ロボット」は、どのポイントツールにも複製できない形態です。",
        },
      },
    },
    closing: {
      vision: {
        lead: "ワンプラットフォーム、ワンオントロジー、ワンインテリジェンスレイヤー——",
        accent: "人 + AI + ロボット + オペレーション",
        tail: "を統合し、企業が自律的に稼働します。",
      },
      fine: "8〜12 週間でパイロットを開始します。ひとつのシナリオで価値を証明し、その後ネットワーク全体へ拡張——既存システムの入れ替えは不要で、現在の ERP・WMS・TMS と並行して稼働します。",
      cta: "製品デモを予約する →",
    },
    footer: "ITEM AI · 製品概要 · 2026",
  },

  /* ------------------------------------------------------------------ es */
  es: {
    nav: { story: "Historia", platform: "Plataforma", products: "Productos" },
    partner: {
      alt: "ENN Group",
      caption: "Descripción de producto preparada para ENN Group",
    },
    hero: {
      badge: "Descripción de producto · AI OS para la cadena de suministro · 2026",
      titleMain: "El sistema operativo nativo de IA",
      titleAccent: "para la economía física",
      sub: "ITEM AI sustituye el software fragmentado de la cadena de suministro por un único sistema operativo empresarial de IA impulsado por una ontología: une personas + IA + robots + operaciones en transporte, almacenamiento, logística, comercio y automatización industrial.",
      stats: {
        products: "Productos de IA principales",
        layers: "Capas principales",
        pilot: "Semanas hasta el piloto",
        automation: "Automatización de excepciones",
      },
      chip: "Una plataforma · múltiples vectores de expansión",
    },
    sections: {
      problem: "El problema",
      category: "La categoría",
      platform: "La plataforma",
      systems: "Cinco capas principales",
      products: "Productos de IA principales",
      physical: "IA física y RaaS",
      flywheel: "El círculo virtuoso",
      cases: "Casos de estudio",
      implementation: "Implementación",
      customers: "Clientes objetivo",
      competitive: "Posición competitiva",
      vision: "La visión",
    },
    problem: {
      title: "Las cadenas de suministro globales funcionan sobre sistemas fragmentados",
      lede: "Un proveedor para el TMS, otro para el WMS y otro más para el OMS; el software de robótica, la visibilidad, la analítica y los copilotos de IA viven por separado, con los flujos de trabajo cortados entre ellos. Las empresas pagan por ello tres impuestos ocultos cada año.",
      kicker: {
        compliance: "Impuesto oculto 01",
        data: "Impuesto oculto 02",
        operations: "Impuesto oculto 03",
      },
      taxes: {
        compliance: {
          name: "El impuesto del cumplimiento",
          body: "Contracargos, penalizaciones OTIF, auditorías, permisos, reclamaciones, incumplimientos de SLA: los errores nacen en las costuras entre sistemas.",
        },
        data: {
          name: "El impuesto de los datos",
          body: "Previsiones imprecisas, sistemas aislados, poca visibilidad, decisiones tardías: el dato existe, pero nunca se convierte en acción.",
        },
        operations: {
          name: "El impuesto operativo",
          body: "Flujos manuales, ineficiencia laboral, orquestación costosa: personas haciendo el trabajo que debería hacer el software.",
        },
      },
      note: {
        amount: "De millones a decenas de millones",
        body: 'Las grandes empresas gastan de millones a decenas de millones al año en sistemas fragmentados solo para "operar". El mercado está pasando del software de registro (Software of Record) al software de acción (Software of Action).',
      },
    },
    category: {
      titleMain: "No más herramientas:",
      titleAccent: "un sistema operativo",
      lede: "ITEM AI no es un catálogo de 81 productos. Es una plataforma con una estrategia de expansión por capas: un sistema operativo que define categoría y cuenta con múltiples vectores de expansión.",
      old: {
        title: "Se acabó · las herramientas puntuales fragmentadas",
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
          "Personas + IA + robots coordinados en un mismo runtime",
        ],
      },
      thesis: {
        lead: "ITEM AI = el",
        accent: "sistema operativo empresarial de IA",
        tail: "para las cadenas de suministro físicas.",
        sub: "Un único AI OS impulsado por ontología que sustituye al software empresarial fragmentado.",
      },
    },
    stack: {
      title: "The ITEM Stack: la plataforma en una sola página",
      lede: "Una pila de siete capas, de arriba abajo. Cada capa es una ventaja defensiva por sí misma; juntas forman un sistema operativo que ninguna solución puntual puede desplazar.",
      note: "Cada decisión operativa depende del grafo de negocio de ITEM: la dependencia de la ontología hace que la pila sea extraordinariamente difícil de sustituir.",
      layers: {
        app: {
          name: "Aplicaciones",
          detail: "TMS · WMS · OMS · YMS · WES · WCS · Control Tower",
          tag: "Productos de ingresos",
        },
        ai: {
          name: "Capa de IA",
          detail: "ITEM.GPT · ITEM.Claw · ITEM.Predict · ITEM.Sense",
          tag: "Ingresos principales",
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
            "CI/CD · Nube / on-premise / air-gapped / edge · Cumplimiento y reversión",
          tag: "Infraestructura empresarial",
        },
        infra: {
          name: "Infraestructura",
          detail: "Private Stack · Cloud · Edge · GPU / NPU",
          tag: "IaaS",
        },
      },
    },
    systems: {
      title: "Cinco capas principales, cada una con un propósito de diseño claro",
      lede: "Cada sistema tiene un propósito de diseño y un rol comercial claros. Todo lo demás es una extensión de la plataforma, no una nueva empresa.",
      labels: { design: "Diseño", purpose: "Propósito", commercial: "Rol comercial" },
      items: {
        ontology: {
          badge: "La ventaja defensiva",
          design:
            "Un grafo de conocimiento gobernado y una capa de gemelo digital en tiempo real que define objetos de negocio, relaciones, lógica, acciones y reglas dinámicas.",
          purpose:
            "La fuente única de verdad que impulsa una inteligencia coherente y ejecutable en toda la plataforma: pedidos, envíos, contenedores, camiones, conductores, almacenes, robots y muelles en un mismo modelo semántico.",
          products: {
            studio: { name: "ITEM.Ontology Studio", role: "Modelado DDD" },
            executor: {
              name: "ITEM.Ontology Executor",
              role: "Grafo de conocimiento y recuperación",
            },
          },
          caps: [
            "Modelado de objetos",
            "Grafo de conocimiento",
            "Motor de reglas",
            "Gemelo digital",
            "Interoperabilidad semántica",
          ],
          commercial:
            "Nunca se vende por separado: se incluye como la capa defensiva estratégica que genera dependencia de la ontología.",
        },
        foundry: {
          badge: "PaaS",
          design:
            "La plataforma de operaciones empresariales impulsada por la ontología: unifica fuentes de datos heterogéneas, constructor de apps low-code, orquestación de flujos y gemelos digitales operativos.",
          purpose:
            "Orquestar decisiones inteligentes entre equipos de personas + IA; es la base de construcción y ejecución de OMS, TMS, WMS, YMS, WES, WCS y de cualquier aplicación de negocio.",
          products: {
            bi: { name: "ITEM.BI", role: "Plataforma de datos" },
            di: { name: "ITEM.DI", role: "Integración de datos" },
          },
          caps: [
            "Integración de datos",
            "Constructor de apps",
            "Procesamiento de eventos",
            "Pipelines",
            "Low-code",
          ],
          commercial:
            "PaaS: licencias por usuario · ejecución de flujos · licencias de desarrollador · suscripción de plataforma empresarial.",
        },
        aios: {
          badge: "Plataforma incluida",
          design:
            "Un sistema operativo preparado para la IA orientado a la productividad, la inteligencia y las decisiones de la cadena de valor: espacio de trabajo operativo unificado, fusión de datos en tiempo real, copilotos integrados y orquestación de eventos.",
          purpose:
            "Permitir que personas + IA observen, predigan, decidan y optimicen sobre una misma superficie: el cerebro operativo en tiempo real de la empresa.",
          runtime: { name: "Agent Runtime", role: "la capa de ejecución de agentes" },
          caps: [
            "Inteligencia de decisión",
            "Analítica en tiempo real",
            "Búsqueda empresarial",
            "Copilot",
            "Colaboración personas + IA",
          ],
          commercial:
            "Capa de plataforma incluida en cada despliegue empresarial, que eleva el ACV total.",
        },
        aip: {
          badge: "Plataforma estratégica",
          design:
            "El runtime de IA empresarial: orquestación multimodelo, runtime de agentes, flujos autónomos, gobernanza con supervisión humana, gestión de prompts y versiones, observabilidad y auditoría de cumplimiento.",
          purpose:
            "Anclar de forma segura los LLM y los agentes a los datos del mundo real y a los sistemas operativos, convirtiendo las decisiones en una ejecución auditable y reversible.",
          products: {
            gpt: { name: "ITEM.GPT", role: "Plataforma multiagente" },
            flow: { name: "ITEM.Flow", role: "Flujos de trabajo" },
            vision: { name: "ITEM.Vision", role: "IoT, GIS y modelos de visión" },
          },
          caps: [
            "Orquestación multimodelo",
            "Runtime de agentes",
            "Llamada a herramientas",
            "Gobernanza",
            "Auditoría",
          ],
          commercial:
            "Producto central de plataforma: licencias SaaS · cómputo por uso · tarifas por ejecución de agentes · facturación FaaS.",
        },
        harness: {
          badge: "Infraestructura empresarial",
          design:
            "La plataforma de entrega continua y despliegue autónomo: despliega, monitoriza, actualiza y gestiona software en cualquier entorno (nube, on-premise, air-gapped, edge) con despliegues canary, reversión y monitorización de cumplimiento incorporados.",
          purpose:
            "Llevar la IA crítica dentro de cualquier frontera del cliente: es el requisito de entrada en gobierno, defensa, salud y manufactura, y el motor de entrega detrás de Private Stack (nube de IA soberana).",
          products: {
            ide: { name: "Agent IDE", role: "Entorno de desarrollo de agentes" },
            iam: { name: "IAM", role: "Identidad y acceso empresarial" },
            deploy: {
              name: "Multi-Tenant Deployment Platform",
              role: "Ejecución en cualquier lugar, con gobernanza",
            },
          },
          environments: "Cloud | On-Prem | Edge | Air-gapped",
          caps: [
            "CI/CD",
            "Air-gapped",
            "Edge",
            "Despliegues canary",
            "Reversión",
            "Gobernanza de entornos",
          ],
          commercial:
            "Producto de infraestructura empresarial, normalmente incluido en los contratos corporativos; desbloquea la prima de ACV de 2–3× de Private Stack.",
        },
      },
    },
    products: {
      titleMain: "22 productos de IA principales:",
      titleAccent: "12 aplicaciones generales × 10 plantillas sectoriales",
      lede: "12 aplicaciones de IA generales se reutilizan en todos los sectores: decidir, ejecutar, predecir, visualizar, dar soporte y crecer. 10 plantillas sectoriales empaquetan la ontología vertical, los flujos preconstruidos, las reglas de cumplimiento y los conectores en soluciones conectables.",
      note: "Los componentes de plataforma se entregan con sus sistemas (no se cuentan arriba): Agent Runtime (AI OS) · Agent IDE · IAM · Multi-Tenant Deployment Platform (Harness).",
      provenLabel: "PROBADO",
      groups: {
        ontology: { name: "Ontology", sub: "Sistema de significado" },
        foundry: { name: "Foundry", sub: "Sistema de datos y aplicaciones" },
        aios: { name: "AI OS", sub: "Sistema de inteligencia" },
        aip: { name: "AIP", sub: "Sistema de acción" },
        apps: { name: "AI Applications", sub: "Productos de IA independientes" },
        templates: {
          name: "Plantillas sectoriales",
          sub: "Verticales conectables · Layer 6",
        },
      },
      items: {
        itemGpt: {
          tag: "IA para cada decisión. En tiempo real.",
          desc: "Interfaz operativa en lenguaje natural: converse para consultar, decidir y actuar en toda la plataforma.",
        },
        itemDoc: {
          tag: "Documentos que se procesan solos.",
          desc: "Automatización documental: lectura, generación y archivo inteligente de contratos, facturas e informes.",
        },
        itemSense: {
          tag: "Véalo todo. Al instante.",
          desc: "Visibilidad en tiempo real + cabina de gemelo digital: una imagen viva de toda la red.",
        },
        itemPredict: {
          tag: "Anticipe lo que viene.",
          desc: "Motor de previsión general: demanda, flujo de caja, afluencia y recursos. Vea la ruptura antes de que ocurra.",
        },
        itemOpsAi: {
          tag: "Operaciones que se ejecutan solas.",
          desc: "Decisión autónoma + optimización continua: el cerebro de unas operaciones que se gobiernan a sí mismas.",
        },
        itemAudit: {
          tag: "Encuentre lo que está perdiendo.",
          desc: "Detección de errores de facturación, auditoría de cumplimiento y recuperación de costes: recupere cada dólar.",
        },
        itemVision: {
          tag: "Vea lo que otros pasan por alto.",
          desc: "Visión por computador: seguridad, inspección de calidad, monitorización de instalaciones e inteligencia geoespacial.",
        },
        itemVoice: {
          tag: "Opere sin usar las manos.",
          desc: "IA de voz: la interfaz manos libres para el trabajo en planta y las llamadas entrantes.",
        },
        itemClaw: {
          tag: "Ejecución sin fricción.",
          desc: "Ejecutor de flujos multiagente: convierte las decisiones en acciones gobernadas, de la sugerencia a la ejecución.",
        },
        itemFlow: {
          tag: "Diseñe. Automatice. Escale.",
          desc: "Constructor visual de flujos con IA: aprobaciones, enrutamiento, escalados y excepciones.",
        },
        itemSupport: {
          tag: "Todos los canales. Un solo hilo.",
          desc: "Tickets omnicanal: correo · mensajería · SMS · teléfono, con contexto operativo completo y resoluciones redactadas por IA.",
        },
        itemGrow: {
          tag: "Un pipeline que nunca duerme.",
          desc: "IA para GTM: SDR/BDR · SEO/AEO/GEO · generación de contenido; prospección inteligente impulsada por la ontología.",
        },
        itemChain: {
          tag: "CADENA DE SUMINISTRO Y LOGÍSTICA",
          desc: "Ejecución completa de pedido / transporte / almacén / patio: la plantilla insignia",
        },
        itemDock: {
          tag: "PUERTOS Y DRAYAGE",
          desc: "Operaciones portuarias, de drayage y de contenedores",
        },
        itemTrade: {
          tag: "COMERCIO GLOBAL",
          desc: "Clasificación arancelaria, cumplimiento e inteligencia comercial",
        },
        itemFin: {
          tag: "ASESORÍA FINANCIERA",
          desc: "Asesoría: perfilado de clientes, analítica de cartera y presentaciones regulatorias",
        },
        itemDine: {
          tag: "OPERACIÓN DE RESTAURANTES",
          desc: "Restauración: turnos, previsión de preparación y control de mermas",
        },
        itemEstate: {
          tag: "GESTIÓN INMOBILIARIA",
          desc: "Inmuebles: contratos, servicios al inquilino, reparaciones y energía",
        },
        itemBuild: {
          tag: "DESARROLLO INMOBILIARIO",
          desc: "Desarrollo: cronogramas, proveedores, costes y ventas",
        },
        itemHealth: {
          tag: "OPERACIONES DE SALUD",
          desc: "Salud: cadena de frío, caducidades y trazabilidad",
        },
        itemAuto: {
          tag: "MANUFACTURA",
          desc: "Manufactura: secuenciación JIT y riesgo de proveedores",
        },
        itemRetail: {
          tag: "RETAIL Y COMERCIO",
          desc: "Retail: pedidos omnicanal, inventario y devoluciones",
        },
      },
    },
    physical: {
      titleMain: "El hardware es el CapEx del cliente:",
      titleAccent: "la inteligencia es el motor de valor permanente",
      lede: "11 socios de robótica (6 Dealer/ODM + 5 Reseller/OEM) convierten el modelo RaaS de teoría en realidad: cada robot del ecosistema se vuelve un punto de suscripción, con el WCS, el WES, ITEM.Claw, ITEM.Vision y la capa de autonomía heterogénea de ITEM ejecutándose sobre el hardware.",
      fleet: {
        caption: "Mapa combinado de capacidades de flota · 11 socios",
        cols: {
          type: "Tipo de robot",
          partner: "Socio",
          env: "Entorno",
          modules: "Módulos ITEM",
          raas: "Modelo RaaS",
        },
        rows: {
          hangcha: {
            type: "Carretillas autónomas AGF/AMR",
            env: "DC interior",
            modules: "WCS · WES · ITEM.Claw",
            raas: "$ / carretilla / mes",
          },
          libiao: {
            type: "AMR de clasificación",
            env: "Fulfillment",
            modules: "WES · OMS · ITEM.Claw",
            raas: "$ / clasificación o robot",
          },
          xyz: {
            type: "Robots de picking unitario",
            env: "Estaciones de picking",
            modules: "WES · OMS · ITEM.Vision",
            raas: "$ / picking",
          },
          unitree: {
            type: "Humanoides",
            env: "DC / aeropuerto / fábrica",
            modules: "WES · WCS · Autonomía",
            raas: "$ / humanoide / mes",
          },
          pudu: {
            type: "Robots de reparto en interiores",
            env: "DC / hospital / hotel",
            modules: "FMS · WES · ITEM.Voice",
            raas: "$ / entrega",
          },
          deepRobotics: {
            type: "Inspección cuadrúpeda",
            env: "Patio / perímetro / exterior",
            modules: "YMS · ITEM.Vision · ITEM.Sense",
            raas: "$ / patrulla / mes",
          },
          zsRobotics: {
            type: "AMR industrial",
            env: "Movimiento de palés en DC",
            modules: "WES · WCS · ITEM.Claw",
            raas: "$ / robot / mes",
          },
          galaxis: {
            type: "Red troncal de posicionamiento interior",
            env: "Interior del DC",
            modules: "Todos los módulos de robótica",
            raas: "Suscripción de infraestructura",
          },
          lanxin: {
            type: "Inteligencia de navegación SLAM",
            env: "Todos los entornos",
            modules: "WCS · Gemelo digital",
            raas: "Licencia de SDK",
          },
          slamtec: {
            type: "Sensores LiDAR",
            env: "Todos los entornos",
            modules: "Capa de IA física",
            raas: "Integrado en el RaaS",
          },
          mita: {
            type: "Integración de sistemas",
            env: "Todos los despliegues",
            modules: "WCS · WES · PLC",
            raas: "Servicios profesionales",
          },
        },
      },
      ledger: {
        caption: "El libro mayor del RaaS · un DC empresarial",
        cols: {
          fleet: "Flota",
          capex: "CapEx del cliente",
          subscription: "Suscripción anual ITEM",
        },
        rows: {
          forklifts: "20× carretillas Hangcha",
          sortation: "50× clasificación Libiao",
          picking: "10× picking XYZ",
          humanoids: "30× humanoides Unitree G1",
          mixed: "5× Deep Robotics + 20× Pudu",
          infra: "Infraestructura Galaxis / Slamtec",
          total: "Total por DC",
        },
      },
      coverage: {
        headline: "25 DC → cobertura total",
        body: "Con 25 centros de distribución a esta escala, la capa de inteligencia de ITEM cubre toda la flota de robots: cero riesgo de hardware y un modelo ligero en activos para el cliente. La capa de inteligencia queda integrada en la operación física y garantiza una entrega de valor continua.",
        footnote:
          "El coste de fabricación de humanoides cae cerca de un 40% interanual (Goldman Sachs): a medida que el hardware se abarata, la capa de inteligencia de software captura más valor. No vendemos robots;",
        footnoteAccent:
          "hacemos que cada robot sea más inteligente y cobramos por esa inteligencia para siempre.",
      },
    },
    flywheel: {
      titleMain: "Del pipeline a la plataforma y a la resolución:",
      titleAccent: "un ciclo cerrado",
      lede: "El sistema se vende, se ejecuta, se mejora y se retiene a sí mismo, por arquitectura y no como eslogan. Cada etapa devuelve datos a la ontología.",
      nodes: {
        grow: "Encuentra al cliente: inteligencia de pipeline SDR / AEO / GEO",
        gpt: "Demostración conversacional e interfaz de decisión",
        sce: "OMS · TMS · WMS · WES · YMS operan el negocio",
        sense: "Monitoriza todo en tiempo real",
        support: "Resuelve cada excepción",
        audit: "Recupera cada dólar → alimenta la expansión de ITEM.Grow",
      },
      note: {
        label: "El círculo virtuoso de los datos operativos:",
        body: "Más flujos de trabajo → más decisiones → mejores modelos → mejor automatización. Cada resolución en ITEM.Support entrena la siguiente respuesta de ITEM.GPT; cada hallazgo de ITEM.Audit se convierte en el caso de estudio de la siguiente secuencia de ITEM.Grow. Este es el círculo que justifica múltiplos de clase Palantir sobre una base de ingresos temprana.",
      },
    },
    cases: {
      label: "Caso",
      title: "Escenarios de entrada probados",
      lede: "Entre con casos de uso de torre de control de alto valor y expándase después hacia la operación autónoma. Estos tres tipos de escenario ya han validado la plataforma en pilotos y despliegues.",
      items: {
        electronics: {
          title: "Cadena de suministro de electrónica de consumo",
          body: "Visibilidad global de fábricas, almacenes y transporte; predicción de faltantes; optimización de la promesa de pedido. Una sola ontología que abarca cada objeto, del proveedor al cliente.",
        },
        threepl: {
          title: "Torre de control multialmacén para 3PL",
          body: "Gestión de excepciones en toda la red; decisiones de personal, inventario y expedición; visibilidad para el cliente final. Los 3PL de primer nivel como Kuehne+Nagel, donde ya operan las flotas RaaS de clasificación de Libiao (~50 AMR), son exactamente este perfil de comprador.",
        },
        yard: {
          title: "Inteligencia de patio y muelle (cabeza de playa LA/LB)",
          body: "Programación de citas, asignación de muelles, seguimiento de remolques y reducción del tiempo de permanencia. LA/LB y el Inland Empire son el mercado cuña ideal, donde ITEM.Dock construye su dominio en el lado portuario.",
        },
      },
      metrics: {
        cost: "Menor coste operativo",
        otd: "Mejora del cumplimiento a tiempo",
        automation: "Automatización de excepciones",
        turns: "Mayor rotación de inventario (adoptantes tempranos de IA)",
      },
      note: "Nota: los tres primeros son rangos objetivo de los pilotos de ITEM; el dato de rotación de inventario refleja referencias del sector para adoptantes tempranos de IA logística (~15% menos coste, ~35% más rotación).",
    },
    implementation: {
      title: "8–12 semanas hasta el primer piloto en producción",
      lede: "El modelo Forward Deployed Engineer (FDE): un equipo pequeño en sede del cliente, la ontología primero y aceptación por hitos; despliegue empresarial en 3–6 meses.",
      phases: {
        discovery: {
          name: "Descubrimiento",
          duration: "2 semanas",
          body: "Perfilado operativo, inventario de fuentes de datos, fijación de casos de uso y KPI, y alta comercial y de seguridad.",
        },
        ontology: {
          name: "Ontología + datos",
          duration: "4–6 semanas",
          body: "Modelado de los objetos de negocio y las reglas del cliente y conexión de los datos de ERP / WMS / TMS / IoT. Una vez existe la ontología, cada módulo posterior se despliega con un coste marginal menor.",
        },
        pilot: {
          name: "Agentes piloto",
          duration: "6–8 semanas",
          body: "Primeros agentes en producción y flujos de torre de control sobre el runtime gobernado, aceptados contra hitos de KPI.",
        },
        scale: {
          name: "Escalado de aplicaciones",
          duration: "8–12 semanas",
          body: "Despliegue multisede de los módulos de la suite SCE, con más dominios de datos y aplicaciones por rol.",
        },
        autonomous: {
          name: "Operación autónoma",
          duration: "6–12 meses",
          body: "Entran en producción las flotas de robots, las suscripciones RaaS y la ejecución autónoma: el cliente alcanza el estado de insustituible.",
        },
      },
    },
    customers: {
      title: "Quién compra este sistema operativo",
      bestFit: {
        caption: "Clientes con mejor encaje",
        items: {
          manufacturers: {
            name: "Fabricantes",
            desc: "producción multisede, almacenamiento y distribución global (electrónica de consumo primero)",
          },
          logistics: {
            name: "3PL / operadores logísticos",
            desc: "que operan redes de WMS, TMS, patios y muelles",
          },
          forwarders: {
            name: "Transitarios / transportistas / agentes de aduanas",
            desc: "compradores de inteligencia de carga y cumplimiento comercial",
          },
          retail: {
            name: "Retail y proveedores",
            desc: "inteligencia de demanda, inventario y fulfillment",
          },
          ports: {
            name: "Puertos, terminales y operadores de instalaciones",
            desc: "el hogar natural de los activos físicos y la IA física",
          },
        },
      },
      vertical: {
        caption: "Expansión vertical (desbloqueada por certificaciones)",
        body: "Las certificaciones cumplen dos funciones a la vez: eliminan la fricción de compra corporativa y señalan la madurez de la plataforma. 14 certificaciones cubren los principales marcos de cumplimiento del mundo.",
        certs: {
          iso27001: "empresas de UE / Reino Unido / APAC",
          iso42001: "pionero en gobernanza de IA",
          hitrust: "cadena de frío farmacéutica",
          fedramp: "logística federal + DoD ($50B+)",
          ctpat: "aduanas y puertos",
          cmmc: "contratistas de defensa",
          tisax: "cadena de suministro automotriz",
          mixed: "salud · finanzas · ESG",
        },
      },
    },
    competitive: {
      titleMain: "Palantir hace inteligencia de datos.",
      titleAccent: "ITEM hace ejecución operativa.",
      lede: "Sobre una sola ontología, un solo modelo de datos y un solo runtime de agentes, la arquitectura unificada de ITEM contiene los equivalentes funcionales de Palantir, Manhattan, ServiceNow y MuleSoft, cuyo valor de mercado combinado supera por sí solo los $500B.",
      table: {
        caption: "Mapa de capacidades · ITEM vs plataformas de datos vs SCM tradicional",
        capability: "Capacidad",
        rows: {
          ontology: "Ontología / capa semántica",
          apps: "Aplicaciones de cadena de suministro (OMS/TMS/WMS/YMS)",
          agents: "Runtime de ejecución multiagente",
          physical: "IA física / coordinación de robots",
          deploy: "Despliegue air-gapped / edge / soberano",
          flywheel: "Ciclo cerrado GTM + CX",
          focus: "Foco en operaciones físicas",
        },
        note: "Posicionamiento basado en descripciones públicas de producto (Palantir AIP/Ontology, Databricks Data Intelligence Platform, Manhattan Active, Microsoft Fabric/Copilot Studio, etc.).",
      },
      verdicts: {
        native: "Nativo",
        nativeFleet: "Nativo (flota de 11 socios)",
        nativeHarness: "Nativo (Harness)",
        nativeLoop: "Nativo (Grow→Support→Audit)",
        strong: "Fuerte",
        legacy: "Fuerte (heredado)",
        limited: "Limitado",
        none: "Ninguno",
        custom: "A medida",
        partner: "Vía socios",
        copilot: "Nivel copiloto",
        partial: "Parcial",
        scattered: "Disperso entre nubes",
        core: "Central",
        broad: "Empresa amplia",
        dataAi: "Datos / IA",
        scmOnly: "Solo SCM",
        productivity: "Productividad / datos",
      },
      cards: {
        incumbents: {
          label: "frente a los actores establecidos",
          body: "Manhattan, Blue Yonder, SAP y Oracle se construyeron antes de la IA agéntica: registran las operaciones, pero no pueden ejecutarlas. Cada base instalada de un competidor es una oportunidad de conversión para ITEM.",
        },
        dataPlatforms: {
          label: "frente a las plataformas de datos",
          body: "Palantir y Databricks se detienen en el insight. ITEM es dueño de las aplicaciones + el runtime de IA + la semántica + el despliegue: del insight hasta la puerta del muelle y el robot.",
        },
        pointTools: {
          label: "frente a las herramientas puntuales de IA",
          body: 'La mayoría de las empresas de IA se detienen en el copiloto; nosotros ejecutamos. "Personas + IA + robots" a lo largo de las operaciones digitales y físicas es una forma que ninguna herramienta puntual puede replicar.',
        },
      },
    },
    closing: {
      vision: {
        lead: "Una plataforma, una ontología, una capa de inteligencia que une",
        accent: "personas + IA + robots + operaciones",
        tail: "para que su empresa se opere sola.",
      },
      fine: "Empiece un piloto en 8–12 semanas. Demuestre el valor en un escenario y expándalo después a toda la red: sin sustituciones traumáticas y en paralelo con su ERP, WMS y TMS actuales.",
      cta: "Solicitar una demostración →",
    },
    footer: "ITEM AI · Descripción de producto · 2026",
  },
};

export default pack;
