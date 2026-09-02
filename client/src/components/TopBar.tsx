import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Globe, Check } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { useTheme } from "@/contexts/ThemeContext";
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT, useI18n, useT } from "@/i18n/runtime";

/**
 * Fixed page furniture: the ITEM logo top-left on every page, with the theme
 * and language controls top-right. Rendered once per page, above content.
 */
export default function TopBar({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme, switchable } = useTheme();
  const { locale, setLocale } = useI18n();
  const t = useT("common.topbar");

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const btn =
    "inline-flex items-center justify-center gap-1.5 rounded-full border border-border/70 " +
    "bg-card/70 backdrop-blur-md text-foreground/80 hover:text-foreground " +
    "hover:border-cyan-glow/50 transition-colors";

  return (
    <>
      <a
        href={import.meta.env.BASE_URL}
        className="fixed top-4 left-4 z-50 block"
        aria-label={t("home")}
      >
        <BrandLogo heightClass={compact ? "h-5" : "h-7"} className="opacity-90 hover:opacity-100 transition-opacity" />
      </a>

      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            className={`${btn} h-9 px-3 text-xs font-semibold`}
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label={t("language")}
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{LOCALE_SHORT[locale]}</span>
          </button>

          {open && (
            <div
              role="listbox"
              aria-label={t("language")}
              className="absolute right-0 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-border bg-popover/95 backdrop-blur-md shadow-lg"
            >
              {LOCALES.map((l) => (
                <button
                  key={l}
                  role="option"
                  aria-selected={l === locale}
                  lang={l}
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors
                    ${l === locale ? "text-cyan-glow" : "text-popover-foreground/80 hover:text-popover-foreground"}
                    hover:bg-surface-veil`}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                >
                  <span>{LOCALE_LABELS[l]}</span>
                  {l === locale && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {switchable && (
          <button
            type="button"
            onClick={toggleTheme}
            className={`${btn} h-9 w-9`}
            aria-label={theme === "dark" ? t("switchToDay") : t("switchToNight")}
            title={theme === "dark" ? t("switchToDay") : t("switchToNight")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    </>
  );
}
