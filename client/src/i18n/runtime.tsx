import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dict } from "./dict";

export const LOCALES = ["zh", "en", "ja", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  ja: "日本語",
  es: "Español",
};

/** Short label for the compact switcher. */
export const LOCALE_SHORT: Record<Locale, string> = {
  zh: "中",
  en: "EN",
  ja: "日",
  es: "ES",
};

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "en";

/**
 * A dictionary node is either a leaf (the translated string) or a nested group.
 * Leaves may also be string arrays, for bullet lists and similar repeated copy.
 */
export type DictNode = string | string[] | { [key: string]: DictNode };
export type DictTree = { [key: string]: DictNode };

function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* storage unavailable — fall through to navigator */
  }
  try {
    for (const tag of navigator.languages ?? [navigator.language]) {
      const base = tag.toLowerCase().split("-")[0];
      if (isLocale(base)) return base;
    }
  } catch {
    /* no navigator — fall through to default */
  }
  return DEFAULT_LOCALE;
}

function lookup(tree: DictNode | undefined, path: string[]): DictNode | undefined {
  let node: DictNode | undefined = tree;
  for (const key of path) {
    if (node == null || typeof node === "string" || Array.isArray(node)) return undefined;
    node = node[key];
  }
  return node;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Resolve a dot-path to a string. Falls back to English, then to the path itself. */
  t: (path: string) => string;
  /** Resolve a dot-path to a string array. Returns [] if missing. */
  tList: (path: string) => string[];
  /** Resolve a dot-path to an arbitrary subtree — for structured content like tables. */
  tRaw: <T = DictNode>(path: string) => T | undefined;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable — the choice just will not persist */
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const resolve = useCallback(
    (path: string): DictNode | undefined => {
      const parts = path.split(".");
      const hit = lookup(dict[locale], parts);
      if (hit !== undefined) return hit;
      // Missing translation: fall back to English so the page never shows a raw key.
      return lookup(dict.en, parts);
    },
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (path) => {
        const hit = resolve(path);
        if (typeof hit === "string") return hit;
        if (Array.isArray(hit)) return hit.join(" ");
        if (import.meta.env.DEV && hit === undefined) {
          console.warn(`[i18n] missing key: ${path} (${locale})`);
        }
        return typeof hit === "undefined" ? path : path;
      },
      tList: (path) => {
        const hit = resolve(path);
        if (Array.isArray(hit)) return hit;
        if (typeof hit === "string") return [hit];
        return [];
      },
      tRaw: <T,>(path: string) => resolve(path) as T | undefined,
    }),
    [locale, setLocale, resolve],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

/**
 * Scope translations to a namespace so components can use short keys:
 *   const t = useT("deck.hero");
 *   t("title")  ->  dict[locale].deck.hero.title
 */
export function useT(namespace?: string) {
  const { t, tList, tRaw, locale } = useI18n();
  const prefix = namespace ? `${namespace}.` : "";
  return useMemo(
    () =>
      Object.assign((key: string) => t(prefix + key), {
        list: (key: string) => tList(prefix + key),
        raw: <T,>(key: string) => tRaw<T>(prefix + key),
        locale,
      }),
    [t, tList, tRaw, prefix, locale],
  );
}
