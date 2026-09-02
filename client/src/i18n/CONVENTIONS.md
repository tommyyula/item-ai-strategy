# Conventions for this codebase

Read this before touching any component or dictionary file.

## Languages

Four locales, always all four in the same file: `zh`, `en`, `ja`, `es`.

`en` is the reference text. `zh` is the original authored copy where one exists —
prefer the author's existing Chinese wording over re-translating from English.
`ja` and `es` are new translations.

There is no mixed-language display any more. A page renders exactly one locale.
If you find markup that shows Chinese and English stacked together (a `.zh` block
next to an `.en` block, or `<p>Title</p><p>标题</p>`), that is the bug you are
fixing: keep the content, split it into locales.

## Dictionary files

Every namespace is one file exporting all four locales:

```ts
import type { LocalePack } from "../index";   // or "./index" at the top level

const pack: LocalePack = {
  zh: { hero: { title: "…", bullets: ["…", "…"] } },
  en: { hero: { title: "…", bullets: ["…", "…"] } },
  ja: { … },
  es: { … },
};

export default pack;
```

Rules:

- The four locales must have **identical key structure**. A key present in `en`
  and missing in `ja` renders the English string as a fallback, which looks like
  a bug to the reader.
- Values are strings, string arrays, or nested objects. Nothing else — no JSX,
  no HTML strings, no functions.
- Keep keys semantic (`hero.subtitle`), never positional (`line1`, `text2`).
- Numbers, metrics, product names, and company names stay as they are. Do not
  localise `100M+`, `ItemGPT`, `Foundry`, `SOC 2`, `WMS`.
- Do not translate code identifiers, route names, or CSS classes.

## Using translations in components

```tsx
import { useT } from "@/i18n/runtime";

export default function HeroSection() {
  const t = useT("deck.hero");          // namespace prefix
  return (
    <>
      <h1>{t("title")}</h1>
      <ul>{t.list("bullets").map((b) => <li key={b}>{b}</li>)}</ul>
    </>
  );
}
```

`t(key)` returns a string, `t.list(key)` a string array, `t.raw<T>(key)` an
arbitrary subtree for structured content such as table rows. `t.locale` is the
active locale when you need it for conditional layout.

## Theming

The palette is token-driven and both themes are real. **Never hardcode a colour
that only works on one ground.**

| Instead of | Use |
| --- | --- |
| `text-white`, `text-slate-100` | `text-foreground` |
| `text-white/60`, `text-slate-400` | `text-muted-foreground` |
| `bg-black`, `bg-slate-900` | `bg-background` or `bg-card` |
| `bg-white/[0.03]` | `bg-surface-veil` |
| `bg-white/[0.06]` | `bg-surface-veil-strong` |
| `border-white/10` | `border-border` |
| a literal cyan | `text-cyan-glow` / `border-cyan-glow` |
| a literal purple | `text-purple-glow` |

`cyan-glow` and `purple-glow` resolve to a darker, legible value in the light
theme automatically — use the token and contrast takes care of itself.

For a panel, prefer the existing `.panel` class over rebuilding the treatment.

Gradients that assume a dark ground need a light-theme counterpart. Either build
them from `color-mix(in oklch, var(--cyan-glow) …, transparent)` so they follow
the theme, or supply a `dark:` variant for the dark case and a legible default
for light.

Check your work in **both** themes. Toggling is the top-right control.

## Logos and images

- The ITEM logo is `<BrandLogo />` from `@/components/BrandLogo`. It picks the
  right artwork per theme. Never hotlink a logo and never recolour it.
- Customer logos live in `client/public/logos/<slug>.svg`. Reference them as
  `` `${import.meta.env.BASE_URL}logos/walmart.svg` `` — the bare `/logos/...`
  path breaks under the `/item-ai-strategy/` base path on GitHub Pages.
- Content images are in `client/public/media/`. Same `BASE_URL` rule.
- **No external image hosts.** Every asset ships from this repo. The previous
  CDN went dark and took every logo on the site with it.
- Customer logos are supplied in their own brand colours. On a dark ground wrap
  them in a container that keeps them legible rather than inverting them; a
  neutral chip behind the mark is fine, a hue shift is not.

## Page furniture

Every page renders `<TopBar />` once, near the top of its tree. It supplies the
fixed ITEM logo, the language menu, and the day/night toggle. Do not build a
second logo into the top-left of a page.

## Accessibility

- Interactive elements need an accessible name (`aria-label` when the control is
  icon-only).
- Do not drop below `text-muted-foreground` for body copy in either theme.
- Respect `prefers-reduced-motion` for anything that animates on load.
