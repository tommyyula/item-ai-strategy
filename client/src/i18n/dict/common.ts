import type { LocalePack } from "./index";

/**
 * Chrome shared across every page: the top bar controls and the side-nav
 * section labels. Page copy lives in its own namespace.
 */
const common: LocalePack = {
  zh: {
    topbar: {
      home: "返回首页",
      language: "语言",
      switchToDay: "切换到日间模式",
      switchToNight: "切换到夜间模式",
    },
    nav: {
      hero: "封面",
      company: "关于我们",
      evolution: "演进",
      video: "实录演示",
      agents: "Agent 化",
      agentExamples: "更多案例",
      physical: "物理 AI",
      journey: "心路历程",
      architecture: "平台架构",
      ontology: "本体",
      harness: "Harness",
      llm: "大模型选型",
      hardware: "硬件",
      future: "展望",
    },
    ui: {
      scroll: "向下滚动",
      back: "返回",
      next: "下一页",
      prev: "上一页",
      customersPartners: "客户与合作伙伴",
    },
  },

  en: {
    topbar: {
      home: "Back to home",
      language: "Language",
      switchToDay: "Switch to day view",
      switchToNight: "Switch to night view",
    },
    nav: {
      hero: "Cover",
      company: "Who We Are",
      evolution: "Evolution",
      video: "Demo",
      agents: "Agents",
      agentExamples: "More Agents",
      physical: "Physical AI",
      journey: "Lessons",
      architecture: "Platform Architecture",
      ontology: "Ontology",
      harness: "Harness",
      llm: "LLM Strategy",
      hardware: "Hardware",
      future: "Vision",
    },
    ui: {
      scroll: "Scroll",
      back: "Back",
      next: "Next",
      prev: "Previous",
      customersPartners: "Customers & Partners",
    },
  },

  ja: {
    topbar: {
      home: "ホームへ戻る",
      language: "言語",
      switchToDay: "ライトモードに切り替え",
      switchToNight: "ダークモードに切り替え",
    },
    nav: {
      hero: "表紙",
      company: "会社概要",
      evolution: "進化",
      video: "デモ",
      agents: "エージェント化",
      agentExamples: "活用事例",
      physical: "フィジカルAI",
      journey: "これまでの歩み",
      architecture: "プラットフォーム構成",
      ontology: "オントロジー",
      harness: "Harness",
      llm: "LLM戦略",
      hardware: "ハードウェア",
      future: "展望",
    },
    ui: {
      scroll: "スクロール",
      back: "戻る",
      next: "次へ",
      prev: "前へ",
      customersPartners: "お客様・パートナー",
    },
  },

  es: {
    topbar: {
      home: "Volver al inicio",
      language: "Idioma",
      switchToDay: "Cambiar a modo día",
      switchToNight: "Cambiar a modo noche",
    },
    nav: {
      hero: "Portada",
      company: "Quiénes somos",
      evolution: "Evolución",
      video: "Demostración",
      agents: "Agentes",
      agentExamples: "Más casos",
      physical: "IA física",
      journey: "Aprendizajes",
      architecture: "Arquitectura de plataforma",
      ontology: "Ontología",
      harness: "Harness",
      llm: "Estrategia de LLM",
      hardware: "Hardware",
      future: "Visión",
    },
    ui: {
      scroll: "Desplazar",
      back: "Volver",
      next: "Siguiente",
      prev: "Anterior",
      customersPartners: "Clientes y socios",
    },
  },
};

export default common;
