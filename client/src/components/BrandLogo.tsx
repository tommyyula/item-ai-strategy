import { useTheme } from "@/contexts/ThemeContext";

/**
 * Official ITEM logo, vendored from cdn.item.com into client/public/brand.
 * The brand ships separate artwork for light and dark grounds — using the
 * white-text lockup on a light page is one of the "don'ts" in the guidelines,
 * so the file swaps with the theme rather than being filtered or inverted.
 */
type Variant = "lockup" | "mark" | "wordmark";

const FILES: Record<Variant, { dark: string; light: string }> = {
  // Full logo: mark + wordmark.
  lockup: {
    dark: "brand/item-logo-fullcolor-whitetxt.svg",
    light: "brand/item-wordmark-black.svg",
  },
  // Just the glyph, for tight spots and favicons.
  mark: {
    dark: "brand/logo-mark-fullcolor.svg",
    light: "brand/logo-mark-fullcolor.svg",
  },
  // Wordmark only.
  wordmark: {
    dark: "brand/item-white-logo.svg",
    light: "brand/item-wordmark-black.svg",
  },
};

interface BrandLogoProps {
  variant?: Variant;
  className?: string;
  /** Rendered height, e.g. "h-6". Width follows the aspect ratio. */
  heightClass?: string;
}

export default function BrandLogo({
  variant = "lockup",
  className = "",
  heightClass = "h-6",
}: BrandLogoProps) {
  const { theme } = useTheme();
  const file = FILES[variant][theme === "dark" ? "dark" : "light"];
  // BASE_URL keeps this correct under the /item-ai-strategy/ GitHub Pages path.
  const src = `${import.meta.env.BASE_URL}${file}`;

  return (
    <img
      src={src}
      alt="ITEM"
      className={`${heightClass} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
