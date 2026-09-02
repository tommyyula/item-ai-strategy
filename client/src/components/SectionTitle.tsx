import AnimatedSection from "./AnimatedSection";
import BrandLogo from "@/components/BrandLogo";

interface SectionTitleProps {
  /** Slide number, e.g. "03". Not localised. */
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /**
   * Optional inline ITEM mark above the heading. Off by default: the page
   * already renders `<TopBar />`, which carries the brand.
   */
  showLogo?: boolean;
}

export default function SectionTitle({
  number,
  title,
  subtitle,
  align = "left",
  showLogo = false,
}: SectionTitleProps) {
  return (
    <AnimatedSection className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {showLogo && (
        <div className={`mb-6 ${align === "center" ? "flex justify-center" : ""}`}>
          <BrandLogo variant="mark" heightClass="h-6" className="opacity-70" />
        </div>
      )}
      <div
        className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="font-mono text-sm text-cyan-glow tracking-widest uppercase">
          {number}
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-cyan-glow/60 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
