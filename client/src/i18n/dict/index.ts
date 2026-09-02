import type { Locale, DictTree } from "../runtime";
import { LOCALES } from "../runtime";

import common from "./common";
import deck from "./deck";
import architecture from "./architecture";
import v2 from "./v2";

/**
 * Every namespace ships all four locales in one file, so translations for a
 * page live next to each other and separate pages never collide.
 */
export type LocalePack = Record<Locale, DictTree>;

/**
 * Only the copy the landing deck needs is bundled eagerly. Each sub-page's
 * translations are a few hundred KB across four locales, so they load with
 * that page's own chunk — see `registerPagePack` and the lazy routes in
 * App.tsx.
 */
const corePacks: Record<string, LocalePack> = {
  common,
  deck,
  architecture,
  v2,
};

function build(locale: Locale): DictTree {
  const tree: DictTree = {};
  for (const [ns, pack] of Object.entries(corePacks)) {
    tree[ns] = pack[locale] ?? pack.en ?? {};
  }
  tree.pages = {};
  return tree;
}

export const dict: Record<Locale, DictTree> = {
  zh: build("zh"),
  en: build("en"),
  ja: build("ja"),
  es: build("es"),
};

/**
 * Merge a lazily-loaded page pack into the live dictionary.
 *
 * Called while the route's chunk is resolving, so the strings are in place
 * before the page first renders and no re-render is needed. Registering the
 * same namespace twice is a no-op.
 */
export function registerPagePack(namespace: string, pack: LocalePack): void {
  for (const locale of LOCALES) {
    const pages = dict[locale].pages as DictTree;
    if (pages[namespace]) return;
    pages[namespace] = pack[locale] ?? pack.en ?? {};
  }
}
